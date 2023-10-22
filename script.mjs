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

const material = new THREE.MeshBasicMaterial( { map: texture } );

const sphere = new THREE.Mesh( geometry, material );

scene.add( sphere );

const materials = [
	new THREE.MeshPhongMaterial( { color: 0xffffff, flatShading: true } ), // front
	new THREE.MeshPhongMaterial( { color: 0xffffff } ) // side
]

const textgeo = new TextGeometry( 'What The Floosh Game 3D!', {
	size: 80,
	height: 5,
	curveSegments: 12,
	bevelEnabled: true,
	bevelThickness: 10,
	bevelSize: 8,
	bevelOffset: 0,
	bevelSegments: 5
})
textgeo.computeBoundingBox()
const text = new THREE.Mesh(textgeo, materials )
// This may not work

camera.position.z = 5

function render() {
	renderer.render(scene, camera);
 // sphere.rotation.x += 0.05;
 sphere.rotation.y -= 0.05;
	requestAnimationFrame(render);
}

render()
