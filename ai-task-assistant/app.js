const heroMetrics = [
  {
    label: 'Таймбокс',
    value: '2ч',
    copy: 'Ровно столько должен занимать весь объем тестового'
  },
  {
    label: 'Инструменты',
    value: 'Any',
    copy: 'Можно использовать любые AI-инструменты, включая бесплатную версию Codex'
  },
  {
    label: 'Формат',
    value: 'Web',
    copy: 'Результат открывается по ссылке и читается в браузере'
  }
];

const issues = [
  {
    index: '01',
    title: 'Задачи пишут в личку',
    copy: 'Контекст живет в Telegram, Slack и личных сообщениях, поэтому задачи сложно отслеживать и передавать дальше.'
  },
  {
    index: '02',
    title: 'Нет единой структуры',
    copy: 'Сообщения смешивают проблему, срочность, ожидания и детали, из-за чего невозможно быстро понять, что именно нужно сделать.'
  },
  {
    index: '03',
    title: 'Приоритеты теряются',
    copy: 'Срочное и важное выглядит так же, как пожелание на будущее, а команда тратит время на расшифровку.'
  },
  {
    index: '04',
    title: 'Часть задач пропадает',
    copy: 'Если сообщение не превратилось в нормальную задачу, оно выпадает из процесса и потом всплывает как неприятный сюрприз.'
  }
];

const workflow = [
  {
    step: '1',
    title: 'Взять хаотичные сообщения',
    copy: 'Вы получаете готовый набор входящих сообщений без структуры и без дополнительного брифа.'
  },
  {
    step: '2',
    title: 'Поставить задачу AI',
    copy: 'Вам необходимо сформулировать промпт так, чтобы модель вернула полезный, ограниченный и объяснимый результат.'
  },
  {
    step: '3',
    title: 'Собрать задачи в понятный формат',
    copy: 'Вам необходимо для каждого сообщения собрать title, description, type, priority, deadline и owner role.'
  },
  {
    step: '4',
    title: 'Показать ход мысли',
    copy: 'Вам необходимо зафиксировать промпты, улучшения и продуктовую логику, а не только финальную выдачу.'
  }
];

const messages = [
  {
    channel: 'Support escalation',
    text: 'После оплаты у части клиентов не уходит письмо с чеком. Саппорт уже второй день отвечает руками. Хорошо бы починить сегодня, а то начнутся жалобы.'
  },
  {
    channel: 'Marketing request',
    text: 'Нужен блок с кейсами на лендинге перед вебинаром 15 мая. Контент маркетинг почти собрал, нужен кто-то, кто это доведет до релиза.'
  },
  {
    channel: 'Ops pain',
    text: 'Ребята, новички опять пишут всем в личку, потому что непонятно, где брать доступы и какие шаги делать в первую неделю. Давайте уже соберем одну нормальную инструкцию и чек-лист до конца недели.'
  },
  {
    channel: 'Mobile bug',
    text: 'На айфоне в Safari кнопка "Оплатить" уезжает за экран. С утра это показывали на созвоне. Желательно срочно, потому что это выглядит очень плохо.'
  }
];

const structuredTasks = [
  {
    title: 'Исправить отправку чеков после оплаты',
    type: 'bug',
    priority: 'high',
    deadline: 'сегодня',
    owner: 'backend developer',
    description:
      'Починить отправку писем с чеком после оплаты, так как проблема уже влияет на клиентов, а саппорт компенсирует это вручную.',
    assumption:
      'Приоритет высокий, потому что есть клиентское влияние и срочность на сегодня, но нет прямого указания на полную остановку продаж.'
  },
  {
    title: 'Подготовить и выпустить блок кейсов для лендинга',
    type: 'feature',
    priority: 'medium',
    deadline: 'до 15 мая',
    owner: 'frontend developer',
    description:
      'Собрать и выкатить блок с кейсами на лендинг до вебинара, используя уже подготовленный маркетингом контент.',
    assumption:
      'Тип feature, потому что добавляется новый блок. Приоритет medium, так как это важная подготовка к событию, но без сигнала о критическом ущербе.'
  },
  {
    title: 'Собрать onboarding-инструкцию и чек-лист для новичков',
    type: 'process',
    priority: 'high',
    deadline: 'до конца недели',
    owner: 'project manager',
    description:
      'Подготовить единый документ и чек-лист первой недели, чтобы новые сотрудники не собирали информацию по личным сообщениям.',
    assumption:
      'Это process-задача: проблема в организации работы. Приоритет высокий из-за повторяемости и регулярной потери времени команды.'
  },
  {
    title: 'Исправить кнопку "Оплатить" в Safari на iPhone',
    type: 'bug',
    priority: 'critical',
    deadline: 'как можно скорее',
    owner: 'frontend developer',
    description:
      'Исправить мобильный баг в Safari, где CTA уходит за экран и ломает визуально важный платежный сценарий.',
    assumption:
      'Приоритет critical из-за прямого риска для конверсии в оплату и явной срочности в формулировке сообщения.'
  }
];

