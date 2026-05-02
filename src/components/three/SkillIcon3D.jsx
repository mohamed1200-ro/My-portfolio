import { Canvas, useFrame } from '@react-three/fiber'
import { RoundedBox } from '@react-three/drei'
import { useMemo, useRef } from 'react'

const palette = ['#a855f7', '#22d3ee', '#f43f5e', '#8b5cf6', '#10b981']

function Box({ index }) {
  const ref = useRef(null)
  const color = useMemo(() => palette[index % palette.length], [index])

  useFrame((state) => {
    if (!ref.current) return
    const t = state.clock.getElapsedTime()
    ref.current.rotation.x = t * 0.6
    ref.current.rotation.y = t * 0.5
  })

  return (
    <RoundedBox ref={ref} args={[1.2, 1.2, 1.2]} radius={0.15} smoothness={6}>
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.2} />
    </RoundedBox>
  )
}

export default function SkillIcon3D({ index }) {
  return (
    <Canvas camera={{ position: [0, 0, 3.5], fov: 52 }}>
      <ambientLight intensity={0.7} />
      <pointLight position={[2, 3, 4]} intensity={1.2} />
      <Box index={index} />
    </Canvas>
  )
}
