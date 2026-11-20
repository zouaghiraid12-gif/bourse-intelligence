const SCHOLARSHIPS = [
  {
    id: "turkey-gov",
    source_type: "government",
    name_ar: "منحة الحكومة التركية (Türkiye Bursları)",
    name_en: "Turkiye Burslari (Government)",
    country: "Turkey",
    min_gpa_ratio: 0.70,
    allowed_fields: ["Computer Science", "Artificial Intelligence", "Cybersecurity", "Information Technology", "Engineering", "Mathematics", "Medicine", "Business", "Economics", "Law"],
    min_english_level: "B1",
    language_cert_required: false,
    offers_language_year: true,
    funding_type: "full",
    deadline: "2027-02-20",
    official_url: "https://turkiyeburslari.gov.tr/",
    notes_ar: "منحة حكومية شاملة؛ تشمل غالباً سنة تحضيرية للغة وتغطية واسعة حسب البرنامج.",
    notes_en: "Comprehensive government scholarship; often includes a language prep year."
  },
  {
    id: "hungary-gov",
    source_type: "government",
    name_ar: "منحة المجر / الهنغارية (Stipendium Hungaricum)",
    name_en: "Stipendium Hungaricum (Hungary)",
    country: "Hungary",
    min_gpa_ratio: 0.65,
    allowed_fields: ["Computer Science", "Artificial Intelligence", "Information Technology", "Engineering", "Mathematics", "Business", "Economics"],
    min_english_level: "B2",
    language_cert_required: false,
    offers_language_year: false,
    funding_type: "full",
    deadline: "2027-01-15",
    official_url: "https://stipendiumhungaricum.hu/",
    notes_ar: "منحة حكومية مجرية عبر الاتفاقيات الثنائية والجامعات المستضيفة.",
    notes_en: "Hungarian government scholarship via bilateral agreements and host universities."
  },
  {
    id: "romania-gov",
    source_type: "government",
    name_ar: "منحة الحكومة الرومانية (MFA Romania)",
    name_en: "Romania MFA Scholarship (Government)",
    country: "Romania",
    min_gpa_ratio: 0.65,
    allowed_fields: ["Computer Science", "Information Technology", "Engineering", "Mathematics", "Business", "Economics", "Law"],
    min_english_level: "A2",
    language_cert_required: false,
    offers_language_year: true,
    funding_type: "full",
    deadline: "2027-03-15",
    official_url: "https://scholarships.studyinromania.gov.ro/",
    notes_ar: "منحة حكومية رومانية تتضمن غالباً سنة تحضيرية للغة الرومانية.",
    notes_en: "Romanian government scholarship typically including a Romanian prep year."
  },
  {
    id: "russia-gov",
    source_type: "government",
    name_ar: "منحة الحكومة الروسية (Quota)",
    name_en: "Russian Government Scholarship (Quota)",
    country: "Russia",
    min_gpa_ratio: 0.60,
    allowed_fields: ["Computer Science", "Artificial Intelligence", "Cybersecurity", "Information Technology", "Engineering", "Mathematics", "Physics", "Medicine", "Pharmacy"],
    min_english_level: "A2",
    language_cert_required: false,
    offers_language_year: true,
    funding_type: "full",
    deadline: "2027-01-20",
    official_url: "https://education-in-russia.com/",
    notes_ar: "منحة حكومية روسية ضمن حصص سنوية تشمل غالباً سنة لغة تحضيرية.",
    notes_en: "Russian government quota scholarship commonly including a preparatory year."
  },
  {
    id: "malaysia-gov",
    source_type: "government",
    name_ar: "منحة ماليزيا الدولية (MIS)",
    name_en: "Malaysia International Scholarship (MIS)",
    country: "Malaysia",
    min_gpa_ratio: 0.72,
    allowed_fields: ["Computer Science", "Artificial Intelligence", "Cybersecurity", "Information Technology", "Engineering", "Business", "Economics"],
    min_english_level: "B2",
    language_cert_required: true,
    offers_language_year: false,
    funding_type: "full",
    deadline: "2027-06-30",
    official_url: "https://biasiswa.mohe.gov.my/",
    notes_ar: "منحة حكومية ماليزية للطلبة الدوليين المستوفين للشروط الأكاديمية واللغوية.",
    notes_en: "Malaysian government scholarship for international applicants meeting criteria."
  },
  {
    id: "japan-gov",
    source_type: "government",
    name_ar: "منحة الحكومة اليابانية (MEXT)",
    name_en: "MEXT Scholarship (Japan Government)",
    country: "Japan",
    min_gpa_ratio: 0.75,
    allowed_fields: ["Computer Science", "Artificial Intelligence", "Engineering", "Mathematics", "Physics", "Economics", "Law"],
    min_english_level: "B2",
    language_cert_required: false,
    offers_language_year: true,
    funding_type: "full",
    deadline: "2027-05-15",
    official_url: "https://www.studyinjapan.go.jp/en/",
    notes_ar: "منحة حكومية يابانية تشمل اختبارات ومقابلات وبرنامجاً تحضيرياً.",
    notes_en: "Japanese government program featuring exams, interviews, and prep study."
  },
  {
    id: "azerbaijan-gov",
    source_type: "government",
    name_ar: "منحة الحكومة الأذربيجانية (Heydar Aliyev)",
    name_en: "Azerbaijan Government Scholarship",
    country: "Azerbaijan",
    min_gpa_ratio: 0.68,
    allowed_fields: ["Computer Science", "Artificial Intelligence", "Cybersecurity", "Information Technology", "Engineering", "Business", "Economics"],
    min_english_level: "B1",
    language_cert_required: false,
    offers_language_year: true,
    funding_type: "full",
    deadline: "2027-05-20",
    official_url: "https://studyinazerbaijan.edu.az/",
    notes_ar: "منحة حكومية أذربيجانية للطلبة الدوليين مع إمكانية سنة تحضيرية للغة.",
    notes_en: "Azerbaijan government scholarship for international students with prep options."
  },
  {
    id: "indonesia-gov",
    source_type: "government",
    name_ar: "منحة الحكومة الإندونيسية (KNB)",
    name_en: "KNB Scholarship (Indonesia Government)",
    country: "Indonesia",
    min_gpa_ratio: 0.70,
    allowed_fields: ["Computer Science", "Information Technology", "Engineering", "Mathematics", "Business", "Economics"],
    min_english_level: "B1",
    language_cert_required: false,
    offers_language_year: true,
    funding_type: "full",
    deadline: "2027-02-28",
    official_url: "https://knb.kemdikbud.go.id/",
    notes_ar: "منحة حكومية إندونيسية للطلبة الدوليين وتشمل برنامج لغة إندونيسية تحضيرياً.",
    notes_en: "Indonesian government award including a preparatory Indonesian language program."
  },
  {
    id: "taiwan-gov",
    source_type: "government",
    name_ar: "منحة الحكومة التايوانية (MOE Taiwan)",
    name_en: "Taiwan MOE Scholarship (Government)",
    country: "Taiwan",
    min_gpa_ratio: 0.75,
    allowed_fields: ["Computer Science", "Artificial Intelligence", "Cybersecurity", "Information Technology", "Engineering", "Mathematics", "Business", "Economics"],
    min_english_level: "B2",
    language_cert_required: false,
    offers_language_year: true,
    funding_type: "full",
    deadline: "2027-03-31",
    official_url: "https://taiwanscholarship.moe.gov.tw/",
    notes_ar: "منحة حكومية تايوانية للدراسة في الجامعات التايوانية المعتمدة.",
    notes_en: "Taiwan government scholarship for degree studies at accredited universities."
  },
  {
    id: "china-gov",
    source_type: "government",
    name_ar: "منحة الحكومة الصينية (CSC)",
    name_en: "Chinese Government Scholarship (CSC)",
    country: "China",
    min_gpa_ratio: 0.70,
    allowed_fields: ["Computer Science", "Artificial Intelligence", "Cybersecurity", "Information Technology", "Engineering", "Mathematics", "Physics", "Medicine", "Pharmacy", "Business", "Economics"],
    min_english_level: "B1",
    language_cert_required: false,
    offers_language_year: true,
    funding_type: "full",
    deadline: "2027-03-31",
    official_url: "https://www.campuschina.org/",
    notes_ar: "منحة حكومية صينية عبر الجامعات أو السفارات مع خيارات سنة تحضيرية للغة.",
    notes_en: "Chinese government scholarship via university or embassy tracks."
  },
  {
    id: "korea-gks-gov",
    source_type: "government",
    name_ar: "منحة الحكومة الكورية (GKS)",
    name_en: "Global Korea Scholarship (Government)",
    country: "South Korea",
    min_gpa_ratio: 0.75,
    allowed_fields: ["Computer Science", "Artificial Intelligence", "Cybersecurity", "Information Technology", "Engineering", "Business", "Economics"],
    min_english_level: "B1",
    language_cert_required: false,
    offers_language_year: true,
    funding_type: "full",
    deadline: "2027-02-28",
    official_url: "https://studyinkorea.go.kr/",
    notes_ar: "منحة حكومية كورية تشمل عادةً سنة لغة كورية تحضيرية حسب المسار المتاح.",
    notes_en: "Korean government program typically including a Korean language preparatory year."
  },
  {
    id: "eiffel-france",
    source_type: "government",
    name_ar: "منحة إيفل الفرنسية (Eiffel Excellence)",
    name_en: "Eiffel Excellence Scholarship (France)",
    country: "France",
    min_gpa_ratio: 0.78,
    allowed_fields: ["Computer Science", "Artificial Intelligence", "Engineering", "Mathematics", "Business", "Economics", "Law"],
    min_english_level: "B2",
    language_cert_required: false,
    offers_language_year: false,
    funding_type: "full",
    deadline: "2027-01-06",
    official_url: "https://www.campusfrance.org/en/eiffel-scholarship-program-of-excellence",
    notes_ar: "تقدمها المؤسسة الفرنسية وليس الطالب مباشرة؛ انتبه للمواعيد الداخلية للجامعات.",
    notes_en: "Submitted by the French host institution rather than directly by students."
  },
  {
    id: "chevening-uk",
    source_type: "government",
    name_ar: "منحة تشيفنينغ البريطانية (Chevening)",
    name_en: "Chevening Scholarship (UK)",
    country: "United Kingdom",
    min_gpa_ratio: 0.75,
    allowed_fields: ["Computer Science", "Artificial Intelligence", "Cybersecurity", "Business", "Economics", "Law"],
    min_english_level: "B2",
    language_cert_required: false,
    offers_language_year: false,
    funding_type: "full",
    deadline: "2026-10-06",
    official_url: "https://www.chevening.org/",
    notes_ar: "منحة بريطانية مرموقة للدراسات العليا؛ راجع مواعيد فتح الدورة القادمة.",
    notes_en: "Prestigious UK scholarship; check the next opening cycle on the official portal."
  },
  {
    id: "kuwait-oman-mesrs-gov",
    source_type: "government",
    name_ar: "منح الكويت وسلطنة عُمان الحكومية (عبر وزارة التعليم العالي الجزائرية)",
    name_en: "Kuwait & Oman Government Scholarships (via Algerian MESRS)",
    country: "Kuwait & Oman",
    min_gpa_ratio: 0.72,
    allowed_fields: ["Computer Science", "Artificial Intelligence", "Information Technology", "Engineering", "Mathematics", "Business", "Economics", "Law"],
    min_english_level: "B1",
    language_cert_required: false,
    offers_language_year: false,
    funding_type: "full",
    deadline: "2027-07-01",
    official_url: "https://www.mesrs.dz/",
    notes_ar: "منح تبادل حكومية تُعلن سنوياً عبر وزارة التعليم العالي والبحث العلمي بالجزائر حسب التخصصات المتاحة.",
    notes_en: "Government exchange scholarships announced via Algeria's MESRS according to available quotas."
  },
  {
    id: "daad-germany-gov",
    source_type: "government",
    name_ar: "برامج ومنح DAAD للدراسة في ألمانيا",
    name_en: "DAAD Scholarships & Study Programs (Germany)",
    country: "Germany",
    min_gpa_ratio: 0.75,
    allowed_fields: ["Computer Science", "Artificial Intelligence", "Engineering", "Mathematics", "Physics", "Business", "Economics"],
    min_english_level: "B2",
    language_cert_required: true,
    offers_language_year: false,
    funding_type: "partial",
    deadline: "2027-04-30",
    official_url: "https://www.daad.de/en/",
    notes_ar: "تختلف برامج DAAD حسب المرحلة والبلد؛ راجع متطلبات اللغة والتمويل لكل برنامج.",
    notes_en: "DAAD tracks vary by degree level and country; verify language and funding rules per call."
  },
  {
    id: "fulbright-us-gov",
    source_type: "government",
    name_ar: "منح فولبرايت وبرامج التعليم في أمريكا (Fulbright / EducationUSA)",
    name_en: "Fulbright & EducationUSA Programs (USA)",
    country: "United States",
    min_gpa_ratio: 0.78,
    allowed_fields: ["Computer Science", "Artificial Intelligence", "Cybersecurity", "Engineering", "Mathematics", "Business", "Economics", "Law"],
    min_english_level: "B2",
    language_cert_required: true,
    offers_language_year: false,
    funding_type: "full",
    deadline: "2027-03-15",
    official_url: "https://educationusa.state.gov/",
    notes_ar: "برامج تبادل أكاديمي وإرشاد جامعي للولايات المتحدة؛ راجع الأهلية والآجال حسب البلد.",
    notes_en: "Academic exchange and US university guidance programs; check country-specific eligibility."
  },
  {
    id: "erasmus-mundus-eu",
    source_type: "government",
    name_ar: "منح إيراسموس موندوس المشتركة (Erasmus Mundus)",
    name_en: "Erasmus Mundus Joint Masters (European Union)",
    country: "European Union",
    min_gpa_ratio: 0.76,
    allowed_fields: ["Computer Science", "Artificial Intelligence", "Cybersecurity", "Information Technology", "Engineering", "Mathematics", "Economics"],
    min_english_level: "B2",
    language_cert_required: true,
    offers_language_year: false,
    funding_type: "full",
    deadline: "2027-01-15",
    official_url: "https://www.eacea.ec.europa.eu/scholarships/erasmus-mundus-catalogue_en",
    notes_ar: "برامج مشتركة بين عدة جامعات أوروبية؛ لكل برنامج موعده ورابطه الخاص.",
    notes_en: "Joint programs across multiple European universities; each consortium sets its own deadline."
  },
  {
    id: "sisgp-sweden-gov",
    source_type: "government",
    name_ar: "منح المعهد السويدي العالمية (SISGP)",
    name_en: "Swedish Institute Scholarships (SISGP)",
    country: "Sweden",
    min_gpa_ratio: 0.75,
    allowed_fields: ["Computer Science", "Artificial Intelligence", "Information Technology", "Engineering", "Business", "Economics", "Law"],
    min_english_level: "B2",
    language_cert_required: true,
    offers_language_year: false,
    funding_type: "full",
    deadline: "2027-02-20",
    official_url: "https://si.se/en/apply/scholarships/",
    notes_ar: "تشترط غالباً التقديم على القبول الجامعي السويدي أولاً ثم التقدم للمنحة ضمن المواعيد المعلنة.",
    notes_en: "Typically requires a university admission application first, followed by the scholarship window."
  },
  {
    id: "commonwealth-uk-gov",
    source_type: "government",
    name_ar: "منح الكومنولث الدراسية (Commonwealth Scholarships)",
    name_en: "Commonwealth Scholarships (UK)",
    country: "United Kingdom",
    min_gpa_ratio: 0.75,
    allowed_fields: ["Computer Science", "Artificial Intelligence", "Engineering", "Mathematics", "Medicine", "Economics"],
    min_english_level: "B2",
    language_cert_required: true,
    offers_language_year: false,
    funding_type: "full",
    deadline: "2026-12-15",
    official_url: "https://cscuk.fcdo.gov.uk/",
    notes_ar: "مخصصة لمواطني الدول المؤهلة في الكومنولث وفق المسارات والشروط السنوية.",
    notes_en: "For citizens of eligible Commonwealth countries under annual call criteria."
  },
  {
    id: "brazil-pec-g-gov",
    source_type: "government",
    name_ar: "برنامج المنح الجامعية البرازيلي (PEC-G)",
    name_en: "PEC-G Undergraduate Scholarship (Brazil)",
    country: "Brazil",
    min_gpa_ratio: 0.65,
    allowed_fields: ["Computer Science", "Information Technology", "Engineering", "Mathematics", "Business", "Economics", "Law"],
    min_english_level: "A2",
    language_cert_required: false,
    offers_language_year: true,
    funding_type: "full",
    deadline: "2027-05-01",
    official_url: "https://www.gov.br/mre/pt-br/assuntos/relacoes-culturais/educacao/pec-g",
    notes_ar: "برنامج تعاوني للطلبة الأجانب في جامعات برازيلية مع متطلبات لغة برتغالية محددة.",
    notes_en: "Cooperative degree program for international students in Brazil with Portuguese requirements."
  },
  {
    id: "saudi-study-uni",
    source_type: "university",
    name_ar: "منصة ادرس في السعودية (منح الجامعات الحكومية السعودية)",
    name_en: "Study in Saudi Arabia (Public Universities)",
    country: "Saudi Arabia",
    min_gpa_ratio: 0.75,
    allowed_fields: ["Computer Science", "Artificial Intelligence", "Cybersecurity", "Information Technology", "Engineering", "Mathematics", "Medicine", "Pharmacy", "Business", "Economics", "Law"],
    min_english_level: "B1",
    language_cert_required: false,
    offers_language_year: false,
    funding_type: "full",
    deadline: "2027-06-15",
    official_url: "https://studyinsaudi.moe.gov.sa/",
    notes_ar: "منح تقدمها الجامعات الحكومية السعودية للطلبة الدوليين عبر المنصة الموحدة.",
    notes_en: "Scholarships offered by Saudi public universities for international applicants."
  },
  {
    id: "qatar-qu-uni",
    source_type: "university",
    name_ar: "منح جامعة قطر (Qatar University)",
    name_en: "Qatar University Scholarships",
    country: "Qatar",
    min_gpa_ratio: 0.80,
    allowed_fields: ["Computer Science", "Artificial Intelligence", "Cybersecurity", "Information Technology", "Engineering", "Mathematics", "Business", "Economics", "Law"],
    min_english_level: "B2",
    language_cert_required: false,
    offers_language_year: false,
    funding_type: "full",
    deadline: "2027-05-01",
    official_url: "https://www.qu.edu.qa/en/students/admissions/scholarships",
    notes_ar: "منح تنافسية تقدمها جامعة قطر للطلبة الدوليين وفق التخصص والملف الأكاديمي.",
    notes_en: "Competitive scholarships awarded by Qatar University by major and merit."
  },
  {
    id: "qatar-hbku-uni",
    source_type: "university",
    name_ar: "منح جامعة حمد بن خليفة / المدينة التعليمية (HBKU)",
    name_en: "HBKU / Education City Scholarships (Qatar)",
    country: "Qatar",
    min_gpa_ratio: 0.78,
    allowed_fields: ["Computer Science", "Artificial Intelligence", "Cybersecurity", "Information Technology", "Engineering", "Business", "Economics"],
    min_english_level: "B2",
    language_cert_required: false,
    offers_language_year: false,
    funding_type: "full",
    deadline: "2027-02-01",
    official_url: "https://www.hbku.edu.qa/en/admissions",
    notes_ar: "برامج ومنح جامعية في المدينة التعليمية بقطر؛ راجع الشروط لكل كلية وبرنامج.",
    notes_en: "Programs and scholarships in Qatar's Education City; check specific college rules."
  },
  {
    id: "uae-khalifa-uni",
    source_type: "university",
    name_ar: "منح جامعة خليفة (Khalifa University)",
    name_en: "Khalifa University Scholarships (UAE)",
    country: "UAE",
    min_gpa_ratio: 0.80,
    allowed_fields: ["Computer Science", "Artificial Intelligence", "Cybersecurity", "Information Technology", "Engineering", "Mathematics", "Physics"],
    min_english_level: "B2",
    language_cert_required: true,
    offers_language_year: false,
    funding_type: "full",
    deadline: "2027-04-15",
    official_url: "https://www.ku.ac.ae/admissions",
    notes_ar: "جامعة بحثية وهندسية في أبوظبي تقدم منحاً دراسية للطلبة المتفوقين.",
    notes_en: "Research and engineering university in Abu Dhabi offering merit scholarships."
  },
  {
    id: "uae-uaeu-uni",
    source_type: "university",
    name_ar: "منح جامعة الإمارات العربية المتحدة (UAEU)",
    name_en: "UAE University Scholarships (UAEU)",
    country: "UAE",
    min_gpa_ratio: 0.78,
    allowed_fields: ["Computer Science", "Artificial Intelligence", "Cybersecurity", "Information Technology", "Engineering", "Business", "Economics", "Law"],
    min_english_level: "B2",
    language_cert_required: false,
    offers_language_year: false,
    funding_type: "full",
    deadline: "2027-05-30",
    official_url: "https://www.uaeu.ac.ae/en/admission/",
    notes_ar: "منح جامعية تقدمها جامعة الإمارات للطلبة الدوليين المستوفين لشروط القبول.",
    notes_en: "University scholarships at UAEU for international students meeting admission rules."
  },
  {
    id: "uae-mbzuai-uni",
    source_type: "university",
    name_ar: "منح جامعة محمد بن زايد للذكاء الاصطناعي (MBZUAI)",
    name_en: "MBZUAI Scholarships (AI University, UAE)",
    country: "UAE",
    min_gpa_ratio: 0.82,
    allowed_fields: ["Artificial Intelligence", "Computer Science", "Mathematics"],
    min_english_level: "B2",
    language_cert_required: false,
    offers_language_year: false,
    funding_type: "full",
    deadline: "2027-01-15",
    official_url: "https://mbzuai.ac.ae/study/admission-process/",
    notes_ar: "جامعة متخصصة في الذكاء الاصطناعي في أبوظبي مع دعم دراسي شامل للمقبولين.",
    notes_en: "Specialized AI university in Abu Dhabi providing full support for admitted students."
  },
  {
    id: "kaist-uni",
    source_type: "university",
    name_ar: "منح جامعة KAIST للطلبة الدوليين",
    name_en: "KAIST International Scholarships (University)",
    country: "South Korea",
    min_gpa_ratio: 0.80,
    allowed_fields: ["Computer Science", "Artificial Intelligence", "Engineering", "Mathematics", "Physics"],
    min_english_level: "B2",
    language_cert_required: false,
    offers_language_year: false,
    funding_type: "full",
    deadline: "2027-01-08",
    official_url: "https://admission.kaist.ac.kr/intl-undergraduate/",
    notes_ar: "منحة جامعية من المعهد الكوري المتقدم للعلوم والتكنولوجيا؛ الدراسة باللغة الإنجليزية.",
    notes_en: "University financial support at KAIST with English-medium technical programs."
  },
  {
    id: "bilkent-uni",
    source_type: "university",
    name_ar: "منح جامعة بيلكنت (Bilkent University)",
    name_en: "Bilkent Merit Scholarships (University)",
    country: "Turkey",
    min_gpa_ratio: 0.75,
    allowed_fields: ["Computer Science", "Artificial Intelligence", "Information Technology", "Engineering", "Mathematics", "Physics", "Business", "Economics", "Law"],
    min_english_level: "B2",
    language_cert_required: false,
    offers_language_year: true,
    funding_type: "partial",
    deadline: "2027-05-01",
    official_url: "https://w3.bilkent.edu.tr/bilkent/",
    notes_ar: "منح تفوق دراسي تقدمها الجامعة نفسها بنسب تغطية متعددة حسب التقييم الأكاديمي.",
    notes_en: "Merit-based tuition scholarships awarded directly by Bilkent University."
  },
  {
    id: "eth-zurich-uni",
    source_type: "university",
    name_ar: "برامج ومنح جامعة ETH Zurich",
    name_en: "ETH Zurich Programs & Aid (University)",
    country: "Switzerland",
    min_gpa_ratio: 0.85,
    allowed_fields: ["Computer Science", "Artificial Intelligence", "Engineering", "Mathematics", "Physics"],
    min_english_level: "C1",
    language_cert_required: true,
    offers_language_year: false,
    funding_type: "partial",
    deadline: "2027-03-31",
    official_url: "https://ethz.ch/en.html",
    notes_ar: "جامعة تقنية رائدة في سويسرا؛ راجع متطلبات اللغة والقبول والتمويل لكل برنامج.",
    notes_en: "Leading Swiss technical university; verify program language, admission, and funding details."
  },
  {
    id: "ubc-uni",
    source_type: "university",
    name_ar: "منح جامعة كولومبيا البريطانية (UBC International)",
    name_en: "UBC International Awards (University)",
    country: "Canada",
    min_gpa_ratio: 0.80,
    allowed_fields: ["Computer Science", "Artificial Intelligence", "Engineering", "Mathematics", "Physics", "Business", "Economics"],
    min_english_level: "B2",
    language_cert_required: true,
    offers_language_year: false,
    funding_type: "partial",
    deadline: "2027-01-15",
    official_url: "https://you.ubc.ca/financial-planning/scholarships-awards-international-students/",
    notes_ar: "منح وجوائز جامعية كندية للطلبة الدوليين بناءً على التميز الأكاديمي والملف.",
    notes_en: "University awards in Canada for international students based on academic merit."
  },
  {
    id: "melbourne-uni",
    source_type: "university",
    name_ar: "منح جامعة ملبورن الدولية (University of Melbourne)",
    name_en: "University of Melbourne Scholarships (University)",
    country: "Australia",
    min_gpa_ratio: 0.80,
    allowed_fields: ["Computer Science", "Artificial Intelligence", "Information Technology", "Engineering", "Mathematics", "Business", "Economics"],
    min_english_level: "B2",
    language_cert_required: true,
    offers_language_year: false,
    funding_type: "partial",
    deadline: "2027-04-01",
    official_url: "https://scholarships.unimelb.edu.au/",
    notes_ar: "منح جامعية أسترالية تنافسية تُمنح للطلبة الدوليين المقبولين أكاديمياً.",
    notes_en: "Competitive university scholarships in Australia for admitted international students."
  },
  {
    id: "kth-uni",
    source_type: "university",
    name_ar: "منح المعهد الملكي للتكنولوجيا KTH",
    name_en: "KTH Royal Institute Scholarships (University)",
    country: "Sweden",
    min_gpa_ratio: 0.78,
    allowed_fields: ["Computer Science", "Artificial Intelligence", "Cybersecurity", "Information Technology", "Engineering", "Mathematics"],
    min_english_level: "B2",
    language_cert_required: true,
    offers_language_year: false,
    funding_type: "partial",
    deadline: "2027-02-01",
    official_url: "https://www.kth.se/en/studies/bachelor",
    notes_ar: "منح جامعية في السويد للطلبة المتفوقين من خارج الاتحاد الأوروبي/المنطقة الاقتصادية الأوروبية.",
    notes_en: "University scholarships in Sweden for high-achieving non-EU/EEA applicants."
  }
];

