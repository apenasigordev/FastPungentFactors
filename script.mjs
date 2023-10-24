import * as THREE from 'three' ;

import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';

// The three.js scene: the 3D world where you put objects
const scene = new THREE.Scene();

// The camera
const camera = new THREE.PerspectiveCamera(
  60,
  window.innerWidth / window.innerHeight,
  1,
  10000
);

// The renderer: something that draws 3D objects onto the canvas
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x0000aa, 1);
// Append the renderer canvas into <body>
document.body.appendChild(renderer.domElement);

const texture = new THREE.TextureLoader().load('textures/floosh.png' ); 

const geometry = new THREE.SphereGeometry( 1, 64, 32 );

const material = new THREE.MeshPhongMaterial( { map: texture } );

const sphere = new THREE.Mesh( geometry, material );

const directionalLight = new THREE.DirectionalLight( 0xffffff, 1 );
scene.add( directionalLight );

const colors = [
	0xffffff,
	0xff0000,
	0x00ff00,
	0x0000ff
]
const color1 = colors[Math.floor(Math.random() * colors.length)]
const color2 = colors[Math.floor(Math.random() * colors.length)]
const color3 = colors[Math.floor(Math.random() * colors.length)]

const light = new THREE.PointLight( color1, 1, 100 );
light.position.set( 5, 8, 10 );
scene.add( light );

scene.add( sphere );

camera.position.z = 5

function render() {
	renderer.render(scene, camera);
        // sphere.rotation.x += 0.05;
        sphere.rotation.y -= 0.1;
	requestAnimationFrame(render);
}

render()
