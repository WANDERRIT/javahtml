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
      
    const jogador = await response.json();
    console.log('Dados do jogador:', jogador);
    } catch (error) {
      console.error('Erro ao obter dados do jogador:', error);
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
      
    const jogo = await response.json();
    console.log('Dados do jogo:', jogo);
    } catch (error) {
      console.error('Erro ao obter dados do jogo:', error);
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
      
    const ranking = await response.json();
    console.log('Dados do pedido:', ranking);
    } catch (error) {
      console.error('Erro ao obter dados do ranking:', error);
    }
  });
