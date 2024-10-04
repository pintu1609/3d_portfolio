import { useEffect } from "react";
import * as THREE from "three";

const Cube = () => {
  useEffect(() => {
    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // Renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Create a cube
    const geometry = new THREE.BoxGeometry();

    // Assigning colors to four sides, and leaving top and bottom faces transparent
    const materials = [
      new THREE.MeshBasicMaterial({ color: 0xff0000 }), // Red (front face)
      new THREE.MeshBasicMaterial({ color: 0x00ff00 }), // Green (back face)
      new THREE.MeshBasicMaterial({ color: 0x0000ff }), // Blue (left face)
      new THREE.MeshBasicMaterial({ color: 0xffff00 }), // Yellow (right face)
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0 }), // Transparent (top face)
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0 }), // Transparent (bottom face)
    ];

    const cube = new THREE.Mesh(geometry, materials);
    scene.add(cube);

    // Animation loop (rotation on Y-axis only)
    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.y += 0.01; // Rotate only along Y-axis
      renderer.render(scene, camera);
    };

    animate();

    // Cleanup on unmount
    return () => {
      document.body.removeChild(renderer.domElement);
    };
  }, []);

  return null;
};

export default Cube;