const CYCLE_PATCHES = {
  "chevening-uk": {
    deadline: "2026-10-06",
    deadline_status: "closed",
    deadline_hint_ar: "أُغلقت دورة 6 أكتوبر 2026؛ والدورة التالية متوقعة حوالي أغسطس 2027.",
    deadline_hint_en: "Closed 6 Oct 2026 (11:00 UTC); next cycle opens ~Aug 2027.",
    last_checked: "2026-11-19",
    verified: false
  },
  "eiffel-france": {
    deadline: "2027-01-06",
    deadline_status: "confirmed",
    deadline_hint_ar: "6 يناير 2027 موعد المؤسسة الفرنسية؛ الموعد الداخلي للجامعة غالباً أبكر (نوفمبر–ديسمبر 2026) ولا يقدّم الطالب مباشرة.",
    deadline_hint_en: "6 Jan 2027 is for the French institution; internal university deadlines are earlier (Nov–Dec 2026). Students cannot apply directly.",
    last_checked: "2026-11-19",
    verified: false
  },
  "russia-gov": {
    deadline: "2027-01-15",
    deadline_status: "confirmed",
    deadline_hint_ar: "أجل محدث لدورة 2027 (15 يناير 2027)؛ راجع التعليمات المحلية أو السفارة.",
    deadline_hint_en: "Updated 2027 cycle date (15 Jan 2027); verify local embassy/portal instructions.",
    last_checked: "2026-11-19",
    verified: false
  },
  "turkey-gov": {
    deadline: "2027-02-20",
    deadline_status: "expected",
    deadline_hint_ar: "الفترة التقديرية من 10 يناير إلى 20 فبراير 2027 ولم يُعلن رسمياً بعد لدورة 2027.",
    deadline_hint_en: "Expected window 10 Jan to 20 Feb 2027; not yet officially announced for the cycle.",
    last_checked: "2026-11-19",
    verified: false
  },
  "hungary-gov": {
    deadline: "2027-01-15",
    deadline_status: "expected",
    deadline_hint_ar: "تقديري حوالي 15 يناير 2027؛ تحقق من فتح النداء الرسمي لدورتك.",
    deadline_hint_en: "Estimated around 15 Jan 2027; confirm official call opening for your track.",
    last_checked: "2026-11-19",
    verified: false
  },
  "korea-gks-gov": {
    deadline: "2027-02-28",
    deadline_status: "expected",
    deadline_hint_ar: "الدراسات العليا متوقعة حوالي فبراير 2027؛ تحقق من المسار (سفارة أو جامعة) وبلدك.",
    deadline_hint_en: "Graduate track expected ~Feb 2027; check embassy vs. university track and country rules.",
    last_checked: "2026-11-19",
    verified: false
  },
  "erasmus-mundus-eu": {
    deadline_status: "per_programme",
    deadline_hint_ar: "لكل برنامج إيراسموس موندوس أجله الخاص؛ معظمها بين ديسمبر 2026 ويناير 2027.",
    deadline_hint_en: "Each Erasmus Mundus programme has its own deadline, mostly between Dec 2026 and Jan 2027.",
    last_checked: "2026-11-19",
    verified: false
  },
  "sisgp-sweden-gov": {
    deadline: "2027-01-15",
    deadline_status: "confirmed",
    deadline_hint_ar: "15 يناير 2027 للتسجيل الجامعي، ثم طلب المنحة في فبراير 2027.",
    deadline_hint_en: "15 Jan 2027 for university admission application, followed by the scholarship window in Feb 2027.",
    last_checked: "2026-11-19",
    verified: false
  }
};

