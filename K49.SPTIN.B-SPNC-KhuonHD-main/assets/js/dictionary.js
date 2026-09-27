const { lessons, glossary } = window.TinHoc6;

const ALL_LESSONS = 'Tất cả';

let state = {
  query: '',
  lesson: ALL_LESSONS
};

const dictionaryGrid = document.getElementById('dictionaryGrid');
const emptyState = document.getElementById('emptyState');
const resultCount = document.getElementById('resultCount');
const searchInput = document.getElementById('searchInput');
const lessonFilters = document.getElementById('lessonFilters');

function getLesson(number) {
  return lessons.find((lesson) => lesson.number === number);
}

function getLessonLabel(number) {
  return `Bài ${number}`;
}

function normalizeText(value) {
  return value
    .toLocaleLowerCase('vi-VN')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd');
}

function renderFilters() {
  if (!lessonFilters) return;

  const fragment = document.createDocumentFragment();
  const options = [ALL_LESSONS, ...lessons.map((lesson) => lesson.number)];

  options.forEach((option) => {
    const label = option === ALL_LESSONS ? ALL_LESSONS : getLessonLabel(option);
    const button = document.createElement('button');
    button.className = 'filter-pill';
    button.type = 'button';
    button.dataset.lesson = String(option);
    button.setAttribute('aria-controls', 'dictionaryGrid');
    button.setAttribute('aria-pressed', String(option === state.lesson));
    button.textContent = label;
    if (option !== ALL_LESSONS) {
      button.title = `Bài ${option}. ${getLesson(option).title}`;
    }
    button.addEventListener('click', () => {
      state = { ...state, lesson: option };
      updateFilterButtons();
      renderGlossary();
    });
    fragment.append(button);
  });

  lessonFilters.replaceChildren(fragment);
}

function updateFilterButtons() {
  lessonFilters?.querySelectorAll('.filter-pill').forEach((button) => {
    button.setAttribute('aria-pressed', String(button.dataset.lesson === String(state.lesson)));
  });
}

function getFilteredGlossary() {
  const query = normalizeText(state.query.trim());

  return glossary.filter((item) => {
    const lesson = getLesson(item.lesson);
    const searchableText = [item.term, item.definition, lesson.title, getLessonLabel(item.lesson)]
      .map(normalizeText)
      .join(' ');

    const matchesQuery = !query || searchableText.includes(query);
    const matchesLesson = state.lesson === ALL_LESSONS || item.lesson === state.lesson;

    return matchesQuery && matchesLesson;
  });
}

function createTermCard(item, index) {
  const card = document.createElement('article');
  card.className = 'term-card';

  const tag = document.createElement('span');
  tag.className = 'tag';
  tag.textContent = getLessonLabel(item.lesson);

  const heading = document.createElement('h3');
  heading.id = `term-${item.lesson}-${index + 1}`;
  heading.textContent = item.term;

  const definition = document.createElement('p');
  definition.textContent = item.definition;

  card.setAttribute('aria-labelledby', heading.id);
  card.append(tag, heading, definition);

  return card;
}

function createLessonSection(lesson, items) {
  const section = document.createElement('section');
  section.className = 'lesson-terms';
  section.setAttribute('aria-labelledby', `lesson-terms-${lesson.number}`);

  const header = document.createElement('div');
  header.className = 'lesson-terms__header';

  const heading = document.createElement('h3');
  heading.id = `lesson-terms-${lesson.number}`;
  heading.textContent = `Bài ${lesson.number}. ${lesson.title}`;

  const count = document.createElement('span');
  count.className = 'lesson-terms__count';
  count.textContent = `${items.length} thuật ngữ`;

  const link = document.createElement('a');
  link.className = 'lesson-terms__link';
  link.href = lesson.href;
  link.textContent = 'Mở bài học';

  header.append(heading, count, link);

  const grid = document.createElement('div');
  grid.className = 'dictionary-grid';
  items.forEach((item, index) => grid.append(createTermCard(item, index)));

  section.append(header, grid);

  return section;
}

function renderGlossary() {
  if (!dictionaryGrid) return;

  const filtered = getFilteredGlossary();
  const fragment = document.createDocumentFragment();
  dictionaryGrid.setAttribute('aria-busy', 'true');

  lessons.forEach((lesson) => {
    const items = filtered.filter((item) => item.lesson === lesson.number);
    if (items.length === 0) return;
    fragment.append(createLessonSection(lesson, items));
  });

  dictionaryGrid.replaceChildren(fragment);
  dictionaryGrid.setAttribute('aria-busy', 'false');

  if (emptyState) emptyState.hidden = filtered.length > 0;
  if (resultCount) {
    resultCount.textContent = `Đang hiển thị ${filtered.length} thuật ngữ`;
  }
}

searchInput?.addEventListener('input', (event) => {
  state = { ...state, query: event.target.value };
  renderGlossary();
});

searchInput?.setAttribute('aria-controls', 'dictionaryGrid');
lessonFilters?.setAttribute('role', 'group');
emptyState?.setAttribute('role', 'status');

renderFilters();
renderGlossary();
