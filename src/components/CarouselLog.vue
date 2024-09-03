<script>
import Flicking from "@egjs/vue3-flicking";

export default {
  components: {
    Flicking: Flicking
  }
}
</script>
<template>

<Flicking :options="{ align: 'prev', circular: true }" @move-end="onMoveEnd">
  <div class="panel">1</div>
  <div class="panel">2</div>
  <div class="panel">3</div>
  
</Flicking>
</template>
<style scoped>
.panel{
    background-color: aliceblue
}
@import url("../../node_modules/@egjs/vue3-flicking/dist/flicking-inline.css");
</style>