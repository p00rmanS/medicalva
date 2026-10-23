// Medical VA Foundations additions: practice operations and remote work skills.
addCodingLessons([
  {
    title: "Verify eligibility and benefits",
    desc: "Check coverage before the visit, read a benefits response, and document what you found without promising payment.",
    time: "40 min",
    objectives: [
      "List the information needed to verify eligibility.",
      "Read the key parts of a benefits response.",
      "Document verification clearly and explain it honestly to a patient.",
    ],
    concept: `<p>Eligibility verification confirms that a patient has active coverage and shows what the plan says about the visit. It is one of the most valuable front-end tasks because errors here become denials later. Electronic eligibility uses a pair of standard transactions: a <b>270</b> inquiry and a <b>271</b> response. You can also verify through a payer portal or by phone.</p>
<p>Gather the patient's name, date of birth, subscriber ID, group number, payer name or payer ID, the subscriber's details if the patient is a dependent, and the date of service. For Medicare, the patient has a Medicare Beneficiary Identifier (MBI). For Medicaid, use the state's eligibility portal.</p>
<p>Verify and record: coverage active on the date of service, plan type (HMO, PPO, EPO, Medicare Advantage), copay and coinsurance for the visit type or specialty, deductible and how much remains, out-of-pocket maximum, whether a referral or prior authorization is required, network status of the provider, and any other coverage that affects order of payment. Record the date and time, the source (portal, 271, or phone), the representative's name, and the call reference number.</p>
<p>A verification is <b>not a guarantee of payment</b>. Tell patients that benefits are quoted by the plan and final payment depends on the claim. Never say a service is ‘fully covered’ unless the payer's response states it and your policy allows you to say so.</p>`,
    terms: [
      ["270 / 271", "Eligibility inquiry / eligibility response transactions."],
      ["MBI", "Medicare Beneficiary Identifier."],
      ["Subscriber", "The person who holds the policy."],
      [
        "Out-of-pocket maximum",
        "The most a member pays in a plan year for covered services.",
      ],
      ["Network status", "Whether the provider has a contract with the plan."],
      [
        "Reference number",
        "The payer's call or transaction number for your records.",
      ],
    ],
    steps: [
      "Collect the patient and subscriber details and the date of service.",
      "Use the approved channel to check eligibility and benefits for that visit type.",
      "Record coverage dates, plan type, cost-sharing, deductible status, and authorization or referral requirements.",
      "Check for secondary coverage and coordination of benefits.",
      "Document the source, date, time, and reference number.",
      "Tell the patient the estimate in plain language and note that it is not a guarantee.",
    ],
    case: "A patient's 271 response shows active coverage and a $30 specialist copay. Two days later you notice the plan requires a referral for specialist visits.",
    model:
      "Update the verification note and notify the front desk and the patient through the approved process before the visit. Check whether the referral exists. If not, route to the referral coordinator. Document the time and the person contacted. An active coverage result alone does not mean the visit will be paid.",
    mistakes: [
      "Verifying that coverage exists and skipping benefits and authorization.",
      "Saying a visit is ‘fully covered.’",
      "Not recording the reference number.",
    ],
    drills: [
      "Create a verification checklist with 12 fields.",
      "Write a patient script that explains copay and deductible without promising payment.",
      "Document a fictional verification from start to finish.",
    ],
    rubric: [
      "Required data is complete.",
      "Authorization and referral rules are checked.",
      "The note contains source, date, and reference number.",
      "The patient message avoids guarantees.",
    ],
    scenario:
      "A response shows active coverage. A patient asks, ‘So everything is covered, right?’ What do you say?",
    answers: [
      "Yes, everything is covered",
      "Your plan shows active coverage and these cost-sharing amounts; final payment depends on the claim",
      "I cannot tell you anything",
    ],
    correct: 1,
    why: "Eligibility results describe coverage and benefits, but payment depends on the claim and plan rules.",
    taglish:
      "Ang eligibility check ay pagsiguro na active ang coverage at alamin ang benefits para sa visit. Ang 270 ay inquiry at ang 271 ay response. I-check ang copay, deductible, referral o authorization, at network status. Isulat ang source, petsa, oras, at reference number. At huwag mong sabihing ‘fully covered’; ang verification ay hindi garantiya ng bayad.",
    tip: "Verify the day before, not the day of. You get a day to fix a surprise instead of a few minutes.",
    mentor:
      "Role-play a patient call asking what their visit will cost, using only the information in a fictional response.",
    remember: [
      "A 270 asks and a 271 answers.",
      "Check benefits, authorization, and network status, not only active coverage.",
      "Eligibility is never a guarantee of payment.",
    ],
  },
  {
    title: "Credentialing and payer enrollment support",
    desc: "Track the identifiers, profiles, and deadlines that let providers bill payers, without handling anything you should not sign.",
    time: "40 min",
    objectives: [
      "Name the main provider identifiers and enrollment systems.",
      "Build a credentialing tracker with owners and deadlines.",
      "Know the limits of what an assistant may do on a provider's behalf.",
    ],
    concept: `<p>Before a provider can bill a payer, the provider must be enrolled and credentialed. <b>Credentialing</b> verifies qualifications such as license, education, board certification, malpractice coverage, and work history. <b>Enrollment</b> sets the provider up to bill the payer and defines the effective date. Delays here mean claims cannot be paid.</p>
<p>Common identifiers and systems: the <b>NPI</b> from NPPES (a 10-digit number that does not expire but whose information must be kept current), <b>CAQH ProView</b> (a shared profile many commercial payers use, which the provider must re-attest regularly, typically every 120 days), and <b>PECOS</b> for Medicare enrollment, using CMS-855 application forms. Medicaid enrollment is handled through each state. Commercial credentialing commonly takes months and recredentialing generally repeats about every three years. Medicare revalidation is generally every five years. Check each payer's current process.</p>
<p>A VA can gather documents, track expirations, remind the provider of re-attestation, and monitor application status. A VA must not sign attestations or applications for the provider, must not share passwords, and should use delegated access where the system allows it. Credentialing data contains sensitive personal information; treat it with the same care as PHI.</p>`,
    terms: [
      ["NPI", "National Provider Identifier."],
      [
        "NPPES",
        "National Plan and Provider Enumeration System, where NPIs are registered.",
      ],
      [
        "CAQH ProView",
        "Online provider profile used by many commercial payers.",
      ],
      ["PECOS", "Medicare's Provider Enrollment, Chain, and Ownership System."],
      ["Credentialing", "Verification of a provider's qualifications."],
      ["Recredentialing", "Periodic repeat of credentialing."],
      ["Effective date", "The date a provider can start billing a payer."],
    ],
    steps: [
      "List the payers each provider needs and the status of each application.",
      "Collect licenses, board certificates, malpractice certificates, DEA registration where applicable, and work history, and set expiration reminders.",
      "Help prepare applications, but have the provider review and sign all attestations.",
      "Track application dates, follow-up dates, and effective dates in a tracker.",
      "Remind the provider about CAQH re-attestation and revalidation deadlines.",
      "Do not schedule patients with a payer until the effective date is confirmed.",
    ],
    case: "A new physician starts on the 1st, but a major commercial plan has not issued an effective date.",
    model:
      "Check the application status and follow up with the payer. Tell the practice manager the effective date is not confirmed so patients with that plan are scheduled according to policy (for example, held, rescheduled, or informed of out-of-network status). Do not backdate or assume retroactive coverage. Record each contact.",
    mistakes: [
      "Signing or attesting for the provider.",
      "Sharing a login instead of using delegate access.",
      "Letting a license or malpractice certificate lapse unnoticed.",
    ],
    drills: [
      "Build a tracker with provider, payer, step, owner, submission date, follow-up date, and effective date.",
      "Create an expiration calendar for five credentials.",
      "Write a message asking a provider to review and re-attest their CAQH profile.",
    ],
    rubric: [
      "The tracker has owners and dates.",
      "Expiration reminders exist.",
      "Attestations are always the provider's.",
      "Sensitive data is handled carefully.",
    ],
    scenario:
      "The provider asks you to log in to CAQH and attest on their behalf using their password. What do you do?",
    answers: [
      "Do it to save time",
      "Decline to attest for them and use delegated access to prepare the profile for their review",
      "Share the password with the billing company",
    ],
    correct: 1,
    why: "Attestations are legal statements by the provider. Assistants can prepare information with delegated access but should not attest or share passwords.",
    taglish:
      "Bago makapag-bill ang provider sa isang payer, kailangan siyang naka-enroll at na-credential. Ang NPI ay galing sa NPPES, ang CAQH ProView ay profile na ginagamit ng maraming commercial payers, at ang PECOS ay para sa Medicare. Puwede kang tumulong mag-track ng documents at deadlines, pero huwag kang pipirma o mag-a-attest para sa provider at huwag magbahagi ng password.",
    tip: "Set expiration reminders 90 days ahead. Credentialing delays are measured in months, so late renewals are expensive.",
    mentor:
      "Build a tracker with five fictional providers and see if you can spot the next three deadlines in under a minute.",
    remember: [
      "NPI, CAQH, and PECOS are the core identifiers and systems to track.",
      "Never attest or sign for a provider, and never share passwords.",
      "Do not schedule with a payer before the effective date is confirmed.",
    ],
  },
  {
    title: "Answer patient billing questions",
    desc: "Handle common billing calls with plain language, accurate numbers, and a clear next step.",
    time: "35 min",
    objectives: [
      "Explain an explanation of benefits (EOB) and a bill in plain language.",
      "Respond to balance, payment plan, and dispute calls.",
      "Know when to escalate and what never to promise.",
    ],
    concept: `<p>Billing calls are emotional because they involve money and health. Your job is to verify identity, listen, explain the numbers, and give a clear next step. Use the approved script and system. Never promise a waiver, a refund, or a time frame that you cannot confirm.</p>
<p>Common confusion: an <b>EOB</b> from the insurer says ‘this is not a bill.’ It shows what was charged, what the plan allowed, what it paid, and what the patient may owe. The practice's <b>statement</b> shows what the practice is asking the patient to pay. They should match once the claim is complete. If they do not, route to billing.</p>
<p>Use short sentences and avoid jargon. Replace ‘adjudicated’ with ‘processed.’ Replace ‘contractual adjustment’ with ‘the discount your plan has with us.’ Offer approved options: a payment plan, financial assistance, or a call with a billing specialist. Do not give medical advice and do not discuss clinical details beyond what is necessary.</p>`,
    terms: [
      ["EOB", "Explanation of Benefits from the insurer. Not a bill."],
      ["Statement", "The practice's request for payment."],
      ["Allowed amount", "The amount the plan approves for a service."],
      ["Payment plan", "An agreement to pay a balance over time."],
      [
        "Financial assistance",
        "A program that reduces or waives a balance based on need, per policy.",
      ],
    ],
    steps: [
      "Verify the caller's identity using the approved process.",
      "Listen to the whole concern and restate it.",
      "Open the account and the remittance, and compare the statement with the EOB.",
      "Explain the numbers in plain language.",
      "Offer approved options and the next step with a realistic timeline.",
      "Document the call and escalate disputes.",
    ],
    lab: [
      [
        "A caller says, ‘My insurance already paid. Why am I getting a bill?’",
        "Model: ‘I understand the confusion. Your plan processed the claim and paid its share. The remaining $160 is the part your plan says you owe: a $150 deductible and $10 coinsurance. I can send you a copy of the explanation of benefits and set up a payment plan if you would like.’",
      ],
      [
        "A caller says, ‘I can't afford this. Can you waive it?’",
        "Model: ‘I'm sorry this is hard. I can't decide a waiver myself, but I can tell you about our financial assistance application and payment plan options, and I'll note your request for our billing team.’",
      ],
      [
        "A caller believes the bill is wrong because they were charged for a service they say they did not receive.",
        "Model: verify identity, note the date and service, say you will ask billing to review, give a realistic timeframe from policy, and avoid arguing or promising an outcome.",
      ],
    ],
    case: "A patient says, ‘If I pay this today, will my insurance pay me back?’",
    model:
      "Do not guess. Explain that you can show what the plan processed and that questions about reimbursements from a plan should go to the insurer. Offer to send the explanation of benefits and to have billing review the account. Document the call.",
    mistakes: [
      "Using jargon the patient does not understand.",
      "Promising a waiver or refund.",
      "Arguing about whether the bill is fair.",
    ],
    drills: [
      "Rewrite five jargon phrases into plain words.",
      "Role-play the three lab calls with a partner.",
      "Write a one-page billing call checklist.",
    ],
    rubric: [
      "Identity is verified.",
      "Explanations are plain and accurate.",
      "No promises beyond authority.",
      "The call is documented.",
    ],
    scenario:
      "A caller asks you to waive a balance. What is the correct response?",
    answers: [
      "Agree to waive it to end the call",
      "Explain the available options, note the request, and route it to billing for a decision",
      "Refuse and end the call",
    ],
    correct: 1,
    why: "Waivers are decided by authorized staff. You can explain options and route the request.",
    taglish:
      "Sa billing calls, i-verify muna ang identity, pakinggan ang concern, at ipaliwanag ang numbers sa simpleng salita. Ang EOB ay hindi bill; ang statement ang hinihingi ng practice. Huwag mangako ng waiver o refund. Ialok ang payment plan o financial assistance ayon sa policy at i-route sa billing ang disputes.",
    tip: "Say the amount and the reason together: ‘$160, which is your deductible and coinsurance.’ A number without a reason sounds like an accusation.",
    mentor:
      "Practice the same call twice: once with jargon and once in plain words, and notice the difference.",
    remember: [
      "An EOB is not a bill.",
      "Explain numbers with reasons in plain language.",
      "Never promise a waiver or refund you cannot approve.",
    ],
  },
  {
    title: "Common medication vocabulary for non-clinical staff",
    desc: "Recognize drug classes, routes, schedules, and look-alike names so you can route requests accurately without giving advice.",
    time: "40 min",
    objectives: [
      "Differentiate brand and generic names and recognize common class endings.",
      "Read common routes and controlled-substance schedule terms.",
      "Verify spelling and details for refill requests without giving medication advice.",
    ],
    concept: `<p>You do not need to know how drugs work, but you need to recognize common names so you can route requests accurately and spot errors. Every drug has a <b>generic</b> name (the active ingredient) and often one or more <b>brand</b> names. Many generic names end in a clue that points to the class.</p>
<p>Class clues: <em>-statin</em> (cholesterol-lowering), <em>-pril</em> (ACE inhibitors), <em>-sartan</em> (angiotensin receptor blockers), <em>-olol</em> (beta blockers), <em>-prazole</em> (acid reducers, proton pump inhibitors), <em>-cillin</em> (penicillin-type antibiotics), <em>-mycin</em> (several antibiotics), <em>-glutide</em> (GLP-1 medicines), <em>-gliflozin</em> (SGLT2 inhibitors). These clues are for vocabulary only. Never use them to give advice or to guess what a patient takes a drug for.</p>
<p>Routes: PO (by mouth), SL (under the tongue), IM (into muscle), IV (into a vein), SC or SQ (under the skin), topical, and inhaled. In the United States, controlled substances are grouped into schedules from II (highest abuse potential with accepted medical use) to V. They have stricter refill and prescribing rules, so route those requests carefully.</p>
<p>Look-alike and sound-alike names cause medication errors. Read back the spelling, strength, and the pharmacy details letter by letter. Capture exactly what the patient or pharmacy says and route to the authorized clinical team.</p>`,
    terms: [
      ["Generic name", "The active ingredient name, such as atorvastatin."],
      ["Brand name", "The manufacturer's name for the product."],
      [
        "PO / SL / IM / IV / SC",
        "By mouth / under the tongue / into muscle / into a vein / under the skin.",
      ],
      [
        "Schedule II–V",
        "U.S. classes of controlled substances with different rules.",
      ],
      ["Refill", "A renewal of an existing prescription."],
      ["Look-alike, sound-alike", "Drug names that are easy to confuse."],
    ],
    steps: [
      "Write the drug name exactly as given. Ask the caller to spell it.",
      "Capture strength, form, directions as stated, and the pharmacy name and phone.",
      "Read the details back to the caller.",
      "Check the chart for the same medication on the active list, without interpreting it.",
      "Route the request to the authorized clinical team under the practice's refill procedure.",
      "Document the request and the time, and tell the patient the usual response time, not a promise.",
    ],
    lab: [
      [
        "Match each generic name to the class clue: lisinopril, atorvastatin, omeprazole, amoxicillin, metoprolol.",
        "Lisinopril (-pril, ACE inhibitor), atorvastatin (-statin), omeprazole (-prazole, acid reducer), amoxicillin (-cillin, penicillin-type antibiotic), metoprolol (-olol, beta blocker). These are vocabulary clues, not advice.",
      ],
      [
        "A caller says, ‘I need my hydroxyzine refilled.’ Your note says hydralazine.",
        "These look alike. Do not choose. Ask the caller to spell the name, read back the strength and the pharmacy, and check against the active medication list. If still unclear, route with the discrepancy flagged to the clinical team.",
      ],
      [
        "A patient asks, ‘Can I take two of these today since I missed a dose?’",
        "That is a clinical question. Do not answer. Record the question and route it to authorized clinical staff under the escalation procedure.",
      ],
    ],
    case: "A caller asks for a refill of a controlled substance and says it is urgent because she is out of medication.",
    model:
      "Capture the medication, strength, pharmacy, and the reason for urgency in the caller's words. Do not promise a refill or a time. Route it as urgent according to the practice's procedure, noting that it is a controlled substance. Tell the patient the practice's usual process and what the team will do next.",
    mistakes: [
      "Guessing between similar drug names.",
      "Telling a patient how to take a medication.",
      "Promising a refill time.",
    ],
    drills: [
      "Make a list of 15 common drugs with class clue and route.",
      "Practice spelling back five look-alike pairs.",
      "Write a refill request intake template.",
    ],
    rubric: [
      "Names, strengths, and pharmacies are read back.",
      "No medication advice is given.",
      "Controlled substances are routed with care.",
      "Discrepancies are flagged.",
    ],
    scenario:
      "A caller's drug name sounds like two different medications. What should you do?",
    answers: [
      "Pick the more common drug",
      "Ask for the spelling, read it back, check the active list, and flag any discrepancy to the clinical team",
      "Tell the caller to guess",
    ],
    correct: 1,
    why: "Look-alike names cause errors. Confirm the spelling and details, and flag uncertainty to clinical staff.",
    taglish:
      "Hindi mo kailangang alamin kung paano gumagana ang gamot, pero dapat makilala mo ang pangalan at klase para tama ang pag-route. May generic at brand na pangalan. May mga clue sa dulo ng pangalan: -statin, -pril, -olol, -prazole, -cillin. Para sa vocabulary lang ito at hindi para magbigay ng payo. Kapag magkapareho ang tunog ng dalawang gamot, ipa-spell at basahin pabalik.",
    tip: "Always read back strength, form, and pharmacy as well as the name. Many errors are in the number, not the word.",
    mentor:
      "Quiz a partner on ten generic names and their class clues, then practice routing a refill request.",
    remember: [
      "Class endings are vocabulary clues, not advice.",
      "Read back spelling, strength, and pharmacy details.",
      "Medication questions go to authorized clinical staff.",
    ],
  },
  {
    title: "Spreadsheet skills for medical VAs",
    desc: "Use formulas, filters, dropdowns, and pivot tables to build trackers that are accurate and safe.",
    time: "50 min",
    objectives: [
      "Use core formulas for counts, sums, lookups, and dates.",
      "Build data validation and conditional formatting to prevent errors.",
      "Keep trackers free of unnecessary PHI.",
    ],
    concept: `<p>Spreadsheets run much of a VA's workflow: referral trackers, A/R lists, credential trackers, and KPI reports. These formulas give you most of what you need.</p>
<ul>
<li><b>=SUM(range)</b> adds values. <b>=COUNTA(range)</b> counts non-empty cells. <b>=COUNTIF(range, "Open")</b> counts cells equal to a value.</li>
<li><b>=SUMIFS(sum_range, criteria_range, criteria)</b> adds values that meet one or more conditions, such as total A/R for one payer.</li>
<li><b>=IF(test, value_if_true, value_if_false)</b> shows a status, such as ‘Overdue’ when a due date has passed.</li>
<li><b>=XLOOKUP(value, lookup_range, return_range)</b> or <b>=VLOOKUP</b> finds a value in a table, such as a payer's phone number.</li>
<li><b>=TODAY()</b> returns the current date. <b>=NETWORKDAYS(start, end)</b> counts working days between two dates.</li>
</ul>
<p>Prevent errors with <b>data validation</b> dropdowns for status and owner, <b>conditional formatting</b> to highlight overdue rows, frozen header rows, and protected formula columns. <b>Pivot tables</b> summarize data by category, such as denials by reason.</p>
<p><b>Safety.</b> Use the minimum PHI. Prefer an internal ID over names and dates of birth when the tracker allows it. Store files only in approved locations, restrict sharing, and never email a tracker with PHI to a personal account. When opening CSV files, check that ID numbers, ZIP codes, and NPIs have not lost leading zeros or turned into scientific notation.</p>`,
    steps: [
      "Define the columns first: item, owner, status, due date, last action, next action.",
      "Add a dropdown for status and owner, and a rule for date columns.",
      "Add a formula for ‘Overdue’ and a conditional format to highlight it.",
      "Add a summary section with COUNTIF or a pivot table.",
      "Protect formula cells and share only with the people who need access.",
      "Review the file for PHI that is not needed and remove it.",
    ],
    lab: [
      [
        "You need the number of referrals marked ‘Open’ in column D (rows 2–200).",
        '=COUNTIF(D2:D200,"Open").',
      ],
      [
        "You need total A/R in column F for rows where column C equals ‘Aetna’ (rows 2–500).",
        '=SUMIFS(F2:F500,C2:C500,"Aetna").',
      ],
      [
        "You want column H to say ‘Overdue’ when the due date in G is before today and the status in D is not ‘Closed.’",
        '=IF(AND(G2&lt;TODAY(),D2&lt;&gt;"Closed"),"Overdue","").',
      ],
      [
        "You want working days between a submission date in B2 and today.",
        "=NETWORKDAYS(B2,TODAY()).",
      ],
      [
        "Days in A/R when total A/R is in B2 and average daily charges are in B3.",
        "=B2/B3.",
      ],
    ],
    case: "A teammate's tracker has full patient names, birth dates, and diagnoses in columns anyone with the link can open.",
    model:
      "Stop sharing and tell the supervisor right away. Restrict access to named staff, remove unnecessary PHI, replace identifiers with internal IDs where possible, and report the exposure under the incident process. Do not wait to see if anyone noticed.",
    mistakes: [
      "Letting free-text status values create inconsistent counts.",
      "Putting PHI in a link-shared sheet.",
      "Typing over formulas.",
    ],
    drills: [
      "Build a referral tracker with validation, an overdue formula, and a summary.",
      "Create a pivot table of fictional denials by reason.",
      "Write the five formulas in the lab from memory.",
    ],
    rubric: [
      "Formulas return correct results on test data.",
      "Dropdowns prevent inconsistent entries.",
      "PHI is minimized and access is restricted.",
      "Formulas are protected.",
    ],
    scenario: "Which formula counts the cells equal to ‘Open’ in D2:D200?",
    answers: [
      '=SUM(D2:D200,"Open")',
      '=COUNTIF(D2:D200,"Open")',
      '=IF(D2:D200,"Open")',
    ],
    correct: 1,
    why: "COUNTIF counts cells that meet a condition, such as equal to ‘Open.’",
    taglish:
      "Mahalaga ang spreadsheet sa trabaho ng VA. Gamitin ang COUNTIF, SUMIFS, IF, XLOOKUP, TODAY, at NETWORKDAYS. Maglagay ng dropdown para pare-pareho ang status, at conditional formatting para makita ang overdue. Pinakamahalaga: kaunting PHI lang, limitadong sharing, at i-report agad kung may na-expose.",
    tip: "Build the summary block before you fill the data. If the summary can't answer your question, add a column now, not after 500 rows.",
    mentor:
      "Rebuild your referral tracker from scratch without looking, then compare it with your first version.",
    remember: [
      "COUNTIF, SUMIFS, IF, and lookups cover most VA spreadsheet needs.",
      "Dropdowns and protection prevent errors.",
      "Use the minimum PHI and restrict sharing.",
    ],
  },
  {
    title: "Time-blocking and focus for remote work",
    desc: "Plan a day that protects accuracy, prevents burnout, and keeps handoffs clean across time zones.",
    time: "35 min",
    objectives: [
      "Plan a day with time blocks for queues, focused work, and follow-ups.",
      "Prioritize with urgency and impact.",
      "Set boundaries and handoff routines that work across time zones.",
    ],
    concept: `<p>Remote work gives you freedom and removes the structure of an office. Without a plan, urgent messages control your day. <b>Time-blocking</b> assigns work to specific parts of the day so that important tasks get focus.</p>
<p>A workable pattern: a start-of-day review of the queue and schedule; two or three focus blocks for work that needs accuracy, such as coding or claim review; short blocks for messages and calls; a mid-day break; an end-of-day handoff and plan for tomorrow. Coding and claim review suffer from multitasking, so protect uninterrupted time and silence unneeded notifications.</p>
<p>Prioritize with two questions: how urgent is it, and how much does it matter? Urgent and important items go first (a patient waiting, a deadline today). Important but not urgent items (process fixes, study) need scheduled time or they never happen. Urgent but low-impact items can often be batched or delegated. Low on both can wait.</p>
<p>Protect your health: take short breaks, look away from the screen every 20 minutes for 20 seconds, stand, and stop work at the agreed time. When you work with U.S. clients, write the time zone on every schedule, agree on response windows, and use a written handoff note at the end of each shift: done, in progress, blocked, and next.</p>`,
    terms: [
      ["Time-blocking", "Assigning tasks to specific blocks of time."],
      ["Batching", "Handling similar tasks together."],
      ["Deep work", "Focused, uninterrupted time for demanding work."],
      [
        "Handoff note",
        "A short end-of-shift summary of done, in progress, blocked, and next.",
      ],
      [
        "Response window",
        "The agreed time within which you reply to messages.",
      ],
    ],
    steps: [
      "List tomorrow's tasks with deadlines and estimated time.",
      "Rate each by urgency and impact.",
      "Place focus tasks into protected blocks and short tasks into message blocks.",
      "Add buffer time and breaks.",
      "At the end of the day, write the handoff note and the next day's top three.",
      "Review weekly: what took longer than planned, and why.",
    ],
    case: "A client expects instant replies, but you are mid-way through a claim review that needs focus.",
    model:
      "Agree on a response window with the client, such as replying within one hour during working hours, and use a clear status line. Tell them how to flag a true emergency. Use a short block between tasks to answer messages. If something is urgent, pause the review and note where you stopped so you can resume accurately.",
    mistakes: [
      "Treating every message as an emergency.",
      "Working without breaks and making more errors.",
      "Skipping the end-of-day handoff note.",
    ],
    drills: [
      "Design tomorrow's schedule with three focus blocks.",
      "Write a handoff note template with four headings.",
      "Agree on a response window script for a new client.",
    ],
    rubric: [
      "Priorities are justified.",
      "Focus blocks are protected.",
      "Handoff notes are complete.",
      "Time zones are written in every schedule.",
    ],
    scenario:
      "A task is important but not urgent, and keeps being pushed aside. What helps most?",
    answers: [
      "Wait until it becomes urgent",
      "Schedule it in a protected block and treat it like an appointment",
      "Ignore it",
    ],
    correct: 1,
    why: "Important but not urgent work only gets done when it has a scheduled time.",
    taglish:
      "Kapag remote ka, walang office structure, kaya gumawa ng time blocks: review ng queue sa umpisa, dalawa o tatlong focus blocks para sa trabahong kailangan ng accuracy, maikling blocks para sa messages, at handoff note sa dulo. I-prioritize ayon sa urgent at importante. Magpahinga, at isulat ang time zone sa bawat schedule.",
    tip: "Protect your first focus block of the day. Accuracy work done fresh needs fewer corrections later.",
    mentor:
      "Plan tomorrow in 15 minutes tonight and review at the end of the day what changed.",
    remember: [
      "Time-block focus work and batch messages.",
      "Important but not urgent tasks need scheduled time.",
      "End each shift with a written handoff note.",
    ],
  },
]);
