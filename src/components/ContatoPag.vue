<script setup>

</script>

<template>
    <div class="container">
        <p class="solicitar"> Quer solicitar um orçamento?</p>
        <p class="duvidas">ou tirar dúvidas</p>
        <img class="flecha" src="../assets/flechinha.png" alt="flecha">
        <p class="entrecontato">entre em contato conosco!</p>
    </div>
    <div class="infos">
        <img class="cartaimg" src="../assets/carta.png" alt="cartinha">
        <p class="cartatext"> E-mail</p>
        <p class="duv">Tem alguma dúvida?</p>
        <p class="telreal">(47) 98915-9517</p>

        <img class="telefoneimg" src="../assets/telefone.png" alt="telefone">
        <p class="telefonetext"> Telefone</p>
        <p class="contatar">Você pode nos contatar a qualquer hora. </p>
        <p class="emailreal">xxxx@gmail.com</p>
    </div>



</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&display=swap');

.container {
    display: flex;
    position: absolute;
    width: 1149px;
    height: 241px;
    margin-left: 100px;
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
    margin-top: 50px;
}

.duvidas {
    display: flex;
    color: white;
    font-family: Jost;
    position: absolute;
    font-family: 'Jost';
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    line-height: 43px;
    margin-top: 90px;
    margin-left: 53px;
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
    margin-left: 65px;
    margin-top: 150px;
}

.infos {
    margin-left: -200px;
    padding: 350px;
}

.cartaimg {
    display: flex;
    position: absolute;
    width: 40px;
    height: 37.5px;
}

.telefoneimg {
    display: flex;
    position: absolute;
    width: 40px;
    height: 37.5px;
    margin-left: 470px;
}

.telefonetext {
    display: flex;
    position: absolute;
    margin-left: 450px;
    margin-top: 60px;
    font-family: 'Jost';
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 46px;
    color: #0F0541;
}

.cartatext {
    display: flex;
    position: absolute;
    margin-top: 60px;
    font-family: 'Jost';
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 46px;
    color: #0F0541;
}

.duv {
    display: flex;
    position: absolute;
    font-family: 'Jost';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 26px;
    color: #5E5A5A;
    margin-top: 140px;
}

.contatar {
    display: flex;
    position: absolute;
    font-family: 'Jost';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 26px;
    color: #5E5A5A;
    margin-top: 140px;
    margin-left: 450px;
}

.telreal {
    display: flex;
    position: absolute;
    font-family: 'Jost';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 35px;
    color: #000000;
    margin-top: 200px;
    margin-left: 450px;
}

.emailreal {
    display: flex;
    position: absolute;
    font-family: 'Jost';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 35px;
    color: #000000;
    margin-top: 200px;
}
</style>