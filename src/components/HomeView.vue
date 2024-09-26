<script setup>
import MenuClientes from '@/components/MenuClientes.vue';
import ServicosComponente from '@/components/ServicosComponente.vue';
import CarouselLog from '@/components/CarouselLog.vue';
import ContatoPag from "@/components/ContatoPag.vue";
import whatsGwApi from '@/components/whatsGwApi.vue';
import Header from "@/components/HeaderClientes.vue";
import RodapePag from '@/components/RodapePag.vue';
import BoxServicos from '@/components/BoxServicos.vue';

</script>


<template>
    <div>
        <MenuClientes></MenuClientes>
      <div class="home">
        <Header></Header>
      </div>
  
      <div id="sobre">
        <ServicosComponente></ServicosComponente>
        <CarouselLog></CarouselLog>
      </div>
  
      <div id="servicos">
        <BoxServicos></BoxServicos>
      </div>

  
      <div id="contato">
        <ContatoPag></ContatoPag>
      </div>

      <RodapePag></RodapePag>
  
      <whatsGwApi></whatsGwApi>
    </div>
  </template>
  