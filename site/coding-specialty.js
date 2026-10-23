// Coding track additions: specialty coding. Code numbers are examples; verify in current books.
addCodingLessons([
  {
    title: "Hospital, emergency, and consultation E/M",
    desc: "Level inpatient, observation, emergency department, and consultation visits, and handle payers that do not accept consult codes.",
    time: "45 min",
    objectives: [
      "Choose the right E/M family for the care setting.",
      "Level hospital and emergency visits by medical decision making and time.",
      "Report a consultation correctly, or substitute the right visit code when a payer does not accept it.",
    ],
    concept: `<p>Office visit rules are not the only E/M rules. Each care setting has its own code family. Since 2023, hospital inpatient and observation care share one set of codes: initial care (99221–99223), subsequent care (99231–99233), same-day admission and discharge (99234–99236), and discharge day management (99238 for 30 minutes or less, 99239 for more than 30 minutes).</p>
<p>Initial hospital care is leveled by MDM or time: 99221 for straightforward or low MDM (40 minutes), 99222 for moderate MDM (55 minutes), and 99223 for high MDM (75 minutes). Subsequent care is 99231 (straightforward or low, 25 minutes), 99232 (moderate, 35 minutes), and 99233 (high, 50 minutes). Time thresholds are minimums; verify them in the current CPT book.</p>
<p><b>Emergency department</b> visits are 99281–99285 and are leveled by MDM only, not by time. <b>Critical care</b> (99291 for the first 30–74 minutes, 99292 for each additional 30) has its own documentation rules.</p>
<p>A <b>consultation</b> is a request from another provider for an opinion or advice, with the request documented and a written report sent back. Office consults are 99242–99245 and inpatient or observation consults are 99252–99255. Medicare does not accept consultation codes. Providers bill the appropriate new-patient, established-patient, or initial hospital code instead. Many commercial payers still accept consult codes, so check each payer.</p>
<p>The physician bills a professional claim (CMS-1500). The hospital bills a facility claim (UB-04). Whether a patient is an inpatient or an outpatient in observation is a hospital status decision, not a coder's choice.</p>`,
    terms: [
      ["99221–99223", "Initial hospital inpatient or observation care."],
      ["99231–99233", "Subsequent hospital inpatient or observation care."],
      [
        "99238 / 99239",
        "Hospital discharge day management: 30 minutes or less / more than 30 minutes.",
      ],
      ["99281–99285", "Emergency department visits, leveled by MDM."],
      [
        "99291 / 99292",
        "Critical care, first 30–74 minutes / each additional 30 minutes.",
      ],
      ["99242–99245", "Office or outpatient consultations."],
      ["99252–99255", "Inpatient or observation consultations."],
      [
        "Professional vs facility",
        "The physician's claim versus the hospital's claim for the same stay.",
      ],
    ],
    steps: [
      "Identify the setting (office, emergency, inpatient, observation) and the service type (initial, subsequent, discharge, consult).",
      "Choose the code family for that setting and service type.",
      "Rate the MDM using problems, data, and risk, and check whether documented time supports a higher level.",
      "For a consultation, confirm the documented request, the opinion, and the report back.",
      "Check the payer's consultation policy and substitute the right visit code if consults are not accepted.",
      "Link diagnoses and report the correct place of service.",
    ],
    lab: [
      [
        "Emergency department visit for a minor sore throat. The physician documents low MDM.",
        "99283 (emergency department visit, low MDM). Emergency visits are leveled by MDM, not time.",
      ],
      [
        "A hospitalist admits a patient with pneumonia and respiratory failure. The note documents high MDM with a decision to escalate care.",
        "99223 (initial hospital inpatient or observation care, high MDM).",
      ],
      [
        "Day 2: the patient is stable on antibiotics. The hospitalist documents moderate MDM.",
        "99232 (subsequent hospital care, moderate MDM).",
      ],
      [
        "Discharge day. The physician documents 24 minutes spent on discharge management.",
        "99238 (discharge day management, 30 minutes or less).",
      ],
      [
        "A hospitalist asks a cardiologist to evaluate new atrial fibrillation. The request, opinion, and written report are documented. The patient has Medicare.",
        "Medicare does not accept consultation codes. The cardiologist reports the appropriate initial hospital care code (99221–99223) by MDM or time. A commercial payer that accepts consults might instead use 99252–99255.",
      ],
    ],
    case: "A claim for an inpatient consult is denied by a Medicare Advantage plan. The coder used 99254.",
    model:
      "Check the plan's consultation policy. If the plan follows Medicare and does not accept consult codes, correct the claim to the appropriate initial hospital care code supported by MDM or time, and resubmit as a corrected claim. Do not change the documentation. Add a payer rule to your cheat sheet.",
    mistakes: [
      "Leveling emergency visits by time.",
      "Using office E/M codes for hospital care.",
      "Billing consult codes to Medicare.",
      "Deciding inpatient versus observation status as the coder.",
    ],
    drills: [
      "Make a table of setting, service type, code family, and leveling method.",
      "Level six fictional hospital and emergency notes by MDM.",
      "Write a consultation checklist: request, opinion, report back.",
    ],
    rubric: [
      "The code family matches the setting.",
      "Emergency visits are leveled by MDM only.",
      "Payer consultation policy is checked.",
      "Professional and facility claims are not confused.",
    ],
    scenario:
      "A Medicare patient is seen in the hospital at another physician's request. Which approach is correct?",
    answers: [
      "Bill an inpatient consultation code because a consult was requested",
      "Bill the appropriate initial hospital care code, because Medicare does not accept consultation codes",
      "Bill an office visit code because a specialist saw the patient",
    ],
    correct: 1,
    why: "Medicare does not recognize consultation codes. The service is reported with the visit code that matches the setting and level.",
    taglish:
      "Iba-iba ang E/M code family depende sa setting. Sa hospital, 99221–99223 ang initial care at 99231–99233 ang follow-up; sa emergency, 99281–99285 na MDM lang ang basehan. Ang consult ay may request, opinyon, at report pabalik, pero hindi tumatanggap ng consult codes ang Medicare, kaya gamitin ang tamang visit code. Ang inpatient o observation status ay desisyon ng ospital, hindi ng coder.",
    tip: "Keep a payer sheet of which plans accept consult codes. It prevents a whole class of denials.",
    mentor:
      "Make a flashcard for each code family: setting, service, leveling method, and one payer caution.",
    remember: [
      "Each care setting has its own E/M code family.",
      "Emergency visits are leveled by MDM only.",
      "Medicare does not accept consultation codes. Substitute the right visit code.",
    ],
    source:
      "AMA CPT E/M guidelines and CMS Medicare Claims Processing Manual. Thresholds and payer policies change; verify the current edition.",
  },
  {
    title: "Skin procedures: biopsy, excision, destruction, and repair",
    desc: "Separate four commonly confused procedure types and apply the measurement and repair-length rules.",
    time: "50 min",
    objectives: [
      "Differentiate biopsy, excision, destruction, and repair.",
      "Select codes by lesion type, site group, and size.",
      "Total repair lengths correctly and know when a closure is separately reportable.",
    ],
    concept: `<p>The integumentary subsection of the CPT surgery section (10004–19499) rewards careful reading of operative notes. Four terms look similar but have different codes.</p>
<ul>
<li><b>Biopsy</b> removes a sample for pathology. Tangential (shave) biopsy is 11102, punch is 11104, and incisional is 11106, each for the first lesion, with add-on codes 11103, 11105, and 11107 for each additional lesion.</li>
<li><b>Excision</b> removes the entire lesion with margins. Codes depend on lesion type (benign or malignant), body area group, and the <em>excised diameter</em>, which is the lesion plus the narrowest margins needed. Measure before excision, as documented by the provider, not from the pathology report. Benign trunk, arms, and legs run 11400–11406. Scalp, neck, hands, feet, and genitalia run 11420–11426. Face, ears, eyelids, nose, and lips run 11440–11446. Malignant codes start at 11600.</li>
<li><b>Destruction</b> eliminates a lesion by cryotherapy, laser, or chemical means. Premalignant lesions such as actinic keratoses use 17000 for the first lesion, 17003 for each of the second through fourteenth, and 17004 for 15 or more. Benign lesions such as warts use 17110 (up to 14) and 17111 (15 or more).</li>
<li><b>Repair</b> is closure of a wound. Simple repair is 12001–12021, intermediate is 12031–12057, and complex is 13100–13160. Lengths are in centimeters and are added together for the same repair type within the same anatomical group.</li>
</ul>
<p>The closure of an excision is not billed separately if it is a simple repair. Intermediate or complex repairs after an excision can be reported separately. Different lesions or sites can need a modifier such as 59 or XS, and a separate E/M may need modifier 25.</p>`,
    terms: [
      [
        "Excised diameter",
        "Largest lesion diameter plus the narrowest margins required, measured before excision.",
      ],
      [
        "Tangential biopsy",
        "Shave biopsy: 11102 first lesion, 11103 each additional.",
      ],
      ["Punch biopsy", "11104 first lesion, 11105 each additional."],
      ["Actinic keratosis", "A premalignant skin lesion. ICD-10-CM L57.0."],
      ["Simple repair", "Superficial closure of one layer."],
      ["Intermediate repair", "Layered closure of deeper tissue."],
      [
        "Complex repair",
        "Requires more than layered closure, such as debridement or extensive undermining.",
      ],
    ],
    steps: [
      "Read the procedure note and decide: biopsy, excision, destruction, or repair.",
      "For excisions, find the pre-excision measurement and the margins, and compute the excised diameter.",
      "Find the body area group and lesion type (benign or malignant) and choose the code range.",
      "For destruction, count lesions and use the code that matches the lesion type and count.",
      "For repair, group wounds by repair type and anatomical group, and add the lengths in centimeters.",
      "Decide whether a repair is included in the excision, and whether a modifier is supported.",
    ],
    lab: [
      [
        "A provider takes punch biopsies of two different lesions on the arm in the same session.",
        "11104 for the first lesion and 11105 once for the additional lesion. Add-on codes do not need a modifier.",
      ],
      [
        "Cryotherapy is used to destroy five actinic keratoses.",
        "17000 for the first lesion and 17003 × 4 for the second through fifth. Dx L57.0.",
      ],
      [
        "A benign lesion on the trunk is excised. The lesion is 0.8 cm with 0.3 cm margins on each side (1.4 cm excised diameter). A simple closure is performed.",
        "Excised diameter = 0.8 + 0.3 + 0.3 = 1.4 cm, so 11402 (benign trunk, 1.1–2.0 cm). The simple closure is included and not reported separately.",
      ],
      [
        "A patient has a 3.5 cm simple laceration repair on the forearm and a 2.0 cm simple repair on the scalp.",
        "Both are simple repairs in the same anatomical group (scalp, neck, axillae, genitalia, trunk, extremities). Total length = 5.5 cm, so 12002 (simple repair, 2.6–7.5 cm).",
      ],
      [
        "Six plantar warts are destroyed with cryotherapy.",
        "17110 (destruction of benign lesions, up to 14). Dx B07.0 (plantar wart).",
      ],
    ],
    case: "A trainee uses the pathology report's measurement (0.9 cm) to code an excision, but the operative note says the excised diameter was 1.5 cm including margins.",
    model:
      "Use the provider's documented pre-excision measurement and margins, because tissue shrinks after removal. The 1.5 cm excised diameter selects the 1.1–2.0 cm code for the lesion type and site. Use the pathology report for the diagnosis only after your policy allows it.",
    mistakes: [
      "Coding excision size from the pathology report.",
      "Billing a simple closure separately with an excision.",
      "Adding repair lengths from different repair types.",
      "Reporting every destruction as 17110.",
    ],
    drills: [
      "Create a table of biopsy, excision, destruction, and repair with the code ranges in this lesson.",
      "Code ten fictional skin procedures and show your size math.",
      "Write a modifier checklist for same-day E/M and different-site lesions.",
    ],
    rubric: [
      "The procedure type is identified before the code.",
      "Excised diameter includes margins.",
      "Repair lengths are grouped correctly.",
      "Modifiers have documentation support.",
    ],
    scenario:
      "A note says a lesion was 1.0 cm with 0.4 cm margins on each side. What is the excised diameter?",
    answers: ["1.0 cm", "1.8 cm", "1.4 cm"],
    correct: 1,
    why: "Excised diameter is the lesion plus the narrowest margins on both sides: 1.0 + 0.4 + 0.4 = 1.8 cm.",
    taglish:
      "Apat na magkaibang bagay: biopsy (kumuha ng sample), excision (tinanggal ang buong lesion), destruction (sinira gamit cryo o laser), at repair (tinahi). Sa excision, ang size ay lesion kasama ang margins sa magkabilang gilid, sukat bago tanggalin. Ang repair lengths ay pinagsasama kung pareho ang uri at anatomical group. Ang simple closure sa excision ay kasama na.",
    tip: "Write the measurement formula on the chart note: lesion + margin + margin = excised diameter. It stops most size errors.",
    mentor:
      "Draw each of the four procedure types as a simple sketch and label the code range.",
    remember: [
      "Excised diameter = lesion + margins, measured before removal.",
      "Add repair lengths only within the same repair type and anatomical group.",
      "Simple closure of an excision is not billed separately.",
    ],
  },
  {
    title: "Fracture care, casting, and joint injections",
    desc: "Report fracture treatment in its 90-day global package, code splints and casts, and choose joint injection codes with or without ultrasound.",
    time: "45 min",
    objectives: [
      "Explain what a fracture care code includes.",
      "Choose a joint injection code by joint size and imaging guidance.",
      "Use the correct 7th character for fracture encounters.",
    ],
    concept: `<p>Codes for treating fractures describe the type of treatment: closed treatment without manipulation, closed treatment with manipulation, percutaneous fixation, or open treatment (ORIF). For example, 25600 is closed treatment of a distal radius fracture without manipulation and 25605 is with manipulation. Fracture care codes carry a <b>90-day global period</b>. They include the initial casting or splinting by the same provider and the routine follow-up visits during the global period. An E/M on the day of injury is generally part of the package unless it results in a decision for surgery (modifier 57) or is a separately identifiable service (modifier 25). Later cast changes are reported with the application codes in the 29000 range.</p>
<p><b>Joint injections</b> are chosen by joint size and by whether ultrasound guidance was used. A small joint without ultrasound is 20600 and with ultrasound is 20604. An intermediate joint (such as wrist, elbow, or acromioclavicular) is 20605 and 20606. A major joint (shoulder, hip, knee, subacromial bursa) is 20610 and 20611. Ultrasound guidance is included in the code when it is used with a permanent recorded image and a report, so do not add a separate guidance code. The drug is reported separately with a HCPCS J code.</p>
<p>For ICD-10-CM, fracture codes use 7th characters: <b>A</b> initial encounter for closed fracture, <b>B</b> initial for open fracture, <b>D</b> subsequent encounter with routine healing, <b>G</b> delayed healing, <b>K</b> nonunion, <b>P</b> malunion, and <b>S</b> sequela. Aftercare for an injury uses the injury code with 7th character D, not an aftercare Z code.</p>`,
    terms: [
      [
        "25600 / 25605",
        "Closed treatment of distal radius fracture: without / with manipulation.",
      ],
      ["ORIF", "Open reduction with internal fixation."],
      [
        "20600 / 20604",
        "Small joint or bursa injection without / with ultrasound guidance.",
      ],
      [
        "20605 / 20606",
        "Intermediate joint or bursa injection without / with ultrasound guidance.",
      ],
      [
        "20610 / 20611",
        "Major joint or bursa injection without / with ultrasound guidance.",
      ],
      [
        "7th character A, B",
        "Initial encounter, closed fracture / open fracture.",
      ],
      [
        "7th character D, G, K, P",
        "Subsequent encounter: routine healing, delayed healing, nonunion, malunion.",
      ],
    ],
    steps: [
      "Identify the fracture site, whether it was open or closed, and the type of treatment performed.",
      "Select the fracture treatment code and note the 90-day global period.",
      "Check whether the initial splint or cast is included and whether an E/M qualifies for 25 or 57.",
      "For injections, determine joint size, whether imaging guidance was used, and whether an image was saved.",
      "Report the drug separately with units.",
      "Assign the ICD-10-CM fracture code with the correct 7th character.",
    ],
    lab: [
      [
        "A physician treats a distal radius fracture without manipulation and applies a splint the same day.",
        "25600 includes the initial splint, so no separate splint code. Dx S52.501A (unspecified fracture of lower end of right radius, initial encounter for closed fracture). Verify the exact fracture type and side.",
      ],
      [
        "The patient returns in week 2 for a routine check inside the global period.",
        "No separate E/M. The follow-up is part of the 90-day global package. Dx uses the 7th character D.",
      ],
      [
        "Right knee injection of 40 mg triamcinolone for osteoarthritis, no ultrasound.",
        "20610-RT for the major joint injection, plus J3301 × 4 units (10 mg per unit). Dx M17.11 (unilateral primary osteoarthritis, right knee).",
      ],
      [
        "The same injection is done with ultrasound guidance and a recorded image is saved.",
        "20611-RT. Ultrasound guidance is included, so do not report a separate guidance code.",
      ],
      [
        "A patient returns three weeks after fracture treatment elsewhere for a routine cast check. The fracture is healing normally.",
        "Report the fracture code with 7th character D (such as S52.501D), not an aftercare Z code.",
      ],
    ],
    case: "A clinic bills a separate E/M and a cast application on the day of a closed fracture treatment performed by the same physician.",
    model:
      "Fracture care includes the initial evaluation and first cast or splint unless the E/M leads to a decision for surgery (57) or is a separate, unrelated service (25). Remove the cast application line and review the E/M for a supported modifier. If none, remove it. Educate on the global package.",
    mistakes: [
      "Billing the initial splint with a fracture care code.",
      "Adding a separate ultrasound guidance code to 20604, 20606, or 20611.",
      "Using Z47 aftercare codes for fracture follow-up.",
      "Forgetting the drug units.",
    ],
    drills: [
      "Create a table of the 7th characters for fractures with an example of each.",
      "Code ten fictional injections and note joint size and guidance.",
      "Write the global-period rules for fracture care in your own words.",
    ],
    rubric: [
      "Fracture treatment type matches the note.",
      "Global package inclusions are respected.",
      "Joint size and guidance are documented in your reasoning.",
      "7th characters match the encounter.",
    ],
    scenario:
      "Which ICD-10-CM approach is correct for a routine follow-up of a healing closed fracture?",
    answers: [
      "An aftercare Z code",
      "The fracture code with 7th character D",
      "The fracture code with 7th character A",
    ],
    correct: 1,
    why: "Routine follow-up care of a healing injury uses the injury code with the 7th character D for subsequent encounter.",
    taglish:
      "Sa fracture care, ang code ay depende sa uri ng gamot: closed na walang manipulation, may manipulation, o operasyon. May 90-day global at kasama na ang unang cast o splint at ang routine follow-ups. Sa joint injection, tingnan ang laki ng joint at kung may ultrasound; kasama na ang ultrasound sa code. Ang gamot ay hiwalay na J code. Sa ICD, A ang initial, D ang healing follow-up, at hindi Z aftercare ang gamit.",
    tip: "Write the 7th character meaning on a sticky note: A active, D healing, S sequela. It prevents the most common fracture coding error.",
    mentor:
      "Explain the knee injection coding steps aloud: joint, guidance, drug, units, diagnosis, side.",
    remember: [
      "Fracture care has a 90-day global that includes the initial cast or splint.",
      "Ultrasound guidance is built into 20604, 20606, and 20611.",
      "Use the injury code with 7th character D for routine healing follow-up.",
    ],
  },
  {
    title: "Behavioral health coding",
    desc: "Code diagnoses and psychotherapy, choose psychotherapy add-ons, and handle the extra privacy rules for mental health and substance use records.",
    time: "45 min",
    objectives: [
      "Assign common ICD-10-CM mental and behavioral codes from provider documentation.",
      "Select psychotherapy and psychiatric evaluation codes by time.",
      "Recognize special privacy protections for psychotherapy notes and substance use treatment records.",
    ],
    concept: `<p>Mental and behavioral conditions are in ICD-10-CM Chapter 5 (F01–F99). A coder never assigns a diagnosis from a questionnaire score. The provider must document the diagnosis. Examples: F32.A (depression, unspecified), F32.0 to F32.2 (major depressive disorder, single episode, by severity), F33.- (recurrent), F41.1 (generalized anxiety disorder), F41.9 (anxiety disorder, unspecified), F43.10 (post-traumatic stress disorder, unspecified), F90.- (ADHD by type), F10.20 (alcohol dependence, uncomplicated), and F17.210 (nicotine dependence, cigarettes, uncomplicated).</p>
<p>CPT codes: 90791 is a psychiatric diagnostic evaluation without medical services and 90792 includes medical services. Psychotherapy with the patient is 90832 (16–37 minutes), 90834 (38–52 minutes), and 90837 (53 minutes or more). Add-on psychotherapy codes reported with an E/M by a provider who can bill E/M are 90833, 90836, and 90838 for the same time bands. When the add-on is reported, the E/M is leveled by MDM and the psychotherapy time is not counted toward the E/M. Crisis psychotherapy is 90839 (first 60 minutes) and 90840 (each additional 30). Interactive complexity add-on is 90785. A brief standardized emotional or behavioral assessment such as the PHQ-9 is 96127, reported per instrument. Telehealth uses the usual modifier and place of service rules, and policies change.</p>
<p><b>Privacy.</b> HIPAA gives special protection to <em>psychotherapy notes</em> kept separate from the medical record, and they generally need a specific patient authorization to disclose. Records of substance use disorder treatment from federally assisted programs are protected by 42 CFR Part 2 and have stricter consent rules than ordinary HIPAA. If you are not sure whether a record is covered, stop and ask your supervisor before you copy or send it.</p>`,
    terms: [
      [
        "90791 / 90792",
        "Psychiatric diagnostic evaluation without / with medical services.",
      ],
      [
        "90832 / 90834 / 90837",
        "Psychotherapy, 16–37 / 38–52 / 53 or more minutes.",
      ],
      [
        "90833 / 90836 / 90838",
        "Psychotherapy add-on with an E/M, by the same time bands.",
      ],
      [
        "90839 / 90840",
        "Crisis psychotherapy, first 60 minutes / each additional 30.",
      ],
      [
        "96127",
        "Brief standardized emotional or behavioral assessment, per instrument.",
      ],
      [
        "Psychotherapy notes",
        "Separate process notes with special HIPAA protection.",
      ],
      [
        "42 CFR Part 2",
        "Federal rule protecting substance use disorder treatment records.",
      ],
    ],
    steps: [
      "Confirm the provider documented the diagnosis and its specificity (episode, severity, type).",
      "Assign the F code and add any related status or screening codes the documentation supports.",
      "Identify the service: evaluation, psychotherapy, crisis, assessment instrument, or E/M with add-on.",
      "Use the documented start and stop times to choose the time band.",
      "Check the payer's rules for telehealth and for who may bill each code.",
      "Treat psychotherapy notes and substance use records as restricted until policy and consent are confirmed.",
    ],
    lab: [
      [
        "A therapist documents a 45-minute individual psychotherapy session for major depressive disorder, recurrent, moderate.",
        "90834 (38–52 minutes) with F33.1 (major depressive disorder, recurrent, moderate).",
      ],
      [
        "A psychiatrist sees an established patient for a moderate-MDM medication visit and also provides 20 minutes of psychotherapy.",
        "An E/M leveled by MDM (such as 99214) plus 90833 (add-on, 16–37 minutes). The psychotherapy time is not counted in the E/M.",
      ],
      [
        "A primary care provider administers and scores a PHQ-9 during a visit for a documented diagnosis of moderate depression.",
        "96127 for the instrument and the documented depression diagnosis. If it were a screening with no symptoms or diagnosis, a screening code such as Z13.31 would apply.",
      ],
      [
        "The note says only ‘depression.’",
        "F32.A (depression, unspecified). Do not choose a severity or episode that is not documented.",
      ],
      [
        "A client asks you to send a patient's substance use treatment records to a billing vendor.",
        "Stop. These may be protected by 42 CFR Part 2. Confirm consent and policy with your supervisor before sending anything.",
      ],
    ],
    case: "A coder assigns F33.2 (major depressive disorder, recurrent, severe) because a PHQ-9 score was 22.",
    model:
      "A questionnaire score is not a diagnosis. Return to the provider's assessment. If the provider did not document severity, code from the documented diagnosis. A compliant query may ask the provider to clarify the diagnosis and severity based on their clinical judgment.",
    mistakes: [
      "Coding a diagnosis from a screening score.",
      "Counting psychotherapy minutes toward the E/M level when an add-on is reported.",
      "Sending psychotherapy notes or Part 2 records without checking consent.",
    ],
    drills: [
      "Make a time-band chart for 90832, 90834, and 90837 and quiz yourself.",
      "Write a compliant query about depression severity.",
      "Write the three questions you would ask before sending any mental health record.",
    ],
    rubric: [
      "Diagnoses come only from the provider.",
      "Time bands match documented minutes.",
      "Add-on and E/M rules are applied.",
      "Special privacy rules trigger a stop and ask.",
    ],
    scenario:
      "A therapist documents 41 minutes of individual psychotherapy. Which code fits the time band?",
    answers: ["90832", "90834", "90837"],
    correct: 1,
    why: "90834 covers 38–52 minutes. 90832 is 16–37 minutes and 90837 is 53 minutes or more.",
    taglish:
      "Sa mental health coding, ang provider lang ang nagde-diagnose; hindi mo ito kukunin sa score ng questionnaire. Ang psychotherapy ay ayon sa oras: 90832 para sa 16–37, 90834 para sa 38–52, 90837 para sa 53 pataas. May add-on codes kapag may kasamang E/M. At mag-ingat sa privacy: ang psychotherapy notes at substance use records ay may dagdag na proteksyon, kaya magtanong muna bago magpadala.",
    tip: "Whenever a record mentions therapy notes or a substance use program, pause and ask before copying it. The extra privacy rules are stricter than ordinary HIPAA.",
    mentor:
      "Role-play a call where a client asks you to forward mental health records, and practice politely asking for the consent first.",
    remember: [
      "Diagnoses come from the provider, not from a score.",
      "90832, 90834, and 90837 are chosen by documented minutes.",
      "Psychotherapy notes and Part 2 records need extra consent checks.",
    ],
  },
  {
    title: "Pregnancy, delivery, and newborn basics",
    desc: "Use Chapter 15 sequencing, weeks-of-gestation codes, and the global obstetric package without mixing mother and baby records.",
    time: "45 min",
    objectives: [
      "Apply the Chapter 15 sequencing rule and add the weeks-of-gestation code.",
      "Distinguish routine prenatal visit, delivery, and newborn codes.",
      "Explain the global obstetric package and when to itemize.",
    ],
    concept: `<p>ICD-10-CM Chapter 15 (O00–O9A) covers pregnancy, childbirth, and the puerperium. Its codes have <b>sequencing priority</b> over codes from other chapters, so they are listed first on the pregnancy record, with other conditions added afterward. Chapter 15 codes are used only on the mother's record, never on the newborn's. Add a <b>Z3A</b> code for weeks of gestation, such as Z3A.28 for 28 weeks.</p>
<p>A routine prenatal visit for a normal first pregnancy uses Z34.00 (unspecified trimester), Z34.01, Z34.02, or Z34.03 (first, second, third trimester). The third trimester starts at 28 weeks. A pregnancy with complications uses O codes with the trimester as a character. Gestational diabetes is in O24.4-, such as O24.410 for diet-controlled and O24.414 for insulin-controlled. Encounter for full-term uncomplicated delivery is O80, and Z37.0 reports a single live birth outcome. The newborn's record uses Z38.- for a liveborn infant, such as Z38.00 for a single liveborn infant delivered vaginally in a hospital and Z38.01 for cesarean.</p>
<p>CPT bundles routine obstetric care into a <b>global package</b>: 59400 for vaginal delivery with antepartum and postpartum care, 59510 for cesarean, and 59610 for vaginal delivery after prior cesarean. These cover the usual antepartum visits (commonly about 13), the delivery, and the postpartum care. Delivery-only and delivery-plus-postpartum codes exist, such as 59409, 59410, 59514, and 59515. When a patient transfers care or the provider does not deliver, payers may require itemized billing of the part provided. Check payer rules.</p>`,
    terms: [
      [
        "Z34.0-",
        "Encounter for supervision of normal first pregnancy, by trimester.",
      ],
      ["Z3A.-", "Weeks of gestation."],
      ["O80", "Encounter for full-term uncomplicated delivery."],
      ["Z37.0", "Single live birth outcome of delivery."],
      [
        "Z38.-",
        "Liveborn infants by place of birth and type of delivery (newborn record).",
      ],
      [
        "59400 / 59510 / 59610",
        "Global obstetric packages: vaginal / cesarean / vaginal after prior cesarean.",
      ],
    ],
    steps: [
      "Confirm whether the record belongs to the mother or the newborn.",
      "For the mother, sequence the Chapter 15 code first and add Z3A for weeks.",
      "Identify the trimester from the weeks of gestation.",
      "For delivery encounters, add the outcome code and any complication codes.",
      "For professional billing, decide whether the global package applies or the care must be itemized.",
      "For the newborn, use the Z38 code and perinatal condition codes only on the newborn's record.",
    ],
    lab: [
      [
        "A routine prenatal visit at 28 weeks in a normal first pregnancy.",
        "Z34.03 (normal first pregnancy, third trimester) and Z3A.28.",
      ],
      [
        "Gestational diabetes, diet-controlled, at 30 weeks. The visit is a prenatal check.",
        "O24.410 (gestational diabetes mellitus in pregnancy, diet controlled) and Z3A.30. The O code is first.",
      ],
      [
        "Normal vaginal delivery at 39 weeks, no complications. Maternal record.",
        "O80, Z37.0, and Z3A.39. The newborn record uses Z38.00 for a single liveborn infant delivered vaginally in a hospital.",
      ],
      [
        "A physician provides every prenatal visit, delivers vaginally, and sees the patient for the postpartum visit.",
        "59400, the global package. Itemize only if payer rules or the patient's transfer require it.",
      ],
    ],
    case: "A coder puts an O24 diagnosis on the newborn's claim because the mother had gestational diabetes.",
    model:
      "Chapter 15 codes belong only on the maternal record. The newborn's record uses Z38 and, if documented, perinatal codes (P codes) for conditions affecting the baby. Move the O code to the mother's claim and verify the newborn's diagnoses.",
    mistakes: [
      "Using Chapter 15 codes on a newborn.",
      "Forgetting the Z3A weeks code.",
      "Billing prenatal visits separately inside a global package without a reason.",
    ],
    drills: [
      "Make a trimester chart with week ranges.",
      "Code six fictional prenatal and delivery encounters for the mother, then the newborn.",
      "List the situations where itemized obstetric billing is likely.",
    ],
    rubric: [
      "O codes are first on the maternal record.",
      "Z3A weeks are correct.",
      "Mother and newborn records are separate.",
      "Global package use is justified.",
    ],
    scenario: "Which code belongs only on a newborn's record?",
    answers: ["O80", "Z38.00", "Z3A.39"],
    correct: 1,
    why: "Z38 codes report liveborn infants and appear on the newborn's record. O and Z3A codes are for the mother.",
    taglish:
      "Sa pregnancy, ang O codes (Chapter 15) ang nauuna sa mother's record, tapos Z3A para sa weeks. Hindi puwedeng gamitin ang Chapter 15 sa newborn; ang baby ay may Z38 para sa liveborn. Sa professional billing, ang 59400 ay global package ng prenatal, delivery, at postpartum; i-itemize lang kung kinakailangan ng payer o kung lumipat ang pasyente.",
    tip: "Always open two checklists when coding a delivery: mother and baby. Mixing them is the classic error.",
    mentor:
      "Role-play explaining to a new coder why the baby never gets an O code.",
    remember: [
      "Chapter 15 codes are first on the mother's record and never on the newborn's.",
      "Add Z3A for weeks of gestation.",
      "59400, 59510, and 59610 are global packages. Itemize only when required.",
    ],
  },
  {
    title: "Anesthesia coding basics",
    desc: "Understand base units, time units, physical status modifiers, and provider modifiers for anesthesia claims.",
    time: "40 min",
    objectives: [
      "Explain how anesthesia payment is calculated from units.",
      "Select anesthesia codes by the surgical procedure and site.",
      "Apply physical status and provider modifiers.",
    ],
    concept: `<p>Anesthesia has its own section of CPT (00100–01999) and its own payment formula. Payment equals <b>(base units + time units + modifying units) × a conversion factor</b>. The <b>base units</b> come from the anesthesia code and reflect complexity. <b>Time units</b> are based on anesthesia time, which begins when the provider starts preparing the patient and ends when the provider is no longer in personal attendance. Medicare uses 15 minutes per time unit. <b>Modifying units</b> come from physical status and qualifying circumstances.</p>
<p>The anesthesia code is chosen by the <em>surgical procedure</em> and anatomic site the anesthesia supports, not by the anesthetic method. For example, 00740 is for upper gastrointestinal endoscopic procedures, 00811 for lower intestinal endoscopic procedures not otherwise specified, 00812 for screening colonoscopy, and 01402 for a total knee arthroplasty. On the claim, anesthesia time is reported in minutes.</p>
<p><b>Physical status modifiers</b> describe the patient: P1 normal healthy patient, P2 mild systemic disease, P3 severe systemic disease, P4 severe systemic disease that is a constant threat to life, P5 moribund, and P6 declared brain-dead organ donor. Under ASA values P3 adds 1 unit, P4 adds 2, and P5 adds 3, while P1, P2, and P6 add none. <b>Qualifying circumstances</b> codes such as 99100 (extreme age) and 99140 (emergency conditions) add units.</p>
<p><b>Provider modifiers</b> show who did the work: AA anesthesiologist personally performed, QK medical direction of two to four concurrent procedures, QY medical direction of one CRNA, QX CRNA service with medical direction, QZ CRNA without medical direction, and AD supervision of more than four. Payment shares depend on these modifiers.</p>`,
    terms: [
      ["Base units", "Fixed value for each anesthesia code."],
      [
        "Time units",
        "Anesthesia minutes converted into units (15 minutes per unit for Medicare).",
      ],
      [
        "Modifying units",
        "Added units from physical status and qualifying circumstances.",
      ],
      ["P1–P6", "ASA physical status modifiers."],
      ["AA / QK / QY / QX / QZ / AD", "Provider and supervision modifiers."],
      ["Conversion factor", "Dollar amount per anesthesia unit."],
    ],
    steps: [
      "Identify the surgical procedure and its anatomic site.",
      "Find the anesthesia code for that procedure and note its base units.",
      "Record the documented anesthesia start and stop times and compute total minutes.",
      "Assign the physical status modifier and any qualifying circumstance code.",
      "Attach the correct provider modifier for who delivered or directed the care.",
      "Link the surgical diagnosis and report time in minutes on the claim.",
    ],
    lab: [
      [
        "A procedure has 7 base units. Anesthesia time is 62 minutes. The patient is P3. Use a fictional conversion factor of $20 per unit and 15 minutes per time unit.",
        "Time units = 62 ÷ 15 = 4.1. Modifying units: P3 = 1. Total units = 7 + 4.1 + 1 = 12.1. Payment = 12.1 × $20 = $242 (fictional).",
      ],
      [
        "A CRNA provides anesthesia under an anesthesiologist who is medically directing the case.",
        "CRNA claim: QX. The directing anesthesiologist's claim uses QK if directing two to four concurrent cases, or QY if directing one CRNA.",
      ],
      [
        "Screening colonoscopy under general anesthesia.",
        "00812 (anesthesia for screening colonoscopy), with the screening diagnosis from the procedure record. Check payer rules for any added modifier when the screening becomes diagnostic.",
      ],
    ],
    case: "A coder selects anesthesia code 00740 for a knee arthroplasty because the patient was under general anesthesia.",
    model:
      "Anesthesia codes follow the surgical procedure and site, not the type of anesthetic. A knee arthroplasty uses the knee anesthesia code (such as 01402), not an upper GI code. Correct the claim and recheck the base units.",
    mistakes: [
      "Choosing the code by anesthetic method.",
      "Reporting time in units instead of minutes.",
      "Forgetting the physical status modifier.",
    ],
    drills: [
      "Practice the unit formula with five different time values.",
      "Create a modifier table for AA, QK, QY, QX, QZ.",
      "Write the start and stop time rules in your own words.",
    ],
    rubric: [
      "The anesthesia code matches the surgical site.",
      "Units are calculated correctly.",
      "Physical status and provider modifiers are present.",
      "Time is reported in minutes.",
    ],
    scenario: "Which formula describes anesthesia payment?",
    answers: [
      "(Base units + modifying units) ÷ time",
      "(Base units + time units + modifying units) × conversion factor",
      "Base units × anesthesia minutes",
    ],
    correct: 1,
    why: "Anesthesia payment is the sum of base, time, and modifying units multiplied by the conversion factor.",
    taglish:
      "Sa anesthesia, ang bayad ay (base units + time units + modifying units) × conversion factor. Ang code ay pinipili ayon sa operasyon at lugar sa katawan, hindi sa klase ng anesthetic. Ang P1 hanggang P6 ay physical status ng pasyente. Ang AA, QK, QY, QX, at QZ ay nagpapakita kung sino ang gumawa o nag-direct ng anesthesia.",
    tip: "Write the formula at the top of your worksheet. Every anesthesia claim review is just filling in those three pieces.",
    mentor:
      "Create a one-page card with the formula, the P modifiers, and the provider modifiers.",
    remember: [
      "Payment = (base + time + modifying units) × conversion factor.",
      "The anesthesia code follows the surgical procedure and site.",
      "AA, QK, QY, QX, and QZ show who provided or directed the care.",
    ],
    source:
      "AMA CPT anesthesia guidelines, ASA Relative Value Guide, and CMS anesthesia billing guidance. Unit values change; verify the current year.",
  },
  {
    title: "Read an operative report",
    desc: "Find what was actually done, the approach, and the extent in a surgical note, then choose codes and modifiers.",
    time: "50 min",
    objectives: [
      "Locate the coding facts in each section of an operative report.",
      "Distinguish what was planned from what was performed.",
      "Choose assistant, co-surgeon, and staged-procedure modifiers correctly.",
    ],
    concept: `<p>An operative report has predictable sections: preoperative diagnosis, postoperative diagnosis, procedures performed, surgeon and assistants, anesthesia, indications, a narrative description, findings, specimens, and complications. Coders read the <b>narrative</b> most carefully. The ‘procedure performed’ heading can differ from what the body shows.</p>
<p>Coding questions to answer from the note: What was actually done? By what approach (open, laparoscopic, endoscopic, or percutaneous)? What was the extent (partial or total, one structure or several)? Which side or site? Was a diagnostic procedure turned into a surgical one? CPT states that a surgical endoscopy always includes the diagnostic endoscopy. If a laparoscopic procedure is converted to an open one, report the open procedure that was completed and follow payer instructions for any additional work.</p>
<p>Diagnosis coding uses the <em>postoperative</em> diagnosis when it is more definitive than the preoperative one, and the provider must document it. Do not code a diagnosis only from a pathology report unless your policy and the guidelines for that setting allow it. Query the surgeon if the diagnoses differ.</p>
<p>Modifiers frequently used: 50 bilateral, 51 multiple procedures, 58 staged or related procedure in the postoperative period, 59 or X modifiers for distinct procedures, 62 co-surgeons, 78 unplanned return to the operating room, 80 or 82 assistant surgeon (physician), and AS for a physician assistant or nurse practitioner assisting. Some payers do not pay assistants for certain procedures.</p>`,
    terms: [
      [
        "Procedure performed",
        "The heading listing what the surgeon says was done.",
      ],
      ["Approach", "Open, laparoscopic, endoscopic, or percutaneous."],
      [
        "Surgical endoscopy",
        "Always includes a diagnostic endoscopy of the same area.",
      ],
      ["62", "Two surgeons working together as primary surgeons."],
      [
        "80 / 82 / AS",
        "Assistant surgeon: physician / physician when a resident is unavailable / non-physician assistant.",
      ],
      [
        "58 / 78",
        "Staged or related procedure / unplanned return to the operating room.",
      ],
    ],
    steps: [
      "Read the whole report. Underline each procedure step and the approach.",
      "Compare the procedure heading with the narrative and note any difference.",
      "Identify site, side, extent, and whether it was open or minimally invasive.",
      "Assign the diagnosis from the surgeon's final diagnosis, and query if it conflicts or is unclear.",
      "Assign CPT codes for every separately reportable procedure and check NCCI edits and modifiers.",
      "Note assistants, co-surgeons, bilateral work, and anything staged or unplanned.",
    ],
    lab: [
      [
        "A laparoscopic cholecystectomy with intraoperative cholangiography.",
        "47563 (laparoscopic cholecystectomy with cholangiography). Without cholangiography it would be 47562.",
      ],
      [
        "A laparoscopic cholecystectomy is converted to open for safety and the open procedure is completed.",
        "Report the open cholecystectomy that was completed (such as 47600, or 47605 if cholangiography was also done), not the laparoscopic code. Follow payer instructions for any added work.",
      ],
      [
        "Colonoscopy with snare removal of a sigmoid polyp and a biopsy of a separate ascending colon lesion.",
        "45385 for the snare polypectomy and 45380 for the biopsy with a distinct-site modifier such as 59 or XS on the second code, per payer rules. The diagnostic colonoscopy is included.",
      ],
      [
        "A physician assistant assists a surgeon in a procedure that allows an assistant.",
        "Report the surgical code with modifier AS on the assistant's claim.",
      ],
      [
        "The preoperative diagnosis is ‘breast mass’ and the postoperative diagnosis written by the surgeon is also ‘breast mass.’ Pathology later says carcinoma.",
        "Code what the surgeon documented for that encounter unless your policy and the setting rules permit using the pathology report. If a definitive diagnosis matters for the claim, send a non-leading query.",
      ],
    ],
    case: "The ‘procedure performed’ heading lists a total hysterectomy, but the narrative describes a supracervical hysterectomy with the cervix left in place.",
    model:
      "Code what the narrative shows was done, not the heading. A supracervical procedure leaves the cervix, so a total hysterectomy code would overstate the work. Query the surgeon to reconcile the heading and narrative before submitting the claim.",
    mistakes: [
      "Coding from the heading without reading the narrative.",
      "Coding a diagnostic procedure separately from a surgical endoscopy of the same area.",
      "Assuming every assistant is paid.",
    ],
    drills: [
      "Mark a sample operative report with approach, extent, site, and findings.",
      "Write a query about a heading and narrative mismatch.",
      "Create a table of surgical modifiers with a one-line test for each.",
    ],
    rubric: [
      "The narrative drives the code.",
      "Approach and extent are cited.",
      "Mismatches go to a query.",
      "Modifiers are supported by the report.",
    ],
    scenario:
      "The procedure heading and the narrative disagree about what was done. What now?",
    answers: [
      "Code the heading because it is the official list",
      "Code from the narrative and query the surgeon to reconcile the difference",
      "Choose the higher-paying option",
    ],
    correct: 1,
    why: "The description of what was actually done supports the code. A mismatch is resolved through a query.",
    taglish:
      "Basahin ang buong operative report, lalo na ang narrative. Hanapin kung ano talaga ang ginawa, anong approach (open o laparoscopic), gaano kalawak, at saang side. Kapag magkaiba ang heading at ang narrative, ang narrative ang sundan at mag-query sa surgeon. Tandaan din ang modifiers gaya ng 50, 58, 62, 78, 80, 82, at AS.",
    tip: "Highlight the verbs in the narrative: excised, repaired, resected, removed. They tell you what was truly done.",
    mentor:
      "Take any sample operative note and list the five coding facts before choosing a code.",
    remember: [
      "Code from the narrative of what was done, not from the heading alone.",
      "A surgical endoscopy includes the diagnostic endoscopy.",
      "Mismatches between heading and narrative go to a query.",
    ],
  },
]);
