const axios = require('axios');

for (let i = 1; i <= 10; i++) {
  const novaCategoria = {
    nome: `Categoria ${i}`
  };

  axios.post('http://localhost:3000/categorias', novaCategoria)
    .then(response => {
      console.log(`Categoria ${i} cadastrada com sucesso.`);
    })
    .catch(error => {
      console.error(`Erro ao cadastrar categoria ${i}: ${error.message}`);
    });
}

for (let i = 1; i <= 15; i++) {
  const novoLivro = {
    titulo: `Livro ${i}`,
    categoriaId: i % 10 + 1
  };

  axios.post('http://localhost:3000/livros', novoLivro)
    .then(response => {
      console.log(`Livro ${i} cadastrado com sucesso.`);
    })
    .catch(error => {
      console.error(`Erro ao cadastrar livro ${i}: ${error.message}`);
    });
}
