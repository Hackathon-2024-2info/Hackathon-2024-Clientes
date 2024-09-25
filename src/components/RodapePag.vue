<script setup>
import { ref } from 'vue';

const currentYear = ref(new Date().getFullYear());
const companyName = ref('Hackathongas');

</script>

<template>
  <footer class="footer">
    <div class="contact-info">
      <div class="contact-section">
        <p class="contatot">Contato</p>
        <p class="contatop">(47) 997012881</p>
        <p class="contatop">(47) 996780578</p>
        <p class="contatot">E-mail</p>
        <p class="contatop">nicoleabrand13@gmail.com</p>
        <p class="contatop">nicoleabrand@gmail.com</p>
      </div>
      <div class="enderecoinfo">
        <p class="enderecot">Endereco Comercial</p>
        <p class="enderecop"> Rua dos Técnicos Agrícolas, 141,</p>
        <p class="enderecop"> Porto Grande - Araquari</p>
        <p class="enderecot">Endereco Industrial</p>
        <p class="enderecop"> Rua dos Técnicos Agrícolas, 141,</p>
        <p class="enderecop"> Porto Grande - Araquari</p>
    </div>
    <div class="horarioinfo">
        <p class="horariot"> Horário de Funcionamento</p>
        <p class="horariop"> Segunda a Sexta - </p>
        <p class="horariop">  das 8h às 19h</p>

    </div>
    </div>
    <img src="../assets/avante.jpeg" alt="">
    <p class="copyright">
      &copy; {{ currentYear }} {{ companyName }}. Todos os direitos reservados.
    </p>
  </footer>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Kantumruy+Pro:ital,wght@0,100..700;1,100..700&display=swap');

.footer {
    font-size: px;
  background-color: rgba(15, 5, 65, 1);
  color: white;
  font-family: "Kantumruy Pro", sans-serif;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.contact-info {
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
}

.contact-section, .email-section {
  display: flex;
  flex-direction: column;
  margin: 0 1rem;
}

.contatot, .enderecot, .horariot {
  font-weight: bold;
}

.contatop, .emailp {
  word-break: break-word;
}
</style>
