/**
 * HỌC LIỆU SỐ TIN HỌC 6 - KẾT NỐI TRI THỨC VỚI CUỘC SỐNG
 * Nhóm phát triển: K49.SPTIN.B - Trường Đại học Sư phạm TP.HCM (HCMUE)
 */

const STORAGE_KEY = 'hcmue_tinhoc6_completed_lessons';

const LESSONS_DATA = [
  { id: 1, topic: 1, strand: 'CS', title: 'Bài 1: Thông tin và dữ liệu', file: 'bai-1-thong-tin-va-du-lieu.html', summary: 'Phân biệt thông tin, dữ liệu, vật mang tin và vai trò của thông tin.', interactiveCount: 3 },
  { id: 2, topic: 1, strand: 'CS', title: 'Bài 2: Xử lí thông tin', file: 'bai-2-xu-li-thong-tin.html', summary: 'Bốn hoạt động cơ bản của quá trình xử lí thông tin ở người và máy tính.', interactiveCount: 2 },
  { id: 3, topic: 1, strand: 'CS', title: 'Bài 3: Thông tin trong máy tính', file: 'bai-3-thong-tin-trong-may-tinh.html', summary: 'Biểu diễn thông tin bằng dãy bit và các đơn vị đo dung lượng dữ liệu.', interactiveCount: 2 },
  { id: 4, topic: 2, strand: 'ICT', title: 'Bài 4: Mạng máy tính', file: 'bai-4-mang-may-tinh.html', summary: 'Khái niệm, lợi ích và các thành phần cơ bản của mạng máy tính.', interactiveCount: 2 },
  { id: 5, topic: 2, strand: 'ICT', title: 'Bài 5: Internet', file: 'bai-5-internet.html', summary: 'Đặc điểm của mạng máy tính toàn cầu Internet và một số lợi ích chính.', interactiveCount: 2 },
  { id: 6, topic: 3, strand: 'ICT', title: 'Bài 6: Mạng thông tin toàn cầu', file: 'bai-6-mang-thong-tin-toan-cau.html', summary: 'Siêu văn bản, trang web, website, địa chỉ truy cập và trình duyệt web.', interactiveCount: 3 },
  { id: 7, topic: 3, strand: 'ICT', title: 'Bài 7: Tìm kiếm thông tin trên Internet', file: 'bai-7-tim-kiem-thong-tin-tren-internet.html', summary: 'Sử dụng máy tìm kiếm và cách xác định từ khóa hiệu quả.', interactiveCount: 3 },
  { id: 8, topic: 3, strand: 'ICT', title: 'Bài 8: Thư điện tử', file: 'bai-8-thu-dien-tu.html', summary: 'Cấu trúc địa chỉ email, ưu điểm của thư điện tử và thao tác gửi/nhận.', interactiveCount: 2 },
  { id: 9, topic: 4, strand: 'DL', title: 'Bài 9: An toàn thông tin trên Internet', file: 'bai-9-an-toan-thong-tin-tren-internet.html', summary: 'Nhận diện nguy cơ trên mạng và các quy tắc bảo vệ thông tin cá nhân.', interactiveCount: 2 },
  { id: 10, topic: 5, strand: 'ICT', title: 'Bài 10: Sơ đồ tư duy', file: 'bai-10-so-do-tu-duy.html', summary: 'Cách tổ chức thông tin trực quan và tạo sơ đồ tư duy bằng phần mềm.', interactiveCount: 2 },
  { id: 11, topic: 5, strand: 'ICT', title: 'Bài 11: Định dạng văn bản', file: 'bai-11-dinh-dang-van-ban.html', summary: 'Định dạng kí tự, định dạng đoạn văn bản và thiết lập trang in.', interactiveCount: 2 },
  { id: 12, topic: 5, strand: 'ICT', title: 'Bài 12: Trình bày thông tin ở dạng bảng', file: 'bai-12-trinh-bay-thong-tin-o-dang-bang.html', summary: 'Tạo bảng, chèn/xóa hàng cột và căn chỉnh dữ liệu trong bảng.', interactiveCount: 2 },
  { id: 13, topic: 5, strand: 'ICT', title: 'Bài 13: Thực hành: Tìm kiếm và thay thế', file: 'bai-13-tim-kiem-va-thay-the.html', summary: 'Sử dụng công cụ Find và Replace để biên tập văn bản nhanh chóng.', interactiveCount: 2 },
  { id: 14, topic: 5, strand: 'ICT', title: 'Bài 14: Thực hành tổng hợp: Hoàn thiện sổ lưu niệm', file: 'bai-14-thuc-hanh-tong-hop-hoan-thien-so-luu-niem.html', summary: 'Kết hợp sơ đồ tư duy, định dạng văn bản, hình ảnh và bảng biểu.', interactiveCount: 2 },
  { id: 15, topic: 6, strand: 'CS', title: 'Bài 15: Thuật toán', file: 'bai-15-thuat-toan.html', summary: 'Khái niệm thuật toán, xác định đầu vào (Input), đầu ra (Output) và sơ đồ khối.', interactiveCount: 2 },
  { id: 16, topic: 6, strand: 'CS', title: 'Bài 16: Các cấu trúc điều khiển', file: 'bai-16-cac-cau-truc-dieu-khien.html', summary: 'Ba cấu trúc điều khiển cơ bản: tuần tự, rẽ nhánh và lặp.', interactiveCount: 2 },
  { id: 17, topic: 6, strand: 'CS', title: 'Bài 17: Chương trình máy tính', file: 'bai-17-chuong-trinh-may-tinh.html', summary: 'Từ thuật toán đến chương trình máy tính và lập trình trực quan.', interactiveCount: 2 }
];

