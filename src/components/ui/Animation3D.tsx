import * as THREE from 'three';
import { useEffect, useRef } from 'react';

const Animation3D = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const currentMount = mountRef.current;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(75, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000);
    camera.position.z = 50;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    currentMount.appendChild(renderer.domElement);

    // Group for rotation
    const group = new THREE.Group();
    scene.add(group);

    // Geometries
    const geometries = [
      new THREE.BoxGeometry(4, 4, 4),
      new THREE.SphereGeometry(3, 32, 32),
      new THREE.ConeGeometry(3, 5, 32),
      new THREE.TorusGeometry(3, 1, 16, 100),
      new THREE.IcosahedronGeometry(3),
    ];

    const materials = [
      new THREE.MeshStandardMaterial({ color: 0xffffff, metalness: 0.7, roughness: 0.2 }),
      new THREE.MeshStandardMaterial({ color: 0x007bff, metalness: 0.5, roughness: 0.5 }),
      new THREE.MeshStandardMaterial({ color: 0x28a745, metalness: 0.5, roughness: 0.5 }),
      new THREE.MeshStandardMaterial({ color: 0xffc107, metalness: 0.5, roughness: 0.5 }),
      new THREE.MeshStandardMaterial({ color: 0xdc3545, metalness: 0.5, roughness: 0.5 }),
    ];

    for (let i = 0; i < 50; i++) {
      const geometry = geometries[Math.floor(Math.random() * geometries.length)];
      const material = materials[Math.floor(Math.random() * materials.length)];
      const shape = new THREE.Mesh(geometry, material);

      shape.position.x = (Math.random() - 0.5) * 100;
      shape.position.y = (Math.random() - 0.5) * 100;
      shape.position.z = (Math.random() - 0.5) * 100;

      shape.rotation.x = Math.random() * 2 * Math.PI;
      shape.rotation.y = Math.random() * 2 * Math.PI;
      shape.rotation.z = Math.random() * 2 * Math.PI;
      
      const scale = Math.random() * 0.5 + 0.5;
      shape.scale.set(scale, scale, scale);

      group.add(shape);
    }

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 10, 7.5);
    scene.add(directionalLight);

    // Animation
    const clock = new THREE.Clock();
    const animate = () => {
      requestAnimationFrame(animate);
      
      const elapsedTime = clock.getElapsedTime();
      group.rotation.y = elapsedTime * 0.1;
      group.rotation.x = elapsedTime * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (currentMount) {
        camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (currentMount) {
        currentMount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }} />;
};

export default Animation3D;