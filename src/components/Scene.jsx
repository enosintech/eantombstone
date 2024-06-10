/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: eb78 (https://sketchfab.com/E.A.Cornell)
License: CC-BY-SA-4.0 (http://creativecommons.org/licenses/by-sa/4.0/)
Source: https://sketchfab.com/3d-models/ulysses-butterfly-1155effb97564974aa0553db3d5eed57
Title: Ulysses Butterfly
*/

import { useRef, useState } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useEffect } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Model = (props) => {

  const tl = useRef(null)
  const group = useRef(null)

  const [ timeScale, setTimeScale ] = useState(0.5);

  const { nodes, materials, animations } = useGLTF('/assets/3dmodel/ulysses_butterfly.glb')
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    const action = actions['fly'].play();
    action.timeScale = timeScale;
  }, [actions, timeScale])

  useGSAP(() => {

    tl.current = gsap.timeline({
        defaults: {
            ease: "none"
        },
        scrollTrigger: {
            trigger: "html",
            start: "top top",
            scrub: true,
            invalidateOnRefresh: true
        }
    })
    .to(group.current.rotation, {
        x: 2,
        y: 2.5,
        z: 2
    })
    .to(group.current.scale, {
        x: 1.8,
        y: 1.8,
        z: 1.8,
    }, "<")
    .to(group.current.position, {
        x: 0.2,
    }, "<")
    
  }, [])

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 3.6, 0, 2.7]} scale={props.screenWidth < 768 ? [35, 35, 35] : [60, 60, 60]} position={[0.3, -0.5, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Armature_63" scale={0.03}>
                <group name="GLTF_created_0">
                  <primitive object={nodes.GLTF_created_0_rootJoint} />
                  <skinnedMesh
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    material={materials.UlyssesButterfly_mat}
                    skeleton={nodes.Object_7.skeleton}
                  />
                  <group name="UlyssesButterfly_62" />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/assets/3dmodel/ulysses_butterfly.glb')

export default Model;