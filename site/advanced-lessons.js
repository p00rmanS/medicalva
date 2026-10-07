// Append-only curriculum: preserve existing lesson IDs and saved progress.
const advancedLessons = [
  {
    title: "Prevent patient-record mix-ups",
    desc: "Resolve look-alike records without guessing, merging, or overwriting.",
    time: "35 min",
    objectives: [
      "Apply the practice's identification workflow.",
      "Separate reported details from verified record information.",
      "Write a useful discrepancy handoff.",
    ],
    concept:
      "A matching name is a search clue, not enough evidence to select a record. Administrative accuracy begins before you type. Follow employer-approved identity checks and stop when identifiers conflict. Record merging, identity resolution, and corrections require the designated team and appropriate permissions.",
    steps: [
      "Ask for the identifiers required by practice policy in an approved private channel; do not supply answers for the caller to agree with.",
      "Search using the approved process and compare the required identifiers, not just the name or appointment type.",
      "If two records appear plausible, pause updates and disclosures. Do not open additional records merely out of curiosity.",
      "Describe the discrepancy to the registration or records team using only information necessary for the review.",
      "Record the owner, next action, and policy-based follow-up. Resume only when the authorized resolution is documented.",
    ],
    case: "Fictional case: two records share the name Alex Rivera. The caller's reported birth date matches neither visible candidate. The caller says one must be correct because both live nearby.",
    model:
      "Identification unresolved. Caller-reported identifiers do not match either candidate under the approved verification workflow. No record updated or information disclosed. Registration team asked to resolve the discrepancy; follow-up follows practice policy. Patient script: 'I need our registration team to verify the correct record before I make changes.'",
    mistakes: [
      "Choosing the closest match to keep the call short.",
      "Changing the birth date to make a record fit.",
      "Merging duplicate-looking charts without authority.",
    ],
    drills: [
      "Invent three record-search results and identify which checks are still missing.",
      "Draft a patient script, internal discrepancy note, and tracker entry.",
      "Ask a partner to find any statement that treats reported information as verified; revise it.",
    ],
    rubric: [
      "Identity checks follow a named practice workflow.",
      "No disclosure or modification occurs while identity is unresolved.",
      "Reported and verified details are distinct.",
      "A designated owner and next step are clear.",
    ],
    scenario:
      "Two charts have the same name but conflicting identifiers. What is your next action?",
    answers: [
      "Choose the newest chart",
      "Pause and route the identity discrepancy through the approved process",
      "Merge both charts",
    ],
    correct: 1,
    why: "Identity discrepancies need authorized resolution before updates or disclosure. A name alone does not settle which record belongs to the caller.",
    taglish:
      "Kapag magkapangalan ang patients, hindi puwedeng hulaan kung aling chart ang tama. Gamitin ang identifiers na required ng clinic at ihiwalay ang sinabi ng caller sa verified record details. Kung may conflict, pause muna ang update at disclosure, then registration team ang mag-resolve. Hindi ikaw basta magme-merge o magpapalit ng birth date para mag-match.",
    tip: "Before editing, ask: what evidence confirms this is the correct patient, and where is that confirmation recorded?",
    mentor:
      "Read your discrepancy note aloud. Remove any statement that implies the identity has already been resolved.",
    reference: "https://healthit.gov/clinical-quality-and-safety/safer-guides/",
    referenceTitle: "ONC SAFER Guides: patient identification",
  },
  {
    title: "Manage a results-message queue safely",
    desc: "Track administrative delivery and ownership without interpreting results.",
    time: "40 min",
    objectives: [
      "Distinguish receiving a result from clinical review.",
      "Route requests and reported urgency through policy.",
      "Maintain a follow-up trail without unsupported closure.",
    ],
    concept:
      "A result arriving in an inbox does not prove a clinician reviewed it or a patient received approved guidance. Your administrative job is to preserve the message, route it to the authorized clinical workflow, and track the assigned next step. Do not classify a result as normal, advise treatment, or decide clinical urgency.",
    steps: [
      "Verify the correct patient and encounter using approved checks.",
      "Identify the message source and record receipt time in the practice's approved system.",
      "Route the item to the responsible clinical team. Follow the escalation protocol for reported symptoms or urgency; do not perform independent triage.",
      "If a patient asks for an explanation, capture the request accurately and use an approved script identifying the clinical team as the decision owner.",
      "Track acknowledgment and pending actions as defined by practice policy. If an item remains unowned, escalate through the designated backup route.",
      "Close only the administrative step supported by evidence; do not mark clinical review complete on a clinician's behalf.",
    ],
    case: "Fictional case: a report has arrived, no clinical acknowledgment is visible, and a patient asks whether the values mean they should change medication. The usual provider is away.",
    model:
      "Report receipt recorded; clinical review not confirmed. Patient's medication question captured without advice. Routed to designated covering clinical team under practice policy; acknowledgment pending. Patient script: 'Your clinical team needs to review and explain this. I will send your question through our approved process.' Any reported urgency follows the clinic's escalation protocol.",
    mistakes: [
      "Calling the result reassuring based on an administrative screen.",
      "Treating a sent message as proof of review.",
      "Promising a callback time that the clinical team has not confirmed.",
    ],
    drills: [
      "Create five fictional queue rows with receipt, assigned owner, acknowledgment, and next-action fields.",
      "Write scripts for a routine status question and a question about medication; keep both within your role.",
      "Simulate an absent provider and document the backup routing path specified in your fictional policy.",
    ],
    rubric: [
      "No clinical interpretation or treatment advice appears.",
      "Receipt, review, and communication are separate statuses.",
      "Unacknowledged items have a next owner.",
      "Patient expectations match confirmed information.",
    ],
    scenario:
      "A report was forwarded but acknowledgment is missing. Can you mark clinical review complete?",
    answers: [
      "Yes, forwarding proves review",
      "No; track the pending acknowledgment and follow the approved escalation process",
      "Yes, if the report looks normal",
    ],
    correct: 1,
    why: "Forwarding is an administrative action. Clinical review and follow-up require the responsible clinical team and appropriate evidence.",
    taglish:
      "Ang received o forwarded na report ay hindi automatic na reviewed na ng clinician. Trabaho mo ang accurate routing at tracking, hindi interpretation ng numbers o medication advice. Kung absent ang provider, gamitin ang approved covering-team process. Magkaiba ang receipt, acknowledgment, clinical review, at patient communication—huwag silang pagsamahin sa isang 'done' status.",
    tip: "Use status labels that describe evidence: received, routed, acknowledgment pending, and administrative follow-up complete.",
    mentor:
      "Underline every clinical decision in your sample. Replace any decision you made yourself with the authorized owner and routing step.",
    reference: "https://healthit.gov/clinical-quality-and-safety/safer-guides/",
    referenceTitle: "ONC SAFER Guides: results reporting and follow-up",
  },
  {
    title: "Coordinate a changed appointment plan",
    desc: "Recover a provider schedule change with accurate communication and tracking.",
    time: "35 min",
    objectives: [
      "Confirm authorized scheduling options.",
      "Avoid duplicate bookings and unapproved visit changes.",
      "Track outreach attempts and unresolved patient needs.",
    ],
    concept:
      "A provider's schedule change creates several separate tasks: identify affected visits, confirm approved alternatives, contact patients appropriately, and reconcile the final schedule. Availability does not mean suitability. Visit duration, location, modality, provider, and preparation instructions must follow the practice's rules.",
    steps: [
      "Confirm the change and authorized alternatives with the scheduling lead before offering slots.",
      "Build the affected-visit list in the approved system, keeping required visit details and unresolved constraints visible.",
      "Follow identity and contact-preference policy before discussing a patient's booking; use approved voicemail wording.",
      "Offer only approved alternatives, then read back date, time zone, location or modality, and relevant approved instructions.",
      "Update the booking once the change is agreed and permitted. Check that the original and replacement statuses are consistent.",
      "Log unanswered outreach and patients who need an exception. Give unresolved cases to the designated scheduling or clinical owner rather than silently dropping them.",
    ],
    case: "Fictional case: four visits are affected. One patient accepts an approved slot, one cannot attend, one does not answer, and one asks to switch a visit to video without confirmed eligibility.",
    model:
      "Tracker: accepted replacement—booking reconciled and read-back completed; unavailable patient—scheduling exception pending; unanswered outreach—attempt logged with next policy-based action; video request—approval unresolved, no modality change made. End-of-shift summary names the owner and next action for all three open items.",
    mistakes: [
      "Cancelling every original appointment before alternatives are approved.",
      "Switching modality because it looks convenient.",
      "Leaving the same visit booked twice after a change.",
    ],
    drills: [
      "Create a four-row outreach tracker for the fictional case.",
      "Write an approved-alternative script and a limited voicemail script, labeling both as practice drafts.",
      "Reconcile a before-and-after schedule and identify any duplicate, missing status, or unclear next owner.",
    ],
    rubric: [
      "Only authorized alternatives are offered.",
      "Read-back includes date, time zone, and visit location or modality.",
      "Original and replacement statuses agree.",
      "Unreached and exception cases remain visible.",
    ],
    scenario:
      "A patient requests video, but approval for this visit type is unknown. What do you do?",
    answers: [
      "Change it because the patient prefers it",
      "Ask the designated team to confirm the permitted option before changing modality",
      "Delete the original visit",
    ],
    correct: 1,
    why: "Scheduling changes must follow the practice's approved options. A preference alone does not confirm that a modality is appropriate or authorized.",
    taglish:
      "Kapag nagbago ang provider schedule, hindi basta mass cancel ang solution. Confirm muna ang allowed slots at visit options, then contact patients gamit ang approved process. Read back ang date, time zone, at location o modality. Kung may unanswered calls o exception request, dapat may tracker, owner, at next step—hindi nawawala lang sa listahan.",
    tip: "Reconcile the old and new booking together; a replacement appointment is not finished while the original status remains ambiguous.",
    mentor:
      "Have a partner play a patient who declines every approved slot. Practice routing the exception without inventing a new option.",
  },
  {
    title: "Build a spreadsheet tracker clients can trust",
    desc: "Design useful statuses, validate entries, and summarize a fictional workload.",
    time: "45 min",
    objectives: [
      "Choose fields that support ownership and next steps.",
      "Spot inconsistent dates, duplicate rows, and misleading totals.",
      "Create a concise operational summary.",
    ],
    concept:
      "A tracker is useful when another teammate can tell what happened and what must happen next. In real work, use only employer-approved tools and permitted data. For training, use invented task IDs and fictional information. A spreadsheet is not a substitute for the official patient record or the approved clinical communication system.",
    steps: [
      "Define one row as one administrative task and choose a unique fictional task ID.",
      "Add received time with time zone, task type, status, owner, next action, follow-up target, and evidence or source fields.",
      "Define permitted statuses such as new, assigned, waiting on information, and administratively closed. Explain what evidence permits each transition.",
      "Use the approved tool's validation features or a manual check to catch missing owners, invalid dates, inconsistent spellings, and duplicates.",
      "Review overdue follow-ups using policy-defined targets. Do not create clinical urgency rankings from your own judgment.",
      "Summarize the queue with a timestamp, total rows, open items, unresolved owners, and the specific decision needed from the supervisor.",
    ],
    case: "Fictional case: ten tasks include two closed entries, three waiting for information, four assigned items, and one new item with no owner. Two rows accidentally share the same task ID.",
    model:
      "Initial row count: 10; closed rows: 2; open rows: 8. Counts are provisional because duplicate IDs need review—do not silently delete either row. The unowned new item needs assignment. Supervisor summary identifies the duplicate discrepancy, assignment request, and policy-based follow-up targets. Distinguish row count from unique-task count.",
    mistakes: [
      "Counting duplicate rows as separate completed tasks.",
      "Using color without a written status meaning.",
      "Putting real patient details in a personal spreadsheet for practice.",
    ],
    drills: [
      "Build the ten-row fictional dataset with the stated status distribution.",
      "Write a validation checklist and flag every missing owner or duplicate ID.",
      "Produce a five-sentence summary and explain why the unique-task count remains unresolved until review.",
    ],
    rubric: [
      "Fields identify owner and next action.",
      "Statuses have explicit meanings.",
      "Duplicate and missing-data issues are flagged without inventing facts.",
      "Summary totals are reproducible and provisional where necessary.",
    ],
    scenario:
      "Two rows share a task ID but their details differ. What should happen before reporting a unique-task total?",
    answers: [
      "Delete the older row",
      "Flag the discrepancy and resolve it through the approved review process",
      "Count both as completed",
    ],
    correct: 1,
    why: "Conflicting duplicate IDs need review. Neither deletion nor an assumed unique-task count is justified without establishing what the rows represent.",
    taglish:
      "Ang tracker ay dapat readable kahit hindi ikaw ang nag-eexplain. One row per task, clear status, owner, at next action. Kapag duplicate ang ID pero iba ang details, huwag basta delete—flag at review muna. Sa summary, sabihin kung row count lang ang total o verified unique tasks. Fictional data lang sa practice; approved tools lang sa real client work.",
    tip: "Before sending a summary, ask a teammate to reproduce one count from the tracker without asking you how it was calculated.",
    mentor:
      "Create a deliberate duplicate and missing-owner error, then explain how your review caught both before the client saw the report.",
  },
  {
    title: "Respond to a suspected account compromise",
    desc: "Report a suspicious login or attachment promptly through the employer's process.",
    time: "35 min",
    objectives: [
      "Describe observed facts without declaring a breach yourself.",
      "Avoid risky self-investigation and credential sharing.",
      "Maintain a clear handoff to the security team.",
    ],
    concept:
      "A suspicious event is a reason to use the employer's incident process, not an invitation to investigate accounts alone. You may not know whether information was accessed. Prompt factual reporting lets the authorized team decide containment and investigation. The exact actions and reporting channels must come from your employer's policy.",
    steps: [
      "Stop interacting with the suspicious message or attachment and follow the approved immediate-response instructions.",
      "Contact the designated security or IT team through a known channel. If normal communication may be compromised, use the policy's alternate route.",
      "Record what you observed: time with time zone, system involved, action already taken, and visible error or alert. Send evidence only through an approved channel.",
      "Do not disclose passwords or authentication codes to anyone asking for them in a message. Verify requests through known support channels.",
      "Avoid deleting evidence, running unapproved tools, resetting shared accounts, or contacting patients about a presumed breach yourself.",
      "Follow authorized containment and recovery instructions, track the incident reference, and confirm permission before resuming affected work.",
    ],
    case: "Fictional case: you clicked an unexpected attachment and then saw a login alert you do not recognize. A reply to the email asks you to send a one-time code to 'fix the account.'",
    model:
      "Observed: unexpected attachment opened at a recorded time; unfamiliar login alert appeared; credential request received. No code shared. Incident reported through the known security channel with approved evidence. Impact not yet determined. Work on the affected account resumes only under the authorized recovery process; operational blockers are handed to the supervisor.",
    mistakes: [
      "Sending a one-time code to someone claiming to be IT.",
      "Deleting the message to hide the mistake.",
      "Announcing a confirmed data breach before the responsible team investigates.",
    ],
    drills: [
      "Write a factual incident report separating observed events from assumptions.",
      "Draft a supervisor update that describes the work blocker without exposing sensitive evidence.",
      "Create a fictional reporting contact card with normal and alternate channels; mark that real channels must be supplied by the employer.",
    ],
    rubric: [
      "No credentials or codes are disclosed.",
      "Facts and unknowns are clearly distinguished.",
      "Reporting uses a known approved channel.",
      "Recovery and patient notifications remain with authorized decision makers.",
    ],
    scenario:
      "An email claiming to be IT asks for your one-time authentication code. What do you do?",
    answers: [
      "Reply with the code",
      "Do not share it; verify and report through a known approved support channel",
      "Forward the code to a coworker",
    ],
    correct: 1,
    why: "A message's claim of authority does not make a credential request legitimate. Use the approved verification and security-reporting process.",
    taglish:
      "Kapag may suspicious attachment o login alert, report agad through known IT or security channel. Facts lang ang ilagay: ano ang nakita, kailan, at ano ang nagawa mo. Huwag share password o one-time code, huwag delete evidence para itago, at huwag sariling investigation. Authorized team ang magde-decide ng containment, recovery, at kung may required notifications.",
    tip: "Prepare the reporting route before an incident: knowing whom to contact is more useful than improvising while an account may be compromised.",
    mentor:
      "Practice saying 'impact is not yet determined' while still giving a clear, prompt report of what you observed.",
    reference:
      "https://www.hhs.gov/hipaa/for-professionals/security/guidance/cybersecurity/index.html",
    referenceTitle: "HHS cybersecurity guidance and incident procedures",
  },
  {
    title: "Turn a new client request into a safe workflow",
    desc: "Clarify scope, demonstrate a pilot, and earn approval before working independently.",
    time: "45 min",
    objectives: [
      "Translate a vague request into concrete deliverables.",
      "Identify permissions, review gates, and success measures.",
      "Demonstrate a fictional pilot and communicate training gaps.",
    ],
    concept:
      "Clients can ask for outcomes in vague language: 'handle our inbox' or 'make follow-up better.' A dependable VA turns that into a reviewed workflow. Clarifying authority is part of doing the work well. A polished draft is useful evidence, but it does not replace onboarding or permission to act on real patient information.",
    steps: [
      "Write the requested outcome in plain language and confirm which tasks and systems are in scope.",
      "Ask who decides clinical questions, disclosures, exceptions, and priority rules. Record the backup route for each unresolved decision.",
      "Define the deliverable: required fields, approved templates, owner, handoff channel, and what evidence means the task is finished.",
      "Draft a short procedure with trigger, inputs, checks, action, escalation, documentation, and closure criteria.",
      "Run a fictional pilot with a routine task, missing-information task, and out-of-scope request. Record the decisions you could not make independently.",
      "Ask the supervisor to review the procedure and outputs. Revise, record the approved version, and confirm supervised practice requirements before real independent work.",
    ],
    case: "Fictional case: a new client says 'take over the inbox tomorrow.' You have practiced message tracking but have not been trained in their EHR, escalation policies, or authorized message templates.",
    model:
      "Response: 'I can prepare a draft inbox workflow and fictional sample queue today. Before handling real messages, I need your approved access, routing rules, templates, training, and review process. Could we review three sample cases and agree on a supervised start?' Draft deliverables: scope table, procedure, three sample notes, and a list of unresolved approvals.",
    mistakes: [
      "Agreeing to every task without identifying authority or training gaps.",
      "Treating a draft template as approved patient-facing wording.",
      "Measuring success only by the number of messages closed.",
    ],
    drills: [
      "Create a one-page scope table listing task, tool, permission, decision owner, and completion evidence.",
      "Write a short procedure and test the three fictional pilot cases.",
      "Prepare a two-minute client walkthrough showing one successful case, one exception, and one training gap; revise after feedback.",
    ],
    rubric: [
      "Scope and permissions are explicit.",
      "Clinical and disclosure decisions have authorized owners.",
      "Pilot outputs show accurate facts and next steps.",
      "Independent work begins only after the required onboarding and approvals.",
    ],
    scenario:
      "You receive a draft patient-message template with no approval recorded. What is the appropriate next step?",
    answers: [
      "Use it because it reads professionally",
      "Obtain the designated review and approval before using it with patients",
      "Rewrite it with an AI tool and send it",
    ],
    correct: 1,
    why: "Professional wording does not establish authorization. Patient-facing templates need the practice's required review and approval.",
    taglish:
      "Kapag sinabi ng client na 'handle the inbox,' kailangan gawing specific ang scope, tools, permissions, at success criteria. Gumawa ng draft workflow at fictional pilot para concrete ang review. Sabihin nang honest kung anong training ang kulang. Ang draft template o magandang work sample ay hindi automatic approval para gamitin sa real patients; supervised onboarding muna ayon sa client process.",
    tip: "Bring a concrete draft and a short list of decisions needed; it makes onboarding discussions easier to act on.",
    mentor:
      "Ask a partner to act as a client who wants immediate independence. Practice an honest response that offers useful preparation and clearly names the required onboarding.",
  },
].map((lesson) => ({
  ...lesson,
  body: `<h2>What you will learn</h2>
<ul>${lesson.objectives.map((item) => `<li>${item}</li>`).join("")}</ul>
<h2>Understand the task</h2>
<p>${lesson.concept}</p>
<h2>Step-by-step workflow</h2>
<ol>${lesson.steps.map((item) => `<li>${item}</li>`).join("")}</ol>
<h2>Fictional case: try before opening the answer</h2>
<p>${lesson.case}</p>
<details class="worked-answer">
<summary>Compare with the model response</summary>
<p>${lesson.model}</p>
<p>Actual permissions, channels, and follow-up targets come from the employer's approved procedures.</p>
</details>
<h2>Common mistakes</h2>
<ul>${lesson.mistakes.map((item) => `<li>${item}</li>`).join("")}</ul>
<h2>Your assignment</h2>
<ol>${lesson.drills.map((item) => `<li>${item}</li>`).join("")}</ol>
<h2>Mentor review checklist</h2>
<ul>${lesson.rubric.map((item) => `<li>${item}</li>`).join("")}</ul>
<p>Score each criterion as complete, needs revision, or needs supervisor guidance. Revise unresolved items before moving on. Completion records study progress, not professional competence.</p>
${lesson.reference ? `<p>Further reading: <a href="${lesson.reference}" target="_blank" rel="noopener noreferrer">${lesson.referenceTitle}</a>. Reviewed October 7, 2026.</p>` : ""}`,
}));
mentorNotes.push(
  ...advancedLessons.map((lesson) => [
    lesson.taglish,
    lesson.tip,
    lesson.mentor,
  ]),
);
