/* ============================================================
   Симаков В.Ю. — скрипты сайта (v2.0)
   ============================================================ */

/**
 * Инициализация иконок Lucide
 * Используем селектор для обновления только необходимых элементов, если это возможно
 */
function initIcons(container = document) {
    if (typeof lucide !== 'undefined') {
        lucide.createIcons({
            attrs: {
                class: 'lucide-icon'
            },
            nameAttr: 'data-lucide'
        });
    }
}

// Первичная инициализация
document.addEventListener('DOMContentLoaded', () => initIcons());

/**
 * Данные прайс-листа
 * Оставлены в JS-файле для лучшей индексации поисковыми роботами (SEO)
 */
const pricingData = [
    {
        category: 'Судебные приказы и срочные меры',
        items: [
            { name: 'Возражение на судебный приказ', price: '1 500 ₽' },
            { name: 'Заявление об отмене судебного приказа', price: '1 500 ₽' },
            { name: 'Заявление о разблокировке счёта (115-ФЗ)', price: '2 500 ₽' },
            { name: 'Жалоба в ЦБ / межведомственную комиссию', price: '2 000 ₽' }
        ]
    },
    {
        category: 'Семейное право',
        items: [
            { name: 'Исковое о расторжении брака', price: '2 000 ₽' },
            { name: 'Исковое о взыскании алиментов', price: '2 000 ₽' },
            { name: 'Соглашение об уплате алиментов', price: '2 500 ₽' },
            { name: 'Исковое об определении места жительства ребёнка', price: '3 000 ₽' },
            { name: 'Письменная консультация по семейному спору', price: '800 ₽' }
        ]
    },
    {
        category: 'ДТП и автоправо',
        items: [
            { name: 'Претензия в страховую по ОСАГО / КАСКО', price: '2 000 ₽' },
            { name: 'Исковое к виновнику ДТП', price: '2 500 ₽' },
            { name: 'Жалоба в ГИБДД / на отказ в выплате', price: '1 800 ₽' },
            { name: 'Письменная консультация по ДТП', price: '800 ₽' }
        ]
    },
    {
        category: 'Защита прав потребителей',
        items: [
            { name: 'Претензия продавцу / исполнителю', price: '1 500 ₽' },
            { name: 'Исковое о возврате денег / расторжении договора', price: '2 000 ₽' },
            { name: 'Жалоба в Роспотребнадзор', price: '1 500 ₽' },
            { name: 'Письменная консультация', price: '800 ₽' }
        ]
    },
    {
        category: 'Трудовые споры',
        items: [
            { name: 'Жалоба на незаконное увольнение', price: '2 000 ₽' },
            { name: 'Исковое о восстановлении на работе', price: '3 000 ₽' },
            { name: 'Исковое о взыскании зарплаты / компенсаций', price: '2 500 ₽' },
            { name: 'Письменная консультация по трудовому спору', price: '800 ₽' }
        ]
    },
    {
        category: 'Наследство и недвижимость',
        items: [
            { name: 'Исковое о признании права на наследство', price: '3 500 ₽' },
            { name: 'Заявление о восстановлении срока принятия наследства', price: '2 500 ₽' },
            { name: 'Договор купли-продажи / дарения (проект)', price: '3 000 ₽' },
            { name: 'Письменная консультация', price: '1 000 ₽' }
        ]
    },
    {
        category: 'Договоры и соглашения',
        items: [
            { name: 'Договор оказания услуг / подряда', price: '3 000 ₽' },
            { name: 'Договор займа / расписка', price: '1 500 ₽' },
            { name: 'Соглашение о расторжении / доп. соглашение', price: '2 000 ₽' },
            { name: 'Претензия по договору', price: '1 800 ₽' }
        ]
    },
    {
        category: 'Исполнительное производство',
        items: [
            { name: 'Заявление судебному приставу', price: '1 300 ₽' },
            { name: 'Жалоба на действия / бездействие пристава', price: '1 800 ₽' },
            { name: 'Заявление об отложении / рассрочке исполнения', price: '1 500 ₽' },
            { name: 'Письменная консультация', price: '800 ₽' }
        ]
    },
    {
        category: 'Жилищное право и ЖКХ',
        items: [
            { name: 'Претензия управляющей компании', price: '1 500 ₽' },
            { name: 'Исковое о перерасчёте / взыскании с УК', price: '2 000 ₽' },
            { name: 'Исковое о выселении / вселении', price: '3 000 ₽' },
            { name: 'Письменная консультация', price: '800 ₽' }
        ]
    },
    {
        category: 'Гражданские споры',
        items: [
            { name: 'Исковое заявление (общее)', price: '2 000 ₽' },
            { name: 'Возражение / отзыв на иск', price: '2 000 ₽' },
            { name: 'Апелляционная / кассационная жалоба', price: '4 000 ₽' },
            { name: 'Письменная консультация', price: '800 ₽' }
        ]
    },
    {
        category: 'Административное право',
        items: [
            { name: 'Жалоба на постановление об административном правонарушении', price: '2 000 ₽' },
            { name: 'Заявление в госорган', price: '1 500 ₽' },
            { name: 'Письменная консультация', price: '800 ₽' }
        ]
    },
    {
        category: 'Письменные консультации',
        items: [
            { name: 'Краткая письменная консультация', price: '800 ₽' },
            { name: 'Развёрнутая консультация с анализом документов', price: '1 500 ₽' },
            { name: 'Правовое заключение', price: '3 000 ₽' }
        ]
    }
];

