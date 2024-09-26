<script setup></script>

<template>
  <h1>MONITORE SUAS MÁQUINAS E RESOLVA SEUS PROBLEMAS</h1>
  <hr /><main>
    <div></div>
  <section>
<div class="box">
    <img src="../assets/Group 2.png" alt="">
    <h3>SISTEMA HIDRÁULICO</h3>
    <p>A manutenção hidraúlica desempenha um papel importante na operação de uma injetora pois é responsável por gerar a pressão necessária para seu funcionamento.</p>
</div>

<div class="box">
    <img src="../assets/Group 3.png" alt="">
    <h3>EFICIÊNCIA ENERGÉTICA</h3>
    <p>Garantir a eficiência energética é importante não apenas para reduzir os custos operacionais, mas também para promover práticas sustentáveis na indústria.</p>
</div>


<div class="box">
    <img src="../assets/Group 4.png" alt="">
    <h3>BOM FUNCIONAMENTO</h3>
    <p>Buscamos evitar problemas antes que apareçam, permitindo o funcionamento contínuo da sua máquina. reduzindo a chance de falhas e melhorando o desempenho ao longo do tempo.</p>
</div>

<div class="box">
    <img src="../assets/Group 4.png" alt="">
    <h3>AVANTE É A MELHOR OPÇÃO!</h3>
    <p>Nossa equipe faz visitas regulares e fornece suporte rápido e eficiente em caso de emergências e dúvidas. Você e sua empresa mantém a produção sem interrupções indesejadas.</p>
</div>

  </section>   
    <div></div>
  </main>
 
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&family=Karla:ital,wght@0,200..800;1,200..800&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Kantumruy+Pro:ital,wght@0,100..700;1,100..700&display=swap');

h1 {
  text-align: center;
  font-size: 36px;
  color: #091d87;
  font-family: 'Karla', sans-serif;
  font-weight: 700;
padding-left: 30%;
padding-right: 30%;

  display: flex;
  justify-content: center;
  margin-top: 9%;
}
hr {
  height: 12px;
  width: 338.01px;
  background: #d9d9d9;
  border: #d9d9d9;
  border-radius: 50px;
  margin-left: 40%;
  margin-top: 1%;
}

section{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin-left:4% ;
    margin-top: 3%;
    margin-bottom: -3%;
}

p{
    font-family: 'Karla', sans-serif;
    font-size: 18px;
    text-align: center;
    
}

h3{
    font-family: "Kantumruy Pro", sans-serif;
    text-align: center;
    margin-bottom: 5%;
    margin-top: 5%;
    padding-top: 5%;
}


.box{
    border: 2px solid #d9d9d9 ;
    height: 300px;
    width: 230px;
    border-radius: 30px;
    box-shadow: 0px 5px 0px #d9d9dd;
    padding: 10%;

}
img{
    display: flex;
    justify-items: center;
    padding-left: 38%;
    margin-top: 1%;
}
body{
    margin: 0;
}

main{
  display: grid;
  grid-template-columns: 3% 1fr 3%;
}
</style>
