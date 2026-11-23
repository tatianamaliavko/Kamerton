# Камертон

Учебный интернет-магазин музыкальных инструментов. Для просмотра откройте `index.html` через Live Server. CSS уже находится в `css/main.css`. Каталог, карточка товара и корзина работают в браузере. Выбор светлой или тёмной темы сохраняется между страницами. Корзина хранится в `localStorage`, заказ демонстрационный.

| Страница | Файл |
| --- | --- |
| Главная | `index.html` |
| Каталог | `catalog.html` |
| Карточка товара | `product.html?id=cedar` |
| Корзина и форма заказа | `cart.html` |

## Sass

В папке проекта выполните `npm install`, затем `npm run build`. Команда `npm run watch` пересобирает CSS при сохранении SCSS.

- `components/_buttons.scss` использует миксин `button-variant` для основной и компактной кнопок. Параметры задают внутренние отступы и цвета в обычном состоянии и при наведении.
- `components/_cards.scss` использует `@extend %tile` для карточек категорий и товаров. Общие рамка и скругление определены в одном месте.
- В `scss/main.scss` подключаются модули базовых стилей, компонентов, раскладки, страниц и палитр.

## Фотографии

Карточки каталога используют единый формат кадра. Категории на главной показывают студийные кадры на всю плитку. Товарные фотографии размещены на ровной светлой подложке без фильтров и цветового наложения. Для Yamaha и наушников заданы резервные адреса фотографий. Изображения загружаются с внешних сайтов. Для условных моделей фотографии показывают соответствующий тип инструмента. Цены приведены для учебного магазина.

- На главной используются [архивный джазовый кадр](https://historicalpix.com/products/coleman-hawkins-and-miles-davis-1947) и [старинный нотный лист](https://commons.wikimedia.org/wiki/File:Notenblatt-music-vintage-alt.jpg).
- Каталожные изображения для условных моделей: [pulse](https://www.gear4music.com/Guitar-and-Bass/LA-Electric-Guitar-by-Gear4music-Black-Nearly-New/6GXM), [cedar](https://www.gear4music.com/Guitar-and-Bass/Dreadnought-Acoustic-Guitar-by-Gear4music-Natural-Nearly-New/1U08), [lowline](https://www.gear4music.fr/fr/Guitare-and-Basse/Guitare-Basse-LA-Select-par-Gear4music-Naturel/1FP4), [studio88](https://www.gear4music.com/Keyboards-and-Pianos/SDP-2-Stage-Piano-by-Gear4music/1D57), [orbit](https://www.musikmarkthamburg.de/casio-ct-x700-arranger-keyboard.html), [beat25](https://www.altomusic.com/products/akai-mpk-mini-mk3-keyboard-controller-mpkminimk3), [venue](https://www.gear4music.ie/Drums-and-Percussion/BDK-5-Drum-Kit-by-Gear4music-Black/1S35), [metro](https://www.gear4music.com/us/en/Drums-and-Percussion/Stagg-14-x-55-Steel-Snare-Drum/36UJ), [box](https://www.gear4music.com/Drums-and-Percussion/Cajon-by-Gear4music-Sapele/CAL).
- Ссылки на фотографии Yamaha, Cort и аксессуаров находятся в `scripts/products.js`. Фотография ATH-M20x — [Gear4music](https://www.gear4music.de/de/Recording-and-Computer/Audio-Technica-ATH-M20x-Professioneller-Monitor-Kopfhorer/X9B).

Характеристики [Yamaha P-45](https://usa.yamaha.com/musical-instruments/pianos/products/p-series/p-45/specs.html) и [Cort AD810](https://www.cortguitars.com/wp-content/uploads/2024/06/Cort-2022-Catalog.pdf) взяты из каталогов производителей.

