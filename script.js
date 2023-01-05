document.getElementById("botaoenviar").addEventListener("click", validaFormulario)

function validaFormulario ( ) { if(document.getElementById("nome").value != "" && document.getElementById("Email").value != "" && document.getElementById("Telefone").value != ""){ alert("Prontinho!Você receberá as novidades em Breve por Email")                                                       }else{
alert("Por favor, Preencha os campos Nome e Email")
}}
                 