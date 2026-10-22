/**
 * BỔ TRỢ TIN HỌC 6 - GAMIFIED CONTROLLER (main.js)
 * Đồng bộ 100% Header, 17 Bài học, Từ điển, Ô chữ và Mô phỏng Thuật toán
 */

const STORAGE_KEY = 'tinhoc6_completed_lessons';

const CURRICULUM_TOPICS = [
  {
    code: 'A',
    id: 'chu-de-a',
    icon: '🛸',
    title: 'Chủ đề A. Máy tính và cộng đồng',
    description: 'Khám phá thế giới thông tin, dữ liệu và bí mật bên trong chiếc máy tính bằng dãy bit 0, 1.',
    strand: 'CS',
    strandLabel: 'Khoa học máy tính (CS)',
    lessons: [
      {
        num: 1,
        emoji: '📡',
        title: 'Thông tin và dữ liệu',
        url: 'bai-1-thong-tin-va-du-lieu.html',
        strand: 'CS',
        summary: 'Phân biệt thông tin, dữ liệu, vật mang tin và hiểu vì sao thông tin lại siêu quan trọng.',
        interactive: '3 Trò chơi tương tác'
      },
      {
        num: 2,
        emoji: '🧠',
        title: 'Xử lí thông tin',
        url: 'bai-2-xu-li-thong-tin.html',
        strand: 'CS',
        summary: '4 bước xử lí thông tin: Thu nhận, Lưu trữ, Xử lí và Truyền thông tin trong não bộ & máy tính.',
        interactive: 'Trò chơi Khởi động'
      },
      {
        num: 3,
        emoji: '🔢',
        title: 'Thông tin trong máy tính',
        url: 'bai-3-thong-tin-trong-may-tinh.html',
        strand: 'CS',
        summary: 'Biểu diễn số, chữ, hình ảnh bằng dãy bit (0 và 1) và làm quen với các đơn vị Byte, KB, MB, GB.',
        interactive: 'Thử thách Mã hóa nhị phân'
      }
    ]
  },
  {
    code: 'B',
    id: 'chu-de-b',
    icon: '🌐',
    title: 'Chủ đề B. Mạng máy tính và Internet',
    description: 'Cùng kết nối các máy tính thành mạng lưới và du hành khắp thế giới qua Internet.',
    strand: 'ICT',
    strandLabel: 'Công nghệ thông tin (ICT)',
    lessons: [
      {
        num: 4,
        emoji: '🖧',
        title: 'Mạng máy tính',
        url: 'bai-4-mang-may-tinh.html',
        strand: 'ICT',
        summary: 'Khái niệm mạng máy tính, lợi ích chia sẻ tài nguyên và các thiết bị kết nối có dây, không dây.',
        interactive: 'Sơ đồ mạng trực quan'
      },
      {
        num: 5,
        emoji: '🚀',
        title: 'Internet',
        url: 'bai-5-internet.html',
        strand: 'ICT',
        summary: 'Khám phá mạng máy tính khổng lồ toàn cầu và những ứng dụng tuyệt vời của Internet.',
        interactive: 'Tình huống tương tác'
      }
    ]
  },
  {
    code: 'C',
    id: 'chu-de-c',
    icon: '🔍',
    title: 'Chủ đề C. Tổ chức lưu trữ, tìm kiếm và trao đổi thông tin',
    description: 'Trở thành nhà thám hiểm thông thái với Trình duyệt web, Máy tìm kiếm và Thư điện tử.',
    strand: 'ICT',
    strandLabel: 'Định hướng ICT & Học liệu số',
    lessons: [
      {
        num: 6,
        emoji: '🧭',
        title: 'Mạng thông tin toàn cầu',
        url: 'bai-6-mang-thong-tin-toan-cau.html',
        strand: 'ICT',
        summary: 'Tìm hiểu World Wide Web (WWW), siêu văn bản, website và cách điều khiển trình duyệt web.',
        interactive: '3 Hoạt động tương tác'
      },
      {
        num: 7,
        emoji: '🕵️',
        title: 'Tìm kiếm thông tin trên Internet',
        url: 'bai-7-tim-kiem-thong-tin-tren-internet.html',
        strand: 'ICT',
        summary: 'Bí quyết dùng máy tìm kiếm và chọn từ khóa thông minh để tìm ra kiến thức nhanh nhất.',
        interactive: '3 Hoạt động thực hành'
      },
      {
        num: 8,
        emoji: '✉️',
        title: 'Thư điện tử',
        url: 'bai-8-thu-dien-tu.html',
        strand: 'ICT',
        summary: 'Cấu tạo địa chỉ email (@), cách soạn, gửi và nhận thư điện tử lịch sự, an toàn.',
        interactive: 'Liên kết Ô chữ Email'
      }
    ]
  },
  {
    code: 'D',
    id: 'chu-de-d',
    icon: '🛡️',
    title: 'Chủ đề D. Đạo đức, pháp luật và văn hóa trong môi trường số',
    description: 'Trang bị "khiên chắn bảo vệ" cho bản thân và máy tính khi tham gia thế giới mạng.',
    strand: 'DL',
    strandLabel: 'Học vấn số (DL)',
    lessons: [
      {
        num: 9,
        emoji: '🦸',
        title: 'An toàn thông tin trên Internet',
        url: 'bai-9-an-toan-thong-tin-tren-internet.html',
        strand: 'DL',
        summary: 'Nhận diện các nguy cơ trên mạng và nắm vững quy tắc vàng bảo vệ thông tin cá nhân.',
        interactive: 'Tình huống An toàn số'
      }
    ]
  },
  {
    code: 'E',
    id: 'chu-de-e',
    icon: '🎨',
    title: 'Chủ đề E. Ứng dụng tin học',
    description: 'Thỏa sức sáng tạo với Sơ đồ tư duy và thiết kế cuốn Sổ lưu niệm của lớp thật lung linh.',
    strand: 'ICT',
    strandLabel: 'Ứng dụng CNTT (ICT)',
    lessons: [
      {
        num: 10,
        emoji: '🗺️',
        title: 'Sơ đồ tư duy',
        url: 'bai-10-so-do-tu-duy.html',
        strand: 'ICT',
        summary: 'Cách sắp xếp ý tưởng bằng sơ đồ tư duy (Mindmap) kết hợp màu sắc và hình ảnh sinh động.',
        interactive: 'Game Sơ đồ tư duy'
      },
      {
        num: 11,
        emoji: '✍️',
        title: 'Định dạng văn bản',
        url: 'bai-11-dinh-dang-van-ban.html',
        strand: 'ICT',
        summary: 'Trang trí văn bản đẹp mắt: chọn phông chữ, màu chữ, căn lề và trình bày trang in.',
        interactive: 'Mô phỏng Định dạng'
      },
      {
        num: 12,
        emoji: '📊',
        title: 'Trình bày thông tin ở dạng bảng',
        url: 'bai-12-trinh-bay-thong-tin-o-dang-bang.html',
        strand: 'ICT',
        summary: 'Tạo bảng biểu gọn gàng, thêm/xóa hàng cột để so sánh dữ liệu thật dễ nhìn.',
        interactive: 'Game Khởi động Bảng'
      },
      {
        num: 13,
        emoji: '🔎',
        title: 'Tìm kiếm và thay thế',
        url: 'bai-13-tim-kiem-va-thay-the.html',
        strand: 'ICT',
        summary: 'Tuyệt chiêu dùng công cụ Find & Replace để sửa lỗi từ ngữ trong văn bản dài chỉ với 1 cú nhấp.',
        interactive: 'Thực hành Tìm & Thay thế'
      },
      {
        num: 14,
        emoji: '📒',
        title: 'Thực hành tổng hợp: Hoàn thiện sổ lưu niệm',
        url: 'bai-14-thuc-hanh-tong-hop-hoan-thien-so-luu-niem.html',
        strand: 'ICT',
        summary: 'Kết hợp sơ đồ tư duy, văn bản, hình ảnh và bảng biểu để hoàn thành cuốn Sổ lưu niệm lớp 6.',
        interactive: 'Dự án Sổ lưu niệm'
      }
    ]
  },
  {
    code: 'F',
    id: 'chu-de-f',
    icon: '🤖',
    title: 'Chủ đề F. Giải quyết vấn đề với sự trợ giúp của máy tính',
    description: 'Học cách ra lệnh cho Robot và máy tính thông qua Thuật toán và Chương trình.',
    strand: 'CS',
    strandLabel: 'Tư duy thuật toán (CS)',
    lessons: [
      {
        num: 15,
        emoji: '🧩',
        title: 'Thuật toán',
        url: 'bai-15-thuat-toan.html',
        strand: 'CS',
        summary: 'Hiểu khái niệm thuật toán, xác định Đầu vào (Input) - Đầu ra (Output) và vẽ sơ đồ khối.',
        interactive: 'Liên kết Mô phỏng Thuật toán'
      },
      {
        num: 16,
        emoji: '🔀',
        title: 'Các cấu trúc điều khiển',
        url: 'bai-16-cac-cau-truc-dieu-khien.html',
        strand: 'CS',
        summary: 'Làm chủ 3 cấu trúc điều khiển: Tuần tự, Rẽ nhánh (Nếu... thì...) và Lặp.',
        interactive: 'Mô phỏng Sơ đồ khối'
      },
      {
        num: 17,
        emoji: '💻',
        title: 'Chương trình máy tính',
        url: 'bai-17-chuong-trinh-may-tinh.html',
        strand: 'CS',
        summary: 'Từ thuật toán đến chương trình lập trình trực quan bằng các khối lệnh kéo thả.',
        interactive: 'Tư duy Lập trình khối lệnh'
      }
    ]
  }
];

