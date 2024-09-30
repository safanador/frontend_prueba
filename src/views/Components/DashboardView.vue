<template>
    <div class="home-container">
      <!-- Barra de navegación -->
      <HomeNavbar />
      <!-- Imagen de fondo -->
      <div class="background-image">
      </div>
      <!-- Círculo con el logo del restaurante -->
      <div class="logo-circle">
        <div class="logo-text">
          <div>LOGO</div>
          <div>RESTAURANTE</div>
        </div>
      </div>
      <!-- Carrusel de tarjetas -->
      <ImageCarousel />
    </div>
  </template>
  
  <script setup>
  import HomeNavbar from '@/components/HomeNavbar.vue'
  import ImageCarousel from "@/components/ImageCarousel.vue"


  
  </script>
  
  <style scoped>
  
    .home-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      height: 100%;
    }
  
    .background-image {
    background: radial-gradient(circle at 230px 200px,rgba(0, 0, 0, 0.2) 1%, rgba(0, 0, 0, 1) 90%), url('https://res.cloudinary.com/djqpy9gf0/image/upload/v1720462801/palo6_0_mklvb2.jpg');
    background-size: cover;
    background-position: center 30%;
    background-repeat: no-repeat;
    opacity: 85%;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
    }

    .logo-circle {
    background-color: black;
    width: 130px;
    height: 130px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 24px;
    margin-top: 25%;
    margin-bottom: 20% 
  }
  
  .logo-text {
    text-align: center;
    font-size: medium;
  }
  
  .logo-text div {
    margin: 5px 0;
  }
  </style>
  