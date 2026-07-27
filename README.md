# Симаков Владислав Юрьевич — юридические документы онлайн

Одностраничный сайт-лендинг для самозанятого юриста.

**Сайт:** https://simaklawyer.github.io/

## Google Search Console — чек-лист

1. Откройте [Google Search Console](https://search.google.com/search-console)
2. Ресурс уже должен быть подтверждён (meta-тег + файл `googlef4c952e145dcfcb9.html`)
3. **Индексирование → Файлы Sitemap** → добавьте:
   ```
   https://simaklawyer.github.io/sitemap.xml
   ```
4. **Проверка URL** → вставьте `https://simaklawyer.github.io/` → «Запросить индексирование»
5. Через несколько дней проверьте разделы:
   - Индексирование страниц
   - Улучшения (разметка)
   - Основные интернет-показатели (Core Web Vitals)

## Яндекс.Вебмастер

1. Переобход: `https://simaklawyer.github.io/`
2. Sitemap: `https://simaklawyer.github.io/sitemap.xml`
3. Для телефона и блока «Компания» в выдаче — [Яндекс Бизнес](https://business.yandex.ru/)

## Яндекс.Метрика

Счётчик **111039693** подключается после согласия на analytics (cookie banner).

## Стили (Tailwind CSS — локальная сборка)

`styles.css` — это **собранный файл**, его не редактируют руками. Раньше Tailwind подключался
через CDN (`cdn.tailwindcss.com`), но это официально не для продакшена — компиляция классов
шла в браузере при каждой загрузке страницы. Теперь классы собираются один раз локально в
маленький минифицированный CSS.

Кастомные стили (переменные, `.card-dark`, `.btn-gold` и т.д.) лежат в `tw-src/input.css` —
именно этот файл нужно редактировать, если требуется что-то изменить в оформлении.

**После любого изменения classes в `index.html` / `404.html` / `script.js` или правки
`tw-src/input.css` — пересобрать:**

```bash
npm install        # один раз
npm run build:css  # пересобрать styles.css
```

## Структура

```
├── index.html          — главная
├── 404.html
├── styles.css           — собранный CSS (не редактировать руками, см. выше)
├── tw-src/input.css      — исходник стилей (редактировать здесь)
├── package.json          — зависимости для сборки CSS
├── script.js            — скрипты, включая прайс-лист (pricingData)
├── cookie-consent.js
├── og-image.png          — превью для соцсетей (Open Graph / Twitter Card)
├── favicon.svg
├── robots.txt
├── sitemap.xml
├── google*.html        — верификация Google
└── yandex_*.html       — верификация Яндекс
```

## Контакты

- Email: Arrusi@bk.ru
- Телефон: 8 (965) 241-30-38
- Telegram: https://t.me/simaklawyer
- Kwork: https://kwork.ru/user/Semak_lawyer

---
Симаков Владислав Юрьевич · Самозанятый · ИНН 253202682567 · г. Владивосток