/**
 * Рендеринг прайс-листа с фильтрацией
 */
function renderPricing(filter = '') {
    const grid = document.getElementById('pricingGrid');
    if (!grid) return;

    const q = filter.toLowerCase().trim();
    const filtered = pricingData.filter(p =>
        p.category.toLowerCase().includes(q) ||
        p.items.some(i => i.name.toLowerCase().includes(q))
    );

    if (filtered.length === 0) {
        grid.innerHTML = `
            <div class="col-span-full text-center text-gray-500 py-12 fade-in visible">
                Ничего не найдено по вашему запросу. Попробуйте другое слово или оставьте заявку.
            </div>`;
        return;
    }

    grid.innerHTML = filtered.map(item => `
        <div class="card-dark rounded-2xl p-6 flex flex-col justify-between min-w-0 fade-in visible">
            <div class="min-w-0">
                <h3 class="text-lg font-bold text-white mb-4 pb-3 border-b border-[#c9a96e]/20 break-words">${item.category}</h3>
                <ul class="space-y-3 text-sm text-gray-300">
                    ${item.items.map(i => `
                        <li class="flex justify-between items-start gap-3">
                            <span class="min-w-0 break-words leading-snug">${i.name}</span>
                            <span class="font-bold text-[#c9a96e] whitespace-nowrap flex-shrink-0">${i.price}</span>
                        </li>
                    `).join('')}
                </ul>
            </div>
            <a href="#contact" class="mt-6 block text-center border border-[#c9a96e]/30 hover:bg-[#c9a96e] hover:text-black text-[#c9a96e] py-2.5 rounded-xl font-medium transition text-sm">Заказать</a>
        </div>
    `).join('');

    // Инициализируем иконки только если они есть в новом контенте
    initIcons(grid);
}

/**
 * Вспомогательная функция для задержки (Debounce)
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Поиск по прайсу с задержкой 300мс
const pricingSearch = document.getElementById('pricingSearch');
if (pricingSearch) {
    const handleSearch = debounce((e) => renderPricing(e.target.value), 300);
    pricingSearch.addEventListener('input', handleSearch);
}

/**
 * Мобильное меню
 */
const menuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
if (menuBtn && mobileMenu) {
    const toggleMenu = (show) => {
        const isHidden = show !== undefined ? !show : !mobileMenu.classList.contains('hidden');
        mobileMenu.classList.toggle('hidden', !isHidden);
        menuBtn.setAttribute('aria-expanded', String(isHidden));
    };

    menuBtn.addEventListener('click', () => toggleMenu());
    
    // Закрытие при клике на ссылку
    mobileMenu.addEventListener('click', (e) => {
        if (e.target.closest('.mobile-link')) toggleMenu(false);
    });
}

