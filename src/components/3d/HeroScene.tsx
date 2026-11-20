import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'

interface HeroSceneProps {
  className?: string
}

export const HeroScene: React.FC<HeroSceneProps> = ({ className = '' }) => {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = mountRef.current
    if (!container) return

    // Scene, Camera, Renderer
    const scene = new THREE.Scene()
    scene.fog = new THREE.FogExp2(0x050508, 0.04)

    const camera = new THREE.PerspectiveCamera(
      55,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    )
    camera.position.z = 18

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    })
    renderer.setSize(container.clientWidth, container.clientHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.2
    container.appendChild(renderer.domElement)

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x1a1a24, 1.5)
    scene.add(ambientLight)

    const redLight = new THREE.PointLight(0xff3344, 4, 30)
    redLight.position.set(6, 4, 8)
    scene.add(redLight)

    const orangeLight = new THREE.PointLight(0xff7700, 3.5, 30)
    orangeLight.position.set(-6, -4, 6)
    scene.add(orangeLight)

    // 1. Central Geometric Cyber Core: Dual Nested Wireframes
    const coreGroup = new THREE.Group()

    // Outer Icosahedron Wireframe
    const outerGeo = new THREE.IcosahedronGeometry(4.2, 1)
    const outerMat = new THREE.MeshStandardMaterial({
      color: 0xff3b30,
      wireframe: true,
      roughness: 0.2,
      metalness: 0.9,
      emissive: 0x4a0e0e,
      emissiveIntensity: 0.4
    })
    const outerMesh = new THREE.Mesh(outerGeo, outerMat)
    coreGroup.add(outerMesh)

    // Inner Dodecahedron Solid Glassy Core
    const innerGeo = new THREE.DodecahedronGeometry(2.4, 0)
    const innerMat = new THREE.MeshStandardMaterial({
      color: 0x11111a,
      roughness: 0.1,
      metalness: 0.8,
      wireframe: false
    })
    const innerMesh = new THREE.Mesh(innerGeo, innerMat)
    coreGroup.add(innerMesh)

    // Core Glowing Points at vertices
    const pointsGeo = new THREE.IcosahedronGeometry(4.2, 1)
    const pointsMat = new THREE.PointsMaterial({
      color: 0xffaa33,
      size: 0.16,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending
    })
    const corePoints = new THREE.Points(pointsGeo, pointsMat)
    coreGroup.add(corePoints)

    // Surrounding Orbital Torus Rings
    const ringGeo1 = new THREE.TorusGeometry(6.2, 0.04, 16, 100)
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0xff3344,
      transparent: true,
      opacity: 0.4,
      blending: THREE.AdditiveBlending
    })
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1)
    ring1.rotation.x = Math.PI / 3
    coreGroup.add(ring1)

    const ringGeo2 = new THREE.TorusGeometry(7.0, 0.03, 16, 100)
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0xff8800,
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending
    })
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2)
    ring2.rotation.y = Math.PI / 4
    coreGroup.add(ring2)

    scene.add(coreGroup)

    // 2. Rising Ember Particle Field
    const particleCount = 450
    const particleGeo = new THREE.BufferGeometry()
    const positions = new Float32Array(particleCount * 3)
    const velocities = new Float32Array(particleCount * 3)
    const particleColors = new Float32Array(particleCount * 3)

    const colorRed = new THREE.Color(0xff3344)
    const colorOrange = new THREE.Color(0xff8800)
    const colorWhite = new THREE.Color(0xffffff)

    for (let i = 0; i < particleCount; i++) {
      const idx = i * 3
      positions[idx] = (Math.random() - 0.5) * 35
      positions[idx + 1] = (Math.random() - 0.5) * 28
      positions[idx + 2] = (Math.random() - 0.5) * 25

      velocities[idx] = (Math.random() - 0.5) * 0.015
      velocities[idx + 1] = Math.random() * 0.02 + 0.008 // Upward drift
      velocities[idx + 2] = (Math.random() - 0.5) * 0.015

      const pick = Math.random()
      const c = pick > 0.6 ? colorRed : pick > 0.25 ? colorOrange : colorWhite
      particleColors[idx] = c.r
      particleColors[idx + 1] = c.g
      particleColors[idx + 2] = c.b
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    particleGeo.setAttribute('color', new THREE.BufferAttribute(particleColors, 3))

    const particleMat = new THREE.PointsMaterial({
      size: 0.12,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending
    })
    const particleField = new THREE.Points(particleGeo, particleMat)
    scene.add(particleField)

    // Mouse Tracking & Parallax
    let targetMouseX = 0
    let targetMouseY = 0
    let mouseX = 0
    let mouseY = 0

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      targetMouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 2
      targetMouseY = -((e.clientY - rect.top) / rect.height - 0.5) * 2
    }

    window.addEventListener('mousemove', handleMouseMove)

    // Handle Resize
    const handleResize = () => {
      if (!container) return
      camera.aspect = container.clientWidth / container.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(container.clientWidth, container.clientHeight)
    }

    window.addEventListener('resize', handleResize)

    // Animation Loop
    let animationFrameId: number
    let clock = new THREE.Clock()

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate)

      const elapsedTime = clock.getElapsedTime()

      // Smooth lerp for mouse parallax
      mouseX += (targetMouseX - mouseX) * 0.05
      mouseY += (targetMouseY - mouseY) * 0.05

      // Core rotation
      coreGroup.rotation.y = elapsedTime * 0.18 + mouseX * 0.5
      coreGroup.rotation.x = Math.sin(elapsedTime * 0.15) * 0.2 + mouseY * 0.3
      coreGroup.position.x = mouseX * 1.5
      coreGroup.position.y = mouseY * 1.2

      ring1.rotation.z = elapsedTime * 0.25
      ring2.rotation.x = elapsedTime * 0.2

      // Orbit point lights
      redLight.position.x = Math.sin(elapsedTime * 0.6) * 10
      redLight.position.z = Math.cos(elapsedTime * 0.6) * 10
      orangeLight.position.x = Math.cos(elapsedTime * 0.5) * 9
      orangeLight.position.z = Math.sin(elapsedTime * 0.5) * 9

      // Animate rising ember particles
      const posAttr = particleGeo.attributes.position as THREE.BufferAttribute
      const posArray = posAttr.array as Float32Array

      for (let i = 0; i < particleCount; i++) {
        const idx = i * 3
        posArray[idx] += velocities[idx]
        posArray[idx + 1] += velocities[idx + 1]
        posArray[idx + 2] += velocities[idx + 2]

        // Reset if drifted beyond top
        if (posArray[idx + 1] > 14) {
          posArray[idx + 1] = -14
          posArray[idx] = (Math.random() - 0.5) * 35
        }
      }
      posAttr.needsUpdate = true

      renderer.render(scene, camera)
    }

    animate()

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationFrameId)

      outerGeo.dispose()
      outerMat.dispose()
      innerGeo.dispose()
      innerMat.dispose()
      pointsGeo.dispose()
      pointsMat.dispose()
      ringGeo1.dispose()
      ringMat1.dispose()
      ringGeo2.dispose()
      ringMat2.dispose()
      particleGeo.dispose()
      particleMat.dispose()

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
      renderer.dispose()
    }
  }, [])

  return (
    <div
      ref={mountRef}
      className={`absolute inset-0 pointer-events-none overflow-hidden z-0 ${className}`}
      aria-hidden="true"
    />
  )
}
