/**
 * HỌC LIỆU SỐ TIN HỌC 6 - KẾT NỐI TRI THỨC VỚI CUỘC SỐNG
 * Nhóm phát triển: K49.SPTIN.B - Trường Đại học Sư phạm TP.HCM (HCMUE)
 */

const STORAGE_KEY = 'hcmue_tinhoc6_completed_lessons';

const LESSONS_DATA = [
  { id: 1, topic: 1, strand: 'CS', title: 'Bài 1: Thông tin và dữ liệu', file: 'bai-1-thong-tin-va-du-lieu.html', summary: 'Phân biệt thông tin, dữ liệu, vật mang tin và vai trò của thông tin.' },
  { id: 2, topic: 1, strand: 'CS', title: 'Bài 2: Xử lí thông tin', file: 'bai-2-xu-li-thong-tin.html', summary: 'Bốn hoạt động cơ bản của quá trình xử lí thông tin ở người và máy tính.' },
  { id: 3, topic: 1, strand: 'CS', title: 'Bài 3: Thông tin trong máy tính', file: 'bai-3-thong-tin-trong-may-tinh.html', summary: 'Biểu diễn thông tin bằng dãy bit và các đơn vị đo dung lượng dữ liệu.' },
  { id: 4, topic: 2, strand: 'ICT', title: 'Bài 4: Mạng máy tính', file: 'bai-4-mang-may-tinh.html', summary: 'Khái niệm, lợi ích và các thành phần cơ bản của mạng máy tính.' },
  { id: 5, topic: 2, strand: 'ICT', title: 'Bài 5: Internet', file: 'bai-5-internet.html', summary: 'Đặc điểm của mạng máy tính toàn cầu Internet và một số dịch vụ phổ biến.' },
  { id: 6, topic: 3, strand: 'ICT', title: 'Bài 6: Mạng thông tin toàn cầu', file: 'bai-6-mang-thong-tin-toan-cau.html', summary: 'Siêu văn bản, trang web, website, địa chỉ truy cập và trình duyệt web.' },
  { id: 7, topic: 3, strand: 'ICT', title: 'Bài 7: Tìm kiếm thông tin trên Internet', file: 'bai-7-tim-kiem-thong-tin-tren-internet.html', summary: 'Sử dụng máy tìm kiếm và cách xác định từ khóa hiệu quả.' },
  { id: 8, topic: 3, strand: 'ICT', title: 'Bài 8: Thư điện tử', file: 'bai-8-thu-dien-tu.html', summary: 'Cấu trúc địa chỉ email, ưu điểm của thư điện tử và thao tác gửi/nhận.' },
  { id: 9, topic: 4, strand: 'DL', title: 'Bài 9: An toàn thông tin trên Internet', file: 'bai-9-an-toan-thong-tin-tren-internet.html', summary: 'Nhận diện nguy cơ trên mạng và các quy tắc bảo vệ thông tin cá nhân.' },
  { id: 10, topic: 5, strand: 'ICT', title: 'Bài 10: Sơ đồ tư duy', file: 'bai-10-so-do-tu-duy.html', summary: 'Cách tổ chức thông tin trực quan và tạo sơ đồ tư duy bằng phần mềm.' },
  { id: 11, topic: 5, strand: 'ICT', title: 'Bài 11: Định dạng văn bản', file: 'bai-11-dinh-dang-van-ban.html', summary: 'Định dạng kí tự, định dạng đoạn văn bản và thiết lập trang in.' },
  { id: 12, topic: 5, strand: 'ICT', title: 'Bài 12: Trình bày thông tin ở dạng bảng', file: 'bai-12-trinh-bay-thong-tin-o-dang-bang.html', summary: 'Tạo bảng, chèn/xóa hàng cột và căn chỉnh dữ liệu trong bảng.' },
  { id: 13, topic: 5, strand: 'ICT', title: 'Bài 13: Thực hành: Tìm kiếm và thay thế', file: 'bai-13-tim-kiem-va-thay-the.html', summary: 'Sử dụng công cụ Find và Replace để biên tập văn bản nhanh chóng.' },
  { id: 14, topic: 5, strand: 'ICT', title: 'Bài 14: Thực hành tổng hợp: Hoàn thiện sổ lưu niệm', file: 'bai-14-thuc-hanh-tong-hop-hoan-thien-so-luu-niem.html', summary: 'Kết hợp sơ đồ tư duy, định dạng văn bản, hình ảnh và bảng biểu.' },
  { id: 15, topic: 6, strand: 'CS', title: 'Bài 15: Thuật toán', file: 'bai-15-thuat-toan.html', summary: 'Khái niệm thuật toán, xác định đầu vào (Input), đầu ra (Output) và sơ đồ khối.' },
  { id: 16, topic: 6, strand: 'CS', title: 'Bài 16: Các cấu trúc điều khiển', file: 'bai-16-cac-cau-truc-dieu-khien.html', summary: 'Ba cấu trúc điều khiển cơ bản: tuần tự, rẽ nhánh và lặp.' },
  { id: 17, topic: 6, strand: 'CS', title: 'Bài 17: Chương trình máy tính', file: 'bai-17-chuong-trinh-may-tinh.html', summary: 'Từ thuật toán đến chương trình máy tính và lập trình trực quan.' }
];

