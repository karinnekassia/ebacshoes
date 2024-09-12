$(document).ready(function() {
    // Navegação suave ao clicar nos links do menu
    $('#link-sobre').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('#sobre').offset().top
        }, 800);
    });

    $('#link-formulario').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('#formulario').offset().top
        }, 800);
    });

    // Validação e submissão do formulário
    $('#compraForm').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            endereco: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor insira o seu nome.',
            email: 'Por favor insira um e-mail válido.',
            endereco: 'Por favor insira o seu endereço.'
        },
        submitHandler: function(form) {
            // Capturar dados do formulário
            const nome = $('#nome').val();
            const email = $('#email').val();
            const endereco = $('#endereco').val();
            const produto = $('#produto').val();
            const quantidade = $('#quantidade').val();

            // Simulação de envio do formulário
            alert(`Obrigado, ${nome}! Sua compra foi realizada com sucesso!`);
            $(form).trigger('reset'); // Limpa o formulário após a submissão
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos.`);
            }
        }
    });

    // Adiciona o produto ao formulário e rola até a parte de formulário
    $('.product button').on('click', function() {
        // Obtém o produto selecionado
        const produto = $(this).closest('.product').data('produto');
        // Preenche o campo do formulário com o produto selecionado
        $('#produto').val(produto);
        // Rola até o formulário
        $('html, body').animate({
            scrollTop: $('#formulario').offset().top
        }, 800);
    });
});
