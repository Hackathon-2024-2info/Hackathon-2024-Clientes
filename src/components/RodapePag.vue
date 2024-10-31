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
        <div class="phone-info">
          <img class="telefone" src="@/assets/telefonerodape.png" alt="Ícone de telefone">
          <div class="phone-numbers">
            <p class="contatop">(47) 997012881</p>
            <p class="contatop">(47) 996780578</p>
          </div>
        </div>
        <p class="contatot">E-mail</p>
        <div class="email-info">
          <img class="email" src="@/assets/emailrodape.png" alt="Ícone de e-mail">
          <div class="email-numbers">
            <p class="contatop">nicoleabrand13@gmail.com</p>
            <p class="contatop">nicoleabrand@gmail.com</p>
          </div>
        </div>
      </div>
      
      <div class="enderecoinfo">
        <p class="enderecot">Endereço Comercial</p>
        <div class="location-info">
          <img class="endereco" src="@/assets/Icon.png" alt="Ícone de endereço">
          <div class="location-address">
            <p class="enderecop">Rua dos Técnicos Agrícolas, 141,</p>
            <p class="enderecop">Porto Grande - Araquari</p>
          </div>
        </div>
        <p class="enderecot">Endereço Industrial</p>
        <div class="location-info">
          <img class="endereco" src="@/assets/Icon.png" alt="Ícone de endereço">
          <div class="location-address">
            <p class="enderecop">Rua dos Técnicos Agrícolas, 141,</p>
            <p class="enderecop">Porto Grande - Araquari</p>
          </div>
        </div>
      </div>

      <div class="horarioinfo">
        <p class="horariot">Horário de Funcionamento</p>
        <div class="horario-info">
          <img class="relogio" src="@/assets/stopwatch-04.png" alt="Ícone de horário">
          <div class="horario-hours">
            <p class="horariop">Segunda a Sexta -</p>
            <p class="horariop">das 8h às 19h</p>
          </div>
        </div>
      </div>
    </div>

    <img class="logo" src="@/assets/logo.jpeg" alt="Logo">
    <p class="copyright">
      &copy; {{ currentYear }} {{ companyName }}. Todos os direitos reservados.
    </p>
  </footer>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Kantumruy+Pro:ital,wght@0,100..700;1,100..700&display=swap');

.footer {
  margin: -2%;
  background-color: rgba(15, 5, 65, 1);
  color: white;
  font-family: "Kantumruy Pro", sans-serif;
  padding: 1rem;
  display: flex;
  flex-direction: column;
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

.phone-info, .email-info, .location-info, .horario-info {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
}

.telefone, .endereco {
  width: 24px;
  height: 24px;
  margin-right: 8px;
}

.phone-numbers p, .email-numbers p, .location-address p, .horario-hours p {
  margin: 0;
}

.contatot, .enderecot, .horariot {
  font-weight: bold;
}

.contatop, .emailp {
  word-break: break-word;
}

.copyright {
  margin-top: 1rem;
}

.logo {
  width: 150px; 
  height: auto; 
  margin-left: 1000px; 
}
 .endereco {
  width: 15px;
  height: 20px; 
  margin-right: 6px; 
}
.telefone {
  width: 20px; 
  height: 20px; 
  margin-right: 6px; 
}
.email {
    width: 17px;
  height: 15px; 
  margin-right: 6px; 
}
.relogio {
    width: 20px;
  height: 20px; 
  margin-right: 6px;  
}

@media (max-width: 480px) {
  .contact-info {
    flex-direction: column; 
    align-items: center; 
  }

  .contact-section, .email-section {
    margin: 0.5rem 0;
    width: 100%; 
  }

  .logo {
    width: 120px;
  }
}

@media (max-width: 480px) {
  .contact-info {
    padding: 0 1rem;
  }

  .telefone, .email, .endereco, .relogio {
    width: 20px; 
    height: 20px;
  }

  p {
    font-size: 14px;
  }
}

</style>