const TOPICS_META = {
  1: { title: 'Chủ đề 1 (A): Máy tính và cộng đồng', desc: 'Mạch Khoa học máy tính (CS) — Bài 1 đến Bài 3' },
  2: { title: 'Chủ đề 2 (B): Mạng máy tính và Internet', desc: 'Mạch Công nghệ thông tin và truyền thông (ICT) — Bài 4 đến Bài 5' },
  3: { title: 'Chủ đề 3 (C): Tổ chức lưu trữ, tìm kiếm và trao đổi thông tin', desc: 'Mạch Công nghệ thông tin và truyền thông (ICT) — Bài 6 đến Bài 8' },
  4: { title: 'Chủ đề 4 (D): Đạo đức, pháp luật và văn hóa trong môi trường số', desc: 'Mạch Học vấn số hóa phổ thông (DL) — Bài 9' },
  5: { title: 'Chủ đề 5 (E): Ứng dụng tin học', desc: 'Mạch Công nghệ thông tin và truyền thông (ICT) — Bài 10 đến Bài 14' },
  6: { title: 'Chủ đề 6 (F): Giải quyết vấn đề với sự trợ giúp của máy tính', desc: 'Mạch Khoa học máy tính (CS) — Bài 15 đến Bài 17' }
};

function getCompletedLessons() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function toggleLessonComplete(lessonId) {
  const completed = getCompletedLessons();
  const idx = completed.indexOf(lessonId);
  if (idx === -1) {
    completed.push(lessonId);
  } else {
    completed.splice(idx, 1);
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(completed));
  return completed.includes(lessonId);
}

function renderCurriculum(filterStrand = 'ALL', searchQuery = '') {
  const container = document.getElementById('curriculum-root') || document.getElementById('topics-container');
  if (!container) return;

  const completed = getCompletedLessons();
  const normalizedQuery = searchQuery.trim().toLowerCase();

  let html = '';

  Object.keys(TOPICS_META).forEach(topicKey => {
    const topicNum = Number(topicKey);
    const lessons = LESSONS_DATA.filter(item => {
      const matchTopic = item.topic === topicNum;
      const matchStrand = filterStrand === 'ALL' || item.strand === filterStrand;
      const matchQuery = !normalizedQuery ||
        item.title.toLowerCase().includes(normalizedQuery) ||
        item.summary.toLowerCase().includes(normalizedQuery);
      return matchTopic && matchStrand && matchQuery;
    });

    if (lessons.length === 0) return;

    const meta = TOPICS_META[topicNum];
    html += `
      <section class="topic-block">
        <div class="topic-header">
          <h2 class="topic-title">${meta.title}</h2>
          <span class="topic-meta">${meta.desc}</span>
        </div>
        <div class="lesson-list">
          ${lessons.map(lesson => {
            const isDone = completed.includes(lesson.id);
            const strandClass = `strand-${lesson.strand.toLowerCase()}`;
            return `
              <a href="${lesson.file}" class="lesson-item ${isDone ? 'is-completed' : ''}">
                <div>
                  <div class="lesson-item-top">
                    <span class="lesson-number">Bài ${String(lesson.id).padStart(2, '0')}</span>
                    <span class="strand-badge ${strandClass}">Mạch ${lesson.strand}</span>
                  </div>
                  <h3 class="lesson-title">${lesson.title.replace(/^Bài \d+:\s*/, '')}</h3>
                  <p class="lesson-summary">${lesson.summary}</p>
                </div>
                <div class="lesson-footer">
                  <span>${isDone ? 'Đã hoàn thành ✓' : 'Vào bài học'}</span>
                  <span>→</span>
                </div>
              </a>
            `;
          }).join('')}
        </div>
      </section>
    `;
  });

  container.innerHTML = html || `<p style="color: var(--text-muted); padding: 2rem 0;">Không tìm thấy bài học phù hợp với từ khóa.</p>`;
  updateOverallProgress();
}

