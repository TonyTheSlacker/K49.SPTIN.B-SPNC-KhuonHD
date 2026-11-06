/**
 * HỌC LIỆU SỐ TIN HỌC 6 - PHIÊN BẢN TƯƠNG TÁC THÂN THIỆN CHO HỌC SINH LỚP 6
 * Nhóm phát triển: K49.SPTIN.B - Trường Đại học Sư phạm TP.HCM (HCMUE)
 */

const STORAGE_KEY = 'hcmue_tinhoc6_completed_lessons';
const openTopicIds = new Set();

const TOPICS_META = {
  1: { title: 'Chủ đề 1 : Máy tính và cộng đồng'},
  2: { title: 'Chủ đề 2 : Mạng máy tính và Internet'},
  3: { title: 'Chủ đề 3 : Tổ chức lưu trữ, tìm kiếm và trao đổi thông tin'},
  4: { title: 'Chủ đề 4 : Đạo đức, pháp luật và văn hóa trong môi trường số'},
  5: { title: 'Chủ đề 5 : Ứng dụng tin học'},
  6: { title: 'Chủ đề 6 : Giải quyết vấn đề với sự trợ giúp của máy tính'}
};

const LESSONS_DATA = [
  { id: 1, topic: 1, strand: 'CS', title: 'Bài 1: Thông tin và dữ liệu', file: 'bai-1-thong-tin-va-du-lieu.html', summary: 'Phân biệt thông tin, dữ liệu, vật mang tin và vai trò của thông tin.' },
  { id: 2, topic: 1, strand: 'CS', title: 'Bài 2: Xử lí thông tin', file: 'bai-2-xu-li-thong-tin.html', summary: 'Bốn hoạt động cơ bản của quá trình xử lí thông tin ở người và máy tính.' },
  { id: 3, topic: 1, strand: 'CS', title: 'Bài 3: Thông tin trong máy tính', file: 'bai-3-thong-tin-trong-may-tinh.html', summary: 'Biểu diễn thông tin bằng dãy bit (0 và 1) và các đơn vị đo dung lượng.' },
  { id: 4, topic: 2, strand: 'ICT', title: 'Bài 4: Mạng máy tính', file: 'bai-4-mang-may-tinh.html', summary: 'Khái niệm, lợi ích và các thành phần cơ bản của mạng máy tính.' },
  { id: 5, topic: 2, strand: 'ICT', title: 'Bài 5: Internet', file: 'bai-5-internet.html', summary: 'Đặc điểm của mạng máy tính toàn cầu Internet và các dịch vụ phổ biến.' },
  { id: 6, topic: 3, strand: 'ICT', title: 'Bài 6: Mạng thông tin toàn cầu', file: 'bai-6-mang-thong-tin-toan-cau.html', summary: 'Siêu văn bản, trang web, website, địa chỉ truy cập và trình duyệt web.' },
  { id: 7, topic: 3, strand: 'ICT', title: 'Bài 7: Tìm kiếm thông tin trên Internet', file: 'bai-7-tim-kiem-thong-tin-tren-internet.html', summary: 'Sử dụng máy tìm kiếm và cách chọn từ khóa thông minh, hiệu quả.' },
  { id: 8, topic: 3, strand: 'ICT', title: 'Bài 8: Thư điện tử', file: 'bai-8-thu-dien-tu.html', summary: 'Cấu trúc địa chỉ email, ưu điểm của thư điện tử và thao tác gửi/nhận.' },
  { id: 9, topic: 4, strand: 'DL',  title: 'Bài 9: An toàn thông tin trên Internet', file: 'bai-9-an-toan-thong-tin-tren-internet.html', summary: 'Nhận diện nguy cơ trên mạng và các quy tắc bảo vệ thông tin cá nhân.' },
  { id: 10, topic: 5, strand: 'ICT', title: 'Bài 10: Sơ đồ tư duy', file: 'bai-10-so-do-tu-duy.html', summary: 'Cách sắp xếp ý tưởng trực quan và tạo sơ đồ tư duy bằng phần mềm.' },
  { id: 11, topic: 5, strand: 'ICT', title: 'Bài 11: Định dạng văn bản', file: 'bai-11-dinh-dang-van-ban.html', summary: 'Trang trí phông chữ, màu chữ, căn lề đoạn văn và thiết lập trang in.' },
  { id: 12, topic: 5, strand: 'ICT', title: 'Bài 12: Trình bày thông tin ở dạng bảng', file: 'bai-12-trinh-bay-thong-tin-o-dang-bang.html', summary: 'Tạo bảng, thêm/xóa hàng cột và sắp xếp dữ liệu gọn gàng trong bảng.' },
  { id: 13, topic: 5, strand: 'ICT', title: 'Bài 13: Thực hành: Tìm kiếm và thay thế', file: 'bai-13-tim-kiem-va-thay-the.html', summary: 'Dùng công cụ Find và Replace để sửa nhanh văn bản chỉ trong vài giây.' },
  { id: 14, topic: 5, strand: 'ICT', title: 'Bài 14: Thực hành tổng hợp: Hoàn thiện sổ lưu niệm', file: 'bai-14-thuc-hanh-tong-hop-hoan-thien-so-luu-niem.html', summary: 'Kết hợp sơ đồ tư duy, định dạng văn bản, hình ảnh và bảng biểu.' },
  { id: 15, topic: 6, strand: 'CS', title: 'Bài 15: Thuật toán', file: 'bai-15-thuat-toan.html', summary: 'Làm quen với thuật toán, xác định Đầu vào (Input), Đầu ra (Output) và sơ đồ khối.' },
  { id: 16, topic: 6, strand: 'CS', title: 'Bài 16: Các cấu trúc điều khiển', file: 'bai-16-cac-cau-truc-dieu-khien.html', summary: 'Khám phá 3 cấu trúc điều khiển: Tuần tự, Rẽ nhánh và Lặp.' },
  { id: 17, topic: 6, strand: 'CS', title: 'Bài 17: Chương trình máy tính', file: 'bai-17-chuong-trinh-may-tinh.html', summary: 'Từ thuật toán đến chương trình máy tính và điều khiển nhân vật.' }
];



