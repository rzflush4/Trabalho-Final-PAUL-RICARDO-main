function login() {
    const usuario = document.getElementById('usuario').value
    const senha = document.getElementById('senha').value

    const pessoa = {
        usuario: usuario,
        senha: senha
    }

    // Faz a solicitação POST para o backend
    fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(pessoa)
    })
        .then(response => response.json())
        .then(pessoa => {
            alert("Bem vindo!")
            window.location.href = "index.html"
        })
        .catch(error => {
            alert('Erro ao fazer login', error);
        });
}