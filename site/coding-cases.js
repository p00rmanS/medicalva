// CPC-style case practice: each case combines diagnosis codes, procedures, modifiers, and setting rules.
addCodingLessons([
  {
    title:
      "Case practice set 1: orthopedic, urgent care, cardiology, obstetric, and behavioral health",
    desc: "Five exam-style cases that mix ICD-10-CM and CPT. Code each from the note, then compare reasoning and codes.",
    time: "75 min",
    objectives: [
      "Code complete cases that combine diagnoses, procedures, and modifiers.",
      "Apply bundling, global package, and time rules inside a realistic note.",
      "Practice the pacing of the exam's ‘cases’ questions.",
    ],
    concept: `<p>The ‘cases’ questions on the CPC exam present a short note and ask for the correct set of codes. They test whether you can combine what you know: documentation, the right section, bundling rules, modifiers, and diagnosis linkage. For each case below, write the ICD-10-CM codes in order, the CPT or HCPCS codes with units and modifiers, and one sentence of reasoning before you open the answer. Allow about six minutes per case. The cases are fictional and the answers should be verified against the current code books.</p>`,
    steps: [
      "Read the whole case before you pick any code.",
      "List the diagnoses and procedures separately.",
      "Check bundling, add-on, and global package rules.",
      "Add modifiers only where the note supports them.",
      "Write your answer, then open the model response and compare.",
      "Log each miss by topic and revisit the matching lesson.",
    ],
    lab: [
      [
        "Case 1. A 62-year-old established patient has right knee osteoarthritis pain. After the usual pre-procedure assessment (no separate evaluation is documented), the provider injects 40 mg of triamcinolone acetonide into the right knee joint with no imaging guidance.",
        "Dx: M17.11. Procedure: 20610-RT (major joint injection without ultrasound guidance). Drug: J3301 × 4 units (10 mg per unit). No separate E/M, because the note shows no significant, separately identifiable evaluation.",
      ],
      [
        "Case 2. An 8-year-old is seen at an urgent care for a 3.0 cm laceration of the right forearm with no foreign body. The wound is irrigated and closed with a single layer of sutures. A tetanus and diphtheria toxoids vaccine (age 7 or older) is administered by injection.",
        "Dx: S51.811A (laceration without foreign body of right forearm, initial encounter), then Z23. Procedures: 12002 (simple repair, 2.6 to 7.5 cm), the Td vaccine product code for age 7 or older (90714), and 90471 for the administration. Place of service 20 for an urgent care facility. A separate E/M with modifier 25 is added only if the note shows a significant, separate evaluation.",
      ],
      [
        "Case 3. A 62-year-old established patient with stable hypertension reports new chest pressure for two days. The provider performs and interprets a 12-lead ECG in the office, orders a stress test, and renews the blood pressure medication. The assessment is ‘chest pain, cause undetermined; hypertension, stable.’ Moderate MDM is documented.",
        "Dx: R07.89 or R07.9 (chest pain, per the documented wording), then I10. Procedures: 93000 (ECG with interpretation and report) and the E/M, 99214, with modifier 25 because the evaluation is significant and separately identifiable from the ECG. The ECG is billed, so it does not also count toward the E/M data.",
      ],
      [
        "Case 4. A 28-week pregnant patient in her first pregnancy has a routine prenatal visit with the same physician who will deliver. Blood pressure and fundal height are normal.",
        "Dx: Z34.03 (normal first pregnancy, third trimester) and Z3A.28. No separate procedure code: routine prenatal visits are part of the global obstetric package (for example 59400) reported at delivery. Itemize only if the care is split.",
      ],
      [
        "Case 5. A therapist provides 53 minutes of individual psychotherapy by live video to a patient at home, with a diagnosis of generalized anxiety disorder. The payer follows CPT telehealth policy.",
        "Dx: F41.1. Procedure: 90837 (psychotherapy, 53 minutes or more) with modifier 95 and place of service 10, if the payer follows this convention.",
      ],
    ],
    case: "You code Case 3 as 99214 without modifier 25 and the E/M line is denied as bundled with the ECG.",
    model:
      "An ECG is a separate service from the evaluation of new chest pressure and medication management, so modifier 25 on the E/M is supported. Add 25, point the E/M to the diagnoses it addresses, and appeal or submit a corrected claim with the note attached.",
    mistakes: [
      "Skipping the diagnosis order.",
      "Adding an E/M with no separate evaluation documented.",
      "Reporting routine prenatal visits separately inside a global package.",
      "Forgetting the vaccine product code.",
    ],
    drills: [
      "Code all five cases without notes, then check.",
      "Write the reasoning sentence for each case.",
      "Redo your misses after 24 hours.",
    ],
    rubric: [
      "Diagnoses are in the correct order.",
      "Procedures, units, and modifiers are supported.",
      "Bundling and package rules are applied.",
      "Misses are logged by topic.",
    ],
    scenario:
      "A routine prenatal visit is provided by the physician who will deliver. How is the visit reported?",
    answers: [
      "As part of the global obstetric package, with no separate visit charge",
      "As a separate office visit code every time",
      "As an emergency visit",
    ],
    correct: 0,
    why: "Routine antepartum visits are included in the global obstetric package unless the care is split.",
    taglish:
      "Ang ‘cases’ sa CPC exam ay maikling note na hinihingan ng buong set ng codes. Basahin ang buong kaso, ilista ang diagnoses at procedures, i-check ang bundling at global package, at idagdag lang ang modifiers na suportado. Sa set na ito: injection sa tuhod (20610 plus J code), laceration repair, ECG na may E/M at modifier 25, prenatal visit na kasama sa global package, at telehealth psychotherapy.",
    tip: "Write ‘dx order, procedures, modifiers, reason’ as four headings before each case. The structure alone prevents most errors.",
    mentor:
      "Explain two of your answers to a partner using only the note, not the codes.",
    remember: [
      "A case answer needs the diagnosis order, procedures, units, modifiers, and a reason.",
      "A billed test does not count again toward E/M data.",
      "Routine prenatal visits belong to the global obstetric package.",
    ],
  },
  {
    title:
      "Case practice set 2: gastroenterology, dermatology, diabetes and kidney disease, anesthesia, and Medicare wellness",
    desc: "Five more exam-style cases that combine screening rules, distinct-site modifiers, combination codes, anesthesia units, and Medicare preventive services.",
    time: "75 min",
    objectives: [
      "Code screening-turned-therapeutic colonoscopy with the right modifiers.",
      "Combine diabetes, kidney disease, and hypertension codes in one case.",
      "Report anesthesia and a Medicare wellness visit with their special codes.",
    ],
    concept: `<p>Work these as you did Set 1: write the diagnoses, the procedures with units and modifiers, and a reason before you open the answer. Allow about six minutes each. The cases are fictional, and exact codes and modifier rules should be verified in the current books and with each payer.</p>`,
    steps: [
      "Read the whole case and list the diagnoses and services.",
      "Apply screening, distinct-site, and add-on rules.",
      "Compute any units that the case requires.",
      "Check Medicare-specific codes and modifiers.",
      "Write your answer and compare.",
    ],
    lab: [
      [
        "Case 6. A 55-year-old with commercial insurance has a screening colonoscopy. The physician removes a polyp of the sigmoid colon with a snare and takes forceps biopsies of a separate lesion in the ascending colon. Pathology is pending.",
        "Dx: Z12.11 first, then K63.5 (polyp of colon) and, for the other lesion, the documented finding (a lesion of the colon, code per the provider's wording since pathology is pending). Procedures: 45385 (snare removal) and 45380 (biopsy) with a distinct-site modifier on the second code (XS or 59 per payer rules), and modifier 33 where the payer requires it for preventive services.",
      ],
      [
        "Case 7. A dermatologist destroys four common warts on the right hand with cryotherapy. At the same visit, the provider performs a tangential (shave) biopsy of a separate pigmented lesion on the back that the note calls a ‘pigmented lesion’ and sends it to pathology.",
        "Dx: B07.8 (other viral warts, where a common wart is indexed) and L98.9 (disorder of the skin, unspecified, for the lesion pending pathology). Procedures: 17110 (destruction of benign lesions, up to 14) and 11102 (tangential biopsy, single lesion) with a distinct-site modifier if an NCCI edit applies and the note supports it.",
      ],
      [
        "Case 8. A 67-year-old established patient has type 2 diabetes with diabetic chronic kidney disease, stage 3b, and hypertension, and takes insulin and metformin. The provider adjusts the insulin dose and orders labs sent out. Moderate MDM is documented.",
        "Dx: E11.22, I12.9, N18.32, Z79.4 and Z79.84 (sequence by reason for the visit). Procedure: 99214. Outside labs are billed by the laboratory, not by the practice.",
      ],
      [
        "Case 9. An anesthesiologist personally provides general anesthesia for a total knee arthroplasty on a 71-year-old patient with severe systemic disease (P3). Anesthesia time is 140 minutes.",
        "Procedure: 01402 (anesthesia for total knee arthroplasty) with modifiers AA and P3, plus 99100 (qualifying circumstance for extreme age, over 70). Report 140 minutes of anesthesia time on the claim. The surgeon's code is not reported by the anesthesiologist.",
      ],
      [
        "Case 10. A Medicare patient has a subsequent Annual Wellness Visit and receives an influenza vaccine. The provider also performs a brief annual depression screening of 10 minutes and documents it.",
        "Procedures: G0439 (subsequent Annual Wellness Visit), G0444 (annual depression screening, 5 to 15 minutes), G0008 (administration of influenza vaccine) and the vaccine product code for the documented vaccine. Dx: Z00.00, Z13.31, and Z23.",
      ],
    ],
    case: "Case 8 is coded with I10 and E11.9 because ‘the patient has hypertension and diabetes.’",
    model:
      "The note documents diabetes with diabetic chronic kidney disease and hypertension with CKD. The combination codes E11.22 and I12.9 apply, with N18.32 for the stage, and the guidelines presume the relationship between hypertension and CKD. I10 and E11.9 would understate the documentation.",
    mistakes: [
      "Skipping the distinct-site modifier on a second endoscopic code.",
      "Using separate codes for conditions that have combination codes.",
      "Forgetting qualifying circumstances and time on anesthesia claims.",
      "Missing the administration and product codes for vaccines.",
    ],
    drills: [
      "Code all five cases without notes, then check.",
      "Compute the anesthesia units for Case 9 with a fictional conversion factor.",
      "Redo your misses after 24 hours.",
    ],
    rubric: [
      "Screening, distinct-site, and add-on rules are applied.",
      "Combination codes are used.",
      "Anesthesia and Medicare special codes are right.",
      "Misses are logged by topic.",
    ],
    scenario:
      "A patient has diabetes with chronic kidney disease. Which code type applies?",
    answers: [
      "A combination code plus a CKD stage code",
      "Separate unrelated codes for each condition",
      "Only an unspecified diabetes code",
    ],
    correct: 0,
    why: "Diabetes with diabetic CKD is reported with the combination code and an additional code for the CKD stage.",
    taglish:
      "Sa set 2, may colonoscopy na screening na naging therapeutic (Z12.11 muna, may modifier para sa distinct site), derma na may destruction at biopsy, diabetes na may CKD at hypertension (combination codes), anesthesia na may AA, P3, 99100 at oras, at Medicare wellness visit na may G codes. Isulat ang diagnoses, procedures, at dahilan bago tingnan ang sagot.",
    tip: "Do the combination-code check on every chart with diabetes, hypertension, or kidney disease. It is a point on the exam and in real claims.",
    mentor:
      "Teach Case 9 to a partner: base units, time units, modifying units, and provider modifier.",
    remember: [
      "Screening colonoscopy that becomes therapeutic lists Z12.11 first and uses distinct-site modifiers.",
      "Diabetes, hypertension, and CKD use combination codes with a stage code.",
      "Anesthesia claims need the code, provider and physical status modifiers, qualifying circumstances, and time.",
    ],
  },
]);