const TOPICS_META = {
  1: { code: 'Chủ đề 1 · Chủ đề A', title: 'Máy tính và cộng đồng', desc: 'Mạch Khoa học máy tính (CS) — Bài 1 đến Bài 3' },
  2: { code: 'Chủ đề 2 · Chủ đề B', title: 'Mạng máy tính và Internet', desc: 'Mạch Công nghệ thông tin và truyền thông (ICT) — Bài 4 đến Bài 5' },
  3: { code: 'Chủ đề 3 · Chủ đề C', title: 'Tổ chức lưu trữ, tìm kiếm và trao đổi thông tin', desc: 'Mạch Công nghệ thông tin và truyền thông (ICT) — Bài 6 đến Bài 8' },
  4: { code: 'Chủ đề 4 · Chủ đề D', title: 'Đạo đức, pháp luật và văn hóa trong môi trường số', desc: 'Mạch Học vấn số hóa phổ thông (DL) — Bài 9' },
  5: { code: 'Chủ đề 5 · Chủ đề E', title: 'Ứng dụng tin học', desc: 'Mạch Công nghệ thông tin và truyền thông (ICT) — Bài 10 đến Bài 14' },
  6: { code: 'Chủ đề 6 · Chủ đề F', title: 'Giải quyết vấn đề với sự trợ giúp của máy tính', desc: 'Mạch Khoa học máy tính (CS) — Bài 15 đến Bài 17' }
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

function stripLeadingEmojis(text) {
  if (!text) return '';
  return text.replace(/^[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE0F}\u{200D}\s]+/gu, '').trim();
}

/**
 * Hiển thị danh mục 17 bài học trên trang chủ (tương thích cả #curriculum-container lẫn #curriculum-root)
 */
