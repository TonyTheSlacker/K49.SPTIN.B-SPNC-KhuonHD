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

const state = {
  query: '',
  category: 'Tất cả'
};

const dictionaryGrid = document.getElementById('dictionaryGrid');
const emptyState = document.getElementById('emptyState');
const resultCount = document.getElementById('resultCount');
const searchInput = document.getElementById('searchInput');
const categoryFilters = document.getElementById('categoryFilters');

const categories = ['Tất cả', ...new Set(glossary.map((item) => item.category))];

function renderFilters() {
  categoryFilters.innerHTML = categories
    .map(
      (category) => `
        <button class="filter-pill" type="button" data-category="${category}" aria-pressed="${category === state.category}">
          ${category}
        </button>
      `
    )
    .join('');

  categoryFilters.querySelectorAll('.filter-pill').forEach((button) => {
    button.addEventListener('click', () => {
      state.category = button.dataset.category;
      renderFilters();
      renderGlossary();
    });
  });
}

function getFilteredGlossary() {
  const query = state.query.trim().toLowerCase();

  return glossary.filter((item) => {
    const matchesQuery = !query
      || item.term.toLowerCase().includes(query)
      || item.definition.toLowerCase().includes(query)
      || item.category.toLowerCase().includes(query);

    const matchesCategory = state.category === 'Tất cả' || item.category === state.category;

    return matchesQuery && matchesCategory;
  });
}

function renderGlossary() {
  const filtered = getFilteredGlossary();

  dictionaryGrid.innerHTML = filtered
    .map(
      (item) => `
        <article class="term-card">
          <span class="tag">${item.category}</span>
          <h3>${item.term}</h3>
          <p>${item.definition}</p>
        </article>
      `
    )
    .join('');

  emptyState.hidden = filtered.length > 0;
  resultCount.textContent = `Đang hiển thị ${filtered.length} thuật ngữ`;
}

searchInput.addEventListener('input', (event) => {
  state.query = event.target.value;
  renderGlossary();
});

renderFilters();
renderGlossary();