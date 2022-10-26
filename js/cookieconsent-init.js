// obtain plugin
var cc = initCookieConsent();

// run plugin with your configuration
cc.run({
    current_lang: 'nl',
    autoclear_cookies: true,                   // default: false
    page_scripts: true,                        // default: false

    // mode: 'opt-in'                          // default: 'opt-in'; value: 'opt-in' or 'opt-out'
    // delay: 0,                               // default: 0
    // auto_language: null                     // default: null; could also be 'browser' or 'document'
    // autorun: true,                          // default: true
    // force_consent: false,                   // default: false
    // hide_from_bots: false,                  // default: false
    // remove_cookie_tables: false             // default: false
    // cookie_name: 'cc_cookie',               // default: 'cc_cookie'
    // cookie_expiration: 182,                 // default: 182 (days)
    // cookie_necessary_only_expiration: 182   // default: disabled
    // cookie_domain: location.hostname,       // default: current domain
    // cookie_path: '/',                       // default: root
    // cookie_same_site: 'Lax',                // default: 'Lax'
    // use_rfc_cookie: false,                  // default: false
    // revision: 0,                            // default: 0

    onFirstAction: function(user_preferences, cookie){
        // callback triggered only once
    },

    onAccept: function (cookie) {
        // ...
    },

    onChange: function (cookie, changed_preferences) {
        // ...
    },

    languages: {
        'en': {
            consent_modal: {
                title: 'Deze website gebruikt cookies!',
                description: 'We gebruiken cookies om je een betere bezoekerservaring te bieden. Klik op akkoord om alle cookies te accepteren of ga naar cookieinstellingen om je voorkeuren te beheren. <button type="button" data-cc="c-settings" class="cc-link">Cookieinstellingen</button>',
                primary_btn: {
                    text: 'Akkoord',
                    role: 'accept_all'              // 'accept_selected' or 'accept_all'
                },
                secondary_btn: {
                    text: 'Niet akkoord',
                    role: 'accept_necessary'        // 'settings' or 'accept_necessary'
                }
            },
            settings_modal: {
                title: 'Cookieinstellingen',
                save_settings_btn: 'Instellingen opslaan',
                accept_all_btn: 'Akkoord',
                reject_all_btn: 'Niet akkoord',
                close_btn_label: 'Sluiten',
                cookie_table_headers: [
                    {col1: 'Name'},
                    {col2: 'Domain'},
                    {col3: 'Expiration'},
                    {col4: 'Description'}
                ],
                blocks: [
                    {
                        title: 'Cookies 📢',
                        description: 'Onze website houdt drie niveaus van cookies bij. Je kan zelf je voorkeuren op elk moment aanpassen. Meer informatie over wat cookies zijn en welke cookies we verzamelen kan je lezen in ons <a href="#" class="cc-link">cookiebeleid</a>.'
                    }, {
                        title: 'Essentiële cookies',
                        description: 'zijn noodzakelijke cookies die ervoor zorgen dat de website goed functioneert en dat je voorkeuren (bv. taal, regio) goed worden opgeslagen.',
                        toggle: {
                            value: 'noodzakelijk',
                            enabled: true,
                            readonly: true          // cookie categories with readonly=true are all treated as "necessary cookies"
                        }
                    }, {
                        title: 'Performance en Analytics cookies',
                        description: 'laten ons toe om het gebruik van de website te analyseren en de bezoekerservaring te verbeteren.',
                        toggle: {
                            value: 'analytics',     // your cookie category
                            enabled: false,
                            readonly: false
                        },
                        cookie_table: [             // list of all expected cookies
                            {
                                col1: '^_ga',       // match all cookies starting with "_ga"
                                col2: 'google.com',
                                col3: '2 years',
                                col4: 'description ...',
                                is_regex: true
                            },
                            {
                                col1: '_gid',
                                col2: 'google.com',
                                col3: '1 day',
                                col4: 'description ...',
                            }
                        ]
                    }, {
                        title: 'Marketingcookies',
                        description: 'hebben als doel om je ervaring te kunnen personaliseren en je relevante inhoud en aanbiedingen te sturen op deze en andere websites.',
                        toggle: {
                            value: 'targeting',
                            enabled: false,
                            readonly: false
                        }
                    }, {
                        title: 'Meer informatie',
                        description: 'Voor vragen met betrekking tot het cookiebeleid en je keuzes, kan je ons <a class="cc-link" href="mailto:zeghetmetkleur@arteveldehs.be">contacteren</a>.',
                    }
                ]
            }
        }
    }
});