function getMergedScholarships() {
  return SCHOLARSHIPS.map((sch) => {
    const patch = CYCLE_PATCHES[sch.id];
    return patch ? { ...sch, ...patch } : { ...sch, deadline_status: "expected", verified: false };
  });
}

const ALL_COUNTRY_CODES = [
  "AF", "AL", "DZ", "AD", "AO", "AG", "AR", "AM", "AU", "AT", "AZ", "BS", "BH", "BD", "BB", "BY",
  "BE", "BZ", "BJ", "BT", "BO", "BA", "BW", "BR", "BN", "BG", "BF", "BI", "CV", "KH", "CM", "CA",
  "CF", "TD", "CL", "CN", "CO", "KM", "CG", "CD", "CR", "CI", "HR", "CU", "CY", "CZ", "DK", "DJ",
  "DM", "DO", "EC", "EG", "SV", "GQ", "ER", "EE", "SZ", "ET", "FJ", "FI", "FR", "GA", "GM", "GE",
  "DE", "GH", "GR", "GD", "GT", "GN", "GW", "GY", "HT", "HN", "HU", "IS", "IN", "ID", "IR", "IQ",
  "IE", "IL", "IT", "JM", "JP", "JO", "KZ", "KE", "KI", "KP", "KR", "KW", "KG", "LA", "LV", "LB",
  "LS", "LR", "LY", "LI", "LT", "LU", "MG", "MW", "MY", "MV", "ML", "MT", "MH", "MR", "MU", "MX",
  "FM", "MD", "MC", "MN", "ME", "MA", "MZ", "MM", "NA", "NR", "NP", "NL", "NZ", "NI", "NE", "NG",
  "MK", "NO", "OM", "PK", "PW", "PS", "PA", "PG", "PY", "PE", "PH", "PL", "PT", "QA", "RO", "RU",
  "RW", "KN", "LC", "VC", "WS", "SM", "ST", "SA", "SN", "RS", "SC", "SL", "SG", "SK", "SI", "SB",
  "SO", "ZA", "SS", "ES", "LK", "SD", "SR", "SE", "CH", "SY", "TJ", "TZ", "TH", "TL", "TG", "TO",
  "TT", "TN", "TR", "TM", "TV", "UG", "UA", "AE", "GB", "US", "UY", "UZ", "VU", "VA", "VE", "VN",
  "YE", "ZM", "ZW"
];