function updateOverallProgress() {
  const completed = getCompletedLessons();
  const total = LESSONS_DATA.length;
  const countEl = document.getElementById('progress-count-text');
  const fillEl = document.getElementById('progress-bar-fill');

  if (countEl) countEl.textContent = `${completed.length} / ${total} bài (${Math.round((completed.length / total) * 100)}%)`;
  if (fillEl) fillEl.style.width = `${(completed.length / total) * 100}%`;
}

function upgradeLegacyPageLayout() {
  if (window.__hcmueLayoutInitialized) return;
  window.__hcmueLayoutInitialized = true;

  const path = window.location.pathname.split('/').pop() || 'index.html';
  const currentLesson = LESSONS_DATA.find(item => item.file === path);

  // Chỉ chèn Header nếu trang chưa có .site-header (KHÔNG xóa <header class="lesson-hero"> bên trong <main>)
  if (!document.querySelector('.site-header')) {
    const subTitle = currentLesson
      ? `Chủ đề ${currentLesson.topic} · ${currentLesson.title}`
      : 'Trường Đại học Sư phạm TP.HCM · K49.SPTIN.B';

    const headerEl = document.createElement('header');
    headerEl.className = 'site-header';
    headerEl.innerHTML = `
      <div class="header-inner">
        <a href="index.html" class="brand-identity">
          <img src="assets/images/Logo HCMUE.svg" alt="Logo Trường Đại học Sư phạm TP.HCM" width="120" height="40">
          <div class="brand-titles">
            <span class="brand-dept">${subTitle}</span>
            <span class="brand-name">Học Liệu Số Tin Học 6</span>
          </div>
        </a>
        <nav class="main-nav" aria-label="Điều hướng chính">
          <a href="index.html" class="nav-link ${path === 'index.html' ? 'active' : ''}">Mục lục bài học</a>
          <a href="dictionary.html" class="nav-link ${path === 'dictionary.html' ? 'active' : ''}">Từ điển thuật ngữ</a>
          <a href="crossword.html" class="nav-link ${path === 'crossword.html' ? 'active' : ''}">Ô chữ ôn tập</a>
          <a href="algorithm.html" class="nav-link ${path === 'algorithm.html' ? 'active' : ''}">Mô phỏng thuật toán</a>
        </nav>
      </div>
    `;
    document.body.prepend(headerEl);
  }

  // Nếu là trang bài học dùng cấu trúc .lesson-page (Bài 2 -> Bài 17)
  if (currentLesson && !document.querySelector('.lesson-layout')) {
    const mainEl = document.querySelector('main.lesson-page') || document.querySelector('main');
    if (!mainEl) return;

    const sections = Array.from(mainEl.querySelectorAll('.lesson-section, section'));
    const navLinksHtml = sections.map((sec, idx) => {
      const h2 = sec.querySelector('h2');
      const secId = sec.id || `hoat-dong-${idx + 1}`;
      sec.id = secId;
      const titleText = h2 ? h2.textContent.trim() : `Hoạt động ${idx + 1}`;
      return `<li><a href="#${secId}"><span class="step-index">${idx + 1}</span> ${titleText}</a></li>`;
    }).join('');

    const layoutWrapper = document.createElement('div');
    layoutWrapper.className = 'lesson-layout';

    const sidebar = document.createElement('aside');
    sidebar.className = 'lesson-sidebar';
    sidebar.innerHTML = `
      <div class="sidebar-heading">Tiến trình bài học</div>
      <ul class="step-nav">
        ${navLinksHtml || '<li><a href="#"><span class="step-index">1</span> Nội dung bài học</a></li>'}
      </ul>
      <div style="margin-top: 1.5rem; padding-top: 1rem; border-top: 1px solid var(--border-light);">
        <button id="btn-complete-lesson" data-lesson-id="${currentLesson.id}" class="btn btn-outline" style="width: 100%; font-size: 0.82rem;">
          Đánh dấu hoàn thành bài học
        </button>
      </div>
    `;

    mainEl.parentNode.insertBefore(layoutWrapper, mainEl);
    layoutWrapper.appendChild(sidebar);
    layoutWrapper.appendChild(mainEl);
  }
}

