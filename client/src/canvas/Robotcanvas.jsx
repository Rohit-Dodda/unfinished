import React, { Suspense, useRef, useMemo, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import {
  EffectComposer,
  Bloom,
  SelectiveBloom,
} from "@react-three/postprocessing";
import CanvasLoader from "../home-components/CanvasLoader";
import * as THREE from "three";

const Robot = (props) => {
  const robot = useGLTF("./sci/scene.gltf");
  const planeRef = useRef();
  const meshRef = useRef(null);
  const [positionY, setPositionY] = useState(0);

  useFrame((state) => {
    planeRef.current.rotation.y = state.clock.elapsedTime * 0.2;
  });

  useFrame(({ clock }) => {
    const y = Math.sin(clock.getElapsedTime()) * 0.1;
    setPositionY(y);
  });

  return (
    <group>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <ambientLight isObject3D={true} intensity={0.2} />
      <spotLight
        position={[0, 20, 0]}
        angle={Math.PI / 4}
        penumbra={0.5}
        intensity={2.5}
        castShadow
        shadow-mapSize={[4096, 4096]}
        shadow-camera-top={20}
        shadow-camera-bottom={-20}
        shadow-camera-left={-20}
        shadow-camera-right={20}
      />
      <pointLight color="red" intensity={3} position={[10, 5, 0]} />
      <pointLight color="red" intensity={3} position={[-10, 10, 10]} />
      <pointLight color="red" intensity={3} position={[0, 15, 0]} />
      <pointLight color="black" intensity={3} position={[0, 20, 0]} />
      <pointLight color="black" intensity={1} position={[0, 35, 0]} />
      <pointLight color="black" intensity={1} position={[0, 40, 0]} />
      <pointLight color="red" intensity={1} position={[0, 45, 0]} />
      <pointLight color="red" intensity={1} position={[0, 50, 0]} />
      <pointLight color="red" intensity={4} position={[0, 55, 0]} />
      <pointLight color="red" intensity={1} position={[0, 60, 0]} />
      <pointLight color="red" intensity={1} position={[-10, 65, 0]} />
      <pointLight color="red" intensity={1} position={[-20, 65, 0]} />
      <pointLight color="red" intensity={1} position={[-30, 65, 0]} />
      <pointLight color="red" intensity={1} position={[-40, 65, 0]} />
      <pointLight color="red" intensity={1} position={[0, 75, 0]} />
      <pointLight color="red" intensity={1} position={[0, 45, 0]} />

      <mesh
        ref={planeRef}
        receiveShadow
        position={[10, 1.5, 10]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <planeBufferGeometry args={[20, 20]} />
        <shadowMaterial
  color="red"
  opacity={0.8}
  transparent={true}
  depthWrite={true}
  depthTest={false}
  side={THREE.DoubleSide}
  toneMapped={false}
  toneMappingExposure={1}
  toneMappingWhitePoint={1}
/>
      </mesh>

      <mesh castShadow ref={meshRef} position={[0, positionY + 0.1, 0]}>
        <primitive
          object={robot.scene}
          scale={2.2}
          position-y={-1.5}
          rotation-y={0}
        />
      </mesh>
      <Aura />
      <Aura2 /> 
    </group>
  );
};

const Aura2 = () => {
  const auraRef = useRef(null);
  const clock = useRef(new THREE.Clock()).current;
  const meshRef = useRef(null);
  const position = useRef(new THREE.Vector3(0, -0.6, 1)).current;
  const direction = useRef(1);

  const shaderMaterial = useMemo(() => {
    const vertexShader = `
      varying vec2 vUv;
      uniform float time;

      void main() {
        vUv = uv;
        vec4 modelPosition = modelMatrix * vec4(position, 1.0);
        modelPosition.y += sin(modelPosition.x * 10.0 + time) * 0.1;
        modelPosition.y += cos(modelPosition.z * 10.0 + time) * 0.1;
        gl_Position = projectionMatrix * viewMatrix * modelPosition;
      }
    `;

    const fragmentShader = `
    varying vec2 vUv;
    uniform float time;
    
    // Add noise function
    float noise(vec2 uv) {
      return fract(sin(dot(uv, vec2(12.9898, 78.233))) * 43758.5453);
    }
  
    void main() {
      vec3 color1 = vec3(10.0, 0.0, 0.0); // Start color (red)
      vec3 color2 = vec3(1.0, 1.0, 1.0); // End color (white)
      
      // Calculate gradient color
      vec3 gradientColor = mix(color1, color2, vUv.y);
      
      // Add noise to color
      gradientColor += vec3(noise(vUv * 100.0 + time * 0.5)) * 0.05;
      
      gl_FragColor = vec4(gradientColor, 0.5);
    }
  `;

    return new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
      },
      vertexShader,
      fragmentShader,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending,
      transparent: true,
      specular: new THREE.Color("white"), // Add specular property
      shininess: 100, // Add shininess property
    });
  }, []);

  useFrame(() => {
    shaderMaterial.uniforms.time.value = clock.getElapsedTime();

    // Animate the position of the aura
    if (position.z >= 1.5) {
      direction.current = -1;
    } else if (position.z <= -1.5) {
      direction.current = 1;
    }
    position.z += direction.current * 0.01;
    meshRef.current.position.copy(position);
  });

  return (
    <mesh ref={auraRef && meshRef} position={position}>
      <sphereGeometry args={[2.6, 32, 32]} /> // Adjust the radius as needed
      <shaderMaterial attach="material" {...shaderMaterial} />
    </mesh>
  );
};