function renderCurriculum(filterStrand = 'ALL', searchQuery = '') {
  const container =
    document.getElementById('curriculum-container') ||
    document.getElementById('curriculum-root') ||
    document.getElementById('topics-container');
  if (!container) return;

  const completed = getCompletedLessons();
  const normalizedFilter = (filterStrand || 'ALL').toUpperCase();
  const normalizedQuery = searchQuery.trim().toLowerCase();

  let html = '';

  Object.keys(TOPICS_META).forEach(topicKey => {
    const topicNum = Number(topicKey);
    const meta = TOPICS_META[topicNum];

    const lessons = LESSONS_DATA.filter(item => {
      const matchTopic = item.topic === topicNum;
      const matchStrand = normalizedFilter === 'ALL' || item.strand === normalizedFilter;
      const matchQuery =
        !normalizedQuery ||
        item.title.toLowerCase().includes(normalizedQuery) ||
        item.summary.toLowerCase().includes(normalizedQuery) ||
        meta.title.toLowerCase().includes(normalizedQuery);
      return matchTopic && matchStrand && matchQuery;
    });

    if (lessons.length === 0) return;

    html += `
      <section class="topic-block">
        <div class="topic-header">
          <div class="topic-header__left">
            <span class="topic-code">${meta.code}</span>
            <h2 class="topic-title">${meta.title}</h2>
          </div>
          <span class="topic-meta">${meta.desc}</span>
        </div>
        <div class="lesson-grid">
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
                  <span>${isDone ? '✓ Đã hoàn thành' : `${lesson.interactiveCount} hoạt động tương tác`}</span>
                  <span>Vào bài học →</span>
                </div>
              </a>
            `;
          }).join('')}
        </div>
      </section>
    `;
  });

  container.innerHTML =
    html ||
    `<div style="padding: 2rem; text-align: center; background: var(--bg-surface); border: 1px solid var(--border-light); border-radius: var(--radius-md);">
      Không tìm thấy bài học phù hợp với từ khóa "${searchQuery}".
    </div>`;

  updateOverallProgress();
}

function updateOverallProgress() {
  const completed = getCompletedLessons();
  const total = LESSONS_DATA.length;
  const percent = Math.round((completed.length / total) * 100);

  const countEl = document.getElementById('progress-count-text') || document.getElementById('progress-counter');
  const fillEl = document.getElementById('progress-bar-fill');

  if (countEl) countEl.textContent = `${completed.length} / ${total} bài (${percent}%)`;
  if (fillEl) fillEl.style.width = `${percent}%`;
}

/**
 * Thay thế các khung đen "Placeholder tối cho chế độ dark mode" ở các bài chưa có game riêng
 * bằng Hộp Kiến thức cốt lõi chuẩn SGK Kết nối tri thức
 */
function upgradeDarkPlaceholders(mainEl, currentLesson) {
  const allDivs = Array.from(mainEl.querySelectorAll('div, section, article'));
  allDivs.forEach((el, idx) => {
    const text = (el.textContent || '').trim();
    if (
      text.includes('Placeholder tối cho chế độ dark mode') ||
      (el.children.length <= 4 && text.includes('Nhúng trò chơi hoặc hình ảnh minh họa'))
    ) {
      el.className = 'sgk-core-box';
      el.removeAttribute('style');
      el.innerHTML = `
        <span class="sgk-core-box__label">Tóm tắt kiến thức cốt lõi · ${currentLesson.title}</span>
        <p style="margin-bottom: 0.5rem; color: var(--text-primary);">
          <strong>Trọng tâm bài học:</strong> ${currentLesson.summary}
        </p>
        <ul>
          <li>Đọc kĩ tình huống mở đầu trong Sách giáo khoa <em>Tin học 6 – Kết nối tri thức với cuộc sống</em> và thảo luận theo nhóm đôi.</li>
          <li>Ghi nhớ các khái niệm chính trong hộp kiến thức và hoàn thành câu hỏi củng cố cuối mục.</li>
        </ul>
      `;
    }
  });
}

/**
 * Tự động nâng cấp giao diện 2 cột Sách giáo khoa HCMUE cho các trang Bài 2 -> Bài 17
 */
function upgradeLegacyPageLayout() {
  if (window.__hcmueLayoutInitialized) return;
  window.__hcmueLayoutInitialized = true;

  const rawPath = window.location.pathname.split('/').pop() || 'index.html';
  const cleanPath = rawPath.endsWith('.html') ? rawPath : `${rawPath}.html`;
  const currentLesson = LESSONS_DATA.find(item => item.file === cleanPath || item.file === rawPath);

  // 1. Tự động chèn Header HCMUE nếu trang chưa có .site-header
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
          <a href="index.html" class="nav-link ${cleanPath === 'index.html' ? 'active' : ''}">Mục lục bài học</a>
          <a href="dictionary.html" class="nav-link ${cleanPath === 'dictionary.html' ? 'active' : ''}">Từ điển thuật ngữ</a>
          <a href="crossword.html" class="nav-link ${cleanPath === 'crossword.html' ? 'active' : ''}">Ô chữ ôn tập</a>
          <a href="algorithm.html" class="nav-link ${cleanPath === 'algorithm.html' ? 'active' : ''}">Mô phỏng thuật toán</a>
        </nav>
      </div>
    `;
    document.body.prepend(headerEl);
  }

  // 2. Nếu là trang bài học dùng cấu trúc .lesson-page (Bài 2 -> Bài 17)
  if (currentLesson && !document.querySelector('.lesson-layout')) {
    const mainEl = document.querySelector('main.lesson-page') || document.querySelector('main');
    if (!mainEl) return;

    // Làm sạch emoji đầu dòng ở tiêu đề bài
    mainEl.querySelectorAll('h1, h2, .lesson-badge, .badge').forEach(el => {
      if (el.childNodes.length === 1 && el.childNodes[0].nodeType === 3) {
        el.textContent = stripLeadingEmojis(el.textContent);
      }
    });

    // Thay thế các khung đen giữ chỗ (Placeholder) bằng hộp kiến thức chuẩn SGK
    upgradeDarkPlaceholders(mainEl, currentLesson);

    // Chỉ lấy các <section> thực sự có chứa thẻ <h2> (Bỏ qua phần tiêu đề .lesson-hero để không bị dư "1. Hoạt động 1")
    const activitySections = Array.from(mainEl.querySelectorAll('section')).filter(sec =>
      Boolean(sec.querySelector('h2'))
    );

    const navLinksHtml = activitySections.map((sec, idx) => {
      const h2 = sec.querySelector('h2');
      const secId = sec.id || `hoat-dong-${idx + 1}`;
      sec.id = secId;
      const cleanTitle = stripLeadingEmojis(h2.textContent);
      return `
        <li>
          <a href="#${secId}" class="${idx === 0 ? 'active' : ''}">
            <span class="step-index">${idx + 1}</span>
            <span>${cleanTitle}</span>
          </a>
        </li>
      `;
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
      <div style="margin-top: 1.25rem; padding-top: 1rem; border-top: 1px solid var(--border-light);">
        <button id="mark-lesson-complete" data-lesson-id="${currentLesson.id}" class="btn btn-primary" style="width: 100%;">
          Đánh dấu đã hoàn thành bài học
        </button>
      </div>
    `;

    mainEl.parentNode.insertBefore(layoutWrapper, mainEl);
    layoutWrapper.appendChild(sidebar);
    layoutWrapper.appendChild(mainEl);
  }
}

/**
 * Đo chiều cao thực của các phần tử con trong iframe, tránh vòng lặp vô hạn 100vh
 */
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
          if (doc.head) doc.head.appendChild(styleFix);
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

        const targetHeight = Math.min(Math.max(Math.ceil(contentHeight) + 28, 420), 960);
        const currentHeight = parseInt(iframe.style.height || '0', 10);

        if (Math.abs(targetHeight - currentHeight) > 6) {
          iframe.style.height = targetHeight + 'px';
        }
      } catch (e) {
        iframe.style.height = '540px';
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

  const filterButtons = document.querySelectorAll('.filter-btn, [data-strand-filter], [data-strand]');
  const searchInput = document.getElementById('lesson-search-input') || document.getElementById('lesson-search');
  let activeStrand = 'ALL';

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => {
        b.classList.remove('is-active', 'btn-primary');
        if (b.classList.contains('btn')) b.classList.add('btn-outline');
      });
      btn.classList.add('is-active');
      if (btn.classList.contains('btn')) {
        btn.classList.remove('btn-outline');
        btn.classList.add('btn-primary');
      }
      activeStrand = btn.getAttribute('data-strand-filter') || btn.getAttribute('data-strand') || 'ALL';
      renderCurriculum(activeStrand, searchInput ? searchInput.value : '');
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', e => {
      renderCurriculum(activeStrand, e.target.value);
    });
  }

  const completeBtn = document.getElementById('mark-lesson-complete') || document.getElementById('btn-complete-lesson');
  if (completeBtn) {
    const lessonId = Number(completeBtn.getAttribute('data-lesson-id'));
    const syncState = () => {
      const isDone = getCompletedLessons().includes(lessonId);
      completeBtn.textContent = isDone ? '✓ Đã hoàn thành bài học này' : 'Đánh dấu đã hoàn thành bài học';
      completeBtn.className = isDone ? 'btn btn-outline' : 'btn btn-primary';
    };
    syncState();
    completeBtn.addEventListener('click', () => {
      toggleLessonComplete(lessonId);
      syncState();
    });
  }

  setupIframeAutoResize();
});
