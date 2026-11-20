import json
from pathlib import Path
import streamlit as st

from matcher import evaluate_scholarship
from schema import Scholarship, StudentProfile

DATA_PATH = Path(__file__).parent / "data" / "scholarships.json"


def load_scholarships(path: Path) -> list[Scholarship]:
    if not path.exists():
        return []
    with path.open("r", encoding="utf-8") as f:
        raw_items = json.load(f)
    return [Scholarship(**item) for item in raw_items]


TEXTS = {
    "ar": {
        "brand": "Bourse Intelligence",
        "hope_quote": "كل مسار أكاديمي كبير يبدأ بفرصة واحدة تكتشفها في الوقت المناسب — ملفك اليوم قد يكون بوابة غدك.",
        "tagline": "منصة ذكية لتحليل المنح الدراسية ومطابقة ملفك الأكاديمي واللغوي",
        "lang_label": "اللغة / Language",
        "sidebar_header": "ملف الطالب",
        "name": "الاسم",
        "gpa": "المعدل",
        "max_gpa": "الحد الأقصى",
        "field": "التخصص الدراسي",
        "english": "مستوى الإنجليزية",
        "cert": "لدي شهادة IELTS / TOEFL",
        "lang_year": "أحتاج سنة تحضيرية للغة",
        "full_funding": "تمويل كامل فقط",
        "countries": "الدول المفضلة",
        "eligible_only": "المؤهلون مبدئياً فقط",
        "min_score": "الحد الأدنى لنسبة التوافق",
        "tab_explore": "استكشاف المنح",
        "tab_analytics": "تحليل الملف والفجوات",
        "tab_saved": "قائمة المقارنة",
        "kpi_total": "إجمالي المنح",
        "kpi_eligible": "مؤهل مبدئياً",
        "kpi_top": "أعلى توافق",
        "kpi_avg": "متوسط التوافق",
        "match_score": "نسبة التوافق",
        "eligible": "مؤهل مبدئياً",
        "not_eligible": "يحتاج استيفاء شرط",
        "full_badge": "تمويل كامل",
        "partial_badge": "تمويل جزئي / متغير",
        "deadline": "آخر أجل",
        "official_link": "الموقع الرسمي",
        "save_btn": "حفظ للمقارنة",
        "saved_btn": "محفوظة في المقارنة",
        "reasons": "تفاصيل التقييم",
        "no_data": "لم يتم العثور على بيانات منح في data/scholarships.json.",
        "no_results": "لا توجد منح مطابقة للفلاتر الحالية.",
        "no_saved": "لم تقم بحفظ أي منحة للمقارنة بعد. استخدم زر «حفظ للمقارنة» على أي بطاقة.",
        "gaps_title": "أبرز نقاط القوة والفجوات بناءً على ملفك",
    },
    "en": {
        "brand": "Bourse Intelligence",
        "hope_quote": "Every global academic journey begins with one well-timed opportunity — your profile today can unlock tomorrow.",
        "tagline": "Smart scholarship matching & profile readiness dashboard",
        "lang_label": "اللغة / Language",
        "sidebar_header": "Student Profile",
        "name": "Name",
        "gpa": "GPA",
        "max_gpa": "Max Scale",
        "field": "Field of Study",
        "english": "English Level",
        "cert": "Have IELTS / TOEFL",
        "lang_year": "Need language prep year",
        "full_funding": "Full funding only",
        "countries": "Preferred Countries",
        "eligible_only": "Preliminarily eligible only",
        "min_score": "Minimum Match Score",
        "tab_explore": "Explore Scholarships",
        "tab_analytics": "Profile & Match Insights",
        "tab_saved": "Saved Comparison",
        "kpi_total": "Total Scholarships",
        "kpi_eligible": "Eligible Matches",
        "kpi_top": "Top Match",
        "kpi_avg": "Average Match",
        "match_score": "Match Score",
        "eligible": "Eligible",
        "not_eligible": "Check Requirements",
        "full_badge": "Full Funding",
        "partial_badge": "Partial / Varies",
        "deadline": "Deadline",
        "official_link": "Official Site",
        "save_btn": "Save to Compare",
        "saved_btn": "Saved",
        "reasons": "Evaluation Breakdown",
        "no_data": "No scholarships found in data/scholarships.json.",
        "no_results": "No scholarships match your current filters.",
        "no_saved": "No scholarships saved yet. Click 'Save to Compare' on any card.",
        "gaps_title": "Key Strengths & Gaps from Your Profile",
    },
}


