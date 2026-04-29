# New project

Исходники лендинга и тестового лежат в [ai-task-assistant](./ai-task-assistant).

## Что внутри

- статический лендинг: `index.html`, `styles.css`, `app.js`
- описание тестового: `README.md`, `product.md`, `prompts.md`, `examples.md`
- входные и выходные данные: `input/messages.md`, `output/result.md`
- автодеплой на GitHub Pages: `.github/workflows/deploy-pages.yml`

## Как быстро открыть локально

Из корня репозитория:

```bash
python3 -m http.server 4173
```

Потом откройте:

`http://localhost:4173/ai-task-assistant/`

## Как публиковать

Пошаговая инструкция лежит в [ai-task-assistant/DEPLOY.md](./ai-task-assistant/DEPLOY.md).
