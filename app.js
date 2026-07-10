document.getElementById("year").textContent = new Date().getFullYear();

const EMAILJS_SERVICE_ID = "service_ktatykj";
const EMAILJS_TEMPLATE_ID = "template_zb8eptd";

const i18n = {
  ru: {
    nav_services: "Услуги",
    nav_about: "О компании",
    nav_team: "О команде",
    nav_certificates: "Сертификаты",
    nav_faq: "FAQ",
    nav_cta: "Получить консультацию",

    hero_chip: "Консалтинг • Недропользование • Казахстан",
    hero_title: "Комплексное сопровождение<br>проектов в сфере недропользования",
    hero_text: "Лицензирование, проектирование, отчётность, экологическая и промышленная документация — от подготовки документов до запуска работ.",
    hero_btn_services: "Наши услуги",

    kpi1_title: "Под ключ",
    kpi1_text: "от лицензии до запуска работ",
    kpi2_title: "ТПИ / ОПИ",
    kpi2_text: "разведка, добыча, старательство",
    kpi3_title: "Сопровождение",
    kpi3_text: "документы, проекты, отчётность",
    kpi4_title: "Фокус",
    kpi4_text: "недропользование и горное проектирование",
    kpi5_title: "Подход",
    kpi5_text: "структурированная работа по этапам",
    kpi6_title: "Результат",
    kpi6_text: "понятные сроки и прозрачный процесс",

    form_title: "Быстрый запрос",
    form_name: "Имя / компания",
    form_name_ph: "Например: ТОО …",
    form_phone: "Телефон / WhatsApp",
    form_phone_ph: "+7 …",
    form_need: "Что требуется",
    form_select: "Выбрать…",
    need_license: "Лицензирование",
    need_design: "Проектирование",
    need_reports: "Отчётность",
    need_env: "Экология / промышленная безопасность",
    need_full: "Комплексное сопровождение",
    form_message: "Сообщение",
    form_message_ph: "Коротко опишите задачу",
    form_submit: "Отправить запрос",
    form_submit_loading: "Отправляется...",
    form_submit_success: "✓ Запрос отправлен",
    form_status_error: "Не удалось отправить запрос",

    services_title: "Наши услуги",
    services_subtitle: "Профессиональные решения для проектов в сфере недропользования.",

    service1_title: "Оформление и получение лицензий",
    service1_text: "Оформление и получение лицензий на разведку и добычу ТПИ, ОПИ и старательство.",
    service2_title: "Возврат лицензионных территорий",
    service2_text: "Сопровождение процедур возврата лицензионных территорий.",
    service3_title: "Планы разведки и горных работ",
    service3_text: "Разработка планов разведки, планов горных работ и рабочих программ к контрактам на разведку и добычу полезных ископаемых.",
    service10_title: "Маркшейдерские работы",
    service10_text: "Маркшейдерская съемка горных объектов, вынос проектных границ в натуру, подсчет объемов и ведение документации с применением аэрофотосъёмки (БПЛА).",
    service11_title: "Проектирование горных работ",
    service11_text: "Оптимизация контуров карьера и параметров уступов с разработкой схем вскрытия, системы разработки и расчетом объемов работ и производительности оборудования.",
    service5_title: "Рекультивация и ликвидация",
    service5_text: "Проектирование рекультивации и ликвидации объектов недропользования.",
    service6_title: "Подсчёт запасов",
    service6_text: "Подсчёт запасов в соответствии с требованиями Кодекса JORC и KAZRC.",
    service12_title: "Контроль качества QA/QC",
    service12_text: "Сопровождение процедур QA/QC, контроль пробоотбора, лабораторных анализов и проверка качества геологоразведочных данных.",
    service7_title: "Аукционы по недропользованию",
    service7_text: "Подготовка документации для участия в аукционах по недропользованию.",
    service8_title: "Отчётность недропользования",
    service8_text: "Разработка программ и отчётов ЛКУ, периодических отчётов, паспортов ТМО и отчётности формы 1-ТПИ.",
    service9_title: "Экология и промышленная безопасность",
    service9_text: "Разработка ОВОС, РООС, экспертиз и деклараций промышленной безопасности.",

    about_title: "О компании",
    about_p1: "Мы сопровождаем проекты в сфере недропользования, обеспечивая профессиональную подготовку и оформление документации для разведки и добычи твёрдых полезных ископаемых и общераспространённых полезных ископаемых.",
    about_p2: "Компания работает на стыке геологии, лицензирования, регуляторных процедур и документального сопровождения, помогая бизнесу проходить сложные административные процессы уверенно, грамотно и в соответствии с требованиями законодательства.",
    about_p3: "Мы знаем, насколько важны в этой сфере точность формулировок, полнота пакета документов, соблюдение процедур и понимание практических нюансов. Именно поэтому наша работа строится не только на формальной подготовке материалов, но и на глубоком понимании самого процесса недропользования.",
    about_p4: "Мы сопровождаем клиентов от идеи и первичной оценки до полноценного документального оформления проекта, минимизируя риски, экономя время и повышая предсказуемость результата.",
    about_p5: "Наша миссия — делать сложные процессы лицензирования и сопровождения недропользования понятными, управляемыми и профессионально выстроенными для каждого клиента.",

    team_title: "О команде",
    team_p1: "Наша команда состоит из опытных и квалифицированных специалистов с практическим опытом работы в отрасли более 10 лет.",
    team_p2: "В её состав входят геологи-разведчики, геологи по добыче, ресурсные геологи, специалисты по подсчёту запасов, 3D-моделированию, построению каркасов и блочных моделей, а также специалисты в области горного планирования, проектирования и экологии.",
    team_p3: "В команде также работают эксперты, являющиеся членами KAZRC и JORC, что подтверждает высокий уровень профессиональной подготовки и соответствие международным и отраслевым стандартам в сфере геологии, оценки ресурсов и запасов.",
    team_p4: "Объединяя профильную экспертизу, практический опыт и системный подход, мы обеспечиваем качественное сопровождение проектов на всех этапах их реализации.",

    certificates_title: "Компетентные лица",
    certificates_subtitle: "Квалификация специалистов подтверждена членством в профессиональных геологических ассоциациях CIG и AIG.",
    certificate_view: "Посмотреть сертификат",

    certificate_zhanat_name: "Жанат Тулеубаев",
    certificate_zhanat_role: "Fellow CIG, член №0129",
    certificate_zhanat_validity: "Действителен до 31 декабря 2026 года",

    certificate_dias_name: "Диас Жабаев",
    certificate_dias_role: "Fellow CIG, член №0100",
    certificate_dias_validity: "Действителен до 31 декабря 2026 года",

    certificate_yerzhan_name: "Ержан Узакбаев",
    certificate_yerzhan_role: "MAIG, член AIG №5769",
    certificate_yerzhan_validity: "Сертификат членства 2022/2023",

    certificate_asylbek_name: "Асылбек Аухадиев",
    certificate_asylbek_role: "MAIG, член AIG №8707",
    certificate_asylbek_validity: "Сертификат членства 2024/2025",

    faq_subtitle: "Ответы на наиболее частые вопросы.",
    faq1_title: "С какими направлениями вы работаете?",
    faq1_text: "Мы сопровождаем проекты, связанные с разведкой и добычей ТПИ, ОПИ, старательством, а также проектированием, отчётностью, экологическими и промышленными разделами.",
    faq2_title: "Можно ли заказать комплексное сопровождение?",
    faq2_text: "Да. Мы можем сопровождать проект поэтапно: от лицензирования и проектирования до подготовки отчётности и профильной документации.",
    faq3_title: "Как формируется стоимость?",
    faq3_text: "Стоимость зависит от стадии проекта, объёма работ, состава исходных данных и количества необходимых документов.",
    faq4_title: "Работаете ли вы с индивидуальными задачами?",
    faq4_text: "Да. Мы рассматриваем как типовые услуги, так и нестандартные задачи в рамках сопровождения недропользования и проектной документации.",

    footer_phone: "+7 705 384 6999",
    footer_country: "Казахстан, г. Караганда"
  },

  kz: {
    nav_services: "Қызметтер",
    nav_about: "Компания туралы",
    nav_team: "Команда туралы",
    nav_certificates: "Сертификаттар",
    nav_faq: "FAQ",
    nav_cta: "Кеңес алу",

    hero_chip: "Консалтинг • Жер қойнауын пайдалану • Қазақстан",
    hero_title: "Жер қойнауын пайдалану жобаларын<br>кешенді сүйемелдеу",
    hero_text: "Лицензиялау, жобалау, есептілік, экологиялық және өнеркәсіптік құжаттама — құжаттарды дайындаудан бастап жұмысты іске қосуға дейін.",
    hero_btn_services: "Қызметтеріміз",

    kpi1_title: "Толық сүйемелдеу",
    kpi1_text: "лицензиядан бастап іске қосуға дейін",
    kpi2_title: "ТПИ / ОПИ",
    kpi2_text: "барлау, өндіру, старательдік",
    kpi3_title: "Сүйемелдеу",
    kpi3_text: "құжаттар, жобалар, есептілік",
    kpi4_title: "Фокус",
    kpi4_text: "жер қойнауын пайдалану және тау-кен жобалауы",
    kpi5_title: "Тәсіл",
    kpi5_text: "кезең-кезеңімен құрылымдалған жұмыс",
    kpi6_title: "Нәтиже",
    kpi6_text: "нақты мерзімдер мен ашық процесс",

    form_title: "Жедел сұраныс",
    form_name: "Аты-жөні / компания",
    form_name_ph: "Мысалы: ЖШС …",
    form_phone: "Телефон / WhatsApp",
    form_phone_ph: "+7 …",
    form_need: "Қажет қызмет",
    form_select: "Таңдау…",
    need_license: "Лицензиялау",
    need_design: "Жобалау",
    need_reports: "Есептілік",
    need_env: "Экология / өнеркәсіптік қауіпсіздік",
    need_full: "Кешенді сүйемелдеу",
    form_message: "Хабарлама",
    form_message_ph: "Міндетті қысқаша сипаттаңыз",
    form_submit: "Сұраныс жіберу",
    form_submit_loading: "Жіберілуде...",
    form_submit_success: "✓ Сұраныс жіберілді",
    form_status_error: "Сұранысты жіберу мүмкін болмады",

    services_title: "Қызметтеріміз",
    services_subtitle: "Жер қойнауын пайдалану жобаларына арналған кәсіби шешімдер.",

    service1_title: "Лицензияларды рәсімдеу және алу",
    service1_text: "ТПИ, ОПИ және старательдік бойынша барлау және өндіру лицензияларын рәсімдеу және алу.",
    service2_title: "Лицензиялық аумақтарды қайтару",
    service2_text: "Лицензиялық аумақтарды қайтару рәсімдерін сүйемелдеу.",
    service3_title: "Барлау және тау-кен жұмыстарының жоспарлары",
    service3_text: "Барлау жоспарларын, тау-кен жұмыстарының жоспарларын және пайдалы қазбаларды барлау мен өндіруге арналған келісімшарттар бойынша жұмыс бағдарламаларын әзірлеу.",
    service10_title: "Маркшейдерлік жұмыстар",
    service10_text: "Тау-кен объектілерін маркшейдерлік түсіру, жобалық шекараларды жергілікті жерге шығару, көлемдерді есептеу және БПЛА арқылы аэрофототүсірілімді қолдана отырып құжаттаманы жүргізу.",
    service11_title: "Тау-кен жұмыстарын жобалау",
    service11_text: "Карьер контурлары мен уступ параметрлерін оңтайландыру, ашу схемаларын, игеру жүйесін әзірлеу және жұмыс көлемдері мен жабдық өнімділігін есептеу.",
    service5_title: "Рекультивация және жою",
    service5_text: "Жер қойнауын пайдалану объектілерін рекультивациялау және жою жобаларын әзірлеу.",
    service6_title: "Қорларды есептеу",
    service6_text: "JORC және KAZRC кодексі талаптарына сәйкес қорларды есептеу.",
    service12_title: "QA/QC сапаны бақылау",
    service12_text: "QA/QC рәсімдерін сүйемелдеу, сынама алу, зертханалық талдаулар және геологиялық барлау деректерінің сапасын тексеру.",
    service7_title: "Жер қойнауын пайдалану аукциондары",
    service7_text: "Жер қойнауын пайдалану аукциондарына қатысуға арналған құжаттаманы дайындау.",
    service8_title: "Жер қойнауын пайдалану есептілігі",
    service8_text: "ЛКУ бағдарламалары мен есептерін, мерзімдік есептерді, ТМО паспорттарын және 1-ТПИ нысанындағы есептілікті әзірлеу.",
    service9_title: "Экология және өнеркәсіптік қауіпсіздік",
    service9_text: "ҚОӘБ, ҚОҚ бөлімдерін, өнеркәсіптік қауіпсіздік сараптамаларын және декларацияларын әзірлеу.",

    about_title: "Компания туралы",
    about_p1: "Біз жер қойнауын пайдалану саласындағы жобаларды сүйемелдеп, қатты пайдалы қазбалар мен жалпы таралған пайдалы қазбаларды барлау және өндіру үшін құжаттаманы кәсіби түрде дайындауды және рәсімдеуді қамтамасыз етеміз.",
    about_p2: "Компания геология, лицензиялау, реттеуші рәсімдер және құжаттық сүйемелдеу тоғысында жұмыс істейді, бизнеске күрделі әкімшілік процестерден сенімді, сауатты және заңнама талаптарына сәйкес өтуге көмектеседі.",
    about_p3: "Бұл салада тұжырымдардың нақтылығы, құжаттар пакетінің толықтығы, рәсімдердің сақталуы және практикалық нюанстарды түсіну қаншалықты маңызды екенін біз жақсы білеміз. Сондықтан біздің жұмысымыз тек формалды құжат дайындауға емес, жер қойнауын пайдалану процесінің өзін терең түсінуге негізделген.",
    about_p4: "Біз клиенттерді идея мен бастапқы бағалаудан бастап жобаны толық құжаттық рәсімдеуге дейін сүйемелдеп, тәуекелдерді азайтып, уақытты үнемдеп және нәтижені болжамды етеміз.",
    about_p5: "Біздің миссиямыз — лицензиялау мен жер қойнауын пайдалануды сүйемелдеу сияқты күрделі процестерді әрбір клиент үшін түсінікті, басқарылатын және кәсіби түрде ұйымдастырылған ету.",

    team_title: "Команда туралы",
    team_p1: "Біздің команда салада 10 жылдан астам практикалық тәжірибесі бар тәжірибелі және білікті мамандардан тұрады.",
    team_p2: "Оның құрамына барлау геологтары, өндіру геологтары, ресурстық геологтар, қорларды есептеу, 3D модельдеу, каркастар мен блоктық модельдер құру бойынша мамандар, сондай-ақ тау-кен жоспарлау, жобалау және экология саласындағы мамандар кіреді.",
    team_p3: "Командада KAZRC және JORC мүшелері болып табылатын сарапшылар да жұмыс істейді, бұл геология, ресурстар мен қорларды бағалау саласындағы халықаралық және салалық стандарттарға сәйкестікті және кәсіби дайындықтың жоғары деңгейін растайды.",
    team_p4: "Салалық сараптаманы, практикалық тәжірибені және жүйелі тәсілді біріктіре отырып, біз жобаларды іске асырудың барлық кезеңдерінде сапалы сүйемелдеуді қамтамасыз етеміз.",

    certificates_title: "Құзыретті тұлғалар",
    certificates_subtitle: "Мамандардың біліктілігі CIG және AIG кәсіби геологиялық қауымдастықтарына мүшелігімен расталған.",
    certificate_view: "Сертификатты қарау",

    certificate_zhanat_name: "Жанат Тулеубаев",
    certificate_zhanat_role: "CIG Fellow, №0129 мүшесі",
    certificate_zhanat_validity: "2026 жылғы 31 желтоқсанға дейін жарамды",

    certificate_dias_name: "Диас Жабаев",
    certificate_dias_role: "CIG Fellow, №0100 мүшесі",
    certificate_dias_validity: "2026 жылғы 31 желтоқсанға дейін жарамды",

    certificate_yerzhan_name: "Ержан Узакбаев",
    certificate_yerzhan_role: "MAIG, AIG №5769 мүшесі",
    certificate_yerzhan_validity: "2022/2023 жылдарға арналған мүшелік сертификаты",

    certificate_asylbek_name: "Асылбек Аухадиев",
    certificate_asylbek_role: "MAIG, AIG №8707 мүшесі",
    certificate_asylbek_validity: "2024/2025 жылдарға арналған мүшелік сертификаты",

    faq_subtitle: "Ең жиі қойылатын сұрақтарға жауаптар.",
    faq1_title: "Қандай бағыттармен жұмыс істейсіздер?",
    faq1_text: "Біз ТПИ, ОПИ, старательдікке байланысты барлау және өндіру жобаларын, сондай-ақ жобалау, есептілік, экологиялық және өнеркәсіптік бөлімдерді сүйемелдейміз.",
    faq2_title: "Кешенді сүйемелдеуге тапсырыс беруге бола ма?",
    faq2_text: "Иә. Біз жобаны лицензиялау мен жобалаудан бастап есептілік пен бейінді құжаттамаға дейін кезең-кезеңімен сүйемелдей аламыз.",
    faq3_title: "Құны қалай қалыптасады?",
    faq3_text: "Құны жоба кезеңіне, жұмыс көлеміне, бастапқы деректердің толықтығына және қажетті құжаттар санына байланысты.",
    faq4_title: "Жеке міндеттермен жұмыс істейсіздер ме?",
    faq4_text: "Иә. Біз жер қойнауын пайдалану мен жобалық құжаттаманы сүйемелдеу шеңберінде типтік те, стандартты емес те міндеттерді қараймыз.",

    footer_phone: "+7 705 384 6999",
    footer_country: "Қазақстан"
  },

  en: {
    nav_services: "Services",
    nav_about: "About",
    nav_team: "Team",
    nav_certificates: "Certificates",
    nav_faq: "FAQ",
    nav_cta: "Get Consultation",

    hero_chip: "Consulting • Subsoil Use • Kazakhstan",
    hero_title: "Comprehensive support<br>for subsoil use projects",
    hero_text: "Licensing, engineering, reporting, environmental and industrial documentation — from document preparation to project launch.",
    hero_btn_services: "Our Services",

    kpi1_title: "Turnkey",
    kpi1_text: "from license to project launch",
    kpi2_title: "Solid / Common",
    kpi2_text: "exploration, mining and artisanal operations",
    kpi3_title: "Support",
    kpi3_text: "documents, projects, reporting",
    kpi4_title: "Focus",
    kpi4_text: "subsoil use and mining engineering",
    kpi5_title: "Approach",
    kpi5_text: "structured stage-by-stage work",
    kpi6_title: "Result",
    kpi6_text: "clear deadlines and transparent process",

    form_title: "Quick Request",
    form_name: "Name / Company",
    form_name_ph: "For example: LLP …",
    form_phone: "Phone / WhatsApp",
    form_phone_ph: "+7 …",
    form_need: "What is required",
    form_select: "Select…",
    need_license: "Licensing",
    need_design: "Engineering",
    need_reports: "Reporting",
    need_env: "Environment / Industrial Safety",
    need_full: "Comprehensive Support",
    form_message: "Message",
    form_message_ph: "Briefly describe your request",
    form_submit: "Send Request",
    form_submit_loading: "Sending...",
    form_submit_success: "✓ Request sent",
    form_status_error: "Failed to send request",

    services_title: "Our Services",
    services_subtitle: "Professional solutions for subsoil use projects.",

    service1_title: "Licensing and Permits",
    service1_text: "Preparation and obtaining licenses for exploration and mining of solid minerals, common minerals and artisanal mining activities.",
    service2_title: "License Territory Return",
    service2_text: "Support for procedures related to the return of licensed territories.",
    service3_title: "Exploration and Mining Plans",
    service3_text: "Preparation of exploration plans, mining plans and work programs under exploration and mining contracts.",
    service10_title: "Mine Surveying",
    service10_text: "Surveying of mining facilities, staking of project boundaries in the field, volume calculations and documentation using aerial photogrammetry (UAV).",
    service11_title: "Mine Planning",
    service11_text: "Optimization of pit boundaries and bench parameters with development of access schemes, mining methods and calculation of work volumes and equipment productivity.",
    service5_title: "Reclamation and Closure",
    service5_text: "Engineering of reclamation and closure projects for subsoil use facilities.",
    service6_title: "Resource Estimation",
    service6_text: "Resource estimation in accordance with JORC and KAZRC requirements.",
    service12_title: "QA/QC Quality Control",
    service12_text: "Support of QA/QC procedures, control of sampling, laboratory analyses and verification of exploration data quality.",
    service7_title: "Subsoil Auctions",
    service7_text: "Preparation of documentation for participation in subsoil use auctions.",
    service8_title: "Regulatory Reporting",
    service8_text: "Development of LCU programs and reports, periodic reports, TMO passports and Form 1-TPI reporting.",
    service9_title: "Environmental and Industrial Safety",
    service9_text: "Preparation of EIA, environmental sections, industrial safety expert reviews and declarations.",

    about_title: "About",
    about_p1: "We support projects in the field of subsoil use, providing professional preparation and execution of documentation for exploration and mining of solid minerals and common minerals.",
    about_p2: "The company operates at the intersection of geology, licensing, regulatory procedures and documentary support, helping businesses navigate complex administrative processes confidently, competently and in full compliance with legislation.",
    about_p3: "We understand how important precise wording, completeness of document packages, procedural compliance and practical industry nuances are in this field. That is why our work is based not only on formal document preparation, but also on a deep understanding of the subsoil use process itself.",
    about_p4: "We support clients from idea and initial assessment to full documentary formalization of the project, minimizing risks, saving time and increasing predictability of the result.",
    about_p5: "Our mission is to make complex licensing and subsoil use support processes understandable, manageable and professionally structured for every client.",

    team_title: "Team",
    team_p1: "Our team consists of experienced and qualified specialists with more than 10 years of practical experience in the industry.",
    team_p2: "It includes exploration geologists, mining geologists, resource geologists, specialists in resource estimation, 3D modeling, wireframe and block model construction, as well as specialists in mine planning, engineering and environmental support.",
    team_p3: "The team also includes experts who are members of KAZRC and JORC, confirming a high level of professional qualification and compliance with international and industry standards in geology and resource/reserve estimation.",
    team_p4: "By combining industry expertise, practical experience and a systematic approach, we ensure high-quality support of projects at all stages of implementation.",

    certificates_title: "Competent Persons",
    certificates_subtitle: "The specialists’ qualifications are confirmed by membership in the professional geological associations CIG and AIG.",
    certificate_view: "View certificate",

    certificate_zhanat_name: "Zhanat Tuleubayev",
    certificate_zhanat_role: "CIG Fellow, member No. 0129",
    certificate_zhanat_validity: "Valid until 31 December 2026",

    certificate_dias_name: "Dias Zhabayev",
    certificate_dias_role: "CIG Fellow, member No. 0100",
    certificate_dias_validity: "Valid until 31 December 2026",

    certificate_yerzhan_name: "Yerzhan Uzakbayev",
    certificate_yerzhan_role: "MAIG, AIG member No. 5769",
    certificate_yerzhan_validity: "Membership certificate 2022/2023",

    certificate_asylbek_name: "Assylbek Aukhadiev",
    certificate_asylbek_role: "MAIG, AIG member No. 8707",
    certificate_asylbek_validity: "Membership certificate 2024/2025",

    faq_subtitle: "Answers to frequently asked questions.",
    faq1_title: "What areas do you work with?",
    faq1_text: "We support projects related to exploration and mining of solid minerals, common minerals and artisanal mining, as well as engineering, reporting, environmental and industrial safety documentation.",
    faq2_title: "Can we order full project support?",
    faq2_text: "Yes. We can support a project stage by stage: from licensing and engineering to reporting and profile documentation.",
    faq3_title: "How is pricing formed?",
    faq3_text: "Pricing depends on the project stage, scope of work, completeness of source data and the number of required documents.",
    faq4_title: "Do you handle custom tasks?",
    faq4_text: "Yes. We work both with standard services and non-standard tasks within subsoil use support and project documentation.",

    footer_phone: "+7 705 384 6999",
    footer_country: "Kazakhstan, Karaganda"
  }
};