const deliverables = [
  {
    title: 'README.md',
    copy: 'Короткое описание инструмента, сценария использования и того, как открыть результат в браузере.',
    path: '/ai-task-assistant/README.md'
  },
  {
    title: 'prompts.md',
    copy: 'История работы с моделью: первая версия промпта, улучшения, финальная формулировка и выводы.',
    path: '/ai-task-assistant/prompts.md'
  },
  {
    title: 'product.md',
    copy: 'Правила, по которым AI определяет тип задачи, приоритет, дедлайн и роль исполнителя.',
    path: '/ai-task-assistant/product.md'
  },
  {
    title: 'input/messages.md',
    copy: 'Набор исходных хаотичных сообщений, который вам необходимо обработать через AI.',
    path: '/ai-task-assistant/input/messages.md'
  },
  {
    title: 'output/result.md',
    copy: 'Структурированный результат обработки, лучше всего в таблице или другом удобном формате.',
    path: '/ai-task-assistant/output/result.md'
  },
  {
    title: 'examples.md',
    copy: 'Пара примеров "вход -> выход", чтобы показать ожидаемый уровень детализации и формат ответа.',
    path: '/ai-task-assistant/examples.md'
  }
];

const submissionItems = [
  {
    title: 'Ссылка на лендинг',
    copy: 'Работающая веб-страница, которую можно открыть без локального запуска.'
  },
  {
    title: 'Ссылка на репозиторий',
    copy: 'Исходники, markdown-файлы и видимый процесс работы с AI.'
  },
  {
    title: 'Короткий self-review',
    copy: 'Что получилось хорошо и что вы улучшили бы еще за один дополнительный час.'
  }
];

const heroMetricsRoot = document.querySelector('#hero-metrics');
const issuesRoot = document.querySelector('#issues');
const workflowRoot = document.querySelector('#workflow');
const messagesRoot = document.querySelector('#messages');
const tasksRoot = document.querySelector('#tasks');
const deliverablesRoot = document.querySelector('#deliverables-grid');
const submissionRoot = document.querySelector('#submission-list');

function renderHeroMetrics() {
  heroMetricsRoot.innerHTML = heroMetrics
    .map(
      (item) => `
        <article class="metric-card">
          <p class="metric-label">${item.label}</p>
          <p class="metric-value">${item.value}</p>
          <p class="metric-copy">${item.copy}</p>
        </article>
      `
    )
    .join('');
}

function renderIssues() {
  issuesRoot.innerHTML = issues
    .map(
      (item) => `
        <article class="issue-card">
          <p class="issue-index">${item.index}</p>
          <h3 class="issue-title">${item.title}</h3>
          <p class="issue-copy">${item.copy}</p>
        </article>
      `
    )
    .join('');
}

function renderWorkflow() {
  workflowRoot.innerHTML = workflow
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

function renderMessages() {
  messagesRoot.innerHTML = messages
    .map(
      (message, index) => `
        <article class="message-card">
          <div class="message-top">
            <span class="message-index">${index + 1}</span>
            <span class="message-badge">${message.channel}</span>
          </div>
          <p>${message.text}</p>
        </article>
      `
    )
    .join('');
}

function priorityClass(priority) {
  return `priority-${priority}`;
}

function renderTasks() {
  tasksRoot.innerHTML = structuredTasks
    .map(
      (task, index) => `
        <article class="task-card">
          <div class="task-top">
            <div>
              <p class="panel-kicker">Task ${index + 1}</p>
              <h4>${task.title}</h4>
            </div>
            <span class="priority-chip ${priorityClass(task.priority)}">${task.priority}</span>
          </div>

          <div class="task-meta">
            <div class="meta-pill">
              <span class="meta-label">Тип</span>
              <span class="meta-value">${task.type}</span>
            </div>
            <div class="meta-pill">
              <span class="meta-label">Дедлайн</span>
              <span class="meta-value">${task.deadline}</span>
            </div>
            <div class="meta-pill">
              <span class="meta-label">Ответственный</span>
              <span class="meta-value">${task.owner}</span>
            </div>
            <div class="meta-pill">
              <span class="meta-label">Формат</span>
              <span class="meta-value">AI -> structured task</span>
            </div>
          </div>

          <p class="task-description">${task.description}</p>
          <div class="task-assumption">${task.assumption}</div>
        </article>
      `
    )
    .join('');
}

function renderDeliverables() {
  deliverablesRoot.innerHTML = deliverables
    .map(
      (item) => `
        <article class="deliverable-card">
          <p class="panel-kicker">Artifact</p>
          <h3 class="deliverable-title">${item.title}</h3>
          <p class="deliverable-copy">${item.copy}</p>
          <span class="deliverable-path">${item.path}</span>
        </article>
      `
    )
    .join('');
}

function renderSubmission() {
  submissionRoot.innerHTML = submissionItems
    .map(
      (item) => `
        <article class="submission-card">
          <p class="panel-kicker">Send us</p>
          <h3>${item.title}</h3>
          <p>${item.copy}</p>
        </article>
      `
    )
    .join('');
}

renderHeroMetrics();
renderIssues();
renderWorkflow();
renderMessages();
renderTasks();
renderDeliverables();
renderSubmission();
