const width  = window.innerWidth || document.documentElement.clientWidth  ||  document.body.clientWidth;
const height = window.innerHeight|| document.documentElement.clientHeight ||  document.body.clientHeight;

let counter = 0;
let numberOfTime = 0;

function makeMeAngry() {
  counter++;
  if (numberOfTime < 2) {
    if (counter === 4) {
      const io = document.getElementById('io');  
      io.style.opacity = 0;
      const saluto = document.getElementById('saluto');  
      saluto.innerText = 'Please stop 🙏🏻';
      setTimeout(function(){
        io.style.opacity = 1;
        counter = 0;
        saluto.innerText = 'Ciao 👋🏻';
        numberOfTime ++;
      }, 2200)
    }
  } else {
    const io = document.getElementById('io');  
    io.style.opacity = 0;
    const saluto = document.getElementById('saluto');  
    saluto.innerText = 'Bye bye 👋🏻';
    setTimeout(function(){
      io.style.opacity = 1;
      counter = 0;
      saluto.innerText = 'I\'m back bitches 🤟🏻';
      numberOfTime = 0;
    }, 10000)
  }
}

function makeItBigger() {  
  const bicipite = document.getElementById('muscle');  
  const urlo = document.createElement('div'); 
  const whoaa = document.createTextNode('WHOAAA'); 
  urlo.appendChild(whoaa); 
  bicipite.style.fontSize = '50px'
  bicipite.appendChild(urlo)
  setTimeout(function(){
    bicipite.style.fontSize = '16px'
    urlo.remove()
  }, 2200)
}

function pandaEverywhere() {
  const pandas = document.getElementsByClassName('pandas');
  for (var i = 0; i < pandas.length; i++) {
    pandas[i].innerText = pandas[i].innerText.replace(/o/g, '🐼')
  }
}

function showMytheLove(){
  const roma = document.getElementById('roma');
  roma.innerText = 'Nell\'eterna ROMA 🐺'
  setTimeout(function(){
    roma.innerText = 'Born in 🇮🇹'
  }, 2200)  
}

function makeItRain() {   
  const forno = document.createElement('div');
  const listaPizze = []
  for (let i = 0; i < 88; ++i) {
    const pizza = document.createElement('div'); 
    const condimento = document.createTextNode('🍕'); 
    pizza.appendChild(condimento); 
    pizza.style.left = (Math.random() * width) + 'px',
    pizza.style.top = (Math.random() * height) + 'px',
    pizza.style.position = 'absolute';
    listaPizze.push(pizza)
    forno.appendChild(pizza)
  }
  const ilSognoditutti = document.getElementById('pizza');  
  ilSognoditutti.appendChild(forno)
  // Not all browsers are supporting animate  
  try {
    listaPizze.forEach(function(el){
        const animation = el.animate([
          { transform: 'scaleX(0.5) scaleY(0.5) rotate(360deg)'},
          { transform: 'scaleY(2) scaleX(2) rotate(0deg)'},
        ], {
          duration: 2200,
          iterations: 1,
          delay: 0,
        })
        animation.onfinish = function(){
          forno.remove()
        };
    })
  } catch(e) {
    setTimeout(function(){
      forno.remove();
    }, 2200) 
  }
}
