<script setup>
import MenuClientes from './components/MenuClientes.vue'
import ServicosComponente from './components/ServicosComponente.vue'
import CarouselLog from './components/CarouselLog.vue';
import ContatoPag from "./components/ContatoPag.vue";
import "./assets/main.css"
</script>
 



<template>
<MenuClientes></MenuClientes>
<ServicosComponente></ServicosComponente>
    <div>
        <CarouselLog></CarouselLog>
        <ContatoPag></ContatoPag>
    </div>
</template>

<style scoped>
 body{
    margin: 0;
 }
</style>
