<script setup>


</script>


<template>




  <header>
    <img class="banner" src="../assets/seraheader.png" alt="banner">

    <div class="degrade">
    </div>
  </header>
  <div>
    <div class="somosavante">
      <p>SOMOS A AVANTE</p>
    </div> </div>

    <div>
      <img class="flechas" src="../assets/image 4.png" alt="flechinhas">
      <p class="parceira">sua parceira para soluções em injetoras!</p>
    </div>

    <div class="fotos">
      <div class="img1">
        <img src="../assets/img1.png" alt="img1">
      </div>
      <div class="img2">
        <img src="../assets/img2.png" alt="img2">
      </div>
      <div class="img3">
        <img src="../assets/img3.png" alt="img3">
      </div>
    </div>

    <div class="teste">
      <img class="group" src="../assets/Group 1.png" alt="group1">
      <p class="text-group">Fundada em 2020, a Avante te proporciona as melhores soluções para sua máquina injetora.
        Oferecemos manutenção preventiva, corretiva e preditiva, além de assistência técnica completa. Conosco suas
        injetoras irão operar em sua capacidade máxima.</p>
    </div>

</template>




<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Readex+Pro:wght@160..700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Kantumruy+Pro:ital,wght@0,100..700;1,100..700&display=swap');

header {
  display: flex;
  position: relative;
  width: 100%;
  /* display: inline-block; */
}

.banner {
  display: block;
  width: 100%;
}

.degrade {
  position: absolute;
      top: 0; 
      left: 0; 
      width: 100%; 
      height: 100%; 
      display: flex; 
      justify-content: center; 
      align-items: center;
      text-align: center;
  background: linear-gradient(180deg, rgba(153, 153, 153, 0) 10%, rgba(153, 153, 153, 0) 30%, #FFFFFF 99%), rgba(217, 217, 217, 0.4);
}

.somosavante {
  display: flex;
  color: #0F0541;
  font-family: Readex Pro;
  font-size: 420%;
  font-weight: 700;
  line-height: 60px;
  margin-left: 94px;
}

.flechas {
  display: flex;
  width: 40px;
  height: 23px;
  margin-left: 50%;
  top: 240%;
}

.parceira {
  display: flex;
  height: 30px;
  margin-top: -2%;
  margin-left: 54%;
  font-family: Readex Pro;
  font-size: 24px;
  font-weight: 700;
  line-height: 30px;
  text-align: left;
  color: #5E5A5A;
  display: flex;
}

.img1 {
  width: 281px;
  margin-left: 23%;
}

.img2 {
  width: 264px;
  margin-left: 30%;
}

.img3 {
  width: 270px;
  height: 270px;
  margin-left: 30%;
}

.fotos {
  display: flex;
  width: 281px;
  height: 270px;
  margin-top: 6%;
  margin-left: 12%;
}

.teste {
  display: grid;
  place-items: center;
      position: relative; /* Permite o posicionamento absoluto dentro do contêiner */

    }

.group {
  margin-top: 9%;
  object-fit: cover;
}

.text-group {
  position: absolute;
  font-family: 'Kantumruy Pro';
  font-style: normal;
  color: #FFFFFF;
  text-align: center;
  top: 55%;
  left: 10%;
  font-weight: 700;
  font-size: 18px;
  line-height: 170%;
  width: 80%;
}
</style>
