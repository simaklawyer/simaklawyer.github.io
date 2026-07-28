/* ============================================================
   Симаков В.Ю. — скрипты сайта (v2.1)
   ============================================================ */

function initIcons(container = document) {
    if (typeof lucide !== 'undefined') {
        lucide.createIcons({
            attrs: { class: 'lucide-icon' },
            nameAttr: 'data-lucide'
        });
    }
}

document.addEventListener('DOMContentLoaded', () => initIcons());

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

function renderPricing(filter = '') {
    const grid = document.getElementById('pricingGrid');
    if (!grid) return;

    const q = filter.toLowerCase().trim();
    const filtered = pricingData.filter(p =>
        p.category.toLowerCase().includes(q) ||
        p.items.some(i => i.name.toLowerCase().includes(q))
    );

    if (filtered.length === 0) {
        grid.innerHTML = '<div class="col-span-full text-center text-gray-500 py-12">Ничего не найдено. Попробуйте другое слово или оставьте заявку.</div>';
        return;
    }

    grid.innerHTML = filtered.map(item => `
        <div class="card-dark rounded-2xl p-6 flex flex-col justify-between min-w-0">
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
            <a href="#contact"
               onclick="selectService('${item.category.replace(/'/g, "\\'")}')"
               class="mt-6 block text-center border border-[#c9a96e]/30 hover:bg-[#c9a96e] hover:text-black text-[#c9a96e] py-2.5 rounded-xl font-medium transition text-sm">
               Заказать
            </a>
        </div>
    `).join('');
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), wait);
    };
}

const pricingSearch = document.getElementById('pricingSearch');
if (pricingSearch) {
    pricingSearch.addEventListener('input', debounce((e) => renderPricing(e.target.value), 300));
}

const menuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
        const open = mobileMenu.classList.toggle('hidden') === false;
        menuBtn.setAttribute('aria-expanded', String(open));
    });
    mobileMenu.addEventListener('click', (e) => {
        if (e.target.closest('.mobile-link')) {
            mobileMenu.classList.add('hidden');
            menuBtn.setAttribute('aria-expanded', 'false');
        }
    });
}

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
        document.body.style.overflow = '';
    },
    closeAll() {
        document.querySelectorAll('[id$="Modal"]').forEach(modal => {
            if (!modal.classList.contains('hidden')) this.close(modal.id);
        });
    }
};

window.openModal = modalLogic.open;
window.closeModal = modalLogic.close;

document.querySelectorAll('[id$="Modal"]').forEach(modal => {
    modal.addEventListener('click', (e) => {
        if (e.target === e.currentTarget) modalLogic.close(modal.id);
    });
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') modalLogic.closeAll();
});

function showToast(message, type = 'success') {
    const container = document.getElementById('toastContainer');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = (type === 'success' ? 'bg-green-600' : 'bg-red-600') +
        ' text-white px-5 py-4 rounded-xl shadow-xl flex items-center gap-3 w-full sm:min-w-[300px] sm:w-auto';
    toast.innerHTML = '<span class="font-medium text-sm">' + message + '</span>';
    container.appendChild(toast);
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transition = 'opacity .5s';
        setTimeout(() => toast.remove(), 500);
    }, 4000);
}

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mjgnpwyr';
const leadForm = document.getElementById('leadForm');
const submitBtn = document.getElementById('submitBtn');

if (leadForm && submitBtn) {
    leadForm.addEventListener('submit', async (e) => {
        e.preventDefault();
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

/* Fade-in: сразу показать всё видимое + observer для остального */
function revealFadeIns() {
    document.querySelectorAll('.fade-in').forEach(el => {
        el.classList.add('visible');
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', revealFadeIns);
} else {
    revealFadeIns();
}

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            fadeObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.05, rootMargin: '50px' });

document.querySelectorAll('.fade-in').forEach(el => fadeObserver.observe(el));

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');
const scrollTopBtn = document.getElementById('scrollTopBtn');

window.addEventListener('scroll', () => {
    let current = '';
    const scrollPos = window.scrollY + 150;
    sections.forEach(section => {
        if (scrollPos >= section.offsetTop) current = section.getAttribute('id');
    });
    navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === '#' + current);
    });
    if (scrollTopBtn) {
        scrollTopBtn.classList.toggle('visible', window.scrollY > 600);
    }
}, { passive: true });

if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

function selectService(category) {
    const serviceSelect = document.getElementById('clientService');
    const messageField = document.getElementById('clientMsg');
    if (serviceSelect) {
        for (let i = 0; i < serviceSelect.options.length; i++) {
            if (serviceSelect.options[i].text.includes(category.split(' ')[0]) ||
                category.includes(serviceSelect.options[i].text)) {
                serviceSelect.selectedIndex = i;
                break;
            }
        }
    }
    if (messageField) {
        messageField.value = 'Здравствуйте! Интересует услуга из категории: ' + category + '. ';
        messageField.focus();
    }
}
window.selectService = selectService;

renderPricing();

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').catch(() => {});
    });
}
