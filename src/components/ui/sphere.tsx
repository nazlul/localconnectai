'use client'

import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useRef, useMemo, useState, useEffect } from 'react'
import * as THREE from 'three'
import { animated, useSpring } from '@react-spring/three'

interface Dummy {
  depth: number
  similarity: number
  category: number
  isUser?: boolean
}

const CATEGORY_COUNT = 10

function range(n: number) {
  return Array.from({ length: n }, (_, i) => i)
}

function random(min: number, max: number) {
  return Math.random() * (max - min) + min
}

function randomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const BACKGROUND_DATA: Dummy[] = range(1000).map(() => ({
  depth: random(1, 5),
  similarity: random(0, 100),
  category: randomInt(0, CATEGORY_COUNT - 1),
}))

const USER_DATA: Dummy[] = range(5).map(() => ({
  depth: random(1, 5),
  similarity: random(0, 100),
  category: randomInt(0, CATEGORY_COUNT - 1),
  isUser: true,
}))

const ALL_DATA = [...BACKGROUND_DATA, ...USER_DATA]

function Stars() {
  const [positions, sizes, colors, baseSizes] = useMemo(() => {
    const posArray: number[] = []
    const sizeArray: number[] = []
    const colorArray: number[] = []
    const baseSizeArray: number[] = []

    ALL_DATA.forEach((item) => {
      const categoryIndex = item.category
      const categoryWidth = (2 * Math.PI) / CATEGORY_COUNT
      const overlap = 0

      let phiMin = categoryIndex * categoryWidth - overlap
      let phiMax = (categoryIndex + 1) * categoryWidth + overlap

      phiMin = (phiMin + 2 * Math.PI) % (2 * Math.PI)
      phiMax = (phiMax + 2 * Math.PI) % (2 * Math.PI)

      let phi: number

      if (phiMin < phiMax) {
        phi = Math.random() * (phiMax - phiMin) + phiMin
      } else {
        const range1 = 2 * Math.PI - phiMin
        const range2 = phiMax
        const totalRange = range1 + range2

        const rand = Math.random() * totalRange
        phi = rand < range1 ? phiMin + rand : rand - range1
      }

      phi = (phi + 2 * Math.PI) % (2 * Math.PI)
      const theta = Math.acos(Math.random() * 2 - 1)
      const radius = typeof window !== 'undefined' && window.innerWidth < 640 ? 1.8 : 2.5

      const x = radius * Math.sin(theta) * Math.cos(phi)
      const y = radius * Math.sin(theta) * Math.sin(phi)
      const z = radius * Math.cos(theta)

      const rotatedX = x
      const rotatedY = z
      const rotatedZ = -y

      posArray.push(rotatedX, rotatedY, rotatedZ)

      const baseSize = item.isUser ? 0.1 : 0.03
      baseSizeArray.push(baseSize)
      sizeArray.push(baseSize)

      if (item.isUser) {
        colorArray.push(0.3, 0.5, 1.0)
      } else {
        colorArray.push(1.0, 1.0, 1.0)
      }

    })

    return [
      new Float32Array(posArray),
      new Float32Array(sizeArray),
      new Float32Array(colorArray),
      new Float32Array(baseSizeArray),
    ]
  }, [])

  const geometry = useMemo(() => {
    const geom = new THREE.BufferGeometry()
    geom.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geom.setAttribute('size', new THREE.BufferAttribute(sizes, 1))
    geom.setAttribute('color', new THREE.BufferAttribute(colors, 3))
    geom.setAttribute('baseSize', new THREE.BufferAttribute(baseSizes, 1))
    return geom
  }, [positions, sizes, colors, baseSizes])

  const pointsRef = useRef<THREE.Points>(null)
  const groupRef = useRef<THREE.Group>(null)

  useFrame(({ clock }) => {
    if (pointsRef.current) {
      const time = clock.getElapsedTime()
      const sizesAttr = pointsRef.current.geometry.getAttribute('size') as THREE.BufferAttribute
      const baseSizesAttr = pointsRef.current.geometry.getAttribute('baseSize') as THREE.BufferAttribute
      const sizeArray = sizesAttr.array as Float32Array
      const baseSizeArray = baseSizesAttr.array as Float32Array
      for (let i = 0; i < sizeArray.length; i++) {
        const osc = 0.02 * Math.sin(time + i)
        sizeArray[i] = baseSizeArray[i] + osc
      }
      sizesAttr.needsUpdate = true
    }
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.004
    }
  })

  const vertexShader = `
    attribute float size;
    attribute vec3 color;
    varying vec3 vColor;

    void main() {
      vColor = color;
      vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
      gl_PointSize = size * (300.0 / -mvPosition.z);
      gl_Position = projectionMatrix * mvPosition;
    }
  `

  const fragmentShader = `
    varying vec3 vColor;

    void main() {
      float d = length(gl_PointCoord - vec2(0.5));
      float a = smoothstep(0.5, 0.0, d);
      gl_FragColor = vec4(vColor, a);
    }
  `

  const spring = useSpring({
    from: { positionY: 10, rotationY: 0, scale: 0.1 },
    to: { positionY: 0, rotationY: Math.PI, scale: 1 },
    config: { mass: 1, tension: 20, friction: 5 },
    immediate: false,
  })

  return (
    <animated.group
      ref={groupRef}
      position-y={spring.positionY}
      rotation-y={spring.rotationY}
      scale={spring.scale}
    >
      <points ref={pointsRef} geometry={geometry}>
        <shaderMaterial
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          transparent
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </animated.group>
  )
}

function CameraController({ targetZoom }: { targetZoom: number }) {
  const { camera } = useThree()
  const zoomRef = useRef(camera.position.z)

  useFrame(() => {
    zoomRef.current += (targetZoom - zoomRef.current) * 0.05
    camera.position.z = zoomRef.current * 1.1
    camera.updateProjectionMatrix()
  })
  return null
}

export default function Sphere() {
  const [scrollY, setScrollY] = useState(0)
  const maxZoom = 15
  const minZoom = 3
  const baseZoom = 6

  useEffect(() => {
    function onScroll() {
      setScrollY(window.scrollY)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const targetZoom = Math.min(
    maxZoom,
    Math.max(minZoom, baseZoom - (scrollY / 50) * (maxZoom - minZoom))
  )

  return (
    <>
      <div className="absolute inset-0 w-full h-screen z-0 flex items-center justify-center">
        <Canvas camera={{ position: [0, 0, baseZoom], fov: 60 }}>
          <ambientLight intensity={0.5} />
          <Stars />
          <CameraController targetZoom={targetZoom} />
        </Canvas>
      </div>
    </>
  )
}