def inject_css(lang: str) -> None:
    is_rtl = lang == "ar"
    direction = "rtl" if is_rtl else "ltr"
    align = "right" if is_rtl else "left"

    st.markdown(
        f"""
        <style>
            /* خلفية ملهمة توحي بالأفق والفرص العالمية والمسارات الصاعدة */
            .stApp {{
                direction: {direction};
                text-align: {align};
                background-color: #eef4ff;
                background-image:
                    radial-gradient(circle at 12% 14%, rgba(56, 189, 248, 0.24) 0%, transparent 38%),
                    radial-gradient(circle at 88% 18%, rgba(129, 140, 248, 0.22) 0%, transparent 42%),
                    radial-gradient(circle at 50% 92%, rgba(45, 212, 191, 0.16) 0%, transparent 45%),
                    radial-gradient(rgba(30, 64, 175, 0.11) 1px, transparent 1px),
                    linear-gradient(160deg, #f0f7ff 0%, #e8efff 52%, #f3f0ff 100%);
                background-size: auto, auto, auto, 26px 26px, auto;
            }}
            [data-testid="stSidebar"] {{
                direction: {direction};
                text-align: {align};
                background: linear-gradient(180deg, #f8faff 0%, #eef2ff 100%);
                border-inline-end: 1px solid rgba(99, 102, 241, 0.16);
            }}
            .top-banner {{
                position: relative;
                overflow: hidden;
                background:
                    radial-gradient(circle at 85% 25%, rgba(56, 189, 248, 0.35), transparent 45%),
                    linear-gradient(125deg, #0f172a 0%, #1e3a8a 52%, #3730a3 100%);
                color: #ffffff;
                padding: 1.75rem 1.9rem;
                border-radius: 22px;
                margin-bottom: 1.25rem;
                border: 1px solid rgba(255, 255, 255, 0.18);
                box-shadow: 0 14px 32px rgba(30, 58, 138, 0.22);
            }}
            .hope-pill {{
                display: inline-block;
                background: rgba(255, 255, 255, 0.14);
                border: 1px solid rgba(255, 255, 255, 0.22);
                color: #e0f2fe;
                padding: 0.32rem 0.85rem;
                border-radius: 999px;
                font-size: 0.84rem;
                font-weight: 600;
                margin-bottom: 0.7rem;
            }}
            .top-banner h1 {{
                margin: 0 0 0.4rem 0;
                font-size: 2.05rem;
                font-weight: 800;
                color: #ffffff;
            }}
            .top-banner p {{
                margin: 0;
                color: #e2e8f0;
                font-size: 0.98rem;
            }}
            .kpi-card {{
                background: rgba(255, 255, 255, 0.86);
                backdrop-filter: blur(8px);
                border: 1px solid rgba(148, 163, 184, 0.28);
                border-radius: 18px;
                padding: 1.05rem 1.2rem;
                box-shadow: 0 8px 20px rgba(30, 58, 138, 0.06);
            }}
            .kpi-label {{
                font-size: 0.84rem;
                color: #475569;
                font-weight: 700;
                margin-bottom: 0.25rem;
            }}
            .kpi-value {{
                font-size: 1.7rem;
                font-weight: 800;
                color: #0f172a;
            }}
            .sch-card {{
                background: rgba(255, 255, 255, 0.9);
                backdrop-filter: blur(8px);
                border: 1px solid rgba(148, 163, 184, 0.28);
                border-radius: 20px;
                padding: 1.2rem 1.25rem;
                margin-bottom: 1rem;
                box-shadow: 0 10px 24px rgba(15, 23, 42, 0.07);
            }}
            .tag-row {{
                display: flex;
                flex-wrap: wrap;
                gap: 0.4rem;
                margin-bottom: 0.65rem;
            }}
            .tag-blue {{
                background: #dbeafe;
                color: #1e40af;
                padding: 0.22rem 0.65rem;
                border-radius: 999px;
                font-size: 0.78rem;
                font-weight: 700;
            }}
            .tag-green {{
                background: #dcfce7;
                color: #166534;
                padding: 0.22rem 0.65rem;
                border-radius: 999px;
                font-size: 0.78rem;
                font-weight: 700;
            }}
            .tag-amber {{
                background: #fef3c7;
                color: #92400e;
                padding: 0.22rem 0.65rem;
                border-radius: 999px;
                font-size: 0.78rem;
                font-weight: 700;
            }}
            .score-big {{
                font-size: 1.55rem;
                font-weight: 800;
                color: #1d4ed8;
            }}
        </style>
        """,
        unsafe_allow_html=True,
    )


