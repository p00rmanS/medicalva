// Coding track additions: patient billing, quality reporting, practice sets, and interview preparation.
addCodingLessons([
  {
    title: "Patient billing, statements, and the No Surprises Act",
    desc: "Calculate patient responsibility, write a clear statement, and know the basic good-faith estimate and balance-billing rules.",
    time: "45 min",
    objectives: [
      "Calculate patient responsibility from an allowed amount, deductible, and coinsurance.",
      "Describe what a clear patient statement contains.",
      "Explain the basics of good faith estimates and surprise-billing protections.",
    ],
    concept: `<p>After the payer pays, the remaining balance is the patient's responsibility: deductible, copay, coinsurance, and any non-covered amounts the contract allows the practice to bill. The practice may only bill the patient the amount the remittance assigns as patient responsibility (group code PR). Contractual adjustments (CO) are written off.</p>
<p>Patient responsibility example: allowed amount $200, with $150 of deductible remaining and 20% coinsurance after that. The patient owes the $150 deductible plus 20% of the remaining $50, which is $10, for $160. The plan pays $40.</p>
<p>A good statement shows the date of service, a plain description, charges, insurance payments, adjustments, the balance, a due date, how to pay, and a phone number. Include a note that an explanation of benefits from the plan is not a bill. Offer payment plans and financial assistance according to practice policy. Use the minimum necessary information on collections communications.</p>
<p>The federal <b>No Surprises Act</b> (in effect since 2022) protects patients from certain surprise bills, including emergency services and some non-emergency services from out-of-network providers at in-network facilities, and limits what they owe to in-network cost-sharing in those cases. For people who are uninsured or choose not to use insurance, providers must give a <b>good faith estimate</b> of expected charges. When an appointment is scheduled at least 3 business days ahead, the estimate is due within 1 business day of scheduling. When it is scheduled at least 10 business days ahead, it is due within 3 business days. An estimate must also be given on request. If the actual billed charges are $400 or more above the estimate, the patient may start a patient-provider dispute resolution process within 120 days. Rules and thresholds can change, so verify the current guidance.</p>`,
    terms: [
      [
        "Patient responsibility (PR)",
        "The portion the remittance says the patient owes.",
      ],
      [
        "Deductible",
        "Amount the patient pays before the plan pays for covered services.",
      ],
      ["Coinsurance", "Percentage of the allowed amount the patient pays."],
      ["Copay", "Fixed amount per visit or service."],
      [
        "Balance billing",
        "Billing the patient for the difference between the charge and what the plan paid.",
      ],
      [
        "Good faith estimate",
        "Written estimate of expected charges for uninsured or self-pay patients.",
      ],
    ],
    steps: [
      "Confirm the final remittance before you bill the patient.",
      "Read each PR line and total only the patient-responsibility amounts.",
      "Check for secondary coverage and for credit balances.",
      "Create a statement with clear dates, amounts, and ways to pay.",
      "Offer payment plan or financial assistance per policy.",
      "Document every patient contact and keep messages free of unnecessary clinical details.",
    ],
    lab: [
      [
        "Allowed amount $200. Remaining deductible $150. Coinsurance 20% after the deductible. What does the patient owe, and what does the plan pay?",
        "Deductible $150. Remaining $50 × 20% = $10. Patient owes $160. Plan pays $40.",
      ],
      [
        "A self-pay patient books a procedure 12 business days in advance. When must the good faith estimate be provided?",
        "The appointment is at least 10 business days ahead, so the estimate is due within 3 business days of scheduling. Confirm current rules.",
      ],
      [
        "A self-pay patient books a visit 5 business days ahead.",
        "At least 3 business days ahead but fewer than 10, so the estimate is due within 1 business day of scheduling.",
      ],
      [
        "The final bill is $450 over a patient's good faith estimate.",
        "The difference is at least $400, so the patient may use the patient-provider dispute resolution process within the allowed timeframe. Escalate to your supervisor.",
      ],
    ],
    case: "A patient calls upset about a $160 bill. They say their insurance ‘already paid everything.’",
    model:
      "Stay calm and verify identity. Open the remittance and explain the amounts: allowed amount, plan payment, deductible, coinsurance. Offer to send a copy of the explanation of benefits. Offer a payment plan per policy and route any dispute to billing. Do not promise a waiver. Document the call.",
    mistakes: [
      "Billing the patient a contractual adjustment.",
      "Sending a statement before the secondary pays.",
      "Putting detailed clinical information on a collections message.",
    ],
    drills: [
      "Calculate patient responsibility for five fictional cases.",
      "Design a one-page patient statement layout.",
      "Write a calm script for a billing complaint call.",
    ],
    rubric: [
      "Only PR amounts are billed.",
      "Calculations are correct.",
      "Estimate deadlines match the rule.",
      "The patient communication is clear and respectful.",
    ],
    scenario:
      "A remittance shows CO-45 $60 and PR-1 $30. What may be billed to the patient?",
    answers: ["$90", "$30", "$60"],
    correct: 1,
    why: "CO-45 is a contractual write-off. Only the PR-1 deductible amount of $30 is the patient's responsibility.",
    taglish:
      "Pagkatapos magbayad ng insurance, ang PR lang sa remittance ang puwedeng singilin sa pasyente. Ang CO ay write-off. Sa statement, malinaw dapat ang petsa, halaga, bayad ng insurance, balanse, at paraan ng pagbayad. Sa No Surprises Act, ang self-pay o uninsured ay dapat bigyan ng good faith estimate sa itinakdang oras, at kapag lumampas nang $400 o higit ang bill, puwede silang mag-dispute.",
    tip: "Say the math out loud in plain words: ‘Your plan allowed $200. You owed $150 for your deductible and $10 for coinsurance.’ Confusion drops fast.",
    mentor:
      "Role-play a billing call twice: once rushed, once calm and clear. Notice the difference.",
    remember: [
      "Bill the patient only the PR amount on the remittance.",
      "A clear statement lists charges, payments, adjustments, and balance.",
      "Good faith estimates are due within 1 or 3 business days depending on scheduling lead time.",
    ],
    source:
      "CMS No Surprises Act guidance. Deadlines and thresholds can change; confirm the current rules.",
  },
  {
    title: "Quality reporting: Category II codes, MIPS, and HEDIS",
    desc: "Capture quality data from documentation and understand how plans and Medicare measure performance.",
    time: "40 min",
    objectives: [
      "Explain what CPT Category II codes report.",
      "Describe MIPS and HEDIS in plain language.",
      "Capture quality data only from documented values.",
    ],
    concept: `<p>Quality programs measure whether care follows evidence-based practice. <b>CPT Category II codes</b> (four digits plus the letter F) report performance measure data such as blood pressure or A1c values. They are optional supplemental codes and are often billed with a nominal or zero charge according to payer instructions.</p>
<p>Examples: 3074F (most recent systolic blood pressure under 130 mm Hg), 3075F (130–139), 3077F (140 or higher), 3078F (diastolic under 80), 3079F (80–89), 3080F (90 or higher), 3044F (most recent hemoglobin A1c under 7.0%), 3046F (A1c over 9.0%). Verify the current descriptors before use.</p>
<p><b>MIPS</b>, the Merit-based Incentive Payment System, is a Medicare program that adjusts clinician payment based on performance in four categories: Quality, Promoting Interoperability, Improvement Activities, and Cost. <b>HEDIS</b>, from NCQA, is a set of measures health plans use to track performance, such as blood pressure control and diabetes care. Plans send ‘gaps in care’ lists to practices.</p>
<p>Coders and VAs help by finding the values already documented and reporting them correctly. They never add a value that is not in the record, and they never ‘close a gap’ by guessing. If a note says the patient ‘meets criteria’ but gives no value, ask for the documented result.</p>`,
    terms: [
      [
        "Category II code",
        "Four digits plus F; supplemental performance measure data.",
      ],
      ["MIPS", "Merit-based Incentive Payment System for Medicare clinicians."],
      ["HEDIS", "Healthcare Effectiveness Data and Information Set (NCQA)."],
      [
        "Gap in care",
        "A recommended service or result missing from the record.",
      ],
      [
        "Numerator / denominator",
        "Patients who met the measure / patients eligible for it.",
      ],
    ],
    steps: [
      "Identify the measure the plan or program is asking about.",
      "Find the exact documented value, date, and source in the record.",
      "Select the matching Category II or diagnosis code for the documented value.",
      "If the value is not documented, mark the gap and ask the provider or care team to address it through the proper workflow.",
      "Record the date and source for audit purposes.",
    ],
    lab: [
      [
        "A hypertensive patient's blood pressure at the visit is documented as 128/76.",
        "3074F (systolic under 130) and 3078F (diastolic under 80), when the payer or program asks for blood pressure Category II codes.",
      ],
      [
        "The note documents an A1c of 9.4% from last week.",
        "3046F (most recent A1c over 9.0%), subject to measure rules on the date and source.",
      ],
      [
        "The note states ‘blood pressure controlled’ with no values.",
        "No Category II code can be assigned because no value is documented. Ask the provider to document the reading in the record if it was measured.",
      ],
    ],
    case: "A plan's gap list says a patient needs a blood pressure reading. A teammate suggests entering the last reading from two years ago.",
    model:
      "The measure usually requires the most recent reading within the measurement period. An old reading does not close the gap. Route the gap to the clinical team so a new reading is taken and documented at a visit.",
    mistakes: [
      "Entering a value that is not documented.",
      "Using an old result for a current measure.",
      "Treating a gap list as an order to code.",
    ],
    drills: [
      "Build a table of five Category II codes and their meanings.",
      "Write a message asking a provider to document a missing value without suggesting one.",
      "Explain MIPS and HEDIS to a friend in Taglish.",
    ],
    rubric: [
      "Values come only from the record.",
      "Measurement period is checked.",
      "The gap request does not lead the provider.",
      "Descriptors were verified.",
    ],
    scenario:
      "A gap list shows a missing A1c. The record has no recent value. What should you do?",
    answers: [
      "Enter a typical A1c value",
      "Report the gap to the care team so a test can be ordered through the proper clinical workflow",
      "Use the oldest A1c on file",
    ],
    correct: 1,
    why: "Quality data must reflect documented, current results. The clinical team decides whether to order the test.",
    taglish:
      "Ang Category II codes (apat na digit plus F) ay para sa quality data tulad ng BP o A1c. Ang MIPS ay Medicare program na nag-a-adjust ng bayad batay sa performance, at ang HEDIS ay sukatan ng health plans. Kunin lang ang value na nakasulat sa chart. Kung wala, i-report ang gap sa care team; huwag mag-imbento ng numero.",
    tip: "Always capture value, date, and source together. A number without a date is useless in an audit.",
    mentor:
      "Make a mini glossary of numerator, denominator, gap in care, and measurement period.",
    remember: [
      "Category II codes report documented performance values.",
      "MIPS adjusts Medicare payments. HEDIS measures plan performance.",
      "Never enter a value that is not documented.",
    ],
  },
  {
    title: "Practice set A: diagnosis coding",
    desc: "Eighteen timed ICD-10-CM items with answers and reasoning. Attempt each before opening the answer.",
    time: "60 min",
    objectives: [
      "Assign common ICD-10-CM codes from short documentation.",
      "Practice the Index to Tabular List process on timed items.",
      "Build an error log from your misses.",
    ],
    concept: `<p>This is a practice set, not new content. Give yourself about two minutes per item, with the current ICD-10-CM book or the CDC tabular list open. Write your answer first. Then open the answer and compare your reasoning, not only the code.</p>
<p>The items are fictional. Verify every code in the current fiscal year's code set, because codes are revised each October.</p>`,
    steps: [
      "Set a timer for two minutes per item.",
      "Write your code and the Index path you used.",
      "Open the answer and mark each item correct, close, or wrong.",
      "For every miss, write the rule you missed in an error log.",
      "Redo the missed items the next day without notes.",
      "Calculate your accuracy and set a target for the next set.",
    ],
    lab: [
      ["1. Essential hypertension, stable.", "I10."],
      [
        "2. Type 2 diabetes with hyperglycemia, on insulin glargine.",
        "E11.65 plus Z79.4 for long-term use of insulin.",
      ],
      ["3. Acute bronchitis.", "J20.9 (acute bronchitis, unspecified)."],
      [
        "4. Hypertension with chronic kidney disease stage 3a.",
        "I12.9 plus N18.31. The guidelines presume the link between hypertension and CKD.",
      ],
      [
        "5. Outpatient: ‘probable pneumonia’ with cough and fever.",
        "Do not code pneumonia. Code the documented symptoms, such as R05.9 (cough, unspecified, or a duration-specific R05 code if documented) and R50.9 (fever, unspecified).",
      ],
      ["6. Annual adult physical, no abnormal findings.", "Z00.00."],
      ["7. Visit only for an influenza vaccine.", "Z23."],
      [
        "8. First visit for a right ankle sprain.",
        "S93.401A (sprain of unspecified ligament of right ankle, initial encounter). Use a more specific code if the ligament is documented.",
      ],
      [
        "9. Follow-up for the same sprain, routine healing.",
        "S93.401D, with the 7th character D for subsequent encounter.",
      ],
      ["10. Major depressive disorder, recurrent, moderate.", "F33.1."],
      [
        "11. Acute maxillary sinusitis.",
        "J01.00 (acute maxillary sinusitis, unspecified).",
      ],
      [
        "12. Obesity with a BMI of 34 documented by the nurse.",
        "E66.9 for the provider-documented obesity (check for class-specific codes in E66.81- if the provider documents a class, in current code sets) plus Z68.34 for BMI 34.0–34.9. The BMI may come from a clinician other than the provider, but the diagnosis must come from the provider.",
      ],
      ["13. Hyperlipidemia, unspecified.", "E78.5."],
      [
        "14. History of breast cancer, treated, no current disease.",
        "Z85.3 (personal history of malignant neoplasm of breast).",
      ],
      ["15. Nicotine dependence, cigarettes, uncomplicated.", "F17.210."],
      ["16. Low back pain, unspecified.", "M54.50."],
      [
        "17. Urinary tract infection due to E. coli.",
        "N39.0 plus B96.20 to identify the organism.",
      ],
      [
        "18. A social worker documents food insecurity.",
        "Z59.41. SDOH codes may be assigned from documentation by clinicians other than the provider, per the guidelines.",
      ],
    ],
    case: "You scored 13 of 18. Most misses involved combination codes and 7th characters.",
    model:
      "Score 72%. Write each missed rule: for example, ‘hypertension plus CKD is presumed related’ and ‘7th character D is for routine healing follow-up.’ Redo those items tomorrow, then take Practice set B. Aim for steady improvement rather than perfect first attempts.",
    mistakes: [
      "Looking at the answer before writing yours.",
      "Memorizing answers instead of rules.",
      "Skipping the error log.",
    ],
    drills: [
      "Complete the 18 items under time and score yourself.",
      "Write an error log with the rule behind each miss.",
      "Redo the missed items after 24 hours.",
    ],
    rubric: [
      "All items were attempted before checking.",
      "Each miss has a written rule.",
      "Redo accuracy improved.",
      "Codes were verified in the current code set.",
    ],
    scenario:
      "Your practice set shows that most misses come from combination codes. What is the best next step?",
    answers: [
      "Memorize more individual codes",
      "Study combination-code rules and redo similar items",
      "Stop practicing diagnosis coding",
    ],
    correct: 1,
    why: "Targeted study of the rule behind repeated errors improves accuracy faster than memorizing codes.",
    taglish:
      "Ito ay practice set, hindi bagong aralin. Sagutan muna ang bawat item bago buksan ang sagot, tapos ihambing ang reasoning mo. Isulat sa error log ang rule na nakaligtaan mo at ulitin ang mga mali kinabukasan. Ang layunin ay umunlad, hindi agad perpekto.",
    tip: "Score by rule, not by code. If you missed three items because of 7th characters, that is one gap to fix, not three.",
    mentor:
      "Schedule your redo session before you close this lesson so it actually happens.",
    remember: [
      "Write your answer before you open the key.",
      "Track the rule behind each miss, not just the code.",
      "Redo missed items after a day.",
    ],
  },
  {
    title: "Practice set B: CPT, E/M, and modifiers",
    desc: "Sixteen procedure-coding items on E/M levels, modifiers, injections, units, and time-based codes.",
    time: "60 min",
    objectives: [
      "Select CPT codes and modifiers from short scenarios.",
      "Apply MDM, time, global period, and unit rules.",
      "Identify unsupported or invalid code combinations.",
    ],
    concept: `<p>Use the current CPT book. Write your code, modifier, and the reason in one sentence before you open each answer. These items are fictional and use common code numbers, which should be verified in the current edition.</p>`,
    steps: [
      "Allow about three minutes per item.",
      "Write the code, modifier, and reason.",
      "Open the answer and compare.",
      "Log each miss by topic: E/M, modifier, global, units, or add-on.",
      "Review the matching lesson for each topic you missed.",
      "Retake missed items after 24 hours.",
    ],
    lab: [
      ["1. A new patient visit with moderate MDM.", "99204."],
      [
        "2. An established patient visit. The provider documents 32 minutes total time on the date of the encounter.",
        "99214, since 32 minutes meets the 30-minute threshold.",
      ],
      [
        "3. An established patient visit with low MDM and 18 minutes of total time documented.",
        "99213 by MDM. The time alone would only support 99212, but the level may be selected by MDM or time, whichever is supported.",
      ],
      [
        "4. A separate problem is evaluated in a significant, separately documented way on the same day as a wart destruction (6 plantar warts).",
        "E/M with modifier 25 and 17110 for the destruction.",
      ],
      [
        "5. A surgeon sees a patient the day before major surgery and decides to operate.",
        "The E/M with modifier 57.",
      ],
      [
        "6. Day 30 of a 90-day global period. The patient returns for a routine post-operative check.",
        "No separate charge. It is part of the global package.",
      ],
      [
        "7. Day 30 of a 90-day global period. The patient has a new, unrelated urinary tract infection.",
        "The E/M with modifier 24 and a diagnosis for the unrelated condition.",
      ],
      [
        "8. A radiologist interprets an X-ray taken at a hospital that owns the equipment.",
        "The X-ray code with modifier 26 (professional component).",
      ],
      [
        "9. A right knee injection with a corticosteroid, no imaging guidance.",
        "20610-RT plus the drug J code with units.",
      ],
      [
        "10. A drug is described as ‘per 20 mg.’ The provider gave 60 mg.",
        "3 units.",
      ],
      [
        "11. A 50-minute individual psychotherapy session.",
        "90834 (38–52 minutes).",
      ],
      [
        "12. A live video visit from the patient's home, established patient, moderate MDM, commercial payer following CPT.",
        "99214 with modifier 95 and place of service 10. Verify the payer's policy.",
      ],
      [
        "13. In-office CBC with automated differential, comprehensive metabolic panel, and a blood draw.",
        "85025, 80053, and 36415.",
      ],
      [
        "14. Physical therapy: 38 minutes of timed therapeutic exercise, Medicare.",
        "97110 × 3 units under the 8-minute rule.",
      ],
      [
        "15. A coder wants to bill the add-on code 99417 by itself.",
        "Not reportable. Add-on codes are reported only with their primary code.",
      ],
      [
        "16. A bilateral procedure is performed in one session.",
        "Use modifier 50 or RT/LT on separate lines, depending on the code's bilateral indicator and payer rules.",
      ],
    ],
    case: "You scored 11 of 16 with most misses in modifiers 24, 25, and 57.",
    model:
      "Review the global surgical package lesson and the modifier lesson. Write the one-sentence test for each of the three modifiers, then redo similar items. Rate your confidence after the redo.",
    mistakes: [
      "Using modifier 25 without a separate evaluation.",
      "Forgetting that routine post-op visits are included.",
      "Calculating units without checking the code descriptor.",
    ],
    drills: [
      "Complete the 16 items and score yourself.",
      "Write the one-sentence test for modifiers 24, 25, 57, 59, 26, and 95.",
      "Redo the missed items after 24 hours.",
    ],
    rubric: [
      "Codes and modifiers are justified.",
      "Misses are grouped by topic.",
      "Review lessons are revisited.",
      "Redo accuracy improved.",
    ],
    scenario:
      "You miss several items about whether a post-operative visit is billable. Which lesson should you revisit?",
    answers: [
      "Z codes",
      "Surgery section, global packages, and NCCI edits",
      "Quality reporting",
    ],
    correct: 1,
    why: "The global package lesson explains which post-operative services are included and when modifiers apply.",
    taglish:
      "Practice set ito para sa E/M, modifiers, injections, units, at time-based codes. Isulat muna ang code, modifier, at dahilan bago tingnan ang sagot. Pagkatapos, i-group ang mga mali ayon sa topic para alam mo kung aling lesson ang babalikan.",
    tip: "Write the reason in one sentence every time. If you cannot, you guessed, and guessing does not stay learned.",
    mentor:
      "After scoring, pick the one topic with the most misses and teach it aloud for five minutes.",
    remember: [
      "A modifier needs a documented reason.",
      "Routine post-op visits in the global period are not billed.",
      "Add-on codes never stand alone.",
    ],
  },
  {
    title: "Practice set C: claims, denials, and compliance",
    desc: "Sixteen items on remittance codes, payers, A/R math, appeals, and honest-coding decisions.",
    time: "50 min",
    objectives: [
      "Interpret remittance codes and choose the next action.",
      "Calculate A/R metrics and apply coordination of benefits.",
      "Respond to compliance situations calmly and correctly.",
    ],
    concept: `<p>This set mixes the back-end skills of a coder VA. Answer each item in a sentence, then compare. Several items are decision questions: your answer should name the action and the reason.</p>`,
    steps: [
      "Spend about three minutes per item.",
      "Write the action and the reason.",
      "Compare with the answer and mark your confidence level.",
      "Log misses by area: remittance, payers, math, compliance, security.",
      "Revisit the matching lessons.",
      "Retry after 24 hours.",
    ],
    lab: [
      [
        "1. A remittance line shows CO-45 for $60.",
        "A contractual write-off. Do not bill the patient.",
      ],
      [
        "2. A remittance line shows PR-2 $25.",
        "Coinsurance, which is patient responsibility. Bill the secondary or the patient.",
      ],
      [
        "3. A claim is denied CO-16, missing information (a referring provider NPI).",
        "Add the missing information and submit a corrected claim.",
      ],
      [
        "4. A claim is denied CO-29, timely filing.",
        "Check for proof of timely filing. If you have it, appeal with proof. If not, write off per policy and fix the root cause.",
      ],
      [
        "5. A lab test is denied CO-97 as included in another service.",
        "Check NCCI edits and the documentation. If the test was truly distinct, correct with a supported modifier and appeal. Otherwise write off per policy.",
      ],
      [
        "6. A clearinghouse report says a claim was rejected for an invalid subscriber ID.",
        "It is a rejection, not a denial. Correct the ID from verified eligibility information and resubmit.",
      ],
      [
        "7. A patient has Medicaid and a commercial plan.",
        "Bill the commercial plan first. Medicaid is the payer of last resort.",
      ],
      [
        "8. A child is covered by both married parents. One has a birthday in April and the other in October.",
        "The parent with the earlier birthday in the calendar year (April) has the primary plan under the birthday rule, unless a court order says otherwise.",
      ],
      [
        "9. Total A/R is $90,000 and average daily charges are $1,500.",
        "Days in A/R = 90,000 ÷ 1,500 = 60 days.",
      ],
      [
        "10. Charges $130,000, contractual adjustments $10,000, payments $108,000.",
        "Net collection rate = 108,000 ÷ (130,000 − 10,000) = 90%.",
      ],
      [
        "11. 475 of 500 claims were accepted on first submission.",
        "Clean claim rate = 95%.",
      ],
      [
        "12. A supervisor tells you to code 99215 for every visit this week.",
        "Decline politely, explain that codes must follow documentation, offer to review documentation opportunities, and escalate to compliance if the instruction continues.",
      ],
      [
        "13. You discover that a pattern of claims overbilled a code for months.",
        "Report it to your lead or compliance officer so the organization can assess and return any overpayment, which generally must be reported and returned within 60 days of identification for Medicare.",
      ],
      [
        "14. A new client has no BAA and asks you to download charts to your personal laptop.",
        "Decline until a BAA is signed and approved remote-access methods are provided.",
      ],
      [
        "15. A client in a state Medicaid program asks you to work on their claims from the Philippines.",
        "Ask the client in writing whether offshore access is permitted by the contract and the program rules. Do not access PHI until it is confirmed.",
      ],
      [
        "16. A Medicare Part B denial arrives. What is the first appeal level and its deadline?",
        "A redetermination, requested within 120 days of the initial determination. Always read the denial letter for your own deadline.",
      ],
    ],
    case: "You scored 12 of 16, with misses on A/R formulas and the birthday rule.",
    model:
      "Write each formula on a card and practice with five new numbers. Add the birthday rule to your COB flow chart. Retake those items tomorrow. Compliance items you got right but hesitated on deserve one more role-play.",
    mistakes: [
      "Skipping the reasoning part of decision questions.",
      "Memorizing answers without understanding them.",
      "Ignoring the security items.",
    ],
    drills: [
      "Complete all 16 items.",
      "Create formula cards for days in A/R, net collection rate, and clean claim rate.",
      "Role-play items 12 and 14 with a partner.",
    ],
    rubric: [
      "Answers name an action and a reason.",
      "Math matches the formulas.",
      "Compliance and security answers are calm and specific.",
      "Misses were reviewed and retried.",
    ],
    scenario:
      "Your supervisor asks you to adjust documentation so a denied claim will be paid. What do you do?",
    answers: [
      "Make the change quietly",
      "Decline to alter documentation and escalate through compliance",
      "Ask the provider to rewrite the whole note",
    ],
    correct: 1,
    why: "Documentation cannot be altered to support payment. The right path is to decline and use the compliance process.",
    taglish:
      "Ito ay practice ng back-end skills: remittance codes, payers, A/R math, at compliance. Isulat ang aksyon at dahilan sa bawat item. Sa mga decision question, kalmado at malinaw ang sagot: tumanggi nang maayos, ipaliwanag ang rules, at i-escalate kung kailangan. Huwag baguhin ang chart para lang mabayaran.",
    tip: "In decision questions, your first words should be the action: ‘Decline,’ ‘Verify,’ ‘Correct,’ or ‘Escalate.’ Reasoning follows.",
    mentor:
      "Role-play two of the compliance items with a partner and swap who plays the supervisor.",
    remember: [
      "Name the action first, then the reason.",
      "Know the three A/R formulas cold.",
      "Never alter documentation to get paid.",
    ],
  },
  {
    title: "Coder interview and portfolio preparation",
    desc: "Prepare honest, specific answers to technical, scenario, and ethics questions, and build a fictional-samples portfolio.",
    time: "45 min",
    objectives: [
      "Answer common coding interview questions with specific, honest examples.",
      "Prepare for a coding test.",
      "Assemble a portfolio labeled as fictional training work.",
    ],
    concept: `<p>Interviewers for coding roles test three things: technical accuracy, judgment under pressure, and honesty. Expect a coding test, scenario questions, and questions about security and compliance. Your best preparation is practice you can describe in specifics.</p>
<p>Be honest about your experience level. If your coding practice is from training, say so. Explain how you check your work, how you handle uncertainty, and how you ask questions. A candidate who says ‘I query when documentation is unclear’ is stronger than one who says ‘I never need to ask.’</p>
<p>A strong portfolio has: a short list of fictional coded charts with reasoning notes, an error log and improvement summary, a sample query, a sample appeal letter, a formula sheet, and a note of your credentials and plans. Label everything as fictional training work. Never include real patient information.</p>`,
    steps: [
      "Write one-paragraph answers to the questions in the lab below.",
      "Say them aloud and time yourself to about 90 seconds each.",
      "Prepare two short stories about checking your own work and fixing an error.",
      "Practice a timed coding test using a practice set.",
      "Assemble your portfolio and have someone review it.",
      "Prepare three questions to ask the employer about audits, training, and tools.",
    ],
    lab: [
      [
        "“How do you make sure your codes are accurate?”",
        "Model: ‘I read the full note first, code from the provider's documentation, verify in the Tabular List or the code book with the current edition, check modifiers and edits, and keep an error log from audits. If documentation is unclear, I send a non-leading query.’",
      ],
      [
        "“What do you do when a provider does not answer a query?”",
        "Model: ‘I follow the practice's escalation policy: follow up within the agreed timeframe, then notify the coding lead. I do not guess and I do not code an unsupported diagnosis. The claim stays on hold or follows the policy for unanswered queries.’",
      ],
      [
        "“Explain modifier 25.”",
        "Model: ‘It reports a significant, separately identifiable E/M on the same day as a procedure. I use it only when the note shows a separate problem and separate work, not by default.’",
      ],
      [
        "“Your supervisor asks you to code higher to meet a target. What do you do?”",
        "Model: ‘I explain that I can only code what is documented, offer to review documentation opportunities through education, and escalate to compliance if pressured. I keep factual records.’",
      ],
      [
        "“How do you protect PHI when working remotely?”",
        "Model: ‘I work only through approved devices or virtual desktops with multi-factor authentication, in a private space, with screen lock. I never use personal email or unapproved tools, and I report incidents immediately. A BAA must be in place first.’",
      ],
      [
        "“Tell me about a mistake you made.”",
        "Model: describe a real or practice-set error, what you found, how you corrected it, and the check you added. Do not claim you never make mistakes.",
      ],
    ],
    case: "In a coding test, you are unsure about one item and the time is almost up.",
    model:
      "Answer the items you are confident about first, note your reasoning on the uncertain item, and select the best-supported answer rather than leaving it blank if there is no penalty. Do not rush the final check of the others. After the test, review the item and add the rule to your error log.",
    mistakes: [
      "Claiming experience you do not have.",
      "Saying you never ask queries.",
      "Including real patient information in a portfolio.",
    ],
    drills: [
      "Write and rehearse six answers from the lab section.",
      "Assemble a portfolio of fictional charts with reasoning notes and an error log.",
      "Run a mock interview with a partner and ask for one improvement.",
    ],
    rubric: [
      "Answers are specific and honest.",
      "Portfolio items are labeled fictional.",
      "Ethics and security answers are calm and clear.",
      "You prepared questions for the employer.",
    ],
    scenario:
      "An interviewer asks how many years of coding experience you have. You have only practice experience. What do you say?",
    answers: [
      "Exaggerate to seem competitive",
      "Describe your practice work honestly, your accuracy checks, and your plan for supervised experience",
      "Avoid the question",
    ],
    correct: 1,
    why: "Honest, specific answers build trust. Employers value accuracy and integrity over inflated claims.",
    taglish:
      "Sa interview, tatlo ang sinusubok: technical na tama, judgment, at honesty. Maging tapat sa antas ng experience mo at sabihin kung paano mo tsine-check ang trabaho. Ang magandang sagot ay ‘nagku-query ako kapag unclear.’ Sa portfolio, lagyan ng label na fictional training work at huwag maglagay ng totoong impormasyon ng pasyente.",
    tip: "Prepare two stories using the format: situation, what I did, what I changed. They work for many different questions.",
    mentor:
      "Record yourself answering three questions and listen for filler words and vague claims.",
    remember: [
      "Be honest about experience and specific about how you check your work.",
      "Say that you query when unsure. It signals good judgment.",
      "Label every portfolio sample as fictional training work.",
    ],
  },
]);
