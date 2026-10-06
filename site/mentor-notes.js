// Indexed by stable lesson identity so saved progress survives curriculum additions.
const mentorNotes = [
  [
    "Ang medical VA ay support ng clinic: calls, appointments, messages, at admin follow-up. Hindi ibig sabihin na ikaw na ang magde-decide tungkol sa diagnosis o gamot. Kapag clinical ang tanong, i-record nang tama at i-route sa authorized staff. Ang pagiging mahusay ay knowing your role at pagiging reliable sa next step.",
    "Before starting a task, ask: “Am I trained, authorized, and using the approved workflow?”",
    "Practice a 30-second introduction to your role, then list three tasks you can support and three questions you must escalate.",
  ],
  [
    "Ang PHI ay health information na puwedeng ma-link sa isang tao. Hindi porket kamag-anak ang caller ay puwede nang ibigay ang record. I-verify ang identity at authority ayon sa clinic policy. Sa admin work, sundin ang role-based access at minimum-necessary policies; may legal exceptions, kaya huwag gawing blanket rule ang sarili mong interpretation.",
    "Double-check the recipient before sending. If you suspect a wrong disclosure, report promptly through the incident process.",
    "Explain how you would respond to a spouse asking for results without confirming or disclosing protected details improperly.",
  ],
  [
    "Huwag ma-pressure na kabisado agad lahat ng medical terms. EHR ang system para sa records; referral ang request papunta sa ibang service; prior authorization ang approval process ng plan para sa ilang services. Kapag may unfamiliar abbreviation, huwag hulaan dahil puwedeng iba ang meaning sa ibang context.",
    "Keep an approved glossary of unfamiliar terms and where you verified them; never turn a term lookup into clinical advice.",
    "Explain five glossary terms in your own Taglish words, then practice their English equivalents.",
  ],
  [
    "Sa scheduling, hindi sapat ang may bakanteng slot. Dapat tama ang patient, visit type, provider, duration, date, time zone, at format. Basahin pabalik ang details para may chance na maitama ang misunderstanding. Kapag may urgent symptoms na nire-report, sundin ang urgent-call protocol; hindi ikaw ang clinical triage.",
    "Use a consistent final read-back: date, time, zone, provider, format, and approved preparation instructions.",
    "Say a fictional appointment read-back aloud twice, including the exact time zone.",
  ],
  [
    "Sa phone call, listen muna bago mag-solve. I-verify ang identity kung protected details ang pag-uusapan. Isulat ang request sa sariling words ng patient, ano ang ginawa mo, at sino ang next owner. Kapag upset ang caller, acknowledge the concern pero huwag mag-promise ng callback time na hindi confirmed.",
    "End with the next action, not just “I sent a message.” Follow up according to the practice’s process.",
    "Record a greeting, a clarification question, and an honest closing statement.",
  ],
  [
    "Bago mag-update ng EHR, siguraduhing tamang record at may permission ka. Hindi puwedeng magdagdag ng interpretation o tahimik na baguhin ang signed note. Sa referral, “na-send” ay isang step lang; kailangan pa ring i-track ang receipt, missing items, at next action ayon sa workflow.",
    "Pause when names look similar. Verify approved identifiers before editing anything.",
    "Create one fictional referral note with status, owner, and next follow-up.",
  ],
  [
    "Active insurance does not automatically mean bayad lahat ng visit. Magkaiba ang eligibility, benefits, authorization, at actual claim payment. I-document ang source at reference ng verification, tapos i-route ang uncertain cost questions sa billing team. Huwag gumawa ng sariling coverage guarantee.",
    "Separate verified facts from unresolved questions in your billing handoff.",
    "Explain to a fictional patient why an active plan still needs service-specific checks.",
  ],
  [
    "Puwede kang gumawa ng strong portfolio kahit beginner, basta honest. Label your samples na fictional training exercises. Ipakita kung paano ka nag-verify, nag-document, at nag-escalate, hindi lang kung maganda ang format. Huwag tawaging employment experience o certification ang lessons na natapos.",
    "Show your reasoning and checks alongside each sample, without real patient information.",
    "Practice an honest answer to “You have no experience—how have you prepared?”",
  ],
  [
    "Bago ang shift, ready dapat ang approved tools, private workspace, headset, at contact for support. Sariling authorized login ang gamitin; hindi hiram na account. Kapag down ang system, sundin ang downtime procedure at i-notify ang right person. Huwag ilipat ang patient tasks sa personal apps para lang makapag-work.",
    "Keep the approved support and downtime contacts easy to locate before an outage happens.",
    "Write a fictional opening checklist with workspace, tools, queues, and escalation contacts.",
  ],
  [
    "Sa intake, collect and verify ang admin details; huwag ikaw ang mag-interpret ng symptoms o mag-reconcile ng meds. Kapag may conflicting information, i-flag at i-route sa tamang staff. Kung missing ang form, explain ang approved submission process. Hindi ikaw ang pipirma para sa patient.",
    "Distinguish “patient reported” from “verified in the approved source.”",
    "Draft a missing-form reminder and a separate note for a reported medication discrepancy.",
  ],
  [
    "Sa video visit, tulungan ang patient sa approved joining steps at basic tech checks. Confirm date at time zone, at ask kung may support needs. Huwag hingin ang password o gumamit ng personal video account kapag pumalya ang clinic platform. Ang backup visit plan ay dapat authorized ng practice.",
    "Give one technical step at a time and use the approved backup contact route.",
    "Explain camera and microphone checks in simple English, then summarize them in Taglish.",
  ],
  [
    "Ang inbox task ay hindi completed dahil na-forward mo na. Kailangan malinaw kung sino ang owner, ano ang pending, at kailan ang next follow-up ayon sa policy. Kapag wala pang required outcome, keep it open. Mas useful ang exact status kaysa “done” na hindi pa talaga tapos.",
    "Use status + owner + next action in every unresolved task.",
    "Turn “sent to team” into a complete fictional handoff with an owner and follow-up.",
  ],
  [
    "May rights ang patients sa access ng kanilang records sa covered settings, with limited exceptions. Hindi lahat ng request ay pareho ang form requirements. Capture ang request at i-route sa authorized records team. Huwag magdagdag ng sariling barriers, mag-deny, o basta mag-send ng buong chart sa unverified destination.",
    "Ask the records team when unsure whether the request is patient access or a third-party release.",
    "Draft a records-request handoff with requester, scope, date received, and delivery preference.",
  ],
  [
    "Plain language ang goal, hindi impressive jargon. One step at a time, then check kung clear ang explanation mo. Ask about communication support instead of assuming. Para sa interpretation, sundin ang approved qualified-support process; huwag basta umasa sa bata o untrained relative para sa clinical conversation.",
    "Say “To make sure I explained it clearly…” when checking understanding.",
    "Rewrite a confusing instruction into two short sentences and an approved support option.",
  ],
  [
    "Normal na may learning curve, pero hindi okay ang itago ang error. Review patient, date/time/zone, recipient, at next action. Kapag scheduling mistake, authorized correction process ang sundin. Kapag possible privacy incident, report promptly; hindi ikaw ang magde-decide kung breach ba ito.",
    "Use a short pre-send pause, especially when handling similar names or repeated templates.",
    "Identify what is missing from “Appointment Wednesday at 9” without inventing the answers.",
  ],
  [
    "Sa practice shift, pagsamahin ang scheduling, messages, referrals, at records requests. Hindi lahat kailangang matapos bago mag-end ang shift, pero lahat ng pending dapat may owner at next action. Kapag clinical ang tanong, safe routing ang tamang output—hindi sariling advice para lang ma-clear ang queue.",
    "Write the handoff before your shift ends so there is time to clarify missing ownership.",
    "Complete the five fictional tasks and have a practice partner identify each next step.",
  ],
  [
    "Cancellation handling needs accuracy, hindi basta punuan ang slot. Check ang visit type at duration, then follow waitlist rules. Kung 30 minutes lang ang opening pero 60 minutes ang required visit, hindi match. Recheck availability before confirming para iwas double booking.",
    "Treat a waitlist offer, a temporary hold, and a confirmed booking as different states.",
    "Match three fictional requests to two openings and explain the mismatch.",
  ],
  [
    "Sa time zones, actual appointment date ang gamitin sa approved calendar. May locations na nagcha-change clocks at may hindi. Puwedeng ibang araw na sa patient kapag midnight boundary. Kaya always confirm date, time, at named time zone; huwag fixed minus-hours lang.",
    "Use the visit date for conversion, then independently check any date change.",
    "Create a fictional cross-zone booking and read back the patient’s local date and time.",
  ],
  [
    "Sa authorization, ikaw ang admin support sa packet at status tracking kung authorized. Clinical team ang nagbibigay ng medical justification at coding staff ang nagko-confirm ng codes. Record reference number, missing items, owner, at next action. Ang approval ay hindi blanket promise na walang patient cost.",
    "Set a visible follow-up action for every pending authorization, based on practice rules.",
    "Make one fictional pending case and route its missing clinical note to the correct owner.",
  ],
  [
    "Revenue cycle ang flow mula registration hanggang claim at payment follow-up. Iba ang claim, rejection, at denial; huwag automatic na pareho ang solution. Know the owner ng bawat stage. Coding, write-offs, at appeals need proper training and authority, hindi admin access lang.",
    "Map the handoff between stages so a billing issue reaches the right team with the right facts.",
    "Explain the revenue cycle using a fictional visit and name the authorized owner at each stage.",
  ],
  [
    "Kapag may rejected o denied claim, capture ang actual response, claim reference, at date of service. Huwag mag-assume ng cause o magpalit ng code para “pumasa.” I-route sa billing/coding team at track ang next step. Specific facts ang mas helpful kaysa “insurance problem.”",
    "Quote the stated response accurately in the authorized system and keep your interpretation separate.",
    "Draft two fictional handoffs: one missing identifier and one coverage decision for billing review.",
  ],
  [
    "Closed-loop referral means may follow-through beyond sending. Track receipt, scheduling, missing docs, at expected report. Kapag received ang report, clinical review pa rin ang next step. Hindi puwedeng sabihin na normal ang result dahil mukhang reassuring sa iyo.",
    "Separate “report received” from “reviewed by clinician” in your status tracking.",
    "Build a referral timeline with an unresolved step and named owner.",
  ],
  [
    "Refill request is not permission to prescribe. I-record ang required details at patient concern, then route to authorized staff. Kung dose change ang hinihingi, huwag ikaw ang mag-edit ng instructions. Explain the approved next step without guaranteeing approval or inventing a response time.",
    "Preserve medication names as verified; clarify anything you cannot confirm.",
    "Practice a refill message that includes a dose question but gives no medication advice.",
  ],
  [
    "Scribing needs role-specific training and clinician review. SOAP means subjective, objective, assessment, plan; hindi ito template para mag-invent ng missing findings. Kung unclear ang dictation, flag and clarify. Hindi okay ang “normal exam” na default kung hindi stated sa encounter.",
    "Keep source information, unclear content, and clinician approval distinct.",
    "Mark the missing facts in a fictional transcript instead of filling them with guesses.",
  ],
  [
    "Sa complaint, acknowledge the impact, summarize the concern, at explain the action you can take. Huwag makipag-argue, mag-blame, o mag-promise ng refund/callback na hindi authorized. Document factual statements and route sa proper owner. Follow workplace policy for threats or abusive behavior.",
    "Use a calm acknowledgment followed by one concrete, authorized action.",
    "Record your response to a delayed form request, then remove every unsupported promise.",
  ],
  [
    "Patient message should be clear, accurate, at may one next step. Check destination, approved template, dates, time zones, attachments, at relevant details. Kung missing ang medical preparation instructions, get the approved source. Huwag memory o instructions ng ibang procedure ang gamitin.",
    "Read the message as the patient: can they tell what to do next and how to get help?",
    "Rewrite a fictional reminder and complete a recipient/attachment/date check.",
  ],
  [
    "Phishing often uses urgency para mapabilis ka mag-click o magbigay ng code. Verify unusual requests using a known approved contact, hindi reply sa suspicious message. Huwag i-share ang passwords o one-time codes. Kung nag-click ka na, report promptly and follow security instructions.",
    "Know the real support contact before you need to verify an urgent “IT” message.",
    "Identify three warning signs in a fictional credential-request email.",
  ],
  [
    "Templates at AI can help, pero employer approval ang kailangan bago gumamit ng real patient data. Hindi sapat na remove first name; puwedeng identifiable pa rin. Check generated text against the source for wrong dates, invented facts, at omitted details. Human review at role boundaries stay in place.",
    "Use fictional examples for personal practice and verify every output before relying on it.",
    "Find an invented fact and wrong date in a practice AI-style summary.",
  ],
  [
    "Quality is more than bilis. Dapat accurate ang record, tama ang routing, at may follow-through. Ask the supervisor kung ano ang measures at definitions. Huwag mag-skip ng required notes para lang mataas ang call count. Small sample ng practice ay hindi proof ng clinic-wide performance.",
    "Pair a workload measure with a quality measure and state the limits of the sample.",
    "Review ten fictional notes for required fields and propose one small improvement.",
  ],
  [
    "Useful SOP explains trigger, inputs, steps, exceptions, owner, at what counts as done. Draft pa lang ito hanggang approved ng responsible owner. Huwag mag-invent ng clinical decision rules. Keep version and review date para hindi outdated copy ang masundan.",
    "Ask a practice partner to follow your draft without coaching; their confusion shows what to clarify.",
    "Write a fictional appointment-confirmation SOP with an exception path.",
  ],
  [
    "Portfolio should show how you think and verify, hindi fake work history. Gumamit ng fictional samples at label them clearly. Explain task, method, checks, at escalation. Sa interview, honest na sabihin kung saan ka may practice at saan kailangan mo pa ng supervised training.",
    "Choose a small number of strong samples you can explain confidently instead of many shallow files.",
    "Give a two-minute walkthrough of one fictional sample, including your limits.",
  ],
  [
    "Advanced shift means mixed tasks with accurate ownership. Hindi goal ang i-clear lahat by guessing. Score your practice based on facts, boundaries, routing, owner, at follow-up, then revise. Self-score lang ito for learning, hindi certification o guarantee na ready ka na sa live clinic.",
    "Have a practice partner check whether every handoff has an obvious next action.",
    "Produce the six task notes and explain why any unresolved item remains open.",
  ],
  [
    "Clients have different needs, kaya basahin ang actual role. May billing-focused jobs na require experience; hindi substitute ang course completion. I-match bawat requirement sa honest evidence at training gap. Ang current source examples ay sample lang, hindi universal rule o promise na open pa rin ang job.",
    "Create a role-fit table before applying; never call fictional practice paid clinic experience.",
    "Explain one strength and one gap using an actual role requirement.",
  ],
  [
    "Sa first week, learn muna ang clinic policies, tools, at escalation. Observe, practice sa training environment, then supervised tasks. Hindi dahil may login ka ay independent ka na. Ask the supervisor kung anong evidence at approval ang kailangan bago mag-work nang less supervision.",
    "Keep a question log with the approved answer and source, without real patient details in personal notes.",
    "Draft ten onboarding questions and a supervisor-review checkpoint.",
  ],
  [
    "Good client update answers: ano ang completed, ano ang pending, ano ang blocker, at anong decision ang kailangan. Use approved channel and cadence. Kapag time-sensitive ang issue, huwag hintayin ang daily summary bago mag-escalate. Honest status ang builds trust.",
    "Lead with the action or decision needed; keep background details only if they help.",
    "Write a six-line fictional update with two pending tasks and clear owners.",
  ],
  [
    "Proactive means napapansin mo ang next step, pero hindi ka nagcha-change ng policy o care decisions on your own. Verify the problem, propose a specific improvement, ask the right owner, at follow up on the approved action. Initiative needs judgment and boundaries.",
    "Bring a proposed next step with a verified problem, and say explicitly where approval is needed.",
    "Sort five fictional issues into authorized action, approval request, or escalation.",
  ],
  [
    "Kapag maraming providers, check lagi ang organization, provider, patient, at destination. Similar task does not mean same rules. Huwag gamitin ang ibang practice template o ilipat ang records across accounts. Conflicting priorities should go to the designated supervisor.",
    "Use a four-part context check before each update: practice, provider, patient, channel.",
    "Compare two fictional provider rules and identify which scheduling template applies.",
  ],
  [
    "Reliability includes early notice when may outage o absence. Agree sa backup contact at coverage process ahead of time. Sabihin kung ano ang unavailable at anong tasks ang kailangan ng coverage. Huwag personal account ang fallback para lang hindi ka mukhang offline.",
    "A good interruption notice includes the impact, notification already made, and tasks needing coverage.",
    "Draft an outage handoff and a return-to-work reconciliation checklist.",
  ],
  [
    "Feedback is useful kung nagbabago ang next output. Clarify ang specific requirement, correct through approved process, then review another sample. Hindi sapat ang “noted” kung same omission pa rin. Ask for an approved example kapag unclear ang instruction.",
    "Turn a correction into one specific check you can repeat on the next task.",
    "Write a correction, prevention step, and evidence of improvement for a fictional error.",
  ],
  [
    "30–60–90 plan is a planning guide, hindi deadline na automatic competent ka na. Agree milestones with supervisor: skill, evidence, reviewer, at next step. Kung may gap pa after 90 days, say so and continue supervised practice. Honest progress is better than claiming independence without evidence.",
    "Measure milestones through reviewed work samples and follow-through, not just elapsed days.",
    "Build three milestones and include when you must pause and ask for help.",
  ],
];
function applyMentorNotes(allLessons) {
  if (allLessons.length !== mentorNotes.length)
    throw Error("Every lesson needs its own mentor notes");
  allLessons.forEach((l, i) => {
    const [explanation, tip, drill] = mentorNotes[i];
    l.taglish = explanation;
    l.proTip = tip;
    l.mentorDrill = drill;
    l.body = `<section class="mentor-coach" id="taglish" aria-label="Taglish explanation">
<h2>Taglish explanation</h2>
<p lang="fil">${explanation}</p>
</section>${l.body}<section class="mentor-tip" id="proTips">
<h2>Pro tip</h2>
<p>${tip}</p>
<h3>Mentor practice</h3>
<p>${drill}</p>
<p class="small">Use Taglish to understand the lesson. Practice patient-facing scripts in the language required by your client; arrange approved language support when needed.</p>
</section>`;
    l.whyTaglish = "Balikan ang explanation: " + explanation;
  });
}
