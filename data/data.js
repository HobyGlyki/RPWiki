// === БАЗА ДАННЫХ ПЕРСОНАЖЕЙ ===
const charactersData = [
  // === ГРУППА: РАЙСЫ ===
  {
    "id": "jerry",
    "name": "Джеррими Райс (Red X)",
    "nickname": "Герой, бывший Объект №42",
    "image": "Statics/image/JerryAva.jpg", 
    "link": "Wikis/jerry",
    "dateAdded": "2025-04-12",
    "tags": ["hero"],
    "author": "mic",
    "settings": { "posY": "top", "scale": "1.0" }
  },
  {
    "id": "chanzie",
    "name": "Чанзи Райс",
    "nickname": "Жена Джерри и мать Коула и Дженнифер",
    "image": "Statics/image/chanzie.jpg",
    "link": "Wikis/chanzie",
    "dateAdded": "2025-04-16",
    "tags": ["hero", 'demon'],
    "author": "sasha",
    "settings": { "posY": "-0px", "center": true, "scale": "1.0" }
  },
  {
    "id": "jenny",
    "name": "Дженнифер Райс",
    "nickname": "Дочь Джерри и Чанзи Райс",
    "image": "Statics/image/jenny.jpg",
    "link": "Wikis/jenny",
    "dateAdded": "2025-04-15",
    "tags": ["hero"],
    "author": "mic",
    "settings": { "posY": "-0px", "center": true, "scale": "1.0" }
  },
  {
    "id": "cole",
    "name": "Коул Райс",
    "nickname": "Страж, Ангел Смерти",
    "image": "Statics/image/cole.jpg",
    "link": "Wikis/cole",
    "dateAdded": "2025-04-18",
    "tags": ["hero", 'angel'],
    "author": "sasha",
    "settings": { "posY": "-0px", "center": true, "scale": "1.0" }
  },
    {
    "id": "remor",
    "name": "Ремор",
    "nickname": "Бог Кошмаров и Снов",
    "image": "Statics/image/remor2.jpg",
    "link": "Wikis/remor",
    "dateAdded": "2025-04-20",
    "tags": ["hero", 'god'],
    "author": "mic",
    "settings": { "posY": "-0px", "center": true, "scale": "1.0" }
  },
  {
    "id": "violet",
    "name": "Фиалка Грейро Морн",
    "nickname": "Дочь Смерти, девушка Коула Райса",
    "image": "Statics/image/violet.jpg",
    "link": "Wikis/violet",
    "dateAdded": "2025-04-22",
    'tags': ["hero", 'demon'],
    "author": "sasha",
    "settings": { "posY": "-0px", "center": true, "scale": "1.0" }
  },
 {
    "id": "gabriel",
    "name": "Габриэль Винс",
    "nickname": "Бывший Архангел, изобретатель",
    "image": "Statics/image/gabrielava.jpg",
    "link": "Wikis/gabriel",
    "dateAdded": "2025-04-14",
    'tags': ["hero", 'angel'],
    "author": "mic",
    "settings": { "posY": "0px", "center": true, "scale": "1.0" }
  },
  // === ГРУППА: ДРИММУРЫ ===
  {
    "id": "asriel",
    "name": "Азриэль Дримур",
    "nickname": "Лорд Азриэль и главный Дримур",
    "image": "Statics/image/asriel.jpg",
    "link": "Wikis/asriel",
    "dateAdded": "2025-04-27",
    "tags": ["villain"],
    "author": "sasha",
    "settings": { "posY": "-0px", "center": true, "scale": "1.0" }
  },
  {
    "id": "arthur",
    "name": "Артур Дримур",
    "nickname": "Сын Азриэля, киборг-одиночка",
    "image": "Statics/image/0in5OIc6l9uuWeKw3783q3hSIHfP3cUnojdih924_lnhqKLvcRCLa64oMffKWjtkFZR6oLul--iEn310HjY1Zpzh.jpg",
    "link": "Wikis/arthur",
    "dateAdded": "2026-05-15",
    'tags': ["villain"],
    "author": "sasha",
    "settings": { "posY": "-0px", "center": true, "scale": "1.0" }
  },
  {
    "id": "stella",
    "name": "Стелла Дримур",
    "nickname": "Тень звезды, любительница кота",
    "image": "Statics/image/stella.jpg",
    "link": "Wikis/stella",
    "dateAdded": "2026-05-15",
    'tags': ["hero"],
    "author": "sasha",
    "settings": { "posY": "-0px", "center": true, "scale": "1.0" }
  },
  {
    "id": "viki",
    "name": "Вики Дримур",
    "nickname": "Младшая из сестёр Дримуров",
    "image": "Statics/image/photo_2026-05-11_22-03-03.jpg",
    "link": "Wikis/vika",
    "dateAdded": "2026-05-09",
    "tags": ["hero", 'demon'],
    "author": "sasha",
    "settings": { "posY": "-0px", "center": true, "scale": "1.0" }
  },
  {
    "id": "kara",
    "name": "Кара Дримур",
    "nickname": "Искусственно-созданный ребёнок Азриэля и Чары.",
    "image": "Statics/image/photo_2026-05-11_20-09-32.jpg",
    "link": "Wikis/kara",
    "dateAdded": "2026-05-10",
    "tags": ["hero"],
    "author": "sasha",
    "settings": { "posY": "-0px", "center": true, "scale": "1.0" }
  },
  {
    "id": "evilive",
    "name": "Эвилай Дримур",
    "nickname": "Искусственная душа, девушка-АУ",
    "image": "Statics/image/evilive (3).jpg",
    "link": "Wikis/evilive",
    "dateAdded": "2025-04-27",
    "tags": ["hero"],
    "author": "sasha",
    "settings": { "posY": "-0px", "center": true, "scale": "1.0" }
  },

  // === ГРУППА: РАЙДЕРЫ ===
  {
    "id": "glitch",
    "name": "Глюк Райдер",
    "nickname": "Музыкант, мироходец",
    "image": "Statics/image/GlitchAva.jpg",
    "link": "Wikis/glitch",
    "dateAdded": "2025-04-26",
    'tags': ["hero", "god"],
    "author": "mic",
    "settings": { "posY": "0%", "scale": "1.0" }
  },
  {
    "id": "cherry",
    "name": "Черри Райдер",
    "nickname": "Панк всея мультивселенный, главное лицо автора",
    "image": "Statics/image/черри.png",
    "link": "Wikis/cherry",
    "dateAdded": "2026-05-11",
    'tags': ["hero", 'demon'],
    "author": "mic",
    "settings": { "posY": "-0px", "center": true, "scale": "1.0" }
  },
  {
    "id": "cassy",
    "name": "Кэйсси Райдер",
    "nickname": "Красноглазик, участник группы MGQ",
    "image": "Statics/image/cassy.jpg",
    "link": "Wikis/cassy",
    "dateAdded": "2026-05-15",
    "tags": ["hero"],
    "author": "mic",
    "settings": { "posY": "-0px", "center": true, "scale": "1.0" }
  },
  {
    "id": "gwen",
    "name": "Гвен Райдер",
    "nickname": "Злой котёнок, участница группы MGQ",
    "image": "Statics/image/gwen.png",
    "link": "Wikis/gwen",
    'tags': ["hero"],
    "dateAdded": "2026-05-16",
    "author": "mic",
    "settings": { "posY": "-0px", "center": true, "scale": "1.0" }
  },

  // === ГРУППА: ОКО ===
  {
    "id": "claire",
    "name": "Клэр",
    "nickname": "Богиня Хаоса",
    "image": "Statics/image/Clair.jpg",
    "link": "Wikis/claire",
    "dateAdded": "2025-04-27",
    'tags': ["villain", 'god'],
    "author": "sasha",
    "settings": { "posY": "-0px", "center": true, "scale": "1.0" }
  },
   {
    "id": "milli",
    "name": "Милли Райс",
    "nickname": "Автоматон, создательница ОКО",
    "image": "Statics/image/Gemini_Generated_Image_tv1apstv1apstv1a.png",
    "link": "Wikis/milli",
    "dateAdded": "2025-04-08",
    "tags": ["villain"],
    "author": "sasha",
    "settings": { "posY": "-0px", "center": true, "scale": "1.0" }
  },
  {
    "id": "sgs",
    "name": "СГС (Альфред)",
    "nickname": "Жнец, член ОКО",
    "image": "Statics/image/sgs.jpg",
    "link": "Wikis/sgs",
    "dateAdded": "2025-04-25",
    "tags": ["villain"],
    "author": "sasha",
    "settings": { "posY": "-0px", "center": true, "scale": "1.0" }
  },
    {
    "id": "amadeus",
    "name": "Амадей Карс",
    "nickname": "Психопат, наследник Ньюва",
    "image": "Statics/image/Amadeus.jpg",
    "link": "Wikis/amadeus",
    "dateAdded": "2025-04-27",
    "tags": ["villain", 'angel'],
    "author": "mic",
    "settings": { "posY": "-0px", "center": true, "scale": "1.0" }
  },
    {
    "id": "john",
    "name": "Джон Доу",
    "nickname": "Патологический лжец, создатель наркотика \"Веселье\"",
    "image": "Statics/image/john.jpg",
    "link": "Wikis/john",
    "dateAdded": "2025-04-17",
    "tags": ["villain"],
    "author": "sasha",
    "settings": { "posY": "-0px", "center": true, "scale": "1.0" }
  },
    {
    "id": "angie",
    "name": "Энджи Доу",
    "nickname": "Тренажорный Кошмар, бывшая участница ОКО",
    "image": "Statics/image/angie.jpg",
    "link": "Wikis/angie",
    "dateAdded": "2025-04-23",
    'tags': ["hero"],
    "author": "sasha",
    "settings": { "posY": "-0px", "center": true, "scale": "1.0" }
  },
  {
    "id": "marty",
    "name": "Марти Дуглас",
    "nickname": "Палач, член ОКО",
    "image": "Statics/image/marty.jpg",
    "link": "Wikis/marty",
    "dateAdded": "2025-04-24",
    'tags': ["villain"],
    "author": "sasha",
    "settings": { "posY": "-0px", "center": true, "scale": "1.0" }
  },
  {
    "id": "helen",
    "name": "Хелен",
    "nickname": "Бывший \"волонтёр\" одного \"приюта\", член ОКО",
    "image": "Statics/image/helen.jpg",
    "link": "Wikis/helen",
    "tags": ["villain"],
    "dateAdded": "2025-04-26",
    "author": "sasha",
    "settings": { "posY": "-0px", "center": true, "scale": "1.0" }
  },
  {
    "id": "iris",
    "name": "Айрис",
    "nickname": "Полу-бог Шалости, подрывательница",
    "image": "Statics/image/iris.jpg",
    "link": "Wikis/iris",
    "tags": ["villain", "mini-god"],
    "dateAdded": "2026-05-15",
    "author": "sasha",
    "settings": { "posY": "-0px", "center": true, "scale": "1.0" }
  },

  // === ГРУППА: ДЕМОНЫ ===
  {
    "id": "adrian",
    "name": "Эдриан Морн",
    "nickname": "Основатель Adrian Corp.",
    "image": "Statics/image/adrianava.jpg", 
    "link": "Wikis/adrian",
    'tags': ["villain", 'demon', 'ad-asyl'],
    "dateAdded": "2024-02-15",
    "author": "mic",
    "settings": { "posY": "top", "scale": "1.0" }
  },
  {
    "id": "agata",
    "name": "Агата",
    "nickname": "Дочь Марты, лидер восстания в Раю",
    "image": "Statics/image/agata.jpg",
    "link": "Wikis/agata",
    "dateAdded": "2025-04-21",
    'tags': ["villain", 'angel', 'demon'],
    "author": "mic",
    "settings": { "posY": "-0px", "center": true, "scale": "1.0" }
  },
    {
    "id": "emilia",
    "name": "Эмилия Стоун",
    "nickname": "Принцесса Гордыни",
    "image": "Statics/image/Gemini_Generated_Image_uvh585uvh585uvh5.png",
    "link": "Wikis/emilia",
    'tags': ["hero", 'demon'],
    "dateAdded": "2025-04-19",
    "author": "sasha",
    "settings": { "posY": "-0px", "center": true, "scale": "1.0" }
  },
  {
    "id": "Zero",
    "name": "Зеро",
    "nickname": "Сильнейший демон/паук",
    "image": "Statics/image/zero.jpg",
    "link": "Wikis/zero",
    "dateAdded": "2025-04-14",
    'tags': ["villain", 'mini-god'],
    "author": "sasha",
    "settings": { "posY": "10%", "center": true, "scale": "1.0" }
  },

  // === ГРУППА: ДРУГИЕ ===
  {
    "id": "ivriil",
    "name": "Ивриил",
    "nickname": "Джентльмен, сын Оливии",
    "image": "Statics/image/ivriil.jpg",
    "link": "Wikis/ivriil",
    "dateAdded": "2025-04-13",
    'tags': ["villain"],
    "author": "mic",
    "settings": { "posY": "-0px", "center": true, "scale": "1.0" }
  },

];
 
