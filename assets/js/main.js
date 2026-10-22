/**
 * TIN HỌC 6 - KID-FRIENDLY GAMIFIED CONTROLLER (main.js)
 * Tương thích đồng thời với Trang chủ, 17 Bài học, Từ điển, Ô chữ, Thuật toán
 */

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

/* Quản lý Sao thưởng của Học sinh qua localStorage */
function getCompletedLessons() {
  try {
    const raw = localStorage.getItem('tinhoc6_completed_lessons');
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function toggleLessonComplete(lessonNum) {
  const list = getCompletedLessons();
  const idx = list.indexOf(lessonNum);
  if (idx === -1) {
    list.push(lessonNum);
  }
  try {
    localStorage.setItem('tinhoc6_completed_lessons', JSON.stringify(list));
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
  initMobileNavigation();
  initStarBadgeInHeader();
  initCurriculumCatalog();
  sanitizeAndDecorateLessonPage();
  initScrollSpySidebar();
});

function initMobileNavigation() {
  const toggleBtn = document.querySelector('.mobile-menu-toggle, .nav-toggle');
  const nav = document.querySelector('.main-nav, .nav-links');
  if (!toggleBtn || !nav) return;

  toggleBtn.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggleBtn.setAttribute('aria-expanded', String(isOpen));
  });
}

function initStarBadgeInHeader() {
  const nav = document.querySelector('.main-nav, .nav-links');
  if (!nav || document.getElementById('header-star-counter')) return;

  const completed = getCompletedLessons();
  const starBadge = document.createElement('div');
  starBadge.id = 'header-star-counter';
  starBadge.className = 'star-counter-pill';
  starBadge.title = 'Số bài học em đã chinh phục!';
  starBadge.innerHTML = `⭐ <span>${completed.length}/17 Sao</span>`;
  nav.appendChild(starBadge);
}

function updateStarBadgeCount() {
  const el = document.querySelector('#header-star-counter span');
  if (el) {
    const completed = getCompletedLessons();
    el.textContent = `${completed.length}/17 Sao`;
  }
}

function initCurriculumCatalog() {
  const container = document.getElementById('curriculum-catalog') || document.getElementById('curriculum-root');
  if (!container) return;

  const searchInput = document.getElementById('lesson-search');
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
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeStrand = btn.getAttribute('data-strand-filter') || btn.getAttribute('data-filter') || 'ALL';
      renderCatalog();
    });
  });

  renderCatalog();
}

/**
 * Tự động làm đẹp 17 trang bài học cho học sinh lớp 6:
 * - Gắn sticker biểu tượng vào các tiêu đề hoạt động
 * - Thêm Thanh Tên Lửa Hành Trình và nút Nhận Sao cuối bài
 * - Chuyển các hộp đen placeholder cũ thành hộp Bí Kíp Ghi Nhớ sáng sủa
 */
function sanitizeAndDecorateLessonPage() {
  // 1. Bỏ dòng lặp "1. Hoạt động 1" thừa
  document.querySelectorAll('h2, h3, h4, p, div, span').forEach(el => {
    if (el.children.length === 0 && /^\s*\d+\.\s*Hoạt động\s*\d+\s*$/i.test(el.textContent)) {
      el.style.display = 'none';
    }
  });

  // 2. Biến các khung đen placeholder cũ thành hộp Bí Kíp Ghi Nhớ sáng sủa
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

  // 3. Tự động gắn Sticker vào tiêu đề h2 trong bài học nếu chưa có emoji
  const lessonMain = document.querySelector('.lesson-content, .lesson-main');
  if (!lessonMain) return;

  lessonMain.querySelectorAll('h2').forEach((h2, idx) => {
    const t = h2.textContent.trim();
    if (/^[\u{1F300}-\u{1FAFF}]/u.test(t)) return; // Đã có emoji
    if (/mục tiêu|yêu cầu/i.test(t)) h2.innerHTML = `🎯 ${h2.innerHTML}`;
    else if (/khởi động/i.test(t)) h2.innerHTML = `🚀 ${h2.innerHTML}`;
    else if (/khám phá|kiến thức|hoạt động/i.test(t)) h2.innerHTML = `💡 ${h2.innerHTML}`;
    else if (/luyện tập|trò chơi/i.test(t)) h2.innerHTML = `🎮 ${h2.innerHTML}`;
    else if (/vận dụng|thực hành/i.test(t)) h2.innerHTML = `🌟 ${h2.innerHTML}`;
    else if (/ghi nhớ|tóm tắt|tổng kết/i.test(t)) h2.innerHTML = `📌 ${h2.innerHTML}`;
    else h2.innerHTML = `✨ ${h2.innerHTML}`;
  });

  // 4. Xác định số thứ tự bài học hiện tại từ URL (ví dụ bai-1-... -> 1)
  const match = window.location.pathname.match(/bai-(\d+)-/i);
  const currentLessonNum = match ? parseInt(match[1], 10) : null;

  // 5. Chèn Thanh Tên Lửa Hành Trình ở đầu bài học
  if (!document.querySelector('.kid-quest-bar')) {
    const questBar = document.createElement('div');
    questBar.className = 'kid-quest-bar';
    questBar.innerHTML = `
      <div class="kid-quest-info">
        <span style="font-size:1.5rem;">🚀</span>
        <span>Hành trình khám phá bài học của em:</span>
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

  // 6. Chèn Thẻ Nhận Sao Hoàn Thành Bài Học ở cuối bài
  if (currentLessonNum && !document.querySelector('.kid-reward-card')) {
    const completed = getCompletedLessons();
    const isClaimed = completed.includes(currentLessonNum);

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

    const pagination = lessonMain.querySelector('.lesson-pagination, .lesson-nav-footer');
    if (pagination) {
      lessonMain.insertBefore(rewardCard, pagination);
    } else {
      lessonMain.appendChild(rewardCard);
    }

    const btn = rewardCard.querySelector('#claim-star-btn');
    btn.addEventListener('click', () => {
      toggleLessonComplete(currentLessonNum);
      btn.classList.add('claimed');
      btn.innerHTML = '⭐ Tuyệt vời! Em đã chinh phục Bài ' + currentLessonNum + '!';
      updateStarBadgeCount();
      launchConfetti();
    });
  }
}

function initScrollSpySidebar() {
  const tocLinks = document.querySelectorAll('.toc-link, .sidebar-nav a');
  if (tocLinks.length === 0) return;

  const sections = [];
  tocLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href && href.startsWith('#')) {
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