function getCompletedLessons() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function toggleLessonComplete(lessonId, forceDone = false) {
  const completed = getCompletedLessons();
  const idx = completed.indexOf(lessonId);
  if (idx === -1) {
    completed.push(lessonId);
  } else if (!forceDone) {
    completed.splice(idx, 1);
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(completed));
  updateHeaderStars();
  return completed.includes(lessonId);
}

function updateHeaderStars() {
  const badge = document.getElementById('header-star-count');
  if (badge) {
    const completed = getCompletedLessons();
    badge.textContent = `Đã học ${completed.length}/17 bài`;
  }
}

function launchConfetti() {
  const colors = ['#1CB0F6', '#58CC02', '#FFC800', '#FF4B4B', '#CE82FF'];
  for (let i = 0; i < 45; i++) {
    const piece = document.createElement('div');
    piece.className = 'confetti-piece';
    piece.style.left = Math.random() * 100 + 'vw';
    piece.style.top = '-15px';
    piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    piece.style.animationDuration = (1.2 + Math.random() * 1.2) + 's';
    document.body.appendChild(piece);
    setTimeout(() => piece.remove(), 2500);
  }
}

function renderCurriculum(filterStrand = 'ALL', searchQuery = '') {
  const container = document.getElementById('curriculum-root') || document.getElementById('topics-container');
  if (!container) return;

  const completed = getCompletedLessons();
  const normalizedQuery = searchQuery.trim().toLowerCase();
  const isSearching = normalizedQuery.length > 0;

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
    // Khi đang tìm kiếm: tự động mở bung ra, không bị ẩn. Khi bình thường: chỉ mở khi học sinh đã ấn mũi tên
    const isOpen = isSearching || openTopicIds.has(topicNum);

    html += `
      <section class="topic-block ${isOpen ? 'is-open' : ''}" data-topic-id="${topicNum}">
        <button type="button" class="topic-header" aria-expanded="${isOpen ? 'true' : 'false'}">
          <div class="topic-header-info">
            <h2 class="topic-title">${meta.title}</h2>
            <span class="topic-count-badge">${lessons.length} bài học</span>
          </div>
          <span class="topic-toggle-arrow" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </span>
        </button>
        <div class="lesson-list">
          ${lessons.map(lesson => {
            const isDone = completed.includes(lesson.id);
            const strandClass = `strand-${lesson.strand.toLowerCase()}`;
            return `
              <a href="${lesson.file}" class="lesson-item ${isDone ? 'is-completed' : ''}">
                <div>
                  <div class="lesson-item-top">
                    <span class="lesson-number">Bài ${lesson.id}</span>
                  </div>
                  <h3 class="lesson-title">${lesson.title.replace(/^Bài \d+:\s*/, '')}</h3>
                  <p class="lesson-summary">${lesson.summary}</p>
                </div>
                <div class="lesson-footer">
                  <span>${isDone ? 'Đã học xong' : 'Bắt đầu học'}</span>
                  <span aria-hidden="true">→</span>
                </div>
              </a>
            `;
          }).join('')}
        </div>
      </section>
    `;
  });

  container.innerHTML = html || `<p style="font-size: 1.2rem; font-weight: 800; text-align: center; padding: 2rem;">Không tìm thấy bài học nào phù hợp, em thử gõ từ khóa khác nhé!</p>`;

  // Gán sự kiện click cho các nút tiêu đề chủ đề để mở/đóng danh sách bài học
  container.querySelectorAll('.topic-header').forEach(btn => {
    btn.addEventListener('click', () => {
      const block = btn.closest('.topic-block');
      if (!block) return;
      const topicId = Number(block.getAttribute('data-topic-id'));
      const currentlyOpen = block.classList.contains('is-open');
      const nextOpen = !currentlyOpen;
      block.classList.toggle('is-open', nextOpen);
      btn.setAttribute('aria-expanded', nextOpen ? 'true' : 'false');
      if (nextOpen) {
        openTopicIds.add(topicId);
      } else {
        openTopicIds.delete(topicId);
      }
    });
  });

  updateOverallProgress();
}

