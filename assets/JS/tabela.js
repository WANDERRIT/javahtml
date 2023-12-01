const url = "http://localhost:3000/api/jogadores"

document.addEventListener('DOMContentLoaded', function () {
    // Função para criar botões para cada linha
    function criarBotoes(id) {
        const editarBotao = `<button onclick="editarUsuario(${id})">Editar</button>`;
        const excluirBotao = `<button onclick="excluirUsuario(${id})">Excluir</button>`;
        return `${editarBotao} ${excluirBotao}`;
    }

    // Função para editar um usuário
    window.editarUsuario = function (id) {
       
        fetch('http://localhost:3000/api/jogadores/1', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                emailJogador: "rob@email.com",
                nicknameJogador: "robb",
                nomeJogador: "Robertot",
            }),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erro ao editar jogador: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            alert(`Usuário editado com sucesso!`);
    
        })
        .catch(error => console.error('Erro ao editar jogador:', error));
    };

    // Função para excluir um usuário
    window.excluirUsuario = function (id) {
       
        if (confirm('Tem certeza de que deseja excluir este jogador?')) {
            fetch(`http://localhost:3000/api/rankings/4`, {
                method: 'DELETE',
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Erro ao excluir jogador: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                alert(`Jogador excluído com sucesso!`);
            
            })
            .catch(error => console.error('Erro ao excluir jogador:', error));
        }
    };

    // Fazer uma solicitação à API
    fetch(url)
        .then(response => response.json())
        .then(data => {
  
            const tabelaBody = document.querySelector('#dadosTabela tbody');
            console.log(data);

            data.forEach(usuario => {
                const novaLinha = document.createElement('tr');
                novaLinha.innerHTML = `
                    <td>${usuario.idJogador}</td>
                    <td>${usuario.nomeJogador}</td>
                    <td>${usuario.emailJogador}</td>
                    <td>${usuario.nicknameJogador}</td>
                    <td>${usuario.rankings.map(ranking => ranking.pontuacao)}</td>
                    <td>${usuario.rankings.map(jogos => jogos.jogos.nomeJogo)}</td>
                    <td>${criarBotoes(usuario.id)}</td>
                `;
                tabelaBody.appendChild(novaLinha);
                console.log(usuario)
            });
        })
        .catch(error => console.error('Erro ao obter dados da API:', error));
});