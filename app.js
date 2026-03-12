document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("year").textContent = new Date().getFullYear();

const TELEGRAM_BOT_TOKEN = "8745289526:AAGYs9y4WTd6NPURS9Nx5szBf6GWm0Nabkg";
const TELEGRAM_CHAT_ID = "1304471081";

async function sendToTelegram(text) {
  const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
  const payload = {
    chat_id: TELEGRAM_CHAT_ID,
    text,
    parse_mode: "HTML",
  };

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const t = await res.text();
    throw new Error(t);
  }
}

async function sendToEmail(data) {
  return emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
    name: data.name || "",
    phone: data.phone || "",
    need: data.need || "",
    message: data.msg || "",
    to_email: "zhanat.tuleubaev@mail.ru"
  });
}

function formatLead(form) {
  const fd = new FormData(form);
  const rows = [];
  for (const [k, v] of fd.entries()) {
    const val = String(v || "").trim();
    if (val) rows.push(`<b>${k.toUpperCase()}:</b> ${val}`);
  }
  return `<b>Заявка с сайта CAPITAL EXPLORATION</b>\n\n${rows.join("\n")}`;
}

function formToObject(form) {
  const fd = new FormData(form);
  return {
    name: fd.get("name") || "",
    phone: fd.get("phone") || "",
    need: fd.get("need") || "",
    msg: fd.get("msg") || ""
  };
}

const leadForm = document.getElementById("leadForm");
if (leadForm) {
  leadForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    try {
      const telegramMessage = formatLead(leadForm);
      const formData = formToObject(leadForm);

      await Promise.all([
        sendToTelegram(telegramMessage),
        sendToEmail(formData)
      ]);

      alert(
        currentLang === "ru"
          ? "Заявка отправлена ✅"
          : currentLang === "en"
          ? "Request sent ✅"
          : "Сұраныс жіберілді ✅"
      );
      leadForm.reset();
    } catch (err) {
      console.error(err);
      alert(
        currentLang === "ru"
          ? "Ошибка отправки ❌ Проверь Telegram и EmailJS настройки"
          : currentLang === "en"
          ? "Send error ❌ Check Telegram and EmailJS settings"
          : "Жіберу қатесі ❌ Telegram және EmailJS баптауларын тексеріңіз"
      );
    }
  });
}

