<script setup>

</script>

<template>
    <div class="container">
        <p class="solicitar"> Quer solicitar um orçamento?</p>
        <p class="duvidas">ou tirar dúvidas</p>
        <img class="flecha" src="../assets/flechinha.png" alt="flecha">
        <p class="entrecontato">entre em contato conosco!</p>
    </div>
    <div class="carta">
        <img  src="../assets/carta.png" alt="cartinha">
    </div>
    <div class="telefoneimg">
        <img  src="../assets/telefone.png" alt="telefone">
    </div>


</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&display=swap');

.container {
    display: flex;
    position: absolute;
    width: 1149px;
    height: 241px;
    margin-left: 320px;
    margin-top: 3665px;
    background: #0F0541;
    border-radius: 50px;
}

.solicitar {
    display: flex;
    color: #95A3EC;
    position: absolute;
    font-family: 'Jost';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 52px;
    margin-left: 50px;
}

.duvidas {
    display: flex;
    color: white;
    font-family: Jost;
    position: absolute;
    font-family: 'Jost';
    font-style: normal;
    font-weight: 500;
    font-size: 30px;
    line-height: 43px;
    margin-top: 75px;
    margin-left: 50px;
}

.entrecontato {
    display: flex;
    color: white;
    position: absolute;
    font-family: 'Jost';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 26px;
    margin-top: 141px;
    margin-left: 90px;
}

.flecha {
    display: flex;
    position: absolute;
    width: 20px;
    height: 11px;
    margin-left: 60px;
    margin-top: 150px;
}

.cartaimg {
    display: flex;
    position: absolute;
    width: 40px;
    height: 37.5px;
    margin-left: 360px;
    margin-top: 3995px;
}

.telefoneimg {
    display: flex;
    position: absolute;
    width: 40px;
    height: 37.5px;
    margin-left: 875px;
    margin-top: 3995px;
}
</style>