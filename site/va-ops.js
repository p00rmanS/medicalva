// Medical VA Foundations additions, batch 3: schedule management, front desk workflows, language access.
addCodingLessons([
  {
    title: "Schedule templates, reminders, and no-shows",
    desc: "Understand how provider templates work, build a reminder routine, and measure and reduce no-shows without compromising privacy.",
    time: "40 min",
    objectives: [
      "Explain how provider schedule templates control appointment types and lengths.",
      "Design a reminder routine that protects privacy.",
      "Calculate and discuss a no-show rate with a clear definition.",
    ],
    concept: `<p>A <b>schedule template</b> defines when each provider is available and what kind of appointments fit in each block: new patient, follow-up, procedure, telehealth, or same-day slots. Templates exist so that the day is realistic. A 15-minute slot cannot hold a 45-minute new-patient visit. Changing a template or overbooking a block is a decision for the practice manager or provider, not for the VA.</p>
<p><b>Reminders</b> reduce no-shows. A common routine is a message a week before, another two days before, and a short reminder on the day, with an easy way to confirm, cancel, or reschedule. Use the practice's approved system. Keep reminder content to the minimum: practice name, date, time, and how to respond, without diagnosis or reason for the visit. Text messages generally require the patient's consent under telemarketing and consumer protection rules, so use only the contact preferences on file.</p>
<p>A <b>no-show</b> is a patient who neither attends nor cancels in time. A common calculation is no-shows divided by scheduled appointments, but practices define it differently (for example, excluding appointments canceled with notice). Always state the definition when you report the number. Track patterns by day, time, provider, and appointment type and share them with the practice. Reduce no-shows with confirmation calls for high-risk visits, offering flexible times, a waitlist to fill canceled slots, and a clear, fairly applied policy that patients are told about in advance. Any fee or discharge decision belongs to the practice.</p>`,
    terms: [
      [
        "Template",
        "The structure of a provider's schedule: blocks, types, and lengths.",
      ],
      ["No-show", "A patient who does not attend and did not cancel in time."],
      [
        "Late cancellation",
        "A cancellation inside the practice's required notice window.",
      ],
      [
        "Overbooking",
        "Scheduling more patients than slots, only under a practice policy.",
      ],
      ["Confirmation", "A patient's reply that they will attend."],
    ],
    steps: [
      "Check the provider's template for the right appointment type and length before booking.",
      "Confirm the patient's contact preferences and consent.",
      "Send reminders on the approved schedule with minimal information.",
      "Record confirmations, cancellations, and no-shows consistently with the system's reason codes.",
      "Offer canceled slots to the waitlist according to policy.",
      "Report no-show rates with a stated definition and the patterns you see.",
    ],
    lab: [
      [
        "400 appointments were scheduled in a month. 36 patients did not show. 24 canceled with notice. What is the no-show rate by each definition?",
        "Definition A (no-shows ÷ scheduled): 36 ÷ 400 = 9%. Definition B (excluding cancellations with notice): 36 ÷ (400 − 24) = 36 ÷ 376 ≈ 9.6%. Always state the definition.",
      ],
      [
        "A reminder text says, ‘Reminder: your appointment with Dr. Reyes for your diabetes follow-up is tomorrow at 2 p.m.’",
        "It includes a clinical reason. Remove it: ‘Reminder: you have an appointment at [practice] tomorrow at 2 p.m. Reply C to confirm.’",
      ],
    ],
    case: "A provider asks you to put three new-patient visits into 15-minute slots to fill the day.",
    model:
      "Explain politely that the template sets appointment lengths and that you cannot change it. Offer to send the request to the practice manager and suggest options within the template, such as placing the visits in longer blocks or on another day. Document the request.",
    mistakes: [
      "Overbooking without a policy.",
      "Putting the diagnosis in a reminder.",
      "Reporting a rate without defining it.",
    ],
    drills: [
      "Design a three-step reminder routine with sample messages.",
      "Calculate no-show rates under two definitions for three fictional months.",
      "Write a polite message to explain a template limit to a provider.",
    ],
    rubric: [
      "Templates are respected.",
      "Reminders reveal minimal information.",
      "Definitions are stated.",
      "Policy decisions are routed to the right person.",
    ],
    scenario:
      "A reminder message includes the reason for the visit. What is the issue?",
    answers: [
      "No issue",
      "It reveals more information than necessary",
      "It is too short",
    ],
    correct: 1,
    why: "Reminders should use the minimum necessary information, without the diagnosis or reason for the visit.",
    taglish:
      "Ang schedule template ang nagtatakda ng oras at uri ng appointment ng provider, kaya huwag baguhin o mag-overbook nang walang policy. Sa reminders, minimum lang ang impormasyon: pangalan ng practice, petsa, oras, at paano mag-confirm. Walang diagnosis. Ang no-show rate ay dapat may malinaw na definition: no-shows ÷ scheduled, o hindi kasama ang cancellations na may abiso.",
    tip: "Add a ‘reply to confirm or cancel’ option. A cancellation you hear about early can still be offered to the waitlist.",
    mentor:
      "Rewrite three clinical reminder messages into privacy-safe versions.",
    remember: [
      "Respect provider templates. Overbooking is a practice decision.",
      "Reminders include only the minimum necessary information.",
      "State the no-show definition when you report the rate.",
    ],
  },
  {
    title: "Front desk workflows: check-in and check-out",
    desc: "Support registration, forms, copays, and check-out tasks, and learn the privacy habits that protect patients in the waiting room.",
    time: "40 min",
    objectives: [
      "List the steps of a standard check-in and check-out.",
      "Explain the notice of privacy practices acknowledgment and consents.",
      "Handle copays, receipts, and next-step scheduling accurately.",
    ],
    concept: `<p>Even when you work remotely, you often prepare or support the front desk workflow. A typical <b>check-in</b>: verify identity with two identifiers, scan or review the photo ID and insurance card, confirm demographics and contact information, collect or confirm forms (consents, history, financial policy), obtain the patient's acknowledgment of the Notice of Privacy Practices (the practice must make a good faith effort to get a written acknowledgment at the first service), and collect the copay if due.</p>
<p>A typical <b>check-out</b>: confirm the visit details are finished, schedule the next visit or referral appointments, give any approved follow-up instructions as written by the clinical team, collect balances or payments, and provide a receipt. Post payments to the correct account and encounter. Cash handling needs a log and reconciliation by an authorized person.</p>
<p>Protect privacy in shared spaces: keep sign-in sheets minimal, do not ask patients to say their reason for visiting out loud at the counter, lower your voice, position screens away from the waiting area, and use a private area for sensitive conversations. For virtual check-in, send forms through the approved portal and verify that the right person is completing them.</p>`,
    terms: [
      [
        "Notice of Privacy Practices",
        "The document describing how PHI is used and disclosed and patients' rights.",
      ],
      [
        "Acknowledgment",
        "The patient's written confirmation that they received the notice.",
      ],
      ["Copay", "A fixed amount due at the time of service."],
      ["Encounter", "The patient visit that charges and payments attach to."],
      ["Demographics", "Name, birth date, address, phone, and email."],
    ],
    steps: [
      "Verify identity using two identifiers.",
      "Review or scan the ID and the insurance card.",
      "Update demographics and confirm contact preferences.",
      "Complete required forms and the privacy notice acknowledgment.",
      "Collect the copay and issue a receipt.",
      "At check-out, schedule next steps, give approved instructions, and post payments to the right encounter.",
    ],
    lab: [
      [
        "A patient has a new insurance card with a different plan.",
        "Scan the card, verify eligibility with the new plan, update the registration, and check whether authorization or referral requirements changed. Note the change on the account.",
      ],
      [
        "A patient says, ‘I don't want to say why I'm here out loud.’",
        "Offer a private place to complete the check-in and use a form rather than asking them to say the reason at the counter.",
      ],
      [
        "The copay was $30 but the patient pays with a $50 bill.",
        "Collect $30 only if the policy does not allow change, or give the correct change if it does. Record exactly what was paid and issue a receipt.",
      ],
    ],
    case: "A patient leaves without paying a $30 copay and says they will pay next time.",
    model:
      "Follow the practice's policy for unpaid copays. Do not argue or demand. Note the balance on the account, tell the patient politely about the policy, and make sure the balance is added to the next appointment's reminder if the policy says so.",
    mistakes: [
      "Skipping identity verification at check-in.",
      "Failing to update a changed insurance card.",
      "Discussing sensitive details at the counter.",
    ],
    drills: [
      "Create a one-page check-in checklist and a check-out checklist.",
      "Role-play a check-in with a patient who has new insurance.",
      "List five waiting room privacy practices.",
    ],
    rubric: [
      "Identity is verified.",
      "Insurance changes are caught.",
      "Payments are recorded accurately.",
      "Privacy practices are specific.",
    ],
    scenario:
      "A patient arrives with a new insurance card. What should be done first?",
    answers: [
      "Ignore it and use the old card",
      "Scan it, verify eligibility with the new plan, and update the record",
      "Ask the patient to call the insurer",
    ],
    correct: 1,
    why: "Registration must reflect current coverage, and eligibility should be verified before the visit continues.",
    taglish:
      "Sa check-in, i-verify ang identity gamit ang dalawang identifiers, tingnan ang ID at insurance card, i-update ang demographics, at kunin ang forms at acknowledgment ng Notice of Privacy Practices. Sa check-out, i-schedule ang susunod na hakbang, magbigay ng aprubadong instructions, at i-post nang tama ang bayad. Mag-ingat sa privacy sa lobby: huwag hayaang sabihin nang malakas ang dahilan ng pagbisita.",
    tip: "Ask ‘Has your insurance or phone number changed?’ at every check-in. It catches a surprising number of problems before they become denials.",
    mentor:
      "Role-play a check-in using only two identifiers and the privacy script.",
    remember: [
      "Verify identity, coverage, and demographics at every visit.",
      "Get the Notice of Privacy Practices acknowledgment at the first service.",
      "Keep waiting room conversations and screens private.",
    ],
  },
  {
    title: "Language access and communication support",
    desc: "Provide meaningful access for patients with limited English proficiency, hearing loss, or other communication needs, using qualified support.",
    time: "35 min",
    objectives: [
      "Describe the duty to provide language assistance.",
      "Use qualified interpreters and avoid relying on family members.",
      "Document language and accessibility needs.",
    ],
    concept: `<p>Patients with limited English proficiency (LEP) have the right to meaningful access to care. Federal civil rights rules, including Section 1557 of the Affordable Care Act for covered health programs, require language assistance services at no cost to the patient and qualified interpreters, not just any bilingual person. Patients who are deaf or hard of hearing, blind or have low vision, or have other communication needs are covered by disability laws such as the Americans with Disabilities Act.</p>
<p>Use qualified interpreters, by phone, video, or in person, according to the practice's contract. A qualified interpreter is trained, fluent in both languages, and understands medical terms and confidentiality. Do not ask a patient to bring a family member or friend to interpret, and do not use minor children, except in a real emergency or when the patient insists after being told about free interpreter services, and then document it. Bilingual staff should interpret only if the practice has assessed them as qualified. If you speak a patient's language and the practice approves it for your role, you can greet and schedule in that language but route clinical conversations through an approved interpreter.</p>
<p>Record the patient's preferred language and any need for an interpreter in the registration so it appears every time. Use plain language, short sentences, and translated forms and instructions that the practice has approved. Offer sign language interpreters, captioned video, large print, or other aids when needed.</p>`,
    terms: [
      ["LEP", "Limited English proficiency."],
      [
        "Qualified interpreter",
        "A trained, proficient interpreter who follows confidentiality and accuracy standards.",
      ],
      ["Preferred language", "The language the patient wants to use for care."],
      [
        "Auxiliary aids",
        "Services that ensure effective communication, such as captioning or sign language.",
      ],
      [
        "Section 1557",
        "Federal nondiscrimination rule for certain health programs and activities.",
      ],
    ],
    steps: [
      "Ask the patient's preferred language and any communication needs, and record them.",
      "Connect a qualified interpreter or arrange auxiliary aids for the visit and for phone calls.",
      "Do not ask family members or minors to interpret.",
      "Use approved translated materials and plain language.",
      "Document that an interpreter was used and who provided the service.",
      "Report problems or gaps to the practice manager.",
    ],
    lab: [
      [
        "A patient with limited English arrives with a teenage child who offers to interpret.",
        "Politely explain that the practice provides a free qualified interpreter and connect one. Do not rely on the child. Document the offer and the interpreter used.",
      ],
      [
        "A caller speaks only Spanish and the practice has a phone interpreter service.",
        "Greet the caller, say ‘One moment, I am connecting an interpreter,’ and use the service. Document the language and the interpreter ID.",
      ],
      [
        "A patient who is deaf asks for a sign language interpreter for a visit.",
        "Arrange a qualified sign language interpreter or other effective communication aid for the appointment time and confirm the details with the patient.",
      ],
    ],
    case: "A staff member who speaks some Spanish offers to ‘just translate’ a medication discussion.",
    model:
      "Thank them but explain that medical interpreting needs a qualified interpreter. Use the approved interpreter service. The staff member may help with greetings and scheduling if the practice allows it. Escalate the training gap to the practice manager.",
    mistakes: [
      "Relying on family members or minors.",
      "Not recording language preferences.",
      "Assuming bilingual staff are qualified.",
    ],
    drills: [
      "Write a script for connecting an interpreter by phone.",
      "Draft a registration question about language and communication needs.",
      "List three auxiliary aids and when to use each.",
    ],
    rubric: [
      "Qualified interpreters are used.",
      "Language needs are recorded.",
      "Family members are not relied on.",
      "Materials are approved and plain.",
    ],
    scenario:
      "A minor child offers to interpret for a parent. What is the right response?",
    answers: [
      "Accept to save time",
      "Offer a free qualified interpreter and do not rely on the child",
      "Ask the parent to speak English",
    ],
    correct: 1,
    why: "Patients are entitled to qualified interpreters, and children should not be used to interpret medical information.",
    taglish:
      "May karapatan ang pasyenteng limitado ang English na magkaroon ng makabuluhang access sa pangangalaga, kasama ang libreng qualified interpreter. Huwag umasa sa kamag-anak o menor de edad. I-record ang preferred language sa registration at gumamit ng aprubadong translated materials. Kung may kailangang auxiliary aid, tulad ng sign language interpreter, ayusin ito nang maaga.",
    tip: "Save the interpreter service number where you can reach it in three clicks. If it is hard to find, it will not get used.",
    mentor:
      "Practice saying the interpreter connection script until it is smooth.",
    remember: [
      "Use qualified interpreters at no cost to the patient.",
      "Do not rely on family members or minors.",
      "Record language preferences and accessibility needs.",
    ],
    source:
      "HHS Office for Civil Rights language access guidance and Section 1557. Verify current rules.",
  },
]);
