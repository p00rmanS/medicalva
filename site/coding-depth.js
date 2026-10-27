// In-depth lessons: medical language by body system, plus deep dives on E/M decision making,
// modifier 59 and NCCI, denial management, compliance programs, and Medicare.
addCodingLessons([
  {
    title: "Medical language in depth: heart, vessels, and blood",
    desc: "Combining forms, suffixes, conditions, tests, and procedures for the cardiovascular and blood systems, with decoding drills.",
    time: "60 min",
    objectives: [
      "Decode cardiovascular and blood terms from their word parts.",
      "Recognize the common conditions, tests, and procedures by name.",
      "Connect each term family to the ICD-10-CM chapter and CPT section where it is coded.",
    ],
    concept: `<p>The cardiovascular system moves blood. The <b>heart</b> pumps, <b>arteries</b> carry blood away from the heart, <b>veins</b> return it, and <b>capillaries</b> exchange oxygen and nutrients. The heart has four chambers: two atria on top and two ventricles below, with valves between them and at the exits. The blood itself carries oxygen (red cells), fights infection (white cells), and forms clots (platelets).</p>
<p>Almost every cardiovascular word is built from the parts below. If you can split a word into its root, its prefix, and its suffix, you can usually say what it means. Remember that <em>-itis</em> names a condition, <em>-ectomy</em>, <em>-otomy</em>, <em>-ostomy</em>, and <em>-plasty</em> name procedures, and <em>-gram</em> and <em>-graphy</em> name a record and the process of recording it.</p>
<p><b>Common conditions.</b> Hypertension (high blood pressure), atherosclerosis (hardening of arteries with fatty plaque), angina pectoris (chest pain from reduced blood flow to heart muscle), myocardial infarction (heart attack), arrhythmia (abnormal rhythm), atrial fibrillation, heart failure, cardiomyopathy (disease of heart muscle), endocarditis and pericarditis (inflammation of the lining and the sac), deep vein thrombosis (a clot in a deep vein), aneurysm (a bulge in a vessel wall), and varicose veins.</p>
<p><b>Common tests and procedures.</b> Electrocardiogram (ECG), echocardiogram, stress test, cardiac catheterization, angioplasty and stent placement, coronary artery bypass graft (CABG), pacemaker insertion, and ablation. Blood tests include troponin, BNP, lipid panel, CBC, and PT/INR.</p>
<p><b>Where it is coded.</b> Circulatory diseases are in ICD-10-CM Chapter 9 (I00–I99). Diseases of the blood and certain immune disorders are in Chapter 3 (D50–D89). Cardiovascular surgery codes are in CPT 33016–37799, and the cardiovascular tests discussed earlier are in the Medicine section.</p>`,
    terms: [
      ["cardi/o", "Heart (cardiology, cardiomegaly)."],
      ["angi/o", "Vessel (angioplasty)."],
      ["arteri/o", "Artery (arteriosclerosis)."],
      ["ven/o, phleb/o", "Vein (venous, phlebitis)."],
      ["aort/o", "Aorta (aortic stenosis)."],
      ["atri/o", "Atrium (atrial)."],
      ["ventricul/o", "Ventricle (ventricular)."],
      ["valv/o, valvul/o", "Valve (valvuloplasty)."],
      ["my/o", "Muscle (myocardium is heart muscle)."],
      ["endo- / peri-", "Within / around (endocardium, pericardium)."],
      ["ather/o", "Plaque or fatty substance."],
      ["scler/o", "Hard (atherosclerosis)."],
      ["thromb/o", "Clot (thrombosis)."],
      ["isch/o", "Hold back (ischemia: blood held back)."],
      ["brady- / tachy-", "Slow / fast (bradycardia, tachycardia)."],
      ["hem/o, hemat/o", "Blood (hematology)."],
      ["erythr/o", "Red (erythrocyte)."],
      ["leuk/o", "White (leukocyte)."],
      ["-emia", "Blood condition (anemia, hyperlipidemia)."],
      ["-cytosis / -penia", "Increase in cells / deficiency of cells."],
      ["-poiesis", "Formation (hematopoiesis)."],
      ["-stenosis", "Narrowing (aortic stenosis)."],
      [
        "-gram / -graphy",
        "The record / the process of recording (electrocardiogram, angiography).",
      ],
    ],
    steps: [
      "Split the term into prefix, root or combining form, and suffix.",
      "Say the meaning of each part, starting from the suffix and working backward.",
      "Decide whether the term is a condition, a procedure, a test, or an anatomical structure.",
      "Check the meaning in an approved medical dictionary and note any irregular terms.",
      "Place the term in the right ICD-10-CM chapter or CPT section.",
    ],
    lab: [
      [
        "Decode ‘pericarditis.’",
        "peri- (around) + card (heart) + -itis (inflammation) = inflammation of the sac around the heart. It is a condition, coded in Chapter 9.",
      ],
      [
        "Decode ‘bradycardia.’",
        "brady- (slow) + card (heart) + -ia (condition) = abnormally slow heart rate. A finding, often a symptom code (R00.1) unless a definitive diagnosis is documented.",
      ],
      [
        "Decode ‘thrombocytopenia.’",
        "thrombo (clot, here platelet) + cyto (cell) + -penia (deficiency) = too few platelets. A blood condition, coded in Chapter 3.",
      ],
      [
        "Decode ‘angioplasty.’",
        "angio (vessel) + -plasty (surgical repair) = surgical repair of a vessel. A procedure, coded from CPT.",
      ],
      [
        "Decode ‘cardiomegaly.’",
        "cardio (heart) + -megaly (enlargement) = enlarged heart.",
      ],
      [
        "Build a word: ‘inflammation of a vein.’",
        "phleb/o + -itis = phlebitis.",
      ],
      [
        "Build a word: ‘surgical removal of the lining of an artery.’",
        "The term is endarterectomy: end- (within) + arter (artery) + -ectomy (removal) = removal of the inner lining of an artery.",
      ],
      [
        "What is the difference between an ECG and an echocardiogram?",
        "An electrocardiogram records the heart's electrical activity. An echocardiogram uses sound waves to image the heart's structure and motion.",
      ],
      [
        "A note reads ‘s/p CABG.’ What does it tell you?",
        "‘s/p’ means status post (after). CABG is coronary artery bypass graft, a procedure. The patient has a history of bypass surgery (status code Z95.1, presence of aortocoronary bypass graft, when relevant to the visit).",
      ],
    ],
    case: "A note says ‘ischemic cardiomyopathy with chronic systolic heart failure, s/p stent.’ A trainee is unsure how many conditions it describes.",
    model:
      "Break it apart. Ischemic cardiomyopathy: disease of the heart muscle (cardiomyopathy) caused by reduced blood flow (ischemic). Chronic systolic heart failure: a second, related condition about the pump's squeezing function. ‘s/p stent’ is history of a procedure and may support a status code. Look up each condition in the Index, check combination and ‘code first’ notes, and verify in the Tabular List.",
    mistakes: [
      "Treating a procedure term as a diagnosis.",
      "Memorizing words instead of word parts.",
      "Ignoring prefixes such as endo- and peri-.",
    ],
    drills: [
      "Create a flashcard deck of the 23 word parts and review it daily using your own cards.",
      "Decode twenty cardiovascular terms from a medical dictionary without looking at the definitions first.",
      "Write five sentences using five terms and underline each suffix.",
    ],
    rubric: [
      "Each term is split correctly.",
      "Conditions and procedures are separated.",
      "Chapter and section placement is correct.",
      "Definitions come from an approved source.",
    ],
    scenario: "What does the suffix -ectomy tell you about a term?",
    answers: [
      "It names a surgical removal",
      "It names a condition",
      "It names a test",
    ],
    correct: 0,
    why: "-ectomy means surgical removal, so a term ending in it names a procedure.",
    taglish:
      "Ang puso ay nagbobomba, ang arteries ay naglalabas ng dugo mula sa puso, at ang veins ang nagbabalik. Para madaling basahin ang mga salita, hatiin sa prefix, root, at suffix: cardi/o ay puso, angi/o ay vessel, thromb/o ay clot, -itis ay pamamaga, -ectomy ay pagtanggal, -plasty ay pagkumpuni. Ang mga sakit sa puso at ugat ay nasa ICD Chapter 9 at ang mga sakit sa dugo ay nasa Chapter 3.",
    tip: "Work from the end of the word backward: suffix first, then root, then prefix. It is the fastest way to decode a long term.",
    mentor:
      "Quiz a partner with five terms and have them split and define each one aloud.",
    remember: [
      "Split every term into prefix, root, and suffix.",
      "-itis is a condition. -ectomy, -otomy, -ostomy, and -plasty are procedures.",
      "Circulatory diseases are Chapter 9. Blood diseases are Chapter 3.",
    ],
  },
  {
    title: "Medical language in depth: respiratory system",
    desc: "Word parts, conditions, tests, and procedures for the airways and lungs, with decoding drills and coding connections.",
    time: "50 min",
    objectives: [
      "Decode respiratory terms from their parts.",
      "Distinguish the upper and lower respiratory tract and the main diseases of each.",
      "Connect terms to ICD-10-CM Chapter 10 and the CPT respiratory section.",
    ],
    concept: `<p>Air enters through the nose and mouth, passes the pharynx and larynx, travels down the trachea, and divides into the bronchi, bronchioles, and finally the tiny air sacs called alveoli, where oxygen enters the blood and carbon dioxide leaves. The lungs are wrapped by the pleura. The <b>upper respiratory tract</b> is the nose, pharynx, and larynx. The <b>lower respiratory tract</b> is the trachea, bronchi, and lungs.</p>
<p><b>Common conditions.</b> Asthma (reversible airway narrowing), COPD (chronic obstructive pulmonary disease, which includes chronic bronchitis and emphysema), pneumonia (infection of lung tissue), pleural effusion (fluid around the lung), pneumothorax (air in the pleural space), sleep apnea (pauses in breathing during sleep), tuberculosis, and respiratory failure. The common cold and sinusitis are upper tract infections.</p>
<p><b>Common tests and procedures.</b> Chest X-ray, spirometry (measures air flow), pulse oximetry (oxygen saturation), arterial blood gases, bronchoscopy (looking into the airways), thoracentesis (draining pleural fluid), tracheostomy (creating an opening in the trachea), and intubation.</p>
<p><b>Where it is coded.</b> Respiratory diseases are in ICD-10-CM Chapter 10 (J00–J99). Respiratory surgery is in CPT 30000–32999. Spirometry and oxygen saturation are in the Medicine section.</p>`,
    terms: [
      ["nas/o, rhin/o", "Nose (rhinitis)."],
      ["pharyng/o", "Throat (pharyngitis)."],
      ["laryng/o", "Voice box (laryngitis)."],
      ["trache/o", "Windpipe (tracheostomy)."],
      ["bronch/o", "Bronchus (bronchoscopy)."],
      ["bronchiol/o", "Bronchiole (bronchiolitis)."],
      ["alveol/o", "Air sac (alveolar)."],
      ["pneum/o, pneumon/o", "Air, or lung (pneumonia, pneumothorax)."],
      ["pulmon/o", "Lung (pulmonary)."],
      ["pleur/o", "Pleura (pleurisy)."],
      ["thorac/o", "Chest (thoracentesis)."],
      ["sinus/o", "Sinus (sinusitis)."],
      ["-pnea", "Breathing (apnea, dyspnea)."],
      ["-ptysis", "Spitting (hemoptysis: spitting blood)."],
      ["-centesis", "Puncture to remove fluid."],
      ["ox/o, ox/i", "Oxygen (hypoxia)."],
      ["capn/o", "Carbon dioxide (hypercapnia)."],
      ["spir/o", "Breathing (spirometry)."],
    ],
    steps: [
      "Split the term and identify the structure (root) and what is happening to it (suffix).",
      "Decide whether it is upper or lower tract, and whether it is infection, obstruction, fluid, air, or failure.",
      "Look for severity words such as ‘acute,’ ‘chronic,’ or ‘with exacerbation’ that change the code.",
      "Verify the term in an approved dictionary.",
      "Assign the term to its ICD-10-CM or CPT area.",
    ],
    lab: [
      [
        "Decode ‘dyspnea.’",
        "dys- (difficult, painful) + -pnea (breathing) = difficult or labored breathing. A symptom.",
      ],
      [
        "Decode ‘hemoptysis.’",
        "hemo (blood) + -ptysis (spitting) = coughing up blood.",
      ],
      [
        "Decode ‘thoracentesis.’",
        "thoraco (chest) + -centesis (puncture to remove fluid) = a procedure to remove fluid from around the lung.",
      ],
      [
        "Decode ‘tracheostomy.’",
        "tracheo (windpipe) + -ostomy (creating an opening) = a surgical opening in the trachea.",
      ],
      [
        "Decode ‘hypoxemia.’",
        "hypo- (below) + ox (oxygen) + -emia (blood condition) = low oxygen in the blood.",
      ],
      [
        "What is the difference between pneumonia and pneumothorax?",
        "Pneumonia is infection or inflammation of lung tissue. Pneumothorax is air in the pleural space causing the lung to collapse. They are different conditions with different codes.",
      ],
      [
        "‘COPD with acute exacerbation.’ What do the words tell you for coding?",
        "COPD (chronic obstructive pulmonary disease) with a sudden worsening: the combination code J44.1 applies, and a tobacco code is added if documented.",
      ],
      [
        "‘Sinusitis’ and ‘bronchitis.’ Are they upper or lower tract?",
        "Sinusitis is upper. Bronchitis is lower.",
      ],
    ],
    case: "A note says ‘acute on chronic hypoxic respiratory failure due to COPD exacerbation.’ A trainee sees three diagnoses and is unsure how they relate.",
    model:
      "Split the phrase. Respiratory failure is the condition, described as hypoxic (low oxygen) and acute on chronic (a sudden worsening of a long-term problem). COPD exacerbation is the underlying cause. Look up each in the Index, read the ‘code first’ and ‘use additional code’ notes, and send a query if severity or type is unclear.",
    mistakes: [
      "Confusing -pnea (breathing) with pneumo- (air or lung).",
      "Calling any lung infection ‘pneumonia.’",
      "Ignoring ‘acute’ and ‘chronic.’",
    ],
    drills: [
      "Decode fifteen respiratory terms from a dictionary list.",
      "Write the upper versus lower tract list from memory.",
      "Match five tests to the problem each one checks.",
    ],
    rubric: [
      "Word parts are correct.",
      "Upper and lower tract are separated.",
      "Severity words are noticed.",
      "Chapter and section are correct.",
    ],
    scenario: "What does the term thoracentesis describe?",
    answers: [
      "Removing fluid from around the lung",
      "Looking into the airways",
      "Measuring air flow",
    ],
    correct: 0,
    why: "Thoraco (chest) plus -centesis (puncture to remove fluid) describes draining fluid, often from the pleural space.",
    taglish:
      "Pumapasok ang hangin sa ilong, lalamunan, voice box, trachea, bronchi, bronchioles, at alveoli kung saan pumapasok ang oxygen sa dugo. Hatiin ang mga salita: pulmon/o ay baga, bronch/o ay bronchus, -pnea ay paghinga, -ptysis ay pag-ubo ng dugo, -centesis ay pagkuha ng likido gamit ang karayom. Ang mga sakit sa baga ay nasa ICD Chapter 10 (J00–J99).",
    tip: "Keep ‘upper’ and ‘lower’ tract lists on one card. Many coding questions begin by placing the problem in one of them.",
    mentor:
      "Say aloud the path of a breath from nose to alveoli and name each structure's root.",
    remember: [
      "Upper tract: nose, pharynx, larynx. Lower tract: trachea, bronchi, lungs.",
      "-pnea is breathing and pneumo- means air or lung.",
      "Respiratory diseases are ICD-10-CM Chapter 10 (J00–J99).",
    ],
  },
  {
    title: "Medical language in depth: digestive system",
    desc: "Word parts, organs, conditions, tests, and procedures from mouth to anus, including the liver and pancreas.",
    time: "55 min",
    objectives: [
      "Decode digestive terms from their parts.",
      "Name the organs in order and the main condition of each.",
      "Connect terms to ICD-10-CM Chapter 11 and the CPT digestive section.",
    ],
    concept: `<p>Food passes through the mouth, pharynx, esophagus, stomach, small intestine (duodenum, jejunum, ileum), large intestine (cecum, colon, rectum), and anus. The liver, gallbladder, and pancreas are accessory organs that make or store digestive juices. A short route to remember: <em>mouth, esophagus, stomach, small bowel, large bowel, rectum, anus</em>.</p>
<p><b>Common conditions.</b> GERD (acid reflux), gastritis, peptic ulcer, Crohn's disease and ulcerative colitis (inflammatory bowel diseases), irritable bowel syndrome, diverticulosis and diverticulitis, hepatitis (liver inflammation), cirrhosis (scarring of the liver), cholelithiasis (gallstones), cholecystitis (gallbladder inflammation), pancreatitis, appendicitis, and hernias.</p>
<p><b>Common tests and procedures.</b> EGD (esophagogastroduodenoscopy, an upper endoscopy), colonoscopy, sigmoidoscopy, liver function tests, abdominal ultrasound, cholecystectomy (gallbladder removal), appendectomy, colectomy, hernia repair, and colostomy or ileostomy (creating an opening for stool).</p>
<p><b>Where it is coded.</b> Digestive diseases are in ICD-10-CM Chapter 11 (K00–K95). Digestive surgery is in CPT 40490–49999, and colonoscopy codes are in the endoscopy subsection of the rectum and colon.</p>`,
    terms: [
      ["or/o, stomat/o", "Mouth (oral, stomatitis)."],
      ["esophag/o", "Esophagus (esophagitis)."],
      ["gastr/o", "Stomach (gastritis)."],
      ["duoden/o", "Duodenum."],
      ["jejun/o", "Jejunum."],
      ["ile/o", "Ileum (ileostomy)."],
      ["col/o, colon/o", "Colon (colectomy)."],
      ["sigmoid/o", "Sigmoid colon."],
      ["rect/o", "Rectum."],
      ["an/o", "Anus."],
      ["hepat/o", "Liver (hepatitis)."],
      ["cholecyst/o", "Gallbladder (cholecystectomy)."],
      ["chol/e", "Bile or gall."],
      ["pancreat/o", "Pancreas (pancreatitis)."],
      ["append/o, appendic/o", "Appendix."],
      ["-emesis", "Vomiting (hematemesis)."],
      ["-phagia", "Swallowing or eating (dysphagia)."],
      ["-rrhea", "Flow or discharge (diarrhea)."],
      ["-lith", "Stone (cholelithiasis)."],
      ["-pepsia", "Digestion (dyspepsia)."],
    ],
    steps: [
      "Locate the organ named by the root in the digestive path.",
      "Read the suffix to see whether it is inflammation, stones, removal, opening, or a view.",
      "Note severity or complication words: bleeding, obstruction, perforation, abscess.",
      "Check the term in an approved dictionary.",
      "Place it in ICD-10-CM Chapter 11 or the CPT digestive section.",
    ],
    lab: [
      [
        "Decode ‘cholecystitis.’",
        "cholecyst (gallbladder) + -itis (inflammation) = inflammation of the gallbladder.",
      ],
      [
        "Decode ‘hematemesis.’",
        "hemat (blood) + -emesis (vomiting) = vomiting blood.",
      ],
      [
        "Decode ‘dysphagia.’",
        "dys- (difficult) + -phagia (swallowing) = difficulty swallowing.",
      ],
      [
        "Decode ‘colectomy.’",
        "col (colon) + -ectomy (removal) = surgical removal of part or all of the colon.",
      ],
      [
        "Decode ‘cholelithiasis.’",
        "chole (gall) + lith (stone) + -iasis (condition) = gallstones.",
      ],
      [
        "Build a word: ‘inflammation of the stomach and intestines.’",
        "gastroenteritis (gastr/o + enter/o + -itis).",
      ],
      [
        "What is the difference between a colostomy and a colectomy?",
        "A colectomy removes part or all of the colon. A colostomy creates an opening of the colon on the abdominal wall for stool to leave the body.",
      ],
      [
        "‘Diverticulosis’ versus ‘diverticulitis.’",
        "Diverticulosis is the presence of pouches in the colon wall. Diverticulitis is inflammation or infection of those pouches. They have different codes (K57.30 and K57.32 in the uncomplicated forms).",
      ],
    ],
    case: "A note says ‘EGD with biopsy of the gastric antrum, rule out H. pylori gastritis.’",
    model:
      "EGD is an upper endoscopy. ‘Gastric antrum’ is the lower part of the stomach, so the biopsy site is the stomach. ‘Rule out’ means the diagnosis is not confirmed, so in the outpatient setting the coder would not report H. pylori gastritis as confirmed. Report the procedure from the digestive endoscopy section and the documented symptoms or findings.",
    mistakes: [
      "Mixing up colostomy and colectomy.",
      "Confusing -itis and -osis.",
      "Coding a ‘rule out’ diagnosis as confirmed.",
    ],
    drills: [
      "Draw the digestive path and label each organ with its root.",
      "Decode fifteen digestive terms.",
      "Match five conditions to their usual test.",
    ],
    rubric: [
      "Organs are in the right order.",
      "Conditions and procedures are separated.",
      "Complication words are noticed.",
      "Chapter and section are correct.",
    ],
    scenario: "A term ends in -emesis. What does it describe?",
    answers: ["Vomiting", "Swallowing", "Inflammation"],
    correct: 0,
    why: "-emesis means vomiting. Hematemesis is vomiting blood.",
    taglish:
      "Ang pagkain ay dumadaan sa bibig, esophagus, tiyan, maliit na bituka, malaking bituka, rectum, at anus. Ang atay, gallbladder, at pancreas ay tumutulong. Gamitin ang roots: gastr/o tiyan, hepat/o atay, cholecyst/o gallbladder, col/o colon. Ang -emesis ay pagsusuka, -phagia ay paglunok, at -lith ay bato. Ang mga sakit sa digestive ay nasa ICD Chapter 11 (K00–K95).",
    tip: "Draw the digestive path once on paper. Placing every new term on the drawing makes it stick.",
    mentor: "Recite the path from mouth to anus with the root of each organ.",
    remember: [
      "Know the order: mouth, esophagus, stomach, small bowel, large bowel, rectum, anus.",
      "-emesis is vomiting, -phagia is swallowing, -lith is stone.",
      "Digestive diseases are ICD-10-CM Chapter 11 (K00–K95).",
    ],
  },
  {
    title: "Medical language in depth: urinary and reproductive systems",
    desc: "Word parts, structures, conditions, tests, and procedures for the kidneys, bladder, and male and female reproductive systems, including pregnancy terms.",
    time: "55 min",
    objectives: [
      "Decode urinary and reproductive terms.",
      "Use obstetric terms such as gravida, para, and trimester correctly.",
      "Connect terms to ICD-10-CM Chapters 14 and 15 and the CPT sections.",
    ],
    concept: `<p><b>Urinary system.</b> The kidneys filter blood and make urine, the ureters carry it to the bladder, and the urethra carries it out of the body. Filtering units inside the kidneys are the glomeruli. Common conditions: urinary tract infection, cystitis (bladder inflammation), pyelonephritis (kidney infection), kidney stones, chronic kidney disease, and renal failure. Procedures and tests: urinalysis, cystoscopy, lithotripsy, dialysis, and kidney transplant.</p>
<p><b>Male reproductive system.</b> Testes, epididymis, vas deferens, prostate, and penis. Conditions: benign prostatic hyperplasia, prostatitis, and prostate cancer. Procedures: vasectomy, TURP (transurethral resection of the prostate), and PSA testing.</p>
<p><b>Female reproductive system.</b> Ovaries, fallopian tubes, uterus, cervix, vagina, and breasts. Conditions: endometriosis, fibroids (leiomyomas), polycystic ovary syndrome, cervicitis, and breast conditions. Procedures: Pap smear, mammography, hysterectomy, and cesarean section.</p>
<p><b>Pregnancy terms.</b> <em>Gravida</em> is the number of pregnancies, and <em>para</em> is the number of births after 20 weeks (or of viable gestation, depending on the system). A pregnancy is divided into three trimesters, with the third beginning at 28 weeks. <em>Antepartum</em>, <em>intrapartum</em>, and <em>postpartum</em> mean before, during, and after delivery. <em>Preeclampsia</em> is high blood pressure with other signs in pregnancy.</p>
<p><b>Where it is coded.</b> Genitourinary diseases are ICD-10-CM Chapter 14 (N00–N99). Pregnancy is Chapter 15 (O00–O9A). Urinary surgery is CPT 50010–53899 and the obstetric package codes were covered earlier.</p>`,
    terms: [
      ["nephr/o, ren/o", "Kidney (nephritis, renal)."],
      ["ur/o, urin/o", "Urine or urinary tract (urology)."],
      ["ureter/o", "Ureter."],
      ["cyst/o", "Bladder (cystitis, cystoscopy)."],
      ["urethr/o", "Urethra."],
      ["glomerul/o", "Glomerulus (glomerulonephritis)."],
      ["lith/o", "Stone (lithotripsy)."],
      ["-uria", "Urine condition (hematuria, dysuria)."],
      ["prostat/o", "Prostate."],
      ["orch/o, orchi/o", "Testis (orchiectomy)."],
      ["vas/o", "Vessel or duct (vasectomy)."],
      ["gynec/o", "Woman (gynecology)."],
      ["hyster/o, metr/o, uter/o", "Uterus (hysterectomy)."],
      ["cervic/o", "Neck or cervix."],
      ["vagin/o, colp/o", "Vagina (colposcopy)."],
      ["oophor/o, ovari/o", "Ovary."],
      ["salping/o", "Fallopian tube (salpingectomy)."],
      ["mamm/o, mast/o", "Breast (mammography, mastectomy)."],
      ["-gravida / -para", "Pregnant woman / having borne offspring."],
    ],
    steps: [
      "Identify the organ from the root and note whether it is urinary, male, or female reproductive.",
      "Read the suffix: infection, stone, enlargement, removal, or visualization.",
      "For pregnancy terms, identify the stage (antepartum, intrapartum, postpartum) and the trimester.",
      "Check the term in an approved dictionary.",
      "Place it in Chapter 14, Chapter 15, or the right CPT section.",
    ],
    lab: [
      [
        "Decode ‘hematuria.’",
        "hemat (blood) + -uria (urine condition) = blood in the urine.",
      ],
      [
        "Decode ‘nephrolithiasis.’",
        "nephro (kidney) + lith (stone) + -iasis (condition) = kidney stones.",
      ],
      [
        "Decode ‘hysterectomy.’",
        "hyster (uterus) + -ectomy (removal) = surgical removal of the uterus.",
      ],
      [
        "Decode ‘oophorectomy.’",
        "oophor (ovary) + -ectomy = removal of an ovary.",
      ],
      [
        "Decode ‘mastectomy.’",
        "mast (breast) + -ectomy = removal of breast tissue.",
      ],
      ["Decode ‘dysuria.’", "dys- (painful) + -uria = painful urination."],
      [
        "A note says G3P2. What does it mean?",
        "Gravida 3, para 2: three pregnancies and two births (the third pregnancy may be ongoing or may not have reached delivery).",
      ],
      [
        "What is the difference between cystitis and pyelonephritis?",
        "Cystitis is bladder inflammation (lower tract). Pyelonephritis is kidney infection (upper tract) and is usually more serious.",
      ],
    ],
    case: "A note reads ‘TURP for BPH with urinary retention, PSA 6.2.’",
    model:
      "TURP is transurethral resection of the prostate, a procedure. BPH is benign prostatic hyperplasia, a condition. ‘Urinary retention’ is a symptom of BPH here and may be coded additionally if the Tabular List instructs. PSA 6.2 is a test result for the provider's interpretation and is not a diagnosis the coder assigns.",
    mistakes: [
      "Confusing ureter and urethra.",
      "Using ‘para’ as the number of pregnancies.",
      "Coding from a lab value.",
    ],
    drills: [
      "Draw the urine path from kidney to outside and label each structure.",
      "Decode fifteen terms from the two systems.",
      "Explain G3P2 in your own words.",
    ],
    rubric: [
      "Structures are in the right order.",
      "Obstetric terms are used correctly.",
      "Conditions and procedures are separated.",
      "Chapters and sections are correct.",
    ],
    scenario: "What does -uria describe?",
    answers: ["A condition of urine", "A removal", "An enlargement"],
    correct: 0,
    why: "-uria refers to urine or a urine condition, such as hematuria (blood in the urine).",
    taglish:
      "Ang kidneys ay sumasala ng dugo, ang ureters ay nagdadala ng ihi sa bladder, at ang urethra ang naglalabas nito. Roots: nephr/o kidney, cyst/o bladder, hyster/o matris, oophor/o obaryo, mamm/o suso. Ang -uria ay tungkol sa ihi at ang -ectomy ay pagtanggal. Ang gravida ay ilang beses nabuntis at ang para ay ilang beses nanganak. Ang mga ito ay nasa ICD Chapter 14 at 15.",
    tip: "Ureter has an ‘e’ for ‘exit from kidney.’ The urethra is the final path out. A simple trick, but it prevents a classic mix-up.",
    mentor: "Explain G2P1 to a partner using a simple example.",
    remember: [
      "Ureters carry urine from kidney to bladder. The urethra carries it out.",
      "Gravida is pregnancies. Para is births.",
      "Genitourinary is Chapter 14. Pregnancy is Chapter 15.",
    ],
  },
  {
    title: "Medical language in depth: bones, muscles, joints, and skin",
    desc: "Word parts, fracture and joint terms, skin lesions and burns, and the common procedures, with coding connections.",
    time: "55 min",
    objectives: [
      "Decode musculoskeletal and skin terms.",
      "Describe fracture types, joint conditions, and burn degrees accurately.",
      "Connect terms to ICD-10-CM Chapters 12 and 13 and the CPT sections.",
    ],
    concept: `<p><b>Musculoskeletal system.</b> Bones, joints, cartilage, muscles, tendons (muscle to bone), and ligaments (bone to bone). <b>Fractures</b> are described as closed (skin intact) or open (bone through the skin), and by pattern: transverse, oblique, spiral, comminuted (more than two pieces), greenstick (a partial break in children), and compression. A <b>sprain</b> is a ligament injury and a <b>strain</b> is a muscle or tendon injury. Joint conditions include osteoarthritis (wear-and-tear), rheumatoid arthritis (autoimmune), gout (uric acid crystals), and bursitis or tendinitis (inflammation). Bone conditions include osteoporosis (loss of bone density) and scoliosis (curved spine).</p>
<p><b>Procedures.</b> Arthroscopy (looking inside a joint), arthroplasty (joint replacement), ORIF (open reduction with internal fixation), laminectomy (removal of part of a vertebra), amputation, and injection of a joint.</p>
<p><b>Skin (integumentary system).</b> Layers: epidermis, dermis, and subcutaneous tissue. Conditions: eczema (atopic dermatitis), psoriasis, cellulitis (infection of skin and tissue beneath), acne, melanoma and other skin cancers, and pressure injuries (staged 1 to 4). <b>Burns</b> are classified by depth: first degree (epidermis only), second degree (partial thickness), and third degree (full thickness). Skin procedures include biopsy, excision, debridement (removal of dead tissue), and grafting.</p>
<p><b>Where it is coded.</b> Musculoskeletal conditions are ICD-10-CM Chapter 13 (M00–M99), skin conditions are Chapter 12 (L00–L99), and injuries including fractures are Chapter 19 (S00–T88). The related CPT sections were covered in the specialty lessons.</p>`,
    terms: [
      ["oste/o", "Bone (osteoporosis)."],
      ["arthr/o", "Joint (arthritis, arthroscopy)."],
      ["chondr/o", "Cartilage."],
      ["my/o", "Muscle (myalgia)."],
      ["ten/o, tendin/o", "Tendon (tendinitis)."],
      ["ligament/o", "Ligament."],
      ["burs/o", "Bursa (bursitis)."],
      ["spondyl/o, vertebr/o", "Vertebra (spondylosis)."],
      ["cost/o", "Rib."],
      ["crani/o", "Skull."],
      ["-malacia", "Softening (osteomalacia)."],
      ["-porosis", "Porous (osteoporosis)."],
      ["derm/o, dermat/o, cutane/o", "Skin (dermatitis)."],
      ["kerat/o", "Hard, horny, or the cornea (keratosis)."],
      ["melan/o", "Black (melanoma)."],
      ["erythem/o", "Red."],
      ["onych/o", "Nail (onychomycosis)."],
      ["trich/o", "Hair."],
      ["lip/o", "Fat."],
      ["-plasty", "Surgical repair (rhinoplasty)."],
    ],
    steps: [
      "Identify the tissue from the root: bone, joint, muscle, tendon, or skin.",
      "Read the suffix to see inflammation, softening, removal, or repair.",
      "Note fracture details (open or closed, pattern, site, side) and burn depth.",
      "Check the term in an approved dictionary.",
      "Place it in the correct ICD-10-CM chapter or CPT section.",
    ],
    lab: [
      [
        "Decode ‘osteoarthritis.’",
        "osteo (bone) + arthr (joint) + -itis (inflammation) = inflammation of bone and joint, in practice the degenerative joint disease.",
      ],
      [
        "Decode ‘tendinitis.’",
        "tendin (tendon) + -itis = inflammation of a tendon.",
      ],
      [
        "Decode ‘onychomycosis.’",
        "onycho (nail) + myc (fungus) + -osis (condition) = fungal infection of the nail (code B35.1, tinea unguium).",
      ],
      [
        "Decode ‘arthroscopy.’",
        "arthro (joint) + -scopy (viewing) = looking inside a joint with an instrument.",
      ],
      [
        "Decode ‘arthroplasty.’",
        "arthro + -plasty (surgical repair) = joint replacement or reconstruction.",
      ],
      [
        "A note says ‘comminuted closed fracture of the right distal radius.’",
        "A fracture of the lower end of the right radius with more than two fragments, with the skin intact.",
      ],
      [
        "What is the difference between a sprain and a strain?",
        "A sprain is a ligament injury. A strain is a muscle or tendon injury.",
      ],
      [
        "‘Second-degree burn.’ What depth is it?",
        "Partial thickness, affecting the epidermis and part of the dermis.",
      ],
    ],
    case: "A note reads ‘ORIF of the left ankle bimalleolar fracture.’",
    model:
      "ORIF means open reduction with internal fixation. ‘Bimalleolar’ describes a fracture involving both ankle bones (the medial and lateral malleolus). The procedure is open treatment of the fracture with hardware. The CPT code depends on the specific fracture and the extent of fixation, and the ICD-10-CM code depends on open or closed, side, and encounter type with the right 7th character.",
    mistakes: [
      "Confusing sprain and strain.",
      "Ignoring open versus closed for fractures.",
      "Mixing up the three layers of skin.",
    ],
    drills: [
      "Make a card of fracture patterns with a sketch for each.",
      "Decode fifteen bone, joint, and skin terms.",
      "List burn degrees with depth and a plain-language example.",
    ],
    rubric: [
      "Tissues and structures are identified.",
      "Fracture and burn descriptions are accurate.",
      "Procedures are separated from conditions.",
      "Chapters and sections are correct.",
    ],
    scenario: "What is the difference between a ligament and a tendon?",
    answers: [
      "A ligament joins bone to bone and a tendon joins muscle to bone",
      "A ligament joins muscle to bone and a tendon joins bone to bone",
      "They are the same structure",
    ],
    correct: 0,
    why: "Ligaments connect bone to bone, while tendons connect muscle to bone.",
    taglish:
      "Ang ligament ay nag-uugnay ng buto sa buto at ang tendon ay nag-uugnay ng muscle sa buto. Ang sprain ay sa ligament at ang strain ay sa muscle o tendon. Ang fracture ay closed kung buo ang balat at open kung lumabas ang buto. Sa balat, may tatlong layer: epidermis, dermis, at subcutaneous. Ang first-degree burn ay epidermis lang, ang second ay partial thickness, at ang third ay full thickness.",
    tip: "Say ‘ligament, bone to bone’ and ‘tendon, muscle to bone’ together a few times. It is the most common pair people mix up.",
    mentor:
      "Describe a fracture and a burn aloud using only the terms in this lesson.",
    remember: [
      "Ligament = bone to bone. Tendon = muscle to bone.",
      "Fractures: open or closed, plus the pattern, site, and side.",
      "Burns: first, second, and third degree describe depth.",
    ],
  },
  {
    title: "Medical language in depth: nerves, hormones, eyes, and ears",
    desc: "Word parts, conditions, tests, and procedures for the nervous and endocrine systems and the special senses.",
    time: "60 min",
    objectives: [
      "Decode nervous, endocrine, eye, and ear terms.",
      "Distinguish similar-sounding paralysis, weakness, and sensation terms.",
      "Connect terms to ICD-10-CM chapters 4, 6, 7, and 8 and the CPT sections.",
    ],
    concept: `<p><b>Nervous system.</b> The brain and spinal cord (central) and the nerves (peripheral). Conditions: stroke (CVA, cerebrovascular accident), transient ischemic attack (TIA, temporary), epilepsy (recurrent seizures), migraine, Parkinson's disease, multiple sclerosis, Alzheimer's disease and other dementias, and neuropathy (nerve damage). Tests: EEG (brain waves), EMG (muscle and nerve activity), CT and MRI of the head, and lumbar puncture. Procedures include craniotomy and nerve blocks.</p>
<p><b>Endocrine system.</b> Glands that release hormones: pituitary, thyroid, parathyroid, adrenals, pancreas, ovaries, and testes. Conditions: diabetes mellitus (type 1 and type 2), hypothyroidism and hyperthyroidism, Cushing syndrome (too much cortisol), and Addison disease (too little). Tests: A1c, fasting glucose, TSH, and cortisol levels.</p>
<p><b>Eyes.</b> Structures: cornea, lens, retina, optic nerve. Conditions: cataract (clouded lens), glaucoma (optic nerve damage, often with high eye pressure), macular degeneration, and refractive errors such as myopia (nearsighted) and presbyopia. <b>Ears.</b> External, middle, and inner ear. Conditions: otitis media (middle ear infection), cerumen impaction, and hearing loss. Procedures: cataract extraction and tympanostomy tubes.</p>
<p><b>Where it is coded.</b> Endocrine, nutritional, and metabolic: ICD-10-CM Chapter 4 (E00–E89). Nervous system: Chapter 6 (G00–G99). Eye: Chapter 7 (H00–H59). Ear: Chapter 8 (H60–H95). CPT surgery sections include nervous (61000–64999) and eye (65091–68899).</p>`,
    terms: [
      ["neur/o", "Nerve (neuropathy, neurology)."],
      ["encephal/o", "Brain (encephalitis)."],
      ["cerebr/o", "Cerebrum or brain."],
      ["mening/o", "Membranes around the brain and cord (meningitis)."],
      ["myel/o", "Spinal cord or bone marrow, by context."],
      ["-paresis / -plegia", "Weakness / paralysis (hemiparesis, hemiplegia)."],
      ["-esthesia", "Sensation (anesthesia)."],
      ["-lepsy", "Seizure (epilepsy)."],
      ["thyr/o, thyroid/o", "Thyroid."],
      ["adren/o", "Adrenal gland."],
      ["pituit/o", "Pituitary."],
      ["gluc/o, glyc/o", "Sugar (hyperglycemia)."],
      ["ophthalm/o, ocul/o", "Eye (ophthalmology)."],
      ["retin/o", "Retina."],
      ["kerat/o", "Cornea, or horny tissue."],
      ["phac/o", "Lens."],
      ["-opia", "Vision condition (myopia)."],
      ["ot/o, aur/o", "Ear (otitis, aural)."],
      ["myring/o, tympan/o", "Eardrum."],
      ["audi/o", "Hearing (audiology)."],
    ],
    steps: [
      "Identify the system and the structure from the root.",
      "Read the suffix to see weakness, paralysis, inflammation, or a hormone state.",
      "Look for modifiers such as ‘acute,’ ‘chronic,’ or the side.",
      "Check the term in an approved dictionary.",
      "Place it in the correct ICD-10-CM chapter or CPT section.",
    ],
    lab: [
      [
        "Decode ‘hemiplegia.’",
        "hemi- (half) + -plegia (paralysis) = paralysis of one side of the body.",
      ],
      [
        "Decode ‘hemiparesis.’",
        "hemi- (half) + -paresis (weakness) = weakness on one side. It is not complete paralysis.",
      ],
      [
        "Decode ‘encephalitis.’",
        "encephal (brain) + -itis = inflammation of the brain.",
      ],
      [
        "Decode ‘hyperglycemia.’",
        "hyper- (above) + glyc (sugar) + -emia (blood condition) = high blood sugar.",
      ],
      [
        "Decode ‘otitis media.’",
        "ot (ear) + -itis = ear inflammation, media = middle. Inflammation or infection of the middle ear.",
      ],
      [
        "Decode ‘tympanostomy.’",
        "tympan (eardrum) + -ostomy (creating an opening) = making an opening in the eardrum, often to place a tube.",
      ],
      [
        "What is the difference between a stroke and a TIA?",
        "A stroke causes lasting damage from blocked or burst vessels in the brain. A TIA is temporary with symptoms that resolve, though it is a warning sign.",
      ],
      [
        "‘Cataract’ and ‘glaucoma.’ What part is affected?",
        "A cataract clouds the lens. Glaucoma damages the optic nerve.",
      ],
    ],
    case: "A note reads ‘CVA with residual right hemiparesis and dysphagia, history of hypertension.’",
    model:
      "CVA means stroke. ‘Residual’ means deficits remain after the acute event, so this is not an acute stroke code but a late effect of a stroke with documented deficits. Hemiparesis (one-sided weakness) and dysphagia (difficulty swallowing) are the deficits. Look up each deficit and the sequela instructions, and check hypertension for any combination rule.",
    mistakes: [
      "Confusing -paresis (weakness) with -plegia (paralysis).",
      "Treating a stroke with residual deficits as an acute stroke.",
      "Mixing up cataract and glaucoma.",
    ],
    drills: [
      "Decode fifteen terms from these four areas.",
      "Match each endocrine gland with one hormone and one condition.",
      "Describe a stroke and a TIA in one plain sentence each.",
    ],
    rubric: [
      "Word parts are correct.",
      "Weakness and paralysis are distinguished.",
      "Acute and residual conditions are separated.",
      "Chapters and sections are correct.",
    ],
    scenario: "Which term describes weakness on one side of the body?",
    answers: ["Hemiparesis", "Hemiplegia", "Hyperesthesia"],
    correct: 0,
    why: "Hemiparesis is one-sided weakness. Hemiplegia is one-sided paralysis.",
    taglish:
      "Ang nervous system ay binubuo ng utak, spinal cord, at nerves. Ang -paresis ay panghihina at ang -plegia ay paralisis; ang hemi- ay kalahati ng katawan. Ang CVA ay stroke at ang TIA ay pansamantalang sintomas. Sa endocrine, gluc/o ay asukal at thyr/o ay thyroid. Sa mata, ang cataract ay malabong lens at ang glaucoma ay pinsala sa optic nerve. Ang mga ito ay nasa ICD Chapters 4, 6, 7, at 8.",
    tip: "Say ‘paresis is weak, plegia is paralyzed.’ Many learners mix them. Notes with ‘residual deficits’ often use both.",
    mentor:
      "Explain to a partner the difference between a stroke, a TIA, and a stroke with residual deficits.",
    remember: [
      "-paresis is weakness. -plegia is paralysis. Hemi- means one side.",
      "A stroke with lasting deficits is coded differently from an acute stroke.",
      "Cataract affects the lens. Glaucoma affects the optic nerve.",
    ],
  },
  {
    title: "E/M decision making in depth: the complete MDM tables",
    desc: "Every element of the 2021-and-later office E/M table, eight fully worked examples, and the rules for counting data and time.",
    time: "75 min",
    objectives: [
      "Recall the complete problem, data, and risk criteria for each MDM level.",
      "Apply the two-of-three rule to full worked examples.",
      "Count time correctly and decide when time is the better method.",
    ],
    concept: `<p>This lesson gives the complete framework. Rate each of the three elements separately, find the level that at least two elements meet or exceed, and then check whether documented total time supports a different level. The table below paraphrases the AMA CPT table for office and outpatient E/M services. Verify exact wording in the current book.</p>
<table class="ref-table"><thead><tr><th>Level</th><th>Problems addressed</th><th>Data reviewed and analyzed</th><th>Risk of management</th></tr></thead><tbody>
<tr><td>Straightforward</td><td>Minimal: one self-limited or minor problem.</td><td>Minimal or none.</td><td>Minimal risk of morbidity.</td></tr>
<tr><td>Low</td><td>Two or more self-limited or minor problems; or one stable chronic illness; or one acute, uncomplicated illness or injury.</td><td>Limited: meet one of two categories. Category 1 is any combination of two from: review of prior external notes from each unique source, review of the result of each unique test, ordering of each unique test. Category 2 is an independent historian.</td><td>Low risk of morbidity.</td></tr>
<tr><td>Moderate</td><td>One or more chronic illnesses with exacerbation, progression, or treatment side effects; or two or more stable chronic illnesses; or one undiagnosed new problem with uncertain prognosis; or one acute illness with systemic symptoms; or one acute complicated injury.</td><td>Moderate: meet one of three categories. Category 1: any combination of three from: review of prior external notes from each unique source, review of the result of each unique test, ordering of each unique test, or assessment requiring an independent historian. Category 2: independent interpretation of a test performed by another physician (not separately reported). Category 3: discussion of management or test interpretation with an external physician or other qualified professional (not separately reported).</td><td>Moderate risk, such as prescription drug management, a decision about minor surgery with risk factors, a decision about elective major surgery without risk factors, or diagnosis or treatment significantly limited by social determinants of health.</td></tr>
<tr><td>High</td><td>One or more chronic illnesses with severe exacerbation, progression, or treatment side effects; or one acute or chronic illness or injury that poses a threat to life or bodily function.</td><td>Extensive: meet two of the three categories above.</td><td>High risk, such as drug therapy requiring intensive monitoring for toxicity, a decision about elective major surgery with risk factors, emergency major surgery, hospitalization, or a decision not to resuscitate or to de-escalate care because of poor prognosis.</td></tr>
</tbody></table>
<p><b>Counting rules.</b> A problem counts only if it was <em>addressed</em>: evaluated or treated by the provider at the visit. A unique test is defined by its CPT code, and ordering a test includes reviewing its result later, so the work is counted once. If the practice bills the test (or its interpretation), it does not count again in the E/M data. A ‘stable’ chronic illness is one at the treatment goal, not one that is simply unchanged. Prescription drug management needs the provider's documented decision about a prescription, including a decision to continue after consideration.</p>
<p><b>Time.</b> Use total provider time on the date of the encounter, including preparing, reviewing records, examining, counseling, ordering, documenting, and coordinating care, but not time spent on separately reported services, travel, or clinical staff time. If two providers meet with the patient at the same time, count the time once. For levels above the highest time threshold, prolonged service codes may apply under payer rules.</p>`,
    terms: [
      ["Addressed", "Evaluated or treated by the provider at this visit."],
      ["Stable chronic illness", "A chronic illness at its treatment goal."],
      ["Unique test", "A test defined by its CPT code."],
      [
        "External note",
        "Records from a different specialty, group, or organization.",
      ],
      [
        "Independent historian",
        "Someone other than the patient who provides history because the patient cannot.",
      ],
      [
        "Independent interpretation",
        "The provider's own reading of a test performed by someone else, not separately billed.",
      ],
      [
        "Social determinants of health",
        "Conditions such as housing or food insecurity that limit diagnosis or treatment.",
      ],
    ],
    steps: [
      "List the problems the provider addressed and classify each.",
      "List data items by category: tests, external notes, historian, independent interpretation, discussion.",
      "Identify the risk of management from the plan.",
      "Find the highest level met or exceeded by at least two elements.",
      "If time is documented as total time on the date, compute the time level.",
      "Choose the method that is better supported and document the reasoning in your coding note.",
    ],
    lab: [
      [
        "1. New patient, 3 days of sore throat without systemic illness. Rapid strep performed in the office and billed. Rest, fluids, and an over-the-counter remedy advised.",
        "Problems: acute uncomplicated illness (low). Data: the billed test does not count, so minimal. Risk: over-the-counter drugs are low. Two of three reach low: 99203.",
      ],
      [
        "2. Established patient with stable type 2 diabetes and stable hypertension. Prescriptions renewed. A1c and a basic metabolic panel ordered and sent out.",
        "Problems: two stable chronic illnesses (moderate). Data: two unique tests ordered (limited). Risk: prescription drug management (moderate). Moderate on two of three: 99214.",
      ],
      [
        "3. Established patient with a new breast lump. The provider orders a diagnostic mammogram and ultrasound and talks with the radiologist about the approach.",
        "Problems: undiagnosed new problem with uncertain prognosis (moderate). Data: discussion of management with an external physician meets Category 3 (moderate). Risk: low. Two of three at moderate: 99214.",
      ],
      [
        "4. Established patient with chest pain. The provider orders troponin and a chest X-ray, reviews the cardiologist's prior notes, and decides to send the patient to the hospital.",
        "Problems: threat to life or bodily function (high). Data: two tests ordered and one external source reviewed (three items, moderate; extensive would need two categories). Risk: decision regarding hospitalization (high). Two of three at high: 99215.",
      ],
      [
        "5. Established patient with hypertension above goal. The provider increases the dose of a prescription medication.",
        "Problems: chronic illness with exacerbation or progression (moderate). Data: minimal. Risk: prescription drug management (moderate). Moderate on two of three: 99214.",
      ],
      [
        "6. Established patient returns to report a cold has resolved. No treatment.",
        "Problems: self-limited or minor (minimal). Data: none. Risk: minimal. Straightforward: 99212.",
      ],
      [
        "7. Established patient. The note documents total time of 42 minutes on the date (10 reviewing records, 25 with the patient, 7 documenting). MDM is moderate.",
        "By time, 42 minutes meets the 40-minute threshold for 99215. By MDM the level is 99214. The visit may be reported at the level that is supported by either method, so 99215 by time if the time documentation is complete.",
      ],
      [
        "8. A clinical staff member spends 20 minutes teaching the patient to use an inhaler. The provider spends 12 minutes.",
        "Clinical staff time is not counted. Total provider time is 12 minutes, so time supports 99212. The level may be higher by MDM if the documentation supports it.",
      ],
    ],
    case: "A provider asks why a visit with five chronic conditions listed in the note was coded only 99213.",
    model:
      "Show the problems actually addressed. If the note discusses only one condition and the other four are listed without evaluation or management, only one problem counts. Explain that listing a condition is not the same as addressing it, and offer documentation education so future notes show what was evaluated and decided.",
    mistakes: [
      "Counting every listed condition as addressed.",
      "Counting clinical staff time.",
      "Counting a billed test as data.",
      "Calling an unchanged chronic illness ‘stable’ when it is not at goal.",
    ],
    drills: [
      "Rewrite the full table from memory and compare it with this lesson.",
      "Write three of your own examples, one at each level, and have a partner level them.",
      "Make a one-page flowchart for the two-of-three rule and the time check.",
    ],
    rubric: [
      "Each element is rated separately with evidence.",
      "The two-of-three rule is applied correctly.",
      "Time is counted by the rules.",
      "The reasoning is written in the coding note.",
    ],
    scenario:
      "A visit has moderate problems, moderate risk, and no qualifying data. What level of MDM is supported?",
    answers: ["Moderate", "Low", "Straightforward"],
    correct: 0,
    why: "Two of the three elements meet moderate, so the visit supports moderate MDM.",
    taglish:
      "Sa E/M, i-rate nang hiwalay ang problems, data, at risk, at piliin ang level na naabot ng hindi bababa sa dalawa sa tatlo. Bilangin lang ang problem na na-address talaga. Ang test na bina-bill ng practice ay hindi na bibilangin sa data. Ang prescription drug management ay moderate risk. Kung time ang gagamitin, bilangin ang total na oras ng provider sa araw na iyon at huwag isama ang oras ng staff.",
    tip: "Write each rating and its evidence on a sticky note before you decide. It slows you down just enough to avoid the common double-counting errors.",
    mentor:
      "Level the eight examples again tomorrow without looking at the answers and compare.",
    remember: [
      "Rate problems, data, and risk separately and use two of three.",
      "Only addressed problems count, and billed tests do not count as data.",
      "Count total provider time on the date and never clinical staff time.",
    ],
    source:
      "AMA CPT E/M guidelines for office and other outpatient services. Verify table wording in the current edition.",
  },
  {
    title: "Modifier 59, the X modifiers, and NCCI edits in depth",
    desc: "How procedure-to-procedure edits work, the decision path before using 59 or an X modifier, and eight worked cases.",
    time: "70 min",
    objectives: [
      "Explain NCCI procedure-to-procedure edits, modifier indicators, and medically unlikely edits.",
      "Follow a decision path that prefers more specific modifiers over 59.",
      "Apply 59 or XE, XS, XP, and XU only with documented support.",
    ],
    concept: `<p>The National Correct Coding Initiative (NCCI) publishes edits that CMS updates quarterly. <b>Procedure-to-procedure (PTP) edits</b> list a Column 1 code and a Column 2 code. When both are reported by the same provider for the same patient on the same date of service, the Column 2 code is generally denied. The edit file shows a <b>modifier indicator</b>: <b>0</b> means no modifier can override the edit, <b>1</b> means a modifier may be used when the documentation supports a separate service, and <b>9</b> means the edit does not apply. <b>Medically unlikely edits (MUEs)</b> cap the units of a code per day.</p>
<p>The NCCI Policy Manual explains why edits exist: some services are components of a more comprehensive service, are mutually exclusive, or are usual parts of a procedure. A code described as a ‘separate procedure’ is not reported with a related procedure in the same area unless it is distinct.</p>
<p><b>Modifier 59</b> means a distinct procedural service. CMS describes it as a last resort. Before using it, ask in order:</p>
<ol>
<li>Is there a <b>more specific modifier</b> that explains the situation (RT or LT for side, 25 for E/M, 58, 78, or 79 for the postoperative period, anatomic modifiers for fingers, toes, and eyelids)? Use that.</li>
<li>If not, did the services occur in a <b>separate session or encounter</b> on the same day? Use <b>XE</b>.</li>
<li>Were they on a <b>separate organ, structure, site, or lesion</b>? Use <b>XS</b>.</li>
<li>Were they by a <b>separate practitioner</b>? Use <b>XP</b>.</li>
<li>Is the service <b>unusual and non-overlapping</b> and no other X modifier fits? Use <b>XU</b>.</li>
<li>Does the payer still require 59 instead of X modifiers? Follow the payer's published policy.</li>
</ol>
<p>The modifier must be supported by documentation of the distinct session, site, or practitioner. A modifier cannot be used merely because an edit exists, and an indicator of 0 cannot be overridden by any modifier.</p>`,
    terms: [
      [
        "PTP edit",
        "A pair of codes that should not generally be billed together.",
      ],
      [
        "Column 1 / Column 2",
        "The comprehensive code / the component code that is bundled.",
      ],
      [
        "Modifier indicator 0 / 1 / 9",
        "No override allowed / override allowed with support / edit not applicable.",
      ],
      ["MUE", "Medically unlikely edit: the maximum units per code per day."],
      [
        "Separate procedure",
        "A code that is not reported with a related procedure in the same area unless distinct.",
      ],
      [
        "XE / XS / XP / XU",
        "Separate encounter / structure / practitioner / unusual non-overlapping service.",
      ],
    ],
    steps: [
      "Check the NCCI edit table for each code pair on the claim.",
      "If an edit exists, read the modifier indicator. If 0, do not report both.",
      "If 1, decide whether a more specific modifier applies.",
      "If not, find documentation of a separate session, structure, practitioner, or unusual service.",
      "Select the most specific supported X modifier, or 59 if the payer requires it.",
      "Record the evidence and the edit you checked.",
    ],
    lab: [
      [
        "1. A provider performs a biopsy of one skin lesion and removes a different lesion on another body area in the same session.",
        "Different lesions at different sites: use a distinct-site modifier on the second procedure (XS, or 59 if required) and document the sites.",
      ],
      [
        "2. A separate, significant E/M occurs on the same day as a minor procedure.",
        "Use modifier 25 on the E/M, not 59. It is the more specific modifier.",
      ],
      [
        "3. Injections are given in the right and left knees in the same session.",
        "Use RT and LT on the lines. These are more specific than 59.",
      ],
      [
        "4. During a colonoscopy, one polyp is removed by snare and a biopsy is taken of a different area.",
        "45385 for the snare and 45380 with XS (or 59) for the biopsy of a separate site, if the edit allows and the documentation supports it.",
      ],
      [
        "5. A patient has a chest X-ray in the morning and a repeat chest X-ray that evening for new symptoms.",
        "A separate encounter on the same day may support XE on the second study, with documentation of the new indication. Check for a repeat-procedure modifier such as 76 as well, and follow the payer.",
      ],
      [
        "6. The PTP table shows indicator 0 for a code pair on your claim.",
        "Do not report both codes. No modifier can override the edit.",
      ],
      [
        "7. A coder adds 59 to every claim that triggers an edit.",
        "This is improper. Each use needs documented support, and a more specific modifier must be used when one fits.",
      ],
      [
        "8. A claim reports 99 units of a code with an MUE of 2.",
        "The units exceed the MUE. Check for a documentation error. If the units are accurate and supported, follow the payer's instructions on MUE overrides.",
      ],
    ],
    case: "A practice's denial report shows hundreds of denials for lab tests bundled with a procedure, and the biller proposes adding 59 to all of them.",
    model:
      "Do not add 59 in bulk. Pull a sample of the charts. For each, determine whether the lab was ordered for a separate reason and drawn at a separate time. If the documentation supports it, apply XE or XU, or the payer's required modifier. For the rest, accept the bundled payment and educate the team. Report the pattern to compliance if bulk modifier use was already occurring.",
    mistakes: [
      "Using 59 as a default.",
      "Overriding an indicator 0 edit.",
      "Choosing 59 when a more specific modifier exists.",
      "Ignoring payer-specific X modifier rules.",
    ],
    drills: [
      "Write the six-question decision path from memory.",
      "Look up three code pairs in the CMS PTP tables and record the indicator for each.",
      "Create five cases of your own and decide which modifier applies.",
    ],
    rubric: [
      "Edits are checked before modifiers.",
      "The decision path is followed in order.",
      "Documentation supports each modifier.",
      "Indicator 0 edits are never overridden.",
    ],
    scenario:
      "Two injections are given in the right and left knees in one session. Which modifier approach is better than 59?",
    answers: ["RT and LT", "XU", "No modifier"],
    correct: 0,
    why: "RT and LT are more specific than 59 and describe exactly what differs between the two lines.",
    taglish:
      "Ang NCCI ay may mga edit na naglilista ng Column 1 at Column 2 codes na hindi dapat i-bill nang magkasama. Ang modifier indicator na 0 ay hindi puwedeng i-override, ang 1 ay puwede kung may suporta, at ang 9 ay hindi applicable. Bago gumamit ng 59, subukan muna ang mas tiyak: RT/LT, 25, 58, 78, 79. Kung hindi bagay, gamitin ang XE, XS, XP, o XU. Kailangan ng dokumentasyon at hindi puwedeng gamitin ang 59 para lang mawala ang edit.",
    tip: "Write the question ‘distinct from what, and how?’ on the claim. If you cannot answer it from the chart, the modifier does not belong.",
    mentor:
      "Explain the six-question decision path to a partner and make them quiz you with cases.",
    remember: [
      "NCCI indicator 0 means no modifier can override the edit.",
      "Use more specific modifiers before 59 or the X modifiers.",
      "Every 59 or X modifier needs documented distinctness.",
    ],
    source:
      "CMS NCCI Policy Manual and PTP edit tables (updated quarterly), AMA CPT modifier appendix, and payer modifier policies.",
  },
  {
    title: "Denial management in depth: building a program",
    desc: "A complete denial workflow: classification, prioritization, root-cause analysis, appeal writing, and the metrics that show improvement.",
    time: "75 min",
    objectives: [
      "Classify denials into a taxonomy with owners and prevention steps.",
      "Prioritize a work queue by value, deadline, and likelihood of recovery.",
      "Calculate denial metrics and run a root-cause review.",
    ],
    concept: `<p>Working denials one at a time recovers money. Managing denials as a <b>program</b> prevents them. A program has five parts: a taxonomy, a prioritized work queue, a documented appeal process, root-cause feedback to the source, and metrics.</p>
<table class="ref-table"><thead><tr><th>Category</th><th>Typical causes</th><th>Owner</th><th>Prevention</th></tr></thead><tbody>
<tr><td>Front end</td><td>Eligibility lapse, wrong payer, missing authorization, registration errors.</td><td>Registration and authorization team.</td><td>Verify eligibility 1–2 days before service. Authorization checklist. Real-time edits.</td></tr>
<tr><td>Coding and charge entry</td><td>Modifier, bundling, diagnosis linkage, units.</td><td>Coding lead.</td><td>Scrubber edits, coder education, pre-bill audits.</td></tr>
<tr><td>Clinical and medical necessity</td><td>Documentation does not support the service or level of care.</td><td>Clinical team with coding.</td><td>Coverage checks, documentation education, queries.</td></tr>
<tr><td>Payer-specific</td><td>Contract terms, payer edits, incorrect payment.</td><td>Billing lead.</td><td>Contract review, payer scorecards, disputes.</td></tr>
<tr><td>Timely filing</td><td>Late submission or late corrections.</td><td>Billing manager.</td><td>Daily rejection review, claim aging alerts.</td></tr>
</tbody></table>
<p><b>Prioritization.</b> Rank work by expected recovery and deadline. A simple score is <em>(balance × probability of overturn) ÷ minutes of work</em>, with any denial inside 30 days of its appeal deadline moved to the top. Group similar denials to work them in bulk when the same fix applies.</p>
<p><b>Appeal letter structure.</b> Patient and claim identifiers; the denial reason quoted from the remittance; a one-paragraph summary of why the denial is incorrect; evidence list (clinical note, policy, authorization, proof of timely filing); the specific action requested and the date; and a contact. Keep it factual and short, never alter the record, and send by the payer's required method before the deadline.</p>
<p><b>Metrics.</b> <b>Initial denial rate</b> = denied claims ÷ claims submitted. <b>Final denial (write-off) rate</b> = dollars written off for denials ÷ dollars billed. <b>Overturn rate</b> = denials overturned on appeal ÷ appeals filed. <b>Days to appeal</b> and <b>appeal turnaround</b> show process speed. A <b>Pareto chart</b> of denial reasons usually shows that a few causes drive most of the volume, which is where to fix the process first. Review these monthly with providers and managers. Many states have prompt-payment laws that set deadlines for payers, so also track payer payment timeliness.</p>`,
    terms: [
      [
        "Initial denial rate",
        "Share of submitted claims that are denied on first pass.",
      ],
      [
        "Final denial rate",
        "Share of billed dollars lost to denials after all appeals.",
      ],
      ["Overturn rate", "Share of appeals that succeed."],
      ["Pareto analysis", "Ranking causes by volume to find the vital few."],
      ["Root cause", "The upstream reason a denial occurs."],
      [
        "Payer scorecard",
        "A log of payer behavior: denials, delays, and payment accuracy.",
      ],
    ],
    steps: [
      "Load each denial into a log with claim ID, payer, amount, CARC, category, deadline, and owner.",
      "Classify it using the taxonomy.",
      "Score and sort the queue. Pull anything near its deadline to the top.",
      "Work the denial: correct and resubmit, appeal, or write off by policy.",
      "Record the outcome and the root cause.",
      "Review the Pareto chart monthly and assign prevention projects.",
    ],
    lab: [
      [
        "Classify these: (a) CO-27 coverage terminated, (b) CO-97 bundled, (c) CO-197 authorization absent, (d) CO-50 not medically necessary, (e) CO-29 timely filing.",
        "(a) Front end, eligibility. (b) Coding and edits. (c) Front end, authorization. (d) Clinical and medical necessity. (e) Timely filing.",
      ],
      [
        "Last month 1,200 claims were submitted and 138 were denied. What is the initial denial rate?",
        "138 ÷ 1,200 = 11.5%.",
      ],
      [
        "120 appeals were filed and 78 were overturned. What is the overturn rate?",
        "78 ÷ 120 = 65%.",
      ],
      [
        "Prioritize three denials. Denial A: $4,000, 70% likelihood, 40 min, deadline in 60 days. Denial B: $900, 80% likelihood, 10 min, deadline in 12 days. Denial C: $2,500, 40% likelihood, 30 min, deadline in 90 days.",
        "Scores: A = 4,000 × 0.70 ÷ 40 = 70. B = 900 × 0.80 ÷ 10 = 72. C = 2,500 × 0.40 ÷ 30 ≈ 33. B has both a higher score and a deadline within 30 days, so work B first, then A, then C.",
      ],
      [
        "Write the first paragraph of an appeal for a medical-necessity denial.",
        "Model: ‘We request reconsideration of claim [number] for [patient ID], date of service [date], denied under code CO-50 as not medically necessary. The attached clinical note documents [findings] that meet the coverage criteria in [policy name and section]. We ask that the claim be reprocessed for payment.’ Attach the note and the policy excerpt.",
      ],
      [
        "A Pareto review shows 40 percent of denials are for missing authorization. What do you do?",
        "Find the process gap, such as no authorization check at scheduling, and add a front-end edit or checklist with an owner. Track the denial rate for authorization monthly.",
      ],
    ],
    case: "Eligibility denials tripled in a month. The team has been correcting each claim by hand.",
    model:
      "Pull the denials and look for a pattern. If a registration form or scheduling template changed, or eligibility checks stopped before the visit, fix that. Add a rule to verify eligibility before each appointment, correct the claims in bulk using the new data, and track the eligibility denial rate weekly until it recovers. Share the result with the team.",
    mistakes: [
      "Working denials in the order they arrived.",
      "Never recording root causes.",
      "Writing off a denial without checking whether it was appealable.",
      "Reporting only dollars recovered.",
    ],
    drills: [
      "Build a denial log with the fields in this lesson and enter ten fictional denials.",
      "Score and sort the ten denials.",
      "Make a Pareto chart of denial reasons from your log and name the first prevention project.",
    ],
    rubric: [
      "Each denial is classified and owned.",
      "Prioritization uses value, probability, effort, and deadline.",
      "Metrics use stated formulas.",
      "Root causes lead to named prevention steps.",
    ],
    scenario:
      "A Pareto chart shows two reasons cause most denials. What is the best first move?",
    answers: [
      "Fix the process behind those two reasons first",
      "Work every denial in date order",
      "Write off the smallest denials",
    ],
    correct: 0,
    why: "A few causes usually drive most of the volume, so fixing them prevents the largest share of denials.",
    taglish:
      "Ang denial management ay hindi lang pag-aayos ng isa-isang claim; ito ay programa. May taxonomy ng denials, prioritization ayon sa halaga, posibilidad na ma-overturn, oras ng trabaho, at deadline, may appeal process, root-cause feedback, at metrics. Ang initial denial rate ay denied claims ÷ submitted claims, at ang overturn rate ay appeals na nanalo ÷ appeals na ipinasa. Gamitin ang Pareto para makita ang ilang sanhi na may pinakamaraming denial.",
    tip: "Add a column to your denial log called ‘Who could have prevented this?’ Honest answers there point to the fix.",
    mentor:
      "Present your Pareto chart to a partner in two minutes, ending with one prevention project.",
    remember: [
      "A denial program has a taxonomy, a priority queue, an appeal process, root-cause feedback, and metrics.",
      "Prioritize by expected recovery, effort, and deadline.",
      "Fix the few causes that drive most denials first.",
    ],
  },
  {
    title: "Compliance programs in depth: the seven elements",
    desc: "What an effective compliance program contains, how auditing and corrective action work, and where a coder VA fits.",
    time: "70 min",
    objectives: [
      "Name and explain the seven elements of an effective compliance program.",
      "Describe a basic audit approach, including probe samples and corrective action.",
      "Explain the roles, screening, and reporting duties that affect a coder VA.",
    ],
    concept: `<p>HHS Office of Inspector General (OIG) guidance describes seven elements of an effective compliance program. Practices that follow them are better able to prevent, find, and fix problems, and enforcement agencies look at them when deciding how to respond to errors.</p>
<ol>
<li><b>Written policies and procedures</b>, including a code of conduct that states the commitment to comply with the law.</li>
<li><b>A designated compliance officer and compliance committee</b> with direct access to leadership.</li>
<li><b>Training and education</b> for staff at hire and regularly afterward, tailored to roles such as coding and billing.</li>
<li><b>Effective lines of communication</b>, including a confidential way to ask questions and report concerns, with a clear policy against retaliation.</li>
<li><b>Internal monitoring and auditing</b> to find problems early.</li>
<li><b>Enforcement of standards through well-publicized disciplinary guidelines</b>, including screening staff and vendors against exclusion lists.</li>
<li><b>Prompt response to detected problems and corrective action</b>, including repayment of overpayments and prevention steps.</li>
</ol>
<p><b>Risk areas</b> commonly named by OIG include coding and billing accuracy, medical necessity and documentation, arrangements with referral sources (the Anti-Kickback Statute and Stark Law), credentialing and eligibility, quality of care, and privacy and security of information.</p>
<p><b>Auditing.</b> A common practice is a <em>probe audit</em>: review a small sample of claims for each provider or code (often five to ten) to estimate the error rate. If errors exceed the practice's threshold, expand the sample, educate, and re-audit. Document the method, the findings, and the actions. Errors that caused overpayments are quantified and returned according to the 60-day rule for Medicare, and complex or serious matters may call for legal counsel and OIG or CMS self-disclosure processes.</p>
<p><b>Exclusion screening.</b> Federal programs do not pay for items or services furnished or ordered by excluded individuals. Organizations commonly check staff and vendors against the OIG List of Excluded Individuals and Entities when hiring and regularly afterward, often monthly.</p>
<p><b>Your role.</b> As a coder VA you follow the policies, complete training, document your work, report concerns without fear of retaliation, and never alter records. Keep a record of questions you raised and the answers you were given.</p>`,
    terms: [
      [
        "Compliance officer",
        "The person responsible for the program, with direct access to leadership.",
      ],
      ["Probe audit", "A small sample used to estimate an error rate."],
      [
        "Corrective action plan",
        "A documented set of steps to fix a problem and prevent recurrence.",
      ],
      ["Overpayment", "Money received that the provider is not entitled to."],
      ["LEIE", "OIG List of Excluded Individuals and Entities."],
      [
        "Non-retaliation",
        "A policy that protects people who report concerns in good faith.",
      ],
      [
        "Self-disclosure",
        "A voluntary process for reporting and resolving a violation with the government.",
      ],
    ],
    steps: [
      "Read the practice's code of conduct and compliance policies and record that you did.",
      "Complete role-specific training and keep the certificate.",
      "Know how to reach the compliance officer or hotline, and how anonymity works.",
      "Support audits by providing clean data, and document the sample and findings.",
      "When an error is found, quantify it, correct it, and record the prevention step.",
      "Re-audit to confirm the fix.",
    ],
    lab: [
      [
        "A probe audit of 10 claims for a provider finds 4 coded one level too high.",
        "A 40 percent error rate is above any usual threshold. Expand the sample, review the provider's documentation habits, educate, quantify overpayments, return them as required, and re-audit.",
      ],
      [
        "A new employee's name appears on the exclusion list.",
        "Stop and escalate to the compliance officer at once. Federal programs cannot pay for services furnished or ordered by an excluded person. Do not allow billing for that person's work.",
      ],
      [
        "A coder raises a concern and the supervisor says ‘just do it.’",
        "Document the date and the concern. Use the compliance hotline or officer. Non-retaliation policies protect good-faith reports.",
      ],
      [
        "Which element covers ‘monitor claims every quarter’?",
        "Internal monitoring and auditing (element 5).",
      ],
      [
        "Which element covers ‘repay overpayments and fix the process’?",
        "Prompt response and corrective action (element 7).",
      ],
    ],
    case: "A practice has a policy binder but no training records, no compliance officer, and no audit in two years.",
    model:
      "Only element 1 exists. Recommend naming a compliance officer, scheduling training with records, starting a small audit plan, creating a reporting channel, and documenting everything. Start with the highest-risk areas, usually coding and billing, and set a calendar for monitoring.",
    mistakes: [
      "Having policies that no one reads.",
      "Auditing without acting on the findings.",
      "Treating compliance as one person's job.",
    ],
    drills: [
      "Write one sentence about each of the seven elements in your own words.",
      "Design a simple audit plan: sample size, frequency, threshold, and actions.",
      "Draft a note to document a concern you raised and the answer.",
    ],
    rubric: [
      "All seven elements are explained accurately.",
      "The audit plan includes a threshold and an action.",
      "Overpayment handling follows the rule.",
      "Reporting steps are specific.",
    ],
    scenario:
      "Which compliance element is satisfied by a hotline and a non-retaliation policy?",
    answers: [
      "Effective lines of communication",
      "Training and education",
      "Internal auditing",
    ],
    correct: 0,
    why: "A confidential way to report concerns, with protection from retaliation, is the communication element.",
    taglish:
      "May pitong elemento ang epektibong compliance program: written policies, compliance officer at committee, training, bukas na komunikasyon at hotline, auditing, disiplina at screening sa exclusion list, at mabilis na tugon at corrective action. Gumamit ng probe audit na maliit na sample para malaman ang error rate, at kapag mataas, palawakin, mag-educate, at mag-re-audit. Ang mga overpayment ay ibabalik ayon sa tuntunin.",
    tip: "Keep a personal log of compliance questions you raised and the answers. It protects you and shows good faith.",
    mentor: "Explain the seven elements to a partner using a clinic example.",
    remember: [
      "Seven elements: policies, officer, training, communication, auditing, enforcement, and corrective action.",
      "A probe audit estimates the error rate. Findings must lead to action and re-audit.",
      "Screen staff and vendors against the exclusion list.",
    ],
    source:
      "HHS-OIG General Compliance Program Guidance and the OIG exclusion program. Verify current guidance.",
  },
  {
    title: "Medicare in depth: parts, plans, and rules every coder uses",
    desc: "Original Medicare, Medicare Advantage, supplements, contractors, notices, and secondary payer rules, with worked scenarios.",
    time: "70 min",
    objectives: [
      "Describe Parts A, B, C, and D and Medigap, and who pays in each arrangement.",
      "Identify the right payer to bill for a Medicare patient.",
      "Apply ABN, Medicare Secondary Payer, and timely filing rules.",
    ],
    concept: `<p><b>Original Medicare</b> is the federal fee-for-service program. <b>Part A</b> covers inpatient hospital stays, limited skilled nursing facility care, hospice, and some home health. <b>Part B</b> covers medically necessary outpatient and professional services and many preventive services, with an annual deductible and 20 percent coinsurance for most services. Original Medicare has no annual limit on what a patient can owe, which is why many people buy a <b>Medigap</b> (Medicare Supplement) policy, a private plan with standardized benefit letters that pays some of the patient's share. Medigap works only with Original Medicare.</p>
<p><b>Part C, Medicare Advantage (MA)</b>, is private plans, such as HMOs, PPOs, and special needs plans, that replace Original Medicare. They must cover at least what Original Medicare covers, but may add benefits, use networks, and require prior authorization. For an MA patient, bill the MA plan, not the Medicare Administrative Contractor (MAC). <b>Part D</b> covers outpatient prescription drugs through private plans.</p>
<p><b>Identification.</b> Each beneficiary has a Medicare Beneficiary Identifier (MBI), an 11-character number that does not use the letters S, L, O, I, B, or Z. Verify eligibility and whether the patient has an MA plan before billing.</p>
<p><b>Contractors.</b> Medicare Administrative Contractors process Part A and B claims by region and publish Local Coverage Determinations. National Coverage Determinations apply everywhere.</p>
<p><b>Notices.</b> The Advance Beneficiary Notice of Noncoverage (ABN, form CMS-R-131) lets a provider tell an Original Medicare patient before a service that Medicare is likely to deny it as not reasonable and necessary, so the patient can decide and accept financial responsibility. It is not required for services that are never covered by statute, it cannot be used in emergencies, and a blanket ABN is not valid.</p>
<p><b>Medicare Secondary Payer (MSP).</b> Medicare is secondary when another coverage pays first. Common examples: a working-aged patient with a group health plan from an employer with 20 or more employees, a disability beneficiary with a large group health plan (generally 100 or more employees), workers' compensation, and liability or no-fault insurance. Collect MSP information at registration.</p>
<p><b>Other rules.</b> Medicare Part B claims must be filed within 12 months of the date of service. Participating providers accept assignment on all claims. Appeals begin with a redetermination within 120 days. Telehealth flexibilities are set by statute and change over time, so confirm current rules.</p>`,
    terms: [
      ["Part A / Part B", "Hospital insurance / medical insurance."],
      ["Part C / Part D", "Medicare Advantage / prescription drug plans."],
      [
        "Medigap",
        "Private supplement to Original Medicare with standardized plans.",
      ],
      ["MAC", "Medicare Administrative Contractor."],
      ["MBI", "Medicare Beneficiary Identifier."],
      ["ABN", "Advance Beneficiary Notice of Noncoverage."],
      ["MSP", "Medicare Secondary Payer."],
      [
        "Assignment",
        "A provider's agreement to accept Medicare's allowed amount as payment in full.",
      ],
    ],
    steps: [
      "Verify the patient's MBI and coverage type: Original Medicare or Medicare Advantage.",
      "Collect other coverage and MSP information.",
      "Decide whether an ABN is needed for a service likely to be denied as not reasonable and necessary.",
      "Bill the correct payer in the correct order.",
      "Apply the filing limit and track appeal deadlines.",
      "Bill the patient or Medigap only for amounts the remittance shows as patient responsibility.",
    ],
    lab: [
      [
        "A patient shows a Medicare card and a card from a commercial Medicare Advantage plan.",
        "Bill the Medicare Advantage plan, not the MAC. Follow the plan's authorization and network rules.",
      ],
      [
        "A 68-year-old patient is still working and has an employer group plan. The employer has 25 employees.",
        "The employer plan is primary and Medicare is secondary under MSP rules for working-aged beneficiaries. Verify employer size and coverage.",
      ],
      [
        "A provider expects Medicare to deny a screening that is allowed only once per interval and the patient had one recently.",
        "Present an ABN before the service if you expect denial as not reasonable and necessary, so the patient can decide. Without a valid ABN, the practice generally cannot bill the patient.",
      ],
      [
        "A patient has Original Medicare and a Medigap plan.",
        "Bill Medicare first. Medicare forwards crossover claims to the Medigap plan or the practice bills it with the Medicare remittance. The Medigap plan then pays part of the patient's share.",
      ],
      [
        "A Part B claim for a date of service 14 months ago was never filed.",
        "It is past the 12-month filing limit and is generally not payable. Review for exceptions and fix the process that allowed the delay.",
      ],
      [
        "Is a blanket ABN signed at registration valid for all future services?",
        "No. An ABN must relate to a specific service and be given before it is furnished.",
      ],
    ],
    case: "A new patient with a Medicare Advantage card is told by the practice that the visit is covered because ‘the Medicare card is active.’",
    model:
      "Active Medicare enrollment does not mean the practice is in the plan's network or that the visit is covered without authorization. Verify the specific MA plan, the provider's network status, and any referral or authorization requirements. Correct what the patient was told and document the verification with the reference number.",
    mistakes: [
      "Billing the MAC for a Medicare Advantage patient.",
      "Using a blanket ABN.",
      "Missing MSP information at registration.",
    ],
    drills: [
      "Make a comparison chart of Original Medicare, Medicare Advantage, Medigap, and Part D.",
      "Write a registration checklist for Medicare patients that includes MSP questions.",
      "List the situations where an ABN is and is not allowed.",
    ],
    rubric: [
      "The right payer is chosen.",
      "MSP and ABN rules are applied correctly.",
      "Filing limits are tracked.",
      "Patient responsibility is billed accurately.",
    ],
    scenario:
      "A patient has a Medicare Advantage plan. Who receives the claim?",
    answers: [
      "The Medicare Advantage plan",
      "The Medicare Administrative Contractor",
      "A Medigap insurer",
    ],
    correct: 0,
    why: "Medicare Advantage replaces Original Medicare, so the private plan processes and pays the claim.",
    taglish:
      "Ang Original Medicare ay Part A (ospital) at Part B (medical); may deductible at 20 percent coinsurance sa Part B. Ang Medigap ay supplement para sa Original Medicare lang. Ang Medicare Advantage (Part C) ay pribadong plan na pumapalit sa Original, kaya ang plan ang bina-bill, hindi ang MAC. Gamitin ang ABN bago ang serbisyong malamang hindi bayaran at tandaan ang MSP: kapag may employer plan na pangunahin, ang Medicare ay secondary.",
    tip: "Always ask: ‘Do you have a Medicare Advantage plan or Original Medicare?’ Billing the wrong one is the most common Medicare front-end error.",
    mentor:
      "Role-play a registration conversation with a Medicare patient, covering MSP and plan type.",
    remember: [
      "Medicare Advantage replaces Original Medicare. Bill the plan.",
      "ABNs are specific, not blanket, and are given before the service.",
      "MSP rules decide when Medicare pays second.",
    ],
    source:
      "CMS Medicare Claims Processing Manual, MSP manual, and the ABN form instructions (CMS-R-131). Details change; verify current rules.",
  },
]);
