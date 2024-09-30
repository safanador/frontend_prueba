<template >
    <Splide  :options="splideOptions">
      <SplideSlide v-for="(menu, index) in menus" :key="index" >
        <RouterLink :to="menu.route">
        <div   class="menu-card">
          <img :src="menu.image" alt="" />
          <h3>{{ menu.title }}</h3>
        </div>
      </RouterLink>
      </SplideSlide>


    </Splide>
  </template>

  <script>
  import { Splide, SplideSlide } from '@splidejs/vue-splide';
  import '@splidejs/vue-splide/css';
  import { RouterLink  } from 'vue-router'; // Importa RouterLink


  export default {
    components: { Splide, SplideSlide, RouterLink },
    data() {
      return {
        menus: [
          { title: 'Lunch Menu', image: 'https://res.cloudinary.com/djqpy9gf0/image/upload/v1727650106/premium_photo-1672242676674-f4349cc6470e_mtbmhr.jpg', route: '/lunchmenu' },
          { title: 'Appetizer List', image: 'https://res.cloudinary.com/djqpy9gf0/image/upload/v1727650335/istockphoto-1315146327-612x612_fwt14v.jpg', route: '/appetizerlist' },
          { title: 'Cocktail List', image: 'https://res.cloudinary.com/djqpy9gf0/image/upload/v1727650256/istockphoto-1323890695-612x612_dshlew.jpg', route: '/cocktaillist' },
          { title: 'Wine List', image: 'https://res.cloudinary.com/djqpy9gf0/image/upload/v1727650256/strongest-wine-1_xj8ork.webp', route: '/winemenu' },
        ],
        splideOptions: {
          type: 'slide',
          perPage: 2,
          perMove: 1,
          arrows: true,  // Desactiva las flechas
          pagination: true,  // Activa la paginación
          drag: true,  // Permite arrastrar el carrusel
          wheel: false,  // Navegación con rueda de mouse
          autoplay: false,  // Desactiva la reproducción automática
        },
      };
    },
    methods: {
      goToMenu(route) {
        console.log(route); // prueba
        this.$router.push(route);
      },
    },
  };
  </script>
  
  <style scoped>
    .splide {
      width: 360px; 
      overflow: hidden; /* Evita que los elementos se salgan del carrusel */
    }
    .splide__track {
      display: flex;
      justify-content: center;
    }
    .menu-card {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      margin-bottom: 10%;
    }
    .menu-card img {
      width: 170px;
      height: 250px;
      object-fit: cover;
      border-radius: 12px;
    }
    /* Elimina el margen derecho del último slide */
    /* Estilos para la paginación */
    .splide__pagination {
      text-align: center;
      margin-top: 10px; /* Ajusta la posición de los puntos de paginación */
    }

    .splide__pagination li {
      display: inline-block;
      margin: 0 5px; /* Espacio entre los puntos */
    }

    .splide__pagination button {
      background: #ccc; /* Color de los puntos */
      border: none;
      border-radius: 50%;
      width: 10px; /* Ancho del punto */
      height: 10px; /* Alto del punto */
      cursor: pointer;
      outline: none; /* Sin borde de enfoque */
      transition: background 0.3s; /* Transición suave al cambiar de color */
    }
    .splide:not(.is-overflow) .splide__pagination {
        display: flex !important;
    }
    .splide__pagination .is-active button {
      background: #007bff; /* Color del punto activo */
    }
  </style>
  