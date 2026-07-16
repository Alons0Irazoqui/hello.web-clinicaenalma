/* ENALMA — interacciones: loader, scroll reveal, hero typewriter, contadores, menú móvil, FAQ, WhatsApp. */
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', init);

  function init() {
    setYear();
    initLoader();
    initNavbar();
    initMobileMenu();
    initReveal();
    initHeroTitle();
    initHeroCanvas();
    initMarquee();
    initCounters();
    initFaq();
    initContactForm();
  }

  /* ── Año en footer ─────────────────────────────────────────── */
  function setYear() {
    var y = document.getElementById('year');
    if (y) y.textContent = new Date().getFullYear();
  }

  /* ── Loader ────────────────────────────────────────────────── */
  function initLoader() {
    var loader = document.getElementById('loader');
    if (!loader) return;
    document.body.classList.add('is-loading');
    var fill = loader.querySelector('.loader-bar-fill');
    var start = Date.now();
    var minDisplay = 1800;

    if (fill) requestAnimationFrame(function () { fill.style.width = '92%'; });

    function hide() {
      var elapsed = Date.now() - start;
      var wait = Math.max(minDisplay - elapsed, 0);
      setTimeout(function () {
        if (fill) fill.style.width = '100%';
        setTimeout(function () {
          loader.classList.add('loader-hide');
          document.body.classList.remove('is-loading');
        }, 360);
      }, wait);
    }

    if (document.readyState === 'complete') {
      hide();
    } else {
      window.addEventListener('load', hide);
      setTimeout(hide, 3500); // salvaguarda por si 'load' tarda demasiado
    }
  }

  /* ── Navbar: fondo al hacer scroll ─────────────────────────── */
  function initNavbar() {
    var nav = document.getElementById('navbar');
    if (!nav) return;
    function onScroll() {
      nav.classList.toggle('scrolled', window.scrollY > 40);
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ── Menú móvil ────────────────────────────────────────────── */
  function initMobileMenu() {
    var btn = document.getElementById('hamburger');
    var menu = document.getElementById('mob-menu');
    var backdrop = document.getElementById('menu-backdrop');
    if (!btn || !menu) return;

    function toggle(open) {
      var isOpen = typeof open === 'boolean' ? open : !menu.classList.contains('open');
      menu.classList.toggle('open', isOpen);
      btn.classList.toggle('open', isOpen);
      btn.setAttribute('aria-expanded', String(isOpen));
      if (backdrop) backdrop.classList.toggle('open', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    }

    btn.addEventListener('click', function () { toggle(); });
    if (backdrop) backdrop.addEventListener('click', function () { toggle(false); });
    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { toggle(false); });
    });
  }

  /* ── Scroll reveal ─────────────────────────────────────────── */
  function initReveal() {
    var items = document.querySelectorAll('.reveal');
    if (!items.length) return;

    if (!('IntersectionObserver' in window)) {
      items.forEach(function (el) { el.classList.add('in-view'); });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

    items.forEach(function (el) { observer.observe(el); });
  }

  /* ── Hero: efecto máquina de escribir + cambio de color sobrio ─ */
  function initHeroTitle() {
    var title = document.getElementById('hero-heading');
    if (!title) return;

    var lines = Array.prototype.slice.call(title.querySelectorAll('.line > span'));
    if (!lines.length) return;

    var texts = lines.map(function (el) { return el.textContent; });
    lines.forEach(function (el) { el.textContent = ''; });

    var caret = document.createElement('span');
    caret.className = 'typewriter-caret';
    caret.setAttribute('aria-hidden', 'true');

    var lineIndex = 0, charIndex = 0;
    var typingSpeed = 42;

    function typeNext() {
      if (lineIndex >= lines.length) {
        caret.remove();
        return;
      }
      var el = lines[lineIndex];
      var full = texts[lineIndex];
      var isLast = lineIndex === lines.length - 1;

      if (el.contains(caret) === false) el.appendChild(caret);

      if (charIndex <= full.length) {
        var typed = full.slice(0, charIndex);
        el.innerHTML = '';
        if (isLast) {
          typed.split('').forEach(function (ch, i) {
            var span = document.createElement('span');
            span.className = 'letter color-cycle';
            span.style.animationDelay = (i * 0.09) + 's';
            span.textContent = ch === ' ' ? ' ' : ch;
            el.appendChild(span);
          });
        } else {
          el.appendChild(document.createTextNode(typed));
        }
        el.appendChild(caret);
        charIndex++;
        setTimeout(typeNext, typingSpeed);
      } else {
        lineIndex++;
        charIndex = 0;
        setTimeout(typeNext, 260);
      }
    }

    setTimeout(typeNext, 700);
  }

  /* ── Hero: partículas suaves en canvas ─────────────────────── */
  function initHeroCanvas() {
    var canvas = document.getElementById('hero-canvas');
    if (!canvas || !canvas.getContext) return;
    var ctx = canvas.getContext('2d');
    var particles = [];
    var w, h;
    var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function resize() {
      w = canvas.width = canvas.offsetWidth;
      h = canvas.height = canvas.offsetHeight;
    }

    function createParticles() {
      var count = Math.min(48, Math.floor((w * h) / 26000));
      particles = [];
      for (var i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          r: Math.random() * 2 + 0.6,
          vy: Math.random() * 0.25 + 0.06,
          vx: (Math.random() - 0.5) * 0.12,
          alpha: Math.random() * 0.35 + 0.15,
          hue: Math.random() > 0.5 ? '175,202,232' : '239,235,228'
        });
      }
    }

    function tick() {
      ctx.clearRect(0, 0, w, h);
      particles.forEach(function (p) {
        p.y -= p.vy;
        p.x += p.vx;
        if (p.y < -10) { p.y = h + 10; p.x = Math.random() * w; }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(' + p.hue + ',' + p.alpha + ')';
        ctx.fill();
      });
      if (!reduceMotion) requestAnimationFrame(tick);
    }

    resize();
    createParticles();
    window.addEventListener('resize', function () { resize(); createParticles(); });
    tick();
  }

  /* ── Marquee ───────────────────────────────────────────────── */
  function initMarquee() {
    var el = document.getElementById('marquee');
    if (!el) return;
    var words = [
      'Confidencialidad', 'Contención emocional', 'Acompañamiento profesional',
      'Comunidad terapéutica', 'Esperanza', 'Familia', 'Especialización femenina 11–17',
      'Espacio seguro'
    ];
    var html = '';
    for (var r = 0; r < 2; r++) {
      words.forEach(function (w) {
        html += '<span class="marquee-item"><i class="fa-solid fa-circle"></i>' + w + '</span>';
      });
    }
    el.innerHTML = html;
  }

  /* ── Contadores ────────────────────────────────────────────── */
  function initCounters() {
    var nums = document.querySelectorAll('.stat-num');
    if (!nums.length) return;

    function animate(el) {
      var target = parseInt(el.getAttribute('data-count'), 10) || 0;
      var suffix = el.getAttribute('data-suffix') || '';
      var duration = 1400;
      var start = null;

      function step(ts) {
        if (!start) start = ts;
        var progress = Math.min((ts - start) / duration, 1);
        var eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(eased * target) + suffix;
        if (progress < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    }

    if (!('IntersectionObserver' in window)) {
      nums.forEach(animate);
      return;
    }
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animate(entry.target);
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    nums.forEach(function (el) { obs.observe(el); });
  }

  /* ── FAQ acordeón ──────────────────────────────────────────── */
  function initFaq() {
    var items = document.querySelectorAll('.faq-item');
    if (!items.length) return;
    items.forEach(function (item) {
      var q = item.querySelector('.faq-q');
      var a = item.querySelector('.faq-a');
      if (!q || !a) return;
      q.addEventListener('click', function () {
        var isOpen = item.classList.contains('open');
        items.forEach(function (other) {
          other.classList.remove('open');
          other.querySelector('.faq-a').style.maxHeight = 0;
          other.querySelector('.faq-q').setAttribute('aria-expanded', 'false');
        });
        if (!isOpen) {
          item.classList.add('open');
          a.style.maxHeight = a.scrollHeight + 'px';
          q.setAttribute('aria-expanded', 'true');
        }
      });
    });
  }

  /* ── Formulario de contacto → WhatsApp ─────────────────────── */
  function initContactForm() {
    var form = document.getElementById('wa-form');
    if (!form) return;
    var WA_NUMBER = '526683244417';

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = (document.getElementById('f-name') || {}).value || '';
      var relation = (document.getElementById('f-relation') || {}).value || '';
      var phone = (document.getElementById('f-phone') || {}).value || '';
      var msg = (document.getElementById('f-msg') || {}).value || '';

      var text = 'Hola, me llamo ' + name +
        ' (' + relation + '). Me gustaría solicitar información confidencial sobre Enalma.' +
        (phone ? ' Mi teléfono de contacto es ' + phone + '.' : '') +
        (msg ? ' ' + msg : '');

      var url = 'https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(text);
      window.open(url, '_blank', 'noopener,noreferrer');
    });
  }
})();
