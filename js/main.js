/*
Correções:
- Alterados os nomes das funções de "mascara" para "mask".
- Ajustada a configuração de "rules", que estava como "requerido", mas o correto é "required".
- Corrigido o ID do container do carrossel, que estava diferente do utilizado no Slick.
- Os plugins de máscara e validação estavam sendo importados antes do jQuery, o que ocasionava erros. A ordem foi ajustada.
- Corrigida a comparação na função "invalidHandler".
- Alteradas as mensagens genéricas de validação para mensagens customizadas.
*/

$('#telefone').mask('(00) 00000-0000', {
    placeholder: '(DDD) 12345-6789'
})

$('#cpf').mask('000.000.000-00', {
    placeholder: '123.456.789-00'
})

$('#cep').mask('00000-000', {
    placeholder: '012345-678'
})

$('form').validate({
    rules: {
        nome: {
            required: true
        },
        email: {
            required: true,
            email: true
        },
        telefone: {
            required: true
        },
        endereco: {
            required: true
        },
        cep: {
            required: true
        },
        cpf: {
            required: true
        },
    },
    messages: {
        nome: "Por favor, insira seu nome completo.",
        email: "Insira um endereço de e-mail válido.",
        telefone: "Insira um número de telefone válido.",
        endereco: "Por favor, informe seu endereço.",
        cep: "Digite um CEP válido.",
        cpf: "Por favor, insira um CPF válido."
    },
    submitHandler: function (form) {
        alert("Sua requisição foi enviada para análise, parabéns pela aquisição!");
        form.reset();
    },
    invalidHandler: function (form, validator) {

        if(validator.errorList.length > 0){
            alert("Por favor, preencha os campos para prosseguir com a compra!");
        }   

    }
})