document.addEventListener('DOMContentLoaded', function() {
  // Animação de scroll
  const animateOnScroll = () => {
    document.querySelectorAll('.animate-on-scroll').forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      const screenBottom = window.innerHeight;
      if (sectionTop < screenBottom - 100) {
        section.classList.add('active');
      }
    });
  };

  // Navbar scroll
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    animateOnScroll();
  });

  // Inicializa animações
  animateOnScroll();

  // Inicializa Fancybox para a galeria
  if (typeof Fancybox !== 'undefined') {
    Fancybox.bind("[data-fancybox]", {
      // Aqui você pode adicionar opções personalizadas
      groupAll: true,           // Agrupa todas as imagens em uma única galeria
    Thumbs: {
      type: 'classic',        // Miniaturas clássicas
      autoStart: false,       // Não mostra miniaturas automaticamente
    },
    // Transições e animações
    animated: true,
    showClass: 'f-fadeIn',
    hideClass: 'f-fadeOut',
    transitionEffect: 'slide',
    transitionDuration: 366,
     // Personalização para imagens
    Image: {
      zoom: true,
      click: 'toggleZoom',
      wheel: 'zoom',
      zoomOpacity: 'auto',
    },

    // Textos personalizados (pt-BR)
    l10n: {
      CLOSE: 'Fechar',
      NEXT: 'Próxima',
      PREV: 'Anterior',
      ERROR: 'O conteúdo não pode ser carregado. <br> Tente novamente mais tarde.',
      PLAY_START: 'Iniciar slideshow',
      PLAY_STOP: 'Parar slideshow',
      FULL_SCREEN: 'Tela cheia',
      THUMBS: 'Miniaturas',
      DOWNLOAD: 'Download',
      SHARE: 'Compartilhar',
      ZOOM: 'Zoom'
    },

      Carousel: {
        infinite: true,
      },
      // Aparência e layout
    Toolbar: {
      display: {
        left: ['infobar'],
        middle: ['zoomIn', 'zoomOut', 'toggle1to1', 'rotateCCW', 'rotateCW'],
        right: ['slideshow', 'thumbs', 'close'],
      },
    },
    });
  }

  // Smooth scroll para links internos
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
        
        // Fecha o menu mobile se estiver aberto
        const navbarCollapse = document.querySelector('.navbar-collapse.show');
        if (navbarCollapse) {
          const bsCollapse = new bootstrap.Collapse(navbarCollapse);
          bsCollapse.hide();
        }
      }
    });
  });
});