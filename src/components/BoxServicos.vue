<script setup>

</script>

<template>
    <h1>
        NOSSAS SOLUÇÕES A SUA DISPOSIÇÃO
    </h1>
    
    <hr>
    <main>
        <div>
                <div class="box">
                    <img src="../assets/Manutencao-preventiva-de-veiculos-a-gas 2.png" alt="">
                    <p>MANUTENÇÃO PREVENTIVA</p>
                </div>
                <div class="box">
                    <img src="../assets/saiba-quando-e-a-hora-de-realizar-manutencao-nos-seus-equipamentos 1.png" alt="">
                    <p>MANUTENÇÃO HIDRÁULICA</p>
                </div>
                <div class="box">
                    <img src="../assets/careca 1.png" alt="">
                    <p>EQUALIZAÇÃO (NIVELAMENTO E PARALELISMO)</p>
                </div>
        </div>

        <div>
            <div class="box">
                <img src="../assets/preditiva.png" alt="">
                <p>MANUTENÇÃO PREDITIVA</p>
            </div>
            <div class="box">
                <img src="../assets/teaser-retrofit 1.png" alt="">
                <P>RETROFIT COMPLETO</P>
            </div>
            <div class="box">
                <img src="../assets/industriais 1.png" alt="">
                <p>USINAGEM</p>
            </div>
        </div>

        <div>
            <div class="box">
                <img src="../assets/corretiva.png" alt="">
                <p>MANUTENÇÃO CORRETIVA</p>
            </div>
            <div class="box">
                <img src="../assets/reforma.png" alt="">
                <p>REFORMAS DE FECHAMENTO</p>
            </div>
            <div class="box">
                <img src="../assets/solda.png" alt="">
                <p>SOLDA</p>
            </div>
        </div>
    </main>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&family=Karla:ital,wght@0,200..800;1,200..800&display=swap');

@import url('https://fonts.googleapis.com/css2?family=KoHo:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');
main{
    display: grid;
    grid-template-columns: 32.5% 32.5% 32.5%;

}

h1 {
  text-align: center;
  font-size: 36px;
  color: #091d87;
  font-family: 'Karla', sans-serif;
  font-weight: 700;
  display: flex;
  justify-content: center;
  margin-top: 6%;
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

.box{
    font-family: "KoHo", sans-serif;
  font-weight: 600;
  font-style: normal;
  color: #0F0541;
  text-align: center;
  margin: 15%;
  margin-left: 20%;
  justify-content: center;

  border-radius: 15px;
  box-shadow: 5px 10px 5px #d9d9d9d9;
}

p{
    margin: 7%;
    padding-bottom: 7%;
}

@media (max-width: 480px) {
    main {
        grid-template-columns: repeat(2, 1fr); 
    }
    .box {
        margin: 5%; 
    }
}

@media (max-width: 480px) {
    main {
        grid-template-columns: 1fr; 
    }
    .box {
        margin: 10%; 
    }
}
</style>