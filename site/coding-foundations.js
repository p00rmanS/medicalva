// Coding track, sections 1-2: career foundations and ICD-10-CM diagnosis coding.
addCodingLessons([
  {
    title: "What a medical coder actually does",
    desc: "The coder's job, how it differs from a billing role, and where a remote coder VA fits.",
    time: "30 min",
    objectives: [
      "Describe how a coder turns documentation into standardized codes.",
      "Separate coding, billing, and clinical documentation tasks.",
      "Explain what credentials and supervision a coder VA role usually needs.",
    ],
    concept: `<p>A medical coder reads provider documentation and translates diagnoses, procedures, services, and supplies into standardized alphanumeric codes. Those codes tell a payer what happened to the patient and why. They also feed quality reporting, risk scores, research, and public health data.</p>
<p>Coding is not billing, and it is not clinical decision-making. A <b>coder</b> assigns codes the documentation supports. A <b>biller</b> builds, submits, and follows claims. A <b>clinical documentation integrity (CDI) specialist</b> works with providers to make the record clear and complete. Small practices often combine these jobs. Large organizations separate them.</p>
<p>A coder VA works remotely, usually for a practice, billing company, or physician group. Most employers expect a recognized coding credential, a signed business associate agreement, and a period of audited work before you code unsupervised. Your own interpretation of the chart never replaces the provider's documentation.</p>`,
    terms: [
      [
        "Coding",
        "Assigning standardized codes to documented diagnoses, procedures, and services.",
      ],
      [
        "Billing",
        "Preparing, submitting, and following up on claims and patient statements.",
      ],
      [
        "CDI",
        "Clinical documentation integrity: improving the accuracy and completeness of provider documentation.",
      ],
      [
        "Abstracting",
        "Pulling the relevant facts from a chart so they can be coded.",
      ],
      [
        "Credential",
        "A certification such as CPC or CCA, issued by a professional body after an exam.",
      ],
    ],
    steps: [
      "Read the full encounter documentation before you open a code book or encoder.",
      "Identify what the provider documented: reasons for the visit, conditions managed, services performed, and supplies.",
      "Assign diagnosis and procedure codes only from that documentation, using the current-year code sets.",
      "Check that the codes are consistent with one another and with payer rules.",
      "Ask the provider a compliant, non-leading question when documentation is unclear. Never fill the gap yourself.",
      "Pass the coded encounter to billing with your notes, and record anything left open.",
    ],
    case: "Training provider Dr. Lopez documents a follow-up visit. The note mentions a cough, a prescription renewal, and the phrase “likely bronchitis.” A new coder wants to code bronchitis because it sounds right.",
    model:
      "The note supports the documented symptoms and the visit reason, but “likely” is an uncertain diagnosis. In an outpatient setting uncertain diagnoses are not coded as confirmed. Code the documented symptom, flag the wording to the coding lead, and send a non-leading query if the provider's intent matters for the claim. Do not code bronchitis on your own judgment.",
    mistakes: [
      "Treating coding as ‘finding a code that fits’ instead of ‘reporting what is documented.’",
      "Assuming a coder can add a diagnosis because it is clinically obvious.",
      "Calling yourself a certified coder because you completed practice lessons.",
    ],
    drills: [
      "Write one sentence each describing the work of a coder, a biller, and a CDI specialist.",
      "List three tasks a coder VA can do under supervision and three that need a credential or employer approval.",
      "Find the AAPC and AHIMA credential pages and write the names and one-line descriptions of two credentials you might pursue.",
    ],
    rubric: [
      "Coding, billing, and CDI are distinguished correctly.",
      "The ‘documentation first’ principle is stated in your own words.",
      "Credential claims in your notes are accurate and honest.",
      "Escalation to a supervisor or provider is described, not skipped.",
    ],
    scenario:
      "A chart says “possible pneumonia” and the provider is unavailable. The claim is due today. What is the correct coder action?",
    answers: [
      "Code pneumonia so the claim is not delayed",
      "Follow outpatient guidelines for uncertain diagnoses, code what is confirmed, and route a compliant query",
      "Delete the word ‘possible’ from the note",
    ],
    correct: 1,
    why: "Coders report what is documented. Uncertain outpatient diagnoses are not coded as confirmed, and unclear documentation goes back to the provider through a compliant query.",
    taglish:
      "Ang medical coder ay nagta-translate ng documentation ng provider into standard codes. Hindi ikaw ang nagdi-diagnose at hindi ikaw ang nagbabago ng chart. Kung unclear ang note, mag-query ka nang tama. Magkaiba rin ang coder at biller: coder ang nag-a-assign ng codes, biller ang nagpapasa at nagfo-follow up ng claim. Para maging coder VA, kailangan mo ng training, madalas credential, at audited na practice.",
    tip: "Say “the documentation supports…” instead of “I think the code is…”. It keeps your reasoning anchored to the chart.",
    mentor:
      "Explain the difference between a coder, a biller, and a CDI specialist to a friend in Taglish, then repeat it in English.",
    remember: [
      "Code what is documented, not what seems clinically likely.",
      "Coder, biller, and CDI specialist are different jobs.",
      "A credential and supervised audit period are the normal path to independent coding.",
    ],
    source:
      "AAPC (aapc.com) and AHIMA (ahima.org) credential pages. Check each body's current requirements before you plan.",
  },
  {
    title: "Where coding sits in the revenue cycle",
    desc: "Follow money and data from scheduling to payment, and see how a coding error travels.",
    time: "30 min",
    objectives: [
      "Name the front-end, mid-cycle, and back-end revenue cycle stages.",
      "Locate coding in the sequence and identify its inputs and outputs.",
      "Trace a single coding error to its denial and its cost.",
    ],
    concept: `<p>The revenue cycle is the chain of steps that turns a patient visit into a paid claim. The <b>front end</b> covers scheduling, registration, insurance verification, and prior authorization. The <b>mid-cycle</b> covers documentation, charge capture, and coding. The <b>back end</b> covers claim submission, payment posting, denial work, and patient balances.</p>
<p>Coding is the hinge. It takes the clinical record from the mid-cycle and produces the data the back end submits. A wrong code does not stay local. A missing diagnosis pointer causes a medical-necessity denial. A modifier error causes a payment error. An unsupported higher-level code creates compliance exposure and later repayment.</p>
<p>You learned the administrative view in the earlier lessons. Here the focus shifts to the data your code choices create and who relies on them.</p>`,
    terms: [
      [
        "Charge capture",
        "Recording every billable service so nothing is missed.",
      ],
      [
        "Clean claim",
        "A claim with no errors or missing information, ready to be paid on first submission.",
      ],
      [
        "Adjudication",
        "The payer's process of reviewing a claim and deciding how to pay it.",
      ],
      [
        "Remittance advice",
        "The payer's explanation of how each claim line was paid or denied.",
      ],
      [
        "Days in A/R",
        "The average number of days it takes to collect payment on claims.",
      ],
    ],
    steps: [
      "List the stages from scheduling to patient statement. Mark the three that most depend on accurate coding.",
      "For one visit, write what the registration team must verify before the visit, and what the coder needs after it.",
      "Trace what the coder receives: provider note, orders, results, charge sheet.",
      "Trace what the coder produces: diagnosis codes, procedure codes, modifiers, units.",
      "Choose one plausible error and follow it forward to the denial or underpayment it would cause.",
      "Write the fix and the prevention step at the earliest stage that could have caught the error.",
    ],
    case: "A practice has a rising denial rate on lab claims. The coder assigned the correct lab code, but the diagnosis on the claim does not support the test under the payer's coverage policy.",
    model:
      "Classify as a medical-necessity denial. Review the coverage policy, the documentation, and the diagnosis pointer. If the documentation supports a more specific covered diagnosis, request a compliant provider clarification and correct the claim. If it does not, do not add one. Prevention: add a pre-bill check that compares the ordered test with covered diagnoses.",
    mistakes: [
      "Treating denials as billing's problem alone.",
      "Fixing the claim without finding the process failure that caused it.",
      "Adding a diagnosis just because it makes the claim pay.",
    ],
    drills: [
      "Draw the revenue cycle on one page with owner and output for each stage.",
      "Write the story of one claim from scheduling to payment using fictional details.",
      "Pick three denial reasons and name the earliest stage that could have prevented each.",
    ],
    rubric: [
      "All stages appear in the right order with owners.",
      "The coding hinge is explained, with inputs and outputs.",
      "Prevention happens at the earliest practical stage.",
      "No fix involves coding something the chart does not support.",
    ],
    scenario:
      "A claim denied because the procedure does not match the diagnosis. Which response is correct?",
    answers: [
      "Resubmit with whichever diagnosis the payer pays for",
      "Review the documentation, correct only what the record supports, and query the provider if clarity is needed",
      "Write the claim off without reviewing it",
    ],
    correct: 1,
    why: "A denial is a prompt to compare the claim with the record. Changing codes to chase payment is a compliance risk.",
    taglish:
      "Ang revenue cycle ay buong biyahe ng visit hanggang bayad: scheduling, registration, documentation, coding, claim, payment, at denial work. Ang coding ang gitna kaya kapag mali ang code, bumabalik sa clinic bilang denial o underpayment. Hindi tamang ayusin ang claim para lang mabayaran; ayusin mo kung ano ang suportado ng chart.",
    tip: "When you find a denial, ask “which earlier stage could have caught this?” That question is how coders become process fixers.",
    mentor:
      "Trace one fictional claim and put a sticky note on each stage where a check would have prevented the problem.",
    remember: [
      "Coding feeds the back end. Errors travel forward as denials.",
      "Fix the process, not only the claim.",
      "Never change codes just to get paid.",
    ],
  },
  {
    title: "Medical terminology: build words from parts",
    desc: "Decode unfamiliar terms from roots, prefixes, and suffixes, and use directional terms correctly.",
    time: "40 min",
    objectives: [
      "Break a medical term into prefix, root, and suffix.",
      "Recognize the common suffixes that signal a procedure or condition.",
      "Use directional and laterality terms precisely.",
    ],
    concept: `<p>Most medical terms are built from Greek and Latin parts. A <b>root</b> carries the main meaning (often a body part), a <b>prefix</b> comes before it, and a <b>suffix</b> comes after. Learn the parts and you can read thousands of words. For coders, suffixes matter most because they separate a <em>condition</em> from a <em>procedure</em>.</p>
<p>For example, <em>-itis</em> means inflammation (a condition), while <em>-ectomy</em> means surgical removal (a procedure). Appendicitis is a diagnosis. Appendectomy is a procedure. Mixing them up leads to the wrong code book.</p>
<p>Laterality and direction affect code choice: right or left, bilateral, upper or lower, proximal or distal. ICD-10-CM and CPT both depend on them.</p>`,
    terms: [
      ["-itis", "Inflammation (gastritis, arthritis)."],
      ["-ectomy", "Surgical removal (appendectomy)."],
      ["-otomy", "Cutting into, an incision (thoracotomy)."],
      ["-ostomy", "Creating a surgical opening (colostomy)."],
      ["-plasty", "Surgical repair or reshaping (rhinoplasty)."],
      ["-scopy", "Visual examination with an instrument (colonoscopy)."],
      ["-emia", "A blood condition (anemia, hyperglycemia)."],
      ["-algia", "Pain (neuralgia)."],
      ["-pathy", "Disease (neuropathy)."],
      ["-megaly", "Enlargement (cardiomegaly)."],
      ["hyper- / hypo-", "Above or excessive / below or deficient."],
      ["brady- / tachy-", "Slow / fast (bradycardia, tachycardia)."],
      [
        "Proximal / distal",
        "Nearer to / farther from the point of attachment or trunk.",
      ],
      ["Anterior / posterior", "Toward the front / toward the back."],
      ["Medial / lateral", "Toward the midline / away from the midline."],
      ["Bilateral / unilateral", "Both sides / one side."],
    ],
    steps: [
      "Split the unfamiliar term into parts and write the meaning of each.",
      "Decide whether the suffix names a condition, a procedure, or a measurement.",
      "Check the meaning in an approved medical dictionary before you rely on it.",
      "Note laterality, location, and acuity words that may change the code.",
      "Add the term and its meaning to your personal glossary with the source.",
    ],
    case: "A note says “cholecystectomy performed for acute cholecystitis.” A trainee is unsure which part is the diagnosis and which is the procedure.",
    model:
      "Cholecystitis (chole = gallbladder, -itis = inflammation) is the diagnosis; acute is the acuity. Cholecystectomy (-ectomy = removal) is the procedure. Diagnosis codes come from ICD-10-CM and the procedure from CPT. The note supports both, but the exact codes depend on the full documentation and approach.",
    mistakes: [
      "Memorizing words one at a time instead of learning the parts.",
      "Coding an abbreviation without confirming the expansion.",
      "Ignoring the words ‘left’ and ‘right’ in a note.",
    ],
    drills: [
      "Break down ten terms, such as nephropathy, dermatitis, gastrectomy, arthroscopy, and hypoglycemia.",
      "Write a ‘condition or procedure?’ label next to each suffix in the key terms list.",
      "Make a flashcard set of the 16 key terms and review it daily using the Flashcards page.",
    ],
    rubric: [
      "Each term is split correctly.",
      "Conditions and procedures are separated.",
      "Laterality words are highlighted in examples.",
      "Every definition has a source.",
    ],
    scenario:
      "A note says “status post left mastectomy.” What does ‘mastectomy’ tell you?",
    answers: [
      "It is a diagnosis",
      "It is a procedure meaning surgical removal of breast tissue, on the left side",
      "It is a medication",
    ],
    correct: 1,
    why: "-ectomy means surgical removal. The term is a procedure, and ‘left’ is laterality that may matter for code selection.",
    taglish:
      "Huwag kabisaduhin ang bawat medical word; matuto ka ng parts. Ang suffix na -itis ay inflammation, -ectomy ay tinanggal, -otomy ay hiniwa, -scopy ay tiningnan gamit instrument. Kapag alam mo ang parts, madali mong mababasa ang bagong term. Pero kahit kaya mo nang i-decode, i-check pa rin sa approved dictionary dahil ang coding ay hindi hulaan.",
    tip: "Learn 20 suffixes and 40 roots first. That one small list unlocks most of the words you will meet in your first month.",
    mentor:
      "Create a one-page ‘word parts’ sheet in your own handwriting. Quiz yourself covering the meaning column.",
    remember: [
      "Suffixes tell you whether a term is a condition or a procedure.",
      "Laterality (left, right, bilateral) often changes the code.",
      "Confirm every term in an approved dictionary.",
    ],
  },
  {
    title: "Anatomy and body systems for coders",
    desc: "Map the body systems to ICD-10-CM chapters and CPT surgery sections so you can find the right code book area fast.",
    time: "40 min",
    objectives: [
      "Name the major body systems and one common condition for each.",
      "Match systems to the ICD-10-CM chapter that usually classifies their conditions.",
      "Locate the CPT surgery subsections for several systems.",
    ],
    concept: `<p>You do not need to be a clinician, but you need a working map of the body. The books are organized partly by body system. If you can place a condition or a procedure in the right system, you know where to start looking.</p>
<p>ICD-10-CM has 22 chapters. Many follow body systems. CPT's Surgery section is also organized by system, from the integumentary system through the musculoskeletal, respiratory, cardiovascular, digestive, urinary, nervous, and eye subsections.</p>
<p>Not every code follows the system. Injuries, neoplasms, pregnancy, symptoms, and factors influencing health status have their own chapters regardless of body part.</p>`,
    terms: [
      ["Chapter 1 · A00–B99", "Certain infectious and parasitic diseases."],
      ["Chapter 2 · C00–D49", "Neoplasms."],
      [
        "Chapter 4 · E00–E89",
        "Endocrine, nutritional, and metabolic diseases (includes diabetes).",
      ],
      [
        "Chapter 5 · F01–F99",
        "Mental, behavioral, and neurodevelopmental disorders.",
      ],
      ["Chapter 6 · G00–G99", "Diseases of the nervous system."],
      [
        "Chapter 9 · I00–I99",
        "Diseases of the circulatory system (includes hypertension).",
      ],
      ["Chapter 10 · J00–J99", "Diseases of the respiratory system."],
      ["Chapter 11 · K00–K95", "Diseases of the digestive system."],
      [
        "Chapter 13 · M00–M99",
        "Diseases of the musculoskeletal system and connective tissue.",
      ],
      ["Chapter 14 · N00–N99", "Diseases of the genitourinary system."],
      [
        "Chapter 18 · R00–R99",
        "Symptoms, signs, and abnormal findings not elsewhere classified.",
      ],
      [
        "Chapter 19 · S00–T88",
        "Injury, poisoning, and certain other consequences of external causes.",
      ],
      [
        "Chapter 21 · Z00–Z99",
        "Factors influencing health status and contact with health services.",
      ],
      ["CPT Surgery · Integumentary", "Skin: 10004–19499."],
      ["CPT Surgery · Musculoskeletal", "Bones, joints, muscles: 20100–29999."],
      ["CPT Surgery · Respiratory", "30000–32999."],
      ["CPT Surgery · Cardiovascular", "33016–37799."],
      ["CPT Surgery · Digestive", "40490–49999."],
      ["CPT Surgery · Urinary", "50010–53899."],
      ["CPT Surgery · Nervous", "61000–64999."],
      ["CPT Surgery · Eye and ocular adnexa", "65091–68899."],
    ],
    steps: [
      "Draw a table with a row for each system and columns for organs, a sample condition, an ICD-10-CM chapter, and a CPT surgery subsection.",
      "Fill in three conditions per system from your own knowledge.",
      "Check each against the code book index and correct your guesses.",
      "Mark the chapters that do not follow body systems and note why.",
      "Practice finding a code area for ten fictional diagnoses without opening the tabular list.",
    ],
    case: "A note documents “left knee osteoarthritis” and a planned “left knee arthroscopy.” You need the right areas of both books.",
    model:
      "The diagnosis is a musculoskeletal condition, so start in ICD-10-CM Chapter 13 (M codes) and use the Index to find osteoarthritis of the knee, then confirm laterality and specificity in the Tabular List. The procedure belongs in the CPT Surgery section, Musculoskeletal subsection (arthroscopy under knee joint). The exact codes require the full note and the current code books.",
    mistakes: [
      "Starting in the wrong chapter because the body part sounds right.",
      "Forgetting that injuries and symptoms have their own chapters.",
      "Choosing a code from memory instead of verifying in the Tabular List.",
    ],
    drills: [
      "Complete the body-system table from memory, then correct it.",
      "Find the chapter or section for these terms: pneumonia, fracture of a wrist, hypertension, cataract surgery, chest pain.",
      "Quiz a partner by naming a condition and asking for the ICD-10-CM chapter.",
    ],
    rubric: [
      "The table covers all major systems.",
      "Exceptions to the body-system pattern are listed.",
      "Guesses were checked in the books.",
      "Chapter ranges match the current ICD-10-CM and CPT references.",
    ],
    scenario:
      "A patient has chest pain with no confirmed cause. Which ICD-10-CM chapter is the first place to look?",
    answers: [
      "Chapter 9, circulatory system, because the heart is in the chest",
      "Chapter 18, symptoms and signs, because no definitive diagnosis is documented",
      "Chapter 21, because the visit is routine",
    ],
    correct: 1,
    why: "When no definitive diagnosis is documented, outpatient coding uses the symptom or sign, found in Chapter 18.",
    taglish:
      "Para mabilis kang makahanap ng code, kailangan mo ng mapa ng katawan: puso at ugat sa circulatory, baga sa respiratory, buto at kasu-kasuan sa musculoskeletal. Pero hindi lahat ay sumusunod sa body system; may sariling chapter ang injuries, symptoms, neoplasms, at Z codes. Gamitin mo ang mapa para magsimula, pero i-verify pa rin sa Tabular List.",
    tip: "Tab your books by chapter and section with colored flags. In an open-book exam and at work, the time you save finding the right page is large.",
    mentor:
      "Make a coloured one-page body-system map and say the ICD-10-CM chapter range for each system aloud.",
    remember: [
      "ICD-10-CM has 22 chapters. Many follow body systems, but injuries, symptoms, and Z codes do not.",
      "CPT surgery subsections are organized mostly by body system.",
      "Use anatomy to find the starting area, then verify in the Tabular List.",
    ],
    source:
      "ICD-10-CM chapter ranges are published by CDC/NCHS. Verify current ranges and CPT section ranges in the current code books.",
  },
  {
    title: "The code sets: ICD-10-CM, CPT, HCPCS, and modifiers",
    desc: "Who owns each code set, what it describes, and why a claim needs several at once.",
    time: "35 min",
    objectives: [
      "Match each code set to what it describes and who maintains it.",
      "Explain how diagnosis codes and procedure codes work together on a claim.",
      "Explain why you must use current-year code books.",
    ],
    concept: `<p>A professional claim pairs <b>what was done</b> with <b>why it was done</b>. Procedure and service codes answer the first question. Diagnosis codes answer the second. Modifiers add detail that changes how a code is interpreted or paid.</p>
<p><b>ICD-10-CM</b> (diagnosis codes) is maintained in the U.S. by the CDC's National Center for Health Statistics, with CMS maintaining the procedure counterpart <b>ICD-10-PCS</b> for inpatient hospital procedures. <b>CPT</b> (Current Procedural Terminology) is published by the American Medical Association and describes services and procedures by physicians and other qualified professionals. <b>HCPCS Level II</b> is maintained by CMS and covers supplies, drugs, equipment, and services not in CPT.</p>
<p>HIPAA names these as the standard medical code sets for electronic transactions. They are updated on a schedule: ICD-10-CM changes every October 1, and CPT and HCPCS changes generally take effect each January 1, with some HCPCS quarterly updates. Using an outdated code is a common source of rejections.</p>`,
    terms: [
      [
        "ICD-10-CM",
        "Diagnosis codes, 3–7 characters, used in all U.S. healthcare settings.",
      ],
      ["ICD-10-PCS", "Inpatient hospital procedure codes, 7 characters."],
      [
        "CPT Category I",
        "Five-digit numeric codes for common procedures and services.",
      ],
      [
        "CPT Category II",
        "Four digits plus F; optional performance-measure tracking codes.",
      ],
      [
        "CPT Category III",
        "Four digits plus T; emerging technology, temporary codes.",
      ],
      [
        "HCPCS Level II",
        "One letter plus four digits; drugs, supplies, durable equipment, and some services.",
      ],
      [
        "Modifier",
        "A two-character addition that clarifies a code without changing its definition.",
      ],
    ],
    steps: [
      "Look at a sample encounter and list the questions it answers: Who? What was done? Why? Where?",
      "Match each question to the code set or claim field that answers it.",
      "Find the diagnosis in ICD-10-CM and the service in CPT or HCPCS.",
      "Decide whether a modifier is needed and why.",
      "Confirm the date of service so you use the code set version in effect that day.",
    ],
    case: "A practice management system still holds last year's ICD-10-CM list. A claim rejects because a diagnosis code was retired.",
    model:
      "Identify the retired code and the replacement in the current ICD-10-CM update. Confirm the documentation supports the replacement. Update the system's code table through the approved process, rework the affected claims, and add a calendar reminder to load updates each October for ICD-10-CM and January for CPT/HCPCS.",
    mistakes: [
      "Using last year's book for this year's dates of service.",
      "Treating CPT, HCPCS, and ICD codes as interchangeable.",
      "Copying CPT descriptions into public material. CPT is copyrighted by the AMA.",
    ],
    drills: [
      "Make a one-page chart of the code sets with owner, content, format, and update date.",
      "Take a fictional visit and label which parts become diagnosis codes, procedure codes, and modifiers.",
      "Write a short procedure for annual code updates with owner and deadline.",
    ],
    rubric: [
      "Owners and update schedules are correct.",
      "Diagnosis and procedure roles are distinguished.",
      "Copyright is respected in your own notes.",
      "A process for updates exists.",
    ],
    scenario:
      "A coder wants to use a code from an old CPT book for a service delivered this month. What is the issue?",
    answers: [
      "No issue; codes never change",
      "The code set in effect on the date of service must be used, so the current book is required",
      "Only ICD codes change yearly",
    ],
    correct: 1,
    why: "Codes are revised, added, and deleted on a schedule. The version in effect on the date of service applies.",
    taglish:
      "Tatlong malaking code set: ICD-10-CM para sa diagnosis (bakit), CPT para sa procedure/service (ano ang ginawa), at HCPCS Level II para sa supplies, drugs, at equipment. May modifier pa para sa dagdag na detalye. Nagbabago ang codes taon-taon kaya dapat updated ang book. Copyrighted ang CPT ng AMA, kaya huwag mong ipost ang buong descriptions.",
    tip: "Bookmark the CDC, CMS, and AMA update pages and put the October and January update dates in your calendar.",
    mentor:
      "Explain to a partner, in Taglish, which code set you would open first for a diagnosis, a procedure, and an injection drug.",
    remember: [
      "Diagnosis codes say why. Procedure codes say what.",
      "Use the code set version in effect on the date of service.",
      "CPT is AMA-copyrighted. Do not republish it.",
    ],
    source:
      "CDC/NCHS (ICD-10-CM), CMS (HCPCS Level II, ICD-10-PCS), AMA (CPT). Always use the current published editions.",
  },
  {
    title: "Read a medical record like a coder",
    desc: "Find the codable facts in a note and learn what you may and may not code from.",
    time: "40 min",
    objectives: [
      "Identify the sections of a typical encounter note.",
      "Separate codable provider documentation from copied or unsupported text.",
      "Write a compliant, non-leading query.",
    ],
    concept: `<p>Outpatient notes often follow <b>SOAP</b>: Subjective (what the patient reports), Objective (exam and data), Assessment (the provider's diagnoses and thinking), and Plan (orders and next steps). The <b>assessment and plan</b> usually contain the diagnoses and services you code. Other sections add support.</p>
<p>Code from the <b>provider's documentation</b> for that encounter. Do not code from a problem list alone, from a past visit copied forward without evidence it was evaluated, or from a lab value you interpret yourself. Some facts, such as BMI or pressure ulcer stage, may be taken from other clinicians' documentation, but the associated diagnosis still comes from the provider.</p>
<p>When documentation is conflicting, vague, or missing, you send a <b>query</b>. A compliant query presents the clinical facts, asks an open or multiple-choice question including ‘other’ and ‘unable to determine,’ and never hints at the answer or the payment impact.</p>`,
    terms: [
      [
        "Chief complaint (CC)",
        "The reason for the visit in the patient's words.",
      ],
      ["HPI", "History of present illness: the story of the current problem."],
      ["ROS", "Review of systems: a checklist of symptoms by body system."],
      ["Assessment", "The provider's diagnoses or impressions."],
      ["Plan", "Tests, medications, referrals, and follow-up."],
      ["Query", "A written question to the provider to clarify documentation."],
      [
        "Cloned documentation",
        "Copied text that may not reflect the current visit.",
      ],
    ],
    steps: [
      "Read the whole note, including addenda, before you pick a single code.",
      "Underline the reason for the visit, every condition the provider assessed, and every service performed.",
      "Mark conditions that were addressed, monitored, evaluated, or treated. These are the ones usually reportable.",
      "Mark anything uncertain (probable, suspected, rule-out) and anything missing.",
      "Draft a query for every gap using neutral wording and the clinical facts only.",
      "Do not finalize the code set until the query is answered or policy says to proceed.",
    ],
    case: "A note lists ‘hypertension, diabetes, hyperlipidemia’ in the history section, but the assessment only discusses a medication change for high blood pressure.",
    model:
      "Hypertension was assessed and managed in the assessment and plan, so it is reportable if the documentation supports it. The diabetes and hyperlipidemia appear only in a list. Check whether the provider monitored or addressed them elsewhere. If they were not evaluated, they are not coded for this encounter by default. If clarity is needed, send a non-leading query: ‘Please clarify which of the listed conditions were evaluated or managed at this visit.’",
    mistakes: [
      "Coding every diagnosis on the problem list.",
      "Writing a query that suggests the answer (‘Can you confirm this is acute respiratory failure?’).",
      "Ignoring an addendum that changes the note.",
    ],
    drills: [
      "Mark a sample SOAP note with the four sections and highlight codable facts.",
      "Write three non-leading queries for different gaps.",
      "List five things you cannot code from, and why.",
    ],
    rubric: [
      "Only provider-documented conditions for the encounter are coded.",
      "Queries are open or multiple-choice with ‘other’ and ‘unable to determine.’",
      "Payment impact never appears in a query.",
      "Addenda are checked.",
    ],
    scenario:
      "The assessment says “cough, rule out pneumonia.” Which statement is correct for an outpatient claim?",
    answers: [
      "Code pneumonia because it is mentioned",
      "Code the documented symptom, not the rule-out condition",
      "Skip the visit because the diagnosis is unclear",
    ],
    correct: 1,
    why: "Outpatient guidelines do not allow coding ‘rule out,’ ‘suspected,’ ‘probable,’ or similar uncertain diagnoses. Code the confirmed symptom or finding.",
    taglish:
      "Basahin mo ang buong note bago ka pumili ng code. Karaniwang SOAP ang format: Subjective, Objective, Assessment, Plan. Ang diagnosis ay galing sa assessment ng provider, hindi sa problem list lang. Kapag may kulang o magulo, mag-query ka pero huwag mong ituro ang sagot. Neutral lang ang tanong at walang banggit ng bayad.",
    tip: "Write queries as if the provider will read them aloud in an audit. If they sound like they steer the answer, rewrite them.",
    mentor:
      "Take any sample note and highlight conditions that were evaluated, treated, or monitored. Then write one clean query.",
    remember: [
      "Code from the provider's documentation for this encounter.",
      "Queries are neutral and never mention payment.",
      "‘Rule out’ and ‘probable’ are not coded in outpatient settings.",
    ],
  },
  {
    title: "ICD-10-CM structure and conventions",
    desc: "Read the code format, the Index, the Tabular List, and the instructional notes that control code choice.",
    time: "45 min",
    objectives: [
      "Explain the structure of a diagnosis code from category to 7th character.",
      "Distinguish Excludes1, Excludes2, ‘code first,’ and ‘use additional code.’",
      "Use abbreviations and punctuation in the books correctly.",
    ],
    concept: `<p>An ICD-10-CM code has 3 to 7 characters. The first is a letter, the second a number, and the rest letters or numbers. The first three characters form the <b>category</b>. A decimal point follows the third character. More characters add detail such as cause, site, laterality, and episode of care. A code is valid only at its <b>highest level of specificity</b>. A code with sub-levels available cannot be reported at the shorter level.</p>
<p>The <b>Alphabetic Index</b> helps you find candidate codes. The <b>Tabular List</b> is the authority. It is organized by chapter and contains instructional notes that can change the answer. You never code from the Index alone.</p>
<p>Seven-character codes sometimes require the placeholder <b>X</b> so the 7th character falls in the 7th position, for example when a code has only 5 or 6 characters before the extension.</p>`,
    terms: [
      [
        "NEC",
        "Not elsewhere classifiable: the condition is specified but has no specific code.",
      ],
      ["NOS", "Not otherwise specified: equivalent to ‘unspecified.’"],
      [
        "Excludes1",
        "‘Not coded here’: the two conditions generally cannot be reported together, unless they are unrelated.",
      ],
      [
        "Excludes2",
        "‘Not included here’: the excluded condition is separate, and both may be reported.",
      ],
      [
        "Code first",
        "The underlying condition is sequenced before this code (etiology/manifestation).",
      ],
      [
        "Use additional code",
        "Add a second code for further detail or an associated condition.",
      ],
      [
        "Code also",
        "Another code may be needed; sequencing depends on circumstances.",
      ],
      ["[ ] Brackets", "Surround synonyms or manifestation codes."],
      [
        "( ) Parentheses",
        "Enclose nonessential modifiers that do not affect the code.",
      ],
      [
        "7th character",
        "Extension such as A (initial), D (subsequent), S (sequela) for injuries.",
      ],
      [
        "With",
        "In the Index, conditions listed under ‘with’ are presumed related when the guideline applies.",
      ],
    ],
    steps: [
      "Read the documented diagnostic statement and choose the main term.",
      "Find the main term in the Alphabetic Index and follow subterms for site, type, and cause.",
      "Turn to the Tabular List and read the category, includes notes, excludes notes, and instructions.",
      "Add characters until you reach the highest valid level of specificity.",
      "Apply 7th character and placeholder rules.",
      "Follow ‘code first’ and ‘use additional code’ instructions, then sequence.",
    ],
    case: "A trainee codes the three-character category J45 for asthma because the Index showed it. The code is rejected as incomplete.",
    model:
      "Category J45 has more specific subcodes. Verify the documentation: severity (intermittent, mild persistent, and so on) and complications (uncomplicated, with acute exacerbation, with status asthmaticus). Assign the complete code that matches. If severity is not documented, the unspecified option for that situation applies and a query may be appropriate.",
    mistakes: [
      "Stopping at the category because the Index gave a three-character code.",
      "Ignoring an Excludes1 note.",
      "Forgetting the placeholder X on an injury or poisoning code.",
    ],
    drills: [
      "Pick five diagnoses and take each from Index to final code, recording every instructional note you read.",
      "Explain Excludes1 versus Excludes2 using your own example.",
      "Create a one-page punctuation key and abbreviations sheet.",
    ],
    rubric: [
      "Codes are verified in the Tabular List.",
      "Every instructional note encountered was applied.",
      "Specificity is complete or the gap is documented.",
      "Excludes notes are explained correctly.",
    ],
    scenario:
      "Two conditions are connected by an Excludes1 note and both are documented as unrelated. What is correct?",
    answers: [
      "Never report both under any circumstances",
      "An exception exists when the conditions are unrelated, so both may be reported",
      "Always report only the first one",
    ],
    correct: 1,
    why: "Excludes1 means the conditions generally cannot occur together, but an exception applies when they are clearly unrelated.",
    taglish:
      "Ang ICD-10-CM code ay 3 hanggang 7 characters; kailangan mo itong i-code hanggang pinakamataas na specificity. Ang Index ay panimula lang; ang Tabular List ang final authority. Importante ang Excludes1 (huwag pagsamahin, maliban kung hiwalay ang dahilan) at Excludes2 (puwedeng pagsamahin). Sundin din ang code first at use additional code notes.",
    tip: "Read the notes at the top of the chapter, the category, and the subcategory. The answer to ‘why can’t I use this code?’ is nearly always there.",
    mentor:
      "Explain Excludes1 and Excludes2 aloud, with one example each, in Taglish and then in English.",
    remember: [
      "Always finish in the Tabular List at the highest specificity.",
      "Excludes1: not together (unless unrelated). Excludes2: together is allowed.",
      "Use X as a placeholder so the 7th character stays in the 7th position.",
    ],
    source:
      "ICD-10-CM Official Guidelines for Coding and Reporting (CDC/NCHS, updated each fiscal year starting October 1).",
  },
  {
    title: "Assign a diagnosis code step by step",
    desc: "A repeatable method from diagnostic statement to verified code, practiced with common conditions.",
    time: "45 min",
    objectives: [
      "Follow a consistent six-step process for every diagnosis.",
      "Select the most specific supported code for common outpatient conditions.",
      "Know when an unspecified code is the correct choice.",
    ],
    concept: `<p>Consistency prevents errors. Use the same steps every time: identify the documented condition, choose the main term, search the Index, verify in the Tabular List, apply notes, and check the guidelines. Then ask whether documentation supports more specificity. If it does not, an <b>unspecified</b> code is correct and honest. If it might, query.</p>
<p>Here are common outpatient conditions and their usual codes. They are examples of the process, not shortcuts to memorize. Always verify in the current year's book.</p>
<table class="ref-table"><thead><tr><th>Documented condition</th><th>Code</th><th>Note</th></tr></thead><tbody>
<tr><td>Essential (primary) hypertension</td><td>I10</td><td>Do not use if CKD or heart disease is documented. See combination codes.</td></tr>
<tr><td>Type 2 diabetes without complications</td><td>E11.9</td><td>Add Z79.4 if long-term insulin is documented.</td></tr>
<tr><td>Type 2 diabetes with hyperglycemia</td><td>E11.65</td><td>Documentation must say ‘hyperglycemia’ or ‘poorly controlled.’</td></tr>
<tr><td>Acute pharyngitis, unspecified</td><td>J02.9</td><td>Streptococcal pharyngitis has its own code.</td></tr>
<tr><td>Urinary tract infection, site not specified</td><td>N39.0</td><td>Add organism code if documented.</td></tr>
<tr><td>Low back pain, unspecified</td><td>M54.50</td><td>Six characters; M54.5 alone is invalid.</td></tr>
<tr><td>GERD without esophagitis</td><td>K21.9</td><td>With esophagitis uses K21.0-.</td></tr>
<tr><td>Hyperlipidemia, unspecified</td><td>E78.5</td><td>Mixed hyperlipidemia is E78.2.</td></tr>
<tr><td>Anxiety disorder, unspecified</td><td>F41.9</td><td>Generalized anxiety disorder is F41.1.</td></tr>
<tr><td>Hypothyroidism, unspecified</td><td>E03.9</td><td>Other types have their own codes.</td></tr>
<tr><td>Unspecified asthma, uncomplicated</td><td>J45.909</td><td>Severity and complications change the code.</td></tr>
</tbody></table>`,
    steps: [
      "Write the diagnostic statement exactly as documented.",
      "Pick the main term (usually the condition, not the body part or an adjective).",
      "Search the Alphabetic Index, using subterms for type, site, and cause.",
      "Verify the candidate in the Tabular List and read all notes.",
      "Check the Official Guidelines for the chapter and for outpatient reporting.",
      "Decide whether more specificity is documented. If not, use the unspecified code and record why.",
    ],
    lab: [
      [
        "Documented: “Type 2 diabetes, well controlled, on metformin.” Code the diagnosis and any status code.",
        "E11.9 (type 2 diabetes mellitus without complications). Add Z79.84 for long-term use of oral hypoglycemic drugs, since metformin use is documented and the guidelines direct a status code. If insulin were also documented, Z79.4 would apply.",
      ],
      [
        "Documented: “Acute low back pain, no radiculopathy.” What does your search tell you?",
        "Low back pain codes fall under M54.5-. Use the six-character code that matches the documentation. If the provider documents only ‘low back pain,’ the unspecified M54.50 is used. Check the current Tabular List for acuity and other options.",
      ],
      [
        "Documented: “Urinary tract infection, E. coli.” Which codes?",
        "N39.0 (UTI, site not specified) plus B96.20 (E. coli as the cause of diseases classified elsewhere, unspecified), following the ‘use additional code’ instruction to identify the organism. Verify both in the current books.",
      ],
      [
        "Documented: “Fever and cough for three days. Rule out pneumonia.” What is reported?",
        "Outpatient guidelines prohibit coding ‘rule out.’ Report the documented signs and symptoms: R50.9 (fever, unspecified) and R05.x (cough; choose the code matching duration documentation: acute, subacute, chronic, or unspecified R05.9).",
      ],
    ],
    case: "A note documents “DM2” and “HTN.” The trainee needs final codes but is not sure how specific to be.",
    model:
      "Abbreviations are common in notes and widely understood, but confirm that they are allowed by your employer's policy. DM2 maps to type 2 diabetes mellitus and HTN to hypertension. With no complications or related conditions documented, E11.9 and I10 are the supported codes. If the note also documents kidney disease, a combination code applies instead. Document the check you made.",
    mistakes: [
      "Assuming unspecified means wrong. It means the documentation did not give more.",
      "Choosing a more specific code than the record supports.",
      "Memorizing a favorite code and skipping verification.",
    ],
    drills: [
      "Code twenty fictional diagnostic statements and record the Index path for each.",
      "For each unspecified result, write what extra documentation would make it specific.",
      "Create a ‘query triggers’ list from your results.",
    ],
    rubric: [
      "The six steps appear in your work.",
      "Specificity matches documentation, not assumption.",
      "Unspecified codes are explained.",
      "Code validity was checked in the current Tabular List.",
    ],
    scenario:
      "The note says ‘back pain’ and the provider notes no other details. What is the correct specificity?",
    answers: [
      "Select a code that implies a cause, such as a disc problem",
      "Use the code for unspecified back pain and consider a query only if more detail would be needed",
      "Do not code the visit",
    ],
    correct: 1,
    why: "A code must reflect what is documented. When detail is missing, the unspecified code is accurate, and a query is optional.",
    taglish:
      "Sundin ang parehong steps palagi: kunin ang diagnosis sa note, hanapin ang main term sa Index, i-verify sa Tabular List, basahin ang notes, at i-check ang guidelines. Kapag walang detalye sa chart, ang unspecified code ang tama at hindi ito kasalanan. Huwag kang pumili ng specific code na wala sa documentation.",
    tip: "Keep a ‘specificity cheat sheet’ for conditions you see often: which words in the note change the code. It speeds you up without letting you guess.",
    mentor:
      "Code ten diagnoses without looking at your earlier answers, then compare and fix any difference.",
    remember: [
      "Index to find, Tabular List to decide.",
      "Unspecified is correct when the chart is unspecified.",
      "Never code a higher specificity than the documentation supports.",
    ],
  },
  {
    title: "Outpatient diagnosis coding guidelines",
    desc: "First-listed diagnosis, uncertain wording, chronic conditions, and when to code symptoms.",
    time: "40 min",
    objectives: [
      "Choose the first-listed diagnosis for an outpatient encounter.",
      "Apply the rule on uncertain diagnoses.",
      "Decide which additional conditions to report.",
    ],
    concept: `<p>Section IV of the ICD-10-CM Official Guidelines covers physician office and other outpatient encounters. The key rules:</p>
<ul>
<li>List first the diagnosis, condition, problem, or reason for the encounter chiefly responsible for the services provided.</li>
<li>Code to the highest degree of certainty known at the end of the encounter. Do not code diagnoses documented as ‘probable,’ ‘suspected,’ ‘questionable,’ ‘rule out,’ ‘compatible with,’ ‘consistent with,’ or ‘working diagnosis’ in outpatient settings. Code the signs, symptoms, or abnormal findings instead.</li>
<li>Code chronic conditions as many times as the patient receives treatment or care for them.</li>
<li>Code all documented conditions that coexist at the time of the encounter and require or affect patient care, treatment, or management. Do not code conditions that were previously treated and no longer exist.</li>
<li>Code a symptom only when no related definitive diagnosis has been established. Symptoms that are routinely part of a confirmed disease are not coded separately.</li>
</ul>
<p>The Guidelines are part of the HIPAA code set standard, so they are followed, not merely suggested.</p>`,
    steps: [
      "Find the reason the patient was seen and the provider's stated reason for the services.",
      "Choose the first-listed diagnosis from that reason.",
      "List other conditions that were evaluated, managed, or affected care.",
      "Check each diagnosis for uncertain wording and convert to symptom codes where required.",
      "Remove symptoms that are integral to a confirmed condition.",
      "Review the order so the first-listed diagnosis supports the primary service.",
    ],
    lab: [
      [
        "Visit for a sore throat with fever. The provider documents ‘viral URI.’ What is the first-listed diagnosis?",
        "The confirmed diagnosis, viral upper respiratory infection (J06.9, acute upper respiratory infection, unspecified, when no further detail is documented). Fever is a symptom integral to the infection and is not coded separately when a definitive diagnosis exists. Verify in the current books.",
      ],
      [
        "Routine blood-pressure recheck for known hypertension. Provider adjusts medication.",
        "I10 (essential hypertension) as first-listed. The condition was managed and treated at the visit.",
      ],
      [
        "Patient reports chest tightness. Provider says ‘possible angina, ordering stress test.’",
        "Do not code angina. Code the documented symptom, such as R07.89 (other chest pain) or R07.9 (chest pain, unspecified), depending on the exact wording. The stress test is the service performed, linked to the symptom.",
      ],
    ],
    case: "A note reads: “Assessment: probable strep throat. Rapid strep test positive.” A coder is unsure whether to code the symptom or the disease.",
    model:
      "‘Probable’ is uncertain, but a positive rapid test is a confirmed result. The provider must interpret and document the diagnosis. If the provider updates the assessment to streptococcal pharyngitis, code it. If the provider keeps ‘probable’ and does not state a confirmed diagnosis, do not infer one from the test. Ask the provider to clarify whether the test confirmed a diagnosis.",
    mistakes: [
      "Coding ‘rule out’ conditions as confirmed.",
      "Inferring a diagnosis from a lab result without provider documentation.",
      "Reporting a symptom that is already explained by a confirmed diagnosis.",
    ],
    drills: [
      "Write the outpatient rules in your own words on one page.",
      "Rewrite five uncertain diagnostic statements into reportable symptom statements.",
      "Make an order-of-listing checklist you can use on every claim.",
    ],
    rubric: [
      "First-listed diagnosis is justified in writing.",
      "Uncertain statements are not coded.",
      "Integral symptoms are removed.",
      "Chronic conditions are included only when relevant to the visit.",
    ],
    scenario:
      "The provider documents ‘rule out diabetes’ and orders an A1C. What is reported?",
    answers: [
      "Diabetes, because testing implies suspicion",
      "The sign, symptom, or reason for testing that is documented, not diabetes",
      "Nothing, because the test is not ready",
    ],
    correct: 1,
    why: "Outpatient guidelines prohibit coding ‘rule out’ conditions. The reason for the test is the documented symptom or encounter reason.",
    taglish:
      "Sa outpatient, i-code mo ang pinakatiyak na alam sa dulo ng visit. Kapag ‘probable,’ ‘suspected,’ ‘rule out,’ o ‘working diagnosis’ ang nakasulat, huwag mong i-code ang sakit; i-code ang sintomas o dahilan ng visit. Ang unang nakalista ay ang dahilan na pinaka-responsable sa service. Huwag ding i-code ang sintomas na bahagi na ng confirmed diagnosis.",
    tip: "Make a small card with the uncertain-diagnosis trigger words. When you see one in an outpatient note, stop and switch to symptom coding.",
    mentor:
      "Take five of your own practice notes and highlight every uncertain word. Rewrite each into what can be coded.",
    remember: [
      "Outpatient: no probable, suspected, or rule-out diagnoses.",
      "First-listed diagnosis is the main reason for the services.",
      "Code chronic conditions when they affect care at that visit.",
    ],
    source:
      "ICD-10-CM Official Guidelines, Section IV (CDC/NCHS). Always read the current fiscal year's edition.",
  },
  {
    title: "Chapter rules that trip people up",
    desc: "Diabetes, hypertension with kidney disease, injuries, neoplasms, and symptom-versus-diagnosis rules.",
    time: "50 min",
    objectives: [
      "Apply combination-code rules for diabetes and hypertension.",
      "Use the 7th character correctly on injury codes.",
      "Navigate the Table of Neoplasms.",
    ],
    concept: `<p>Some conditions combine several facts in a single code. Missing the rule means you either miss a code or report one you should not.</p>
<p><b>Diabetes.</b> Codes E08–E13 include the type, complications, and control status. Use as many codes as needed to describe all complications. The guidelines instruct you to add a status code for long-term insulin (Z79.4), oral hypoglycemics (Z79.84), or injectable non-insulin antidiabetic drugs (Z79.85). If both insulin and oral drugs are used, report both codes unless the guidelines specify otherwise.</p>
<p><b>Hypertension.</b> I10 is for essential hypertension without related conditions. When hypertension and chronic kidney disease are both present, the guidelines <em>presume a causal relationship</em> and direct you to I12.-, with an additional N18.- code for the CKD stage. With heart disease, I11.-; with both, I13.-. The relationship is presumed unless the documentation clearly states they are unrelated.</p>
<p><b>Injuries.</b> Most use a 7th character: <b>A</b> initial encounter (active treatment), <b>D</b> subsequent encounter (routine healing), <b>S</b> sequela (late effect). The 7th character depends on the type of care, not on how many days have passed. A placeholder X may be needed.</p>
<p><b>Neoplasms.</b> Use the Table of Neoplasms in the Index with the documented site and behavior: malignant primary, secondary, in situ, benign, uncertain behavior, or unspecified. Do not choose a column without the pathology or provider's documentation. Personal history of cancer after treatment is a Z85 code, not an active neoplasm code.</p>`,
    steps: [
      "Identify the chapter rule that applies before you search for a code.",
      "For diabetes, list the type, every complication, the control status, and any long-term drug use.",
      "For hypertension, look for kidney or heart disease before settling on I10.",
      "For injuries, determine encounter type (active treatment, healing, sequela), then add the 7th character.",
      "For neoplasms, locate site and behavior in the table, then verify in the Tabular List.",
      "Sequence per the instructional notes and guidelines.",
    ],
    lab: [
      [
        "Documented: “Type 2 diabetes with diabetic chronic kidney disease, stage 3, on insulin.”",
        "E11.22 (type 2 diabetes with diabetic CKD) + N18.30 (CKD stage 3 unspecified; use N18.31 or N18.32 if the stage 3a or 3b is documented) + Z79.4. The ‘use additional code’ note requires the CKD stage code.",
      ],
      [
        "Documented: “Hypertension and chronic kidney disease stage 2.”",
        "I12.9 (hypertensive CKD with stage 1 through 4 or unspecified CKD) + N18.2. The guidelines presume the relationship, so I10 is not used.",
      ],
      [
        "Initial visit for a sprain of the right ankle, active treatment.",
        "S93.401A: sprain of unspecified ligament of right ankle, initial encounter. A is the 7th character for active treatment. Verify the specific ligament if documented.",
      ],
      [
        "Documented: “History of breast cancer, treated and in remission, no current treatment.”",
        "Z85.3 (personal history of malignant neoplasm of breast), not an active breast cancer code.",
      ],
    ],
    case: "A diabetic patient is documented as ‘DM with neuropathy.’ A trainee reports E11.9 (without complications) and a separate neuropathy code.",
    model:
      "The index entry ‘Diabetes, type 2, with neuropathy’ leads to a combination code such as E11.40 (type 2 diabetes with diabetic neuropathy, unspecified) or a more specific code if the documentation says polyneuropathy or another type. E11.9 contradicts the documented complication. Review the exact phrasing and code the combination. Verify in the current book.",
    mistakes: [
      "Using E11.9 when a complication is documented.",
      "Reporting I10 when CKD or heart disease is also documented.",
      "Using ‘A’ for every injury visit regardless of care type.",
      "Coding an active cancer for a personal history.",
    ],
    drills: [
      "Create a diabetes decision table: type, complication, control, drug use.",
      "Write five hypertension scenarios and choose I10, I11, I12, or I13 for each.",
      "Code ten injury statements and justify each 7th character.",
    ],
    rubric: [
      "Combination codes are used where the Index directs.",
      "Status codes are included when documented.",
      "7th characters are justified by encounter type.",
      "History and active disease are not confused.",
    ],
    scenario:
      "A note documents hypertension and chronic kidney disease stage 3. The provider does not state a relationship. What is correct?",
    answers: [
      "Report I10 and N18.30 separately",
      "Use the hypertensive CKD combination code with the stage code, because the guidelines presume the relationship unless it is stated as unrelated",
      "Report only I10",
    ],
    correct: 1,
    why: "The guidelines presume a causal relationship between hypertension and CKD. Use the I12 combination code and the N18 stage code.",
    taglish:
      "May mga condition na may combination code kaya hindi mo sila hiwalay na i-code. Sa diabetes, isama ang complication at ang long-term drug use (Z79.x). Sa hypertension na may CKD, ipinapalagay ng guidelines na magkaugnay sila kaya I12 ang gamitin. Sa injury, A para sa active treatment, D para sa healing visit, S para sa sequela. At ang history ng cancer ay Z85, hindi active cancer.",
    tip: "Whenever the note lists two conditions of the same body system, ask: ‘Is there a combination code or a presumed link?’ before you report them separately.",
    mentor:
      "Build a one-page chapter-rule sheet with one example for diabetes, hypertension, injury, and neoplasm.",
    remember: [
      "Diabetes: complication in one combination code, plus Z79 status codes.",
      "Hypertension + CKD is presumed related: I12.- plus N18.-.",
      "Injury 7th character depends on encounter type, not on the date.",
    ],
    source:
      "ICD-10-CM Official Guidelines, Section I.C (chapter-specific). Check the current year's text before you rely on any example.",
  },
  {
    title: "Z codes, history, status, and social factors",
    desc: "Use Chapter 21 correctly for preventive visits, status, history, and social determinants of health.",
    time: "35 min",
    objectives: [
      "Differentiate history, status, and screening Z codes.",
      "Choose the right code for a routine exam or an immunization visit.",
      "Report social determinants of health when documented.",
    ],
    concept: `<p>Z codes (Z00–Z99) report circumstances other than a disease or injury as the reason for the encounter, or add context to the main diagnosis. Some may be first-listed (for example, a routine exam). Others may only be secondary (for example, status codes). The Tabular List and guidelines tell you which is which.</p>
<p><b>Encounters.</b> Z00.00 is a general adult medical examination without abnormal findings; Z00.01 is the same with abnormal findings, and the finding is coded additionally. Z23 reports an encounter for immunization and is paired with the vaccine and administration procedure codes.</p>
<p><b>History and status.</b> ‘Personal history’ (Z85–Z87) means the condition no longer exists and is not being treated but has potential to recur. ‘Status’ codes show the patient has a device, implant, or long-term drug therapy (Z79.-, Z95.-, Z96.-).</p>
<p><b>Social determinants of health (SDOH).</b> Z55–Z65 capture conditions such as housing instability, food insecurity, and employment problems. The guidelines allow these codes to be assigned from documentation by clinicians other than the provider (for example, social workers or nurses) as long as the information is signed off in the record, and the patient's self-reported information is permitted when signed off by clinician or provider. They support care coordination, quality programs, and risk adjustment.</p>`,
    terms: [
      [
        "Z00.00 / Z00.01",
        "General adult medical exam without / with abnormal findings.",
      ],
      ["Z23", "Encounter for immunization."],
      ["Z79.-", "Long-term (current) drug therapy, such as Z79.4 insulin."],
      ["Z85.-", "Personal history of malignant neoplasm."],
      ["Z87.891", "Personal history of nicotine dependence."],
      ["Z59.41", "Food insecurity."],
      ["Z59.0-", "Homelessness (unspecified, sheltered, or unsheltered)."],
      ["Z60.2", "Problems related to living alone."],
    ],
    steps: [
      "Decide whether the Z code is the reason for the encounter or additional information.",
      "Check the Tabular List for ‘first-listed only’ or ‘secondary only’ instructions.",
      "For preventive visits, confirm whether abnormal findings were found and code them as additional diagnoses.",
      "Add status or history codes only when they are relevant to the care.",
      "Capture SDOH codes when documented and relevant, using the allowed documentation sources.",
    ],
    lab: [
      [
        "Annual adult physical. The provider finds elevated blood pressure and documents ‘elevated blood pressure reading, no diagnosis of hypertension.’",
        "Z00.01 (exam with abnormal findings) first, plus R03.0 (elevated blood-pressure reading, without diagnosis of hypertension). Verify in the current book.",
      ],
      [
        "Patient receives a flu vaccine at a nurse visit. Which diagnosis code?",
        "Z23 (encounter for immunization), reported with the vaccine product code and the administration code per the payer's rules.",
      ],
      [
        "Social worker documents ‘patient reports no stable housing, sleeping at a shelter.’ Is a code supported?",
        "Yes. Z59.01 (sheltered homelessness) can be assigned from documentation by social workers and other clinicians when it is in the record. Verify the exact code and the current guideline text.",
      ],
    ],
    case: "A patient who quit smoking years ago visits for a cough. The note mentions ‘former smoker.’ A trainee wants to code current tobacco dependence.",
    model:
      "‘Former smoker’ supports personal history of nicotine dependence (Z87.891), not current dependence. Report it only if it is relevant to the visit, such as evaluating a cough, and in addition to the symptom or diagnosis that is the reason for the visit.",
    mistakes: [
      "Using a history code for a condition that is still being treated.",
      "Reporting a screening code for a visit that is for a known disease.",
      "Ignoring SDOH information that affects care.",
    ],
    drills: [
      "Sort twenty Z codes into first-listed, secondary-only, or either.",
      "Write three history-versus-active examples and code each.",
      "List which staff roles may document SDOH for coding, per the current guidelines.",
    ],
    rubric: [
      "First-listed versus secondary use is correct.",
      "Abnormal findings are coded in addition.",
      "History and status are separated from active conditions.",
      "SDOH rules are cited from the guidelines.",
    ],
    scenario:
      "A routine physical finds a new abnormal result. Which code reports the encounter reason?",
    answers: [
      "The abnormal result alone",
      "Z00.01 for the exam with abnormal findings, plus the abnormal finding code",
      "Z00.00 because the exam was routine",
    ],
    correct: 1,
    why: "Z00.01 is used when abnormal findings are found at a routine exam, and the finding is coded additionally.",
    taglish:
      "Ang Z codes ay para sa circumstances na hindi mismong sakit: routine exam, bakuna, history, status, at social factors. Ang history ay tapos na at wala nang gamutan; ang status ay may device o long-term gamot. Sa routine exam, Z00.00 kung normal, Z00.01 kung may abnormal finding at i-code mo rin ang finding. Importante rin ang SDOH gaya ng housing at food insecurity kapag nakasulat sa chart.",
    tip: "Z codes explain the context of care. They rarely stand alone on a problem-focused visit, but they often improve how complete and accurate the claim is.",
    mentor:
      "Make a mini glossary of eight Z codes you will see most, with a one-line rule for each.",
    remember: [
      "Z00.00 normal exam, Z00.01 abnormal findings found, Z23 immunization.",
      "History means resolved. Status means ongoing therapy or device.",
      "SDOH codes can come from documented clinician or patient-reported information per the guidelines.",
    ],
  },
]);
