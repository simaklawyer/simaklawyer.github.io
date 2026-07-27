/* ============================================================
   Cookie Consent (vanilla-cookieconsent) + Яндекс.Метрика
   Метрика загружается только после согласия на analytics
   ============================================================ */

function loadYandexMetrika() {
    if (window.__ymLoaded) return;
    window.__ymLoaded = true;

    (function (m, e, t, r, i, k, a) {
        m[i] = m[i] || function () { (m[i].a = m[i].a || []).push(arguments); };
        m[i].l = 1 * new Date();
        for (var j = 0; j < document.scripts.length; j++) {
            if (document.scripts[j].src === r) return;
        }
        k = e.createElement(t);
        a = e.getElementsByTagName(t)[0];
        k.async = 1;
        k.src = r;
        a.parentNode.insertBefore(k, a);
    })(window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js?id=111039693', 'ym');

    ym(111039693, 'init', {
        ssr: true,
        webvisor: true,
        clickmap: true,
        ecommerce: 'dataLayer',
        referrer: document.referrer,
        url: location.href,
        accurateTrackBounce: true,
        trackLinks: true
    });
}

function maybeLoadAnalytics() {
    try {
        if (typeof CookieConsent !== 'undefined' && CookieConsent.acceptedCategory('analytics')) {
            loadYandexMetrika();
        }
    } catch (e) { /* ignore */ }
}

(function initCookieConsent() {
    if (typeof CookieConsent === 'undefined') {
        console.warn('CookieConsent не загружен — баннер cookie отключён');
        return;
    }

    CookieConsent.run({
        guiOptions: {
            consentModal: {
                layout: 'box wide',
                position: 'bottom center',
                equalWeightButtons: true,
                flipButtons: false
            },
            preferencesModal: {
                layout: 'box',
                equalWeightButtons: true,
                flipButtons: false
            }
        },
        categories: {
            necessary: {
                enabled: true,
                readOnly: true
            },
            analytics: {
                autoClear: {
                    cookies: [
                        { name: /^_ym_/ },
                        { name: /^ymex/ },
                        { name: /^yandexuid/ }
                    ]
                }
            }
        },
        language: {
            default: 'ru',
            translations: {
                ru: {
                    consentModal: {
                        title: 'Мы используем cookie',
                        description:
                            'На сайте применяются необходимые cookie для работы страницы и (по вашему согласию) аналитические cookie Яндекс.Метрики — чтобы понимать, как улучшать сервис. Подробнее в <a href="#" data-cc="show-preferencesModal">настройках</a> и в политике конфиденциальности.',
                        acceptAllBtn: 'Принять все',
                        acceptNecessaryBtn: 'Только необходимые',
                        showPreferencesBtn: 'Настроить'
                    },
                    preferencesModal: {
                        title: 'Настройки cookie',
                        acceptAllBtn: 'Принять все',
                        acceptNecessaryBtn: 'Только необходимые',
                        savePreferencesBtn: 'Сохранить',
                        closeIconLabel: 'Закрыть',
                        sections: [
                            {
                                title: 'Использование cookie',
                                description:
                                    'Cookie — небольшие файлы на вашем устройстве. Вы можете принять все категории или только необходимые. Отказ от аналитики не мешает пользоваться сайтом и отправлять заявки.'
                            },
                            {
                                title: 'Необходимые',
                                description:
                                    'Нужны для базовой работы сайта (например, запоминание вашего выбора cookie). Отключить нельзя.',
                                linkedCategory: 'necessary'
                            },
                            {
                                title: 'Аналитика (Яндекс.Метрика)',
                                description:
                                    'Помогает видеть посещаемость и поведение на сайте (счётчик 111039693). Данные обрабатываются в соответствии с политикой конфиденциальности. Без согласия скрипт Метрики не загружается.',
                                linkedCategory: 'analytics'
                            },
                            {
                                title: 'Контакты',
                                description:
                                    'Вопросы по обработке данных: <a href="mailto:Arrusi@bk.ru">Arrusi@bk.ru</a>, тел. 8 (965) 241-30-38. Симаков В.Ю., самозанятый, ИНН 253202682567.'
                            }
                        ]
                    }
                }
            }
        },
        onFirstConsent: function () {
            maybeLoadAnalytics();
        },
        onConsent: function () {
            maybeLoadAnalytics();
        },
        onChange: function () {
            maybeLoadAnalytics();
        }
    });

    maybeLoadAnalytics();
})();
