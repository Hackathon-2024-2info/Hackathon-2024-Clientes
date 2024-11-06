<script setup></script>

<template>
  <div id="div1">
    <div id="nav">
      <nav>
        <p><a href="#home">Home</a></p>
        <p><a href="#sobre">Sobre nós</a></p>
        <p><a href="#servicos">Serviços</a></p>
        <p><a href="#contato">Contato</a></p>
      </nav>
    </div>
    <div id="img">
      <img src="../assets/images/logo.jpeg" alt="" />
    </div>
  </div>
</template>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&display=swap');
nav  {
  margin: 0%;
  background: #0f0541;
  height: 72px;
  width: 100vw;
  padding: 0;
  display: grid;
  grid-template-columns: 15% 15% 15% 15% 1fr;
}
p, a{
  font-family: 'Jost', sans-serif;
  font-optical-sizing: auto;
  font-size: 20px;
  font-style: normal;
  color: white;
  margin: 0;
  text-align: center;
  margin-top: 10%;
  background: #0f0541;
  text-decoration: none;

}
#div1{
    display: flex;
    width: 100vw;
}

#nav{
width: 100vw; 
float: left
}
img {
  position: absolute;
  width: 120px;
  margin-top: 1%;
  display: flex;
  justify-content: right;
  margin-left: 10%;
}

#img{
  margin-left: -25%;
    flex-grow: 1;
    background-color: #0f0541
}

#sobrenos {
  left: 20.97%;
  right: 68.82%;
  top: 29.76%;
  bottom: 47.32%;
  font-family: 'Jost';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 35px;
  color: #ffffff;
}

#contato {
  left: 54.72%;
  right: 35.07%;
  top: 29.76%;
  bottom: 46.96%;

  font-family: 'Jost';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 35px;
  color: #ffffff;
}

#servicos {
  left: 38.75%;
  right: 52.85%;
  top: 29.76%;
  bottom: 35.32%;

  font-family: 'Jost';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 35px;

  color: #ffffff;
}
body {
  margin: 0;
}

#home {
  left: 6.67%;
  right: 86.6%;
  top: 29.66%;
  bottom: 47.06%;

  font-family: 'Jost';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 35px;

  color: #ffffff;
}



@media only screen and (max-width: 480px){
  nav {
    margin: -3%;
    width: 70px;
    height: 100px;
  }
  p, a {
    font-size: 15px; 
    padding: 30px;
  }

  #div1{
    display: flex;
    margin: -3%;
}

#nav{
  margin: -3%;
  width: 35px; float: left
}


#sobrenos {
  left: 2.97%;
  top: 29.76%;
  bottom: 47.32%;
  font-family: 'Jost';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 35px;
  color: #ffffff;
}

#contato {
  left: 54.72%;
 
  top: 29.76%;
  bottom: 46.96%;

  font-family: 'Jost';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 35px;
  color: #ffffff;
}

#servicos {
  left: 38.75%;
  top: 29.76%;
  bottom: 35.32%;
  font-family: 'Jost';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 35px;
  color: #ffffff;
}


#home {
  left: 6.67%;
  right: 86.6%;
  top: 29.66%;
  bottom: 47.06%;
  font-family: 'Jost';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 35px;
  color: #ffffff;
}

  img {
    margin-left: 32%;
    width: 90px; 
    padding: 6%;
  }
}

</style>
