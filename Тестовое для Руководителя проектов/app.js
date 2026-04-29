const heroMetrics = [
  {
    label: 'Таймбокс',
    value: '2ч',
    copy: 'Жесткое ограничение по времени на все решение'
  },
  {
    label: 'Сообщений',
    value: '8',
    copy: 'Во входящих смешаны риски, сроки, зависимости и неявные приоритеты'
  },
  {
    label: 'Среда',
    value: 'Web',
    copy: 'Итог должен открываться по ссылке и читаться как продуктовый сценарий'
  }
];

const issues = [
  {
    index: '01',
    title: 'Договоренности живут в личке',
    copy: 'Во входящих много контекста, но он не зафиксирован в рабочем формате, поэтому задачи теряются между людьми и каналами.'
  },
  {
    index: '02',
    title: 'Задачи не формализованы',
    copy: 'Один и тот же текст может одновременно содержать проблему, ожидание, относительный срок, бизнес-риск и намек на исполнителя.'
  },
  {
    index: '03',
    title: 'Статусы не предсказуемы',
    copy: 'Приоритеты и дедлайны выводятся из контекста: жалобы клиентов, релиз, юристы, weekly update или риск для пилота.'
  },
  {
    index: '04',
    title: 'Знание не складывается в систему',
    copy: 'Решение должно не просто визуализировать хаос, а превращать его в понятную, повторяемую и управляемую практику команды.'
  }
];

const workflow = [
  {
    step: '1',
    title: 'Разобрать входящие сигналы',
    copy: 'Вы получаете готовый набор сообщений без структуры и без дополнительного брифа. Нужно понять, где в них факт, риск, срок и действие.'
  },
  {
    step: '2',
    title: 'Сформулировать правило разбора',
    copy: 'Вам необходимо определить, по какой логике решение трактует неоднозначность, относительные сроки и смешанные формулировки.'
  },
  {
    step: '3',
    title: 'Собрать рабочий сценарий',
    copy: 'Вам необходимо реализовать решение в браузере так, чтобы договоренность переставала быть перепиской и становилась рабочим объектом.'
  },
  {
    step: '4',
    title: 'Проверить устойчивость',
    copy: 'Важно, чтобы решение не ломалось на формулировках вроде "сегодня", "к пятнице", "до релиза", "иначе сорвется пилот".'
  }
];

const messages = [
  {
    channel: 'Поддержка',
    text: 'После оплаты у части клиентов не уходит письмо с чеком. Саппорт уже второй день отвечает руками. Хорошо бы починить сегодня, а то начнутся жалобы.'
  },
  {
    channel: 'Маркетинг',
    text: 'Нужен блок с кейсами на лендинге перед вебинаром 15 мая. Контент маркетинг почти собрал, нужен кто-то, кто это доведет до релиза.'
  },
  {
    channel: 'Онбординг',
    text: 'Ребята, новички опять пишут всем в личку, потому что непонятно, где брать доступы и какие шаги делать в первую неделю. Давайте уже соберем одну нормальную инструкцию и чек-лист до конца недели.'
  },
  {
    channel: 'Мобайл',
    text: 'На айфоне в Safari кнопка "Оплатить" уезжает за экран. С утра это показывали на созвоне. Желательно срочно, потому что это выглядит очень плохо.'
  },
  {
    channel: 'Продажи',
    text: 'Продажи давно просят автоматически собирать NPS после закрытия заказа. Не горит, но в следующем спринте было бы хорошо это наконец сделать.'
  },
  {
    channel: 'Пилот',
    text: 'Клиент Acme попросил CSV-экспорт по филиалам к пятнице, иначе говорит, что будет сложно продлить пилот. Можете оценить и взять в работу?'
  },
  {
    channel: 'Операции',
    text: 'Мы уже третий раз за неделю обсуждаем одни и те же задачи, потому что статусы разбросаны по Telegram и личкам. Нужен единый weekly update шаблон, можно внедрить на следующей неделе.'
  },
  {
    channel: 'Юристы',
    text: 'На сайте до сих пор старая оферта, юристы сегодня напомнили. Нужно обновить файл и ссылку до публикации релиза в среду.'
  }
];

const heroMetricsRoot = document.querySelector('#hero-metrics');
const issuesRoot = document.querySelector('#issues');
const workflowRoot = document.querySelector('#workflow');
const messagesRoot = document.querySelector('#messages');

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

renderHeroMetrics();
renderIssues();
renderWorkflow();
renderMessages();