const FIELDS = [
  "Computer Science",
  "Artificial Intelligence",
  "Cybersecurity",
  "Information Technology",
  "Engineering",
  "Mathematics",
  "Physics",
  "Medicine",
  "Pharmacy",
  "Business",
  "Economics",
  "Law"
];

const CEFR = { A1: 1, A2: 2, B1: 3, B2: 4, C1: 5, C2: 6 };
let lang = "ar";
let savedIds = new Set();

function getDeadlineStatusLabel(status, isAr) {
  if (status === "confirmed") return isAr ? "موعد مؤكد" : "Confirmed";
  if (status === "closed") return isAr ? "منتهي / مغلق" : "Closed";
  if (status === "per_programme") return isAr ? "حسب البرنامج" : "Per Programme";
  return isAr ? "موعد متوقع" : "Expected";
}

function getAllCountries(currentLang) {
  const dn = new Intl.DisplayNames([currentLang === "ar" ? "ar" : "en"], { type: "region" });
  const names = ALL_COUNTRY_CODES
    .map((code) => dn.of(code))
    .filter(Boolean);
  const unique = [...new Set(names)];
  unique.sort((a, b) => a.localeCompare(b, currentLang === "ar" ? "ar" : "en"));
  return unique;
}

function fillSelects() {
  const cSel = document.getElementById("originCountrySelect");
  const fSel = document.getElementById("fieldSelect");

  if (cSel) {
    const prev = cSel.value;
    const countries = getAllCountries(lang);
    cSel.innerHTML = countries.map((c) => `<option value="${c}">${c}</option>`).join("");
    if (countries.includes(prev)) {
      cSel.value = prev;
    } else {
      const dz = countries.find((c) => c.includes("الجزائر") || c.toLowerCase().includes("algeria"));
      cSel.value = dz || countries[0] || "";
    }
  }

  if (fSel) {
    const prev = fSel.value;
    fSel.innerHTML = FIELDS.map((f) => `<option value="${f}">${f}</option>`).join("");
    fSel.value = FIELDS.includes(prev) ? prev : "Computer Science";
  }
}

