// Specialty depth and career skills: infusion and chemotherapy, cardiac catheterization and PCI, Mohs and skin repair, eye care, dialysis, credentials, client communication, mock exam part 1.
addCodingLessons([
  {
    title: "Infusion, injection, and chemotherapy administration coding",
    desc: "The hierarchy of infusion, push, and injection codes, timing rules for additional hours, chemotherapy codes, drug units, and diagnosis sequencing.",
    time: "60 min",
    objectives: [
      "Apply the hierarchy that chooses the initial administration code.",
      "Count infusion time and report additional hours correctly.",
      "Report drug J codes by units and sequence the chemotherapy encounter diagnosis.",
    ],
    concept: `<p>Infusion coding reports <em>how</em> a drug was given. The drug itself is reported separately with a HCPCS J code. Codes are chosen by a hierarchy, and one initial code is reported for each encounter.</p>
<p><strong>The hierarchy.</strong> Chemotherapy and other highly complex drug or biologic administration comes first, then therapeutic, prophylactic, or diagnostic infusions, then pushes, then injections. Hydration is lowest. The initial code is the one highest in the hierarchy that was provided, and other services of the same type are reported with the sequential or additional codes.</p>
<p><strong>Chemotherapy administration.</strong> 96401 is a subcutaneous or intramuscular non-hormonal antineoplastic injection and 96402 is a hormonal one. 96409 is an IV push of a single or initial drug, with add-on 96411 for each additional sequential push of a new drug. 96413 is an IV infusion up to 1 hour for a single or initial drug, with add-on 96415 for each additional hour and 96417 for each additional sequential infusion of a different drug up to 1 hour. Monoclonal antibodies and other biologic response modifiers use these same codes.</p>
<p><strong>Non-chemotherapy administration.</strong> 96360 is hydration, initial 31 minutes to 1 hour, with add-on 96361 for each additional hour. 96365 is a therapeutic infusion up to 1 hour, with add-on 96366 for each additional hour, 96367 for an additional sequential infusion of a new drug, and 96368 for a concurrent infusion. 96374 is a therapeutic IV push, single or initial substance, with add-on 96375 for each additional sequential push of a new substance. 96372 is a therapeutic subcutaneous or intramuscular injection.</p>
<p><strong>Time rules.</strong> Start the clock when the infusion begins and stop it when it ends. An initial infusion code needs more than 15 minutes. An additional hour needs more than 30 minutes beyond the first hour, so a 90-minute infusion is the initial code only, and a 120-minute infusion is the initial code plus one additional hour. Pre-packaged fluids that carry a drug are not billed as hydration.</p>
<p><strong>Drugs and diagnoses.</strong> Examples: J9045 carboplatin 50 mg, J9035 bevacizumab 10 mg, J9271 pembrolizumab 1 mg, J9355 trastuzumab 10 mg, J2405 ondansetron 1 mg, J7030 normal saline 1,000 cc. Report units from the dose given. Medicare also expects JW for discarded drug and JZ when none was discarded from a single-dose container. When the encounter is for chemotherapy, sequence Z51.11 first (Z51.12 for immunotherapy), then the cancer code.</p>`,
    steps: [
      "Read the administration record for start and stop times for each drug.",
      "List each drug and how it was given.",
      "Choose the initial code by the hierarchy.",
      "Add sequential, additional-hour, and concurrent codes for the rest.",
      "Report each drug with its J code and units, plus JW or JZ as required.",
      "Sequence the diagnoses for the reason for the encounter.",
    ],
    lab: [
      [
        "Case 1. A patient receives a 90-minute IV infusion of docetaxel for breast cancer.",
        "96413 only. The extra 30 minutes do not exceed 30 minutes, so 96415 is not reported. Dx: Z51.11 first, then the breast cancer code.",
      ],
      [
        "Case 2. A patient receives a 2-hour chemotherapy infusion preceded by an IV push of ondansetron.",
        "96413 and 96415 × 1 for the infusion, and 96375 for the sequential IV push of a different substance. The chemotherapy infusion is the initial code, so the push is an add-on. Drug: J2405 for the ondansetron.",
      ],
      [
        "Case 3. A patient with dehydration receives a 1,000 mL saline bag over 1 hour.",
        "96360 for the hydration and J7030 for the saline. Dx: E86.0.",
      ],
      [
        "Case 4. A patient receives a 30-minute IV infusion of trastuzumab for HER2-positive breast cancer.",
        "96413, because monoclonal antibodies use the chemotherapy administration codes. Report J9355 by the 10 mg units given.",
      ],
      [
        "Case 5. A patient with iron deficiency anemia receives a 45-minute intravenous iron infusion.",
        "96365 for the therapeutic infusion up to 1 hour, with J1439 for the drug by milligrams. Dx: D50.9.",
      ],
    ],
    case: "A clinic reports 96413, 96415, and 96365 for a patient who received one 2-hour chemotherapy infusion and nothing else.",
    model:
      "96365 is a therapeutic infusion code and the visit has no other drug, so it should not be added. Report 96413 and one unit of 96415, and keep the start and stop times in the note.",
    mistakes: [
      "Adding a second initial code for the same encounter.",
      "Reporting an additional hour at 90 minutes.",
      "Billing hydration for fluid that carries a drug.",
      "Forgetting the J code or its units.",
    ],
    drills: [
      "Calculate the codes for infusions of 20, 70, 95, and 150 minutes.",
      "Write the hierarchy from chemotherapy to injection.",
      "Convert three drug doses into J code units.",
    ],
    rubric: [
      "The initial code follows the hierarchy.",
      "Time rules are applied correctly.",
      "Drug codes and units are supported.",
      "Chemotherapy diagnoses are sequenced.",
    ],
    scenario:
      "A chemotherapy infusion lasts 90 minutes. Which administration code or codes are reported?",
    answers: [
      "96413 only, with no additional hour",
      "96413 plus 96415 for one additional hour",
      "96365 plus 96366 for one additional hour",
    ],
    correct: 0,
    why: "An additional hour needs more than 30 minutes beyond the first hour, and 90 minutes does not exceed it.",
    taglish:
      "Sa infusion coding, may hierarchy: chemotherapy muna, tapos therapeutic infusion, push, injection, at hydration ang pinakababa. Isang initial code lang sa bawat encounter. Ang dagdag na oras ay kailangan ng higit sa 30 minuto pagkatapos ng unang oras, kaya ang 90 minuto ay 96413 lang, at ang 120 minuto ay 96413 at 96415. Ang gamot ay hiwalay na J code ayon sa units, at Z51.11 ang unang diagnosis sa chemo encounter.",
    tip: "Copy the start and stop time of each drug into your coding worksheet. Most infusion errors come from rounding time in your head.",
    mentor:
      "Ask an oncology biller to show you one infusion record and the claim built from it.",
    remember: [
      "One initial code per encounter, chosen by the hierarchy from chemotherapy down to hydration.",
      "An additional infusion hour needs more than 30 minutes past the first hour.",
      "Chemotherapy encounters list Z51.11 first, then the cancer code, and each drug has a J code with units.",
    ],
  },
  {
    title: "Cardiac catheterization and coronary intervention coding",
    desc: "Right and left heart catheterization families, coronary angiography, stents and angioplasty by vessel, vessel modifiers, and acute MI intervention.",
    time: "55 min",
    objectives: [
      "Choose the diagnostic catheterization code by what was done.",
      "Report PCI by vessel with base and add-on codes and the LC, LD, RC modifiers.",
      "Decide when diagnostic angiography can be reported with a same-day stent.",
    ],
    concept: `<p><strong>Diagnostic catheterization.</strong> 93451 is a right heart catheterization. 93452 is a left heart catheterization with left ventriculography. 93453 is a combined right and left heart catheterization. Coronary angiography is built in: 93454 is coronary angiography alone, 93455 adds bypass graft angiography, 93456 adds a right heart catheterization, and 93457 adds both. 93458 is left heart catheterization with coronary angiography, 93459 adds bypass grafts, 93460 is right and left heart catheterization with coronary angiography, and 93461 adds bypass grafts. The imaging supervision and interpretation are part of each code.</p>
<p><strong>Percutaneous coronary intervention (PCI).</strong> 92920 is balloon angioplasty of one major coronary artery or branch, with add-on 92921 for each additional branch. 92928 is stent placement in one major coronary artery or branch, with add-on 92929 for each additional branch. 92924 and 92933 add atherectomy. 92937 is revascularization of a bypass graft. 92941 is intervention for an acute myocardial infarction in one vessel. 92943 is for a chronic total occlusion, with add-on 92944.</p>
<p><strong>Vessel modifiers.</strong> Report the vessel treated with LC (left circumflex), LD (left anterior descending), RC (right coronary artery), LM (left main), or RI (ramus intermedius). Add-on codes carry the modifier of the vessel they treat.</p>
<p><strong>Diagnostic angiography with PCI.</strong> The angiography is included in PCI when a prior diagnostic study is available. It can be reported separately, often with modifier 59 or an X modifier, when no prior study exists and the decision to intervene is made during the same session.</p>
<p><strong>Diagnoses.</strong> I25.10 is atherosclerotic heart disease of a native coronary artery without angina, I20.9 is angina pectoris, unspecified, I21.11 is a ST elevation myocardial infarction involving the right coronary artery, and I27.20 is pulmonary hypertension, unspecified.</p>`,
    steps: [
      "Read the procedure note for each chamber, vessel, and graft studied.",
      "Choose the one diagnostic code that matches the full set of studies.",
      "List each vessel treated and the type of intervention.",
      "Choose the base code for the first vessel and add-ons for others.",
      "Add the vessel modifier to each line.",
      "Check whether the diagnostic study can be reported separately.",
    ],
    lab: [
      [
        "Case 1. A cardiologist performs a left heart catheterization with coronary angiography and left ventriculography for angina. No intervention is done.",
        "93458. Dx: I20.9.",
      ],
      [
        "Case 2. The same procedure turns into a stent in the left anterior descending artery. No prior diagnostic study exists, and the decision to stent was made during the procedure.",
        "93458 with modifier 59 or XU as the payer requires, and 92928-LD. Dx: I25.10.",
      ],
      [
        "Case 3. A cardiologist places one stent in the left anterior descending artery and a second stent in the right coronary artery, with a prior diagnostic study on file.",
        "92928-LD for the first vessel and 92929-RC for the additional major artery. No diagnostic code is added.",
      ],
      [
        "Case 4. A patient with an acute ST elevation myocardial infarction involving the right coronary artery gets a stent in that artery.",
        "92941-RC. Dx: I21.11.",
      ],
      [
        "Case 5. A cardiologist performs a right heart catheterization alone to evaluate pulmonary hypertension.",
        "93451. Dx: I27.20.",
      ],
    ],
    case: "A claim lists 93458 and 92928-LD for a stent after a diagnostic study done two days earlier at the same hospital.",
    model:
      "When a prior diagnostic study is available, the angiography is included in the PCI and is not reported again. Remove 93458 and keep 92928-LD, and keep the date of the earlier study in the note.",
    mistakes: [
      "Reporting angiography separately when a prior study exists.",
      "Using a base code for each additional vessel.",
      "Leaving off the vessel modifier.",
      "Reporting a lower-numbered diagnostic code than what was done.",
    ],
    drills: [
      "Make a table of the 93451 to 93461 codes and what each includes.",
      "Code four PCI cases with one, two, and three vessels.",
      "List the vessel modifiers and the artery each one means.",
    ],
    rubric: [
      "The diagnostic code matches the studies done.",
      "PCI uses base and add-on codes by vessel.",
      "Vessel modifiers are on each line.",
      "Same-day diagnostic reporting follows the rule.",
    ],
    scenario:
      "A cardiologist places two stents in different major coronary arteries. How are they reported?",
    answers: [
      "92928 for the first artery and 92929 for the second",
      "92928 twice, once for each of the two arteries",
      "92929 twice, one for each artery stented",
    ],
    correct: 0,
    why: "The first vessel uses the base code and each additional major artery or branch uses the add-on code.",
    taglish:
      "Sa cardiac cath, piliin ang isang diagnostic code ayon sa lahat ng ginawa: 93458 para sa left heart cath na may coronary angiography. Sa stent, 92928 ang una at 92929 sa bawat dagdag na ugat, at lagyan ng modifier LC, LD, o RC ayon sa ugat. Kung may nauna nang diagnostic study, kasama na ang angiography sa PCI. Kung wala pa at napagpasyahan sa parehong session, pwedeng hiwalay na may 59 o X modifier.",
    tip: "Draw the heart on a scrap of paper and mark each vessel the note names. The picture gives you the modifiers and the add-ons in seconds.",
    mentor:
      "Ask a cardiology coder to walk you through one cath report and the claim lines it produced.",
    remember: [
      "One combined diagnostic code covers all the chambers and vessels studied.",
      "PCI uses a base code for the first vessel and add-on codes for others, with LC, LD, or RC.",
      "Diagnostic angiography is separate only when no prior study exists and the decision to intervene was made that day.",
    ],
  },
  {
    title: "Dermatology in depth: Mohs surgery, flaps, grafts, and destruction",
    desc: "Mohs stages and blocks, complex repair, adjacent tissue transfer, skin grafts, and destruction of premalignant and benign lesions.",
    time: "55 min",
    objectives: [
      "Report Mohs surgery by site, stages, and tissue blocks.",
      "Choose among complex repair, a flap, and a graft by the work done.",
      "Report destruction of actinic keratoses and warts by the number of lesions.",
    ],
    concept: `<p><strong>Mohs surgery.</strong> The surgeon removes skin cancer in stages and examines the tissue under the microscope, acting as both surgeon and pathologist. 17311 is the first stage on the head, neck, hands, feet, or genitalia, up to 5 tissue blocks, with add-on 17312 for each additional stage. 17313 is the first stage on the trunk, arms, or legs, with add-on 17314 for each additional stage. Add-on 17315 reports each additional block after the first 5 in any stage. The surgeon does not report a separate pathology code for the Mohs slides. Repair of the defect is reported separately.</p>
<p><strong>Repairs.</strong> Complex repair is reported with 13100 to 13160, chosen by site and length. Examples: 13101 for trunk repairs of 2.6 to 7.5 cm and 13151 for eyelids, nose, ears, or lips of 1.1 to 2.5 cm.</p>
<p><strong>Adjacent tissue transfer (flaps).</strong> 14000 and 14001 are for the trunk. 14020 and 14021 are for the scalp, arms, and legs. 14040 and 14041 are for the forehead, cheeks, chin, mouth, neck, axillae, genitalia, hands, and feet. 14060 and 14061 are for the eyelids, nose, ears, and lips. Within a pair, the first code is for a defect of 10 square centimeters or less and the second is for 10.1 to 30. The size includes the primary defect and the secondary defect. A flap includes the closure, so a separate repair is not reported for the same defect.</p>
<p><strong>Grafts.</strong> Full-thickness skin grafts are 15200 to 15261, such as 15260 for the nose, ears, eyelids, or lips up to 20 square centimeters. Split-thickness grafts include 15100 for the first 100 square centimeters on the trunk, arms, or legs, with add-on 15101 for each additional 100.</p>
<p><strong>Destruction.</strong> 17000 is the first premalignant lesion, such as an actinic keratosis. 17003 reports each of lesions 2 through 14, and 17004 is for 15 or more lesions. 17110 reports destruction of benign lesions, such as warts, up to 14, and 17111 is for 15 or more.</p>
<p><strong>Diagnoses.</strong> C44.311 is basal cell carcinoma of the skin of the nose, C44.519 is basal cell carcinoma of skin of other part of trunk, and L57.0 is actinic keratosis.</p>`,
    steps: [
      "Read the operative note for site, stages, and blocks.",
      "Choose the Mohs code by site and add stage and block add-ons.",
      "Decide whether the defect was closed by primary, complex, flap, or graft.",
      "Measure the defect or graft area from the note.",
      "Count lesions for destruction codes.",
      "Confirm that the diagnosis is supported by pathology.",
    ],
    lab: [
      [
        "Case 1. A surgeon performs Mohs surgery for basal cell carcinoma of the nose in two stages. Stage 1 has 4 blocks and stage 2 has 3 blocks. The defect is later closed with a complex repair of 2.0 cm.",
        "17311 for stage 1 and 17312 for stage 2, with 13151 for the repair. Dx: C44.311.",
      ],
      [
        "Case 2. A surgeon performs a single Mohs stage on the back with 7 tissue blocks.",
        "17313 for the first stage up to 5 blocks, plus 17315 × 2 for the two blocks beyond 5. Dx: C44.519.",
      ],
      [
        "Case 3. A dermatologist destroys 5 actinic keratoses with liquid nitrogen.",
        "17000 for the first lesion and 17003 × 4 for lesions 2 through 5. Dx: L57.0.",
      ],
      [
        "Case 4. After an excision, a rotation flap closes an 8 square centimeter defect on the cheek.",
        "14040 for the flap of 10 square centimeters or less on the cheek, plus the excision code. No separate repair code.",
      ],
      [
        "Case 5. A full-thickness skin graft of 3 square centimeters is used to close a nasal defect.",
        "15260.",
      ],
    ],
    case: "A Mohs surgeon reports 17311 and a surgical pathology code for the same slides.",
    model:
      "In Mohs surgery the surgeon acts as pathologist, and that work is part of the Mohs code. Remove the pathology code. The repair of the defect, if performed, is the separate service.",
    mistakes: [
      "Reporting pathology for the surgeon's own Mohs slides.",
      "Forgetting the block add-on beyond the first 5 blocks.",
      "Reporting a repair with a flap for the same defect.",
      "Counting all warts as a single lesion in 17000.",
    ],
    drills: [
      "Code four Mohs cases with different sites, stages, and blocks.",
      "Match each flap code to its body area.",
      "Count lesions and select codes for 1, 5, 14, and 20 actinic keratoses.",
    ],
    rubric: [
      "Mohs site, stages, and blocks are correct.",
      "Repair, flap, and graft are not stacked on one defect.",
      "Lesion counts follow the code ranges.",
      "Pathology is not billed for Mohs slides.",
    ],
    scenario:
      "A dermatologist destroys 8 actinic keratoses in one visit. Which codes apply?",
    answers: [
      "17000 once and 17003 seven times",
      "17000 eight times",
      "17110 once for all eight lesions",
    ],
    correct: 0,
    why: "17000 reports the first lesion and 17003 reports each of lesions 2 through 14, so 8 lesions are 17000 plus 7 units of 17003.",
    taglish:
      "Sa Mohs, 17311 o 17313 ang unang stage ayon sa lugar, 17312 o 17314 ang dagdag na stage, at 17315 para sa blocks na lampas sa lima. Ang surgeon ay surgeon at pathologist, kaya walang hiwalay na pathology code. Ang repair ay hiwalay. Sa flap, kasama na ang closure kaya walang dagdag na repair. Sa actinic keratosis, 17000 ang una at 17003 ang bawat ika-2 hanggang ika-14 na lesion.",
    tip: "Write the site, stage count, and block count at the top of a Mohs note before you code. Then the closure is a separate decision.",
    mentor:
      "Ask a dermatology coder which closure mistakes they find most often after Mohs surgery.",
    remember: [
      "Mohs codes are chosen by site, with add-ons for extra stages and blocks beyond 5, and no pathology code.",
      "A flap includes its closure, and its size includes the primary and secondary defects.",
      "17000 is the first premalignant lesion and 17003 is each of lesions 2 through 14.",
    ],
  },
  {
    title: "Eye care coding: visits, testing, injections, and cataract surgery",
    desc: "Eye visit codes versus E/M, routine versus medical care, diagnostic testing, intravitreal injections, cataract surgery, eyelid modifiers, and glaucoma staging.",
    time: "55 min",
    objectives: [
      "Choose between eye visit codes and E/M for a medical eye exam.",
      "Separate routine refraction from medical eye care.",
      "Code testing, intravitreal injections, and cataract surgery with the right modifiers.",
    ],
    concept: `<p><strong>Eye visits and E/M.</strong> Eye providers may report an eye visit code, 92002 and 92004 for new patients and 92012 and 92014 for established ones, or an E/M code. Report one or the other for a visit, not both. 92004 and 92014 are comprehensive and 92002 and 92012 are intermediate.</p>
<p><strong>Routine versus medical.</strong> A refraction (92015) determines the glasses prescription. Medicare and many medical plans do not cover routine refraction or eyeglasses, which vision plans often cover. A visit for a medical complaint, such as glaucoma or diabetic eye disease, is a medical service. Medicare uses modifier GY for a service that is excluded by law. The diagnosis tells the story: H52.4 (presbyopia) is a refractive diagnosis, and H40.- is medical.</p>
<p><strong>Diagnostic tests.</strong> 92133 is optic nerve imaging by OCT and 92134 is retinal OCT, both for one or both eyes. 92083 is an extended visual field exam. 92250 is fundus photography. Each test needs a medical reason and a written interpretation.</p>
<p><strong>Injections.</strong> An intravitreal injection is 67028, reported with the drug, such as J0178 for aflibercept in 1 mg units. Use RT or LT for the eye treated.</p>
<p><strong>Cataract surgery.</strong> 66984 is cataract removal with an intraocular lens, and 66982 is the complex version. Cataract surgery has a 90-day global period. 66821 is a laser capsulotomy for a cloudy lens capsule after cataract surgery. Use RT or LT, and the eyelid modifiers E1 to E4 for eyelid procedures. Modifier 54 is for the surgery only and 55 is for post-operative care only in a co-management arrangement.</p>
<p><strong>Diagnoses.</strong> Glaucoma codes end in a stage character: 0 is unspecified, 1 mild, 2 moderate, 3 severe, and 4 indeterminate. H40.1131 is primary open-angle glaucoma, bilateral, mild stage. H25.12 is an age-related nuclear cataract of the left eye. H35.3211 is exudative age-related macular degeneration of the right eye with active choroidal neovascularization. H26.491 is another secondary cataract of the right eye.</p>`,
    steps: [
      "Decide whether the visit is routine vision care or a medical service.",
      "Choose the eye visit code or the E/M code, but not both.",
      "List each diagnostic test and confirm that an interpretation is in the chart.",
      "Add the drug code and units for injections.",
      "Add the eye or eyelid modifier.",
      "Check the global period before billing another service.",
    ],
    lab: [
      [
        "Case 1. An established patient with glaucoma has a comprehensive eye exam and bilateral optic nerve OCT.",
        "92014 or the matching E/M code, but not both, and 92133. Dx: H40.1131.",
      ],
      [
        "Case 2. A surgeon performs phacoemulsification with a lens implant in the left eye for an age-related nuclear cataract.",
        "66984-LT. Dx: H25.12.",
      ],
      [
        "Case 3. A physician injects 2 mg of aflibercept into the right eye for wet macular degeneration.",
        "67028-RT and J0178 × 2 (1 mg per unit). Dx: H35.3211.",
      ],
      [
        "Case 4. A Medicare patient comes in for a routine vision exam and glasses, with no medical complaint.",
        "92015 with GY, because routine refraction is excluded by Medicare law and the patient is responsible. Dx: H52.4.",
      ],
      [
        "Case 5. A patient has a YAG laser capsulotomy of the right eye for a cloudy lens capsule two months after cataract surgery.",
        "66821-RT. Dx: H26.491.",
      ],
    ],
    case: "A clinic reports 92014 and 99214 on the same claim for one comprehensive medical eye exam.",
    model:
      "An eye visit code and an E/M code describe the same kind of service, so only one is reported. Choose the one that matches the documentation and the payer's policy and remove the other.",
    mistakes: [
      "Billing both an eye visit code and an E/M code.",
      "Billing routine refraction to a medical plan as a covered service.",
      "Leaving off RT or LT.",
      "Billing the injection without the drug units.",
    ],
    drills: [
      "Sort ten eye visit scenarios into routine and medical.",
      "Code three intravitreal injection cases with different doses.",
      "Write the glaucoma stage characters from memory.",
    ],
    rubric: [
      "One visit code is chosen, not two.",
      "Routine and medical care are separated.",
      "Tests have a medical reason and an interpretation.",
      "Eye modifiers and drug units are present.",
    ],
    scenario:
      "A Medicare patient has a routine vision exam with no medical complaint. How is the refraction handled?",
    answers: [
      "92015 with GY, and the patient is responsible",
      "92015 as a covered service with no modifier",
      "99213 billed to Medicare as a medical visit",
    ],
    correct: 0,
    why: "Routine refraction is excluded by Medicare law, so GY tells Medicare that the service is not covered.",
    taglish:
      "Sa eye care, pumili ng isa: eye visit code (92002 hanggang 92014) o E/M, hindi pareho. Ang routine refraction (92015) para sa salamin ay hindi covered ng Medicare, kaya GY at ang pasyente ang magbabayad. Sa intravitreal injection, 67028 na may RT o LT at ang drug na J0178 ayon sa units. Ang cataract surgery 66984 ay may 90-day global. Sa glaucoma, ang huling character ay ang stage: 1 mild, 2 moderate, 3 severe.",
    tip: "Ask first: did the patient come for glasses, or for a medical problem? That one question decides the payer and the code.",
    mentor:
      "Ask an eye clinic biller how they explain a non-covered refraction to a patient before the visit.",
    remember: [
      "Report an eye visit code or an E/M for a visit, never both.",
      "Routine refraction is not a medical service, and Medicare uses GY for it.",
      "Cataract surgery has a 90-day global period, and eye procedures need RT or LT.",
    ],
  },
  {
    title: "Dialysis and ESRD billing",
    desc: "Monthly capitation codes by age and visit count, home dialysis, partial months, Medicare entitlement timing, and ESRD diagnosis coding.",
    time: "50 min",
    objectives: [
      "Choose the monthly ESRD service code by age and number of visits.",
      "Report home dialysis and partial months correctly.",
      "Explain when Medicare coverage starts for dialysis patients.",
    ],
    concept: `<p><strong>Monthly capitation payment (MCP).</strong> A nephrologist who provides care to a dialysis patient for a month reports one monthly code, chosen by the patient's age and the number of face-to-face visits that month. For patients 20 and older, 90960 is four or more visits, 90961 is two or three visits, and 90962 is one visit. The same pattern exists for younger ages: 90951 to 90953 for under 2, 90954 to 90956 for ages 2 to 11, and 90957 to 90959 for ages 12 to 19.</p>
<p><strong>Home dialysis.</strong> For a full month of home dialysis, report 90966 for age 20 and older (90963 under 2, 90964 ages 2 to 11, and 90965 ages 12 to 19). For a partial month, report the per-day code for each day, such as 90970 for age 20 and older (90967, 90968, and 90969 for younger ages).</p>
<p><strong>Other physician codes.</strong> 90935 is hemodialysis with a single physician evaluation, such as for a hospitalized patient, and 90937 is hemodialysis requiring repeated evaluations.</p>
<p><strong>Facilities.</strong> Dialysis facilities are paid under a bundled ESRD payment per treatment. Revenue codes show the modality, for example 0821 for hemodialysis and 0831 for peritoneal dialysis. A separate provider that treats a dialysis patient for a problem unrelated to the dialysis can use modifier AY.</p>
<p><strong>Medicare entitlement.</strong> Medicare coverage for in-center dialysis usually starts on the first day of the fourth month of dialysis. Coverage can start earlier for patients who begin a home dialysis training program. The CMS-2728 form documents the medical evidence of ESRD. When a patient also has an employer group plan, Medicare is secondary for the first 30 months of eligibility.</p>
<p><strong>Diagnoses.</strong> N18.6 is end stage renal disease, Z99.2 is dependence on renal dialysis, and I12.0 is hypertensive chronic kidney disease with stage 5 or end stage renal disease. With diabetes, E11.22 is paired with N18.6.</p>`,
    steps: [
      "Confirm the patient's age on the date of the month's service.",
      "Count the face-to-face visits that month.",
      "Choose the MCP, home dialysis, or per-day code.",
      "Add diagnoses for ESRD, dialysis dependence, and the cause.",
      "Check Medicare entitlement and secondary payer rules.",
      "Use AY only for unrelated care by another provider.",
    ],
    lab: [
      [
        "Case 1. A nephrologist sees a 58-year-old in-center dialysis patient four times in one month.",
        "90960. Dx: N18.6, Z99.2, and I12.0 if hypertension is the cause.",
      ],
      [
        "Case 2. The same nephrologist sees a 58-year-old patient twice in another month.",
        "90961.",
      ],
      [
        "Case 3. A 45-year-old is on home dialysis for the entire month.",
        "90966.",
      ],
      [
        "Case 4. A 45-year-old begins home dialysis and receives it for 16 days of the month.",
        "90970 × 16, because a partial month of home dialysis for age 20 and older is reported per day.",
      ],
      [
        "Case 5. A patient starts in-center dialysis on January 10. When does Medicare coverage begin?",
        "Coverage generally starts on April 1, the first day of the fourth month, unless the patient is in a home dialysis training program.",
      ],
    ],
    case: "A nephrologist reports 90960 for a patient the physician saw only twice in the month.",
    model:
      "The MCP code depends on the number of visits. Two visits support 90961, not 90960. Correct the claim and keep the visit dates in the record.",
    mistakes: [
      "Choosing the code without counting visits.",
      "Using the wrong age band.",
      "Reporting a partial home month as a full month.",
      "Forgetting the dialysis dependence diagnosis.",
    ],
    drills: [
      "Make a table of the MCP codes by age band and visit count.",
      "Code four months with different visit counts.",
      "Write the Medicare start date for three dialysis start dates.",
    ],
    rubric: [
      "Age and visit counts are correct.",
      "Home and partial month rules are used.",
      "Diagnoses show ESRD and dependence.",
      "Medicare timing is explained correctly.",
    ],
    scenario:
      "A nephrologist sees a 58-year-old in-center dialysis patient twice in one month. Which code is reported?",
    answers: [
      "90961 for two or three visits",
      "90960 for four or more visits",
      "90962 for a single visit",
    ],
    correct: 0,
    why: "For patients 20 and older, two or three visits in the month support 90961.",
    taglish:
      "Sa dialysis, isang monthly code lang ang gamit ng nephrologist ayon sa edad at bilang ng face-to-face visits: para sa 20 pataas, 90960 kung apat o higit, 90961 kung dalawa o tatlo, 90962 kung isa. Sa home dialysis na buong buwan, 90966. Sa hindi buong buwan, per day na 90970. Ang Medicare ay karaniwang nagsisimula sa unang araw ng ikaapat na buwan. Ang diagnoses ay N18.6 at Z99.2.",
    tip: "Keep a visit log by patient and month. The visit count is the only thing that separates 90960, 90961, and 90962.",
    mentor:
      "Ask a nephrology biller how they track visit counts and the age cutoffs each month.",
    remember: [
      "Monthly dialysis codes depend on age and the number of face-to-face visits.",
      "Partial months of home dialysis are reported per day.",
      "Medicare coverage for in-center dialysis usually starts the first day of the fourth month.",
    ],
  },
  {
    title: "Choosing a coding credential: AAPC and AHIMA compared",
    desc: "The main credentials, who each one fits, the apprentice status, upkeep, and how to choose and plan your first certificate.",
    time: "45 min",
    objectives: [
      "Describe what the main AAPC and AHIMA credentials cover.",
      "Match a credential to a work setting and a career goal.",
      "Build a study and budget plan for your first certificate.",
    ],
    concept: `<p>A credential tells an employer that you passed a standard exam. Different credentials fit different jobs, so choose by the work you want, not by the one you heard of first. Exam formats, prices, and rules change, so check the official sites before you pay.</p>
<p><strong>AAPC credentials.</strong> The CPC (Certified Professional Coder) focuses on physician and outpatient professional services and is the most common entry credential for coders in clinics. It is a 100-question exam over four hours, with 70 correct answers needed to pass. The COC (Certified Outpatient Coder) is for hospital outpatient and facility coding. The CIC (Certified Inpatient Coder) is for inpatient hospital coding. The CRC (Certified Risk Adjustment Coder) focuses on HCC risk adjustment. The CPB (Certified Professional Biller) focuses on the billing and claims side. The CPMA (Certified Professional Medical Auditor) is for auditing and usually follows experience.</p>
<p><strong>AHIMA credentials.</strong> The CCA (Certified Coding Associate) is an entry-level credential. The CCS (Certified Coding Specialist) is aimed at hospital and inpatient coding and is held by many facility coders. The CDIP is for clinical documentation integrity. AHIMA also offers degree-based credentials in health information management.</p>
<p><strong>Apprentice status.</strong> New AAPC coders who pass the exam without two years of coding experience hold the credential with an apprentice designation (such as CPC-A) until they meet the experience requirement or complete an approved program. Some employers hire apprentices, and many prefer experience.</p>
<p><strong>Upkeep.</strong> Credentials need an annual membership and continuing education units. For the CPC, that is 36 units every two years. You must also keep a current code book each year.</p>
<p><strong>How to choose.</strong> If you want to code for clinics and remote physician-practice work, begin with the CPC. If you want hospital outpatient or inpatient work, look at the COC, CIC, or CCS. If you like billing and follow-up, look at the CPB. If you like finding patterns in charts, look at the CRC and later the CPMA. Many working coders hold two credentials after a few years.</p>
<p><strong>Plan.</strong> List the credential, the exam fee, the books, the membership, and the date you will sit the exam. Study on a schedule with practice sets and a timed mock exam. Verify every price and rule on the official AAPC or AHIMA site.</p>`,
    steps: [
      "Write down the setting you want to work in.",
      "Match the setting to a credential from the list.",
      "Check the official site for exam format, fees, and prerequisites.",
      "Add the books and membership cost to your budget.",
      "Set an exam date and a weekly study plan.",
      "Plan how you will earn experience to remove the apprentice designation.",
    ],
    lab: [
      [
        "Case 1. A learner wants to code for physician clinics from home. Which credential fits first?",
        "The CPC, because it covers professional and outpatient physician services.",
      ],
      [
        "Case 2. A learner wants to work in a hospital coding inpatient stays. Which credentials fit?",
        "The CIC from AAPC or the CCS from AHIMA.",
      ],
      [
        "Case 3. A learner likes working with HCC and risk adjustment chart reviews. Which credential fits?",
        "The CRC.",
      ],
      [
        "Case 4. A learner wants to audit coding for compliance after several years of experience. Which credential fits?",
        "The CPMA, usually after coding experience.",
      ],
      [
        "Case 5. A learner passes the CPC exam with no coding experience. What status do they hold?",
        "The apprentice designation (CPC-A) until the experience requirement is met or an approved program is completed.",
      ],
    ],
    case: "A learner pays for the first credential they find without comparing it to the job they want.",
    model:
      "Write the target job first, then match a credential to it, and check the official fees and rules. A coder who wants clinic work should choose the CPC rather than an inpatient credential, even if the other looks more advanced.",
    mistakes: [
      "Choosing a credential before choosing a job.",
      "Forgetting the yearly membership and code books.",
      "Trusting an old price or rule.",
      "Expecting an apprentice credential to be treated like an experienced one.",
    ],
    drills: [
      "Write your target job and the credential that fits it.",
      "Make a budget of the exam, books, and membership for that credential.",
      "Set an exam date and a weekly study schedule.",
    ],
    rubric: [
      "The credential fits the job.",
      "Costs are listed from official sources.",
      "Upkeep is planned.",
      "A study schedule is set.",
    ],
    scenario:
      "A learner wants to code physician clinic claims from home. Which credential is the usual first choice?",
    answers: [
      "The CPC, for professional and outpatient services",
      "The CIC, for coding inpatient hospital stays",
      "The CPMA, for auditing after coding experience",
    ],
    correct: 0,
    why: "The CPC covers professional and outpatient physician services, which matches clinic claim coding.",
    taglish:
      "Pumili ng credential ayon sa trabaho na gusto mo. Ang CPC ay para sa clinic at physician coding, ang COC at CIC at CCS ay para sa ospital, ang CRC ay para sa risk adjustment, ang CPB ay para sa billing, at ang CPMA ay para sa auditing. Kapag pumasa ka sa CPC na walang experience, apprentice status muna. May taunang membership at CEUs, at i-check lagi ang opisyal na site para sa presyo at patakaran.",
    tip: "Look at ten job posts for the work you want and count which credential appears most. Let the market choose your first exam.",
    mentor:
      "Ask a working coder which credential they would choose if they were starting again today.",
    remember: [
      "Choose the credential by the job: CPC for physician work and COC, CIC, or CCS for hospital work.",
      "A new coder without experience holds an apprentice designation.",
      "Credentials need membership and continuing education, so confirm costs on the official site.",
    ],
  },
  {
    title: "Client communication scripts for coder VAs",
    desc: "Compliant provider queries, denial follow-up messages, status updates, escalations, and polite ways to hold a boundary.",
    time: "50 min",
    objectives: [
      "Write a provider query that is compliant and not leading.",
      "Draft clear status updates and escalation messages.",
      "Hold a professional boundary without losing the client.",
    ],
    concept: `<p>Your coding is only as good as your communication. Clients are busy and read quickly, so write short messages with the key facts first and one clear request.</p>
<p><strong>A compliant provider query.</strong> Industry guidance says a query must not lead the provider toward a particular answer, must not mention the effect on payment, and must include the clinical facts that prompted it. Offer clinically reasonable options, and always include ‘other’ and ‘unable to determine.’ Example: ‘Chart shows a PHQ-9 of 18 and the note says depression. Please document the type and severity if clinically appropriate: single episode, recurrent, mild, moderate, severe, other, or unable to determine.’ Do not write ‘Please document severe depression so we can use F32.2.’</p>
<p><strong>A denial follow-up message.</strong> State the claim, the denial reason, what you checked, what you plan to do, and the date. Example: ‘Claim 12345 for DOS 3/4 was denied for CARC 97. I checked the note and the modifiers. I recommend a corrected claim with modifier 59 for the separate site. Please confirm by Friday so we stay inside the filing limit.’</p>
<p><strong>A status update.</strong> Report what was finished, what is waiting on someone, and the next step, with numbers. Example: ‘This week: 142 charts coded, 3 held for queries, accuracy audit 96 percent. Next: clear the 3 queries by Tuesday.’</p>
<p><strong>An escalation.</strong> Describe the problem, the risk, what you already tried, and the decision you need. Use facts and a deadline. Never include patient information in an unsecured channel, and use only the minimum necessary details.</p>
<p><strong>Boundaries.</strong> If a client asks for something that is outside the scope, unethical, or unsafe, such as coding a service that is not documented, say so politely and offer the compliant alternative. Example: ‘I can’t assign that code without documentation. If you can add the details to the note, I’ll code it right away.’</p>`,
    steps: [
      "State the key fact or request in the first line.",
      "Include only the details the reader needs.",
      "For queries, give clinical facts and neutral options.",
      "For denials and escalations, include what you checked and a deadline.",
      "Use secure channels and the minimum necessary patient information.",
      "Re-read the message once for tone and clarity before sending.",
    ],
    lab: [
      [
        "Case 1. Write a query for a note that says ‘anemia’ with a hemoglobin of 8.2 and a note that the patient is on iron.",
        "Example: ‘The note says anemia, with a hemoglobin of 8.2 and iron therapy. Please document the type if clinically appropriate: iron deficiency anemia, anemia of chronic disease, other, or unable to determine.’ It cites facts, offers neutral options, and does not mention payment.",
      ],
      [
        "Case 2. Rewrite this leading query: ‘Please document sepsis so the claim pays more.’",
        "Remove the payment reference and the single answer. Cite the clinical indicators and ask the provider to document the diagnosis that applies, with options including other and unable to determine.",
      ],
      [
        "Case 3. Write a one-line status update for a week in which you coded 98 charts, held 2 for queries, and passed an accuracy audit at 97 percent.",
        "‘This week I coded 98 charts, held 2 for queries, and my accuracy audit was 97 percent. Next I will clear the 2 queries by Tuesday.’",
      ],
      [
        "Case 4. A client asks you to add a procedure code that is not in the note. Write a reply.",
        "‘I can’t assign that code without documentation of the procedure. If you can add it to the note, I’ll code it right away.’",
      ],
      [
        "Case 5. A payer gives a denial with a short filing window. Write an escalation to your lead.",
        "State the claim, the denial reason, what you checked, your recommendation, the deadline, and the decision you need, with no more patient information than necessary.",
      ],
    ],
    case: "A coder writes ‘Please confirm the patient has major depression, severe, so we can bill F32.2.’",
    model:
      "The query names the answer and the code and links it to payment, which makes it leading and non-compliant. Rewrite it with the clinical indicators and neutral options, including other and unable to determine.",
    mistakes: [
      "Mentioning payment or a code in a query.",
      "Offering only one answer.",
      "Sending patient details over an unsecured channel.",
      "Writing long messages with the request buried at the end.",
    ],
    drills: [
      "Write three compliant queries for three vague diagnoses.",
      "Draft a weekly status update with numbers.",
      "Write two boundary replies for requests you cannot do.",
    ],
    rubric: [
      "Queries are neutral and include clinical facts.",
      "Messages lead with the key request.",
      "Patient details are limited and secure.",
      "Boundaries are polite and offer an alternative.",
    ],
    scenario:
      "A provider query lists clinical facts and gives several diagnosis options plus ‘other’ and ‘unable to determine.’ What kind of query is it?",
    answers: [
      "A compliant, non-leading query",
      "A leading query that suggests an answer",
      "An informal note that should be deleted",
    ],
    correct: 0,
    why: "A compliant query presents clinical facts and neutral options, including other and unable to determine.",
    taglish:
      "Ang compliant na query ay may clinical facts, may ilang choices, at may ‘other’ at ‘unable to determine.’ Hindi ito nagbabanggit ng bayad o ng code na gusto mo. Sa denial follow-up, ilagay ang claim, dahilan, ginawa mo, plano, at deadline. Sa status update, may numbers. Sa escalation, problem, risk, ginawa mo na, at ang desisyong kailangan. Kung hindi tama ang hiling ng client, sabihin nang magalang at mag-alok ng tamang paraan.",
    tip: "Put the single request in the first line and the deadline in the last line. A busy provider reads only those two.",
    mentor:
      "Ask your lead to read three of your messages and mark where the request was hard to find.",
    remember: [
      "A compliant query gives clinical facts and neutral options, with no mention of payment.",
      "Lead with the request and end with a deadline.",
      "Hold boundaries politely and offer the compliant alternative.",
    ],
  },
  {
    title: "Mock exam part 1: twenty mixed questions",
    desc: "Twenty short exam-style questions across ICD-10-CM, CPT, modifiers, E/M, and guidelines, with the reasoning for each answer.",
    time: "40 min",
    objectives: [
      "Practice answering mixed questions under time pressure.",
      "Find your weak topics by the questions you miss.",
      "Review the reasoning, not just the answer.",
    ],
    concept: `<p>Set a timer for 30 minutes and answer all twenty questions on paper before you open any answer. That is about the pace of the real exam, which gives you roughly two and a half minutes per question over four hours for 100 questions. Mark each answer sure, unsure, or guess, then check them. Keep a list of the topics you missed and return to the matching lessons.</p>
<p>These questions are original practice items, not actual exam questions. Verify details in your current code books and the guidelines.</p>`,
    steps: [
      "Set a 30-minute timer.",
      "Answer every question on paper.",
      "Mark each as sure, unsure, or guess.",
      "Open the answers and compare reasoning.",
      "List each missed topic and the lesson that covers it.",
    ],
    lab: [
      [
        "Q1. Which modifier reports a bilateral procedure?",
        "Modifier 50. Some payers prefer RT and LT on separate lines, so follow the payer.",
      ],
      [
        "Q2. For an established office visit leveled by time, what is the minimum total time for 99213?",
        "20 minutes, with 99212 at 10, 99214 at 30, and 99215 at 40.",
      ],
      [
        "Q3. What does an Excludes1 note mean?",
        "The two conditions are mutually exclusive and are not reported together, unless the guidelines allow it because the conditions are unrelated.",
      ],
      [
        "Q4. A patient has hypertension and stage 3 chronic kidney disease. How are they coded?",
        "I12.9 with N18.30 (or the documented stage 3a or 3b code). The combination code assumes the link.",
      ],
      [
        "Q5. What is the ICD-10-CM code for a non-ST elevation myocardial infarction?",
        "I21.4.",
      ],
      [
        "Q6. What does a plus sign (+) before a CPT code mean?",
        "It is an add-on code that is reported only together with its primary code.",
      ],
      [
        "Q7. What does modifier 25 report?",
        "A significant, separately identifiable E/M service by the same provider on the same day as a procedure or other service.",
      ],
      [
        "Q8. What is the place of service code for an office?",
        "11. POS 22 is an on-campus outpatient hospital and POS 23 is an emergency room in a hospital.",
      ],
      [
        "Q9. How is the length of multiple wound repairs combined?",
        "Add the lengths of repairs of the same classification (simple, intermediate, or complex) within the same anatomic grouping, and report the sum.",
      ],
      ["Q10. What does Z23 report?", "An encounter for immunization."],
      [
        "Q11. In an outpatient note, the diagnosis is ‘probable pneumonia’ with cough and fever. How is it coded?",
        "Code the cough and fever, not pneumonia. Outpatient coding does not report uncertain diagnoses such as probable, suspected, or rule out.",
      ],
      ["Q12. What is the CPT code for a routine venipuncture?", "36415."],
      [
        "Q13. A ‘code first’ note appears under a code. What does it mean?",
        "The underlying condition must be sequenced first, and the code with the note follows it.",
      ],
      [
        "Q14. A patient with type 2 diabetes has diabetic chronic kidney disease. How are the codes sequenced?",
        "E11.22 first, then N18.- for the stage, per the ‘use additional code’ note.",
      ],
      [
        "Q15. What do the 7th characters A, D, and S mean on an injury code?",
        "A is initial encounter (active treatment), D is subsequent encounter, and S is sequela.",
      ],
      [
        "Q16. What is the code for a screening mammogram diagnosis?",
        "Z12.31, encounter for screening mammogram for malignant neoplasm of breast.",
      ],
      [
        "Q17. What is the global period for a diagnostic colonoscopy, 45378?",
        "0 days, so it is a procedure with a same-day global and no post-operative days.",
      ],
      [
        "Q18. What is the global period for cataract surgery, 66984?",
        "90 days.",
      ],
      [
        "Q19. Which code type reports drugs administered in an office?",
        "HCPCS Level II J codes, such as J3301 for triamcinolone.",
      ],
      [
        "Q20. When are 99417 and G2212 used?",
        "Both report prolonged office visit time beyond the top level. 99417 is the CPT code and G2212 is the Medicare code with later time thresholds.",
      ],
    ],
    case: "You finish the twenty questions in 22 minutes and miss four, all about modifiers and add-on codes.",
    model:
      "Faster than the pace is fine, but the misses show a pattern. Review the modifier and add-on lessons, make a one-page modifier chart, and retake similar questions after 24 hours.",
    mistakes: [
      "Opening answers before finishing.",
      "Skipping the sure, unsure, guess marks.",
      "Reading only the answer, not the reasoning.",
      "Never returning to missed topics.",
    ],
    drills: [
      "Take this set under time and score it.",
      "Make a list of missed topics and matching lessons.",
      "Retake the missed questions after 24 hours.",
    ],
    rubric: [
      "All questions are answered before checking.",
      "Confidence marks are recorded.",
      "Misses are listed by topic.",
      "Missed topics are reviewed and retested.",
    ],
    scenario:
      "After a practice set, you miss four questions on the same topic. What is the best next step?",
    answers: [
      "Review that topic and retest after a day",
      "Skip the topic and take a new set",
      "Memorize the four answers only",
    ],
    correct: 0,
    why: "Repeated misses on one topic show a gap that targeted review and a later retest will close.",
    taglish:
      "Sa mock exam, sagutan muna lahat bago tingnan ang sagot, at markahan kung sure, unsure, o guess. Tapos ilista ang mga mali ayon sa topic at balikan ang lesson. Mag-retest pagkalipas ng isang araw. Hindi ito totoong exam questions kundi practice lang, kaya i-verify pa rin sa code book. Ang layunin ay makita ang mahihinang bahagi mo, hindi lang ang score.",
    tip: "Mark every answer sure, unsure, or guess. Your unsure answers that were right show topics you still need to solidify.",
    mentor:
      "Trade question sets with a study partner and explain your reasoning aloud for each miss.",
    remember: [
      "Answer everything before checking, and mark your confidence.",
      "Track misses by topic and review the matching lessons.",
      "Retest missed questions after about a day.",
    ],
  },
]);
