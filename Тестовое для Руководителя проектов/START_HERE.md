# START HERE

Этот файл нужен, чтобы быстро вернуться к проекту и сразу понять, что где лежит.

## Что это

Статический сайт с несколькими страницами: одна страница — одно тестовое под
одну роль.

## Главные ссылки

- локально: `http://localhost:4173/%D0%A2%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B5%20%D0%B4%D0%BB%D1%8F%20%D0%A0%D1%83%D0%BA%D0%BE%D0%B2%D0%BE%D0%B4%D0%B8%D1%82%D0%B5%D0%BB%D1%8F%20%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%BE%D0%B2/`
- прод: `https://lastovkinav.github.io/-/`
- репозиторий: `https://github.com/LastovkinaV/-.git`

## Как открыть локально

Из корня репозитория:

```bash
cd "/Users/valeriiaklimova/Documents/New project"
python3 -m http.server 4173
```

Потом открыть локальную ссылку выше.

Если текст на странице не обновился после правок, используйте жесткое обновление:

```text
Cmd + Shift + R
```

## Основные файлы

- `index.html` — главная страница-каталог с ролями
- `project-manager.html` — тестовое для руководителя проектов
- `ai-developer-intern.html` — тестовое для стажера AI-разработчика
- `styles.css` — все стили
- `app.js` — данные и карточки для страницы руководителя проектов
- `ai-developer-intern.js` — данные и карточки для страницы AI-стажера
- `input/messages.csv` — основной датасет для кандидата
- `input/messages.md` — тот же набор сообщений в markdown
- `input/ai-developer-brief.md` — краткий бриф для AI-стажера
- `REQUEST_TO_ADMINS.md` — готовый текст для админов
- `DEPLOY.md` — инструкция по публикации
- `robots.txt` — запрет индексации

## Что уже настроено

- сайт опубликован через GitHub Pages
- в проекте включен `noindex`
- подключен cache-busting для `app.js`, чтобы браузер не держал старую версию скрипта

## Что помнить перед следующими правками

- публичная ссылка сейчас зависит от имени репозитория `-`
- если поменять имя репозитория на GitHub, изменится и URL GitHub Pages
- после изменений в `app.js`, `ai-developer-intern.js` или `index.html`
  иногда нужен hard refresh

## Как выкатить новую версию

```bash
git add .
git commit -m "Describe your change"
git push origin main
```

Потом подождать 1-2 минуты, пока обновится GitHub Pages.
