console.log('Initiating three.js Scene');
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#canvas'),
  alpha: true,
});

renderer.setClearColor( 0x000000, 0 );
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setX(-15);

const loader = new GLTFLoader();
let plant = null;

loader.load('models/pothos_plant.glb', function ( gltf ) {
  plant = gltf.scene;
	scene.add( plant );
  plant.scale.set(2.5,2.5,2.5);
  plant.position.setY(2);
}, undefined, function ( error ) {
	console.error( error );
});

// Light
const ambientLight = new THREE.AmbientLight(0xffffff);

//TODO: CHANGE COLOR DEPENDING ON WARN STATUS
export const directionalLight = new THREE.DirectionalLight( 0xe3fda8, 15 );
directionalLight.position.setY(10);
directionalLight.position.setX(-20);

scene.add(ambientLight, directionalLight);

function addStar() {
  const starGeo = new THREE.SphereGeometry(0.05, 20, 20);
  const starMat = new THREE.MeshStandardMaterial({ color: 0xffffff });
  const star = new THREE.Mesh(starGeo, starMat);

  let [x, y, z] = Array(3)
  .fill()
  .map(() => THREE.MathUtils.randFloatSpread(100));

  star.position.set(x, y, z);
  scene.add(star);
}

Array(400).fill().forEach(addStar);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enabled = false;

function animate() {
    requestAnimationFrame(animate);

    if(plant) {
      plant.rotation.y += 0.003;
    }
    scene.rotateOnAxis(new THREE.Vector3(0,1,0), -0.002);

    renderer.render(scene, camera);
  }
  
  animate();