/**
 * Quản lý danh mục chương trình Tin học 6, tự động đồng bộ bố cục 17 bài học
 * và kiểm soát chiều cao khung tương tác (iframe) chống tràn.
 * Dự án Học liệu số Tin học 6 - Khoa CNTT - ĐH Sư phạm TP.HCM (HCMUE)
 */

const CURRICULUM_DATA = [
  {
    topicCode: 'Chủ đề 1',
    topicCluster: 'Chủ đề A',
    topicTitle: 'Máy tính và cộng đồng',
    strand: 'CS',
    lessons: [
      {
        id: 1,
        slug: 'bai-1-thong-tin-va-du-lieu.html',
        title: 'Bài 1: Thông tin và dữ liệu',
        strand: 'CS',
        summary: 'Phân biệt khái niệm thông tin, dữ liệu, vật mang tin và tầm quan trọng của thông tin trong đời sống.',
        interactiveCount: 3
      },
      {
        id: 2,
        slug: 'bai-2-xu-li-thong-tin.html',
        title: 'Bài 2: Xử lí thông tin',
        strand: 'CS',
        summary: 'Bốn hoạt động cơ bản của quá trình xử lí thông tin ở con người và trong máy tính.',
        interactiveCount: 2
      },
      {
        id: 3,
        slug: 'bai-3-thong-tin-trong-may-tinh.html',
        title: 'Bài 3: Thông tin trong máy tính',
        strand: 'CS',
        summary: 'Biểu diễn số, văn bản, hình ảnh, âm thanh bằng dãy bit (0 và 1) và các đơn vị đo dung lượng dữ liệu.',
        interactiveCount: 2
      }
    ]
  },
  {
    topicCode: 'Chủ đề 2',
    topicCluster: 'Chủ đề B',
    topicTitle: 'Mạng máy tính và Internet',
    strand: 'ICT',
    lessons: [
      {
        id: 4,
        slug: 'bai-4-mang-may-tinh.html',
        title: 'Bài 4: Mạng máy tính',
        strand: 'ICT',
        summary: 'Khái niệm mạng máy tính, lợi ích kết nối chia sẻ tài nguyên và các thành phần cơ bản của mạng.',
        interactiveCount: 1
      },
      {
        id: 5,
        slug: 'bai-5-internet.html',
        strand: 'ICT',
        title: 'Bài 5: Internet',
        summary: 'Đặc điểm toàn cầu, tính tương tác, tính dễ tiếp cận và những lợi ích thiết thực của mạng Internet.',
        interactiveCount: 1
      }
    ]
  },
  {
    topicCode: 'Chủ đề 3',
    topicCluster: 'Chủ đề C',
    topicTitle: 'Tổ chức lưu trữ, tìm kiếm và trao đổi thông tin',
    strand: 'ICT',
    lessons: [
      {
        id: 6,
        slug: 'bai-6-mang-thong-tin-toan-cau.html',
        title: 'Bài 6: Mạng thông tin toàn cầu',
        strand: 'ICT',
        summary: 'Siêu văn bản, trang web, website, địa chỉ truy cập và cách khai thác thông tin bằng trình duyệt.',
        interactiveCount: 3
      },
      {
        id: 7,
        slug: 'bai-7-tim-kiem-thong-tin-tren-internet.html',
        title: 'Bài 7: Tìm kiếm thông tin trên Internet',
        strand: 'ICT',
        summary: 'Sử dụng máy tìm kiếm và lựa chọn từ khóa phù hợp để tra cứu, chọn lọc thông tin tin cậy.',
        interactiveCount: 3
      },
      {
        id: 8,
        slug: 'bai-8-thu-dien-tu.html',
        title: 'Bài 8: Thư điện tử',
        strand: 'ICT',
        summary: 'Cấu trúc địa chỉ email, ưu điểm của dịch vụ thư điện tử và thực hành soạn, gửi, trả lời thư.',
        interactiveCount: 2
      }
    ]
  },
  {
    topicCode: 'Chủ đề 4',
    topicCluster: 'Chủ đề D',
    topicTitle: 'Đạo đức, pháp luật và văn hóa trong môi trường số',
    strand: 'DL',
    lessons: [
      {
        id: 9,
        slug: 'bai-9-an-toan-thong-tin-tren-internet.html',
        title: 'Bài 9: An toàn thông tin trên Internet',
        strand: 'DL',
        summary: 'Nhận diện các nguy cơ lừa đảo, phần mềm độc hại và quy tắc bảo vệ thông tin cá nhân trên mạng.',
        interactiveCount: 2
      }
    ]
  },
  {
    topicCode: 'Chủ đề 5',
    topicCluster: 'Chủ đề E',
    topicTitle: 'Ứng dụng tin học',
    strand: 'ICT',
    lessons: [
      {
        id: 10,
        slug: 'bai-10-so-do-tu-duy.html',
        title: 'Bài 10: Sơ đồ tư duy',
        strand: 'ICT',
        summary: 'Cách sắp xếp ý tưởng trực quan bằng sơ đồ tư duy (Mindmap) trên giấy và bằng phần mềm máy tính.',
        interactiveCount: 2
      },
      {
        id: 11,
        slug: 'bai-11-dinh-dang-van-ban.html',
        title: 'Bài 11: Định dạng văn bản',
        strand: 'ICT',
        summary: 'Định dạng kí tự, định dạng đoạn văn bản và thiết lập trang in hài hòa, dễ đọc.',
        interactiveCount: 2
      },
      {
        id: 12,
        slug: 'bai-12-trinh-bay-thong-tin-o-dang-bang.html',
        title: 'Bài 12: Trình bày thông tin ở dạng bảng',
        strand: 'ICT',
        summary: 'Khi nào nên tổ chức thông tin dạng bảng, thao tác tạo bảng và căn chỉnh hàng, cột trong văn bản.',
        interactiveCount: 2
      },
      {
        id: 13,
        slug: 'bai-13-tim-kiem-va-thay-the.html',
        title: 'Bài 13: Thực hành: Tìm kiếm và thay thế',
        strand: 'ICT',
        summary: 'Sử dụng công cụ Find và Replace để biên tập, chỉnh sửa văn bản dài nhanh chóng và chính xác.',
        interactiveCount: 1
      },
      {
        id: 14,
        slug: 'bai-14-thuc-hanh-tong-hop-hoan-thien-so-luu-niem.html',
        title: 'Bài 14: Thực hành tổng hợp: Hoàn thiện sổ lưu niệm',
        strand: 'ICT',
        summary: 'Kết hợp sơ đồ tư duy, định dạng văn bản, chèn ảnh và bảng biểu để hoàn thiện sản phẩm sổ lưu niệm lớp.',
        interactiveCount: 1
      }
    ]
  },
  {
    topicCode: 'Chủ đề 6',
    topicCluster: 'Chủ đề F',
    topicTitle: 'Giải quyết vấn đề với sự trợ giúp của máy tính',
    strand: 'CS',
    lessons: [
      {
        id: 15,
        slug: 'bai-15-thuat-toan.html',
        title: 'Bài 15: Thuật toán',
        strand: 'CS',
        summary: 'Khái niệm thuật toán, xác định dữ liệu đầu vào (Input), đầu ra (Output) và hai cách mô tả thuật toán.',
        interactiveCount: 2
      },
      {
        id: 16,
        slug: 'bai-16-cac-cau-truc-dieu-khien.html',
        title: 'Bài 16: Các cấu trúc điều khiển',
        strand: 'CS',
        summary: 'Ba cấu trúc điều khiển cơ bản trong thuật toán: cấu trúc tuần tự, cấu trúc rẽ nhánh và cấu trúc lặp.',
        interactiveCount: 2
      },
      {
        id: 17,
        slug: 'bai-17-chuong-trinh-may-tinh.html',
        title: 'Bài 17: Chương trình máy tính',
        strand: 'CS',
        summary: 'Mối quan hệ giữa thuật toán và chương trình máy tính; thực hành lập trình trực quan với Scratch.',
        interactiveCount: 2
      }
    ]
  }
];

