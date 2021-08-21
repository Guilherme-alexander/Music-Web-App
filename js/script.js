
  function changeColor(color){
    const fundo = document.querySelector(body);
    fundo.style.background = color;
    }

  function imgSlider(anything){
    document.querySelector('.player-img').src = anything;
  }

  function menuimg(){
    const toggleMenu = document.querySelector('.player2');
    const navigation = document.querySelector('.painel');
    const one = document.querySelector('.one');
    const two = document.querySelector('.two');
    const three = document.querySelector('.three');
    toggleMenu.classList.toggle('ativo');
    navigation.classList.toggle('ativo');
    one.classList.toggle('ativo');
    two.classList.toggle('ativo');
    three.classList.toggle('ativo');
  }

  function sair(){
    const toggleMenu = document.querySelector('.player2');
    const navigation = document.querySelector('.painel');
    const one = document.querySelector('.one');
    const two = document.querySelector('.two');
    const three = document.querySelector('.three');
    toggleMenu.classList.remove('ativo');
    navigation.classList.remove('ativo');
    one.classList.remove('ativo');
    two.classList.remove('ativo');
    three.classList.remove('ativo');
  }

  function volume(){
    const painelControles = document.querySelector('.painelControles');
    const center = document.querySelector('.center');
    const volume1 = document.querySelector('.volume1');
    const volume2 = document.querySelector('.volume2');
    const volume3 = document.querySelector('.volume3');
    volume1.classList.toggle('ativo');
    volume2.classList.toggle('ativo');
    volume3.classList.toggle('ativo');
    painelControles.classList.toggle('ativo');
    center.classList.toggle('ativo');
  }
  function backgroundNormal(){
    const container = document.querySelector('.container');
    container.classList.remove('aqua');
    container.classList.remove('red');
    container.classList.remove('blue');
  }

  function backgroundFundo1(){
    const background = document.querySelector('.container');
    background.classList.toggle('aqua');
  }

  function backgroundFundo2(){
    const background = document.querySelector('.container');
    background.classList.toggle('red');
  }

  function backgroundFundo3(){
    const background = document.querySelector('.container');
    background.classList.toggle('blue');
  }

  function voltarInicio(){
    location = "index.html";
  }
    

  
  


    
    
