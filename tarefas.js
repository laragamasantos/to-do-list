let listaTarefasEl = document.querySelector('#lista-tarefas');
let botaoEl = document.querySelector('#incluir-nova-tarefa');
let inputEl = document.querySelector('#nova-tarefa-nome');
let campoCategoraEl = document.querySelector('#nova-tarefa-categoria');

let tarefas = [
  {
    nome: 'Comprar leite',
    categoria: 'compras',
    marcado: false
  },
  {
    nome: 'Escutar chimbinha',
    categoria: 'lazer',
    marcado: true
  }
];

function criaNovoItem(){
  let novoItem = {
    nome: inputEl.value,
    categoria: campoCategoraEl.value,
    marcado: false
  };
  tarefas.push(novoItem);
  insereTarefaNaPagina(novoItem);
  inputEl.value = '';
  inputEl.focus();
}

function insereTarefaNaPagina(tarefa){
  let elementoListaEl = document.createElement('li');
  elementoListaEl.innerHTML = tarefa.nome;
  elementoListaEl.classList.add('item-tarefa');

  if(tarefa.categoria === 'lazer'){
    elementoListaEl.classList.add('categoria-lazer');
  } else if(tarefa.categoria === 'compras'){
    elementoListaEl.classList.add('categoria-compras');
  } else{
    elementoListaEl.classList.add('categoria-estudos');
  }

  if(tarefa.marcado){
    elementoListaEl.classList.add('marcado');
  }
  let primeiroFilhoEl = listaTarefasEl.querySelector(':first-child');
  listaTarefasEl.insertBefore(elementoListaEl, primeiroFilhoEl);
}

listaTarefasEl.innerHTML = '';
tarefas.forEach(el => insereTarefaNaPagina(el));
botaoEl.addEventListener('click', criaNovoItem);
inputEl.addEventListener('keyup', function(e){
  if(e.key === 'Enter')
    criaNovoItem();
});
