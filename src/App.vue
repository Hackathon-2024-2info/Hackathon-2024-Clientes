<script setup>
import MenuClientes from './components/MenuClientes.vue'
import ServicosComponente from './components/ServicosComponente.vue'
import CarouselLog from './components/CarouselLog.vue';
import ContatoPag from "./components/ContatoPag.vue";
import whatsGwApi from './components/whatsGwApi.vue'
import "./assets/main.css"
import Header from "./components/HeaderClientes.vue";
</script>
 



<template>
    <div class="header">
<MenuClientes></MenuClientes>
<Header></Header>
    </div>

<ServicosComponente></ServicosComponente>
    <div>
        <CarouselLog></CarouselLog>
        <ContatoPag></ContatoPag>
    </div>
    <whatsGwApi></whatsGwApi>
</template>

<style scoped>
 body{
    margin: 0;
 }
.header{
    margin-bottom: 10%;
}

 
</style>