const ALL_LESSONS = CURRICULUM_DATA.flatMap((topic) =>
  topic.lessons.map((lesson) => ({
    ...lesson,
    topicCode: topic.topicCode,
    topicCluster: topic.topicCluster,
    topicTitle: topic.topicTitle
  }))
);

const STORAGE_KEY = 'hcmue_tinhoc6_completed_lessons';

function getCompletedLessons() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (err) {
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
  return completed;
}

function stripLeadingEmojis(text) {
  if (!text) return '';
  return text
    .replace(/^[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE0F}\u{200D}\s]+/gu, '')
    .trim();
}

/**
 * Tự động nâng cấp các trang bài học cũ (Bài 2 -> Bài 17) và các trang công cụ
 * sang bố cục chuẩn Sư phạm HCMUE nếu trang chưa có .lesson-layout
 */
function autoUpgradeLegacyPages() {
  const path = window.location.pathname.split('/').pop() || 'index.html';

  // 1. Tìm thông tin bài học hiện tại nếu là trang bai-*.html
  let currentLesson = ALL_LESSONS.find((l) => l.slug === path);
  if (!currentLesson && path === 'bai15.html') {
    currentLesson = ALL_LESSONS.find((l) => l.id === 15);
  }

  // Nếu là trang bài học nhưng chưa được bọc trong .lesson-layout
  if (currentLesson && !document.querySelector('.lesson-layout')) {
    // Xóa header/navbar/footer cũ nếu có
    document.querySelectorAll('header, nav.navbar, .navbar, footer').forEach((el) => {
      if (!el.closest('main') && !el.closest('section')) {
        el.remove();
      }
    });

    // Gom toàn bộ nội dung bài học hiện tại
    const existingMain =
      document.querySelector('main') ||
      document.querySelector('.lesson-container') ||
      document.querySelector('.container');

    const contentNodes = [];
    if (existingMain) {
      Array.from(existingMain.childNodes).forEach((node) => contentNodes.push(node));
      existingMain.remove();
    } else {
      Array.from(document.body.childNodes).forEach((node) => {
        if (
          node.nodeType === 1 &&
          (node.tagName === 'SCRIPT' || node.tagName === 'STYLE' || node.tagName === 'LINK')
        ) {
          return;
        }
        contentNodes.push(node);
      });
    }

    // Dựng khung Academic Ribbon + Header HCMUE
    const topBarsHTML = `
      <div class="academic-Ribbon">
        <div class="academic-Ribbon__inner">
          <span>${currentLesson.topicCode} (${currentLesson.topicCluster}): ${currentLesson.topicTitle} · Mạch ${currentLesson.strand}</span>
          <span>Sách giáo khoa Tin học 6 – Kết nối tri thức với cuộc sống</span>
        </div>
      </div>
      <header class="site-header">
        <div class="site-header__inner">
          <a href="index.html" class="brand">
            <img src="assets/images/Logo HCMUE.svg" alt="Logo HCMUE" class="brand__logo" />
            <div class="brand__text">
              <span class="brand__title">Học Liệu Số Tin Học 6</span>
              <span class="brand__subtitle">${currentLesson.topicCode} · ${currentLesson.title}</span>
            </div>
          </a>
          <nav class="main-nav" aria-label="Điều hướng chính">
            <a href="index.html" class="main-nav__link">Mục lục bài học</a>
            <a href="dictionary.html" class="main-nav__link">Từ điển thuật ngữ</a>
            <a href="crossword.html" class="main-nav__link">Ô chữ ôn tập</a>
            <a href="algorithm.html" class="main-nav__link">Mô phỏng thuật toán</a>
          </nav>
        </div>
      </header>
    `;

    const layoutWrap = document.createElement('div');
    layoutWrap.className = 'container lesson-layout';

    const sidebar = document.createElement('aside');
    sidebar.className = 'lesson-sidebar';
    sidebar.setAttribute('aria-label', 'Tiến trình bài học');

    const mainEl = document.createElement('main');
    mainEl.className = 'lesson-main';

    contentNodes.forEach((node) => mainEl.appendChild(node));

    // Làm sạch emoji đầu dòng ở các thẻ tiêu đề và chuẩn hóa danh sách mục lục bên trái
    const headings = mainEl.querySelectorAll('h1, h2, .badge, .lesson-badge');
    headings.forEach((h) => {
      if (h.childNodes.length === 1 && h.childNodes[0].nodeType === 3) {
        h.textContent = stripLeadingEmojis(h.textContent);
      }
    });

    // Bọc các iframe lẻ vào khung .interactive-embed chuẩn
    mainEl.querySelectorAll('iframe').forEach((iframe, idx) => {
      if (!iframe.closest('.interactive-embed')) {
        const src = iframe.getAttribute('src') || '';
        const title = iframe.getAttribute('title') || `Hoạt động tương tác ${idx + 1}`;
        const wrapper = document.createElement('div');
        wrapper.className = 'interactive-embed';
        wrapper.innerHTML = `
          <div class="interactive-embed__bar">
            <span>Phiếu tương tác ${currentLesson.id}.${idx + 1} · ${title}</span>
            ${src ? `<a href="${src}" target="_blank">Mở toàn màn hình ↗</a>` : ''}
          </div>
        `;
        iframe.parentNode.insertBefore(wrapper, iframe);
        wrapper.appendChild(iframe);
      }
    });

    // Tự động tạo danh sách "Tiến trình bài học" ở cột trái từ các thẻ h2 / section
    const sectionHeadings = Array.from(mainEl.querySelectorAll('h2'));
    const stepsHTML = sectionHeadings
      .map((h2, index) => {
        const sectionEl = h2.closest('section') || h2;
        if (!sectionEl.id) {
          sectionEl.id = `muc-bai-hoc-${index + 1}`;
        }
        const cleanTitle = stripLeadingEmojis(h2.textContent);
        return `
          <li>
            <a href="#${sectionEl.id}" class="pedagogical-steps__link ${index === 0 ? 'is-active' : ''}">
              <span class="step-index">${index + 1}</span>
              <span>${cleanTitle}</span>
            </a>
          </li>
        `;
      })
      .join('');

    sidebar.innerHTML = `
      <div class="lesson-sidebar__title">Tiến trình bài học</div>
      <ul class="pedagogical-steps">
        ${
          stepsHTML ||
          `<li><a href="#" class="pedagogical-steps__link is-active"><span class="step-index">1</span> Nội dung bài học</a></li>`
        }
      </ul>
      <div style="margin-top: 1.25rem; padding-top: 1rem; border-top: 1px solid var(--bg-subtle);">
        <button
          type="button"
          id="mark-lesson-complete"
          data-lesson-id="${currentLesson.id}"
          class="btn btn--primary"
          style="width: 100%; justify-content: center;"
        >
          Đánh dấu đã hoàn thành bài học
        </button>
      </div>
    `;

    // Thêm thanh điều hướng Bài trước / Bài tiếp theo ở cuối bài
    if (!mainEl.querySelector('.lesson-pagination')) {
      const prevLesson = ALL_LESSONS.find((l) => l.id === currentLesson.id - 1);
      const nextLesson = ALL_LESSONS.find((l) => l.id === currentLesson.id + 1);
      const paginationNav = document.createElement('nav');
      paginationNav.className = 'lesson-pagination';
      paginationNav.setAttribute('aria-label', 'Chuyển bài học');
      paginationNav.innerHTML = `
        <a href="${prevLesson ? prevLesson.slug : 'index.html'}" class="btn">
          ← ${prevLesson ? prevLesson.title : 'Quay lại Mục lục chương trình'}
        </a>
        ${
          nextLesson
            ? `<a href="${nextLesson.slug}" class="btn btn--primary">${nextLesson.title} →</a>`
            : `<a href="index.html" class="btn btn--primary">Hoàn thành chương trình →</a>`
        }
      `;
      mainEl.appendChild(paginationNav);
    }

    layoutWrap.appendChild(sidebar);
    layoutWrap.appendChild(mainEl);

    document.body.insertAdjacentHTML('afterbegin', topBarsHTML);
    const headerEl = document.querySelector('.site-header');
    headerEl.insertAdjacentElement('afterend', layoutWrap);
  }
}

