const supportFunctionality = [
  {
    step: '1',
    title: 'Классификация через LLM',
    copy: 'Один вызов LLM должен определить тип сообщения: обычный или критичный. Извлечение IP или сервера можно сделать в том же вызове.'
  },
  {
    step: '2',
    title: 'NER для IP и хоста',
    copy: 'Нужно достать из текста IP-адрес или имя сервера, если пользователь их указал.'
  },
  {
    step: '3',
    title: 'Детектор дублей',
    copy: 'Используйте embeddings и косинусную близость. Порог схожести должен быть не ниже 0.85, хранить нужно последние 10 сообщений.'
  },
  {
    step: '4',
    title: 'Дайджест каждые 15 минут',
    copy: 'Дайджест должен включать непрочитанные сообщения: начало текста до 50 символов, тип и найденный IP или сервер.'
  },
  {
    step: '5',
    title: 'Критичный алерт',
    copy: 'Если критичное сообщение висит без ответа больше 5 минут, бот шлет отдельное сообщение: "CRITICAL: сообщение от X, текст: ...".'
  },
  {
    step: '6',
    title: 'Ускоренный режим для проверки',
    copy: 'Для демонстрации можно сократить ожидание дайджеста до 1 минуты и вручную ускорить проверку алерта.'
  }
];

const supportDeliverables = [
  {
    title: 'Код',
    copy: 'Один файл `bot.py`, который запускается и показывает рабочий сценарий Telegram-бота.'
  },
  {
    title: 'README на 5-10 строк',
    copy: 'Добавьте ссылку на бота в Telegram, команды `pip install ...` и `python bot.py`, а также AI-провайдера и модель.'
  },
  {
    title: 'Скриншот или видео',
    copy: 'Покажите сообщение "Срочно! Не работает сервер db01", алерт после 5 минут или ускоренно и дайджест с критичностью и сервером db01.'
  },
  {
    title: 'Пояснение по AI',
    copy: 'Коротко зафиксируйте, где используется LLM, где embeddings, какой выбран порог и как хранится окно последних сообщений.'
  }
];

const supportFunctionalityRoot = document.querySelector('#support-functionality');
const supportDeliverablesRoot = document.querySelector('#support-deliverables');

function renderSupportFunctionality() {
  if (!supportFunctionalityRoot) {
    return;
  }

  supportFunctionalityRoot.innerHTML = supportFunctionality
    .map(
      (item) => `
        <article class="flow-card">
          <span class="flow-step">${item.step}</span>
          <h3 class="flow-title">${item.title}</h3>
          <p class="flow-copy">${item.copy}</p>
        </article>
      `
    )
    .join('');
}

function renderSupportDeliverables() {
  if (!supportDeliverablesRoot) {
    return;
  }

  supportDeliverablesRoot.innerHTML = supportDeliverables
    .map(
      (item) => `
        <article class="stack-card">
          <h3>${item.title}</h3>
          <p>${item.copy}</p>
        </article>
      `
    )
    .join('');
}

renderSupportFunctionality();
renderSupportDeliverables();
