import { useRef, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

function Particles({ count = 300 }) {
  const mesh = useRef()
  const light = useRef()
  const { pointer } = useThree()

  const [positions, velocities] = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const vel = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10
      vel[i * 3] = (Math.random() - 0.5) * 0.003
      vel[i * 3 + 1] = (Math.random() - 0.5) * 0.003
      vel[i * 3 + 2] = (Math.random() - 0.5) * 0.002
    }
    return [pos, vel]
  }, [count])

  const colors = useMemo(() => {
    const c = new Float32Array(count * 3)
    const palette = [
      [0, 0.71, 1],
      [0.66, 0.33, 0.97],
      [0.02, 0.84, 0.63],
    ]
    for (let i = 0; i < count; i++) {
      const color = palette[Math.floor(Math.random() * palette.length)]
      c[i * 3] = color[0]
      c[i * 3 + 1] = color[1]
      c[i * 3 + 2] = color[2]
    }
    return c
  }, [count])

  useFrame(() => {
    if (!mesh.current) return
    const posAttr = mesh.current.geometry.attributes.position
    const arr = posAttr.array

    for (let i = 0; i < count; i++) {
      arr[i * 3] += velocities[i * 3]
      arr[i * 3 + 1] += velocities[i * 3 + 1]
      arr[i * 3 + 2] += velocities[i * 3 + 2]

      for (let j = 0; j < 3; j++) {
        const idx = i * 3 + j
        const limit = j === 2 ? 5 : 10
        if (Math.abs(arr[idx]) > limit) velocities[idx] *= -1
      }
    }
    posAttr.needsUpdate = true

    if (light.current) {
      light.current.position.x = pointer.x * 5
      light.current.position.y = pointer.y * 5
    }
  })

  return (
    <group>
      <points ref={mesh}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={count}
            array={positions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={count}
            array={colors}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.06}
          vertexColors
          transparent
          opacity={0.8}
          sizeAttenuation
          depthWrite={false}
        />
      </points>
      <pointLight ref={light} color="#4285f4" intensity={1.5} distance={15} />
      <ambientLight intensity={0.3} />
    </group>
  )
}

function FloatingGeometry() {
  const groupRef = useRef()

  useFrame(({ clock }) => {
    if (!groupRef.current) return
    const t = clock.getElapsedTime()
    groupRef.current.rotation.y = t * 0.05
    groupRef.current.rotation.x = Math.sin(t * 0.03) * 0.1
  })

  return (
    <group ref={groupRef}>
      {[...Array(5)].map((_, i) => {
        const angle = (i / 5) * Math.PI * 2
        const r = 6 + Math.random() * 2
        return (
          <mesh
            key={i}
            position={[
              Math.cos(angle) * r,
              (Math.random() - 0.5) * 4,
              Math.sin(angle) * r - 5,
            ]}
          >
            <icosahedronGeometry args={[0.15 + Math.random() * 0.15, 0]} />
            <meshStandardMaterial
              color={i % 2 === 0 ? '#4285f4' : '#8b5cf6'}
              emissive={i % 2 === 0 ? '#4285f4' : '#8b5cf6'}
              emissiveIntensity={0.3}
              transparent
              opacity={0.5}
              wireframe
            />
          </mesh>
        )
      })}
    </group>
  )
}

function NeuralLines({ count = 60 }) {
  const linesRef = useRef()

  const lineData = useMemo(() => {
    const points = []
    for (let i = 0; i < count; i++) {
      points.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 16,
          (Math.random() - 0.5) * 16,
          (Math.random() - 0.5) * 8
        )
      )
    }
    return points
  }, [count])

  const linePositions = useMemo(() => {
    const positions = []
    const threshold = 4
    for (let i = 0; i < lineData.length; i++) {
      for (let j = i + 1; j < lineData.length; j++) {
        const dist = lineData[i].distanceTo(lineData[j])
        if (dist < threshold) {
          positions.push(
            lineData[i].x, lineData[i].y, lineData[i].z,
            lineData[j].x, lineData[j].y, lineData[j].z
          )
        }
      }
    }
    return new Float32Array(positions)
  }, [lineData])

  return (
    <lineSegments ref={linesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={linePositions.length / 3}
          array={linePositions}
          itemSize={3}
        />
      </bufferGeometry>
      <lineBasicMaterial
        color="#4285f4"
        transparent
        opacity={0.15}
      />
    </lineSegments>
  )
}

export default function ParticleField() {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: true }}
        style={{ pointerEvents: 'auto' }}
      >
        <Particles />
        <FloatingGeometry />
        <NeuralLines />
      </Canvas>
    </div>
  )
}