let currentLang = "ru";

const leadForm = document.getElementById("leadForm");
const leadSubmitBtn = document.getElementById("leadSubmitBtn");
const formStatus = document.getElementById("formStatus");
let formSuccessTimer = null;

function setFormStatus(type, text) {
  if (!formStatus) return;

  formStatus.textContent = text;
  formStatus.classList.remove("is-success", "is-error", "is-visible");

  if (type === "success") {
    formStatus.classList.add("is-success");
  }

  if (type === "error") {
    formStatus.classList.add("is-error");
  }

  if (text) {
    formStatus.classList.add("is-visible");
  }
}

function resetSubmitButton() {
  if (!leadSubmitBtn) return;

  leadSubmitBtn.disabled = false;
  leadSubmitBtn.classList.remove("is-loading", "is-success");
  leadSubmitBtn.textContent = i18n[currentLang].form_submit;
}

function applyLanguage(lang) {
  if (!i18n[lang]) return;

  currentLang = lang;
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;

    if (!(key in i18n[lang])) return;

    if (element.tagName === "OPTION") {
      element.textContent = i18n[lang][key];
    } else {
      element.innerHTML = i18n[lang][key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.dataset.i18nPlaceholder;

    if (!(key in i18n[lang])) return;

    element.placeholder = i18n[lang][key];
  });

  document.getElementById("btnRu")?.classList.toggle("is-active", lang === "ru");
  document.getElementById("btnKz")?.classList.toggle("is-active", lang === "kz");
  document.getElementById("btnEn")?.classList.toggle("is-active", lang === "en");

  if (
    leadSubmitBtn &&
    !leadSubmitBtn.classList.contains("is-loading") &&
    !leadSubmitBtn.classList.contains("is-success")
  ) {
    leadSubmitBtn.textContent = i18n[lang].form_submit;
  }

  if (formStatus?.classList.contains("is-error")) {
    formStatus.textContent = i18n[lang].form_status_error;
  }

  if (leadSubmitBtn?.classList.contains("is-success")) {
    leadSubmitBtn.textContent = i18n[lang].form_submit_success;
  }
}

