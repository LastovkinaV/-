const cmoHeroMetrics = [
  {
    label: 'Таймбокс',
    value: '2ч',
    copy: 'На разбор, упаковку и подготовку презентации'
  },
  {
    label: 'Результат',
    value: 'HTML',
    copy: 'Структура лендинга и HTML-страница'
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
      'Было бы классно, если AI сам писал отчеты владельцам питомцев.',
      'Но страшно, что AI напишет что-то не то.'
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
    title: 'Собрать структуру лендинга',
    copy: 'Подготовьте блоки: первый экран, проблема, решение, возможности, бизнес-ценность, ценность для владельцев, администраторы, AI, интеграции, внедрение, окупаемость, риски и CTA.'
  },
  {
    step: '4',
    title: 'Описать каждый блок',
    copy: 'Для каждого блока укажите цель, заголовок, краткий текст, ключевые смыслы, возможный визуал и CTA, если он нужен.'
  },
  {
    step: '5',
    title: 'Написать ключевые тексты',
    copy: 'Подготовьте тексты для 3-5 блоков: первый экран, проблема, решение, бизнес-ценность, AI-функции и CTA.'
  },
  {
    step: '6',
    title: 'Показать AI-процесс',
    copy: 'Укажите AI-инструменты, задачи для AI, удачные промпты, ручную проверку, слабые ответы модели, улучшения и зоны риска.'
  }
];

const cmoDeliverables = [
  {
    title: 'Структура лендинга',
    copy: 'Схема блоков с целями, заголовками, ключевыми смыслами, визуальными идеями и CTA.'
  },
  {
    title: 'Тексты ключевых блоков',
    copy: 'Не весь лендинг полностью, а готовые тексты для 3-5 самых важных блоков.'
  },
  {
    title: 'Логика упаковки',
    copy: 'Краткое объяснение, какие боли закрываются, для каких ЛПР пишем и почему структура именно такая.'
  },
  {
    title: 'Уточняющие вопросы',
    copy: 'Список вопросов клиенту перед продажей, оценкой бюджета и планированием внедрения.'
  },
  {
    title: 'Описание AI-процесса',
    copy: 'Что делали с AI, что проверяли вручную, где модель ошибалась и как улучшали результат.'
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
