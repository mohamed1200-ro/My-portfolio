import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, Float, MeshDistortMaterial, Sphere, Torus } from '@react-three/drei'
import { useRef } from 'react'

function FloatingObjects() {
  const torusRef = useRef(null)
  const sphereRef = useRef(null)

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (torusRef.current) {
      torusRef.current.rotation.x = t * 0.2
      torusRef.current.rotation.y = t * 0.35
    }
    if (sphereRef.current) {
      sphereRef.current.position.y = Math.sin(t) * 0.2
      sphereRef.current.rotation.y = t * 0.3
    }
  })

  return (
    <>
      <Float speed={1.3} rotationIntensity={1.2} floatIntensity={1.8}>
        <Torus ref={torusRef} args={[1.3, 0.28, 24, 64]} position={[-1.8, 0.4, -0.5]}>
          <meshStandardMaterial color="#7c3aed" metalness={0.7} roughness={0.2} />
        </Torus>
      </Float>
      <Float speed={1.8} rotationIntensity={0.8} floatIntensity={1.5}>
        <Sphere ref={sphereRef} args={[0.9, 64, 64]} position={[1.6, -0.3, 0.2]}>
          <MeshDistortMaterial
            color="#22d3ee"
            attach="material"
            distort={0.32}
            speed={1.7}
            roughness={0.15}
          />
        </Sphere>
      </Float>
    </>
  )
}

export default function HeroScene() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 48 }}>
      <ambientLight intensity={0.45} />
      <directionalLight position={[5, 4, 3]} intensity={1.1} />
      <pointLight position={[-4, -2, 2]} intensity={0.8} color="#22d3ee" />
      <FloatingObjects />
      <Environment preset="city" />
    </Canvas>
  )
}
