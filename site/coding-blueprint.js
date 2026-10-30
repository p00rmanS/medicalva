// Coding track: exam blueprint map, ICD-10-CM general guidelines, and CPT conventions.
addCodingLessons([
  {
    title: "The CPC exam blueprint: what is tested and where to study it",
    desc: "The AAPC exam domains with their question counts, a map to the lessons in this course, and a study allocation based on where the points are.",
    time: "50 min",
    objectives: [
      "Recall the domains and question counts of the AAPC CPC exam.",
      "Map each domain to the lessons that prepare you for it.",
      "Allocate study time by points available and by your own weak areas.",
    ],
    concept: `<p>AAPC's published outline for the CPC exam (checked on its website in October 2026; always confirm the current version) has <b>100 multiple-choice questions</b> in <b>four hours</b> in one sitting, and you need <b>70 correct</b> to pass. You may use the current AMA CPT Professional edition, the current ICD-10-CM book (any publisher), and the current HCPCS Level II book (any publisher), one copy of each, printed or electronic. An online calculator is provided. AAPC also notes that the credential requires a solid grounding in medical terminology, anatomy, and pathophysiology. To maintain it you keep an AAPC membership and earn 36 continuing education units every two years.</p>
<table class="ref-table"><thead><tr><th>Domain</th><th>Questions</th><th>Where to study it here</th></tr></thead><tbody>
<tr><td>Medical terminology</td><td>4</td><td>Medical terminology and the six ‘Medical language in depth’ lessons</td></tr>
<tr><td>Anatomy</td><td>4</td><td>Anatomy and body systems for coders, and the body-system lessons</td></tr>
<tr><td>Compliance and regulatory</td><td>3</td><td>Compliance lessons, Medicare in depth, HIPAA lessons</td></tr>
<tr><td>Coding guidelines</td><td>7</td><td>ICD-10-CM guidelines lessons, CPT conventions, modifiers, NCCI</td></tr>
<tr><td>ICD-10-CM</td><td>5</td><td>All ICD-10-CM lessons and practice sets A, D, and E</td></tr>
<tr><td>HCPCS Level II</td><td>3</td><td>HCPCS lessons, including DME and ambulance</td></tr>
<tr><td>CPT 10000 series</td><td>6</td><td>Skin procedures, breast, and the integumentary subsection</td></tr>
<tr><td>CPT 20000 series</td><td>6</td><td>Fracture care, injections, and musculoskeletal surgery</td></tr>
<tr><td>CPT 30000 series</td><td>6</td><td>Respiratory, cardiovascular, and hemic and lymphatic surgery</td></tr>
<tr><td>CPT 40000 series</td><td>6</td><td>Digestive surgery</td></tr>
<tr><td>CPT 50000 series</td><td>6</td><td>Urinary, genital, and maternity surgery</td></tr>
<tr><td>CPT 60000 series</td><td>6</td><td>Endocrine, nervous, eye, and ear surgery</td></tr>
<tr><td>Radiology</td><td>6</td><td>Imaging lessons</td></tr>
<tr><td>Pathology and laboratory</td><td>6</td><td>Laboratory and pathology lessons</td></tr>
<tr><td>Medicine</td><td>6</td><td>Medicine section lessons, immunizations, psychiatry, cardiology tests</td></tr>
<tr><td>E/M</td><td>6</td><td>E/M lessons and the MDM deep dive</td></tr>
<tr><td>Anesthesia</td><td>4</td><td>Anesthesia coding basics</td></tr>
<tr><td>Cases</td><td>10</td><td>Case practice sets and the complete-encounter lessons</td></tr>
</tbody></table>
<p>The six surgery series together are worth <b>36 questions</b>, the largest block. The ‘cases’ questions combine several domains in one scenario. A passing strategy does not require perfection: 70 correct means you can miss 30. But a weak area is expensive. Missing most of a six-question domain costs several points.</p>`,
    steps: [
      "Score yourself honestly on each domain from 1 (new to me) to 5 (confident).",
      "Multiply the gap (5 minus your score) by the number of questions in the domain to find where you lose the most.",
      "Schedule weekly study blocks in proportion to that number, with the largest block going to the surgery series.",
      "After each block, take a short timed set from that domain and log the misses.",
      "Every two weeks, take a mixed set and compare your totals with the 70-point target.",
      "In the last two weeks, practice the full 100-question format against a four-hour clock.",
    ],
    lab: [
      [
        "Your self-scores are: E/M 4, anesthesia 2, CPT 40000 series 1, radiology 3. Which domain deserves the most study time?",
        "Weighted gap = (5 − score) × questions. E/M: 1 × 6 = 6. Anesthesia: 3 × 4 = 12. CPT 40000: 4 × 6 = 24. Radiology: 2 × 6 = 12. The 40000 series (digestive) is the largest gap.",
      ],
      [
        "How many questions can you miss and still pass a 100-question exam with a 70 percent threshold?",
        "30. You need at least 70 correct.",
      ],
      [
        "About how many minutes per question does a four-hour exam allow for 100 questions?",
        "240 ÷ 100 = 2.4 minutes per question on average. Cases may take longer, so move quickly on easy items.",
      ],
      [
        "A friend says you only need the CPT book on exam day. What is missing from that advice?",
        "The exam allows and expects the current ICD-10-CM and HCPCS Level II books as well. Bring all three, with only one copy of each.",
      ],
    ],
    case: "A learner spends six weeks on E/M and nothing on surgery because E/M feels familiar.",
    model:
      "E/M is six questions. The six surgery series are 36. Rebalance the plan: keep E/M review short, then spend most blocks on the 10000 through 60000 series, starting with the series where the self-score is lowest. Use timed sets from each series to confirm progress.",
    mistakes: [
      "Studying only what feels comfortable.",
      "Ignoring ‘cases,’ which mix domains.",
      "Not practicing with the same books you will use on exam day.",
    ],
    drills: [
      "Copy the domain table into your own notes and fill in your score and gap for each domain.",
      "Build an eight-week study calendar that weights the surgery series.",
      "Take a 20-question mixed set against a 48-minute clock and log your domain-by-domain misses.",
    ],
    rubric: [
      "Domains and counts are recalled correctly.",
      "The plan weights points and weak areas.",
      "Materials match what the exam allows.",
      "Progress is measured by timed sets.",
    ],
    scenario: "How many CPC exam questions must you answer correctly to pass?",
    answers: ["70", "60", "80"],
    correct: 0,
    why: "AAPC's published outline requires 70 correct out of 100 questions.",
    taglish:
      "Ang CPC exam ay may 100 multiple-choice na tanong sa loob ng apat na oras at kailangan mong makakuha ng 70 tama para pumasa. Puwede mong gamitin ang kasalukuyang CPT, ICD-10-CM, at HCPCS Level II na libro. Ang pinakamalaking bahagi ay ang anim na CPT surgery series na may 36 tanong sa kabuuan, kaya doon ilaan ang karamihan ng oras. Gumawa ng study plan ayon sa puntos at sa mahina mong lugar.",
    tip: "Make a one-page tracker with the 18 domains and a column for your last timed score in each. Whatever is lowest times its question count is your next study block.",
    mentor:
      "Share your tracker with a study partner and review it together every Sunday.",
    remember: [
      "100 questions, four hours, 70 correct to pass, with the three current code books allowed.",
      "The six CPT surgery series total 36 questions, the biggest block.",
      "Study by points available and by your own weak areas.",
    ],
    source:
      "AAPC, ‘Taking the CPC Exam’ and CPC credential pages (aapc.com). Counts and rules can change; confirm before you plan.",
  },
  {
    title:
      "ICD-10-CM general guidelines in depth: Section I.B rules every coder uses",
    desc: "The general coding rules for signs and symptoms, integral conditions, combination codes, acute and chronic, sequela, laterality, borderline diagnoses, and documentation by other clinicians.",
    time: "70 min",
    objectives: [
      "Apply the general guideline rules in the order a coder meets them.",
      "Distinguish integral symptoms from symptoms that deserve their own codes.",
      "Handle sequela, laterality, complications of care, and borderline diagnoses.",
    ],
    concept: `<p>Section I of the ICD-10-CM Official Guidelines has conventions (I.A), general coding guidelines (I.B), and chapter-specific guidelines (I.C). Section I.B holds the rules you will apply to almost every chart. The guidelines are updated each fiscal year, so verify the current wording. This lesson paraphrases the main topics in the order they appear.</p>
<ul>
<li><b>Locate the code.</b> Start in the Alphabetic Index, then verify in the Tabular List. Never code from the Index alone.</li>
<li><b>Level of detail.</b> Report the code with the highest number of characters available. A code is invalid if a more specific code exists.</li>
<li><b>Signs and symptoms.</b> Report them when no related definitive diagnosis has been established.</li>
<li><b>Integral conditions.</b> Signs and symptoms routinely associated with a disease are not coded separately. Signs and symptoms not routinely associated with the disease are coded in addition.</li>
<li><b>Multiple coding.</b> ‘Code first,’ ‘use additional code,’ and ‘code also’ notes tell you to report more than one code and in what order.</li>
<li><b>Acute and chronic.</b> When a condition is both acute and chronic and the Index has separate entries, code both, with the acute first.</li>
<li><b>Combination codes.</b> Use a combination code when the classification provides one that fully describes the conditions. Code the elements separately only when the combination code does not fully capture them.</li>
<li><b>Sequela (late effects).</b> Code the condition or nature of the sequela first and the sequela code, with 7th character S, second. Do not code the acute injury for the late effect.</li>
<li><b>Impending or threatened conditions.</b> If the condition did occur, code it as confirmed. If it did not, look for an Index entry for impending or threatened, and otherwise code the underlying condition or a risk Z code if documented.</li>
<li><b>Same code more than once.</b> Report each unique diagnosis code once per encounter, even if documented in several places.</li>
<li><b>Laterality.</b> Use the bilateral code when both sides are affected. When the side is not documented, use the unspecified-side code. When a condition affects both sides but there is no bilateral code, report the left and right codes.</li>
<li><b>Documentation by other clinicians.</b> Certain facts may come from clinicians who are not the patient's provider: BMI, depth of non-pressure chronic ulcers, pressure ulcer stage, coma scale scores, NIH stroke scale scores, social determinants of health, laterality, blood alcohol level, and underimmunization status. The associated diagnosis must still come from the provider.</li>
<li><b>Syndromes.</b> Follow the Index entry for the syndrome. If none exists, code the documented manifestations.</li>
<li><b>Complications of care.</b> Code a complication only when the provider documents a relationship between the condition and the care or procedure. The wording must show cause and effect, not just a sequence in time.</li>
<li><b>Borderline diagnosis.</b> If the provider documents ‘borderline,’ code it as confirmed unless the Index has a specific entry (such as borderline diabetes mellitus). Unlike ‘probable,’ it is not an uncertain diagnosis.</li>
<li><b>Sign, symptom, and unspecified codes.</b> It is appropriate to report them when a definitive diagnosis has not been established by the end of the encounter, and unspecified codes when they most accurately reflect what is known at that encounter.</li>
</ul>`,
    terms: [
      [
        "Integral symptom",
        "A symptom routinely part of a disease. Not coded separately.",
      ],
      [
        "Combination code",
        "One code that describes two or more conditions or a condition and its manifestation.",
      ],
      [
        "Sequela",
        "A late effect of an earlier condition. Coded with 7th character S for injuries.",
      ],
      ["Impending or threatened", "A condition that has not yet occurred."],
      [
        "Borderline diagnosis",
        "A documented ‘borderline’ condition, coded as confirmed unless the Index says otherwise.",
      ],
      [
        "Complication of care",
        "A condition the provider documents as resulting from care or a procedure.",
      ],
    ],
    steps: [
      "Read the full note and list the diagnoses with their wording.",
      "For each, find the Index entry and verify in the Tabular List.",
      "Apply the I.B rules in order: specificity, integral symptoms, multiple coding, acute and chronic, combination, sequela, laterality.",
      "Check who documented each fact. Diagnoses must come from the provider.",
      "Remove duplicates and confirm the order using the notes and the reason for the encounter.",
      "Write one line in your coding note for any rule that changed the answer.",
    ],
    lab: [
      [
        "A patient has acute bronchitis with a cough, which is documented as part of the illness.",
        "Code the acute bronchitis only (J20.9 if unspecified). The cough is integral to bronchitis.",
      ],
      [
        "A patient with a confirmed diagnosis of diabetes also has a foot ulcer.",
        "The foot ulcer is not routine for all diabetes, and a combination code exists for diabetes with foot ulcer (E11.621) with an additional code for the ulcer site and depth.",
      ],
      [
        "A patient is seen for right knee pain years after a fracture that has healed, and the provider documents it as a late effect of the fracture.",
        "Report the knee pain or documented condition first, then the fracture code with 7th character S (sequela). Do not use the 7th characters A or D.",
      ],
      [
        "The provider documents ‘borderline hypertension.’",
        "Check the Index for ‘borderline’ entries. If none directs otherwise, the borderline diagnosis is coded as confirmed; if the Index says something else (for example elevated blood pressure reading), follow it.",
      ],
      [
        "A nurse documents a stage 3 pressure ulcer but the provider's note never names the ulcer.",
        "The stage can come from the nurse, but the provider must document the diagnosis. Send a non-leading query.",
      ],
      [
        "A note says ‘infection at the surgical site after hernia repair, due to the surgery.’",
        "The provider documented the cause-and-effect relationship, so a complication code is supported. Without that wording a complication code is not assigned.",
      ],
      [
        "The same diagnosis, hypertension, appears in the history, assessment, and plan.",
        "Report I10 (or the correct code) once for the encounter.",
      ],
    ],
    case: "A coder lists cough, fever, and shortness of breath as separate codes in addition to a confirmed diagnosis of pneumonia.",
    model:
      "Cough, fever, and shortness of breath are routinely associated with pneumonia, so they are integral and not coded separately. Report pneumonia with the specificity documented. Only symptoms not routinely associated with pneumonia and addressed at the visit would be coded additionally.",
    mistakes: [
      "Coding integral symptoms in addition to a confirmed diagnosis.",
      "Coding a complication only because an event followed a procedure.",
      "Taking a diagnosis from nursing documentation.",
      "Reporting the same code twice.",
    ],
    drills: [
      "Write each I.B topic in your own words with a one-line example.",
      "Code ten fictional statements that each test one I.B rule.",
      "Make a one-page checklist to run on every chart before finalizing codes.",
    ],
    rubric: [
      "Each rule is stated accurately.",
      "Integral and non-integral symptoms are separated.",
      "The source of each documented fact is checked.",
      "The checklist is complete and usable.",
    ],
    scenario:
      "A symptom is routinely associated with a confirmed disease. How is it coded?",
    answers: [
      "It is not coded separately",
      "It is coded in addition to the disease",
      "It is coded first",
    ],
    correct: 0,
    why: "Signs and symptoms routinely associated with a disease process are integral to it and are not reported separately.",
    taglish:
      "Ang Section I.B ng Official Guidelines ay mga pangkalahatang tuntunin na gagamitin mo sa halos bawat chart. Huwag i-code ang sintomas na bahagi na ng kumpirmadong sakit. Kapag acute at chronic at may magkahiwalay na entry, i-code pareho at acute muna. Sa sequela, ang kondisyon muna at ang sequela code na may 7th character S ang pangalawa. Ang diagnosis ay laging galing sa provider, kahit ang BMI o stage ay puwedeng kunin sa ibang clinician.",
    tip: "Keep the checklist short: specificity, integral symptoms, notes, acute versus chronic, combination, sequela, side, source. Run it every time.",
    mentor: "Teach three of the rules to a partner using your own examples.",
    remember: [
      "Integral symptoms are not coded separately. Non-routine symptoms are.",
      "Sequela: condition first, then the sequela code with 7th character S.",
      "Some facts, such as BMI and ulcer stage, may come from other clinicians, but the diagnosis must come from the provider.",
    ],
    source:
      "ICD-10-CM Official Guidelines for Coding and Reporting, Section I.B (CDC/NCHS). Verify the current fiscal year's wording.",
  },
  {
    title: "CPT guidelines and conventions in depth",
    desc: "Unlisted codes, special reports, separate procedures, the surgical package, add-on and sedation rules, and how to read the book before you code.",
    time: "60 min",
    objectives: [
      "Explain the surgical package and what it includes.",
      "Use unlisted procedure codes and special reports correctly.",
      "Apply moderate sedation, add-on, and ‘separate procedure’ conventions.",
    ],
    concept: `<p>CPT conventions are the rules built into the book's structure. Learning them is as important as memorizing codes, because the exam and real claims reward careful reading.</p>
<ul>
<li><b>Surgical package.</b> A CPT surgical code includes the operation, local or topical anesthesia, and the usual immediate preoperative and postoperative care related to the procedure. Payers define the length of the global period. Complications and unrelated services may be reported separately with the right modifier.</li>
<li><b>Separate procedure.</b> A code labeled ‘separate procedure’ is usually part of a more extensive procedure. Report it only when it is performed alone or unrelated to the other procedures at the session.</li>
<li><b>Unlisted procedures.</b> When no specific code exists, report the unlisted code for the section (codes usually ending in 99 or 999, such as 21499 or 64999). Submit a description and, when needed, a <b>special report</b> with the nature, extent, and need of the procedure, the time, effort, and equipment, and comparison to a similar code. Payers price unlisted codes by report.</li>
<li><b>Add-on codes</b> are marked with a plus sign and are reported only with a primary procedure. They are exempt from the multiple procedure reduction when marked.</li>
<li><b>Moderate (conscious) sedation.</b> When the same physician who performs the procedure also provides moderate sedation, report 99152 (patient age 5 or older, first 15 minutes of intraservice time) with 99153 for each additional 15 minutes, or 99151 for patients younger than 5. A separate provider providing sedation uses the 99155–99157 family. Sedation codes depend on documented intraservice time. Some procedures include moderate sedation by definition and are marked with a symbol.</li>
<li><b>Parenthetical notes</b> such as ‘Use in conjunction with…,’ ‘Do not report with…,’ and ‘Code also…’ are part of the instruction.</li>
<li><b>Modifier 51</b> exempt codes and the symbol that marks them.</li>
<li><b>By report</b> means payment depends on the documentation submitted rather than a fixed fee.</li>
<li><b>Section guidelines</b> at the start of each section define terms (such as how to measure a wound or what counts as a complete bronchoscopy) and are binding.</li>
</ul>`,
    terms: [
      [
        "Surgical package",
        "Procedure plus usual related pre-operative and post-operative care and local anesthesia.",
      ],
      [
        "Separate procedure",
        "A code not reported with a related, more comprehensive procedure at the same session.",
      ],
      [
        "Unlisted procedure",
        "A code used when no specific CPT code describes the service.",
      ],
      [
        "Special report",
        "A written explanation that supports an unlisted or unusual service.",
      ],
      [
        "Intraservice time",
        "The time from the start of the procedure to its end, used for sedation codes.",
      ],
      ["By report", "Payment determined by the report submitted."],
    ],
    steps: [
      "Read the section guidelines and the code's parenthetical notes before choosing a code.",
      "Search for a specific code first. Use an unlisted code only if none fits.",
      "For an unlisted code, prepare a description and a special report comparing the service to a similar code.",
      "Check whether the code is an add-on, a separate procedure, or modifier 51 exempt.",
      "If sedation was provided by the operating physician, record intraservice time and choose the sedation code for the age and time.",
      "Confirm the payer's global period and what the package includes.",
    ],
    lab: [
      [
        "A physician performs a new technique for which no specific code exists.",
        "Report the unlisted code for that section and attach a description and special report comparing it to a similar procedure and explaining time, effort, and need.",
      ],
      [
        "A physician performs a procedure and gives moderate sedation to an 8-year-old for 28 minutes of intraservice time.",
        "99152 for the first 15 minutes and 99153 for each additional 15 minutes (the second period is complete when the midpoint is passed). Confirm the time rule in the book, and that the procedure does not include sedation by definition.",
      ],
      [
        "A code is marked ‘separate procedure’ and the physician performs it during a larger related procedure in the same area.",
        "Do not report it separately. It is part of the larger procedure.",
      ],
      [
        "A parenthetical note under a code says ‘Do not report with’ another listed code.",
        "Follow the note. The two codes are not reported together, so check which one the documentation supports.",
      ],
    ],
    case: "A new coder finds a service that seems close to two existing codes and picks the one that pays better.",
    model:
      "Do not choose by payment. Compare the full descriptors and the documentation. If neither fits, use the unlisted code with a special report that compares the service to the closest code. If one fits, report it. Document the comparison in the coding note.",
    mistakes: [
      "Using an unlisted code when a specific code exists.",
      "Reporting a separate procedure with a related larger procedure.",
      "Ignoring parenthetical notes.",
      "Reporting sedation without documented time.",
    ],
    drills: [
      "List ten conventions in the front matter of your CPT book and explain each.",
      "Write a sample special report for a fictional new procedure.",
      "Find three ‘separate procedure’ codes and decide when they are reportable.",
    ],
    rubric: [
      "Conventions are explained accurately.",
      "Unlisted code use is justified.",
      "Parenthetical notes are applied.",
      "Time rules are documented for sedation.",
    ],
    scenario: "When should an unlisted procedure code be used?",
    answers: [
      "Only when no specific CPT code describes the service",
      "Whenever a specific code pays less",
      "For every new patient",
    ],
    correct: 0,
    why: "An unlisted code is a last resort for services no specific code describes, and it needs a description and often a special report.",
    taglish:
      "Ang CPT conventions ay mga tuntunin na nasa istruktura mismo ng libro. Ang surgical package ay kasama ang operasyon, lokal na anesthesia, at karaniwang pre- at post-op care. Ang ‘separate procedure’ ay hindi i-re-report kasama ng mas malaking kaugnay na procedure. Gamitin ang unlisted code lang kapag wala talagang tiyak na code, at magsama ng special report. Basahin ang parenthetical notes at section guidelines bago pumili ng code.",
    tip: "Read the parenthetical notes before you read the code number. They tell you what not to report with it.",
    mentor: "Pick five codes at random and explain their notes aloud.",
    remember: [
      "The surgical package includes the operation, local anesthesia, and usual related care.",
      "Unlisted codes need a description and often a special report.",
      "Parenthetical notes and section guidelines are binding.",
    ],
    source:
      "AMA CPT Professional edition: introduction, section guidelines, and conventions. Verify against the current edition.",
  },
]);