function updateProgressOverview() {
  const counterEl = document.getElementById('progress-counter');
  const fillEl = document.getElementById('progress-bar-fill');
  if (!counterEl || !fillEl) return;

  const completed = getCompletedLessons();
  const total = 17;
  const percent = Math.round((completed.length / total) * 100);

  counterEl.textContent = `${completed.length} / ${total} bài (${percent}%)`;
  fillEl.style.width = `${percent}%`;
}

function renderCurriculum(filterStrand = 'all', searchQuery = '') {
  const container = document.getElementById('curriculum-container');
  if (!container) return;

  const completed = getCompletedLessons();
  const normalizedQuery = searchQuery.trim().toLowerCase();

  let html = '';

  CURRICULUM_DATA.forEach((topic) => {
    const matchingLessons = topic.lessons.filter((lesson) => {
      const matchStrand = filterStrand === 'all' || lesson.strand === filterStrand;
      const matchQuery =
        !normalizedQuery ||
        lesson.title.toLowerCase().includes(normalizedQuery) ||
        lesson.summary.toLowerCase().includes(normalizedQuery) ||
        topic.topicTitle.toLowerCase().includes(normalizedQuery);
      return matchStrand && matchQuery;
    });

    if (matchingLessons.length === 0) return;

    html += `
      <section class="topic-block">
        <div class="topic-header">
          <div class="topic-header__left">
            <span class="topic-code">${topic.topicCode} · ${topic.topicCluster}</span>
            <h2 class="topic-title">${topic.topicTitle}</h2>
          </div>
          <span style="font-size: 0.82rem; color: var(--text-muted);">
            ${matchingLessons.length} bài học
          </span>
        </div>
        <div class="lesson-grid">
          ${matchingLessons
            .map((lesson) => {
              const isDone = completed.includes(lesson.id);
              const badgeClass = `strand-badge--${lesson.strand.toLowerCase()}`;
              return `
                <article class="lesson-card">
                  <div>
                    <div class="lesson-card__meta">
                      <span class="lesson-number">Bài ${String(lesson.id).padStart(2, '0')}</span>
                      <span class="strand-badge ${badgeClass}">Mạch ${lesson.strand}</span>
                    </div>
                    <h3 class="lesson-card__title">
                      <a href="${lesson.slug}">${lesson.title.replace(/^Bài \d+:\s*/, '')}</a>
                    </h3>
                    <p class="lesson-card__summary">${lesson.summary}</p>
                  </div>
                  <div class="lesson-card__footer">
                    <span class="lesson-status ${isDone ? 'is-done' : ''}">
                      ${isDone ? '✓ Đã hoàn thành' : `${lesson.interactiveCount} hoạt động tương tác`}
                    </span>
                    <a href="${lesson.slug}" class="lesson-card__cta">Vào bài học →</a>
                  </div>
                </article>
              `;
            })
            .join('')}
        </div>
      </section>
    `;
  });

  if (!html) {
    html = `
      <div style="padding: 2.5rem; text-align: center; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md);">
        <p style="font-weight: 600; color: var(--text-primary);">Không tìm thấy bài học phù hợp với từ khóa "${searchQuery}".</p>
        <p style="font-size: 0.88rem; color: var(--text-secondary); margin-top: 0.35rem;">Hãy thử tìm với từ khóa ngắn gọn hơn hoặc chuyển bộ lọc sang "Tất cả".</p>
      </div>
    `;
  }

  container.innerHTML = html;
}

