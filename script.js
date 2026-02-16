document.addEventListener('DOMContentLoaded', () => {

    // Проверка коммитов
    console.log("Привет! Если ты видишь это сообщение, значит скрипт успешно загрузился.")
    
    // --- 1. ГЕНЕРАЦИЯ НАВБАРА (МЕГА-МЕНЮ) ---
    const navContainer = document.getElementById('navbar-container');
    
    if (navContainer) {
        const basePath = navContainer.getAttribute('data-path') || '';

        // Загружаем HTML-файл меню
        fetch(`${basePath}navbar.html`)
            .then(response => {
                if (!response.ok) throw new Error('Сетевая ошибка при загрузке меню');
                return response.text();
            })
            .then(html => {
                // Магия: заменяем все {{basePath}} в тексте на реальный путь
                const finalHTML = html.replace(/{{basePath}}/g, basePath);
                navContainer.innerHTML = finalHTML;

                // Запускаем логику скролла ТОЛЬКО ПОСЛЕ того, как меню появилось на странице
                initNavbarScroll();
            })
            .catch(err => console.error('Ошибка загрузки меню (возможно, проблема CORS при локальном запуске):', err));
    }

    // --- 2. ЛОГИКА СКРЫТИЯ ПАНЕЛИ (Скролл) ---
    let lastScrollY = window.scrollY;
    // Ищем навбар после того, как он был создан
    const navbar = document.querySelector('.wiki-navbar');

    if (navbar) {
        window.addEventListener('scroll', () => {
            if (lastScrollY < window.scrollY && window.scrollY > 100) {
                // Листаем вниз -> скрываем
                navbar.classList.add('hidden');
            } else {
                // Листаем вверх -> показываем
                navbar.classList.remove('hidden');
            }
            lastScrollY = window.scrollY;
        });
    }

// --- 3. ГЕНЕРАЦИЯ АЛФАВИТНОГО СПИСКА (Обновленная) ---
    const contentArea = document.getElementById('wiki-content-area');
    
    if (contentArea) {
        // Читаем атрибуты
        const contentType = contentArea.getAttribute('data-content-type') || 'characters';
        const category = contentArea.getAttribute('data-category') || 'all';
        const filter = contentArea.getAttribute('data-filter'); // Новый атрибут для фильтрации

        // Логика для ПЕРСОНАЖЕЙ
        if (contentType === 'characters' && typeof charactersData !== 'undefined') {
            
            let dataToRender = charactersData;

            // Если задан фильтр "rice" (для страницы Райсов)
            if (filter === 'rice') {
                dataToRender = charactersData.filter(char => {
                    const nameLower = char.name.toLowerCase();
                    // Проверяем фамилию ИЛИ конкретные ID предков/родственников без фамилии
                    return nameLower.includes('райс') || 
                           nameLower.includes('rice') || 
                           ['ivriil', 'remor', 'olivia'].includes(char.id);
                });}
            else if (filter === 'mic') {
                dataToRender = charactersData.filter(char => {
                    const nameLower = char.author.toLowerCase();
                    // Проверяем фамилию ИЛИ конкретные ID предков/родственников без фамилии
                    return nameLower.includes('mic') 
                });}
            else if (filter === 'sasha') {
                dataToRender = charactersData.filter(char => {
                    const nameLower = char.author.toLowerCase();
                    // Проверяем фамилию ИЛИ конкретные ID предков/родственников без фамилии
                    return nameLower.includes('sasha') 
                });}
                           

            renderAlphabeticalIndex(contentArea, dataToRender);
        } 
        // Логика для МИРОВ
        else if (contentType === 'worlds' && typeof worldsData !== 'undefined') {
            // Фильтруем миры по нужной категории
            const filteredWorlds = worldsData.filter(world => world.categories.includes(category));
            renderAlphabeticalIndex(contentArea, filteredWorlds);
        }
        // Если это страница фракций/организаций
        else if (contentType === 'factions' && typeof factionsData !== 'undefined') {
            renderAlphabeticalIndex(contentArea, factionsData);
        }
        // И так далее для других типов контента...
        
    }
    
// --- 4. ГЕНЕРАЦИЯ НЕДАВНИХ СТАТЕЙ (Для Главной страницы) ---
    const recentGrid = document.getElementById('recent-articles-grid');
    if (recentGrid) {
        renderRecentArticles(recentGrid);
    }
}); // <-- Это закрывающая скобка от document.addEventListener('DOMContentLoaded', () => {

// Функция рендера недавних статей
function renderRecentArticles(container) {
    // 1. Собираем все статьи из всех доступных баз в один большой массив
    let allArticles = [];
    if (typeof charactersData !== 'undefined') allArticles = allArticles.concat(charactersData);
    if (typeof worldsData !== 'undefined') allArticles = allArticles.concat(worldsData);
    if (typeof factionsData !== 'undefined') allArticles = allArticles.concat(factionsData);

    // 2. Оставляем только те, у которых есть дата, и сортируем (от новых к старым)
    const sortedArticles = allArticles
        .filter(item => item.dateAdded) // Отбрасываем те, где дата не указана
        .sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded)) // Сортируем
        .slice(0, 12); // Берем только ТОП-4 самых свежих

    // 3. Создаем HTML для каждой карточки
    sortedArticles.forEach(article => {
        const link = document.createElement('a');
        link.href = article.link;
        link.className = 'recent-card';

        link.innerHTML = `
            <div class="recent-img-wrapper">
                <img src="${article.image}" alt="${article.name}" onerror="this.src='Statics/image/RPImage.png', this.style.objectFit='cover'; this.style.objectPosition='center';" style="${article.settings ? `object-position: center ${article.settings.posY || 'center'}; transform: scale(${article.settings.scale || 1});` : ''}">
            </div>
            <div class="recent-info">
                <h3>${article.name}</h3>
                <p>${article.nickname || ''}</p>
            </div>
        `;
        
        container.appendChild(link);
    });
}


