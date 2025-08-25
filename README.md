# Home Work 35

## 📌 Опис
Цей проєкт налаштований з індивідуальним конфігураційним файлом Webpack, який включає:

- ✅ DevServer для автоматичного перезавантаження сторінки при змінні у коді;
- ✅ Роботу з зовнішніми CSS файлами;
- ✅ Підтримку препроцесорів (Sass/SCSS та LESS);
- ✅ Компіляцію TypeScript файлів;
- ✅ Транспіляцію JavaScript за допомогою Babel;
- ✅ Перевірку коду через ESLint;
- ✅ Використання Webpack Bundle Analyzer для візуалізації розміру та змісту пакетів.




## 📂 Структура проєкту
home-work-35/
├─ dist/                         # згенеровані файли після команди:  npm run build
├─ node_modules/                 # Пакети npm
├─ src/
│ ├─ index.html                  # HTML-сторінка
│ ├─ main.ts                     # TS точка входу
│ ├─ styles.scss                 # SCSS стилі
│ ├─ extra.less                  # LESS стилі
│ └─ foto.jpg                    # зображення
├─ .eslintrc.json
│── eslint.config.cjs            # Конфіг ESLint (CommonJS)
├─ .gitignore
├─ .prettierrc
├─ package.json
├─ tsconfig.json                 # Конфіг TypeScript
├─ webpack.config.js             # Конфіг Webpack
└─ README.md





## ⚙️ Встановлення

Terminal: npm install

▶️ Запуск у режимі розробки

Terminal: npm start

Проєкт відкриється у браузері за адресою http://localhost:3000/.

При змінах у коді сторінка автоматично оновиться.




📦 Збірка для продакшн

Terminal: npm run build

У папці dist/ зʼявляться оптимізовані файли (bundle.[hash].js, styles.[hash].css, картинки, шрифти).

Можна запускати на сервері.

🧹 Лінтинг (ESLint)

Terminal: npm run lint

Перевіряє JavaScript і TypeScript файли в src/.

Налаштований на правило: подвійні лапки і крапка з комою обов’язково.


📊 Аналіз збірки
Після коомнди в терміналі: npm run build, зʼявиться файл stats.json.
Для відкриття інтерактивної діаграми виконай:

Terminal: npx webpack-bundle-analyzer dist/stats.json




📝 Використані технології :

- Webpack
- TypeScript
- Sass
- Less
- Babel
- ESLint
- Webpack Bundle Analyzer


⚡ Шпаргалка команд
Comands:

- npm install	                                     # Встановлення залежностей
- npm start	                                       # Запуск DevServer у режимі розробки
- npm run build	                                   # Збірка проєкту для продакшн
- npm run lint	                                   # Перевірка коду ESLint
- npm run lint:fix                                 # Автоматичне виправлення помилок ESLint
- npx webpack-bundle-analyzer dist/stats.json	     # Запуск аналізатора збірки


