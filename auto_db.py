import os

# Укажи правильные пути к файлам и папкам относительно скрипта
DATA_FILE = 'data/data.js'  # Если файл в папке data, напиши 'data/data.js'
WIKIS_DIR = 'Wikis'    # Папка, куда ты распаковываешь новые папки с персами

def update_database():
    if not os.path.exists(DATA_FILE):
        print(f"❌ Файл {DATA_FILE} не найден!")
        return

    # Читаем весь data.js
    with open(DATA_FILE, 'r', encoding='utf-8') as f:
        data_content = f.read()

    added_count = 0

    # Проходимся по всем папкам внутри Wikis
    for root, dirs, files in os.walk(WIKIS_DIR):
        if 'entry.json' in files:
            json_path = os.path.join(root, 'entry.json')

            # Читаем скачанный entry.json
            with open(json_path, 'r', encoding='utf-8') as jf:
                lines = jf.readlines()

            # Убираем первую строчку с комментарием "// ДОБАВИТЬ..."
            if lines and lines[0].startswith('//'):
                lines = lines[1:]

            # Собираем чистый JSON-блок в одну строку
            new_entry = "".join(lines).strip()

            # Ищем, куда вставить. В твоем data.js список персов заканчивается перед списком миров.
            marker = "// === БАЗА ДАННЫХ МИРОВ И АУ ==="
            
            if marker in data_content:
                # Разделяем файл на 2 части: До маркера миров и После
                split_parts = data_content.split(marker)
                top_part = split_parts[0]

                # В верхней части (с персами) ищем самую последнюю закрывающую скобку массива `];`
                if '];' in top_part:
                    # Разрезаем по последнему `];`
                    top_part_split = top_part.rsplit('];', 1)
                    
                    # Аккуратно вставляем запятую, нового перса и закрываем массив обратно
                    new_top = top_part_split[0].rstrip() + ",\n  " + new_entry + "\n];\n\n"
                    
                    # Склеиваем файл обратно
                    data_content = new_top + marker + split_parts[1]
                    added_count += 1

                    # Удаляем entry.json, чтобы он не добавился еще раз при следующем запуске
                    os.remove(json_path)
                    print(f"✅ Добавлен персонаж из: {json_path}")
                else:
                    print("❌ Не смог найти конец массива персонажей ];")
            else:
                print("❌ Не найден маркер '// === БАЗА ДАННЫХ МИРОВ И АУ ===' в data.js")

    # Если кого-то добавили, перезаписываем data.js
    if added_count > 0:
        with open(DATA_FILE, 'w', encoding='utf-8') as f:
            f.write(data_content)
        print(f"🎉 Успех! Добавлено новых персонажей в базу: {added_count}")
    else:
        print("👀 Свежих файлов entry.json не найдено. База актуальна.")

if __name__ == '__main__':
    print("Ищем новых персонажей...")
    update_database()
    input("Нажми Enter для выхода...")