function updateOverallProgress() {
  const completed = getCompletedLessons();
  const total = LESSONS_DATA.length;
  const countEl = document.getElementById('progress-count-text');
  const fillEl = document.getElementById('progress-bar-fill');

  if (countEl) countEl.textContent = `${completed.length}/${total} bài (${Math.round((completed.length / total) * 100)}%)`;
  if (fillEl) fillEl.style.width = `${(completed.length / total) * 100}%`;
}

/**
 * Dựng Header thân thiện & Chế độ Học Từng Bước (Interactive Stepper) cho Bài 1 -> Bài 17
 */
function upgradeKidFriendlyLayout() {
  if (window.__hcmueKidLayoutInitialized) return;
  window.__hcmueKidLayoutInitialized = true;

  const path = window.location.pathname.split('/').pop() || 'index.html';
  const currentLesson = LESSONS_DATA.find(item => item.file === path);
  const completed = getCompletedLessons();

  // 1. Đảm bảo mọi trang đều có cùng một thanh đầu trang
  const existingHeader = document.querySelector('.site-header');
  const headerHTML = `
    <div class="header-inner">
      <a href="index.html" class="brand-identity">
        <img src="assets/images/Logo Tu Tin.png" alt="Logo Tứ Tin" width="110" height="44">
        <span class="brand-name">Hỗ trợ Tin học 6</span>
      </a>
      <button type="button" class="nav-toggle-btn" id="navToggleBtn" aria-label="Mở menu điều hướng" aria-expanded="false">
        <span class="nav-toggle-icon" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>
      <nav class="main-nav" id="mainNav" aria-label="Điều hướng chính">
        <a href="dictionary.html" class="nav-link ${path === 'dictionary.html' ? 'active' : ''}">Nội dung trọng tâm</a>
        <a href="crossword.html" class="nav-link ${path === 'crossword.html' ? 'active' : ''}">Trò chơi ô chữ</a>
        <span class="star-counter-badge" id="header-star-count">Đã học ${completed.length}/17 bài</span>
      </nav>
    </div>
  `;

  if (existingHeader) {
    existingHeader.innerHTML = headerHTML;
  } else {
    const headerEl = document.createElement('header');
    headerEl.className = 'site-header';
    headerEl.innerHTML = headerHTML;
    document.body.prepend(headerEl);
  }

  // 1b. Đảm bảo mọi trang đều có cùng một chân trang (footer) chuẩn
  const footerHTML = `
    <div class="footer-inner">
      <div>
        <strong>Sản phẩm Nghiên cứu - Nhóm Tứ Tin - Lớp K49.SPTIN.B</strong><br>
        <span>Đề tài: Thiết kế công cụ hỗ trợ học sinh lớp 6 gặp khó khăn trong việc tiếp thu kiến thức môn Tin học.</span>
      </div>
      <div>
        <strong>HCMUE</strong>
      </div>
    </div>
  `;

  let existingFooter = document.querySelector('.site-footer');
  if (existingFooter) {
    existingFooter.innerHTML = footerHTML;
  } else {
    existingFooter = document.createElement('footer');
    existingFooter.className = 'site-footer';
    existingFooter.innerHTML = footerHTML;
    document.body.appendChild(existingFooter);
  }

  // Khởi tạo sự kiện mở/đóng menu 3 gạch ngang trên Mobile
  const navToggleBtn = document.getElementById('navToggleBtn');
  const mainNav = document.getElementById('mainNav');
  const activeHeader = document.querySelector('.site-header');

  if (navToggleBtn && mainNav) {
    navToggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = mainNav.classList.toggle('is-open');
      navToggleBtn.classList.toggle('is-active', isOpen);
      navToggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    mainNav.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('is-open');
        navToggleBtn.classList.remove('is-active');
        navToggleBtn.setAttribute('aria-expanded', 'false');
      });
    });

    document.addEventListener('click', (e) => {
      if (activeHeader && !activeHeader.contains(e.target)) {
        mainNav.classList.remove('is-open');
        navToggleBtn.classList.remove('is-active');
        navToggleBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Bỏ các phần còn sót của bố cục cũ (menu trái, dải chữ trên cùng)
  document.querySelectorAll('.placeholder-banner, .sidebar-toggle, .left-sidebar, .academic-Ribbon').forEach(node => node.remove());

  const siteHeader = document.querySelector('.site-header');
  const syncHeaderHeight = () => {
    if (siteHeader) document.documentElement.style.setProperty('--header-h', siteHeader.offsetHeight + 'px');
  };
  syncHeaderHeight();
  window.addEventListener('resize', syncHeaderHeight);
  initSmartHeader();

  // 2. Nếu đang ở trang Bài học (Bài 1 -> Bài 17), biến các phần thành Chế độ Học Từng Bước
  if (!currentLesson) return;

  const mainEl = document.querySelector('main.lesson-page') || document.querySelector('main');
  if (!mainEl) return;

  const sections = Array.from(mainEl.querySelectorAll('.lesson-section, section.activity-card'));
  if (sections.length === 0) return;

  let activeStepIndex = 0;
  let showAllMode = false;

  // Cột hành trình bài học: đặt dọc bên trái phần nội dung, dính theo khi cuộn
  const stepperBar = document.createElement('nav');
  stepperBar.className = 'kid-stepper-bar';
  stepperBar.setAttribute('aria-label', 'Các bước của bài học');

  const pillsHtml = sections.map((sec, idx) => {
    const h2 = sec.querySelector('h2');
    const rawTitle = h2 ? h2.textContent.trim().replace(/\s+/g, ' ') : `Hoạt động ${idx + 1}`;
    const title = rawTitle.replace(/^\d+\.\s*/, '');
    return `
      <li>
        <button type="button" class="kid-step-pill ${idx === 0 ? 'is-active' : ''}" data-step-idx="${idx}" title="${title.replace(/"/g, '&quot;')}">
          <span class="kid-step-num">${idx + 1}</span>
          <span class="kid-step-text">${title}</span>
        </button>
      </li>
    `;
  }).join('');

  stepperBar.innerHTML = `
    <div class="rail-head">
      <span class="rail-kicker">Bài ${currentLesson.id} · ${sections.length} bước</span>
      <strong class="rail-title">${currentLesson.title.replace(/^Bài \d+:\s*/, '')}</strong>
    </div>
    <ol class="kid-step-pills" id="kid-step-pills-root">
      ${pillsHtml}
    </ol>
    <div class="rail-actions">
      <button type="button" class="kid-mode-toggle" id="btn-toggle-view-mode">Xem toàn bộ bài</button>
      <a href="index.html" class="rail-back">← Danh sách bài học</a>
    </div>
  `;

  const railHost = mainEl.parentElement;
  railHost.classList.add('has-rail');
  railHost.insertBefore(stepperBar, mainEl);

  // Chèn cụm nút "Hoạt động trước / Hoạt động tiếp theo" cỡ lớn vào cuối mỗi hoạt động
  sections.forEach((sec, idx) => {
    const controls = document.createElement('div');
    controls.className = 'kid-step-controls';

    const prevBtnHtml = idx > 0
      ? `<button type="button" class="btn btn-outline btn-lg" data-go-step="${idx - 1}">← Quay lại bước ${idx}</button>`
      : `<a href="index.html" class="btn btn-outline btn-lg">← Danh sách bài học</a>`;

    const isLast = idx === sections.length - 1;
    const isLessonDone = getCompletedLessons().includes(currentLesson.id);

    const nextBtnHtml = !isLast
      ? `<button type="button" class="btn btn-primary btn-lg" data-go-step="${idx + 1}">Tiếp theo: bước ${idx + 2} →</button>`
      : `<button type="button" class="btn btn-success btn-lg" id="btn-finish-lesson-kid">
           ${isLessonDone ? 'Em đã hoàn thành bài học này' : 'Hoàn thành bài học'}
         </button>`;

    controls.innerHTML = `${prevBtnHtml}${nextBtnHtml}`;
    sec.appendChild(controls);
  });

  const pillButtons = Array.from(stepperBar.querySelectorAll('.kid-step-pill'));
  const toggleModeBtn = document.getElementById('btn-toggle-view-mode');

  function updateStepView(newIndex, shouldScroll = true) {
    activeStepIndex = newIndex;

    sections.forEach((sec, idx) => {
      if (showAllMode) {
        sec.classList.remove('is-hidden-step');
      } else {
        sec.classList.toggle('is-hidden-step', idx !== activeStepIndex);
      }
      // Video ở bước vừa bị ẩn thì dừng lại, không phát tiếng ngầm
      if (sec.classList.contains('is-hidden-step')) {
        sec.querySelectorAll('video').forEach(v => v.pause());
      }
    });

    pillButtons.forEach((btn, idx) => {
      btn.classList.toggle('is-active', !showAllMode && idx === activeStepIndex);
      if (idx < activeStepIndex) {
        btn.classList.add('is-done');
      }
    });

    // Tự động đo lại chiều cao iframe trong bước vừa mở
    setTimeout(triggerAllIframeResize, 80);

    if (shouldScroll) {
      const target = showAllMode ? mainEl : sections[activeStepIndex];
      const headerH = siteHeader ? siteHeader.offsetHeight : 0;
      const top = target.getBoundingClientRect().top + window.scrollY - headerH - 16;
      if (Math.abs(window.scrollY - top) > 4) window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
    }
  }

  // Sự kiện bấm vào các nút Bước 1, 2, 3... trên thanh
  pillButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      showAllMode = false;
      if (toggleModeBtn) toggleModeBtn.textContent = 'Xem toàn bộ bài';
      const targetIdx = Number(btn.getAttribute('data-step-idx'));
      updateStepView(targetIdx, true);
    });
  });

  // Sự kiện bấm nút Tiếp theo / Quay lại dưới mỗi hoạt động
  mainEl.addEventListener('click', (e) => {
    const stepBtn = e.target.closest('[data-go-step]');
    if (stepBtn) {
      showAllMode = false;
      if (toggleModeBtn) toggleModeBtn.textContent = 'Xem toàn bộ bài';
      const nextIdx = Number(stepBtn.getAttribute('data-go-step'));
      updateStepView(nextIdx, true);
    }

    const finishBtn = e.target.closest('#btn-finish-lesson-kid');
    if (finishBtn) {
      toggleLessonComplete(currentLesson.id, true);
      finishBtn.textContent = 'Tuyệt vời! Em đã hoàn thành bài học';
      launchConfetti();
    }
  });

  // Nút bật/tắt Xem toàn bộ bài (tiện cho GV hoặc khi HS muốn ôn nhanh)
  if (toggleModeBtn) {
    toggleModeBtn.addEventListener('click', () => {
      showAllMode = !showAllMode;
      toggleModeBtn.textContent = showAllMode ? 'Học từng bước' : 'Xem toàn bộ bài';
      updateStepView(activeStepIndex, false);
    });
  }

  // Hỗ trợ bấm phím mũi tên Trái / Phải để chuyển bước nhanh
  document.addEventListener('keydown', (e) => {
    if (['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement?.tagName)) return;
    if (showAllMode) return;
    if (e.key === 'ArrowRight' && activeStepIndex < sections.length - 1) {
      updateStepView(activeStepIndex + 1, true);
    } else if (e.key === 'ArrowLeft' && activeStepIndex > 0) {
      updateStepView(activeStepIndex - 1, true);
    }
  });

  // Khởi tạo ở Bước 1
  updateStepView(0, false);
}

/**
 * Tự động điều chỉnh chiều cao Iframe Game mượt mà, không bị thanh cuộn kép
 */
function triggerAllIframeResize() {
  const iframes = document.querySelectorAll('iframe');
  iframes.forEach(iframe => {
    if (typeof iframe.__updateHeightFn === 'function') {
      iframe.__updateHeightFn();
    }
  });
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
              font-family: 'Nunito', sans-serif !important;
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

        if (contentHeight > 50) {
          const targetHeight = Math.min(Math.max(Math.ceil(contentHeight) + 32, 460), 1200);
          const currentHeight = parseInt(iframe.style.height || '0', 10);
          if (Math.abs(targetHeight - currentHeight) > 6) {
            iframe.style.height = targetHeight + 'px';
          }
        }
      } catch (e) {
        iframe.style.height = '560px';
      }
    };

    iframe.__updateHeightFn = updateHeight;

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

