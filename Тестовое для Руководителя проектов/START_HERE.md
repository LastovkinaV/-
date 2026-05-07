# START HERE

Этот файл нужен, чтобы быстро вернуться к проекту и сразу понять текущее состояние сайта, структуру файлов и маршрут публикации.

## Что это

Статический многостраничный сайт с каталогом тестовых заданий. Одна роль — одна отдельная страница с собственным сценарием, материалами и ограничениями.

## Главные ссылки

- локально: `http://localhost:4173/%D0%A2%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B5%20%D0%B4%D0%BB%D1%8F%20%D0%A0%D1%83%D0%BA%D0%BE%D0%B2%D0%BE%D0%B4%D0%B8%D1%82%D0%B5%D0%BB%D1%8F%20%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%BE%D0%B2/`
- прод: `https://lastovkinav.github.io/-/`
- репозиторий: `https://github.com/LastovkinaV/-.git`

## Текущая структура сайта

- `index.html` — каталог тестовых и общие правила
- `project-manager.html` — тестовое для руководителя проектов
- `ai-developer-intern.html` — тестовое для стажера AI-разработчика
- `accountant-junior.html` — тестовое для бухгалтера-джуна

Прямые ссылки:

- каталог: `https://lastovkinav.github.io/-/`
- PM: `https://lastovkinav.github.io/-/project-manager.html`
- AI intern: `https://lastovkinav.github.io/-/ai-developer-intern.html`
- Accountant: `https://lastovkinav.github.io/-/accountant-junior.html`

## Как открыть локально

Из корня репозитория:

```bash
cd "/Users/valeriiaklimova/Documents/New project"
python3 -m http.server 4173
```

Потом открыть локальную ссылку выше.

Если текст или верстка на странице не обновились после правок, используйте жесткое обновление:

```text
Cmd + Shift + R
```

## Основные файлы

- `index.html` — главная страница-каталог
- `project-manager.html` — страница тестового для PM
- `ai-developer-intern.html` — страница тестового для AI intern
- `accountant-junior.html` — страница тестового для бухгалтера
- `styles.css` — общие стили всех страниц
- `app.js` — данные и карточки страницы PM
- `ai-developer-intern.js` — данные и карточки страницы AI intern
- `accountant-junior.js` — данные и карточки страницы бухгалтера
- `input/messages.csv` — основной датасет для PM
- `input/messages.md` — тот же набор сообщений в markdown
- `input/ai-developer-brief.txt` — краткий бриф для AI intern
- `input/ai-developer-brief.md` — markdown-версия того же брифа
- `input/accountant-brief.txt` — краткий бриф для бухгалтера
- `input/accountant-brief.md` — markdown-версия брифа для бухгалтера
- `input/accountant-contract.md` — договор для бухгалтерского тестового
- `input/accountant-work-items.csv` — состав работ и сумм по договору
- `input/accountant-counterparty-card.md` — реквизиты сторон
- `input/accountant-context.md` — контекст закрытия месяца для бухгалтера
- `REQUEST_TO_ADMINS.md` — готовый текст для администраторов
- `DEPLOY.md` — инструкция по публикации
- `robots.txt` — запрет индексации

## Что уже настроено

- сайт опубликован через GitHub Pages
- в проекте включен `noindex`
- используется cache-busting для подключаемых скриптов
- каталог тестовых уже содержит общие правила на первом экране

## Что помнить перед следующими правками

- публичная ссылка сейчас зависит от имени репозитория `-`
- если поменять имя репозитория на GitHub, изменится и URL GitHub Pages
- после изменений в `app.js`, `ai-developer-intern.js`, `index.html`, `project-manager.html` или `styles.css` иногда нужен hard refresh

## Как выкатить новую версию

```bash
git add .
git commit -m "Describe your change"
git push origin main
```

Потом подождать 1-2 минуты, пока обновится GitHub Pages.
