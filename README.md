# New project

Исходники сайта с тестовыми лежат в [Тестовое для Руководителя проектов](./Тестовое%20для%20Руководителя%20проектов).

Если нужно быстро вернуться в контекст проекта, сначала откройте [START_HERE.md](./Тестовое%20для%20Руководителя%20проектов/START_HERE.md).

## Что это

Многостраничный статический сайт с каталогом тестовых заданий. Сейчас внутри:

- главная страница-каталог: `index.html`
- тестовое для руководителя проектов: `project-manager.html`
- тестовое для стажера AI-разработчика: `ai-developer-intern.html`
- тестовое для бухгалтера-джуна: `accountant-junior.html`
- данные страниц: `app.js`, `ai-developer-intern.js`
- данные страницы бухгалтера: `accountant-junior.js`
- исходные материалы: `input/messages.csv`, `input/messages.md`, `input/ai-developer-brief.txt`, `input/accountant-brief.txt`, `input/accountant-contract.md`, `input/accountant-work-items.csv`, `input/accountant-counterparty-card.md`, `input/accountant-context.md`
- служебная документация: `START_HERE.md`, `DEPLOY.md`, `REQUEST_TO_ADMINS.md`
- автодеплой на GitHub Pages: `.github/workflows/deploy-pages.yml`

## Быстрые ссылки

- локально: `http://localhost:4173/%D0%A2%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B5%20%D0%B4%D0%BB%D1%8F%20%D0%A0%D1%83%D0%BA%D0%BE%D0%B2%D0%BE%D0%B4%D0%B8%D1%82%D0%B5%D0%BB%D1%8F%20%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%BE%D0%B2/`
- прод: `https://lastovkinav.github.io/-/`
- репозиторий: `https://github.com/LastovkinaV/-.git`

## Как быстро открыть локально

Из корня репозитория:

```bash
python3 -m http.server 4173
```

Потом откройте каталог тестовых:

`http://localhost:4173/%D0%A2%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B5%20%D0%B4%D0%BB%D1%8F%20%D0%A0%D1%83%D0%BA%D0%BE%D0%B2%D0%BE%D0%B4%D0%B8%D1%82%D0%B5%D0%BB%D1%8F%20%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%BE%D0%B2/`

## Как публиковать

Пошаговая инструкция лежит в [DEPLOY.md](./Тестовое%20для%20Руководителя%20проектов/DEPLOY.md).