function getCompletedLessons() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY) || localStorage.getItem('hcmue_tinhoc6_completed_lessons');
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function markLessonComplete(lessonNum) {
  const list = getCompletedLessons();
  if (!list.includes(lessonNum)) {
    list.push(lessonNum);
  }
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
    localStorage.setItem('hcmue_tinhoc6_completed_lessons', JSON.stringify(list));
  } catch (e) {}
  return list;
}

function launchConfetti() {
  const colors = ['#38bdf8', '#facc15', '#4ade80', '#f472b6', '#a855f7', '#fb923c'];
  for (let i = 0; i < 45; i++) {
    const piece = document.createElement('div');
    piece.className = 'confetti-piece';
    piece.style.left = Math.random() * 100 + 'vw';
    piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    piece.style.animationDuration = (1.8 + Math.random() * 1.5) + 's';
    piece.style.transform = `scale(${0.7 + Math.random() * 0.7})`;
    document.body.appendChild(piece);
    setTimeout(() => piece.remove(), 3200);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  removeLegacyBrokenMenus();
  injectUnifiedHeader();
  initCurriculumCatalog();
  upgradeAndDecorateLessonPage();
  setupIframeAutoResize();
  initScrollSpySidebar();
});

/**
 * 1. Xóa sạch khối "Menu chủ đề / Menu học tập" bị tràn ở đầu trang Từ điển, Ô chữ, Thuật toán, Bài 2-17
 */
