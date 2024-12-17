import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from '../Loader';
import { extend } from "@react-three/fiber";

extend({
  OrbitControls,Preload,useGLTF,
});

const Computers = ( isMobile ) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  console.log(computer);
  return (
    <mesh>
      <hemisphereLight intensity={3} 
      groundColor="white" />
      <pointLight intensity={10} />
      <spotLight position={[-20,50,10]}
        castShadow
        intensity={1}
        shadow-mapSize={1024} />
      <primitive 
      object={computer.scene}
      scale={isMobile ? 0.6 : 0.65}
      position={isMobile ? [0,-3,-1.6] : [0, -2.9, -1.5]} 
      rotation ={[-0.01,-0.2,-0.1]}
      />
    </mesh>
    
  )
}

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {

    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia('(max-width:500px)');
    
    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);


    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) =>{
      setIsMobile(event.matches);
    }

   // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener('change',
      handleMediaQueryChange);
    
    
     // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener('change',
      handleMediaQueryChange);
    }
  },[])

  return(
    <Canvas
    frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
        enableZoom={false} 
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas