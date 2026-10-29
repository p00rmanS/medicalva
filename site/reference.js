// Quick-reference tables. The same rows power the Flashcards page.
// CPT is copyrighted by the AMA: only code numbers and short paraphrases appear here.
const referenceData = [
  {
    id: "modifiers",
    title: "Common modifiers",
    intro:
      "A modifier must be supported by documentation. Never append one only to bypass an edit.",
    cols: ["Modifier", "Meaning", "Quick test"],
    rows: [
      [
        "25",
        "Significant, separately identifiable E/M on the day of a procedure",
        "Was there a separate problem and separate work?",
      ],
      [
        "24",
        "Unrelated E/M during a post-operative period",
        "Is the visit about something other than the surgery?",
      ],
      [
        "57",
        "E/M that resulted in the decision for major surgery",
        "Day before or day of a major procedure?",
      ],
      [
        "58",
        "Staged or related procedure during post-op period",
        "Was it planned or related to the first procedure?",
      ],
      [
        "78",
        "Unplanned return to the operating room for a related procedure during post-op",
        "Unplanned and related?",
      ],
      [
        "79",
        "Unrelated procedure during post-op period",
        "Different problem entirely?",
      ],
      [
        "59",
        "Distinct procedural service",
        "Different session, site, or practitioner?",
      ],
      [
        "XE",
        "Separate encounter (subset of 59)",
        "Different encounter the same day?",
      ],
      ["XS", "Separate structure (subset of 59)", "Different organ or site?"],
      ["XP", "Separate practitioner (subset of 59)", "Different provider?"],
      [
        "XU",
        "Unusual non-overlapping service (subset of 59)",
        "Use only when no other X fits.",
      ],
      ["50", "Bilateral procedure", "Both sides, same session?"],
      ["LT / RT", "Left side / right side", "Which side was treated?"],
      [
        "51",
        "Multiple procedures at the same session",
        "More than one procedure?",
      ],
      [
        "22",
        "Increased procedural services",
        "Substantially greater work, documented?",
      ],
      ["52", "Reduced services", "Part of the service was not done?"],
      ["53", "Discontinued procedure", "Stopped for patient safety?"],
      ["26", "Professional component", "Only interpretation and report?"],
      ["TC", "Technical component", "Only equipment and staff?"],
      [
        "76",
        "Repeat procedure by the same provider",
        "Same provider repeated it?",
      ],
      [
        "77",
        "Repeat procedure by a different provider",
        "A different provider repeated it?",
      ],
      [
        "91",
        "Repeat clinical diagnostic lab test",
        "Same test repeated on the same day for a clinical reason?",
      ],
      [
        "95",
        "Synchronous telemedicine with audio and video (CPT)",
        "Live video visit?",
      ],
      ["QW", "CLIA-waived laboratory test", "Is the test CLIA-waived?"],
      ["JW", "Drug amount discarded", "Was single-dose drug wasted?"],
      ["JZ", "Zero drug amount discarded", "Was nothing wasted?"],
    ],
  },
  {
    id: "em",
    title: "Office visit E/M codes",
    intro:
      "Level by MDM (two of three elements) or by total time on the date of the encounter. Verify thresholds in the current CPT book.",
    cols: ["Code", "Patient / MDM", "Minimum time"],
    rows: [
      ["99202", "New patient · straightforward", "15 min"],
      ["99203", "New patient · low", "30 min"],
      ["99204", "New patient · moderate", "45 min"],
      ["99205", "New patient · high", "60 min"],
      ["99211", "Established · may not require a provider", "—"],
      ["99212", "Established · straightforward", "10 min"],
      ["99213", "Established · low", "20 min"],
      ["99214", "Established · moderate", "30 min"],
      ["99215", "Established · high", "40 min"],
    ],
  },
  {
    id: "carc",
    title: "Remittance codes",
    intro:
      "Read the group code with the CARC. Verify current meanings in the official X12 code lists.",
    cols: ["Code", "Meaning", "Usual next step"],
    rows: [
      ["CO", "Contractual obligation", "Write off. Do not bill the patient."],
      ["PR", "Patient responsibility", "Bill the secondary or the patient."],
      ["OA", "Other adjustment", "Read the CARC and RARC for the cause."],
      ["PI", "Payer-initiated reduction", "Review. May be appealable."],
      ["CR", "Correction and reversal", "Match to the original claim."],
      ["CARC 1", "Deductible amount", "Patient responsibility."],
      ["CARC 2", "Coinsurance amount", "Patient responsibility."],
      ["CARC 3", "Copayment amount", "Patient responsibility."],
      [
        "CARC 4",
        "Modifier inconsistent or missing",
        "Correct the modifier and resubmit.",
      ],
      [
        "CARC 16",
        "Claim lacks information",
        "Add the missing data and resubmit.",
      ],
      [
        "CARC 18",
        "Duplicate claim or service",
        "Check the original claim status.",
      ],
      [
        "CARC 22",
        "May be covered by another payer (COB)",
        "Verify primary payer and bill correctly.",
      ],
      [
        "CARC 27",
        "Coverage terminated before the date of service",
        "Re-verify eligibility and find other coverage.",
      ],
      [
        "CARC 29",
        "Timely filing limit expired",
        "Check proof of timely filing, else write off per policy.",
      ],
      [
        "CARC 31",
        "Patient cannot be identified as the insured",
        "Verify subscriber and demographic data.",
      ],
      [
        "CARC 45",
        "Charge exceeds fee schedule or contract",
        "Contractual write-off.",
      ],
      [
        "CARC 50",
        "Not deemed medically necessary",
        "Review documentation and consider an appeal.",
      ],
      ["CARC 96", "Non-covered charge", "Check benefits and notices."],
      [
        "CARC 97",
        "Benefit included in another service's payment",
        "Review NCCI edits and the documentation.",
      ],
      [
        "CARC 109",
        "Not covered by this payer",
        "Find the correct payer and resubmit.",
      ],
      [
        "CARC 119",
        "Benefit maximum reached",
        "Bill the patient or secondary per policy.",
      ],
      [
        "CARC 197",
        "Authorization absent",
        "Check records and request retro-authorization if allowed.",
      ],
    ],
  },
  {
    id: "icd",
    title: "ICD-10-CM chapters",
    intro:
      "Use the chapter to start a search, then verify in the Tabular List.",
    cols: ["Range", "Chapter", "Example"],
    rows: [
      [
        "A00–B99",
        "Infectious and parasitic diseases",
        "B34.9 viral infection, unspecified",
      ],
      ["C00–D49", "Neoplasms", "Z85.- is used for history of cancer"],
      ["D50–D89", "Blood and immune mechanism", "D64.9 anemia, unspecified"],
      [
        "E00–E89",
        "Endocrine, nutritional, metabolic",
        "E11.9 type 2 diabetes without complications",
      ],
      [
        "F01–F99",
        "Mental and behavioral",
        "F41.9 anxiety disorder, unspecified",
      ],
      ["G00–G99", "Nervous system", "G43.909 migraine, unspecified"],
      ["H00–H59", "Eye and adnexa", "H52.4 presbyopia"],
      ["H60–H95", "Ear and mastoid", "H66.90 otitis media, unspecified"],
      ["I00–I99", "Circulatory system", "I10 essential hypertension"],
      [
        "J00–J99",
        "Respiratory system",
        "J45.909 asthma, unspecified, uncomplicated",
      ],
      ["K00–K95", "Digestive system", "K21.9 GERD without esophagitis"],
      [
        "L00–L99",
        "Skin and subcutaneous tissue",
        "L30.9 dermatitis, unspecified",
      ],
      [
        "M00–M99",
        "Musculoskeletal and connective tissue",
        "M54.50 low back pain, unspecified",
      ],
      [
        "N00–N99",
        "Genitourinary system",
        "N39.0 urinary tract infection, site not specified",
      ],
      [
        "O00–O9A",
        "Pregnancy, childbirth, puerperium",
        "O codes take sequencing priority",
      ],
      ["P00–P96", "Perinatal conditions", "Newborn conditions"],
      [
        "Q00–Q99",
        "Congenital malformations",
        "Q21.0 ventricular septal defect",
      ],
      [
        "R00–R99",
        "Symptoms, signs, abnormal findings",
        "R05.9 cough, unspecified",
      ],
      [
        "S00–T88",
        "Injury, poisoning, external causes",
        "7th character: A, D, or S",
      ],
      ["V00–Y99", "External causes of morbidity", "Supplementary codes"],
      [
        "Z00–Z99",
        "Factors influencing health status",
        "Z23 encounter for immunization",
      ],
      [
        "U00–U85",
        "Codes for special purposes",
        "Emergency and special-use codes",
      ],
    ],
  },
  {
    id: "cpt",
    title: "CPT sections and surgery subsections",
    intro: "Section ranges for the current edition; always verify in the book.",
    cols: ["Range", "Section", "Notes"],
    rows: [
      [
        "99202–99499",
        "Evaluation and Management",
        "Office visits are 99202–99215",
      ],
      ["00100–01999", "Anesthesia", "Base units plus time and modifiers"],
      ["10004–69990", "Surgery", "Organized by body system"],
      ["70010–79999", "Radiology", "Global, 26, or TC"],
      ["80047–89398", "Pathology and Laboratory", "Panels, venipuncture 36415"],
      ["90281–99607", "Medicine", "Immunizations, psychiatry, therapy, ECG"],
      ["10004–19499", "Surgery · Integumentary", "Skin"],
      ["20100–29999", "Surgery · Musculoskeletal", "Bones and joints"],
      ["30000–32999", "Surgery · Respiratory", ""],
      ["33016–37799", "Surgery · Cardiovascular", ""],
      ["40490–49999", "Surgery · Digestive", ""],
      ["50010–53899", "Surgery · Urinary", ""],
      ["61000–64999", "Surgery · Nervous", ""],
      ["65091–68899", "Surgery · Eye and ocular adnexa", ""],
    ],
  },
  {
    id: "hcpcs",
    title: "HCPCS Level II letters",
    intro:
      "A letter plus four digits. Updated by CMS, with some quarterly changes.",
    cols: ["Letter", "Usually covers", "Example"],
    rows: [
      ["A", "Transport, supplies", "Ambulance and medical/surgical supplies"],
      ["E", "Durable medical equipment", "Wheelchairs and hospital beds"],
      [
        "G",
        "Temporary procedures and services",
        "G0438 / G0439 Medicare annual wellness visit",
      ],
      [
        "J",
        "Drugs administered other than orally",
        "J3301 triamcinolone, per 10 mg",
      ],
      ["L", "Orthotics and prosthetics", "Braces and prosthetic limbs"],
      ["Q", "Temporary codes", "Assigned by CMS"],
      ["S", "Private payer use", "Not for Medicare"],
      ["V", "Vision and hearing", "Eyeglasses and hearing aids"],
    ],
  },
  {
    id: "pos",
    title: "Place of service codes",
    intro: "Two digits on the claim line, box 24B.",
    cols: ["POS", "Place", "Note"],
    rows: [
      [
        "02",
        "Telehealth, other than patient's home",
        "Patient at a clinic or other site",
      ],
      ["10", "Telehealth in patient's home", "Payer policies vary"],
      ["11", "Office", "Standard in-person office visit"],
      ["12", "Home", "In-person visit at home"],
      ["19", "Off-campus outpatient hospital", ""],
      ["21", "Inpatient hospital", ""],
      ["22", "On-campus outpatient hospital", ""],
      ["23", "Emergency room", "Hospital"],
      ["24", "Ambulatory surgical center", ""],
      ["31", "Skilled nursing facility", ""],
      ["81", "Independent laboratory", ""],
    ],
  },
  {
    id: "forms",
    title: "CMS-1500 key boxes",
    intro: "Paper form field numbers. The 837P uses the same data.",
    cols: ["Box", "Field", "Tip"],
    rows: [
      ["1a", "Insured's ID number", "Match the card exactly"],
      ["17", "Referring or ordering provider", "Include NPI where required"],
      ["21", "Diagnosis codes (A–L)", "Up to 12. Check the ICD indicator."],
      [
        "22",
        "Resubmission code and original reference",
        "7 replaces. 8 voids.",
      ],
      ["23", "Prior authorization number", "Never invent one"],
      ["24A", "Dates of service", ""],
      ["24B", "Place of service", "Two digits"],
      ["24D", "CPT/HCPCS and modifiers", ""],
      ["24E", "Diagnosis pointer", "Up to four letters per line"],
      ["24G", "Units", "Check against MUEs"],
      ["24J", "Rendering provider NPI", "Match payer enrollment"],
      ["25", "Federal tax ID", ""],
      ["32", "Service facility", ""],
      ["33", "Billing provider", "Name, address, NPI"],
    ],
  },
  {
    id: "abbr",
    title: "Medical abbreviations",
    intro:
      "Confirm any unfamiliar abbreviation in an approved source. Some abbreviations are on the Joint Commission ‘Do Not Use’ list and should not appear in your own writing.",
    cols: ["Abbreviation", "Meaning", "Note"],
    rows: [
      ["BID", "Twice a day", ""],
      ["TID", "Three times a day", ""],
      ["QID", "Four times a day", ""],
      ["PRN", "As needed", ""],
      ["HTN", "Hypertension", ""],
      ["DM", "Diabetes mellitus", "Specify type 1 or 2"],
      ["CAD", "Coronary artery disease", ""],
      ["CHF", "Congestive heart failure", "Specify type when documented"],
      ["COPD", "Chronic obstructive pulmonary disease", ""],
      ["GERD", "Gastroesophageal reflux disease", ""],
      ["UTI", "Urinary tract infection", ""],
      ["URI", "Upper respiratory infection", ""],
      ["SOB", "Shortness of breath", ""],
      ["c/o", "Complains of", ""],
      ["s/p", "Status post", "After a procedure or event"],
      ["NKDA", "No known drug allergies", ""],
      ["WNL", "Within normal limits", ""],
      ["NAD", "No acute distress", ""],
      ["HPI", "History of present illness", ""],
      ["ROS", "Review of systems", ""],
      ["PMH", "Past medical history", ""],
      ["CBC", "Complete blood count", ""],
      ["BMP / CMP", "Basic / comprehensive metabolic panel", ""],
      ["A1c", "Glycated hemoglobin", "Diabetes control marker"],
      ["ECG / EKG", "Electrocardiogram", ""],
      ["QD", "Daily", "Do Not Use: can be mistaken for QID"],
      ["U", "Unit", "Do Not Use: can be mistaken for 0 or 4"],
      ["MS / MSO4", "Morphine or magnesium sulfate", "Do Not Use: ambiguous"],
    ],
  },
  {
    id: "icdcommon",
    title: "Common ICD-10-CM codes",
    intro:
      "Examples that appear throughout the lessons. Verify each code and its notes in the current fiscal year's code set.",
    cols: ["Code", "Description", "Note"],
    rows: [
      [
        "I10",
        "Essential (primary) hypertension",
        "Not with CKD or heart disease",
      ],
      [
        "I11.0",
        "Hypertensive heart disease with heart failure",
        "Add an I50.- code for the type",
      ],
      ["I12.9", "Hypertensive CKD, stage 1–4 or unspecified", "Add N18.-"],
      ["I48.0", "Paroxysmal atrial fibrillation", ""],
      ["I48.91", "Unspecified atrial fibrillation", ""],
      ["I50.22", "Chronic systolic heart failure", ""],
      ["I50.9", "Heart failure, unspecified", ""],
      ["I25.10", "Coronary artery disease, native vessel, no angina", ""],
      [
        "E11.9",
        "Type 2 diabetes without complications",
        "Default type when none is documented",
      ],
      ["E11.22", "Type 2 diabetes with diabetic CKD", "Add N18.-"],
      ["E11.42", "Type 2 diabetes with diabetic polyneuropathy", ""],
      [
        "E11.65",
        "Type 2 diabetes with hyperglycemia",
        "‘Uncontrolled’ alone is not enough",
      ],
      ["E78.5", "Hyperlipidemia, unspecified", ""],
      ["E03.9", "Hypothyroidism, unspecified", ""],
      [
        "N18.30",
        "CKD stage 3, unspecified",
        "Stage must come from the provider",
      ],
      ["N18.4", "CKD stage 4", ""],
      ["N18.6", "End-stage renal disease", "Add Z99.2 if on dialysis"],
      [
        "J44.1",
        "COPD with acute exacerbation",
        "Add a tobacco code if documented",
      ],
      ["J45.909", "Unspecified asthma, uncomplicated", ""],
      ["J06.9", "Acute upper respiratory infection, unspecified", ""],
      ["J20.9", "Acute bronchitis, unspecified", ""],
      [
        "J18.9",
        "Pneumonia, unspecified organism",
        "Not coded as ‘probable’ in outpatient",
      ],
      ["U07.1", "COVID-19", "Confirmed cases only"],
      [
        "Z20.822",
        "Contact with and suspected exposure to COVID-19",
        "No symptoms",
      ],
      ["K21.9", "GERD without esophagitis", ""],
      ["M54.50", "Low back pain, unspecified", "M54.5 alone is not valid"],
      [
        "N39.0",
        "Urinary tract infection, site not specified",
        "Add B96.- for the organism",
      ],
      ["F32.A", "Depression, unspecified", ""],
      ["F33.1", "Major depressive disorder, recurrent, moderate", ""],
      ["F41.1", "Generalized anxiety disorder", ""],
      ["F41.9", "Anxiety disorder, unspecified", ""],
      ["F17.210", "Nicotine dependence, cigarettes, uncomplicated", ""],
      ["R05.9", "Cough, unspecified", "Duration-specific R05 codes exist"],
      ["R50.9", "Fever, unspecified", ""],
      ["R07.9", "Chest pain, unspecified", ""],
      ["R10.9", "Unspecified abdominal pain", ""],
      ["R51.9", "Headache, unspecified", ""],
      [
        "Z79.4",
        "Long-term (current) use of insulin",
        "Not for temporary insulin",
      ],
      ["Z79.84", "Long-term use of oral hypoglycemic drugs", ""],
      ["Z79.01", "Long-term use of anticoagulants", ""],
    ],
  },
  {
    id: "preventive",
    title: "Preventive, screening, and testing codes",
    intro:
      "Short paraphrases only. CPT descriptors belong to the AMA; verify codes in the current edition.",
    cols: ["Code", "Meaning", "Note"],
    rows: [
      ["Z00.00", "Adult general exam without abnormal findings", ""],
      [
        "Z00.01",
        "Adult general exam with abnormal findings",
        "Code the finding too",
      ],
      ["Z00.121", "Routine child health exam with abnormal findings", ""],
      ["Z00.129", "Routine child health exam without abnormal findings", ""],
      [
        "Z12.11",
        "Screening for colon cancer",
        "First-listed on a screening colonoscopy",
      ],
      ["Z12.31", "Screening mammogram", ""],
      ["Z12.4", "Screening for cervical cancer", ""],
      ["Z12.5", "Screening for prostate cancer", ""],
      ["Z13.31", "Screening for depression", ""],
      [
        "Z23",
        "Encounter for immunization",
        "With vaccine and administration codes",
      ],
      ["33", "Modifier: preventive service", "Commercial plans"],
      [
        "PT",
        "Modifier: screening that became diagnostic or therapeutic",
        "Medicare colorectal",
      ],
      [
        "G0105 / G0121",
        "Medicare screening colonoscopy, high risk / not high risk",
        "",
      ],
      [
        "G0402",
        "Medicare Initial Preventive Physical Exam (Welcome to Medicare)",
        "",
      ],
      [
        "G0438 / G0439",
        "Medicare Annual Wellness Visit, initial / subsequent",
        "",
      ],
      ["77067", "Screening mammogram, bilateral", ""],
      ["77065 / 77066", "Diagnostic mammogram, unilateral / bilateral", ""],
      [
        "90460 / 90461",
        "Vaccine administration with counseling, to age 18: first / each additional component",
        "",
      ],
      [
        "90471 / 90472",
        "Vaccine administration without counseling: first / each additional",
        "",
      ],
      ["96110", "Developmental screening, per instrument", ""],
      ["96127", "Brief emotional or behavioral assessment, per instrument", ""],
      ["93000", "ECG, complete", ""],
      [
        "93005 / 93010",
        "ECG tracing only / interpretation and report only",
        "",
      ],
      ["93015", "Cardiovascular stress test, complete", ""],
      ["93306", "Echocardiogram, complete with Doppler", ""],
      [
        "20610 / 20611",
        "Major joint injection without / with ultrasound guidance",
        "",
      ],
      ["90834", "Psychotherapy, 38–52 minutes", ""],
      ["90837", "Psychotherapy, 53 minutes or more", ""],
    ],
  },
];
// Word parts come straight from the terminology lessons so the two never drift apart.
(() => {
  const seen = new Set();
  const rows = [];
  for (const lesson of codingLessons) {
    if (!/^Medical (language in depth|terminology)/.test(lesson.title))
      continue;
    const area = lesson.title
      .replace(/^Medical language in depth: /, "")
      .replace(/^Medical terminology: /, "General");
    for (const [part, meaning] of lesson.terms || []) {
      if (seen.has(part)) continue;
      seen.add(part);
      rows.push([part, meaning, area]);
    }
  }
  referenceData.push({
    id: "wordparts",
    title: "Medical word parts",
    intro:
      "Prefixes, combining forms, and suffixes from the terminology lessons. Split every term into parts before you look it up.",
    cols: ["Word part", "Meaning", "Found in"],
    rows,
  });
})();
referenceData.push({
  id: "mdm",
  title: "E/M medical decision making at a glance",
  intro:
    "Paraphrased summary of the office E/M table. Two of three elements decide the level. Verify wording in the current CPT book.",
  cols: ["Level", "Problems addressed", "Data and risk"],
  rows: [
    [
      "Straightforward",
      "One self-limited or minor problem",
      "Minimal or no data. Minimal risk.",
    ],
    [
      "Low",
      "Two minor problems, or one stable chronic illness, or one acute uncomplicated illness",
      "Limited data: two items or an independent historian. Low risk.",
    ],
    [
      "Moderate",
      "Chronic illness with exacerbation, two or more stable chronic illnesses, undiagnosed new problem, acute illness with systemic symptoms, or acute complicated injury",
      "Moderate data: three items, independent interpretation, or discussion with an external professional. Moderate risk such as prescription drug management.",
    ],
    [
      "High",
      "Chronic illness with severe exacerbation, or a threat to life or bodily function",
      "Extensive data: two of three categories. High risk such as hospitalization decision or drug therapy needing intensive toxicity monitoring.",
    ],
  ],
});
referenceData.push({
  id: "cpcblueprint",
  title: "CPC exam blueprint",
  intro:
    "Domains and question counts from AAPC's published outline (confirm the current version). 100 questions, four hours, 70 correct to pass.",
  cols: ["Domain", "Questions", "Study here"],
  rows: [
    ["Medical terminology", "4", "Terminology lessons"],
    ["Anatomy", "4", "Anatomy and body-system lessons"],
    ["Compliance and regulatory", "3", "Compliance, HIPAA, Medicare"],
    [
      "Coding guidelines",
      "7",
      "ICD-10-CM guidelines, CPT conventions, modifiers",
    ],
    ["ICD-10-CM", "5", "ICD-10-CM lessons"],
    ["HCPCS Level II", "3", "HCPCS lessons"],
    ["CPT 10000 series", "6", "Skin and breast"],
    ["CPT 20000 series", "6", "Musculoskeletal"],
    [
      "CPT 30000 series",
      "6",
      "Respiratory, cardiovascular, hemic and lymphatic",
    ],
    ["CPT 40000 series", "6", "Digestive"],
    ["CPT 50000 series", "6", "Urinary, genital, maternity"],
    ["CPT 60000 series", "6", "Endocrine, nervous, eye, ear"],
    ["Radiology", "6", "Imaging lessons"],
    ["Pathology and laboratory", "6", "Lab and pathology lessons"],
    ["Medicine", "6", "Medicine section lessons"],
    ["E/M", "6", "E/M lessons"],
    ["Anesthesia", "4", "Anesthesia lesson"],
    ["Cases", "10", "Case practice sets"],
  ],
});
const flashcardDeck = referenceData.flatMap((section) =>
  section.rows.map((row) => ({
    topic: section.id,
    topicTitle: section.title,
    front: row[0],
    back: row.slice(1).filter(Boolean).join(" — "),
  })),
);
