# Тестовые задания

Статический сайт с каталогом тестовых страниц под разные роли.

Если нужно быстро вспомнить, где что лежит и как открыть проект, начните с `START_HERE.md`.

## Что внутри

- `index.html` — каталог всех тестовых
- `project-manager.html` — тестовое для руководителя проектов
- `ai-developer-intern.html` — тестовое для стажера AI-разработчика
- `accountant-junior.html` — тестовое для бухгалтера-джуна
- `styles.css` — общие стили
- `app.js` — контент страницы PM
- `ai-developer-intern.js` — контент страницы AI intern
- `accountant-junior.js` — контент страницы бухгалтера
- `input/messages.csv` — основной датасет для PM
- `input/ai-developer-brief.txt` — краткий бриф для AI intern
- `input/accountant-brief.txt` — краткий бриф для бухгалтера
- `input/accountant-contract.md` — договор для бухгалтерского тестового
- `input/accountant-work-items.csv` — состав работ и сумм по договору
- `input/accountant-counterparty-card.md` — карточка сторон
- `input/accountant-context.md` — контекст закрытия месяца для бухгалтера

## Локальный просмотр

Из корня репозитория:

```bash
python3 -m http.server 4173
```

Потом откройте:

`http://localhost:4173/%D0%A2%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B5%20%D0%B4%D0%BB%D1%8F%20%D0%A0%D1%83%D0%BA%D0%BE%D0%B2%D0%BE%D0%B4%D0%B8%D1%82%D0%B5%D0%BB%D1%8F%20%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%BE%D0%B2/`

## Публикация

Пошаговая инструкция по публикации лежит в `DEPLOY.md`.
