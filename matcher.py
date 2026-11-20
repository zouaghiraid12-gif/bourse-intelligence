from typing import Dict, List, Tuple
from schema import Scholarship, StudentProfile

CEFR_ORDER = {
    "A1": 1,
    "A2": 2,
    "B1": 3,
    "B2": 4,
    "C1": 5,
    "C2": 6,
}


def evaluate_scholarship(student: StudentProfile, scholarship: Scholarship) -> Dict:
    reasons: List[Tuple[str, str, int]] = []
    total_score = 0
    max_score = 100

    # 1. التمويل (20 نقطة)
    if scholarship.funding_type == "full" or student.funding_required == "partial":
        total_score += 20
        reasons.append(("pass", "نوع التمويل يتوافق مع احتياجك.", 20))
    else:
        reasons.append(("warn", "المنحة جزئية وأنت تبحث عن تمويل كامل.", 0))

    # 2. المعدل الأكاديمي (25 نقطة)
    student_ratio = (student.gpa / student.max_gpa) if student.max_gpa > 0 else 0.0
    if student_ratio >= scholarship.min_gpa_ratio:
        total_score += 25
        reasons.append(("pass", f"معدلك ({student.gpa}/{student.max_gpa}) يستوفي الحد الأدنى المطلوب.", 25))
    else:
        partial_pts = max(0, int((student_ratio / max(scholarship.min_gpa_ratio, 0.01)) * 15))
        total_score += partial_pts
        reasons.append(("fail", f"معدلك ({student.gpa}/{student.max_gpa}) أقل من الحد الأدنى المقدر للمنحة.", partial_pts))

    # 3. التخصص الدراسي (25 نقطة)
    allowed_lower = [f.lower() for f in scholarship.allowed_fields]
    if student.field_of_study.lower() in allowed_lower:
        total_score += 25
        reasons.append(("pass", f"تخصص ({student.field_of_study}) ضمن التخصصات المدعومة.", 25))
    else:
        reasons.append(("warn", f"تخصص ({student.field_of_study}) غير مدرج صراحة في القائمة الأولية.", 0))

    # 4. اللغة والسنة التحضيرية وشهادة IELTS/TOEFL (20 نقطة)
    stu_lvl = CEFR_ORDER.get(student.english_level.upper(), 3)
    req_lvl = CEFR_ORDER.get(scholarship.min_english_level.upper(), 3)
    lang_score = 0

    if stu_lvl >= req_lvl:
        lang_score += 10
        reasons.append(("pass", f"مستوى لغتك ({student.english_level}) مناسب للمتطلب ({scholarship.min_english_level}).", 10))
    elif scholarship.offers_language_year and student.needs_language_year:
        lang_score += 8
        reasons.append(("pass", "توفر المنحة سنة تحضيرية للغة تعوض الفجوة اللغوية.", 8))
    else:
        reasons.append(("warn", "قد تحتاج إلى تحسين مستوى اللغة أو التحقق من بدائل الشهادة.", 0))

    if not scholarship.language_cert_required or student.has_ielts_or_toefl:
        lang_score += 10
        reasons.append(("pass", "لا يوجد عائق بخصوص شهادة لغة دولية إلزامية.", 10))
    else:
        reasons.append(("fail", "المنحة تتطلب شهادة لغة دولية غير متوفرة حالياً في ملفك.", 0))

    total_score += lang_score

    # 5. تفضيل الدولة (10 نقاط)
    if not student.preferred_countries or scholarship.country in student.preferred_countries:
        total_score += 10
        reasons.append(("pass", f"الدولة ({scholarship.country}) ضمن اختياراتك.", 10))
    else:
        reasons.append(("warn", f"الدولة ({scholarship.country}) خارج قائمة الدول المفضلة المحددة.", 0))

    match_percentage = min(100, int((total_score / max_score) * 100))
    eligible = all(status != "fail" for status, _, _ in reasons)

    return {
        "scholarship": scholarship,
        "match_percentage": match_percentage,
        "eligible": eligible,
        "reasons": reasons,
    }
    