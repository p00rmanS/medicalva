const clientLessons = [
  {
    title: "Understand what clients expect today",
    desc: "Match your training to a real role instead of promising every skill.",
    steps: [
      "Read the specific job description and separate required experience from skills the employer will train. Current examples include scheduling, communication, EHR work, and billing support; this is a small sample, not a survey of all employers.",
      "Turn each requested duty into an evidence question: Can I demonstrate it? Have I only practiced it? Does it need more training or permission?",
      "Confirm the exact tools, working hours, supervision, and success measures with the employer. A billing-focused role may require experience that this hub cannot replace.",
    ],
    example:
      "“I have practiced scheduling and referral tracking with fictional records. I would need onboarding in your EHR and additional supervised billing training.”",
    drill:
      "Create a three-column role-fit table: requested skill, honest evidence, and training gap. Use the source links below and do not treat an example posting as a guaranteed opening.",
    scenario:
      "A posting requires prior medical billing experience you do not have. What should you say?",
    answers: [
      "Claim your lesson completion is billing experience",
      "Describe your actual practice and experience, and identify the gap",
      "Say you can perform every task without onboarding",
    ],
    correct: 1,
    why: "A strong candidate matches claims to evidence and recognizes when a role needs additional experience.",
    sources:
      '<p>Examples reviewed October 5, 2026: <a href="https://jobs.lever.co/assist-world/25527c6b-e3ef-42b6-82ff-17c78500150e" target="_blank" rel="noopener">Assist World scheduling and billing role</a> · <a href="https://info.medva.com/virtual-medical-administrative-assistant/" target="_blank" rel="noopener">MEDVA administrative services</a>. Availability and requirements can change.</p>',
  },
  {
    title: "Build a clear first-week onboarding plan",
    desc: "Learn the practice before trying to work independently.",
    steps: [
      "Ask for your supervisor, assigned duties, approved accounts, escalation rules, and training materials. Confirm working hours using named time zones.",
      "Observe an authorized trainer, practice in the provided training environment, then perform assigned work under supervision. Keep a learning checklist in the approved location.",
      "Ask the supervisor to review representative work before reducing supervision. Never give yourself access or assume passing a quiz authorizes live tasks.",
    ],
    example:
      "Day 1: access and policies. Days 2–3: observe and practice. Days 4–5: supervised tasks and feedback. The employer adjusts the pace and approval requirements.",
    drill:
      "Draft a first-week agenda and ten specific onboarding questions. Include “Who approves my work before I do this independently?”",
    scenario:
      "You completed this course and receive EHR access. Are you automatically ready for independent work?",
    answers: [
      "Yes, access is the same as competency approval",
      "No; follow employer onboarding, permissions, and supervised review",
      "Yes, if you work quickly",
    ],
    correct: 1,
    why: "Access permits specified actions; training and supervisor review establish readiness for the assigned workflow.",
  },
  {
    title: "Give concise client status updates",
    desc: "Make completed work, blockers, and next steps easy to see.",
    steps: [
      "Use the client’s approved channel and requested reporting frequency. Do not add patient-level details to a general status report unnecessarily.",
      "Organize the update into completed work, pending work, blockers, and decisions needed. Name the owner and next action for open items.",
      "Escalate time-sensitive issues through the designated process instead of waiting for the routine summary. Report progress accurately, including mistakes or delays.",
    ],
    example:
      "“Completed: reviewed assigned training bookings. Pending: two referral packets awaiting authorized documents. Blocker: portal access unavailable; support notified. Decision needed: confirm the approved follow-up owner.”",
    drill:
      "Write a six-line fictional end-of-shift update. Remove filler, unverified timelines, and any claim that pending work is complete.",
    scenario:
      "A time-sensitive issue appears an hour before your regular update. What should you do?",
    answers: [
      "Wait to keep the report tidy",
      "Use the approved escalation process now, then include its status in the update",
      "Make a clinical decision yourself",
    ],
    correct: 1,
    why: "Routine reporting does not replace timely escalation through the practice’s designated process.",
  },
  {
    title: "Be proactive within your authority",
    desc: "Spot the next step without making unauthorized decisions.",
    steps: [
      "Notice recurring administrative obstacles: missing documents, unassigned requests, or unclear instructions. Verify the facts before raising them.",
      "Offer a specific proposed next action and identify who needs to approve it. Distinguish an administrative follow-up you may do from a change to policy or care.",
      "Track whether the approved action happened and whether the obstacle improved. Do not promise outcomes outside your control.",
    ],
    example:
      "“Three training referrals lack the same required field. May I draft a checklist update for the referral owner to review?”",
    drill:
      "For five fictional problems, label your response “act under existing authority,” “ask for approval,” or “escalate.” Explain the boundary for each.",
    scenario: "You think a clinic policy causes delays. What is constructive?",
    answers: [
      "Change the policy quietly",
      "Present the observed issue and a draft improvement to the responsible owner",
      "Ignore every repeated problem",
    ],
    correct: 1,
    why: "Useful initiative makes a verified problem and proposed solution visible while preserving authorized decision-making.",
  },
  {
    title: "Work across multiple providers",
    desc: "Keep schedules, accounts, and handoffs from getting mixed up.",
    steps: [
      "Confirm each provider’s approved scheduling rules and who owns their requests. If you support separate practices, follow each organization’s information-handling rules.",
      "Check the active organization, provider, patient, and destination before every update. Use approved labels and workflows; never move records between unrelated accounts.",
      "Maintain clear task ownership and coverage handoffs. Resolve conflicting priorities with the designated supervisor instead of double-booking time or hiding delays.",
    ],
    example:
      "Provider A permits one visit type that Provider B does not. Reuse the verification habit, not a rule that belongs to another provider.",
    drill:
      "Make two fictional provider rule sheets and sort six scheduling requests. Add a final check for organization, provider, patient, and channel.",
    scenario:
      "A saved template contains another practice’s contact details. What should you do?",
    answers: [
      "Send it because it is mostly correct",
      "Verify and use the approved template for the correct practice",
      "Combine the practices’ records",
    ],
    correct: 1,
    why: "Templates must match the correct organization and workflow. Similar tasks do not justify mixing practice information.",
  },
  {
    title: "Stay reliable through outages and absences",
    desc: "Give early notice and follow an approved continuity plan.",
    steps: [
      "Agree on working hours, absence notice, a backup contact route, and the employer’s downtime procedure before an interruption occurs.",
      "When work is interrupted, notify the designated contact promptly through the approved route. State what is unavailable and what tasks need coverage.",
      "Use only approved fallback systems. Provide an accurate handoff, then reconcile authorized downtime records when systems return under the practice procedure.",
    ],
    example:
      "“My approved connection is unavailable. I notified support and the shift lead. These assigned tasks need coverage; I will update through the agreed contact route.”",
    drill:
      "Draft an outage message, an absence handoff, and a return-to-work reconciliation checklist with fictional tasks. Do not include real credentials.",
    scenario: "Your connection fails during a shift. What builds trust?",
    answers: [
      "Stay silent until you return",
      "Notify the designated contact and activate the approved coverage process",
      "Move patient tasks to your personal account",
    ],
    correct: 1,
    why: "Early, factual notice and an authorized handoff let the team arrange coverage without exposing patient information.",
  },
  {
    title: "Turn feedback into better work",
    desc: "Use corrections to improve the next task.",
    steps: [
      "Listen for the specific requirement you missed. Ask for the approved example or policy when the feedback is unclear.",
      "Correct the work through the authorized process. Explain what you verified and what remains uncertain.",
      "Identify the repeated cause and add an approved reminder or checklist. Ask for a follow-up review of another sample rather than assuming the problem is solved.",
    ],
    example:
      "“I missed the time zone in that confirmation. I will correct it using the approved process and add a date/time/zone check to my draft checklist for review.”",
    drill:
      "Review three fictional corrections: incomplete note, wrong visit type, and delayed handoff. Write the correction, prevention step, and evidence you would use to show improvement.",
    scenario:
      "A supervisor points out a repeated documentation omission. What is a useful response?",
    answers: [
      "Explain why documentation is unimportant",
      "Clarify the requirement, correct the work, and review the next sample",
      "Hide the next note from review",
    ],
    correct: 1,
    why: "Improvement is demonstrated in subsequent work, not only promised in a reply.",
  },
  {
    title: "Build a 30–60–90 day development plan",
    desc: "Choose milestones with your supervisor and collect honest evidence.",
    steps: [
      "In the first phase, learn policies and practice assigned workflows with supervision. Use employer-agreed measures rather than invented performance targets.",
      "In the next phase, demonstrate accurate execution and dependable follow-up on approved duties. Keep a training record in the approved system.",
      "In the final phase, propose one reviewed improvement and request feedback on remaining gaps. The dates are planning prompts, not automatic deadlines for competence or promotion.",
    ],
    example:
      "Goal: improve appointment confirmations. Evidence: supervisor-reviewed samples include the required details. Gap: unfamiliar visit types still need clarification. Next step: approved training and another review.",
    drill:
      "Create three milestones with a skill, evidence, reviewer, and next action. Include a stop condition: if the work is outside your training or authorization, ask for help.",
    scenario:
      "You reach day 90 but still need support with a task. What should you do?",
    answers: [
      "Claim independence because the date arrived",
      "Identify the gap and agree on further supervised practice",
      "Stop asking questions",
    ],
    correct: 1,
    why: "Readiness depends on demonstrated skill, authorization, and feedback—not a calendar date.",
  },
].map((l) => ({
  ...l,
  time: "25 min",
  body: `<h2>Your goal</h2>
<p>${l.desc}</p>
<h2>How to do it well</h2>
<ol>${l.steps.map((s) => `<li>${s}</li>`).join("")}</ol>
<h2>Client-ready example</h2>
<p>${l.example}</p>
<h2>Independent practice</h2>
<p>${l.drill}</p>
<h2>Mentor review</h2>
<p>Check your work for verified facts, clear next steps, the correct owner, and honest limits. Revise anything a supervisor would need to guess.</p>${l.sources || ""}`,
}));
