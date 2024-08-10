$('.pergunta').click(function () {
    //PEGA O ATRIBUTO DATA-PERGUNTA
    var id = $(this).attr('data-pergunta')

    //VARRE TODAS AS RESPOSTAS PARA VER SE É DAQUELA PERGUNTA CLICADA
    $('.resposta').each(function () {
        if ($(this).attr('id') == id) {
            var resposta=$(this)
            resposta.slideToggle('fast', function () {

                //ADICIONA A ANIMAÇÃO
                $('.icon').each(function () {
                    var iconId = $(this).attr('id').replace('icone-', '')

                    if (iconId == id && resposta.is(':visible')) {
                        executar(iconId, '23deg')
                    } else {
                        executar(iconId, '0deg')
                    }
                })
            })

        } else {
            $(this).slideUp('fast')
            
        }
    })
})

function executar(id, graus) {
    $('.icon').each(function () {
        if ($(this).attr('id') == "icone-" + id) {
            $(this).stop().animate({ rotate: graus }, {
                duration: 200,
                easing: 'linear',
                step: function (now, fx) {
                    $(this).css('transform', 'rotate(' + now + 'deg)')
                }
            })
        }
    })
}