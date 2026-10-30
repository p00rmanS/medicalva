// More breadth: wound care and burns, ICD-10-PCS in depth, care management and advance care planning, post-acute billing, case set 5.
addCodingLessons([
  {
    title: "Wound care, debridement, and burn coding",
    desc: "Excisional and selective debridement, depth and surface area rules, negative pressure therapy, burns, pressure ulcers, and diabetic foot ulcers.",
    time: "60 min",
    objectives: [
      "Choose between excisional debridement (11042 to 11047) and selective debridement (97597 and 97598).",
      "Measure surface area and depth to pick the primary code and the add-on units.",
      "Code pressure ulcers, diabetic foot ulcers, and burns with the right site, depth, and extent.",
    ],
    concept: `<p><strong>Two families of debridement.</strong> Excisional or surgical debridement is reported with 11042 to 11047 and is chosen by the <em>deepest tissue removed</em>: 11042 for subcutaneous tissue, 11043 for muscle or fascia, and 11044 for bone. Each has a first 20 square centimeters or less. Add-on codes 11045, 11046, and 11047 report each additional 20 square centimeters or part of it, one for each primary code. Selective debridement, such as removing nonviable tissue with scissors, forceps, or a curette without cutting into healthy tissue, is 97597 for the first 20 square centimeters and 97598 for each additional 20. Non-selective debridement (97602), such as wet-to-moist dressings or enzymes, is often not separately paid.</p>
<p><strong>Surface area and depth.</strong> Measure the wound after the debridement, length times width, in square centimeters. If several wounds are debrided at the same depth, add their areas together. Report each depth separately. The note must say what tissue was removed and how, and the word ‘debridement’ alone does not show whether it was excisional.</p>
<p><strong>Negative pressure wound therapy.</strong> 97605 and 97606 are for a pump supplied as durable medical equipment, for wounds up to 50 square centimeters and larger than 50. 97607 and 97608 are the same split for a disposable device.</p>
<p><strong>Burns.</strong> CPT 16000 is the initial treatment of a first-degree burn with only local treatment. 16020, 16025, and 16030 are dressings or debridement of partial-thickness burns that are small (under 5 percent of body surface), medium (5 to 10 percent), or large (over 10 percent). ICD-10-CM burn codes (T20 to T25 for external surfaces) give the site, the degree, and the encounter. Sequence the highest degree burn first. Add a T31 code for the percentage of total body surface burned, for example T31.0 for under 10 percent. External cause codes are added when the payer or facility policy asks for them.</p>
<p><strong>Ulcers.</strong> Pressure ulcers are L89.- by site, laterality, and stage, such as L89.153 for a stage 3 sacral pressure ulcer. The stage can be taken from a nurse's documentation, but the diagnosis itself must come from the provider. A diabetic foot ulcer needs two codes: the diabetes code with a foot ulcer (E11.621 for type 2) and a non-pressure chronic ulcer code from L97.- that gives the site and the depth, such as necrosis of muscle or bone.</p>`,
    steps: [
      "Read the operative or procedure note for tissue removed and the method.",
      "Decide excisional or selective debridement.",
      "Find the deepest tissue removed and measure the area.",
      "Add up the add-on units, one for each extra 20 square centimeters or part of it.",
      "Choose the diagnosis codes for the wound and its cause.",
      "Check payer rules for non-selective debridement and wound therapy codes.",
    ],
    lab: [
      [
        "Case 1. A provider excisionally debrides a stage 3 sacral pressure ulcer down to subcutaneous tissue. The wound measures 4 cm by 5 cm after debridement.",
        "Area is 20 square centimeters, so 11042 only. Dx: L89.153.",
      ],
      [
        "Case 2. A patient with type 2 diabetes has a right heel ulcer. The provider excisionally debrides it through muscle. The wound measures 6 cm by 6 cm afterward, and the note documents necrosis of muscle.",
        "Area is 36 square centimeters, so 11043 for the first 20 and 11046 × 1 for the remaining 16. Dx: E11.621 and L97.413 (non-pressure chronic ulcer of right heel and midfoot with necrosis of muscle).",
      ],
      [
        "Case 3. A provider removes loose nonviable tissue from a 15 square centimeter surgical wound dehiscence with scissors and forceps, with no cutting into healthy tissue.",
        "97597 (selective debridement, first 20 square centimeters). Dx: T81.31XA.",
      ],
      [
        "Case 4. A nurse applies a DME negative pressure pump to a 60 square centimeter wound.",
        "97606 (negative pressure wound therapy with DME, over 50 square centimeters).",
      ],
      [
        "Case 5. A patient has a second-degree burn of the right forearm from hot water, covering about 3 percent of body surface. The provider dresses and debrides it at the initial visit.",
        "16020 (small partial-thickness burn). Dx: T22.211A and T31.0. External cause codes follow payer or facility policy.",
      ],
    ],
    case: "A note says ‘debrided wound, 8 square centimeters’ and the coder reports 11042.",
    model:
      "‘Debrided’ does not show that the debridement was excisional or which tissue was removed. Without that detail, 11042 is not supported. Query the provider for the method and the deepest tissue removed. If it was selective, 97597 is the code.",
    mistakes: [
      "Choosing the code by wound size instead of depth.",
      "Reporting 11042 for selective debridement.",
      "Forgetting that each add-on is for each extra 20 square centimeters or part of it.",
      "Missing the second code for a diabetic foot ulcer.",
    ],
    drills: [
      "Calculate add-on units for wounds of 18, 25, 45, and 60 square centimeters.",
      "Write a query asking a provider how a wound was debrided.",
      "Build the two-code set for a diabetic heel ulcer with bone involvement.",
    ],
    rubric: [
      "Depth and method come from the note.",
      "Surface area is measured and the units are right.",
      "Diabetic ulcers carry both codes.",
      "Burn degree, site, and extent are all coded.",
    ],
    scenario:
      "An excisional debridement removes tissue down to muscle. Which element sets the primary code?",
    answers: [
      "The deepest tissue removed",
      "The patient's age at the visit",
      "The total time of the procedure",
    ],
    correct: 0,
    why: "Codes 11042 to 11044 are chosen by the deepest tissue removed, and the area sets the add-on units.",
    taglish:
      "Sa debridement, tingnan muna kung excisional o selective. Sa excisional, ang pinakamalalim na tissue na natanggal ang nagtatakda ng code: 11042 subcutaneous, 11043 muscle, 11044 bone. Ang bawat dagdag na 20 sq cm ay add-on. Ang selective ay 97597 at 97598. Sa diabetic foot ulcer, dalawang code ang kailangan: E11.621 at L97 para sa lugar at lalim. Sa burns, unahin ang pinakamataas na degree at idagdag ang T31 para sa porsyento ng katawan.",
    tip: "Write ‘method, deepest tissue, area’ on top of every wound care note. Those three facts decide almost every debridement code.",
    mentor:
      "Ask a wound care nurse to show you how they measure and record a wound.",
    remember: [
      "Excisional debridement is chosen by the deepest tissue removed.",
      "Each extra 20 square centimeters or part of it adds one add-on unit.",
      "A diabetic foot ulcer needs both the diabetes code and an L97 ulcer code.",
    ],
  },
  {
    title: "ICD-10-PCS in depth: building a seven-character code",
    desc: "Sections, the seven characters, root operations, approaches, devices, and how to build and check common inpatient procedure codes.",
    time: "60 min",
    objectives: [
      "Name the seven characters of a Medical and Surgical PCS code.",
      "Distinguish the most common root operations by their objective.",
      "Build a code from an operative note using the table.",
    ],
    concept: `<p>ICD-10-PCS is the procedure code set that hospitals use for inpatient procedures. Physicians still bill CPT for the same service. Every PCS code has exactly seven characters, and each position has a fixed meaning. You do not look a code up in an alphabetical list alone: you build it from the tables, one character at a time, then confirm it exists.</p>
<p><strong>Sections.</strong> The first character is the section. 0 is Medical and Surgical, the largest. Others include 1 Obstetrics, 2 Placement, 3 Administration, B Imaging, C Nuclear Medicine, D Radiation Therapy, and X New Technology.</p>
<p><strong>Medical and Surgical characters.</strong> 1 section, 2 body system, 3 root operation, 4 body part, 5 approach, 6 device, 7 qualifier.</p>
<p><strong>Approach (character 5).</strong> 0 is open, 3 is percutaneous, 4 is percutaneous endoscopic, 7 is via a natural or artificial opening, 8 is via a natural or artificial opening endoscopic, F is via a natural or artificial opening with percutaneous endoscopic assistance, and X is external.</p>
<p><strong>Root operations.</strong> The root operation names the objective. Excision cuts out a portion of a body part. Resection cuts out all of a body part. Extirpation takes out solid matter such as a stone or clot. Drainage takes out fluid or gas. Destruction eliminates tissue without recovering it. Detachment cuts off a limb or part. Release frees a body part from constraint without cutting out tissue. Repair restores a structure when no other root operation applies. Replacement puts in a device that takes the place of a body part. Bypass reroutes flow. Dilation widens a passage. Insertion puts in a device that does not replace a part. Removal takes a device out. Inspection is visual or manual examination of a body part.</p>
<p><strong>Qualifier X.</strong> In an excision or drainage, qualifier X means diagnostic, which is how a biopsy is coded. The body part value stays the same, and only the qualifier changes.</p>
<p><strong>Examples.</strong> A laparoscopic appendectomy removes the whole appendix, so the root operation is resection with a percutaneous endoscopic approach: 0DTJ4ZZ. The same operation done open is 0DTJ0ZZ. A laparoscopic cholecystectomy is 0FT44ZZ.</p>`,
    steps: [
      "Read the operative note for the objective, the body part, and the approach.",
      "Pick the section and body system.",
      "Choose the root operation from the objective, not from the surgeon's term.",
      "Select the body part and approach from the note.",
      "Add the device and the qualifier.",
      "Check that the full seven-character code exists in the table.",
    ],
    lab: [
      [
        "Case 1. A surgeon removes the entire appendix through three small incisions using a laparoscope.",
        "0DTJ4ZZ: Medical and Surgical, gastrointestinal system, resection, appendix, percutaneous endoscopic approach, no device, no qualifier.",
      ],
      [
        "Case 2. The same appendectomy is done through one open abdominal incision.",
        "0DTJ0ZZ: the same code with approach 0 (open).",
      ],
      [
        "Case 3. A surgeon removes the entire gallbladder with a laparoscope.",
        "0FT44ZZ: resection of gallbladder, percutaneous endoscopic approach.",
      ],
      [
        "Case 4. A cardiologist places one drug-eluting stent in the left anterior descending artery through a catheter, with no open incision.",
        "027034Z: dilation of one coronary artery with a drug-eluting intraluminal device, percutaneous approach. The stent is part of the dilation code.",
      ],
      [
        "Case 5. A physician looks into the airways with a flexible bronchoscope through the mouth, with no biopsy or treatment.",
        "0BJ08ZZ: inspection of the tracheobronchial tree, via natural or artificial opening endoscopic.",
      ],
    ],
    case: "A coder reports a root operation of excision for a laparoscopic removal of an entire gallbladder because the surgeon wrote ‘partial cholecystectomy’ in the title but the body of the note says the whole gallbladder was removed.",
    model:
      "The root operation follows what was actually done, not the title. Removing the entire body part is resection, so 0FT44ZZ fits the body of the note. Query the surgeon about the conflict between the title and the body before the code is final.",
    mistakes: [
      "Choosing the root operation from the title of the procedure.",
      "Confusing excision (a portion) with resection (the whole part).",
      "Using the wrong approach character.",
      "Not confirming that the seven characters form a valid code.",
    ],
    drills: [
      "Write the seven characters and their meanings from memory.",
      "Classify ten procedure descriptions by root operation.",
      "Build the code for an open and a laparoscopic version of the same procedure.",
    ],
    rubric: [
      "Every character position has the right meaning.",
      "The root operation matches the objective.",
      "Approach comes from the note.",
      "The final code is checked against the table.",
    ],
    scenario:
      "A surgeon removes the entire appendix by laparoscope. Which root operation fits?",
    answers: [
      "Resection, because the whole body part was removed",
      "Excision, because the surgeon cut out tissue",
      "Extirpation, because the appendix contained something",
    ],
    correct: 0,
    why: "Resection is the cutting out of all of a body part, while excision removes only a portion.",
    taglish:
      "Ang ICD-10-PCS ay laging pitong character. Section, body system, root operation, body part, approach, device, qualifier. Ang root operation ay base sa layunin ng operasyon: excision kung bahagi lang ang inalis, resection kung buong body part, extirpation kung bato o clot. Ang approach ay 0 open, 3 percutaneous, 4 percutaneous endoscopic, 8 natural opening endoscopic. Ginagamit ito ng ospital para sa inpatient, habang CPT pa rin ang gamit ng doktor.",
    tip: "Say the objective in plain words before you open the table: ‘took out all of it,’ ‘took out part of it,’ ‘took out a stone.’ The root operation follows.",
    mentor:
      "Pick three operative notes and build their PCS codes with a partner, comparing the root operation first.",
    remember: [
      "Every PCS code has seven characters, and each position has a fixed meaning.",
      "Resection removes all of a body part, and excision removes a portion.",
      "Approach character 4 is percutaneous endoscopic and 0 is open.",
    ],
  },
  {
    title: "Advance care planning, G2211, and care management codes",
    desc: "99497 and 99498, the G2211 add-on, chronic care management, principal care management, and transitional care management.",
    time: "55 min",
    objectives: [
      "Report advance care planning by time, with the Medicare wellness modifier.",
      "Choose among chronic care, principal care, and transitional care management.",
      "Explain what G2211 adds to an office visit and when it applies.",
    ],
    concept: `<p><strong>Advance care planning (ACP).</strong> 99497 reports the first 30 minutes of a face-to-face discussion of advance directives, such as a living will or a health care proxy, and add-on 99498 reports each additional 30 minutes. Under the CPT time rule, 99497 is reported once at least 16 minutes are spent, and 99498 is added once at least 46 minutes total are reached. The discussion is voluntary and the note records who took part and what was discussed. When Medicare ACP is reported with an Annual Wellness Visit on the same day, modifier 33 can waive the patient's cost sharing.</p>
<p><strong>G2211.</strong> This Medicare add-on code reports the added complexity of an office visit when the provider is the continuing focal point for all of a patient's care or has an ongoing relationship for a single serious or complex condition. It is added to an office or outpatient E/M visit. It is not for a one-time visit with a provider who has no ongoing relationship, and it has rules about same-day services that change by year.</p>
<p><strong>Chronic care management (CCM).</strong> For patients with two or more chronic conditions expected to last at least 12 months or until death that put them at significant risk, with a documented consent and a comprehensive care plan. 99490 reports the first 20 minutes of clinical staff time in a calendar month, and 99439 reports each additional 20 minutes. 99487 reports the first 60 minutes of complex CCM and 99489 each additional 30 minutes. 99491 is for 30 minutes of the billing physician's own time.</p>
<p><strong>Principal care management (PCM).</strong> The same idea for one serious condition: 99424 and 99425 for physician time, 99426 and 99427 for clinical staff time.</p>
<p><strong>Transitional care management (TCM).</strong> Care in the 30 days after discharge from a hospital or similar stay. It needs contact with the patient within two business days of discharge, and a face-to-face visit within 7 days for 99496 (high decision making) or within 14 days for 99495 (at least moderate decision making). It is reported once for the 30-day period.</p>`,
    steps: [
      "Confirm the service type: ACP, care management, or transitional care.",
      "Check the eligibility rules, consent, and care plan.",
      "Total the time using the correct staff type.",
      "Select the base code and the add-on codes.",
      "Check same-day services and modifier rules with the payer.",
      "Confirm that the note supports each required element.",
    ],
    lab: [
      [
        "Case 1. A physician spends 35 minutes with a patient and a daughter discussing advance directives. The patient asked for the discussion. No other service is billed that day.",
        "99497. The 35 minutes reach the 16-minute threshold for the first block and do not reach 46 minutes for 99498.",
      ],
      [
        "Case 2. A Medicare patient has an Annual Wellness Visit (G0439) and, in the same visit, a voluntary 20-minute advance care planning discussion.",
        "G0439 for the wellness visit and 99497-33 for the discussion, so cost sharing is waived for the ACP when billed with the wellness visit.",
      ],
      [
        "Case 3. A nurse spends 45 minutes in one month on care coordination for a patient with three chronic conditions. Consent and a comprehensive care plan are on file.",
        "99490 for the first 20 minutes and 99439 × 1 for the second 20 minutes. The last 5 minutes do not reach a third block.",
      ],
      [
        "Case 4. A patient is discharged on a Monday. The practice calls on Tuesday. A face-to-face visit with high decision making happens on day 6.",
        "99496, because contact was within two business days and the visit was within 7 days with high decision making.",
      ],
      [
        "Case 5. A primary care physician who manages all of a Medicare patient's care sees the patient for diabetes follow-up at a moderate-complexity office visit.",
        "99214 with G2211 for the continuing relationship, as long as the payer's same-day rules allow it.",
      ],
    ],
    case: "A practice reports 99495 for a patient first seen 12 days after discharge, with high decision making, and no call within two business days.",
    model:
      "Transitional care needs a contact within two business days of discharge, which is missing. The visit also happened after 7 days, so 99496 does not apply. If the contact was truly missed and no exception applies, bill the visit as a regular E/M instead of TCM.",
    mistakes: [
      "Billing care management without consent or a care plan.",
      "Counting physician time and staff time in the same code.",
      "Billing TCM with no two-business-day contact.",
      "Adding G2211 to a one-time visit with no continuing relationship.",
    ],
    drills: [
      "Calculate CCM codes for 20, 40, 60, and 85 minutes of staff time.",
      "List the required documentation for TCM.",
      "Explain G2211 in one sentence for a new coworker.",
    ],
    rubric: [
      "Eligibility, consent, and plan are confirmed.",
      "Time thresholds are applied correctly.",
      "TCM timing rules are met.",
      "Modifiers and add-ons follow payer rules.",
    ],
    scenario:
      "A voluntary advance care planning discussion lasts 35 minutes. Which code is reported?",
    answers: [
      "99497 once, with no add-on",
      "99497 and 99498 together",
      "99498 alone as the first code",
    ],
    correct: 0,
    why: "99497 covers the first block, and 99498 needs a total of at least 46 minutes.",
    taglish:
      "Ang advance care planning ay 99497 para sa unang 30 minuto, at 99498 para sa bawat dagdag na 30 minuto. Sa Medicare, modifier 33 kapag kasabay ng Annual Wellness Visit. Ang CCM ay para sa dalawa o higit pang chronic conditions na may consent at care plan: 99490 para sa unang 20 minuto at 99439 sa bawat dagdag. Ang TCM ay para sa 30 araw pagkatapos ng discharge, at kailangan ng contact sa loob ng dalawang business days. Ang G2211 ay para sa tuloy-tuloy na relasyon ng doktor at pasyente.",
    tip: "Set up a monthly log for care management time with date, staff name, and activity. Time that is not logged cannot be billed.",
    mentor:
      "Ask a practice manager how they track CCM minutes and consent for each patient.",
    remember: [
      "99497 is the first 30 minutes of advance care planning, and 99498 adds each extra 30.",
      "CCM needs two chronic conditions, consent, and a care plan.",
      "TCM needs contact within two business days and a visit within 7 or 14 days.",
    ],
  },
  {
    title: "Post-acute billing: home health, skilled nursing, and hospice",
    desc: "Who qualifies, the assessments and payment models, the claim types, and the modifiers that separate hospice-related from unrelated care.",
    time: "55 min",
    objectives: [
      "Explain the eligibility rules for home health, skilled nursing, and hospice.",
      "Match each setting to its assessment tool and payment model.",
      "Use modifiers GV and GW and the hospice level-of-care codes.",
    ],
    concept: `<p>After a hospital stay, many Medicare patients move to a post-acute setting. Each one has its own rules, forms, and payment method.</p>
<p><strong>Home health.</strong> A patient must be homebound, need skilled care such as nursing or therapy, be under the care of a physician, and have a face-to-face encounter related to the reason for home health care, within 90 days before or 30 days after the start of care. Agencies perform the OASIS assessment and are paid under the Patient-Driven Groupings Model (PDGM) in 30-day payment periods. The primary diagnosis must support the need for skilled care, and some symptom codes are not accepted as primary diagnoses.</p>
<p><strong>Skilled nursing facility (SNF).</strong> Medicare Part A covers a SNF stay after a qualifying hospital stay of at least three consecutive inpatient days, and observation days do not count. Facilities complete the MDS assessment and are paid under the Patient Driven Payment Model (PDPM), which uses case-mix components for therapy, nursing, and non-therapy ancillary services.</p>
<p><strong>Hospice.</strong> A physician certifies a terminal illness with a life expectancy of six months or less if the disease runs its normal course. The patient elects the hospice benefit. Hospice pays per day at one of four levels: routine home care, continuous home care, inpatient respite care, and general inpatient care. Revenue codes show the level, such as 0651 for routine home care and 0652 for continuous home care. Modifier GV is for services from an attending physician who is not employed or paid by the hospice. Modifier GW is for services unrelated to the terminal diagnosis.</p>
<p><strong>Claim types.</strong> These providers bill institutional claims on the UB-04. Home health, SNF, and hospice each have their own type-of-bill families.</p>`,
    steps: [
      "Identify the care setting and the payer.",
      "Check eligibility rules such as homebound status or the qualifying stay.",
      "Find the assessment tool the setting uses.",
      "Confirm the payment model and any 30-day or per-day rules.",
      "Add the right modifiers and revenue codes.",
      "Check the diagnosis against the setting's coding rules.",
    ],
    lab: [
      [
        "Case 1. A patient spends three nights in the hospital under observation status and is then moved to a SNF. Does the stay qualify under the three-day rule?",
        "No. Observation days are outpatient days and do not count toward the three consecutive inpatient days that Medicare requires.",
      ],
      [
        "Case 2. A patient enrolled in hospice for metastatic lung cancer sees the primary care physician for a wrist fracture caused by a fall.",
        "Report the visit with modifier GW, because the wrist fracture is unrelated to the terminal diagnosis.",
      ],
      [
        "Case 3. A patient needs skilled nursing and physical therapy after a hip fracture, but drives to the store and church without help or effort. Does the patient qualify for home health?",
        "Probably not. The patient does not appear to be homebound, which Medicare home health requires.",
      ],
      [
        "Case 4. Which assessment tools do home health agencies and skilled nursing facilities use?",
        "Home health agencies use OASIS, and skilled nursing facilities use the MDS.",
      ],
      [
        "Case 5. A hospice patient needs 24 hours a day of nursing care for a pain crisis at home.",
        "Continuous home care, shown with revenue code 0652.",
      ],
    ],
    case: "A SNF bills Medicare for a patient who was in observation for four days before admission, and the claim is denied.",
    model:
      "Observation days do not count toward the qualifying inpatient stay. Check the hospital's admission order dates to see whether the patient was ever an inpatient for three consecutive days. If not, the SNF claim is not covered under Part A, and the SNF should have given the notice that the stay might not be covered.",
    mistakes: [
      "Counting observation days as inpatient days.",
      "Ignoring the homebound rule.",
      "Missing the GW modifier on unrelated care for a hospice patient.",
      "Reporting a symptom code as the primary diagnosis for home health.",
    ],
    drills: [
      "Make a table of the setting, assessment, payment model, and key rule.",
      "List the four hospice levels of care with their revenue codes.",
      "Write two sentences explaining GV and GW.",
    ],
    rubric: [
      "Eligibility rules are checked for the setting.",
      "Assessment and payment model are matched.",
      "Hospice modifiers are used correctly.",
      "Diagnosis rules fit the setting.",
    ],
    scenario:
      "A hospice patient sees a physician for a problem unrelated to the terminal diagnosis. Which modifier applies?",
    answers: [
      "Modifier GW for a service unrelated to the terminal condition",
      "Modifier GV for a physician paid by the hospice",
      "Modifier 25 for a separate evaluation",
    ],
    correct: 0,
    why: "GW tells Medicare that the service is unrelated to the terminal diagnosis, so it is not part of the hospice payment.",
    taglish:
      "Sa home health, kailangan homebound ang pasyente at may skilled care, at OASIS ang assessment na may PDGM na bayad kada 30 araw. Sa SNF, kailangan ng tatlong magkakasunod na inpatient days, hindi bilang ang observation, at MDS ang assessment na PDPM ang bayad. Sa hospice, terminal illness na anim na buwan o mas maikli ang tantiya. Modifier GW kung hindi kaugnay sa terminal na sakit ang serbisyo, at GV kung attending physician na hindi empleyado ng hospice.",
    tip: "Ask for the hospital admission order date, not the date the patient arrived. It settles most SNF eligibility questions.",
    mentor:
      "Ask a home health biller which assessment mistakes cause the most delayed payments.",
    remember: [
      "Home health needs a homebound patient, and SNF coverage needs three inpatient days, not observation.",
      "OASIS is for home health and the MDS is for skilled nursing.",
      "Modifier GW marks hospice care that is unrelated to the terminal diagnosis.",
    ],
  },
  {
    title:
      "Case practice set 5: wound care, transitional care, inpatient surgery, care management, and hospice",
    desc: "Five more exam-style cases that combine debridement, transitional care timing, ICD-10-PCS, chronic care management, and a hospice modifier.",
    time: "75 min",
    objectives: [
      "Choose the debridement code by depth and add the extra diagnosis for a diabetic ulcer.",
      "Apply transitional care timing and care management time rules.",
      "Pair an inpatient diagnosis with the matching ICD-10-PCS code.",
    ],
    concept: `<p>Work these as you did the earlier sets. Write the diagnoses, the procedures with units and modifiers, and a reason before you open the answer. Allow about six minutes each. The cases are fictional, and exact codes and modifier rules should be verified in the current books and with each payer.</p>`,
    steps: [
      "Read the whole case and list the diagnoses and services.",
      "Check timing, time thresholds, and depth rules.",
      "Add the add-on units, modifiers, and secondary diagnoses.",
      "Match inpatient diagnoses to the correct procedure code set.",
      "Write your answer and compare.",
    ],
    lab: [
      [
        "Case 21. A provider excisionally debrides a left heel ulcer in a patient with type 2 diabetes, down to bone. The wound measures 3 cm by 4 cm afterward. The note documents necrosis of bone.",
        "Area is 12 square centimeters, so 11044 only. Dx: E11.621 and L97.424 (non-pressure chronic ulcer of left heel and midfoot with necrosis of bone).",
      ],
      [
        "Case 22. A patient with heart failure is discharged home. The practice contacts the patient the next business day. A face-to-face visit with moderate decision making happens on day 10.",
        "99495 (contact within two business days, visit within 14 days, at least moderate decision making). Dx: I50.9.",
      ],
      [
        "Case 23. A hospital admits a patient for acute appendicitis with localized peritonitis and no perforation or gangrene. The surgeon performs an open appendectomy.",
        "Dx: K35.30 (acute appendicitis with localized peritonitis, without perforation or gangrene). Inpatient PCS code: 0DTJ0ZZ (resection of appendix, open approach). The surgeon's professional claim uses CPT.",
      ],
      [
        "Case 24. A nurse spends 25 minutes in a month coordinating care for a patient with hypertension and type 2 diabetes. Consent and a care plan are on file.",
        "99490 (first 20 minutes). The extra 5 minutes do not reach a second block of 20. Dx: I10 and E11.9.",
      ],
      [
        "Case 25. A patient enrolled in hospice for metastatic lung cancer sees the primary care physician for a urinary tract infection that is unrelated to the cancer. The visit has moderate decision making.",
        "99214 with modifier GW, because the infection is unrelated to the terminal diagnosis. Dx: N39.0.",
      ],
    ],
    case: "You code Case 22 as 99496 because the patient was contacted quickly, and the payer pays less than expected after reviewing the dates.",
    model:
      "99496 requires a visit within 7 days and high decision making. The visit was on day 10 and decision making was moderate, so 99495 is the supported code. Correct the claim to 99495 and keep the dates in the note.",
    mistakes: [
      "Using 99496 when the visit is after day 7.",
      "Using a procedure code for the hospital and the surgeon alike.",
      "Forgetting the second diagnosis for a diabetic ulcer.",
      "Leaving off GW for unrelated hospice care.",
    ],
    drills: [
      "Code all five cases without notes, then check.",
      "Write the reasoning sentence for each case.",
      "Redo your misses after 24 hours.",
    ],
    rubric: [
      "Timing and time thresholds are applied correctly.",
      "Depth and units are right.",
      "The code set matches the setting.",
      "Misses are logged by topic.",
    ],
    scenario:
      "A visit happens 10 days after discharge with moderate decision making and a timely contact. Which TCM code fits?",
    answers: [
      "99495, for a visit within 14 days",
      "99496, for a visit within 7 days",
      "99497, for advance care planning",
    ],
    correct: 0,
    why: "99495 covers a visit within 14 days with at least moderate decision making, and 99496 requires a visit within 7 days with high decision making.",
    taglish:
      "Sa case practice set 5, isulat muna ang diagnoses at codes bago tingnan ang sagot. Sa TCM, 99495 kung ang visit ay sa loob ng 14 araw at moderate ang MDM, at 99496 kung sa loob ng 7 araw at high ang MDM. Sa excisional debridement, ang lalim ang nagtatakda ng code, kaya 11044 kung buto. Sa inpatient surgery, ICD-10-PCS ang code ng ospital, at CPT pa rin ang sa doktor. Sa hospice, modifier GW kung hindi kaugnay sa terminal na sakit.",
    tip: "Write the discharge date, contact date, and visit date in a row before you pick a TCM code. The dates decide the code.",
    mentor:
      "Redo your two weakest cases from sets 1 to 5 and explain them aloud.",
    remember: [
      "TCM is 99496 for a visit within 7 days with high decision making and 99495 within 14 days.",
      "The hospital reports ICD-10-PCS and the surgeon reports CPT for the same operation.",
      "Unrelated care for a hospice patient carries modifier GW.",
    ],
  },
]);
