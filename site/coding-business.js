// Coding track, sections 4-6: claims and denials, compliance and risk, and career launch.
addCodingLessons([
  {
    title: "Medical necessity and diagnosis linkage",
    desc: "Show the payer why each service was needed by linking it to the right diagnosis and coverage policy.",
    time: "40 min",
    objectives: [
      "Explain medical necessity and where payers publish coverage rules.",
      "Link services to diagnoses with correct pointers.",
      "Describe when an Advance Beneficiary Notice (ABN) matters.",
    ],
    concept: `<p>A payer pays for services it considers <b>medically necessary</b>: appropriate for the diagnosis, consistent with standards of care, and not primarily for convenience. Coverage rules live in <b>National Coverage Determinations (NCDs)</b> and <b>Local Coverage Determinations (LCDs)</b> for Medicare, and in medical policies for commercial plans. These documents often list the diagnosis codes that support a test or procedure.</p>
<p>On the claim, each service line carries a <b>diagnosis pointer</b>: a letter that points to the diagnosis in the claim header. The pointer is the coder's way of saying “this service was done because of this condition.” A line should point to the diagnoses that justify it, most relevant first. Do not add a diagnosis because it is on the covered list unless the documentation supports it.</p>
<p>For Medicare, when a provider expects Medicare may not pay for a service as not reasonable and necessary, the patient may be asked to sign an <b>ABN</b> before the service so liability is clear. Whether an ABN is needed depends on the service and payer, so ask your compliance lead.</p>`,
    terms: [
      [
        "NCD / LCD",
        "National / local Medicare coverage rules stating when a service is covered.",
      ],
      [
        "Diagnosis pointer",
        "The letter on a service line that points to the supporting diagnosis.",
      ],
      ["ABN", "Advance Beneficiary Notice of Noncoverage (Medicare)."],
      ["Medical policy", "A commercial payer's written coverage rules."],
      ["Frequency limit", "A cap on how often a covered service can be paid."],
    ],
    steps: [
      "List the services and the diagnoses documented for the encounter.",
      "Find the coverage rule or payer policy for any service likely to be reviewed.",
      "Link each service to the diagnosis that actually explains why it was done.",
      "Check frequency limits and required diagnosis lists.",
      "If a documented diagnosis does not meet coverage, do not add one. Route the case for an ABN review or provider clarification.",
      "Record the coverage source you used.",
    ],
    case: "A test is denied for medical necessity. The documentation shows a symptom that is not on the covered-diagnosis list, but the provider also documented a related condition in the assessment that is on the list and was not coded.",
    model:
      "Reopen the note. If the related condition was evaluated at the visit and documented in the assessment, add its code in the correct order and point the test to it, then submit a corrected claim or appeal as policy directs. If the condition was only in the history or was not evaluated, do not add it. Record the reasoning.",
    mistakes: [
      "Pointing every line to the first diagnosis.",
      "Choosing a diagnosis because it is on the covered list.",
      "Not documenting which coverage policy was checked.",
    ],
    drills: [
      "Find an LCD on the Medicare Coverage Database for a common test and summarize its covered diagnoses.",
      "Write the pointer plan for three fictional claims.",
      "Create a decision tree for ‘claim denied for medical necessity.’",
    ],
    rubric: [
      "Pointers match documentation.",
      "Coverage sources are cited.",
      "Diagnoses are never added solely to meet coverage.",
      "The next step for uncovered services is identified.",
    ],
    scenario:
      "A test needs a diagnosis from a covered list. The documented diagnosis is not on it. What now?",
    answers: [
      "Add a covered diagnosis that is not in the note",
      "Do not add one; route the claim for provider clarification, patient liability review, or appeal as appropriate",
      "Delete the test from the claim silently",
    ],
    correct: 1,
    why: "Diagnoses must come from the documentation. If coverage criteria are not met, follow the policy for notices, clarification, or appeal.",
    taglish:
      "Medical necessity ay patunay na kailangan talaga ang service para sa diagnosis. Hanapin ang coverage rule sa NCD, LCD, o payer policy. Sa claim, ang diagnosis pointer ang nag-uugnay ng service sa dahilan nito. Huwag kang magdagdag ng diagnosis na wala sa chart para lang pumasa sa covered list. Kung hindi covered, sundin ang proseso: ABN, clarification, o appeal.",
    tip: "Save the coverage page and date you checked in the claim notes. An audit asks, ‘What did you rely on?’",
    mentor:
      "Pick a common lab test and write the plain-language rule that would make it medically necessary.",
    remember: [
      "Each service line points to the diagnosis that justifies it.",
      "Never add a diagnosis only to meet coverage criteria.",
      "Cite the coverage source in your notes.",
    ],
    source:
      "CMS Medicare Coverage Database (NCDs and LCDs) and each payer's published medical policies.",
  },
  {
    title: "The CMS-1500, UB-04, and 837 claims",
    desc: "Read professional and institutional claim forms and know which fields cause the most rejections.",
    time: "45 min",
    objectives: [
      "Differentiate professional and institutional claims.",
      "Locate the key CMS-1500 fields.",
      "Explain how the electronic 837 relates to the paper forms.",
    ],
    concept: `<p>Physicians and other professionals bill on the <b>CMS-1500</b> (electronic: <b>837P</b>). Hospitals and other institutions bill on the <b>UB-04</b> (CMS-1450) (electronic: <b>837I</b>). Most claims are electronic. The paper forms remain the common reference for field names.</p>
<p>On the CMS-1500, the patient and insured details are at the top. Box 21 lists up to 12 ICD-10-CM diagnosis codes (A–L), with an indicator showing the code set. Box 24 holds the service lines: date of service (24A), place of service (24B), CPT/HCPCS and modifiers (24D), diagnosis pointer (24E), charges (24F), units (24G), and the rendering provider NPI (24J). Box 17 has the referring provider, Box 23 the prior authorization number, Box 25 the tax ID, Box 31 the provider signature, Box 32 the service facility, and Box 33 the billing provider. A claim line can point to up to four diagnoses.</p>
<p>The <b>NPI</b> (National Provider Identifier) is a 10-digit number for each provider and organization. Mismatches between the NPI, tax ID, and name registered with the payer are a top cause of rejections.</p>`,
    terms: [
      ["CMS-1500", "Professional claim form (paper)."],
      ["UB-04 (CMS-1450)", "Institutional claim form."],
      ["837P / 837I", "Electronic professional / institutional claims."],
      ["NPI", "National Provider Identifier."],
      [
        "Place of service (POS)",
        "A two-digit code for where the service happened.",
      ],
      [
        "Taxonomy code",
        "A code that describes a provider's type and specialty.",
      ],
    ],
    steps: [
      "Check patient, insured, and payer details against the registration and eligibility record.",
      "Enter diagnoses in order in Box 21 using the correct code set indicator.",
      "Enter each service line with date, POS, code, modifiers, pointer, charge, and units.",
      "Add referring provider, authorization number, and any claim notes required by the payer.",
      "Verify rendering and billing NPI, tax ID, and taxonomy.",
      "Scrub the claim and fix every edit before sending.",
    ],
    case: "A batch of claims is rejected because the billing provider's name does not match the NPI registry.",
    model:
      "Compare the billing provider name and NPI on the claim with the NPPES registry and the payer enrollment record. Correct the practice management system's provider setup, resubmit the rejected claims, and add a quarterly provider data audit. Rejected claims never entered adjudication, so no appeal is needed.",
    mistakes: [
      "Using last year's provider information after a change.",
      "Entering more than four diagnosis pointers on one line.",
      "Treating a rejection like a denial.",
    ],
    drills: [
      "Label a blank CMS-1500 from memory and then check.",
      "Write a pre-submission checklist of ten items.",
      "Explain the difference between a rejection and a denial.",
    ],
    rubric: [
      "Key fields and their purposes are correct.",
      "NPI, tax ID, and taxonomy are verified.",
      "Pointer rules are followed.",
      "The checklist can be used by someone new.",
    ],
    scenario:
      "A claim is bounced by the clearinghouse before the payer sees it. What is this called?",
    answers: ["A denial", "A rejection", "An appeal"],
    correct: 1,
    why: "A rejected claim failed front-end edits and was never processed. A denial happens after the payer adjudicates a claim.",
    taglish:
      "CMS-1500 ang form ng professional claim (837P electronic) at UB-04 para sa institutions (837I). Sa Box 21 ang diagnoses, sa Box 24 ang service lines, at ang pointer ay naka-letra A hanggang L, hanggang apat bawat line. Ang NPI at tax ID ay dapat tugma sa payer record. Magkaiba ang rejection (hindi pa napo-process) at denial (na-process na pero hindi binayaran).",
    tip: "Rejections are free to fix. Denials are expensive. Catch errors at the scrubber stage and you save both time and appeals.",
    mentor:
      "Print a blank CMS-1500 and color-code patient, provider, diagnosis, and service-line areas.",
    remember: [
      "CMS-1500 / 837P = professional. UB-04 / 837I = institutional.",
      "Box 21 holds diagnoses, Box 24 service lines, up to 4 pointers per line.",
      "Rejection = never processed. Denial = processed and not paid.",
    ],
  },
  {
    title: "Payers, plans, and coordination of benefits",
    desc: "Medicare, Medicaid, commercial plans, managed care types, and how to find the correct primary payer.",
    time: "45 min",
    objectives: [
      "Describe the major payer types and their basic rules.",
      "Differentiate HMO, PPO, EPO, and POS plans.",
      "Apply coordination-of-benefits rules to determine primary and secondary payers.",
    ],
    concept: `<p><b>Medicare</b> is federal health insurance. Part A covers hospital care, Part B covers outpatient and professional services, Part C (Medicare Advantage) is private plans that replace Original Medicare, and Part D covers prescription drugs. <b>Medicaid</b> is jointly funded and run by states with federal rules, and it is the payer of last resort. <b>Commercial plans</b> are offered by employers and individuals. <b>TRICARE</b> covers military families, and <b>workers' compensation</b> covers work injuries.</p>
<p>Managed care plan types: <b>HMO</b> (usually requires a primary care physician and referrals, in-network only), <b>PPO</b> (more freedom, higher out-of-network cost, usually no referral), <b>EPO</b> (network only, usually no referral), and <b>POS</b> (a hybrid).</p>
<p>When a patient has more than one plan, <b>coordination of benefits (COB)</b> decides who pays first. Common rules: the plan covering the person as an employee or policyholder is primary over one covering them as a dependent. For children of parents who are not separated, the plan of the parent whose birthday falls earlier in the calendar year is primary (the birthday rule). Court orders override. For Medicare, whether it is primary or secondary depends on factors like employer size: for working-aged beneficiaries Medicare is secondary to an employer group plan when the employer has 20 or more employees. Work injuries go to workers' compensation first.</p>`,
    terms: [
      ["Primary payer", "Pays first according to coordination of benefits."],
      ["Secondary payer", "Pays remaining allowed amounts after the primary."],
      [
        "In-network / out-of-network",
        "Providers with or without a contract with the plan.",
      ],
      [
        "Deductible / copay / coinsurance",
        "Patient cost-sharing: amount before coverage starts / fixed fee / percentage.",
      ],
      [
        "EOB",
        "Explanation of Benefits: the payer's statement of how a claim was processed.",
      ],
      [
        "Medicare Advantage",
        "Private plan alternative to Original Medicare (Part C).",
      ],
    ],
    steps: [
      "Collect every active coverage and effective date at registration.",
      "Verify eligibility and benefits with each payer.",
      "Apply COB rules to decide primary and secondary.",
      "Bill the primary payer first with accurate subscriber information.",
      "After the primary pays, bill the secondary with the primary's remittance details.",
      "Bill the patient only the remaining responsibility after all payments and adjustments.",
    ],
    case: "A 12-year-old has coverage through both parents. Parent A’s birthday is in March, Parent B’s in November. The parents are married.",
    model:
      "Under the birthday rule the plan of the parent whose birthday falls earlier in the calendar year, Parent A, is primary. Confirm that both plans use the rule, check for any court order, and note that coverage details can change. Bill Parent A's plan first and Parent B's plan secondary.",
    mistakes: [
      "Billing the wrong payer first.",
      "Not updating coverage when a patient changes jobs.",
      "Billing the patient before the secondary pays.",
    ],
    drills: [
      "Create a table comparing HMO, PPO, EPO, and POS.",
      "Work out primary and secondary payers for five fictional patients.",
      "Write the eligibility-check questions you would ask at each visit.",
    ],
    rubric: [
      "Payer types are described accurately.",
      "COB decisions are justified.",
      "Cost-sharing terms are correct.",
      "Patient is billed only after all payers.",
    ],
    scenario:
      "A patient has Medicaid and a commercial plan. Which should be billed first?",
    answers: [
      "Medicaid",
      "The commercial plan, because Medicaid is the payer of last resort",
      "Either one",
    ],
    correct: 1,
    why: "Medicaid is generally the payer of last resort, so other coverage pays first.",
    taglish:
      "Kailangan mong malaman kung sino ang primary at secondary payer. Employee o policyholder ang primary kumpara sa dependent. Para sa bata, birthday rule ang sinusunod: ang magulang na mas maagang ipinanganak sa calendar year. Ang Medicaid ang huling nagbabayad. Sa Medicare, depende sa laki ng employer at uri ng coverage. Laging i-verify ang eligibility bago i-bill.",
    tip: "Ask at every visit: ‘Has your insurance changed since last time?’ It prevents a surprising share of denials.",
    mentor:
      "Draw a COB flow chart: employee or dependent, birthday rule, Medicare, Medicaid.",
    remember: [
      "Medicaid is the payer of last resort.",
      "Birthday rule: earlier birthday in the calendar year is primary for the child.",
      "Bill primary, then secondary, then the patient.",
    ],
    source:
      "CMS Medicare Secondary Payer guidance and the plan's own COB provisions. Rules differ by plan and state.",
  },
  {
    title: "Follow a claim from charge to payment",
    desc: "Charge capture, scrubbing, clearinghouses, acknowledgments, adjudication, and remittance.",
    time: "40 min",
    objectives: [
      "Trace every stage a claim passes through.",
      "Distinguish front-end rejections from payer denials.",
      "Name the electronic reports that confirm each stage.",
    ],
    concept: `<p>After the visit, a charge is captured, coded, and loaded into the practice management system. A <b>claim scrubber</b> checks it against payer and NCCI rules. The claim then goes to a <b>clearinghouse</b>, which checks format and forwards it to the payer. The clearinghouse returns acknowledgments: a file-level acknowledgment (999) and a claim-level acknowledgment (277CA) that tells you which claims were accepted or rejected.</p>
<p>Accepted claims enter <b>adjudication</b>, where the payer applies eligibility, benefits, coding edits, and fee schedules. The payer then issues a payment and a remittance: an <b>835 ERA</b> (Electronic Remittance Advice) and, for paper or patients, an EOB. The practice posts payments, adjustments, and patient responsibility. Remaining balances move to the patient or to the secondary payer.</p>
<p>Deadlines matter. <b>Timely filing</b> limits vary: Medicare Part B allows 12 months from the date of service. Commercial plans may allow as little as 90 days. Corrected claims and appeals have their own deadlines.</p>`,
    terms: [
      ["Scrubber", "Software that checks claims for errors before submission."],
      [
        "Clearinghouse",
        "An intermediary that validates and routes claims to payers.",
      ],
      ["999", "Acknowledgment of the electronic file's format."],
      ["277CA", "Claim acknowledgment that shows accepted or rejected claims."],
      [
        "835 / ERA",
        "Electronic remittance advice with payment and adjustment details.",
      ],
      ["Timely filing", "The deadline for submitting a claim."],
      [
        "Frequency code 7 / 8",
        "Replacement of a prior claim / void of a prior claim.",
      ],
    ],
    steps: [
      "Confirm the charge is complete, coded, and approved for billing.",
      "Run the scrubber and fix all errors and warnings you can verify.",
      "Submit through the clearinghouse and save the batch ID.",
      "Review acknowledgments daily and work rejections the same day.",
      "Track claims that are accepted but not yet paid and follow up on schedule.",
      "Post the remittance and route denials to the denial queue.",
    ],
    case: "Fifty claims were submitted last week, but 12 do not appear in the payer portal and none shows a clearinghouse rejection.",
    model:
      "Check whether the clearinghouse acknowledgment shows acceptance at both file and claim levels. Look for claims held by clearinghouse edits, claims sent to the wrong payer ID, or a batch that never transmitted. Resubmit only after confirming the originals did not reach the payer, to avoid duplicates. Document the root cause and add a daily batch reconciliation.",
    mistakes: [
      "Assuming ‘submitted’ means ‘received.’",
      "Resubmitting before checking status, creating duplicate denials.",
      "Missing timely filing because rejections went unread.",
    ],
    drills: [
      "Draw the claim lifecycle with the report that confirms each stage.",
      "Write a daily claim-status routine of five steps.",
      "List the filing deadlines for three payers you might work with.",
    ],
    rubric: [
      "Every stage and its confirmation report is named.",
      "Duplicates are avoided.",
      "Timely filing limits are tracked.",
      "Rejections are worked the same day.",
    ],
    scenario:
      "A clearinghouse report shows a claim rejected for an invalid subscriber ID. What is the right action?",
    answers: [
      "Wait for the payer to process it",
      "Correct the ID from verified eligibility information and resubmit",
      "Post it as a denial",
    ],
    correct: 1,
    why: "A rejected claim was not processed. Fix the data error and resubmit.",
    taglish:
      "Ang claim ay dumadaan sa charge capture, coding, scrubber, clearinghouse, payer adjudication, at remittance (835 ERA o EOB). Basahin ang 999 at 277CA araw-araw para malaman kung na-accept o na-reject. Huwag mag-resubmit nang hindi tinitingnan ang status para hindi magka-duplicate. At bantayan ang timely filing: Medicare Part B ay 12 buwan; ang commercial ay puwedeng mas maikli.",
    tip: "Start every day with the rejection report. A claim fixed today is paid weeks sooner than one found next month.",
    mentor:
      "Make a daily checklist with times: acknowledgments, rejections, payer status, posting.",
    remember: [
      "999 = file received. 277CA = claim accepted or rejected.",
      "Work rejections the same day.",
      "Know each payer's timely filing limit.",
    ],
  },
  {
    title: "Read remittances: CARC, RARC, and group codes",
    desc: "Decode an EOB or ERA to find exactly why a claim line was paid, reduced, or denied.",
    time: "50 min",
    objectives: [
      "Read group codes, CARCs, and RARCs on a remittance.",
      "Separate contractual write-offs from patient responsibility.",
      "Match common codes to the right next action.",
    ],
    concept: `<p>The 835 remittance explains every adjustment using three pieces of coding. The <b>group code</b> states who is responsible: <b>CO</b> contractual obligation (provider write-off), <b>PR</b> patient responsibility, <b>OA</b> other adjustment, <b>PI</b> payer-initiated reduction, and <b>CR</b> correction and reversal. The <b>Claim Adjustment Reason Code (CARC)</b> says why. The <b>Remittance Advice Remark Code (RARC)</b> adds detail and next steps.</p>
<p>Always read the group code with the CARC. A CARC 45 under CO is an expected contractual write-off. A CARC 45 under PR would be unusual. A CARC 1, 2, or 3 under PR is patient cost-sharing: deductible, coinsurance, or copay.</p>
<p>The Allowed amount equals charges minus the contractual adjustment. Payment equals allowed minus patient responsibility, adjusted for other reductions. Math that does not balance means a posting problem.</p>`,
    terms: [
      ["CO", "Contractual obligation: provider cannot bill the patient."],
      [
        "PR",
        "Patient responsibility: may be billed to the patient or secondary.",
      ],
      ["CARC 1 / 2 / 3", "Deductible / coinsurance / copay."],
      ["CARC 4", "Modifier is inconsistent with the procedure or missing."],
      ["CARC 16", "Claim lacks information needed for adjudication."],
      ["CARC 18", "Exact duplicate claim or service."],
      [
        "CARC 22",
        "May be covered by another payer per coordination of benefits.",
      ],
      ["CARC 29", "Time limit for filing has expired."],
      ["CARC 45", "Charge exceeds the fee schedule or contracted amount."],
      ["CARC 50", "Non-covered: not deemed a medical necessity by the payer."],
      ["CARC 96", "Non-covered charge."],
      [
        "CARC 97",
        "Benefit included in the payment for another service already adjudicated.",
      ],
      ["CARC 109", "Claim or service not covered by this payer (wrong payer)."],
      ["CARC 197", "Precertification, authorization, or notification absent."],
    ],
    steps: [
      "Identify the claim line and its charge, allowed amount, paid amount, and patient responsibility.",
      "Read each adjustment: group code, CARC, amount, and RARC.",
      "Confirm the math: charge − adjustments = payment + patient responsibility.",
      "Post contractual adjustments and patient responsibility to the right accounts.",
      "Route any denial or unexpected reduction to the correct work queue with the CARC noted.",
      "Bill the secondary or the patient for the remaining amount as appropriate.",
    ],
    lab: [
      [
        "A line shows: charge $150, CO-45 $60, PR-1 $30, paid $60.",
        "Allowed = $150 − $60 = $90. Patient responsibility = $30 (deductible). Payer paid $60. $60 + $30 = $90, so the line balances. Write off $60 as contractual and bill the patient $30 (or secondary).",
      ],
      [
        "A line shows CO-97 for a lab test billed with a procedure.",
        "The payer says the lab is bundled into another service. Check NCCI edits and the documentation. If the lab was truly separate, the claim may be corrected with a supported modifier and appealed. If not, write off per policy.",
      ],
      [
        "A line shows CO-16 with a RARC asking for a missing referring provider.",
        "The claim is missing information. Correct the claim with the referring provider's NPI and resubmit. This is not a medical-necessity denial.",
      ],
    ],
    case: "A remittance shows PR-3 $25 for each of ten visits, all paid in full by the payer. The patient says they were never charged a copay.",
    model:
      "PR-3 is a copay that the payer states the patient owes. Check the registration record to confirm whether the copay was collected at check-in. If not collected, bill the patient following policy. If the plan information was entered incorrectly, correct the record and check for other claims affected.",
    mistakes: [
      "Writing off a PR amount as if it were CO.",
      "Ignoring the RARC.",
      "Resubmitting a claim that should be appealed.",
    ],
    drills: [
      "Memorize the group codes and the 14 CARCs above using the Flashcards page.",
      "Read three fictional remittances and write the next action for each line.",
      "Create a CARC-to-queue routing table.",
    ],
    rubric: [
      "Group code and CARC are read together.",
      "Math balances.",
      "Next actions match the reasons.",
      "RARCs are used for detail.",
    ],
    scenario: "A line is adjusted CO-45. Who owns the adjusted amount?",
    answers: [
      "The patient",
      "The provider — it is a contractual write-off, not billable to the patient",
      "The secondary insurance",
    ],
    correct: 1,
    why: "CO means contractual obligation. The provider accepts the allowed amount and cannot bill the patient the difference.",
    taglish:
      "Sa remittance, tatlong bagay ang basahin: group code (sino ang may responsibilidad), CARC (bakit), at RARC (dagdag na detalye). CO ay write-off ng provider; PR ay babayaran ng patient. Ang CARC 45 ay contractual adjustment, ang 1, 2, at 3 ay deductible, coinsurance, at copay. Siguraduhing balanse ang math: charge minus adjustments ay payment plus patient responsibility.",
    tip: "Write the CARC meaning next to the posting in your own words for the first month. You will memorize them without trying.",
    mentor:
      "Quiz yourself with the CARC flashcards for ten minutes daily until you can answer without looking.",
    remember: [
      "CO = provider write-off. PR = patient responsibility.",
      "CARC says why, RARC explains more.",
      "A remittance line should always balance.",
    ],
    source:
      "X12 code lists published on the Washington Publishing Company site and CMS guidance. Code lists are updated; verify current meanings.",
  },
  {
    title: "Work denials and appeals",
    desc: "Classify denials, find the root cause, correct and resubmit, or appeal with documentation.",
    time: "50 min",
    objectives: [
      "Classify denials by cause and decide the right next step.",
      "Differentiate a corrected claim from an appeal.",
      "Write a clear, factual appeal letter.",
    ],
    concept: `<p>A denial is a payer decision not to pay all or part of a claim. Common causes: eligibility (coverage inactive), registration data errors, missing prior authorization, coding or modifier errors, bundling, medical necessity, duplicates, and timely filing. A good denial worker first asks: <b>Was it our error, the payer's error, or a legitimate non-covered service?</b></p>
<p>Our error leads to a <b>corrected claim</b> (a replacement claim, frequency code 7, referencing the original claim number). The payer's error or a disputed decision leads to an <b>appeal</b>. A legitimate non-covered service leads to a write-off or patient billing, depending on the contract and notices.</p>
<p>Under Original Medicare Part B, the first appeal is a redetermination, requested within 120 days of the initial determination. The next level is reconsideration by a Qualified Independent Contractor, with a 180-day limit. Commercial payers set their own levels and deadlines. Always read the denial letter for the deadline and the addresses.</p>`,
    terms: [
      [
        "Soft denial",
        "A temporary denial that can be fixed and resubmitted, such as missing information.",
      ],
      ["Hard denial", "A final denial that requires an appeal or write-off."],
      [
        "Corrected claim",
        "A replacement claim that fixes errors in the original.",
      ],
      ["Appeal", "A formal request for the payer to reconsider its decision."],
      ["Root cause", "The upstream reason that created the denial."],
      ["Write-off", "Removing a balance from accounts receivable per policy."],
    ],
    steps: [
      "Read the denial: CARC, RARC, group code, and letter.",
      "Pull the claim, registration, authorization, and documentation.",
      "Decide: our error, payer error, or non-covered service.",
      "For our error, correct and resubmit within the deadline.",
      "For payer error, prepare an appeal packet with the denial, the documentation, a clear explanation, and the relevant policy.",
      "Record the outcome and the root cause. Report patterns to the practice.",
    ],
    lab: [
      [
        "CO-197: no prior authorization on file. The registration notes show an authorization number that was never entered on the claim.",
        "Our error. Add the authorization number and submit a corrected claim. If the authorization was never obtained, request a retro-authorization if the payer allows it or follow the contract on liability. Never create an authorization number.",
      ],
      [
        "CO-50: not medically necessary for a test, but the provider documented the supporting symptoms.",
        "Prepare an appeal with the clinical note, the coverage policy, and a concise letter. Ask the provider to review the packet. Do not alter the note.",
      ],
    ],
    case: "A practice has 40 denials with CARC 31, patient cannot be identified as our insured, in two weeks.",
    model:
      "Pull a sample. Check eligibility records, subscriber IDs, name spelling, and date-of-birth formats. If a pattern appears (for example, a registration form that truncates long last names), fix the root cause and correct the claims. Eligibility checks before each visit would prevent these denials.",
    mistakes: [
      "Appealing without reading the denial reason.",
      "Changing documentation to fit the appeal.",
      "Missing the appeal deadline.",
    ],
    drills: [
      "Write an appeal letter for a fictional medical-necessity denial.",
      "Build a denial triage table with cause, owner, action, and deadline.",
      "Calculate a denial rate from sample numbers.",
    ],
    rubric: [
      "Cause is classified.",
      "Deadlines are tracked.",
      "The appeal letter is factual and organized.",
      "Root causes are recorded.",
    ],
    scenario:
      "A claim was denied due to an error in the subscriber ID. What should be done?",
    answers: [
      "File a formal appeal",
      "Correct the ID and submit a corrected claim",
      "Write it off",
    ],
    correct: 1,
    why: "A registration data error is our error. A corrected claim is faster than an appeal.",
    taglish:
      "Sa denial, tanungin mo muna: kasalanan ba natin, ng payer, o hindi talaga covered? Kung error natin, corrected claim. Kung mali ang payer, appeal na may documentation at malinaw na paliwanag. Huwag baguhin ang chart para lang manalo. Itala ang root cause para hindi na maulit at bantayan ang deadlines.",
    tip: "An appeal letter should stand alone: patient identifiers, claim number, denial reason, why it is wrong, the evidence attached, and the outcome requested.",
    mentor:
      "Write the same appeal letter twice: once emotional, once factual. Keep the factual version.",
    remember: [
      "Our error → corrected claim. Payer error → appeal.",
      "Never alter documentation to win an appeal.",
      "Track appeal deadlines from the date on the denial.",
    ],
  },
  {
    title: "Payment posting, A/R, and KPIs",
    desc: "Post payments accurately, work aging buckets, and measure revenue cycle health with simple formulas.",
    time: "45 min",
    objectives: [
      "Post payments, adjustments, and patient balances correctly.",
      "Work accounts receivable by aging bucket.",
      "Compute core revenue cycle key performance indicators.",
    ],
    concept: `<p><b>Payment posting</b> records each payment and adjustment against the right claim line. Accurate posting protects every downstream number. <b>Accounts receivable (A/R)</b> is the money owed to the practice. It is grouped by age: 0–30, 31–60, 61–90, 91–120, and over 120 days since the date of service or billing. Older balances are harder to collect, so you work oldest and highest dollar first, subject to deadlines.</p>
<p>Core KPIs:</p>
<ul>
<li><b>Days in A/R</b> = total A/R ÷ average daily charges. Lower is better. Many practices aim for roughly 30–40 days, but targets depend on specialty and payer mix.</li>
<li><b>Net collection rate</b> = payments ÷ (charges − contractual adjustments), usually targeted at 95% or higher.</li>
<li><b>Clean claim rate</b> = claims accepted on first submission ÷ claims submitted.</li>
<li><b>Denial rate</b> = denied claims ÷ claims submitted.</li>
<li><b>First-pass resolution rate</b> = claims paid correctly on first submission ÷ claims submitted.</li>
</ul>
<p>Use KPIs to find process problems, not to blame people.</p>`,
    terms: [
      ["Posting", "Recording payments and adjustments against claims."],
      ["Aging bucket", "A range of days since the claim date."],
      [
        "Contractual adjustment",
        "The difference between billed charges and the allowed amount.",
      ],
      [
        "Credit balance",
        "An account where more was paid than owed; refunds may be required.",
      ],
      ["Write-off", "An approved removal of an uncollectible balance."],
    ],
    lab: [
      [
        "Total A/R is $180,000. Charges for the last 90 days were $270,000. What is days in A/R?",
        "Average daily charges = $270,000 ÷ 90 = $3,000. Days in A/R = $180,000 ÷ $3,000 = 60 days.",
      ],
      [
        "Charges $200,000. Contractual adjustments $50,000. Payments $140,000. What is the net collection rate?",
        "$140,000 ÷ ($200,000 − $50,000) = $140,000 ÷ $150,000 = 93.3%.",
      ],
      [
        "500 claims submitted, 460 accepted first time. Clean claim rate?",
        "460 ÷ 500 = 92%.",
      ],
    ],
    steps: [
      "Verify each remittance against the deposit.",
      "Post payment, contractual adjustment, and patient responsibility by line.",
      "Flag denials and credit balances and route them to queues.",
      "Run the aging report weekly and work buckets by priority and deadline.",
      "Calculate the KPIs monthly and compare against targets and prior months.",
      "Write a short narrative explaining each change.",
    ],
    case: "Days in A/R rose from 38 to 52 in two months while charges stayed flat.",
    model:
      "Look at the aging report for growth in the 61–90 and over-90 buckets. Check payer-specific aging, new denial patterns, claims stuck at the clearinghouse, and posting delays. Identify the main cause, assign actions, and report progress weekly. Do not simply write off old balances.",
    mistakes: [
      "Posting the payment but not the adjustment.",
      "Chasing small balances while large old balances expire.",
      "Reporting numbers with no explanation.",
    ],
    drills: [
      "Compute the five KPIs from a fictional month of data.",
      "Draft a one-page KPI report with three insights.",
      "Create a weekly A/R work plan.",
    ],
    rubric: [
      "Formulas are correct.",
      "Posting balances to the remittance.",
      "Aging work follows priority.",
      "Insights lead to actions.",
    ],
    scenario: "Which formula gives days in A/R?",
    answers: [
      "Payments ÷ charges",
      "Total A/R ÷ average daily charges",
      "Denials ÷ claims",
    ],
    correct: 1,
    why: "Days in A/R measures how many days of charges are outstanding: total A/R divided by average daily charges.",
    taglish:
      "Sa posting, tama dapat ang payment, adjustment, at patient responsibility sa bawat line. Ang A/R ay hinahati ayon sa tanda ng balance. Ang days in A/R ay total A/R ÷ average daily charges. Ang net collection rate ay payments ÷ (charges − contractual adjustments). Gamitin ang KPIs para hanapin ang problema sa proseso, hindi para magsisi.",
    tip: "Every KPI report should end with an owner and a date. Numbers without actions do not change anything.",
    mentor:
      "Compute the three lab calculations again with new numbers you invent, then check each other’s work.",
    remember: [
      "Days in A/R = total A/R ÷ average daily charges.",
      "Net collection rate = payments ÷ (charges − contractual adjustments).",
      "Every KPI needs an action and an owner.",
    ],
  },
  {
    title: "Compliance, ethics, and honest coding",
    desc: "Upcoding, unbundling, cloned notes, overpayments, and what to do when you are pressured.",
    time: "45 min",
    objectives: [
      "Define upcoding, unbundling, and billing for services not rendered.",
      "Explain the False Claims Act and the overpayment rule at a basic level.",
      "Describe how to raise a compliance concern safely.",
    ],
    concept: `<p>Coders handle claims that become legal statements to payers. The federal <b>False Claims Act</b> makes it unlawful to knowingly submit false claims to government programs. ‘Knowingly’ includes deliberate ignorance and reckless disregard, not only intent. Penalties include repayment up to three times the damages plus per-claim penalties. The <b>Anti-Kickback Statute</b> prohibits payments for referrals of federal program business. The <b>Stark Law</b> limits physician referrals for certain services to entities with which they have financial relationships.</p>
<p>Common coding compliance problems include <b>upcoding</b> (reporting a higher-paying code than the documentation supports), <b>unbundling</b>, <b>billing for services not documented or not provided</b>, <b>cloned documentation</b>, and <b>misusing modifiers</b>. Downcoding that systematically underreports is also a compliance and revenue issue.</p>
<p>Under the Medicare overpayment rule, identified overpayments must generally be reported and returned within 60 days of identification. If you find a pattern of errors, escalate it rather than quietly fix it.</p>
<p>Professional codes of ethics from AAPC and AHIMA require accuracy, honesty, and refusing to code in ways that misrepresent the record. Query and coding practice briefs advise non-leading queries that do not mention reimbursement.</p>`,
    terms: [
      [
        "Upcoding",
        "Reporting a code with a higher payment than the documentation supports.",
      ],
      [
        "Unbundling",
        "Reporting components separately that belong in one comprehensive code.",
      ],
      [
        "Cloned documentation",
        "Copy-pasted notes that do not reflect the current visit.",
      ],
      ["Overpayment", "Money received that the provider is not entitled to."],
      [
        "OIG",
        "HHS Office of Inspector General, which oversees fraud and abuse enforcement.",
      ],
      [
        "Compliance officer",
        "The person who handles compliance questions and concerns.",
      ],
    ],
    steps: [
      "Code only what the documentation supports.",
      "When you find a probable error that increases or decreases payment, report it to your lead with the claim and facts.",
      "Do not alter a note, add unsupported modifiers, or follow an instruction to do so.",
      "Use the organization's hotline or compliance officer if a supervisor pressures you.",
      "Keep factual records of what you saw and what you did.",
      "Participate in refunds and corrections as directed.",
    ],
    case: "Your supervisor tells you to ‘code every established visit as 99214 this week’ to hit a revenue target.",
    model:
      "Decline to code without regard to documentation, and explain that codes must reflect each note. Offer to review documentation and flag legitimate opportunities through education. If the instruction stands, escalate to the compliance officer or hotline, and keep a factual record. Do not retaliate or threaten; protect yourself and the patients' records.",
    mistakes: [
      "Following an instruction to code to a revenue target.",
      "Silently fixing a pattern of errors.",
      "Retaliating or gossiping about a colleague.",
    ],
    drills: [
      "Write one-sentence definitions of the terms in the key terms list.",
      "Role-play a conversation declining an improper instruction.",
      "Draft a factual compliance report about a fictional upcoding pattern.",
    ],
    rubric: [
      "Definitions are accurate.",
      "The response is calm and factual.",
      "Escalation paths are named.",
      "No documentation is altered.",
    ],
    scenario:
      "You discover that six months of claims used a modifier that the documentation did not support. What do you do?",
    answers: [
      "Fix the future claims and say nothing about the past",
      "Report it to your lead or compliance officer so the organization can assess and return any overpayment",
      "Delete the claims from the system",
    ],
    correct: 1,
    why: "Identified overpayments must be handled through the compliance process, including repayment when required.",
    taglish:
      "Legal na pahayag sa payer ang claim. Bawal ang upcoding, unbundling, at pag-bill ng hindi nai-document. Kapag may nakitang pattern ng error, i-report mo sa lead o compliance officer, huwag lang tahimik na ayusin. Kapag pinipilit kang mag-code para umabot sa revenue target, tumanggi nang maayos at i-escalate. Ang trabaho mo ay maging accurate at tapat.",
    tip: "Keep a short, dated note of any instruction that made you uncomfortable. If it is ever questioned, calm facts protect you.",
    mentor:
      "Practice saying aloud in Taglish and English: “I can only code what the documentation supports. Can we ask the provider?”",
    remember: [
      "Code only what the record supports.",
      "Report probable overpayments through compliance. Do not hide them.",
      "Never follow an instruction to code to a revenue target.",
    ],
    source:
      "HHS-OIG compliance guidance, the AAPC Code of Ethics, and the AHIMA Standards of Ethical Coding Practice.",
  },
  {
    title: "Risk adjustment and HCC basics",
    desc: "How diagnosis codes drive risk scores in Medicare Advantage and why documentation must be complete every year.",
    time: "45 min",
    objectives: [
      "Explain how risk adjustment connects diagnoses to payment.",
      "Use MEAT to test whether a condition is supported.",
      "Avoid the compliance pitfalls specific to risk adjustment coding.",
    ],
    concept: `<p>Risk adjustment adjusts payments to health plans, such as Medicare Advantage plans, based on how sick their members are expected to be. Diagnosis codes map to <b>Hierarchical Condition Categories (HCCs)</b>. Each HCC carries a weight, and the member's demographics plus HCCs produce a <b>risk adjustment factor (RAF)</b>. Higher RAF generally means higher expected costs and higher payment.</p>
<p>Two features make risk adjustment coding different. First, <b>diagnoses must be captured every calendar year</b>, because chronic conditions do not carry forward automatically. Second, a diagnosis must come from an eligible encounter: a face-to-face visit (or qualifying telehealth with audio and video) with an acceptable provider type, documented in the record with an authenticated signature and credentials.</p>
<p>A common test for whether a condition is supported is <b>MEAT</b>: <b>M</b>onitor, <b>E</b>valuate, <b>A</b>ssess or address, <b>T</b>reat. A condition in a problem list with no MEAT in the note does not support coding. The model versions and mappings change over time, so confirm the current CMS-HCC model in use.</p>
<p>CMS audits risk adjustment data (RADV). Unsupported diagnoses lead to repayment and penalties. Specificity and honesty matter more than volume.</p>`,
    terms: [
      [
        "HCC",
        "Hierarchical Condition Category: a group of diagnoses with similar cost impact.",
      ],
      [
        "RAF",
        "Risk adjustment factor: the score that reflects expected costs.",
      ],
      [
        "MEAT",
        "Monitor, Evaluate, Assess/address, Treat: evidence a condition was managed.",
      ],
      ["RADV", "Risk Adjustment Data Validation audit by CMS."],
      ["Recapture", "Documenting chronic conditions again each calendar year."],
    ],
    steps: [
      "Confirm the encounter is eligible: provider type, face-to-face or qualifying telehealth, signed and credentialed.",
      "For each chronic condition, find the MEAT evidence in the note.",
      "Code to the highest documented specificity, including manifestations and complications.",
      "Do not code from a problem list or from ‘history of’ for a condition that is still active.",
      "Send non-leading queries for unclear status, such as ‘history of’ versus active.",
      "Log unsupported conditions as ‘not coded’ with a reason.",
    ],
    lab: [
      [
        "The note lists ‘CHF’ under past medical history only. The assessment does not mention it, and there are no medications or monitoring recorded.",
        "No MEAT evidence. Do not code heart failure for this encounter. If the provider managed it elsewhere in the note, reassess; otherwise, a non-leading query may be appropriate.",
      ],
      [
        "The assessment says ‘Type 2 diabetes with CKD stage 4, creatinine reviewed, continue insulin, referral to nephrology.’",
        "MEAT is present (evaluate, treat, assess). Code E11.22, N18.4, and Z79.4. Check the HCC mapping for the current model and year.",
      ],
    ],
    case: "A coder is told to find ‘all HCC opportunities’ in a chart and add diagnoses from the problem list.",
    model:
      "Clarify that you will code only conditions supported in the encounter documentation with MEAT. Problem-list entries without evidence cannot be coded. Offer to list chart-review findings as documentation improvement opportunities for the provider to address in future encounters, using non-leading queries when appropriate.",
    mistakes: [
      "Coding from a problem list.",
      "Reporting a condition because it appeared in last year's chart.",
      "Using queries that suggest a diagnosis for higher payment.",
    ],
    drills: [
      "Test five fictional notes with MEAT and decide which conditions are supported.",
      "Write a compliant query about ‘history of’ versus current status.",
      "Explain RAF to a friend in Taglish without using formulas.",
    ],
    rubric: [
      "Encounter eligibility is checked.",
      "MEAT evidence is cited.",
      "Queries are non-leading.",
      "Problem-list-only conditions are not coded.",
    ],
    scenario:
      "A chronic condition appears only in a copied-forward problem list. Should it be coded for risk adjustment?",
    answers: [
      "Yes, chronic conditions never go away",
      "No, unless the note for this encounter shows it was monitored, evaluated, assessed, or treated",
      "Yes, if it increases the RAF",
    ],
    correct: 1,
    why: "A diagnosis must be supported by documentation in an eligible encounter, shown by MEAT. A problem list alone is not sufficient.",
    taglish:
      "Ang risk adjustment ay nag-a-adjust ng bayad sa plan batay sa kung gaano kasakit ang members. Ang diagnoses ay nagma-map sa HCC at nagbibigay ng RAF. Bawat taon, kailangang ma-document ulit ang chronic conditions. Gamitin ang MEAT para i-test kung supported ang condition. Hindi puwedeng i-code mula sa problem list lang at hindi dapat habulin ang mas mataas na RAF nang walang suporta sa chart.",
    tip: "Never ask “can this be an HCC?” Ask “what did the provider actually monitor, evaluate, assess, or treat?”",
    mentor:
      "Make a one-page MEAT checklist and test it on three of the earlier practice charts.",
    remember: [
      "Chronic conditions must be supported again every calendar year.",
      "MEAT = Monitor, Evaluate, Assess/address, Treat.",
      "A problem list alone never supports a code.",
    ],
    source:
      "CMS Medicare Advantage risk adjustment and RADV guidance. Model versions and mappings change; verify the current year.",
  },
  {
    title: "Coding audits and accuracy improvement",
    desc: "How audits work, how accuracy is measured, and how to use an error log to improve.",
    time: "40 min",
    objectives: [
      "Differentiate prospective and retrospective audits.",
      "Calculate coding accuracy and classify errors.",
      "Create an improvement plan from audit results.",
    ],
    concept: `<p>An audit compares coded work to the documentation and the rules. <b>Prospective (pre-bill)</b> audits catch errors before submission. <b>Retrospective (post-bill)</b> audits look back, often for compliance, sampling a set of claims. Internal audits are run by the organization. External audits are run by payers, government programs, or consultants.</p>
<p>Accuracy is commonly measured as <b>correct codes ÷ total codes reviewed</b> (or correct charts ÷ charts reviewed), and many organizations set a target of 95% or higher. Define your method and apply it consistently, because the same errors yield different percentages depending on the denominator.</p>
<p>Classify each error: wrong diagnosis code, wrong specificity, wrong sequencing, wrong E/M level (over or under), missing code, wrong modifier, wrong units, unsupported code, or a documentation problem outside your control. An <b>error log</b> turns single mistakes into trends.</p>`,
    terms: [
      ["Prospective audit", "Review before claims are submitted."],
      ["Retrospective audit", "Review after claims are submitted or paid."],
      ["Accuracy rate", "Correct items divided by total items reviewed."],
      ["Sample", "A subset of claims chosen for review."],
      ["Error log", "A record of mistakes with category, cause, and fix."],
      [
        "Education loop",
        "Feedback, practice, and re-review of the same skill.",
      ],
    ],
    steps: [
      "Agree on the audit scope, sample size, and scoring method.",
      "Review each chart blind to the original code when possible.",
      "Mark each code correct, incorrect, or documentation-limited, with the rule cited.",
      "Calculate accuracy overall and by error type.",
      "Discuss results with the coder using facts, not blame.",
      "Set one improvement target, practice it, and re-audit a new sample.",
    ],
    lab: [
      [
        "An auditor reviews 20 charts with 80 codes. 76 codes are correct. Accuracy by code?",
        "76 ÷ 80 = 95%.",
      ],
      [
        "Of the four errors, three are E/M levels set too high by one level. What is the pattern and next step?",
        "A pattern of overcoding E/M levels. Review the MDM or time rules with the coder, provide examples, and re-audit a new sample. Also check for an upstream cause, such as a template, and report any identified overpayments per compliance policy.",
      ],
    ],
    case: "A coder's accuracy dropped from 96% to 88% after a new EHR template was introduced.",
    model:
      "Compare error types before and after the template change. If errors concentrate on one field or template section, the cause may be documentation structure, not coder skill. Raise it with the lead. Provide targeted education, a workaround checklist, and a re-audit date. Avoid blaming the coder before the pattern is understood.",
    mistakes: [
      "Quoting accuracy without stating the formula.",
      "Treating every error as the same severity.",
      "Not re-auditing after education.",
    ],
    drills: [
      "Build an error log template with columns for chart, code, error type, cause, and fix.",
      "Audit five of your own practice charts and calculate accuracy two ways.",
      "Write a respectful audit feedback message.",
    ],
    rubric: [
      "Formula is stated.",
      "Errors are categorized.",
      "Feedback is specific and respectful.",
      "A re-audit is scheduled.",
    ],
    scenario: "Which audit finds errors before claims are submitted?",
    answers: ["Retrospective", "Prospective", "External only"],
    correct: 1,
    why: "A prospective audit reviews work before claims go out, so errors can be fixed before submission.",
    taglish:
      "Ang audit ay paghahambing ng code sa chart at sa rules. Prospective bago i-bill, retrospective pagkatapos. Ang accuracy ay tamang codes ÷ lahat ng nasuri; panatilihin ang parehong formula para patas ang paghahambing. Mag-keep ng error log para makita ang pattern, at mag-re-audit pagkatapos ng education. Hindi ito para manisi kundi para gumaling.",
    tip: "Audit yourself weekly. Ten charts, scored honestly, teach more than a month of confidence.",
    mentor:
      "Swap five practice charts with a partner and score each other using the same error categories.",
    remember: [
      "Prospective audits stop errors before billing.",
      "State the accuracy formula every time.",
      "Use an error log to find patterns, then re-audit.",
    ],
  },
  {
    title: "Tools of the trade: encoders, lookups, and shortcuts",
    desc: "Use encoders, official code browsers, NCCI and coverage lookups, and spreadsheets without outsourcing your judgment.",
    time: "35 min",
    objectives: [
      "Describe what encoders and scrubbers do and their limits.",
      "Use free official lookup tools to verify codes and edits.",
      "Build a personal lookup routine you can repeat.",
    ],
    concept: `<p>An <b>encoder</b> is software that guides you from a term to a code using logic and the code books. It is faster than books alone but only as good as the documentation and your judgment. A <b>claim scrubber</b> checks claims against edits. Neither replaces reading the note.</p>
<p>Free, official tools help you verify your work: the CDC/NCHS ICD-10-CM browser and annual files; CMS NCCI edit tables and MUE tables; the CMS Physician Fee Schedule lookup; the Medicare Coverage Database for LCDs and NCDs; the CMS HCPCS quarterly files; and payer provider manuals and portals. Make sure you are looking at the right effective dates.</p>
<p>Productivity tools matter too: keyboard shortcuts, split screens, text expansion for your own notes (never for PHI), and a spreadsheet for trackers with restricted access. Keep PHI out of personal spreadsheets, notes apps, and consumer AI tools unless your employer has approved them in writing.</p>`,
    terms: [
      ["Encoder", "Software that helps assign codes from terms and logic."],
      ["Scrubber", "Software that checks claims for rule and format errors."],
      [
        "PFS lookup",
        "CMS tool for Medicare Physician Fee Schedule rates and indicators.",
      ],
      ["MCD", "Medicare Coverage Database."],
      ["Effective date", "The date a code, rule, or edit begins to apply."],
    ],
    steps: [
      "Use the encoder to find candidate codes, then verify in the official tabular or book.",
      "Check NCCI edits and MUEs for every procedure pair on a claim.",
      "Check the coverage database for any test or procedure with strict criteria.",
      "Record the tool, date, and result in your coding note when it affected the decision.",
      "Review how the tool handles updates and when it was last refreshed.",
    ],
    case: "An encoder suggests a more specific diagnosis code than the note supports.",
    model:
      "Do not accept the encoder's suggestion without documentation. Return to the note, look for the specific wording that would justify the code, and if absent, use the less specific code or send a non-leading query. Record the check.",
    mistakes: [
      "Trusting the encoder without reading the note.",
      "Using an outdated edit table.",
      "Saving PHI in personal tools.",
    ],
    drills: [
      "List five free official tools with their URLs and what each answers.",
      "Look up one NCCI edit, one MUE, and one LCD, and summarize what you found.",
      "Create a ‘my lookup order’ checklist.",
    ],
    rubric: [
      "Official sources are used for verification.",
      "Effective dates are checked.",
      "No PHI is placed in personal tools.",
      "The note, not the tool, decides the code.",
    ],
    scenario:
      "What should you do when an encoder suggests a code not supported by the note?",
    answers: [
      "Use it because it is the system recommendation",
      "Verify against the note and rules; use the supported code or query",
      "Switch encoders until one agrees",
    ],
    correct: 1,
    why: "Tools assist but do not replace documentation support or your judgment.",
    taglish:
      "Ang encoder ay tulong lang. Mas mabilis ito kaysa sa libro pero hindi ito ang nagpapasya. Gamitin ang official tools para i-verify: CDC ICD-10-CM browser, CMS NCCI at MUE tables, Physician Fee Schedule, at Medicare Coverage Database. Tingnan ang effective date. At huwag maglagay ng PHI sa personal notes o hindi aprubadong AI tools.",
    tip: "Keep a bookmark folder called ‘Verified sources’ and nothing else in it. You will trust it under pressure.",
    mentor:
      "Time yourself finding a code with the book, then with a tool, then compare how you verified each.",
    remember: [
      "Encoders suggest. The documentation decides.",
      "Use official sources and check effective dates.",
      "Keep PHI out of personal and unapproved tools.",
    ],
  },
  {
    title: "Secure remote coding and HIPAA for coder VAs",
    desc: "Business associate agreements, device and workspace safeguards, and offshore-work rules you must clarify before starting.",
    time: "45 min",
    objectives: [
      "Explain why a business associate agreement (BAA) is required.",
      "List the technical and physical safeguards for remote coding.",
      "Identify questions to ask about offshore work and payer restrictions.",
    ],
    concept: `<p>When you work remotely for a covered entity, such as a practice, you are usually a <b>business associate</b> (or a workforce member or subcontractor of one). HIPAA requires a <b>business associate agreement</b> that limits how PHI may be used and requires safeguards and breach reporting. If you are a subcontractor of the business associate, the same obligations flow down in a subcontractor BAA.</p>
<p>The HIPAA Security Rule expects administrative, physical, and technical safeguards. For a remote coder these typically mean: employer-approved devices or virtual desktops, multi-factor authentication, encrypted storage and connections, automatic screen lock, a private room, no printing, no local copies, no screenshots, no personal email, and no PHI in unapproved apps or consumer AI chat tools. Log out when finished and report lost devices or suspected incidents immediately.</p>
<p><b>Working with U.S. clients from another country.</b> HIPAA itself does not ban offshore access, but many client contracts, state Medicaid programs, and Medicare Advantage plans restrict or require disclosure of offshore handling of PHI, and some prohibit it. Ask the client, in writing, what is permitted before you accept access to any PHI.</p>`,
    terms: [
      [
        "BAA",
        "Business associate agreement between a covered entity and a vendor that handles PHI.",
      ],
      ["MFA", "Multi-factor authentication."],
      [
        "VDI / VPN",
        "Virtual desktop / virtual private network used to work inside the employer's environment.",
      ],
      [
        "Minimum necessary",
        "Use or disclose only the PHI needed for the task.",
      ],
      [
        "Breach",
        "An impermissible use or disclosure that compromises PHI; subject to notification rules.",
      ],
    ],
    steps: [
      "Confirm in writing that a BAA is in place and that your role is covered.",
      "Use only the devices, networks, and accounts the employer approves.",
      "Set up MFA, screen lock, and a private workspace before accessing any PHI.",
      "Ask the client about offshore restrictions and get the answer in writing.",
      "Report any incident immediately through the client's process.",
      "Review the security checklist before each shift.",
    ],
    case: "A new client offers you access to its system but has no BAA and asks you to download charts to your personal laptop for convenience.",
    model:
      "Decline until a BAA is signed and approved remote-access methods are provided. Explain that downloading charts to a personal laptop creates uncontrolled copies of PHI. Offer to start with fictional training charts or a virtual desktop. Document the conversation and escalate if the client insists.",
    mistakes: [
      "Starting work before the BAA exists.",
      "Using personal email to send charts.",
      "Pasting PHI into a consumer AI tool.",
      "Assuming offshore work is always allowed.",
    ],
    drills: [
      "Write a remote workspace security checklist.",
      "Draft three questions to ask a new client about security and offshore rules.",
      "Explain minimum necessary in Taglish with a coding example.",
    ],
    rubric: [
      "A BAA is confirmed before PHI access.",
      "Controls are specific and practical.",
      "Offshore questions are included.",
      "Incident reporting is clear.",
    ],
    scenario:
      "A client wants you to code from screenshots sent over personal chat. What do you do?",
    answers: [
      "Accept to save time",
      "Decline and ask for the approved secure access method",
      "Ask them to use more screenshots",
    ],
    correct: 1,
    why: "PHI must travel only through approved, secured channels with appropriate agreements in place.",
    taglish:
      "Bago ka humawak ng PHI, kailangan may BAA. Gamitin lang ang aprubadong device, VPN o virtual desktop, MFA, at pribadong lugar. Bawal ang personal email, screenshots, at consumer AI para sa PHI. Magtanong nang nakasulat tungkol sa offshore rules dahil may mga contract at programa na may restrictions. Kapag may aksidente, i-report agad.",
    tip: "Run a 30-second pre-shift check: door closed, screen locked behind you, VPN on, approved apps only.",
    mentor:
      "Role-play asking a client for a BAA and approved access in a professional message.",
    remember: [
      "No BAA, no PHI access.",
      "Use approved devices and channels only. No personal email or consumer AI for PHI.",
      "Ask about offshore restrictions in writing before you start.",
    ],
    source:
      "HHS HIPAA Security Rule and business associate guidance; your client's contract and policies.",
  },
  {
    title: "The certification roadmap",
    desc: "Compare AAPC and AHIMA credentials, choose a first target, and plan the exam and renewal.",
    time: "40 min",
    objectives: [
      "Compare the main entry and professional credentials.",
      "Pick a first credential that matches your target job.",
      "Plan study, exam, and continuing education.",
    ],
    concept: `<p>Most employers hiring remote coders expect a recognized credential. Two major bodies award them: <b>AAPC</b> and <b>AHIMA</b>. Requirements, fees, and exam formats change, so always read the official pages before you commit.</p>
<p>Common credentials: <b>AAPC CPC</b> (Certified Professional Coder, physician-office and outpatient professional-fee coding), <b>CPB</b> (billing and reimbursement), <b>COC</b> (outpatient hospital facility coding), <b>CRC</b> (risk adjustment), and <b>CPMA</b> (auditing). <b>AHIMA CCA</b> (Certified Coding Associate) is entry-level, <b>CCS</b> focuses on hospital coding (inpatient and outpatient), and <b>CCS-P</b> on physician-based coding. <b>RHIT</b> is a health information credential that typically requires an accredited degree.</p>
<p>The AAPC CPC exam has been a timed, open-book, multiple-choice test using approved code books, with a passing threshold around 70 percent. Credentials need renewal with continuing education every two years. Treat these figures as approximate and verify them.</p>
<p>Choose by job target: professional-fee outpatient work and remote small-practice roles often start with CPC; hospital inpatient roles favor CCS; entry-level health information roles may start with CCA. Entry-level exam passers often still need experience for full employer trust, so plan supervised practice.</p>`,
    terms: [
      ["CPC", "AAPC Certified Professional Coder."],
      ["CCA", "AHIMA Certified Coding Associate."],
      [
        "CCS / CCS-P",
        "AHIMA Certified Coding Specialist (hospital) / physician-based.",
      ],
      ["CPB", "AAPC Certified Professional Biller."],
      ["CRC", "AAPC Certified Risk Adjustment Coder."],
      ["CPMA", "AAPC Certified Professional Medical Auditor."],
      ["CEU", "Continuing education unit required for renewal."],
    ],
    steps: [
      "Write your target job in one sentence: setting, specialty, and remote or on-site.",
      "Open the official credential pages and record eligibility, exam format, fees, and renewal rules.",
      "Pick one credential to target first and justify the choice.",
      "Build a study calendar working backward from a realistic exam date.",
      "Plan how you will gain supervised practice or an internship.",
      "Record the renewal cycle and CEU requirements.",
    ],
    case: "A learner wants to apply to inpatient hospital coding jobs after finishing only these outpatient lessons.",
    model:
      "Hospital inpatient coding uses ICD-10-PCS and DRG assignment, which this course does not cover. The learner should either target professional-fee or outpatient roles first, or add inpatient-focused training and the credential that matches that setting. Be honest about scope when applying.",
    mistakes: [
      "Choosing a credential because a friend did.",
      "Assuming a credential guarantees a job.",
      "Missing renewal requirements.",
    ],
    drills: [
      "Create a comparison table of CPC, CCA, CCS, and CPB.",
      "Write your one-sentence target job and credential choice.",
      "Draft a 16-week study plan with milestones.",
    ],
    rubric: [
      "Information is sourced from official pages.",
      "Choice matches target job.",
      "Plan is realistic.",
      "Renewal is included.",
    ],
    scenario:
      "You want physician-office coding work. Which is a common first credential?",
    answers: [
      "CCS, for hospital inpatient coding only",
      "CPC, for physician-office and outpatient professional-fee coding",
      "RHIT without a degree",
    ],
    correct: 1,
    why: "CPC is aimed at professional-fee outpatient coding, which matches physician-office work. Check current requirements.",
    taglish:
      "Karamihan ng employer ay naghahanap ng credential. Dalawang malaking organisasyon: AAPC at AHIMA. Para sa physician-office coding, madalas CPC ang unang target; para sa hospital inpatient, CCS; at CCA ay entry-level. Magbasa sa official sites dahil nagbabago ang fees at rules. At tandaan: hindi garantiya ng trabaho ang credential, kailangan pa rin ng practice at supervised experience.",
    tip: "Pick the credential that matches the job you will apply to in 6 months, not the one that sounds most impressive.",
    mentor:
      "Write your credential decision as a short note to your future self, including what would make you change it.",
    remember: [
      "CPC fits professional-fee outpatient coding. CCS fits hospital coding. CCA is entry-level.",
      "Verify fees, format, and renewal rules on the official pages.",
      "A credential opens doors, but employers still want supervised, accurate work.",
    ],
    source:
      "aapc.com and ahima.org credential pages. Requirements change; confirm before you pay for anything.",
  },
  {
    title: "Package your coder VA services",
    desc: "Define what you offer, how you price it, how you protect clients and yourself, and how you stay honest about your credentials.",
    time: "50 min",
    objectives: [
      "Design a clear service menu with scope and limits.",
      "Choose a pricing model and understand its risks.",
      "Write an onboarding SOP and an honest service description.",
    ],
    concept: `<p>As a coder VA, you sell reliable outcomes, not hours of typing. A clear service menu helps clients understand what you do: charge entry, coding review, claim scrubbing and submission, denial follow-up, A/R cleanup, eligibility and benefits checks, prior authorization tracking, payment posting, and reporting. Each service has inputs, outputs, turnaround time, and accuracy targets.</p>
<p>Common <b>pricing models</b>: hourly, per chart or per claim, a monthly retainer, or a project fee. Some businesses charge a percentage of collections. That model can create pressure to over-code and may raise legal issues in some settings, so get legal or compliance advice before offering it.</p>
<p>Protect everyone with a written agreement that covers scope, service level, fees, payment terms, confidentiality, a BAA, data security, termination, and responsibilities for corrections. Never claim credentials you do not hold or imply supervision you do not have. Be specific about the specialties and code sets you can handle and say no to work outside them.</p>`,
    terms: [
      ["SOW", "Statement of work: the defined scope and deliverables."],
      ["SLA", "Service level agreement: turnaround and quality targets."],
      ["Retainer", "A fixed recurring fee for an agreed amount of service."],
      ["Onboarding SOP", "Standard steps for starting with a new client."],
      ["Scope creep", "Work added beyond what was agreed."],
    ],
    steps: [
      "List the services you can deliver at your current skill level, with evidence.",
      "Define inputs, outputs, turnaround, and accuracy target for each.",
      "Choose a pricing model and test it against a sample month of work.",
      "Draft an agreement outline and mark where legal review is needed.",
      "Write an onboarding SOP: BAA, access, tools, test charts, review period.",
      "Write an honest one-paragraph service description with credentials and limits.",
    ],
    case: "A client asks you to take 20% of collections and ‘make the claims pay better.’",
    model:
      "Decline the framing. Explain that you code and bill to the documentation, not to increase payment. Offer a fixed or per-claim fee with quality metrics, and have an attorney review any percentage arrangement. Put the compliance expectations in the agreement.",
    mistakes: [
      "Selling services you cannot yet deliver.",
      "Underpricing because you are new.",
      "Having no written scope.",
    ],
    drills: [
      "Create a one-page service menu with three tiers.",
      "Write a one-paragraph honest bio.",
      "Draft a ten-step onboarding SOP.",
    ],
    rubric: [
      "Scope and limits are clear.",
      "Pricing is justified.",
      "Compliance and security are in the plan.",
      "No credential is overstated.",
    ],
    scenario:
      "A prospect asks for a service outside your training. What is the best response?",
    answers: [
      "Say yes and learn on the job with their data",
      "Explain your scope honestly and refer them elsewhere or offer a plan to train first",
      "Say yes and subcontract secretly",
    ],
    correct: 1,
    why: "Honesty about scope protects patients, the client, and your reputation.",
    taglish:
      "Ang binebenta mo ay maaasahang resulta, hindi lang oras. Gumawa ng malinaw na service menu na may scope, turnaround, at accuracy target. Pumili ng pricing model at mag-ingat sa percentage of collections dahil puwedeng magtulak ng over-coding; kumonsulta sa legal. Palaging may written agreement, BAA, at honest na paglalarawan ng credentials at limitasyon mo.",
    tip: "Your first client should get a ‘pilot week’ with a small sample, a review, and a written results summary. It builds trust fast.",
    mentor:
      "Write your service menu, then cross out anything you could not do accurately tomorrow.",
    remember: [
      "Sell defined outcomes with scope, turnaround, and accuracy.",
      "Have a written agreement and a BAA before touching PHI.",
      "Never overstate credentials or training.",
    ],
  },
  {
    title: "Study plan and exam strategy",
    desc: "A practical weekly plan, open-book technique, timed practice, and a method for learning from mistakes.",
    time: "35 min",
    objectives: [
      "Build a weekly study plan you can keep.",
      "Use open-book techniques efficiently.",
      "Learn from errors with a structured log.",
    ],
    concept: `<p>A coding certification exam rewards two skills: knowing the rules and finding answers fast in the books. Plan both. Many candidates study 12 to 16 weeks, but your time will depend on your background. A reasonable weekly pattern is four to six short sessions rather than one long one.</p>
<p>Exam technique: tab your books by section and subsection; highlight the guideline lines you use most; practice answering with the book open; skip hard questions and return; read all four options before choosing; and trust documentation, not intuition. If an exam has about 100 questions in about 240 minutes, you have roughly 2.4 minutes per question, so practice at that pace.</p>
<p>After every practice set, review every miss and every lucky guess. Write the rule you misapplied and one new example. An error log beats rereading.</p>`,
    steps: [
      "Set an exam target date and count the weeks available.",
      "Divide the weeks: foundations, ICD-10-CM, CPT and HCPCS, modifiers and guidelines, practice exams.",
      "Schedule short daily sessions: 15 minutes of flashcards plus a 45-minute focus block.",
      "Take a timed practice set weekly and review every miss.",
      "Maintain an error log with the rule, the example, and the fix.",
      "In the final two weeks, simulate the full exam twice.",
    ],
    case: "A learner reads the whole code book twice, but scores poorly on timed practice because answers take too long to find.",
    model:
      "Switch from rereading to retrieval. Tab the books, create a one-page ‘where things live’ map, and practice timed lookup drills. After each timed set, log the topic and time lost. Aim to reduce lookup time before increasing volume.",
    mistakes: [
      "Rereading instead of practicing retrieval.",
      "Skipping timed practice until the last week.",
      "Not reviewing correct-by-luck answers.",
    ],
    drills: [
      "Create a 16-week calendar with weekly goals.",
      "Run a 20-question timed set at 2.4 minutes per question and log the results.",
      "Start an error log with your first ten misses.",
    ],
    rubric: [
      "The calendar has milestones and review time.",
      "Practice mirrors exam pacing.",
      "Errors lead to specific actions.",
      "Rest days are scheduled.",
    ],
    scenario:
      "You miss several questions on modifiers. What is the best next study step?",
    answers: [
      "Reread the entire book",
      "Review the modifier rules, write a one-sentence test for each, and retry similar questions",
      "Skip modifiers",
    ],
    correct: 1,
    why: "Targeted retrieval and application of the missed rules improves performance faster than broad rereading.",
    taglish:
      "Dalawa ang kailangan sa exam: alam mo ang rules at mabilis kang makahanap sa libro. Mag-aral nang maikli pero madalas, mag-tab ng mga libro, at mag-timed practice linggo-linggo. Mga 2.4 minuto bawat tanong ang bilis para sa 100 tanong sa 240 minuto, pero i-check ang aktuwal na format. Pagkatapos ng practice, balikan ang mali at ang swerte lang na tama, tapos isulat sa error log.",
    tip: "Study the questions you got right for the wrong reason. They are the most dangerous ones on exam day.",
    mentor:
      "Set tomorrow’s 15-minute flashcard block in your calendar before you close this lesson.",
    remember: [
      "Practice retrieval and lookup speed, not just reading.",
      "Do weekly timed sets at exam pace.",
      "An error log turns misses into progress.",
    ],
  },
  {
    title: "Capstone: a week as a coder VA",
    desc: "Code mini-charts, review a remittance, handle a denial, write a KPI note, and report a compliance concern — all fictional.",
    time: "90 min",
    objectives: [
      "Combine diagnosis coding, procedure coding, claims, and compliance in one week of practice.",
      "Produce reviewable work products with documented reasoning.",
      "Identify your remaining gaps honestly.",
    ],
    concept: `<p>This capstone simulates a week of work using fictional information only. Complete each deliverable and then compare against the model. Mark each as complete, needs revision, or needs supervisor guidance. The goal is not a perfect score. It is clear reasoning, honest limits, and a plan for the gaps you find.</p>
<p>Verify every code in the current books. The answers below are teaching answers based on typical rules; employer and payer policy can differ.</p>`,
    lab: [
      [
        "Chart 1 — Established patient, 15 minutes. Documented acute bronchitis, confirmed by the provider. Rest and a cough medication prescribed. No other conditions addressed.",
        "J20.9 (acute bronchitis, unspecified). Problems: acute uncomplicated illness = low. Data: minimal. Risk: prescription drug management = moderate. Only risk reaches moderate, so MDM is low: 99213. Time of 15 minutes would support only 99212, so MDM is the better basis.",
      ],
      [
        "Chart 2 — Established patient, live video, patient at home, commercial payer that follows CPT. Total time documented as 22 minutes for follow-up of stable hypothyroidism; levothyroxine continued.",
        "E03.9 (hypothyroidism, unspecified). By time, 22 minutes supports 99213. Add modifier 95 and POS 10 if the payer follows CPT’s approach; verify the payer’s policy.",
      ],
      [
        "Chart 3 — Established patient. Type 2 diabetes with diabetic CKD stage 4, on insulin; creatinine reviewed, nephrology referral, insulin adjusted. Moderate MDM documented.",
        "E11.22 + N18.4 + Z79.4, with E/M 99214 supported by two or more problem factors and prescription management. Verify the MDM details in the note.",
      ],
      [
        "Chart 4 — Hypertension with heart failure, provider documents both, adjusts a medication.",
        "I11.0 (hypertensive heart disease with heart failure) plus an I50.- code for the type of heart failure documented (I50.9 if unspecified). The guidelines presume the link between hypertension and heart failure.",
      ],
      [
        "Chart 5 — Follow-up visit, routine healing, closed fracture of the lower end of the right radius, initial treatment completed elsewhere. Cast checked.",
        "S52.501D (unspecified fracture of the lower end of right radius, subsequent encounter for closed fracture with routine healing). Verify specificity in the note. The E/M level depends on documentation.",
      ],
      [
        "Chart 6 — Surgeon sees a patient the day before a major operation and documents the decision to operate.",
        "Report the E/M with modifier 57 (decision for surgery). The surgery itself is reported on the day performed with its global period.",
      ],
    ],
    steps: [
      "Code the six mini-charts independently on paper before opening the answers.",
      "Review one fictional remittance: identify the group code, CARC, and next action for three lines.",
      "Write a corrected-claim note for one denial caused by your own error.",
      "Compute days in A/R and net collection rate from a small data set you create.",
      "Write a three-sentence compliance report about an invented upcoding pattern.",
      "Write a one-page reflection naming three strengths, three gaps, and the credential you will target.",
    ],
    case: "You complete the capstone and your self-check shows accurate diagnosis codes but frequent E/M level errors.",
    model:
      "Focus your next two weeks on MDM and time rules: redo the worked E/M examples, build an MDM grid from memory, and review ten new charts with a partner or mentor. Record the gap honestly in your portfolio, along with your improvement plan. Do not claim readiness beyond what the reviewed work shows.",
    mistakes: [
      "Checking the answers before attempting the work.",
      "Hiding weak areas in your portfolio reflection.",
      "Presenting the capstone as employment experience.",
    ],
    drills: [
      "Complete all six charts, the remittance review, the corrected-claim note, the KPI calculation, the compliance report, and the reflection.",
      "Ask a mentor or practice partner to audit two charts using the error categories from the audit lesson.",
      "Revise based on feedback and record your before-and-after accuracy.",
    ],
    rubric: [
      "Codes are verified in the current books.",
      "Reasoning is written for every chart.",
      "Compliance behavior is correct in the written scenario.",
      "Limits and gaps are stated honestly.",
    ],
    scenario:
      "Your capstone audit shows 83% accuracy. What is the best response?",
    answers: [
      "Hide the score and apply for jobs",
      "Analyze the error pattern, practice those skills, and re-audit before claiming readiness",
      "Retake the quiz until the score hides the errors",
    ],
    correct: 1,
    why: "Honest analysis and targeted practice build real skill, and re-auditing proves improvement.",
    taglish:
      "Ang capstone ay practice ng isang linggong trabaho gamit ang fictional na info lang. Gawin muna ang lahat bago tingnan ang sagot. Ang layunin ay malinaw na reasoning at tapat na pag-amin ng gaps, hindi perfect na score. Kung mababa ang accuracy, hanapin ang pattern, mag-practice, at mag-re-audit bago mo sabihing handa ka na.",
    tip: "Keep your capstone as a portfolio piece, labeled fictional training, with your reasoning and your improvement plan visible.",
    mentor:
      "Ask someone to score two of your charts blind, then book your next practice set based on what they find.",
    remember: [
      "Do the work first, then compare to the answers.",
      "Honest gaps and a plan beat a perfect-looking portfolio.",
      "Label all samples as fictional training work.",
    ],
  },
]);