document.getElementById("btnRu")?.addEventListener("click", () => {
  applyLanguage("ru");
});

document.getElementById("btnKz")?.addEventListener("click", () => {
  applyLanguage("kz");
});

document.getElementById("btnEn")?.addEventListener("click", () => {
  applyLanguage("en");
});

if (leadForm) {
  leadForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (!leadSubmitBtn) return;

    if (formSuccessTimer) {
      clearTimeout(formSuccessTimer);
      formSuccessTimer = null;
    }

    setFormStatus("", "");

    leadSubmitBtn.disabled = true;
    leadSubmitBtn.classList.remove("is-success");
    leadSubmitBtn.classList.add("is-loading");
    leadSubmitBtn.textContent = i18n[currentLang].form_submit_loading;

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        leadForm
      );

      leadForm.reset();

      leadSubmitBtn.classList.remove("is-loading");
      leadSubmitBtn.classList.add("is-success");
      leadSubmitBtn.textContent = i18n[currentLang].form_submit_success;

      formSuccessTimer = setTimeout(() => {
        resetSubmitButton();
      }, 2000);
    } catch (error) {
      console.error(error);

      setFormStatus(
        "error",
        i18n[currentLang].form_status_error
      );

      resetSubmitButton();
    }
  });
}

applyLanguage("ru");