const i18n = {
  ru: {
    nav_services: "Услуги",
    nav_about: "О компании",
    nav_team: "О команде",
    nav_faq: "FAQ",
    nav_cta: "Получить консультацию",

    hero_chip: "Консалтинг • Недропользование • Казахстан",
    hero_title: "Комплексное сопровождение проектов&nbsp;<br>в сфере недропользования",
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

    services_title: "Наши услуги",
    services_subtitle: "Профессиональные решения для проектов в сфере недропользования.",

    service1_title: "Оформление и получение лицензий",
    service1_text: "Оформление и получение лицензий на разведку и добычу ТПИ, ОПИ и старательство.",
    service2_title: "Возврат лицензионных территорий",
    service2_text: "Сопровождение процедур возврата лицензионных территорий.",
    service3_title: "Планы разведки и горных работ",
    service3_text: "Разработка планов разведки, планов горных работ и рабочих программ к контрактам на разведку и добычу полезных ископаемых.",
    service4_title: "Проектирование объектов",
    service4_text: "Проектирование хвостохранилищ и разработки техногенных минеральных образований (ТМО).",
    service5_title: "Рекультивация и ликвидация",
    service5_text: "Проектирование рекультивации и ликвидации объектов недропользования.",
    service6_title: "Подсчёт запасов",
    service6_text: "Подсчёт запасов в соответствии с требованиями Кодекса KAZRC и CIG.",
    service7_title: "Аукционы по недропользованию",
    service7_text: "Подготовка документации для участия в аукционах по недропользованию.",
    service8_title: "Отчётность недропользования",
    service8_text: "Разработка программ и отчетов ЛКУ, периодических отчётов, паспортов ТМО и отчётности формы 1-ТПИ.",
    service9_title: "Экология и промышленная безопасность",
    service9_text: "Разработка ОВОС, РООС, экспертиз и деклараций промышленной безопасности.",

    about_title: "О компании",
    about_p1: "Мы сопровождаем проекты в сфере недропользования, обеспечивая профессиональную подготовку и оформление документации для разведки и добычи твердых полезных ископаемых и общераспространенных полезных ископаемых.",
    about_p2: "Компания работает на стыке геологии, лицензирования, регуляторных процедур и документального сопровождения, помогая бизнесу проходить сложные административные процессы уверенно, грамотно и в соответствии с требованиями законодательства.",
    about_p3: "Мы знаем, насколько важны в этой сфере точность формулировок, полнота пакета документов, соблюдение процедур и понимание практических нюансов. Именно поэтому наша работа строится не только на формальной подготовке материалов, но и на глубоком понимании самого процесса недропользования.",
    about_p4: "Мы сопровождаем клиентов от идеи и первичной оценки до полноценного документального оформления проекта, минимизируя риски, экономя время и повышая предсказуемость результата.",
    about_p5: "Наша миссия — делать сложные процессы лицензирования и сопровождения недропользования понятными, управляемыми и профессионально выстроенными для каждого клиента.",

    team_title: "О команде",
    team_p1: "Наша команда состоит из опытных и квалифицированных специалистов с практическим опытом работы в отрасли более 10 лет.",
    team_p2: "В ее состав входят геологи-разведчики, геологи по добыче, ресурсные геологи, специалисты по подсчету запасов, 3D-моделированию, построению каркасов и блочных моделей, а также специалисты в области горного планирования, проектирования и экологии.",
    team_p3: "В команде также работают эксперты, являющиеся членами KAZRC, JORC и CIG, что подтверждает высокий уровень профессиональной подготовки и соответствие международным и отраслевым стандартам в сфере геологии, оценки ресурсов и запасов.",
    team_p4: "Объединяя профильную экспертизу, практический опыт и системный подход, мы обеспечиваем качественное сопровождение проектов на всех этапах их реализации.",

    faq_subtitle: "Ответы на наиболее частые вопросы.",
    faq1_title: "С какими направлениями вы работаете?",
    faq1_text: "Мы сопровождаем проекты, связанные с разведкой и добычей ТПИ, ОПИ, старательством, а также проектированием, отчётностью, экологическими и промышленными разделами.",
    faq2_title: "Можно ли заказать комплексное сопровождение?",
    faq2_text: "Да. Мы можем сопровождать проект поэтапно: от лицензирования и проектирования до подготовки отчётности и профильной документации.",
    faq3_title: "Как формируется стоимость?",
    faq3_text: "Стоимость зависит от стадии проекта, объёма работ, состава исходных данных и количества необходимых документов.",
    faq4_title: "Работаете ли вы с индивидуальными задачами?",
    faq4_text: "Да. Мы рассматриваем как типовые услуги, так и нестандартные задачи в рамках сопровождения недропользования и проектной документации.",

    footer_country: "Казахстан"
  },

  en: {
    nav_services: "Services",
    nav_about: "About",
    nav_team: "Team",
    nav_faq: "FAQ",
    nav_cta: "Get Consultation",

    hero_chip: "Consulting • Subsoil Use • Kazakhstan",
    hero_title: "Comprehensive support for projects&nbsp;<br>in the field of subsoil use",
    hero_text: "Licensing, engineering, reporting, environmental and industrial documentation — from document preparation to project launch.",
    hero_btn_services: "Our Services",

    kpi1_title: "Turnkey",
    kpi1_text: "from license to project launch",
    kpi2_title: "Solid / Common",
    kpi2_text: "exploration, mining, artisanal",
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

    services_title: "Our Services",
    services_subtitle: "Professional solutions for subsoil use projects.",

    service1_title: "Licensing and Permits",
    service1_text: "Preparation and obtaining licenses for exploration and mining of solid minerals, common minerals and artisanal mining.",
    service2_title: "License Territory Return",
    service2_text: "Support for procedures related to the return of licensed territories.",
    service3_title: "Exploration and Mining Plans",
    service3_text: "Preparation of exploration plans, mining plans and work programs under exploration and mining contracts.",
    service4_title: "Facility Engineering",
    service4_text: "Engineering of tailings facilities and development of technogenic mineral formations.",
    service5_title: "Reclamation and Closure",
    service5_text: "Engineering of reclamation and closure projects for subsoil use facilities.",
    service6_title: "Resource Estimation",
    service6_text: "Resource estimation in accordance with KAZRC and CIG requirements.",
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
    team_p3: "The team also includes experts who are members of KAZRC, JORC and CIG, confirming a high level of professional qualification and compliance with international and industry standards in geology and resource/reserve estimation.",
    team_p4: "By combining industry expertise, practical experience and a systematic approach, we ensure high-quality support of projects at all stages of implementation.",

    faq_subtitle: "Answers to frequently asked questions.",
    faq1_title: "What areas do you work with?",
    faq1_text: "We support projects related to exploration and mining of solid minerals, common minerals and artisanal mining, as well as engineering, reporting, environmental and industrial safety documentation.",
    faq2_title: "Can we order full project support?",
    faq2_text: "Yes. We can support a project stage by stage: from licensing and engineering to reporting and profile documentation.",
    faq3_title: "How is pricing formed?",
    faq3_text: "Pricing depends on the project stage, scope of work, completeness of source data and the number of required documents.",
    faq4_title: "Do you handle custom tasks?",
    faq4_text: "Yes. We work both with standard services and non-standard tasks within subsoil use support and project documentation.",

    footer_country: "Kazakhstan"
  },

  kz: {
    nav_services: "Қызметтер",
    nav_about: "Компания туралы",
    nav_team: "Команда туралы",
    nav_faq: "FAQ",
    nav_cta: "Кеңес алу",

    hero_chip: "Консалтинг • Жер қойнауын пайдалану • Қазақстан",
    hero_title: "Жер қойнауын пайдалану саласындағы жобаларды&nbsp;<br>кешенді сүйемелдеу",
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

    services_title: "Қызметтеріміз",
    services_subtitle: "Жер қойнауын пайдалану жобаларына арналған кәсіби шешімдер.",

    service1_title: "Лицензияларды рәсімдеу және алу",
    service1_text: "ТПИ, ОПИ және старательдік бойынша барлау және өндіру лицензияларын рәсімдеу және алу.",
    service2_title: "Лицензиялық аумақтарды қайтару",
    service2_text: "Лицензиялық аумақтарды қайтару рәсімдерін сүйемелдеу.",
    service3_title: "Барлау және тау-кен жұмыстарының жоспарлары",
    service3_text: "Барлау жоспарларын, тау-кен жұмыстарының жоспарларын және пайдалы қазбаларды барлау мен өндіруге арналған келісімшарттар бойынша жұмыс бағдарламаларын әзірлеу.",
    service4_title: "Объектілерді жобалау",
    service4_text: "Хвостохранилищелерді және техногендік минералдық түзілімдерді (ТМО) игеруді жобалау.",
    service5_title: "Рекультивация және жою",
    service5_text: "Жер қойнауын пайдалану объектілерін рекультивациялау және жою жобаларын әзірлеу.",
    service6_title: "Қорларды есептеу",
    service6_text: "KAZRC және CIG кодексі талаптарына сәйкес қорларды есептеу.",
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
    team_p1: "Біздің команда саланың ішінде 10 жылдан астам практикалық тәжірибесі бар тәжірибелі және білікті мамандардан тұрады.",
    team_p2: "Оның құрамына барлау геологтары, өндіру геологтары, ресурстық геологтар, қорларды есептеу, 3D модельдеу, каркастар мен блоктық модельдер құру бойынша мамандар, сондай-ақ тау-кен жоспарлау, жобалау және экология саласындағы мамандар кіреді.",
    team_p3: "Командада KAZRC, JORC және CIG мүшелері болып табылатын сарапшылар да жұмыс істейді, бұл геология, ресурстар мен қорларды бағалау саласындағы халықаралық және салалық стандарттарға сәйкестікті және кәсіби дайындықтың жоғары деңгейін растайды.",
    team_p4: "Салалық сараптаманы, практикалық тәжірибені және жүйелі тәсілді біріктіре отырып, біз жобаларды іске асырудың барлық кезеңдерінде сапалы сүйемелдеуді қамтамасыз етеміз.",

    faq_subtitle: "Ең жиі қойылатын сұрақтарға жауаптар.",
    faq1_title: "Қандай бағыттармен жұмыс істейсіздер?",
    faq1_text: "Біз ТПИ, ОПИ, старательдікке байланысты барлау және өндіру жобаларын, сондай-ақ жобалау, есептілік, экологиялық және өнеркәсіптік бөлімдерді сүйемелдейміз.",
    faq2_title: "Кешенді сүйемелдеуге тапсырыс беруге бола ма?",
    faq2_text: "Иә. Біз жобаны лицензиялау мен жобалаудан бастап есептілік пен бейінді құжаттамаға дейін кезең-кезеңімен сүйемелдей аламыз.",
    faq3_title: "Құны қалай қалыптасады?",
    faq3_text: "Құны жоба кезеңіне, жұмыс көлеміне, бастапқы деректердің толықтығына және қажетті құжаттар санына байланысты.",
    faq4_title: "Жеке міндеттермен жұмыс істейсіздер ме?",
    faq4_text: "Иә. Біз жер қойнауын пайдалану мен жобалық құжаттаманы сүйемелдеу шеңберінде типтік те, стандартты емес те міндеттерді қараймыз.",

    footer_country: "Қазақстан"
  }
};

let currentLang = "ru";

function applyLanguage(lang){
  currentLang = lang;
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (!(key in i18n[lang])) return;

    if (el.tagName === "OPTION") {
      el.textContent = i18n[lang][key];
    } else {
      el.innerHTML = i18n[lang][key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (!(key in i18n[lang])) return;
    el.placeholder = i18n[lang][key];
  });

  document.getElementById("btnRu").classList.toggle("is-active", lang === "ru");
  document.getElementById("btnEn").classList.toggle("is-active", lang === "en");
  document.getElementById("btnKz").classList.toggle("is-active", lang === "kz");
}

document.getElementById("btnRu").addEventListener("click", () => applyLanguage("ru"));
document.getElementById("btnEn").addEventListener("click", () => applyLanguage("en"));
document.getElementById("btnKz").addEventListener("click", () => applyLanguage("kz"));

applyLanguage("ru");
