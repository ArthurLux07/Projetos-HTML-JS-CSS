function cadastro(){

var elementInptNome = document.getElementById ('nome').value
var elementInptEmail = document.getElementById ('email').value
var elementInptSenha = document.getElementById ('senha').value
var elementInptSexo = document.querySelector ("input[name='sexo']:checked").value

alert('Olá, ' + elementInptNome + '\n' + 'Seja bem vindo!')

}