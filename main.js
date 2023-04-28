let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.add('active');
}

document.querySelector('#nav-close').onclick = () =>{
    navbar.classList.remove('active');
}


window.onscroll = () =>{
    navbar.classList.remove('active');

    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
};

window.onload = () =>{
    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
};




const scene = new THREE.Scene();
let divWidth = window.innerWidth * 0.8;
let divHeight = window.innerHeight * 0.6;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(divWidth, divHeight);
renderer.shadowMap.enabled = true;
renderer.setPixelRatio(window.devicePixelRatio);
const container = document.getElementById('yourDivId');
container.appendChild(renderer.domElement);
const camera = new THREE.PerspectiveCamera(75, divWidth / divHeight, 0.1, 100);
camera.position.set(0,0,1);
window.addEventListener('resize', () => {  
  divWidth = window.innerWidth * 0.8;
  divHeight = window.innerHeight * 0.6;
  renderer.setSize(divWidth, divHeight);
  camera.aspect = divWidth / divHeight;
  camera.updateProjectionMatrix();
});



const controls = new THREE.OrbitControls(camera, renderer.domElement);




const loader = new THREE.GLTFLoader();
let model;

loader.load('guitar.glb', function(gltf) {
  model = gltf.scene;
  if (model) {
    model.traverse(function(child) {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
        child.material.castShadow = true;
        child.material.receiveShadow = true;
      }
    });
    model.position.set(0, 0, 0);
    scene.add(model);
  } else {
    console.error('Failed to load GLB file');
  }
});


const planeGeometry = new THREE.PlaneGeometry(4, 4);
const planeMaterial = new THREE.MeshStandardMaterial({color: 0xffffff, side: THREE.DoubleSide});
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
scene.add(plane);
plane.receiveShadow = true; 
plane.rotation.x = -Math.PI / 2;
plane.position.y = -0.5;
  

const planeGeometry2 = new THREE.PlaneGeometry(4, 0.5);
const planeMaterial2 = new THREE.MeshStandardMaterial({color: 0xffffff, side: THREE.DoubleSide});
const plane2 = new THREE.Mesh(planeGeometry, planeMaterial);
scene.add(plane2);
plane2.receiveShadow = true; 
plane2.rotation.y = -Math.PI / 2;
plane2.position.x = -2;
plane2.position.y = 1.5;

  
const planeGeometry3 = new THREE.PlaneGeometry(4, 0.5);
const planeMaterial3 = new THREE.MeshStandardMaterial({color: 0xffffff, side: THREE.DoubleSide});
const plane3 = new THREE.Mesh(planeGeometry, planeMaterial);
scene.add(plane3);
plane3.receiveShadow = true; 
plane3.rotation.y = -Math.PI / 2;
plane3.position.x = 2;
plane3.position.y = 1.5;

const planeGeometry4 = new THREE.PlaneGeometry(4, 0.5);
const planeMaterial4 = new THREE.MeshStandardMaterial({color: 0xffffff, side: THREE.DoubleSide});
const plane4 = new THREE.Mesh(planeGeometry, planeMaterial);
scene.add(plane4);
plane4.receiveShadow = true; 
plane4.position.z = -2;
plane4.position.y = 1.5;

  
const planeGeometry5 = new THREE.PlaneGeometry(4, 0.5);
const planeMaterial5 = new THREE.MeshStandardMaterial({color: 0xffffff, side: THREE.DoubleSide});
const plane5 = new THREE.Mesh(planeGeometry, planeMaterial);
scene.add(plane5);
plane5.receiveShadow = true; 
plane5.position.z = 2;
plane5.position.y = 1.5;

  



const directionalLight = new THREE.DirectionalLight(0xFFFFFF, 1);
scene.add(directionalLight);
directionalLight.position.set(2,1,12);
directionalLight.castShadow = true; 
directionalLight.shadow.mapSize.width = 2048; // increase shadow map resolution
directionalLight.shadow.mapSize.height = 2048; // increase shadow map resolution

const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
scene.add(ambientLight);

var clicks = 0;
document.querySelector('.rotation-baby').addEventListener('click', function() {
    clicks++;

    if (clicks === 1) {
        new TWEEN.Tween(camera.position)
            .to({x: -0.9, y: 0, z: 0}, 1000)
            .easing(TWEEN.Easing.Quadratic.Out)
            .start();

        new TWEEN.Tween(camera.rotation)
            .to({x: 0, y: -Math.PI / 2, z: 0}, 1000)
            .easing(TWEEN.Easing.Quadratic.Out)
            .start();

    } else if (clicks === 2) {
        new TWEEN.Tween(camera.position)
            .to({x: 0, y: 1, z: 0}, 1000)
            .easing(TWEEN.Easing.Quadratic.Out)
            .start();

        new TWEEN.Tween(camera.rotation)
            .to({x: Math.PI / 2, y: -Math.PI, z: 0}, 1000)
            .easing(TWEEN.Easing.Quadratic.Out)
            .start();

    } else if (clicks === 3) {
        new TWEEN.Tween(model.position)
            .to({x: 0, y: -0.3, z: 0}, 1000)
            .easing(TWEEN.Easing.Quadratic.Out)
            .start();

        new TWEEN.Tween(model.rotation)
            .to({x: Math.PI / 3, y: 0, z: 0}, 1000)
            .easing(TWEEN.Easing.Quadratic.Out)
            .start();

    } else {
        new TWEEN.Tween(camera.position)
            .to({x: 0, y: 0, z: 1}, 1000)
            .easing(TWEEN.Easing.Quadratic.Out)
            .start();

        new TWEEN.Tween(camera.rotation)
            .to({x: 0, y: 0, z: 0}, 1000)
            .easing(TWEEN.Easing.Quadratic.Out)
            .start();

        new TWEEN.Tween(model.position)
            .to({x: 0, y: 0, z: 0}, 1000)
            .easing(TWEEN.Easing.Quadratic.Out)
            .start();

        new TWEEN.Tween(model.rotation)
            .to({x: 0, y: 0, z: 0}, 1000)
            .easing(TWEEN.Easing.Quadratic.Out)
            .start();


        clicks = 0;
    }
});




function animate() {
    requestAnimationFrame(animate);
    TWEEN.update(); // update the Tween.js library
    renderer.render(scene, camera);
}

animate();
