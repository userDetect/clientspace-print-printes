export const business = {
  "name": "PrintES",
  "slug": "printes",
  "products": [
    {
      "id": "p1",
      "oldIndex": 0,
      "name": "Визитки и листовки",
      "detail": "Печать промоматериалов по готовому или разработанному макету",
      "group": "Печать",
      "photo": "",
      "url": "",
      "imageAlt": "Визитки и листовки"
    },
    {
      "id": "p2",
      "oldIndex": 1,
      "name": "Брошюры и методички",
      "detail": "Печать многостраничных материалов для бизнеса и учёбы",
      "group": "Книги и брошюры",
      "photo": "",
      "url": "",
      "imageAlt": "Брошюры и методички"
    },
    {
      "id": "p3",
      "oldIndex": 2,
      "name": "Книги и переплёт",
      "detail": "Вёрстка и оформление изданий, твёрдый переплёт и брошюровка",
      "group": "Книги и брошюры",
      "photo": "",
      "url": "",
      "imageAlt": "Книги и переплёт"
    },
    {
      "id": "p4",
      "oldIndex": 3,
      "name": "Календари и блокноты",
      "detail": "Фирменная печатная продукция",
      "group": "Печать",
      "photo": "",
      "url": "",
      "imageAlt": "Календари и блокноты"
    },
    {
      "id": "p5",
      "oldIndex": 4,
      "name": "Таблички, наклейки и вывески",
      "detail": "Наклейки, простые вывески и указатели",
      "group": "Вывески и конструкции",
      "photo": "",
      "url": "",
      "imageAlt": "Таблички, наклейки и вывески"
    },
    {
      "id": "p6",
      "oldIndex": 5,
      "name": "Сувениры с символикой",
      "detail": "Печать на тканях, флажках и подарочной продукции",
      "group": "Сувениры и брендирование",
      "photo": "",
      "url": "",
      "imageAlt": "Сувениры с символикой"
    },
    {
      "id": "p7",
      "oldIndex": null,
      "name": "Фирменные бланки",
      "detail": "Прайс различает газетную и офсетную бумагу 80 г/м², форматы и число сторон печати.",
      "group": "Деловая полиграфия",
      "photo": "assets/99a09c7f2eebd3186b57edf2.webp",
      "url": "https://print-es.ru/прайс-лист/",
      "imageAlt": "Фирменные бланки"
    },
    {
      "id": "p8",
      "oldIndex": null,
      "name": "Переплёт диплома",
      "detail": "Оформление печатной работы с твёрдым переплётом.",
      "group": "Книги и переплёт",
      "photo": "",
      "url": "https://print-es.ru/pereplet-diplomov/",
      "imageAlt": "Переплёт диплома"
    }
  ],
  "tariffs": [
    {
      "id": "t1",
      "product": "p7",
      "productLabel": "Фирменные бланки",
      "label": "А3, газетная бумага, 1+0",
      "quantity": 50,
      "displayQuantity": 50,
      "price": "2,25 ₽/шт.",
      "rules": "Цена экземпляра при тираже 50 шт. Печать в одну краску с одной стороны.",
      "url": "https://print-es.ru/прайс-лист/",
      "amount": 112.5,
      "mode": "batch",
      "apply": true
    },
    {
      "id": "t2",
      "product": "p7",
      "productLabel": "Фирменные бланки",
      "label": "А3, газетная бумага, 1+1",
      "quantity": 100,
      "displayQuantity": 100,
      "price": "3,65 ₽/шт.",
      "rules": "Цена экземпляра при тираже 100 шт. Печать в одну краску с двух сторон.",
      "url": "https://print-es.ru/прайс-лист/",
      "amount": 365,
      "mode": "batch",
      "apply": true
    },
    {
      "id": "t3",
      "product": "p7",
      "productLabel": "Фирменные бланки",
      "label": "А3, офсетная бумага 80 г/м², 1+0",
      "quantity": 100,
      "displayQuantity": 100,
      "price": "2,58 ₽/шт.",
      "rules": "Цена экземпляра при тираже 100 шт.",
      "url": "https://print-es.ru/прайс-лист/",
      "amount": 258,
      "mode": "batch",
      "apply": true
    },
    {
      "id": "t4",
      "product": "p7",
      "productLabel": "Фирменные бланки",
      "label": "А3, офсетная бумага 80 г/м², 1+1",
      "quantity": 100,
      "displayQuantity": 100,
      "price": "4,23 ₽/шт.",
      "rules": "Цена экземпляра при тираже 100 шт.",
      "url": "https://print-es.ru/прайс-лист/",
      "amount": 423,
      "mode": "batch",
      "apply": true
    }
  ],
  "fields": [
    {
      "key": "quantity",
      "label": "Тираж, шт.",
      "type": "number",
      "applies": null
    },
    {
      "key": "format",
      "label": "Размер или формат",
      "type": "text",
      "applies": null
    },
    {
      "key": "paper",
      "label": "Бумага и отделка",
      "type": "text",
      "applies": null
    },
    {
      "key": "design",
      "label": "Готовность макета",
      "type": "select",
      "options": [
        "Макет готов",
        "Нужна проверка",
        "Нужен дизайн"
      ],
      "applies": null
    },
    {
      "key": "deadline",
      "label": "Желаемая дата",
      "type": "date",
      "applies": null
    }
  ],
  "fileLabel": "Макет для печати"
};
