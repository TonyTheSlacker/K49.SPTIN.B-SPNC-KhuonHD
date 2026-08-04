const glossary = [
  {
    term: 'Phần cứng',
    category: 'Máy tính',
    definition: 'Các bộ phận nhìn thấy và chạm vào được của máy tính như màn hình, bàn phím, chuột, loa.'
  },
  {
    term: 'Phần mềm',
    category: 'Máy tính',
    definition: 'Các chương trình giúp máy tính làm việc, ví dụ như trò chơi, trình soạn thảo văn bản, trình duyệt web.'
  },
  {
    term: 'Tệp tin',
    category: 'Lưu trữ',
    definition: 'Một đơn vị chứa thông tin như bài làm, hình ảnh, âm thanh hoặc video được lưu trên máy tính.'
  },
  {
    term: 'Thư mục',
    category: 'Lưu trữ',
    definition: 'Nơi dùng để sắp xếp và cất giữ nhiều tệp tin theo từng nhóm cho dễ tìm.'
  },
  {
    term: 'Trình duyệt web',
    category: 'Internet',
    definition: 'Phần mềm giúp em mở và xem các trang web trên Internet.'
  },
  {
    term: 'Internet',
    category: 'Internet',
    definition: 'Mạng kết nối rất nhiều máy tính trên khắp thế giới để chia sẻ thông tin và liên lạc.'
  },
  {
    term: 'Thuật toán',
    category: 'Tư duy',
    definition: 'Các bước làm việc được sắp xếp theo thứ tự để giải quyết một vấn đề.'
  },
  {
    term: 'An toàn thông tin',
    category: 'Tư duy',
    definition: 'Biết cách bảo vệ dữ liệu cá nhân, mật khẩu và tránh các trang web không an toàn.'
  }
];

let state = {
  query: '',
  category: 'Tất cả'
};

const dictionaryGrid = document.getElementById('dictionaryGrid');
const emptyState = document.getElementById('emptyState');
const resultCount = document.getElementById('resultCount');
const searchInput = document.getElementById('searchInput');
const categoryFilters = document.getElementById('categoryFilters');

const categories = ['Tất cả', ...new Set(glossary.map((item) => item.category))];

function normalizeText(value) {
  return value
    .toLocaleLowerCase('vi-VN')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd');
}

function renderFilters() {
  if (!categoryFilters) return;

  const fragment = document.createDocumentFragment();

  categories.forEach((category) => {
    const button = document.createElement('button');
    button.className = 'filter-pill';
    button.type = 'button';
    button.dataset.category = category;
    button.setAttribute('aria-controls', 'dictionaryGrid');
    button.setAttribute('aria-pressed', String(category === state.category));
    button.textContent = category;
    button.addEventListener('click', () => {
      state = { ...state, category };
      updateFilterButtons();
      renderGlossary();
    });
    fragment.append(button);
  });

  categoryFilters.replaceChildren(fragment);
}

function updateFilterButtons() {
  categoryFilters?.querySelectorAll('.filter-pill').forEach((button) => {
    button.setAttribute('aria-pressed', String(button.dataset.category === state.category));
  });
}

function getFilteredGlossary() {
  const query = normalizeText(state.query.trim());

  return glossary.filter((item) => {
    const searchableText = [item.term, item.definition, item.category]
      .map(normalizeText)
      .join(' ');

    const matchesQuery = !query || searchableText.includes(query);
    const matchesCategory = state.category === 'Tất cả' || item.category === state.category;

    return matchesQuery && matchesCategory;
  });
}

function renderGlossary() {
  if (!dictionaryGrid) return;

  const filtered = getFilteredGlossary();
  const fragment = document.createDocumentFragment();
  dictionaryGrid.setAttribute('aria-busy', 'true');

  filtered.forEach((item, index) => {
    const card = document.createElement('article');
    card.className = 'term-card';

    const tag = document.createElement('span');
    tag.className = 'tag';
    tag.textContent = item.category;

    const heading = document.createElement('h3');
    heading.id = `term-${index + 1}`;
    heading.textContent = item.term;

    const definition = document.createElement('p');
    definition.textContent = item.definition;

    card.setAttribute('aria-labelledby', heading.id);
    card.append(tag, heading, definition);
    fragment.append(card);
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
categoryFilters?.setAttribute('role', 'group');
emptyState?.setAttribute('role', 'status');

renderFilters();
renderGlossary();
