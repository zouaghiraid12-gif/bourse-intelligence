from dataclasses import dataclass, field
from typing import List


@dataclass
class StudentProfile:
    name: str
    gpa: float
    max_gpa: float = 20.0
    field_of_study: str = "Computer Science"
    english_level: str = "B1"
    has_ielts_or_toefl: bool = False
    needs_language_year: bool = True
    preferred_countries: List[str] = field(default_factory=list)
    funding_required: str = "full"


@dataclass
class Scholarship:
    id: str
    name_en: str
    name_ar: str
    country: str
    degree_level: str
    min_gpa_ratio: float
    allowed_fields: List[str]
    min_english_level: str
    language_cert_required: bool
    offers_language_year: bool
    funding_type: str
    deadline: str
    official_url: str
    notes_ar: str = ""
    notes_en: str = ""
    