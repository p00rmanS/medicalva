// Remaining specialty areas: ENT, urology, OB-GYN procedures, neurology and sleep testing, allergy, DME and ambulance, case set 7.
addCodingLessons([
  {
    title:
      "ENT coding: ear tubes, tonsils, sinus procedures, laryngoscopy, and hearing tests",
    desc: "Tympanostomy, cerumen removal, tonsillectomy by age, sinus endoscopy, laryngoscopy, audiology codes, and the diagnoses that go with them.",
    time: "55 min",
    objectives: [
      "Choose ear tube, tonsil, and adenoid codes by anesthesia, age, and side.",
      "Report sinus endoscopy and laryngoscopy by the work performed.",
      "Select audiology codes and ear, nose, and throat diagnoses.",
    ],
    concept: `<p><strong>Ears.</strong> Tympanostomy tube insertion is 69433 with local or topical anesthesia and 69436 with general anesthesia. Both describe one ear, so bilateral work uses modifier 50 or the payer's convention. Impacted cerumen removal that needs instruments is 69210 for one ear, and simple irrigation is part of the visit. Diagnoses include H65.9- for nonsuppurative otitis media (H65.93 bilateral), H66.- for suppurative otitis media, and H61.2- for impacted cerumen (H61.21 right, H61.22 left, H61.23 bilateral).</p>
<p><strong>Tonsils and adenoids.</strong> Codes depend on the age. Tonsillectomy and adenoidectomy is 42820 under age 12 and 42821 at age 12 or older. Tonsillectomy alone is 42825 and 42826 by the same age split, and adenoidectomy alone is 42830 and 42831. Diagnoses include J35.01 for chronic tonsillitis and J35.3 for hypertrophy of tonsils with hypertrophy of adenoids.</p>
<p><strong>Nose and sinuses.</strong> 31231 is a diagnostic nasal endoscopy and 31237 adds a biopsy, polypectomy, or debridement. Sinus procedures are named by sinus and work, such as 31256 for maxillary antrostomy and 31255 for total ethmoidectomy. 31295 to 31297 report balloon dilation of the maxillary, frontal, or sphenoid sinus opening, and they are unilateral, so use modifier 50 for both sides. 30520 is septoplasty. 30901 controls anterior nosebleed with simple cautery. Diagnoses include J32.0 for chronic maxillary sinusitis, J34.2 for a deviated septum, J30.9 for allergic rhinitis, and R04.0 for epistaxis.</p>
<p><strong>Larynx.</strong> 31575 is a flexible diagnostic laryngoscopy, 31576 adds a biopsy, and 31579 adds stroboscopy. R49.0 is dysphonia.</p>
<p><strong>Hearing tests.</strong> 92551 is a screening pure tone test, 92552 is air-conduction pure tone audiometry, 92553 adds bone conduction, and 92557 is comprehensive audiometry with speech testing. 92567 is tympanometry, and 92587 and 92588 are limited and comprehensive otoacoustic emissions tests. Hearing loss diagnoses include H90.3 for bilateral sensorineural loss and H91.90 for unspecified hearing loss.</p>`,
    steps: [
      "Read the note for the anatomy, the work done, and the side.",
      "Check the patient's age for tonsil and adenoid codes.",
      "Check the anesthesia type for ear tube codes.",
      "Choose unilateral or bilateral reporting by the payer's rule.",
      "Add the test code for any hearing or laryngeal testing.",
      "Select diagnoses with side and type.",
    ],
    lab: [
      [
        "Case 1. A child has tympanostomy tubes placed in both ears under general anesthesia for chronic otitis media with effusion, bilateral.",
        "69436-50. Dx: H65.93.",
      ],
      [
        "Case 2. An 8-year-old has a tonsillectomy and adenoidectomy for hypertrophy of the tonsils and adenoids.",
        "42820. Dx: J35.3.",
      ],
      [
        "Case 3. An otolaryngologist performs a flexible diagnostic laryngoscopy in the office for hoarseness.",
        "31575. Dx: R49.0.",
      ],
      [
        "Case 4. A surgeon performs balloon dilation of the right maxillary sinus opening for chronic maxillary sinusitis.",
        "31295-RT. Dx: J32.0.",
      ],
      [
        "Case 5. A provider removes impacted cerumen from both ears with a curette.",
        "69210-50 (or two lines with RT and LT by payer rule). Dx: H61.23.",
      ],
    ],
    case: "A claim lists 42820 for a 15-year-old patient who had a combined tonsillectomy and adenoidectomy.",
    model:
      "42820 is for patients under age 12. For age 12 and older, the combined procedure is 42821. Correct the code and keep the date of birth on the claim.",
    mistakes: [
      "Ignoring age on tonsil and adenoid codes.",
      "Using the wrong anesthesia code for ear tubes.",
      "Reporting a bilateral sinus procedure once.",
      "Billing irrigation as cerumen removal with instruments.",
    ],
    drills: [
      "Make a table of tonsil and adenoid codes by age.",
      "Code five ear tube cases with different sides and anesthesia.",
      "List the audiology codes and what each tests.",
    ],
    rubric: [
      "Age, anesthesia, and side match the code.",
      "Sinus and larynx codes follow the work done.",
      "Audiology codes match the tests.",
      "Diagnoses include type and side.",
    ],
    scenario:
      "A 9-year-old has a combined tonsillectomy and adenoidectomy. Which code applies?",
    answers: [
      "42820, for a patient under age 12",
      "42821, for a patient age 12 or older",
      "42825, for tonsillectomy alone",
    ],
    correct: 0,
    why: "The combined procedure is 42820 under age 12 and 42821 at age 12 or older.",
    taglish:
      "Sa ENT, ang edad ang nagtatakda ng tonsil code: 42820 para sa mas bata sa 12 at 42821 para sa 12 pataas sa tonsillectomy at adenoidectomy. Sa ear tubes, 69433 kung local at 69436 kung general anesthesia, at modifier 50 kung dalawang tainga. Sa sinus balloon dilation, 31295 hanggang 31297, unilateral kaya 50 kung dalawa. Sa hearing tests, 92552 hanggang 92557 at 92567 sa tympanometry.",
    tip: "Put the patient's age and the side at the top of every ENT note. Those two facts change the code more often than the procedure name.",
    mentor:
      "Ask an ENT biller which of these procedures are bilateral by default on their payers' claims.",
    remember: [
      "Tonsil and adenoid codes split at age 12, with 42820 under 12 and 42821 at 12 or older.",
      "Ear tube codes depend on anesthesia: 69433 local and 69436 general, with 50 for both ears.",
      "Balloon sinus dilation codes are unilateral, so use 50 for both sides.",
    ],
  },
  {
    title:
      "Urology coding: cystoscopy, stones, prostate procedures, and urodynamics",
    desc: "Cystourethroscopy families, bladder tumor size, stone treatment, prostate procedures, vasectomy, catheters, and urodynamic testing.",
    time: "55 min",
    objectives: [
      "Choose the cystoscopy code by the work done and the size of the lesion.",
      "Report stone, stent, and prostate procedures correctly.",
      "Code urodynamic tests and catheter services.",
    ],
    concept: `<p><strong>Cystourethroscopy.</strong> 52000 is a diagnostic cystourethroscopy. Therapeutic codes include the diagnostic exam, so do not report 52000 with them. 52204 adds a biopsy. 52224 treats minor lesions under 0.5 cm. Bladder tumor fulguration is chosen by size: 52234 for 0.5 to 2.0 cm, 52235 for 2.0 to 5.0 cm, and 52240 for over 5.0 cm. 52310 removes a foreign body or stent in a simple case. 52332 inserts an indwelling ureteral stent.</p>
<p><strong>Stones.</strong> 52353 is ureteroscopy with lithotripsy, and 52356 includes lithotripsy with insertion of a ureteral stent. 50590 is extracorporeal shock wave lithotripsy. Diagnoses include N20.0 for a kidney stone, N20.1 for a ureteral stone, and N13.2 for hydronephrosis with a stone obstruction.</p>
<p><strong>Prostate.</strong> 52601 is transurethral resection of the prostate and 52648 is laser vaporization. 53854 is water vapor thermal therapy. 52441 is placement of a permanent prostatic urethral implant, with add-on 52442 for each additional implant. Prostate needle biopsy was reported with 55700 until that code was deleted effective January 1, 2026, so check the current CPT book for the replacement code and for imaging guidance such as transrectal ultrasound (76872). R97.20 is an elevated PSA and N40.1 is benign enlargement of the prostate with symptoms.</p>
<p><strong>Other procedures.</strong> 55250 is a vasectomy, with Z30.2 as the sterilization diagnosis. 54150 is circumcision with a clamp in a newborn, 54160 is a surgical circumcision in a neonate, and 54161 is for older than 28 days.</p>
<p><strong>Testing and catheters.</strong> 51798 is a bladder ultrasound for post-void residual. 51726 is a complex cystometrogram, 51728 adds voiding pressure studies, and 51741 is a complex uroflowmetry. 51701 is a simple bladder catheterization that is not left in place, 51702 inserts a temporary indwelling catheter, and 51703 is a complicated insertion.</p>
<p><strong>Common diagnoses.</strong> R31.0 is gross hematuria, R31.21 is asymptomatic microscopic hematuria, N32.81 is overactive bladder, N39.41 is urge incontinence, N39.3 is stress incontinence, C67.9 is bladder cancer, and N47.1 is phimosis.</p>`,
    steps: [
      "Read the procedure note for the work done and the lesion size.",
      "Choose the therapeutic code and leave out the diagnostic base code.",
      "Add stent, biopsy, or lithotripsy codes only when they are separate or included by the code.",
      "Check ultrasound guidance and catheter rules.",
      "Add the side where the code is unilateral.",
      "Select diagnoses that match the findings.",
    ],
    lab: [
      [
        "Case 1. A urologist performs an office cystoscopy for gross hematuria and finds no abnormality.",
        "52000. Dx: R31.0.",
      ],
      [
        "Case 2. A urologist fulgurates a 1.5 cm bladder tumor during cystourethroscopy.",
        "52234, because the tumor is in the 0.5 to 2.0 cm range. The diagnostic code 52000 is not added. Dx: C67.9 after pathology.",
      ],
      [
        "Case 3. A urologist performs ureteroscopy with laser lithotripsy for a ureteral stone and places a ureteral stent.",
        "52356, which includes lithotripsy with stent insertion. Dx: N20.1.",
      ],
      [
        "Case 4. A urologist performs a bilateral vasectomy in the office.",
        "55250. Dx: Z30.2.",
      ],
      [
        "Case 5. A urologist inserts a temporary indwelling bladder catheter in the office for acute urinary retention.",
        "51702 for the simple temporary indwelling catheter insertion. Dx: R33.9.",
      ],
    ],
    case: "A claim lists 52000 and 52234 together for a cystoscopy with fulguration of a 1.5 cm tumor.",
    model:
      "The therapeutic code includes the diagnostic exam, so 52000 is not reported. Remove it and keep 52234.",
    mistakes: [
      "Reporting a diagnostic cystoscopy with a therapeutic one.",
      "Choosing the tumor code without the size.",
      "Reporting stent placement separately when the code includes it.",
      "Forgetting guidance for a prostate biopsy.",
    ],
    drills: [
      "Make a table of the bladder tumor size ranges and codes.",
      "Code five stone cases with and without stents.",
      "Write the urodynamic codes and what they measure.",
    ],
    rubric: [
      "The therapeutic code replaces the diagnostic code.",
      "Tumor size and stent inclusion are checked.",
      "Testing and catheter codes match the service.",
      "Diagnoses match the findings.",
    ],
    scenario:
      "A urologist fulgurates a 1.5 cm bladder tumor. Which code applies?",
    answers: [
      "52234, for a tumor from 0.5 to 2.0 cm",
      "52235, for a tumor from 2.0 to 5.0 cm",
      "52240, for a tumor over 5.0 cm",
    ],
    correct: 0,
    why: "Bladder tumor fulguration is chosen by size, and 1.5 cm falls in the 0.5 to 2.0 cm range.",
    taglish:
      "Sa cystoscopy, 52000 ang diagnostic lang, at hindi ito idinadagdag sa therapeutic na code. Sa bladder tumor, laki ang batayan: 52234 para sa 0.5 hanggang 2 cm, 52235 para sa 2 hanggang 5 cm, at 52240 para sa higit sa 5 cm. Sa ureteroscopy na may lithotripsy at stent, 52356. Ang 55700 para sa prostate biopsy ay na-delete noong Enero 2026, kaya i-check ang kasalukuyang CPT book. Ang vasectomy ay 55250.",
    tip: "Look for the size in centimeters in every urology procedure note before coding. If it is missing, query before you guess a range.",
    mentor:
      "Ask a urology coder how they confirm tumor size when the operative note leaves it out.",
    remember: [
      "A therapeutic cystoscopy code includes the diagnostic exam, so do not add 52000.",
      "Bladder tumor fulguration codes depend on size: 52234, 52235, and 52240.",
      "52356 includes ureteroscopic lithotripsy with stent insertion.",
    ],
  },
  {
    title:
      "OB-GYN procedure coding: contraception, colposcopy, endometrial sampling, and ultrasound",
    desc: "IUD and implant services with device codes, colposcopy and cervical procedures, endometrial biopsy and hysteroscopy, obstetric ultrasound, and Pap and HPV testing.",
    time: "55 min",
    objectives: [
      "Report contraceptive insertions and removals with the device codes.",
      "Choose colposcopy and cervical procedure codes by the work performed.",
      "Select obstetric and pelvic ultrasound codes and screening codes.",
    ],
    concept: `<p><strong>Contraception.</strong> 58300 is IUD insertion and 58301 is IUD removal. Device codes include J7298 for a levonorgestrel 52 mg IUD, J7296 for 19.5 mg, J7301 for 13.5 mg, and J7300 for a copper IUD. A contraceptive implant is inserted with 11981, removed with 11982, and removed with reinsertion by 11983, with J7307 for the etonogestrel implant. Diagnoses include Z30.430 for IUD insertion, Z30.432 for IUD removal, and Z30.017 for initial prescription of an implantable contraceptive.</p>
<p><strong>Colposcopy.</strong> 57452 is colposcopy of the cervix. 57454 adds cervical biopsies and endocervical curettage, 57455 adds cervical biopsies, and 57456 adds endocervical curettage. 57460 is a loop electrode biopsy and 57461 is loop electrode conization of the cervix. Abnormal Pap findings are coded R87.61- (for example R87.610 for ASC-US and R87.612 for LSIL), and cervical dysplasia is N87.- (N87.1 for moderate dysplasia). A positive high-risk HPV test is R87.810.</p>
<p><strong>Uterus.</strong> 58100 is endometrial biopsy. 58558 is hysteroscopy with endometrial sampling or polypectomy. N95.0 is postmenopausal bleeding, N93.9 is abnormal uterine bleeding unspecified, and D25.9 is uterine fibroids.</p>
<p><strong>Ultrasound.</strong> 76801 is an obstetric ultrasound before 14 weeks, first gestation, and 76805 is the same at 14 weeks or later. Add-ons 76802 and 76810 report each additional gestation. 76817 is transvaginal obstetric ultrasound. 76830 is a transvaginal non-obstetric exam, and 76856 is a complete transabdominal pelvic exam. Use the pregnancy codes (such as Z34.01 and Z3A.10) when the exam is part of prenatal care.</p>
<p><strong>Pap and HPV.</strong> Cytology and HPV testing are laboratory codes billed by the lab. For Medicare, G0101 reports a screening pelvic and breast exam and Q0091 reports obtaining the screening Pap specimen. Z12.4 is cervical cancer screening and Z11.51 is HPV screening.</p>`,
    steps: [
      "Identify the service: contraceptive, colposcopy, sampling, or imaging.",
      "Choose the procedure code by what was done.",
      "Add the device or implant code if the practice supplied it.",
      "Add an E/M with modifier 25 only if a separate evaluation is documented.",
      "Select diagnoses for the reason and any abnormal result.",
      "Check the payer's screening and global rules.",
    ],
    lab: [
      [
        "Case 1. A provider inserts a 52 mg levonorgestrel IUD supplied by the practice. No separate E/M is documented.",
        "58300 and J7298. Dx: Z30.430.",
      ],
      [
        "Case 2. A provider performs colposcopy with cervical biopsies and endocervical curettage for ASC-US with a positive high-risk HPV test.",
        "57454. Dx: R87.610 and R87.810.",
      ],
      [
        "Case 3. A provider performs a loop electrode conization of the cervix for moderate cervical dysplasia.",
        "57461. Dx: N87.1.",
      ],
      [
        "Case 4. A provider performs an endometrial biopsy for postmenopausal bleeding.",
        "58100. Dx: N95.0.",
      ],
      [
        "Case 5. A provider performs a transabdominal obstetric ultrasound at 10 weeks for a singleton first pregnancy, as part of prenatal care.",
        "76801. Dx: Z34.01 and Z3A.10.",
      ],
    ],
    case: "A practice reports 58300 for an IUD insertion and leaves out the device the practice supplied.",
    model:
      "The device is a separately billable supply. Add the HCPCS device code, such as J7298, with one unit, and keep the product details in the note.",
    mistakes: [
      "Leaving out the IUD or implant device code.",
      "Billing an E/M for a routine insertion with no separate evaluation.",
      "Choosing the wrong colposcopy code for the work done.",
      "Using a pregnancy code for a nonpregnant ultrasound.",
    ],
    drills: [
      "Match each colposcopy code to the work it includes.",
      "Code five contraceptive visits, with and without devices.",
      "Write the obstetric ultrasound codes by gestational age.",
    ],
    rubric: [
      "Procedure and device codes are both reported.",
      "Colposcopy codes match the work done.",
      "Ultrasound codes match the gestation and approach.",
      "Diagnoses include abnormal results.",
    ],
    scenario:
      "A provider inserts an IUD supplied by the practice. What is reported?",
    answers: [
      "58300 plus the device code, such as J7298",
      "58300 only, with the device included in it",
      "J7298 only, with no insertion code",
    ],
    correct: 0,
    why: "The insertion and the device are separate services, so both the procedure code and the device HCPCS code are reported.",
    taglish:
      "Sa IUD, 58300 ang pagpasok at 58301 ang pagtanggal, at idagdag ang device code tulad ng J7298 kung ang clinic ang nagbigay. Sa implant, 11981, 11982, at 11983. Sa colposcopy, 57454 kung may biopsy at endocervical curettage, 57455 kung biopsy lang, at 57461 para sa loop conization. Sa obstetric ultrasound, 76801 bago ang 14 na linggo at 76805 pagkatapos. Ang diagnosis ay Z30.430 para sa IUD insertion.",
    tip: "List the procedure and the supply on separate lines in your worksheet. A missing device line is one of the easiest revenue misses in women's health.",
    mentor:
      "Ask a women's health biller how they track IUD and implant device stock against claims.",
    remember: [
      "IUD and implant insertions are billed with the procedure code and the device HCPCS code.",
      "57454 is colposcopy with cervical biopsy and endocervical curettage, and 57461 is loop conization.",
      "76801 is for ultrasound before 14 weeks and 76805 is for 14 weeks or later.",
    ],
  },
  {
    title:
      "Neurology and sleep testing coding: EEG, nerve studies, botulinum toxin, and sleep studies",
    desc: "EEG, nerve conduction and EMG counting, chemodenervation with botulinum toxin, attended and home sleep studies, and CPAP rules.",
    time: "55 min",
    objectives: [
      "Count nerve conduction studies and report them with needle EMG.",
      "Report chemodenervation with the drug code and the right units.",
      "Choose among attended, home, and CPAP sleep study codes.",
    ],
    concept: `<p><strong>EEG.</strong> 95816 is an EEG with awake and drowsy recording, and 95819 is an EEG with awake and asleep recording. 95812 and 95813 are extended EEG monitoring, by length of recording. Newer long-term monitoring codes exist in the 957xx range, so check the current book.</p>
<p><strong>Nerve conduction studies (NCS).</strong> Count each nerve study separately: every motor study, sensory study, F-wave, and H-reflex counts as one. The total decides the code: 95907 for 1 to 2 studies, 95908 for 3 to 4, 95909 for 5 to 6, 95910 for 7 to 8, 95911 for 9 to 10, 95912 for 11 to 12, and 95913 for 13 or more. Needle EMG can be reported with NCS using add-on codes: 95885 for a limited study of each extremity and 95886 for a complete study of each extremity, which tests at least five muscles. 95860, 95861, 95863, and 95864 report needle EMG without NCS, for one, two, three, and four extremities.</p>
<p><strong>Botulinum toxin.</strong> 64612 treats facial muscles on one side, such as for blepharospasm. 64615 treats muscles of the face, head, and neck for chronic migraine, bilaterally. The drug is billed separately with J0585 per unit of onabotulinumtoxinA, and a chronic migraine protocol of 155 units is reported as 155 units. Discarded drug follows the waste rules. G43.709 is chronic migraine without aura, not intractable, without status migrainosus.</p>
<p><strong>Sleep studies.</strong> 95810 is attended polysomnography for age 6 and older, and 95811 includes CPAP titration. 95805 is a multiple sleep latency or maintenance of wakefulness test. 95806 is an unattended study. For Medicare home sleep apnea tests, G0398 is a type II monitor, G0399 is type III, and G0400 is type IV. Diagnoses include G47.33 for obstructive sleep apnea, G47.30 for unspecified sleep apnea, R06.83 for snoring, and R40.0 for somnolence.</p>
<p><strong>CPAP.</strong> E0601 is a CPAP device, billed as a capped rental. Medicare expects a face-to-face visit, a qualifying sleep test, and documented use in the first 90 days, such as at least 4 hours a night on 70 percent of nights in a 30-day period, before it continues payment.</p>`,
    steps: [
      "Identify the test or treatment and the setting.",
      "For NCS, count each separate nerve study.",
      "Add EMG add-on codes for each extremity tested.",
      "For botulinum toxin, report the injection code and the drug units.",
      "For sleep studies, choose attended, unattended, or titration by what was done.",
      "Link diagnoses that support medical necessity.",
    ],
    lab: [
      [
        "Case 1. A sleep center performs an attended overnight polysomnography with CPAP titration on a 45-year-old with obstructive sleep apnea.",
        "95811. Dx: G47.33.",
      ],
      [
        "Case 2. A Medicare patient with snoring and daytime sleepiness has a home sleep apnea test using a type III portable monitor.",
        "G0399. Dx: R06.83 and R40.0.",
      ],
      [
        "Case 3. A neurologist performs right-sided motor and sensory studies of the median and ulnar nerves (4 studies) and a complete needle EMG of five muscles in the right arm for carpal tunnel syndrome.",
        "95908 for 4 studies and 95886 × 1 for the complete needle EMG of the extremity. Dx: G56.01.",
      ],
      [
        "Case 4. A neurologist injects 155 units of onabotulinumtoxinA for chronic migraine according to the protocol.",
        "64615 and J0585 × 155. Dx: G43.709.",
      ],
      [
        "Case 5. A technologist records a routine EEG with awake and drowsy states for seizures.",
        "95816. Dx: R56.9.",
      ],
    ],
    case: "A neurologist reports 95907 for a nerve conduction test that included 4 separate nerve studies.",
    model:
      "95907 is for one or two studies. Four studies are reported with 95908. Count each motor, sensory, F-wave, and H-reflex study from the report, then choose the code for the total.",
    mistakes: [
      "Choosing the NCS code without counting studies.",
      "Reporting the botulinum drug as one unit.",
      "Using an attended study code for an unattended test.",
      "Skipping the face-to-face and test requirements for CPAP.",
    ],
    drills: [
      "Count studies and select codes for three sample nerve reports.",
      "Convert botulinum doses into J0585 units.",
      "Make a table of sleep study codes and settings.",
    ],
    rubric: [
      "Studies are counted from the report.",
      "EMG add-ons match the extremities tested.",
      "Drug units match the dose.",
      "Sleep codes match the setting and monitor type.",
    ],
    scenario:
      "A nerve conduction test includes 4 separate nerve studies. Which code applies?",
    answers: [
      "95908, for three or four studies",
      "95907, for one or two studies",
      "95909, for five or six studies",
    ],
    correct: 0,
    why: "Nerve conduction studies are reported by the total number of studies, and 3 to 4 studies are 95908.",
    taglish:
      "Sa nerve conduction, bilangin ang bawat motor, sensory, F-wave, at H-reflex na study, at ang kabuuan ang pipili ng code: 95907 para sa isa o dalawa, 95908 para sa tatlo o apat, at 95909 para sa lima o anim. Ang EMG ay add-on na 95885 o 95886 ayon sa limbs. Sa botulinum toxin, 64615 para sa migraine at J0585 ayon sa units. Sa sleep study, 95810 at 95811 sa lab, at G0399 sa home test ng Medicare.",
    tip: "Make a tally of each nerve study as you read an NCS report. The tally, not the title, decides the code.",
    mentor:
      "Ask a neurology biller to show you one NCS report and the claim built from it.",
    remember: [
      "NCS codes depend on the total number of studies: 95907 for 1 to 2, 95908 for 3 to 4, and so on.",
      "Botulinum toxin is billed twice: 64615 for the injection and J0585 for each unit of drug.",
      "95811 includes CPAP titration, and Medicare home sleep tests use G0398 to G0400.",
    ],
  },
  {
    title: "Allergy testing and immunotherapy coding",
    desc: "Skin test codes by number of tests, patch tests, immunotherapy injections, antigen preparation, challenge tests, and allergy diagnoses.",
    time: "50 min",
    objectives: [
      "Report skin and patch tests by the number of tests performed.",
      "Separate immunotherapy injection services from antigen preparation.",
      "Select allergy diagnosis and status codes.",
    ],
    concept: `<p><strong>Skin testing.</strong> 95004 reports percutaneous (prick or puncture) tests with allergenic extracts, and the units are the number of tests. 95024 reports intracutaneous (intradermal) tests with extracts, also by the number of tests. 95028 is for delayed-type intradermal tests. 95044 reports patch tests, by the number of tests, and 95052 reports photo patch tests. Each code includes the interpretation. Many payers limit the number of tests that are considered medically necessary.</p>
<p><strong>Challenge tests.</strong> 95076 is an ingestion challenge test for the first 120 minutes, with add-on 95079 for each additional 60 minutes. 95070 is a bronchial challenge test with inhalation.</p>
<p><strong>Immunotherapy injections.</strong> 95115 is professional service for one allergen immunotherapy injection, and 95117 is for two or more injections at the same visit. These cover the injection and the observation. They do not include the extract itself.</p>
<p><strong>Antigen preparation.</strong> 95165 reports the preparation and provision of antigens, by the number of doses, where one dose is up to 1 mL. It is reported by the physician who prepared the extracts. 95144 is for single-dose vials of antigen. 95180 reports rapid desensitization, by the hour.</p>
<p><strong>Lab tests.</strong> 86003 is a specific IgE test for each allergen and 82785 is total IgE.</p>
<p><strong>Visits.</strong> A separate E/M with modifier 25 is reported only if a significant, separately identifiable evaluation is documented, not when the visit is only for the test or the injection.</p>
<p><strong>Diagnoses.</strong> J30.1 is allergic rhinitis due to pollen, J30.2 is other seasonal allergic rhinitis, J30.81 is due to animal hair and dander, and J30.9 is allergic rhinitis, unspecified. L50.9 is urticaria. L23.9 is allergic contact dermatitis. Food allergy status codes include Z91.010 for peanuts. T78.00XA is anaphylactic reaction due to unspecified food, initial encounter. Z51.6 reports an encounter for desensitization to allergens, and Z88.0 reports penicillin allergy status.</p>`,
    steps: [
      "Count the tests or injections from the note.",
      "Choose the test or injection code and set the units.",
      "Decide whether antigen preparation was done by this provider.",
      "Check whether a separate evaluation is documented.",
      "Add lab codes if IgE tests were ordered.",
      "Select the allergy diagnosis or status.",
    ],
    lab: [
      [
        "Case 1. A provider performs percutaneous skin tests with 40 allergens for allergic rhinitis.",
        "95004 × 40. Dx: J30.9.",
      ],
      [
        "Case 2. After negative prick tests, a provider performs intradermal tests with 10 allergens.",
        "95024 × 10.",
      ],
      [
        "Case 3. A patient receives two allergy injections from two vials in one visit.",
        "95117. Dx: J30.1.",
      ],
      [
        "Case 4. A patient receives one allergy injection in the office.",
        "95115. Dx: J30.1.",
      ],
      [
        "Case 5. A provider applies 25 patch tests for suspected allergic contact dermatitis.",
        "95044 × 25. Dx: L30.9.",
      ],
    ],
    case: "A practice reports 95004 once for 40 prick tests.",
    model:
      "95004 is reported by the number of tests, so 40 tests are 40 units. Correct the units and keep the test list and results in the chart.",
    mistakes: [
      "Reporting one unit for a series of tests.",
      "Adding an E/M with 25 for a visit that was only a test.",
      "Billing the extract with the injection code.",
      "Skipping the allergen list.",
    ],
    drills: [
      "Calculate units for three test panels.",
      "List when 95115 and 95117 apply.",
      "Code five allergy visits, with and without a separate evaluation.",
    ],
    rubric: [
      "Units match the number of tests.",
      "Injection and antigen services are separated.",
      "Separate E/M is only added when documented.",
      "Diagnosis and status codes are correct.",
    ],
    scenario:
      "A patient receives two allergy injections from two vials in one visit. Which code applies?",
    answers: [
      "95117, for two or more injections",
      "95115, for one injection",
      "95165, for antigen preparation",
    ],
    correct: 0,
    why: "95117 reports two or more allergen immunotherapy injections at the same visit.",
    taglish:
      "Sa allergy testing, ang units ay bilang ng tests: 95004 ay bawat prick test at 95024 ay bawat intradermal test, at 95044 ay bawat patch test. Sa allergy shots, 95115 para sa isang turok at 95117 para sa dalawa o higit pa. Ang 95165 ay para sa paghahanda ng antigen, ayon sa dami ng doses. Huwag magdagdag ng E/M na may 25 kung test o shot lang ang ginawa.",
    tip: "Write the number of tests next to the code in your worksheet. A test code reported once is the most common allergy billing error.",
    mentor:
      "Ask an allergy practice biller how they cap or document the number of skin tests per visit.",
    remember: [
      "Skin and patch test codes are reported by the number of tests, so 40 tests are 40 units.",
      "95115 is one injection and 95117 is two or more injections.",
      "95165 reports antigen preparation by doses, and a separate E/M needs modifier 25 and documentation.",
    ],
  },
  {
    title: "DME, supplies, and ambulance billing",
    desc: "DMEPOS rental and purchase modifiers, common E, K, L, and A codes, Medicare supplier rules, and ambulance service levels, mileage, and origin and destination modifiers.",
    time: "55 min",
    objectives: [
      "Choose rental or purchase reporting and the modifiers for DME.",
      "List the documentation that supports a DME claim.",
      "Code a ground ambulance trip with the service level, mileage, and modifiers.",
    ],
    concept: `<p><strong>DME.</strong> Durable medical equipment and supplies are billed with HCPCS Level II codes. Medicare sends them to the DME Medicare Administrative Contractor, not the regular A/B contractor. Suppliers must be enrolled and accredited. Common codes include E0601 (CPAP device), E1390 (oxygen concentrator), E0143 (folding wheeled walker), K0001 (standard wheelchair), L1832 (knee orthosis), L4361 (walking boot), E0607 (home glucose monitor), and A4253 (glucose test strips).</p>
<p><strong>Rental or purchase.</strong> Modifiers show the kind of claim: NU for a new purchase, UE for a used purchase, and RR for a rental. KH marks the first month of a rental or the purchase claim, KI marks months two and three, and KJ marks months four to fifteen of capped rentals. Oxygen equipment is rented monthly. Many items are capped rentals that convert to ownership after the rental period.</p>
<p><strong>Documentation.</strong> Medicare expects a standard written order, a face-to-face visit related to the need, medical records that support necessity, and sometimes a certificate of medical necessity. Home oxygen requires qualifying test results, such as an arterial blood gas or oximetry. J96.11 is chronic respiratory failure with hypoxia.</p>
<p><strong>Ground ambulance.</strong> A0427 is advanced life support level 1 emergency, A0426 is non-emergency ALS level 1, A0429 is basic life support emergency, and A0428 is non-emergency BLS. A0425 reports ground mileage in loaded statute miles, one unit per mile, counted only while a patient is in the vehicle. A0998 is ambulance response and treatment without transport. Origin and destination modifiers are two letters, the first for the origin and the second for the destination: R is residence, H is hospital, N is skilled nursing facility, P is physician's office, S is scene of an accident, D is a diagnostic or therapeutic site, and J is a free-standing ESRD facility. So RH is residence to hospital. QL shows a patient pronounced dead after the ambulance was called.</p>
<p><strong>Medical necessity.</strong> Medicare covers ambulance transport when other transport would endanger the patient's health, and to the nearest appropriate facility. Repetitive non-emergency trips, such as dialysis, need a physician certification and documentation.</p>`,
    steps: [
      "Identify the item or service and the supplier type.",
      "Choose the HCPCS code from the product or service level.",
      "Add rental, purchase, or month modifiers for DME.",
      "For ambulance, choose the level, the mileage units, and the origin and destination.",
      "Confirm the order, face-to-face visit, and medical necessity records.",
      "Link a diagnosis that supports the need.",
    ],
    lab: [
      [
        "Case 1. A Medicare patient with chronic respiratory failure with hypoxia begins home oxygen with a stationary concentrator.",
        "E1390 with RR and KH for the first month. Dx: J96.11.",
      ],
      [
        "Case 2. A patient begins CPAP therapy with a new device, in its first rental month.",
        "E0601-RR-KH.",
      ],
      ["Case 3. A patient buys a new folding wheeled walker.", "E0143-NU."],
      [
        "Case 4. An advanced life support ambulance takes a patient from home to the hospital for an emergency, 12 loaded miles.",
        "A0427-RH for the service and A0425 × 12 for the mileage. Dx: the condition, such as I21.9.",
      ],
      [
        "Case 5. A basic life support ambulance takes a patient from a skilled nursing facility to a free-standing dialysis center for a scheduled trip, 8 loaded miles, with certification on file.",
        "A0428-NJ and A0425 × 8. Dx: N18.6.",
      ],
    ],
    case: "A supplier bills E0601 as a purchase for an item that Medicare treats as a capped rental.",
    model:
      "Medicare pays CPAP as a capped rental, so it is billed with RR and the month modifiers, not as a purchase. Correct the claim, and track the rental months so that the payment stops when the cap is reached.",
    mistakes: [
      "Billing a rental item as a purchase.",
      "Leaving off the origin and destination modifiers.",
      "Counting empty miles for ambulance mileage.",
      "Missing the order or face-to-face documentation.",
    ],
    drills: [
      "Match ten DME items to rental or purchase status.",
      "Calculate mileage units for three trips.",
      "List the origin and destination letters with their places.",
    ],
    rubric: [
      "Rental or purchase is correct.",
      "Month and item modifiers are used.",
      "Ambulance level, mileage, and modifiers are right.",
      "The record supports necessity.",
    ],
    scenario:
      "An ambulance takes a patient from home to the hospital. Which origin and destination modifier applies?",
    answers: [
      "RH, for residence to hospital",
      "HR, for hospital to residence",
      "SH, for scene to hospital",
    ],
    correct: 0,
    why: "The first letter is the origin and the second is the destination, so residence to hospital is RH.",
    taglish:
      "Sa DME, ang Medicare ay sa DME MAC at kailangan ng order, face-to-face, at medical necessity. NU ang bagong bili, UE ang gamit na bili, RR ang rental, at KH, KI, KJ ang buwan ng rental. Ang CPAP at oxygen ay rental. Sa ambulance, A0427 ang emergency ALS, A0429 ang emergency BLS, at A0425 ang mileage kada loaded mile. Ang modifier ay dalawang letra: una ang pinanggalingan at pangalawa ang pupuntahan, tulad ng RH para sa bahay papuntang ospital.",
    tip: "For ambulance claims, write the origin letter, the destination letter, and the loaded miles on one line. The three facts build the whole claim.",
    mentor:
      "Ask a DME or ambulance biller which documents they collect before every first claim.",
    remember: [
      "NU is a new purchase, UE is a used purchase, RR is a rental, and KH, KI, and KJ mark rental months.",
      "Ambulance mileage is A0425, one unit for each loaded mile.",
      "Ambulance modifiers are origin then destination, so residence to hospital is RH.",
    ],
  },
  {
    title:
      "Case practice set 7: ENT, urology, women's health, neurology, and allergy",
    desc: "Five more exam-style cases that combine ear tube coding, stent insertion, IUD removal, nerve study counting, and allergy injections.",
    time: "75 min",
    objectives: [
      "Code a unilateral ear tube procedure with the right anesthesia code.",
      "Report a ureteral stent and an IUD removal with the right diagnoses.",
      "Count nerve studies and allergy injections to choose the code.",
    ],
    concept: `<p>Work these as you did the earlier sets. Write the diagnoses, the procedures with units and modifiers, and a reason before you open the answer. Allow about six minutes each. The cases are fictional, and exact codes and modifier rules should be verified in the current books and with each payer.</p>`,
    steps: [
      "Read the whole case and list the diagnoses and services.",
      "Check age, side, and anesthesia where the code depends on them.",
      "Count tests, studies, or injections.",
      "Add device or supply codes when the practice supplied them.",
      "Write your answer and compare.",
    ],
    lab: [
      [
        "Case 31. A physician places a tympanostomy tube in the right ear of a child under local anesthesia in the office for nonsuppurative otitis media of the right ear.",
        "69433-RT. Dx: H65.91.",
      ],
      [
        "Case 32. A urologist performs cystourethroscopy with insertion of an indwelling ureteral stent for hydronephrosis from a ureteral stone obstruction.",
        "52332. Dx: N13.2.",
      ],
      [
        "Case 33. A provider removes a levonorgestrel IUD at the patient's request. No device is placed.",
        "58301. Dx: Z30.432.",
      ],
      [
        "Case 34. A neurologist performs three nerve conduction studies (right median motor, right median sensory, right ulnar motor) with no needle EMG.",
        "95908, because three studies fall in the 3 to 4 range.",
      ],
      [
        "Case 35. A patient receives two allergy injections from two vials at one visit. The antigen was prepared earlier by another provider.",
        "95117 for the injections. Dx: J30.1. No antigen preparation is reported by this provider.",
      ],
    ],
    case: "You code Case 34 as 95907 and the payer pays but later flags the claim in an audit.",
    model:
      "Three studies fall in the 3 to 4 study range, which is 95908. 95907 is for one or two studies, so the claim under-reports the work. Correct it to 95908 and keep the nerve study list in the report.",
    mistakes: [
      "Using the general ear tube code regardless of anesthesia.",
      "Adding a diagnostic cystoscopy with a stent insertion.",
      "Reporting an insertion for a removal-only visit.",
      "Counting nerve studies by nerves instead of studies.",
    ],
    drills: [
      "Code all five cases without notes, then check.",
      "Write the reasoning sentence for each case.",
      "Redo your misses after 24 hours.",
    ],
    rubric: [
      "Age, side, and anesthesia are applied.",
      "Counts match the report.",
      "Device and supply codes are used when supplied.",
      "Misses are logged by topic.",
    ],
    scenario:
      "A provider removes an IUD and places no new device. Which code is reported?",
    answers: [
      "58301, for IUD removal",
      "58300, for IUD insertion",
      "58300 and 58301 together",
    ],
    correct: 0,
    why: "Removal is reported with 58301, and no insertion code applies when no new device is placed.",
    taglish:
      "Sa case practice set 7, isulat muna ang diagnoses at codes bago tingnan ang sagot. Sa ear tube na local anesthesia, 69433, at 69436 kung general. Sa ureteral stent, 52332. Sa pagtanggal ng IUD, 58301 at Z30.432. Sa nerve conduction, bilangin ang bawat study: tatlo ay 95908. Sa dalawang allergy injections, 95117, at hindi mo ibibill ang antigen kung ibang provider ang naghanda.",
    tip: "Circle the count in each case before you code: tests, studies, injections, or levels. The count picks the code.",
    mentor:
      "Redo your two weakest cases from sets 1 to 7 and explain them aloud.",
    remember: [
      "69433 is an ear tube with local anesthesia and 69436 is with general anesthesia.",
      "58301 is IUD removal and applies when no new device is inserted.",
      "Three nerve conduction studies fall in 95908, and two injections fall in 95117.",
    ],
  },
]);