/* ---------- CERTIFICATE MODAL ---------- */

(function initCertificateModal() {
  const modal = document.getElementById("certificateModal");
  const modalImage = document.getElementById("certificateModalImage");
  const modalTitle = document.getElementById("certificateModalTitle");
  const previewButtons = document.querySelectorAll("[data-certificate-src]");
  const closeButtons = document.querySelectorAll("[data-certificate-close]");

  if (
    !modal ||
    !modalImage ||
    !modalTitle ||
    !previewButtons.length
  ) {
    return;
  }

  let lastFocusedElement = null;

  function openCertificate(button) {
    const source = button.dataset.certificateSrc;

    const cardTitle = button
      .closest(".certificate-card")
      ?.querySelector("h3")
      ?.textContent
      ?.trim();

    const title =
      cardTitle ||
      button.dataset.certificateName ||
      "";

    if (!source) return;

    lastFocusedElement = document.activeElement;

    modalImage.src = source;
    modalImage.alt = title;
    modalTitle.textContent = title;

    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");

    document.body.classList.add("is-modal-open");

    modal
      .querySelector(".certificate-modal__close")
      ?.focus();
  }

  function closeCertificate() {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");

    document.body.classList.remove("is-modal-open");

    modalImage.removeAttribute("src");
    modalImage.alt = "";
    modalTitle.textContent = "";

    lastFocusedElement?.focus?.();
  }

  previewButtons.forEach((button) => {
    button.addEventListener("click", () => {
      openCertificate(button);
    });
  });

  closeButtons.forEach((button) => {
    button.addEventListener("click", closeCertificate);
  });

  document.addEventListener("keydown", (event) => {
    if (
      event.key === "Escape" &&
      modal.classList.contains("is-open")
    ) {
      closeCertificate();
    }
  });
})();