/**
 * Đo chiều cao thật của các phần tử con bên trong iframe (Không dùng documentElement.scrollHeight
 * và không dùng ResizeObserver để tránh tuyệt đối lỗi lặp vô hạn do min-height: 100vh)
 */
function measureTrueIframeContentHeight(doc) {
  if (!doc || !doc.body) return 460;

  const children = Array.from(doc.body.children).filter(
    (el) => el.tagName !== 'SCRIPT' && el.tagName !== 'STYLE' && el.tagName !== 'LINK'
  );

  if (children.length === 0) {
    return Math.min(Math.max(doc.body.offsetHeight, 380), 740);
  }

  const bodyRect = doc.body.getBoundingClientRect();
  let maxBottom = 0;

  children.forEach((child) => {
    const rect = child.getBoundingClientRect();
    const bottom = rect.bottom - bodyRect.top;
    if (bottom > maxBottom) {
      maxBottom = bottom;
    }
  });

  const computed = doc.defaultView ? doc.defaultView.getComputedStyle(doc.body) : null;
  const padBottom = computed ? parseFloat(computed.paddingBottom) || 20 : 20;
  const rawHeight = Math.ceil(maxBottom + padBottom + 8);

  return Math.min(Math.max(rawHeight, 380), 740);
}

function initSeamlessIframes() {
  const iframes = document.querySelectorAll('iframe');

  iframes.forEach((iframe) => {
    let lastHeight = 0;

    const adjustIframeHeight = () => {
      try {
        const doc = iframe.contentDocument || (iframe.contentWindow && iframe.contentWindow.document);
        if (!doc || !doc.body) return;

        // Xóa bỏ min-height: 100vh bên trong các file game để ngăn chặn kéo giãn nền
        if (!doc.getElementById('hcmue-iframe-reset')) {
          const resetStyle = doc.createElement('style');
          resetStyle.id = 'hcmue-iframe-reset';
          resetStyle.textContent = `
            html, body {
              min-height: 0 !important;
              height: auto !important;
              max-height: none !important;
              overflow-x: hidden !important;
            }
            body {
              display: block !important;
              padding-bottom: 16px !important;
            }
          `;
          if (doc.head) {
            doc.head.appendChild(resetStyle);
          } else {
            doc.body.prepend(resetStyle);
          }
        }

        const nextHeight = measureTrueIframeContentHeight(doc);
        if (Math.abs(nextHeight - lastHeight) > 6) {
          lastHeight = nextHeight;
          iframe.style.height = `${nextHeight}px`;
        }
      } catch (err) {
        // Bỏ qua nếu iframe là video ngoài domain (YouTube,...)
      }
    };

    iframe.addEventListener('load', () => {
      adjustIframeHeight();
      setTimeout(adjustIframeHeight, 250);

      try {
        const doc = iframe.contentDocument || (iframe.contentWindow && iframe.contentWindow.document);
        if (doc) {
          doc.addEventListener('click', () => setTimeout(adjustIframeHeight, 90));
          doc.addEventListener('change', () => setTimeout(adjustIframeHeight, 90));
        }
      } catch (e) {}
    });

    if (iframe.complete) {
      adjustIframeHeight();
    }
  });

  window.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'RESIZE_GAME_IFRAME') {
      const targetIframe = Array.from(iframes).find(
        (frame) => frame.contentWindow === event.source
      );
      if (targetIframe && Number.isFinite(event.data.height)) {
        const clamped = Math.min(Math.max(Math.ceil(event.data.height), 380), 740);
        targetIframe.style.height = `${clamped}px`;
      }
    }
  });
}