// === БАЗА ДАННЫХ МИРОВ И АУ ===
const worldsData = [
  {
    "id": "swapfell",
    "name": "SwapFell (SF)",
    "nickname": "Мрачная G!AU с диктатурой Эдриана",
    "image": "Statics/image/sf_landscape.jpg",
    "link": "Wikis/swapfell",
    "categories": ["all", "g_au"],
    "dateAdded": "2024-02-13" 
  },
  {
    "id": "orig",
    "name": "ОРИГ",
    "nickname": "Главный Хаб мультивселенной",
    "image": "Statics/image/orig_world.jpg",
    "link": "Wikis/orig",
    "categories": ["all"],
    "dateAdded": "2023-01-01" // Старая дата, чтобы не выводился в "Новых"
  },
  {
    "id": "g_t",
    "name": "G_T",
    "nickname": "Мир Глюка",
    "image": "Statics/image/gt_world.jpg",
    "link": "Wikis/g_t",
    "categories": ["all", "g_au"],
    "dateAdded": "2023-01-01"
  },
  {
    "id": "fell",
    "name": "Fell",
    "nickname": "Мир Кэйсси",
    "image": "Statics/image/fell_world.jpg",
    "link": "Wikis/fell",
    "categories": ["all", "g_au"],
    "dateAdded": "2023-01-01"
  },
  {
    "id": "hell",
    "name": "Ад",
    "nickname": "Внешний Домен (Преисподняя)",
    "image": "Statics/image/hell_world.jpg",
    "link": "Wikis/hell",
    "categories": ["all"],
    "dateAdded": "2023-01-01"
  }
];

// === БАЗА ДАННЫХ ФРАКЦИЙ И ОРГАНИЗАЦИЙ ===
const factionsData = [
  {
    "id": "pantheon",
    "name": "Фракция: Пантеон Богов",
    "nickname": "Высшие сущности, управлявшие миром",
    "image": "Statics/image/pantheon_logo.jpg",
    "link": "Wikis/pantheon",
    "dateAdded": "2024-02-14"
  },
  {
    "id": "oko",
    "name": "Фракция: ОКО",
    "nickname": "Тайная и влиятельная структура",
    "image": "Statics/image/oko_logo.jpg",
    "link": "supp/oko",
    "dateAdded": "2026-05-16"
  }
];
