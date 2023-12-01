const button = document.getElementById('id-button');
const infoPlayer = document.getElementById('id-busca');
const url = "http://localhost:3000/games/jogadores"

button.onclick = function (event){
    event.preventDefault();
    infoPlayer.style.display = "block";
}

button.addEventListener('click', (event)=>{
    event.preventDefault();
    const playerId = document.getElementById('IdInput').value;

    fetch(`http://localhost:3000/games/jogadores/${playerId}`)
    .then((resp) => resp.json())
    .then((data) => {
        console.log(data)

        infoPlayer.innerHTML = `
        <h4>Id do jogador: ${data.idJogador}</h4>
        <P>Nome: ${data.nomeJogador}</P>
        <P>Apelido: ${data.nicknameJogador}</P>
        `
    }).catch((error)=>{
        console.error("Operação não concluída", error);

    })


})