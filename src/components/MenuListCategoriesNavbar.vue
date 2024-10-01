<template>
    <nav class="navbar">
      <ul class="navbar-list">
        <li
          v-for="(icon, index) in filteredIcons"
          :key="index"
          :class="['navbar-item', { 'selected': icon.name === selectedCategory }]"
          @click="selectCategory(icon.name)"
        >
          <component :is="icon.component" class="navbar-icon" />
          <span class="icon-name">{{ icon.name }}</span>
          <span class="divider"></span>
        </li>
      </ul>
    </nav>
  </template>
  
  <script setup>
  import { defineEmits, computed } from 'vue';
  import * as Icons from '@kalimahapps/vue-icons';
  
  const props = defineProps({
    categories: {
      type: Array,
      required: true, // List of menu categories
    },
    selectedCategory: {
      type: String,
      required: true, // The currently selected category 
    }
  });
  
  const emit = defineEmits(['update:selectedCategory']); // Emitting to parent to update selected category
  
  // Mock icon data (You can expand this to include all the icons you need in the future)
  const iconsList = [
    { name: 'Meat', component: Icons.PhHamburger },
    { name: 'Pescados', component: Icons.CaFish },
    { name: 'Entradas', component: Icons.LuBaby },
    { name: 'Panes', component: Icons.McBreadLine },
    { name: 'Tortas', component: Icons.ClCupcake },
    { name: 'Comparte', component: Icons.LuBaby },
    { name: 'Verano', component: Icons.FlBeach },
    { name: 'Invierno', component: Icons.CaWinterWarning },
    { name: 'Primavera', component: Icons.SiSpring },
    { name: 'Tinto', component: Icons.FlDrinkWine },
    { name: 'Espumoso', component: Icons.ReSparklingLine },
    { name: 'Rosado', component: Icons.BxWine },
  ];
  
  // Filtering icons based on the received category list
  const filteredIcons = computed(() => {
    return iconsList.filter(icon => props.categories.includes(icon.name));
  });
  
  // Function to handle category selection
  const selectCategory = (categoryName) => {
    emit('update:selectedCategory', categoryName);
  };
  </script>
  
  <style scoped>
  .navbar {
    display: flex;
    position: fixed;
    bottom: 0;
    width: 100%;
    justify-content: center;
    background-color:  #051d1a;
    padding: 10px;
    margin-top: -10px;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
  }
  
  .navbar-list {
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
  
  .navbar-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
  }
  
  .navbar-icon {
    font-size: 24px;
  }
  .icon-name {
    color: slategray;
  }
  
  .navbar-item.selected .navbar-icon,
  .navbar-item.selected span {
    color: #00a99d; /* Change this to the highlight color of your choice */
    font-weight: bold;
  }
  .navbar-item.selected .divider {
    width: 90%;
    margin: 0 auto 16px;
    border: 1px solid #00a99d;
  }
  </style>
  