function removeLegacyBrokenMenus() {
  // Xóa nút "☰ Menu chủ đề"
  document.querySelectorAll('button, a').forEach(btn => {
    const t = (btn.textContent || '').trim();
    if (t.includes('Menu chủ đề')) {
      const parentHeader = btn.closest('header, .topbar, .site-topbar');
      if (parentHeader && !parentHeader.querySelector('main')) {
        parentHeader.remove();
      } else {
        btn.remove();
      }
    }
  });

  // Xóa khối Drawer "Menu học tập / Chọn nhanh từng bài trong chương trình"
  document.querySelectorAll('aside, nav, div, section').forEach(el => {
    if (el === document.body || el.classList.contains('page-shell') || el.querySelector('main')) return;
    const txt = (el.textContent || '').trim();
    if (
      (txt.includes('Menu học tập') && txt.includes('Chọn nhanh từng bài')) ||
      (txt.includes('Danh mục dưới đây đang được tạo dần') && txt.includes('Chủ đề 1.'))
    ) {
      el.remove();
    }
  });

  // Xóa dòng chữ thừa trên đỉnh trang Bài 1 nếu nằm ngoài main
  document.querySelectorAll('body > div, .page-shell > div').forEach(div => {
    if (div.querySelector('main') || div.classList.contains('lesson-layout') || div.classList.contains('institutional-bar')) return;
    const txt = (div.textContent || '').trim();
    if (txt.startsWith('Chủ đề ') && txt.includes('Sách giáo khoa Tin học 6') && txt.length < 220) {
      div.remove();
    }
  });
}

