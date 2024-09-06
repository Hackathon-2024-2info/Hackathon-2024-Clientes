<script>
import Flicking from "@egjs/vue3-flicking";

export default {
  components: {
    Flicking: Flicking
  }
}
</script>
<template>
<h1>Empresas que confiam em nós:</h1>
<Flicking :options="{ align: 'center', circular: true }" @move-end="onMoveEnd">
  <div class="panel" style="padding-top: 2%; height: 50%; padding-left: 4%; padding-right: 4%; padding-bottom: 2%;"><img src="../assets/imagens/logo-abplast.png" alt=""></div>
  <div class="panel" style="padding-top: 3%; padding-left: 4%; padding-right: 2%; padding-bottom: 2%; height: 50%;"><img src="../assets/imagens/logo-focus.png" alt=""></div>
  <div class="panel" style="padding-top: 5%; padding-left: 4%; padding-right: 4%; padding-bottom: 2%; height: 50%;"><img src="../assets/imagens/logo-fortlev.png" alt=""></div>
  <div class="panel" style="padding-top: 6%; padding-left: 4%; padding-right: 4%; padding-bottom: 2%; height: 50%;"><img src="../assets/imagens/logo-krona.png" alt=""></div>
  <div class="panel" style="padding-top: 2%; padding-left: 8%; padding-right: 8%; padding-bottom: 2%; height: 50%;"><img src="../assets/imagens/logo-taf.png" alt=""></div>
  <div class="panel" style="padding-top: 4%; padding-left: 4%; padding-right: 4%; padding-bottom: 2%; height: 50%;"><img src="../assets/imagens/logo-trg.png" alt=""></div>
  <div class="panel" style="padding-top: 3%; padding-left: 4%; padding-right: 4%; padding-bottom: 2%; height: 50%;"><img src="../assets/imagens/logo-viqua.png" alt=""></div>
  <div class="panel" style="padding-top: 5%; padding-left: 4%; padding-right: 4%; padding-bottom: 2%; height: 50%;"><img src="../assets/imagens/logo-wittmann.png" alt=""></div>
</Flicking>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Jura:wght@300..700&display=swap');

.panel{
    display: flex;
    justify-content: center;
}

h1{
    display: flex;
    justify-content: center;
    font-family: "Jura", sans-serif;
    color: #332A2A;
    opacity: 50%;
    font-size: 125%;
    padding-top: 10%;
    font-weight: 500;
}

@import url("../../node_modules/@egjs/vue3-flicking/dist/flicking-inline.css");
</style>