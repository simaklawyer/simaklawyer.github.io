/* ============================================================
   Симаков В.Ю. — скрипты сайта
   ============================================================ */

lucide.createIcons();

// Полная база прайс-листа
const pricingData = [
    { category: 'Авторские и смежные права', items: [{ name: 'Составление документа', price: '2 000 ₽' }] },
    { category: 'Административное право', items: [{ name: 'Составление документа', price: '1 500 ₽' }, { name: 'Консультация', price: '800 ₽' }] },
    { category: 'Арбитраж', items: [{ name: 'Составление документа', price: '3 500 ₽' }] },
    { category: 'Военное право', items: [{ name: 'Составление документа', price: '4 500 ₽' }, { name: 'Консультация', price: '2 000 ₽' }] },
    { category: 'Гражданское право', items: [{ name: 'Составление документа', price: '1 500 ₽' }, { name: 'Консультация', price: '800 ₽' }] },
    { category: 'Договорное право', items: [{ name: 'Составление документа', price: '3 500 ₽' }] },
    { category: 'Жилищное право', items: [{ name: 'Составление документа', price: '1 800 ₽' }] },
    { category: 'ЖКХ', items: [{ name: 'Составление документа', price: '1 800 ₽' }] },
    { category: 'Защита прав потребителей', items: [{ name: 'Составление документа', price: '1 500 ₽' }, { name: 'Консультация', price: '800 ₽' }] },
    { category: 'Земельное право', items: [{ name: 'Составление документа', price: '2 000 ₽' }, { name: 'Консультация', price: '800 ₽' }] },
    { category: 'Интернет и право', items: [{ name: 'Составление документа', price: '2 000 ₽' }, { name: 'Консультация', price: '800 ₽' }] },
    { category: 'Ипотека', items: [{ name: 'Консультация', price: '800 ₽' }] },
    { category: 'Исполнительное производство', items: [{ name: 'Составление документа', price: '1 300 ₽' }, { name: 'Консультация', price: '800 ₽' }] },
    { category: 'Конституционное право', items: [{ name: 'Составление документа', price: '2 000 ₽' }] },
    { category: 'Корпоративное право', items: [{ name: 'Составление', price: '3 000 ₽' }] },
    { category: 'Медицинское право', items: [{ name: 'Составление документа', price: '2 000 ₽' }] },
    { category: 'Миграционное право', items: [{ name: 'Составление документа', price: '1 500 ₽' }] },
    { category: 'Налоговое право', items: [{ name: 'Составление документа', price: '3 500 ₽' }] },
    { category: 'Наследственное право', items: [{ name: 'Составление документа', price: '3 000 ₽' }] },
    { category: 'Образование', items: [{ name: 'Составление документа', price: '2 000 ₽' }] },
    { category: 'Общие вопросы', items: [{ name: 'Консультация', price: '800 ₽' }] },
    { category: 'Семейное право', items: [{ name: 'Составление документа', price: '2 000 ₽' }, { name: 'Консультация', price: '800 ₽' }] },
    { category: 'Судопроизводство', items: [{ name: 'Составление документа', price: '5 000 ₽' }] },
    { category: 'Таможенное право', items: [{ name: 'Составление документа', price: '3 000 ₽' }] },
    { category: 'Трудовое право', items: [{ name: 'Составление документа', price: '1 500 ₽' }, { name: 'Консультация', price: '800 ₽' }] },
    { category: 'Уголовное право', items: [{ name: 'Составление документа', price: '2 000 ₽' }, { name: 'Консультация', price: '800 ₽' }] }
];

function renderPricing(filter = '') {
    const grid = document.getElementById('pricingGrid');
    const filtered = pricingData.filter(p =>
        p.category.toLowerCase().includes(filter.toLowerCase()) ||
        p.items.some(i => i.name.toLowerCase().includes(filter.toLowerCase()))
    );

    if (filtered.length === 0) {
        grid.innerHTML = '<div class="col-span-full text-center text-gray-500 py-12">Ничего не найдено по вашему запросу</div>';
        return;
    }

    grid.innerHTML = filtered.map(item => `
        <div class="card-dark rounded-2xl p-6 flex flex-col justify-between min-w-0">
            <div class="min-w-0">
                <h3 class="text-lg font-bold text-white mb-4 pb-3 border-b border-[#c9a96e]/20 break-words">${item.category}</h3>
                <ul class="space-y-3 text-sm text-gray-300">
                    ${item.items.map(i => `
                        <li class="flex justify-between items-center gap-2">
                            <span class="min-w-0 break-words">${i.name}</span>
                            <span class="font-bold text-[#c9a96e] whitespace-nowrap flex-shrink-0">${i.price}</span>
                        </li>
                    `).join('')}
                </ul>
            </div>
            <a href="#contact" class="mt-6 block text-center border border-[#c9a96e]/30 hover:bg-[#c9a96e] hover:text-black text-[#c9a96e] py-2.5 rounded-xl font-medium transition text-sm">
                Заказать
            </a>
        </div>
    `).join('');

    lucide.createIcons();
}