function renderAlphabeticalIndex(container, data) {
    data.sort((a, b) => a.name.localeCompare(b.name, 'ru'));

    const groups = {};
    data.forEach(char => {
        const firstLetter = char.name.charAt(0).toUpperCase();
        if (!groups[firstLetter]) groups[firstLetter] = [];
        groups[firstLetter].push(char);
    });

    Object.keys(groups).forEach(letter => {
        const section = document.createElement('div');
        section.className = 'alphabet-section';

        const title = document.createElement('div');
        title.className = 'letter-header';
        title.textContent = letter; 
        section.appendChild(title);

        const grid = document.createElement('div');
        grid.className = 'char-grid';

        groups[letter].forEach(char => {
            grid.appendChild(createWikiCard(char));
        });

        section.appendChild(grid);
        container.appendChild(section);
    });
}

function createWikiCard(char) {
    const link = document.createElement('a');
    link.href = char.link;
    link.className = 'wiki-card';

    const img = document.createElement('img');
    img.src = char.image;
    img.alt = char.name[0];

    if (char.settings) {
        img.style.objectPosition = `center ${char.settings.posY || 'center'}`;
        img.style.transform = `scale(${char.settings.scale || 1})`;
    }

    const info = document.createElement('div');
    info.className = 'wiki-card-info';
    
    const name = document.createElement('h3');
    name.textContent = char.name;
    
    const role = document.createElement('p');
    role.textContent = char.nickname || 'Персонаж';

    info.appendChild(name);
    info.appendChild(role);

    link.appendChild(img);
    link.appendChild(info);

    return link;
}

function initNavbarScroll() {
    let lastScrollY = window.scrollY;
    const navbar = document.querySelector('.wiki-navbar');

    if (navbar) {
        window.addEventListener('scroll', () => {
            if (lastScrollY < window.scrollY && window.scrollY > 100) {
                navbar.classList.add('hidden');
            } else {
                navbar.classList.remove('hidden');
            }
            lastScrollY = window.scrollY;
        });
    }
}

/* === ФУНКЦИЯ ПРОСМОТРА ИЗОБРАЖЕНИЙ (LIGHTBOX) === */
document.addEventListener('DOMContentLoaded', () => {
    // 1. Создаем HTML модального окна, если его нет
    if (!document.getElementById('imageModal')) {
        const modalHTML = `
            <div id="imageModal" class="modal">
                <span class="modal-close">&times;</span>
                <img class="modal-content" id="img01">
                <div id="modal-caption"></div>
            </div>`;
        document.body.insertAdjacentHTML('beforeend', modalHTML);
    }

    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById("img01");
    const captionText = document.getElementById("modal-caption");
    const span = document.getElementsByClassName("modal-close")[0];

    // 2. Находим все картинки, которые нужно увеличивать
    // (В тексте статьи, в галерее и в инфобоксе)
    const images = document.querySelectorAll('.wiki-image-float img, .gallery-item img, .infobox-image img');

    images.forEach(img => {
        // Добавляем курсор лупы
        img.style.cursor = 'pointer';
        
        img.onclick = function() {
            modal.style.display = "block";
            modalImg.src = this.src; // Берем src нажатой картинки
            
            // Пытаемся найти подпись (alt или соседний блок)
            let caption = this.alt;
            
            // Если картинка в блоке с подписью, берем текст оттуда
            const parent = this.parentElement;
            const captionEl = parent.querySelector('.img-caption, .gallery-caption');
            if (captionEl) {
                caption = captionEl.innerText;
            }

            captionText.innerHTML = caption;
        }
    });

    // 3. Закрытие модального окна
    span.onclick = function() { 
        modal.style.display = "none";
    }
    
    // Закрытие по клику на фон
    modal.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }
    
    // Закрытие по клавише ESC
    document.addEventListener('keydown', function(event) {
        if (event.key === "Escape") {
            modal.style.display = "none";
        }
    });
});


        document.addEventListener('DOMContentLoaded', function() {
            // Находим все аудио-плееры на странице
            const audios = document.querySelectorAll('audio');

            audios.forEach(audio => {
                audio.addEventListener('play', function() {
                    // Когда этот трек начинает играть, проходимся по всем остальным
                    audios.forEach(otherAudio => {
                        if (otherAudio !== audio) {
                            otherAudio.pause(); // Ставим на паузу
                            // otherAudio.currentTime = 0; // Если хочешь, чтобы они сбрасывались в начало, раскомментируй эту строку
                        }
                    });
                });
            });
        });
