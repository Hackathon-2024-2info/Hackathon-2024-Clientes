<script setup>

</script>

<template>


    <header>
        <img class="banner" src="../assets/header-teste.jpeg" alt="banner">
        <div class="degrade">
            <p class="somosavante">SOMOS A AVANTE</p>
        </div>
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

        <div>
            <img class="group" src="../assets/Group 1.png" alt="group1">
        </div>
    </div>
    </header>


</template>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Readex+Pro:wght@160..700&display=swap');


header {
    display: flex;
    position: absolute;
    width: 100%;
    height: 18%;
    left: -0.034%;
    right: -0.034%;
    top: 78px;
    overflow: visible;
    display: inline-block;
    margin: none;
}

.banner {
    display: flex;
    width: 100%;
    height: 262px;
    top: 78px;
    left: -0.5px;
    opacity: 0px;
    margin: none;
    object-fit: cover;
}

.degrade {
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 235%;
    background: linear-gradient(rgba(70, 63, 63, 0.055),
            rgba(255, 255, 255, 0.8));
    pointer-events: none;
}

.somosavante {
    display: flex;
    color: #0F0541;
    height: 128px;
    font-family: Readex Pro;
    font-size: 64px;
    font-weight: 700;
    line-height: 80px;
    margin-left: 94px;
    margin-top: 235px;
}

.flechas {
    display: flex;
    position: absolute;
    width: 40px;
    height: 23px;
    left: 688px;
    top: 317px;
}

.parceira {
    display: flex;
    position: absolute;
    height: 30px;
    top: 287px;
    left: 740px;
    font-family: Readex Pro;
    font-size: 24px;
    font-weight: 700;
    line-height: 30px;
    text-align: left;
    color: #5E5A5A;
    display: flex;
}

.img1 {
    display: flex;
    width: 281px;
    height: 270px;
    margin-top: 160px;
    margin-left: 235px;

}
.img2 {
    display: flex;
    width: 281px;
    height: 270px;
    margin-top: -270px;
    margin-left: 588px;
    

}

.img3 {
    display: flex;
    width: 281px;
    height: 270px;
    margin-top: -270px;
    margin-left: 930px;

}

.group{
    display: flex;
    justify-content: center;
    margin-top: 140px;
    margin-left: 10%;
}


</style>