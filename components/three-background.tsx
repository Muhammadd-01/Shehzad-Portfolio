"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

export function ThreeBackground() {
  const containerRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<THREE.Scene | null>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const particlesRef = useRef<THREE.Points | null>(null)
  const mouseRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup with light background
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0xf8fafb)
    sceneRef.current = scene

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000,
    )
    camera.position.z = 30

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
    renderer.setPixelRatio(window.devicePixelRatio)
    containerRef.current.appendChild(renderer.domElement)
    rendererRef.current = renderer

    // Create particles with light theme colors
    const particlesGeometry = new THREE.BufferGeometry()
    const particleCount = 1500
    const posArray = new Float32Array(particleCount * 3)

    for (let i = 0; i < particleCount * 3; i += 3) {
      posArray[i] = (Math.random() - 0.5) * 100
      posArray[i + 1] = (Math.random() - 0.5) * 100
      posArray[i + 2] = (Math.random() - 0.5) * 100
    }

    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(posArray, 3))

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.3,
      color: 0x5096ff,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.3,
    })

    const particles = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(particles)
    particlesRef.current = particles

    // Add some floating spheres with reduced opacity
    const sphereGeometry = new THREE.IcosahedronGeometry(2, 4)
    const sphereMaterial = new THREE.MeshPhongMaterial({
      color: 0x5096ff,
      wireframe: true,
      emissive: 0x5096ff,
      emissiveIntensity: 0.15,
      transparent: true,
      opacity: 0.4,
    })

    const sphere1 = new THREE.Mesh(sphereGeometry, sphereMaterial)
    sphere1.position.set(-15, 10, -20)
    scene.add(sphere1)

    const sphere2 = new THREE.Mesh(sphereGeometry, sphereMaterial.clone())
    sphere2.position.set(15, -10, -15)
    sphere2.scale.set(0.7, 0.7, 0.7)
    scene.add(sphere2)

    // Lighting
    const light = new THREE.PointLight(0x5096ff, 0.5, 100)
    light.position.set(10, 10, 20)
    scene.add(light)

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4)
    scene.add(ambientLight)

    // Mouse tracking
    const onMouseMove = (event: MouseEvent) => {
      mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1
      mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1
    }

    window.addEventListener("mousemove", onMouseMove)

    // Animation loop
    let animationId: number
    const animate = () => {
      animationId = requestAnimationFrame(animate)

      if (particlesRef.current) {
        particlesRef.current.rotation.x += 0.0001
        particlesRef.current.rotation.y += 0.0002
      }

      camera.position.x = mouseRef.current.x * 2
      camera.position.y = mouseRef.current.y * 2

      scene.children.forEach((child) => {
        if (child instanceof THREE.Mesh && child !== particles) {
          child.rotation.x += 0.001
          child.rotation.y += 0.002
        }
      })

      renderer.render(scene, camera)
    }

    animate()

    const handleResize = () => {
      if (!containerRef.current) return

      const width = containerRef.current.clientWidth
      const height = containerRef.current.clientHeight

      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("mousemove", onMouseMove)
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationId)
      containerRef.current?.removeChild(renderer.domElement)
    }
  }, [])

  return <div ref={containerRef} className="fixed inset-0 -z-10" />
}


