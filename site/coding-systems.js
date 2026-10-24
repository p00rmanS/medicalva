// Coding track additions, batch 3: diagnosis coding by body system, imaging, laboratory,
// place of service, fee schedules, and two more practice sets. Verify codes in current books.
addCodingLessons([
  {
    title: "Digestive and urinary conditions",
    desc: "Code GERD, diverticular disease, hernias, irritable bowel, kidney stones, cystitis, and prostate conditions from the documentation.",
    time: "45 min",
    objectives: [
      "Assign codes for common digestive and genitourinary conditions.",
      "Use documented detail such as bleeding, obstruction, laterality, and symptoms.",
      "Recognize when an additional code is required.",
    ],
    concept: `<p>Digestive conditions are in Chapter 11 (K00–K95) and genitourinary conditions in Chapter 14 (N00–N99). Many codes depend on details a coder must find in the note: whether there is bleeding, perforation, abscess, or obstruction, which side or organ, and whether the condition is acute or chronic.</p>
<p><b>Digestive examples.</b> K21.9 GERD without esophagitis. K29.70 gastritis, unspecified, without bleeding. K57.30 diverticulosis of the large intestine without perforation, abscess, or bleeding, and K57.32 diverticulitis of the large intestine without perforation, abscess, or bleeding. K58.0 irritable bowel syndrome with diarrhea and K58.9 irritable bowel syndrome, unspecified (older code books title it ‘without diarrhea’). K59.00 constipation, unspecified. K40.90 unilateral inguinal hernia without obstruction or gangrene, not specified as recurrent. K80.20 calculus of gallbladder without cholecystitis and without obstruction. K76.0 fatty (change of) liver, not elsewhere classified. K52.9 noninfective gastroenteritis and colitis, unspecified, while A09 is infectious gastroenteritis and colitis, unspecified.</p>
<p><b>Urinary and male genital examples.</b> N39.0 urinary tract infection, site not specified. N30.00 acute cystitis without hematuria. N20.0 calculus of kidney and N20.1 calculus of ureter. R31.9 hematuria, unspecified (a symptom code used when no cause is documented). N40.0 benign prostatic hyperplasia without lower urinary tract symptoms (LUTS) and N40.1 with LUTS. N40.1 has a ‘use additional code’ note for the associated symptoms, such as R35.1 nocturia.</p>
<p>When the note says only ‘abdominal pain,’ use the symptom code (R10.9) unless a definitive diagnosis is documented. A symptom that is a routine part of a confirmed condition is not coded separately.</p>`,
    terms: [
      ["K21.9", "Gastro-esophageal reflux disease without esophagitis."],
      [
        "K57.32",
        "Diverticulitis of large intestine without perforation or abscess, without bleeding.",
      ],
      [
        "K58.0 / K58.9",
        "Irritable bowel syndrome with diarrhea / irritable bowel syndrome, unspecified.",
      ],
      [
        "K40.90",
        "Unilateral inguinal hernia without obstruction or gangrene, not specified as recurrent.",
      ],
      ["N20.0", "Calculus of kidney."],
      ["N30.00", "Acute cystitis without hematuria."],
      [
        "N40.1",
        "Benign prostatic hyperplasia with lower urinary tract symptoms.",
      ],
      ["R10.9", "Unspecified abdominal pain."],
    ],
    steps: [
      "Find the documented diagnosis and the details that change the code: acute or chronic, bleeding, obstruction, laterality, and complications.",
      "Look up the main term in the Index and verify in the Tabular List.",
      "Read ‘use additional code’ and ‘code first’ notes.",
      "Add symptom codes only when no definitive diagnosis explains them or a note requires them.",
      "Do not code uncertain diagnoses in the outpatient setting.",
    ],
    lab: [
      [
        "A patient has diverticulitis of the large intestine with no perforation, abscess, or bleeding documented.",
        "K57.32.",
      ],
      [
        "The note says ‘benign prostatic hyperplasia with nocturia and weak stream.’",
        "N40.1 plus additional codes for the documented symptoms, such as R35.1 (nocturia) and R39.12 (poor urinary stream), following the ‘use additional code’ note.",
      ],
      [
        "The note says ‘left kidney stone’ and gives no further detail.",
        "N20.0 (calculus of kidney). The code does not specify side. Laterality is not part of that code.",
      ],
      [
        "The provider documents ‘abdominal pain, cause unknown’ at an office visit.",
        "R10.9 (unspecified abdominal pain), or a more specific R10 code if the location is documented.",
      ],
    ],
    case: "A coder reports R10.9 and K29.70 for a visit where the provider documents ‘gastritis causing abdominal pain.’",
    model:
      "The abdominal pain is explained by the confirmed gastritis and is not coded separately. Report K29.70 (or a more specific gastritis code supported by the note, such as one that mentions bleeding). Remove R10.9.",
    mistakes: [
      "Coding a symptom that belongs to a confirmed diagnosis.",
      "Ignoring bleeding or obstruction in the note.",
      "Choosing infectious gastroenteritis when the note says noninfective.",
    ],
    drills: [
      "Make a card of the codes in this lesson and quiz yourself.",
      "Code ten fictional digestive and urinary statements.",
      "Write the ‘use additional code’ notes you find for BPH and kidney stones.",
    ],
    rubric: [
      "Details such as bleeding or obstruction are checked.",
      "Symptoms are only coded when appropriate.",
      "Notes are applied.",
      "Codes were verified in the Tabular List.",
    ],
    scenario:
      "A patient with a confirmed diagnosis of irritable bowel syndrome with diarrhea has diarrhea documented as part of the condition. How is it coded?",
    answers: ["K58.9 and R19.7", "K58.0", "R19.7 only"],
    correct: 1,
    why: "K58.0 already includes diarrhea. The symptom is not coded separately.",
    taglish:
      "Sa digestive at urinary codes, hanapin ang detalye sa note: may dugo ba, may bara, saang bahagi, at acute o chronic. Halimbawa K58.0 ang IBS na may diarrhea, at K57.32 ang diverticulitis na walang butas, abscess, o dugo. Sa BPH na may sintomas, N40.1 plus dagdag na code para sa sintomas. Huwag i-code ang sintomas kung nasa confirmed diagnosis na.",
    tip: "Highlight words like ‘with,’ ‘without,’ ‘bleeding,’ and ‘obstruction’ in the note. They usually decide the last characters.",
    mentor:
      "Say the K and N examples aloud with their meanings until they feel familiar.",
    remember: [
      "Details such as bleeding, obstruction, and symptoms decide the final characters.",
      "Do not code a symptom already included in a confirmed condition.",
      "BPH with symptoms (N40.1) needs additional symptom codes.",
    ],
  },
  {
    title: "Musculoskeletal and neurologic conditions",
    desc: "Code osteoarthritis, gout, fibromyalgia, migraine, sleep apnea, dementia, carpal tunnel, and related conditions with the right side and detail.",
    time: "45 min",
    objectives: [
      "Assign codes that depend on laterality and site.",
      "Use ‘code first’ rules for dementia and other manifestation codes.",
      "Choose unspecified codes only when documentation is unspecified.",
    ],
    concept: `<p>Chapter 13 (M00–M99) covers musculoskeletal conditions and Chapter 6 (G00–G99) covers nervous system conditions. Laterality (right, left, bilateral) and site are often in the last characters.</p>
<p><b>Musculoskeletal.</b> M17.11 unilateral primary osteoarthritis, right knee, M17.12 left knee, and M17.0 bilateral primary osteoarthritis of the knee. M16.11 unilateral primary osteoarthritis, right hip. M19.90 unspecified osteoarthritis, unspecified site. M10.9 gout, unspecified. M06.9 rheumatoid arthritis, unspecified. M79.7 fibromyalgia. M81.0 age-related osteoporosis without current pathological fracture. M54.50 low back pain, unspecified.</p>
<p><b>Neurologic.</b> G43.909 migraine, unspecified, not intractable, without status migrainosus. G47.33 obstructive sleep apnea. G40.909 epilepsy, unspecified, not intractable, without status epilepticus. G56.00 carpal tunnel syndrome, unspecified upper limb (G56.01 right, G56.02 left). G30.9 Alzheimer's disease, unspecified, with the ‘code first’ rule for the dementia manifestation: F02.80 (dementia in other diseases classified elsewhere, unspecified severity, without behavioral disturbance, psychotic disturbance, mood disturbance, and anxiety) is sequenced after the cause. F03.90 reports unspecified dementia, unspecified severity, without those disturbances, when the cause is not documented. Dementia severity and disturbances, when documented, add detail to the code.</p>
<p>A history of stroke without deficits is Z86.73. An active stroke uses the I63 codes and any deficits (for example, hemiplegia) are coded additionally.</p>`,
    terms: [
      ["M17.11", "Unilateral primary osteoarthritis, right knee."],
      ["M10.9", "Gout, unspecified."],
      ["M79.7", "Fibromyalgia."],
      [
        "G43.909",
        "Migraine, unspecified, not intractable, without status migrainosus.",
      ],
      ["G47.33", "Obstructive sleep apnea."],
      ["G56.01", "Carpal tunnel syndrome, right upper limb."],
      [
        "G30.9 / F02.80",
        "Alzheimer's disease, unspecified / dementia in other diseases, sequenced after the cause.",
      ],
      [
        "F03.90",
        "Unspecified dementia, unspecified severity, without disturbances.",
      ],
    ],
    steps: [
      "Identify the condition, site, and side from the documentation.",
      "Search the Index and verify each character in the Tabular List.",
      "Check for ‘code first’ and ‘use additional code’ notes, especially for dementia.",
      "Use unspecified codes only when the note does not provide more detail.",
      "Add history or status codes when documented and relevant.",
    ],
    lab: [
      [
        "‘Osteoarthritis of the right knee.’",
        "M17.11 (unilateral primary osteoarthritis, right knee).",
      ],
      [
        "‘Alzheimer's disease with dementia, severity not documented.’",
        "G30.9 first, then F02.80, following the ‘code first’ instruction.",
      ],
      [
        "‘Carpal tunnel syndrome, right wrist.’",
        "G56.01 (carpal tunnel syndrome, right upper limb).",
      ],
      ["‘Dementia’ with no cause or severity documented.", "F03.90."],
    ],
    case: "A coder lists F02.80 first and G30.9 second for a patient with Alzheimer's dementia.",
    model:
      "F02.80 is a manifestation code with a ‘code first the underlying condition’ note. The underlying Alzheimer's disease code G30.9 must be sequenced first. Correct the order and verify the dementia severity details.",
    mistakes: [
      "Sequencing a manifestation code first.",
      "Ignoring laterality.",
      "Using G43.909 when the note says intractable migraine.",
    ],
    drills: [
      "Code ten fictional musculoskeletal and neurologic statements.",
      "List three codes with ‘code first’ notes and explain the sequence.",
      "Make a laterality practice card for knee, hip, and wrist.",
    ],
    rubric: [
      "Laterality and site match the note.",
      "Manifestation codes are sequenced after the cause.",
      "Unspecified codes are justified.",
      "Verified in the Tabular List.",
    ],
    scenario:
      "A note documents Alzheimer's disease with dementia. Which sequence is correct?",
    answers: ["F02.80 then G30.9", "G30.9 then F02.80", "F03.90 only"],
    correct: 1,
    why: "F02.80 is a manifestation code. The underlying cause, G30.9, is listed first.",
    taglish:
      "Sa musculoskeletal at neurologic codes, mahalaga ang laterality: M17.11 ay kanang tuhod, M17.12 kaliwa, G56.01 kanang carpal tunnel. Sa Alzheimer's na may dementia, G30.9 ang una at F02.80 ang pangalawa dahil may code first note. Kapag walang nakasulat na dahilan ng dementia, F03.90. Gamitin lang ang unspecified code kung talagang walang dagdag na detalye.",
    tip: "Look for the italic ‘code first’ note beside manifestation codes. If you see it, the cause goes first.",
    mentor:
      "Explain ‘code first’ to a partner using a cause-and-effect example.",
    remember: [
      "Laterality is part of many musculoskeletal and nerve codes.",
      "Manifestation codes such as F02.80 come after the cause.",
      "Use unspecified dementia (F03.90) only when no cause is documented.",
    ],
  },
  {
    title: "Eye, ear, and skin conditions",
    desc: "Code cataract, glaucoma, ear infections, hearing loss, dermatitis, psoriasis, cellulitis, and pressure injuries by stage.",
    time: "40 min",
    objectives: [
      "Assign eye, ear, and skin codes with laterality and stage.",
      "Code pressure ulcers using site and stage.",
      "Recognize when documentation limits the specificity.",
    ],
    concept: `<p>Eye conditions are in Chapter 7 (H00–H59), ear conditions in Chapter 8 (H60–H95), and skin conditions in Chapter 12 (L00–L99). Laterality is common: right, left, or bilateral.</p>
<p><b>Eye and ear.</b> H25.9 unspecified age-related cataract. H40.9 unspecified glaucoma. H52.4 presbyopia. H66.90 otitis media, unspecified, unspecified ear. H61.20 impacted cerumen, unspecified ear. H91.90 unspecified hearing loss, unspecified ear. Where the note gives a side or type, choose the code with that detail.</p>
<p><b>Skin.</b> L20.9 atopic dermatitis, unspecified. L40.9 psoriasis, unspecified. L03.115 cellulitis of the right lower limb. L70.0 acne vulgaris. B35.1 tinea unguium (nail fungus). L72.0 epidermal cyst. L82.1 other seborrheic keratosis. L57.0 actinic keratosis.</p>
<p><b>Pressure injuries.</b> L89 codes combine the site, laterality when applicable, and stage (1–4, unstageable, deep tissue injury). For example, L89.153 is pressure ulcer of the sacral region, stage 3. The stage may be documented by a nurse or other clinician, but the associated diagnosis (the ulcer) must be documented by the provider. A pressure ulcer is coded to the highest documented stage while it is being treated, and a healed ulcer is not coded as current. Poorly documented ulcers need a query rather than a guess.</p>`,
    terms: [
      ["H25.9", "Unspecified age-related cataract."],
      ["H66.90", "Otitis media, unspecified, unspecified ear."],
      ["L20.9", "Atopic dermatitis, unspecified."],
      ["L40.9", "Psoriasis, unspecified."],
      ["L03.115", "Cellulitis of right lower limb."],
      ["L89.153", "Pressure ulcer of sacral region, stage 3."],
      ["Stage", "The depth of tissue damage in a pressure injury."],
    ],
    steps: [
      "Find the diagnosis, the side or site, and the type or stage in the documentation.",
      "Look up the main term and verify the code in the Tabular List.",
      "For pressure injuries, confirm that the provider documented the ulcer and take the stage from an allowed clinician's documentation.",
      "Do not code a healed condition as current.",
      "Send a query for unclear site or stage.",
    ],
    lab: [
      [
        "‘Cellulitis of the right lower leg.’",
        "L03.115 (cellulitis of right lower limb). Add an organism code if documented.",
      ],
      [
        "‘Stage 3 pressure ulcer of the sacrum’ documented by the provider with the stage in the nursing note.",
        "L89.153.",
      ],
      [
        "‘Plaque psoriasis’ documented without further detail.",
        "L40.9 unless a more specific type is documented; plaque psoriasis has its own code (L40.0), so verify in the Index.",
      ],
      ["‘Otitis media’ with no ear specified.", "H66.90."],
    ],
    case: "A nurse documents a stage 2 pressure ulcer, but the provider's note mentions only ‘skin breakdown.’",
    model:
      "The provider must document the diagnosis. ‘Skin breakdown’ is not specific enough to code a pressure ulcer. Send a non-leading query asking the provider to clarify the diagnosis, then use the nurse's stage once the diagnosis is documented.",
    mistakes: [
      "Coding a pressure ulcer from nursing notes alone.",
      "Ignoring laterality.",
      "Coding a healed ulcer as current.",
    ],
    drills: [
      "Code ten fictional statements across eye, ear, and skin.",
      "Write a query for ‘skin breakdown.’",
      "Make a stage 1–4 card with plain-language descriptions.",
    ],
    rubric: [
      "Site, side, and stage are justified.",
      "Provider documentation supports the diagnosis.",
      "Queries are neutral.",
      "Codes were verified.",
    ],
    scenario: "Who must document the diagnosis of a pressure ulcer for coding?",
    answers: ["The nurse alone", "The provider", "The patient"],
    correct: 1,
    why: "The stage may come from another clinician, but the diagnosis must come from the provider.",
    taglish:
      "Sa eye, ear, at skin codes, mahalaga ang gilid at detalye: H66.90 ang otitis media na walang tinukoy na tainga, L03.115 ang cellulitis sa kanang binti. Sa pressure ulcer, ang L89 ay may site at stage; puwedeng kunin ang stage sa nurse, pero ang diagnosis ay dapat galing sa provider. Kapag hindi malinaw, mag-query.",
    tip: "For pressure injuries, keep two checkboxes: provider diagnosis present, stage documented. You need both.",
    mentor:
      "Practice a neutral query for an unclear skin condition with a partner.",
    remember: [
      "Pressure injury stage can come from another clinician but the diagnosis must come from the provider.",
      "Laterality is built into many eye, ear, and limb codes.",
      "Do not code a healed condition as current.",
    ],
  },
  {
    title: "Imaging coding: radiology section",
    desc: "Select X-ray, CT, MRI, and ultrasound codes by body area and contrast, and apply global, professional, and technical components.",
    time: "45 min",
    objectives: [
      "Choose imaging codes by body area, number of views, and contrast.",
      "Define ‘with contrast’ as CPT uses it.",
      "Choose appropriate diagnoses for imaging orders.",
    ],
    concept: `<p>Radiology codes (70010–79999) depend on the body area, the type of imaging, the number of views or the extent, and contrast. For CT and MRI there are three versions: without contrast, with contrast, and without followed by with contrast. In CPT, ‘with contrast’ means contrast given into a vein, a joint, or the spinal canal. Oral or rectal contrast alone does not make a study ‘with contrast’ for these codes.</p>
<p>Examples: chest X-ray 71045 (one view) and 71046 (two views). CT head without contrast 70450, with contrast 70460, without then with 70470. CT abdomen and pelvis without contrast 74176, with contrast 74177, without then with 74178. MRI lumbar spine without contrast 72148, with 72149, without then with 72158. MRI of a joint of the lower extremity without contrast 73721. Abdominal ultrasound complete 76700 and limited 76705. DEXA bone density of the axial skeleton 77080.</p>
<p>Components: if the same provider owns the equipment and interprets, bill the global code with no modifier. The reading physician bills with 26 (professional component) and the facility bills the technical component (TC) or the global service depending on the arrangement. A written interpretation is required for any professional billing.</p>
<p>Diagnosis codes for imaging should reflect why it was ordered: a documented sign, a symptom, or a confirmed condition. The outpatient rule applies: do not code ‘rule out’ conditions. Also verify medical necessity and whether advanced imaging needs prior authorization.</p>`,
    terms: [
      ["71045 / 71046", "Chest X-ray, one view / two views."],
      [
        "70450 / 70460 / 70470",
        "CT head without / with / without then with contrast.",
      ],
      [
        "74176 / 74177 / 74178",
        "CT abdomen and pelvis without / with / without then with contrast.",
      ],
      ["72148", "MRI lumbar spine without contrast."],
      ["76700 / 76705", "Abdominal ultrasound complete / limited."],
      ["77080", "DEXA, axial skeleton."],
      ["26 / TC", "Professional / technical component."],
    ],
    steps: [
      "Read the order and the report. Identify the body area, the technique, and the number of views.",
      "Determine whether contrast was used, and whether it was intravenous, intra-articular, or intrathecal.",
      "Select the matching code and check for a combination code for studies done without and with contrast.",
      "Decide the component: global, 26, or TC.",
      "Assign diagnoses for the documented sign, symptom, or condition.",
      "Check authorization and medical necessity rules.",
    ],
    lab: [
      [
        "A two-view chest X-ray in a clinic that owns the machine and interprets it.",
        "71046, global, with the diagnosis for the symptom or condition that prompted the test.",
      ],
      ["CT of the abdomen and pelvis with IV contrast.", "74177."],
      [
        "CT of the abdomen and pelvis, a scan without contrast followed by a scan with contrast.",
        "74178.",
      ],
      [
        "CT of the abdomen with oral contrast only.",
        "Oral contrast alone does not qualify as ‘with contrast’ for CPT, so use the code for a study without contrast (such as 74176 for abdomen and pelvis). Verify in the book.",
      ],
      [
        "A radiologist reads a lumbar spine MRI without contrast done at a hospital outpatient department.",
        "72148-26 for the professional component.",
      ],
    ],
    case: "A claim lists 74177 for a CT done with oral contrast only.",
    model:
      "Review the report to see what contrast was used. If it was oral only, the study is coded as without contrast. Correct the code, resubmit, and review whether similar claims were affected.",
    mistakes: [
      "Treating oral contrast as ‘with contrast.’",
      "Billing a professional component without a written interpretation.",
      "Using ‘rule out’ diagnoses on imaging claims.",
    ],
    drills: [
      "Make a table of CT and MRI contrast variations.",
      "Code ten fictional imaging reports.",
      "List the information you need from an imaging order.",
    ],
    rubric: [
      "Contrast is determined from the report.",
      "Components match who did what.",
      "Diagnoses are signs, symptoms, or confirmed conditions.",
      "Authorization was considered.",
    ],
    scenario:
      "A CT scan is done first without contrast and then with IV contrast. Which type of code applies?",
    answers: [
      "Without contrast",
      "Without followed by with contrast",
      "With contrast only",
    ],
    correct: 1,
    why: "A study done without and then with contrast uses the combination code for both.",
    taglish:
      "Sa imaging, ang code ay depende sa body area, uri ng test, at contrast. Tatlo ang bersyon ng CT at MRI: walang contrast, may contrast, at walang contrast na sinundan ng may contrast. Sa CPT, ang ‘with contrast’ ay sa ugat, joint, o spinal canal; hindi sapat ang oral o rectal lang. Gamitin ang 26 para sa pagbasa lang at TC para sa makina lang.",
    tip: "Ask three things of every imaging report: which area, which technique, and what contrast route. Then pick the code.",
    mentor:
      "Draw a three-column chart (without, with, both) for CT head and CT abdomen and pelvis.",
    remember: [
      "CT and MRI have without, with, and without-then-with versions.",
      "Oral or rectal contrast alone is not ‘with contrast’ in CPT.",
      "Use 26 for the interpretation only and TC for the technical part.",
    ],
  },
  {
    title: "Laboratory coding and CLIA",
    desc: "Report panels, individual tests, specimen collection, and waived tests, and understand why a laboratory needs the right CLIA certificate.",
    time: "40 min",
    objectives: [
      "Know the components of the basic and comprehensive metabolic panels and the lipid panel.",
      "Report collection, handling, and tests without unbundling.",
      "Explain CLIA categories and the QW modifier.",
    ],
    concept: `<p>The Clinical Laboratory Improvement Amendments (CLIA) require laboratories that test human specimens to hold a certificate matching the complexity of the tests they perform: waived, moderate complexity, or high complexity. A practice with a Certificate of Waiver can perform only waived tests, and claims for waived tests often carry modifier <b>QW</b>. The wrong certificate leads to denials.</p>
<p><b>Panels.</b> Use the panel code only when every test in the panel is performed. 80048 (basic metabolic panel) includes total calcium, carbon dioxide, chloride, creatinine, glucose, potassium, sodium, and urea nitrogen. 80053 (comprehensive metabolic panel) adds albumin, total bilirubin, alkaline phosphatase, ALT, AST, and total protein. 80061 (lipid panel) includes total cholesterol, HDL cholesterol, and triglycerides. If a panel is only partly performed, report the individual tests.</p>
<p>Other common codes: 85025 CBC with automated differential and 85027 CBC without differential. 83036 hemoglobin A1c. 84443 TSH. 82947 glucose, quantitative, and 82962 glucose by monitoring device. 81001 automated urinalysis with microscopy and 81002 non-automated urinalysis without microscopy. 87086 urine culture with colony count. 87880 rapid group A strep test and 87804 rapid influenza test. 87635 SARS-CoV-2 amplified probe technique.</p>
<p><b>Collection and handling.</b> 36415 venipuncture and 36416 capillary blood collection are separate from the test. Some payers pay for specimen handling (99000), but Medicare does not. When a practice sends a test to a reference laboratory and bills for it (an arrangement that depends on payer and law), modifier 90 may apply. Modifier 91 reports a repeat test on the same day done for a clinical reason, not for a quality control reason. Medicare does not apply deductible or coinsurance to clinical diagnostic laboratory tests.</p>`,
    terms: [
      ["CLIA", "Federal laboratory certification program."],
      ["Certificate of Waiver", "Allows only waived (simple) tests."],
      ["QW", "Modifier for a CLIA-waived test."],
      ["80048 / 80053", "Basic / comprehensive metabolic panel."],
      ["80061", "Lipid panel."],
      ["36415 / 36416", "Venipuncture / capillary blood collection."],
      ["90 / 91", "Reference laboratory / repeat clinical diagnostic test."],
    ],
    steps: [
      "List every test performed and who performed it.",
      "Check whether all components of a panel were performed.",
      "Add collection codes where the practice collected the specimen and the payer allows.",
      "Check the practice's CLIA certificate type against the complexity of each test.",
      "Add QW where required and check modifiers for reference lab or repeat tests.",
      "Link each test to the diagnosis that justifies it.",
    ],
    lab: [
      [
        "An in-office lipid panel, CBC with differential, and venipuncture.",
        "80061, 85025, and 36415.",
      ],
      [
        "A patient has a rapid strep test performed in the office with a Certificate of Waiver.",
        "87880 with modifier QW if the payer requires it for the CLIA-waived test.",
      ],
      [
        "The lab runs sodium, potassium, chloride, CO2, BUN, creatinine, and glucose but not calcium.",
        "The BMP is not complete without calcium. Report the individual tests rather than 80048.",
      ],
    ],
    case: "A practice with a Certificate of Waiver performs a moderate-complexity test and bills it.",
    model:
      "The practice is not certified to perform that test. Stop billing it, tell the compliance lead, and review prior claims for potential refunds. Fix the process so only tests allowed by the certificate are performed in-house.",
    mistakes: [
      "Billing a panel when a component was not run.",
      "Billing a test outside the CLIA certificate.",
      "Using QW on a test that is not waived.",
    ],
    drills: [
      "List the tests in 80048, 80053, and 80061 from memory.",
      "Code ten fictional lab orders.",
      "Create a CLIA checklist for a small clinic.",
    ],
    rubric: [
      "Panels match all components.",
      "Collection codes are used correctly.",
      "CLIA status is checked.",
      "Modifiers are supported.",
    ],
    scenario: "Which modifier identifies a CLIA-waived test on many claims?",
    answers: ["QW", "26", "91"],
    correct: 0,
    why: "QW identifies a CLIA-waived laboratory test.",
    taglish:
      "Kailangan ng CLIA certificate ang lab na tumutugma sa complexity ng test. Kapag Certificate of Waiver lang, waived tests lang ang puwede at kadalasang may QW. Gamitin ang panel code kung kumpleto ang lahat ng test sa panel; kung kulang, i-bill ang bawat test. Hiwalay ang venipuncture (36415). Huwag mag-bill ng test na wala sa certificate.",
    tip: "Keep a one-page sheet of which tests your client's lab can perform. It prevents compliance problems.",
    mentor:
      "Quiz yourself on the three panels' components until you can list them without looking.",
    remember: [
      "Use a panel code only when every component was performed.",
      "QW marks CLIA-waived tests. The certificate must match test complexity.",
      "Venipuncture (36415) is reported separately from the test.",
    ],
  },
  {
    title: "Place of service and facility versus non-facility payment",
    desc: "Choose the correct place of service and understand why the same service pays differently in an office and a hospital setting.",
    time: "35 min",
    objectives: [
      "Select the right place of service code for common settings.",
      "Explain why Medicare pays facility and non-facility rates.",
      "Spot place-of-service errors that cause denials or overpayments.",
    ],
    concept: `<p>The <b>place of service (POS)</b> code is a two-digit code on every professional claim line that tells the payer where the service happened. Common codes: 02 telehealth other than the patient's home, 10 telehealth in the patient's home, 11 office, 12 patient's home, 13 assisted living facility, 19 off-campus outpatient hospital, 20 urgent care facility, 21 inpatient hospital, 22 on-campus outpatient hospital, 23 emergency room in a hospital, 24 ambulatory surgical center, 31 skilled nursing facility, 32 nursing facility, 49 independent clinic, 50 federally qualified health center, and 81 independent laboratory.</p>
<p>Medicare's Physician Fee Schedule has two payment rates for many services: a <b>non-facility</b> rate, used when the practice supplies the space, staff, and supplies (such as an office, POS 11), and a lower <b>facility</b> rate, used when a facility such as a hospital or ASC supplies them. For telehealth, POS 02 is paid at the facility rate and POS 10 at the non-facility rate under current CMS policy, but rules change, so verify them.</p>
<p>A wrong POS can cause a denial, an underpayment, or an overpayment. For example, billing POS 11 for a service done in the hospital outpatient department would pay too much, which is a compliance issue. Check the registration, the schedule, and the note for the actual location.</p>`,
    terms: [
      ["POS", "Place of service code."],
      [
        "Facility rate",
        "Lower professional payment when a facility supplies the resources.",
      ],
      [
        "Non-facility rate",
        "Higher payment when the practice supplies the resources.",
      ],
      ["On-campus / off-campus outpatient hospital", "POS 22 / POS 19."],
      [
        "POS 02 / POS 10",
        "Telehealth: not in the patient's home / in the patient's home.",
      ],
    ],
    steps: [
      "Find the actual location of the service from the schedule and the note.",
      "Choose the POS that matches how the location is licensed or classified.",
      "Check the payer's telehealth POS policy for virtual visits.",
      "Confirm whether the payment is facility or non-facility for the code and POS.",
      "Review claims for POS mismatches with the provider's enrolled locations.",
    ],
    lab: [
      ["A physician sees a patient in a private office suite.", "POS 11."],
      [
        "A physician provides a video visit while the patient is at home and the payer follows CMS POS rules.",
        "POS 10 with the correct telehealth modifier as the payer requires.",
      ],
      [
        "A physician sees a patient in a hospital outpatient clinic that is on the main hospital campus.",
        "POS 22. Payment is at the facility rate.",
      ],
    ],
    case: "A physician group bills POS 11 for visits that take place in a hospital-owned outpatient clinic.",
    model:
      "Review how the location is registered. If the clinic is hospital-based, use POS 19 or 22 and the facility rate, and review prior claims for overpayment. Report the issue to compliance and update the charge setup.",
    mistakes: [
      "Using POS 11 for every outpatient visit.",
      "Ignoring payer rules for telehealth POS.",
      "Assuming the facility and the physician claim use the same POS logic.",
    ],
    drills: [
      "Make a POS card for the 14 codes in this lesson.",
      "List the locations where your fictional client sees patients and assign POS codes.",
      "Explain facility versus non-facility payment in Taglish.",
    ],
    rubric: [
      "POS matches the actual location.",
      "Telehealth POS follows the payer.",
      "Overpayment risk is recognized.",
      "Provider locations are verified.",
    ],
    scenario:
      "A provider's office also has a hospital-owned outpatient clinic on the main campus. Which POS applies to services in that clinic?",
    answers: ["11", "22", "02"],
    correct: 1,
    why: "A hospital outpatient department on the main campus uses POS 22 and is paid at the facility rate.",
    taglish:
      "Ang POS ay dalawang digit na nagsasabi kung saan ginawa ang service. 11 ang office, 22 ang on-campus outpatient hospital, 19 ang off-campus, 23 ang ER, at 02 o 10 ang telehealth. May dalawang rate ang Medicare: facility (mas mababa) at non-facility (mas mataas). Ang maling POS ay puwedeng magdulot ng denial o overpayment, kaya i-check ang totoong lokasyon.",
    tip: "Keep a list of each provider's enrolled locations with the correct POS. Most POS errors begin with a missing setup.",
    mentor:
      "Say each POS code and the setting it matches out loud once a day for a week.",
    remember: [
      "POS must match the actual location of the service.",
      "Medicare pays facility and non-facility rates for many services.",
      "A wrong POS can underpay, overpay, or deny.",
    ],
    source:
      "CMS Place of Service code set and Medicare Physician Fee Schedule documentation. Verify current rules.",
  },
  {
    title: "Fee schedules, RVUs, and contract rates",
    desc: "Understand how Medicare sets professional payment, what participating means, and how to spot underpayments against a fee schedule or contract.",
    time: "45 min",
    objectives: [
      "Describe the components of a Medicare Physician Fee Schedule payment.",
      "Explain participating versus non-participating status and the limiting charge.",
      "Compare a payment to an expected rate to find an underpayment.",
    ],
    concept: `<p>The Medicare Physician Fee Schedule is built on <b>relative value units (RVUs)</b>. Each code has three: work (the provider's time and effort), practice expense, and malpractice expense. Each RVU is adjusted by a geographic practice cost index (GPCI) for the locality, and the total is multiplied by a conversion factor that Congress and CMS set each year. In formula form: payment = [(work RVU × work GPCI) + (practice expense RVU × PE GPCI) + (malpractice RVU × MP GPCI)] × conversion factor.</p>
<p>The fee schedule amount is the <b>allowed amount</b>. It is not the same as the provider's billed charge. Medicare typically pays 80 percent of the allowed amount after the Part B deductible, and the patient (or a secondary plan) pays 20 percent coinsurance. <b>Participating</b> providers agree to accept the Medicare allowed amount as payment in full and are paid the full fee schedule amount. <b>Non-participating</b> providers receive 95 percent of the fee schedule amount and may charge patients up to the <b>limiting charge</b>, which is 115 percent of that reduced amount, unless they accept assignment on a claim.</p>
<p>Commercial payers use their own contracts, often expressed as a percentage of Medicare or as a fixed fee schedule. An <b>underpayment</b> occurs when a payer pays less than the contract rate. Detect it by comparing the allowed amount on the remittance to the expected contract rate for each code, and track the variance. Also compare to the charge master: a charge below the allowed amount means the practice may be under-charging.</p>`,
    terms: [
      [
        "RVU",
        "Relative value unit. Work, practice expense, and malpractice components.",
      ],
      ["GPCI", "Geographic practice cost index."],
      ["Conversion factor", "Dollar amount applied to total RVUs."],
      [
        "Participating",
        "Accepts Medicare's allowed amount as payment in full.",
      ],
      [
        "Limiting charge",
        "Maximum a non-participating provider may charge a Medicare patient.",
      ],
      ["Underpayment", "Payment below the contracted rate."],
    ],
    steps: [
      "Look up the code on the fee schedule for the locality and year.",
      "Compare the payer's allowed amount to the expected rate.",
      "Flag differences above your threshold and record them in a variance log.",
      "Check for modifiers, multiple procedure reductions, or edits that explain the difference.",
      "Appeal or send a payment dispute for unexplained underpayments.",
    ],
    lab: [
      [
        "A code has total RVUs adjusted by GPCIs of 2.50 and the conversion factor is $33.00. What is the fee schedule amount?",
        "2.50 × $33.00 = $82.50. The allowed amount is $82.50 in this fictional example.",
      ],
      [
        "A non-participating provider's fee schedule amount is $100.",
        "The provider receives 95 percent, or $95, and may charge up to 115 percent of that amount, or $109.25 (the limiting charge).",
      ],
      [
        "Contract rate for a code is $120. The remittance shows an allowed amount of $96 with no explanation.",
        "That is a $24 underpayment. Check modifiers and edits. If nothing explains it, file a payment dispute with the contract rate.",
      ],
    ],
    case: "A payer pays 90 percent of the contract rate for dozens of claims over six months and no one has noticed.",
    model:
      "Pull the remittances, compare allowed amounts to the contract, and total the variance. Group by payer and code. Prepare a dispute with the contract language and examples. Add a monthly underpayment check so it does not recur.",
    mistakes: [
      "Treating the billed charge as expected payment.",
      "Not checking contracts for the effective rates.",
      "Ignoring small underpayments that add up.",
    ],
    drills: [
      "Calculate three fee schedule amounts from fictional RVUs and a conversion factor.",
      "Build a variance log with code, expected rate, paid rate, and difference.",
      "Explain participating and non-participating status to a friend.",
    ],
    rubric: [
      "Formulas are correct.",
      "Variances are logged.",
      "Contract language is cited.",
      "Disputes are factual.",
    ],
    scenario:
      "Which formula describes a Medicare Physician Fee Schedule payment?",
    answers: [
      "Billed charge × 80 percent",
      "Adjusted RVUs (work, practice expense, malpractice) × conversion factor",
      "Base units × time",
    ],
    correct: 1,
    why: "The fee schedule amount is the sum of GPCI-adjusted RVUs multiplied by the conversion factor.",
    taglish:
      "Ang Medicare fee schedule ay batay sa RVUs: work, practice expense, at malpractice. I-adjust ang bawat isa ng GPCI at i-multiply sa conversion factor. Ang allowed amount ay hindi pareho sa billed charge. Ang participating provider ay tumatanggap ng allowed amount bilang full payment; ang non-participating ay 95 percent at may limiting charge. Para sa commercial, ikumpara ang remittance sa contract rate para makita ang underpayment.",
    tip: "Check ten random remittances a month against contract rates. Underpayments hide in routine claims.",
    mentor:
      "Calculate three fee schedule amounts by hand and then repeat them in a spreadsheet.",
    remember: [
      "Payment = GPCI-adjusted RVUs × conversion factor.",
      "Allowed amount is not the same as the billed charge.",
      "Compare remittances to contract rates to find underpayments.",
    ],
    source:
      "CMS Physician Fee Schedule documentation. Conversion factors and rules change every year.",
  },
  {
    title: "Practice set E: diagnosis coding by body system",
    desc: "Eighteen ICD-10-CM items on digestive, urinary, musculoskeletal, neurologic, eye, ear, and skin conditions.",
    time: "60 min",
    objectives: [
      "Code common conditions from every major chapter.",
      "Apply code-first notes, laterality, and combination rules.",
      "Track misses by chapter.",
    ],
    concept: `<p>Use the current ICD-10-CM book or the CDC tabular list. Write your answer and the Index path before opening the answer. Allow about two minutes per item. These are fictional and codes should be verified in the current fiscal year.</p>`,
    steps: [
      "Set a timer for two minutes per item.",
      "Write the code and the reason.",
      "Open the answer and compare.",
      "Tag each miss by chapter.",
      "Revisit the matching lesson for any chapter with two or more misses.",
      "Redo the misses after 24 hours.",
    ],
    lab: [
      ["1. GERD without esophagitis.", "K21.9."],
      [
        "2. Diverticulitis of the large intestine without perforation, abscess, or bleeding.",
        "K57.32.",
      ],
      ["3. Irritable bowel syndrome with diarrhea.", "K58.0."],
      [
        "4. Right inguinal hernia, without obstruction or gangrene, not recurrent.",
        "K40.90 (unilateral inguinal hernia). Verify side handling in the Tabular List.",
      ],
      ["5. Benign prostatic hyperplasia with nocturia.", "N40.1 and R35.1."],
      ["6. Kidney stone.", "N20.0."],
      ["7. Acute cystitis without hematuria.", "N30.00."],
      ["8. Osteoarthritis of the right knee.", "M17.11."],
      ["9. Fibromyalgia.", "M79.7."],
      ["10. Gout, unspecified.", "M10.9."],
      [
        "11. Migraine, unspecified, not intractable, without status migrainosus.",
        "G43.909.",
      ],
      ["12. Obstructive sleep apnea.", "G47.33."],
      [
        "13. Alzheimer's disease with dementia, severity unspecified.",
        "G30.9 first, then F02.80.",
      ],
      ["14. Carpal tunnel syndrome, right wrist.", "G56.01."],
      ["15. Age-related cataract, unspecified.", "H25.9."],
      ["16. Otitis media, ear unspecified.", "H66.90."],
      ["17. Cellulitis of the right lower leg.", "L03.115."],
      ["18. Psoriasis, unspecified.", "L40.9."],
    ],
    case: "You scored 13 of 18, with most misses on code-first notes and laterality.",
    model:
      "Review the musculoskeletal and neurologic lesson, write a ‘code first’ card, and redo those items tomorrow. Then take Practice set D for mixed practice.",
    mistakes: [
      "Skipping the Index path.",
      "Memorizing answers without understanding the rule.",
      "Not retrying misses.",
    ],
    drills: [
      "Complete all 18 items and score yourself.",
      "Tag every miss with a chapter.",
      "Redo missed items after a day.",
    ],
    rubric: [
      "Each item was attempted before checking.",
      "Rules behind misses are written.",
      "Redo accuracy improved.",
      "Codes were verified in the current set.",
    ],
    scenario:
      "Your misses cluster around laterality. What is the best next step?",
    answers: [
      "Skip laterality",
      "Practice laterality items and read each note for side words",
      "Memorize all codes",
    ],
    correct: 1,
    why: "Targeted practice on the rule behind your errors fixes them fastest.",
    taglish:
      "Practice set ito sa diagnosis coding ayon sa body system. Isulat muna ang sagot at ang Index path, tapos tingnan ang answer. I-tag ang mga mali ayon sa chapter at balikan ang lesson. Ulitin ang mga mali pagkatapos ng isang araw.",
    tip: "Circle side words (right, left, bilateral) in each prompt before coding. It catches most laterality errors.",
    mentor:
      "Redo the 18 items tomorrow without notes and compare the two scores.",
    remember: [
      "Attempt first, then check.",
      "Tag misses by chapter and revisit the lesson.",
      "Circle laterality words in the prompt.",
    ],
  },
  {
    title: "Practice set F: a mini mock exam",
    desc: "Twenty mixed questions across coding, claims, and compliance, answered in short form with explanations.",
    time: "60 min",
    objectives: [
      "Answer a mixed set under time pressure.",
      "Explain the reason for each answer in one sentence.",
      "Find the areas where you need more review.",
    ],
    concept: `<p>Time yourself at about two and a half minutes per question and answer from memory first. Then check the answer. This set tests concepts rather than long coding scenarios.</p>`,
    steps: [
      "Set a timer for 50 minutes.",
      "Answer each question in one sentence.",
      "Check the answers and mark correct or incorrect.",
      "Group misses by topic.",
      "Revisit the matching lessons.",
      "Retake the set a week later.",
    ],
    lab: [
      ["1. What range of CPT codes is the Surgery section?", "10004–69990."],
      [
        "2. Which modifier reports a significant, separately identifiable E/M on the same day as a procedure?",
        "25.",
      ],
      [
        "3. When is a patient ‘new’ for E/M?",
        "When the patient has not received professional services from the same physician or another physician of the same specialty and subspecialty in the same group practice within the past three years.",
      ],
      [
        "4. Which diagnosis is first-listed in an outpatient encounter?",
        "The condition chiefly responsible for the services provided.",
      ],
      [
        "5. How are ‘probable’ or ‘rule-out’ diagnoses handled in outpatient coding?",
        "They are not coded as confirmed. Code the signs, symptoms, or findings instead.",
      ],
      ["6. What does Z23 report?", "An encounter for immunization."],
      [
        "7. What supports 99214?",
        "Moderate MDM, or at least 30 minutes of total time on the date of the encounter, by the current CPT rules.",
      ],
      [
        "8. What does an Excludes1 note mean?",
        "The two conditions generally cannot be reported together, unless they are unrelated.",
      ],
      [
        "9. What are the Medicare global periods?",
        "0, 10, or 90 days, plus indicators such as XXX, YYY, and ZZZ.",
      ],
      [
        "10. What is the difference between CO and PR?",
        "CO is a contractual obligation (provider write-off). PR is patient responsibility.",
      ],
      [
        "11. How do you calculate days in A/R?",
        "Total A/R divided by average daily charges.",
      ],
      [
        "12. What does CARC 45 mean?",
        "The charge exceeds the fee schedule or contracted amount, usually a contractual write-off.",
      ],
      [
        "13. What does a plus symbol before a CPT code mean?",
        "It is an add-on code, reported only with its primary procedure.",
      ],
      [
        "14. Define unbundling.",
        "Reporting separately the parts of a service that belong in one comprehensive code.",
      ],
      [
        "15. What does the 7th character D mean on an injury code?",
        "Subsequent encounter, such as routine healing follow-up.",
      ],
      [
        "16. What is an MUE?",
        "A medically unlikely edit: the maximum units normally reported for a code per patient per day.",
      ],
      [
        "17. What does minimum necessary mean?",
        "Use or disclose only the PHI needed to do the task.",
      ],
      [
        "18. When is a BAA required?",
        "Before a vendor or contractor handles PHI for a covered entity.",
      ],
      [
        "19. What makes a query non-compliant?",
        "Leading language, mentioning payment, or missing clinically supported options.",
      ],
      [
        "20. What do modifiers 26 and TC mean?",
        "Professional component and technical component of a diagnostic test.",
      ],
    ],
    case: "You scored 15 of 20.",
    model:
      "Group the five misses by topic. For each topic write one study action and retake only those questions in two days. Then take the whole set again next week.",
    mistakes: [
      "Looking at the answers early.",
      "Leaving answers blank.",
      "Not revisiting misses.",
    ],
    drills: [
      "Complete all 20 questions in 50 minutes.",
      "Write a one-sentence study action for each miss.",
      "Retake after a week.",
    ],
    rubric: [
      "Answers were written before checking.",
      "Misses are grouped by topic.",
      "Study actions are specific.",
      "Retake shows improvement.",
    ],
    scenario: "After a mock exam, what should you do first with your results?",
    answers: [
      "Forget the questions you got wrong",
      "Group the misses by topic and plan targeted review",
      "Retake immediately",
    ],
    correct: 1,
    why: "Grouping misses by topic reveals the weak areas to study.",
    taglish:
      "Mini mock exam ito ng halo-halong tanong. Sagutan nang mabilis, isang pangungusap bawat sagot, at saka tingnan ang tama. I-group ang mga mali ayon sa topic at gumawa ng plano sa pag-aaral. Ulitin pagkatapos ng isang linggo para makita ang pag-unlad.",
    tip: "Answer in your own words first. If you can only recognize the answer, you do not know it yet.",
    mentor: "Read three of the answers aloud and explain each in Taglish.",
    remember: [
      "Answer from memory before checking.",
      "Group misses by topic.",
      "Retake after a week to measure progress.",
    ],
  },
]);
