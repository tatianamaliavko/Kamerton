const categories = {
  "guitars": "Гитары",
  "keys": "Клавишные",
  "drums": "Ударные",
  "accessories": "Аксессуары"
};

const products = [
  {
    id: "pulse",
    category: "guitars",
    name: "Электрогитара Pulse S",
    price: 890,
    image: "https://r2.gear4music.com/media/108/1087227/1200/preview.jpg",
    description: "Первый инструмент для рока, блюза и репетиций.",
    specs: ["6 струн", "Корпус из липы", "3 звукоснимателя", "Мензура 648 мм"]
  },
  {
    id: "cedar",
    category: "guitars",
    name: "Акустическая гитара Cedar 41",
    price: 540,
    image: "https://d1aeri3ty3izns.cloudfront.net/media/23/237074/1200/preview.jpg",
    description: "Полноразмерная акустика с объёмным звучанием для домашней игры и выступлений.",
    specs: ["6 металлических струн", "Корпус дредноут", "Верхняя дека из ели", "Размер 41″"]
  },
  {
    id: "lowline",
    category: "guitars",
    name: "Бас-гитара Lowline 4",
    price: 970,
    image: "https://d1aeri3ty3izns.cloudfront.net/media/57/579944/1200/preview.jpg",
    description: "Четырёхструнный бас для тех, кто держит ритм в группе.",
    specs: ["4 струны", "Мензура 864 мм", "Пассивная электроника", "Гриф из клёна"]
  },
  {
    id: "studio88",
    category: "keys",
    name: "Цифровое пианино Studio 88",
    price: 1790,
    image: "https://r2.gear4music.com/media/52/523711/1200/preview.jpg",
    description: "Полноразмерная клавиатура для занятий, записи и игры в наушниках.",
    specs: ["88 взвешенных клавиш", "128 голосов полифонии", "USB-MIDI", "Выход для наушников"]
  },
  {
    id: "orbit",
    category: "keys",
    name: "Синтезатор Orbit 61",
    price: 845,
    image: "https://cdn.webshopapp.com/shops/182579/files/176552639/casio-casio-ct-x-700-arranger-keyboard.jpg",
    description: "Универсальная клавиатура для домашних занятий, аранжировок и репетиций.",
    specs: ["61 клавиша", "Чувствительность к нажатию", "Встроенные динамики", "Выход для наушников"]
  },
  {
    id: "beat25",
    category: "keys",
    name: "MIDI-клавиатура Beat 25",
    price: 390,
    image: "https://www.altomusic.com/cdn/shop/files/mpkminimk3.png?v=1704220301",
    description: "Компактный контроллер для записи мелодий и ритмов в музыкальной программе.",
    specs: ["25 мини-клавиш", "8 пэдов", "USB-MIDI", "Питание через USB"]
  },
  {
    id: "venue",
    category: "drums",
    name: "Ударная установка Venue 5",
    price: 2380,
    image: "https://d1aeri3ty3izns.cloudfront.net/media/26/260602/1200/preview.jpg",
    description: "Акустическая установка для репетиций и первого концертного комплекта.",
    specs: ["5 барабанов", "Бас-барабан 22″", "Малый барабан 14″", "Крепления для томов"]
  },
  {
    id: "metro",
    category: "drums",
    name: "Малый барабан Metro 14",
    price: 480,
    image: "https://r2.gear4music.com/media/52/520189/1200/preview.jpg",
    description: "Чёткая атака и читаемый звук, который легко настроить под свой стиль.",
    specs: ["Диаметр 14″", "Глубина 5,5″", "Стальной корпус", "10 точек настройки"]
  },
  {
    id: "box",
    category: "drums",
    name: "Кахон Box Session",
    price: 310,
    image: "https://d1aeri3ty3izns.cloudfront.net/media/48/489175/1200/preview.jpg",
    description: "Деревянный кахон для акустических выступлений и партий без большой установки.",
    specs: ["Берёзовый корпус", "Высота 48 см", "Внутренние струны", "Нескользящие ножки"]
  },
  {
    "id": "cort-ad810",
    "category": "guitars",
    "name": "Акустическая гитара Cort AD810 OP",
    "price": 629,
    "image": "https://product.hstatic.net/200000388065/product/a_123d1c28d1254724be743a7e5831cab2.png",
    "description": "Шестиструнный дредноут из серии Cort Standard с открытыми порами и еловой верхней декой.",
    "specs": [
      "Корпус дредноут",
      "Еловая верхняя дека",
      "Мензура 648 мм",
      "Ширина верхнего порожка 43 мм"
    ]
  },
  {
    "id": "yamaha-p45",
    "category": "keys",
    "name": "Цифровое пианино Yamaha P-45",
    "price": 1890,
    "image": "https://shopfortemusic.com/wp-content/uploads/2021/12/p45.1.jpg",
    "imageFallback": "https://easymusiccenter.com/cdn/shop/products/YamahaP45B88-keyDigitalPiano_3288x.jpg?v=1637973035",
    "description": "Компактное цифровое пианино с молоточковой клавиатурой. Подходит для занятий дома, в том числе в наушниках.",
    "specs": [
      "88 клавиш GHS",
      "Полифония 64 голоса",
      "10 тембров",
      "USB To Host и выход для наушников"
    ]
  },
  {
    "id": "music-stand",
    "category": "accessories",
    "name": "Пюпитр K&M 10050",
    "price": 115,
    "image": "https://r2.gear4music.com/media/107/1071738/1200/preview.jpg",
    "description": "Складной пюпитр для нот и партитур. Высоту можно настроить для игры сидя или стоя.",
    "specs": [
      "Складная конструкция",
      "Регулируемая высота",
      "Опора-тренога"
    ]
  },
  {
    "id": "picks",
    "category": "accessories",
    "name": "Набор медиаторов Dunlop",
    "price": 22,
    "image": "https://m.media-amazon.com/images/I/61odMMy9q2L._AC_SL1200_.jpg",
    "description": "Медиаторы разной толщины для аккордов и сольных партий.",
    "specs": [
      "12 медиаторов",
      "Разные формы и толщины",
      "Для акустики и электрогитары"
    ]
  },
  {
    "id": "studio-headphones",
    "category": "accessories",
    "name": "Студийные наушники Audio-Technica ATH-M20x",
    "price": 145,
    "image": "https://r2.gear4music.com/media/36/360220/1200/preview.jpg",
    "imageFallback": "https://www.bhphotovideo.com/images/images2500x2500/audio_technica_ath_m20x_closed_back_professional_studio_1024219.jpg",
    "description": "Полноразмерные проводные наушники для занятий и записи.",
    "specs": [
      "Охватывающие амбушюры",
      "Проводное подключение",
      "Закрытая конструкция"
    ]
  },
  {
    "id": "frontman",
    "category": "accessories",
    "name": "Комбоусилитель Fender Frontman 10G",
    "price": 345,
    "image": "https://images.musicstore.de/langtextbilder/1280/git0012174-0001_GIT0012174-000.jpg",
    "description": "Компактный гитарный комбик для занятий дома.",
    "specs": [
      "Мощность 10 Вт",
      "Чистый звук и перегруз",
      "Выход для наушников"
    ]
  },
  {
    "id": "keyboard-stand",
    "category": "accessories",
    "name": "Стойка для клавишных Hercules KS120B",
    "price": 189,
    "image": "https://d1aeri3ty3izns.cloudfront.net/media/71/710696/1200/preview.jpg",
    "description": "Складная подставка для цифрового пианино или синтезатора.",
    "specs": [
      "Двойная X-рама",
      "Регулируемая высота",
      "Складная конструкция"
    ]
  },
  {
    "id": "piano-bench",
    "category": "accessories",
    "name": "Банкетка для пианино K&M",
    "price": 279,
    "image": "https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/_63/637088/21246914_800.jpg",
    "description": "Стул для пианино с мягким сиденьем. Высоту можно подстроить под посадку.",
    "specs": [
      "Регулируемая высота",
      "Мягкое сиденье",
      "Чёрная отделка"
    ]
  },
  {
    "id": "strings-acoustic",
    "category": "accessories",
    "name": "Струны для акустики D’Addario EJ16",
    "price": 39,
    "image": "https://musiclandkey.fs-storage.jp/fs2cabinet/dad/daddario-ej16/daddario-ej16-m-01-dl.jpg",
    "description": "Фосфорная бронза для шестиструнной акустической гитары.",
    "specs": [
      "Комплект 6 струн",
      "Калибр .012–.053",
      "Фосфорная бронза"
    ]
  },
  {
    "id": "strings-electric",
    "category": "accessories",
    "name": "Струны для электрогитары D’Addario EXL110",
    "price": 29,
    "image": "https://www.stringsdirect.co.uk/cdn/shop/products/EXL110_detail1_hi-res.jpg?v=1689009974",
    "description": "Стандартный комплект для шестиструнной электрогитары.",
    "specs": [
      "Комплект 6 струн",
      "Калибр .010–.046",
      "Никелированная обмотка"
    ]
  },
  {
    "id": "strings-classical",
    "category": "accessories",
    "name": "Нейлоновые струны D’Addario EJ45",
    "price": 35,
    "image": "https://terrycartermusicstore.com/cdn/shop/files/D_Addario-EJ45-Classical-Guitar-Strings-2.jpg?v=1775370382",
    "description": "Нейлоновый комплект нормального натяжения для классической гитары.",
    "specs": [
      "Комплект 6 струн",
      "Нормальное натяжение",
      "Для классической гитары"
    ]
  },
  {
    "id": "clip-tuner",
    "category": "accessories",
    "name": "Тюнер-прищепка D’Addario Eclipse",
    "price": 49,
    "image": "https://www.stringsdirect.co.uk/cdn/shop/files/PW-CT-17BK_oninstrument_hi-res.jpg?v=1744296710",
    "description": "Тюнер крепится к головке грифа и считывает вибрацию инструмента.",
    "specs": [
      "Крепление-прищепка",
      "Дисплей",
      "Для гитары и баса"
    ]
  },
  {
    "id": "capo",
    "category": "accessories",
    "name": "Каподастр D’Addario NS Pro",
    "price": 78,
    "image": "https://fiddlershop.com/cdn/shop/products/D_AddarioNSProGuitarCapo-2.jpg?v=1652280553&width=1080",
    "description": "Позволяет менять тональность, сохраняя привычные аппликатуры.",
    "specs": [
      "Регулировка прижима",
      "Алюминиевый корпус",
      "Для гитар со стальными струнами"
    ]
  },
  {
    "id": "instrument-cable",
    "category": "accessories",
    "name": "Гитарный кабель Blackstar, 3 м",
    "price": 45,
    "image": "https://www.melodyhousemi.com/assets/library/Blackstar/BA231020-1.jpg",
    "description": "Кабель для подключения электрогитары или баса к комбоусилителю.",
    "specs": [
      "Длина 3 м",
      "Разъёмы 6,35 мм",
      "Прямые штекеры"
    ]
  }
];
