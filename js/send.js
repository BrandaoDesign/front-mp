function sendFunction() {
    // zera a notify
    document.getElementById("notify").innerHTML = "";
    $("#notify").fadeIn();

    var inpName = document.getElementById("nome");
    var inpMail = document.getElementById("email");
    var inpMsg = document.getElementById("mensagem");
    if (!inpName.checkValidity() || !inpMail.checkValidity() || !inpMsg.checkValidity()) {
      document.getElementById("notify").innerHTML = "<p class='alert-error-block'><strong>Por Favor!</strong> Preencha todo os campos.</p>";
    } else {
      // pegando os campos do formulário
      var nome = jQuery("#nome").val();
      var email = jQuery("#email").val();
      var mensagem = jQuery("#mensagem").val();
      
      if(nome=="" || email=="" || mensagem=="") {
        $("[type='submit']").trigger("click");
        return false;
      }

      jQuery.ajax({
        type: "POST",
        url: "enviar.php",
        dataType: "html",
        data: "nome=" + nome + "&email=" + email + "&mensagem=" + mensagem,
        
        // enviado com sucesso
        success: function(response){
          
          // exibe a mensagem
          document.getElementById("notify").innerHTML = "<p class='alert-success-block'><strong>Sucessso!</strong> Mensagem enviada, obrigado.</p>";
          $('#notify').fadeOut(5000);
          
          //reset form
          $(':input','#form')
            .not(':button, :submit, :reset, :hidden')
            .val('')
        },
        // quando houver erro
        error: function(){
          document.getElementById("notify").innerHTML = "<p class='alert-error-block'><strong>Ops!</strong> Ocorreu um erro durante a requisição</p>";
        }
      });
    } 
}