const additionalLessons = [
  {
    title: "Set up your remote workday",
    desc: "Prepare your workspace, tools, and shift checklist.",
    time: "20 min",
    body: `<h2>Your goal</h2>
<p>Start a shift with a private workspace and a clear plan. Your employer decides which equipment, accounts, and security settings you must use.</p>
<h2>Before your first shift</h2>
<ol>
<li>Confirm your working hours in both your own and the practice’s time zone.</li>
<li>Test the approved headset, phone system, internet connection, and backup contact method.</li>
<li>Sign in with your own authorized account. Never borrow a coworker’s login.</li>
<li>Keep screens and conversations away from visitors. Lock the screen when you step away.</li>
<li>Locate your supervisor, IT contact, urgent-call procedure, and downtime instructions.</li>
</ol>
<h2>Your opening checklist</h2>
<p>Review handoff notes, scheduled visits, assigned inboxes, and time-sensitive tasks. Ask which queue has priority instead of deciding urgency yourself.</p>
<h2>If a system stops working</h2>
<p>Notify the designated contact and use the approved downtime procedure. Do not move patient details into a personal spreadsheet, email, or messaging app.</p>
<h2>Practice aloud</h2>
<p>“The scheduling system is unavailable. I have notified our support contact and will follow the downtime process. My outstanding tasks are assigned for follow-up.”</p>`,
    scenario:
      "Your approved account is locked and a coworker offers their password.",
    answers: [
      "Use their login until yours works",
      "Contact the approved support team and follow downtime instructions",
      "Create a personal account for patient records",
    ],
    correct: 1,
    why: "Individual accounts support authorized access and accountability. Get approved support rather than sharing credentials.",
  },
  {
    title: "Collect patient intake details",
    desc: "Check forms and demographics without guessing.",
    time: "25 min",
    body: `<h2>Your goal</h2>
<p>Help a patient complete the administrative information the practice needs before a visit. Clinical review belongs to authorized clinical staff.</p>
<h2>An intake sequence</h2>
<ol>
<li>Verify identity using the practice’s approved process.</li>
<li>Check contact details, preferred communication method, and required forms.</li>
<li>Explain what is missing in plain language and provide the approved way to submit it.</li>
<li>Capture the patient’s wording accurately. If information conflicts, flag it for review rather than choosing a version.</li>
<li>Route medication, allergy, symptom, or consent questions to the appropriate trained staff.</li>
</ol>
<h2>Fictional example</h2>
<p>Training patient Jordan Sample has a new phone number and an unsigned intake form. Verify identity, update the contact detail if authorized, and explain the approved form process. Do not sign for the patient.</p>
<h2>Practice task</h2>
<p>Write a checklist with three columns: information needed, approved next action, and responsible team. Use invented details only.</p>`,
    scenario:
      "A patient says the medication list is wrong. What is your next step?",
    answers: [
      "Decide which medication to remove",
      "Ignore the comment",
      "Record the reported discrepancy and route it for clinical review",
    ],
    correct: 2,
    why: "Record the concern accurately. Medication reconciliation requires the practice’s authorized clinical process.",
  },
  {
    title: "Help patients join a video visit",
    desc: "Give clear joining instructions and handle technical trouble.",
    time: "20 min",
    body: `<h2>Your goal</h2>
<p>Help patients understand how to connect to an approved video visit. Follow the practice’s rules for eligibility, consent, and backup arrangements.</p>
<h2>Before the appointment</h2>
<ul>
<li>Confirm the date, time zone, and approved joining method.</li>
<li>Provide the practice’s device, camera, microphone, and connection-check instructions.</li>
<li>Encourage a private location and ask about technology or communication support needs.</li>
<li>Explain who to contact if the link fails. Never ask for the patient’s password.</li>
</ul>
<h2>A simple script</h2>
<p>“Please open the joining instructions from our approved channel. You can test your camera and microphone using the instructions provided. If the connection fails, contact [approved support contact].”</p>
<h2>When something fails</h2>
<p>Check nonclinical basics from the approved troubleshooting guide. Notify the care team if the visit is delayed. Do not switch to a personal video account or promise a phone visit unless the team authorizes it.</p>
<p>
<a href="https://telehealth.hhs.gov/providers/preparing-patients-for-telehealth/helping-patients-prepare-for-their-appointment" target="_blank" rel="noopener">Read HHS guidance on preparing for telehealth</a>
</p>`,
    scenario:
      "The approved video platform fails. Should you send your personal video meeting link?",
    answers: [
      "Yes, any video platform is fine",
      "No; use the approved backup process and notify the team",
      "Ask the patient to share their login",
    ],
    correct: 1,
    why: "Keep the visit within the practice’s approved systems and backup process. The clinical team decides whether and how the visit can continue.",
  },
  {
    title: "Organize an inbox and task queue",
    desc: "Assign an owner, track next steps, and close the loop.",
    time: "25 min",
    body: `<h2>Your goal</h2>
<p>Keep requests from getting lost. A task is not complete just because you forwarded it.</p>
<h2>A five-step task workflow</h2>
<ol>
<li>Read the request and verify the relevant patient record.</li>
<li>Use the practice’s routing rules to identify the responsible team. Escalate reported urgency under protocol.</li>
<li>Document the requested action, owner, status, and policy-based follow-up time.</li>
<li>Check that a handoff was received when required.</li>
<li>Close the task only after the required action is documented.</li>
</ol>
<h2>Useful statuses</h2>
<p>New → assigned → waiting for information → ready for action → resolved. Use the labels in your employer’s system.</p>
<h2>Fictional example</h2>
<p>“Training referral: specialist office confirms receipt; appointment not yet scheduled. Owner: referral coordinator. Next action: follow up on the practice’s timeline.”</p>
<h2>End-of-shift handoff</h2>
<p>List unresolved requests, what you did, what remains, and who owns the next step. Use approved channels; do not export live queues to personal tools.</p>`,
    scenario:
      "You forwarded a request but no one has confirmed the required action. Which status fits?",
    answers: [
      "Resolved",
      "Delete it",
      "Awaiting action or acknowledgment, according to practice policy",
    ],
    correct: 2,
    why: "A forwarded request may still need follow-up. Keep a clear owner and track the required outcome.",
  },
  {
    title: "Route requests for medical records",
    desc: "Recognize a records request and send it to the right team.",
    time: "25 min",
    body: `<h2>Your goal</h2>
<p>Recognize a records request and help the authorized records team process it. In covered U.S. settings, patients generally have a right to access information in their designated record set, with limited exceptions.</p>
<h2>What to capture</h2>
<ul>
<li>Who is requesting access and the approved identity verification information.</li>
<li>What records are requested and the relevant date range.</li>
<li>The requested delivery method and contact details.</li>
<li>Date received, assigned owner, and follow-up status.</li>
</ul>
<h2>Important distinctions</h2>
<p>A patient’s own access request is different from a third party’s request. Do not assume every request requires the same authorization form. Route questions about representatives, release permissions, timing, fees, or exceptions to the records or privacy team.</p>
<p>Follow reasonable verification procedures without creating extra barriers. Do not independently deny requests or release records outside your permissions.</p>
<h2>Practice task</h2>
<p>Write a fictional handoff: “Training patient requests visit records for a specified date range through the approved channel. Request received today and assigned to the records team for processing.”</p>
<p>
<a href="https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/access/index.html" target="_blank" rel="noopener">Read HHS patient access guidance</a>
</p>`,
    scenario:
      "A patient asks for a copy of their visit record. What is appropriate for a beginner VA?",
    answers: [
      "Automatically refuse unless a lawyer contacts you",
      "Capture and route the request through the approved access process",
      "Send the entire chart to any email address provided",
    ],
    correct: 1,
    why: "Use the approved patient-access process and authorized records team. Do not invent requirements, deny access yourself, or send unverified disclosures.",
  },
  {
    title: "Communicate clearly and accessibly",
    desc: "Use plain language and arrange approved support.",
    time: "20 min",
    body: `<h2>Your goal</h2>
<p>Make administrative instructions easier to understand without making assumptions about a patient’s abilities or language.</p>
<h2>Four habits to practice</h2>
<ul>
<li>Use short sentences and explain unfamiliar administrative words.</li>
<li>Give one step at a time, then ask what needs clarification.</li>
<li>Ask the patient about communication preferences and support needs.</li>
<li>Use the practice’s approved interpreter and accessibility services. Do not improvise medical interpretation.</li>
</ul>
<h2>Instead of jargon</h2>
<p>Instead of “Complete the preregistration workflow,” say “Please complete the form before your appointment. Here is the approved way to send it.”</p>
<h2>Check understanding respectfully</h2>
<p>“To make sure I explained it clearly, could you tell me how you will join the visit?” This checks your explanation, not the patient’s intelligence.</p>
<h2>When someone needs an interpreter</h2>
<p>Arrange qualified support under policy. Do not default to a child or untrained relative for clinical interpretation. Let the authorized team handle consent and clinical communication.</p>
<p>
<a href="https://www.hhs.gov/civil-rights/for-individuals/disability/guidance-on-nondiscrimination-in-telehealth/index.html" target="_blank" rel="noopener">Read HHS telehealth accessibility guidance</a>
</p>`,
    scenario:
      "A patient has trouble understanding your video-visit instructions.",
    answers: [
      "Repeat the same words louder",
      "Ask what support would help, explain one step at a time, and arrange approved assistance",
      "Cancel the appointment without asking",
    ],
    correct: 1,
    why: "Plain language and approved communication support help patients participate. Avoid assumptions and follow the practice’s accessibility process.",
  },
  {
    title: "Check your work and handle mistakes",
    desc: "Catch errors early and report them without hiding them.",
    time: "20 min",
    body: `<h2>Your goal</h2>
<p>Build a repeatable accuracy check and respond honestly when something goes wrong.</p>
<h2>A 30-second review</h2>
<ul>
<li>Correct patient and approved identifiers?</li>
<li>Correct date, time zone, provider, and visit format?</li>
<li>Correct recipient and approved communication channel?</li>
<li>Clear next action, owner, and follow-up plan?</li>
</ul>
<h2>If you made a scheduling error</h2>
<p>Tell the designated supervisor, follow the authorized correction process, and document the correction. Contact the patient through the approved process when instructed.</p>
<h2>If you sent information to the wrong person</h2>
<p>Report immediately using the privacy-incident procedure. Preserve required details and follow containment instructions. Do not decide by yourself whether it is a reportable breach.</p>
<h2>Practice task</h2>
<p>Review this fictional note: “Appointment Wednesday at 9.” List the missing details: date, time zone, provider, visit format, and confirmation status. Add only information that is verified.</p>`,
    scenario: "You discover a message may have gone to the wrong recipient.",
    answers: [
      "Report promptly using the privacy-incident process",
      "Delete it and say nothing",
      "Ask a friend whether it is serious",
    ],
    correct: 0,
    why: "Prompt reporting lets the authorized team assess and respond. Do not conceal the event or share details outside approved channels.",
  },
  {
    title: "Practice a complete workday",
    desc: "Bring scheduling, messaging, and handoffs together.",
    time: "35 min",
    body: `<h2>Your goal</h2>
<p>Complete a fictional shift using the skills you have learned. This is an administrative simulation, not a clinical assessment.</p>
<h2>Your practice queue</h2>
<ol>
<li>
<b>Booking:</b> Training patient Casey Sample needs an approved routine follow-up. Draft a read-back with the date, time zone, provider, and format.</li>
<li>
<b>Clinical question:</b> Training patient Robin Example asks about a medication. Write a message preserving the request and routing it to authorized clinical staff.</li>
<li>
<b>Referral:</b> A fictional specialist office confirms receipt but has not scheduled a visit. Set an owner and follow-up action.</li>
<li>
<b>Records:</b> A training patient wants a copy of a visit record. Capture the request and route it to the authorized records team.</li>
<li>
<b>Handoff:</b> Summarize unfinished tasks for the next shift using fictional information only.</li>
</ol>
<h2>Review your output</h2>
<p>For each task, ask: Did I verify the details? Stay within my role? Use the approved channel? Record the next step and owner? Avoid promises I cannot control?</p>
<h2>Example handoff</h2>
<p>“Training shift: routine booking confirmed; medication question routed to clinical staff; referral awaiting scheduling with coordinator assigned; access request sent to records team. Outstanding items remain open with follow-up according to policy.”</p>
<h2>Your next step</h2>
<p>Repeat any lesson where you hesitated. Ask a future supervisor for observed practice in the actual systems before working independently.</p>`,
    scenario:
      "At shift end, a medication question is still awaiting the clinical team. What should your handoff say?",
    answers: [
      "All tasks complete",
      "The question remains open, with the designated clinical owner and follow-up under protocol",
      "Your own suggested medication change",
    ],
    correct: 1,
    why: "An accurate handoff identifies unresolved work, the responsible team, and the next step. It does not provide medical advice.",
  },
];
