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
        <div class="img1">
            <img src="../assets/img1.png" alt="img1">
        </div>
        <div class="img2">
            <img src="../assets/img2.png" alt="img2">
        </div>
        <div class="img3">
            <img src="../assets/img3.png" alt="img3">
        </div>
    </header>


</template>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Readex+Pro:wght@160..700&display=swap');


header {
    position: absolute;
    max-width: 1440;
    height: 262px;
    left: -0.5px;
    right: -0.5px;
    top: 78px;
    overflow: visible;
    display: inline-block;
    margin: none;
}

.banner {
    width: 100%;
    height: 262px;
    top: 78px;
    left: -0.5px;
    gap: 0px;
    opacity: 0px;
    margin: none;
    object-fit: cover;
}

.degrade {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(70, 63, 63, 0.055),
            rgba(255, 255, 255, 0.8));
    pointer-events: none;
}

.somosavante {

    color: #0F0541;
    width: 1050px;
    height: 128px;
    font-family: Readex Pro;
    font-size: 64px;
    font-weight: 700;
    line-height: 80px;
    margin-left: 94px;
    margin-top: 235px;
}

div .flechas {
    position: absolute;
    width: 40px;
    height: 23px;
    left: 688px;
    top: 317px;

}

.parceira {
    position: absolute;
    width: 748px;
    height: 30px;
    top: 287px;
    left: 733px;
    gap: 0px;
    opacity: 0px;
    font-family: Readex Pro;
    font-size: 24px;
    font-weight: 700;
    line-height: 30px;
    text-align: left;
    color: #5E5A5A;

}

.img1 {
    width: 281px;
    height: 270px;
    margin-top: 150px;
    margin-left: 200px;

}

.img2 {
    width: 281px;
    height: 270px;
    margin-top: -270px;
    margin-left: 550px;

}

.img3 {
    width: 281px;
    height: 270px;
    margin-top: -270px;
    margin-left: 900px;

}
</style>