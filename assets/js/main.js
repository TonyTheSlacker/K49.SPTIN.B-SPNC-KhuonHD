document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.topic-card');
  const sidebarToggle = document.getElementById('sidebarToggle');
  const sidebarClose = document.getElementById('sidebarClose');
  const sidebar = document.getElementById('leftSidebar');
  const accordionTriggers = document.querySelectorAll('[data-accordion-trigger]');

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

  function openSidebar() {
    document.body.classList.add('sidebar-open');
    sidebarToggle?.setAttribute('aria-expanded', 'true');
  }

  function closeSidebar() {
    document.body.classList.remove('sidebar-open');
    sidebarToggle?.setAttribute('aria-expanded', 'false');
  }

  sidebarToggle?.addEventListener('click', () => {
    const isOpen = document.body.classList.contains('sidebar-open');
    if (isOpen) {
      closeSidebar();
    } else {
      openSidebar();
    }
  });

  sidebarClose?.addEventListener('click', closeSidebar);

  document.addEventListener('click', (event) => {
    if (!document.body.classList.contains('sidebar-open')) return;
    const clickedInsideSidebar = sidebar?.contains(event.target);
    const clickedToggle = sidebarToggle?.contains(event.target);

    if (!clickedInsideSidebar && !clickedToggle) {
      closeSidebar();
    }
  });

  accordionTriggers.forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const targetId = trigger.getAttribute('aria-controls');
      const panel = targetId ? document.getElementById(targetId) : null;
      const isExpanded = trigger.getAttribute('aria-expanded') === 'true';

      accordionTriggers.forEach((otherTrigger) => {
        if (otherTrigger !== trigger) {
          otherTrigger.setAttribute('aria-expanded', 'false');
          const otherPanelId = otherTrigger.getAttribute('aria-controls');
          const otherPanel = otherPanelId ? document.getElementById(otherPanelId) : null;
          if (otherPanel) otherPanel.hidden = true;
        }
      });

      trigger.setAttribute('aria-expanded', String(!isExpanded));
      if (panel) panel.hidden = isExpanded;
    });
  });

  sidebar?.querySelectorAll('.sidebar-group__panel a').forEach((link) => {
    link.addEventListener('click', () => {
      if (window.matchMedia('(max-width: 980px)').matches) {
        closeSidebar();
      }
    });
  });

  sidebar?.addEventListener('wheel', (event) => {
    const isScrollable = sidebar.scrollHeight > sidebar.clientHeight;
    if (!isScrollable) return;
    event.stopPropagation();
  }, { passive: true });
});
