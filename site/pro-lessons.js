// Each lesson includes a workflow, an independent drill, and review criteria.
const professionalLessons = [
  {
    title: "Manage cancellations and waitlists",
    desc: "Fill approved openings without creating booking conflicts.",
    time: "25 min",
    steps: [
      "Check the cancellation policy and whether you are authorized to change the booking. Confirm patient identity and appointment details.",
      "Record the cancellation accurately, including any reason the patient volunteers. Do not record assumptions about motivation.",
      "Offer openings only to eligible patients under the approved waitlist rules. Check visit type, provider, duration, and location.",
      "Follow the practice’s process for holds and expiration. Recheck availability immediately before committing a replacement booking.",
      "Confirm the change with the patient and document it. Do not move another patient without authorization.",
    ],
    example:
      "Training patient Avery cancels a 30-minute follow-up. Another patient needs a 60-minute new-patient visit. That opening is not automatically suitable.",
    drill:
      "Create a fictional waitlist with visit type, allowed provider, contact preference, and status. Match two approved openings to suitable requests. Explain why one mismatch must stay unbooked.",
    rubric: [
      "Every match meets visit-type and duration rules.",
      "Only one confirmed booking occupies each slot.",
      "Each offer and response has a documented status.",
    ],
    scenario:
      "An opening is shorter than the approved visit duration. What should you do?",
    answers: [
      "Book it anyway to fill the calendar",
      "Find a suitable slot or ask the scheduling lead for an approved option",
      "Shorten the visit yourself",
    ],
    correct: 1,
    why: "Utilization does not justify an unsuitable booking. Follow visit rules and ask the scheduling lead when the available slot does not fit.",
  },
  {
    title: "Coordinate schedules across time zones",
    desc: "Avoid date and daylight-saving mistakes.",
    time: "25 min",
    steps: [
      "Identify the practice’s scheduling time zone and the patient’s location using approved information. Do not assume all U.S. states change clocks.",
      "Use the date of the appointment in an approved calendar tool. Daylight-saving offsets can change between today and the visit date.",
      "Check whether the converted time falls on a different calendar day.",
      "Read back the appointment in the agreed time zone with date, provider, and format.",
      "Document the confirmed time zone and provide the approved reminder. Route telehealth location eligibility questions to the designated team.",
    ],
    example:
      "An appointment near midnight in the practice’s zone can fall on a different day for a remote patient. Saying only “Thursday at 11” is incomplete.",
    drill:
      "Use an approved calendar to create three fictional appointments across two time zones, including one near midnight. Write both local dates and times, and have someone independently check the conversion.",
    rubric: [
      "The appointment date is included in the conversion.",
      "Both dates are checked when midnight is crossed.",
      "The patient-facing read-back names the time zone.",
    ],
    scenario:
      "A visit is next month, after a clock change in one location. Which conversion is reliable?",
    answers: [
      "Use today’s offset for every visit",
      "Convert the actual appointment date with an approved calendar",
      "Always subtract three hours",
    ],
    correct: 1,
    why: "Use the actual date and named time zones. Fixed offsets can be wrong when daylight-saving rules differ.",
  },
  {
    title: "Support prior authorization tracking",
    desc: "Prepare an administrative packet and track its status.",
    time: "30 min",
    steps: [
      "Verify the patient, plan, intended service, and date using the practice checklist. Requirements vary by payer and service.",
      "Check requirements through approved payer sources. Record when and where you checked.",
      "Collect only the documents the authorized team identifies. Clinical staff supply medical justification; coding staff confirm codes.",
      "Submit only if your role permits it, using an approved channel. Capture reference number, status, and the next action.",
      "Route missing information or denial to the responsible team. Confirm approval details and relevant limits without promising payment.",
    ],
    example:
      "A payer asks for additional clinical notes. Record the request and deadline in the authorized queue, assign it to the clinical authorization team, and confirm follow-up under policy.",
    drill:
      "Build a fictional authorization tracker with service, payer, reference number, submission date, status, missing items, owner, and follow-up. Include pending, approved, and additional-information cases.",
    rubric: [
      "Each open case has an owner and next step.",
      "Clinical justification is routed to clinical staff.",
      "Approval is documented without a blanket payment promise.",
    ],
    scenario:
      "An authorization request needs a medical-necessity explanation. What is your role?",
    answers: [
      "Invent wording that sounds persuasive",
      "Ask the authorized clinical team for the required documentation",
      "Copy another patient’s note",
    ],
    correct: 1,
    why: "Clinical justification must come from authorized staff and the correct record. Administrative support tracks and routes the request accurately.",
  },
  {
    title: "Understand the revenue cycle",
    desc: "Follow a visit from registration to payment follow-up.",
    time: "30 min",
    steps: [
      "Recognize the stages: registration, coverage checks, visit documentation, coding, claim submission, payer processing, and payment follow-up. Actual workflows vary.",
      "Learn which team owns each stage. Administrative access is not permission to code a service or edit clinical documentation.",
      "Understand that a claim is a payment request and a denial is a payer decision requiring review. A rejected claim may need correction before processing.",
      "Document the stated issue using the approved billing workflow, with the claim reference and next owner.",
      "Route charges, write-offs, appeals, and cost estimates to authorized billing staff. Never promise a refund or adjust a balance on your own.",
    ],
    example:
      "A patient reports a bill after insurance processing. Capture the concern and route it to billing; do not conclude that the payer or clinic made an error.",
    drill:
      "Draw a seven-stage workflow and label the responsible role at every stage. Add one example of an administrative action you may perform and one action needing authorization.",
    rubric: [
      "Coding and clinical documentation have authorized owners.",
      "Patient concerns are captured without deciding liability.",
      "The workflow includes follow-up after payer processing.",
    ],
    scenario: "A patient wants you to erase a charge they believe is wrong.",
    answers: [
      "Delete it immediately",
      "Explain that billing will review it and route the request under policy",
      "Tell them all disputed bills are invalid",
    ],
    correct: 1,
    why: "Billing review and authorized adjustment processes determine the outcome. A VA should not remove charges or promise an adjustment.",
  },
  {
    title: "Gather information for a billing review",
    desc: "Create a useful handoff for rejected or denied claims.",
    time: "25 min",
    steps: [
      "Verify the patient and your access before reviewing the available billing information.",
      "Capture the claim identifier, date of service, payer response, and the exact stated reason. Do not infer the cause from a brief label.",
      "Check for missing administrative information only within your assigned duties.",
      "Send the issue to the authorized billing or coding owner, with relevant source references and any stated deadline.",
      "Track the next action. Do not resubmit repeatedly, alter codes, or submit an appeal unless specifically trained and authorized.",
    ],
    example:
      "The payer response says a member identifier is missing. Verify the demographic source under policy and route any correction through the billing team’s process.",
    drill:
      "Write two fictional billing handoffs: one for missing administrative information and one for a coverage denial. Use exact response wording and identify who should investigate.",
    rubric: [
      "Each handoff cites the actual response.",
      "No unsupported cause or payment promise is added.",
      "Deadline and owner are recorded when available.",
    ],
    scenario: "A claim response mentions a coding issue. What should you do?",
    answers: [
      "Choose a different code to make it pay",
      "Route the response to the authorized coding or billing team",
      "Send the claim repeatedly unchanged",
    ],
    correct: 1,
    why: "Code review belongs to qualified, authorized staff. Preserve the response and route it through the proper workflow.",
  },
  {
    title: "Close the loop on a referral",
    desc: "Track receipt, scheduling, and return information.",
    time: "30 min",
    steps: [
      "Verify the ordered referral and your administrative role. Clinical staff determine the clinical need and urgency.",
      "Check the packet against the practice’s checklist and confirm the receiving destination.",
      "Track receipt, required additional items, and appointment status in the approved system.",
      "Follow up under the practice’s timing rules and document outreach attempts accurately. Do not mark a patient unreachable after one attempt unless policy directs it.",
      "Track the expected report or status update and route it to the authorized clinical reviewer. Closing the administrative task does not mean clinical review is complete.",
    ],
    example:
      "A specialist received the referral but needs an insurance document. The task remains open with a named owner until the practice’s required outcome is documented.",
    drill:
      "Create a fictional referral timeline from order to report receipt. Add a missing-document branch and a patient who has not responded. Assign each next action.",
    rubric: [
      "Receipt and scheduling are separate statuses.",
      "Unresolved items keep an owner.",
      "Clinical review is tracked separately from receipt.",
    ],
    scenario:
      "You receive the specialist report. Can you tell the patient the result is normal?",
    answers: [
      "Yes, if the report looks reassuring",
      "No; route it to the authorized clinical reviewer",
      "Yes, after looking up the terms online",
    ],
    correct: 1,
    why: "Receiving a report is an administrative step. Interpretation and patient communication of clinical findings require authorized clinical staff.",
  },
  {
    title: "Route refill requests safely",
    desc: "Capture a complete request without recommending medication changes.",
    time: "25 min",
    steps: [
      "Verify identity using the approved process and locate the correct record.",
      "Collect the details specified in the refill checklist, such as the requested medication and pharmacy. Preserve the patient’s wording when something is unclear.",
      "Record reported concerns, remaining supply, and callback details as required. Do not determine clinical urgency yourself.",
      "Route to the designated clinical or refill team using the practice’s protocol. Urgent reports require the approved escalation process.",
      "Explain the next step and any approved response timeframe. Do not promise approval, change a dose, or send a prescription without authorization.",
    ],
    example:
      "“Training patient requests a refill and reports a different pharmacy. Identity and callback verified in the training record. Routed to the refill team; no medication advice given.”",
    drill:
      "Draft a refill call note using fictional details. Include a patient asking for a dose change and show how you preserve and route that question.",
    rubric: [
      "The medication request is accurately recorded.",
      "The patient is not promised approval.",
      "Clinical questions have a named clinical destination.",
    ],
    scenario: "A patient wants a different dose included in their refill.",
    answers: [
      "Change the requested dose in the prescription",
      "Record the request and route it for clinical review",
      "Suggest a dose based on what other patients take",
    ],
    correct: 1,
    why: "Dose changes are clinical decisions. Capture the question without independently changing medication instructions.",
  },
  {
    title: "Support the scribe workflow",
    desc: "Learn documentation structure and the limits of administrative support.",
    time: "30 min",
    steps: [
      "Confirm whether scribing is part of your role and what training, permissions, and supervision are required. Do not assume every medical VA is a scribe.",
      "Learn the practice’s note template. SOAP means subjective information, objective findings, assessment, and plan.",
      "Document only what is actually communicated or observed in the authorized workflow. Do not infer findings, diagnoses, or a treatment plan.",
      "Flag unclear dictation and leave approved placeholders rather than filling gaps.",
      "Follow the clinician review and signature process. Never sign as a clinician or silently revise a signed note.",
    ],
    example:
      "A clinician’s dictation contains an unclear medication name. Use the approved clarification process; do not choose the nearest-sounding name.",
    drill:
      "Using a fictional administrative transcript, separate patient-reported facts from provider statements. Identify missing clinical sections rather than inventing them.",
    rubric: [
      "The source of every statement is clear.",
      "Missing content is flagged rather than fabricated.",
      "Final clinical review remains with the clinician.",
    ],
    scenario:
      "The dictation does not state a physical-exam finding. Should you insert a routine normal finding?",
    answers: [
      "Yes, normal findings are safe defaults",
      "No; document only authorized source information and clarify",
      "Copy one from the previous visit",
    ],
    correct: 1,
    why: "Documentation must reflect the encounter and authorized source. An omitted finding cannot be invented.",
  },
  {
    title: "Respond to complaints professionally",
    desc: "Listen, set realistic expectations, and route the concern.",
    time: "25 min",
    steps: [
      "Verify identity when protected information will be discussed. Listen and summarize the specific concern.",
      "Acknowledge the impact without deciding fault: “I understand the repeated delay has been frustrating.”",
      "Explain the action you can take and the team that can review the issue.",
      "Use the approved complaint process and escalation rules. Do not promise compensation, guaranteed callbacks, or clinical outcomes.",
      "Document factual statements and the follow-up owner. Follow workplace policy for threats or abusive behavior instead of arguing.",
    ],
    example:
      "“You have called twice about the form. I will document those contacts and route the delay to the supervisor through our follow-up process.”",
    drill:
      "Record yourself responding to three fictional complaints: a delay, a billing concern, and a booking error. Listen for blame, jargon, and unsupported promises.",
    rubric: [
      "The concern is restated accurately.",
      "The next action is concrete and within role.",
      "The response avoids blame and invented timelines.",
    ],
    scenario:
      "A caller demands a guaranteed callback in five minutes, which you cannot arrange.",
    answers: [
      "Promise it to end the call",
      "Explain the approved escalation and response process without guaranteeing that deadline",
      "Argue that they are unreasonable",
    ],
    correct: 1,
    why: "Clear expectations protect trust. Acknowledge the concern and use the authorized escalation process.",
  },
  {
    title: "Write clear patient-facing messages",
    desc: "Use approved wording, verified facts, and one clear next step.",
    time: "25 min",
    steps: [
      "Verify the patient, destination, communication preference, and your permission to send the message.",
      "Use the approved template and only the relevant information. Avoid unnecessary health details in routine reminders.",
      "State the purpose, verified details, requested action, and approved contact method.",
      "Check dates, time zones, names, attachments, and recipients before sending.",
      "Route clinical content for appropriate review. A template does not authorize you to invent clinical instructions.",
    ],
    example:
      "“Your training appointment is [verified date/time/time zone]. Please use the joining instructions in [approved channel]. Contact [practice contact] if you need help.”",
    drill:
      "Rewrite a jargon-heavy fictional reminder in plain language. Then make a pre-send checklist and apply it to a message with an incorrect attachment.",
    rubric: [
      "The reader can identify the next action.",
      "All appointment details are verified.",
      "No unneeded protected detail or unsupported medical instruction appears.",
    ],
    scenario:
      "A reminder template is missing preparation instructions for a procedure.",
    answers: [
      "Add instructions from memory",
      "Obtain the approved instructions from the responsible team",
      "Copy instructions from another procedure",
    ],
    correct: 1,
    why: "Preparation instructions must match the correct procedure and practice protocol. Use the approved source.",
  },
  {
    title: "Recognize suspicious messages",
    desc: "Protect accounts and report possible phishing.",
    time: "20 min",
    steps: [
      "Be cautious with unexpected links, attachments, urgent payment requests, and requests for passwords or authentication codes.",
      "Verify an unusual request through a known approved contact method rather than replying to the suspicious message.",
      "Use employer-approved login routes and report suspicious content through the security process.",
      "If you clicked a link or entered a credential, report promptly and follow security-team instructions. Do not attempt a private investigation.",
      "Keep patient information in approved systems; an email claiming to be IT does not authorize exporting records.",
    ],
    example:
      "An unexpected email says your clinic account will close unless you provide a one-time code. Contact IT through the known directory instead of sending the code.",
    drill:
      "Compare two fictional messages: a routine notice and an urgent credential request. Identify warning signs and write the approved verification and reporting steps.",
    rubric: [
      "Verification uses a known contact route.",
      "Credentials and codes are not shared in the message.",
      "Possible exposure is promptly escalated.",
    ],
    source:
      '<a href="https://hhscyber.hhs.gov/knowledgeondemand.html" target="_blank" rel="noopener">HHS cybersecurity awareness training</a>',
    scenario:
      "An email asks you to send your authentication code to “IT.” What do you do?",
    answers: [
      "Send it because IT needs access",
      "Verify through a known approved IT route and report the suspicious request",
      "Send your coworker’s code instead",
    ],
    correct: 1,
    why: "Do not disclose authentication codes to an unexpected requester. Verify independently and follow your security reporting process.",
  },
  {
    title: "Use templates and AI responsibly",
    desc: "Save time while checking accuracy and protecting information.",
    time: "25 min",
    steps: [
      "Find out which tools, uses, and data handling are approved by your employer before using automation or AI.",
      "Use fictional material for personal practice. Do not paste real patient information into this hub or an unapproved tool.",
      "For an authorized tool, follow the permitted scope and information-handling rules. Tool availability alone is not authorization.",
      "Compare output to the source. Check names, dates, omissions, invented facts, and clinical interpretation.",
      "Keep required human review and final approval. Do not let automated text change a clinical decision or send a message without the appropriate review.",
    ],
    example:
      "You may practice rewriting a fictional scheduling script. A real patient chart requires employer authorization, approved systems, and the applicable data-handling safeguards.",
    drill:
      "Write a fictional message, then deliberately introduce a wrong date and an invented promise. Use a checklist to identify and remove both errors.",
    rubric: [
      "The practice uses fictional information.",
      "All output is checked against the source.",
      "Clinical interpretation and final approval stay with authorized staff.",
    ],
    scenario:
      "A public AI tool offers to summarize a real patient’s chart. Is availability enough permission?",
    answers: [
      "Yes, if it is convenient",
      "No; use only employer-authorized tools and approved data-handling procedures",
      "Yes, if you remove only the first name",
    ],
    correct: 1,
    why: "Availability is not authorization, and removing a name alone does not ensure information is de-identified. Follow employer-approved systems and procedures.",
  },
  {
    title: "Measure quality without chasing speed",
    desc: "Use a balanced review of accuracy, timeliness, and follow-through.",
    time: "25 min",
    steps: [
      "Ask your supervisor which measures matter and how they are defined. Do not invent targets for a live clinic.",
      "Review accuracy, appropriate routing, timely follow-up, patient communication, and documented outcomes alongside workload.",
      "Use approved reports and authorized access. Do not export patient-level performance data to personal tools.",
      "Look for repeated causes: missing fields, unclear ownership, unsuitable booking rules, or incomplete handoffs.",
      "Propose a small improvement and ask the owner to approve it. Measure the result and keep required controls in place.",
    ],
    example:
      "A high number of handled calls can hide incomplete notes. Review both workload and documentation quality before concluding that performance improved.",
    drill:
      "Review ten fictional call notes. Count notes with all required fields, identify two repeated omissions, and propose one checklist change. State that the exercise is a small practice sample.",
    rubric: [
      "The measures are defined before counting.",
      "Speed is considered alongside quality.",
      "Conclusions acknowledge sample size and context.",
    ],
    scenario:
      "You can handle more calls by skipping required documentation. Is that improvement?",
    answers: [
      "Yes, call count is everything",
      "No; accuracy and required follow-through must remain part of performance",
      "Yes, if nobody notices",
    ],
    correct: 1,
    why: "A faster workflow that loses required documentation can create downstream problems. Evaluate workload and quality together.",
  },
  {
    title: "Create useful procedures and handoffs",
    desc: "Turn a repeatable task into a clear, reviewable checklist.",
    time: "30 min",
    steps: [
      "Choose one task and identify its owner, trigger, required inputs, and authorized tools.",
      "Write the ordinary steps in sequence with clear action verbs. Cite the practice’s approved source.",
      "Include exceptions, escalation contacts, and what counts as done. Do not invent clinical decision rules.",
      "Have the responsible owner review and approve the procedure before others use it.",
      "Record the version and review date in the approved location. Keep outdated copies from being mistaken for current instructions.",
    ],
    example:
      "A referral checklist should explain missing documents and who handles them, not merely say “send referral.”",
    drill:
      "Write a one-page fictional procedure for appointment confirmation: purpose, inputs, steps, exception path, completion evidence, owner, and review date. Ask a practice partner to follow it without explanation.",
    rubric: [
      "A new reader can follow the ordinary steps.",
      "Exceptions have a clear authorized owner.",
      "The document distinguishes a draft from an approved procedure.",
    ],
    scenario:
      "You draft a new clinic procedure. When can you treat it as official?",
    answers: [
      "As soon as you save it",
      "After the responsible owner reviews and approves it under policy",
      "When the wording sounds professional",
    ],
    correct: 1,
    why: "A useful draft still needs authorized review. Procedures must align with the clinic’s current policies and responsibilities.",
  },
  {
    title: "Build a strong application portfolio",
    desc: "Show evidence of your practice without claiming work experience.",
    time: "35 min",
    steps: [
      "Choose four fictional samples: appointment confirmation, call note, referral tracker, and end-of-shift handoff.",
      "Label every item as a training exercise and remove real personal or patient information.",
      "Explain the task, your method, what you checked, and what you would escalate.",
      "Use honest résumé language: “Practiced administrative workflows using fictional scenarios.” Do not claim clinical credentials or paid experience you do not have.",
      "Prepare questions about training, supervision, workload, escalation, access, and success measures. Match your samples to the role’s actual duties.",
    ],
    example:
      "“Created a fictional referral tracker with status, next action, and owner; checked for missing documents and practiced safe handoffs.”",
    drill:
      "Assemble your four samples and record a two-minute explanation of one. Practice answering “What would you do when you do not know the answer?” with a concrete escalation example.",
    rubric: [
      "Samples are clearly labeled fictional training.",
      "Claims match work actually performed.",
      "You can explain both your method and your limits.",
    ],
    scenario:
      "A job posting asks for a year of clinic experience you do not have. What is honest?",
    answers: [
      "Describe this hub as a year of employment",
      "State your actual experience and show relevant training samples",
      "Claim certification from the quiz",
    ],
    correct: 1,
    why: "Strong applications are accurate. Training samples demonstrate practice but do not replace employment history or recognized credentials.",
  },
  {
    title: "Complete an advanced practice shift",
    desc: "Handle a mixed queue and review your work with a rubric.",
    time: "45 min",
    steps: [
      "Read the entire fictional queue and identify requests needing protocol-based escalation. Do not independently perform clinical triage.",
      "For each item, verify the relevant details, select the approved workflow, and name the next owner.",
      "Write patient-facing responses that explain next steps without unsupported promises.",
      "Check every note, booking, recipient, and time zone before considering the administrative action done.",
      "Create an end-of-shift handoff and explain why each unresolved item remains open.",
    ],
    example:
      "Practice queue: a canceled visit; a refill request asking for a dose change; an authorization missing a clinical note; a complaint about a bill; a suspicious credential email; and a referral awaiting its report.",
    drill:
      "Produce six fictional task notes, two patient-facing scripts, one tracker, and a handoff. Score each item from 0–2 for accurate facts, role boundaries, correct routing, clear ownership, and follow-up. A 2 means all listed requirements are present; 1 means partial; 0 means missing or unsafe. Revise every partial item. This self-review is not a hiring or certification standard.",
    rubric: [
      "Every request has a documented action and owner.",
      "No advice, disclosure, or decision exceeds the administrative role.",
      "Unresolved tasks remain visible in the handoff.",
      "A practice partner can identify the next step without guessing.",
    ],
    scenario:
      "You completed most tasks but one clinical question is still pending. What does a strong handoff do?",
    answers: [
      "Says everything is done",
      "States what remains, who owns it, and the protocol-based follow-up",
      "Answers it yourself to clear the queue",
    ],
    correct: 1,
    why: "Reliable assistants leave an accurate account of pending work. Completion counts should never hide a clinical question that needs authorized review.",
  },
].map((l) => ({
  ...l,
  body: `<h2>Your goal</h2>
<p>${l.desc} Follow your employer’s training, permissions, and policies when using these skills with live patients.</p>
<h2>A reliable workflow</h2>
<ol>${l.steps.map((s) => `<li>${s}</li>`).join("")}</ol>
<h2>Worked example</h2>
<p>${l.example}</p>
<h2>Independent practice</h2>
<p>${l.drill}</p>
<h2>Review your work</h2>
<ul>${l.rubric.map((r) => `<li>${r}</li>`).join("")}</ul>
<p>Before marking this lesson complete, do the independent practice and check each criterion. Keep practice files on your device using fictional information only.</p>${l.source ? `<p>${l.source}</p>` : ""}`,
}));