/* ---------- CANVAS GEO BACKGROUND ---------- */

(function initGeoBackground() {
  const canvas = document.getElementById("geoCanvas");

  if (!canvas) return;

  const context = canvas.getContext("2d");

  if (!context) return;

  let devicePixelRatio = Math.min(
    window.devicePixelRatio || 1,
    2
  );

  let width = 0;
  let height = 0;
  let time = 0;

  const cellSize = 20;

  const levels = [
    -0.65,
    -0.52,
    -0.40,
    -0.30,
    -0.22,
    -0.15,
    -0.08,
    0,
    0.08,
    0.15,
    0.22,
    0.30,
    0.40,
    0.52,
    0.65
  ];

  function resize() {
    const rectangle = canvas.getBoundingClientRect();

    width = Math.floor(rectangle.width);
    height = Math.floor(rectangle.height);

    devicePixelRatio = Math.min(
      window.devicePixelRatio || 1,
      2
    );

    canvas.width = Math.floor(
      width * devicePixelRatio
    );

    canvas.height = Math.floor(
      height * devicePixelRatio
    );

    context.setTransform(
      devicePixelRatio,
      0,
      0,
      devicePixelRatio,
      0,
      0
    );

    context.lineJoin = "round";
    context.lineCap = "round";
    context.imageSmoothingEnabled = true;
    context.imageSmoothingQuality = "high";
  }

  function field(x, y, currentTime) {
    const normalizedX = x / width;
    const normalizedY = y / height;

    const centerX1 =
      0.28 +
      Math.sin(currentTime * 0.23) * 0.04;

    const centerY1 =
      0.32 +
      Math.cos(currentTime * 0.19) * 0.03;

    const centerX2 =
      0.68 +
      Math.cos(currentTime * 0.17) * 0.05;

    const centerY2 =
      0.42 +
      Math.sin(currentTime * 0.21) * 0.04;

    const centerX3 =
      0.52 +
      Math.sin(currentTime * 0.14) * 0.03;

    const centerY3 =
      0.72 +
      Math.cos(currentTime * 0.16) * 0.03;

    const density1 = Math.exp(
      -(
        ((normalizedX - centerX1) ** 2) / 0.020 +
        ((normalizedY - centerY1) ** 2) / 0.030
      )
    );

    const density2 = Math.exp(
      -(
        ((normalizedX - centerX2) ** 2) / 0.028 +
        ((normalizedY - centerY2) ** 2) / 0.022
      )
    );

    const density3 = Math.exp(
      -(
        ((normalizedX - centerX3) ** 2) / 0.040 +
        ((normalizedY - centerY3) ** 2) / 0.026
      )
    );

    const ridge =
      Math.sin(
        normalizedX * 10 +
        currentTime * 0.15
      ) *
        0.08 +
      Math.cos(
        normalizedY * 9 -
        currentTime * 0.12
      ) *
        0.08 +
      Math.sin(
        (normalizedX + normalizedY) * 12 +
        currentTime * 0.10
      ) *
        0.05;

    return (
      density1 * 1.0 -
      density2 * 0.9 +
      density3 * 0.75 +
      ridge
    );
  }

  function interpolate(
    point1,
    point2,
    value1,
    value2,
    level
  ) {
    const interpolation =
      (level - value1) /
      (value2 - value1 || 0.000001);

    return {
      x:
        point1.x +
        (point2.x - point1.x) *
          interpolation,

      y:
        point1.y +
        (point2.y - point1.y) *
          interpolation
    };
  }

  function drawContours() {
    const columns =
      Math.ceil(width / cellSize) + 1;

    const rows =
      Math.ceil(height / cellSize) + 1;

    const values = Array.from(
      { length: rows },
      () => Array(columns).fill(0)
    );

    for (let row = 0; row < rows; row += 1) {
      for (
        let column = 0;
        column < columns;
        column += 1
      ) {
        values[row][column] = field(
          column * cellSize,
          row * cellSize,
          time
        );
      }
    }

    for (const level of levels) {
      context.beginPath();

      for (
        let row = 0;
        row < rows - 1;
        row += 1
      ) {
        for (
          let column = 0;
          column < columns - 1;
          column += 1
        ) {
          const x = column * cellSize;
          const y = row * cellSize;

          const point0 = {
            x,
            y
          };

          const point1 = {
            x: x + cellSize,
            y
          };

          const point2 = {
            x: x + cellSize,
            y: y + cellSize
          };

          const point3 = {
            x,
            y: y + cellSize
          };

          const value0 =
            values[row][column];

          const value1 =
            values[row][column + 1];

          const value2 =
            values[row + 1][column + 1];

          const value3 =
            values[row + 1][column];

          const points = [];

          if (
            (value0 < level) !==
            (value1 < level)
          ) {
            points.push(
              interpolate(
                point0,
                point1,
                value0,
                value1,
                level
              )
            );
          }

          if (
            (value1 < level) !==
            (value2 < level)
          ) {
            points.push(
              interpolate(
                point1,
                point2,
                value1,
                value2,
                level
              )
            );
          }

          if (
            (value2 < level) !==
            (value3 < level)
          ) {
            points.push(
              interpolate(
                point2,
                point3,
                value2,
                value3,
                level
              )
            );
          }

          if (
            (value3 < level) !==
            (value0 < level)
          ) {
            points.push(
              interpolate(
                point3,
                point0,
                value3,
                value0,
                level
              )
            );
          }

          if (points.length === 2) {
            context.moveTo(
              points[0].x,
              points[0].y
            );

            context.lineTo(
              points[1].x,
              points[1].y
            );
          } else if (points.length === 4) {
            context.moveTo(
              points[0].x,
              points[0].y
            );

            context.lineTo(
              points[1].x,
              points[1].y
            );

            context.moveTo(
              points[2].x,
              points[2].y
            );

            context.lineTo(
              points[3].x,
              points[3].y
            );
          }
        }
      }

      const alpha =
        0.040 +
        (level + 0.65) * 0.040;

      context.strokeStyle =
        `rgba(225, 220, 205, ${alpha})`;

      context.lineWidth =
        Math.abs(level) < 0.01
          ? 1.5
          : 1.2;

      context.stroke();
    }
  }

  function drawBand() {
    const gradient =
      context.createLinearGradient(
        0,
        0,
        width,
        0
      );

    gradient.addColorStop(
      0,
      "rgba(0,0,0,0)"
    );

    gradient.addColorStop(
      0.18,
      "rgba(8,32,78,0.06)"
    );

    gradient.addColorStop(
      0.50,
      "rgba(10,36,90,0.12)"
    );

    gradient.addColorStop(
      0.82,
      "rgba(8,32,78,0.06)"
    );

    gradient.addColorStop(
      1,
      "rgba(0,0,0,0)"
    );

    context.fillStyle = gradient;

    context.fillRect(
      0,
      0,
      width,
      height
    );
  }

  function render() {
    time += 0.012;

    context.clearRect(
      0,
      0,
      width,
      height
    );

    drawBand();
    drawContours();

    requestAnimationFrame(render);
  }

  window.addEventListener(
    "resize",
    resize
  );

  resize();
  render();
})();