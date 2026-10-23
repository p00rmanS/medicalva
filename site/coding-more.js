// Coding track additions, batch 2: screening, pediatrics, cardiology testing, deeper ICD-10-CM,
// inpatient primer, CDI, a fourth practice set, and career planning. Verify codes in current books.
addCodingLessons([
  {
    title: "Screening versus diagnostic services",
    desc: "Tell a screening from a diagnostic service, sequence the diagnoses, and use the right modifiers and codes for colonoscopy, mammography, and other preventive tests.",
    time: "45 min",
    objectives: [
      "Distinguish screening from diagnostic services using the documentation.",
      "Code common cancer and condition screenings with the correct Z codes.",
      "Handle a screening that becomes diagnostic or therapeutic.",
    ],
    concept: `<p>A <b>screening</b> is a test done when the patient has no signs, symptoms, or known disease for that condition. A <b>diagnostic</b> service is done because of a sign, a symptom, a known problem, or a follow-up of an abnormal finding. The distinction changes the diagnosis code, the CPT or HCPCS code, and what the patient owes. Preventive screenings recommended by the U.S. Preventive Services Task Force often have no patient cost-sharing under the Affordable Care Act. Diagnostic services usually apply deductible and coinsurance.</p>
<p>Common screening diagnosis codes: Z12.11 (screening for malignant neoplasm of colon), Z12.31 (screening mammogram), Z12.4 (cervical cancer screening), Z12.5 (prostate cancer screening), Z13.1 (diabetes screening), Z13.220 (lipid disorder screening), Z11.4 (HIV screening), Z13.31 (depression screening).</p>
<p><b>Colonoscopy.</b> A screening colonoscopy uses 45378 with Z12.11. For commercial plans, modifier 33 identifies a preventive service. If a polyp is removed during a screening colonoscopy, report the therapeutic code (for example, 45385 for snare removal), list Z12.11 first and the finding (such as K63.5, polyp of colon) second. Medicare uses modifier PT to show a screening that turned diagnostic or therapeutic. Medicare also has screening HCPCS codes: G0105 for high-risk patients and G0121 for patients not at high risk.</p>
<p><b>Mammography.</b> Screening bilateral mammography is 77067. Diagnostic mammography is 77065 for one breast and 77066 for both. Screening digital breast tomosynthesis is reported with the add-on 77063. A palpable lump or other symptom makes the exam diagnostic, with a diagnosis code for the documented symptom or finding.</p>`,
    terms: [
      [
        "Screening",
        "A test in a patient without signs, symptoms, or known disease for the condition.",
      ],
      [
        "Diagnostic",
        "A service prompted by a sign, symptom, known condition, or abnormal result.",
      ],
      [
        "Modifier 33",
        "Preventive service; identifies services with no cost-sharing under certain plans.",
      ],
      [
        "Modifier PT",
        "Medicare modifier for a colorectal screening that became diagnostic or therapeutic.",
      ],
      [
        "G0105 / G0121",
        "Medicare screening colonoscopy: high-risk / not high-risk.",
      ],
      [
        "77067 / 77065 / 77066",
        "Screening bilateral mammogram / diagnostic unilateral / diagnostic bilateral.",
      ],
      [
        "USPSTF",
        "U.S. Preventive Services Task Force, whose A and B recommendations drive many no-cost preventive benefits.",
      ],
    ],
    steps: [
      "Read the order and the note to find out why the test was done.",
      "Decide screening or diagnostic from the documented reason, not from the type of test.",
      "Assign the screening Z code first for screenings. For diagnostic services, code the sign, symptom, or condition.",
      "Select the matching CPT or HCPCS code and the right modifier for the payer.",
      "If findings are discovered during a screening, add them as secondary diagnoses and report the therapeutic code.",
      "Check frequency limits and coverage rules before billing.",
    ],
    lab: [
      [
        "A commercial plan patient has a screening colonoscopy and the physician removes a polyp with a snare.",
        "45385-33 with Z12.11 first and K63.5 second. The diagnostic colonoscopy is included in the therapeutic code.",
      ],
      [
        "A Medicare patient has the same procedure.",
        "45385-PT with Z12.11 first and K63.5 second, following Medicare's instructions for a screening that became therapeutic.",
      ],
      [
        "A 52-year-old with no symptoms has a screening mammogram, both breasts.",
        "77067 (screening bilateral mammography) with Z12.31. Add 77063 if screening tomosynthesis was also done.",
      ],
      [
        "A patient with a palpable breast lump has a bilateral mammogram.",
        "77066 (diagnostic bilateral). The diagnosis is the documented lump or finding, not Z12.31.",
      ],
      [
        "A man requests a PSA blood test as a screening with no symptoms.",
        "Code the PSA test performed (84153 for total PSA, or G0103 for Medicare screening PSA) with Z12.5.",
      ],
    ],
    case: "A patient is told a mammogram will be free. The claim goes out as diagnostic and the patient receives a $200 bill. The note says ‘routine annual mammogram, no complaints.’",
    model:
      "The documentation supports a screening. Review the claim, correct it to 77067 with Z12.31 (and modifier 33 if the payer requires it), submit a corrected claim, and ask billing to adjust the patient account. Find out why the order was entered as diagnostic and fix the process.",
    mistakes: [
      "Calling a test diagnostic because of the type of equipment used.",
      "Listing a finding before the screening Z code.",
      "Forgetting modifier 33 or PT where the payer needs it.",
    ],
    drills: [
      "Make a table of five screening tests with the Z code and the CPT or HCPCS code.",
      "Code six fictional screening scenarios, including two that become diagnostic.",
      "Write a patient-friendly explanation of why a screening and a diagnostic test are billed differently.",
    ],
    rubric: [
      "Screening versus diagnostic is justified from the note.",
      "Z codes are sequenced first for screenings.",
      "Modifiers match the payer.",
      "Patient cost-sharing impact is understood.",
    ],
    scenario:
      "During a screening colonoscopy a polyp is removed. Which diagnosis is listed first?",
    answers: [
      "The polyp code",
      "Z12.11 for the screening, then the polyp code",
      "No diagnosis is needed",
    ],
    correct: 1,
    why: "The reason for the encounter was the screening, so the screening Z code is first and the finding follows.",
    taglish:
      "Ang screening ay test na ginagawa kahit walang sintomas; ang diagnostic ay dahil may sintomas, kilalang sakit, o abnormal na resulta. Sa colonoscopy, Z12.11 ang nauuna kahit may nakitang polyp, tapos ang polyp code. Gamitin ang modifier 33 sa commercial at PT sa Medicare kapag naging therapeutic. Mahalaga ito dahil ang screening ay madalas libre sa pasyente, pero ang diagnostic ay may deductible o coinsurance.",
    tip: "Ask the one question first: ‘Why was this test ordered?’ The answer in the note decides everything else.",
    mentor:
      "Explain screening versus diagnostic to a friend using a smoke-detector analogy, then repeat it in coding terms.",
    remember: [
      "Screening = no signs, symptoms, or known disease. Diagnostic = there is a reason.",
      "The screening Z code is listed first, then any findings.",
      "Modifier 33 (commercial) and PT (Medicare) show preventive services that turned therapeutic.",
    ],
    source:
      "USPSTF recommendations, CMS preventive services guidance, and payer policies. Verify current coverage and codes.",
  },
  {
    title: "Pediatric and well-child coding",
    desc: "Report well-child visits by age, immunization administration with counseling, screening instruments, and state-supplied vaccines.",
    time: "45 min",
    objectives: [
      "Choose preventive visit codes by age group and patient status.",
      "Report vaccine products and administration codes correctly.",
      "Add screening tests and a same-day problem visit without double billing.",
    ],
    concept: `<p>Well-child visits use preventive medicine codes that depend on age and on whether the child is new or established. New patient codes are 99381 (under 1 year), 99382 (1–4), 99383 (5–11), 99384 (12–17), and 99385 (18–39). Established codes are 99391–99395 with the same age bands. Age is counted on the date of service. The diagnosis is Z00.121 for a routine child health exam with abnormal findings and Z00.129 without abnormal findings. Newborn exams use Z00.110 (under 8 days) and Z00.111 (8–28 days). When abnormal findings are found, code the finding as an additional diagnosis.</p>
<p><b>Immunizations</b> need two kinds of codes: one for the vaccine product (from the 90xxx range, matching the specific vaccine) and one for the administration. For patients through age 18 when a physician or qualified health professional provides counseling, use 90460 for the first component of each vaccine and 90461 for each additional component of a combination vaccine. Without counseling, or for older patients, use 90471 for the first vaccine and 90472 for each additional one (90473 and 90474 for intranasal or oral). The diagnosis is Z23.</p>
<p><b>Vaccines for Children (VFC)</b> supplies free vaccine to eligible children. The practice may bill an administration fee but not the vaccine product price. Some payers need the vaccine product code with modifier SL to show a state-supplied vaccine. <b>Screening tools</b> are reported separately: 96110 developmental screening per instrument, 96127 emotional or behavioral assessment per instrument, 99173 visual acuity screening, 92551 hearing screening, and 36416 capillary blood collection. A significant problem addressed at a well visit may be reported with an E/M and modifier 25.</p>`,
    terms: [
      ["99381–99385", "New patient preventive visit codes by age band."],
      [
        "99391–99395",
        "Established patient preventive visit codes by age band.",
      ],
      [
        "Z00.121 / Z00.129",
        "Routine child health exam with / without abnormal findings.",
      ],
      [
        "90460 / 90461",
        "Immunization administration with counseling: first component / each additional component.",
      ],
      [
        "90471 / 90472",
        "Immunization administration without counseling: first / each additional.",
      ],
      ["VFC", "Vaccines for Children program."],
      ["SL", "Modifier for a state-supplied vaccine."],
      [
        "96110",
        "Developmental screening with scoring and documentation, per instrument.",
      ],
    ],
    steps: [
      "Calculate the child's age on the date of service and confirm new versus established status.",
      "Choose the preventive visit code and the Z00 diagnosis, adding any abnormal findings.",
      "List each vaccine given with its product code, route, and whether counseling was documented.",
      "Select administration codes and add Z23 as a diagnosis.",
      "Add screening tool codes for each documented instrument.",
      "Evaluate whether a separate problem E/M with modifier 25 is supported.",
    ],
    lab: [
      [
        "A 6-year-old established patient has a routine well visit. Two single-component vaccines are given and the physician documents counseling. No problems.",
        "99393 with Z00.129 and Z23. Report each vaccine's product code, and 90460 for each vaccine's first component (two units of 90460, one per vaccine), because counseling was documented and the child is 18 or under.",
      ],
      [
        "A 16-year-old new patient has a routine exam and the physician notes an abnormal heart murmur.",
        "99384 with Z00.121 and a code for the documented murmur finding.",
      ],
      [
        "A 9-month-old has a developmental screen using a standardized tool that is scored and documented.",
        "96110 per instrument, reported along with the preventive visit code.",
      ],
      [
        "A child receives a VFC vaccine. What can the practice bill?",
        "The administration code, and the vaccine product code if the payer requires it, with modifier SL for state-supplied vaccine. Never bill the vaccine's price for a VFC dose.",
      ],
    ],
    case: "A practice bills a 99213 for a sore throat and a 99393 for a well-child exam on the same day with no modifier. The 99213 is denied.",
    model:
      "If the note shows a significant, separately identifiable problem evaluation, append modifier 25 to the problem E/M and link it to the sore throat diagnosis. If the problem work was minor, it is included in the preventive visit and the 99213 should not be billed. Check the documentation first.",
    mistakes: [
      "Using the wrong age band.",
      "Billing the VFC vaccine product price.",
      "Using 90471 when counseling was documented for a patient under 19.",
    ],
    drills: [
      "Create an age band chart for new and established preventive codes.",
      "Code five fictional well visits with vaccines.",
      "Write a checklist for a well-child claim.",
    ],
    rubric: [
      "Age band and patient status are correct.",
      "Vaccine product and administration are both reported.",
      "Modifier 25 is justified.",
      "VFC billing rules are followed.",
    ],
    scenario:
      "A 7-year-old receives one single-component vaccine with documented physician counseling. Which administration code fits?",
    answers: ["90471", "90460", "99211"],
    correct: 1,
    why: "For patients through age 18 with documented counseling, 90460 reports the first component of a vaccine.",
    taglish:
      "Sa well-child visit, ang code ay ayon sa edad at kung bago o established ang pasyente. Z00.129 ang normal na exam at Z00.121 kung may abnormal finding. Sa bakuna, kailangan mo ng product code at administration code, at Z23 ang diagnosis. Kapag may counseling at 18 pababa, 90460 at 90461; kung wala, 90471 at 90472. Sa VFC, huwag singilin ang presyo ng bakuna.",
    tip: "Keep a two-column card: ‘vaccine product code’ and ‘administration code.’ Missing either one is the most common vaccine billing error.",
    mentor:
      "Role-play explaining to a parent why a well visit and a sick visit on the same day can appear as two services.",
    remember: [
      "Preventive visit codes depend on age band and new versus established status.",
      "Every vaccine needs a product code and an administration code, plus Z23.",
      "Counseling for patients 18 and under points to 90460 and 90461.",
    ],
  },
  {
    title: "Cardiology and diagnostic testing codes",
    desc: "Report ECGs, echocardiograms, stress tests, and rhythm monitors with global, professional, and technical components.",
    time: "40 min",
    objectives: [
      "Differentiate complete, tracing-only, and interpretation-only reporting for the ECG family.",
      "Apply global, 26, and TC to diagnostic tests.",
      "Select diagnoses that support cardiac testing.",
    ],
    concept: `<p>Many cardiology tests have three ways to bill, depending on who did what. The <b>ECG</b> is a good example: 93000 is the complete service with the tracing, interpretation, and report; 93005 is the tracing only; and 93010 is the interpretation and report only. A practice that records the ECG and reads it bills 93000. A practice that records the tracing and sends it to a cardiologist bills 93005, and the cardiologist bills 93010.</p>
<p>The <b>stress test</b> works the same way: 93015 is the complete test with supervision, tracing, interpretation, and report; 93016 is physician supervision only; 93017 is the tracing only; and 93018 is interpretation and report only. A <b>transthoracic echocardiogram</b> with spectral and color Doppler is 93306 as a global service; when it is done at a facility that owns the equipment, the cardiologist bills 93306 with modifier 26, and the facility bills the technical component. A <b>Holter monitor</b> (up to 48 hours) is 93224 for the complete service, or 93225, 93226, and 93227 for its separate parts: recording, scanning analysis, and physician review.</p>
<p>Diagnosis codes should reflect the reason for testing: signs and symptoms such as R00.2 (palpitations), R07.9 (chest pain, unspecified), R00.0 (tachycardia, unspecified), R00.1 (bradycardia, unspecified), or an established diagnosis such as I48.91 (atrial fibrillation, unspecified). A preprocedural cardiovascular exam can use Z01.810. Do not code a suspected condition in the outpatient setting.</p>`,
    terms: [
      [
        "93000 / 93005 / 93010",
        "ECG complete / tracing only / interpretation and report only.",
      ],
      [
        "93015–93018",
        "Cardiovascular stress test: complete / supervision / tracing / interpretation.",
      ],
      [
        "93306",
        "Transthoracic echocardiogram, complete with Doppler and color flow.",
      ],
      [
        "93224–93227",
        "Holter monitor: complete / recording / scanning analysis / physician review.",
      ],
      ["Global", "Technical and professional components billed together."],
    ],
    steps: [
      "Identify which party did the tracing or technical work and who interpreted the results.",
      "Choose the code for the work that party performed: complete, tracing only, or interpretation only.",
      "For facility-based tests, append 26 for the professional component only.",
      "Assign diagnoses for the documented sign, symptom, or condition that justified the test.",
      "Confirm there is a documented interpretation and report if you bill any interpretation code.",
      "Check NCCI edits for same-day E/M and testing.",
    ],
    lab: [
      [
        "A provider performs and reads a 12-lead ECG in the office for palpitations.",
        "93000 with R00.2.",
      ],
      [
        "A practice records an ECG and sends it to an outside cardiologist, who documents an interpretation.",
        "The practice bills 93005. The cardiologist bills 93010.",
      ],
      [
        "A cardiologist interprets an echocardiogram performed at a hospital that owns the equipment.",
        "93306-26 for the physician. The hospital reports the technical component.",
      ],
      [
        "A cardiologist supervises a stress test, and the practice's staff records the tracing, and the same cardiologist interprets it, all in the practice.",
        "93015, the complete service.",
      ],
    ],
    case: "A practice bills 93000 and 93010 for the same ECG on the same patient.",
    model:
      "93000 already includes the interpretation and report, so 93010 duplicates it. Remove 93010 and keep 93000. Review how the charge sheet allows both to be selected and add an edit.",
    mistakes: [
      "Billing complete and interpretation-only for the same test.",
      "Billing a test with no documented interpretation.",
      "Using a suspected diagnosis to justify testing.",
    ],
    drills: [
      "Create a who-did-what table for ECG, stress test, echo, and Holter.",
      "Code five fictional tests with the correct component.",
      "Write a documentation checklist for an interpretation report.",
    ],
    rubric: [
      "The component matches the work performed.",
      "Duplicate billing is avoided.",
      "The report is documented.",
      "Diagnoses are signs, symptoms, or confirmed conditions.",
    ],
    scenario:
      "A cardiologist reads an ECG tracing taken by another practice. Which code does the cardiologist report?",
    answers: ["93000", "93010", "93005"],
    correct: 1,
    why: "93010 reports the interpretation and report only. 93005 is the tracing only and 93000 is the complete service.",
    taglish:
      "Sa ECG, tatlo ang paraan ng pag-bill: 93000 kung ikaw ang kumuha at nagbasa, 93005 kung tracing lang, at 93010 kung interpretation lang. Pareho sa stress test (93015 hanggang 93018). Sa mga test sa ospital, gamitin ang 26 para sa professional component. Huwag i-bill ang 93000 at 93010 para sa iisang ECG at siguraduhing may nakasulat na interpretation.",
    tip: "Before you pick a code ask: ‘Who recorded it and who read it?’ The answer is the whole code choice.",
    mentor:
      "Draw a small three-column chart (tracing, interpretation, global) for each test and fill it from memory.",
    remember: [
      "93000 is complete, 93005 is tracing only, 93010 is interpretation only.",
      "Use 26 for the professional component of a facility-based test.",
      "A billed interpretation needs a documented report.",
    ],
  },
  {
    title: "Cardiovascular and respiratory diagnosis coding",
    desc: "Code atrial fibrillation, heart failure, coronary disease, COPD, influenza, COVID-19, and pneumonia from the documentation.",
    time: "50 min",
    objectives: [
      "Assign cardiovascular codes with the right type, acuity, and status codes.",
      "Code COPD, influenza, COVID-19, and pneumonia in the outpatient setting.",
      "Add long-term drug therapy and history codes when documented.",
    ],
    concept: `<p><b>Cardiovascular.</b> Atrial fibrillation depends on type: I48.0 paroxysmal, I48.11 longstanding persistent, I48.19 other persistent, I48.20 chronic unspecified, I48.21 permanent, and I48.91 unspecified. Heart failure needs the type and acuity when documented, such as I50.22 (chronic systolic) and I50.32 (chronic diastolic), and I50.9 when unspecified. With hypertension, the combination codes apply (I11.0 hypertensive heart disease with heart failure) and an I50 code is added for the type of failure. Coronary artery disease of native vessels without angina is I25.10. Long-term anticoagulant use is Z79.01. A history of stroke or TIA without residual deficits is Z86.73. Bypass graft status is Z95.1.</p>
<p><b>Respiratory.</b> COPD is J44.9 (unspecified) or J44.1 (with acute exacerbation), and the guidelines ask for a tobacco use or dependence code with it. Influenza has its own codes depending on whether the virus was identified, such as J10.1 (influenza due to other identified influenza virus with other respiratory manifestations) and J11.1 (influenza due to unidentified influenza virus with other respiratory manifestations). Pneumonia, unspecified organism, is J18.9. For COVID-19, U07.1 reports a confirmed diagnosis, and associated conditions such as pneumonia (J12.82) are added when documented. Z20.822 reports contact with and suspected exposure to COVID-19 with no symptoms, and Z11.52 reports screening for COVID-19. In the outpatient setting, ‘probable’ or ‘suspected’ cases are not coded as confirmed. Always follow the current guidelines, which have changed several times.</p>`,
    terms: [
      ["I48.0", "Paroxysmal atrial fibrillation."],
      ["I48.91", "Unspecified atrial fibrillation."],
      [
        "I50.22 / I50.32",
        "Chronic systolic / chronic diastolic heart failure.",
      ],
      [
        "I25.10",
        "Atherosclerotic heart disease of native coronary artery without angina pectoris.",
      ],
      ["J44.1", "COPD with acute exacerbation."],
      ["J18.9", "Pneumonia, unspecified organism."],
      ["U07.1", "COVID-19 (confirmed)."],
      ["Z79.01", "Long-term use of anticoagulants."],
    ],
    steps: [
      "Identify the condition, its type or acuity, and any complications from the provider's wording.",
      "Check for combination codes, especially with hypertension.",
      "Add status or long-term drug codes when documented.",
      "Apply the outpatient rule on uncertain diagnoses.",
      "Add ‘use additional code’ items such as tobacco use for COPD.",
      "Verify in the Tabular List.",
    ],
    lab: [
      ["Paroxysmal atrial fibrillation, on warfarin.", "I48.0 and Z79.01."],
      [
        "Hypertension with chronic systolic heart failure.",
        "I11.0 (hypertensive heart disease with heart failure) and I50.22 (chronic systolic heart failure).",
      ],
      [
        "COPD with acute exacerbation in a current cigarette smoker (nicotine dependence documented).",
        "J44.1 and F17.210.",
      ],
      [
        "Influenza A with respiratory manifestations, virus identified (not novel).",
        "J10.1.",
      ],
      [
        "A patient with no symptoms is a close contact of a confirmed COVID-19 case.",
        "Z20.822 (contact with and suspected exposure to COVID-19).",
      ],
      ["A history of TIA with no residual deficits.", "Z86.73."],
    ],
    case: "A note says ‘probable pneumonia, cough, fever’ in an outpatient visit. A coder assigns J18.9.",
    model:
      "Outpatient guidelines prohibit coding probable conditions as confirmed. Code the documented symptoms (R05.9 or the duration-specific cough code and R50.9). If the provider later confirms pneumonia, a new encounter may support J18.9. A compliant query can ask for the confirmed diagnosis if the provider has it.",
    mistakes: [
      "Using I10 when heart or kidney disease is documented.",
      "Forgetting the tobacco code with COPD.",
      "Coding exposure as infection.",
    ],
    drills: [
      "Code ten fictional cardiovascular and respiratory statements.",
      "Make a table of atrial fibrillation types.",
      "Write the outpatient rules on probable diagnoses for respiratory infections.",
    ],
    rubric: [
      "Type and acuity match the documentation.",
      "Combination and status codes are included.",
      "Uncertain diagnoses are not coded as confirmed.",
      "Current-year guidelines were checked.",
    ],
    scenario:
      "A patient has no symptoms but was exposed to a confirmed COVID-19 case. Which code reports the encounter reason?",
    answers: ["U07.1", "Z20.822", "J12.82"],
    correct: 1,
    why: "Z20.822 reports contact with and suspected exposure. U07.1 requires a confirmed diagnosis.",
    taglish:
      "Sa atrial fibrillation, ang code ay depende sa uri: paroxysmal, persistent, permanent. Sa heart failure, kunin ang uri at acuity kung nakasulat, at kapag may hypertension, gamitin ang I11.0 na may I50 code. Sa COPD, huwag kalimutan ang tobacco code. Sa COVID-19, U07.1 lang kapag confirmed; kung exposure lang, Z20.822. At sa outpatient, huwag mag-code ng ‘probable’ na sakit.",
    tip: "When you see two conditions in one body system, ask first whether a combination code exists before coding them separately.",
    mentor:
      "Make a flashcard set of the five atrial fibrillation types and say each aloud.",
    remember: [
      "Atrial fibrillation codes depend on type, and heart failure on type and acuity.",
      "Hypertension with heart disease uses a combination code plus the heart failure type.",
      "U07.1 is for confirmed COVID-19. Exposure is Z20.822.",
    ],
    source:
      "ICD-10-CM Official Guidelines, including the COVID-19 guidance. Check the current fiscal year for changes.",
  },
  {
    title: "Diabetes and kidney disease in depth",
    desc: "Code diabetes by type, complication, and control, add status codes, and pair it correctly with chronic kidney disease.",
    time: "55 min",
    objectives: [
      "Select diabetes codes by type and documented complications.",
      "Handle ‘uncontrolled,’ insulin use, and diabetes of other causes.",
      "Combine diabetes, hypertension, and kidney disease codes correctly.",
    ],
    concept: `<p>Diabetes is one of the most frequently coded and tested conditions. Start with the <b>type</b>: E10 type 1, E11 type 2, E08 diabetes due to an underlying condition, E09 drug- or chemical-induced diabetes, E13 other specified diabetes, and O24 for diabetes in pregnancy. If the type is not documented, the guidelines say to default to type 2 (E11). If a patient with type 2 uses insulin, the type stays E11 and Z79.4 is added. If both insulin and an oral drug are used, report both Z79.4 and Z79.84. Do not use Z79.4 for temporary insulin use.</p>
<p><b>Complications</b> are built into the code. E11.21 diabetic nephropathy, E11.22 diabetic chronic kidney disease, E11.319 diabetic retinopathy without macular edema (unspecified), E11.40 diabetic neuropathy (unspecified), E11.42 diabetic polyneuropathy, E11.51 diabetic peripheral angiopathy without gangrene, E11.621 foot ulcer (with an L97 code to identify the site and depth), E11.649 hypoglycemia without coma, and E11.65 hyperglycemia. Use as many codes as needed to describe all documented complications.</p>
<p>The word <b>uncontrolled</b> alone is not enough. The Index requires you to know whether the provider meant hyperglycemia or hypoglycemia, so a compliant query may be needed. Prediabetes is R73.03. A history of gestational diabetes is Z86.32.</p>
<p><b>Kidney.</b> Chronic kidney disease uses N18.1 to N18.5 for stages, N18.6 for end-stage renal disease (ESRD), and N18.9 for unspecified, and the stage must be documented by the provider rather than inferred from a lab value. Code the diabetic CKD with E11.22 plus the N18 stage. When hypertension and CKD are both present, use I12.-, such as I12.9 for stages 1–4 or unspecified and I12.0 for stage 5 or ESRD. With heart failure as well, use I13.-. Z99.2 reports dependence on renal dialysis, and Z94.0 reports kidney transplant status.</p>`,
    terms: [
      ["E10 / E11", "Type 1 / type 2 diabetes mellitus."],
      [
        "E08 / E09",
        "Diabetes due to underlying condition / drug- or chemical-induced.",
      ],
      ["Z79.4", "Long-term (current) use of insulin."],
      ["Z79.84", "Long-term use of oral hypoglycemic drugs."],
      ["Z79.85", "Long-term use of injectable non-insulin antidiabetic drugs."],
      ["N18.4 / N18.5 / N18.6", "CKD stage 4 / stage 5 / ESRD."],
      ["I12.0", "Hypertensive CKD with stage 5 CKD or ESRD."],
      ["Z99.2", "Dependence on renal dialysis."],
    ],
    steps: [
      "Identify the diabetes type. If none is documented, follow the default rule.",
      "List every documented complication and look for its combination code.",
      "Add codes for hyperglycemia or hypoglycemia only when documented.",
      "Add long-term drug codes for insulin, oral, or injectable non-insulin drugs.",
      "For kidney disease, find the provider-documented stage and the link to hypertension or diabetes.",
      "Sequence the codes according to the reason for the visit and the Tabular List instructions.",
    ],
    lab: [
      [
        "‘Diabetes with chronic kidney disease stage 4, on insulin glargine and metformin.’",
        "E11.22, N18.4, Z79.4, and Z79.84. The type defaults to type 2 when not documented.",
      ],
      [
        "‘Type 2 diabetes with diabetic polyneuropathy and hyperglycemia.’",
        "E11.42 and E11.65.",
      ],
      [
        "‘Type 2 diabetes with a diabetic foot ulcer of the right heel.’",
        "E11.621 with an L97 code for the ulcer's site and depth as documented (for example L97.41- for the right heel and midfoot). Verify the full code.",
      ],
      [
        "‘Hypertension with end-stage renal disease on dialysis.’",
        "I12.0, N18.6, and Z99.2.",
      ],
      [
        "‘Uncontrolled diabetes’ with no detail about high or low blood sugar.",
        "Do not guess. A compliant query should ask whether the provider means hyperglycemia, hypoglycemia, or neither, and what the clinical picture is.",
      ],
    ],
    case: "A coder assigns N18.4 because the lab shows an eGFR of 22 and the note says ‘CKD.’",
    model:
      "Stage cannot be assigned from a lab value by the coder. The provider must document the stage. Code N18.9 (CKD, unspecified) from the documentation and send a non-leading query asking for the stage if it affects the claim.",
    mistakes: [
      "Choosing a CKD stage from the eGFR.",
      "Coding E11.9 when a complication is documented.",
      "Using Z79.4 for a short course of insulin.",
    ],
    drills: [
      "Build a diabetes decision table with type, complications, control, and drug status.",
      "Code ten fictional diabetes statements.",
      "Write a compliant query for ‘uncontrolled diabetes.’",
    ],
    rubric: [
      "Type, complications, and control are separated.",
      "Status codes match the documented medications.",
      "CKD stage comes from the provider.",
      "Queries are neutral.",
    ],
    scenario:
      "A note says ‘diabetes’ with no type and the patient takes insulin. What is the best answer?",
    answers: [
      "Type 1 because of the insulin",
      "Default to type 2 (E11.-) and add Z79.4 for insulin",
      "Code only Z79.4",
    ],
    correct: 1,
    why: "When the type is not documented the guideline defaults to type 2. Insulin use does not change the type, and Z79.4 is added.",
    taglish:
      "Sa diabetes, unahin ang type: E10 type 1, E11 type 2; kapag walang nakasulat, E11 ang default. Ang mga komplikasyon ay nasa combination codes gaya ng E11.22 at E11.42. Idagdag ang Z79.4 kung insulin at Z79.84 kung oral na gamot. Ang salitang ‘uncontrolled’ ay hindi sapat; kailangang alamin kung hyperglycemia o hypoglycemia. Sa CKD, ang provider ang magsasabi ng stage, hindi ang coder mula sa lab.",
    tip: "Write the diabetes sentence like a formula: type + complications + control + medications. Every part is a code or a status code.",
    mentor:
      "Explain to a partner why insulin does not make a patient type 1, in Taglish.",
    remember: [
      "Default to type 2 when the type is not documented. Insulin does not change the type.",
      "‘Uncontrolled’ needs clarification: hyperglycemia or hypoglycemia.",
      "CKD stage must be documented by the provider.",
    ],
  },
  {
    title: "Neoplasm coding in depth",
    desc: "Primary versus secondary sites, history versus active disease, chemotherapy encounters, and related complications.",
    time: "50 min",
    objectives: [
      "Use the Table of Neoplasms by site and behavior.",
      "Differentiate active cancer, secondary sites, and personal history.",
      "Sequence chemotherapy, immunotherapy, and radiation encounters correctly.",
    ],
    concept: `<p>Find the site and behavior in the <b>Table of Neoplasms</b> in the Index. Columns include malignant primary, malignant secondary, carcinoma in situ, benign, uncertain behavior, and unspecified behavior. Do not choose a column without pathology or provider documentation of behavior.</p>
<p><b>Primary versus secondary.</b> A primary malignancy is where the cancer began, and a secondary malignancy (metastasis) is where it spread. For example, C34.11 is a malignant neoplasm of the upper lobe of the right bronchus or lung (primary), and C79.51 is a secondary malignant neoplasm of bone. If a metastatic site is documented and the primary site is not known, the guidelines have rules for unspecified primary sites. Lymph node involvement uses C77.-. In the outpatient setting, list first the reason for the encounter.</p>
<p><b>Active versus history.</b> If the malignancy is still being treated or evaluated, assign the malignancy code. When the primary malignancy has been excised or eradicated, no further treatment is directed to the site, and there is no evidence of disease, assign Z85.- (personal history of malignant neoplasm). Z08 reports a follow-up exam after completed treatment, and Z92.21 reports a history of chemotherapy. Family history uses Z80.-.</p>
<p><b>Treatment encounters.</b> When the encounter is for chemotherapy, immunotherapy, or radiation therapy, assign Z51.11 (chemotherapy), Z51.12 (immunotherapy), or Z51.0 (radiation therapy) first, followed by the malignancy. Neoplasm-related pain is G89.3 and may be first-listed when the encounter is for pain management. Anemia due to chemotherapy is D64.81. Skin cancers have specific codes, such as C44.91 for basal cell carcinoma of skin, unspecified, and C44.92 for squamous cell carcinoma, unspecified.</p>`,
    terms: [
      ["Malignant primary", "Where the cancer began."],
      ["Malignant secondary", "A site of metastasis."],
      [
        "Carcinoma in situ",
        "Cancer cells confined to where they began. D00–D09.",
      ],
      ["Z85.-", "Personal history of malignant neoplasm."],
      [
        "Z51.11 / Z51.12 / Z51.0",
        "Encounter for chemotherapy / immunotherapy / radiation therapy.",
      ],
      ["G89.3", "Neoplasm-related pain."],
      [
        "Uncertain behavior",
        "D37–D48: the pathologist cannot classify it as benign or malignant.",
      ],
    ],
    steps: [
      "Find the documented site and behavior and look up the Table of Neoplasms.",
      "Decide whether the malignancy is active, under treatment, or in history.",
      "Identify any metastatic sites and code them as secondary.",
      "For treatment encounters, put the Z51 code first, then the malignancy.",
      "Add complication and status codes (pain, anemia, history of chemotherapy) when documented.",
      "Verify in the Tabular List.",
    ],
    lab: [
      [
        "A patient with primary adenocarcinoma of the right upper lung lobe has metastases to bone. The encounter is an oncology visit for management.",
        "C34.11 for the primary right upper lobe lung cancer and C79.51 for the bone metastasis, with sequencing based on the reason for the visit.",
      ],
      [
        "A patient comes for infusion chemotherapy for right breast cancer (site unspecified within the breast).",
        "Z51.11 first, followed by C50.911 (malignant neoplasm of unspecified site of right female breast).",
      ],
      [
        "Breast cancer treated with surgery two years ago, no current treatment, no evidence of disease.",
        "Z85.3 (personal history of malignant neoplasm of breast), and Z08 only for a follow-up exam after completed treatment.",
      ],
      [
        "A pathology report documents basal cell carcinoma of the skin of the nose, unspecified.",
        "Look up skin of nose in the table: C44.311 (basal cell carcinoma of skin of nose). If the type is not stated, use the unspecified code.",
      ],
    ],
    case: "A coder lists C50.911 for a patient whose breast cancer was removed three years ago with no evidence of disease.",
    model:
      "An active malignancy code is not appropriate. The documentation supports a history of breast cancer, Z85.3. Correct the claim and review other problem-list-driven diagnoses on the account.",
    mistakes: [
      "Coding a malignant primary for a history of cancer.",
      "Selecting the benign column without documentation.",
      "Listing the malignancy before Z51 on a chemotherapy encounter.",
    ],
    drills: [
      "Look up three sites in the Table of Neoplasms and record the columns.",
      "Code six fictional oncology encounters.",
      "Explain primary versus secondary in Taglish to a partner.",
    ],
    rubric: [
      "The behavior column is justified.",
      "History and active disease are separated.",
      "Treatment encounters are sequenced correctly.",
      "Secondary sites are coded as secondary.",
    ],
    scenario:
      "An encounter is for infusion chemotherapy. Which code is listed first?",
    answers: ["The malignancy code", "Z51.11", "G89.3"],
    correct: 1,
    why: "For a chemotherapy encounter the guidelines list Z51.11 first, followed by the malignancy.",
    taglish:
      "Sa neoplasm, hanapin ang site at behavior sa Table of Neoplasms. Primary ang pinagmulan ng cancer, secondary ang kumalat. Kapag natanggal na at wala nang gamutan, Z85 ang history, hindi ang active cancer code. Sa chemotherapy encounter, Z51.11 muna bago ang malignancy. Huwag pipili ng behavior column nang walang dokumentasyon.",
    tip: "Ask three questions for every cancer chart: where did it start, where did it spread, and is it still being treated?",
    mentor:
      "Draw a simple body outline and label one example of a primary and a secondary site with the codes.",
    remember: [
      "Pick the Table of Neoplasms column from documentation of behavior.",
      "History of cancer is Z85, not an active malignancy code.",
      "Z51.11, Z51.12, and Z51.0 come first on treatment encounters.",
    ],
  },
  {
    title: "Injuries, poisoning, adverse effects, and external causes",
    desc: "Separate poisoning, adverse effect, and underdosing, sequence the codes, and use external cause codes when required.",
    time: "50 min",
    objectives: [
      "Differentiate poisoning, adverse effect, and underdosing.",
      "Sequence drug-related codes correctly.",
      "Add external cause, place, and activity codes appropriately.",
    ],
    concept: `<p>Codes for drugs and chemicals (T36–T50) depend on what happened:</p>
<ul>
<li><b>Poisoning</b>: the wrong substance, wrong dose, or wrong route, or a substance taken with another. The sixth character shows intent: 1 accidental, 2 intentional self-harm, 3 assault, and 4 undetermined. Sequence the poisoning code first, followed by codes for the manifestations.</li>
<li><b>Adverse effect</b>: a reaction to a drug taken correctly as prescribed. The sixth character is 5. Sequence the nature of the adverse effect first, followed by the T code with the character 5.</li>
<li><b>Underdosing</b>: taking less of a drug than prescribed. The sixth character is 6. Code the condition that resulted or worsened, then the underdosing code, plus Z91.12- (intentional underdosing) or Z91.13- (unintentional underdosing) for the reason if documented.</li>
</ul>
<p>Injury codes (S and T chapters) use 7th characters A, D, and S. <b>External cause codes</b> (V00–Y99) describe how and where an injury happened. They are never first-listed. Reporting them is voluntary under national guidelines unless a state or payer requires it. Examples: W01.0XXA (fall on same level from slipping, tripping, or stumbling without subsequent striking against an object, initial encounter) and Y92.009 (unspecified place in a private residence as the place of occurrence). Use them only when documented.</p>`,
    terms: [
      [
        "T36.0X1A",
        "Poisoning by penicillins, accidental (unintentional), initial encounter.",
      ],
      [
        "6th character 1 / 2 / 3 / 4",
        "Accidental / intentional self-harm / assault / undetermined.",
      ],
      ["6th character 5", "Adverse effect (drug taken as prescribed)."],
      ["6th character 6", "Underdosing."],
      [
        "Z91.12- / Z91.13-",
        "Intentional / unintentional underdosing of medication regimen.",
      ],
      [
        "External cause codes",
        "V00–Y99: how, where, and what the person was doing.",
      ],
      ["Y92 / Y93", "Place of occurrence / activity."],
    ],
    steps: [
      "Read the note to find out whether the drug was taken correctly, incorrectly, or less than prescribed.",
      "Choose poisoning, adverse effect, or underdosing and the intent if poisoning.",
      "Sequence the codes: poisoning first, adverse effect manifestation first, or the condition then the underdosing.",
      "Add the 7th character for the encounter type.",
      "Add external cause, place, and activity codes when the documentation supports them and the payer or state expects them.",
      "Never list an external cause code first.",
    ],
    lab: [
      [
        "A child accidentally swallows an adult's amoxicillin tablets and is seen in the clinic.",
        "T36.0X1A (poisoning by penicillins, accidental, initial encounter) first, followed by codes for any documented manifestations.",
      ],
      [
        "A patient takes amoxicillin as prescribed and develops a generalized drug rash.",
        "L27.0 (generalized skin eruption due to drugs taken internally) first, then T36.0X5A (adverse effect of penicillins, initial encounter).",
      ],
      [
        "A patient with type 2 diabetes skipped insulin because of cost and has hyperglycemia.",
        "E11.65, then T38.3X6A (underdosing of insulin and oral hypoglycemic drugs), Z91.120 (intentional underdosing because of financial hardship), and Z79.4 if insulin is a long-term drug.",
      ],
      [
        "An ankle sprain from slipping on a wet floor at home, first visit.",
        "S93.401A, plus optional external cause codes W01.0XXA and Y92.009 if documented and expected by the payer. The external cause is never first-listed.",
      ],
    ],
    case: "A coder lists T36.0X5A first for an antibiotic rash, ahead of the rash code.",
    model:
      "For an adverse effect, the nature of the reaction is sequenced first. Move L27.0 (or the documented rash code) first and T36.0X5A second.",
    mistakes: [
      "Using the poisoning sixth character for a properly taken drug.",
      "Sequencing the adverse effect code first.",
      "Listing an external cause as the first diagnosis.",
    ],
    drills: [
      "Create a table of the sixth characters 1–6 with an example of each.",
      "Code six fictional medication scenarios.",
      "List the situations where external cause codes are required in your state or payers.",
    ],
    rubric: [
      "Poisoning, adverse effect, and underdosing are differentiated.",
      "Sequencing follows the rule.",
      "External cause codes are never first.",
      "7th characters match the encounter.",
    ],
    scenario:
      "A patient takes a drug exactly as prescribed and has a reaction. Which sixth character applies?",
    answers: ["1", "5", "6"],
    correct: 1,
    why: "A reaction to a correctly administered drug is an adverse effect, which uses the sixth character 5.",
    taglish:
      "Tatlong magkakaibang sitwasyon sa gamot: poisoning (maling gamot o dosage), adverse effect (tama ang pag-inom pero may reaksyon, character 5), at underdosing (kulang ang nainom, character 6). Sa adverse effect, ang reaksyon ang nauuna at susunod ang T code. Sa poisoning, ang T code ang nauuna. Ang external cause codes ay hindi kailanman first-listed.",
    tip: "Ask: ‘Did the patient take the right drug, the right way, the right amount?’ Yes with a reaction is adverse effect. No is poisoning. Less is underdosing.",
    mentor:
      "Say the three situations aloud with one example each, then check against your notes.",
    remember: [
      "Poisoning first, adverse effect manifestation first, underdosing after the resulting condition.",
      "The sixth character tells the story: 1–4 intent, 5 adverse effect, 6 underdosing.",
      "External cause codes are never first-listed.",
    ],
  },
  {
    title: "Inpatient coding primer: DRGs, POA, and ICD-10-PCS",
    desc: "A first look at how hospital coding differs from the outpatient work in this course, including principal diagnosis, POA indicators, and procedure codes.",
    time: "50 min",
    objectives: [
      "Explain how inpatient coding differs from outpatient coding.",
      "Define principal diagnosis, secondary diagnoses, CC and MCC, and POA indicators.",
      "Read the structure of an ICD-10-PCS code.",
    ],
    concept: `<p>This lesson is an introduction. Hospital inpatient coding is its own specialty with additional training and credentials. The main differences from the outpatient work in this course:</p>
<ul>
<li><b>Principal diagnosis.</b> The condition established after study to be chiefly responsible for the admission. Secondary diagnoses are conditions that coexist or develop and affect care.</li>
<li><b>Uncertain diagnoses.</b> For inpatient admissions, diagnoses documented at discharge as ‘probable,’ ‘suspected,’ ‘likely,’ or ‘still to be ruled out’ are coded as if they existed. This is the opposite of the outpatient rule.</li>
<li><b>MS-DRG payment.</b> Medicare pays hospitals by diagnosis-related group, assigned from the principal diagnosis, procedures, and the presence of complications or comorbidities (CCs) and major complications or comorbidities (MCCs). Accurate secondary diagnoses affect the assigned DRG, so documentation integrity is crucial.</li>
<li><b>POA indicators.</b> Each diagnosis carries a present-on-admission indicator: Y (yes), N (no), U (documentation insufficient), W (clinically undetermined), and some codes are exempt. POA data drives hospital-acquired condition reporting.</li>
<li><b>ICD-10-PCS</b> is used for inpatient hospital procedures, while CPT is used for outpatient facilities and professional billing.</li>
</ul>
<p>An ICD-10-PCS code has seven characters: section, body system, root operation, body part, approach, device, and qualifier. For example, 0FT44ZZ is Medical and Surgical (0), Hepatobiliary system (F), Resection (T), Gallbladder (4), Percutaneous endoscopic approach (4), no device (Z), no qualifier (Z). The root operation shows the objective: Resection removes all of a body part, Excision removes a portion, Extirpation takes out solid matter, Drainage takes out fluid, and Bypass reroutes flow.</p>`,
    terms: [
      [
        "Principal diagnosis",
        "The condition chiefly responsible for the admission after study.",
      ],
      [
        "MS-DRG",
        "Medicare Severity Diagnosis Related Group, the inpatient payment category.",
      ],
      [
        "CC / MCC",
        "Complication or comorbidity / major complication or comorbidity.",
      ],
      ["POA", "Present on admission indicator."],
      ["ICD-10-PCS", "Seven-character inpatient procedure code set."],
      [
        "Root operation",
        "The third PCS character that states the objective of the procedure.",
      ],
      [
        "Approach",
        "The fifth PCS character: open, percutaneous, endoscopic, and so on.",
      ],
    ],
    steps: [
      "Read the whole record from admission to discharge, including the discharge summary.",
      "Select the principal diagnosis using the guidelines and the circumstances of admission.",
      "Code secondary diagnoses, applying the inpatient rule for uncertain diagnoses.",
      "Assign POA indicators to every reportable diagnosis.",
      "For procedures, determine the root operation, body part, approach, device, and qualifier, and assign the PCS code.",
      "Send the record to the grouper and review the resulting DRG with your coding lead.",
    ],
    lab: [
      [
        "A discharge summary reads ‘probable pneumonia’ for an inpatient admission.",
        "Code pneumonia as if established for the inpatient setting. The outpatient rule does not apply.",
      ],
      [
        "A pressure ulcer is first documented on hospital day 4 and was not present at admission.",
        "POA indicator N (not present on admission).",
      ],
      [
        "A laparoscopic removal of the entire gallbladder.",
        "Root operation Resection, body part Gallbladder, approach Percutaneous Endoscopic: 0FT44ZZ.",
      ],
      [
        "Which root operation describes cutting out only part of an organ?",
        "Excision. Resection is for all of a body part.",
      ],
    ],
    case: "A learner who studied only outpatient coding tries to code ‘suspected sepsis’ at discharge as symptoms in an inpatient record.",
    model:
      "Inpatient rules differ. A condition documented at discharge as suspected is coded as if it existed. Follow the inpatient guidelines and the facility's clinical validation policy, which may involve a query about whether the diagnosis is clinically supported.",
    mistakes: [
      "Applying the outpatient uncertain-diagnosis rule to inpatient records.",
      "Forgetting POA indicators.",
      "Confusing Excision and Resection.",
    ],
    drills: [
      "Make a table contrasting outpatient and inpatient rules for uncertain diagnoses.",
      "Decode three PCS codes character by character.",
      "Write what you would study next to prepare for an inpatient coding credential.",
    ],
    rubric: [
      "Differences between settings are accurate.",
      "POA concepts are explained.",
      "PCS characters are decoded correctly.",
      "Scope limits are acknowledged.",
    ],
    scenario:
      "At inpatient discharge, a diagnosis is documented as ‘likely pneumonia.’ What is the coding rule?",
    answers: [
      "Do not code it",
      "Code it as if it existed, under the inpatient guideline",
      "Code only the symptoms",
    ],
    correct: 1,
    why: "For inpatient admissions, uncertain diagnoses documented at discharge are coded as if they existed. This differs from the outpatient rule.",
    taglish:
      "Iba ang inpatient coding sa outpatient. Sa inpatient, ang ‘probable’ o ‘likely’ na diagnosis sa discharge ay kino-code na parang totoo, kabaligtaran ng outpatient. May principal diagnosis, secondary diagnoses, CC at MCC na nakakaapekto sa DRG, at POA indicator sa bawat diagnosis. Ang procedures ay ICD-10-PCS na pitong characters. Primer lang ito; kailangan pa ng dagdag na training para sa CCS.",
    tip: "Keep two cards on your desk: ‘outpatient uncertain = do not code’ and ‘inpatient uncertain = code it.’ Mixing them is a classic error.",
    mentor:
      "Explain to a partner why the same word ‘probable’ is coded in one setting and not the other.",
    remember: [
      "Inpatient uncertain diagnoses at discharge are coded as if established.",
      "POA indicators and CC/MCC drive hospital reporting and DRG assignment.",
      "ICD-10-PCS has seven characters and the third is the root operation.",
    ],
    source:
      "ICD-10-CM Official Guidelines Section II and III, ICD-10-PCS reference manual (CMS). This lesson is an introduction, not inpatient training.",
  },
  {
    title: "Clinical documentation integrity basics",
    desc: "How CDI supports accurate coding, the difference between clarification and clinical validation queries, and how to write a compliant query.",
    time: "45 min",
    objectives: [
      "Describe the goals of clinical documentation integrity.",
      "Differentiate a clarification query from a clinical validation query.",
      "Write a compliant, non-leading query with clinical indicators.",
    ],
    concept: `<p><b>Clinical documentation integrity (CDI)</b> improves the accuracy, completeness, and clarity of the health record so that it reflects the patient's condition and the care provided. It supports quality measures, risk adjustment, accurate payment, and patient safety. CDI is not about increasing payment. It is about complete and truthful documentation.</p>
<p>Queries fall into two main groups. A <b>clarification query</b> asks the provider to resolve unclear, conflicting, or incomplete documentation, such as a clinical indicator with no diagnosis. A <b>clinical validation query</b> asks whether a documented diagnosis is supported by the clinical indicators in the record. The coder or CDI specialist does not decide clinical validity alone. The provider's clinical judgment decides.</p>
<p>Industry guidance (ACDIS and AHIMA, <em>Guidelines for Achieving a Compliant Query Practice</em>) says queries should include the relevant clinical indicators and ask a clear question, should not lead the provider to a particular answer, and should not mention reimbursement or quality impact. Multiple-choice queries should include clinically supported options plus ‘other’ and ‘unable to determine.’ Yes/no queries are limited to specific uses such as present-on-admission, substantiating a diagnosis that is already documented, establishing a cause-and-effect relationship, and resolving conflicting documentation. They should not be used when only clinical indicators exist and no diagnosis has been documented.</p>`,
    terms: [
      [
        "Clarification query",
        "A request to resolve unclear, conflicting, or missing documentation.",
      ],
      [
        "Clinical validation query",
        "A request to confirm that a diagnosis is clinically supported.",
      ],
      [
        "Clinical indicators",
        "Findings in the record, such as labs, vitals, medications, and treatments.",
      ],
      ["Leading query", "A question that suggests a preferred answer."],
      [
        "Impact-neutral",
        "Written without mention of payment, quality scores, or DRG effects.",
      ],
    ],
    steps: [
      "Identify the gap: missing diagnosis, conflicting documentation, unclear specificity, or a questionable diagnosis.",
      "List the clinical indicators from the record with dates and values.",
      "Choose the right query type and format.",
      "Write the question in neutral language with clinically supported options plus ‘other’ and ‘unable to determine’ where applicable.",
      "Send it through the approved process and track the response.",
      "Code from the provider's response, and file the query according to policy.",
    ],
    lab: [
      [
        "Hemoglobin 7.9, two units of blood transfused, the note says ‘low blood count’ and no diagnosis. Write the query format.",
        "Model: ‘Clinical indicators: Hgb 7.9 g/dL on [date]; two units packed red blood cells transfused on [date]. Please clarify the diagnosis, if any, that the findings represent: [ ] acute blood loss anemia [ ] chronic anemia (please specify type) [ ] other (please specify) [ ] unable to determine.’ The options must be clinically supported by the record.",
      ],
      [
        "A diagnosis of sepsis is documented, but the indicators in the record do not appear to support it.",
        "This calls for a clinical validation query: list the indicators and ask the provider to confirm whether the diagnosis is clinically supported, with an option to revise it. Do not decide the clinical question yourself.",
      ],
      [
        "Which phrase makes a query leading? ‘Can you confirm this is acute respiratory failure so the DRG is higher?’",
        "It suggests a specific answer and mentions payment impact. Remove both. Present the indicators and ask the provider to document the clinical significance.",
      ],
    ],
    case: "A provider replies to a query by writing ‘per coder’ and nothing else.",
    model:
      "A response must be the provider's own clinical judgment documented in the record. Return the query with a polite explanation, ask the provider to document the diagnosis or state ‘unable to determine,’ and escalate to the CDI or coding lead if the pattern continues.",
    mistakes: [
      "Mentioning reimbursement in a query.",
      "Using yes/no when only indicators exist.",
      "Leaving out ‘other’ and ‘unable to determine.’",
    ],
    drills: [
      "Write three queries from fictional scenarios.",
      "Rewrite one leading query into a compliant one.",
      "Explain CDI to a friend in Taglish.",
    ],
    rubric: [
      "Clinical indicators are included with dates and values.",
      "Options are supported and include other and unable to determine.",
      "No mention of payment.",
      "Responses come from the provider.",
    ],
    scenario: "Which query element is NOT allowed?",
    answers: [
      "A list of clinical indicators",
      "A statement that a certain answer will increase payment",
      "An option for ‘unable to determine’",
    ],
    correct: 1,
    why: "Queries must be impact-neutral. Mentioning payment can lead the provider and violates compliant query practice.",
    taglish:
      "Ang CDI ay para gawing kumpleto at tapat ang dokumentasyon, hindi para magpataas ng bayad. May clarification query (hindi malinaw o kulang) at clinical validation query (sinusuportahan ba ng clinical indicators ang diagnosis). Isama ang indicators, bigyan ng mga option na may ‘other’ at ‘unable to determine,’ at huwag banggitin ang bayad. Ang provider ang magpapasya, hindi ang coder.",
    tip: "Read your query once as if you were the provider. If you can tell which answer you want, rewrite it.",
    mentor: "Pair up and critique each other's queries for leading language.",
    remember: [
      "CDI aims for accurate, complete documentation, not higher payment.",
      "Queries include indicators, neutral options, ‘other,’ and ‘unable to determine.’",
      "Clinical judgment always belongs to the provider.",
    ],
    source:
      "ACDIS/AHIMA Guidelines for Achieving a Compliant Query Practice (current update).",
  },
  {
    title: "Practice set D: mixed ICD-10-CM and CPT encounters",
    desc: "Sixteen encounters that combine diagnosis codes, procedures, modifiers, and setting rules from across the course.",
    time: "75 min",
    objectives: [
      "Code complete encounters that mix diagnosis and procedure codes.",
      "Apply screening, pediatric, cardiology, oncology, and inpatient rules together.",
      "Track your accuracy by topic.",
    ],
    concept: `<p>Use the current books. For each encounter write the diagnoses in order, the procedure codes and modifiers, and one sentence of reasoning before opening the answer. Allow about four minutes per item. These are fictional, and code numbers should be verified in the current edition.</p>`,
    steps: [
      "Set a timer for four minutes per item.",
      "Write the diagnoses in order, the procedures, and the reason.",
      "Open the answer and compare.",
      "Tag each miss by topic.",
      "Review the matching lesson for any topic with two or more misses.",
      "Retake missed items after 24 hours.",
    ],
    lab: [
      [
        "1. A commercial plan patient has a screening colonoscopy and a polyp is removed by snare.",
        "45385-33. Dx: Z12.11, then K63.5.",
      ],
      [
        "2. The same procedure for a Medicare patient.",
        "45385-PT. Dx: Z12.11, then K63.5.",
      ],
      [
        "3. A screening mammogram, both breasts, 52-year-old with no symptoms.",
        "77067, Z12.31.",
      ],
      [
        "4. An 8-year-old established patient has a routine well exam with no problems and receives a single-component vaccine with counseling.",
        "99393, Z00.129, Z23. Vaccine product code plus 90460.",
      ],
      [
        "5. A patient has type 2 diabetes with stage 3b CKD, hypertension, and takes insulin.",
        "E11.22, I12.9, N18.32, Z79.4. Sequence by reason for the visit.",
      ],
      ["6. Paroxysmal atrial fibrillation, on apixaban.", "I48.0, Z79.01."],
      [
        "7. An infusion chemotherapy visit for right breast cancer, site unspecified.",
        "Z51.11 first, then C50.911.",
      ],
      [
        "8. A child accidentally ingests an adult's amoxicillin tablets.",
        "T36.0X1A, plus codes for any documented manifestations.",
      ],
      [
        "9. A rash develops after taking amoxicillin exactly as prescribed.",
        "L27.0, then T36.0X5A.",
      ],
      [
        "10. An office ECG for palpitations is recorded and interpreted by the provider.",
        "93000. Dx R00.2.",
      ],
      [
        "11. A cardiologist reads an echocardiogram done at a hospital that owns the equipment.",
        "93306-26.",
      ],
      [
        "12. A right shoulder injection with a corticosteroid, with ultrasound guidance and a saved image, for a documented shoulder condition. Add a separate, significant E/M.",
        "20611-RT plus the drug J code with units, and the E/M with modifier 25 only if the note shows a separate, significant problem evaluation.",
      ],
      [
        "13. A 53-minute individual psychotherapy session by video from the patient's home, commercial plan following CPT.",
        "90837-95 with place of service 10. Verify payer policy. Dx per the provider.",
      ],
      [
        "14. A newborn is delivered vaginally at a hospital. What goes on the baby's record?",
        "Z38.00. O and Z3A codes belong on the mother's record.",
      ],
      [
        "15. An inpatient discharge diagnosis says ‘probable pneumonia.’",
        "Code pneumonia as if established under the inpatient guideline (for example J18.9, verify specificity).",
      ],
      [
        "16. A Medicare patient has a subsequent Annual Wellness Visit.",
        "G0439. Diagnosis per the encounter, such as Z00.00 or Z00.01 when applicable.",
      ],
    ],
    case: "You scored 11 of 16 with most misses in screening and pediatric coding.",
    model:
      "Review the screening and pediatric lessons. Write the modifier and age-band rules on cards, redo those items tomorrow, and then retake a different practice set.",
    mistakes: [
      "Opening the answers before writing yours.",
      "Skipping the reasoning sentence.",
      "Not tracking misses by topic.",
    ],
    drills: [
      "Complete all 16 encounters and score yourself.",
      "Tag each miss with its lesson.",
      "Redo the missed items after 24 hours.",
    ],
    rubric: [
      "Diagnoses are in the right order.",
      "Modifiers have reasons.",
      "Setting rules are applied.",
      "Redo accuracy improved.",
    ],
    scenario:
      "A screening colonoscopy for a Medicare patient finds and removes a polyp. Which modifier is expected on the procedure?",
    answers: ["33", "PT", "25"],
    correct: 1,
    why: "Medicare uses modifier PT when a colorectal screening turns diagnostic or therapeutic. Commercial plans typically use 33.",
    taglish:
      "Pinagsama-sama ang diagnosis at procedure codes sa bawat encounter. Isulat ang diagnoses ayon sa pagkakasunod, ang procedures at modifiers, at isang pangungusap na dahilan bago tingnan ang sagot. I-tag ang mga mali ayon sa topic at balikan ang lesson. Ulitin ang mga mali pagkatapos ng isang araw.",
    tip: "Write the reason in a sentence each time. Reasons stay learned longer than answers.",
    mentor:
      "Teach three of the items to a partner without looking at the answers.",
    remember: [
      "Write diagnoses in order, procedures with modifiers, and a reason.",
      "Tag misses by topic and revisit the lesson.",
      "Redo misses after a day.",
    ],
  },
  {
    title: "Plan your coding career ladder",
    desc: "Compare specialty paths, credentials, and a realistic 12- to 36-month plan without hype.",
    time: "35 min",
    objectives: [
      "Describe the main coding career paths and the credentials associated with them.",
      "Build a 12- to 36-month growth plan.",
      "Identify the evidence employers value.",
    ],
    concept: `<p>Medical coding is a field with several paths. After an entry credential and supervised experience, many coders specialize. Common directions:</p>
<ul>
<li><b>Outpatient and professional-fee coding</b> (CPC from AAPC, CCS-P from AHIMA), including single-specialty paths such as orthopedics or cardiology.</li>
<li><b>Facility outpatient and ambulatory surgery</b> (AAPC COC and CASCC).</li>
<li><b>Inpatient coding</b> (AHIMA CCS, AAPC CIC).</li>
<li><b>Risk adjustment</b> (AAPC CRC).</li>
<li><b>Auditing</b> (AAPC CPMA).</li>
<li><b>Clinical documentation integrity</b> (ACDIS CCDS, AHIMA CDIP).</li>
<li><b>Compliance</b> (AAPC CPCO and HCCA CHC).</li>
<li><b>Billing and revenue cycle</b> (AAPC CPB) and lead or manager roles.</li>
</ul>
<p>Requirements, fees, and exam content change, so confirm each credential on the official site. No credential guarantees a job or a salary. Employers value accuracy records, specialty knowledge, communication, and reliability.</p>
<p>A realistic ladder: in the first year, earn a first credential, work under review, and track your accuracy. In years two and three, build depth in one specialty, add a second credential if the role needs it, learn to audit or mentor, and practice presenting findings. Join professional chapters or communities, keep up with the annual code updates, and meet continuing education requirements.</p>`,
    terms: [
      ["CPC / CCS-P", "Outpatient professional-fee coding credentials."],
      [
        "COC / CASCC",
        "Outpatient hospital and ambulatory surgery center credentials.",
      ],
      ["CCS / CIC", "Inpatient and hospital coding credentials."],
      ["CRC", "Certified Risk Adjustment Coder."],
      ["CPMA", "Certified Professional Medical Auditor."],
      ["CCDS / CDIP", "Clinical documentation integrity credentials."],
      ["CHC / CPCO", "Compliance credentials."],
    ],
    steps: [
      "List the work you enjoyed most in the course: audits, queries, rules, numbers, or specialties.",
      "Match two or three paths to those preferences.",
      "Read the official credential pages and note prerequisites and renewal.",
      "Write a 12-month and a 36-month plan with measurable milestones.",
      "Choose evidence you can collect: accuracy logs, audit summaries, case studies.",
      "Schedule a quarterly review of your plan.",
    ],
    case: "A learner wants to become an inpatient coder in six months using only this course.",
    model:
      "Be honest about scope. This course is mostly outpatient with an inpatient introduction. A realistic plan adds inpatient training, ICD-10-PCS practice, and supervised experience before applying for inpatient roles. Consider a stepping-stone outpatient or facility role first.",
    mistakes: [
      "Choosing a path only for pay.",
      "Collecting credentials without experience.",
      "Ignoring continuing education requirements.",
    ],
    drills: [
      "Create a table comparing three paths, their credentials, and daily work.",
      "Write a 12-month plan with three milestones.",
      "List five pieces of evidence you will collect this year.",
    ],
    rubric: [
      "Information is sourced from official pages.",
      "Milestones are measurable.",
      "Scope claims are honest.",
      "Renewal requirements are planned.",
    ],
    scenario:
      "You prefer finding patterns in claims and explaining them to teams. Which path fits best?",
    answers: ["Outpatient coding only", "Auditing or compliance", "Data entry"],
    correct: 1,
    why: "Auditing and compliance roles involve reviewing work, finding patterns, and explaining findings.",
    taglish:
      "May iba't ibang landas sa coding: outpatient, inpatient, risk adjustment, auditing, CDI, at compliance. Bawat isa ay may credential, pero hindi garantiya ng trabaho ang credential. Gumawa ng 12 hanggang 36 na buwang plano, mag-ipon ng ebidensya tulad ng accuracy log, at bantayan ang continuing education para sa renewal.",
    tip: "Revisit your ladder every quarter. Your preferences will sharpen after real work.",
    mentor:
      "Write your plan on one page and share it with someone who works in coding or revenue cycle for feedback.",
    remember: [
      "Most coders specialize after an entry credential and supervised experience.",
      "No credential guarantees a job. Accuracy and reliability matter.",
      "Plan for continuing education and annual code updates.",
    ],
    source:
      "AAPC, AHIMA, ACDIS, and HCCA official credential pages. Requirements change.",
  },
]);
