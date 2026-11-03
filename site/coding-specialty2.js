// More specialty and claims depth: therapy, pain injections, GI endoscopy, critical care and prolonged services, EDI, case set 6.
addCodingLessons([
  {
    title: "Therapy services: PT, OT, and speech coding",
    desc: "Evaluations, timed and untimed codes, the 8-minute rule, plan of care modifiers, assistant modifiers, and the annual threshold.",
    time: "55 min",
    objectives: [
      "Choose an evaluation code by complexity and a treatment code by service.",
      "Convert total timed minutes into units with the Medicare 8-minute rule.",
      "Apply GP, GO, GN, CQ, CO, and KX where they belong.",
    ],
    concept: `<p><strong>Evaluations.</strong> Physical therapy evaluations are 97161 (low complexity), 97162 (moderate), and 97163 (high), with 97164 for a re-evaluation. Occupational therapy uses 97165, 97166, and 97167, with 97168 for a re-evaluation. Speech-language pathology uses codes such as 92521 to 92524 for speech and voice evaluations and 92610 for a swallowing evaluation.</p>
<p><strong>Treatment codes.</strong> Many therapy codes are timed, with one unit for each 15 minutes: 97110 therapeutic exercise, 97112 neuromuscular re-education, 97116 gait training, 97140 manual therapy, 97530 therapeutic activities, and 97535 self-care and home management training. Some are untimed and reported once per session, such as 97150 for group therapy. Medicare reports unattended electrical stimulation as G0283 instead of 97014.</p>
<p><strong>The 8-minute rule (Medicare).</strong> Add up all the timed minutes for the visit. 8 to 22 minutes is 1 unit, 23 to 37 is 2 units, 38 to 52 is 3 units, 53 to 67 is 4 units, and each further 15 minutes adds a unit. Then assign the units to the services. A service with at least 15 minutes gets one unit for each full 15. Leftover units go to the service with the most minutes remaining. Many commercial payers follow the CPT approach instead, which counts each service on its own.</p>
<p><strong>Modifiers.</strong> GP shows a service under a physical therapy plan of care, GO under an occupational therapy plan, and GN under a speech-language plan. CQ shows a service furnished in whole or in part by a physical therapist assistant, and CO the same for an occupational therapy assistant. Medicare pays those services at a reduced rate. KX tells Medicare that the patient has passed the annual therapy threshold and that the services are still medically necessary. The threshold amount changes each year.</p>
<p><strong>Diagnoses.</strong> Report the treatment diagnosis, such as M54.50 for low back pain, M62.81 for generalized muscle weakness, or R26.2 for difficulty walking, along with the medical diagnosis, such as Z96.651 for presence of a right artificial knee joint after replacement. A signed plan of care must be in place.</p>`,
    steps: [
      "Confirm the discipline and that a plan of care is on file.",
      "Pick the evaluation or treatment codes from the note.",
      "Total the timed minutes and find the unit count.",
      "Assign units to each service by its minutes.",
      "Add GP, GO, or GN, and CQ or CO if an assistant treated.",
      "Add KX only when the threshold is met and necessity is documented.",
    ],
    lab: [
      [
        "Case 1. A physical therapist completes a low complexity evaluation of a new patient with low back pain.",
        "97161-GP. Dx: M54.50.",
      ],
      [
        "Case 2. A Medicare patient receives 25 minutes of therapeutic exercise (97110), 20 minutes of neuromuscular re-education (97112), and 10 minutes of manual therapy (97140) in one visit.",
        "Total timed minutes: 55, which is 4 units. 97110 has 25 minutes (1 full unit, 10 left over), 97112 has 20 minutes (1 full unit, 5 left over), and 97140 has 10 minutes (0 units, 10 left over). Units 3 and 4 go to the services with the most minutes remaining. Report 97110 × 2, 97112 × 1, and 97140 × 1, all with GP.",
      ],
      [
        "Case 3. A Medicare patient receives 12 minutes of therapeutic exercise only.",
        "97110 × 1 with GP, because 12 minutes is in the 8 to 22 range.",
      ],
      [
        "Case 4. A speech-language pathologist performs a clinical swallow evaluation for a patient with dysphagia.",
        "92610-GN. Dx: R13.10.",
      ],
      [
        "Case 5. A physical therapist assistant provides two units of therapeutic exercise under the supervision of a physical therapist for a Medicare patient.",
        "97110 × 2 with GP and CQ. Medicare pays services with CQ at a reduced rate.",
      ],
    ],
    case: "A therapy clinic reports 97110, 97112, and 97140 once each for 25, 20, and 10 minutes, and a Medicare auditor says the units are wrong.",
    model:
      "Medicare totals the timed minutes first. The 55 minutes support four units, not three. The clinic should assign two units to 97110, one to 97112, and one to 97140 and correct the claim, and it should check that the daily note shows the minutes of each service.",
    mistakes: [
      "Counting each service separately when Medicare uses total timed minutes.",
      "Leaving off GP, GO, or GN.",
      "Billing an untimed code as if it were timed.",
      "Missing CQ or CO when an assistant treats the patient.",
    ],
    drills: [
      "Calculate units for visits of 10, 25, 45, and 68 timed minutes.",
      "Allocate units for three services with mixed minutes.",
      "Write the modifier you would add for each discipline.",
    ],
    rubric: [
      "Evaluation and treatment codes match the note.",
      "Units follow the right payer rule.",
      "Discipline and assistant modifiers are used.",
      "A plan of care supports the services.",
    ],
    scenario:
      "A Medicare patient receives 30 total timed minutes of therapy. How many units are reported in total?",
    answers: [
      "2 units, because 23 to 37 minutes is 2 units",
      "1 unit, because 30 minutes is under 45",
      "3 units, because each 10 minutes is a unit",
    ],
    correct: 0,
    why: "Under the 8-minute rule, 23 to 37 total timed minutes support 2 units.",
    taglish:
      "Sa therapy, bilangin muna ang kabuuang timed minutes para sa Medicare. 8 hanggang 22 ay isang unit, 23 hanggang 37 ay dalawang unit, 38 hanggang 52 ay tatlo, at 53 hanggang 67 ay apat. Pagkatapos hatiin ang units sa mga serbisyo ayon sa minuto. Ilagay ang GP, GO, o GN ayon sa disiplina, at CQ o CO kung assistant ang gumawa. Ang KX ay kapag lampas na sa taunang threshold pero kailangan pa rin ang therapy.",
    tip: "Write the minutes of each timed service on the note in a column and total them. The total decides the units before anything else.",
    mentor:
      "Ask a therapy biller how their clinic tracks minutes and the yearly threshold for each patient.",
    remember: [
      "Medicare totals all timed minutes first: 23 to 37 is 2 units and 53 to 67 is 4 units.",
      "GP, GO, and GN show the plan of care discipline, and CQ and CO show an assistant.",
      "A signed plan of care and daily minutes support every therapy claim.",
    ],
  },
  {
    title: "Pain management and spine injection coding",
    desc: "Epidural, transforaminal, facet, and sacroiliac injections, trigger points, radiofrequency ablation, imaging guidance, and the drugs.",
    time: "55 min",
    objectives: [
      "Choose epidural, transforaminal, and facet joint codes by region and level.",
      "Know which injection codes already include imaging guidance.",
      "Report trigger point injections by the number of muscles, not injections.",
    ],
    concept: `<p><strong>Epidural steroid injections.</strong> 62320 (cervical or thoracic) and 62322 (lumbar or sacral) are without imaging guidance. 62321 (cervical or thoracic) and 62323 (lumbar or sacral) are with imaging guidance, fluoroscopy or CT. Imaging guidance is part of 62321 and 62323, so 77003 is not reported separately.</p>
<p><strong>Transforaminal injections.</strong> 64479 is a single cervical or thoracic level, with add-on 64480 for each additional level. 64483 is a single lumbar or sacral level, with add-on 64484 for each additional level. Imaging guidance is included.</p>
<p><strong>Facet joint injections and medial branch blocks.</strong> 64490 is the first cervical or thoracic level, with add-ons 64491 for the second level and 64492 for the third and any additional levels. 64493 is the first lumbar or sacral level, with 64494 for the second and 64495 for the third and any additional. Imaging guidance is included. Radiofrequency ablation of the facet nerves is 64633 (cervical or thoracic, single facet joint) with add-on 64634, and 64635 (lumbar or sacral, single facet joint) with add-on 64636.</p>
<p><strong>Other common services.</strong> Trigger point injections are 20552 for one or two muscles and 20553 for three or more, reported once per session regardless of how many injections were made. A sacroiliac joint injection with imaging is 27096.</p>
<p><strong>Drugs and diagnoses.</strong> Steroid drugs are billed with J codes by dose, such as J1030 for 40 mg of methylprednisolone acetate, J1040 for 80 mg, and J3301 for 10 mg of triamcinolone. Local anesthetic used for the procedure is not billed. Common diagnoses include M54.16 (radiculopathy, lumbar region), M47.816 (spondylosis without myelopathy or radiculopathy, lumbar region), and M79.18 (myalgia, other site, used for myofascial pain). Many payers have coverage policies that limit how many sessions a patient may have in a year and require documented pain scores and prior conservative care.</p>`,
    steps: [
      "Identify the technique: epidural, transforaminal, facet, or trigger point.",
      "Find the region (cervical or thoracic versus lumbar or sacral).",
      "Count the levels or muscles from the note.",
      "Check that imaging guidance is documented, and do not bill it separately where it is included.",
      "Add the drug code and units.",
      "Check coverage limits and laterality rules for the payer.",
    ],
    lab: [
      [
        "Case 1. A physician performs a lumbar interlaminar epidural steroid injection at L4-L5 under fluoroscopy using 80 mg of methylprednisolone acetate. Dx: radiculopathy of the lumbar region.",
        "62323 for the injection with imaging guidance included, and J1040 × 1 for the drug. Dx: M54.16. Do not add 77003.",
      ],
      [
        "Case 2. A physician performs right-sided medial branch blocks at the L3-L4 and L4-L5 facet joints under fluoroscopy.",
        "64493 for the first level and 64494 for the second, with RT on each line according to payer rules. Dx: M47.816.",
      ],
      [
        "Case 3. A physician injects trigger points in four muscles during one session for myofascial pain.",
        "20553 × 1, because the code is chosen by the number of muscles, three or more, and not by the number of injections. Dx: M79.18.",
      ],
      [
        "Case 4. A physician performs radiofrequency ablation of the right lumbar facet nerves at two levels under fluoroscopy.",
        "64635 for the first level and 64636 × 1 for the second, with RT. Dx: M47.816.",
      ],
      [
        "Case 5. A physician performs a right transforaminal epidural injection at L5 and S1 under fluoroscopy.",
        "64483 for the first level and 64484 × 1 for the second level. Dx: M54.16.",
      ],
    ],
    case: "A pain clinic reports 62323 and 77003 on the same claim and the payer denies 77003.",
    model:
      "Imaging guidance is part of 62323, so 77003 is bundled and not separately reportable. Remove 77003 and keep the fluoroscopy documentation in the note to support the use of 62323 instead of 62322.",
    mistakes: [
      "Billing imaging guidance separately where it is included.",
      "Reporting trigger points by the number of injections.",
      "Forgetting the add-on code for a second level.",
      "Billing local anesthetic.",
    ],
    drills: [
      "List which injection codes include imaging and which do not.",
      "Code three facet injection cases with one, two, and three levels.",
      "Write the J code units for a 40 mg and an 80 mg methylprednisolone dose.",
    ],
    rubric: [
      "Technique, region, and levels match the note.",
      "Imaging guidance is not billed twice.",
      "Add-on codes are used correctly.",
      "Drug units and diagnoses are supported.",
    ],
    scenario:
      "A physician injects trigger points in five muscles during one visit. Which code is reported?",
    answers: [
      "20553 once, for three or more muscles",
      "20552 five times, one for each muscle",
      "20553 five times, one for each injection",
    ],
    correct: 0,
    why: "Trigger point injections are reported once per session by the number of muscles, with 20553 for three or more.",
    taglish:
      "Sa pain management, piliin ang code ayon sa technique, region, at bilang ng levels. Ang 62323 ay lumbar epidural na kasama na ang imaging, kaya huwag nang idagdag ang 77003. Sa facet injections, 64493 ang una at 64494 ang pangalawang level. Sa trigger point injections, 20552 kung isa o dalawang muscle, 20553 kung tatlo o higit pa, isang beses lang bawat session. Huwag ibill ang local anesthetic.",
    tip: "Write ‘technique, region, levels, side, imaging’ on a sticky note for every procedure note. Those five facts decide the code.",
    mentor:
      "Ask a pain clinic biller which payer policies limit the number of injections per year.",
    remember: [
      "62323 and 64483 include imaging guidance, so do not add 77003.",
      "Facet injections use a first-level code and add-ons for further levels.",
      "Trigger points are coded by number of muscles: 20552 for one or two, 20553 for three or more.",
    ],
  },
  {
    title: "GI endoscopy coding: colonoscopy and upper endoscopy families",
    desc: "The base code, the hierarchy of techniques, one code per technique, discontinued procedures, and screening conversions.",
    time: "55 min",
    objectives: [
      "Identify the base endoscopy and the add-on technique codes in a family.",
      "Report each technique once, no matter how many lesions it treated.",
      "Handle an incomplete exam and a screening that becomes diagnostic.",
    ],
    concept: `<p>Endoscopy codes are organized in families. Each family has a diagnostic base code, and the other codes are more specific techniques that include the diagnostic exam. When more than one technique is used in the same session, you report each different technique, and the payer applies a multiple endoscopy rule that pays the most extensive code in full and reduces the others.</p>
<p><strong>Colonoscopy family.</strong> 45378 is the diagnostic colonoscopy. 45380 is biopsy. 45381 is submucosal injection. 45382 is control of bleeding. 45384 is removal of lesions by hot biopsy forceps or bipolar cautery. 45385 is removal by snare. 45388 is ablation. 45389 is stent placement. 45390 is endoscopic mucosal resection. 45398 is band ligation. The diagnostic exam is not reported when a therapeutic code from the family is reported.</p>
<p><strong>One code per technique.</strong> If a snare removes three polyps, report 45385 once. If a biopsy is taken from a different site, report 45380 as well, with a distinct-site modifier if an edit requires it.</p>
<p><strong>Upper endoscopy (EGD) family.</strong> 43235 is the diagnostic EGD. 43239 is biopsy. 43255 is control of bleeding. 43244 is band ligation of varices. 43251 is removal of lesions by snare. 43249 is balloon dilation of the esophagus.</p>
<p><strong>Incomplete exams.</strong> If the scope cannot reach the intended point and the procedure stops, use modifier 53 for a discontinued procedure in a physician claim (or the payer's rule for facility claims). Do not use a full diagnostic code for an exam that was not completed.</p>
<p><strong>Screening that becomes diagnostic.</strong> A colonoscopy that begins as a screening (Z12.11 for the screening encounter) and finds a polyp is reported with the therapeutic code. Many payers want modifier 33 on commercial claims, and Medicare wants modifier PT. The screening diagnosis is listed first, followed by the finding.</p>`,
    steps: [
      "Read the procedure note for the extent and each technique.",
      "Find the family and the code for each technique used.",
      "Report each technique once and not the base diagnostic code.",
      "Check for a distinct-site edit and the multiple endoscopy rule.",
      "Add modifier 53 if the exam was not completed.",
      "Add 33, PT, or the payer's screening convention if a screening converted.",
    ],
    lab: [
      [
        "Case 1. A colonoscopy to the cecum for rectal bleeding finds one polyp removed by snare and a second lesion at a different site that is biopsied with forceps.",
        "45385 for the snare removal and 45380 for the biopsy, with a distinct-site modifier on 45380 if an edit requires it. Dx: K62.5 for the bleeding, and the polyp finding.",
      ],
      [
        "Case 2. A diagnostic colonoscopy with no findings and no other technique.",
        "45378, the base diagnostic code, because no other technique was used.",
      ],
      [
        "Case 3. A snare removes three polyps from the colon in one session.",
        "45385 × 1, because the code is reported once per technique regardless of the number of polyps.",
      ],
      [
        "Case 4. An upper endoscopy with a biopsy of the stomach for epigastric pain.",
        "43239 for the biopsy. The diagnostic EGD code 43235 is not added. Dx: R10.13.",
      ],
      [
        "Case 5. A colonoscopy is stopped at the sigmoid colon because of poor preparation, and no therapy is done.",
        "45378 with modifier 53 for the discontinued procedure, with the reason in the note.",
      ],
    ],
    case: "A practice reports 45378 and 45385 on the same claim for a colonoscopy with polypectomy by snare.",
    model:
      "45385 includes the diagnostic exam, so 45378 is not separately reportable. Remove 45378 and report only 45385, adding other technique codes only for different techniques that were actually used.",
    mistakes: [
      "Reporting the diagnostic code with a therapeutic code.",
      "Reporting the technique once per polyp.",
      "Using no modifier for a stopped exam.",
      "Putting the finding before the screening diagnosis.",
    ],
    drills: [
      "Make a table of the colonoscopy codes and their techniques.",
      "Code four procedures with different techniques.",
      "Explain how a screening becomes a diagnostic claim for Medicare and for a commercial payer.",
    ],
    rubric: [
      "Each technique is reported once.",
      "The diagnostic base code is not repeated.",
      "Incomplete exams are marked.",
      "Screening conversions follow the payer rule.",
    ],
    scenario:
      "A snare removes three polyps in one colonoscopy. How is it reported?",
    answers: [
      "45385 once for the snare technique",
      "45385 three times, once for each polyp",
      "45378 three times for the diagnostic exam",
    ],
    correct: 0,
    why: "Each different endoscopic technique is reported once, regardless of how many lesions it treats.",
    taglish:
      "Sa endoscopy, may base na diagnostic code at mga technique code na kasama na ang diagnostic exam. Kapag snare ang tatlong polyp, 45385 ay isang beses lang. Kapag may ibang technique, tulad ng biopsy sa ibang lugar, 45380 na may distinct-site modifier kung kailangan. Huwag isama ang 45378 kapag may therapeutic code. Kung hindi natapos ang exam, modifier 53, at sa screening na naging diagnostic, 33 o PT depende sa payer.",
    tip: "List every technique used in the note first, then code each technique once. It stops both missed codes and duplicates.",
    mentor:
      "Review three procedure reports and mark each technique before you assign any code.",
    remember: [
      "A therapeutic endoscopy code includes the diagnostic exam, so do not add the base code.",
      "Each technique is reported once, no matter how many lesions it treated.",
      "Modifier 53 shows a discontinued procedure, and PT or 33 shows a converted screening.",
    ],
  },
  {
    title: "Critical care and prolonged service coding",
    desc: "99291 and 99292 time rules, what critical care includes, separately reportable procedures, and prolonged services for office and Medicare.",
    time: "55 min",
    objectives: [
      "Report critical care time with 99291 and 99292 and know where payers differ.",
      "Separate critical care time from time spent on separately billed procedures.",
      "Choose between 99417 and G2212 for prolonged office visits.",
    ],
    concept: `<p><strong>What critical care is.</strong> Critical care is the care of a patient with an illness or injury that acutely impairs one or more vital organ systems and carries a high probability of imminent or life-threatening deterioration. It involves high complexity decision making to assess, support, or prevent that failure. Time counts when the physician is immediately available to the patient, including time spent reviewing data and discussing treatment with family when the patient cannot take part. It does not include time for teaching or time spent on separately reported procedures.</p>
<p><strong>Time rules.</strong> 99291 reports the first 30 to 74 minutes. 99292 reports each additional 30 minutes. CPT's own time table allows one unit of 99292 beginning at 75 minutes, while Medicare begins to accept 99292 at 104 minutes. Document the total critical care time in the note.</p>
<p><strong>What is included.</strong> Certain services are bundled into critical care and not reported separately, including interpretation of cardiac output measurements, chest X-ray interpretation (71045 and 71046), pulse oximetry, blood gases and the collection of data (99090), gastric intubation (43752 and 43753), ventilator management (94002 to 94004, 94660, and 94662), and basic vascular access (36000, 36410, 36415, 36591, 36600). Other procedures, such as intubation (31500) or a central venous catheter (36556), are separately reportable, and their time is subtracted from the critical care time. Add modifier 25 to the critical care code when a separate procedure is billed the same day.</p>
<p><strong>Pediatric and neonatal.</strong> Daily inpatient pediatric and neonatal critical care uses different codes, such as 99468 and 99469 for neonates and 99471 and 99472 for infants and young children. They are not time-based.</p>
<p><strong>Prolonged office visits.</strong> When a visit is leveled by time and goes well beyond the top level, CPT adds 99417 for each 15 minutes beyond the time of 99205 or 99215. Under the CPT table, 99205 plus one unit of 99417 begins at 75 minutes, and 99215 plus one unit begins at 55 minutes. Medicare instead uses G2212, which begins at 89 minutes for 99205 and 69 minutes for 99215.</p>`,
    steps: [
      "Confirm the patient's condition meets the definition of critical illness.",
      "Total only the time devoted directly to the patient's care.",
      "Subtract the time of separately reported procedures.",
      "Select 99291 and any 99292 units by the payer's time table.",
      "Check the bundled list before adding other services.",
      "Add modifier 25 when a separate procedure is billed.",
    ],
    lab: [
      [
        "Case 1. An emergency physician spends 50 minutes of critical care on a patient in septic shock.",
        "99291 × 1. Dx: A41.9 and R65.21.",
      ],
      [
        "Case 2. A physician documents 100 minutes of critical care. The payer follows the CPT time table.",
        "99291 × 1 and 99292 × 1. A Medicare payer would report only 99291 until the total reaches 104 minutes.",
      ],
      [
        "Case 3. A physician spends 60 minutes on a critically ill patient, including 12 minutes inserting a central venous catheter that is billed separately.",
        "Critical care time is 48 minutes, so 99291-25 and 36556 for the separate procedure.",
      ],
      [
        "Case 4. A new patient office visit is leveled by total time and the physician documents 80 minutes on the date of the visit. The payer follows CPT.",
        "99205 and 99417 × 1, because 80 minutes is past the first threshold of 75 minutes and short of 90.",
      ],
      [
        "Case 5. The same 80-minute new patient visit is billed to Medicare.",
        "99205 only. G2212 is not reported because it begins at 89 minutes.",
      ],
    ],
    case: "A physician reports 99291 for 40 minutes of critical care and adds a separate chest X-ray interpretation (71046) on the same claim.",
    model:
      "Chest X-ray interpretation is bundled into critical care, so 71046 is not separately reportable. Remove it and keep 99291. If a separate technical component was performed by the facility, it is billed by the facility.",
    mistakes: [
      "Counting time spent on a separately billed procedure.",
      "Reporting bundled services separately.",
      "Reporting 99292 before the payer's time threshold.",
      "Using 99417 for Medicare when G2212 is required.",
    ],
    drills: [
      "Compute 99291 and 99292 units for 45, 80, 110, and 140 minutes under CPT and Medicare rules.",
      "List five services bundled into critical care.",
      "Write the thresholds for 99417 and G2212 for both new and established visits.",
    ],
    rubric: [
      "Critical illness is documented.",
      "Time is totaled and procedure time is removed.",
      "Bundled services are not billed.",
      "Payer-specific thresholds are applied.",
    ],
    scenario:
      "A physician bills a separate procedure on the same day as critical care. What is true about the critical care time?",
    answers: [
      "The procedure time is removed from the critical care time",
      "The procedure time is added to the critical care time",
      "The critical care code is dropped from the claim",
    ],
    correct: 0,
    why: "Time spent on separately reported procedures cannot also be counted as critical care time.",
    taglish:
      "Sa critical care, 99291 ay para sa unang 30 hanggang 74 minuto at 99292 sa bawat dagdag na 30 minuto. Iba ang time table ng CPT at ng Medicare: sa Medicare, 99292 ay mula 104 minuto. Huwag isama sa oras ang procedure na hiwalay na binabayaran, tulad ng central line, at lagyan ng modifier 25 ang 99291. Ang chest X-ray interpretation at ventilator management ay kasama na sa critical care. Sa prolonged office visit, 99417 sa CPT at G2212 sa Medicare.",
    tip: "Write ‘start, stop, procedure time removed, total’ on every critical care note. It is the first thing an auditor looks for.",
    mentor:
      "Ask an ED coder to show you a critical care note and mark the minutes that were counted.",
    remember: [
      "99291 is the first 30 to 74 minutes, and Medicare accepts 99292 at 104 minutes.",
      "Separately billed procedures are subtracted from critical care time and need modifier 25.",
      "Prolonged office visits use 99417 under CPT and G2212 for Medicare.",
    ],
  },
  {
    title: "EDI transactions, claim status, and rejections versus denials",
    desc: "The standard X12 transactions, acknowledgments, eligibility and status inquiries, and how to fix a rejected, denied, or incorrect claim.",
    time: "50 min",
    objectives: [
      "Name the HIPAA standard transactions and what each one does.",
      "Tell a rejected claim from a denied claim and fix each correctly.",
      "Use claim frequency codes to replace or void a claim.",
    ],
    concept: `<p>Most claims travel electronically in ANSI X12 transactions, version 5010. A practice management system sends them to a clearinghouse, which checks and forwards them to the payer.</p>
<p><strong>Common transactions.</strong> 837P is the professional claim, 837I the institutional claim, and 837D the dental claim. 835 is the electronic remittance advice (ERA) that explains payment. 270 asks for eligibility and 271 returns the answer. 276 asks for claim status and 277 returns it. 278 handles referrals and prior authorizations. 834 is enrollment and 820 is premium payment. Acknowledgments confirm receipt: TA1 for the interchange, 999 for the file, and 277CA for each claim, showing whether it was accepted or rejected.</p>
<p><strong>Rejection versus denial.</strong> A rejected claim failed front-end edits, such as an invalid subscriber ID or a missing required field, and was never adjudicated. It is fixed and sent as a new claim, with no appeal. A denied claim was adjudicated and the 835 shows an adjustment with a reason (a CARC and sometimes a RARC). A denial is handled with a corrected claim, a reconsideration, or an appeal, depending on the cause.</p>
<p><strong>Replacing and voiding.</strong> The claim frequency code shows the purpose of a claim: 1 is an original, 7 is a replacement of a prior claim, and 8 is a void or cancel. A replacement or void needs the payer's original claim control number, which goes in box 22 of the CMS-1500 or the matching loop of the 837P.</p>
<p><strong>Good habits.</strong> Run eligibility (270 and 271) before the visit. Review the clearinghouse rejection report every day. Check claim status (276 and 277) when a claim has not been paid after a typical processing period. Track the first-pass acceptance rate. Remember timely filing limits apply to corrected claims as well.</p>`,
    steps: [
      "Check the clearinghouse acknowledgments for each batch.",
      "Sort items into rejections and denials.",
      "Fix rejections and send them as new claims.",
      "Work denials using the 835 reason codes.",
      "Use frequency code 7 or 8 with the original claim number for corrections.",
      "Check claim status for items that have gone quiet.",
    ],
    lab: [
      [
        "Case 1. A 277CA report says a claim was rejected for an invalid subscriber ID.",
        "Correct the subscriber ID and send it as a new claim. It never entered adjudication, so no appeal or replacement code is needed.",
      ],
      [
        "Case 2. An 835 shows a line paid at $0 with CARC 97, meaning the benefit is included in the payment for another service.",
        "This is a denial after adjudication. Review bundling, then send a corrected claim or a reconsideration with documentation if the service was separate.",
      ],
      [
        "Case 3. A claim was billed to the wrong payer and paid. The practice must cancel it.",
        "Send a void with claim frequency code 8 and the original claim control number, then bill the correct payer.",
      ],
      [
        "Case 4. The front desk wants to confirm a patient's active coverage before tomorrow's visit.",
        "Send a 270 eligibility inquiry and read the 271 response.",
      ],
      [
        "Case 5. A claim submitted 35 days ago shows no payment and no denial.",
        "Send a 276 claim status inquiry and read the 277 response, or check the payer portal.",
      ],
    ],
    case: "A practice appeals a claim that the clearinghouse report shows as rejected for a missing date of birth.",
    model:
      "A rejected claim was never adjudicated, so there is nothing to appeal. Add the date of birth and submit a new claim within the timely filing limit.",
    mistakes: [
      "Appealing a rejection.",
      "Sending a replacement claim without the original claim number.",
      "Ignoring the daily rejection report.",
      "Missing timely filing on a corrected claim.",
    ],
    drills: [
      "Match each transaction number to its purpose.",
      "Sort ten example messages into rejections and denials.",
      "Write the steps for replacing a paid claim with a corrected claim.",
    ],
    rubric: [
      "Transactions are named correctly.",
      "Rejections and denials are handled differently.",
      "Frequency codes and claim numbers are used.",
      "Daily review and timely filing are tracked.",
    ],
    scenario:
      "A claim fails a front-end edit for an invalid subscriber ID and is never adjudicated. What is it called?",
    answers: [
      "A rejection, fixed and sent as a new claim",
      "A denial, handled through a formal appeal",
      "An underpayment, handled with a refund request",
    ],
    correct: 0,
    why: "A rejection failed front-end edits and was never adjudicated, so it is corrected and resubmitted.",
    taglish:
      "Ang 837P ay claim ng doktor, 837I sa ospital, 835 ang remittance, 270 at 271 ang eligibility, 276 at 277 ang claim status. Ang rejected na claim ay hindi pa napoproseso, kaya ayusin at ipadala bilang bagong claim. Ang denied na claim ay napoproseso na at may reason code sa 835, kaya corrected claim, reconsideration, o appeal. Sa pag-replace, frequency code 7, at sa pag-void, 8, kasama ang original claim number.",
    tip: "Check the clearinghouse rejection report first thing every morning. A rejected claim that nobody sees is a payment that never happens.",
    mentor:
      "Ask your clearinghouse contact how to read the 277CA report and which edits cause the most rejections.",
    remember: [
      "A rejection was never adjudicated and is fixed and resent, while a denial is worked with a corrected claim or appeal.",
      "Frequency code 7 replaces a claim and 8 voids it, using the original claim number.",
      "270 and 271 are eligibility, and 276 and 277 are claim status.",
    ],
  },
  {
    title:
      "Case practice set 6: therapy, spine injections, endoscopy, critical care, and corrections",
    desc: "Five more exam-style cases that combine the 8-minute rule, imaging-inclusive injection codes, endoscopy techniques, Medicare critical care time, and claim corrections.",
    time: "75 min",
    objectives: [
      "Apply the 8-minute rule to a mixed therapy visit.",
      "Report injection and endoscopy techniques without duplicating bundled services.",
      "Apply Medicare critical care time and replacement claim rules.",
    ],
    concept: `<p>Work these as you did the earlier sets. Write the diagnoses, the procedures with units and modifiers, and a reason before you open the answer. Allow about six minutes each. The cases are fictional, and exact codes and modifier rules should be verified in the current books and with each payer.</p>`,
    steps: [
      "Read the whole case and list the diagnoses and services.",
      "Count minutes, levels, or techniques.",
      "Remove bundled services and duplicate base codes.",
      "Apply Medicare or CPT thresholds as the case states.",
      "Write your answer and compare.",
    ],
    lab: [
      [
        "Case 26. A Medicare patient with right shoulder pain receives 18 minutes of therapeutic exercise (97110) and 18 minutes of manual therapy (97140) under a physical therapy plan of care.",
        "Total timed minutes: 36, which is 2 units. Each service has at least 15 minutes, so 97110 × 1 and 97140 × 1, both with GP. Dx: M25.511.",
      ],
      [
        "Case 27. A physician performs a cervical interlaminar epidural steroid injection under fluoroscopy, using 40 mg of triamcinolone. Dx: radiculopathy of the cervical region.",
        "62321 (cervical epidural with imaging guidance included) and J3301 × 4 (10 mg per unit). Dx: M54.12. Do not add imaging guidance.",
      ],
      [
        "Case 28. A diagnostic colonoscopy to the cecum for rectal bleeding finds a polyp removed by snare and a separate lesion at another site biopsied by forceps.",
        "45385 for the snare and 45380 for the biopsy, with a distinct-site modifier on 45380 if an edit requires it. Dx: K62.5 and the polyp finding. 45378 is not added.",
      ],
      [
        "Case 29. A Medicare patient in the emergency department receives 90 minutes of critical care for acute respiratory failure with hypoxia, with no separately billed procedures.",
        "99291 × 1 only, because Medicare accepts 99292 beginning at 104 minutes. Dx: J96.01.",
      ],
      [
        "Case 30. A practice learns that a paid claim listed the wrong diagnosis. The payer accepts corrected claims.",
        "Send a replacement claim with frequency code 7 and the payer's original claim control number in box 22, with the corrected diagnosis, within the timely filing limit.",
      ],
    ],
    case: "You code Case 29 as 99291 and 99292 × 1, and the Medicare payer pays only the first code and flags the second.",
    model:
      "Medicare accepts 99292 only when the total critical care time reaches 104 minutes. With 90 minutes, 99291 alone is correct. The CPT time table is used for payers that follow CPT, not for Medicare.",
    mistakes: [
      "Using the CPT critical care table for Medicare.",
      "Adding imaging guidance to an injection that includes it.",
      "Adding the diagnostic colonoscopy to therapeutic codes.",
      "Leaving off the original claim number in a replacement.",
    ],
    drills: [
      "Code all five cases without notes, then check.",
      "Write the reasoning sentence for each case.",
      "Redo your misses after 24 hours.",
    ],
    rubric: [
      "Units follow the stated payer rule.",
      "Bundled services are removed.",
      "Modifiers and frequency codes are supported.",
      "Misses are logged by topic.",
    ],
    scenario:
      "A Medicare patient receives 90 total minutes of critical care. Which code or codes are reported?",
    answers: [
      "99291 once, with no 99292",
      "99291 once and 99292 once",
      "99292 twice with no 99291",
    ],
    correct: 0,
    why: "Medicare begins accepting 99292 at 104 total minutes, so 90 minutes supports only 99291.",
    taglish:
      "Sa case practice set 6, isulat muna ang diagnoses at codes bago tingnan ang sagot. Sa therapy, i-total ang timed minutes: 36 minuto ay dalawang unit. Sa 62321, kasama na ang imaging, kaya walang idagdag. Sa colonoscopy na may snare at biopsy sa ibang lugar, 45385 at 45380. Sa Medicare critical care, 99291 lang hanggang 103 minuto. Sa pagpalit ng nabayarang claim, frequency code 7 at original claim number.",
    tip: "Write the payer next to every case before you code it. Medicare, commercial, and CPT rules often give different answers for the same note.",
    mentor:
      "Redo your two weakest cases from sets 1 to 6 and explain them aloud.",
    remember: [
      "Medicare totals timed therapy minutes first, and 36 minutes is 2 units.",
      "Injection and endoscopy techniques are reported without duplicate imaging or base codes.",
      "A replacement claim uses frequency code 7 and the original claim number.",
    ],
  },
]);
