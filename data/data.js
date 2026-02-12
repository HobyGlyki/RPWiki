// === БАЗА ДАННЫХ ПЕРСОНАЖЕЙ ===
const charactersData = [
  {
    "id": "adrian",
    "name": "Эдриан Морн",
    "nickname": "Основатель Adrian Corp.",
    "image": "Statics/image/adrianava.jpg", 
    "link": "Wikis/adrian.html",
    "dateAdded": "2024-02-15", // Самый новый
    "settings": { "posY": "top", "scale": "1.0" }
  },
  {
    "id": "jerry",
    "name": "Джеррими Райс (Red X)",
    "nickname": "Герой, бывший Объект №42",
    "image": "Statics/image/JerryAva.jpg", 
    "link": "Wikis/jerry.html",
    "dateAdded": "2025-04-12",
    "settings": { "posY": "top", "scale": "1.0" }
  },
  {
    "id": "glitch",
    "name": "Глюк Райдер",
    "nickname": "Музыкант, мироходец",
    "image": "Statics/image/GlitchAva.jpg",
    "link": "Wikis/glitch.html",
    "dateAdded": "2024-02-11", // Самый старый из новых
    "settings": { "posY": "0%", "scale": "1.0" }
  },
  {
    'id': 'Zero',
    'name': 'Зеро',
    'nickname': 'Сильнейший демон/паук',
    'image': 'Statics/image/zero.jpg',
    'link': 'Wikis/zero.html',
    'dateAdded': '2025-02-13',
    'settings': { 'posY': '10px', 'center': true, 'scale': '1.0' }
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
