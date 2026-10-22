// Coding track, section 3: CPT and HCPCS procedure and service coding.
// CPT is copyrighted by the AMA. These lessons paraphrase concepts and cite code numbers only.
addCodingLessons([
  {
    title: "CPT structure, symbols, and guidelines",
    desc: "Navigate the CPT book: categories, sections, symbols, parenthetical notes, and section guidelines.",
    time: "40 min",
    objectives: [
      "Describe the three CPT categories and the six main sections.",
      "Recognize the common symbols in the code book.",
      "Use section guidelines and parenthetical notes before choosing a code.",
    ],
    concept: `<p>CPT (Current Procedural Terminology) is published and copyrighted by the American Medical Association. You need a current edition from a licensed source for real coding. These lessons discuss structure and use code numbers only as examples.</p>
<p>The main sections and their ranges, in order of the book's layout, are Evaluation and Management (99202–99499), Anesthesia (00100–01999), Surgery (10004–69990), Radiology (70010–79999), Pathology and Laboratory (80047–89398), and Medicine (90281–99607). Category II (four digits plus F) and Category III (four digits plus T) codes follow the main sections.</p>
<p>Each section begins with <b>guidelines</b>: definitions, rules for reporting, and notes about what is and is not included. Read them. They are binding for how you use the codes below them. <b>Parenthetical notes</b> beneath a code often tell you what not to report together or which other code to use.</p>`,
    terms: [
      [
        "Category I",
        "Five-digit numeric codes for established procedures and services.",
      ],
      [
        "Category II",
        "Optional supplemental tracking codes for quality measures (four digits + F).",
      ],
      [
        "Category III",
        "Temporary codes for emerging technology (four digits + T).",
      ],
      ["● Bullet", "A new code added this edition."],
      ["▲ Triangle", "A code whose description has been revised."],
      [
        "+ Plus",
        "An add-on code, reported only with a primary procedure code.",
      ],
      [
        "⊘ Circle with slash",
        "Modifier 51 exempt: not a reduced-payment multiple procedure code.",
      ],
      [
        "★ Star",
        "Service may be furnished via synchronous telemedicine, per CPT.",
      ],
      [
        "Separate procedure",
        "A service that is usually part of a larger procedure; report it alone only when done independently.",
      ],
    ],
    steps: [
      "Identify the section from the type of service (E/M, surgery, radiology, lab, medicine).",
      "Read the section guidelines for definitions and reporting rules.",
      "Use the Index to find a main term (procedure, organ, condition, or eponym).",
      "Verify the full code descriptor in the body of the book. Read symbols and parenthetical notes.",
      "Choose the code that matches the documented service completely, not just partly.",
      "Check for add-on codes or modifiers that the note requires.",
    ],
    case: "A trainee picks a code from the Index without reading the parenthetical note below it. The note says the code is reported only with another code.",
    model:
      "The plus symbol or note marks an add-on code. It cannot be reported alone. Confirm the primary procedure was performed and documented. If so, report the primary code first and the add-on second. If the primary code is not supported, the add-on is not reportable. Record the check you made.",
    mistakes: [
      "Picking a code from the Index without reading the full descriptor.",
      "Skipping the section guidelines.",
      "Reporting an add-on code without its primary code.",
      "Copying CPT descriptions into public documents.",
    ],
    drills: [
      "Write the six sections with ranges on one card and quiz yourself.",
      "Find five codes with different symbols in the book and explain each symbol.",
      "Write a checklist: Index, descriptor, guidelines, notes, modifiers.",
    ],
    rubric: [
      "Sections and ranges are correct for the current edition.",
      "Symbols are interpreted correctly.",
      "Parenthetical notes were applied.",
      "No CPT text is republished.",
    ],
    scenario: "A code has a plus sign in front of it. What does that mean?",
    answers: [
      "The code is new this year",
      "It is an add-on code that must be reported with a primary procedure",
      "It is a payment bonus",
    ],
    correct: 1,
    why: "A plus sign marks an add-on code, which describes additional work and is reported only with a primary code.",
    taglish:
      "Ang CPT ay galing sa AMA at may copyright. May anim na main sections: E/M, Anesthesia, Surgery, Radiology, Pathology/Lab, at Medicine. Basahin mo ang guidelines sa umpisa ng section at ang parenthetical notes sa ilalim ng code. Ang plus sign ay add-on code na hindi puwedeng mag-isa. Huwag mong i-post ang buong CPT description sa public.",
    tip: "Tab the six sections and write the guideline page numbers on the cover. You will use guidelines more than you expect.",
    mentor:
      "Open the book to a random code and explain every symbol and note around it in plain Taglish.",
    remember: [
      "Six main sections, Category I–III, and symbols tell you how to report a code.",
      "Read the guidelines and parenthetical notes before choosing.",
      "Add-on codes (+) never stand alone.",
    ],
    source:
      "AMA CPT Professional edition. Use a licensed, current copy for real coding.",
  },
  {
    title: "Evaluation and Management (E/M) basics",
    desc: "Office visit codes, new versus established patients, and the 2021 rules that changed how visits are leveled.",
    time: "45 min",
    objectives: [
      "Choose between new and established patient codes.",
      "Level an office visit using medical decision making (MDM) or total time.",
      "Know what history and exam do and do not contribute.",
    ],
    concept: `<p>E/M codes describe the provider's cognitive work: evaluating a patient, deciding what is wrong, and deciding what to do. Office and other outpatient codes are 99202–99205 (new patient) and 99211–99215 (established patient). A patient is <b>new</b> if they have not received professional services from the same physician or another provider of the same specialty and subspecialty in the same group practice within the past three years.</p>
<p>Since 2021, office visit levels (except 99211) are selected by either <b>MDM</b> or <b>total time on the date of the encounter</b>. History and exam are documented as medically appropriate, but they no longer determine the level.</p>
<p><b>MDM</b> has three elements: the number and complexity of problems addressed, the amount and complexity of data reviewed and analyzed, and the risk of complications or management. The level is supported when <b>two of the three</b> elements meet or exceed it. The levels are straightforward, low, moderate, and high.</p>
<table class="ref-table"><thead><tr><th>Level</th><th>New</th><th>Established</th><th>MDM</th><th>Minimum total time</th></tr></thead><tbody>
<tr><td>1</td><td>—</td><td>99211</td><td>May not require a provider</td><td>—</td></tr>
<tr><td>2</td><td>99202</td><td>99212</td><td>Straightforward</td><td>15 / 10 min</td></tr>
<tr><td>3</td><td>99203</td><td>99213</td><td>Low</td><td>30 / 20 min</td></tr>
<tr><td>4</td><td>99204</td><td>99214</td><td>Moderate</td><td>45 / 30 min</td></tr>
<tr><td>5</td><td>99205</td><td>99215</td><td>High</td><td>60 / 40 min</td></tr>
</tbody></table>
<p class="small">Time shown as new / established; the thresholds are minimums as of the current CPT edition. Verify the current book each year.</p>`,
    terms: [
      [
        "Problems addressed",
        "Conditions the provider evaluated or managed at the visit. A listed condition that was not addressed does not count.",
      ],
      [
        "Data",
        "Tests ordered or reviewed, external notes reviewed, independent historian, discussion with another professional, independent interpretation.",
      ],
      [
        "Risk",
        "Risk of complications or morbidity from management, such as prescription drug management or a decision about surgery.",
      ],
      [
        "Total time",
        "Provider time on the date of the encounter, including both face-to-face and non-face-to-face work. It excludes separately reported services and clinical staff time.",
      ],
      ["Prescription drug management", "A common example of moderate risk."],
    ],
    steps: [
      "Determine whether the patient is new or established using the three-year rule.",
      "Decide whether you will level by MDM or time, based on what is documented.",
      "For MDM, rate each of the three elements and find the level that at least two meet.",
      "For time, confirm the note states total time on the date and describes what the time covered.",
      "Select the code and check for add-ons or modifiers (such as 25).",
      "Link diagnoses that support the visit.",
    ],
    case: "A note for an established patient lists three chronic conditions in a template, but the narrative discusses only a blood pressure medication change. No time is documented.",
    model:
      "Problems addressed: one chronic condition (hypertension) managed. Template-listed conditions that were not addressed do not count. Risk: prescription drug management is moderate. Level by MDM: problems may be low or moderate depending on whether the hypertension is stable or not at goal and whether more than one stable chronic illness was addressed; data is minimal. Two of three elements must meet the level. Query if the provider addressed the other conditions. Do not level on template text alone.",
    mistakes: [
      "Leveling by the number of bullet points in history and exam.",
      "Counting conditions that appear in the note but were not addressed.",
      "Using time that includes separately billed procedures or staff time.",
      "Treating a new patient and an established patient the same.",
    ],
    drills: [
      "Write the three MDM elements and their level descriptors from memory, then check.",
      "Level five fictional visits by MDM and then by time and compare the results.",
      "Write a sample provider time statement that would be sufficient for coding.",
    ],
    rubric: [
      "New versus established is correct.",
      "Two of three MDM elements are justified.",
      "Time statements follow the rules.",
      "Unaddressed conditions are not counted.",
    ],
    scenario:
      "A visit meets moderate for problems and risk but only minimal for data. What MDM level is supported?",
    answers: [
      "Minimal, because data is minimal",
      "Moderate, because two of three elements meet moderate",
      "High, because it is a complex patient",
    ],
    correct: 1,
    why: "The level is determined by the highest level met or exceeded by at least two of the three MDM elements.",
    taglish:
      "Para sa office visit, puwede mong i-level ang E/M sa MDM o sa total time. Hindi na history at exam ang basehan. May tatlong parts ang MDM: problems, data, at risk, at kailangan ay dalawa sa tatlo ang umabot sa level. Bilangin lang ang problem na na-address talaga sa visit, hindi ang lahat ng nasa template. At tandaan ang new patient: hindi nakita ng parehong specialty sa group sa nakaraang tatlong taon.",
    tip: "Highlight the provider's words that show each element. If you cannot highlight support for an element, it does not count.",
    mentor:
      "Create an MDM grid on one page and rate three practice visits aloud, explaining why two of three decide the level.",
    remember: [
      "Office E/M is leveled by MDM (2 of 3 elements) or total time.",
      "Only problems actually addressed count.",
      "New patient means no service from the same specialty in the group within three years.",
    ],
    source:
      "AMA CPT E/M guidelines. Time thresholds and MDM tables change with each edition; check the current book.",
  },
  {
    title: "Level an office visit: worked E/M examples",
    desc: "Practice MDM and time leveling on realistic fictional visits, including cases where tests are billed separately.",
    time: "50 min",
    objectives: [
      "Apply the two-of-three rule on realistic notes.",
      "Avoid double-counting tests the practice also bills.",
      "Document the reasoning behind each level.",
    ],
    concept: `<p>Leveling is a skill that improves with repetition. For each visit, rate problems, data, and risk separately, then find the level that two of the three support. Read documentation for what the provider did, not what a template says.</p>
<p>Some reminders: ordering a test includes reviewing the result, and the work is counted once. If the practice performs and bills the test itself, the ordering and review of that test do not also count toward the E/M data. Prescription drug management is a standard example of moderate risk. Discussion with an external provider or review of external notes can add to data.</p>
<p>The code ranges and thresholds you saw earlier are the same. This lesson is practice.</p>`,
    steps: [
      "Rate the problems addressed: minimal, low, moderate, or high.",
      "Rate the data: none or minimal, limited, moderate, or extensive.",
      "Rate the risk of management.",
      "Find the level supported by two of three.",
      "If time is documented, compute the time level as a cross-check and choose the more supportable method.",
      "Write the reasoning in one sentence for the audit file.",
    ],
    lab: [
      [
        "Established patient. Type 2 diabetes, hypertension, and hyperlipidemia are all stable. Provider renews three prescriptions and orders an A1c and lipid panel sent to an outside lab. Total time not documented.",
        "Problems: two or more stable chronic illnesses = moderate. Risk: prescription drug management = moderate. Data: two unique tests ordered = limited. Two of three meet moderate, so 99214. Diagnoses: E11.9, I10, E78.5 (add Z79.84 if an oral antidiabetic is documented).",
      ],
      [
        "New patient. Acute sore throat, no systemic symptoms. Rapid strep performed in the office and billed. Positive. Antibiotic prescribed. Total time not documented.",
        "Problems: acute uncomplicated illness = low. Data: the rapid strep is billed separately, so it does not count toward data (minimal). Risk: prescription drug management = moderate. Only risk reaches moderate. The highest level supported by two of three is low, so 99203. The rapid strep is reported separately (87880, QW if the test is CLIA-waived and the payer requires it). Diagnosis J02.0.",
      ],
      [
        "Established patient. A 28-minute visit in which the provider spends 12 minutes on a chart review earlier the same day and 16 minutes with the patient. Total time on the date is documented as 28 minutes. Problems and risk are low.",
        "By MDM the level is low, 99213. By time, 28 minutes meets the 20-minute threshold of 99213 but not the 30-minute threshold of 99214. Both methods support 99213.",
      ],
      [
        "Established patient. Total time documented as 12 minutes. One stable chronic condition, no change in treatment, no tests ordered. Level?",
        "Problems: one stable chronic illness = low. Data: minimal. Risk: minimal. Only the problems element reaches low, so the supported MDM level is straightforward: 99212. Time also supports 99212, because 12 minutes meets the 10-minute threshold but not the 20 minutes needed for 99213. Both methods agree.",
      ],
    ],
    case: "A provider asks why an obviously busy visit was coded 99213 rather than 99214.",
    model:
      "Show the grid: problems and risk are low, data is minimal, and no time statement is documented. Explain that the level follows documentation of what was done and that the provider can add detail if more work was performed and not recorded. Do not suggest what to write. Offer education on documenting time and MDM elements.",
    mistakes: [
      "Counting a billed test toward data.",
      "Using template text in place of what was addressed.",
      "Using time that is not documented as total time on the date.",
    ],
    drills: [
      "Level ten fictional visits and record the three MDM ratings for each.",
      "Rewrite two sparse notes to show what documentation would support a higher level, then discard them. They are teaching tools, not templates for real charts.",
      "Teach the two-of-three rule to a partner in Taglish.",
    ],
    rubric: [
      "Every rating cites documentation.",
      "Billed tests are not double-counted.",
      "Time is used only when documented correctly.",
      "Final level matches the two-of-three rule.",
    ],
    scenario:
      "The practice bills an in-office A1c. Does the provider's review of that A1c count toward the data element?",
    answers: [
      "Yes, always",
      "No, if the practice bills the test, ordering and reviewing it do not also count toward the E/M data",
      "Only if the result is abnormal",
    ],
    correct: 1,
    why: "A test the practice performs and reports is counted through its own code. Counting it again in the E/M data would double count the work.",
    taglish:
      "Sa bawat visit, i-rate mo nang hiwalay ang problems, data, at risk, tapos hanapin ang level na umabot sa dalawa sa tatlo. Kapag ang practice mismo ang gumawa at nag-bill ng test, huwag mo na itong bilangin ulit sa data ng E/M. Ang prescription drug management ay karaniwang moderate risk. Kung kulang ang documentation, huwag mong palakihin ang level; i-educate ang provider tungkol sa documentation.",
    tip: "Keep a one-page MDM grid beside you for the first 100 charts. After that your eye learns the pattern.",
    mentor:
      "Level three charts from your own practice set. Then explain each level to a partner using only the three MDM terms.",
    remember: [
      "Rate problems, data, and risk separately, then use two of three.",
      "Do not double-count tests the practice bills.",
      "Never raise a level to match what the provider ‘probably did.’",
    ],
  },
  {
    title: "Modifiers that change payment",
    desc: "When 25, 59, 24, 57, 50, 26, TC, 95, and the X modifiers apply, and when they do not.",
    time: "50 min",
    objectives: [
      "Define the most common CPT and HCPCS modifiers.",
      "Decide whether a modifier is supported by documentation.",
      "Avoid modifier use that only exists to bypass an edit.",
    ],
    concept: `<p>A modifier is a two-character addition that tells the payer something about the service without changing the code's definition. Modifiers are powerful and heavily audited. A modifier must be supported by the documentation, not added to defeat an edit.</p>
<p>The most frequently audited modifiers are <b>25</b> and <b>59</b>. A modifier 25 states that the provider performed a significant, separately identifiable E/M service on the same day as a procedure or other service. The E/M must stand alone from the usual pre- and post-procedure work. A modifier 59, or one of the more specific X modifiers, states that a procedure or service was distinct or independent from other services performed the same day.</p>
<p>Order matters on the claim line: payment modifiers generally come first, followed by informational modifiers. Follow the payer's instructions.</p>`,
    terms: [
      [
        "25",
        "Significant, separately identifiable E/M by the same provider on the day of a procedure or other service.",
      ],
      [
        "24",
        "Unrelated E/M service by the same provider during a postoperative period.",
      ],
      [
        "57",
        "Decision for surgery: E/M on the day before or day of a major procedure that resulted in the decision.",
      ],
      [
        "58 / 78 / 79",
        "Staged or related procedure; unplanned return to the operating room; unrelated procedure — all during a post-op period.",
      ],
      ["50", "Bilateral procedure."],
      ["LT / RT", "Left side / right side."],
      ["51", "Multiple procedures at the same session."],
      [
        "22 / 52 / 53",
        "Increased procedural service / reduced service / discontinued procedure.",
      ],
      ["59", "Distinct procedural service."],
      [
        "XE / XS / XP / XU",
        "Separate encounter / separate structure / separate practitioner / unusual non-overlapping service. They are more specific subsets of 59.",
      ],
      [
        "26 / TC",
        "Professional component / technical component of a diagnostic test.",
      ],
      [
        "76 / 77",
        "Repeat procedure by the same provider / by a different provider.",
      ],
      ["91", "Repeat clinical diagnostic laboratory test."],
      [
        "95",
        "Synchronous telemedicine service via real-time audio and video (CPT).",
      ],
      ["JW / JZ", "Drug wasted / no drug wasted from a single-dose container."],
      ["QW", "CLIA-waived laboratory test."],
    ],
    steps: [
      "Identify what the payer edit or situation requires: same-day services, side, component, or telehealth.",
      "Read the definition of each candidate modifier in the book.",
      "Check that documentation supports the exact definition, not an approximation.",
      "For 25 and 59/X, find the evidence of separateness: a different problem, a different site, a different session, or a distinct service.",
      "Append the modifier in the correct order and note your reasoning.",
      "If documentation does not support it, do not add it. Query or leave it off.",
    ],
    lab: [
      [
        "Established patient comes in for a rash. The provider evaluates a new mole, then removes a skin lesion the same day. The note shows a separate evaluation for the rash with a plan for it.",
        "Report the lesion removal and the E/M for the rash with modifier 25 on the E/M because the rash evaluation is a significant, separately identifiable service from the usual pre-procedure evaluation. If the note did not show separate work, the E/M is part of the procedure and is not reported.",
      ],
      [
        "A provider performs a right shoulder injection and a left shoulder injection in the same session. Which modifiers might apply?",
        "Depending on the code descriptors and payer rules, RT and LT on separate lines or modifier 50 on one line for bilateral procedures. Follow the payer's instruction and the code's own bilateral indicator.",
      ],
      [
        "A radiologist reads a chest X-ray done in a hospital. The hospital owns the equipment. How does the radiologist report?",
        "Professional component only: the X-ray code with modifier 26. The hospital reports the technical component (TC) or the global service, depending on the arrangement.",
      ],
      [
        "A telehealth visit is delivered using live video from the patient's home to a practice that is paid under a commercial plan requiring 95.",
        "Report the E/M code for the visit, modifier 95, and the place of service the payer requires (often 10 for patient home or 02 for other telehealth sites). Rules vary by payer.",
      ],
    ],
    case: "A claim edit says a lab test is bundled with a procedure. A trainee adds modifier 59 to bypass it without reviewing the note.",
    model:
      "Stop. A modifier cannot be added solely to defeat an edit. Review the documentation to see whether the lab test was truly distinct, such as a different diagnosis, different session, or independent medical necessity. If yes, add the most specific X modifier supported. If not, leave the claim as is. Record the reasoning.",
    mistakes: [
      "Using 25 on every E/M with a procedure.",
      "Using 59 as a default to avoid edits.",
      "Ignoring payer-specific rules for telehealth or X modifiers.",
    ],
    drills: [
      "Write a one-line definition and documentation test for each modifier in the key terms.",
      "Review five fictional charts and decide if modifier 25 is supported, citing evidence.",
      "List three situations where adding 59 would be improper.",
    ],
    rubric: [
      "Each modifier is tied to the evidence.",
      "Edits are not bypassed without support.",
      "Payer rules are checked.",
      "Reasoning is written.",
    ],
    scenario:
      "A coder wants to add modifier 25 because the claim is denying. The note shows no separate evaluation. What now?",
    answers: [
      "Add 25 anyway to get paid",
      "Do not add it; the documentation does not support a separate E/M, and the denial may be correct",
      "Remove the procedure code",
    ],
    correct: 1,
    why: "A modifier must be supported by documentation. Adding one to force payment is a compliance risk.",
    taglish:
      "Ang modifier ay dagdag na detalye sa code at kailangan may support sa chart. Ang 25 ay para sa hiwalay at significant na E/M sa araw ng procedure; ang 59 o X modifiers ay para sa distinct na service. Huwag silang idagdag para lang mabura ang denial o edit. Kung walang documentation, huwag mong i-attach. Ang 26 ay professional component at TC ay technical component.",
    tip: "Before attaching 25 or 59, finish this sentence from the chart: “This was separate because ____.” If you cannot, do not append it.",
    mentor:
      "Make a card for 25, 59/X, 24, 57, 50, 26/TC, 95 with the one-sentence test for each.",
    remember: [
      "A modifier must be supported by documentation, not added to bypass an edit.",
      "25 = separate E/M on a procedure day. 59/X = distinct service.",
      "26 = professional, TC = technical, 95 = synchronous telemedicine (CPT).",
    ],
    source:
      "AMA CPT modifier appendix, CMS NCCI Policy Manual, and payer-specific modifier policies.",
  },
  {
    title: "Surgery section, global packages, and NCCI edits",
    desc: "What a global surgical package includes, how NCCI bundling works, and how to avoid unbundling.",
    time: "50 min",
    objectives: [
      "Define a global period and name what the package includes.",
      "Explain NCCI procedure-to-procedure edits and medically unlikely edits.",
      "Recognize unbundling and know how to avoid it.",
    ],
    concept: `<p>Many surgical procedures are paid under a <b>global surgical package</b>. The surgeon's payment includes pre-operative care (usually the day before or day of surgery), the operation, ordinary complications that do not require a return to the operating room, and post-operative follow-up visits during the global period. Under Medicare, the post-operative period is <b>0 days</b> (000), <b>10 days</b> (010), or <b>90 days</b> (090). Other indicators include XXX (global concept does not apply), YYY (carrier priced), and ZZZ (add-on included in the primary procedure's package).</p>
<p>The National Correct Coding Initiative (NCCI) is a set of CMS edits designed to prevent improper payment. <b>Procedure-to-procedure (PTP) edits</b> list pairs of codes that generally should not be billed together. Many include a modifier indicator: 0 means no modifier can bypass the edit, 1 means a modifier may be used when supported, and 9 means the edit does not apply. <b>MUEs (medically unlikely edits)</b> set the maximum units a provider normally reports for a code per patient per day.</p>
<p><b>Unbundling</b> is reporting separately the components of a service that should be reported with one comprehensive code. It increases payment without increasing work and is a recognized compliance risk.</p>`,
    steps: [
      "Find the procedure and its global period in the payer or CMS fee schedule.",
      "Decide whether the visit is part of the global package (related post-op care) or separate (unrelated problem).",
      "If separate, identify the correct modifier (24, 25, 57, 58, 78, 79) and document the reason.",
      "Check NCCI PTP edits for each pair of procedures on the claim.",
      "Check MUE limits for units.",
      "Report one comprehensive code when it exists. Do not break it into pieces.",
    ],
    lab: [
      [
        "A patient returns on day 5 after a minor procedure with a 10-day global period for a routine wound check.",
        "The wound check is part of the global package. Do not bill a separate E/M. Track the global end date.",
      ],
      [
        "Day 20 after a major surgery with a 90-day global period, the patient presents with a new, unrelated condition (a urinary infection). The provider evaluates and treats it.",
        "The visit is unrelated to the surgery. Report the E/M with modifier 24 (unrelated E/M during the postoperative period), linked to the unrelated diagnosis. Document the reason.",
      ],
      [
        "The surgeon sees a patient the day before a major operation and decides to operate.",
        "Report the E/M with modifier 57 (decision for surgery). Without 57, the pre-op visit is part of the package.",
      ],
      [
        "A coder wants to bill the individual steps of a procedure that has a comprehensive code.",
        "That is unbundling. Report only the comprehensive code that describes the service.",
      ],
    ],
    case: "A claim for a minor procedure includes an E/M on the same day with no modifier. The payer denies the E/M as bundled.",
    model:
      "Check whether the note supports a significant, separately identifiable E/M apart from the usual pre-procedure assessment. If yes, resubmit with modifier 25 and ensure diagnoses reflect the separate problem. If the E/M was only the decision to do the procedure on a minor procedure, no separate E/M is reportable, and the denial stands.",
    mistakes: [
      "Billing post-operative visits inside the global period.",
      "Unbundling to increase payment.",
      "Ignoring MUE unit limits.",
      "Treating all NCCI edits as bypassable with modifier 59.",
    ],
    drills: [
      "Create a table of 000/010/090/XXX/YYY/ZZZ with one example for each.",
      "Look up one NCCI PTP pair on the CMS site and record its modifier indicator and effective date.",
      "Describe two situations where an E/M is separately reportable in a global period.",
    ],
    rubric: [
      "Global indicators are correct.",
      "Modifiers for global-period E/M are supported.",
      "NCCI edits are checked on every line.",
      "No component of a comprehensive code is reported separately.",
    ],
    scenario:
      "A routine post-operative check on day 7 of a 90-day global is billed with a separate E/M. What is wrong?",
    answers: [
      "Nothing, it is a new date of service",
      "Routine post-op care is included in the global package and should not be billed separately",
      "The code is too low",
    ],
    correct: 1,
    why: "Related post-operative visits during the global period are included in the surgical payment.",
    taglish:
      "Ang global package ay kasama na ang pre-op, operasyon, at post-op visits sa loob ng global period (0, 10, o 90 araw sa Medicare). Kapag routine follow-up lang, hindi mo ito ibi-bill nang hiwalay. Kung ibang problema, puwedeng may modifier 24. Ang NCCI ay CMS edits para pigilan ang unbundling; huwag hatiin ang comprehensive code para lang tumaas ang bayad.",
    tip: "Put the global end date in the tracker the day the surgery is posted. It prevents most post-op billing errors.",
    mentor:
      "Explain unbundling with a restaurant-bill analogy in Taglish, then restate it in coding terms.",
    remember: [
      "Global periods: 0, 10, or 90 days under Medicare. Routine post-op care is included.",
      "NCCI PTP edits and MUEs limit pairs and units.",
      "Unbundling is a compliance risk, not a payment strategy.",
    ],
    source:
      "CMS Global Surgery Booklet and the CMS NCCI Policy Manual. Payers may adopt different rules.",
  },
  {
    title: "Radiology, lab, and medicine codes",
    desc: "Diagnostic imaging components, laboratory coding, time-based therapy codes, injections, and immunizations.",
    time: "45 min",
    objectives: [
      "Apply professional and technical component rules.",
      "Report laboratory services, venipuncture, and panels correctly.",
      "Use time-based unit rules for therapy and psychotherapy.",
    ],
    concept: `<p><b>Radiology (70010–79999).</b> A diagnostic test has two components: the technical component (equipment, supplies, staff) and the professional component (interpretation and report). A single provider that owns the equipment and reads the images bills the <b>global</b> service with no modifier. If one party only interprets, it bills with <b>26</b>. If one party only provides the equipment and staff, it bills with <b>TC</b>.</p>
<p><b>Pathology and laboratory (80047–89398).</b> Panels bundle several tests. Report the panel code when all of its components are performed, not the individual tests. Venipuncture (36415) is separate from the test. CLIA-waived tests may require modifier QW. A test sent to another laboratory may require modifier 90 (reference laboratory) in some situations.</p>
<p><b>Medicine (90281–99607).</b> This section includes immunizations, therapeutic injections, psychiatry, physical medicine, cardiology tests such as ECGs, and telehealth-related services. Psychotherapy codes are time-based by documented minutes. Physical medicine codes are often billed in 15-minute units, and Medicare uses the <b>8-minute rule</b>: for total timed minutes 8–22, one unit; 23–37, two units; 38–52, three units; 53–67, four units. CPT’s own rule is that a unit is reported when the midpoint is passed.</p>`,
    terms: [
      [
        "Global service",
        "Technical + professional components billed together without a modifier.",
      ],
      ["36415", "Collection of venous blood by venipuncture."],
      [
        "80048 / 80053",
        "Basic metabolic panel / comprehensive metabolic panel.",
      ],
      ["80061", "Lipid panel."],
      ["85025", "Complete blood count with automated differential."],
      ["83036", "Hemoglobin A1c."],
      [
        "93000",
        "Routine electrocardiogram with at least 12 leads, with interpretation and report.",
      ],
      [
        "90832 / 90834 / 90837",
        "Psychotherapy with patient: about 30, 45, and 60 minutes.",
      ],
      ["90471", "Immunization administration, first vaccine, by any route."],
    ],
    steps: [
      "Identify whether the provider supplied equipment, interpretation, or both.",
      "Select the code and add 26 or TC when only one component is billed.",
      "For lab, check whether a panel exists for the tests performed and avoid billing components separately.",
      "Add venipuncture only when the practice drew the blood and the payer allows.",
      "For time-based codes, total the documented minutes and apply the unit rule.",
      "Link each service to the diagnosis that supports its medical necessity.",
    ],
    lab: [
      [
        "An in-office CMP, lipid panel, and A1c, with blood drawn by the clinic's medical assistant.",
        "80053, 80061, 83036, and 36415 once. Do not report individual components of panels separately. Check CLIA status for any needed QW modifiers.",
      ],
      [
        "A physical therapist documents 38 minutes of timed therapeutic exercise (and no other timed codes).",
        "Under the Medicare 8-minute rule, 38 total timed minutes = 3 units of 97110. Under CPT midpoint rules, a payer might compute differently; follow the payer.",
      ],
      [
        "A therapist documents a 50-minute psychotherapy session with the patient.",
        "90834 (45-minute psychotherapy). 53 minutes or more would be 90837.",
      ],
    ],
    case: "A clinic bills every individual test in a metabolic panel because the claim system lists them separately.",
    model:
      "Replace the individual lines with the panel code when all components are performed and documented. Split billing across component tests is unbundling. Update the charge-capture mapping so the panel is the default. Review prior claims for overpayment and escalate according to compliance policy.",
    mistakes: [
      "Billing global when only the professional component belongs to you.",
      "Billing individual tests that are part of a panel.",
      "Counting minutes that are not documented.",
    ],
    drills: [
      "Create a card of the lab codes in this lesson and their meanings.",
      "Apply the 8-minute rule to ten different minute totals.",
      "Practice distinguishing 26, TC, and global in five fictional imaging scenarios.",
    ],
    rubric: [
      "Components are identified correctly.",
      "Panels replace component tests.",
      "Units follow the rule the payer uses.",
      "Medical necessity links are present.",
    ],
    scenario:
      "A radiologist interprets an X-ray at a hospital that owns the machine. Which modifier does the radiologist append?",
    answers: ["TC", "26", "No modifier"],
    correct: 1,
    why: "The interpreter bills the professional component with modifier 26. The facility owning the equipment bills the technical component.",
    taglish:
      "Sa imaging, may dalawang bahagi ang test: technical (makina at staff) at professional (basa at report). Kung parehong sa iyo, global na walang modifier. Kung basa lang, 26; kung makina lang, TC. Sa lab, gamitin ang panel code kapag kumpleto ang components, at huwag mong hiwa-hiwalayin. Sa time-based codes, bilangin ang documented minutes at sundin ang unit rule ng payer.",
    tip: "Memorize one rule: if you didn’t buy the machine, you probably bill 26. If you didn’t read the film, you probably bill TC.",
    mentor:
      "Role-play explaining global, 26, and TC to a new teammate using a restaurant (kitchen versus chef’s tasting) analogy.",
    remember: [
      "26 = professional, TC = technical, no modifier = global.",
      "Use a panel code when all panel tests are done. Do not unbundle.",
      "Time-based codes follow documented minutes and the payer's unit rule.",
    ],
  },
  {
    title: "HCPCS Level II, drugs, and supplies",
    desc: "Use letter-prefix codes for drugs, supplies, and equipment, calculate drug units, and apply wastage modifiers.",
    time: "40 min",
    objectives: [
      "Recognize the HCPCS Level II letter groups.",
      "Calculate drug billing units from the code descriptor.",
      "Apply JW and JZ correctly and report the administration separately.",
    ],
    concept: `<p>HCPCS Level II codes begin with a letter followed by four digits. They report items and services CPT does not, such as drugs, supplies, durable medical equipment, ambulance services, and some temporary services. CMS maintains them, and updates may occur quarterly.</p>
<p>A drug code describes a specific drug and a <b>billing unit</b>, such as 10 mg. If a provider administers 40 mg of a drug whose descriptor is per 10 mg, the units are 4. The drug itself is separate from the administration service. For example, an intramuscular injection is reported with a CPT administration code when the payer allows it, and the drug is reported with a J code.</p>
<p>Single-dose container waste is reported with <b>JW</b> (discarded amount) on a separate line, and <b>JZ</b> indicates that no drug was discarded. Medicare Part B requires one of these for drugs from single-dose containers. Some payers, especially Medicaid, require the National Drug Code (NDC) with the J code.</p>`,
    terms: [
      ["A codes", "Transportation, medical and surgical supplies."],
      ["E codes", "Durable medical equipment."],
      ["G codes", "Procedures and professional services (temporary)."],
      [
        "J codes",
        "Drugs administered other than orally, plus chemotherapy drugs.",
      ],
      ["L codes", "Orthotics and prosthetics."],
      ["Q codes", "Temporary codes assigned by CMS."],
      ["S codes", "Used by private payers (not Medicare)."],
      [
        "NDC",
        "National Drug Code: an 11-digit drug identifier used in billing by some payers.",
      ],
      ["JW / JZ", "Drug amount discarded / zero drug amount discarded."],
    ],
    steps: [
      "Identify the drug, strength, route, and total dose documented.",
      "Find the J code for that drug and read the unit descriptor.",
      "Divide the dose by the unit amount to determine billing units.",
      "Add the CPT administration code if allowed.",
      "If a single-dose container had waste, bill the amount discarded with JW; otherwise JZ if required.",
      "Add NDC information if the payer requires it.",
    ],
    lab: [
      [
        "A provider injects 40 mg of triamcinolone into a joint. The J code per descriptor is for 10 mg.",
        "J3301 × 4 units. The joint injection itself is reported with the appropriate CPT injection code for the joint, rather than a generic administration code. Verify the code and the descriptor in the current book.",
      ],
      [
        "A 100-unit vial is a single-dose container. 80 units were given and 20 discarded.",
        "Bill the administered amount on one line and the discarded amount on a second line with JW. If nothing had been discarded, JZ would be used instead.",
      ],
    ],
    case: "A clinic bills a drug as 1 unit when the descriptor is per 10 mg and 50 mg was given.",
    model:
      "The correct units are 5. Correct the claim, check for underpayment on other claims for the same drug, and update the charge master so the unit conversion is automatic. Report the issue to the supervisor.",
    mistakes: [
      "Billing the drug as one unit regardless of dose.",
      "Forgetting the administration service.",
      "Ignoring wastage reporting rules.",
    ],
    drills: [
      "Calculate units for five dosing scenarios.",
      "Create a letter-prefix reference card.",
      "Look up one J code and write the descriptor, unit, and effective date.",
    ],
    rubric: [
      "Units match the descriptor.",
      "Drug and administration are separated.",
      "Wastage is reported properly.",
      "NDC requirement was checked.",
    ],
    scenario:
      "A drug code is described per 10 mg and the provider gave 30 mg. How many units?",
    answers: ["1", "3", "30"],
    correct: 1,
    why: "30 mg divided by 10 mg per unit is 3 units.",
    taglish:
      "Ang HCPCS Level II ay letter plus apat na numbers para sa drugs, supplies, at equipment. Sa J code, tingnan ang unit sa descriptor: kung per 10 mg at 40 mg ang binigay, 4 units. Hiwalay ang gamot at ang administration. Kung may tinapon na gamot sa single-dose vial, gamitin ang JW; JZ kung walang natapon, depende sa payer.",
    tip: "Write the conversion on the charge sheet: mg given ÷ mg per unit = units. A wrong unit is the most common drug billing error.",
    mentor:
      "Practice five unit calculations aloud in Taglish, then check your answers.",
    remember: [
      "HCPCS Level II = letter + 4 digits: drugs, supplies, equipment.",
      "Units come from the descriptor, not from the number of vials.",
      "JW reports waste and JZ means no waste (when required).",
    ],
    source:
      "CMS HCPCS Level II quarterly updates and Medicare billing guidance.",
  },
  {
    title: "Preventive, telehealth, and care management coding",
    desc: "Preventive visits, Medicare wellness visits, telehealth reporting, and monthly care-management services.",
    time: "45 min",
    objectives: [
      "Choose preventive visit codes by age and patient status.",
      "Report a telehealth visit with the right modifier and place of service.",
      "Understand the documentation needed for time-based care management.",
    ],
    concept: `<p><b>Preventive visits.</b> CPT preventive medicine codes are organized by age and by new (99381–99387) or established (99391–99397) patient. A problem-oriented service performed at the same visit may be reported separately with modifier 25 on the E/M if it is significant and separately identifiable. Medicare does not cover a routine physical but does cover the Initial Preventive Physical Exam (G0402) and the Annual Wellness Visit (G0438 first, G0439 subsequent). Preventive services under the ACA may carry cost-sharing waivers and special modifiers or diagnosis requirements, which vary by payer.</p>
<p><b>Telehealth.</b> Reporting rules vary by payer and change often. Many payers use the same E/M code as an in-person visit with modifier 95 for synchronous audio-video visits, and place of service 02 (telehealth other than patient home) or 10 (patient home). Audio-only has its own modifier or codes in some programs. Medicare telehealth flexibilities are authorized by law for defined periods. Check the current rules before submitting.</p>
<p><b>Care management.</b> These services are reported by month and depend on documented clinical time and patient consent: chronic care management (99490, 99439, 99487), remote physiologic monitoring (99453, 99454, 99457, 99458), and transitional care management (99495, 99496). Each has requirements for the number of conditions, staff qualifications, timing, and who else may bill that month.</p>`,
    terms: [
      [
        "POS 02 / POS 10",
        "Place of service: telehealth not in the patient's home / telehealth in the patient's home.",
      ],
      [
        "G2012",
        "Brief virtual check-in by a provider (about 5–10 minutes) not resulting in an appointment.",
      ],
      [
        "99421–99423",
        "Online digital E/M by a provider, patient-initiated, by cumulative time over 7 days.",
      ],
      [
        "CCM",
        "Chronic care management: monthly services for patients with two or more chronic conditions.",
      ],
      [
        "RPM",
        "Remote physiologic monitoring: device set-up, data supply, and monthly management time.",
      ],
      [
        "TCM",
        "Transitional care management after discharge: contact within two business days and a face-to-face visit.",
      ],
    ],
    steps: [
      "Identify whether the visit is preventive, problem-oriented, or both.",
      "For preventive visits, choose the age-based code and add the problem E/M with modifier 25 when supported.",
      "For telehealth, confirm the payer's rules for modifier, place of service, and eligible codes.",
      "For care management, confirm consent, documented time, number of conditions, and no overlapping service that month.",
      "Link diagnoses to the service, including Z codes for preventive care.",
    ],
    lab: [
      [
        "A 52-year-old established patient has an annual physical. The provider also changes a blood-pressure medication for known hypertension and documents it separately.",
        "99396 (preventive, established, 40–64) with Z00.00 or Z00.01, plus a problem-oriented E/M such as 99213 with modifier 25 and I10, if the extra work is significant and separately documented.",
      ],
      [
        "Commercial payer, established patient, live video visit from home, moderate MDM.",
        "99214 with modifier 95 and POS 10 if the payer’s policy follows CPT’s approach. Always verify the payer’s telehealth policy.",
      ],
    ],
    case: "A clinic bills chronic care management for a patient without documented consent, and the time log is missing.",
    model:
      "The service requirements are not met. Do not bill. Obtain and document patient consent, record the actual clinical staff minutes, and bill only for months that satisfy the requirements. Review earlier claims for overpayment and escalate according to policy.",
    mistakes: [
      "Adding modifier 25 to every preventive visit.",
      "Using one payer's telehealth rule for all payers.",
      "Billing monthly services without time logs or consent.",
    ],
    drills: [
      "Create a table of preventive codes by age band.",
      "Build a telehealth payer checklist with modifier, POS, and covered services.",
      "Write a CCM documentation checklist.",
    ],
    rubric: [
      "Preventive code matches age and status.",
      "Telehealth reporting follows the payer.",
      "Care management time and consent exist.",
      "Modifier 25 is justified.",
    ],
    scenario:
      "A payer follows CPT for telehealth. A live video visit from the patient's home should include which items?",
    answers: [
      "No modifier or place of service",
      "The E/M code with modifier 95 and place of service 10, per payer policy",
      "Only a diagnosis",
    ],
    correct: 1,
    why: "Many payers use the in-person E/M code with 95 and POS 10 for synchronous video from the patient's home, but confirm each payer's policy.",
    taglish:
      "Ang preventive visit codes ay ayon sa edad at kung bago o established ang patient. Kung may separate na problema, puwedeng may modifier 25 sa problem E/M. Sa telehealth, madalas E/M code plus modifier 95 at POS 02 o 10, pero iba-iba ang payer at nagbabago ang rules. Sa CCM, RPM, at TCM, kailangan ng consent, oras, at tamang requirements bago mag-bill.",
    tip: "Keep a payer telehealth cheat sheet with the last date you verified each rule. Policies change faster than books.",
    mentor:
      "Make a one-page ‘visit type to code family’ map: preventive, problem, telehealth, care management.",
    remember: [
      "Preventive codes are age-based and split by new versus established.",
      "Telehealth reporting depends on payer: modifier 95 and POS 02 or 10 are common.",
      "Monthly care management needs consent, time logs, and eligibility.",
    ],
  },
  {
    title: "Code a complete outpatient encounter",
    desc: "Combine diagnosis codes, E/M, procedures, modifiers, and links into a clean claim from start to finish.",
    time: "60 min",
    objectives: [
      "Code a full encounter from documentation to claim lines.",
      "Link each service to supporting diagnoses.",
      "Document your reasoning and any queries.",
    ],
    concept: `<p>Real coding combines everything you have learned. Read the note, list reportable diagnoses in order, select the E/M and other services, determine the modifiers, and link each service to the diagnoses that justify it. On a professional claim you can list up to 12 diagnoses and point each service line to as many as 4 of them.</p>
<p>A strong coding note records: the documents reviewed, the diagnosis codes in order, the procedure codes with units and modifiers, the diagnosis pointer for each line, any query sent, and any open questions. This record is what a reviewer will use to confirm your work.</p>`,
    steps: [
      "Read the full note and addenda.",
      "List the diagnoses addressed and their documented specificity.",
      "Assign ICD-10-CM codes and order them with the first-listed diagnosis first.",
      "Assign E/M and procedure codes, units, and modifiers.",
      "Add diagnosis pointers for every line.",
      "Run a final consistency check: patient, date, provider, place of service, code set year.",
      "Write the coding note and list any queries.",
    ],
    lab: [
      [
        "Chart A: Established patient, 28 minutes total time documented. Type 2 diabetes (stable on metformin), hypertension (stable), and hyperlipidemia (stable). Provider renews the three prescriptions and orders an A1c and a lipid panel sent to an outside lab.",
        "E/M: 99214 (moderate MDM from two or more stable chronic illnesses and prescription drug management; time of 28 minutes would support only 99213, so MDM is the stronger basis). Diagnoses: E11.9, I10, E78.5, Z79.84. No lab lines are billed because the lab was sent out. Pointers: A–D.",
      ],
      [
        "Chart B: Established patient seen by a medical assistant for an influenza vaccine. No provider evaluation. Vaccine documented with product and lot.",
        "Z23 as diagnosis. Report the vaccine product code that matches the documented vaccine and age, plus 90471 (immunization administration). Do not bill an E/M. 99211 is not appropriate unless there was a separate and documented service.",
      ],
      [
        "Chart C: New patient with a sore throat and fever. Rapid strep positive and performed in-office. Provider documents streptococcal pharyngitis and prescribes an antibiotic. No systemic illness beyond a mild fever is documented.",
        "Diagnosis: J02.0 (streptococcal pharyngitis). Services: 99203 (low MDM from acute uncomplicated illness plus moderate risk, with data minimal because the test is billed) and 87880, adding QW if the payer requires it for the CLIA-waived test. Both point to J02.0.",
      ],
    ],
    case: "A claim is returned by a reviewer because the E/M points to a diagnosis that does not support it, and a lab line lacks a diagnosis pointer.",
    model:
      "Reopen the note. Reassign diagnosis pointers so each line points to the diagnoses that support its medical necessity, with the most relevant first. Confirm the order of diagnoses on the claim. Add the missing pointer, note the correction, and record what in your process allowed the omission (for example, no line-by-line pointer check).",
    mistakes: [
      "Pointing every line to every diagnosis.",
      "Forgetting to report a service that was documented and billable.",
      "Skipping the final consistency check.",
    ],
    drills: [
      "Code all three charts independently before you open the answers.",
      "Write a coding note for each chart in the format above.",
      "Swap with a partner and find one improvement in each other's work.",
    ],
    rubric: [
      "Every diagnosis and service has documentation support.",
      "Pointers match medical necessity.",
      "Modifiers and units are verified.",
      "The coding note lets a reviewer reproduce your steps.",
    ],
    scenario:
      "A claim line has no diagnosis pointer. What is the likely outcome?",
    answers: [
      "It pays faster",
      "It will probably be rejected or denied because the service is not linked to a diagnosis",
      "Nothing; pointers are optional",
    ],
    correct: 1,
    why: "A service must be linked to at least one diagnosis. Missing pointers cause rejections and denials.",
    taglish:
      "Kapag buong encounter ang ico-code, sunod-sunod: basahin ang note, ilista ang diagnoses, i-assign ang ICD-10-CM, piliin ang E/M at procedures, idagdag ang modifiers at units, at i-link ang bawat service sa diagnosis na sumusuporta rito. Gumawa ng coding note para ma-check ng reviewer ang reasoning mo. Huwag i-point ang lahat ng lines sa lahat ng diagnoses.",
    tip: "Do a final read-through from the payer’s point of view: ‘Does every line prove it was medically necessary?’",
    mentor:
      "Code the three charts again tomorrow without notes. Compare to see what you remembered and what you needed to look up.",
    remember: [
      "A full claim ties diagnoses, services, units, modifiers, and pointers together.",
      "Each line needs a supporting diagnosis pointer.",
      "Write a coding note so your work can be reviewed.",
    ],
  },
]);