/**
 * 2. Luôn gắn đồng bộ Header "Bổ trợ Tin học 6" trên MỌI TRANG (Trang chủ, 17 Bài học, Từ điển, Ô chữ, Thuật toán)
 */
function injectUnifiedHeader() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  const isHome = path === '' || path === 'index.html';
  const isDict = path === 'dictionary.html';
  const isCrossword = path === 'crossword.html';
  const isAlgo = path === 'algorithm.html';
  const isLesson = /^bai-\d+-/i.test(path);

  // Xóa các header cũ ngoài <main> để tránh trùng lặp hoặc vỡ logo
  document.querySelectorAll('.site-header, body > header, .page-shell > header').forEach(h => {
    if (!h.closest('main')) h.remove();
  });

  const completed = getCompletedLessons();
  const lessonsHref = isHome ? '#lo-trinh-17-bai' : 'index.html#lo-trinh-17-bai';

  const headerEl = document.createElement('header');
  headerEl.className = 'site-header';
  headerEl.innerHTML = `
    <div class="header-inner">
      <a href="index.html" class="brand" aria-label="Trang chủ Bổ trợ Tin học 6">
        <img src="assets/images/Logo HCMUE.svg" alt="Logo HCMUE" class="brand-logo" width="96" height="44" />
        <div class="brand-text">
          <span class="brand-title">Bổ trợ Tin học 6 🚀</span>
          <span class="brand-subtitle">Kết nối tri thức với cuộc sống</span>
        </div>
      </a>

      <button class="mobile-menu-toggle" type="button" aria-label="Mở menu" aria-expanded="false">
        ☰
      </button>

      <nav class="main-nav" aria-label="Điều hướng chính">
        <a href="index.html" class="nav-link ${isHome ? 'active' : ''}">🏠 Trang chủ</a>
        <a href="${lessonsHref}" class="nav-link ${isLesson ? 'active' : ''}" id="nav-17-lessons">🗺️ 17 Bài học</a>
        <a href="dictionary.html" class="nav-link ${isDict ? 'active' : ''}">📖 Từ điển</a>
        <a href="crossword.html" class="nav-link ${isCrossword ? 'active' : ''}">🧩 Giải ô chữ</a>
        <a href="algorithm.html" class="nav-link ${isAlgo ? 'active' : ''}">🤖 Thuật toán</a>
        <a href="${lessonsHref}" id="header-star-counter" class="star-counter-pill" title="Xem số Sao em đã chinh phục!">
          ⭐ <span>${completed.length}/17 Sao</span>
        </a>
      </nav>
    </div>
  `;

  const instBar = document.querySelector('.institutional-bar');
  if (instBar && instBar.nextSibling) {
    instBar.parentNode.insertBefore(headerEl, instBar.nextSibling);
  } else {
    document.body.prepend(headerEl);
  }

  // Nút mở menu trên điện thoại
  const toggleBtn = headerEl.querySelector('.mobile-menu-toggle');
  const nav = headerEl.querySelector('.main-nav');
  if (toggleBtn && nav) {
    toggleBtn.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      toggleBtn.setAttribute('aria-expanded', String(isOpen));
    });
  }

  // Đảm bảo nút "17 Bài học" cuộn mượt ngay cả khi đang ở Trang chủ
  const navLessonsBtn = headerEl.querySelector('#nav-17-lessons');
  if (navLessonsBtn && isHome) {
    navLessonsBtn.addEventListener('click', (e) => {
      const target = document.getElementById('lo-trinh-17-bai') || document.getElementById('curriculum-catalog') || document.getElementById('curriculum-root');
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }
}

function updateStarBadgeCount() {
  const el = document.querySelector('#header-star-counter span');
  if (el) {
    const completed = getCompletedLessons();
    el.textContent = `${completed.length}/17 Sao`;
  }
}

/**
 * 3. Render danh mục 6 Chủ đề & 17 Bài học trên Trang chủ
 */
function initCurriculumCatalog() {
  const container = document.getElementById('curriculum-catalog') || document.getElementById('curriculum-root');
  if (!container) return;

  const searchInput = document.getElementById('lesson-search') || document.getElementById('lesson-search-input');
  const filterButtons = document.querySelectorAll('[data-strand-filter], .filter-btn');
  let activeStrand = 'ALL';
  let searchQuery = '';

  function renderCatalog() {
    const q = searchQuery.trim().toLowerCase();
    const completed = getCompletedLessons();
    let html = '';
    let totalMatched = 0;

    CURRICULUM_TOPICS.forEach(topic => {
      const matchedLessons = topic.lessons.filter(lesson => {
        const matchesStrand = activeStrand === 'ALL' || lesson.strand === activeStrand;
        const matchesQuery = !q ||
          lesson.title.toLowerCase().includes(q) ||
          lesson.summary.toLowerCase().includes(q) ||
          `bài ${lesson.num}`.includes(q) ||
          topic.title.toLowerCase().includes(q);
        return matchesStrand && matchesQuery;
      });

      if (matchedLessons.length === 0) return;
      totalMatched += matchedLessons.length;

      html += `
        <section class="topic-block" id="${topic.id}">
          <div class="topic-block-header">
            <div class="topic-title-group">
              <div class="topic-letter-badge" aria-hidden="true">${topic.icon}</div>
              <div>
                <h3 class="topic-title">${topic.title}</h3>
                <p class="topic-desc">${topic.description}</p>
              </div>
            </div>
            <span class="strand-tag ${topic.strand.toLowerCase()}">${topic.strandLabel}</span>
          </div>
          <div class="lesson-grid">
            ${matchedLessons.map(lesson => {
              const isDone = completed.includes(lesson.num);
              return `
              <a href="${lesson.url}" class="lesson-card ${isDone ? 'completed-lesson' : ''}">
                <div>
                  <div class="lesson-card-top">
                    <span class="lesson-number">${lesson.emoji} Bài ${lesson.num}</span>${isDone
                      ? `<span class="strand-tag ict">⭐ Đã hoàn thành</span>`
                      : `<span class="strand-tag ${lesson.strand.toLowerCase()}">Mạch ${lesson.strand}</span>`
                    }
                  </div>
                  <h4 class="lesson-card-title">${lesson.title}</h4>
                  <p class="lesson-card-summary">${lesson.summary}</p>
                </div>
                <div class="lesson-card-footer">
                  <span class="interactive-pill">🎮 ${lesson.interactive}</span>
                  <span class="lesson-cta">Khám phá ngay 🚀</span>
                </div>
              </a>
            `}).join('')}
          </div>
        </section>
      `;
    });

    if (totalMatched === 0) {
      html = `
        <div class="topic-block" style="text-align:center; padding: 3rem 1.5rem;">
          <p style="font-size:2.5rem; margin-bottom:0.5rem;">🕵️‍♂️</p>
          <p style="font-weight:800; font-size:1.2rem; margin-bottom:0.4rem;">Ôi! Robot Bit chưa tìm thấy bài học nào khớp với từ khóa "${searchQuery}"</p>
          <p style="color:var(--text-secondary);">Em hãy thử gõ từ khóa khác hoặc bấm chọn "Tất cả (17 bài)" nhé!</p>
        </div>
      `;
    }

    container.innerHTML = html;
  }

  if (searchInput) {
    searchInput.addEventListener('input', e => {
      searchQuery = e.target.value || '';
      renderCatalog();
    });
  }

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active', 'btn-primary'));
      btn.classList.add('active');
      activeStrand = btn.getAttribute('data-strand-filter') || btn.getAttribute('data-filter') || 'ALL';
      renderCatalog();
    });
  });

  renderCatalog();
}

