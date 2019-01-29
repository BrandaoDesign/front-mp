<?php
// mensagem de enviado com suceso
$enviado = "E-mail enviado com sucesso!";

// mensagem de erro ao enviar
$erro = "Erro ao enviar o e-mail!";

// campos do formulário
$nome = @trim(stripslashes($_POST['nome'])); 
$email = @trim(stripslashes($_POST['email'])); 
$assunto = "Front-MP - Contato através do framework."; 
$mensagem = @trim(stripslashes($_POST['mensagem'])); 

// QUEM RECEBE O E-MAIL
$emailpara = "renato.sousa@mpgo.mp.br";

$headers = "MIME-Version: 1.0\n";
$headers.= "Content-type: text/html; charset=iso-8859-1\n";
$headers.= "From: ".$nome." <".$email.">";

@mail($emailpara, $assunto, $mensagem, $headers) or die($erro);

echo $enviado;
die;
?>