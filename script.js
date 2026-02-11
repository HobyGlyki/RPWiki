document.addEventListener('DOMContentLoaded', () => {

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

// --- 3. ГЕНЕРАЦИЯ АЛФАВИТНОГО СПИСКА (Универсальная) ---
    const contentArea = document.getElementById('wiki-content-area');
    
    if (contentArea) {
        // Читаем, что именно нужно отрендерить на этой странице (по умолчанию - персонажи)
        const contentType = contentArea.getAttribute('data-content-type') || 'characters';
        const category = contentArea.getAttribute('data-category') || 'all';

        // Если это страница персонажей
        if (contentType === 'characters' && typeof charactersData !== 'undefined') {
            renderAlphabeticalIndex(contentArea, charactersData);
        } 
        // Если это страница миров/АУ
        else if (contentType === 'worlds' && typeof worldsData !== 'undefined') {
            // Фильтруем миры по нужной категории
            const filteredWorlds = worldsData.filter(world => world.categories.includes(category));
            renderAlphabeticalIndex(contentArea, filteredWorlds);
        }
    }
});


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