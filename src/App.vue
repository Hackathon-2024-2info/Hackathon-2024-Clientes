
<script setup>
import MenuClientes from './components/MenuClientes.vue'
import ServicosComponente from './components/ServicosComponente.vue'
import CarouselLog from './components/CarouselLog.vue';
import ContatoPag from "./components/ContatoPag.vue";
</script>
 



<template>
<MenuClientes></MenuClientes>
<ServicosComponente></ServicosComponente>
    <div>
        <CarouselLog></CarouselLog>
        <ContatoPag></ContatoPag>
    </div>
    <div class="zapbutton">
 
    
<a href="https://wa.me/+5547996105239" target="_blank">
    <img src="./assets/zap.png" width="50" alt="Fale com nois" title="Fale com nois">
</a>

</div>
</template>

<style scoped>
.zapbutton{
    position: fixed;
    bottom: 30px;
    right: 40px;
    z-index: 999;
}
</style>