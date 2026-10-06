const workshopLessons = [
  {
    title: "Workshop: the full patient journey",
    desc: "Connect booking, preparation, visit support, and follow-up into one workflow.",
    time: "45 min",
    objectives: [
      "Map the administrative journey without inventing clinical requirements.",
      "Identify what evidence is needed before each handoff.",
      "Separate a completed administrative action from a completed care process.",
    ],
    concept:
      "A patient journey is a chain of responsibilities. A correct booking can still lead to a missed visit if the joining instructions never arrive. A referral can still stall after transmission. Your job is to make the administrative status visible, document verified facts, and pass clinical decisions to authorized staff. The workflow below is a practice model; use the employer’s actual procedure for live work.",
    steps: [
      "Booking: verify the patient, permitted visit type, provider, location or format, duration, date, and time zone. Read the details back.",
      "Preparation: check required administrative forms and approved instructions. Identify missing items and the person responsible for obtaining them.",
      "Arrival or connection: follow the approved check-in process. Record access problems and notify the appropriate team rather than changing the visit format yourself.",
      "After the visit: carry out only assigned administrative tasks from the authorized source. Do not infer follow-up orders from an incomplete note.",
      "Follow-through: confirm the required outcome or keep the item open with status, owner, and next action. Handoff unresolved work at shift end.",
    ],
    case: "Training patient Mika Example books a video follow-up. The form is incomplete, the joining message has not been delivered, and a prior referral is still awaiting scheduling. Treat these as separate tasks; one successful booking does not resolve the other two.",
    model:
      "Booking confirmed in the training schedule after read-back. Missing form routed through the approved collection process. Joining-message delivery issue assigned to the access-support owner. Referral remains open with the referral coordinator; scheduling outcome pending. No clinical advice provided.",
    mistakes: [
      "Marking all preparation complete because the appointment exists.",
      "Writing “patient did not comply” when the only verified fact is a missing form.",
      "Assigning follow-up care that the clinician has not ordered.",
    ],
    drills: [
      "Draw five journey stages and label the owner and completion evidence for each.",
      "Write three separate task notes for the case, then a patient-facing explanation with one clear next step.",
      "Add a branch where the patient reports an urgent concern; describe the practice-protocol escalation without clinical triage.",
    ],
    rubric: [
      "Every task has a verified status and owner.",
      "Patient instructions come from an approved source.",
      "Clinical decisions are explicitly routed to authorized staff.",
      "The handoff lists unresolved tasks separately.",
    ],
    scenario:
      "The booking is confirmed, but a required form and referral outcome are pending. Which status is accurate?",
    answers: [
      "Everything completed",
      "Booking completed; form and referral tasks remain open with owners",
      "Visit canceled automatically",
    ],
    correct: 1,
    why: "Different journey stages need separate evidence. Record the completed booking and keep unresolved work visible.",
    taglish:
      "Isipin ang patient journey na relay: booking, preparation, visit support, at follow-up. Hindi lahat done dahil may appointment na. Bawat pending item dapat may status, owner, at next action. Kung missing ang form, factual ang note—hindi judgment tungkol sa patient. Clinical instructions come from authorized staff, hindi sa hula mo.",
    tip: "Before closing a task, ask what evidence proves its required outcome—not merely that you performed one step.",
    mentor:
      "Explain the three separate open items to a practice partner and ask whether they can identify the next owner.",
  },
  {
    title: "Workshop: identity and disclosure decisions",
    desc: "Practice what to verify, what to pause, and who decides disclosure.",
    time: "45 min",
    objectives: [
      "Distinguish identity from authority to receive information.",
      "Handle a discrepancy without adding arbitrary requirements.",
      "Document and route a request while protecting information.",
    ],
    concept:
      "Knowing who a caller is does not automatically establish what they may receive. Identity asks “Who is requesting?” Authority asks “What permits this person to receive this information?” Covered organizations use their verification and disclosure policies; the administrative assistant does not invent a universal script, legal exception, or required document. Patient-access requests and third-party requests may follow different processes.",
    steps: [
      "Identify the request type without unnecessarily confirming protected details.",
      "Use the practice’s approved verification process. Do not disclose information while a required verification step is unresolved.",
      "Check authority and role permissions through the authorized workflow. A family relationship or professional title alone is not enough to make your own disclosure decision.",
      "If facts conflict, pause that disclosure and contact the designated privacy or records owner. Preserve the request so it can still be processed.",
      "Record what was verified, what remains unresolved, and the next owner in the approved location. Follow the responsible team’s instructions.",
    ],
    case: "A caller says they are the spouse of training patient Lee Example and asks for a report. A second caller says they are from a specialist office but provides a destination different from the one in the approved directory. Neither statement alone resolves verification and authority.",
    model:
      "“I can help route the request. I need to follow our verification and information-release process before discussing or sending protected details.” Handoff: requester’s stated relationship or organization captured; authorization and destination checks unresolved; assigned to the designated records/privacy owner.",
    mistakes: [
      "Treating a verified name as permission to release every record.",
      "Inventing an extra document requirement for every patient-access request.",
      "Sending to an unfamiliar destination simply because the caller sounds professional.",
    ],
    drills: [
      "Write separate responses for a patient access request, a family member, and an outside office.",
      "For each, list what you know, what remains unverified, and the authorized decision owner.",
      "Practice a calm response when the requester insists you skip the process.",
    ],
    rubric: [
      "Identity and authority are treated separately.",
      "No protected detail is disclosed while required checks are unresolved.",
      "The request is preserved and routed rather than independently denied.",
      "The destination is verified under practice policy.",
    ],
    source:
      '<a href="https://www.hhs.gov/hipaa/for-professionals/faq/how-may-hipaas-requirements-for-verification-of-identity-be-met-electronically/index.html" target="_blank" rel="noopener">HHS verification guidance</a>',
    scenario:
      "You verified a caller’s identity but their authority to receive the report is unresolved. What is appropriate?",
    answers: [
      "Send the report because identity is enough",
      "Pause the disclosure and route through the authorized process",
      "Permanently reject every request from that person",
    ],
    correct: 1,
    why: "Identity and disclosure authority are different questions. Use the authorized process without inventing a denial.",
    taglish:
      "Magkaiba ang identity at authority. Kilala mo kung sino ang caller, pero hindi ibig sabihin na puwede siyang tumanggap ng lahat ng records. Follow clinic policy, pause disclosure kapag unresolved ang required check, at preserve the request para ma-review ng tamang owner. Huwag gumawa ng sariling legal rule o automatic denial.",
    tip: "Use a “verified / unresolved / owner” handoff instead of a vague “privacy issue” note.",
    mentor:
      "Explain why a verified spouse’s identity does not, by itself, settle the requested disclosure.",
  },
  {
    title: "Workshop: a difficult call from start to finish",
    desc: "Practice listening, clarification, escalation, documentation, and a useful close.",
    time: "45 min",
    objectives: [
      "Keep the conversation calm without unsupported promises.",
      "Separate a caller’s reported concern from verified information.",
      "Produce a concise note and an accountable handoff.",
    ],
    concept:
      "A difficult call has two jobs: help the caller understand the next step, and create an accurate record for the next team. A friendly tone cannot compensate for a missing callback detail or an invented promise. You can acknowledge frustration without deciding fault, offer the action within your role, and follow the practice’s procedures for urgency, threats, or abusive conduct.",
    steps: [
      "Open with the approved greeting and verify identity before protected details.",
      "Listen for the actual request. Ask one clarifying question at a time and preserve the caller’s wording when clinical content appears.",
      "Summarize: “You are asking about X, and you have already contacted us about Y—is that correct?”",
      "Explain the authorized next action. Use only approved response expectations; do not invent a guaranteed callback.",
      "Confirm approved callback details, document the action and owner, and end with a clear explanation of how follow-up works.",
    ],
    case: "Training patient Casey calls upset about a delayed refill response and asks whether to change the dose while waiting. They also say nobody called back. You cannot verify that last claim from the available history. The dose question goes through the clinical escalation protocol, not your personal recommendation.",
    model:
      "“I understand waiting for a response is frustrating. I will record your refill and dose question and follow our process to reach the clinical team. I cannot recommend a medication change.” Note: patient reports no callback; available history reviewed without confirming the full claim; callback verified; clinical request routed under protocol; follow-up owner documented.",
    mistakes: [
      "Writing “clinic ignored patient” when that was a caller allegation.",
      "Promising a prescription approval or a specific callback you cannot arrange.",
      "Using medical advice to calm the caller.",
    ],
    drills: [
      "Record a two-minute fictional call with greeting, clarification, acknowledgment, next step, and close.",
      "Write a note separating patient-reported information from verified history.",
      "Replay the recording and remove interruptions, jargon, blame, and unsupported promises.",
    ],
    rubric: [
      "The actual request is captured accurately.",
      "Clinical content goes to the authorized team.",
      "The response states an actionable next step.",
      "The note separates reported and verified facts.",
    ],
    scenario:
      "The caller says the clinic never called, but the available history is incomplete. How should you document it?",
    answers: [
      "Clinic ignored the patient",
      "Patient reports no callback; available history does not resolve that report",
      "Patient is lying",
    ],
    correct: 1,
    why: "Record the report and the limits of your verification. Do not convert an allegation into a confirmed fact.",
    taglish:
      "Sa difficult call, calm tone plus accurate action ang kailangan. I-acknowledge ang frustration, clarify ang actual request, at route clinical questions. Kapag sabi ng patient walang callback pero incomplete ang history, “patient reports” ang wording. Huwag gawing confirmed fact o accusation ang hindi mo verified.",
    tip: "After the call, check whether another staff member could act on the note without calling you for missing context.",
    mentor:
      "Ask a practice partner to play an upset caller, then review your script and note separately.",
  },
  {
    title: "Workshop: troubleshoot a blocked video visit",
    desc: "Help with technical barriers while preserving the practice’s approved workflow.",
    time: "40 min",
    objectives: [
      "Use a clear sequence for technical support.",
      "Distinguish login, connection, and visit-policy problems.",
      "Document a delay without approving a different care format yourself.",
    ],
    concept:
      "A blocked video visit can involve an inaccessible message, a login problem, device permissions, connectivity, or a policy question. These require different owners. You can guide approved basic checks, but you should not collect passwords, use a personal meeting account, interpret clinical concerns, or promise that an alternative visit format is permitted. Workflow depends on the platform and practice.",
    steps: [
      "Confirm the appointment details and approved joining route after required verification.",
      "Ask what the patient can see and the exact error wording. Do not ask them to reveal credentials or sensitive screenshots through unapproved channels.",
      "Give one permitted troubleshooting step at a time. Use the official support instructions, not improvised device access.",
      "Ask about accessibility or language support needs and route through approved services.",
      "Notify the visit team of delays and follow the approved backup process. Record the issue, attempted checks, current status, owner, and next action.",
    ],
    case: "Training patient Sam received the link but cannot enable the microphone. They are also unsure whether a caregiver may join. Guide only the approved microphone check; route participation or consent questions to the authorized team. If connection remains blocked, report the delay and use the approved backup plan.",
    model:
      "“Please follow the microphone check in our approved instructions. I will let the visit team know you are having connection trouble. I will also ask the team about the caregiver participation process.” Note: link received; microphone unavailable; approved check attempted; team notified; alternative format not independently approved.",
    mistakes: [
      "Treating every problem as a password problem.",
      "Requesting a password or remote-control access outside approved policy.",
      "Switching to a personal meeting link to avoid reporting a delay.",
    ],
    drills: [
      "Create a troubleshooting tree for missing instructions, login failure, and microphone failure using fictional inputs.",
      "Write one clear instruction per branch and identify its support owner.",
      "Draft a delay message that contains no unauthorized visit decision.",
    ],
    rubric: [
      "The observed problem is specific.",
      "Only approved technical steps are offered.",
      "Participation and care-format decisions have authorized owners.",
      "Delay status and next action are documented.",
    ],
    source:
      '<a href="https://telehealth.hhs.gov/providers/planning-your-telehealth-workflow" target="_blank" rel="noopener">HHS telehealth workflow guidance</a>',
    scenario:
      "Basic checks fail and the patient asks you to change the video visit into a phone visit. What should you do?",
    answers: [
      "Approve the change yourself",
      "Notify the visit team and follow the approved backup process",
      "Send your personal meeting link",
    ],
    correct: 1,
    why: "The care team and practice rules determine the permitted alternative. Technical assistance does not authorize a visit-format change.",
    taglish:
      "Hindi lahat ng video problem ay same solution. Alamin ang exact error, then one approved step at a time. Kung caregiver participation, consent, o alternative visit format ang tanong, authorized team ang magde-decide. Hindi solution ang personal meeting link o paghingi ng password.",
    tip: "Document what was attempted so the next support person does not repeat the same checks blindly.",
    mentor:
      "Explain three different blockers and name the correct owner for each.",
  },
  {
    title: "Workshop: recover a stalled referral",
    desc: "Locate the blockage and create a clear recovery plan.",
    time: "45 min",
    objectives: [
      "Identify the stage where progress stopped.",
      "Use verified evidence instead of assumptions about another office.",
      "Build a follow-up plan with ownership and closure criteria.",
    ],
    concept:
      "A referral can stall before transmission, during receipt, while gathering information, at scheduling, or while awaiting a report. “Pending referral” is too broad to guide action. First determine the last verified milestone, then identify the missing step. Your role is administrative coordination; clinical need, urgency, and interpretation remain with authorized clinical staff.",
    steps: [
      "Verify the patient, referral source, intended destination, and your permissions.",
      "Review approved records for the last confirmed milestone. Distinguish “sent” from “receipt confirmed.”",
      "Check the recipient’s actual request against the practice’s packet checklist. Obtain clinical documents only through the responsible team.",
      "Assign each missing item to an owner and use the practice’s follow-up rules. Verify receipt of required handoffs.",
      "Define the required administrative outcome and what still needs clinical review. Keep the referral open until the practice’s closure requirement is met.",
    ],
    case: "The training tracker says “sent.” The receiving office says it needs a report, while the patient believes they are already scheduled. There is no confirmed appointment in the available record. Do not invent a booking, blame the patient, or say the receiving office lost the packet.",
    model:
      "Last verified milestone: transmission recorded; scheduling unconfirmed. Receiving office reports a missing document. Authorized document owner assigned; coordinator to confirm receipt and scheduling status under policy. Patient informed that status is being checked; no appointment date promised.",
    mistakes: [
      "Using “sent” as proof of acceptance and scheduling.",
      "Marking the referral complete when a report arrived but clinical review remains untracked.",
      "Assigning clinical urgency without an authorized source.",
    ],
    drills: [
      "Build a milestone tracker with transmission, receipt, missing items, scheduling, report receipt, and clinical-review handoff.",
      "Write a factual outside-office follow-up script and a patient-facing status update.",
      "Add a branch where outreach gets no response and show the next policy-based action.",
    ],
    rubric: [
      "Last verified milestone is identified.",
      "Unconfirmed details remain explicitly unconfirmed.",
      "Every missing item has an owner.",
      "Administrative closure and clinical review are distinct.",
    ],
    scenario:
      "The tracker says “sent,” but no receipt or scheduling is confirmed. What should you report?",
    answers: [
      "Appointment confirmed",
      "Transmission recorded; receipt and scheduling need confirmation",
      "Referral completed",
    ],
    correct: 1,
    why: "Report the milestone supported by evidence and track the missing confirmation.",
    taglish:
      "Hanapin kung saan talaga na-stall ang referral: transmission, receipt, missing docs, scheduling, o report. Hindi pareho ang “sent” at “scheduled.” State the last verified milestone, assign each missing step, at follow the approved timeline. Huwag mag-blame o mag-promise ng appointment na hindi confirmed.",
    tip: "Make each status specific enough to tell the next person what evidence to obtain.",
    mentor:
      "Give your tracker to a practice partner and ask them to identify the blockage in under one minute.",
  },
  {
    title: "Workshop: conflicting insurance information",
    desc: "Resolve administrative discrepancies without guessing coverage or changing codes.",
    time: "45 min",
    objectives: [
      "Separate eligibility, service requirements, and claim outcomes.",
      "Record source conflicts so billing can investigate.",
      "Communicate uncertainty clearly to the patient.",
    ],
    concept:
      "Insurance information can conflict because sources refer to different dates, services, plans, networks, or claim stages. You should not pick the answer that sounds best. Verify the scope of each source, document the discrepancy, and route decisions to authorized billing staff. This workshop teaches an administrative investigation record, not coding, appeals, or a guarantee of payment.",
    steps: [
      "Verify the patient, plan details, and intended date or service using approved records.",
      "Record each source and when it was checked. Capture reference identifiers and the exact statement relevant to the task.",
      "Identify what each source actually establishes: active coverage, benefit details, authorization requirement, or a claim response.",
      "Check permitted administrative fields and route unresolved discrepancies to the billing or authorization owner. Do not alter codes or clinical justification.",
      "Explain the next review step and preserve pending status. Use authorized estimates or instructions only; do not promise zero cost.",
    ],
    case: "A training eligibility check shows an active plan, but an older claim response lists an identifier issue. The patient asks whether the next visit will be free. These are three different questions: eligibility on a date, a prior claim issue, and a future cost question.",
    model:
      "Eligibility source and check date documented. Prior claim’s stated identifier issue preserved for billing review; identifiers checked only within assigned permissions. Future cost question routed to billing for the service-specific review. Patient told that the team will review available plan information, without a payment guarantee.",
    mistakes: [
      "Treating an active plan as proof that every service is fully paid.",
      "Changing a claim code to remove an administrative rejection.",
      "Discarding a conflicting source without documenting its scope.",
    ],
    drills: [
      "Create a fictional discrepancy log with date of service, source, checked date, statement, reference, owner, and next step.",
      "Write a patient-facing answer to the cost question without promising payment.",
      "Write the billing handoff and highlight which facts remain unresolved.",
    ],
    rubric: [
      "Every statement has a source and relevant date.",
      "Eligibility and payment questions are kept distinct.",
      "Only authorized corrections are proposed.",
      "The patient receives a clear next step rather than a guarantee.",
    ],
    scenario:
      "An active eligibility result conflicts with an older claim response. What is the strongest handoff?",
    answers: [
      "Insurance will pay everything",
      "Record each source, date, and issue; route unresolved questions to billing",
      "Delete the older response",
    ],
    correct: 1,
    why: "Preserve the scope and evidence from both sources. The authorized team determines the appropriate review and resolution.",
    taglish:
      "Kapag conflicting ang insurance info, huwag piliin lang ang mas convenient na sagot. Check anong date, service, plan, at claim stage ang tinutukoy ng bawat source. Active coverage, prior claim issue, at future cost ay different questions. Document the conflict at route sa billing; hindi guarantee ang eligibility result.",
    tip: "A useful discrepancy log makes the question explicit: what fact does each source establish, and what still needs review?",
    mentor:
      "Explain the three questions in the case without mixing their answers.",
  },
  {
    title: "Workshop: downtime and reconciliation",
    desc: "Maintain safe continuity and verify recovery without duplicating tasks.",
    time: "45 min",
    objectives: [
      "Follow an approved fallback during a system interruption.",
      "Keep coverage and unresolved work visible.",
      "Reconcile authorized records after recovery.",
    ],
    concept:
      "Downtime is not permission to create your own record system. The employer determines permitted fallback tools, required information, and who can access them. Recovery also needs care: entering the same task twice can be as harmful to workflow as forgetting it. Your administrative role includes accurate notification, approved handoff, and reconciliation under the practice’s process.",
    steps: [
      "Confirm the interruption through the approved support route and notify the designated shift contact. Do not claim a root cause you have not verified.",
      "Use the approved downtime procedure and record only required information in the authorized location.",
      "Identify tasks needing coverage or immediate protocol-based escalation. Do not wait silently for the system to return.",
      "When recovery is confirmed, compare authorized downtime entries against the live system using the approved reconciliation method.",
      "Document which items were reconciled, already existed, remain pending, or need supervisor review. Preserve required audit information instead of deleting evidence casually.",
    ],
    case: "The training scheduling system fails after one booking is submitted but before its confirmation appears. Two further requests are recorded through the authorized downtime process. On recovery, check whether the first booking already exists before adding it again; then reconcile the remaining requests under policy.",
    model:
      "Support and shift lead notified. First booking outcome unconfirmed at interruption. After recovery, approved lookup confirms it already exists; no duplicate created. Two downtime requests reconciled after verification. One unresolved detail assigned to supervisor review. Recovery and pending status documented.",
    mistakes: [
      "Copying live patient data to a personal notes app.",
      "Assuming an unconfirmed submission failed and submitting it again.",
      "Marking downtime work complete without reconciliation evidence.",
    ],
    drills: [
      "Write an initial outage notice with impact and coverage needs.",
      "Create three fictional downtime entries using a practice template.",
      "Simulate recovery: one entry already exists, one is missing, and one conflicts. Document the action and owner for each.",
    ],
    rubric: [
      "Fallback tools and channels remain approved.",
      "Unconfirmed outcomes are not treated as failures without checking.",
      "Duplicate entries are avoided.",
      "Unresolved recovery items remain visible.",
    ],
    scenario:
      "A booking may have saved just before the outage. What comes first after recovery?",
    answers: [
      "Create another booking immediately",
      "Verify the existing record through the approved reconciliation process",
      "Delete the downtime entry without checking",
    ],
    correct: 1,
    why: "Verify the outcome before repeating a mutation. Reconciliation helps avoid duplicates and missed work.",
    taglish:
      "Kapag downtime, approved fallback lang—not personal apps para mabilis. Sa recovery, verify muna bago ulitin ang submission dahil baka saved na pala. Every downtime entry needs a reconciled status o owner for review. Hindi enough na “system is back” kung may unresolved requests pa.",
    tip: "Treat “outcome unknown” as its own status until the approved recovery check resolves it.",
    mentor:
      "Describe how you would handle one existing, one missing, and one conflicting training entry.",
  },
  {
    title: "Workshop: prove your skills in a full shift",
    desc: "Create a complete set of fictional work samples and review your decisions.",
    time: "60 min",
    objectives: [
      "Apply verification, communication, routing, and follow-through to a mixed queue.",
      "Produce evidence of practice rather than unsupported readiness claims.",
      "Identify specific gaps for supervised training.",
    ],
    concept:
      "This capstone is a practice workshop, not certification or independent clinical qualification. The task is to create usable outputs and explain your decisions. A perfect-looking tracker with unsafe assumptions is weaker than an honest tracker that identifies unresolved information. Use fictional details and keep your samples on your own device; do not enter real patient data in this hub.",
    steps: [
      "Inventory the queue and label required information, approved workflow, and decision owner for each item.",
      "Identify any reported urgency and describe the practice-protocol escalation without making a clinical assessment.",
      "Draft each administrative output, then independently verify facts, destinations, dates, time zones, and role boundaries.",
      "Create patient-facing scripts with clear next steps and no unsupported promises.",
      "Handoff unresolved work, review the outputs against the criteria below, and name the training gap you would discuss with a supervisor.",
    ],
    case: "Your fictional queue: a video booking across time zones; a spouse’s report request with unresolved authority; a delayed refill question; a referral missing a report; conflicting plan and claim information; and a system interruption with a submission outcome unknown. The supervisor wants an accurate end-of-shift summary.",
    model:
      "Deliverables: one booking read-back, one protected-information request handoff, one clinical-message note, one referral tracker entry, one billing discrepancy log, one downtime reconciliation note, and one shift summary. Each output distinguishes verified facts, reported information, unresolved checks, owner, and next step.",
    mistakes: [
      "Clearing the queue by guessing clinical answers or disclosure permissions.",
      "Calling fictional practice paid work experience.",
      "Counting a task as complete when required evidence is missing.",
    ],
    drills: [
      "Create all seven deliverables using invented information. Work in two sessions if needed; accuracy comes before speed.",
      "Ask a practice partner to identify every next owner and missing fact without your explanation.",
      "Revise unclear or unsafe outputs, then record a three-minute walkthrough of two decisions and one remaining learning gap.",
    ],
    rubric: [
      "Accuracy: facts have a source and uncertainties are labeled.",
      "Safety: no action exceeds administrative training or authorization.",
      "Communication: the reader can identify the next step.",
      "Ownership: open work has a responsible team and follow-up.",
      "Honesty: samples are labeled fictional training and readiness claims match evidence.",
    ],
    scenario:
      "Your capstone looks polished but includes an invented callback promise and an unverified disclosure. What should you do?",
    answers: [
      "Keep them to sound confident",
      "Revise both, identify the missing approval or information, and review the corrected outputs",
      "Only change the font",
    ],
    correct: 1,
    why: "Quality depends on accurate, authorized actions and clear next steps. Presentation cannot compensate for unsafe assumptions.",
    taglish:
      "Sa full-shift capstone, evidence ang goal—not confidence na walang basis. Produce notes, scripts, tracker, logs, at handoff using fictional info. Mark uncertain facts, assign owners, at revise unsafe promises or disclosure assumptions. Explain your learning gaps honestly; supervisor-reviewed practice pa rin ang kailangan sa real clinic.",
    tip: "Review your decisions as carefully as your wording: what did you verify, what did you assume, and who was authorized to decide?",
    mentor:
      "Ask a practice partner to score each deliverable as complete, needs revision, or needs supervisor guidance; revise every unresolved item.",
  },
].map((l) => ({
  ...l,
  body: `<h2>What you will learn</h2>
<ul>${l.objectives.map((x) => `<li>${x}</li>`).join("")}</ul>
<h2>The reasoning behind the workflow</h2>
<p>${l.concept}</p>
<h2>Step-by-step workflow</h2>
<ol>${l.steps.map((x) => `<li>${x}</li>`).join("")}</ol>
<h2>Case file — fictional training</h2>
<p>${l.case}</p>
<details class="worked-answer">
<summary>Compare with the model response</summary>
<p>${l.model}</p>
<p>Compare your reasoning, not only your wording. Practice policies determine the actual channels, timeframes, and permissions.</p>
</details>
<h2>Common mistakes to avoid</h2>
<ul>${l.mistakes.map((x) => `<li>${x}</li>`).join("")}</ul>
<h2>Your multi-step assignment</h2>
<ol>${l.drills.map((x) => `<li>${x}</li>`).join("")}</ol>
<h2>Review before moving on</h2>
<ul>${l.rubric.map((x) => `<li>${x}</li>`).join("")}</ul>
<p>For every criterion, label your output “complete,” “needs revision,” or “needs supervisor guidance.” Revise each incomplete item. Marking the lesson complete records study progress; it does not establish professional competency.</p>${l.source ? `<p>Reference: ${l.source}</p>` : ""}`,
}));
mentorNotes.push(...workshopLessons.map((l) => [l.taglish, l.tip, l.mentor]));