def render_scholarship_card(res: dict, lang: str, t: dict, saved_ids: set[str], col_key: str) -> None:
    sch: Scholarship = res["scholarship"]
    score = res["match_percentage"]
    title = sch.name_ar if lang == "ar" else sch.name_en
    notes = sch.notes_ar if lang == "ar" else sch.notes_en
    funding_label = t["full_badge"] if sch.funding_type == "full" else t["partial_badge"]
    elig_label = t["eligible"] if res["eligible"] else t["not_eligible"]
    elig_class = "tag-green" if res["eligible"] else "tag-amber"

    st.markdown(
        f"""
        <div class="sch-card">
            <div class="tag-row">
                <span class="tag-blue">{sch.country}</span>
                <span class="tag-blue">{funding_label}</span>
                <span class="{elig_class}">{elig_label}</span>
            </div>
            <div style="display:flex; justify-content:space-between; align-items:baseline; gap:0.5rem;">
                <h4 style="margin:0; color:#0f172a; font-weight:800;">{title}</h4>
                <span class="score-big">{score}%</span>
            </div>
            <p style="color:#64748b; font-size:0.84rem; margin:0.35rem 0 0.65rem 0;">
                {t["deadline"]}: <strong>{sch.deadline}</strong>
            </p>
            <p style="color:#334155; font-size:0.9rem; margin:0 0 0.75rem 0;">{notes}</p>
        </div>
        """,
        unsafe_allow_html=True,
    )
    st.progress(min(max(score, 0), 100) / 100)

    with st.expander(t["reasons"]):
        for status, msg, pts in res["reasons"]:
            icon = "✅" if status == "pass" else ("⚠️" if status == "warn" else "❌")
            st.write(f"{icon} {msg} (+{pts})")

    b1, b2 = st.columns(2)
    is_saved = sch.id in saved_ids
    with b1:
        if st.button(
            t["saved_btn"] if is_saved else t["save_btn"],
            key=f"save_{sch.id}_{col_key}",
            use_container_width=True,
        ):
            if is_saved:
                st.session_state.saved_scholarships.remove(sch.id)
            else:
                st.session_state.saved_scholarships.add(sch.id)
            st.rerun()
    with b2:
        st.link_button(t["official_link"], sch.official_url, use_container_width=True)


