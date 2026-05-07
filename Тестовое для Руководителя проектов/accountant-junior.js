const accountantHeroMetrics = [
  {
    label: 'Таймбокс',
    value: '2ч',
    copy: 'На разбор договора, документы и короткое пояснение'
  },
  {
    label: 'Позиции',
    value: '6',
    copy: 'Позиции из договора и приложения'
  },
  {
    label: 'Файлы',
    value: '5',
    copy: 'Бриф, договор, состав работ, реквизиты и контекст'
  }
];

const accountantFocus = [
  {
    index: '01',
    title: 'Чтение договора',
    copy: 'Важно увидеть, как вы читаете условия, состав работ и общую логику закрытия, а не просто переписываете строки из приложения.'
  },
  {
    index: '02',
    title: 'Комплект документов',
    copy: 'Смотрим, насколько аккуратно вы собираете закрывающие документы по участку реализации и не теряете позиции из договора.'
  },
  {
    index: '03',
    title: 'Расчеты и НДС',
    copy: 'Нужно корректно посчитать суммы и показать, что итоговые значения по документам проверены, а не сгенерированы без контроля.'
  },
  {
    index: '04',
    title: 'Работа с AI',
    copy: 'Важно, чтобы AI ускорял подготовку, но итоговая логика выполнения и проверка результата оставались на вашей стороне.'
  }
];

const accountantWorkflow = [
  {
    step: '1',
    title: 'Прочитать договор',
    copy: 'Вам необходимо изучить договор, состав работ и контекст закрытия месяца, чтобы понять объем документов на стороне исполнителя.'
  },
  {
    step: '2',
    title: 'Подготовить закрывающие документы',
    copy: 'Нужно собрать закрывающие документы по всем позициям договора на основании предоставленных материалов.'
  },
  {
    step: '3',
    title: 'Рассчитать суммы',
    copy: 'Важно корректно показать суммы по позициям, в том числе базу, НДС 22% и итоговые значения.'
  },
  {
    step: '4',
    title: 'Проверить комплект',
    copy: 'Перед финальной выдачей нужно убедиться, что все позиции попали в документы и не потерялись по ходу подготовки.'
  },
  {
    step: '5',
    title: 'Коротко описать логику',
    copy: 'В конце необходимо коротко пояснить логику выполнения и отдельно отметить, чем именно AI помог вам в этой задаче.'
  }
];

const accountantMetricsRoot = document.querySelector('#accountant-hero-metrics');
const accountantFocusRoot = document.querySelector('#accountant-focus-grid');
const accountantWorkflowRoot = document.querySelector('#accountant-workflow-grid');

function renderAccountantMetrics() {
  if (!accountantMetricsRoot) {
    return;
  }

  accountantMetricsRoot.innerHTML = accountantHeroMetrics
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

function renderAccountantFocus() {
  if (!accountantFocusRoot) {
    return;
  }

  accountantFocusRoot.innerHTML = accountantFocus
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

function renderAccountantWorkflow() {
  if (!accountantWorkflowRoot) {
    return;
  }

  accountantWorkflowRoot.innerHTML = accountantWorkflow
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

renderAccountantMetrics();
renderAccountantFocus();
renderAccountantWorkflow();
