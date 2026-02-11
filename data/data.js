const charactersData = [
  {
    "id": "glitch",
    "name": "Глюк Райдер",
    "nickname": "Музыкант и Странник",
    "image": "Statics/image/GlitchAva.jpg",
    "link": "Wikis/glitch.html",
    "settings": {
      "posY": "0%", 
      "scale": "1.0"
    }
  },
  {
    "id": "jerry",
    "name": "Джеррими Райс",
    "nickname": "Герой RX",
    "image": "Statics/image/JerryAva.jpg", 
    "link": "Wikis/jerry.html",
    "settings": {
      "posY": "top",
      "scale": "1.0"
    }
  },
  {
    "id": "adrian",
    "name": "Эдриан Морн",
    "nickname": "Всевластный демон",
    "image": "Statics/image/adrianava.jpg", 
    "link": "Wikis/adrian.html",
    "settings": {
      "posY": "top",
      "scale": "1.0"
    }
  }

];

// ... (твой существующий массив charactersData оставляем без изменений) ...

// === БАЗА ДАННЫХ МИРОВ И АУ ===
const worldsData = [
  {
    "id": "orig",
    "name": "ОРИГ",
    "nickname": "Главный Хаб мультивселенной",
    "image": "Statics/image/orig_world.jpg",
    "link": "Wikis/orig.html",
    "categories": ["all"] // Появится только в общем списке
  },
  {
    "id": "swapfell",
    "name": "SwapFell (SF)",
    "nickname": "Мрачная мафиозная G!AU",
    "image": "Statics/image/sf_landscape.jpg",
    "link": "Wikis/swapfell.html",
    "categories": ["all", "g_au"] // Появится в обоих списках
  },
  {
    "id": "g_t",
    "name": "G_T",
    "nickname": "Мир Глюка",
    "image": "Statics/image/gt_world.jpg",
    "link": "Wikis/g_t.html",
    "categories": ["all", "g_au"]
  },
  {
    "id": "fell",
    "name": "Fell",
    "nickname": "Мир Кэйсси",
    "image": "Statics/image/fell_world.jpg",
    "link": "Wikis/fell.html",
    "categories": ["all", "g_au"]
  },
  {
    "id": "hell",
    "name": "Ад",
    "nickname": "Внешний Домен (Преисподняя)",
    "image": "Statics/image/hell_world.jpg",
    "link": "Wikis/hell.html",
    "categories": ["all"]
  }
];