document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Project initialized');

    // ==================== МОБИЛЬНОЕ МЕНЮ ====================
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.page-header__nav');

    if (menuBtn && nav) {
        menuBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            nav.classList.toggle('mobile-menu-open');
            this.classList.toggle('active');
            console.log('Menu toggled');
        });

        // Закрытие при клике на ссылку
        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                nav.classList.remove('mobile-menu-open');
                menuBtn.classList.remove('active');
            });
        });

        // Закрытие при клике вне
        document.addEventListener('click', function(e) {
            if (!nav.contains(e.target) && !menuBtn.contains(e.target)) {
                nav.classList.remove('mobile-menu-open');
                menuBtn.classList.remove('active');
            }
        });
    }

    // ==================== МОДАЛЬНОЕ ОКНО ====================
    const modal = document.getElementById('eventPP');
    const openBtns = document.querySelectorAll('[data-open-modal], .btn--red');
    const closeBtns = document.querySelectorAll('.pp__x-btn, .form__close-btn');

    openBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            if (modal) {
                document.body.classList.add('show-event-popup');
                console.log('Modal opened');
            }
        });
    });

    closeBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            document.body.classList.remove('show-event-popup');
        });
    });

    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                document.body.classList.remove('show-event-popup');
            }
        });
    }

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            document.body.classList.remove('show-event-popup');
        }
    });

    // ==================== ПЛАВНЫЙ СКРОЛЛ ====================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#' || href.length < 2) return;

            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const headerOffset = 147;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // ==================== МАСКА ТЕЛЕФОНА ====================
    const phoneInput = document.querySelector('input[name="phone"]');
    if (phoneInput) {
        phoneInput.addEventListener('input', function(e) {
            let x = e.target.value.replace(/\D/g, '').match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
            if (!x[2]) { e.target.value = x[1] ? '+7' : ''; return; }
            e.target.value = !x[3] ? '+7 (' + x[2] : '+7 (' + x[2] + ') ' + x[3] + (x[4] ? '-' + x[4] : '') + (x[5] ? '-' + x[5] : '');
        });
    }

    // ==================== БРОНИРОВАНИЕ СТОЛОВ ====================
    const tablesMap = document.getElementById('tablesMap');
    if (tablesMap) {
        const tablesData = [
            { id: 1, x: 10, y: 10, price: 1000, status: 'free', img: 'assets/images/Группа 1.png', w: 80, h: 60 },
            { id: 2, x: 30, y: 10, price: 1500, status: 'busy', img: 'assets/images/Группа 2.png', w: 80, h: 60 },
            { id: 3, x: 50, y: 10, price: 1000, status: 'free', img: 'assets/images/Группа 4.png', w: 80, h: 60 },
            { id: 4, x: 70, y: 10, price: 2000, status: 'free', img: 'assets/images/Группа 6.png', w: 100, h: 80 },
            { id: 5, x: 10, y: 50, price: 1500, status: 'free', img: 'assets/images/Группа 8.png', w: 80, h: 60 },
            { id: 6, x: 30, y: 50, price: 1000, status: 'free', img: 'assets/images/Группа 10.png', w: 80, h: 60 },
            { id: 7, x: 50, y: 50, price: 1500, status: 'busy', img: 'assets/images/Группа 12.png', w: 80, h: 60 },
            { id: 8, x: 70, y: 50, price: 1000, status: 'free', img: 'assets/images/Группа 14.png', w: 80, h: 60 },
            { id: 9, x: 20, y: 80, price: 2500, status: 'free', img: 'assets/images/Группа 16.png', w: 120, h: 80 },
            { id: 10, x: 60, y: 80, price: 2500, status: 'free', img: 'assets/images/Группа 18.png', w: 120, h: 80 },
            { id: 'dance', x: 50, y: 50, price: 0, status: 'busy', img: '', w: 150, h: 150, isDance: true }
        ];

        let selectedTables = [];
        const countEl = document.getElementById('tablesCount');
        const priceEl = document.getElementById('totalPrice');

        tablesData.forEach(table => {
            const el = document.createElement('div');
            el.className = `table-item ${table.status}`;
            el.style.left = table.x + '%';
            el.style.top = table.y + '%';
            el.style.width = table.w + 'px';
            el.style.height = table.h + 'px';
            el.style.transform = 'translate(-50%, -50%)';

            if (table.img) {
                el.style.backgroundImage = `url('${table.img}')`;
                el.style.backgroundSize = 'contain';
                el.style.backgroundRepeat = 'no-repeat';
                el.style.backgroundPosition = 'center';
            } else if (table.isDance) {
                el.style.backgroundColor = '#1f1e1e';
                el.style.color = '#fff';
                el.style.borderRadius = '50%';
                el.textContent = 'Танцпол';
                el.style.display = 'flex';
                el.style.alignItems = 'center';
                el.style.justifyContent = 'center';
                el.style.fontSize = '16px';
            } else {
                el.textContent = table.id;
                el.style.backgroundColor = '#fff';
                el.style.border = '2px solid #1f1e1e';
                el.style.display = 'flex';
                el.style.alignItems = 'center';
                el.style.justifyContent = 'center';
                el.style.fontWeight = 'bold';
            }

            if (table.status === 'free') {
                el.addEventListener('click', function() {
                    if (this.classList.contains('selected')) {
                        this.classList.remove('selected');
                        this.classList.add('free');
                        selectedTables = selectedTables.filter(t => t.id !== table.id);
                    } else {
                        this.classList.remove('free');
                        this.classList.add('selected');
                        selectedTables.push(table);
                    }
                    updateOrder();
                });
            }

            tablesMap.appendChild(el);
        });

        function updateOrder() {
            const count = selectedTables.length;
            const total = selectedTables.reduce((sum, t) => sum + t.price, 0);
            if (countEl) countEl.textContent = count;
            if (priceEl) priceEl.textContent = total.toLocaleString() + ' ₽';
        }
    }

    console.log('✅ All systems operational');
});