def main() -> None:
    st.set_page_config(page_title="Bourse Intelligence", page_icon="🎓", layout="wide")

    if "saved_scholarships" not in st.session_state:
        st.session_state.saved_scholarships = set()

    scholarships = load_scholarships(DATA_PATH)
    all_fields = sorted(
        {field for s in scholarships for field in s.allowed_fields}
        | {"Computer Science", "Artificial Intelligence", "Cybersecurity"}
    )
    all_countries = sorted({s.country for s in scholarships})

    with st.sidebar:
        lang = st.selectbox(
            TEXTS["ar"]["lang_label"],
            options=["ar", "en"],
            format_func=lambda x: "العربية" if x == "ar" else "English",
        )
        t = TEXTS[lang]
        st.divider()
        st.header(t["sidebar_header"])
        name = st.text_input(t["name"], value="Djihad")

        c1, c2 = st.columns(2)
        with c1:
            gpa = st.number_input(t["gpa"], min_value=0.0, max_value=100.0, value=13.4, step=0.1)
        with c2:
            max_gpa = st.number_input(t["max_gpa"], min_value=1.0, max_value=100.0, value=20.0, step=1.0)

        field_of_study = st.selectbox(
            t["field"],
            options=all_fields,
            index=all_fields.index("Artificial Intelligence") if "Artificial Intelligence" in all_fields else 0,
        )
        english_level = st.selectbox(t["english"], options=["A1", "A2", "B1", "B2", "C1", "C2"], index=2)
        has_cert = st.checkbox(t["cert"], value=False)
        needs_lang_year = st.checkbox(t["lang_year"], value=True)
        full_only = st.checkbox(t["full_funding"], value=True)
        preferred_countries = st.multiselect(t["countries"], options=all_countries, default=[])

        st.divider()
        eligible_only = st.checkbox(t["eligible_only"], value=False)
        min_score = st.slider(t["min_score"], min_value=0, max_value=100, value=0, step=5)

    t = TEXTS[lang]
    inject_css(lang)

    st.markdown(
        f"""
        <div class="top-banner">
            <div class="hope-pill">{t["hope_quote"]}</div>
            <h1>{t["brand"]}</h1>
            <p>{t["tagline"]}</p>
        </div>
        """,
        unsafe_allow_html=True,
    )

    if not scholarships:
        st.warning(t["no_data"])
        return

    student = StudentProfile(
        name=name,
        gpa=gpa,
        max_gpa=max_gpa,
        field_of_study=field_of_study,
        english_level=english_level,
        has_ielts_or_toefl=has_cert,
        needs_language_year=needs_lang_year,
        preferred_countries=preferred_countries,
        funding_required="full" if full_only else "partial",
    )

    evaluated = [evaluate_scholarship(student, s) for s in scholarships]
    evaluated.sort(key=lambda r: r["match_percentage"], reverse=True)

    filtered = [
        r
        for r in evaluated
        if r["match_percentage"] >= min_score and (not eligible_only or r["eligible"])
    ]

    eligible_count = sum(1 for r in evaluated if r["eligible"])
    top_score = max((r["match_percentage"] for r in filtered), default=0)
    avg_score = int(sum(r["match_percentage"] for r in filtered) / len(filtered)) if filtered else 0

    k1, k2, k3, k4 = st.columns(4)
    for col, label, val in [
        (k1, t["kpi_total"], len(scholarships)),
        (k2, t["kpi_eligible"], eligible_count),
        (k3, t["kpi_top"], f"{top_score}%"),
        (k4, t["kpi_avg"], f"{avg_score}%"),
    ]:
        with col:
            st.markdown(
                f"""
                <div class="kpi-card">
                    <div class="kpi-label">{label}</div>
                    <div class="kpi-value">{val}</div>
                </div>
                """,
                unsafe_allow_html=True,
            )

    st.write("")
    tab1, tab2, tab3 = st.tabs([t["tab_explore"], t["tab_analytics"], t["tab_saved"]])

    with tab1:
        if not filtered:
            st.info(t["no_results"])
        else:
            cols = st.columns(2)
            for idx, res in enumerate(filtered):
                with cols[idx % 2]:
                    render_scholarship_card(res, lang, t, st.session_state.saved_scholarships, f"exp_{idx}")

    with tab2:
        st.subheader(t["gaps_title"])
        chart_data = {
            (r["scholarship"].name_ar if lang == "ar" else r["scholarship"].name_en): r["match_percentage"]
            for r in evaluated
        }
        st.bar_chart(chart_data)

    with tab3:
        saved_items = [r for r in evaluated if r["scholarship"].id in st.session_state.saved_scholarships]
        if not saved_items:
            st.info(t["no_saved"])
        else:
            cols = st.columns(2)
            for idx, res in enumerate(saved_items):
                with cols[idx % 2]:
                    render_scholarship_card(res, lang, t, st.session_state.saved_scholarships, f"sav_{idx}")


if __name__ == "__main__":
    main()