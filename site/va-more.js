// Medical VA Foundations additions, batch 2: orders, portal support, and breach response.
addCodingLessons([
  {
    title: "Coordinate lab and imaging orders",
    desc: "Learn the common tests by name, schedule them from valid orders, share approved preparation instructions, and track results without interpreting them.",
    time: "40 min",
    objectives: [
      "Recognize common laboratory and imaging tests by name and type.",
      "Follow an order from provider to scheduled test to result routing.",
      "Share only approved preparation instructions and never interpret results.",
    ],
    concept: `<p>Providers order tests. Your job is to make sure the order is valid, the test is scheduled correctly, the patient knows the approved preparation, and the result reaches the ordering provider. You never interpret results or advise the patient about what they mean.</p>
<p><b>Common laboratory tests.</b> CBC (complete blood count), BMP and CMP (basic and comprehensive metabolic panels), lipid panel (cholesterol), A1c (average blood sugar over about three months), TSH (thyroid), UA (urinalysis), and cultures (testing for infection). <b>Common imaging.</b> X-ray, CT (computed tomography), MRI (magnetic resonance imaging), ultrasound, mammogram, and DEXA (bone density). Imaging may be ‘with’ or ‘without’ contrast, which changes preparation and sometimes the approval needed.</p>
<p>Workflow: confirm the order is complete (patient, test, reason or diagnosis, ordering provider, priority), check whether prior authorization is needed (advanced imaging such as CT, MRI, and PET often needs it), choose an in-network location when possible, schedule, and give the approved instructions, such as fasting rules, which come from the lab or imaging center or the provider. Record the date and location. After the test, confirm that the result reached the ordering provider's inbox. Follow up on missing results through your process. Results and next steps are communicated by authorized clinical staff.</p>
<p>Know the priority terms: STAT means immediately, urgent means soon, and routine means standard timing. Do not change a priority yourself.</p>`,
    terms: [
      [
        "CBC / BMP / CMP",
        "Blood count / basic metabolic panel / comprehensive metabolic panel.",
      ],
      ["Lipid panel", "Cholesterol-related blood test."],
      ["A1c", "Blood test reflecting average glucose over about three months."],
      [
        "With / without contrast",
        "Whether a dye is used for the imaging study.",
      ],
      ["Prior authorization", "Plan approval required before some tests."],
      ["STAT / urgent / routine", "Priority levels for an order."],
      ["Order", "The provider's instruction for a specific test."],
    ],
    steps: [
      "Check that the order has the patient, the test, the reason, the provider, and the priority.",
      "Check whether prior authorization or a referral is required, and start the process if so.",
      "Schedule at an appropriate location and time, noting the date, place, and any facility instructions.",
      "Give the patient the approved preparation instructions word for word from the source.",
      "After the test, confirm the result went to the ordering provider.",
      "If a result is missing, follow up with the facility and report the status.",
    ],
    lab: [
      [
        "A patient asks, ‘My cholesterol result is 240. Is that bad?’",
        "Do not interpret. Say: ‘I can't explain results, but I'll make sure the provider sees it and the care team will contact you.’ Route the message according to the results-message process.",
      ],
      [
        "The order says ‘MRI knee’ but does not say which knee.",
        "Do not guess. The order is incomplete. Contact the ordering provider's team to clarify and document the answer before scheduling.",
      ],
      [
        "A patient asks whether they can eat before a fasting blood draw.",
        "Give only the approved instruction from the order or the lab. If it is not clear, ask the clinical team and do not improvise.",
      ],
    ],
    case: "A CT with contrast is ordered. The plan requires prior authorization and the patient wants a time next week.",
    model:
      "Start the prior authorization first. Explain that scheduling will be confirmed once approval is received, tell the patient the usual timeframe from the practice's policy, and offer a tentative hold if policy allows. Track the authorization and update the patient.",
    mistakes: [
      "Scheduling without checking for authorization.",
      "Guessing missing information on an order.",
      "Interpreting a result for a patient.",
    ],
    drills: [
      "Make a card of 12 common tests with their plain-language descriptions.",
      "Write a checklist for a complete order.",
      "Draft a patient message that gives approved preparation instructions.",
    ],
    rubric: [
      "Orders are checked before scheduling.",
      "Authorization status is tracked.",
      "Preparation instructions come from approved sources.",
      "No result interpretation is given.",
    ],
    scenario:
      "A patient asks what their result means. What is the right response?",
    answers: [
      "Explain what you think it means",
      "Explain that clinical staff will review it and route the message under the results process",
      "Tell them not to worry",
    ],
    correct: 1,
    why: "Interpreting results is a clinical task. Non-clinical staff route the question to the care team.",
    taglish:
      "Ang provider ang nag-o-order, ikaw ang titiyak na kumpleto ang order, tama ang schedule, alam ng pasyente ang aprubadong preparation, at nakarating ang resulta sa ordering provider. Alamin ang pangalan ng karaniwang tests tulad ng CBC, CMP, A1c, MRI, at CT. Huwag mong ipaliwanag ang resulta; i-route sa clinical staff. At tingnan kung kailangan ng prior authorization sa CT, MRI, o PET.",
    tip: "Use the exact wording of the preparation instructions. Paraphrasing is how fasting mistakes happen.",
    mentor:
      "Role-play a call scheduling an MRI that needs authorization, then a call asking what a result means.",
    remember: [
      "Check the order is complete and whether authorization is needed.",
      "Preparation instructions come from approved sources only.",
      "Never interpret results. Route them to clinical staff.",
    ],
  },
  {
    title: "Support patient portal access",
    desc: "Help patients enroll and use a portal securely, handle proxy access, and understand why patients now see more of their record.",
    time: "40 min",
    objectives: [
      "Describe what a patient portal does.",
      "Help a patient enroll or recover access without handling their password.",
      "Explain proxy access and the basics of patient access to notes and results.",
    ],
    concept: `<p>A patient portal lets patients view appointments, results, medications, and visit notes, send messages, request refills, and pay bills. Support work usually includes enrollment, account recovery, and answering ‘how do I find…’ questions. You can help, but you must verify identity first and never ask for or store a patient's password.</p>
<p><b>Enrollment.</b> Follow the practice's identity verification process. Common steps: verify identifiers, send an invitation or activation code to the contact information on file (not a new, unverified address), and guide the patient through setup. If the contact information on file is wrong, update it only through the approved process with verification.</p>
<p><b>Account recovery.</b> Direct patients to the official reset link. Do not tell anyone a password or reset someone's access based on a caller's word alone. Watch for fraud: a caller who cannot be verified and wants an email address changed is a red flag.</p>
<p><b>Proxy access.</b> A parent or guardian may be given access to a minor's portal, and an adult may authorize another person (for example, a caregiver). The rules depend on the patient's age, state law, practice policy, and signed authorization forms. Adolescents may have confidential services that the parent should not see. Follow the practice's proxy policy and route unclear cases to the privacy officer.</p>
<p><b>Access to notes and results.</b> Federal rules under the 21st Century Cures Act discourage information blocking, so patients can often see results and visit notes quickly, sometimes before the provider has discussed them. This may lead to patient questions. Do not interpret. Route clinical questions to the care team, and tell patients the usual time for a reply.</p>`,
    terms: [
      [
        "Patient portal",
        "A secure website or app for patients to see and manage their health information.",
      ],
      [
        "Activation code",
        "A one-time code or link used to create a portal account.",
      ],
      ["Proxy access", "Authorized access to another person's portal."],
      [
        "Information blocking",
        "Practices that interfere with lawful access to health information, restricted under the Cures Act.",
      ],
      [
        "Multi-factor authentication",
        "A second step, such as a code, to prove identity.",
      ],
    ],
    steps: [
      "Verify identity using the approved process before any portal help.",
      "For enrollment, send the invitation to the verified contact on file.",
      "For recovery, direct the patient to the official reset process. Never handle or ask for a password.",
      "For proxy requests, check the signed authorization and the practice policy.",
      "Route clinical or privacy questions to the right team.",
      "Document the help provided and any concern.",
    ],
    lab: [
      [
        "A caller says they cannot log in, cannot be verified, and wants the email on the account changed to a new address.",
        "Do not change it. This is a possible account takeover. Follow the identity verification policy, escalate to the privacy or security lead, and document the call.",
      ],
      [
        "A patient asks why they can see a test result in the portal before anyone has called them.",
        "Explain that patients can often view results as soon as they are final, and that the care team will review them and contact the patient as needed. Route any clinical question to the care team.",
      ],
      [
        "A parent asks for access to the portal of a 16-year-old.",
        "Check the practice's proxy policy, state rules, and any confidential-service limits for adolescents. Obtain the required authorization and route unclear cases to the privacy officer.",
      ],
    ],
    case: "A patient asks you to log in to their portal for them and read out their results. They offer you their password.",
    model:
      "Decline to take the password. Explain that staff must not use patient credentials. Offer to help them reach the official login page, or route the patient to a clinical team member who can discuss results through the right process.",
    mistakes: [
      "Accepting or storing a patient's password.",
      "Sending activation links to unverified emails.",
      "Granting proxy access without authorization.",
    ],
    drills: [
      "Write a script for helping a patient enroll in the portal.",
      "Create a decision tree for proxy requests.",
      "Draft a message explaining immediate result release in plain language.",
    ],
    rubric: [
      "Identity is verified.",
      "Passwords are never handled.",
      "Proxy rules are followed.",
      "Clinical questions are routed.",
    ],
    scenario:
      "A patient offers their password so you can ‘just log in and look.’ What do you do?",
    answers: [
      "Take it to save time",
      "Decline and guide them through the approved login or support process",
      "Write it in their chart",
    ],
    correct: 1,
    why: "Staff must never use or store patient credentials. Guide the patient through the official process.",
    taglish:
      "Sa portal support, i-verify muna ang identity at huwag kailanman humingi o tumanggap ng password. Ipadala ang activation sa verified contact, at ituro ang official reset link. Sa proxy access, kailangan ang pirmadong authorization at sundin ang policy at batas ng estado, lalo na sa mga menor de edad. At dahil sa Cures Act, madalas nakikita agad ng pasyente ang resulta; i-route ang mga tanong sa care team.",
    tip: "Tell patients the rule before they offer: ‘I can't ask for or use your password, but I can walk you through it.’ It prevents awkward moments.",
    mentor:
      "Practice the phrase for declining a password in Taglish and English until it sounds natural.",
    remember: [
      "Never ask for, use, or store a patient's password.",
      "Proxy access needs authorization and follows state and practice rules.",
      "Patients may see results quickly. Route clinical questions to the care team.",
    ],
  },
  {
    title: "Breach notification and your role",
    desc: "Recognize a possible breach, report it at once, and understand the notification timelines and risk assessment the practice must follow.",
    time: "40 min",
    objectives: [
      "Recognize common causes of breaches in a remote medical office.",
      "Report a suspected breach quickly and factually.",
      "Describe the basic notification timelines and the four-factor risk assessment.",
    ],
    concept: `<p>Under HIPAA, a <b>breach</b> is an impermissible use or disclosure of protected health information that compromises its security or privacy, unless the covered entity shows a low probability that the PHI was compromised. Common causes: a message sent to the wrong recipient, a lost or stolen device, an unsecured file link, a phishing attack that exposes an account, and staff looking at records without a work reason.</p>
<p>The practice completes a <b>risk assessment</b> of at least four factors: the nature and extent of the PHI (including how identifiable it is), the unauthorized person who used or received it, whether the PHI was actually acquired or viewed, and the extent to which the risk has been mitigated. If the assessment does not show a low probability of compromise, it is a reportable breach.</p>
<p>Notification timelines for covered entities: notify affected individuals without unreasonable delay and no later than 60 days after discovery. For breaches affecting 500 or more people, notify the U.S. Department of Health and Human Services (HHS) at the same time, and notify the media if more than 500 residents of one state are affected. For smaller breaches, report to HHS within 60 days after the end of the calendar year. A <b>business associate</b> must notify the covered entity as required by the business associate agreement, often much sooner. State laws and contracts may add shorter deadlines.</p>
<p><b>Your role.</b> Report immediately through the incident procedure. Do not delete messages or files, do not try to investigate or fix the issue by yourself, do not ‘recall and hope,’ and do not contact the patient on your own. Write down the facts: what happened, when, what information, and who may have seen it. Speed protects patients and the practice.</p>`,
    terms: [
      [
        "Breach",
        "An impermissible use or disclosure of PHI that compromises it, absent a low probability of compromise.",
      ],
      [
        "Risk assessment",
        "The documented evaluation of the probability that PHI was compromised.",
      ],
      [
        "Discovery",
        "The first day the breach is known, or should have been known, to the organization.",
      ],
      ["HHS Office for Civil Rights", "The agency that enforces HIPAA."],
      ["Mitigation", "Steps taken to reduce harm after an incident."],
    ],
    steps: [
      "Stop what you are doing and do not make things worse by deleting or forwarding.",
      "Report to the privacy officer or the designated contact immediately.",
      "Record the facts: date, time, what information, who received or accessed it, and how you found out.",
      "Preserve evidence such as the message or the file, as instructed.",
      "Follow instructions for recall, mitigation, and communication.",
      "Take any training or process fix that follows.",
    ],
    lab: [
      [
        "You email a patient's appointment details to the wrong address.",
        "Report immediately. Do not send a second message with more information. Record the time, the content, and the recipient address, and follow instructions on recalling or asking the recipient to delete the message.",
      ],
      [
        "Your laptop, which has access to the client's system, is stolen.",
        "Report it right away to the client's contact and your supervisor so access can be revoked and a risk assessment can begin. Do not wait to see if it turns up.",
      ],
      [
        "A covered entity discovers on March 1 that 800 patients' records were exposed. By when must individuals be notified, at the latest?",
        "Without unreasonable delay and no later than 60 days after discovery. For 500 or more people, HHS is notified at the same time as individuals.",
      ],
    ],
    case: "A coworker tells you they accidentally shared a link to a patient tracker with ‘anyone with the link’ access last week and ‘fixed it quietly.’",
    model:
      "Encourage them to report it immediately, and report it yourself if they do not. A quiet fix does not erase the exposure. The privacy officer must assess whether anyone accessed the link and whether notification is required. Document what you know.",
    mistakes: [
      "Waiting to see whether the problem resolves.",
      "Deleting evidence.",
      "Contacting patients without authorization.",
    ],
    drills: [
      "Write a one-page incident report template with factual fields only.",
      "List the four risk assessment factors in your own words.",
      "Role-play reporting a wrong-recipient email to a supervisor.",
    ],
    rubric: [
      "Reporting happens immediately.",
      "The facts are objective.",
      "Evidence is preserved.",
      "Timelines are correct.",
    ],
    scenario:
      "You realize you sent a message to the wrong patient. What should you do first?",
    answers: [
      "Delete it and say nothing",
      "Report it immediately through the incident procedure",
      "Send a second message to confirm",
    ],
    correct: 1,
    why: "Immediate reporting lets the privacy team assess the risk and decide on mitigation and notification.",
    taglish:
      "Ang breach ay hindi awtorisadong paggamit o paglabas ng PHI na nakompromiso ang seguridad. Kapag may nangyari, i-report agad sa incident procedure, huwag burahin ang ebidensya, at huwag mag-imbestiga o magpatawag sa pasyente nang mag-isa. Isulat ang facts: ano, kailan, sino. Ang mga pasyente ay dapat abisuhan sa loob ng 60 araw mula sa discovery, at may dagdag na ulat sa HHS para sa 500 o higit.",
    tip: "The faster you report, the more options the privacy team has. Waiting never improves a breach.",
    mentor:
      "Practice saying, ‘I need to report a possible privacy incident,’ out loud so it feels normal to say.",
    remember: [
      "Report suspected breaches immediately. Do not delete, fix quietly, or investigate alone.",
      "Individuals must be notified within 60 days of discovery, and sooner under some contracts or states.",
      "The four-factor risk assessment decides whether a breach is reportable.",
    ],
    source:
      "HHS HIPAA Breach Notification Rule. Review the current text and your state's laws.",
  },
]);
