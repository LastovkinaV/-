const aiHeroMetrics = [
  {
    label: 'Таймбокс',
    value: '2ч',
    copy: 'На код и сборку работающего мини-дашборда'
  },
  {
    label: 'Видео',
    value: '3-5м',
    copy: 'Нужно показать сервис и объяснить принятые решения'
  },
  {
    label: 'Дедлайн',
    value: '24ч',
    copy: 'После кодовой части остается день на запись видео'
  }
];

const focus = [
  {
    index: '01',
    title: 'Структура и чистый код',
    copy: 'Нам важно увидеть, как вы организуете проект, именуете сущности и собираете решение под короткий срок.'
  },
  {
    index: '02',
    title: 'Скорость и качество AI-вайб-кодинга',
    copy: 'Смотрим не только на результат, но и на то, как вы используете AI для ускорения, не теряя контроль над качеством.'
  },
  {
    index: '03',
    title: 'UI/UX чувство',
    copy: 'Сервис должен быть не просто рабочим, а понятным и приятным в использовании даже в минимальной версии.'
  },
  {
    index: '04',
    title: 'Презентация решений',
    copy: 'Важно уметь показать, что именно вы сделали, как это работает и почему вы выбрали именно такой подход.'
  }
];

const functionality = [
  {
    step: '1',
    title: 'Поле ввода вопроса',
    copy: 'Вам необходимо дать команде понятную точку входа: куда ввести вопрос для ассистента.'
  },
  {
    step: '2',
    title: 'Кнопка "Спросить AI"',
    copy: 'После нажатия запрос должен быть отправлен в модель или в клиентский AI-сценарий, который вы выбрали.'
  },
  {
    step: '3',
    title: 'Красивое отображение ответа',
    copy: 'Ответ должен быть показан в аккуратном виде, а не просто выведен как сырая строка.'
  },
  {
    step: '4',
    title: 'История последних 5 запросов',
    copy: 'Важно сохранить недавний контекст: как минимум пять последних вопросов пользователя.'
  },
  {
    step: '5',
    title: 'Кнопка "Копировать ответ"',
    copy: 'У пользователя должна быть возможность быстро забрать ответ и использовать его дальше.'
  }
];

const stackOptions = [
  {
    title: 'Frontend',
    copy: 'React, Next.js, Vue, Svelte или другой удобный фронтенд-стек, который помогает быстро собрать качественный интерфейс.'
  },
  {
    title: 'Backend или client-only',
    copy: 'Node.js, Python или чисто клиентский вариант с вызовом API — выбор остается на вашей стороне.'
  },
  {
    title: 'AI API',
    copy: 'OpenAI, Claude или любой другой AI API, если он позволяет показать осмысленный сценарий работы с моделью.'
  }
];

const scoring = [
  {
    points: '25',
    title: 'Работает ли сервис',
    copy: 'Есть ли живой сценарий вопрос → ответ и завершен ли основной пользовательский поток.'
  },
  {
    points: '25',
    title: 'Качество UI/UX',
    copy: 'Насколько интерфейс аккуратный, понятный и приятный в использовании.'
  },
  {
    points: '20',
    title: 'Чистота кода',
    copy: 'Насколько аккуратно организованы файлы, компоненты и общая структура решения.'
  },
  {
    points: '20',
    title: 'Презентация решений',
    copy: 'Насколько внятно вы показали работу сервиса и объяснили, почему выбрали именно такой подход.'
  },
  {
    points: '10',
    title: 'Креативность',
    copy: 'Есть ли у решения бонусные фичи или удачные продуктовые улучшения сверх базы.'
  },
  {
    points: '+10',
    title: 'Реальная LLM и промпты',
    copy: 'Дополнительный бонус, если вы подключили реальную модель и настроили промпт под конкретную задачу.'
  }
];

const aiHeroMetricsRoot = document.querySelector('#ai-hero-metrics');
const focusRoot = document.querySelector('#focus-grid');
const functionalityRoot = document.querySelector('#ai-functionality');
const stackRoot = document.querySelector('#stack-grid');
const scoreRoot = document.querySelector('#score-grid');

function renderMetricCards() {
  aiHeroMetricsRoot.innerHTML = aiHeroMetrics
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

function renderFocusCards() {
  focusRoot.innerHTML = focus
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

function renderFunctionalityCards() {
  functionalityRoot.innerHTML = functionality
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

function renderStackCards() {
  stackRoot.innerHTML = stackOptions
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

function renderScoreCards() {
  scoreRoot.innerHTML = scoring
    .map(
      (item) => `
        <article class="score-card">
          <p class="score-points">${item.points}</p>
          <h3 class="score-title">${item.title}</h3>
          <p class="score-copy">${item.copy}</p>
        </article>
      `
    )
    .join('');
}

renderMetricCards();
renderFocusCards();
renderFunctionalityCards();
renderStackCards();
renderScoreCards();