/**
 * 4. Tự động chuẩn hóa bố cục 2 cột & trang trí cho cả 17 bài học (Bài 1 -> Bài 17)
 */
function upgradeAndDecorateLessonPage() {
  const path = window.location.pathname.split('/').pop() || '';
  const match = path.match(/bai-(\d+)-/i);
  if (!match) return;

  const currentLessonNum = parseInt(match[1], 10);

  // Xóa dòng lặp "1. Hoạt động 1" thừa
  document.querySelectorAll('h2, h3, h4, p, div, span').forEach(el => {
    if (el.children.length === 0 && /^\s*\d+\.\s*Hoạt động\s*\d+\s*$/i.test(el.textContent)) {
      el.style.display = 'none';
    }
  });

  // Biến các khung đen placeholder cũ thành hộp Bí Kíp Ghi Nhớ sáng sủa
  document.querySelectorAll('div, section, aside').forEach(box => {
    const txt = (box.textContent || '').trim();
    if (txt.includes('Placeholder tối cho chế độ dark mode')) {
      box.style.background = 'linear-gradient(135deg, #fefce8 0%, #fef3c7 100%)';
      box.style.color = '#1e293b';
      box.style.border = '2.5px solid #fde047';
      box.style.borderRadius = '22px';
      box.style.padding = '1.25rem 1.5rem';
      box.style.boxShadow = '0 5px 0 #fde68a';
      box.innerHTML = `
        <div style="font-weight:800; color:#b45309; margin-bottom:0.4rem; font-size:1.05rem;">
          🌟 Bí kíp ghi nhớ dành cho em
        </div>
        <p style="margin:0; color:#334155; font-size:0.95rem;">
          Em hãy kết hợp quan sát sơ đồ minh họa, hoàn thành câu hỏi tương tác và liên hệ với những tình huống thực tế xung quanh mình để nhớ bài siêu lâu nhé!
        </p>
      `;
    }
  });

  // Nếu trang bài học chưa có .lesson-layout (ví dụ Bài 2 -> Bài 17), tự động tạo bố cục 2 cột + Sidebar
  let lessonMain = document.querySelector('.lesson-content, .lesson-main, main.lesson-page, main');
  if (!lessonMain) return;

  if (!document.querySelector('.lesson-layout')) {
    const sections = Array.from(lessonMain.querySelectorAll('.lesson-section, section'));
    const navLinksHtml = sections.map((sec, idx) => {
      const h2 = sec.querySelector('h2');
      const secId = sec.id || `hoat-dong-${idx + 1}`;
      sec.id = secId;
      const titleText = h2 ? h2.textContent.trim() : `Hoạt động ${idx + 1}`;
      return `<li><a href="#${secId}" class="toc-link"><span class="step-index">${idx + 1}</span> <span>${titleText}</span></a></li>`;
    }).join('');

    const layoutWrapper = document.createElement('div');
    layoutWrapper.className = 'lesson-layout';

    const sidebar = document.createElement('aside');
    sidebar.className = 'lesson-sidebar';
    sidebar.innerHTML = `
      <div class="sidebar-heading">🧭 Tiến trình bài học</div>
      <ul class="step-nav">
        ${navLinksHtml || '<li><a href="#"><span class="step-index">1</span> Nội dung bài học</a></li>'}
      </ul>
      <div style="margin-top: 1.25rem; padding-top: 1rem; border-top: 2px dashed #bae6fd;">
        <button id="btn-complete-lesson" type="button">
          ⭐ Đánh dấu hoàn thành
        </button>
      </div>
    `;

    lessonMain.parentNode.insertBefore(layoutWrapper, lessonMain);
    layoutWrapper.appendChild(sidebar);
    layoutWrapper.appendChild(lessonMain);
  }

  // Làm đẹp các mục trong Sidebar có sẵn của Bài 1 (nếu chữ "0 Yêu cầu cần đạt" bị dính số)
  document.querySelectorAll('.lesson-sidebar ul a').forEach((a, idx) => {
    if (!a.querySelector('.step-index')) {
      const raw = a.textContent.trim().replace(/^\d+\s+/, '');
      a.innerHTML = `<span class="step-index">${idx + 1}</span> <span>${raw}</span>`;
    }
  });

  // Gắn Sticker vào tiêu đề h2 trong bài học nếu chưa có emoji
  lessonMain.querySelectorAll('h2').forEach(h2 => {
    const t = h2.textContent.trim();
    if (/^[\u{1F300}-\u{1FAFF}]/u.test(t)) return;
    if (/mục tiêu|yêu cầu/i.test(t)) h2.innerHTML = `🎯 ${h2.innerHTML}`;
    else if (/khởi động/i.test(t)) h2.innerHTML = `🚀 ${h2.innerHTML}`;
    else if (/khám phá|kiến thức|hoạt động/i.test(t)) h2.innerHTML = `💡 ${h2.innerHTML}`;
    else if (/luyện tập|trò chơi/i.test(t)) h2.innerHTML = `🎮 ${h2.innerHTML}`;
    else if (/vận dụng|thực hành/i.test(t)) h2.innerHTML = `🌟 ${h2.innerHTML}`;
    else if (/ghi nhớ|tóm tắt|tổng kết/i.test(t)) h2.innerHTML = `📌 ${h2.innerHTML}`;
    else h2.innerHTML = `✨ ${h2.innerHTML}`;
  });

  // Chèn Thanh Tên Lửa Hành Trình ở đầu bài học
  if (!document.querySelector('.kid-quest-bar')) {
    const questBar = document.createElement('div');
    questBar.className = 'kid-quest-bar';
    questBar.innerHTML = `
      <div class="kid-quest-info">
        <span style="font-size:1.5rem;">🚀</span>
        <span>Hành trình khám phá Bài ${currentLessonNum} của em:</span>
      </div>
      <div class="kid-quest-track" aria-hidden="true">
        <div class="kid-quest-fill" id="kid-quest-fill"></div>
      </div>
      <span id="kid-quest-percent" style="font-weight:800; color:#0284c7; font-size:0.92rem;">25%</span>
    `;
    lessonMain.prepend(questBar);

    window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY;
      const docHeight = Math.max(document.body.scrollHeight - window.innerHeight, 1);
      const pct = Math.min(100, Math.max(20, Math.round((scrollTop / docHeight) * 100)));
      const fill = document.getElementById('kid-quest-fill');
      const label = document.getElementById('kid-quest-percent');
      if (fill) fill.style.width = pct + '%';
      if (label) label.textContent = pct + '%';
    }, { passive: true });
  }

  // Chèn Thẻ Nhận Sao Hoàn Thành Bài Học ở cuối bài & đồng bộ với nút ở Sidebar
  const completed = getCompletedLessons();
  const isClaimed = completed.includes(currentLessonNum);

  if (!document.querySelector('.kid-reward-card')) {
    const rewardCard = document.createElement('div');
    rewardCard.className = 'kid-reward-card';
    rewardCard.innerHTML = `
      <div style="font-size:2.4rem; margin-bottom:0.25rem;">🏆✨</div>
      <h3>Chúc mừng nhà thám hiểm nhí!</h3>
      <p style="color:#475569; max-width:52ch; margin:0 auto;">
        Em đã đọc hiểu nội dung và hoàn thành các thử thách của <strong>Bài ${currentLessonNum}</strong> chưa? Hãy bấm nút bên dưới để thu thập Ngôi Sao Chiến Thắng nhé!
      </p>
      <button type="button" class="kid-reward-btn ${isClaimed ? 'claimed' : ''}" id="claim-star-btn">
        ${isClaimed ? '⭐ Em đã nhận Sao bài này rồi! (Bấm để bắn pháo hoa)' : '🎉 Hoàn thành bài học - Nhận 1 Sao Vàng!'}
      </button>
    `;

    const pagination = lessonMain.querySelector('.lesson-pagination, .lesson-nav-footer, .lesson-footer-nav');
    if (pagination) {
      lessonMain.insertBefore(rewardCard, pagination);
    } else {
      lessonMain.appendChild(rewardCard);
    }
  }

  const rewardBtn = document.getElementById('claim-star-btn');
  const sidebarBtn = document.getElementById('btn-complete-lesson') || document.querySelector('.lesson-sidebar button');

  function syncClaimedUI() {
    if (rewardBtn) {
      rewardBtn.classList.add('claimed');
      rewardBtn.innerHTML = `⭐ Tuyệt vời! Em đã chinh phục Bài ${currentLessonNum}!`;
    }
    if (sidebarBtn) {
      sidebarBtn.textContent = `⭐ Đã hoàn thành Bài ${currentLessonNum}`;
    }
    updateStarBadgeCount();
  }

  if (isClaimed) syncClaimedUI();

  if (rewardBtn) {
    rewardBtn.addEventListener('click', () => {
      markLessonComplete(currentLessonNum);
      syncClaimedUI();
      launchConfetti();
    });
  }

  if (sidebarBtn) {
    sidebarBtn.addEventListener('click', () => {
      markLessonComplete(currentLessonNum);
      syncClaimedUI();
      launchConfetti();
    });
  }
}

