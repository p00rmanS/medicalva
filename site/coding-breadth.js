// Breadth lessons: telehealth, more ICD-10-CM chapters, laboratory CPT, anesthesia payment, facility billing.
addCodingLessons([
  {
    title: "Telehealth and virtual care coding",
    desc: "Place of service, modifiers 95 and 93, virtual check-ins, online messages, and remote monitoring, with the habit of checking current payer rules.",
    time: "50 min",
    objectives: [
      "Choose the place of service and modifier for a video or audio-only visit.",
      "Tell a virtual visit from a check-in, an online message, and remote monitoring.",
      "Document what a telehealth claim needs to survive an audit.",
    ],
    concept: `<p>Telehealth is billed with the same E/M and therapy codes as an in-person visit. What changes is the place of service, a modifier, and the payer's rules about who may bill, from where, and for which services. Those rules changed many times in recent years, so treat every statement here as a starting point and confirm the current policy with each payer.</p>
<p><strong>Place of service.</strong> POS 02 means telehealth provided somewhere other than the patient's home. POS 10 means telehealth provided in the patient's home. Medicare pays POS 10 at the non-facility rate and POS 02 at the facility rate.</p>
<p><strong>Modifiers.</strong> Modifier 95 shows a real-time audio and video service. Modifier 93 shows a real-time audio-only service. Medicare uses FQ for some audio-only behavioral health services. GT is an older audio-video modifier that a few payers still use. Some payers want no modifier at all and rely on the place of service, so the payer's own manual decides.</p>
<p><strong>Related services that are not a visit.</strong> A brief virtual check-in (G2012 for Medicare) is a short call or video to decide whether a visit is needed. A patient-initiated online message is reported with 99421, 99422, or 99423 by total time over seven days. Remote physiologic monitoring uses 99453 for setup, 99454 for the device supply, and 99457 and 99458 for management time. The old telephone E/M codes 99441 to 99443 were deleted, and CPT added a 98000 range for telemedicine E/M. Many payers, Medicare included, do not accept the 98000 codes and still want regular E/M codes with a modifier.</p>
<p><strong>Documentation.</strong> Record the patient's location, the provider's location, the technology used, that the patient agreed to a virtual visit, who took part, and the time or the decision making. A telehealth claim with a missing location is a common denial.</p>`,
    steps: [
      "Confirm the payer and whether it covers the service by telehealth.",
      "Check whether the visit was audio-video or audio-only.",
      "Find the patient's location to choose POS 02 or POS 10.",
      "Add the modifier the payer requires.",
      "Level the visit by decision making or time, as for an in-person visit.",
      "Confirm that the note records both locations and the technology.",
    ],
    lab: [
      [
        "Case 1. A commercial payer follows CPT conventions. A physician sees an established patient by live video for a hypertension follow-up. The patient is at home. The documented decision making is moderate.",
        "99214 with modifier 95 and place of service 10, with I10 as the diagnosis. If the payer wants POS 02 or a different modifier, follow its manual.",
      ],
      [
        "Case 2. A physician calls an established patient on the phone for a 12-minute medication check. No video is available. The payer accepts audio-only visits with modifier 93.",
        "Level the visit by time or by decision making. Twelve minutes of time supports only 99212. Report 99212-93 unless the decision making documented supports a higher level.",
      ],
      [
        "Case 3. A patient sends a portal message about a rash. The physician reviews the message and replies over several days, spending 8 minutes in total. The message does not relate to a visit in the past seven days.",
        "99421 (online digital evaluation, 5 to 10 minutes over seven days) with the diagnosis for the rash. Medicare often requires HCPCS equivalents, so check the payer.",
      ],
      [
        "Case 4. A patient with heart failure uses a blood pressure cuff and scale that send readings to the practice. In one month there are 20 days of readings, and the nurse spends 24 minutes reviewing the data and calling the patient. The device was set up and taught last month.",
        "99454 (device supply for a 30-day period with 16 or more days of data) and 99457 (first 20 minutes of management). The 24 minutes does not reach a second 20-minute block, so 99458 is not reported. Setup 99453 was billed last month. Confirm the payer's minimum days and time rules.",
      ],
      [
        "Case 5. A therapist provides 53 minutes of psychotherapy by live video to a patient at home. The payer follows CPT conventions.",
        "90837 with modifier 95 and place of service 10, with the mental health diagnosis, if the payer follows this convention.",
      ],
    ],
    case: "A telehealth visit with the patient at home is billed with place of service 11 and no modifier. The claim is denied as a service not covered in the office.",
    model:
      "Place of service 11 tells the payer the visit happened in the office. For a video visit with the patient at home, the claim needs POS 10 and, if the payer requires it, modifier 95. Correct the claim, attach the note showing both locations and the technology, and resubmit.",
    mistakes: [
      "Using POS 11 for a virtual visit.",
      "Billing a patient message as a full visit.",
      "Assuming a rule from last year still applies.",
      "Leaving the patient's location out of the note.",
    ],
    drills: [
      "List the POS and modifier for a video, an audio-only, and a message service.",
      "Find one payer's current telehealth policy and write its key limits.",
      "Add a one-line telehealth documentation check to your claim checklist.",
    ],
    rubric: [
      "Place of service matches the patient's location.",
      "Modifier follows the payer's convention.",
      "Check-ins, messages, and monitoring are not billed as visits.",
      "The note supports the claim.",
    ],
    scenario:
      "A payer follows CPT conventions. A physician provides a real-time audio-video visit to an established patient at home. Which pair applies?",
    answers: [
      "Modifier 95 with place of service 10",
      "Modifier 25 with place of service 11",
      "Modifier 59 with place of service 21",
    ],
    correct: 0,
    why: "Modifier 95 marks real-time audio-video telemedicine, and POS 10 marks telehealth when the patient is at home.",
    taglish:
      "Ang telehealth ay parehong E/M code lang din, pero iba ang place of service at modifier. POS 10 kung nasa bahay ang pasyente, POS 02 kung nasa ibang lugar. Modifier 95 para sa audio-video, 93 para sa audio-only. Ang check-in, online message, at remote monitoring ay hiwalay na codes at hindi basta-basta visit. Palaging i-check ang current na rules ng payer dahil madalas silang magbago, at ilagay sa note ang lokasyon ng pasyente at ng provider.",
    tip: "Keep a one-page table of each payer's telehealth POS and modifier rules and date it. Rules change often, and a dated table shows when you last checked.",
    mentor:
      "Ask your supervisor which two payers send the most telehealth denials and read those policies first.",
    remember: [
      "POS 10 is telehealth with the patient at home and POS 02 is elsewhere.",
      "Modifier 95 is audio-video and modifier 93 is audio-only, when the payer uses them.",
      "Check-ins, online messages, and remote monitoring have their own codes.",
    ],
  },
  {
    title: "ICD-10-CM pregnancy coding in depth (Chapter 15)",
    desc: "O codes, trimesters, weeks of gestation, normal delivery, gestational diabetes and hypertension, and when pregnancy is incidental.",
    time: "60 min",
    objectives: [
      "Apply the sequencing priority of Chapter 15 codes.",
      "Choose the trimester and the weeks-of-gestation code.",
      "Code a normal delivery and common complications of pregnancy.",
    ],
    concept: `<p>Chapter 15 (O00 to O9A) covers pregnancy, childbirth, and the postpartum period. These codes have sequencing priority over codes from other chapters. They are used only on the mother's record, never the baby's. If the provider documents that the pregnancy is incidental to the reason for the visit, use Z33.1 (pregnant state, incidental) instead and code the other condition first.</p>
<p><strong>Trimester.</strong> The first trimester is up to 14 weeks 0 days. The second runs from 14 weeks 0 days to less than 28 weeks 0 days. The third starts at 28 weeks 0 days and lasts until delivery. Choose it from the provider's documentation for the current encounter. Add a Z3A code for the weeks of gestation when the weeks are documented, for example Z3A.28.</p>
<p><strong>Routine supervision.</strong> Z34.- is for a normal pregnancy, such as Z34.03 for a normal first pregnancy in the third trimester. A high-risk pregnancy uses O09.-.</p>
<p><strong>Common conditions.</strong> Gestational diabetes is O24.4-, such as O24.410 when diet controlled and O24.414 when insulin controlled. Gestational hypertension without significant proteinuria is O13.-, and preexisting hypertension is O10.-. Mild hyperemesis gravidarum is O21.0.</p>
<p><strong>Delivery.</strong> O80 is an encounter for a full-term uncomplicated delivery. It is used only when no complication is present, and it is paired with Z37.0 for a single live birth. Routine postpartum care is Z39.2.</p>`,
    steps: [
      "Check whether the provider calls the pregnancy incidental.",
      "If not, start with a Chapter 15 code.",
      "Choose the trimester from the weeks documented.",
      "Add the Z3A weeks-of-gestation code.",
      "Add other conditions, with combination codes where they exist.",
      "For a delivery, check whether O80 fits before using complication codes.",
    ],
    lab: [
      [
        "Case 1. At 32 weeks, a patient has gestational hypertension with no significant proteinuria, documented at a prenatal visit.",
        "O13.3 (gestational hypertension without significant proteinuria, third trimester) and Z3A.32.",
      ],
      [
        "Case 2. At 29 weeks, a patient has gestational diabetes controlled by diet.",
        "O24.410 (gestational diabetes mellitus in pregnancy, diet controlled) and Z3A.29.",
      ],
      [
        "Case 3. A patient at 9 weeks has mild hyperemesis gravidarum.",
        "O21.0 (mild hyperemesis gravidarum) and Z3A.09.",
      ],
      [
        "Case 4. A woman who is 12 weeks pregnant is seen for a right ankle sprain. The provider writes that the pregnancy is incidental to the visit.",
        "S93.401A for the sprain (initial encounter) with Z33.1 for the incidental pregnant state. Without the incidental statement, a Chapter 15 code would come first.",
      ],
      [
        "Case 5. A woman at 39 weeks has a normal full-term vaginal delivery of a single live infant, with no complications.",
        "O80, Z37.0, and Z3A.39. The delivery procedure code, if reported, is a CPT code such as 59400 for a global package.",
      ],
    ],
    case: "A coder reports Z34.03 for a patient at 30 weeks whose provider documents gestational diabetes and a prenatal visit.",
    model:
      "Z34.03 is for a normal pregnancy. Because gestational diabetes is documented, use O24.4- with the control method documented, then Z3A.30. Gestational diabetes is a complication of the pregnancy, so the Chapter 15 code comes first.",
    mistakes: [
      "Using Z34.- when a complication is documented.",
      "Putting O codes on the newborn's record.",
      "Skipping the Z3A weeks code.",
      "Using O80 when any complication is present.",
    ],
    drills: [
      "Write the trimester boundaries from memory.",
      "Code three prenatal visits at different weeks.",
      "Explain when Z33.1 replaces a Chapter 15 code.",
    ],
    rubric: [
      "Chapter 15 sequencing is applied.",
      "Trimester and Z3A code match the note.",
      "O80 is used only for an uncomplicated delivery.",
      "Incidental pregnancy is coded with Z33.1.",
    ],
    scenario:
      "A provider writes that a woman's pregnancy is incidental to a visit for an ankle sprain. Which status code is reported?",
    answers: [
      "Z33.1 for the incidental pregnant state",
      "O80 for an uncomplicated delivery",
      "Z34.02 for supervision of normal pregnancy",
    ],
    correct: 0,
    why: "Z33.1 reports a pregnancy that the provider documents as incidental, so the other condition is coded first.",
    taglish:
      "Sa Chapter 15, ang O codes ang inuuna sa sequencing at sa nanay lang ginagamit, hindi sa baby. Piliin ang trimester ayon sa documentation at idagdag ang Z3A para sa weeks. Kapag sinabi ng provider na incidental lang ang pagbubuntis, Z33.1 ang gamit at inuuna ang ibang kondisyon. Ang O80 ay para lang sa normal na full-term delivery na walang complication, kasama ang Z37.0.",
    tip: "Write the trimester ranges on a sticky note. Most pregnancy code errors come from guessing the trimester.",
    mentor:
      "Choose five prenatal notes and code the trimester and Z3A code before you read the rest of each note.",
    remember: [
      "Chapter 15 codes come first unless the provider calls the pregnancy incidental.",
      "The third trimester starts at 28 weeks 0 days.",
      "O80 is for a full-term delivery with no complication only.",
    ],
  },
  {
    title: "Newborn and congenital conditions (Chapters 16 and 17)",
    desc: "P codes, birth weight and gestational age, the Z38 birth codes, congenital Q codes, and the codes for a corrected condition.",
    time: "50 min",
    objectives: [
      "Code a newborn's birth status with Z38 and newborn visit codes.",
      "Report prematurity with birth weight sequenced before gestational age.",
      "Use congenital codes at any age and history codes after correction.",
    ],
    concept: `<p><strong>Z38 birth codes.</strong> A liveborn infant is reported with a Z38 code for the place and type of birth, such as Z38.00 for a single liveborn infant delivered vaginally in a hospital and Z38.01 for one delivered by cesarean. Z38.1 is for a single liveborn infant born outside a hospital.</p>
<p><strong>Perinatal conditions (P00 to P96).</strong> These conditions begin in the perinatal period, which runs from before birth through the 28th day of life. They belong on the baby's record, never the mother's. They may be used later in life only if the condition is still present and the provider documents that it began in the perinatal period. Common examples are P22.0 (respiratory distress syndrome of newborn), P22.1 (transient tachypnea), P59.9 (neonatal jaundice, unspecified), and P07.- for low birth weight and prematurity. When both birth weight and gestational age are documented, report both codes and sequence the birth weight code first.</p>
<p><strong>Congenital conditions (Q00 to Q99).</strong> A congenital malformation or chromosomal abnormality can be coded at any age, for example Q90.9 (Down syndrome, unspecified) in an adult. When a malformation has been fully corrected, report a personal history code from Z87.7- instead of the Q code.</p>
<p><strong>Newborn services.</strong> CPT 99460 is initial care of a normal newborn in a hospital or birthing center, 99461 is initial care in another location, 99462 is subsequent hospital care, and 99463 is same-day admission and discharge. 99464 is attendance at delivery, and 99465 is delivery room resuscitation.</p>`,
    steps: [
      "Confirm whether the record belongs to the baby or the mother.",
      "Report the Z38 code for place and type of birth on the baby's record.",
      "Add perinatal conditions as documented.",
      "Sequence birth weight before gestational age.",
      "Use Q codes for malformations, at any age.",
      "Use Z87.7- if the malformation was fully corrected.",
    ],
    lab: [
      [
        "Case 1. A boy is born in a hospital by vaginal delivery. His first-day examination is normal.",
        "Z38.00 on his record, with 99460 for the initial normal newborn care.",
      ],
      [
        "Case 2. A baby born at 33 weeks weighs 1,800 grams and has respiratory distress syndrome of the newborn.",
        "P07.17 (other low birth weight newborn, 1,750 to 1,999 grams), P07.36 (33 completed weeks), and P22.0, with Z38.00 for the birth status. Birth weight comes before gestational age.",
      ],
      [
        "Case 3. A 6-year-old with a known secundum atrial septal defect has a follow-up visit.",
        "Q21.11 (secundum atrial septal defect). The defect is congenital and is still present.",
      ],
      [
        "Case 4. A 34-year-old with Down syndrome has an annual wellness visit.",
        "Z00.00 or Z00.01 for the exam, and Q90.9. Congenital codes apply at any age.",
      ],
      [
        "Case 5. An infant has tongue-tie (ankyloglossia) documented at a feeding visit.",
        "Q38.1 (ankyloglossia).",
      ],
    ],
    case: "A coder reports P07.3- on a 40-year-old who had a premature birth.",
    model:
      "Perinatal codes may be used later in life only when the condition is still present and the provider documents it. A past premature birth with no current condition is not coded as a perinatal condition. Use history or status codes only when they fit the visit.",
    mistakes: [
      "Using P codes on the mother's record.",
      "Listing gestational age before birth weight.",
      "Using a Q code after the condition was fully corrected.",
      "Forgetting the Z38 code on the newborn's record.",
    ],
    drills: [
      "Code three newborn records with Z38 and one perinatal condition each.",
      "Explain when a Q code becomes a Z87.7- history code.",
      "Write the newborn CPT codes next to their descriptions.",
    ],
    rubric: [
      "The record belongs to the correct person.",
      "Birth weight comes before gestational age.",
      "Congenital codes are used at any age while the condition remains.",
      "Corrected conditions use history codes.",
    ],
    scenario:
      "A newborn has both a documented birth weight and a gestational age. Which code is sequenced first?",
    answers: [
      "The birth weight code",
      "The gestational age code",
      "The Z38 birth status code",
    ],
    correct: 0,
    why: "When both are documented, the birth weight code is sequenced before the gestational age code.",
    taglish:
      "Ang P codes ay para sa baby, hindi sa nanay, at sa kondisyong nagsimula bago ipanganak hanggang ika-28 araw. Kapag may birth weight at gestational age, mauuna ang birth weight. Ang Z38 ang code para sa kung saan at paano ipinanganak ang baby. Ang Q codes ay pwedeng gamitin kahit anong edad hangga't nandiyan pa ang kondisyon, pero kapag naayos na, Z87.7- na ang gamit.",
    tip: "Pin a table of the newborn CPT codes 99460 to 99465 next to your Z38 list. Newborn charts mix both and the codes are easy to confuse.",
    mentor:
      "Ask a coder who handles pediatrics which newborn errors they see most often.",
    remember: [
      "P codes are for the baby, and birth weight is sequenced before gestational age.",
      "Z38 codes report place and type of birth on the newborn record.",
      "Q codes apply at any age until the condition is corrected.",
    ],
  },
  {
    title: "ICD-10-CM mental and behavioral health coding in depth",
    desc: "Depression severity and episodes, anxiety, PTSD, bipolar disorder, ADHD, and why a screening score cannot set severity.",
    time: "55 min",
    objectives: [
      "Code major depressive disorder by episode, severity, and remission.",
      "Select anxiety, PTSD, and ADHD codes from the documented type.",
      "Explain why severity must come from the provider, not a score.",
    ],
    concept: `<p><strong>Depression.</strong> A single episode of major depressive disorder is F32.-, and a recurrent one is F33.-. The fourth character gives severity: F32.0 and F33.0 mild, F32.1 and F33.1 moderate, F32.2 and F33.2 severe without psychotic features, and F32.3 and F33.3 severe with psychotic features. F32.4 and F32.5 are partial and full remission for a single episode. For recurrent depression, remission is F33.41 (partial) and F33.42 (full). Documentation of only ‘depression’ indexes to F32.A, depression unspecified.</p>
<p><strong>Anxiety and related disorders.</strong> Generalized anxiety disorder is F41.1, panic disorder is F41.0, and anxiety disorder unspecified is F41.9. Obsessive-compulsive disorder is in F42.-. PTSD is F43.10 when unspecified, F43.11 when acute, and F43.12 when chronic. Adjustment disorders are F43.2-, such as F43.21 with depressed mood.</p>
<p><strong>Other common diagnoses.</strong> Bipolar disorder is F31.-, with F31.9 when unspecified. ADHD is F90.-: F90.0 inattentive, F90.1 hyperactive-impulsive, F90.2 combined, and F90.9 unspecified.</p>
<p><strong>Severity comes from the provider.</strong> A screening score, such as a PHQ-9 total, does not set severity for coding. A coder reports the severity only when the provider states it in the diagnostic statement. If the provider writes only ‘depression,’ the code stays unspecified.</p>
<p>Visit codes for these patients are covered in the behavioral health lesson. Psychotherapy time codes are 90832 (16 to 37 minutes), 90834 (38 to 52), and 90837 (53 or more).</p>`,
    steps: [
      "Read the provider's exact diagnostic statement.",
      "Decide single episode or recurrent.",
      "Find the severity and remission wording.",
      "Select the matching code from the Index and Tabular List.",
      "Query when the statement lacks a detail the code needs.",
      "Link the diagnosis to the service on the claim.",
    ],
    lab: [
      [
        "Case 1. The provider writes ‘major depressive disorder, recurrent, moderate.’",
        "F33.1.",
      ],
      [
        "Case 2. The note says ‘depression’ only. A PHQ-9 score of 18 is in the chart.",
        "F32.A. The score does not set severity. A query to the provider about severity and episode type is appropriate.",
      ],
      [
        "Case 3. The diagnosis is ‘major depressive disorder, single episode, severe with psychotic features.’",
        "F32.3.",
      ],
      ["Case 4. The provider documents chronic PTSD.", "F43.12."],
      ["Case 5. A child's diagnosis is ‘ADHD, combined type.’", "F90.2."],
    ],
    case: "A coder assigns F32.2 because a PHQ-9 score suggests severe depression, but the provider's note says only ‘depression.’",
    model:
      "The score cannot set severity. Report F32.A for depression unspecified, and send a query asking the provider to document the episode type and severity. Code the specific diagnosis only after the provider documents it.",
    mistakes: [
      "Taking severity from a screening score.",
      "Mixing F32 and F33 without checking the episode wording.",
      "Using the unspecified code when the note gives the type.",
      "Forgetting remission codes for patients in remission.",
    ],
    drills: [
      "Code ten depression statements with different severity and episode wording.",
      "Write a query asking a provider to clarify depression severity.",
      "List the PTSD and ADHD fourth and fifth characters.",
    ],
    rubric: [
      "Episode, severity, and remission are taken from the provider.",
      "Scores do not change the code.",
      "Unspecified codes are used only when detail is missing.",
      "Queries are neutral and specific.",
    ],
    scenario:
      "A provider writes only ‘depression,’ and the chart includes a PHQ-9 score of 18. Which action is correct?",
    answers: [
      "Report depression unspecified and query for severity",
      "Report severe depression based on the PHQ-9 score",
      "Report moderate depression as a safe middle choice",
    ],
    correct: 0,
    why: "Severity must come from the provider's diagnostic statement, so the coder reports the unspecified code and queries.",
    taglish:
      "Sa depression, tingnan kung single episode (F32) o recurrent (F33), tapos kung gaano kalala (mild, moderate, severe) at kung may remission. Ang PHQ-9 score ay hindi basehan ng severity. Kapag ‘depression’ lang ang nakasulat, F32.A ang code at mag-query ka sa provider. Para sa PTSD, hanapin kung acute o chronic, at sa ADHD, kung inattentive, hyperactive, o combined.",
    tip: "Keep a short query template for depression: episode type, severity, and remission status. Using the same wording every time keeps the query neutral.",
    mentor:
      "Practice the query aloud with a partner, asking for detail without suggesting a diagnosis.",
    remember: [
      "F32 is a single episode and F33 is recurrent, with severity in the fourth character.",
      "A screening score never sets the severity code.",
      "‘Depression’ alone is F32.A, and the coder queries for detail.",
    ],
  },
  {
    title: "ICD-10-CM nervous system and stroke coding",
    desc: "Migraine, epilepsy, Parkinson's, Alzheimer's with dementia, acute stroke, stroke sequelae, hemiplegia dominance, and history of stroke.",
    time: "55 min",
    objectives: [
      "Code migraine and epilepsy using intractability and status characters.",
      "Apply the etiology and manifestation order for Alzheimer's and dementia.",
      "Distinguish acute stroke, sequelae, and personal history.",
    ],
    concept: `<p><strong>Migraine (G43.-).</strong> The code names the type (without aura, with aura, chronic, and others) and then whether it is intractable and whether status migrainosus is present. For example, G43.009 is migraine without aura, not intractable, without status migrainosus, and G43.109 is the same with aura. Use G43.909 for migraine unspecified when no type is documented.</p>
<p><strong>Epilepsy (G40.-).</strong> G40.909 is epilepsy unspecified, not intractable, without status epilepticus. A seizure without an epilepsy diagnosis is R56.9. Parkinson's disease uses G20.- codes that now describe dyskinesia and fluctuations, such as G20.A1.</p>
<p><strong>Alzheimer's and dementia.</strong> Alzheimer's disease (G30.-) is the cause, so it is sequenced first. A dementia code from F02.- follows to show the dementia in an other disease, for example G30.9 then F02.80 when severity is unspecified. This is an etiology and manifestation pair, and the manifestation code is never first.</p>
<p><strong>Stroke.</strong> An acute cerebral infarction is I63.-. A transient ischemic attack is G45.9. Deficits that remain after a stroke are sequelae, reported with I69.- codes, such as I69.351 for hemiplegia and hemiparesis following cerebral infarction affecting the right dominant side. A history of stroke with no deficits is Z86.73.</p>
<p><strong>Dominance.</strong> When the dominant side is not documented, the guidelines default to the right side as dominant and the left side as non-dominant, and ambidextrous is treated as dominant. Always use the documented side and dominance first.</p>`,
    steps: [
      "Name the neurologic condition and its type.",
      "Check intractability and status wording.",
      "For dementia, find the cause and code it first.",
      "For stroke, decide acute, sequela, or history.",
      "For hemiplegia, find the side and dominance.",
      "Add secondary codes for deficits and risk factors.",
    ],
    lab: [
      [
        "Case 1. The diagnosis is migraine with aura, not intractable, without status migrainosus.",
        "G43.109.",
      ],
      [
        "Case 2. A patient has Alzheimer's disease with dementia. Severity and behavioral details are not documented.",
        "G30.9 first, then F02.80. The cause comes first, and the dementia code follows.",
      ],
      [
        "Case 3. At a follow-up, a patient has right-sided hemiparesis from a cerebral infarction six months ago. The patient is right-handed.",
        "I69.351 (hemiplegia and hemiparesis following cerebral infarction affecting right dominant side). The stroke is no longer acute.",
      ],
      [
        "Case 4. A patient had a stroke two years ago and has no remaining deficits. This is a routine visit.",
        "Z86.73 (personal history of TIA and cerebral infarction without residual deficits) after the reason for the visit.",
      ],
      [
        "Case 5. A patient has left-sided weakness after a stroke. Dominance is not documented.",
        "I69.354 (hemiplegia and hemiparesis following cerebral infarction affecting left non-dominant side), by the default rule for the left side.",
      ],
    ],
    case: "A coder reports F02.80 first and G30.9 second for a patient with Alzheimer's dementia.",
    model:
      "The dementia code is a manifestation code and cannot be first. Report G30.9 first as the cause, then F02.80 as the manifestation. The Tabular List notes ‘code first the underlying physiological condition’ at F02.",
    mistakes: [
      "Putting a manifestation code first.",
      "Using an acute stroke code for old deficits.",
      "Ignoring documented dominance.",
      "Using the unspecified migraine code when a type is documented.",
    ],
    drills: [
      "Build the migraine code from type, intractability, and status for three examples.",
      "Explain acute stroke, sequela, and history in one sentence each.",
      "Code a hemiplegia case with each combination of side and dominance.",
    ],
    rubric: [
      "Etiology comes before manifestation.",
      "Acute, sequela, and history are not mixed.",
      "Dominance rules are applied only when it is undocumented.",
      "Migraine and epilepsy characters match the note.",
    ],
    scenario: "A patient has Alzheimer's dementia. Which sequence is correct?",
    answers: [
      "Alzheimer's disease first, then the dementia code",
      "The dementia code first, then Alzheimer's disease",
      "Only the dementia code with no cause",
    ],
    correct: 0,
    why: "The underlying cause is coded first, and the dementia code is a manifestation that follows it.",
    taglish:
      "Sa Alzheimer's na may dementia, G30 ang una dahil iyon ang sanhi, tapos F02 ang kasunod. Hindi pwedeng mauna ang manifestation code. Sa stroke, hatiin sa tatlo: acute (I63), may natirang deficit (I69), at history lang na walang deficit (Z86.73). Sa hemiplegia, hanapin kung aling side at kung dominant, at gamitin lang ang default kapag walang nakasulat.",
    tip: "Say ‘cause first, effect second’ every time you see a ‘code first’ note. It prevents most sequencing mistakes in this chapter.",
    mentor:
      "Review five stroke follow-up notes and decide whether each is acute, a sequela, or a history.",
    remember: [
      "Alzheimer's disease is coded before the dementia manifestation code.",
      "I63 is acute, I69 is a sequela, and Z86.73 is history without deficits.",
      "Documented side and dominance come before the default rule.",
    ],
  },
  {
    title: "ICD-10-CM digestive and urinary coding",
    desc: "GERD, hernias, diverticular disease, gallstones, UTI with organism, BPH with symptoms, and kidney stones.",
    time: "55 min",
    objectives: [
      "Code common digestive conditions with the right complication characters.",
      "Add an organism code to a urinary tract infection.",
      "Add symptom codes where a combination note requires them.",
    ],
    concept: `<p><strong>Digestive examples.</strong> GERD without esophagitis is K21.9, and with esophagitis is K21.0-. An inguinal hernia is K40.-, with characters for bilateral or unilateral, obstruction or gangrene, and recurrence. K40.90 is a unilateral inguinal hernia without obstruction or gangrene, not specified as recurrent. When obstruction and gangrene are both present, gangrene takes precedence. Diverticulosis of the large intestine without complication is K57.30, and diverticulitis without perforation, abscess, or bleeding is K57.32. Gallstones are K80.-, and K80.20 is a calculus of the gallbladder without cholecystitis or obstruction. Irritable bowel syndrome, unspecified, is K58.9.</p>
<p><strong>Urinary examples.</strong> A urinary tract infection with no site specified is N39.0, and an organism code follows when documented, such as B96.20 for E. coli. Acute cystitis is N30.0-, with N30.00 without hematuria and N30.01 with hematuria. Benign prostatic hyperplasia without symptoms is N40.0, and N40.1 is with lower urinary tract symptoms. N40.1 carries a ‘use additional code’ note for each symptom, such as R35.1 for nocturia and R39.12 for a weak stream. Kidney stones are N20.0, and ureteral stones are N20.1.</p>
<p><strong>Reading the Tabular List.</strong> Many of these categories have required characters for the complication, the site, or the laterality. If the documentation lacks that detail, an unspecified code is correct only after you have confirmed that the detail is not documented elsewhere in the chart.</p>`,
    steps: [
      "Name the organ and condition.",
      "Check for complication wording: bleeding, obstruction, abscess, or gangrene.",
      "Look for laterality and recurrence.",
      "Apply ‘use additional code’ notes.",
      "Add the organism code for infections when documented.",
      "Choose the unspecified code only after confirming the detail is missing.",
    ],
    lab: [
      [
        "Case 1. The diagnosis is acute cystitis without hematuria due to E. coli.",
        "N30.00 and B96.20.",
      ],
      [
        "Case 2. A man has benign prostatic hyperplasia with nocturia and a weak urinary stream.",
        "N40.1, R35.1, and R39.12. The ‘use additional code’ note adds the symptoms.",
      ],
      [
        "Case 3. A patient has gallstones without cholecystitis or obstruction.",
        "K80.20.",
      ],
      [
        "Case 4. A patient has a unilateral inguinal hernia with no obstruction or gangrene, not documented as recurrent.",
        "K40.90.",
      ],
      [
        "Case 5. A patient has diverticulitis of the large intestine without perforation, abscess, or bleeding.",
        "K57.32.",
      ],
    ],
    case: "A coder reports N39.0 for a UTI and leaves out the organism that the provider names in the note.",
    model:
      "Add the organism code when the provider documents it. The Tabular List instructs to use an additional code to identify the organism, such as B96.20 for E. coli. A culture report alone cannot be coded unless the provider interprets it in the note.",
    mistakes: [
      "Leaving out the organism code.",
      "Missing the symptom codes under BPH.",
      "Coding diverticulosis when diverticulitis is documented.",
      "Using an unspecified code before checking the whole note.",
    ],
    drills: [
      "Code five digestive and five urinary statements.",
      "List the symptom codes that BPH with symptoms can require.",
      "Explain gangrene versus obstruction in hernia coding.",
    ],
    rubric: [
      "Complication characters match the documentation.",
      "Organism and symptom codes are added where notes require.",
      "Laterality and recurrence are addressed.",
      "Unspecified codes are justified.",
    ],
    scenario:
      "A provider documents a urinary tract infection due to E. coli. Which pair is reported?",
    answers: [
      "N39.0 and B96.20",
      "N30.00 alone with no organism",
      "B96.20 as the first code",
    ],
    correct: 0,
    why: "N39.0 identifies the infection, and B96.20 identifies the E. coli organism as an additional code.",
    taglish:
      "Sa UTI, N39.0 ang infection at B96.20 ang idinadagdag kung E. coli ang nakasulat na organismo. Sa BPH na may sintomas, N40.1 ang code at idagdag ang mga sintomas tulad ng nocturia o mahinang ihi. Sa digestive, tingnan palagi kung may bleeding, obstruction, o gangrene dahil nagbabago ang code. Huwag piliin ang unspecified hangga't hindi sigurado na wala talagang detalye sa chart.",
    tip: "Read every ‘use additional code’ note before you finish a code. It is the most common missed step in this chapter.",
    mentor:
      "Pick one category, such as hernias, and read every instruction note under it before the next practice set.",
    remember: [
      "A UTI is N39.0 with an organism code when the organism is documented.",
      "N40.1 BPH with symptoms needs the symptom codes listed under it.",
      "Look for bleeding, obstruction, gangrene, and laterality before you choose.",
    ],
  },
  {
    title: "Laboratory CPT coding (80000 to 89999)",
    desc: "Venipuncture, panels, urinalysis, CBC, CLIA-waived tests with QW, repeat-test modifier 91, and unbundling.",
    time: "50 min",
    objectives: [
      "Report a panel only when every component was performed.",
      "Choose urinalysis, CBC, and point-of-care codes correctly.",
      "Explain when modifier QW, 90, and 91 apply.",
    ],
    concept: `<p>Laboratory codes sit in the Pathology and Laboratory section of CPT. A practice that draws blood and sends it to a reference lab usually reports only the collection. The lab bills for the tests. A practice that runs a test in its own office reports the test code, and it needs the right CLIA certificate to do so.</p>
<p><strong>Collection.</strong> 36415 is a routine venipuncture, and 36416 is a capillary blood collection such as a fingerstick.</p>
<p><strong>Panels.</strong> A panel code is used only when every listed component was performed. Common panels are 80048 (basic metabolic panel), 80053 (comprehensive metabolic panel), 80061 (lipid panel), 80076 (hepatic function panel), and 80050 (general health panel, which combines a comprehensive metabolic panel, a CBC, and a TSH). If only some components were run, report the individual tests. If extra tests beyond the panel were run, add them separately. Reporting each panel component on its own when a panel code exists is unbundling.</p>
<p><strong>Common single tests.</strong> 85025 is a CBC with automated differential, and 85027 is a CBC without a differential. 83036 is hemoglobin A1c, 84443 is TSH, and 82947 is quantitative blood glucose. 82962 is a glucose result from a home-use glucose meter. For urinalysis, 81001 is automated with microscopy, 81003 is automated without microscopy, and 81002 is non-automated without microscopy. A rapid group A strep antigen test is 87880.</p>
<p><strong>CLIA and modifiers.</strong> A practice with a certificate of waiver may run only CLIA-waived tests, and Medicare requires modifier QW on most of them. CMS publishes a list of waived tests and any that do not need QW. Modifier 91 reports a repeated lab test on the same day for monitoring, not to confirm a result. Modifier 90 shows a test performed by a reference laboratory and billed by the practice.</p>
<p><strong>Medical necessity.</strong> Many lab tests have coverage rules that list the diagnoses that support them. Link each test to the diagnosis that justifies it.</p>`,
    steps: [
      "Decide who performed the test: the practice, an outside lab, or both.",
      "Report the collection code if the practice drew the specimen.",
      "Match the tests ordered to a panel only if all components were run.",
      "Check the CLIA status of in-office tests.",
      "Add QW, 90, or 91 only where they apply.",
      "Link each test to a supporting diagnosis.",
    ],
    lab: [
      [
        "Case 1. A patient has a basic metabolic panel and the practice draws the blood and sends it to a reference lab.",
        "The practice reports 36415 for the draw. The reference lab reports 80048. The practice does not bill the panel.",
      ],
      [
        "Case 2. The practice performs a comprehensive metabolic panel, a CBC with automated differential, and a TSH on the same specimen.",
        "80050 (general health panel) plus 36415. These three tests make up that panel.",
      ],
      [
        "Case 3. A child has a rapid group A strep antigen test done in the office under a certificate of waiver.",
        "87880, with QW if the payer requires it for this waived test.",
      ],
      [
        "Case 4. A diabetic patient has a finger-stick glucose reading in the office with a home-use meter.",
        "82962 (glucose by a monitoring device cleared for home use). Some payers do not require QW for it. Check the payer.",
      ],
      [
        "Case 5. An in-office urine test is read by an automated analyzer and has no microscopy.",
        "81003. A manual dipstick read by eye is 81002.",
      ],
    ],
    case: "A practice reports the sodium, potassium, chloride, carbon dioxide, glucose, BUN, creatinine, and calcium tests as separate lines for a basic metabolic panel done in the office.",
    model:
      "Those tests make up a panel, so the correct report is the panel code 80048. Reporting the components separately is unbundling and risks an overpayment finding. Report the panel code once, with 36415 if the practice drew the blood.",
    mistakes: [
      "Billing a lab the practice did not perform.",
      "Reporting panel components separately.",
      "Missing QW on a waived test.",
      "Using modifier 91 to confirm a result.",
    ],
    drills: [
      "Build a table of the panels with their component tests.",
      "List five CLIA-waived tests you could see in an office.",
      "Link each of ten tests to a supporting diagnosis.",
    ],
    rubric: [
      "The performing lab is identified.",
      "Panels are reported only when complete.",
      "Waived tests have the right modifier.",
      "Tests are linked to diagnoses that support them.",
    ],
    scenario:
      "A practice draws blood and sends it to a reference laboratory. What does the practice usually report?",
    answers: [
      "The venipuncture code only",
      "The panel code for the tests the lab ran",
      "Each test the lab ran as separate lines",
    ],
    correct: 0,
    why: "The reference lab bills for the tests it performs, and the practice reports only its own collection service.",
    taglish:
      "Kung ipinadala sa outside lab ang dugo, ang practice ay 36415 lang ang ibibill dahil ang lab ang magbibill ng tests. Ang panel code ay gagamitin lang kapag kumpleto ang lahat ng components. Huwag hiwa-hiwalayin ang laman ng panel dahil unbundling iyon. Para sa mga CLIA-waived na test sa clinic, QW ang modifier sa maraming payer, at i-link ang bawat test sa diagnosis na sumusuporta.",
    tip: "Make a one-page panel chart with each panel's components. It settles most lab billing questions in seconds.",
    mentor:
      "Ask your lead which lab tests the practice runs in-house and which certificate they hold.",
    remember: [
      "A panel code needs every component, and separate billing of components is unbundling.",
      "The performing lab bills its own tests, and a draw is 36415.",
      "QW marks many CLIA-waived tests, and 91 is for a repeat test used for monitoring.",
    ],
  },
  {
    title: "Anesthesia payment, time, and modifiers",
    desc: "The payment formula, base, time, and modifying units, physical status modifiers, provider modifiers, qualifying circumstances, and colonoscopy anesthesia.",
    time: "55 min",
    objectives: [
      "Calculate anesthesia units from base, time, and modifying units.",
      "Choose the provider modifier for personal, directed, and CRNA services.",
      "Report colonoscopy anesthesia correctly when a screening becomes diagnostic.",
    ],
    concept: `<p>An anesthesia code describes the anesthesia for a surgical site or procedure, not the surgery itself. Payers pay anesthesia with this formula: <strong>(base units + time units + modifying units) × conversion factor</strong>. Base units come from the ASA crosswalk for each anesthesia code. Time units count the minutes from the start of anesthesia preparation to when the anesthesiologist is no longer in personal attendance. Medicare uses one unit per 15 minutes, and some payers use other time units. Report the minutes on the claim. Anesthesia time must be documented in the record.</p>
<p><strong>Physical status modifiers.</strong> P1 is a normal healthy patient, P2 mild systemic disease, P3 severe systemic disease, P4 severe systemic disease that is a constant threat to life, P5 a moribund patient not expected to survive without the operation, and P6 a declared brain-dead organ donor. Many payers add modifying units for P3 (1), P4 (2), and P5 (3). The anesthesia provider assigns the status. A coder never picks it from the diagnoses.</p>
<p><strong>Provider modifiers.</strong> AA is anesthesia personally performed by an anesthesiologist. QK is medical direction of two, three, or four concurrent procedures. QY is medical direction of one CRNA. QX is a CRNA service with medical direction, and QZ is a CRNA service without medical direction. AD is medical supervision of more than four concurrent procedures. Medicare generally pays the directed and directing providers half of the allowed amount each.</p>
<p><strong>Qualifying circumstances.</strong> These add-on codes show conditions that make anesthesia harder: 99100 for age under 1 year or over 70, 99116 for total body hypothermia, 99135 for controlled hypotension, and 99140 for emergency conditions. Medicare does not pay them, and other payers have their own policies.</p>
<p><strong>Colonoscopy anesthesia.</strong> 00812 is anesthesia for a screening colonoscopy. If the screening becomes diagnostic, such as when a polyp is removed, Medicare wants 00811 with modifier PT. Other payers may use modifier 33 or other rules.</p>`,
    steps: [
      "Select the anesthesia code for the procedure or site.",
      "Confirm start and stop times in the anesthesia record.",
      "Add the physical status modifier documented by the provider.",
      "Add the provider modifier for the type of service.",
      "Add qualifying circumstance codes if the payer allows them.",
      "Apply the payer's time units and calculate the expected payment.",
    ],
    lab: [
      [
        "Case 1. Training values: base value 7, anesthesia time 140 minutes, P3 status (1 modifying unit), conversion factor $20.00. Time units are in 15-minute increments to one decimal.",
        "Time units: 140 divided by 15 is 9.3. Total: 7 + 9.3 + 1 = 17.3 units. Payment: 17.3 × $20.00 = $346.00. These are fictional training values, not real payment amounts.",
      ],
      [
        "Case 2. An anesthesiologist medically directs two rooms staffed by CRNAs. A CRNA performs the anesthesia in room 1.",
        "The CRNA bills the anesthesia code with QX. The anesthesiologist bills the same code with QK. Medicare pays each at half of the allowed amount.",
      ],
      [
        "Case 3. A Medicare patient has a screening colonoscopy with anesthesia. A polyp is found and removed during the procedure.",
        "Anesthesia 00811 with PT, because the screening became diagnostic. A screening that stays a screening is 00812.",
      ],
      [
        "Case 4. A patient needs an emergency cesarean delivery for fetal distress, and the payer allows qualifying circumstances.",
        "01961 (anesthesia for cesarean delivery) with 99140 (emergency conditions), if the note supports the emergency and the payer allows the add-on.",
      ],
      [
        "Case 5. A patient with well-controlled hypertension and a BMI of 34 is scheduled for hernia repair. The anesthesia record shows a physical status of P2.",
        "Report P2 as the anesthesiologist documented. A coder does not assign a physical status from the diagnoses.",
      ],
    ],
    case: "A claim lists the surgeon's knee replacement CPT code for the anesthesia service.",
    model:
      "The anesthesia provider reports the anesthesia code for the procedure, 01402 for total knee arthroplasty, with the time and modifiers. The surgical CPT code belongs to the surgeon. Correct the claim, add the minutes and modifiers, and resubmit.",
    mistakes: [
      "Using a surgical code on an anesthesia claim.",
      "Assigning a physical status from diagnoses.",
      "Forgetting the minutes on the claim.",
      "Billing qualifying circumstances to payers that do not pay them.",
    ],
    drills: [
      "Calculate three anesthesia payments using training values.",
      "Match each provider modifier to who performs the service.",
      "Explain how a screening colonoscopy changes anesthesia coding when a polyp is removed.",
    ],
    rubric: [
      "The anesthesia code matches the procedure site.",
      "Time and units are calculated correctly.",
      "Provider and status modifiers come from the record.",
      "Colonoscopy conversion is handled by payer rules.",
    ],
    scenario:
      "Which formula do most payers use to calculate an anesthesia payment?",
    answers: [
      "Base, time, and modifying units multiplied by a conversion factor",
      "The surgeon's fee multiplied by a fixed percentage",
      "The number of minutes multiplied by the base unit alone",
    ],
    correct: 0,
    why: "Anesthesia is paid by adding base, time, and modifying units and multiplying the total by the conversion factor.",
    taglish:
      "Ang bayad sa anesthesia ay (base units + time units + modifying units) × conversion factor. Ang anesthesia code ay base sa lugar o procedure, hindi sa surgical CPT. Ang P modifier ay ayon sa anesthesia provider, hindi pinipili ng coder. AA, QK, QX, QY, QZ ang provider modifiers depende sa sino ang gumawa. Sa screening colonoscopy na naging diagnostic dahil may polyp, 00811 na may PT sa Medicare.",
    tip: "Always copy the anesthesia start and stop times from the record before you code. A claim without times is the quickest way to a denial.",
    mentor:
      "Ask an anesthesia biller for one real record with the identifiers removed and trace each unit.",
    remember: [
      "Payment is the sum of base, time, and modifying units times the conversion factor.",
      "Physical status comes from the anesthesia provider, not the coder.",
      "A screening colonoscopy that becomes diagnostic uses 00811 with PT for Medicare.",
    ],
  },
  {
    title: "Facility billing: UB-04, revenue codes, and outpatient payment",
    desc: "The UB-04 and 837I, type of bill, revenue codes, observation, APC payment, and how a facility claim differs from a professional claim.",
    time: "55 min",
    objectives: [
      "Tell when to use the CMS-1500 and when to use the UB-04.",
      "Read the main fields of a facility claim, including type of bill and revenue codes.",
      "Explain observation, the two-midnight rule, and APC payment at a basic level.",
    ],
    concept: `<p>A professional claim (CMS-1500 or 837P) bills a clinician's service. An institutional claim (UB-04, also called the CMS-1450, or 837I) bills a facility's services, such as a hospital outpatient department, emergency department, or inpatient stay. The same visit can produce both claims, one from the facility and one from the physician.</p>
<p><strong>Key UB-04 fields.</strong> The type of bill (field 4) tells the payer the facility type, the bill class, and the frequency. The last digit of the type of bill is the frequency: 1 for admit through discharge, 7 for a replacement claim, and 8 for a void. A hospital outpatient claim often starts with 13. Revenue codes (field 42) are four digits and show the department, such as 0450 for the emergency room, 0360 for operating room services, 0300 for laboratory, 0320 for diagnostic radiology, 0510 for a clinic, and 0762 for observation. Next to each revenue code are the HCPCS or CPT code, service date, units, and charges. Diagnosis codes appear in field 67 and following.</p>
<p><strong>Observation.</strong> Observation is an outpatient service. Hospitals report it with revenue code 0762 and G0378 in hourly units. Medicare generally expects an inpatient admission when the physician expects the patient to need hospital care spanning at least two midnights. Admission status changes the claim and the patient's cost sharing.</p>
<p><strong>Outpatient payment.</strong> Medicare pays hospital outpatient claims under the Outpatient Prospective Payment System by grouping codes into Ambulatory Payment Classifications (APCs). Each code has a status indicator that explains how it is paid, for example N for packaged, S and T for significant procedures, and V for a clinic or emergency visit. A facility visit in a provider-based clinic is reported with G0463, and emergency visit levels use 99281 to 99285 with the facility's own leveling criteria.</p>
<p><strong>Other differences.</strong> Under Medicare's three-day payment window, many outpatient services at the same hospital in the three days before an inpatient admission are bundled into the inpatient claim. A facility uses its charge description master to link its charges to revenue codes and HCPCS codes. Medicare ambulatory surgery centers generally bill on the professional claim form. Professional and technical components (modifiers 26 and TC) split a diagnostic test between the physician and the facility.</p>`,
    steps: [
      "Decide whether the claim is professional or institutional.",
      "Confirm the type of bill, including frequency.",
      "Match each department charge to a revenue code.",
      "Add HCPCS or CPT codes and units.",
      "Check the diagnosis fields and admission status.",
      "Review APC status indicators for expected payment.",
    ],
    lab: [
      [
        "Case 1. A physician's office visit and a hospital emergency room facility charge. Which form does each use?",
        "The physician's service uses the CMS-1500 (837P). The hospital emergency room facility charge uses the UB-04 (837I).",
      ],
      [
        "Case 2. A hospital sends a replacement for an earlier outpatient claim.",
        "The type of bill ends in frequency 7 (replacement of prior claim), such as 137 for a hospital outpatient replacement.",
      ],
      [
        "Case 3. A patient is in observation for 22 hours.",
        "Revenue code 0762 with G0378 × 22 units, following the payer's rules for counting hours.",
      ],
      [
        "Case 4. A patient is seen in a hospital-owned, provider-based clinic.",
        "Revenue code 0510 (clinic) with G0463 on the facility claim for Medicare. The physician bills a separate professional claim.",
      ],
      [
        "Case 5. An emergency department facility bills a moderate-level visit.",
        "Revenue code 0450 with 99284 on the facility claim, using the facility's own leveling criteria.",
      ],
    ],
    case: "A hospital outpatient department bills a patient's emergency visit on a CMS-1500 and the claim is rejected.",
    model:
      "Hospital outpatient claims are institutional and go on the UB-04 (837I) with a type of bill and revenue codes. Rebuild the claim in the institutional format, add the revenue code and HCPCS lines, and resubmit.",
    mistakes: [
      "Using the wrong claim form.",
      "Leaving out revenue codes.",
      "Treating observation as an inpatient stay.",
      "Mixing facility and professional billing.",
    ],
    drills: [
      "Make a table of five revenue codes and their departments.",
      "Write the frequency digits you will use most often.",
      "Explain observation versus inpatient in two sentences.",
    ],
    rubric: [
      "The correct claim form is selected.",
      "Type of bill and revenue codes are accurate.",
      "Observation is reported as outpatient.",
      "Facility and professional billing are separate.",
    ],
    scenario:
      "A hospital emergency department bills the facility's services. Which claim format is used?",
    answers: [
      "The UB-04, as an institutional 837I",
      "The CMS-1500, as a professional 837P",
      "A patient statement sent to the hospital",
    ],
    correct: 0,
    why: "Facilities bill institutional claims on the UB-04 or its electronic 837I equivalent.",
    taglish:
      "Ang facility, tulad ng ospital, ay UB-04 (837I) ang ginagamit, at ang doktor ay CMS-1500 (837P). Sa UB-04, may type of bill at revenue codes na apat na digit para sa bawat department. Ang observation ay outpatient pa rin, hindi inpatient, at 0762 na may G0378 kada oras. Ang Medicare ay nagbabayad sa outpatient ng ospital gamit ang APC at status indicators.",
    tip: "When you see a facility claim, read the type of bill first. It tells you the facility type and whether the claim is new, replaced, or voided.",
    mentor: "Look at a sample UB-04 and mark each field you now recognize.",
    remember: [
      "Facilities use the UB-04 or 837I and physicians use the CMS-1500 or 837P.",
      "Revenue codes show the department, and the type of bill shows facility type and frequency.",
      "Observation is an outpatient service reported with 0762 and G0378.",
    ],
  },
  {
    title:
      "Case practice set 3: emergency, pediatric vaccines, radiology, surgery, and pulmonary",
    desc: "Five exam-style cases that combine facility rules, vaccine components, professional-component modifiers, laparoscopic surgery, and pulmonary testing.",
    time: "75 min",
    objectives: [
      "Code a pediatric preventive visit with multi-component vaccines.",
      "Report a professional-component-only radiology service.",
      "Combine surgery and pulmonary function testing with the right diagnosis.",
    ],
    concept: `<p>Work these as you did the earlier sets: write the diagnoses, the procedures with units and modifiers, and a reason before you open the answer. Allow about six minutes each. The cases are fictional, and exact codes and modifier rules should be verified in the current books and with each payer.</p>`,
    steps: [
      "Read the whole case and list the diagnoses and services.",
      "Check whether the provider is billing the professional or technical part.",
      "Count units, including vaccine components.",
      "Apply bundling and modifier rules.",
      "Write your answer and compare.",
    ],
    lab: [
      [
        "Case 11. A physician sees a 72-year-old in the emergency department for chest pain. The final diagnosis is a non-ST elevation myocardial infarction (NSTEMI), and the documented decision making is high.",
        "Dx: I21.4. Procedure: 99285 (emergency department visit, high medical decision making), place of service 23.",
      ],
      [
        "Case 12. A 4-year-old established patient has a well-child visit with no abnormal findings. The physician counsels the parent and administers a combined DTaP-IPV vaccine (90696) and an MMRV vaccine (90710).",
        "Dx: Z00.129 and Z23. Procedures: 99392 for the preventive visit, 90696 and 90710 for the vaccine products, and administration with counseling by component: each vaccine has four components, so 90460 × 2 (first component of each) and 90461 × 6 (each additional component).",
      ],
      [
        "Case 13. A radiologist reads a two-view chest X-ray (PA and lateral) taken at a hospital for an acute cough. The radiologist does not own the equipment.",
        "Dx: R05.1 (acute cough). Procedure: 71046-26 (professional component only). The hospital bills the technical component.",
      ],
      [
        "Case 14. A surgeon performs a laparoscopic cholecystectomy with cholangiography for acute cholecystitis with gallstones and no obstruction.",
        "Dx: K80.00 (calculus of gallbladder with acute cholecystitis without obstruction). Procedure: 47563.",
      ],
      [
        "Case 15. A patient with asthma has spirometry before and after a bronchodilator in a physician's office. The asthma is documented as uncomplicated.",
        "Dx: J45.909. Procedure: 94060 (bronchodilation responsiveness, spirometry before and after). 94060 is reported instead of 94010 when the pre- and post-testing is done. Report the drug supplies separately only if the payer allows.",
      ],
    ],
    case: "You code Case 12 with 90460 × 2 for the two vaccines and no 90461 lines, and the payer pays far less than the practice expected.",
    model:
      "For combination vaccines, 90460 reports the first component of each vaccine and 90461 each additional component, when the physician counsels. With four components in each vaccine, the correct units are 90460 × 2 and 90461 × 6. Add the missing 90461 line and resubmit if the payer allows corrected claims.",
    mistakes: [
      "Counting a combination vaccine as one component.",
      "Billing the technical part of a radiology service as the radiologist.",
      "Using 94010 and 94060 for the same session.",
      "Missing Z23 on a vaccine visit.",
    ],
    drills: [
      "Code all five cases without notes, then check.",
      "Write the reasoning sentence for each case.",
      "Redo your misses after 24 hours.",
    ],
    rubric: [
      "Diagnoses are in the correct order.",
      "Components and units are counted.",
      "Professional and technical parts are separated.",
      "Misses are logged by topic.",
    ],
    scenario:
      "A radiologist reads an X-ray taken on a hospital's equipment. Which modifier shows the radiologist's part?",
    answers: [
      "Modifier 26 for the professional component",
      "Modifier TC for the technical component",
      "Modifier 50 for a bilateral procedure",
    ],
    correct: 0,
    why: "Modifier 26 shows that the physician reported only the interpretation and report, which is the professional component.",
    taglish:
      "Sa case practice set 3, ugaliing isulat muna ang diagnoses, procedures, at modifiers bago tingnan ang sagot. Sa bata na may combination vaccine, bilangin ang bawat component: 90460 para sa una, 90461 para sa bawat dagdag. Sa radiologist na hindi kanya ang makina, modifier 26. Sa laparoscopic cholecystectomy na may cholangiography, 47563.",
    tip: "Count vaccine components on paper before you enter units. The arithmetic is what exam writers test.",
    mentor:
      "Explain two of your answers to a partner using only the note, not the codes.",
    remember: [
      "A combination vaccine's components are counted with 90460 for the first and 90461 for the rest.",
      "Modifier 26 is the professional component and TC is the technical component.",
      "94060 covers spirometry before and after a bronchodilator.",
    ],
  },
  {
    title:
      "Case practice set 4: cataract surgery, inpatient care, skin cancer, physical therapy, and screening mammography",
    desc: "Five more exam-style cases that combine eye surgery, subsequent hospital care, excision with repair, timed therapy units, and Medicare screening.",
    time: "75 min",
    objectives: [
      "Measure an excised lesion diameter and add a repair code.",
      "Convert timed therapy minutes into units.",
      "Code a screening mammogram with tomosynthesis.",
    ],
    concept: `<p>Work these as you did the earlier sets. Write the diagnoses, the procedures with units and modifiers, and a reason before you open the answer. Allow about six minutes each. The cases are fictional, and exact codes and modifier rules should be verified in the current books and with each payer.</p>`,
    steps: [
      "Read the whole case and list the diagnoses and services.",
      "Measure and add where the code depends on size or time.",
      "Check whether a repair or add-on code applies.",
      "Add the modifiers that the payer expects.",
      "Write your answer and compare.",
    ],
    lab: [
      [
        "Case 16. A surgeon performs phacoemulsification with an intraocular lens on the right eye for an age-related nuclear cataract.",
        "Dx: H25.11 (age-related nuclear cataract, right eye). Procedure: 66984-RT (extracapsular cataract removal with intraocular lens, without endoscopic cyclophotocoagulation).",
      ],
      [
        "Case 17. A hospitalist sees an inpatient on day 3 for an acute on chronic systolic heart failure exacerbation. Moderate medical decision making is documented.",
        "Dx: I50.23. Procedure: 99232 (subsequent hospital care, moderate medical decision making), place of service 21.",
      ],
      [
        "Case 18. A dermatologist excises a squamous cell carcinoma of the left cheek. The lesion measures 1.2 cm, and the margins are 0.4 cm on each side. The wound is closed with a layered closure of 2.5 cm. Pathology confirms the diagnosis.",
        "Excised diameter: 1.2 + 0.4 + 0.4 = 2.0 cm. Dx: C44.329 (squamous cell carcinoma of skin of other parts of face). Procedures: 11642 (excision, malignant lesion of face, 1.1 to 2.0 cm) and 12051 (intermediate repair of face, 2.5 cm or less).",
      ],
      [
        "Case 19. A Medicare patient has low back pain and a physical therapy visit under a plan of care. The therapist spends 20 minutes on therapeutic exercise, 15 minutes on manual therapy, and 10 minutes on unattended electrical stimulation.",
        "Dx: M54.50. Timed minutes: 20 + 15 = 35, which supports 2 timed units. Report 97110 × 1 and 97140 × 1, plus G0283 × 1 (unattended electrical stimulation, an untimed code), with the GP modifier on each line.",
      ],
      [
        "Case 20. A Medicare patient has a screening digital mammogram of both breasts with tomosynthesis at a freestanding imaging center. There are no symptoms.",
        "Dx: Z12.31. Procedures: 77067 (screening mammography, bilateral) and 77063 (screening digital breast tomosynthesis, bilateral, add-on). The imaging center reports a global service with no modifier.",
      ],
    ],
    case: "You code Case 18 as 11641 using only the 1.2 cm lesion size, and the payer pays less than the work supports.",
    model:
      "The size for a malignant excision includes the lesion plus the margins on both sides. With a 1.2 cm lesion and 0.4 cm margins, the excised diameter is 2.0 cm, so the correct code is 11642. Adding the layered closure with 12051 is separately reportable. Correct and resubmit with the operative note.",
    mistakes: [
      "Measuring only the lesion and not the margins.",
      "Leaving out the repair code for a layered closure.",
      "Rounding therapy minutes instead of applying the unit rule.",
      "Calling a screening mammogram diagnostic.",
    ],
    drills: [
      "Code all five cases without notes, then check.",
      "Compute excised diameters for three new examples.",
      "Redo your misses after 24 hours.",
    ],
    rubric: [
      "Sizes and times are calculated from the note.",
      "Repair and add-on codes are included where supported.",
      "Timed units follow the payer's rule.",
      "Misses are logged by topic.",
    ],
    scenario:
      "A malignant lesion measures 1.2 cm and the margins are 0.4 cm on each side. What diameter is used to choose the excision code?",
    answers: [
      "2.0 cm, the lesion plus both margins",
      "1.2 cm, the lesion alone",
      "0.4 cm, one margin alone",
    ],
    correct: 0,
    why: "The excised diameter includes the lesion and the margins on both sides, here 1.2 plus 0.4 plus 0.4.",
    taglish:
      "Sa excision ng malignant lesion, idagdag ang laki ng sugat at ang margins sa magkabilang gilid. Dito 1.2 + 0.4 + 0.4 = 2.0 cm, kaya 11642. Ang layered closure ay hiwalay na 12051. Sa PT, bilangin ang timed minutes para sa total units, at ang unattended e-stim ay untimed na G0283. Sa screening mammogram na may tomosynthesis, 77067 at 77063 na add-on.",
    tip: "For excisions, write the lesion size and margins in a small sum before you read the code ranges. It prevents choosing the range by guesswork.",
    mentor:
      "Redo your two weakest cases from sets 1 to 4 and explain them aloud.",
    remember: [
      "A malignant excision size is the lesion plus the margins on both sides.",
      "Timed therapy units depend on total timed minutes, and untimed services get one unit each.",
      "77063 is an add-on to the screening mammography code 77067.",
    ],
  },
]);
