# customized music menu 🎼🎶#
## I created a customized music menu 🎧## 
>### [Link Project](https://guilherme-alexander.github.io/customized-music-menu-/)
 
![preview](https://github.com/Guilherme-alexander/customized-music-menu-/blob/main/Captura%20da%20Web_9-4-2021_15243_.jpeg)
<br/>
># profile switching function


![preview](https://github.com/Guilherme-alexander/customized-music-menu-/blob/main/Captura%20da%20Web_9-4-2021_219_.jpeg)

<br/>

>Code JavaScripr 

<br/>

```javascript
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
```
