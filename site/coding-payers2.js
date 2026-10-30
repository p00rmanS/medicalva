// Coding track: payers beyond Medicare and commercial plans.
addCodingLessons([
  {
    title: "Workers' compensation, auto, and liability billing",
    desc: "Who pays first when an injury is work-related or caused by an accident, what the claim must show, and how the paperwork differs from a health insurance claim.",
    time: "55 min",
    objectives: [
      "Identify work-related and accident-related encounters and the payer that is primary.",
      "Complete the key claim fields for a workers' compensation claim.",
      "Handle authorizations, work status reports, and records requests correctly.",
    ],
    concept: `<p>When an injury or illness is caused by work or an accident, a different payer may be responsible than the patient's health plan.</p>
<p><b>Workers' compensation.</b> Employers generally must carry workers' compensation coverage under state law. It covers medical care for injuries and illnesses that arise from work, usually with <b>no copay or deductible</b> for the patient. It is the <b>primary payer</b>, and health plans and Medicare expect it to be billed first. Payment follows the <b>state's fee schedule</b>, and each state has its own forms, deadlines, authorization rules, and dispute process. Typical elements: the <b>employer's name</b>, the <b>date of injury</b>, a <b>claim number</b> from the carrier, an <b>adjuster</b> contact, and the <b>designated treating physician</b> where the state requires one. On the CMS-1500, the employment-related box is marked ‘yes,’ the date of injury is reported, and the claim number and insurer information are used in the insured fields. Many carriers require prior authorization for certain services and regular <b>work status reports</b> stating the patient's restrictions.</p>
<p><b>Auto insurance.</b> In ‘no-fault’ states, personal injury protection (PIP) or medical payments coverage from the patient's own auto policy may pay first for accident-related care, up to a limit. In other states, the at-fault party's liability insurer is responsible, and the process is often slow.</p>
<p><b>Liability and liens.</b> For injuries involving another party's liability, practices may treat under a <b>letter of protection</b> or lien from the patient's attorney, which means payment depends on the outcome of a claim. These arrangements are risky and must follow practice policy and state law. Record the date and circumstances of the accident, the attorney's contact, and the insurer.</p>
<p><b>Privacy.</b> Disclosures to a workers' compensation carrier are generally permitted as required by law and limited to what the law allows. Requests from attorneys or liability insurers need the patient's authorization. Use minimum necessary.</p>
<p><b>Common errors.</b> Billing the patient's health plan for a work injury, which then denies the claim as the responsibility of another payer. Missing the claim number or date of injury. Using the wrong fee schedule. Missing the state deadline for billing or for filing a first report of injury, which is a provider requirement in many states.</p>`,
    terms: [
      [
        "Workers' compensation",
        "State-regulated insurance for work-related injuries and illness.",
      ],
      [
        "First report of injury",
        "The initial form reporting a work injury, required in many states.",
      ],
      [
        "Work status report",
        "A report of the patient's restrictions or ability to work.",
      ],
      [
        "PIP",
        "Personal injury protection, auto coverage for medical bills in no-fault states.",
      ],
      [
        "Letter of protection",
        "An attorney's promise of payment from a future settlement.",
      ],
      ["Lien", "A legal claim for payment from a settlement."],
    ],
    steps: [
      "At registration, ask whether the injury or illness is related to work or an accident.",
      "Collect the employer, the date of injury, the carrier, the claim number, and the adjuster.",
      "Check authorization requirements and state forms and deadlines.",
      "Bill the correct payer with the right fields, and do not bill the health plan first.",
      "Send work status reports and records only as required, with minimum necessary information.",
      "Track the claim, because many have long payment cycles and disputes.",
    ],
    lab: [
      [
        "A patient hurts a shoulder lifting boxes at work and presents with their health insurance card.",
        "Do not bill the health plan first. Obtain the employer and carrier information and the claim number, and bill the workers' compensation carrier as primary.",
      ],
      [
        "A workers' compensation carrier asks for the patient's entire chart.",
        "Release only what the law and the carrier's request allow, using minimum necessary, and route the request through the practice's process.",
      ],
      [
        "A patient was hit by a car and lives in a no-fault state.",
        "Obtain the auto insurer's information and bill PIP or medical payments coverage first, following state rules.",
      ],
      [
        "An attorney asks for records and a letter of protection for a patient's accident treatment.",
        "Do not release records without the patient's authorization. Route the lien and letter of protection request to the practice manager under policy.",
      ],
    ],
    case: "A workers' compensation claim is denied because the practice billed the patient's health plan first and the date of injury was missing.",
    model:
      "Identify the correct payer and gather the claim number and date of injury. Bill the workers' compensation carrier within the state's deadline, and withdraw or correct the health plan claim so it can be reprocessed if needed. Add a registration question about work-related injury to prevent recurrence.",
    mistakes: [
      "Billing the health plan for a work injury.",
      "Missing the claim number or date of injury.",
      "Sending records without the proper authorization.",
      "Ignoring state deadlines and forms.",
    ],
    drills: [
      "Create a registration checklist that identifies work- and accident-related encounters.",
      "List the fields needed for a workers' compensation claim.",
      "Write a polite message asking a patient for employer and claim information.",
    ],
    rubric: [
      "The primary payer is identified correctly.",
      "Required fields are captured.",
      "Privacy rules are followed.",
      "State deadlines are tracked.",
    ],
    scenario:
      "A patient's injury happened at work. Which payer should be billed first?",
    answers: [
      "The workers' compensation carrier",
      "The patient's health plan",
      "The patient personally",
    ],
    correct: 0,
    why: "Workers' compensation is the primary payer for work-related injuries and illnesses.",
    taglish:
      "Kapag ang pinsala ay galing sa trabaho, ang workers' compensation ang pangunahing payer, hindi ang health insurance ng pasyente. Kailangan ang employer, petsa ng pinsala, claim number, at adjuster. Walang copay o deductible ang pasyente, at sumusunod sa fee schedule ng estado. Sa auto accident, puwedeng PIP muna sa no-fault states. Ang mga attorney at liability insurer ay kailangan ng authorization mula sa pasyente para sa records.",
    tip: "Add one question to registration: ‘Was this injury or illness caused by work or an accident?’ It prevents many wrong-payer denials.",
    mentor:
      "Role-play a registration call to a patient who says their back pain started at work.",
    remember: [
      "Work-related injuries go to workers' compensation first, with no patient copay.",
      "Capture the employer, date of injury, claim number, and adjuster.",
      "Attorney and liability requests need the patient's authorization.",
    ],
  },
  {
    title: "Medicaid, CHIP, TRICARE, and other government programs",
    desc: "How state Medicaid and CHIP work, dual-eligible billing and the QMB rule, third-party liability, and military health programs.",
    time: "60 min",
    objectives: [
      "Describe Medicaid and CHIP and how they differ from Medicare.",
      "Bill dual-eligible patients correctly and avoid balance billing QMB patients.",
      "Identify TRICARE, CHAMPVA, and VA programs and basic billing differences.",
    ],
    concept: `<p><b>Medicaid</b> is a joint federal and state program for people with limited income and resources. Each state runs its own program within federal rules, so eligibility, covered services, prior authorization, billing, and timely filing differ by state. Many states use <b>managed care organizations</b>, so a patient may have a Medicaid card but a plan administered by a private company. <b>Eligibility can change month to month</b>, so verify at every visit. Medicaid is the <b>payer of last resort</b>: other coverage, called <b>third-party liability (TPL)</b>, must be billed first. Cost sharing is nominal. For children and young adults under 21, the <b>EPSDT</b> benefit (Early and Periodic Screening, Diagnostic, and Treatment) covers a wide range of preventive and medically necessary services.</p>
<p><b>CHIP</b> (Children's Health Insurance Program) covers children in families with incomes above Medicaid limits but who cannot afford private coverage. States run it as an expansion of Medicaid, as a separate program, or as a mix, so check the state's rules.</p>
<p><b>Dual eligibles.</b> Patients with both Medicare and Medicaid are billed to Medicare first, and Medicaid may pay part of the cost-sharing as the secondary payer. For patients in the <b>Qualified Medicare Beneficiary (QMB)</b> program, providers <b>may not bill the patient for Medicare cost-sharing</b> (deductible, coinsurance, and copayments). They can only collect what Medicaid pays, if anything. Verify QMB status in the eligibility response.</p>
<p><b>TRICARE</b> is the health program for active-duty service members, retirees, and their families. Plan types include TRICARE Prime and Select. <b>TRICARE For Life</b> works with Medicare as secondary coverage for retirees age 65 and older who have Medicare Parts A and B. Claims go through regional contractors, so check the current contractor and rules. <b>CHAMPVA</b> covers spouses and children of certain disabled or deceased veterans, and the <b>VA Community Care</b> program authorizes care for veterans with outside providers, requiring authorization before service.</p>
<p><b>Billing cautions.</b> Read each program's provider manual. Prior authorization, referral, and credentialing requirements vary. Many programs forbid billing the patient beyond a copay for covered services, and some require submitting within a short period. Offshore access to these programs' data may be restricted, which matters to remote coders.</p>`,
    terms: [
      [
        "Medicaid",
        "Federal and state health coverage for people with limited income.",
      ],
      ["CHIP", "Children's Health Insurance Program."],
      [
        "TPL",
        "Third-party liability: other coverage that pays before Medicaid.",
      ],
      ["EPSDT", "Medicaid's benefit for children under 21."],
      ["Dual eligible", "A person with both Medicare and Medicaid."],
      [
        "QMB",
        "Qualified Medicare Beneficiary. Providers may not bill them for Medicare cost-sharing.",
      ],
      ["TRICARE", "The military health care program."],
      ["CHAMPVA", "VA coverage for certain family members of veterans."],
    ],
    steps: [
      "Verify the patient's eligibility on the date of service and note the program and plan.",
      "Identify other coverage and bill it first. Medicaid pays last.",
      "For dual-eligible patients, bill Medicare first and then Medicaid, and check for QMB status.",
      "Check the program's authorization, referral, and timely filing rules.",
      "Bill the patient only what the program allows.",
    ],
    lab: [
      [
        "A patient has Medicaid and commercial insurance.",
        "Bill the commercial insurance first. Medicaid pays last and the claim to Medicaid includes the commercial payer's remittance.",
      ],
      [
        "A QMB patient receives a bill from your office for a Medicare coinsurance balance.",
        "This violates the QMB rule. Remove the patient balance and bill Medicaid as the program directs.",
      ],
      [
        "A child under 21 with Medicaid needs a well-child exam with screenings.",
        "These services are covered under EPSDT. Use the preventive visit and screening codes, following the state's documentation and billing rules.",
      ],
      [
        "A retired service member has Medicare Parts A and B and TRICARE For Life.",
        "Medicare is primary. TRICARE For Life is secondary and typically pays after Medicare.",
      ],
      [
        "A veteran is referred to your practice for VA Community Care.",
        "Confirm that a VA authorization exists before the service, and bill according to the community care instructions.",
      ],
    ],
    case: "A patient who is both on Medicare and a QMB receives a statement showing an 80/20 split for a visit.",
    model:
      "A QMB patient cannot be billed the Medicare cost-sharing. Check the eligibility response for QMB status, remove the balance, notify billing, and update the account so future statements are suppressed. Review other QMB patients for similar billing errors.",
    mistakes: [
      "Billing Medicaid before other coverage.",
      "Billing QMB patients for Medicare cost-sharing.",
      "Assuming Medicaid rules are the same in every state.",
      "Skipping VA authorization.",
    ],
    drills: [
      "Make a table of Medicaid, CHIP, Medicare, TRICARE, and CHAMPVA: who is covered and who is primary.",
      "Write a registration question set to find other coverage and QMB status.",
      "Build a billing order chart for a patient with Medicare, Medicaid, and a retiree plan.",
    ],
    rubric: [
      "Primary and secondary payers are in the right order.",
      "QMB protections are respected.",
      "State and program differences are recognized.",
      "Authorization rules are checked.",
    ],
    scenario:
      "A Medicare patient is a Qualified Medicare Beneficiary. May the practice bill the patient for the Medicare coinsurance?",
    answers: ["No", "Yes, always", "Only after 30 days"],
    correct: 0,
    why: "Providers may not bill QMB patients for Medicare deductibles, coinsurance, or copayments.",
    taglish:
      "Ang Medicaid ay pinapatakbo ng estado kaya iba-iba ang patakaran, at ito ang pinakahuling nagbabayad, kaya i-bill muna ang ibang coverage. Ang CHIP ay para sa mga batang hindi pasok sa Medicaid. Sa dual eligible, Medicare muna, tapos Medicaid, at bawal i-bill ang QMB sa Medicare cost-sharing. Ang TRICARE For Life ay secondary sa Medicare. Sa VA Community Care, kailangan ng authorization bago ang serbisyo.",
    tip: "Add ‘QMB status’ to your eligibility checklist. It is a small line that prevents compliance violations.",
    mentor:
      "Explain who pays first for a patient with Medicare, Medicaid, and a retiree plan.",
    remember: [
      "Medicaid is the payer of last resort and rules vary by state.",
      "QMB patients cannot be billed for Medicare cost-sharing.",
      "TRICARE For Life is secondary to Medicare. VA Community Care needs authorization.",
    ],
    source:
      "CMS Medicaid, CHIP, and QMB billing guidance, and TRICARE and VA program sites. Programs change; verify current rules.",
  },
]);
