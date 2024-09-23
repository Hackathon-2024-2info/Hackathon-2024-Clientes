<script setup>


</script>


<template>




  <header>
    <img class="banner" src="../assets/headere.jpeg" alt="banner">

    <div class="somosavante">
      <p>SOMOS A AVANTE</p>
    </div>

    <div class="degrade"></div>

    <div class="degradeDois"></div>



    <div>
      <img class="flechas" src="../assets/image 4.png" alt="flechinhas">
      <p class="parceira">sua parceira para soluções em injetoras</p>
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

    <div>
      <img class="group" src="../assets/Group 1.png" alt="group1">
    </div>
  </header>

</template>




<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Readex+Pro:wght@160..700&display=swap');




header {
  display: grid;
  grid-template-columns: 3% 1fr 50%;
  position: absolute;
  width: 100%;
  height: 18%;
  left: -0.034%;
  right: -0.034%;
  top: 72px;
  overflow: visible;
  display: inline-block;
  margin: none;
  margin-top: 0;
}

.banner {
  display: flex;
  width: 100%;
  height: 182%;
  top: 59%;
  left: -0.5px;
  margin: 0px;
  object-fit: cover;
}


.degrade {
  display: flex;
  position: absolute;
  top: 0%;
  left: 0;
  width: 100%;
  height: 184%;
  background: linear-gradient
      rgba(255, 255, 255, 0.1);
  pointer-events: non

}


.degradeDois {
  display: grid;
  position: absolute;
  width: 100%;
  height: 186%;
  left: 0;
  top: 0%;
  background: linear-gradient(180deg, rgba(153, 153, 153, 0) 10%, rgba(153, 153, 153, 0) 30%, #FFFFFF 99%), rgba(217, 217, 217, 0.4);

}




.somosavante {
  display: flex;
  color: #0F0541;
  height: 128%;
  font-family: Readex Pro;
  font-size: 420%;
  font-weight: 700;
  line-height: 60px;
  margin-left: 94px;
  margin-top: 0%;
}


.flechas {
  display: flex;
  position: absolute;
  width: 40px;
  height: 23px;
  left: 47%;
  top: 240%;
}


.parceira {
  display: flex;
  position: absolute;
  height: 30px;
  top: 236%;
  left: 50%;
  font-family: Readex Pro;
  font-size: 24px;
  font-weight: 700;
  line-height: 30px;
  text-align: left;
  color: #5E5A5A;
  display: flex;
}




.img1 {
  position: absolute;
  width: 281px;
  height: 270px;
  left: 19%;
  top: 300%;

}




.img2 {
  position: absolute;
  width: 264px;
  height: 270px;
  left: 41%;
  top: 300%;


}






.img3 {
  position: absolute;
  width: 270px;
  height: 270px;
  left: 62%;
  top: 300%;


}

.fotos {
  display: flex;
  width: 281px;
  height: 270px;
  margin-top: 10%;
  margin-left: 23%;



}

.group {
  display: flex;
  position: absolute;
  top: 590%;
  margin-left: 17%;
  margin: 0 10% 0 10%;
  
}

</style>