/**
 * Управление модальными окнами
 */
const modalLogic = {
    open(id) {
        const el = document.getElementById(id);
        if (!el) return;
        el.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        initIcons(el);
    },
    close(id) {
        const el = document.getElementById(id);
        if (!el) return;
        el.classList.add('hidden');
        // Проверяем, нет ли других открытых модалок перед включением скролла
        const otherOpen = document.querySelectorAll('.modal:not(.hidden)').length > 0;
        if (!otherOpen) document.body.style.overflow = '';
    },
    closeAll() {
        document.querySelectorAll('[id$="Modal"]').forEach(modal => {
            if (!modal.classList.contains('hidden')) this.close(modal.id);
        });
    }
};

// Экспортируем в window для вызова из HTML
window.openModal = modalLogic.open;
window.closeModal = modalLogic.close;

// Закрытие по клику на оверлей
document.querySelectorAll('[id$="Modal"]').forEach(modal => {
    modal.addEventListener('click', (e) => {
        if (e.target === e.currentTarget) modalLogic.close(modal.id);
    });
});

// Закрытие по ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') modalLogic.closeAll();
});

/**
 * Уведомления (Toast)
 */
function showToast(message, type = 'success') {
    const container = document.getElementById('toastContainer');
    if (!container) return;
    
    const toast = document.createElement('div');
    toast.className = `toast ${type === 'success' ? 'bg-green-600' : 'bg-red-600'} text-white px-5 py-4 rounded-xl shadow-xl flex items-center gap-3 w-full sm:min-w-[300px] sm:w-auto animate-fade-in`;
    toast.innerHTML = `
        <i data-lucide="${type === 'success' ? 'check-circle' : 'x-circle'}" class="w-5 h-5 flex-shrink-0"></i>
        <span class="font-medium text-sm">${message}</span>
    `;
    
    container.appendChild(toast);
    initIcons(toast);
    
    setTimeout(() => {
        toast.classList.add('opacity-0', 'transition-opacity', 'duration-500');
        setTimeout(() => toast.remove(), 500);
    }, 4000);
}

/**
 * Обработка формы (Formspree)
 */
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mjgnpwyr';
const leadForm = document.getElementById('leadForm');
const submitBtn = document.getElementById('submitBtn');

if (leadForm && submitBtn) {
    leadForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Базовая валидация
        const phone = leadForm.querySelector('[name="phone"]')?.value;
        if (phone && phone.replace(/\D/g, '').length < 10) {
            showToast('Пожалуйста, введите корректный номер телефона', 'error');
            return;
        }

        submitBtn.disabled = true;
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Отправка...';
        
        try {
            const response = await fetch(FORMSPREE_ENDPOINT, {
                method: 'POST',
                body: new FormData(leadForm),
                headers: { 'Accept': 'application/json' }
            });
            
            if (response.ok) {
                modalLogic.open('successModal');
                leadForm.reset();
            } else {
                showToast('Ошибка сервера. Попробуйте позже или напишите в Telegram.', 'error');
            }
        } catch (error) {
            showToast('Ошибка сети. Проверьте интернет-соединение.', 'error');
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
        }
    });
}

/**
 * Анимации появления (Intersection Observer)
 */
const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            fadeObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });

document.querySelectorAll('.fade-in').forEach(el => fadeObserver.observe(el));

/**
 * Навигация и кнопка "Вверх"
 */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');
const scrollTopBtn = document.getElementById('scrollTopBtn');

const handleScroll = () => {
    let current = '';
    const scrollPos = window.scrollY + 150;

    sections.forEach(section => {
        if (scrollPos >= section.offsetTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });

    if (scrollTopBtn) {
        scrollTopBtn.classList.toggle('visible', window.scrollY > 600);
    }
};

window.addEventListener('scroll', handleScroll, { passive: true });

if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Инициализация прайса при загрузке
renderPricing();

/**
 * Service Worker
 */
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').catch(() => {});
    });
}