function setupIframeAutoResize() {
  const iframes = document.querySelectorAll('iframe');
  iframes.forEach(iframe => {
    const src = iframe.getAttribute('src') || '';
    if (src.startsWith('http://') || src.startsWith('https://')) {
      iframe.style.height = '480px';
      return;
    }

    iframe.setAttribute('scrolling', 'no');

    const updateHeight = () => {
      try {
        const doc = iframe.contentDocument || (iframe.contentWindow && iframe.contentWindow.document);
        if (!doc || !doc.body) return;

        if (!doc.getElementById('hcmue-iframe-fix')) {
          const styleFix = doc.createElement('style');
          styleFix.id = 'hcmue-iframe-fix';
          styleFix.textContent = `
            html, body {
              min-height: 0 !important;
              height: auto !important;
              overflow-x: hidden !important;
            }
          `;
          doc.head.appendChild(styleFix);
        }

        const children = Array.from(doc.body.children).filter(
          el => !['SCRIPT', 'STYLE', 'LINK'].includes(el.tagName)
        );

        let contentHeight = 0;
        if (children.length > 0) {
          const bodyRect = doc.body.getBoundingClientRect();
          children.forEach(child => {
            const rect = child.getBoundingClientRect();
            const bottom = rect.bottom - bodyRect.top;
            if (bottom > contentHeight) contentHeight = bottom;
          });
        } else {
          contentHeight = doc.body.offsetHeight;
        }

        const targetHeight = Math.min(Math.max(Math.ceil(contentHeight) + 28, 460), 1150);
        const currentHeight = parseInt(iframe.style.height || '0', 10);

        if (Math.abs(targetHeight - currentHeight) > 6) {
          iframe.style.height = targetHeight + 'px';
        }
      } catch (e) {
        iframe.style.height = '560px';
      }
    };

    iframe.addEventListener('load', () => {
      updateHeight();
      setTimeout(updateHeight, 250);
      setTimeout(updateHeight, 800);
      try {
        const doc = iframe.contentDocument || iframe.contentWindow.document;
        if (doc && doc.body) {
          doc.body.addEventListener('click', () => setTimeout(updateHeight, 120));
        }
      } catch (err) {}
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  upgradeLegacyPageLayout();
  renderCurriculum();

  const filterButtons = document.querySelectorAll('[data-strand-filter]');
  const searchInput = document.getElementById('lesson-search-input');
  let activeStrand = 'ALL';

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('btn-primary'));
      filterButtons.forEach(b => b.classList.add('btn-outline'));
      btn.classList.remove('btn-outline');
      btn.classList.add('btn-primary');
      activeStrand = btn.getAttribute('data-strand-filter');
      renderCurriculum(activeStrand, searchInput ? searchInput.value : '');
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      renderCurriculum(activeStrand, e.target.value);
    });
  }

  const completeBtn = document.getElementById('btn-complete-lesson');
  if (completeBtn) {
    const lessonId = Number(completeBtn.getAttribute('data-lesson-id'));
    const updateBtnState = (isDone) => {
      completeBtn.textContent = isDone ? 'Đã hoàn thành bài học ✓' : 'Đánh dấu hoàn thành bài học';
      completeBtn.className = isDone ? 'btn btn-primary' : 'btn btn-outline';
    };
    updateBtnState(getCompletedLessons().includes(lessonId));

    completeBtn.addEventListener('click', () => {
      const nowDone = toggleLessonComplete(lessonId);
      updateBtnState(nowDone);
    });
  }

  setupIframeAutoResize();
});
