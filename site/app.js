const lessons = [
  {
    title: "Understand the medical VA role",
    desc: "Your responsibilities, your boundaries, and a typical day.",
    time: "15 min",
    body: `<p>A medical virtual assistant supports a healthcare practice remotely with administrative work. Your exact duties depend on your employer, training, permissions, and local rules.</p>
<h2>What you may help with</h2>
<ul>
<li>Answer calls, schedule appointments, and confirm approved visit instructions.</li>
<li>Update contact details and route patient messages to the right team.</li>
<li>Track referrals, request missing paperwork, and check insurance information using approved procedures.</li>
</ul>
<h2>Where your role stops</h2>
<p>Do not diagnose, interpret test results, recommend treatments, or change medication instructions. Route clinical questions to authorized clinical staff. Never guess to sound helpful.</p>
<h2>A typical shift</h2>
<p>Check your assigned inbox → review the schedule → handle calls → document each action → follow up on outstanding tasks → hand off unresolved items.</p>`,
    scenario:
      "A patient asks whether they should double their medication because they missed a dose. What do you do?",
    answers: [
      "Give your best guess",
      "Route the question to authorized clinical staff using the practice protocol",
      "Tell them to stop the medication",
    ],
    correct: 1,
    why: "Medication decisions belong to authorized clinicians. Record the request accurately and follow the practice’s escalation procedure.",
  },
  {
    title: "Protect patient information",
    desc: "Privacy habits for your workspace, messages, and records.",
    time: "20 min",
    body: `<p>HIPAA is a U.S. law with rules protecting health information in covered healthcare settings. Protected health information (PHI) includes identifiable health information, such as a name connected to a medical appointment.</p>
<h2>Build safe habits</h2>
<ul>
<li>Use only employer-approved accounts, devices, and communication channels. Enable required security controls and lock your screen when away.</li>
<li>Access only records you are authorized to use for your work. Follow role-based access and the practice’s minimum-necessary policies; the legal standard has exceptions, including certain treatment disclosures.</li>
<li>Verify identity and authorization using practice policy before disclosing information. A relative is not automatically authorized.</li>
<li>Keep calls private. Do not photograph records or copy patient details to personal email, public AI tools, or this training hub.</li>
<li>Report a wrong-recipient message or suspicious access promptly through the employer’s incident process. Do not conceal it or try to investigate alone.</li>
</ul>
<p>Your employer must provide training specific to its systems and policies.</p>`,
    scenario:
      "Someone claiming to be a patient’s spouse asks you for their test results.",
    answers: [
      "Share them because they are family",
      "Verify identity and authorization under policy, then route the request appropriately",
      "Send a screenshot to their personal email",
    ],
    correct: 1,
    why: "A family relationship alone does not establish authorization. Follow verification and disclosure policy, and leave interpretation to clinical staff.",
  },
  {
    title: "Learn the everyday vocabulary",
    desc: "Understand common terms without needing a medical degree.",
    time: "20 min",
    body: `<h2>Your starter glossary</h2>
<ul>
<li>
<b>Provider:</b> a healthcare professional delivering care.</li>
<li>
<b>PCP:</b> primary care provider, often the first contact for routine care.</li>
<li>
<b>EHR:</b> electronic health record, software for documenting and managing patient information.</li>
<li>
<b>Referral:</b> a request directing a patient to another service or specialist.</li>
<li>
<b>Prior authorization:</b> approval a health plan may require before certain services or medications; it does not guarantee payment.</li>
<li>
<b>Copay:</b> a fixed amount a plan may require for a covered service.</li>
<li>
<b>Deductible:</b> an amount a member may pay before the plan pays for certain covered services.</li>
<li>
<b>Encounter:</b> a healthcare visit or interaction.</li>
</ul>
<h2>When a term is unfamiliar</h2>
<p>Check an approved reference or ask your supervisor. Do not infer a diagnosis from an abbreviation. Repeat spelling and details when accuracy matters.</p>`,
    scenario: "You see an unfamiliar abbreviation in a patient message.",
    answers: [
      "Expand it using a guess",
      "Delete it",
      "Keep the original wording and clarify through an approved source",
    ],
    correct: 2,
    why: "Preserve the original information and clarify. Abbreviations can have different meanings in different contexts.",
  },
  {
    title: "Schedule an appointment",
    desc: "Collect the right details and avoid common booking mistakes.",
    time: "25 min",
    body: `<h2>A reliable scheduling sequence</h2>
<ol>
<li>Verify the patient using the practice’s approved identifiers.</li>
<li>Ask the reason for the visit in the patient’s words. Use the approved visit-type rules; clinical triage goes to trained staff.</li>
<li>Check the correct provider, location or video format, duration, and permitted availability.</li>
<li>Confirm date, time, and time zone, especially for remote visits.</li>
<li>Read back the booking and share only approved preparation and cancellation instructions.</li>
<li>Document the appointment and any next steps in the approved system.</li>
</ol>
<h2>Practice a read-back</h2>
<p>“To confirm, your follow-up is Tuesday, November 10, at 10:00 a.m. Hawaii time, by video, with your assigned provider. We will send the approved joining instructions through the patient portal.”</p>
<p>If a caller reports urgent symptoms, follow the practice’s urgent-call procedure immediately. Do not put them into a routine slot or make a clinical assessment yourself.</p>`,
    scenario:
      "A patient in another state accepts a video appointment at “9 a.m.” What must you clarify?",
    answers: [
      "The time zone and appointment details",
      "Only their preferred nickname",
      "Nothing else",
    ],
    correct: 0,
    why: "Confirm the date, time zone, provider, and visit format before finalizing. Use the practice’s policies for cross-state telehealth eligibility.",
  },
  {
    title: "Handle calls and messages",
    desc: "A calm phone script and clear, useful handoffs.",
    time: "25 min",
    body: `<h2>A simple call structure</h2>
<p>“Thank you for calling [practice]. My name is [name]. How can I help you?” Verify identity before discussing protected details. Listen without interrupting, summarize the request, and explain the next step.</p>
<h2>Take a complete message</h2>
<ul>
<li>Verified patient identity and approved callback number.</li>
<li>Call date and time; the patient’s request in their own words.</li>
<li>Actions taken, intended recipient, and follow-up owner.</li>
<li>Any urgency reported by the caller, routed using the practice’s protocol.</li>
</ul>
<h2>When the caller is upset</h2>
<p>“I understand this is frustrating. Let me confirm what happened and see which team can help.” Avoid blame and promises you cannot keep.</p>
<h2>Fictional handoff example</h2>
<p>“Training patient Alex Sample called at 10:15 a.m. requesting a callback about a refill. No medication advice provided. Routed to the designated clinical inbox under the refill protocol. Callback number verified in the training record.”</p>`,
    scenario:
      "A caller is angry about a delayed response. Which reply is best?",
    answers: [
      "“Calm down.”",
      "“I understand the delay is frustrating. I’ll check the approved follow-up process.”",
      "“The doctor will definitely call in five minutes.”",
    ],
    correct: 1,
    why: "Acknowledge the concern and take a concrete next step. Do not invent a response deadline.",
  },
  {
    title: "Work with records and referrals",
    desc: "Accuracy, documentation, and tracking an unfinished task.",
    time: "25 min",
    body: `<p>An EHR helps authorized staff document, store, retrieve, and share patient information. Each system works differently; learn in an employer-provided training environment before touching live records.</p>
<h2>Before updating a record</h2>
<ul>
<li>Confirm you have the correct patient and permission to perform the action.</li>
<li>Check the original source. Enter facts accurately and avoid adding interpretations.</li>
<li>Use approved corrections or amendments rather than silently overwriting a signed note.</li>
<li>Record what you did, when, and who needs to act next.</li>
</ul>
<h2>A referral tracking workflow</h2>
<p>Received → check required documents → route missing items to the responsible team → send through approved channels → confirm receipt → track status → follow up under policy.</p>
<h2>Practice</h2>
<p>A fictional referral packet is missing a required report. Draft a task note: “Referral pending: required report missing. Requested from the authorized team via the approved channel. Follow-up owner: referral coordinator; follow-up date per policy.”</p>`,
    scenario: "You notice two similar patient names while entering a task.",
    answers: [
      "Choose the first result",
      "Verify the approved identifiers before proceeding",
      "Combine the records",
    ],
    correct: 1,
    why: "Similar names are a reason to pause. Verify identifiers before opening or updating a record; never merge records without authorization.",
  },
  {
    title: "Understand insurance workflows",
    desc: "Eligibility, benefits, and questions to pass to billing.",
    time: "25 min",
    body: `<h2>Start with the distinctions</h2>
<p>
<b>Eligibility</b> checks whether coverage is active for a date. <b>Benefits</b> describe plan coverage and patient cost sharing. <b>Prior authorization</b> is approval required by some plans for specific services. None alone guarantees payment.</p>
<h2>Administrative checklist</h2>
<ol>
<li>Verify patient and insurance details in the approved system.</li>
<li>Use the insurer’s authorized portal or phone process.</li>
<li>Confirm the date of service, network information, and relevant requirements using the practice checklist.</li>
<li>Document the source, date, reference number, and unresolved questions.</li>
<li>Route uncertain coverage, coding, and cost estimates to the authorized billing team.</li>
</ol>
<h2>A clear patient response</h2>
<p>“We can check the information available from your plan. Final payment and your cost depend on your plan and the claim. I’ll route your cost question to our billing team.”</p>`,
    scenario:
      "An eligibility portal shows active coverage. Can you promise the visit will be fully paid?",
    answers: [
      "Yes, active means fully covered",
      "No; verify the relevant requirements and refer cost questions to billing",
      "Yes, if it is a follow-up",
    ],
    correct: 1,
    why: "Active coverage does not establish payment for a specific service. Benefits, network rules, authorization, and claim processing may affect payment.",
  },
  {
    title: "Prepare for your first role",
    desc: "Turn practice into honest examples for an application.",
    time: "30 min",
    body: `<h2>Build a small practice portfolio</h2>
<ul>
<li>A fictional appointment read-back with date, time zone, and format.</li>
<li>A fictional call note with a clear handoff and next action.</li>
<li>A referral tracker template with status, owner, and follow-up date.</li>
<li>A short privacy checklist for your home workspace.</li>
</ul>
<p>Label every sample “Training exercise — fictional information.” Do not use real patient data or claim practice work as employment.</p>
<h2>Practice interview answers</h2>
<p>
<b>“You have no experience. Why hire you?”</b> “I’m new to healthcare administration. I’ve practiced scheduling, call documentation, and referral workflows with fictional scenarios. I verify details, follow procedures, and ask for clarification instead of guessing.”</p>
<p>
<b>“What if a patient asks for medical advice?”</b> “I document their question and follow the practice’s protocol to reach authorized clinical staff.”</p>
<h2>Before accepting a role</h2>
<p>Clarify duties, hours and time zones, supervision, training, approved equipment, and secure access. Ask how urgent calls, privacy incidents, and unfamiliar tasks are escalated. Job readiness depends on supervised practice and employer requirements; finishing these lessons does not qualify you for clinical duties.</p>`,
    scenario: "How should you describe your sample call notes on a résumé?",
    answers: [
      "As paid clinic experience",
      "As fictional training exercises demonstrating administrative practice",
      "As a HIPAA certification",
    ],
    correct: 1,
    why: "Present your work honestly. This hub does not issue a recognized certification or substitute for employer training.",
  },
];
