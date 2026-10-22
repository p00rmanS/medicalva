// "What to remember" takeaways for the original 54 lessons, indexed by lesson id.
const rememberNotes = [
  [
    "You support the practice with administrative work. You never diagnose, interpret results, or change medication.",
    "When a question is clinical, record it accurately and route it to authorized staff.",
  ],
  [
    "A name connected to a medical visit is PHI. Verify identity and authorization before you disclose anything.",
    "Use only approved devices and channels, and report a wrong-recipient message at once.",
  ],
  [
    "Never guess an abbreviation. Keep the original wording and confirm it in an approved source.",
    "Eligibility, authorization, and payment are three different things.",
  ],
  [
    "A free slot is not enough: patient, visit type, provider, duration, date, time zone, and format must all be right.",
    "Always finish with a read-back of the details.",
  ],
  [
    "Listen first, verify identity, then record the request and the next owner.",
    "Never promise a callback time that nobody has confirmed.",
  ],
  [
    "Verify the record before you edit it, and never alter a signed note.",
    "A sent referral is only one step. Track receipt, missing items, and the next action.",
  ],
  [
    "Active coverage does not guarantee payment for a particular service.",
    "Document the source and reference number of every verification.",
  ],
  [
    "Label portfolio samples as fictional training work and show how you verified and escalated.",
    "Never present finished lessons as employment experience or certification.",
  ],
  [
    "Use only employer-approved tools in a private, secured workspace.",
    "Lock your screen every time you step away.",
  ],
  [
    "Collect only what the practice's intake process requires, using the approved channel.",
    "Mark missing items as missing instead of filling them in yourself.",
  ],
  [
    "Test the join steps before the patient needs them, and give one clear instruction at a time.",
    "Route technical failures to the access owner rather than changing the visit format yourself.",
  ],
  [
    "Triage every item to an owner, a status, and a next action.",
    "A task is not closed until the outcome is confirmed.",
  ],
  [
    "Check that the requester is authorized before routing any records request.",
    "Send only the minimum necessary, through the approved process.",
  ],
  [
    "Short sentences, plain words, and one clear next step.",
    "Offer approved language or accessibility support when it is needed.",
  ],
  [
    "Review your own work before handoff and report a mistake early.",
    "Describe what happened, what you did, and what is still open. Skip the excuses.",
  ],
  [
    "A full shift is many small handoffs. Document each one as you go.",
    "Accuracy comes before speed.",
  ],
  [
    "Cancelled slots need a documented, fair process for offering them to waitlisted patients.",
    "Update every system the change touches.",
  ],
  [
    "Always write the time zone in a scheduling message.",
    "Check daylight-saving differences before confirming across regions.",
  ],
  [
    "A prior authorization approval is not a payment guarantee.",
    "Track the submission date, reference number, status, and the next follow-up.",
  ],
  [
    "The revenue cycle runs from scheduling to payment. Errors at the front end become denials at the back end.",
    "Know which step you own and who owns the next one.",
  ],
  [
    "Gather facts and sources. Leave coverage decisions to the billing team.",
    "Separate verified information from open questions.",
  ],
  [
    "Closing the loop means confirming that the receiving office got the referral and the visit happened.",
    "Keep a referral open until the documented outcome arrives.",
  ],
  [
    "Refill requests are routed, not approved by you.",
    "Capture the medication, pharmacy, and patient details exactly as given.",
  ],
  [
    "Scribe support is accurate transcription of what was said. Add nothing of your own.",
    "Flag unclear audio instead of guessing.",
  ],
  [
    "Acknowledge the concern, state what you can do, and follow the complaint procedure.",
    "Never argue, blame, or promise an outcome.",
  ],
  [
    "Lead with the action the patient must take, then give the date and the contact.",
    "Leave sensitive details out of unsecured channels.",
  ],
  [
    "Urgency and unusual requests are warning signs of phishing.",
    "Verify through a known channel and report it. Do not click.",
  ],
  [
    "AI and templates draft. You verify every fact and remove unsafe or invented details.",
    "Never paste PHI into a tool your employer has not approved.",
  ],
  [
    "Measure quality by accuracy and completed follow-through, not by speed alone.",
    "Track errors so you can fix their cause.",
  ],
  [
    "A good procedure lets a stranger do the task correctly.",
    "A handoff names the status, the owner, and the next step.",
  ],
  [
    "Show evidence: labeled fictional samples, a clear process, and honest limits.",
    "Tailor your application to the role you want.",
  ],
  [
    "Treat the practice shift as a test of habits: verify, document, escalate, follow up.",
    "Review your decisions, not just your results.",
  ],
  [
    "Clients want reliability, clear updates, and respect for their rules.",
    "Ask what “done” looks like for each task.",
  ],
  [
    "Agree on tools, hours, escalation, and first-week goals in writing.",
    "Ask early about anything unclear.",
  ],
  [
    "Status updates say what is done, what is blocked, and what you need.",
    "Keep them short and regular.",
  ],
  [
    "Be proactive inside your authority and ask before stepping beyond it.",
    "Flag a risk with a proposed next step.",
  ],
  [
    "Each provider may have different preferences, so keep them documented.",
    "Never apply one provider's rules to another without confirming.",
  ],
  [
    "Plan for outages and absences with backups and clear coverage notes.",
    "Reconcile any work done offline once systems return.",
  ],
  [
    "Turn each correction into one check you repeat.",
    "Ask for an approved example when instructions are unclear.",
  ],
  [
    "Milestones need evidence and a reviewer.",
    "Elapsed days do not prove competence.",
  ],
  [
    "Treat the whole journey as a chain of owners, each with completion evidence.",
    "A booked visit does not mean preparation is complete.",
  ],
  [
    "Who is asking and what they are authorized to receive decide every disclosure.",
    "When identity is unclear, pause and escalate.",
  ],
  [
    "Stay calm, acknowledge, verify, act within your role, and document.",
    "Never promise what you cannot confirm.",
  ],
  [
    "Troubleshoot in order: device, connection, link, then escalate to the access owner.",
    "Never put the patient's care at risk by improvising a clinical workaround.",
  ],
  [
    "A stalled referral needs an owner, a next date, and a documented attempt each time.",
    "Escalate when the delay could affect care.",
  ],
  [
    "When two sources of coverage conflict, record both and escalate to billing.",
    "Do not choose the one that looks right.",
  ],
  [
    "During downtime, use the approved paper process and reconcile later.",
    "Reconciliation means every offline item reaches the system of record.",
  ],
  [
    "Evidence beats confidence. Every output needs a source and an owner.",
    "Label your learning gaps honestly.",
  ],
  [
    "A matching name is a search clue, not proof. Check every required identifier.",
    "Never merge, overwrite, or correct identity data without authority.",
  ],
  [
    "Result messages follow the practice's release rules, not your interpretation.",
    "Never explain what a result means.",
  ],
  [
    "When the plan changes, update every party and every system, and confirm each one.",
    "Document the reason and the new owner.",
  ],
  [
    "A good tracker has one row per item, a clear owner, a status list, and no PHI beyond what is needed.",
    "Protect it with access limits and review it regularly.",
  ],
  [
    "If an account may be compromised, stop, report immediately, and follow the incident procedure.",
    "Do not try to investigate or hide it yourself.",
  ],
  [
    "Turn a vague request into a written workflow with owner, steps, checks, and escalation.",
    "Get it reviewed before you rely on it.",
  ],
];
