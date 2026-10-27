// Wrong answers for the practice checks, keyed by lesson id. Each pair is written to look
// as plausible and as long as the correct answer, so length and wording are not clues.
const distractors = {
  0: [
    "Tell the patient the usual rule of thumb for missed doses and note it",
    "Check the medication label online and share what it says with them",
  ],
  1: [
    "Ask the caller to confirm the patient's date of birth, then read the results to them",
    "Offer to send the results to the spouse's email address if they give a reason",
  ],
  2: [
    "Replace it with the most common expansion so the message is clear",
    "Ask the patient what they think it means and write that in instead",
  ],
  3: [
    "Whether the patient prefers morning times in general",
    "Only that the patient said yes to the visit",
  ],
  4: [
    "“I'm sorry about the wait. I'll make sure the doctor calls you back within the hour.”",
    "“That is the normal wait time for messages, so there is nothing more I can do for now.”",
  ],
  5: [
    "Open both charts and pick the one with the most recent activity",
    "Add a note to both charts so the team can sort it out later",
  ],
  6: [
    "Yes; active coverage means the plan will pay for the visit in full",
    "Yes; coverage is active, so any copay is the patient's only cost",
  ],
  7: [
    "As supervised clinic work you completed during the course",
    "As a verified credential earned by completing every lesson",
  ],
  8: [
    "Ask the coworker to stay logged in so you can work beside them",
    "Use a shared team account until your own access is restored",
  ],
  9: [
    "Update the list to match what the patient says and note the change",
    "Tell the patient the list is probably right because it came from the chart",
  ],
  10: [
    "Yes, if the patient agrees, since the visit time is already set",
    "No; reschedule the visit and tell the patient to wait for a call",
  ],
  11: [
    "Complete, because you sent the request to the right person",
    "Closed, since forwarding it was your assigned step",
  ],
  12: [
    "Tell the patient to request it from the hospital instead",
    "Email the visit summary to the patient after confirming their name",
  ],
  13: [
    "Send the instructions again in writing, mark the patient as informed, and move to the next task",
    "Offer to reschedule the visit for a time when a family member or friend can assist them",
  ],
  14: [
    "Send a correction message to the recipient asking them to ignore it",
    "Wait until the end of the day to see whether the recipient replies",
  ],
  15: [
    "The question is pending and will be resolved first thing tomorrow",
    "The question was forwarded earlier and is not expected to need more attention",
  ],
  16: [
    "Book the shorter slot and ask the provider to see the patient faster",
    "Split the visit across two openings on the same day",
  ],
  17: [
    "Use the time difference you used last week for the same location",
    "Ask the patient which time zone they believe applies",
  ],
  18: [
    "Write a short summary from the patient's last visit note to send",
    "Use wording from an approved sample letter and fill in the diagnosis",
  ],
  19: [
    "Adjust the charge yourself when the patient has a reasonable explanation",
    "Tell the patient to dispute it with the insurance company first",
  ],
  20: [
    "Resend the claim with the diagnosis the response suggests",
    "Call the payer and ask which code would be accepted",
  ],
  21: [
    "Yes, as long as the report does not mention any follow-up",
    "Only if the patient asks directly and you read the wording to them",
  ],
  22: [
    "Pass it to the pharmacy as a note and mention the new dose",
    "Tell the patient you will update the dose once the refill is ready",
  ],
  23: [
    "Yes, if the prior visit documented a normal exam for that area",
    "Leave the exam blank and let the transcript go out as it is",
  ],
  24: [
    "Offer to try for five minutes and promise to call back yourself once you have checked",
    "Transfer the call to a clinician without telling the caller why you are transferring it",
  ],
  25: [
    "Use the standard instructions the practice sends for most procedures",
    "Ask the patient what they were told at the last procedure",
  ],
  26: [
    "Reply to the email and ask IT to confirm who they are before sending anything",
    "Send the code to be safe, and then change your password right afterward",
  ],
  27: [
    "Yes, if the tool states that it does not store or reuse any information you enter",
    "Yes, if you first remove the date of birth and the address from the chart text",
  ],
  28: [
    "Yes, if the skipped documentation is added later in one batch at the end of the shift",
    "Yes, as long as the urgent calls are fully documented and the rest follows later",
  ],
  29: [
    "After two coworkers say they have read it and agree",
    "Once you have tested it on a few tasks without problems",
  ],
  30: [
    "Describe your training as work experience in a clinic-like setting",
    "Apply without mentioning the requirement and explain it if asked",
  ],
  31: [
    "Lists everything completed and notes the open item last",
    "Says you will finish the open item first thing next shift",
  ],
  32: [
    "Say your training covered billing and that you learn quickly",
    "Explain that you are comfortable doing every task after a short intro",
  ],
  33: [
    "Yes, after passing the final workshop with a correct answer",
    "Yes, if the employer gave you access to the system",
  ],
  34: [
    "Send a message to the team now, then keep working on your tasks until the update time",
    "Mention it first in your regular update so that it is not missed by the client",
  ],
  35: [
    "Adjust your own steps to avoid the delay without telling anyone",
    "Share the problem with coworkers and wait to see if they agree",
  ],
  36: [
    "Edit the contact details and send it if the rest is correct",
    "Ask the other practice for permission to reuse their template",
  ],
  37: [
    "Reconnect as soon as you can and catch up on tasks quietly",
    "Ask a coworker to finish your open tasks from their own account",
  ],
  38: [
    "Add a note to each entry explaining why the item was missing",
    "Ask for the supervisor's example and copy it for the next case",
  ],
  39: [
    "Ask the supervisor to sign you off since the plan is complete",
    "Work on that task only when others are available to check",
  ],
  40: [
    "Preparation completed; only the referral outcome remains open",
    "Booking pending; all tasks wait until the form is received",
  ],
  41: [
    "Send a summary of the report and hold back the details",
    "Send the report to the number the patient last used with the clinic",
  ],
  42: [
    "No callback was made; the clinic did not contact the patient at any point",
    "Callback was made; the patient has probably forgotten the call by now",
  ],
  43: [
    "Switch to a phone call from your own number if the patient agrees",
    "Reschedule the visit for the next day without telling the provider",
  ],
  44: [
    "Referral sent and presumed received by the specialist office",
    "Referral in progress; scheduling expected within a few days",
  ],
  45: [
    "Use the most recent source and note that the older one was replaced",
    "Choose the source with more detail and save a copy of the other",
  ],
  46: [
    "Check the schedule and rebook the patient if no entry appears",
    "Ask the patient whether they received a confirmation message",
  ],
  47: [
    "Add a note saying the outputs are examples that still need approval before they are used",
    "Remove the callback promise from the draft and keep the disclosure exactly as written",
  ],
  48: [
    "Use the chart with the matching name and birth month and flag the other",
    "Ask the caller which chart is theirs and select that one",
  ],
  49: [
    "Yes, once the forwarded message shows as delivered in the messaging system you use",
    "Yes, if no one has objected to the forwarded report within one business day",
  ],
  50: [
    "Switch the visit type to video and note that the patient requested the change",
    "Offer the patient both options and let them choose the one that works best for them",
  ],
  51: [
    "Keep the row with the later date and remove the other so the total looks consistent",
    "Count them once and add a note saying that one of the rows looked like a duplicate",
  ],
  52: [
    "Share it only after replying to the email to confirm the sender's name and role",
    "Share it as asked, then report the message to IT afterward as a precaution",
  ],
  53: [
    "Use it for a few messages and ask patients for feedback before you make it standard",
    "Ask a coworker to read it and send it to patients if they agree that it looks fine",
  ],
  54: [
    "Code pneumonia now so the claim can go out today, and send a query afterward if it is rejected",
    "Code a general respiratory diagnosis that seems to fit and submit the claim before the deadline",
  ],
  55: [
    "Compare the payer's covered diagnosis list and change the claim to a diagnosis that appears on it",
    "Resubmit the claim unchanged with a note asking the payer to take another look at the denial",
  ],
  56: [
    "It is a diagnosis meaning cancer of the breast tissue on the left side",
    "It is a procedure meaning repair of the breast tissue on the left side",
  ],
  57: [
    "Chapter 9, because chest pain is most often related to the heart",
    "Chapter 19, because chest pain is usually the result of an injury",
  ],
  58: [
    "Use the code set in effect on the date the claim is finally submitted to the payer",
    "The old book is acceptable until the practice finishes its yearly update of the system",
  ],
  59: [
    "Code pneumonia as a possible diagnosis with the cough as secondary",
    "Code both the symptom and pneumonia and let the payer decide",
  ],
  60: [
    "Report only the condition that is more serious and ignore the other",
    "Both can be reported because this is treated as an Excludes2 note",
  ],
  61: [
    "Choose a more specific back pain code that matches the usual cause of this type of pain",
    "Use a specific code from the same category and add a note explaining why you chose it",
  ],
  62: [
    "Diabetes with a note that it is suspected, since the A1c was ordered",
    "Prediabetes, because that is the closest confirmed condition",
  ],
  63: [
    "Report I10 for the hypertension and the CKD stage code as two separate diagnoses, because no link is stated in the note",
    "Report only the CKD stage code because it is the more serious condition and the note gives no link between the two",
  ],
  64: [
    "Z00.00 for the routine exam, with the abnormal result as the first-listed code",
    "Z00.01 alone, because the finding is already included in that code",
  ],
  65: [
    "It means the code was revised in the current edition of the book",
    "It means the code is exempt from the multiple procedure reduction",
  ],
  66: [
    "Low, because the average of the three elements is low",
    "Minimal, because the lowest element sets the level for the visit",
  ],
  67: [
    "Yes, because ordering and reviewing a test always counts toward the data element of the visit",
    "Yes, but only if the provider documents that they reviewed the result in the note",
  ],
  68: [
    "Add it and attach the note so the payer can decide whether the modifier applies to the claim",
    "Add modifier 59 instead, since it also shows the two services were separate that day",
  ],
  69: [
    "The visit is billable, but the code should include modifier 24 to show a post-operative visit",
    "The visit is billable only if the surgeon performed a wound check at that appointment",
  ],
  72: [
    "The E/M code with modifier 25 and place of service 11 for an office visit",
    "The E/M code with modifier 59 and place of service 11 for an office visit",
  ],
  73: [
    "It will pay at a reduced rate until a diagnosis is added by the billing team",
    "It will pay normally because the payer will assign the first diagnosis on the claim",
  ],
  74: [
    "Choose the closest covered diagnosis from the encounter documentation and submit the claim so it can be paid",
    "Submit the claim as it is and wait for the payer to begin a medical necessity review of the service",
  ],
  76: [
    "Medicaid, because it covers the patient's basic costs first",
    "Whichever plan the patient says they prefer to use",
  ],
  77: [
    "Appeal the rejection with the payer and attach the card",
    "Resubmit the same claim in case the payer's system was down",
  ],
  78: [
    "The patient, since the amount was above the allowed charge",
    "The secondary insurance, which should cover any contractual amount",
  ],
  79: [
    "File a first-level appeal with the corrected ID attached",
    "Wait for the payer to correct the ID from its eligibility file",
  ],
  80: [
    "Total charges ÷ total A/R for the same period",
    "Average daily payments ÷ total A/R",
  ],
  81: [
    "Correct the modifier on all new claims going forward and note the change in the billing log for review",
    "Rebill the old claims without the modifier so that the record is accurate from this point forward",
  ],
  82: [
    "Yes, if the condition was coded in the prior calendar year and is still on the problem list",
    "Yes, if the provider updated the problem list during the current year and it lists the condition",
  ],
  84: [
    "Accept the code if the encoder shows a high confidence rating",
    "Use the suggestion and add a comment that the encoder recommended it",
  ],
  85: [
    "Accept for now and delete the screenshots after you code them",
    "Accept only if the chat uses a messaging app with encryption",
  ],
  86: [
    "CCS, for hospital inpatient and outpatient facility coding",
    "CRC, for risk adjustment coding of outpatient claims",
  ],
  87: [
    "Accept the work and tell them it may take longer than usual while you learn the details",
    "Accept the work and ask a more experienced friend to check it before you send anything",
  ],
  88: [
    "Memorize the modifier list in order and retake the same questions until you score well",
    "Read through the whole CPT section guidelines once more from the beginning to the end",
  ],
  89: [
    "Apply for roles and mention your score as an area you are working to improve on",
    "Retake the audit with the same charts until the accuracy rises above the target",
  ],
  90: [
    "Bill an inpatient consultation code with a note that Medicare is the payer for the claim",
    "Bill a subsequent hospital care code because the patient had already been admitted that day",
  ],
  92: [
    "The fracture code with 7th character S for the healing stage",
    "A Z code for encounter for aftercare following injury",
  ],
  95: [
    "(Base units × time units) + modifying units, then multiplied by the conversion factor",
    "Base units + (time units × conversion factor), with modifying units added at the end",
  ],
  96: [
    "Code the procedure with the higher relative value and add a note",
    "Code from the heading and use the narrative only to check the side",
  ],
  98: [
    "Enter the most recent value you can find in the chart, even if it is from a previous year",
    "Mark the gap as closed and note in the record that the patient declined the testing",
  ],
  99: [
    "Redo the whole set immediately to lock in the correct answers",
    "Take a different practice set and see if the pattern continues",
  ],
  100: [
    "Place of service and facility versus non-facility payment",
    "Quality reporting: Category II codes, MIPS, and HEDIS",
  ],
  101: [
    "Ask the provider to add an addendum that makes the claim payable",
    "Make the change and keep a record of who asked you to do it",
  ],
  102: [
    "Say you have two years of experience, counting all the time you spent studying and practicing",
    "Describe the course hours as coding experience, since they used real code sets and charts",
  ],
  103: [
    "Yes, the plan confirmed the benefits, so the patient can count on coverage for the whole visit and any tests",
    "The plan shows active coverage, so there should be no surprise bill after the visit",
  ],
  104: [
    "Log in with their password only for this one task and delete the password right afterward",
    "Attest for them, since you prepared every answer in the profile and they trust your work",
  ],
  105: [
    "Offer a discount you have seen the practice apply to similar balances in the past",
    "Tell the caller that waivers are only available through the insurance company directly",
  ],
  106: [
    "Choose the drug that matches the patient's active medication list and note that the lists match",
    "Ask the pharmacy which of the two drugs the patient usually fills and use that for the request",
  ],
  107: ['=COUNTA(D2:D200,"Open")', '=SUMIF(D2:D200,"Open")'],
  108: [
    "Keep it on the list and handle it during the next quiet moment",
    "Move it to the top of the list and drop smaller tasks that day",
  ],
  109: [
    "The polyp code, then Z12.11 for the screening",
    "Only the polyp code, since the screening ended once it was found",
  ],
  113: [
    "Assign type 1 (E10.-) because the patient takes insulin",
    "Assign E11.- only and leave out the insulin status code",
  ],
  116: [
    "Code only the documented symptoms until the diagnosis is confirmed",
    "Leave it out because the diagnosis was not confirmed by testing",
  ],
  117: [
    "A list of clinical indicators with dates and values from the record",
    "A multiple-choice option that says unable to determine",
  ],
  120: [
    "Say it looks within the usual range and tell them the provider will confirm it soon",
    "Read the reference range to the patient so they can compare their number to it",
  ],
  121: [
    "Use it only to open the page they need and then log out",
    "Ask them to change it afterward so the password is no longer valid",
  ],
  122: [
    "Ask the recipient to delete it and tell your supervisor later",
    "Send the correct message first and mention the error afterward",
  ],
  126: [
    "Without contrast, since the first scan was taken that way",
    "With contrast only, since the second scan was the diagnostic one",
  ],
  129: [
    "Billed charge × the allowed percentage for the payer's plan and locality",
    "Base units × time units × conversion factor for the locality",
  ],
  130: [
    "Memorize the full list of laterality codes and review them nightly",
    "Review the chapter guidelines once and retake the whole set",
  ],
  131: [
    "Retake the whole exam the same day to confirm your score",
    "Review only the questions you were unsure about",
  ],
  132: [
    "It uses a message that is too long for a text reminder",
    "It lacks the provider's name and the clinic address",
  ],
  133: [
    "Add the card to the chart and update the record after the visit",
    "Verify eligibility with the old plan and ask the patient about the change",
  ],
  134: [
    "Let the child interpret and have an adult confirm the key points",
    "Use the child for the intake questions and an interpreter for the rest",
  ],
  135: [
    "It names a record made by an instrument",
    "It names an inflammation of a structure",
  ],
  136: [
    "Looking into the airways with a flexible scope",
    "Measuring how much air the lungs can hold",
  ],
  138: ["A surgical removal of an organ", "An enlargement of a structure"],
  143: [
    "Work every denial in the order it arrived",
    "Write off the smallest denials to clear the queue",
  ],
  144: [
    "Training and education for all staff",
    "Internal monitoring and auditing of claims",
  ],
  146: [
    "Yes; every disclosure needs a signed authorization before it is sent",
    "Only if the specialist is outside the practice's own state",
  ],
  147: [
    "It is optional and can be skipped without keeping any record",
    "It applies only to large hospitals and not to small practices or vendors",
  ],
};
