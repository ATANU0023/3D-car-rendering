import React from 'react'
import{useGLTF} from '@react-three/drei'




const Model = () => {

    const car = useGLTF('./cyberpunk_car/scene.gltf')


  return (
    <mesh>
        <hemisphereLight intensity={0.15} groundColor="black"/>
        <spotLight 
        position={[-20, 50, 10]} 
        angle={0.12} 
        penumbra={1} 
        intensity={1} 
        castShadow 
        shadow-mapSize={1024}
        />

        <pointLight intensity={1}/>
        <primitive 
        object={car.scene} 
        scale={0.5} 
        position={[0,-3.25,-1.5]}/>
    </mesh>
  )
}

export default Model
