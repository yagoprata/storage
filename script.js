function mascaraCep(cep) {
  var inputCep = document.getElementById("cep");
  var varCep = cep.value;
  cep.setAttribute("maxlength", "10");
  if (isNaN(varCep[varCep.length - 1])) {
    cep.value = varCep.substring(0, varCep.length - 1);
    return;
  }
  if (varCep[2] != "." && varCep[2] != undefined)
    inputCep.value = varCep.slice(0, 2) + "." + varCep[2];
  if (varCep[6] != "-" && varCep[6] != undefined)
    inputCep.value = varCep.slice(0, 6) + "-" + varCep[6];
}

function mascaraCpf(cpf) {
  var inputCpf = document.getElementById("cpf");
  var varCpf = cpf.value;
  cpf.setAttribute("maxlength", "14");
  if (isNaN(varCpf[varCpf.length - 1])) {
    cpf.value = varCpf.substring(0, varCpf.length - 1);
    return;
  }
  if (varCpf[3] != "." && varCpf[3] != undefined)
    inputCpf.value = varCpf.slice(0, 3) + "." + varCpf[3];
  if (varCpf[7] != "." && varCpf[7] != undefined)
    inputCpf.value = varCpf.slice(0, 7) + "." + varCpf[7];
  if (varCpf[11] != "-" && varCpf[11] != undefined)
    inputCpf.value = varCpf.slice(0, 11) + "-" + varCpf[11];
}

function mascaraTelefone(telefone) {
  var inputTelefone = document.getElementById("telefone");
  var varTelefone = telefone.value;
  telefone.setAttribute("maxlength", 16);
  if (isNaN(varTelefone[varTelefone.length - 1])) {
    telefone.value = varTelefone.substring(0, varTelefone.length - 1);
    return;
  }
  if (varTelefone[0] != "(" && varTelefone[0] != undefined)
    inputTelefone.value = "(" + varTelefone[0];
  if (varTelefone[3] != ")" && varTelefone[3] != undefined)
    inputTelefone.value = varTelefone.slice(0, 3) + ") " + varTelefone[3];
  if (varTelefone[6] != " " && varTelefone[6] != undefined)
    inputTelefone.value = varTelefone.slice(0, 6) + " " + varTelefone[6];
  if (varTelefone[11] != "-" && varTelefone[11] != undefined)
    inputTelefone.value = varTelefone.slice(0, 11) + "-" + varTelefone[11];
}

function mascaraCnpj(Cnpj) {
  var inputCnpj = document.getElementById("cnpj");
  var varCnpj = Cnpj.value;
  Cnpj.setAttribute("maxlength", 18);
  if (isNaN(varCnpj[varCnpj.length - 1])) {
    Cnpj.value = varCnpj.substring(0, varCnpj.length - 1);
    return;
  }
  if (varCnpj[2] != "." && varCnpj[2] != undefined)
    inputCnpj.value = varCnpj.slice(0, 2) + "." + varCnpj[2];
  if (varCnpj[6] != "." && varCnpj[6] != undefined)
    inputCnpj.value = varCnpj.slice(0, 6) + "." + varCnpj[6];
  if (varCnpj[10] != "/" && varCnpj[10] != undefined)
    inputCnpj.value = varCnpj.slice(0, 10) + "/0001" + varCnpj[10];
  if (varCnpj[15] != "-" && varCnpj[15] != undefined)
    inputCnpj.value = varCnpj.slice(0, 15) + "-" + varCnpj[15];
}

function mascaraCodigo(codigo) {
  var inputCodigo = document.getElementById("codigo");
  var varCodigo = codigo.value;
  codigo.setAttribute("maxlength", 20);
  if (isNaN(varCodigo[varCodigo.length - 1])) {
    codigo.value = varCodigo.substring(0, varCodigo.length - 1);
    return;
  }
  if (varCodigo[2] != "_" && varCodigo[2] != undefined)
    inputCodigo.value = varCodigo.slice(0, 2) + "_" + varCodigo[2];
  if (varCodigo[5] != "/" && varCodigo[5] != undefined)
    inputCodigo.value = varCodigo.slice(0, 5) + "//" + varCodigo[5];
  if (varCodigo[10] != "-" && varCodigo[10] != undefined)
    inputCodigo.value = varCodigo.slice(0, 10) + "-";
  if (varCodigo[14] != "." && varCodigo[14] != undefined)
    inputCodigo.value = varCodigo.slice(0, 14) + ".9." + varCodigo[14];
}

const button = document.querySelector("button");
const modal = document.querySelector("dialog");

button.onclick = function () {
  modal.showModal();
};

const btnCadastro = document.getElementById("btnCadastro");
const dialogCadastro = document.getElementById("dialogCadastro");
const formCadastro = document.getElementById("formCadastro");

btnCadastro.addEventListener("click", function () {
  dialogCadastro.showModal();
});

formCadastro.addEventListener("submit", function (event) {
  event.preventDefault();

  let nome = document.getElementById("inputNome");
  let endereco = document.getElementById("inputEndereco");
  let cep = document.getElementById("cep");
  let cpf = document.getElementById("cpf");
  let cpnj = document.getElementById("cpnj");
  let telefone = document.getElementById("telefone");
  let codigo = document.getElementById("codigo");

  localStorage.setItem("nome", nome.value);
  localStorage.setItem("endereco", endereco.value);
  localStorage.setItem("cep", cep.value);
  localStorage.setItem("cpf", cpf.value);
  localStorage.setItem("cnpj", cnpj.value);
  localStorage.setItem("telefone", telefone.value);
  localStorage.setItem("codigo", codigo.value);

  alert("Seu cadastro foi realizado!");
  dialogCadastro.close();
  window.location.href = "segunda.html";
});

function carregarDados() {
  let nome = document.getElementById("nome");
  let endereco = document.getElementById("endereco");
  let cep = document.getElementById("cep");
  let cpf = document.getElementById("cpf");
  let cpnj = document.getElementById("cpnj");
  let telefone = document.getElementById("telefone");
  let codigo = document.getElementById("codigo");

  nome.innerText = localStorage.getItem("nome");
  endereco.innerText = localStorage.getItem("endereco");
  cep.innerText = localStorage.getItem("cep");
  cpf.innerText = localStorage.getItem("cpf");
  cnpj.innerText = localStorage.getItem("cnpj");
  telefone.innerText = localStorage.getItem("telefone");
  codigo.innerText = localStorage.getItem("codigo");
}
