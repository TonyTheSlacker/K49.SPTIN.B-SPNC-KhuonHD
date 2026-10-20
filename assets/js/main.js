/**
 * Quản lý danh mục chương trình Tin học 6, tiến độ học tập và đồng bộ khung tương tác (iframe)
 * Dự án Học liệu số Tin học 6 - Khoa CNTT - ĐH Sư phạm TP.HCM
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
        title: 'Bài 5: Internet',
        strand: 'ICT',
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
 * Tự động điều chỉnh chiều cao của các iframe hoạt động (assets/games/*.html)
 * để loại bỏ hoàn toàn hiện tượng 2 thanh cuộn lồng nhau.
 */
function initSeamlessIframes() {
  const iframes = document.querySelectorAll('.interactive-embed iframe');
  iframes.forEach((iframe) => {
    iframe.addEventListener('load', () => {
      try {
        const doc = iframe.contentDocument || iframe.contentWindow.document;
        if (doc && doc.body) {
          const updateHeight = () => {
            const h = doc.documentElement.scrollHeight || doc.body.scrollHeight;
            if (h > 200) {
              iframe.style.height = `${h + 16}px`;
            }
          };
          updateHeight();
          const observer = new ResizeObserver(updateHeight);
          observer.observe(doc.body);
        }
      } catch (e) {
        // Trường hợp mở qua giao thức file:// bị giới hạn cross-origin, dùng postMessage dự phòng
      }
    });
  });

  window.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'RESIZE_GAME_IFRAME') {
      const targetIframe = Array.from(iframes).find(
        (frame) => frame.contentWindow === event.source
      );
      if (targetIframe && event.data.height) {
        targetIframe.style.height = `${event.data.height + 16}px`;
      }
    }
  });
}

/**
 * Khởi tạo nút đánh dấu hoàn thành bài học trên từng trang bài học
 */
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
