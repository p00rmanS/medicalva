// Coding track: more ICD-10-CM chapters, including symptoms, infections, blood disorders,
// substance use, and obesity and nutrition. Verify codes in the current fiscal year's code set.
addCodingLessons([
  {
    title: "Signs, symptoms, and abnormal findings (Chapter 18)",
    desc: "When symptom codes are correct, how to handle abnormal lab and imaging results, and the common R codes you will see every day.",
    time: "55 min",
    objectives: [
      "Decide when a symptom or abnormal finding may be coded.",
      "Choose the right R code from common examples.",
      "Avoid coding abnormal results without the provider's statement of significance.",
    ],
    concept: `<p>Chapter 18 (R00–R99) holds codes for symptoms, signs, and abnormal clinical and laboratory findings that are not classified elsewhere. They are correct when the provider has <b>not</b> established a related definitive diagnosis by the end of the encounter, and the visit was for the sign or symptom. They are incorrect when the symptom is integral to a confirmed diagnosis.</p>
<p><b>Abnormal findings.</b> Abnormal results of laboratory, imaging, pathology, and other diagnostic tests are not coded and reported unless the <b>provider indicates their clinical significance</b>. If the provider documents that an abnormal result matters, for example by ordering follow-up or documenting a diagnosis for it, a code from the abnormal findings categories (R70–R94) may be reported. A coder never decides that a lab value is abnormal or significant.</p>
<table class="ref-table"><thead><tr><th>Group</th><th>Examples (verify in the current set)</th></tr></thead><tbody>
<tr><td>Circulatory and respiratory</td><td>R00.0 tachycardia. R00.2 palpitations. R05.9 cough. R06.02 shortness of breath. R07.9 chest pain. R09.02 hypoxemia.</td></tr>
<tr><td>Digestive</td><td>R10.9 abdominal pain. R11.0 nausea. R11.10 vomiting. R11.2 nausea with vomiting. R19.7 diarrhea.</td></tr>
<tr><td>Skin and nerves</td><td>R21 rash. R20.2 paresthesia. R42 dizziness. R55 syncope. R56.9 convulsions.</td></tr>
<tr><td>Urinary</td><td>R30.0 dysuria. R31.9 hematuria. R35.0 frequency of urination. R80.9 proteinuria.</td></tr>
<tr><td>General symptoms</td><td>R50.9 fever. R51.9 headache. R53.83 fatigue. R60.0 localized edema. R63.4 abnormal weight loss. R41.82 altered mental status. R45.851 suicidal ideation.</td></tr>
<tr><td>Abnormal findings</td><td>R73.09 elevated blood glucose. R73.03 prediabetes. R74.01 elevated liver transaminases. R97.20 elevated PSA. R91.8 abnormal lung field imaging. R94.31 abnormal electrocardiogram.</td></tr>
</tbody></table>
<p><b>Using unspecified and symptom codes.</b> At the end of an encounter without a definitive diagnosis, symptom codes are appropriate. Do not code ‘probable,’ ‘suspected,’ or ‘rule out’ conditions in the outpatient setting. When a patient is seen to rule out a condition that is then excluded, Z03.- codes (for observation for suspected conditions) may apply. Multiple related symptoms can be reported when no diagnosis ties them together, but not when one explains the others.</p>`,
    steps: [
      "Check whether the provider documented a definitive diagnosis that explains the symptoms.",
      "If not, code the symptoms that were evaluated at the visit.",
      "For abnormal findings, look for the provider's statement of significance or follow-up.",
      "Choose the most specific code available (for example, the duration or type of the symptom).",
      "Never code a ‘rule out,’ ‘probable,’ or ‘suspected’ condition in outpatient settings.",
    ],
    lab: [
      [
        "The note documents ‘fatigue and weight loss, work-up in progress.’ No diagnosis yet.",
        "R53.83 (other fatigue) and R63.4 (abnormal weight loss). Both are symptoms without an established diagnosis.",
      ],
      [
        "The lab reports a glucose of 135. The provider does not comment on it.",
        "Do not code it. Abnormal findings are coded only when the provider indicates clinical significance.",
      ],
      [
        "The provider writes: ‘Elevated PSA, 7.2, will repeat in 3 months and refer to urology.’",
        "R97.20 (elevated prostate specific antigen). The provider indicated significance and ordered follow-up.",
      ],
      [
        "A patient is seen for chest pain and the provider documents ‘chest pain due to costochondritis.’",
        "Code costochondritis (M94.0), not chest pain. The symptom is explained by the definitive diagnosis.",
      ],
      [
        "A patient with a normal evaluation for a suspected condition that is ruled out at the visit.",
        "Consider Z03.89 (encounter for observation for other suspected diseases and conditions ruled out), or the symptom codes if the symptoms remain unexplained.",
      ],
    ],
    case: "A coder reports R73.09 for a mildly elevated glucose on a lab sheet when the provider's note does not mention it.",
    model:
      "The provider did not indicate clinical significance, so the abnormal finding is not coded. Remove R73.09. If the lab result matters to the claim, send a non-leading query asking the provider whether the finding is clinically significant and whether a diagnosis applies.",
    mistakes: [
      "Coding abnormal results the provider did not address.",
      "Coding symptoms that belong to a confirmed diagnosis.",
      "Coding ‘probable’ conditions.",
    ],
    drills: [
      "Memorize twenty common R codes with their meanings.",
      "Rewrite ten uncertain-diagnosis statements into codable symptom statements.",
      "Write a neutral query about an unaddressed lab value.",
    ],
    rubric: [
      "Symptom coding follows the definitive-diagnosis rule.",
      "Abnormal findings need provider significance.",
      "Uncertain diagnoses are not coded.",
      "Queries are neutral.",
    ],
    scenario:
      "A lab sheet shows an abnormal value that the provider never mentions. Should it be coded?",
    answers: [
      "No; the provider must indicate clinical significance",
      "Yes, the coder decides if it is abnormal",
      "Yes, always",
    ],
    correct: 0,
    why: "Abnormal findings are coded only when the provider indicates their clinical significance.",
    taglish:
      "Ang Chapter 18 (R codes) ay para sa sintomas, senyales, at abnormal na resulta. Gamitin ang sintomas kapag wala pang kumpirmadong diagnosis. Huwag i-code ang sintomas na bahagi na ng kumpirmadong sakit. Ang abnormal na lab o imaging ay i-code lang kapag sinabi ng provider na mahalaga ito. At sa outpatient, huwag i-code ang ‘probable’ o ‘rule out’.",
    tip: "Ask two questions: ‘Is there a definitive diagnosis?’ and ‘Did the provider say this result matters?’ Two yes-or-no answers settle most R-code decisions.",
    mentor:
      "Practice turning five vague notes into codable symptom lists with a partner.",
    remember: [
      "Code symptoms only when no related definitive diagnosis exists.",
      "Abnormal findings need the provider's statement of significance.",
      "Never code ‘probable’ or ‘rule out’ in outpatient settings.",
    ],
  },
  {
    title: "Infections, sepsis, and HIV",
    desc: "Organism codes, MRSA, sepsis sequencing and severity, HIV status versus disease, and hepatitis, with the rules that govern each.",
    time: "60 min",
    objectives: [
      "Code infections with and without an identified organism.",
      "Sequence sepsis and its organ dysfunction codes correctly.",
      "Differentiate HIV disease from asymptomatic HIV status.",
    ],
    concept: `<p>Chapter 1 (A00–B99) covers infectious and parasitic diseases. Many infections are coded by the <b>body site</b> in another chapter, with an additional code from B95–B97 for the organism, for example a urinary tract infection (N39.0) with B96.20 for <em>E. coli</em>. Others are classified in Chapter 1 by the organism or disease.</p>
<p><b>MRSA.</b> A documented MRSA infection at an unspecified site is A49.02. When MRSA is the cause of a condition classified elsewhere, use the condition code plus B95.62 (MRSA as the cause of diseases classified elsewhere). A history of MRSA infection is Z86.14 and MRSA colonization is Z22.322.</p>
<p><b>Sepsis.</b> Sepsis is a systemic response to infection. Code sepsis with the organism when documented (A41.01 for MSSA, A41.02 for MRSA, A41.51 for <em>E. coli</em>) or A41.9 when the organism is not identified. <b>Sequencing:</b> code the systemic infection (sepsis) first, followed by a code for the localized infection if present. If sepsis is present with organ dysfunction (‘severe sepsis’), add R65.20 (severe sepsis without septic shock) or R65.21 (with septic shock) and codes for each organ dysfunction. Sepsis due to a postprocedural infection and sepsis in obstetric patients have special sequencing rules. In the outpatient setting sepsis is seldom diagnosed, but inpatient coders see it often. Query when documentation is unclear or when clinical indicators seem not to support the diagnosis.</p>
<p><b>HIV.</b> B20 is HIV disease and is used for patients with symptomatic HIV or an AIDS-defining condition, with codes for each related condition. Z21 is asymptomatic HIV infection status. Once a patient has had an HIV-related illness, B20 continues to apply. Z11.4 is screening for HIV, and R75 is inconclusive laboratory evidence of HIV. Testing and counseling for HIV, and records of HIV status, have strong confidentiality protections under state law and HIPAA, so handle them with extra care.</p>
<p><b>Hepatitis.</b> Chronic viral hepatitis C is B18.2. Acute hepatitis C is B17.1-. Carrier status, history, and exposure have Z codes. Always code from the provider's documentation of the type, acuity, and complications.</p>`,
    terms: [
      ["A41.9", "Sepsis, unspecified organism."],
      ["A41.02", "Sepsis due to methicillin resistant Staphylococcus aureus."],
      ["R65.20 / R65.21", "Severe sepsis without / with septic shock."],
      [
        "A49.02",
        "Methicillin resistant Staphylococcus aureus infection, unspecified site.",
      ],
      ["B95.62", "MRSA as the cause of diseases classified elsewhere."],
      ["B20", "Human immunodeficiency virus [HIV] disease."],
      [
        "Z21",
        "Asymptomatic human immunodeficiency virus [HIV] infection status.",
      ],
      ["B18.2", "Chronic viral hepatitis C."],
    ],
    steps: [
      "Identify the infection, its site, and any organism the provider documented.",
      "Check whether the site code needs an additional organism code.",
      "For sepsis, sequence the systemic code first and add severity and organ dysfunction codes.",
      "For HIV, decide between symptomatic disease and asymptomatic status from the provider's documentation.",
      "Apply the confidentiality rules for HIV and similar conditions before sharing records.",
    ],
    lab: [
      [
        "A patient has a urinary tract infection due to E. coli.",
        "N39.0 plus B96.20 for the organism.",
      ],
      [
        "A patient has pneumonia due to MRSA.",
        "Code the pneumonia (J15.212, pneumonia due to MRSA, which combines the organism) rather than separate codes, per the Tabular List.",
      ],
      [
        "A patient has sepsis due to a urinary tract infection with E. coli, with acute kidney failure due to sepsis.",
        "A41.51 first, then R65.20 for severe sepsis with the organ dysfunction code (N17.9 acute kidney failure, unspecified), and N39.0 for the localized infection. Verify with the sequencing rules.",
      ],
      [
        "A patient has a positive HIV test and no symptoms.",
        "Z21 (asymptomatic HIV infection status), unless the provider documents symptomatic disease.",
      ],
      [
        "A patient with a history of an AIDS-defining illness is now stable.",
        "B20 continues to apply, since the patient had an HIV-related illness.",
      ],
    ],
    case: "A coder codes sepsis from a fever and a high white blood cell count with no documented sepsis diagnosis.",
    model:
      "Coders do not diagnose. Sepsis must be documented by the provider. If the clinical picture suggests sepsis but only ‘infection’ is documented, send a non-leading query listing the clinical indicators with options such as ‘sepsis,’ ‘localized infection only,’ ‘other,’ and ‘unable to determine.’",
    mistakes: [
      "Coding sepsis without provider documentation.",
      "Sequencing the localized infection before sepsis.",
      "Using Z21 for a patient with a history of an HIV-related illness.",
      "Forgetting the organism code.",
    ],
    drills: [
      "Create a sepsis sequencing flow chart.",
      "Code ten fictional infection notes.",
      "List three situations where HIV record confidentiality requires special care.",
    ],
    rubric: [
      "Organisms and sites are combined correctly.",
      "Sepsis sequencing and severity are right.",
      "HIV status and disease are distinguished.",
      "No diagnosis is made by the coder.",
    ],
    scenario:
      "Sepsis is documented with a urinary tract infection. Which is sequenced first?",
    answers: [
      "The sepsis code",
      "The urinary tract infection code",
      "Either one",
    ],
    correct: 0,
    why: "The systemic infection (sepsis) is sequenced first, followed by the localized infection.",
    taglish:
      "Sa infection coding, gamitin ang site code at dagdagan ng B95–B97 para sa organism, tulad ng N39.0 at B96.20 para sa E. coli. Sa sepsis, ang sepsis ang nauuna, tapos ang localized infection, at R65.20 o R65.21 kung severe. Ang B20 ay symptomatic HIV disease at ang Z21 ay asymptomatic na HIV status. Ang diagnosis ng sepsis ay dapat nanggaling sa provider; kung hindi malinaw, mag-query.",
    tip: "Whenever a chart says ‘sepsis,’ stop and list three things: organism, source infection, organ dysfunction. They are your three code families.",
    mentor:
      "Explain sepsis sequencing to a partner with a urinary source example.",
    remember: [
      "Sepsis is sequenced first, then the localized infection and severity codes.",
      "The provider must document sepsis. Coders do not diagnose it.",
      "B20 is HIV disease. Z21 is asymptomatic HIV status.",
    ],
  },
  {
    title: "Blood and immune disorders, anemia, and clotting",
    desc: "Types of anemia, anemia in other diseases, thrombocytopenia, neutropenia, sickle cell disease, and drug-related blood conditions.",
    time: "50 min",
    objectives: [
      "Choose the code for the documented type and cause of anemia.",
      "Apply the ‘code first’ rule for anemia in chronic disease.",
      "Report blood count abnormalities and drug effects accurately.",
    ],
    concept: `<p>Chapter 3 (D50–D89) covers diseases of the blood and blood-forming organs and certain immune disorders. Anemia is the most common. Anemia is coded by <b>type or cause</b>, so the documentation matters.</p>
<table class="ref-table"><thead><tr><th>Condition</th><th>Examples (verify in the current set)</th></tr></thead><tbody>
<tr><td>Nutritional anemias</td><td>D50.9 iron deficiency anemia, unspecified. D51.0 vitamin B12 deficiency anemia due to intrinsic factor deficiency. D52.9 folate deficiency anemia, unspecified. D53.9 nutritional anemia, unspecified.</td></tr>
<tr><td>Anemia due to other conditions</td><td>D63.1 anemia in chronic kidney disease (code first the CKD). D63.0 anemia in neoplastic disease (code first the neoplasm). D64.81 anemia due to antineoplastic chemotherapy. D62 acute posthemorrhagic anemia.</td></tr>
<tr><td>Unspecified</td><td>D64.9 anemia, unspecified.</td></tr>
<tr><td>Hemoglobinopathies</td><td>D57.1 sickle-cell disease without crisis.</td></tr>
<tr><td>Platelets and white cells</td><td>D69.6 thrombocytopenia, unspecified. D70.9 neutropenia, unspecified. D72.829 elevated white blood cell count, unspecified.</td></tr>
<tr><td>Coagulation</td><td>D68.32 hemorrhagic disorder due to extrinsic circulating anticoagulants. Z79.01 long-term use of anticoagulants.</td></tr>
</tbody></table>
<p><b>Rules.</b> Use the specific type of anemia the provider documents. If only ‘anemia’ is documented with a known cause, such as CKD, look for the Index entry ‘anemia, in (due to) chronic kidney disease’ and the ‘code first’ note: the chronic disease is sequenced first. For anemia due to chemotherapy, code D64.81 and the neoplasm and treatment as documented, following the sequencing instructions. A <b>blood count value</b> alone does not establish a diagnosis. Anemia must be documented by the provider, and the provider's clinical judgment determines whether a drug caused the condition. If a patient on warfarin has bleeding from the drug taken properly, use the adverse effect rules from the injury and poisoning lesson with D68.32 as applicable.</p>`,
    steps: [
      "Find the type and cause of the anemia in the provider's documentation.",
      "Look up the Index entry for the cause and read the ‘code first’ or ‘use additional code’ notes.",
      "Sequence the underlying condition first when the note requires it.",
      "Add drug or treatment codes only when documented.",
      "Never code from a lab value alone. Send a neutral query if the cause is unclear.",
    ],
    lab: [
      ["‘Iron deficiency anemia.’", "D50.9."],
      [
        "‘Anemia due to stage 4 chronic kidney disease.’",
        "N18.4 first, then D63.1, following the ‘code first’ note.",
      ],
      [
        "A patient on chemotherapy for breast cancer develops anemia, documented as due to the chemotherapy.",
        "D64.81 (anemia due to antineoplastic chemotherapy) with the breast cancer and chemotherapy status codes as documented. Follow the sequencing notes.",
      ],
      [
        "The lab shows a hemoglobin of 9.5 and the provider's note does not mention anemia.",
        "Do not code anemia. A lab value alone is not a diagnosis. Send a non-leading query if the claim depends on it.",
      ],
      [
        "Documented ‘thrombocytopenia.’",
        "D69.6 (thrombocytopenia, unspecified) unless a more specific type is documented.",
      ],
    ],
    case: "A coder lists D64.9 and N18.4 for ‘anemia of chronic kidney disease’ in that order.",
    model:
      "The Index entry for anemia in chronic kidney disease directs D63.1 with a ‘code first’ note for the CKD. Replace D64.9 with D63.1 and list N18.4 first. Check whether hypertension also affects the CKD coding.",
    mistakes: [
      "Using unspecified anemia when a cause is documented.",
      "Sequencing the manifestation before the cause.",
      "Coding anemia from a lab value.",
    ],
    drills: [
      "Make a table of anemia types with the cause and the code.",
      "Code ten fictional blood disorder statements.",
      "Write a neutral query for ‘low hemoglobin’ with no diagnosis.",
    ],
    rubric: [
      "The type and cause are documented by the provider.",
      "Sequencing follows ‘code first’ notes.",
      "Lab values are not used alone.",
      "Queries are neutral.",
    ],
    scenario:
      "A patient has anemia due to chronic kidney disease. What is the sequence?",
    answers: [
      "CKD code first, then D63.1",
      "D63.1 first, then CKD",
      "Only D64.9",
    ],
    correct: 0,
    why: "D63.1 has a ‘code first’ note, so the underlying kidney disease is sequenced first.",
    taglish:
      "Ang anemia ay kino-code ayon sa uri o sanhi na dokumentado ng provider: iron deficiency (D50.9), anemia sa CKD (D63.1), dahil sa chemotherapy (D64.81), at D64.9 kung walang detalye. Sa D63.1, ang CKD ang nauuna dahil sa ‘code first’ na note. Huwag mag-code ng anemia mula lang sa lab value; kailangan itong nakasulat ng provider.",
    tip: "Whenever you see ‘anemia of…’ or ‘anemia in…’ look for a ‘code first’ note before you finalize the order.",
    mentor:
      "Say the three most common ‘anemia in…’ examples with their sequencing rules aloud.",
    remember: [
      "Code anemia by documented type or cause.",
      "Anemia in chronic disease follows the ‘code first’ rule.",
      "A lab value alone is not a diagnosis.",
    ],
  },
  {
    title: "Substance use, abuse, and dependence coding",
    desc: "The hierarchy of use, abuse, and dependence, remission, intoxication and withdrawal, tobacco, and the privacy rules for substance use treatment records.",
    time: "55 min",
    objectives: [
      "Choose between use, abuse, and dependence codes using the guideline hierarchy.",
      "Code remission, intoxication, and withdrawal from documentation.",
      "Apply the extra privacy protections for substance use treatment records.",
    ],
    concept: `<p>Codes for psychoactive substance disorders are in F10–F19, with one category for each substance class: alcohol (F10), opioids (F11), cannabis (F12), sedatives (F13), cocaine (F14), other stimulants (F15), hallucinogens (F16), nicotine (F17), inhalants (F18), and other or multiple substances (F19). Each category has subcategories for <b>use</b>, <b>abuse</b>, and <b>dependence</b>, and further characters for complications such as intoxication, withdrawal, and substance-induced disorders.</p>
<p><b>Hierarchy.</b> When the documentation gives more than one of use, abuse, and dependence for the same substance, assign only one code, in this priority: dependence first, then abuse, then use. The provider's documentation of a use disorder as mild corresponds to abuse and as moderate or severe corresponds to dependence.</p>
<p><b>Examples.</b> F10.10 alcohol abuse, uncomplicated. F10.20 alcohol dependence, uncomplicated. F10.21 alcohol dependence, in remission. F10.220 alcohol dependence with intoxication, uncomplicated. F10.239 alcohol dependence with withdrawal, unspecified. F11.20 opioid dependence, uncomplicated. F12.10 cannabis abuse, uncomplicated. F14.10 cocaine abuse, uncomplicated. F17.210 nicotine dependence, cigarettes, uncomplicated. F17.211 nicotine dependence, cigarettes, in remission. F17.290 nicotine dependence, other tobacco product. Z72.0 tobacco use.</p>
<p><b>Remission.</b> Codes for ‘in remission’ require the provider's clinical judgment that the patient is in remission. Do not assume remission because a note says the patient has not used a substance recently.</p>
<p><b>Privacy.</b> Treatment records from federally assisted substance use disorder programs are protected by <b>42 CFR Part 2</b>, which has stricter consent requirements than ordinary HIPAA and limits redisclosure. If you are not certain that a record is covered, stop and ask before sharing or copying anything.</p>`,
    steps: [
      "Identify the substance and the provider's documented term: use, abuse, or dependence, or the severity of a use disorder.",
      "If more than one term appears, apply the hierarchy and report only the highest.",
      "Check for intoxication, withdrawal, remission, or substance-induced disorders and choose the combined code.",
      "Confirm that remission is documented by the provider.",
      "Check privacy rules before sharing any record that may be covered by Part 2.",
    ],
    lab: [
      [
        "‘Alcohol dependence with withdrawal.’",
        "F10.239 (alcohol dependence with withdrawal, unspecified) or a more specific withdrawal code if documented.",
      ],
      [
        "A note documents both opioid abuse and opioid dependence for the same patient.",
        "Report only F11.20 (dependence). The hierarchy gives dependence priority over abuse.",
      ],
      [
        "‘Cannabis use disorder, mild.’",
        "F12.10 (cannabis abuse, uncomplicated), since mild corresponds to abuse.",
      ],
      [
        "‘Nicotine dependence, cigarettes, in sustained remission.’",
        "F17.211 (nicotine dependence, cigarettes, in remission), if the provider documents remission.",
      ],
      [
        "A coder is asked to email a patient's substance use program records to a billing vendor.",
        "Stop. These records may be protected by 42 CFR Part 2. Ask the supervisor and confirm consent and the proper process before sending.",
      ],
    ],
    case: "A coder assigns F10.21 because a note says ‘has not had a drink in two weeks.’",
    model:
      "Remission requires the provider's clinical judgment. ‘Has not had a drink in two weeks’ is a patient report, not a documented remission. Code the documented diagnosis (for example F10.20) and, if relevant, send a non-leading query about the patient's current status.",
    mistakes: [
      "Coding more than one of use, abuse, and dependence for the same substance.",
      "Coding remission without provider documentation.",
      "Sharing Part 2 records without checking consent.",
    ],
    drills: [
      "Make a table of the F10 to F19 categories with one example for each.",
      "Code ten fictional substance use statements.",
      "Write the privacy questions you would ask before sending any treatment record.",
    ],
    rubric: [
      "The hierarchy is applied.",
      "Remission is supported.",
      "Combined codes are chosen for complications.",
      "Privacy rules trigger a stop and ask.",
    ],
    scenario:
      "Documentation lists both abuse and dependence for the same drug. Which is reported?",
    answers: ["Dependence only", "Abuse only", "Both"],
    correct: 0,
    why: "When more than one is documented, only the highest in the hierarchy (dependence) is assigned.",
    taglish:
      "Ang F10 hanggang F19 ay para sa substance use, abuse, at dependence. Kapag may higit sa isa sa dokumentasyon, isa lang ang i-code: dependence muna, tapos abuse, tapos use. Ang ‘in remission’ ay kailangang sabihin ng provider. May mga code para sa intoxication at withdrawal. At sa records ng substance use treatment, may mas mahigpit na proteksyon ang 42 CFR Part 2, kaya magtanong muna bago magbahagi.",
    tip: "Use the sentence ‘dependence beats abuse beats use’ to remember the hierarchy.",
    mentor:
      "Explain the hierarchy and the remission rule to a partner using an alcohol example.",
    remember: [
      "Dependence takes priority over abuse, and abuse over use.",
      "Remission must be documented by the provider.",
      "Part 2 records need extra consent checks before sharing.",
    ],
  },
  {
    title: "Obesity, nutrition, and BMI coding",
    desc: "Obesity class codes, BMI Z codes, underweight and malnutrition, deficiency states, and fluid and electrolyte disorders.",
    time: "50 min",
    objectives: [
      "Code obesity with the class documented and add the matching BMI code.",
      "Apply the rule that BMI codes need an associated diagnosis.",
      "Code common nutritional deficiencies and electrolyte disorders.",
    ],
    concept: `<p>Endocrine, nutritional, and metabolic conditions are in Chapter 4 (E00–E89). Obesity coding has changed in recent years, so use the current code set.</p>
<p><b>Obesity.</b> E66.9 is obesity, unspecified. More specific codes include E66.01 (morbid or severe obesity due to excess calories), E66.09 (other obesity due to excess calories), E66.3 (overweight), and, in recent fiscal years, class-specific codes E66.811 (obesity, class 1), E66.812 (class 2), and E66.813 (class 3). Verify the exact codes and descriptions in the current year's set. Use the class the provider documents. Do not assign a class from the BMI alone.</p>
<p><b>BMI.</b> Z68.- codes report body mass index. Adult codes run from Z68.1 (19.9 or less) through Z68.45 (70 or more), for example Z68.34 for 34.0 to 34.9. For children and teens, the codes are by percentile (Z68.51 through Z68.56 in the current code set). <b>BMI codes may be assigned from other clinicians' documentation, but only when an associated reportable diagnosis, such as obesity or underweight, is documented by the provider.</b> BMI codes are secondary and are never first-listed.</p>
<p><b>Malnutrition and deficiencies.</b> E43 unspecified severe protein-calorie malnutrition, E44.0 moderate protein-calorie malnutrition, E46 unspecified protein-calorie malnutrition, E55.9 vitamin D deficiency, unspecified, and E53.8 deficiency of other specified B group vitamins.</p>
<p><b>Fluids and electrolytes.</b> E86.0 dehydration, E87.1 hypo-osmolality and hyponatremia, E87.5 hyperkalemia, and E87.6 hypokalemia. Diagnoses must come from the provider and are not assigned from lab values. GLP-1 medicines for diabetes or weight management are reported with the long-term drug status codes only when documented for that use.</p>`,
    steps: [
      "Find the provider's diagnosis: obesity (and class), overweight, underweight, or malnutrition.",
      "Assign the diagnosis with the highest documented specificity.",
      "Add the BMI code from the recorded BMI when the provider has documented an associated diagnosis.",
      "Add deficiency or electrolyte codes only when the provider documents them.",
      "Verify codes in the current fiscal year's set.",
    ],
    lab: [
      [
        "The provider documents ‘obesity’ and the nurse records a BMI of 34.",
        "E66.9 for the provider's obesity (or the class-specific code if the provider documents the class) plus Z68.34 for the BMI.",
      ],
      [
        "The nurse records a BMI of 41 and the provider does not mention obesity.",
        "Do not assign a BMI code, because there is no associated provider diagnosis. Send a non-leading query if appropriate.",
      ],
      [
        "The provider documents ‘moderate protein-calorie malnutrition.’",
        "E44.0.",
      ],
      ["A patient with a documented vitamin D deficiency.", "E55.9."],
      [
        "The provider documents hypokalemia and orders a supplement.",
        "E87.6 (hypokalemia).",
      ],
    ],
    case: "A coder assigns obesity class 2 because the BMI is 37.",
    model:
      "The coder cannot assign an obesity class from a BMI. The provider must document the diagnosis and class. Code the provider's documented diagnosis (for example E66.9) and the matching BMI code (Z68.37), and send a non-leading query if the class is important to the claim.",
    mistakes: [
      "Assigning a class from a BMI.",
      "Using a BMI code without an associated diagnosis.",
      "Listing a BMI code first.",
      "Coding electrolyte disorders from lab values.",
    ],
    drills: [
      "Make a table of BMI ranges with their Z68 codes.",
      "Code ten fictional nutrition and metabolic statements.",
      "Write a neutral query about an unclassified obesity diagnosis.",
    ],
    rubric: [
      "Diagnosis and BMI are paired correctly.",
      "BMI codes are secondary.",
      "Class is documented by the provider.",
      "Codes were verified in the current set.",
    ],
    scenario:
      "A nurse records a BMI of 41 and the provider never documents obesity. What is reported?",
    answers: [
      "No BMI code, because there is no associated provider diagnosis",
      "Z68.41 first-listed",
      "E66.01 from the BMI",
    ],
    correct: 0,
    why: "BMI codes may come from other clinicians but need an associated reportable diagnosis documented by the provider.",
    taglish:
      "Sa obesity, gamitin ang diagnosis at class na isinulat ng provider (E66.9 o ang class-specific code sa kasalukuyang code set), at idagdag ang BMI Z68 code. Puwedeng kunin ang BMI sa nurse, pero kailangan may diagnosis mula sa provider tulad ng obesity. Ang BMI code ay hindi kailanman first-listed. Huwag mag-assign ng class mula sa BMI lang.",
    tip: "Keep the BMI range card with the Z68 codes at your desk. Match the number to the range, then confirm the provider's diagnosis.",
    mentor:
      "Explain the BMI rule to a partner using one case with a diagnosis and one without.",
    remember: [
      "BMI codes need an associated provider-documented diagnosis and are never first-listed.",
      "Do not assign an obesity class from the BMI alone.",
      "Electrolyte and nutrition diagnoses come from the provider, not from lab values.",
    ],
  },
]);