/**
 * Tự động ẩn thanh Header khi lướt xuống và trượt xuống hiện lại khi lướt lên
 */
function initSmartHeader() {
  const header = document.querySelector('.site-header');
  if (!header || header.__smartHeaderInitialized) return;
  header.__smartHeaderInitialized = true;

  let lastScrollY = window.pageYOffset || document.documentElement.scrollTop;
  let ticking = false;
  const threshold = 4;        // Ngưỡng di chuyển tối thiểu để nhận diện nhanh
  const topThreshold = 15;     // Khi cách đỉnh trang <= 15px thì luôn hiện trạng thái tự nhiên

  function updateHeader() {
    const currentScrollY = window.pageYOffset || document.documentElement.scrollTop;

    // 1. Khi đang ở đỉnh trang (hoặc cuộn ngược lên quá đỉnh): Luôn hiện trạng thái tự nhiên
    if (currentScrollY <= topThreshold) {
      header.classList.remove('header--hidden');
      header.classList.remove('header--pinned');
      lastScrollY = Math.max(0, currentScrollY);
      ticking = false;
      return;
    }

    // 2. Nếu menu di động (3 gạch ngang) đang mở thì giữ nguyên header không ẩn
    const mainNav = document.getElementById('mainNav');
    if (mainNav && mainNav.classList.contains('is-open')) {
      header.classList.remove('header--hidden');
      lastScrollY = currentScrollY;
      ticking = false;
      return;
    }

    const diff = currentScrollY - lastScrollY;

    // 3. Chỉ phản hồi khi khoảng cách cuộn vượt ngưỡng threshold
    if (Math.abs(diff) >= threshold) {
      if (diff > 0 && currentScrollY > 60) {
        // Đang cuộn xuống và đã qua khỏi độ cao của header -> Ẩn header để mở rộng tầm nhìn
        header.classList.add('header--hidden');
        header.classList.remove('header--pinned');
      } else if (diff < 0) {
        // Đang cuộn lên -> Trượt header xuống ngay lập tức kèm bóng đổ
        header.classList.remove('header--hidden');
        header.classList.add('header--pinned');
      }
      lastScrollY = currentScrollY;
    }

    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(updateHeader);
      ticking = true;
    }
  }, { passive: true });

  // Lắng nghe thêm sự kiện con lăn chuột (wheel) để kích hoạt ngay trong 1 lần đẩy chuột đầu tiên
  window.addEventListener('wheel', (e) => {
    const currentScrollY = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScrollY <= topThreshold) {
      header.classList.remove('header--hidden');
      header.classList.remove('header--pinned');
      return;
    }

    const mainNav = document.getElementById('mainNav');
    if (mainNav && mainNav.classList.contains('is-open')) return;

    if (e.deltaY < -2) {
      // Đẩy con lăn chuột lên -> Hiện header trượt xuống ngay
      header.classList.remove('header--hidden');
      header.classList.add('header--pinned');
      lastScrollY = currentScrollY;
    } else if (e.deltaY > 2 && currentScrollY > 60) {
      // Đẩy con lăn chuột xuống -> Ẩn header
      header.classList.add('header--hidden');
      header.classList.remove('header--pinned');
      lastScrollY = currentScrollY;
    }
  }, { passive: true });
}

document.addEventListener('DOMContentLoaded', () => {
  upgradeKidFriendlyLayout();
  initSmartHeader();
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

  setupIframeAutoResize();
});
