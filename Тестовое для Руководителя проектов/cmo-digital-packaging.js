const cmoHeroMetrics = [
  {
    label: 'Таймбокс',
    value: '2ч',
    copy: 'На лендинг, носители и план запуска'
  },
  {
    label: 'Результат',
    value: 'HTML',
    copy: 'Готовый лендинг, носители и маркетинг-план'
  }
];

const cmoInputs = [
  {
    title: 'Продукт и доверие',
    items: [
      'Хотим личный кабинет, чтобы клиент видел своего питомца.',
      'Было бы круто, если можно как в Booking выбрать номер.',
      'У нас есть VIP-комнаты, но клиенты не всегда понимают разницу.',
      'Клиенты часто спрашивают: "А точно ли с моей собакой все хорошо?"'
    ]
  },
  {
    title: 'Операции и хаос',
    items: [
      'Сейчас администраторы часто отвечают вручную в WhatsApp.',
      'Операционный директор хочет меньше хаоса в расписании.',
      'В праздники все перегружено.',
      'Администраторы иногда теряют заявки.'
    ]
  },
  {
    title: 'Рост и апсейлы',
    items: [
      'Хотим продавать доп.услуги: груминг, трансфер, фотоотчет, ветосмотр, индивидуальное меню.',
      'Маркетинг хочет больше повторных бронирований.',
      'Хотим программу лояльности.',
      'Хотим запуститься до новогоднего сезона.'
    ]
  },
  {
    title: 'Ограничения и риски',
    items: [
      'CEO хочет "вау-эффект".',
      'CTO говорит, что текущая CRM старая и лучше ее не трогать.',
      'Было бы классно, если отчеты владельцам питомцев формировались автоматически.',
      'Но страшно, что автоматический отчет получится неточным или холодным.'
    ]
  },
  {
    title: 'Продажа и окупаемость',
    items: [
      'Бюджет обсуждаем, если будет понятно, как это окупится.',
      'Нужно показать, что это не просто дорогая игрушка.',
      'Нам важно выглядеть премиально.',
      'Конкуренты пока делают все очень старомодно.'
    ]
  }
];

const cmoTasks = [
  {
    step: '1',
    title: 'Разобрать задачу клиента',
    copy: 'Опишите реальную бизнес-задачу, боли клиента и пользователей, ключевых стейкхолдеров, противоречия во вводных и вопросы перед продажей.'
  },
  {
    step: '2',
    title: 'Сформировать позиционирование',
    copy: 'Предложите главный месседж, короткое описание продукта, 3-5 преимуществ и отдельные акценты для CEO, CTO, маркетинга и операций.'
  },
  {
    step: '3',
    title: 'Собрать готовый лендинг',
    copy: 'Сделайте HTML-страницу с первым экраном, проблемой, решением, возможностями, ценностью для бизнеса, владельцев и команды, интеграциями, внедрением, окупаемостью, рисками и CTA.'
  },
  {
    step: '4',
    title: 'Написать тексты и визуальную логику',
    copy: 'Для ключевых блоков подготовьте готовые заголовки, подзаголовки, основной текст, CTA и понятную визуальную подачу внутри страницы.'
  },
  {
    step: '5',
    title: 'Подготовить рекламные носители',
    copy: 'Добавьте готовые баннеры, рекламные сообщения или креативы для нескольких форматов: например performance, соцсети, ретаргетинг, email или партнерские размещения.'
  },
  {
    step: '6',
    title: 'Собрать маркетинг-план',
    copy: 'Опишите, на каких площадках размещаться, какие аудитории и сообщения использовать, как запускать кампании, какие KPI смотреть и как приоритизировать бюджет.'
  }
];

const cmoDeliverables = [
  {
    title: 'Готовый лендинг',
    copy: 'Полноценная HTML-страница с готовыми текстами, визуальной логикой, CTA и понятной упаковкой продукта.'
  },
  {
    title: 'Рекламные носители',
    copy: 'Готовые баннеры, рекламные сообщения или креативы для выбранных каналов и форматов.'
  },
  {
    title: 'Маркетинг-план',
    copy: 'Площадки, аудитории, сообщения, механика размещения, этапы запуска, KPI и приоритеты бюджета.'
  },
  {
    title: 'Уточняющие вопросы',
    copy: 'Список вопросов клиенту перед продажей, оценкой бюджета и планированием внедрения.'
  },
  {
    title: 'Логика упаковки',
    copy: 'Краткое объяснение, какие боли закрываются, для каких ЛПР пишем и почему выбраны такие акценты.'
  },
  {
    title: 'HTML-страница по ссылке',
    copy: 'Итог нужно собрать в виде HTML-страницы, которую проверяющий сможет открыть без дополнительной настройки.'
  }
];

const cmoMetricsRoot = document.querySelector('#cmo-hero-metrics');
const cmoInputsRoot = document.querySelector('#cmo-inputs-grid');
const cmoTasksRoot = document.querySelector('#cmo-task-grid');
const cmoDeliverablesRoot = document.querySelector('#cmo-deliverables-grid');

function renderCmoMetrics() {
  if (!cmoMetricsRoot) {
    return;
  }

  cmoMetricsRoot.innerHTML = cmoHeroMetrics
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

function renderCmoInputs() {
  if (!cmoInputsRoot) {
    return;
  }

  cmoInputsRoot.innerHTML = cmoInputs
    .map(
      (group) => `
        <article class="note-card">
          <h3>${group.title}</h3>
          <ul class="note-list">
            ${group.items.map((item) => `<li>${item}</li>`).join('')}
          </ul>
        </article>
      `
    )
    .join('');
}

function renderCmoTasks() {
  if (!cmoTasksRoot) {
    return;
  }

  cmoTasksRoot.innerHTML = cmoTasks
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

function renderCmoDeliverables() {
  if (!cmoDeliverablesRoot) {
    return;
  }

  cmoDeliverablesRoot.innerHTML = cmoDeliverables
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

renderCmoMetrics();
renderCmoInputs();
renderCmoTasks();
renderCmoDeliverables();