/**
 * 5. Tự động co giãn chiều cao các khung game <iframe> trong 17 bài học
 */
function setupIframeAutoResize() {
  const iframes = document.querySelectorAll('iframe');
  iframes.forEach(iframe => {
    iframe.style.width = '100%';
    const src = iframe.getAttribute('src') || '';
    if (src.startsWith('http://') || src.startsWith('https://')) {
      iframe.style.minHeight = '480px';
      return;
    }

    const updateHeight = () => {
      try {
        const doc = iframe.contentDocument || (iframe.contentWindow && iframe.contentWindow.document);
        if (!doc || !doc.body) return;

        const targetHeight = Math.min(Math.max(doc.body.scrollHeight + 24, 540), 1150);
        iframe.style.height = targetHeight + 'px';
      } catch (e) {
        iframe.style.minHeight = '540px';
      }
    };

    iframe.addEventListener('load', () => {
      updateHeight();
      setTimeout(updateHeight, 300);
      setTimeout(updateHeight, 900);
    });
  });
}

function initScrollSpySidebar() {
  const tocLinks = document.querySelectorAll('.toc-link, .sidebar-nav a, .step-nav a, .lesson-sidebar ul a');
  if (tocLinks.length === 0) return;

  const sections = [];
  tocLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href && href.startsWith('#') && href.length > 1) {
      const target = document.querySelector(href);
      if (target) sections.push({ link, target });
    }
  });

  if (sections.length === 0) return;

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + 140;
    let current = sections[0];
    for (const item of sections) {
      if (item.target.offsetTop <= scrollPos) {
        current = item;
      }
    }
    tocLinks.forEach(l => l.classList.remove('active'));
    if (current) current.link.classList.add('active');
  }, { passive: true });
}
