// Wider coverage: Z codes, endocrine, musculoskeletal, facility and home E/M, Part B drug billing, HCC chart review, mock exam part 2.
addCodingLessons([
  {
    title:
      "ICD-10-CM Z codes in depth: status, history, screening, and social factors",
    desc: "The families of Z codes, which can be first-listed, which are secondary only, and how to code long-term drug use, history, screening, and social needs.",
    time: "55 min",
    objectives: [
      "Tell first-listed Z codes from secondary-only Z codes.",
      "Code status, history, long-term drug therapy, and aftercare correctly.",
      "Report social determinants of health from allowed documentation.",
    ],
    concept: `<p>Chapter 21 (Z00 to Z99) reports reasons for contact with health services that are not diseases or injuries. A Z code can be the main reason for a visit or an added detail. The guidelines list which Z codes may be first-listed and which may only be secondary. Codes for examinations and screening, such as Z00, Z01, Z02, and Z12, and codes such as Z23 for immunization may be first-listed. Codes such as the BMI codes (Z68) and the long-term drug therapy codes (Z79) are always secondary.</p>
<p><strong>Examinations and screening.</strong> Z00.00 and Z00.01 are an adult exam without and with abnormal findings. Z00.121 and Z00.129 are the child versions. Z12.11 is colon cancer screening, Z12.31 is a screening mammogram, and Z13.31 is depression screening. Z20.822 is contact with and exposure to COVID-19.</p>
<p><strong>Long-term drug therapy.</strong> Z79.4 is long-term use of insulin, Z79.84 is long-term use of oral hypoglycemic drugs, and Z79.01 is long-term use of anticoagulants. They are added to show a patient's treatment.</p>
<p><strong>History and status.</strong> Z85.- is a personal history of malignant neoplasm, used only when the cancer is gone and no longer treated. If it is still present or under treatment, use the active cancer code. After completed cancer treatment, the follow-up visit is Z08 first, then Z85.-. Status codes show a condition that remains in place: Z95.5 for a coronary stent, Z96.651 for a right artificial knee joint, Z89.- for acquired absence of a limb, Z93.- for an ostomy, and Z99.2 for dialysis dependence.</p>
<p><strong>Other families.</strong> Z30.- is contraception management, such as Z30.431 for routine checking of an intrauterine device. Z51.11 is chemotherapy, Z51.12 is immunotherapy, and Z47.1 is orthopedic aftercare after joint replacement. Injuries do not use aftercare codes: use the injury code with the 7th character D. Z72.0 is tobacco use, and Z91.148 is the patient's other noncompliance with a medication regimen for another reason, and Z91.141 is the same when due to financial hardship.</p>
<p><strong>Social determinants of health (Z55 to Z65).</strong> Examples are Z55.- for education and literacy problems, Z59.0- for homelessness (Z59.02 for unsheltered), Z59.41 for food insecurity, and Z59.6 for low income. These can be coded from documentation by other clinicians, such as social workers, case managers, community health workers, and nurses, and from a patient's self-report when a clinician has signed off on it. They are secondary diagnoses.</p>`,
    steps: [
      "Decide whether the Z code is the reason for the visit or an added detail.",
      "Check the guidelines for first-listed and secondary-only Z codes.",
      "Choose status, history, or drug therapy codes from the documentation.",
      "For cancer, decide between active disease and personal history.",
      "Add social determinant codes when documentation supports them.",
      "Never use a Z aftercare code for an injury.",
    ],
    lab: [
      [
        "Case 1. A patient has an annual adult exam with no abnormal findings and receives an influenza vaccine.",
        "Z00.00 first and Z23. A Medicare wellness visit would use its own HCPCS code.",
      ],
      [
        "Case 2. A patient with type 2 diabetes on insulin and metformin has an office follow-up.",
        "The diabetes code from the note (such as E11.9) with Z79.4 and Z79.84. The drug codes are secondary.",
      ],
      [
        "Case 3. A social worker documents that a patient is sleeping in a car, which counts as unsheltered homelessness.",
        "Z59.02, as a secondary diagnosis. Documentation from a social worker is allowed for social determinant codes.",
      ],
      [
        "Case 4. A patient finished breast cancer surgery and chemotherapy three years ago and has no evidence of disease at an annual follow-up.",
        "Z08 first, then Z85.3. The cancer is gone and no longer treated, so a personal history code is used instead of a cancer code.",
      ],
      [
        "Case 5. A provider performs a screening colonoscopy on a patient with no symptoms.",
        "Z12.11 as the first-listed diagnosis, with any findings reported after it.",
      ],
    ],
    case: "A coder reports Z68.41 as the first diagnosis for an office visit about morbid obesity.",
    model:
      "BMI codes are secondary only and are used with the documented weight diagnosis. Report the obesity code first and Z68.41 after it. The BMI can come from a nurse's documentation, but the diagnosis must come from the provider.",
    mistakes: [
      "Listing a secondary-only Z code first.",
      "Using a history code for cancer that is still treated.",
      "Using Z aftercare codes for an injury.",
      "Leaving out long-term drug therapy codes.",
    ],
    drills: [
      "Sort twenty Z codes into first-listed and secondary-only groups.",
      "Write the sequence for a cancer follow-up after completed treatment.",
      "Code five social determinant statements.",
    ],
    rubric: [
      "First-listed and secondary-only Z codes are separated.",
      "History and active disease are not confused.",
      "Aftercare codes are not used for injuries.",
      "Social determinants come from allowed documentation.",
    ],
    scenario:
      "A patient finished cancer treatment and shows no evidence of disease at a follow-up. Which sequence is correct?",
    answers: [
      "Z08 first, then the personal history code Z85.-",
      "The active cancer code first, then Z08",
      "Z85.- first, then the active cancer code",
    ],
    correct: 0,
    why: "After completed treatment with no evidence of disease, the follow-up is coded Z08 followed by the personal history code.",
    taglish:
      "Ang Z codes ay hindi sakit o injury kundi dahilan ng pagpunta sa health care. May mga pwedeng una, tulad ng Z00, Z12, at Z23, at may mga pangalawa lang, tulad ng Z68 para sa BMI at Z79 para sa matagal na gamot. Kapag tapos na ang gamutan sa cancer at wala nang sakit, Z08 muna tapos Z85. Huwag gumamit ng aftercare Z code sa injury, gamitin ang 7th character D. Ang social determinants ay pwedeng i-code galing sa social worker o nurse.",
    tip: "Keep a one-page table with two columns: Z codes that can lead and Z codes that never lead. Check it every time a Z code is first on a claim.",
    mentor:
      "Choose ten Z codes you see often and explain each to a partner in one sentence.",
    remember: [
      "Some Z codes may be first-listed, such as Z00, Z12, and Z23, and others, such as Z68 and Z79, are always secondary.",
      "After completed cancer treatment, report Z08 then Z85.-.",
      "Social determinant codes can come from documentation by social workers, nurses, and case managers.",
    ],
  },
  {
    title:
      "ICD-10-CM endocrine, nutritional, and metabolic coding beyond diabetes",
    desc: "Thyroid disease, lipid disorders, obesity and BMI, vitamin deficiencies, electrolyte disorders, prediabetes, and malnutrition.",
    time: "50 min",
    objectives: [
      "Code thyroid, lipid, and vitamin conditions from the documented type.",
      "Report obesity with a BMI code and avoid coding BMI alone.",
      "Distinguish prediabetes, hyperglycemia, and diabetes.",
    ],
    concept: `<p><strong>Thyroid.</strong> Hypothyroidism is E03.9 when unspecified. Autoimmune thyroiditis (Hashimoto's) is E06.3. Hyperthyroidism, or thyrotoxicosis without crisis, is E05.90, and Graves' disease uses E05.0-. A single nontoxic thyroid nodule is E04.1, and a multinodular goiter is E04.2. Hypothyroidism after thyroid surgery or ablation is E89.0.</p>
<p><strong>Lipids.</strong> Hyperlipidemia unspecified is E78.5. Pure hypercholesterolemia is E78.00, pure hyperglyceridemia is E78.1, and mixed hyperlipidemia is E78.2. Use the most specific type the provider documents.</p>
<p><strong>Overweight and obesity.</strong> E66.3 is overweight and E66.9 is obesity unspecified. Newer code sets add obesity class codes, with E66.01 for morbid obesity due to excess calories. Z68.- reports the adult BMI, such as Z68.35 for BMI 35.0 to 35.9 and Z68.41 for BMI 40.0 to 44.9. A BMI code is reported only with an associated diagnosis, such as obesity or underweight, documented by the provider. The BMI value itself may be taken from another clinician's documentation.</p>
<p><strong>Vitamins and electrolytes.</strong> Vitamin D deficiency is E55.9. Hyponatremia is E87.1, hyperkalemia is E87.5, and hypokalemia is E87.6. Dehydration is E86.0.</p>
<p><strong>Glucose problems.</strong> Prediabetes is R73.03, and elevated blood glucose is R73.9. Neither is diabetes. Use an E11 code only when the provider documents diabetes. Metabolic syndrome is E88.810.</p>
<p><strong>Malnutrition.</strong> Severe protein-calorie malnutrition is E43, moderate is E44.0, mild is E44.1, and unspecified is E46. Severity must be documented by the provider, and the malnutrition codes can affect hospital payment, so documentation and clinical support matter.</p>`,
    steps: [
      "Find the exact diagnosis and type in the provider's statement.",
      "Choose the specific code from the Index and Tabular List.",
      "For weight conditions, code the diagnosis first and add the BMI code.",
      "Do not code a lab value alone as a diagnosis.",
      "Separate prediabetes and diabetes carefully.",
      "Query when severity or type is missing.",
    ],
    lab: [
      ["Case 1. A patient takes levothyroxine for hypothyroidism.", "E03.9."],
      [
        "Case 2. The provider documents morbid obesity due to excess calories with a BMI of 42.",
        "E66.01 and Z68.41, with the diagnosis first and the BMI second.",
      ],
      [
        "Case 3. The provider documents prediabetes with a hemoglobin A1c of 6.1.",
        "R73.03. It is not diabetes, so no E11 code applies.",
      ],
      ["Case 4. The provider documents mixed hyperlipidemia.", "E78.2."],
      ["Case 5. The provider documents vitamin D deficiency.", "E55.9."],
    ],
    case: "A coder reports Z68.38 alone because a nurse recorded the BMI, but the provider documented no weight diagnosis.",
    model:
      "A BMI code needs an associated diagnosis documented by the provider, such as obesity or overweight. Without a provider diagnosis, do not report the BMI code. Query the provider if the weight is clinically significant.",
    mistakes: [
      "Reporting a BMI code with no weight diagnosis.",
      "Calling prediabetes diabetes.",
      "Coding a lab value as a diagnosis.",
      "Using the unspecified lipid code when the type is documented.",
    ],
    drills: [
      "Code ten thyroid and lipid statements.",
      "Convert five BMI values to Z68 codes.",
      "Explain prediabetes versus diabetes in two sentences.",
    ],
    rubric: [
      "Diagnoses come from the provider.",
      "BMI is secondary to a weight diagnosis.",
      "Prediabetes and diabetes are separated.",
      "Types are as specific as documented.",
    ],
    scenario:
      "The provider documents prediabetes. A hemoglobin A1c of 6.1 is in the chart. Which code is reported?",
    answers: [
      "R73.03 for prediabetes",
      "E11.9 for diabetes",
      "R73.9 for hyperglycemia",
    ],
    correct: 0,
    why: "Prediabetes has its own code, R73.03, and is not coded as diabetes.",
    taglish:
      "Sa endocrine, ang hypothyroidism ay E03.9 at ang hyperlipidemia ay E78.5 o mas tiyak tulad ng E78.2. Sa obesity, diagnosis muna at saka ang BMI code, at kailangang may diagnosis mula sa provider. Ang prediabetes ay R73.03, hindi diabetes. Ang vitamin D deficiency ay E55.9. Huwag mag-code ng lab value lang bilang diagnosis, at mag-query kung kulang ang detalye.",
    tip: "Never code from a lab value on its own. If the note lists a result but no diagnosis, query instead of guessing.",
    mentor:
      "Review five notes with weights and BMI values and find which ones have a provider diagnosis.",
    remember: [
      "Report a BMI code only with a provider-documented weight diagnosis.",
      "Prediabetes is R73.03 and is not coded as diabetes.",
      "Use the specific type of thyroid and lipid disorder the provider documents.",
    ],
  },
  {
    title:
      "ICD-10-CM musculoskeletal coding: arthritis, osteoporosis, back, and joint conditions",
    desc: "Osteoarthritis, rheumatoid arthritis, gout, osteoporosis with pathological fracture, back pain, spinal stenosis, sciatica, and common soft tissue conditions.",
    time: "55 min",
    objectives: [
      "Code arthritis by type, joint, and laterality.",
      "Tell pathological fractures from traumatic fractures.",
      "Code back pain, stenosis, sciatica, and common tendon conditions.",
    ],
    concept: `<p><strong>Osteoarthritis.</strong> Codes name the joint and the side. M17.11 is primary osteoarthritis of the right knee, M17.0 is bilateral primary osteoarthritis of the knee, and M16.11 is primary osteoarthritis of the right hip. M19.90 is unspecified osteoarthritis of an unspecified site and is used only when nothing more is documented.</p>
<p><strong>Inflammatory arthritis and gout.</strong> Rheumatoid arthritis, unspecified, is M06.9. Seropositive types are in M05.-. Gout, unspecified, is M10.9.</p>
<p><strong>Osteoporosis and pathological fractures.</strong> Age-related osteoporosis without a current fracture is M81.0. When a patient with known osteoporosis breaks a bone from an event that would not normally break a healthy bone, such as a minor fall, the fracture is a pathological fracture of osteoporosis, coded from M80.-, not from the injury chapter. For example, M80.08XA is age-related osteoporosis with a current pathological fracture of the vertebrae, initial encounter.</p>
<p><strong>Back and spine.</strong> Low back pain unspecified is M54.50, vertebrogenic low back pain is M54.51, and other low back pain is M54.59. Sciatica is M54.3-, with M54.31 for the right side. Lumbar radiculopathy is M54.16. Lumbar spinal stenosis is M48.061 without neurogenic claudication and M48.062 with it. Cervicalgia is M54.2.</p>
<p><strong>Soft tissue conditions.</strong> Plantar fasciitis is indexed to M72.2-, with a fifth character for the foot (M72.21 for the right foot). Trigger finger is M65.3-, with M65.311 for the right thumb. Shoulder pain on the right is M25.511, and rotator cuff conditions are in M75.-.</p>
<p><strong>Fractures and aftercare.</strong> For a traumatic fracture, use the 7th character: A for initial active treatment, D for routine subsequent care, G, K, or P for delayed healing, nonunion, or malunion of closed fractures, and S for sequela. Do not use Z aftercare codes for injuries. For joint replacement aftercare, use Z47.1 with Z96.65- for the joint.</p>`,
    steps: [
      "Name the condition, joint, and side from the note.",
      "Decide whether a fracture is traumatic or pathological.",
      "Select the 7th character for injuries and pathological fractures.",
      "Choose combination or more specific codes where they exist.",
      "Use the unspecified code only when nothing more is documented.",
      "Check laterality in every code.",
    ],
    lab: [
      [
        "Case 1. A patient has primary osteoarthritis of the right knee.",
        "M17.11.",
      ],
      [
        "Case 2. A patient has bilateral primary osteoarthritis of both knees.",
        "M17.0.",
      ],
      [
        "Case 3. A patient with age-related osteoporosis falls from standing height and breaks a vertebra. The provider documents a pathological compression fracture at first treatment.",
        "M80.08XA. A fall from standing height would not break a healthy bone, so the fracture is coded as pathological.",
      ],
      [
        "Case 4. A patient has lumbar spinal stenosis with neurogenic claudication.",
        "M48.062.",
      ],
      ["Case 5. A patient has a trigger thumb of the right hand.", "M65.311."],
    ],
    case: "A coder reports a traumatic fracture code for an osteoporotic patient who broke a hip stepping off a curb.",
    model:
      "In a patient with known osteoporosis, a fracture from a minor event is a pathological fracture of osteoporosis and is coded from M80.-. Use the traumatic fracture code only if the provider documents significant trauma that would break a healthy bone.",
    mistakes: [
      "Coding a traumatic fracture for an osteoporotic minor fall.",
      "Leaving out laterality.",
      "Using an aftercare Z code for a fracture.",
      "Using the unspecified osteoarthritis code when the joint is documented.",
    ],
    drills: [
      "Code ten arthritis statements with joints and sides.",
      "Write the 7th characters for fracture encounters.",
      "Decide whether five fracture scenarios are pathological or traumatic.",
    ],
    rubric: [
      "Joint, side, and type are in the code.",
      "Pathological fractures use M80 or M84.",
      "7th characters are correct.",
      "No aftercare codes for injuries.",
    ],
    scenario:
      "A patient with known osteoporosis fractures a vertebra after a minor fall. Which code family is used?",
    answers: [
      "M80.-, for an osteoporotic pathological fracture",
      "S22.-, for a traumatic thoracic fracture",
      "Z47.-, for orthopedic aftercare",
    ],
    correct: 0,
    why: "A fracture from a minor event in a patient with osteoporosis is a pathological fracture coded from M80.-.",
    taglish:
      "Sa osteoarthritis, kailangan ang joint at side, tulad ng M17.11 sa kanang tuhod at M17.0 sa dalawang tuhod. Kapag may osteoporosis ang pasyente at nabali ang buto sa maliit na pagkakadapa, pathological fracture iyon at M80 ang gamit, hindi ang injury chapter. Sa back pain, M54.50, M54.51, o M54.59, at sa spinal stenosis, M48.061 o M48.062 kung may neurogenic claudication. Huwag gumamit ng Z aftercare para sa fracture.",
    tip: "Ask one question of every fracture note: would this event break a healthy bone? If not, think pathological.",
    mentor:
      "Collect five fracture notes and decide for each whether osteoporosis or trauma explains the break.",
    remember: [
      "Osteoarthritis codes need the joint and side, such as M17.11 for the right knee.",
      "A minor-trauma fracture in known osteoporosis is a pathological fracture coded from M80.-.",
      "Fracture encounters use 7th characters, not Z aftercare codes.",
    ],
  },
  {
    title: "Hospital, nursing facility, and home visit E/M coding",
    desc: "Initial and subsequent hospital care, discharge day management, consultations, nursing facility visits, home visits, and the places of service.",
    time: "55 min",
    objectives: [
      "Choose the hospital, nursing facility, or home E/M family by setting.",
      "Level a visit by decision making or total time using each family's code ranges.",
      "Use the correct place of service and Medicare's rules for consultations.",
    ],
    concept: `<p>Since 2023 these families are leveled by medical decision making or total time on the date of the encounter, like office visits.</p>
<p><strong>Hospital inpatient and observation care.</strong> Initial care is 99221 (straightforward or low decision making, 40 minutes), 99222 (moderate, 55 minutes), and 99223 (high, 75 minutes). Subsequent care is 99231 (straightforward or low, 25 minutes), 99232 (moderate, 35 minutes), and 99233 (high, 50 minutes). 99234 to 99236 are used when the patient is admitted and discharged on the same date. Discharge day management is 99238 for 30 minutes or less and 99239 for more than 30 minutes. Inpatient and observation care use the same codes. Medicare adds modifier AI to the principal physician of record's initial visit.</p>
<p><strong>Consultations.</strong> Inpatient consultations are 99252 to 99255, and office consultations are 99242 to 99245. Medicare does not recognize consultation codes and expects initial hospital care or office visit codes instead. Many commercial payers still pay them, so check the payer.</p>
<p><strong>Nursing facility.</strong> Initial care is 99304 (straightforward or low, 25 minutes), 99305 (moderate, 35 minutes), and 99306 (high, 45 minutes). Subsequent care is 99307 (straightforward, 10 minutes), 99308 (low, 15), 99309 (moderate, 30), and 99310 (high, 45). Discharge is 99315 for 30 minutes or less and 99316 for more.</p>
<p><strong>Home or residence.</strong> New patient visits are 99341 (straightforward), 99342 (low), 99344 (moderate), and 99345 (high). Established patient visits are 99347 (straightforward), 99348 (low), 99349 (moderate), and 99350 (high). These replaced the older domiciliary and rest home codes.</p>
<p><strong>Places of service.</strong> 21 is inpatient hospital, 22 is on-campus outpatient hospital, 23 is emergency room, 31 is skilled nursing facility, 32 is nursing facility, 12 is home, 13 is assisted living, and 34 is hospice.</p>`,
    steps: [
      "Identify where the patient was seen and choose the code family.",
      "Decide initial, subsequent, or discharge.",
      "Level by decision making or total time on the date.",
      "Add AI for the principal physician of record if the payer requires it.",
      "Choose the correct place of service.",
      "Check whether the payer recognizes consultation codes.",
    ],
    lab: [
      [
        "Case 1. A hospitalist admits a patient and documents high decision making.",
        "99223, place of service 21, with modifier AI for Medicare.",
      ],
      [
        "Case 2. The next day the hospitalist sees the same patient with moderate decision making.",
        "99232, place of service 21.",
      ],
      [
        "Case 3. On the day of discharge the physician spends a total of 40 minutes on discharge management.",
        "99239, because the time is more than 30 minutes.",
      ],
      [
        "Case 4. A physician sees a long-term resident of a nursing facility for a follow-up with low decision making.",
        "99308, place of service 32.",
      ],
      [
        "Case 5. A physician makes a home visit to an established patient with moderate decision making.",
        "99349, place of service 12.",
      ],
    ],
    case: "A physician bills a Medicare inpatient consultation code 99254 for a specialist's first visit.",
    model:
      "Medicare does not recognize consultation codes. The specialist reports the level of initial hospital care, 99221 to 99223, that the documentation supports. Rebill with the correct initial hospital code. A commercial payer that still pays consultations could accept 99254.",
    mistakes: [
      "Billing consultation codes to Medicare.",
      "Using an office code for a nursing facility visit.",
      "Choosing a level by time without total time documented.",
      "Using the wrong place of service.",
    ],
    drills: [
      "Make a table of each family, its levels, and its times.",
      "Code five hospital notes with different decision making.",
      "Match ten places of service to their codes.",
    ],
    rubric: [
      "The code family fits the setting.",
      "Levels follow decision making or time.",
      "Consultation rules follow the payer.",
      "Places of service are correct.",
    ],
    scenario:
      "A Medicare patient is admitted to a hospital by the principal physician of record with high decision making. Which code is used?",
    answers: [
      "99223 with modifier AI",
      "99255 as a consultation",
      "99239 as discharge management",
    ],
    correct: 0,
    why: "Medicare expects 99223 for high-level initial hospital care, with AI for the principal physician of record.",
    taglish:
      "Sa hospital, 99221 hanggang 99223 ang initial, 99231 hanggang 99233 ang subsequent, at 99238 o 99239 ang discharge. Sa Medicare, walang consult codes, kaya initial hospital code ang gamit at AI para sa principal physician of record. Sa nursing facility, 99304 hanggang 99310, at sa bahay, 99341 hanggang 99350. Piliin ang level ayon sa MDM o kabuuang oras sa araw na iyon, at tamang POS: 21 inpatient, 32 nursing facility, 12 home.",
    tip: "Write the place of service on the top of every note you code. It decides the code family before you read the level.",
    mentor:
      "Ask a hospitalist group biller how they track total time on discharge day.",
    remember: [
      "Hospital codes are 99221 to 99223 initial, 99231 to 99233 subsequent, and 99238 or 99239 for discharge.",
      "Medicare does not recognize consultation codes, and the principal physician of record adds AI.",
      "Nursing facility codes are 99304 to 99310 and home visit codes are 99341 to 99350.",
    ],
  },
  {
    title: "Medicare Part B drug billing: buy and bill, units, waste, and NDCs",
    desc: "How physician-administered drugs are billed, converting dose to billing units, JW and JZ, NDC reporting, vaccines, and Part B versus Part D.",
    time: "55 min",
    objectives: [
      "Convert a dose to billing units and report discarded drug.",
      "Report an NDC when a payer requires it.",
      "Separate Part B drugs and vaccines from Part D drugs.",
    ],
    concept: `<p><strong>Buy and bill.</strong> In an office or clinic, the practice buys the drug, gives it, and bills the payer with a HCPCS J code. The administration is a separate code. Medicare Part B pays for many drugs at the average sales price plus a percentage, which the payer adjusts each quarter. Drug samples are never billed.</p>
<p><strong>Billing units.</strong> Each J code states its unit, such as 50 mg for J9045 carboplatin. Convert the dose given into the number of billing units. If a dose is 450 mg and the unit is 50 mg, report 9 units.</p>
<p><strong>Waste.</strong> If a single-dose vial is only partly used, the discarded amount can be billed too. Report the administered amount on one line and the discarded amount on a second line with modifier JW. Modifier JZ shows that no drug was discarded, and Medicare requires it for single-dose containers with no waste. Multi-dose vials are not billed for waste.</p>
<p><strong>NDCs.</strong> Medicaid and some other payers also want the National Drug Code, an 11-digit number, with a qualifier N4, the quantity, and the unit of measure (such as UN for unit, ML for milliliter, or GR for gram). The J code and the NDC must match the product used.</p>
<p><strong>Vaccines.</strong> Medicare Part B covers influenza, pneumococcal, hepatitis B for some patients, and COVID-19 vaccines. The administration is G0008 for influenza, G0009 for pneumococcal, and G0010 for hepatitis B. A high-dose influenza vaccine for patients 65 and older is reported with 90662. Many other adult vaccines, such as shingles vaccine, are covered under Part D and are billed by pharmacies.</p>
<p><strong>Part B versus Part D.</strong> Part B generally covers drugs given incident to a physician's service that patients do not usually give themselves. Drugs that patients usually self-administer are usually excluded from Part B and fall under Part D. Many drug claims need a diagnosis that matches a coverage policy, so link each drug to the diagnosis that supports it.</p>`,
    steps: [
      "Identify the drug, the strength, and the dose given.",
      "Find the J code and its unit.",
      "Convert the dose to units and compute any waste.",
      "Add JW or JZ as the payer requires.",
      "Add the NDC and quantity if the payer needs it.",
      "Link the drug to a diagnosis that supports it.",
    ],
    lab: [
      [
        "Case 1. A single-dose vial of carboplatin (J9045, per 50 mg) contains 450 mg, and the whole 450 mg is given.",
        "J9045 × 9 units with JZ, because nothing was discarded from the single-dose vial.",
      ],
      [
        "Case 2. A drug billed per 10 mg comes in a single-dose 150 mg vial. The patient gets 120 mg and 30 mg is discarded.",
        "One line for 12 units administered and a second line for 3 units discarded with JW.",
      ],
      [
        "Case 3. A Medicare patient age 70 receives a high-dose influenza vaccine in the office.",
        "90662 for the vaccine, G0008 for the administration, and Z23 as the diagnosis.",
      ],
      [
        "Case 4. A Medicare patient asks the office to give a shingles vaccine.",
        "It is generally a Part D benefit, not a Part B benefit, so the pharmacy usually bills it. Check the plan before the office gives it.",
      ],
      [
        "Case 5. A Medicaid payer requires an NDC with aflibercept (J0178) billed by the office.",
        "Report J0178 with the units, and add the 11-digit NDC with qualifier N4, the quantity, and the unit of measure such as ML.",
      ],
    ],
    case: "A clinic gives 120 mg from a 150 mg single-dose vial and bills only the 12 administered units with no waste line.",
    model:
      "The discarded 30 mg was bought for the patient and is billable as waste. Add a second line for the discarded units with JW, and keep the vial size and the discarded amount in the record. If no waste occurred, use JZ.",
    mistakes: [
      "Not converting the dose to billing units.",
      "Missing JW or JZ on single-dose vials.",
      "Billing waste from a multi-dose vial.",
      "Billing a self-administered drug to Part B.",
    ],
    drills: [
      "Convert five doses to billing units.",
      "Write the lines for a drug with 40 percent waste.",
      "Explain Part B versus Part D for three drugs.",
    ],
    rubric: [
      "Units match the dose and the code's unit.",
      "Waste is reported on a separate line.",
      "JW and JZ are used correctly.",
      "NDC and vaccine rules are followed.",
    ],
    scenario:
      "A practice gives part of a single-dose vial and discards the rest. How is the discarded drug reported?",
    answers: [
      "On a second line with modifier JW",
      "In the same line with no modifier",
      "It cannot be billed in any case",
    ],
    correct: 0,
    why: "Discarded drug from a single-dose container is reported on its own line with JW, so the payer can see what was wasted.",
    taglish:
      "Sa buy and bill, binili ng clinic ang gamot, ibinigay, at binill gamit ang J code at hiwalay na administration code. I-convert ang dose sa billing units ng J code, halimbawa 450 mg sa 50 mg bawat unit ay 9 units. Kapag may natapon na bahagi ng single-dose vial, hiwalay na linya na may JW, at JZ kung walang natapon. May NDC din sa Medicaid at ibang payer. Ang flu at pneumococcal vaccines ay Part B, at ang shingles vaccine ay karaniwang Part D.",
    tip: "Write the vial size next to the dose before you compute units. The gap between the two is the waste line.",
    mentor:
      "Ask your biller to show you three drug claims with waste and the vial logs that support them.",
    remember: [
      "Convert the dose to the J code's billing unit, and report waste on its own line with JW.",
      "JZ shows that no drug was discarded from a single-dose container.",
      "Flu, pneumococcal, and hepatitis B vaccines are generally Part B, and shingles vaccine is generally Part D.",
    ],
  },
  {
    title:
      "Risk adjustment chart review practice: finding supported HCC diagnoses",
    desc: "Apply face-to-face and provider-type rules, MEAT, status codes, and specificity to short chart excerpts, and decide what can be reported.",
    time: "60 min",
    objectives: [
      "Check that an encounter is acceptable for risk adjustment.",
      "Use MEAT and specificity to decide whether a diagnosis is supported.",
      "Distinguish current conditions from history and problem-list-only entries.",
    ],
    concept: `<p>In risk adjustment, a diagnosis is reported only when a documented, acceptable encounter supports it. The usual checks are these:</p>
<p><strong>Acceptable encounter.</strong> The patient was seen face to face, or by a real-time audio-video visit, by an acceptable provider type such as a physician, nurse practitioner, or physician assistant, in an acceptable setting. Lab-only reports, radiology-only reports, and audio-only visits are generally not acceptable sources for Medicare Advantage risk adjustment, so check current program rules. A signature and credentials are required, and the date of service must be clear.</p>
<p><strong>MEAT.</strong> A chronic condition is supported when the note shows it was Monitored, Evaluated, Assessed or addressed, or Treated. A diagnosis that appears only in a problem list, a past medical history list, or a medication list without any such evidence is weak and may be rejected.</p>
<p><strong>Specificity and status.</strong> Code the most specific diagnosis, such as diabetic chronic kidney disease with its stage and insulin use. Status codes also carry risk when documented, such as Z89.- for an amputation, Z93.- for an ostomy, and Z99.2 for dialysis. A condition that has resolved is not coded as current, and a ‘history of’ entry for an active chronic disease is not a reason to skip it when the note shows it is treated.</p>
<p><strong>Once a year.</strong> A diagnosis is captured each calendar year on at least one acceptable encounter. Reviewers also look for unsupported diagnoses that should be removed, because an overpayment can result from a code that the record does not support.</p>
<p>Use the chart excerpts below as practice. The cases are fictional and the program rules, models, and code sets change each year.</p>`,
    steps: [
      "Check the encounter type, provider, date, and signature.",
      "Find each diagnosis in the assessment and plan.",
      "Test it with MEAT.",
      "Select the most specific code.",
      "Add status codes where documented.",
      "Mark unsupported items and send a query when appropriate.",
    ],
    lab: [
      [
        "Excerpt 1. Office visit by a physician: ‘Type 2 diabetes with diabetic CKD stage 3b, on glargine insulin. A1c 8.1, increased glargine to 24 units. Renal diet reviewed.’",
        "E11.22, N18.32, and Z79.4. The note shows evaluation and treatment, so the diagnoses are supported.",
      ],
      [
        "Excerpt 2. A nurse practitioner's note lists ‘CHF’ in the problem list only. The assessment and plan discuss hypertension and nothing about heart failure.",
        "Heart failure is not supported. There is no monitoring, evaluation, assessment, or treatment in the note, so it should not be reported from this encounter.",
      ],
      [
        "Excerpt 3. A physician's note says ‘History of right below-knee amputation. Prosthesis fit checked today.’",
        "Z89.511, a status code for acquired absence of the right leg below the knee. The condition is permanent and the note addresses it.",
      ],
      [
        "Excerpt 4. A physician's note says ‘COPD, stable on tiotropium, lungs clear.’",
        "J44.9. The condition is current, assessed as stable, and treated with a named medication.",
      ],
      [
        "Excerpt 5. A telephone-only call: ‘Patient reports major depression is worse. Continue sertraline.’",
        "Not an acceptable encounter for Medicare Advantage risk adjustment if it was audio-only. Do not report the diagnosis from this call, and look for an acceptable visit.",
      ],
    ],
    case: "A reviewer submits heart failure from a medication list that includes furosemide and no other mention in the chart.",
    model:
      "A medication alone is not documentation of a diagnosis, and the note does not show monitoring, evaluation, assessment, or treatment of heart failure. Do not submit it. Send a query or find an encounter where the provider documents and manages the condition.",
    mistakes: [
      "Submitting a diagnosis from a problem list alone.",
      "Using lab or radiology reports as the source.",
      "Using an audio-only visit as the source.",
      "Skipping the status codes for amputation or dialysis.",
    ],
    drills: [
      "Review ten fictional charts and mark each diagnosis supported or not.",
      "Write a neutral query for an unsupported condition.",
      "List the checks for an acceptable encounter.",
    ],
    rubric: [
      "Encounter type and provider are checked.",
      "MEAT is applied to each diagnosis.",
      "Specificity and status codes are used.",
      "Unsupported items are not submitted.",
    ],
    scenario:
      "A condition appears only in a problem list with no other mention in the note. What should the reviewer do?",
    answers: [
      "Not submit it unless the note shows MEAT",
      "Submit it because it is in the chart",
      "Submit it with a lower-specificity code",
    ],
    correct: 0,
    why: "A diagnosis needs documentation of monitoring, evaluation, assessment, or treatment in an acceptable encounter, and a problem-list entry alone does not show that.",
    taglish:
      "Sa risk adjustment, kailangan ng tatanggaping encounter: face-to-face o audio-video, sa tamang provider, may pirma at petsa. Subukan ang bawat diagnosis gamit ang MEAT: monitor, evaluate, assess, o treat. Hindi sapat ang nasa problem list lang o gamot lang. Gamitin ang pinakatiyak na code at ang status codes tulad ng Z89 at Z99.2. Kapag walang suporta, huwag isumite at mag-query kung kailangan.",
    tip: "Highlight the assessment and plan first. If a chronic condition is not in them, it rarely passes MEAT.",
    mentor:
      "Review a sample chart with a certified risk adjustment coder and compare which diagnoses you each accepted.",
    remember: [
      "A risk adjustment diagnosis needs an acceptable encounter and an acceptable provider.",
      "MEAT shows that the condition was monitored, evaluated, assessed, or treated.",
      "Problem-list-only or medication-only entries do not support a diagnosis.",
    ],
  },
  {
    title: "Mock exam part 2: twenty mixed questions",
    desc: "Twenty more short exam-style questions across modifiers, ICD-10-CM guidelines, HCPCS, Medicare rules, and compliance, with reasoning.",
    time: "40 min",
    objectives: [
      "Answer mixed questions at exam pace.",
      "Practice the modifiers and Medicare facts that exams test often.",
      "Update your list of weak topics.",
    ],
    concept: `<p>Set a 30-minute timer and answer all twenty questions on paper before you open any answer. Mark each answer sure, unsure, or guess. Then check the reasoning and add every miss to your weak-topic list. These are original practice questions, not real exam questions, so verify details in your current books.</p>`,
    steps: [
      "Set a 30-minute timer.",
      "Answer every question on paper.",
      "Mark each as sure, unsure, or guess.",
      "Open the answers and compare reasoning.",
      "Add each miss to your weak-topic list and review it.",
    ],
    lab: [
      [
        "Q1. Which modifier reports a repeat procedure by the same physician on the same day, and which reports one by a different physician?",
        "76 is a repeat procedure by the same physician and 77 is a repeat procedure by another physician.",
      ],
      [
        "Q2. Which modifier reports an unplanned return to the operating room for a related problem during the global period?",
        "78.",
      ],
      [
        "Q3. Which modifier reports an unrelated procedure during a global period?",
        "79. Modifier 58 reports a planned or staged procedure and 24 reports an unrelated E/M during the post-operative period.",
      ],
      [
        "Q4. Which modifier shows the decision for surgery on an E/M the day before or day of a major procedure?",
        "57.",
      ],
      [
        "Q5. How are hypertensive heart disease with heart failure coded?",
        "I11.0, plus an I50.- code for the type of heart failure.",
      ],
      [
        "Q6. What are the CPT code and the units for a 4.0 cm simple repair of the forearm?",
        "12002 (simple repair, 2.6 to 7.5 cm), one unit.",
      ],
      [
        "Q7. What does the HCPCS letter E identify?",
        "Durable medical equipment. A is ambulance and supplies, J is drugs, L is orthotics and prosthetics, G is temporary procedures and services, and Q is temporary codes.",
      ],
      [
        "Q8. A Medicare patient may be denied a service as not medically necessary. What modifier shows the patient signed an ABN?",
        "GA. GZ shows that no ABN was obtained and the service is expected to be denied, and GY shows a statutory exclusion.",
      ],
      [
        "Q9. How long does Medicare allow for timely filing of a claim?",
        "One calendar year from the date of service.",
      ],
      [
        "Q10. After the Medicare Part B deductible, what share does a patient usually pay?",
        "20 percent coinsurance of the allowed amount.",
      ],
      [
        "Q11. What do CARC and RARC mean on a remittance?",
        "A CARC (claim adjustment reason code) explains an adjustment, and a RARC (remittance advice remark code) gives supplemental information.",
      ],
      [
        "Q12. What does the HIPAA minimum necessary rule require?",
        "Use and disclose only the minimum amount of protected health information needed for the purpose.",
      ],
      [
        "Q13. When does anesthesia time start?",
        "When the anesthesia provider begins to prepare the patient for anesthesia in the operating room or equivalent, and it ends when the provider is no longer in personal attendance.",
      ],
      [
        "Q14. What is the global period for a minor procedure with a 10-day global, and when does it start?",
        "10 days of post-operative care, beginning the day after the procedure.",
      ],
      [
        "Q15. How is an outpatient diagnosis written as ‘rule out pneumonia’ coded?",
        "Do not code the rule-out diagnosis. Code the signs and symptoms, such as cough or fever.",
      ],
      [
        "Q16. What is the code for a routine adult exam with no abnormal findings, and for an immunization encounter?",
        "Z00.00 and Z23.",
      ],
      [
        "Q17. What is the difference between a rejection and a denial?",
        "A rejection failed front-end edits and was never adjudicated, so it is fixed and resent. A denial was adjudicated and is handled with a corrected claim or appeal.",
      ],
      [
        "Q18. Which code is used for obstetric care of a normal delivery with a single live birth?",
        "O80 with Z37.0. The delivery procedure is reported with a CPT code such as 59400 for a global package.",
      ],
      [
        "Q19. Which services are included in a global obstetric package?",
        "Routine antepartum visits, the delivery, and routine postpartum care.",
      ],
      [
        "Q20. A coder is asked to add a code for a service that is not in the note. What should the coder do?",
        "Decline to assign it and query the provider. A code must be supported by the documentation.",
      ],
    ],
    case: "You score 14 of 20 and your misses are on global periods and Medicare rules.",
    model:
      "That is a good score and the pattern is useful. Review the global period lessons and Medicare claims lessons, make a one-page chart of global periods and filing limits, and retake those questions in a day.",
    mistakes: [
      "Opening answers before finishing.",
      "Ignoring unsure answers that were correct.",
      "Studying only your wrong answers.",
      "Never retesting the same topics.",
    ],
    drills: [
      "Take this set under time and score it.",
      "Compare your weak topics with part 1.",
      "Retest the missed questions after 24 hours.",
    ],
    rubric: [
      "All questions answered before checking.",
      "Confidence marks are recorded.",
      "Weak topics are listed.",
      "Missed topics are reviewed and retested.",
    ],
    scenario:
      "A coder is asked to add a code for a service that is not documented. What is the right response?",
    answers: [
      "Decline and query the provider for documentation",
      "Add it because the client has asked you to add it",
      "Add it with a modifier so the gap is not obvious",
    ],
    correct: 0,
    why: "A code must be supported by the documentation, so the coder declines and queries instead of adding it.",
    taglish:
      "Sagutan muna ang lahat ng dalawampung tanong bago tingnan ang sagot, at markahan kung sure, unsure, o guess. Sa modifiers, tandaan ang 76 at 77 para sa repeat, 78 sa balik sa OR, 79 sa hindi kaugnay na procedure sa global period, at 57 sa decision for surgery. Sa Medicare, isang taon ang timely filing at 20 porsyento ang coinsurance. Kapag walang dokumentasyon ang serbisyo, huwag i-code at mag-query.",
    tip: "Compare this score with part 1 for the same topics. A topic you missed twice is your first review priority.",
    mentor:
      "Swap this set with a study partner and explain two answers each aloud.",
    remember: [
      "76 and 77 are repeat procedures, 78 is an unplanned return to the operating room, and 79 is an unrelated procedure in a global period.",
      "Medicare timely filing is one year from the date of service, and Part B coinsurance is 20 percent.",
      "Never add a code that the documentation does not support.",
    ],
  },
]);
