# Публикация проекта

Ниже самый простой маршрут для этого проекта.

## Вариант 1. GitHub Pages + GitHub

Это лучший вариант, если вам нужны:

- публичная ссылка
- репозиторий с исходниками
- автоматическое обновление сайта после каждого `git push`

### Что уже подготовлено

В репозитории уже есть workflow:

- `.github/workflows/deploy-pages.yml`

Он публикует содержимое папки `ai-task-assistant` в GitHub Pages.

### Шаг 1. Создайте пустой репозиторий на GitHub

Например:

- `ai-task-assistant-test`

Создайте пустой репозиторий без лишних файлов, если GitHub предлагает добавить README, `.gitignore` или license.

### Шаг 2. Запушьте проект

Из корня проекта выполните:

```bash
git add .
git commit -m "Prepare AI task assistant landing page"
git branch -M main
git remote add origin https://github.com/<YOUR_GITHUB_LOGIN>/<YOUR_REPOSITORY>.git
git push -u origin main
```

Если `origin` уже существует, используйте:

```bash
git remote set-url origin https://github.com/<YOUR_GITHUB_LOGIN>/<YOUR_REPOSITORY>.git
git push -u origin main
```

### Шаг 3. Включите GitHub Pages

На GitHub:

1. Откройте репозиторий.
2. Перейдите в `Settings`.
3. Откройте раздел `Pages`.
4. В блоке `Build and deployment` выберите `Source` = `GitHub Actions`.

После этого workflow сам опубликует сайт.

### Шаг 4. Дождитесь первой публикации

Проверьте вкладку `Actions` в репозитории. После успешного деплоя GitHub Pages даст ссылку вида:

`https://<YOUR_GITHUB_LOGIN>.github.io/<YOUR_REPOSITORY>/`

### Как обновлять сайт дальше

После любого изменения:

```bash
git add .
git commit -m "Update landing"
git push
```

GitHub Pages автоматически обновится.

## Вариант 2. Vercel

Подходит, если хотите простой хостинг через GitHub и автодеплой по пушам.

### Шаги

1. Сначала запушьте проект на GitHub.
2. Откройте Vercel.
3. Нажмите `New Project`.
4. Импортируйте ваш GitHub-репозиторий.
5. В настройках проекта укажите `Root Directory` = `ai-task-assistant`.
6. Нажмите `Deploy`.

После этого Vercel даст публичную ссылку и будет обновлять сайт после новых пушей.

## Вариант 3. Netlify Drop

Это самый быстрый вариант, если нужна просто ссылка без настройки Git-интеграции.

### Шаги

1. Откройте Netlify Drop.
2. Перетащите папку `ai-task-assistant` в окно загрузки.
3. Получите публичную ссылку сразу после загрузки.

Минус: обновления нужно будет загружать руками заново.

## Локальная проверка перед публикацией

Из корня репозитория:

```bash
python3 -m http.server 4173
```

Затем откройте:

`http://localhost:4173/ai-task-assistant/`

## Если что-то пошло не так

### GitHub Pages открылся, но сайт не появился

Проверьте:

- в `Settings -> Pages` выбран `Source = GitHub Actions`
- workflow во вкладке `Actions` завершился успешно
- вы пушите в ветку `main` или `master`

### Получаете 404

Проверьте:

- репозиторий действительно запушен на GitHub
- ссылка открывается целиком, включая имя репозитория
- прошло хотя бы 1-2 минуты после первого деплоя

### Vercel показывает не тот каталог

Проверьте, что `Root Directory` выставлен именно в `ai-task-assistant`.
