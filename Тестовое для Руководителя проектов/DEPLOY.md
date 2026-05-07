# Публикация проекта

Ниже — актуальный маршрут публикации для текущей версии сайта.

## Текущее состояние

- прод работает через GitHub Pages
- публичная ссылка каталога: `https://lastovkinav.github.io/-/`
- в репозитории уже есть workflow `.github/workflows/deploy-pages.yml`
- публикуется содержимое папки `Тестовое для Руководителя проектов`

Внутри этой папки лежит многостраничный статический сайт:

- `index.html` — каталог тестовых
- `project-manager.html` — тестовое для PM
- `ai-developer-intern.html` — тестовое для AI intern
- `accountant-junior.html` — тестовое для бухгалтера-джуна
- `input/accountant-contract.md` — договор для бухгалтерского тестового
- `input/accountant-work-items.csv` — состав работ по договору

## Основной вариант: GitHub Pages

Это основной и уже используемый способ публикации.

### Как выкатить новую версию

Из корня репозитория:

```bash
git add .
git commit -m "Describe your change"
git push origin main
```

После этого:

1. Откройте вкладку `Actions` в GitHub.
2. Дождитесь успешного workflow деплоя.
3. Подождите 1-2 минуты.
4. Обновите публичную страницу.

### Что должно быть включено на GitHub

В репозитории:

1. `Settings`
2. `Pages`
3. `Build and deployment`
4. `Source = GitHub Actions`

### Текущие публичные ссылки

- каталог: `https://lastovkinav.github.io/-/`
- PM: `https://lastovkinav.github.io/-/project-manager.html`
- AI intern: `https://lastovkinav.github.io/-/ai-developer-intern.html`
- Accountant: `https://lastovkinav.github.io/-/accountant-junior.html`

## Локальная проверка перед публикацией

Из корня репозитория:

```bash
python3 -m http.server 4173
```

Затем откройте:

`http://localhost:4173/%D0%A2%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B5%20%D0%B4%D0%BB%D1%8F%20%D0%A0%D1%83%D0%BA%D0%BE%D0%B2%D0%BE%D0%B4%D0%B8%D1%82%D0%B5%D0%BB%D1%8F%20%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%BE%D0%B2/`

Если браузер показывает старую версию, используйте жесткое обновление:

```text
Cmd + Shift + R
```

## Альтернативы

### Vercel

Подходит, если нужен отдельный хостинг через GitHub и автодеплой по пушам.

Настройка:

1. Импортировать GitHub-репозиторий.
2. Указать `Root Directory = Тестовое для Руководителя проектов`.
3. Нажать `Deploy`.

### Netlify Drop

Самый быстрый ручной вариант без Git-интеграции:

1. Открыть Netlify Drop.
2. Перетащить папку `Тестовое для Руководителя проектов`.
3. Получить публичную ссылку.

## Если что-то пошло не так

### GitHub Pages открылся, но сайт не обновился

Проверьте:

- в `Settings -> Pages` выбран `Source = GitHub Actions`
- workflow во вкладке `Actions` завершился успешно
- изменения действительно запушены в `main`

### Получаете 404

Проверьте:

- ссылка открывается целиком, включая имя репозитория
- прошло хотя бы 1-2 минуты после деплоя
- в GitHub Pages не менялось имя репозитория или источник публикации

### На Vercel открылся не тот каталог

Проверьте, что `Root Directory` выставлен именно в `Тестовое для Руководителя проектов`.