function evaluate(stu, sch) {
  let score = 0;
  const reasons = [];
  const isAr = lang === "ar";

  if (sch.funding_type === "full" || !stu.fullOnly) {
    score += 20;
    reasons.push({ ok: true, pts: 20, txt: isAr ? "التمويل مناسب" : "Funding matches" });
  }

  const ratio = stu.maxGpa > 0 ? stu.gpa / stu.maxGpa : 0;
  if (ratio >= sch.min_gpa_ratio) {
    score += 30;
    reasons.push({ ok: true, pts: 30, txt: isAr ? "المعدل مستوفى" : "GPA meets requirement" });
  } else {
    const p = Math.max(0, Math.floor((ratio / sch.min_gpa_ratio) * 20));
    score += p;
    reasons.push({ ok: false, pts: p, txt: isAr ? "المعدل أقل من التقدير" : "GPA below estimate" });
  }

  if (sch.allowed_fields.includes(stu.field)) {
    score += 25;
    reasons.push({ ok: true, pts: 25, txt: isAr ? "التخصص مدعوم" : "Field supported" });
  } else {
    reasons.push({ ok: false, pts: 0, txt: isAr ? "التخصص غير مدرج" : "Field not listed" });
  }

  const sLvl = CEFR[stu.english] || 3;
  const rLvl = CEFR[sch.min_english_level] || 3;
  if (sLvl >= rLvl || (sch.offers_language_year && stu.needsLangYear)) {
    score += 15;
    reasons.push({ ok: true, pts: 15, txt: isAr ? "المسار اللغوي مناسب" : "Language path fits" });
  } else {
    reasons.push({ ok: false, pts: 0, txt: isAr ? "تحقق من متطلبات اللغة" : "Check language rules" });
  }

  score += 10;
  reasons.push({
    ok: true,
    pts: 10,
    txt: isAr
      ? `تم ضبط الملف لدولة (${stu.country}) — راجع أهلية بلدك على البوابة الرسمية.`
      : `Profile set for (${stu.country}) — verify country eligibility officially.`
  });

  return {
    sch,
    score: Math.min(100, score),
    eligible: ratio >= sch.min_gpa_ratio && sch.allowed_fields.includes(stu.field),
    reasons
  };
}

