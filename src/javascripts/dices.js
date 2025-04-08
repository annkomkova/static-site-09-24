import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js'
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js'
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js'
import { FXAAShader } from 'three/addons/shaders/FXAAShader.js'

document.addEventListener('DOMContentLoaded', () => {
  initThree()
})

function initThree() {
  //находим html-контейнер
  const model = document.querySelector('.model')

  //создаём сцену
  const scene = new THREE.Scene()
  // scene.background = new THREE.Color('#ffffff')
  scene.position.set(0, 0, 0)

  //создаём камеру
  let windowW = window.innerWidth
  let w, h
  // if (windowW >= 1025) {
  w = window.innerWidth
  h = window.innerHeight
  // } else {
  //   w = window.innerWidth / 2
  //   h = window.innerHeight / 2
  // }

  const camera = new THREE.PerspectiveCamera(
    50,
    window.innerWidth / window.innerHeight,
    0.1,
    3000
  )
  let z = 2 + window.scrollY / 250.0
  console.log(z)
  camera.position.set(0.8, 0.3, 4.5)

  //создаём визуализатор-рендерер
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  renderer.setSize(w, h)
  // renderer.shadowMap.enabled = true
  // renderer.shadowMap.type = THREE.PCFSoftShadowMap

  //добавляем постпроцессинг
  renderer.setPixelRatio(window.devicePixelRatio)
  const composer = new EffectComposer(renderer)
  const renderPass = new RenderPass(scene, camera)
  composer.addPass(renderPass)

  const fxaaPass = new ShaderPass(FXAAShader)
  const pixelRatio = renderer.getPixelRatio()
  fxaaPass.material.uniforms['resolution'].value.x =
    1 / (model.offsetWidth * pixelRatio)
  fxaaPass.material.uniforms['resolution'].value.y =
    1 / (model.offsetHeight * pixelRatio)

  const outputPass = new OutputPass()
  composer.addPass(outputPass)

  model.appendChild(renderer.domElement)

  //подключаем модель

  const loader = new GLTFLoader()
  loader.load(
    './3d/scene.gltf',
    (gltf) => {
      scene.add(gltf.scene)
    },
    (error) => {
      console.log('Error:' + error)
    }
  )

  //добавляем свет
  {
    const light = new THREE.AmbientLight(0xffffff)
    scene.add(light)
  }
  {
    const light = new THREE.DirectionalLight(0xff0000, 1)
    light.position.set(10, 0, 0)
    light.lookAt(2, 0.6, 2)
    // const helper = new THREE.DirectionalLightHelper(light, 5)
    scene.add(light)
  }
  {
    const light = new THREE.DirectionalLight(0x0000ff, 1)
    light.position.set(-10, 0, 0)
    light.lookAt(2, 0.6, 2)
    // const helper = new THREE.DirectionalLightHelper(light, 5)
    scene.add(light)
  }
  {
    const light = new THREE.DirectionalLight(0x2f4f4f, 1)
    light.position.set(-20, -3, 32)
    light.lookAt(2, 0.6, 2)
    // const helper = new THREE.DirectionalLightHelper(light, 5)
    scene.add(light)
  }
  {
    const light = new THREE.DirectionalLight(0xffefd5, 1)
    light.position.set(20, 5, -30)
    light.lookAt(2, 0.6, 2)
    // const helper = new THREE.DirectionalLightHelper(light, 5)
    scene.add(light)
  }

  //управление моделью
  // const controls = new OrbitControls(camera, renderer.domElement)
  // controls.autoRotate = true
  // controls.autoRotateSpeed = 5
  // controls.enableDamping = true
  // controls.maxDistance = 1.8
  // controls.minDistance = 1.5
  // controls.maxPolarAngle = Math.PI

  //анимация модели
  function animate() {
    requestAnimationFrame(animate)
    // controls.update()
    composer.render(scene, camera)
  }
  animate()

  window.addEventListener('resize', onWindowResize)

  const dice1 = document.querySelector('.dice1')
  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY
    const dice2Top = document
      .querySelector('.dice2')
      .getBoundingClientRect().top
    const dice3Top = document
      .querySelector('.dice3')
      .getBoundingClientRect().top
    let scrollPercent =
      window.scrollY / (document.body.scrollHeight - window.innerHeight)
    let rotationAngle = scrollPercent * Math.PI * 4 // 0 до 360 градусов
    if (scrollPosition < dice2Top) {
      scene.rotation.y = rotationAngle
      scene.rotation.z = rotationAngle / 2

      scene.position.x = rotationAngle
    }
    console.log(rotationAngle)
  })

  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
  }

  function updateCameraZ(ev) {
    camera.position.z = 2 + window.scrollY / 250.0
  }
  function orbitCont() {
    // scene.rotation.y += 0.15
    scene.position.x -= 0.15
  }
}
