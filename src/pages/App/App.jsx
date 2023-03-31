import { useState, useEffect, useRef } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import HomePage from '../HomePage/HomePage';
import RulesPage from '../RulesPage/RulesPage';
import GamePage from '../GamePage/GamePage';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import NewGamePage from '../NewGamePage/NewGamePage';
import LoadGamePage from '../LoadGamePage/LoadGamePage';

import * as THREE from 'three';
import dunePic from '../../background-images/Dune.png';
import moon1Pic from "../../background-images/moon1.png"
import moon2Pic from "../../background-images/moon2.png"
import background from "../../background-images/space-background.png";

export default function App() {
  const [user, setUser] = useState(getUser());
  const canvasRef = useRef();

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      90,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    camera.position.z = 40;


    const duneTexture = new THREE.TextureLoader().load(dunePic);
    const dune = new THREE.Mesh(
      new THREE.SphereGeometry(15, 32, 32),
      new THREE.MeshStandardMaterial( {
        map: duneTexture,
      })
    );
    dune.position.set(0, 0, 0);
    scene.add(dune);

    const moon1Texture = new THREE.TextureLoader().load(moon1Pic);
    const moon1 = new THREE.Mesh(
      new THREE.SphereGeometry(3, 32, 32),
      new THREE.MeshStandardMaterial( {
        map: moon1Texture,
      })
    );
    moon1.position.set(15, 10, 10);
    scene.add(moon1);

    const moon2Texture = new THREE.TextureLoader().load(moon2Pic);
    const moon2 = new THREE.Mesh(
      new THREE.SphereGeometry(2, 32, 32),
      new THREE.MeshStandardMaterial( {
        map: moon2Texture,
      })
    );
    moon2.position.set(-8, -8, 20);
    scene.add(moon2);


    
    const ambientLight = new THREE.AmbientLight(0xffffff);
    scene.add(ambientLight);
    
    
    function addStar() {
      const geometry = new THREE.SphereGeometry(0.05, 24, 24);
      const material = new THREE.MeshStandardMaterial( {color: 0xffffff, transparent: true });
      const star = new THREE.Mesh( geometry, material);
      const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread( 100 ));
      
      star.position.set(x, y, z);
      
      scene.add(star);
    }
    
    Array(500).fill().forEach(addStar);

    const spaceTexture = new THREE.TextureLoader().load(background);
    scene.background = spaceTexture;

    const animate = () => {
      requestAnimationFrame(animate);

      dune.rotation.x += 0.0002;
      dune.rotation.y += 0.0002;
      
      moon1.rotation.x += 0.0002;
      moon1.rotation.y += 0.0002;

      moon2.rotation.x += 0.0002;
      moon2.rotation.y += 0.0002;

      renderer.render(scene, camera);
    };

    animate();

  }, []);


  return (
    <main className="App" id="canvas-container">
      <canvas ref={canvasRef} />;
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* Route components in here */}
              <Route path="/" element={<HomePage />} />
              <Route path="/rules" element={<RulesPage />} />
              <Route path="/newGame" element={<NewGamePage />} />
              <Route path="/loadGame" element={<LoadGamePage />} />
              <Route path="/game/:id" element={<GamePage />} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
