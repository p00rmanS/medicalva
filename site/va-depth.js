// Medical VA Foundations in-depth lessons: HIPAA Privacy Rule and Security Rule.
addCodingLessons([
  {
    title: "HIPAA Privacy Rule in depth: uses, disclosures, and patient rights",
    desc: "Who must follow HIPAA, when PHI may be shared without authorization, what needs authorization, and the rights patients hold, with decision practice.",
    time: "75 min",
    objectives: [
      "Identify covered entities, business associates, and protected health information.",
      "Decide when a use or disclosure needs authorization and when minimum necessary applies.",
      "Describe patient rights and the response timelines that support them.",
    ],
    concept: `<p><b>Who is covered.</b> The Privacy Rule applies to <b>covered entities</b>: health plans, health care clearinghouses, and health care providers who transmit certain transactions electronically (such as claims). <b>Business associates</b> that handle PHI for covered entities, including many remote assistants and billing companies, must follow the relevant rules too and sign business associate agreements. <b>PHI</b> is individually identifiable health information held or transmitted by these organizations in any form, including paper, electronic, and spoken. Information is <b>de-identified</b> only if it meets the Safe Harbor method (removing 18 types of identifiers) or an expert determination.</p>
<p><b>Uses and disclosures without authorization.</b> A covered entity may use and disclose PHI for <b>treatment, payment, and health care operations (TPO)</b>, to the patient, and for specified public-interest purposes such as public health reporting, abuse reporting, certain law enforcement and judicial processes, and when required by law, each with conditions. It may share relevant information with family or friends involved in a patient's care if the patient agrees or does not object, or if the provider uses professional judgment in an emergency or when the patient cannot decide.</p>
<p><b>When authorization is required.</b> A signed <b>authorization</b> is generally needed for uses and disclosures outside TPO and the permitted categories, for <b>marketing</b> (with limited exceptions), for the <b>sale of PHI</b>, and for most uses and disclosures of <b>psychotherapy notes</b>. A valid authorization states what information, who may disclose and receive it, the purpose, an expiration, the patient's signature and date, and the right to revoke.</p>
<p><b>Minimum necessary.</b> For most uses and disclosures, limit PHI to what is needed for the purpose. The standard does not apply to disclosures to a provider for treatment, to the patient, under an authorization, to HHS for enforcement, or when required by law. Practices use role-based access and routine request protocols to apply it.</p>
<p><b>Patient rights.</b> <b>Access:</b> patients may inspect and obtain a copy of their designated record set, in the electronic form they request if readily producible, generally within 30 days (with one 30-day extension), and the practice may charge only a reasonable, cost-based fee. <b>Amendment:</b> patients may request corrections, and the practice must act within 60 days (with one 30-day extension). <b>Accounting of disclosures:</b> a list of certain disclosures from the past six years, not including TPO. <b>Restrictions:</b> patients may ask for limits, and the practice must agree to a request not to disclose to a health plan for a service the patient paid for in full out of pocket. <b>Confidential communications:</b> patients may ask to be contacted at an alternative address or phone. <b>Notice of Privacy Practices:</b> patients receive a notice explaining these rights.</p>
<p><b>Other duties.</b> Verify the identity and authority of the requester before disclosing. Take reasonable safeguards, and incidental disclosures that occur despite them are not violations. Keep required documentation for six years. When state law gives patients greater protection, the stricter law applies. Violations are enforced by the HHS Office for Civil Rights with civil and, in some cases, criminal penalties.</p>`,
    terms: [
      [
        "Covered entity",
        "A health plan, clearinghouse, or provider that transmits standard electronic transactions.",
      ],
      [
        "Business associate",
        "A person or company that handles PHI for a covered entity.",
      ],
      ["TPO", "Treatment, payment, and health care operations."],
      [
        "Authorization",
        "A signed permission with required elements for uses outside TPO.",
      ],
      [
        "Minimum necessary",
        "Limit use and disclosure to the PHI needed for the purpose.",
      ],
      [
        "Designated record set",
        "Medical and billing records and other records used to make decisions about the patient.",
      ],
      [
        "Accounting of disclosures",
        "A list of certain disclosures, excluding TPO, for six years.",
      ],
      [
        "Personal representative",
        "Someone with legal authority to act for the patient.",
      ],
    ],
    steps: [
      "Identify who is asking and for what purpose.",
      "Decide whether the request fits treatment, payment, operations, a permitted public-interest purpose, or the patient's own right.",
      "If it does not, check for a valid authorization.",
      "Apply minimum necessary where it applies.",
      "Verify identity and authority before disclosing.",
      "Document the request and the response.",
    ],
    lab: [
      [
        "A specialist's office calls to ask for last month's visit notes so they can treat the patient tomorrow.",
        "A disclosure for treatment is permitted without authorization, and minimum necessary does not limit it. Verify the caller and use the practice's secure method.",
      ],
      [
        "An insurance company asks for the whole chart to pay a single office visit claim.",
        "Payment is permitted, but minimum necessary applies. Send only the records needed for that claim, and route the request according to the practice's protocol.",
      ],
      [
        "A neighbor calls to ask whether a patient has an appointment on Friday.",
        "Do not confirm or deny. Without the patient's agreement or another permitted basis, the information cannot be shared.",
      ],
      [
        "A patient asks for a copy of their records by email.",
        "This is the right of access. Verify identity and handle through the access process. The patient may request email, and the practice may send unencrypted email after warning of the risk if the patient still prefers it, per OCR guidance and practice policy.",
      ],
      [
        "An employer calls to ask why an employee was seen last week.",
        "This requires the patient's written authorization. Do not disclose.",
      ],
      [
        "A patient paid in full out of pocket and asks that their health plan not be told about the visit.",
        "The practice must honor the request not to disclose to the plan for that service, per the restriction right. Route it to the privacy officer to flag the account.",
      ],
    ],
    case: "A caller says they are a patient's adult daughter and demands her mother's test results immediately.",
    model:
      "Do not release the results. Verify whether the daughter is the patient's personal representative or is listed in the record as someone the patient has allowed to receive information. Without that, offer to take a message for the patient and explain that the patient can authorize disclosure. Route the call to the privacy officer if she insists, and document the call.",
    mistakes: [
      "Treating a family relationship as authorization.",
      "Sending the whole chart for a small request.",
      "Ignoring the patient's right to access.",
      "Disclosing psychotherapy notes without authorization.",
    ],
    drills: [
      "Create a decision tree: TPO, public interest, patient right, authorization, or no.",
      "Write a script for declining an unauthorized caller politely.",
      "List the six patient rights with the timeline for access and amendment.",
    ],
    rubric: [
      "The basis for each disclosure is stated.",
      "Minimum necessary is applied correctly.",
      "Patient rights are described accurately with timelines.",
      "Identity and authority are verified.",
    ],
    scenario:
      "A specialist asks for records to treat a patient. Is a signed authorization needed?",
    answers: [
      "No; disclosures for treatment are permitted without authorization",
      "Yes; every disclosure needs a signed authorization",
      "Only if the specialist is outside the state",
    ],
    correct: 0,
    why: "HIPAA permits disclosures for treatment without authorization, and minimum necessary does not limit them.",
    taglish:
      "Sakop ng Privacy Rule ang covered entities at ang business associates na humahawak ng PHI. Puwedeng gamitin at ibahagi ang PHI para sa treatment, payment, at operations (TPO) nang walang authorization. Kailangan ng pirmadong authorization para sa marketing, pagbebenta ng PHI, at karamihan ng psychotherapy notes. May karapatan ang pasyente na makakuha ng kopya (karaniwang sa loob ng 30 araw), humiling ng pagwawasto, at humingi ng listahan ng disclosures. Laging i-verify ang identity at awtoridad.",
    tip: "Say your reason out loud before you disclose: ‘This is for treatment’ or ‘This is for payment.’ If you cannot name the reason, stop.",
    mentor:
      "Role-play three calls: one for treatment, one for payment, and one from an unauthorized person.",
    remember: [
      "TPO and the patient's own requests do not need authorization.",
      "Authorization is required for marketing, sale of PHI, and most psychotherapy notes.",
      "Access: about 30 days. Amendment: about 60 days. Accounting: six years, excluding TPO.",
    ],
    source:
      "HHS HIPAA Privacy Rule summary and guidance on access, authorizations, and minimum necessary. Check your state's laws as well.",
  },
  {
    title: "HIPAA Security Rule in depth: safeguards for remote work",
    desc: "Administrative, physical, and technical safeguards for electronic PHI, required versus addressable standards, and a complete remote-workstation checklist.",
    time: "70 min",
    objectives: [
      "Describe the three categories of safeguards and name examples of each.",
      "Explain the difference between required and addressable specifications.",
      "Apply a remote-workstation checklist and respond to a security incident.",
    ],
    concept: `<p>The Security Rule protects <b>electronic PHI (ePHI)</b> held or transmitted by covered entities and business associates. It requires reasonable and appropriate safeguards to protect <b>confidentiality</b>, <b>integrity</b>, and <b>availability</b>. It is flexible: the size and complexity of the organization and the risks it faces shape what is appropriate.</p>
<p><b>Administrative safeguards</b> are policies and management actions. The core is the <b>security management process</b>: a <b>risk analysis</b> that finds where ePHI is and what could go wrong, and <b>risk management</b> that reduces those risks. Other standards include a designated security official, workforce security and clearance, information access management (least privilege), security awareness training, a sanction policy, security incident procedures, a <b>contingency plan</b> (data backup, disaster recovery, emergency operations), periodic evaluation, and business associate agreements.</p>
<p><b>Physical safeguards</b> protect systems and facilities: facility access controls, workstation use and workstation security (where and how a computer may be used and how it is protected), and device and media controls (disposal, re-use, tracking, and backup of hardware and media).</p>
<p><b>Technical safeguards</b> are technology controls: access control (unique user IDs, emergency access, automatic logoff, and encryption), audit controls (logs), integrity controls, person or entity authentication (such as multi-factor authentication), and transmission security (encryption in transit).</p>
<p><b>Required and addressable.</b> Some implementation specifications are <em>required</em>. Others are <em>addressable</em>, which does not mean optional: the organization must assess whether the measure is reasonable and appropriate and either implement it, implement an equivalent alternative, or document why it did neither. Encryption is addressable in the rule but is expected in practice, and PHI that is encrypted to the standard HHS describes is treated as ‘secured’ under the breach notification rule, which can avoid notification if a device is lost. HHS has proposed changes to strengthen the Security Rule, so check the current status.</p>
<p><b>Remote workstation checklist.</b> Use only approved devices or a virtual desktop; keep the operating system and applications updated; run approved endpoint protection; enable full-disk encryption; use multi-factor authentication; connect through the employer's VPN or virtual desktop and a secure, password-protected home network (WPA2 or WPA3) with an updated router; set automatic screen lock; work in a private space; keep PHI off local drives, personal cloud storage, and personal email; do not print; never share a login; use an approved password manager; report lost, stolen, or suspicious devices and phishing at once; and dispose of notes and media securely.</p>`,
    terms: [
      ["ePHI", "Electronic protected health information."],
      [
        "Risk analysis",
        "A thorough assessment of risks to ePHI. The foundation of the rule.",
      ],
      [
        "Required / addressable",
        "Must be implemented / must be assessed and implemented, replaced by an equivalent, or the reason documented.",
      ],
      [
        "Least privilege",
        "Access limited to what a person needs for their job.",
      ],
      ["Audit controls", "Logs that record activity in systems with ePHI."],
      [
        "Contingency plan",
        "Backups, disaster recovery, and emergency operations.",
      ],
      [
        "Transmission security",
        "Protection of ePHI as it moves, such as encryption.",
      ],
      ["Secured PHI", "PHI encrypted or destroyed to the HHS standard."],
    ],
    steps: [
      "Know where ePHI lives in your work: systems, drives, messages, and printouts.",
      "Check the home setup against the remote workstation checklist before each shift.",
      "Use only approved tools and accounts and authenticate with multi-factor authentication.",
      "Lock the screen whenever you step away and work only in a private space.",
      "Report incidents, lost devices, and suspicious messages immediately.",
      "Take part in security awareness training and note updates to policies.",
    ],
    lab: [
      [
        "Classify each as administrative, physical, or technical: (a) risk analysis, (b) automatic logoff, (c) device disposal procedure, (d) security awareness training, (e) multi-factor authentication.",
        "(a) Administrative. (b) Technical. (c) Physical (device and media controls). (d) Administrative. (e) Technical (authentication).",
      ],
      [
        "Encryption is ‘addressable.’ What does that mean?",
        "The organization must assess whether it is reasonable and appropriate, then implement it, use an equivalent alternative, or document why neither. It does not mean the organization may ignore it.",
      ],
      [
        "A coder VA wants to save patient charts on a personal USB drive to work offline.",
        "Not permitted. It places ePHI on an uncontrolled device. Use the approved virtual desktop or system, and ask the supervisor about an approved offline process.",
      ],
      [
        "Your home Wi-Fi password is the router's factory default and the router has not been updated in years.",
        "Fix it before working: change the password, use WPA2 or WPA3, update the router firmware, and connect through the employer's VPN or virtual desktop.",
      ],
      [
        "You receive an email that looks like it came from IT asking you to log in to a new portal.",
        "Do not click. Verify through a known IT contact, report the message as suspected phishing, and follow the incident procedure.",
      ],
      [
        "A laptop used for client work is lost.",
        "Report immediately so access can be revoked and a risk assessment can begin. If the drive was encrypted to the HHS standard, the PHI is considered secured, which affects breach notification.",
      ],
    ],
    case: "A teammate says, ‘The firewall and antivirus are on, so we're HIPAA compliant for security.’",
    model:
      "Compliance is broader than technical tools. The Security Rule requires a documented risk analysis, risk management, policies, training, access controls, physical safeguards, contingency planning, business associate agreements, and periodic evaluation. Ask whether the risk analysis exists and is current, and suggest tracking each safeguard category in a simple checklist with owners and dates.",
    mistakes: [
      "Thinking ‘addressable’ means ‘optional.’",
      "Using personal devices or storage for PHI.",
      "Assuming a firewall is a complete security program.",
      "Delaying a report of a lost device.",
    ],
    drills: [
      "Write the remote-workstation checklist in your own words and use it for a week.",
      "Draw a table of administrative, physical, and technical safeguards with two examples each.",
      "Explain required versus addressable to a partner using encryption as the example.",
    ],
    rubric: [
      "The three safeguard categories are distinguished.",
      "Addressable is explained correctly.",
      "The home setup checklist is complete.",
      "Incident reporting is immediate and factual.",
    ],
    scenario:
      "What does ‘addressable’ mean for an implementation specification?",
    answers: [
      "Assess it and implement it, use an equivalent alternative, or document why not",
      "It is optional and can be skipped without a record",
      "It only applies to large hospitals",
    ],
    correct: 0,
    why: "Addressable specifications must be assessed and then implemented, replaced by an equivalent, or the decision documented.",
    taglish:
      "Pinoprotektahan ng Security Rule ang electronic PHI sa tatlong paraan: administrative (risk analysis, training, access, contingency plan), physical (pasilidad, workstation, device at media), at technical (unique user ID, auto logoff, encryption, MFA, audit logs, secure transmission). Ang ‘addressable’ ay hindi optional; kailangang suriin at gawin, palitan ng katumbas, o isulat kung bakit hindi. Sa remote work: aprubadong device o virtual desktop, MFA, VPN, secure na Wi-Fi, screen lock, at i-report agad ang nawala o kahina-hinala.",
    tip: "Run the 30-second pre-shift check: door closed, VPN on, screen lock set, approved apps only, no unapproved devices on the desk.",
    mentor:
      "Walk through your actual workspace with the checklist and fix one item today.",
    remember: [
      "Administrative, physical, and technical safeguards work together. The risk analysis comes first.",
      "Addressable means assess and act or document, never ignore.",
      "Encrypted devices are treated as secured under the breach rule, but report any loss immediately.",
    ],
    source:
      "HHS HIPAA Security Rule summary and guidance, including breach safe harbor guidance. Proposed updates may change requirements.",
  },
]);
