<template>
  <div class="order-list-container">
    <OrderListNavbar />
    <ul class="tab-list">
      <li>My order</li>
      <li>Favorites</li>
    </ul>
  </div>
</template>

<script setup>
import OrderListNavbar from "../components/OrderListNavbar.vue";
</script>

<style scoped>
.order-list-container {
  display: flex;
  flex-direction: column;
  background-color: #00100e;
  height: 100vh;
  width: 100%;
  margin-top: 60px; /* Agregar margen superior para evitar que quede cubierto */

}

.tab-list {
  cursor: pointer;
  display: flex;
  flex-direction: row;
  gap: 1em;
  height: 4%;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  margin-bottom: 1em;
  margin-top: 20px;
  outline: none;
  color: #b8b8b8;
}
</style>
