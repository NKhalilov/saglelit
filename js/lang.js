var arrLang = {
    'uz': {
        'lastseen': 'Сўнгги кўрилганлар',
        'famous': 'Оммабоп гиламлар',
        'new': 'Янги тўпламлар',
        'sales': 'Чегирмалар',
        'settings': 'Созламалар',
        'carpets': 'Гиламлар',
        'kovrolin': 'Ковролин',
        'grass': "Сунъий чим",
        'bed': 'Чойшаблар',
        'bathrobe': 'Халатлар',
        'textile': 'Тўқимачилик маҳсулотлари',
        'license': 'Барча хизматлар лицензияланган',
        'tolerance': 'Чиадмлилиги',
        'year': '10 йил',
        'bold': 'Қалинлиги',
        'node': '2 миллион тугун',
        'quality': 'Материал сифати',
        'material': 'Акрил',
        'collection': 'Янги коллекция',
        'fastness': 'Жуда тез тозаланади',
        'bedroom': 'Ётоқхонангиз учун энг қулай танлов',
        'designers': 'Дизайнерлар тавсия қилади',
        'price': '389 000 cўм',
        'cart': 'Саватга қўшиш'
    },
    'en': {
        'lastseen': 'Недавно просмотренные',
        'famous': 'Попульярные ковры',
        'new': 'Новинки',
        'sales': 'Скидки',
        'settings': 'Настройки',
        'carpets': 'Ковры',
        'kovrolin': 'Ковролин',
        'grass': 'Искусственный газон',
        'bed': 'Постельное бельё',
        'bathrobe': 'Халаты',
        'textile': 'Домашний текстиль',
        'license': 'Все правы зашищены',
        'tolerance': 'Долговечность',
        'year': '10 лет',
        'bold': 'Плотность',
        'node': '2 миллиона узлов',
        'quality': 'Качество материала',
        'material': 'Акрил',
        'collection': 'Новая коллекция',
        'fastness': 'Убирается очень быстро',
        'bedroom': 'Самый удобный выбор для вашей спальни',
        'designers': 'Дизайнеры рекомендуют',
        'price': '389 000 cум',
        'cart': 'Добавить в корзину'

    }
}
$(function () {
    $('.translate').click(function () {
        var lang = $(this).attr('id');

        $('.lang').each(function(index, element) {
            $(this).text(arrLang[lang][$(this).attr('key')]);
            console.log(arrLang[lang]);
        })
    })
})