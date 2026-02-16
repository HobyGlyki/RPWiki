// === БАЗА ДАННЫХ ПЕРСОНАЖЕЙ ===
const charactersData = [
  {
    "id": "adrian",
    "name": "Эдриан Морн",
    "nickname": "Основатель Adrian Corp.",
    "image": "Statics/image/adrianava.jpg", 
    "link": "Wikis/adrian.html",
    "dateAdded": "2024-02-15", // Самый новый
    "author": "mic",
    "settings": { "posY": "top", "scale": "1.0" }
  },
  {
    "id": "jerry",
    "name": "Джеррими Райс (Red X)",
    "nickname": "Герой, бывший Объект №42",
    "image": "Statics/image/JerryAva.jpg", 
    "link": "Wikis/jerry.html",
    "dateAdded": "2025-04-12",
    "author": "mic",
    "settings": { "posY": "top", "scale": "1.0" }
  },
  {
    "id": "glitch",
    "name": "Глюк Райдер",
    "nickname": "Музыкант, мироходец",
    "image": "Statics/image/GlitchAva.jpg",
    "link": "Wikis/glitch.html",
    "dateAdded": "2024-02-11", // Самый старый из новых
    "author": "mic",
    "settings": { "posY": "0%", "scale": "1.0" }
  },
  {
    'id': 'Zero',
    'name': 'Зеро',
    'nickname': 'Сильнейший демон/паук',
    'image': 'Statics/image/zero.jpg',
    'link': 'Wikis/zero.html',
    'dateAdded': '2025-04-14',
    'author': 'sasha',
    'settings': { 'posY': '10%', 'center': true, 'scale': '1.0' }
  },
  {
    'id': 'ivriil',
    'name': 'Ивриил',
    'nickname': 'Джентльмен, сын Оливии',
    'image': 'Statics/image/ivriil.jpg',
    'link': 'Wikis/ivriil.html',
    'dateAdded': '2025-04-13',
    'author': 'mic',
    'settings': { 'posY': '-0px', 'center': true, 'scale': '1.0' }
  },
  {
    'id': 'gabriel',
    'name': 'Габриэль Винс',
    'nickname': 'Бывший Архангел, изобретатель',
    'image': 'Statics/image/gabrielava.jpg',
    'link': 'Wikis/gabriel.html',
    'dateAdded': '2025-04-14',
    'author': 'mic',
    'settings': { 'posY': '0px', 'center': true, 'scale': '1.0' }
  },
  {
    'id': 'jenny',
    'name': 'Дженнифер Райс',
    'nickname': 'Дочь Джерри и Чанзи Райс',
    'image': 'Statics/image/jenny.jpg',
    'link': 'Wikis/jenny.html',
    'dateAdded': '2025-04-15',
    'author': 'mic',
    'settings': { 'posY': '-0px', 'center': true, 'scale': '1.0' }
  },
  {
    'id': 'chanzie',
    'name': 'Чанзи Райс',
    'nickname': 'Жена Джерри и мать Коула и Дженнифер',
    'image': 'Statics/image/chanzie.jpg',
    'link': 'Wikis/chanzie.html',
    'dateAdded': '2025-04-16',
    'author': 'sasha',
    'settings': { 'posY': '-0px', 'center': true, 'scale': '1.0' }
  },
  {
    'id': 'john',
    'name':"Джон Доу"
    ,'nickname': 'Патологический лжец, создатель наркотика "Веселье"',
    'image': 'Statics/image/john.jpg',
    'link': 'Wikis/john.html',
    'dateAdded': '2025-04-17',
    'author': 'sasha',
    'settings': { 'posY': '-0px', 'center': true, 'scale': '1.0' }

  },
  {
    'id': 'cole',
    'name': 'Коул Райс',
    'nickname': 'Страж, Ангел Смерти',
    'image': 'Statics/image/cole.jpg',
    'link': 'Wikis/cole.html',
    'dateAdded': '2025-04-18',
    'author': 'sasha',
    'settings': { 'posY': '-0px', 'center': true, 'scale': '1.0' }
  },
  {
    'id': 'emilia',
    'name': 'Эмилия Стоун',
    'nickname': 'Принцесса Гордыни',
    'image': 'Statics/image/Gemini_Generated_Image_uvh585uvh585uvh5.png',
    'link': 'Wikis/emilia.html',
    'dateAdded': '2025-04-19',
    'author': 'sasha',
    'settings': { 'posY': '-0px', 'center': true, 'scale': '1.0' }
  },
  {
    'id': 'remor',
    'name': 'Ремор',
    'nickname': 'Бог Кошмаров и Снов',
    'image': 'Statics/image/remor2.jpg',
    'link': 'Wikis/remor.html',
    'dateAdded': '2025-04-20',
    'author': 'mic',
    'settings': { 'posY': '-0px', 'center': true, 'scale': '1.0' }
  }
];
 
// === БАЗА ДАННЫХ МИРОВ И АУ ===
const worldsData = [
  {
    "id": "swapfell",
    "name": "Мир: SwapFell (SF)",
    "nickname": "Мрачная G!AU с диктатурой Эдриана",
    "image": "Statics/image/sf_landscape.jpg",
    "link": "Wikis/swapfell.html",
    "categories": ["all", "g_au"],
    "dateAdded": "2024-02-13" 
  },
  {
    "id": "orig",
    "name": "ОРИГ",
    "nickname": "Главный Хаб мультивселенной",
    "image": "Statics/image/orig_world.jpg",
    "link": "Wikis/orig.html",
    "categories": ["all"],
    "dateAdded": "2023-01-01" // Старая дата, чтобы не выводился в "Новых"
  },
  {
    "id": "g_t",
    "name": "G_T",
    "nickname": "Мир Глюка",
    "image": "Statics/image/gt_world.jpg",
    "link": "Wikis/g_t.html",
    "categories": ["all", "g_au"],
    "dateAdded": "2023-01-01"
  },
  {
    "id": "fell",
    "name": "Fell",
    "nickname": "Мир Кэйсси",
    "image": "Statics/image/fell_world.jpg",
    "link": "Wikis/fell.html",
    "categories": ["all", "g_au"],
    "dateAdded": "2023-01-01"
  },
  {
    "id": "hell",
    "name": "Ад",
    "nickname": "Внешний Домен (Преисподняя)",
    "image": "Statics/image/hell_world.jpg",
    "link": "Wikis/hell.html",
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
    "link": "Wikis/pantheon.html",
    "dateAdded": "2024-02-14"
  }
];