function initLessonCompletionButton() {
  const completeBtn = document.getElementById('mark-lesson-complete');
  if (!completeBtn) return;

  const lessonId = Number(completeBtn.dataset.lessonId);
  if (!lessonId) return;

  const syncButtonState = () => {
    const isDone = getCompletedLessons().includes(lessonId);
    completeBtn.textContent = isDone
      ? '✓ Đã hoàn thành bài học này'
      : 'Đánh dấu đã hoàn thành bài học';
    completeBtn.classList.toggle('btn--primary', !isDone);
  };

  syncButtonState();

  completeBtn.addEventListener('click', () => {
    toggleLessonComplete(lessonId);
    syncButtonState();
  });
}

document.addEventListener('DOMContentLoaded', () => {
  autoUpgradeLegacyPages();
  updateProgressOverview();
  renderCurriculum();
  initSeamlessIframes();
  initLessonCompletionButton();

  let activeStrand = 'all';
  const filterButtons = document.querySelectorAll('.filter-btn');
  const searchInput = document.getElementById('lesson-search');

  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterButtons.forEach((b) => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      activeStrand = btn.dataset.strand;
      renderCurriculum(activeStrand, searchInput ? searchInput.value : '');
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      renderCurriculum(activeStrand, e.target.value);
    });
  }
});
