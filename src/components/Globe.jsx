import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

function Sphere() {
  const meshRef = useRef();

  useFrame(() => {
    meshRef.current.rotation.y += 0.003;
  });

  return (
    <mesh
      ref={meshRef}
      rotation={[0.4, 0.2, 0]}
    >
      <sphereGeometry
        args={[2, 64, 64]}
      />

      <meshStandardMaterial
        color="#ff003c"
        wireframe
      />
    </mesh>
  );
}

const Globe = () => {
  return (
    <div
      className="
      absolute
      right-0
      top-0

      w-[600px]
      h-[600px]

      opacity-80
      "
    >
      <Canvas>
        <ambientLight intensity={0.5} />

        <pointLight
          position={[10, 10, 10]}
          intensity={2}
          color="#ff003c"
        />

        <Sphere />

        <OrbitControls
          enableZoom={false}
          autoRotate
          autoRotateSpeed={1}
        />
      </Canvas>
    </div>
  );
};

export default Globe;