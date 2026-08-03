document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.topic-card');
  const pageShell = document.querySelector('.page-shell');

  if (!pageShell) return;

  document.querySelectorAll('.placeholder-banner, .sidebar-toggle, .left-sidebar').forEach((node) => node.remove());

  const lessonGroups = [
    {
      title: 'Chủ đề 1. Máy tính và cộng đồng',
      lessons: [
        { label: 'Bài 1. Thông tin và dữ liệu', href: 'bai-1-thong-tin-va-du-lieu.html' },
        { label: 'Bài 2. Xử lí thông tin', href: 'bai-2-xu-li-thong-tin.html' },
        { label: 'Bài 3. Thông tin trong máy tính', href: 'bai-3-thong-tin-trong-may-tinh.html' }
      ]
    },
    {
      title: 'Chủ đề 2. Mạng máy tính và Internet',
      lessons: [
        { label: 'Bài 4. Mạng máy tính', href: 'bai-4-mang-may-tinh.html' },
        { label: 'Bài 5. Internet', href: 'bai-5-internet.html' }
      ]
    },
    {
      title: 'Chủ đề 3. Tổ chức lưu trữ, tìm kiếm và trao đổi thông tin',
      lessons: [
        { label: 'Bài 6. Mạng thông tin toàn cầu', href: 'bai-6-mang-thong-tin-toan-cau.html' },
        { label: 'Bài 7. Tìm kiếm thông tin trên Internet', href: 'bai-7-tim-kiem-thong-tin-tren-internet.html' },
        { label: 'Bài 8. Thư điện tử', href: 'bai-8-thu-dien-tu.html' }
      ]
    },
    {
      title: 'Chủ đề 4. Đạo đức, pháp luật và văn hoá trong môi trường số',
      lessons: [
        { label: 'Bài 9. An toàn thông tin trên Internet', href: 'bai-9-an-toan-thong-tin-tren-internet.html' }
      ]
    },
    {
      title: 'Chủ đề 5. Ứng dụng tin học',
      lessons: [
        { label: 'Bài 10. Sơ đồ tư duy', href: 'bai-10-so-do-tu-duy.html' },
        { label: 'Bài 11. Định dạng văn bản', href: 'bai-11-dinh-dang-van-ban.html' },
        { label: 'Bài 12. Trình bày thông tin ở dạng bảng', href: 'bai-12-trinh-bay-thong-tin-o-dang-bang.html' },
        { label: 'Bài 13. Tìm kiếm và thay thế', href: 'bai-13-tim-kiem-va-thay-the.html' },
        { label: 'Bài 14. Thực hành tổng hợp: Hoàn thiện sổ lưu niệm', href: 'bai-14-thuc-hanh-tong-hop-hoan-thien-so-luu-niem.html' }
      ]
    },
    {
      title: 'Chủ đề 6. Giải quyết vấn đề với sự trợ giúp của máy tính',
      lessons: [
        { label: 'Bài 15. Thuật toán', href: 'bai-15-thuat-toan.html' },
        { label: 'Bài 16. Các cấu trúc điều khiển', href: 'bai-16-cac-cau-truc-dieu-khien.html' },
        { label: 'Bài 17. Chương trình máy tính', href: 'bai-17-chuong-trinh-may-tinh.html' },
        { label: 'Bảng giải thích thuật ngữ', href: 'dictionary.html' }
      ]
    }
  ];

  const header = document.createElement('header');
  header.className = 'site-header';
  header.innerHTML = `
    <div class="site-header__inner">
      <a class="site-brand" href="index.html" aria-label="Trang chủ Tin học 6">
        <span class="site-brand__logo" aria-hidden="true">
          <img class="site-brand__logo-img" src="assets/images/Logo%20HCMUE.svg" alt="" />
        </span>
        <span class="site-brand__text">Hỗ trợ Tin học Lớp 6</span>
      </a>
      <nav class="site-nav" aria-label="Điều hướng nhanh">
        <a class="site-nav__link" href="dictionary.html">Từ điển</a>
        <a class="site-nav__link" href="crossword.html">Ô chữ</a>
        <a class="site-nav__link" href="algorithm.html">Thuật toán</a>
      </nav>
      <div class="site-header__actions">
        <div class="site-user">
          <button class="site-action site-action--ghost" id="userMenuToggle" type="button" aria-controls="userMenu" aria-expanded="false">
            <span class="site-action__icon" aria-hidden="true">👤</span>
            <span class="site-action__label">Tài khoản</span>
          </button>
          <div class="site-user__menu" id="userMenu" hidden>
            <button class="site-user__item" type="button" id="loginButton">Đăng nhập</button>
            <button class="site-user__item" type="button" id="themeToggle" aria-pressed="false">Dark Mode</button>
          </div>
        </div>
        <button class="site-action site-action--menu" id="lessonMenuToggle" type="button" aria-controls="lessonDrawer" aria-expanded="false">
          <span class="site-action__icon" aria-hidden="true">☰</span>
          <span class="site-action__label">📚 Danh mục bài học</span>
        </button>
      </div>
    </div>`;

  pageShell.parentElement.insertBefore(header, pageShell);

  const backdrop = document.createElement('div');
  backdrop.className = 'lesson-backdrop';
  backdrop.hidden = true;

  const drawer = document.createElement('aside');
  drawer.className = 'lesson-drawer';
  drawer.id = 'lessonDrawer';
  drawer.hidden = true;
  drawer.innerHTML = `
    <div class="lesson-drawer__header">
      <div>
        <div class="lesson-drawer__eyebrow">Danh mục bài học</div>
        <h2>Chọn nhanh từng bài trong chương trình</h2>
      </div>
      <button class="lesson-drawer__close" type="button" id="lessonMenuClose" aria-label="Đóng menu">×</button>
    </div>
    <a class="lesson-drawer__home" href="index.html">Trang chủ</a>
    <div class="lesson-accordion" id="lessonAccordion"></div>`;

  document.body.append(backdrop, drawer);

  const menuToggle = document.getElementById('lessonMenuToggle');
  const menuClose = document.getElementById('lessonMenuClose');
  const userMenuToggle = document.getElementById('userMenuToggle');
  const userMenu = document.getElementById('userMenu');
  const loginButton = document.getElementById('loginButton');
  const themeToggle = document.getElementById('themeToggle');
  const lessonAccordion = document.getElementById('lessonAccordion');

  if (userMenu) {
    userMenu.hidden = true;
  }

  const themeKey = 'tin-hoc-6-theme';

  const applyTheme = (isDark) => {
    document.body.classList.toggle('theme-dark', isDark);
    themeToggle?.setAttribute('aria-pressed', String(isDark));
    if (themeToggle) {
      themeToggle.textContent = isDark ? 'Light Mode' : 'Dark Mode';
    }
  };

  applyTheme(localStorage.getItem(themeKey) === 'dark');

  lessonGroups.forEach((group, groupIndex) => {
    const section = document.createElement('section');
    section.className = 'lesson-group';

    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'lesson-group__toggle';
    button.setAttribute('aria-expanded', 'false');
    button.setAttribute('aria-controls', `lesson-panel-${groupIndex + 1}`);

    const title = document.createElement('span');
    title.className = 'lesson-group__title';
    title.textContent = group.title;

    const marker = document.createElement('span');
    marker.className = 'lesson-group__marker';
    marker.textContent = '+';
    marker.setAttribute('aria-hidden', 'true');

    button.append(title, marker);

    const panel = document.createElement('div');
    panel.className = 'lesson-group__panel';
    panel.id = `lesson-panel-${groupIndex + 1}`;
    panel.hidden = true;

    group.lessons.forEach((lesson) => {
      const link = document.createElement('a');
      link.href = lesson.href;
      link.textContent = lesson.label;
      panel.append(link);
    });

    button.addEventListener('click', () => {
      const isExpanded = button.getAttribute('aria-expanded') === 'true';
      lessonAccordion.querySelectorAll('.lesson-group__toggle').forEach((otherButton) => {
        if (otherButton !== button) {
          otherButton.setAttribute('aria-expanded', 'false');
          otherButton.querySelector('.lesson-group__marker').textContent = '+';
          const otherPanel = document.getElementById(otherButton.getAttribute('aria-controls'));
          if (otherPanel) otherPanel.hidden = true;
        }
      });

      button.setAttribute('aria-expanded', String(!isExpanded));
      marker.textContent = isExpanded ? '+' : '−';
      panel.hidden = isExpanded;
    });

    panel.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => closeLessonMenu());
    });

    section.append(button, panel);
    lessonAccordion.append(section);
  });

  const openLessonMenu = () => {
    drawer.hidden = false;
    backdrop.hidden = false;
    document.body.classList.add('nav-open');
    menuToggle?.setAttribute('aria-expanded', 'true');
  };

  const closeLessonMenu = () => {
    document.body.classList.remove('nav-open');
    menuToggle?.setAttribute('aria-expanded', 'false');
    backdrop.hidden = true;
    drawer.hidden = true;
  };

  menuToggle?.addEventListener('click', () => {
    const isOpen = document.body.classList.contains('nav-open');
    if (isOpen) {
      closeLessonMenu();
    } else {
      openLessonMenu();
    }
  });

  menuClose?.addEventListener('click', closeLessonMenu);
  backdrop.addEventListener('click', closeLessonMenu);

  userMenuToggle?.addEventListener('click', (event) => {
    event.stopPropagation();
    const isOpen = !userMenu.hidden;
    userMenu.hidden = isOpen;
    userMenuToggle.setAttribute('aria-expanded', String(!isOpen));
  });

  loginButton?.addEventListener('click', () => {
    userMenu.hidden = true;
    userMenuToggle?.setAttribute('aria-expanded', 'false');
    closeLessonMenu();
  });

  themeToggle?.addEventListener('click', () => {
    const isDark = !document.body.classList.contains('theme-dark');
    localStorage.setItem(themeKey, isDark ? 'dark' : 'light');
    applyTheme(isDark);
  });

  document.addEventListener('click', (event) => {
    const clickedUserMenu = userMenu?.contains(event.target);
    const clickedUserToggle = userMenuToggle?.contains(event.target);
    if (!clickedUserMenu && !clickedUserToggle && userMenu && !userMenu.hidden) {
      userMenu.hidden = true;
      userMenuToggle?.setAttribute('aria-expanded', 'false');
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeLessonMenu();
      if (userMenu && !userMenu.hidden) {
        userMenu.hidden = true;
        userMenuToggle?.setAttribute('aria-expanded', 'false');
      }
    }
  });

  cards.forEach((card, index) => {
    card.style.animationDelay = `${index * 90}ms`;
    card.animate(
      [
        { opacity: 0, transform: 'translateY(14px)' },
        { opacity: 1, transform: 'translateY(0)' }
      ],
      {
        duration: 520,
        easing: 'cubic-bezier(0.2, 0.8, 0.2, 1)',
        fill: 'both'
      }
    );
  });
});