function getStu() {
  return {
    name: document.getElementById("studentName")?.value || "Student",
    country: document.getElementById("originCountrySelect")?.value || "Algeria",
    gpa: parseFloat(document.getElementById("gpaInput")?.value) || 0,
    maxGpa: parseFloat(document.getElementById("maxGpaInput")?.value) || 20,
    field: document.getElementById("fieldSelect")?.value || "Computer Science",
    english: document.getElementById("englishSelect")?.value || "B1",
    hasCert: !!document.getElementById("hasCertCheck")?.checked,
    needsLangYear: !!document.getElementById("langYearCheck")?.checked,
    fullOnly: !!document.getElementById("fullFundingCheck")?.checked,
    eligibleOnly: !!document.getElementById("eligibleOnlyCheck")?.checked,
    minScore: parseInt(document.getElementById("minScoreRange")?.value || "0", 10),
    q: (document.getElementById("searchInput")?.value || "").trim().toLowerCase()
  };
}

function cardHtml(item) {
  const isAr = lang === "ar";
  const title = isAr ? item.sch.name_ar : item.sch.name_en;
  const notes = isAr ? item.sch.notes_ar : item.sch.notes_en;
  const hint = isAr ? item.sch.deadline_hint_ar : item.sch.deadline_hint_en;
  const statusBadge = getDeadlineStatusLabel(item.sch.deadline_status, isAr);
  const isSaved = savedIds.has(item.sch.id);
  const sourceLabel = item.sch.source_type === "government"
    ? (isAr ? "منحة حكومية" : "Government")
    : (isAr ? "منحة جامعية" : "University");
  const list = item.reasons.map((r) => `<li>${r.ok ? "✅" : "⚠️"} ${r.txt} (+${r.pts})</li>`).join("");

  return `
    <article class="sch-card">
      <div>
        <div class="card-top">
          <div class="badges">
            <span class="badge badge-country">${item.sch.country}</span>
            <span class="badge badge-country">${sourceLabel}</span>
            <span class="badge badge-country">${statusBadge}</span>
            <span class="badge ${item.eligible ? "badge-ok" : "badge-warn"}">${item.eligible ? (isAr ? "مؤهل مبدئياً" : "Eligible") : (isAr ? "راجع الشروط" : "Check Rules")}</span>
          </div>
          <div class="card-score">${item.score}%</div>
        </div>
        <h3>${title}</h3>
        <div class="deadline-txt">
          ${isAr ? "آخر أجل" : "Deadline"}: <strong>${item.sch.deadline}</strong>
          ${item.sch.last_checked ? ` · ${isAr ? "فُحص" : "Checked"}: <span>${item.sch.last_checked}</span>` : ""}
        </div>
        ${hint ? `<p class="notes-txt"><strong>${isAr ? "تنبيه الموعد:" : "Schedule note:"}</strong> ${hint}</p>` : ""}
        <p class="notes-txt">${notes}</p>
        <ul class="reasons-list">${list}</ul>
      </div>
      <div class="card-actions">
        <button type="button" class="btn-save ${isSaved ? "saved" : ""}" onclick="toggleSaved('${item.sch.id}')">
          ${isSaved ? (isAr ? "محفوظة ✓" : "Saved ✓") : (isAr ? "حفظ للمقارنة" : "Save")}
        </button>
        <a class="btn-portal" href="${item.sch.official_url}" target="_blank" rel="noopener noreferrer">${isAr ? "الموقع الرسمي ↗" : "Portal ↗"}</a>
      </div>
    </article>
  `;
}

