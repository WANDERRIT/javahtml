const urlJogadores = 'http://localhost:3000/api/jogadores';
const urlJogos = 'http://localhost:3000/api/jogos';
const urlRankings = "http://localhost:3000/api/rankings";

const form = document.getElementById('meuFormulario')

//POST JOGADORES
form.addEventListener('submit', async (event) => {
    event.preventDefault();
  
    const formData = new FormData(form);
    const formObject = {};
    formData.forEach((value, key) => {
      formObject[key] = value;
    });
  
    try {
      const response = await fetch(urlJogadores, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formObject),
      });
      
    const pedido = await response.json();
    console.log('Dados do pedido:', pedido);
    } catch (error) {
      console.error('Erro ao obter dados do pedido:', error);
    }
  });

  //POST JOGOS
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
  
    const formData = new FormData(form);
    const formObject = {};
    formData.forEach((value, key) => {
      formObject[key] = value;
    });
  
    try {
      const response = await fetch(urlJogos, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formObject),
      });
      
    const pedido = await response.json();
    console.log('Dados do pedido:', pedido);
    } catch (error) {
      console.error('Erro ao obter dados do pedido:', error);
    }
  });

  //POST RANKING
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
  
    const formData = new FormData(form);
    const formObject = {};
    formData.forEach((value, key) => {
      formObject[key] = value;
    });
  
    try {
      const response = await fetch(urlRankings, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formObject),
      });
      
    const pedido = await response.json();
    console.log('Dados do pedido:', pedido);
    } catch (error) {
      console.error('Erro ao obter dados do pedido:', error);
    }
  });