document.getElementById('pricingSearch').addEventListener('input', (e) => {
    renderPricing(e.target.value);
});

// Мобильное меню
const menuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
menuBtn.addEventListener('click', () => {
    const isHidden = mobileMenu.classList.toggle('hidden');
    menuBtn.setAttribute('aria-expanded', String(!isHidden));
});
document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        menuBtn.setAttribute('aria-expanded', 'false');
    });
});

// Модальные окна
function openModal(id) {
    document.getElementById(id).classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    lucide.createIcons();
}
function closeModal(id) {
    document.getElementById(id).classList.add('hidden');
    document.body.style.overflow = '';
}
// Закрытие по клику на затемнённый фон
['pdModal', 'policyModal', 'successModal'].forEach(id => {
    document.getElementById(id).addEventListener('click', (e) => {
        if (e.target === e.currentTarget) closeModal(id);
    });
});
// Закрытие по Esc
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        ['pdModal', 'policyModal', 'successModal'].forEach(id => closeModal(id));
    }
});

// Тосты (всплывающие уведомления)
function showToast(message, type = 'success') {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = `toast ${type === 'success' ? 'bg-green-600' : 'bg-red-600'} text-white px-5 py-4 rounded-xl shadow-xl flex items-center gap-3 w-full sm:min-w-[300px] sm:w-auto`;
    toast.innerHTML = `
        <i data-lucide="${type === 'success' ? 'check-circle' : 'x-circle'}" class="w-5 h-5 flex-shrink-0"></i>
        <span class="font-medium text-sm">${message}</span>
    `;
    container.appendChild(toast);
    lucide.createIcons();
    setTimeout(() => toast.remove(), 4000);
}

// ============================================================
// ОТПРАВКА ФОРМЫ НА ПОЧТУ ЧЕРЕЗ FORMSPREE
// ============================================================
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mjgnpwyr';

const leadForm = document.getElementById('leadForm');
const submitBtn = document.getElementById('submitBtn');

leadForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    submitBtn.disabled = true;
    submitBtn.textContent = 'Отправка...';

    const formData = new FormData(leadForm);

    try {
        const response = await fetch(FORMSPREE_ENDPOINT, {
            method: 'POST',
            body: formData,
            headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
            document.getElementById('successModal').classList.remove('hidden');
            document.body.style.overflow = 'hidden';
            lucide.createIcons();
            leadForm.reset();
        } else {
            showToast('Не удалось отправить заявку. Попробуйте ещё раз или позвоните напрямую.', 'error');
        }
    } catch (error) {
        showToast('Ошибка сети. Проверьте соединение и попробуйте снова.', 'error');
    } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Отправить заявку';
    }
});

// Cookies баннер
const cookieBanner = document.getElementById('cookieBanner');
const acceptCookies = document.getElementById('acceptCookies');
if (!localStorage.getItem('cookiesAccepted')) {
    cookieBanner.classList.remove('hidden');
}
acceptCookies.addEventListener('click', () => {
    localStorage.setItem('cookiesAccepted', 'true');
    cookieBanner.classList.add('hidden');
});

// Плавное появление блоков при прокрутке
const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            fadeObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });
document.querySelectorAll('.fade-in').forEach(el => fadeObserver.observe(el));

// Подсветка активного пункта меню + кнопка "наверх"
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');
const scrollTopBtn = document.getElementById('scrollTopBtn');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        if (window.scrollY >= section.offsetTop - 150) {
            current = section.getAttribute('id');
        }
    });
    navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });

    scrollTopBtn.classList.toggle('visible', window.scrollY > 600);
}, { passive: true });

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

renderPricing();
