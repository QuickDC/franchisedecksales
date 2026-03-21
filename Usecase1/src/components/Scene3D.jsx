import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Text3D, Center, Environment } from '@react-three/drei'
import * as THREE from 'three'

// Floating clothes/hangers
function FloatingClothes() {
  const groupRef = useRef()

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    groupRef.current.rotation.y = Math.sin(t * 0.3) * 0.2
    groupRef.current.position.y = Math.sin(t * 0.5) * 0.3
  })

  const clothColors = ['#667eea', '#764ba2', '#f093fb', '#38ef7d']

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <group ref={groupRef} position={[-3, 1, -2]}>
        {clothColors.map((color, i) => (
          <mesh key={i} position={[i * 0.8 - 1, 0, 0]} rotation={[0.2, i * 0.5, 0]}>
            <boxGeometry args={[0.4, 0.5, 0.1]} />
            <meshStandardMaterial color={color} roughness={0.8} />
          </mesh>
        ))}
        {/* Hanger bar */}
        <mesh position={[0, 0.4, 0]}>
          <cylinderGeometry args={[0.02, 0.02, 2.5, 8]} rotation={[0, 0, Math.PI / 2]} />
          <meshStandardMaterial color="#888" metalness={0.8} />
        </mesh>
      </group>
    </Float>
  )
}

// Delivery truck
function DeliveryTruck() {
  const truckRef = useRef()

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    truckRef.current.position.x = Math.sin(t * 0.5) * 2 - 3
    truckRef.current.rotation.y = Math.sin(t * 0.5) > 0 ? 0.1 : -0.1
  })

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <group ref={truckRef} position={[-3, -1, -3]} scale={0.4}>
        {/* Truck body */}
        <mesh position={[0, 0.5, 0]}>
          <boxGeometry args={[3, 1.5, 1.2]} />
          <meshStandardMaterial color="#f5576c" />
        </mesh>
        {/* Cabin */}
        <mesh position={[1.8, 0.4, 0]}>
          <boxGeometry args={[1, 1, 1.2]} />
          <meshStandardMaterial color="#667eea" />
        </mesh>
        {/* Wheels */}
        {[-0.8, 1, 2.2].map((x, i) => (
          <mesh key={i} position={[x, -0.3, 0.7]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.25, 0.25, 0.2, 16]} />
            <meshStandardMaterial color="#333" />
          </mesh>
        ))}
        {/* Logo */}
        <mesh position={[0, 0.6, 0.65]}>
          <planeGeometry args={[0.6, 0.4]} />
          <meshStandardMaterial color="#fff" />
        </mesh>
      </group>
    </Float>
  )
}

// Plant/Factory building
function PlantBuilding() {
  const buildingRef = useRef()

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    buildingRef.current.rotation.y = Math.sin(t * 0.2) * 0.1
  })

  return (
    <Float speed={1} rotationIntensity={0.1} floatIntensity={0.3}>
      <group ref={buildingRef} position={[3, -0.5, -3]} scale={0.5}>
        {/* Main building */}
        <mesh position={[0, 1, 0]}>
          <boxGeometry args={[2, 2, 2]} />
          <meshStandardMaterial color="#38ef7d" />
        </mesh>
        {/* Roof */}
        <mesh position={[0, 2.3, 0]} rotation={[0, Math.PI / 4, 0]}>
          <coneGeometry args={[1.6, 1, 4]} />
          <meshStandardMaterial color="#11998e" />
        </mesh>
        {/* Windows */}
        {[[-0.5, 1.2, 1.01], [0.5, 1.2, 1.01], [0, 1.2, 1.01]].map((pos, i) => (
          <mesh key={i} position={pos}>
            <planeGeometry args={[0.4, 0.4]} />
            <meshStandardMaterial color="#fff" emissive="#fff" emissiveIntensity={0.3} />
          </mesh>
        ))}
      </group>
    </Float>
  )
}

// Floating particles
function FloatingParticles() {
  const particles = useMemo(() => {
    const arr = []
    for (let i = 0; i < 30; i++) {
      arr.push({
        position: [
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 6,
          (Math.random() - 0.5) * 5 - 2
        ],
        scale: Math.random() * 0.1 + 0.02,
        color: ['#667eea', '#764ba2', '#f093fb', '#38ef7d', '#fbbf24'][Math.floor(Math.random() * 5)]
      })
    }
    return arr
  }, [])

  const ref = useRef()

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    ref.current.rotation.y = t * 0.05
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.length}
          array={new Float32Array(particles.flatMap(p => p.position))}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.1} color="#667eea" transparent opacity={0.6} />
    </points>
  )
}

// Main 3D Scene
function Scene3D({ slide = 0 }) {
  // Different elements for different slides
  const showClothes = slide === 0 || slide === 2
  const showTruck = slide === 2
  const showBuilding = slide === 2

  return (
    <div className="scene-3d">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#764ba2" />

        {showClothes && <FloatingClothes />}
        {showTruck && <DeliveryTruck />}
        {showBuilding && <PlantBuilding />}
        <FloatingParticles />

        <Environment preset="city" />
      </Canvas>
    </div>
  )
}

export default Scene3D