const Aura = () => {
  const auraRef = useRef(null);
  const clock = useRef(new THREE.Clock()).current;
  const meshRef = useRef(null);
  const position = useRef(new THREE.Vector3(0, -0.6, 1)).current;
  const direction = useRef(1);

  const shaderMaterial = useMemo(() => {
    const vertexShader = `
      varying vec2 vUv;
      uniform float time;

      void main() {
        vUv = uv;
        vec4 modelPosition = modelMatrix * vec4(position, 1.0);
        modelPosition.y += sin(modelPosition.x * 10.0 + time) * 0.1;
        modelPosition.y += cos(modelPosition.z * 10.0 + time) * 0.1;
        gl_Position = projectionMatrix * viewMatrix * modelPosition;
      }
    `;

    const fragmentShader = `
    varying vec2 vUv;
    uniform float time;
    
    // Add noise function
    float noise(vec2 uv) {
      return fract(sin(dot(uv, vec2(12.9898, 78.233))) * 43758.5453);
    }
  
    void main() {
      vec3 color1 = vec3(10.0, 0.0, 0.0); // Start color (red)
      vec3 color2 = vec3(1.0, 1.0, 1.0); // End color (white)
      
      // Calculate gradient color
      vec3 gradientColor = mix(color1, color2, vUv.y);
      
      // Add noise to color
      gradientColor += vec3(noise(vUv * 100.0 + time * 0.5)) * 0.05;
      
      gl_FragColor = vec4(gradientColor, 0.5);
    }
  `;

    return new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
      },
      vertexShader,
      fragmentShader,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending,
      transparent: true,
      specular: new THREE.Color("white"), // Add specular property
      shininess: 100, // Add shininess property
    });
  }, []);


  return (
    <mesh ref={auraRef && meshRef} position={position}>
      <ringGeometry args={[2.5, 2.7, 10, 1]} />
      <shaderMaterial attach="material" {...shaderMaterial} />
    </mesh>
  );
};


const RobotCanvas = () => {
  return (
    <Canvas
      antialias
      colorManagement
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
      style={{ height: "100%", width: "100%" }}
      pixelRatio={window.devicePixelRatio || 1}
      onCreated={({ gl }) => {
        gl.toneMappingExposure = 3;
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableRotate={true}
          dampingFactor={1.4}
          enableDamping={true}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Robot />
        <pointLight color="red" intensity={3} position={[-3, 0, -3]} />
        <pointLight color="red" intensity={3} position={[3, 0, -3]} />

        <directionalLight color="red" intensity={1} position={[-10, 20, 10]} />
        <directionalLight
          color="red"
          intensity={0.5}
          position={[10, -20, -10]}
        />
        <Preload all />
        <EffectComposer>
          <Bloom luminanceThreshold={3} luminanceSmoothing={1} height={300} />
          <SelectiveBloom />
        </EffectComposer>
      </Suspense>
    </Canvas>
  );
};

export default RobotCanvas;