window.toggleSaved = function (id) {
  if (savedIds.has(id)) savedIds.delete(id);
  else savedIds.add(id);
  const el = document.getElementById("savedCount");
  if (el) el.textContent = String(savedIds.size);
  render();
};

function render() {
  const stu = getStu();
  const isAr = lang === "ar";
  const minVal = document.getElementById("minScoreVal");
  if (minVal) minVal.textContent = `${stu.minScore}%`;

  const mergedScholarships = getMergedScholarships();
  const evalList = mergedScholarships.map((s) => evaluate(stu, s)).sort((a, b) => b.score - a.score);
  const filtered = evalList.filter((x) => {
    if (x.score < stu.minScore) return false;
    if (stu.eligibleOnly && !x.eligible) return false;
    if (stu.q) {
      const hay = `${x.sch.name_ar} ${x.sch.name_en} ${x.sch.country}`.toLowerCase();
      if (!hay.includes(stu.q)) return false;
    }
    return true;
  });

  const top = filtered.length ? filtered[0].score : 0;
  const eligCnt = evalList.filter((x) => x.eligible).length;
  const eligPct = Math.round((eligCnt / mergedScholarships.length) * 100);
  const ready = Math.min(
    100,
    Math.round(((stu.gpa / Math.max(stu.maxGpa, 1)) * 60) + (stu.needsLangYear ? 25 : 15) + (stu.hasCert ? 15 : 10))
  );

  document.getElementById("gaugeTop")?.style.setProperty("--pct", top);
  if (document.getElementById("valTop")) document.getElementById("valTop").textContent = `${top}%`;

  document.getElementById("gaugeReadiness")?.style.setProperty("--pct", ready);
  if (document.getElementById("valReadiness")) document.getElementById("valReadiness").textContent = `${ready}%`;

  document.getElementById("gaugeEligible")?.style.setProperty("--pct", eligPct);
  if (document.getElementById("valEligible")) document.getElementById("valEligible").textContent = `${eligCnt}/${mergedScholarships.length}`;

  if (document.getElementById("resultsCounter")) {
    document.getElementById("resultsCounter").textContent = `${filtered.length} ${isAr ? "منحة مطابقة" : "matches"}`;
  }
  if (document.getElementById("cardsGrid")) {
    document.getElementById("cardsGrid").innerHTML = filtered.map(cardHtml).join("");
  }
  if (document.getElementById("barsContainer")) {
    document.getElementById("barsContainer").innerHTML = evalList
      .map((x) => `<div class="bar-row"><div class="bar-meta"><span>${isAr ? x.sch.name_ar : x.sch.name_en}</span><strong>${x.score}%</strong></div><div class="bar-track"><div class="bar-fill" style="width:${x.score}%"></div></div></div>`)
      .join("");
  }
  if (document.getElementById("savedGrid")) {
    const savedArr = evalList.filter((x) => savedIds.has(x.sch.id));
    document.getElementById("savedGrid").innerHTML = savedArr.length
      ? savedArr.map(cardHtml).join("")
      : `<p>${isAr ? "لا توجد منح محفوظة بعد." : "No saved items."}</p>`;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  fillSelects();

  document.querySelectorAll(".nav-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".nav-btn").forEach((b) => b.classList.remove("active"));
      document.querySelectorAll(".tab-content").forEach((t) => t.classList.remove("active"));
      btn.classList.add("active");
      document.getElementById(`tab-${btn.dataset.tab}`)?.classList.add("active");
    });
  });

  document.getElementById("langToggle")?.addEventListener("click", () => {
    lang = lang === "ar" ? "en" : "ar";
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.getElementById("langToggle").textContent = lang === "ar" ? "English" : "العربية";
    fillSelects();
    render();
  });

  document.querySelectorAll("aside input, aside select, #searchInput").forEach((el) => {
    el.addEventListener("input", render);
    el.addEventListener("change", render);
  });

  render();
});