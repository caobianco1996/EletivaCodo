interface UsarioDTO {
  nome: string;
  msg: string;
  email: string;
  telefone: Number;
}

interface UserTO {
  nome: string;
  msg: string;
  email: string;
  telefone?: Number;
}

function enviar(nome: string, msg: string, email: string, telefone: number) {
  console.log(
    "Ola ${nome} deru telefone é ${telefone} com ${email} e mensagem=${msg}"
  );
}

function enviarmsg(nome: string, msg: string, telefone: Number) {
  console.log("Ola ${nome} deru telefone é ${telefone} e mensagem=${msg}");
}

function enviarmsg2({ nome, msg, telefone }: UsarioDTO) {
  console.log("Ola ${nome} deru telefone é ${telefone} e mensagem=${msg}");
}

function enviarmsg3({ nome, msg, telefone }: UserTO) {
  console.log("Ola ${nome} deru telefone é ${telefone} e mensagem=${msg}");
}

enviarmsg("fabio", "teste 123 ", 12345);

enviarmsg2({
  nome: "fabio",
  msg: "teste 123 ",
  email: "teste@teste",
  telefone: 12345,
});

enviarmsg3({ nome: "fabio", msg: "teste 123 ", email: "teste@teste" });
enviarmsg3({
  nome: "fabio",
  msg: "teste 123 ",
  email: "teste@teste",
  telefone: 12345,
});
