// Coding track: the CPT surgery series, radiology, pathology, medicine, and HCPCS Level II in depth.
// Code numbers are examples for study. CPT descriptors belong to the AMA; verify in the current book.
addCodingLessons([
  {
    title: "CPT 20000 series: musculoskeletal surgery in depth",
    desc: "Arthroscopy, joint replacement, spine, hand and foot procedures, and casting, with the rules that decide which code applies.",
    time: "70 min",
    objectives: [
      "Choose between diagnostic, limited, and extensive arthroscopy codes.",
      "Code joint replacement, spinal decompression, and fusion by level and approach.",
      "Apply the bundling rules for arthroscopic procedures and casting.",
    ],
    concept: `<p>The 20000 series covers bones, joints, muscles, tendons, and casting. Many codes depend on the <b>site</b> (shoulder, knee, spine level), the <b>approach</b> (open, percutaneous, arthroscopic), the <b>extent</b> (limited or extensive, how many levels or compartments), and whether hardware is used. The section guidelines are essential here.</p>
<table class="ref-table"><thead><tr><th>Area</th><th>Examples (verify in the current book)</th></tr></thead><tbody>
<tr><td>Knee arthroscopy</td><td>29870 diagnostic. 29881 meniscectomy, medial or lateral, including any chondroplasty in the same knee. 29880 medial and lateral. 29888 ACL reconstruction.</td></tr>
<tr><td>Shoulder arthroscopy</td><td>29822 limited debridement. 29823 extensive debridement. 29827 rotator cuff repair. 29826 add-on for subacromial decompression.</td></tr>
<tr><td>Fracture treatment</td><td>25600 and 25605 closed treatment of distal radius fracture. 25607 to 25609 open treatment. 27235 percutaneous fixation of femoral neck fracture.</td></tr>
<tr><td>Joint replacement</td><td>27130 total hip arthroplasty. 27447 total knee arthroplasty.</td></tr>
<tr><td>Spine</td><td>63030 laminotomy with decompression, lumbar, one interspace. 63047 laminectomy, lumbar, one segment. 22551 anterior cervical fusion, one interspace. 22612 posterolateral lumbar fusion, one level. 22840 posterior instrumentation add-on.</td></tr>
<tr><td>Hand and foot</td><td>26055 trigger finger release. 25111 ganglion cyst excision at the wrist. 28296 bunion correction with metatarsal osteotomy. 28285 hammertoe correction.</td></tr>
<tr><td>Casting and splints</td><td>29075 short arm cast. 29125 short arm splint. 29515 short leg splint. 29540 ankle and foot strapping.</td></tr>
</tbody></table>
<p><b>Key rules.</b> A surgical arthroscopy includes a diagnostic arthroscopy of the same joint. Report one primary arthroscopic procedure code per joint when a code describes the most extensive service, and report additional distinct procedures only when the guidelines allow. Chondroplasty or debridement in the same compartment is bundled into a meniscectomy. For spinal procedures count <b>levels or interspaces</b>, note whether the approach is anterior or posterior, and report instrumentation and bone graft with the add-on codes. Casting or strapping applied as part of fracture or surgery care by the same provider is included in the global package. Many musculoskeletal procedures have 90-day global periods, and injections have 0-day periods.</p>`,
    steps: [
      "Identify the joint or bone, the side, and the approach.",
      "Determine the most extensive procedure performed and look for the code that describes it, not the pieces.",
      "Count levels, compartments, or interspaces for spine and joint codes.",
      "Check whether hardware, graft, or add-on codes are separately reportable.",
      "Check the global period and whether casting is included.",
      "Assign modifiers for side, staged, bilateral, or distinct procedures when documented.",
    ],
    lab: [
      [
        "A surgeon performs a knee arthroscopy with a partial medial meniscectomy and a shave of the cartilage in the same compartment.",
        "29881 for the meniscectomy. The chondroplasty in the same compartment is included and not reported separately.",
      ],
      [
        "A surgeon performs an arthroscopic rotator cuff repair with a subacromial decompression on the same shoulder.",
        "29827 for the repair and the add-on 29826 for the decompression, following the add-on rules.",
      ],
      [
        "A patient has a lumbar laminectomy at one level with a posterolateral fusion at the same level and posterior instrumentation.",
        "63047 for the decompression and 22612 for the fusion, plus the instrumentation add-on 22840, subject to the guidelines about reporting decompression with fusion at the same level.",
      ],
      [
        "A physician applies a short arm cast for a fracture they are treating under a fracture care code.",
        "The cast application is included in the fracture care package. Do not report 29075 separately for the first cast.",
      ],
      [
        "A total knee replacement on the left.",
        "27447 with modifier LT where required. It has a 90-day global period.",
      ],
    ],
    case: "A claim lists 29881 and 29877 for the same knee and the second line is denied.",
    model:
      "29877 (chondroplasty) is included in the meniscectomy code for the same knee, so it should not be billed with 29881. Remove 29877 and confirm the note describes only same-compartment debridement. If a different compartment was treated, check the guideline and any modifier requirements.",
    mistakes: [
      "Reporting a diagnostic arthroscopy with a surgical one.",
      "Unbundling chondroplasty from a meniscectomy.",
      "Forgetting levels and add-on codes for spinal procedures.",
      "Billing the first cast with fracture care.",
    ],
    drills: [
      "Create a table of joints with the diagnostic, limited, and extensive arthroscopy codes from your book.",
      "Code ten fictional operative notes from the 20000 series.",
      "List the add-on codes in the musculoskeletal section and the primary codes they require.",
    ],
    rubric: [
      "The most extensive procedure is selected.",
      "Bundling rules are followed.",
      "Levels and sides are counted.",
      "Global periods are noted.",
    ],
    scenario:
      "A surgeon shaves cartilage in the same compartment where a meniscectomy is performed. How is the shaving reported?",
    answers: [
      "It is included in the meniscectomy code",
      "It is reported separately with modifier 59",
      "It replaces the meniscectomy code",
    ],
    correct: 0,
    why: "Chondroplasty in the same compartment is included in the meniscectomy code for that knee.",
    taglish:
      "Sa 20000 series, tingnan ang joint, approach (open, percutaneous, arthroscopic), at extent. Kasama na ang diagnostic arthroscopy sa surgical arthroscopy. Ang chondroplasty sa parehong compartment ng meniscectomy ay kasama na. Sa spine, bilangin ang levels at gamitin ang add-on codes para sa instrumentation at graft. Ang unang cast ay kasama na sa fracture care at may 90-araw na global period ang maraming operasyon.",
    tip: "In an arthroscopy note, circle every compartment and every action. Then pick the single most extensive code before you look for add-ons.",
    mentor:
      "Say the knee arthroscopy codes aloud with their meanings until you can recite them.",
    remember: [
      "Report the most extensive arthroscopic procedure per joint and do not unbundle.",
      "Count levels for spine codes and use the add-on codes for instrumentation and graft.",
      "The first cast is included in fracture care and many procedures carry 90-day globals.",
    ],
    source:
      "AMA CPT Professional edition, Surgery: Musculoskeletal System guidelines. Verify codes and notes in the current edition.",
  },
  {
    title:
      "CPT 30000 series, part one: respiratory, hemic, and lymphatic surgery",
    desc: "Nasal and sinus endoscopy, laryngoscopy, bronchoscopy, thoracentesis, bone marrow and lymph node procedures, and related pulmonary tests.",
    time: "55 min",
    objectives: [
      "Select nasal, sinus, laryngeal, and bronchoscopy codes by the extent of the procedure.",
      "Code thoracentesis, chest tubes, and lung procedures by approach.",
      "Report bone marrow, lymph node, and pulmonary function services correctly.",
    ],
    concept: `<p>The first block of the 30000 series is the respiratory system (30000–32999), followed by cardiovascular (33016–37799), hemic and lymphatic (38100–38999), and mediastinum (39000–39599). This lesson covers respiratory and hemic and lymphatic procedures.</p>
<table class="ref-table"><thead><tr><th>Area</th><th>Examples (verify in the current book)</th></tr></thead><tbody>
<tr><td>Nose and sinuses</td><td>30901 control of nasal hemorrhage. 30520 septoplasty. 31231 diagnostic nasal endoscopy. 31237 surgical endoscopy with biopsy or polypectomy. 31256 and 31267 maxillary antrostomy. 31254 partial ethmoidectomy.</td></tr>
<tr><td>Larynx and trachea</td><td>31575 flexible diagnostic laryngoscopy. 31600 planned tracheostomy. 31500 emergency endotracheal intubation.</td></tr>
<tr><td>Bronchoscopy</td><td>31622 diagnostic. 31624 with bronchoalveolar lavage. 31625 with bronchial biopsy. 31628 with transbronchial lung biopsy, single lobe.</td></tr>
<tr><td>Pleura and lungs</td><td>32554 thoracentesis without imaging guidance. 32555 with imaging guidance. 32551 tube thoracostomy. 32480 lobectomy, open, single lobe. 32663 lobectomy by thoracoscopy.</td></tr>
<tr><td>Bone marrow</td><td>38220 bone marrow aspiration. 38221 bone marrow biopsy.</td></tr>
<tr><td>Lymph nodes and spleen</td><td>38500 open biopsy of a superficial lymph node. 38792 injection of tracer for sentinel node identification. 38100 total splenectomy.</td></tr>
<tr><td>Pulmonary medicine</td><td>94010 spirometry. 94060 spirometry before and after bronchodilator. 94640 inhalation treatment. 94760 pulse oximetry, single determination.</td></tr>
</tbody></table>
<p><b>Rules.</b> A <b>surgical</b> endoscopy includes the diagnostic endoscopy of the same area, so do not add the diagnostic code. In bronchoscopy, report the most extensive service with the appropriate ‘with’ code, and add codes for distinct additional services only when the guidelines allow. <b>Thoracentesis</b> codes separate whether imaging guidance was used, so choose the one that matches the note. For sinus procedures the codes are by unilateral procedure, so bilateral work uses modifier 50 or two lines as instructed. Sentinel node injection and the biopsy or dissection are reported separately.</p>`,
    steps: [
      "Identify the structure and the extent: diagnostic, biopsy, removal, or reconstruction.",
      "For endoscopy, find the ‘with’ code that describes the most extensive service.",
      "Check whether imaging guidance was used and choose the code that matches.",
      "Check unilateral versus bilateral rules and modifier requirements.",
      "Add pulmonary function or monitoring codes only when separately documented.",
    ],
    lab: [
      [
        "A bronchoscopy is performed with bronchial brushings and an endobronchial biopsy of the same lung.",
        "The most extensive appropriate ‘with’ code applies, such as 31625 for the biopsy. Do not add the diagnostic bronchoscopy 31622. Check the guidelines on which additional services are separately reportable.",
      ],
      [
        "A thoracentesis is performed with ultrasound guidance and an image is saved.",
        "32555 (thoracentesis with imaging guidance). Do not report the imaging separately.",
      ],
      [
        "A surgical nasal endoscopy includes removal of polyps from one side.",
        "31237 for the surgical endoscopy with polypectomy. The diagnostic endoscopy is included.",
      ],
      [
        "A hematologist performs a bone marrow aspiration and biopsy at the same session.",
        "38220 and 38221 report each service. Check payer rules for reporting both.",
      ],
      [
        "Spirometry is performed before and after a bronchodilator.",
        "94060, which includes both measurements.",
      ],
    ],
    case: "A claim reports 31622 and 31625 on the same date for one bronchoscopy.",
    model:
      "The surgical bronchoscopy includes the diagnostic bronchoscopy. Remove 31622 and keep the code that describes the most extensive service, 31625. Educate the team on the ‘surgical endoscopy includes diagnostic’ convention.",
    mistakes: [
      "Billing diagnostic and surgical endoscopy together.",
      "Ignoring imaging guidance in the thoracentesis code.",
      "Forgetting that sinus codes are unilateral.",
    ],
    drills: [
      "Make a table of bronchoscopy ‘with’ codes from your book and describe each in one line.",
      "Code eight fictional notes from the respiratory section.",
      "Explain the endoscopy convention to a partner in Taglish.",
    ],
    rubric: [
      "The most extensive endoscopic service is selected.",
      "Imaging guidance is matched to the code.",
      "Bilateral rules are followed.",
      "Pulmonary tests are separated from procedures.",
    ],
    scenario:
      "A surgical bronchoscopy with biopsy is performed. Is the diagnostic bronchoscopy also reported?",
    answers: [
      "No; it is included in the surgical bronchoscopy",
      "Yes, always",
      "Only for Medicare patients",
    ],
    correct: 0,
    why: "A surgical endoscopy includes the diagnostic endoscopy of the same area.",
    taglish:
      "Sa respiratory, ang surgical endoscopy ay kasama na ang diagnostic endoscopy, kaya huwag mag-bill ng dalawa. Piliin ang ‘with’ code na pinakamalawak na ginawa. Sa thoracentesis, may magkaibang code kung may imaging guidance. Ang sinus procedures ay unilateral kaya sundin ang bilateral rules. Sa hemic at lymphatic, may hiwalay na codes para sa bone marrow aspiration, biopsy, lymph node biopsy, at sentinel node injection.",
    tip: "When a code begins with ‘Bronchoscopy, rigid or flexible… with’ read every ‘with’ line before you choose. The right one is usually the most specific.",
    mentor:
      "Describe aloud one bronchoscopy case and justify your code choice.",
    remember: [
      "Surgical endoscopy includes the diagnostic endoscopy.",
      "Thoracentesis codes depend on whether imaging guidance was used.",
      "Sinus endoscopy codes are unilateral.",
    ],
  },
  {
    title:
      "CPT 30000 series, part two: cardiovascular surgery and interventions",
    desc: "Cardiac catheterization, coronary stents and bypass, pacemakers, vascular access, venous procedures, and vascular studies.",
    time: "70 min",
    objectives: [
      "Differentiate catheterization, angiography, angioplasty, and stent codes.",
      "Report pacemakers and defibrillators by the number of leads and the work performed.",
      "Choose vascular access device codes by age, type, and imaging guidance.",
    ],
    concept: `<p>Cardiovascular codes (33016–37799) are among the most structured in CPT. Learn the <b>building blocks</b>: the vessel treated, the approach (percutaneous, open), the device (stent, graft, lead), and the work performed.</p>
<table class="ref-table"><thead><tr><th>Area</th><th>Examples (verify in the current book)</th></tr></thead><tbody>
<tr><td>Cardiac catheterization</td><td>93451 right heart. 93452 left heart. 93458 left heart with coronary angiography. 93460 right and left heart with coronary angiography.</td></tr>
<tr><td>Coronary intervention</td><td>92920 balloon angioplasty, one vessel. 92928 stent, one vessel. 92929 add-on for each additional vessel stented. 92941 intervention in acute myocardial infarction.</td></tr>
<tr><td>Bypass and valves</td><td>33533 coronary artery bypass with a single arterial graft. 33510 with a single venous graft. 33405 aortic valve replacement. 33361 transcatheter aortic valve replacement.</td></tr>
<tr><td>Pacemakers and defibrillators</td><td>33206 atrial lead. 33207 ventricular lead. 33208 both. 33227 generator replacement, single lead. 33249 implantable defibrillator.</td></tr>
<tr><td>Vascular access</td><td>36556 non-tunneled central venous catheter, age 5 or older. 36569 peripherally inserted central catheter (PICC) age 5 or older without imaging. 36573 PICC with imaging. 36561 tunneled catheter with port.</td></tr>
<tr><td>Veins and arteries</td><td>36475 endovenous radiofrequency ablation. 37191 inferior vena cava filter. 35301 carotid endarterectomy. 36818 arteriovenous fistula.</td></tr>
<tr><td>Vascular studies</td><td>93880 duplex scan of carotid arteries. 93970 duplex scan of lower extremity veins. 93922 limited arterial physiologic study.</td></tr>
</tbody></table>
<p><b>Key rules.</b> Cardiac catheterization codes include the catheter placement, injection, and the radiological supervision and interpretation. Angioplasty and stent codes are reported <b>by vessel</b>, with add-on codes for each additional major coronary artery or branch, and they include the diagnostic angiography of the treated vessel only if it was not done earlier in the same session for the same indication. Vascular access codes depend on the <b>age</b> of the patient, whether the catheter is tunneled or has a port, whether it is a PICC, and whether imaging guidance was used. Pacemaker insertion codes depend on the <b>number of leads</b>, and generator replacement is a different code. For arterial catheterization codes, the ‘order’ of the selected vessel (first, second, or third order) changes the code.</p>`,
    steps: [
      "Identify the vessel or chamber and the work performed: study, intervention, implant, or access.",
      "For coronary work, list each vessel treated and the device used.",
      "For implants, count leads and note whether the generator or leads were replaced.",
      "For access, find the age, the type of catheter, and whether imaging guidance was used.",
      "Check what each code includes and which add-ons apply.",
    ],
    lab: [
      [
        "A left heart catheterization with coronary angiography.",
        "93458, which includes the catheterization and the angiography with supervision and interpretation.",
      ],
      [
        "A cardiologist places two stents in two different major coronary arteries during one session.",
        "92928 for the first vessel and the add-on 92929 for the second vessel, with the vessel modifiers required by the payer.",
      ],
      [
        "A dual-chamber pacemaker is implanted with an atrial and a ventricular lead.",
        "33208 (insertion of a pacemaker with atrial and ventricular leads).",
      ],
      [
        "A PICC is placed in a 45-year-old patient using ultrasound guidance with a saved image.",
        "36573 (PICC, age 5 or older, with imaging guidance).",
      ],
      [
        "A patient's pacemaker generator is replaced and the existing single lead is left in place.",
        "33227 (removal and replacement of the pulse generator, single lead system).",
      ],
    ],
    case: "A claim reports 93458 and 93452 for the same left heart catheterization.",
    model:
      "93458 already includes the left heart catheterization, so 93452 duplicates it. Keep 93458 and remove 93452. Review the charge sheet for a rule that prevents both from being chosen.",
    mistakes: [
      "Reporting a lower-level catheterization with a combination code.",
      "Forgetting the add-on code for each additional vessel.",
      "Choosing a PICC code without checking age and imaging guidance.",
      "Counting leads incorrectly.",
    ],
    drills: [
      "Draw the coronary arteries and label the vessels for stent coding.",
      "Code ten fictional cardiology procedure notes.",
      "List which codes include imaging supervision and interpretation.",
    ],
    rubric: [
      "Vessels and leads are counted correctly.",
      "Includes and add-ons are respected.",
      "Access codes match age, type, and guidance.",
      "Duplicates are avoided.",
    ],
    scenario:
      "A stent is placed in a second coronary artery in the same session. How is it reported?",
    answers: [
      "With the add-on code for each additional vessel",
      "With the primary code again",
      "It is not reported",
    ],
    correct: 0,
    why: "Additional vessels are reported with the add-on stent code, used with the primary stent code.",
    taglish:
      "Sa cardiovascular, alamin ang blood vessel, approach, device, at ginawa. Ang 93458 ay left heart cath na may angiography, kasama na ang cath at ang S&amp;I. Ang stent ay bawat vessel at may add-on para sa karagdagang vessel. Ang pacemaker ay ayon sa bilang ng leads, at ang generator replacement ay ibang code. Sa PICC, mahalaga ang edad, uri, at kung may imaging guidance.",
    tip: "Write ‘vessel, device, lead count, age, guidance’ at the top of every cardiovascular note before you open the book.",
    mentor:
      "Explain the difference between a catheterization, an angiography, and an angioplasty to a partner.",
    remember: [
      "Catheterization codes include placement, injection, and radiological supervision and interpretation.",
      "Stents are reported by vessel with add-on codes for additional vessels.",
      "Pacemaker codes depend on leads and on whether the generator or leads were replaced.",
    ],
  },
  {
    title: "CPT 40000 series: digestive surgery in depth",
    desc: "Upper and lower endoscopy hierarchies, appendectomy, hernia repair, bariatric surgery, hepatobiliary and anorectal procedures.",
    time: "70 min",
    objectives: [
      "Use the endoscopy hierarchy to choose the single code that describes the most extensive service.",
      "Code hernia repairs by site, age, reducibility, and size.",
      "Select appendectomy, colectomy, and anorectal codes by approach.",
    ],
    concept: `<p>The 40000 series covers the digestive system from the lips to the anus (40490–49999). Many codes are built on <b>endoscopies</b> and <b>hernia repairs</b>, which test careful reading.</p>
<table class="ref-table"><thead><tr><th>Area</th><th>Examples (verify in the current book)</th></tr></thead><tbody>
<tr><td>Mouth and pharynx</td><td>42820 tonsillectomy, younger than 12. 42826 tonsillectomy, age 12 or older. 42821 and 42831 with adenoidectomy.</td></tr>
<tr><td>Upper endoscopy (EGD)</td><td>43235 diagnostic. 43239 with biopsy. 43248 with guidewire dilation. 43249 with balloon dilation. 43255 with control of bleeding. 43246 with PEG tube placement.</td></tr>
<tr><td>Stomach and bariatric</td><td>43280 laparoscopic fundoplasty. 43644 laparoscopic gastric bypass. 43775 laparoscopic sleeve gastrectomy.</td></tr>
<tr><td>Colon and rectum</td><td>45330 diagnostic sigmoidoscopy. 45378 diagnostic colonoscopy. 45380 with biopsy. 45385 with snare removal. 44140 open partial colectomy with anastomosis. 44204 laparoscopic partial colectomy.</td></tr>
<tr><td>Appendix</td><td>44950 open appendectomy. 44960 for a ruptured appendix. 44970 laparoscopic appendectomy.</td></tr>
<tr><td>Hernia</td><td>49505 initial inguinal hernia repair, age 5 or older, reducible. 49650 laparoscopic initial inguinal. 49591 to 49596 initial anterior abdominal hernia by total defect size and whether it is reducible or incarcerated.</td></tr>
<tr><td>Liver, biliary, pancreas</td><td>47000 percutaneous liver biopsy. 43260 diagnostic ERCP. 43262 ERCP with sphincterotomy. 43264 ERCP with removal of stones.</td></tr>
<tr><td>Anorectal and abdomen</td><td>46221 hemorrhoid ligation. 46250 external hemorrhoidectomy. 49000 exploratory laparotomy. 49320 diagnostic laparoscopy.</td></tr>
</tbody></table>
<p><b>Endoscopy hierarchy.</b> Each endoscopic family has a <b>base code</b> (the diagnostic exam) and several ‘with’ codes. Report the <b>one</b> code that describes the most extensive service in the area examined, and add other ‘with’ codes only when they describe distinct work that the guidelines allow. The diagnostic code is never added to a surgical code for the same area. <b>Hernias</b> are chosen by location (inguinal, femoral, umbilical, ventral, incisional), age, whether it is <b>initial or recurrent</b>, whether it is <b>reducible</b> or incarcerated or strangulated, and for anterior abdominal hernias the <b>total defect size</b>. Mesh placement is generally included in current hernia codes. <b>Approach</b> (open or laparoscopic) changes the code for appendix, colon, and hernia procedures.</p>`,
    steps: [
      "Identify the organ, the approach, and the base procedure.",
      "For endoscopy, list everything done and find the single most extensive ‘with’ code.",
      "For a hernia, record the site, age, initial or recurrent, reducible or incarcerated, defect size, and approach.",
      "Check whether mesh, closure, or lysis of adhesions is included.",
      "Check the global period and any distinct-site modifiers for separate procedures.",
    ],
    lab: [
      [
        "An EGD with biopsy of the stomach and balloon dilation of the esophagus.",
        "Report the distinct procedures with the appropriate ‘with’ codes (43239 for the biopsy and 43249 for the dilation), subject to the guideline on multiple ‘with’ codes and any modifier requirements for distinct sites. Do not report 43235.",
      ],
      [
        "A laparoscopic appendectomy for acute appendicitis.",
        "44970. Dx K35.80 or the documented specificity.",
      ],
      [
        "An initial inguinal hernia repair in a 40-year-old, open, reducible.",
        "49505 for the initial repair, age 5 or older, reducible, subject to the current code descriptors.",
      ],
      [
        "A laparoscopic cholecystectomy was covered in earlier lessons; an ERCP with removal of stones.",
        "43264 includes the diagnostic ERCP.",
      ],
      [
        "A colonoscopy with snare removal of a polyp and biopsy of a separate site.",
        "45385 for the snare removal and 45380 for the biopsy of a distinct site with the appropriate modifier, per payer rules.",
      ],
    ],
    case: "A claim lists 43235 and 43239 for one EGD with a biopsy.",
    model:
      "43239 includes the diagnostic EGD. Remove 43235 and report 43239. Educate on the endoscopy hierarchy and make sure the charge capture tool does not allow both.",
    mistakes: [
      "Billing the diagnostic code with a surgical endoscopy.",
      "Ignoring reducible versus incarcerated in hernia coding.",
      "Reporting mesh separately when it is included.",
      "Missing defect size for anterior abdominal hernias.",
    ],
    drills: [
      "Create a table of EGD and colonoscopy ‘with’ codes from your book.",
      "Make a hernia decision tree: site, age, initial or recurrent, reducible or not, size.",
      "Code ten fictional digestive notes.",
    ],
    rubric: [
      "The endoscopy hierarchy is applied.",
      "Hernia details are all captured.",
      "Approach is correct.",
      "Distinct-site modifiers are supported.",
    ],
    scenario: "An EGD with biopsy is performed. Which statement is correct?",
    answers: [
      "Report the biopsy code, which includes the diagnostic EGD",
      "Report the diagnostic EGD and the biopsy code together",
      "Report only the diagnostic EGD",
    ],
    correct: 0,
    why: "A surgical ‘with’ endoscopy code includes the diagnostic endoscopy of that area.",
    taglish:
      "Ang 40000 series ay digestive system. Sa endoscopy, may base code (diagnostic) at mga ‘with’ code; piliin ang isang code na pinakamalawak na ginawa at huwag idagdag ang diagnostic. Sa hernia, tingnan ang lokasyon, edad, initial o recurrent, reducible o incarcerated, laki ng defect, at approach. Ang laparoscopic at open ay magkaibang code sa appendectomy, colectomy, at hernia.",
    tip: "For hernias, write ‘site, age, initial or recurrent, reducible, size, approach’ on a sticky note before choosing. Six answers, one code.",
    mentor:
      "Explain the endoscopy hierarchy to a partner using colonoscopy as the example.",
    remember: [
      "Use the single ‘with’ code for the most extensive endoscopic service.",
      "Hernia codes depend on site, age, initial or recurrent, reducibility, size, and approach.",
      "Open and laparoscopic approaches have different codes.",
    ],
  },
  {
    title:
      "CPT 50000 series: urinary, male and female genital, and maternity procedures",
    desc: "Cystoscopy, stone treatment, prostate and testicular procedures, gynecologic procedures, hysterectomy, and obstetric services.",
    time: "70 min",
    objectives: [
      "Select cystoscopy and ureteroscopy codes by the work performed.",
      "Code hysterectomy by route, uterine weight, and organs removed.",
      "Report gynecologic office procedures and obstetric services correctly.",
    ],
    concept: `<p>The 50000 series covers urinary (50010–53899), male genital (54000–55899), female genital (56405–58999), and maternity care and delivery (59000–59899).</p>
<table class="ref-table"><thead><tr><th>Area</th><th>Examples (verify in the current book)</th></tr></thead><tbody>
<tr><td>Urinary</td><td>52000 diagnostic cystoscopy. 52204 with biopsy. 52234 resection of a small bladder tumor. 52332 ureteral stent insertion. 52352 ureteroscopy with stone removal. 50590 shock wave lithotripsy. 51701 and 51702 bladder catheterization. 51798 post-void residual by ultrasound.</td></tr>
<tr><td>Prostate and male genital</td><td>52601 transurethral resection of the prostate. 55700 prostate biopsy. 55250 vasectomy. 54150 newborn circumcision with a clamp or device. 54640 orchiopexy. 55040 hydrocele excision.</td></tr>
<tr><td>Cervix and uterus procedures</td><td>57452 colposcopy. 57454 colposcopy with biopsy. 57460 LEEP. 58100 endometrial biopsy. 58120 dilation and curettage. 58555 diagnostic hysteroscopy. 58558 hysteroscopy with biopsy. 58300 IUD insertion and 58301 removal.</td></tr>
<tr><td>Hysterectomy</td><td>58150 total abdominal, with or without removal of tubes and ovaries. 58260 vaginal, uterus 250 grams or less. 58570 laparoscopic total, uterus 250 grams or less. 58940 oophorectomy.</td></tr>
<tr><td>Tubal and other</td><td>58670 laparoscopic tubal fulguration. 58671 tubal occlusion with a device.</td></tr>
<tr><td>Maternity</td><td>59000 amniocentesis. 59025 fetal non-stress test. 59150 and 59151 ectopic pregnancy. 59400, 59510, and 59610 global obstetric packages. 59412 external cephalic version. 59160 postpartum curettage.</td></tr>
</tbody></table>
<p><b>Key rules.</b> Hysterectomy codes depend on the <b>route</b> (abdominal, vaginal, laparoscopic), the <b>weight</b> of the uterus (250 grams or less versus more), and whether tubes, ovaries, or the cervix are removed. Cystoscopy codes build on the <b>base diagnostic code</b>, and the surgical code includes the diagnostic cystoscopy. Colposcopy codes depend on whether a biopsy or curettage was done. A procedure performed during a hysterectomy such as lysis of adhesions is generally included. For obstetrics, use the global package unless the care was split, and report maternity ultrasounds and tests separately when payers allow. Many gynecologic office procedures have 0-day or 10-day global periods.</p>`,
    steps: [
      "Identify the organ, the route, and the base procedure.",
      "For cystoscopy and hysteroscopy, find the ‘with’ code that describes the work performed.",
      "For hysterectomy, note the route, the uterine weight, and the other organs removed.",
      "For obstetrics, decide whether the global package or itemized codes apply.",
      "Check for included procedures and distinct-site modifiers.",
    ],
    lab: [
      [
        "A cystoscopy with biopsy of the bladder wall.",
        "52204 (cystourethroscopy with biopsy). The diagnostic cystoscopy is included.",
      ],
      [
        "A total abdominal hysterectomy with bilateral salpingo-oophorectomy.",
        "58150, which is reported ‘with or without removal of tubes and ovaries.’",
      ],
      [
        "A laparoscopic total hysterectomy with a uterus weighing 220 grams.",
        "58570 (laparoscopic total hysterectomy, uterus 250 grams or less).",
      ],
      [
        "A colposcopy of the cervix with a biopsy of a lesion.",
        "57454 (colposcopy with biopsy and curettage as described). A colposcopy without biopsy would be 57452.",
      ],
      [
        "A physician provides all prenatal visits, a vaginal delivery, and the postpartum visit.",
        "59400, the global package.",
      ],
    ],
    case: "A claim lists 58150 and 58940 for a hysterectomy with oophorectomy.",
    model:
      "58150 is described as with or without removal of tubes and ovaries, so the oophorectomy is included. Remove 58940. Check the note for the route and organs removed, and verify the descriptor in the current book.",
    mistakes: [
      "Reporting an oophorectomy with a hysterectomy code that already includes it.",
      "Ignoring uterine weight.",
      "Billing a diagnostic cystoscopy with a surgical one.",
      "Itemizing obstetric care that belongs in the package.",
    ],
    drills: [
      "Create a hysterectomy table by route and uterine weight.",
      "Code ten fictional urologic and gynecologic notes.",
      "List the obstetric services included in the global package.",
    ],
    rubric: [
      "Route, weight, and organs are captured.",
      "Included procedures are not unbundled.",
      "Maternity packaging is correct.",
      "Cystoscopy hierarchy is applied.",
    ],
    scenario:
      "A hysterectomy code is described as ‘with or without removal of tubes and ovaries.’ A surgeon also removes both ovaries. What is reported?",
    answers: [
      "The hysterectomy code alone",
      "The hysterectomy and an oophorectomy code",
      "Two hysterectomy codes",
    ],
    correct: 0,
    why: "The descriptor already includes removal of tubes and ovaries, so the oophorectomy is not reported separately.",
    taglish:
      "Sa 50000 series, kasama ang urinary, male genital, female genital, at maternity. Sa hysterectomy, tingnan ang route (abdominal, vaginal, laparoscopic), bigat ng matris (250 gramo o mas mababa), at kung inalis ang tubes o ovaries. Ang surgical cystoscopy ay kasama ang diagnostic. Sa obstetrics, gamitin ang global package maliban kung hinati ang pangangalaga.",
    tip: "Look for the words ‘with or without’ in descriptors. They tell you what is already included.",
    mentor:
      "Explain the global obstetric package to a partner without using the code numbers.",
    remember: [
      "Hysterectomy codes depend on route, uterine weight, and organs removed.",
      "Surgical cystoscopy and hysteroscopy include the diagnostic scope.",
      "Use the global obstetric package unless the care was split.",
    ],
  },
  {
    title: "CPT 60000 series: endocrine, nervous system, eye, and ear surgery",
    desc: "Thyroid and parathyroid surgery, spinal injections and nerve procedures, cataract and retinal procedures, and ear procedures.",
    time: "70 min",
    objectives: [
      "Code spinal and nerve injections by level, side, and imaging guidance.",
      "Select cataract and other eye procedure codes by the work performed and the side.",
      "Report ear procedures and tests with the right modifier.",
    ],
    concept: `<p>The 60000 series covers endocrine (60000–60699), nervous system (61000–64999), eye and ocular adnexa (65091–68899), and auditory (69000–69979). It also includes the operating microscope add-on (69990).</p>
<table class="ref-table"><thead><tr><th>Area</th><th>Examples (verify in the current book)</th></tr></thead><tbody>
<tr><td>Endocrine</td><td>60220 total thyroid lobectomy. 60240 total thyroidectomy. 60500 parathyroidectomy.</td></tr>
<tr><td>Spinal and nerve procedures</td><td>62270 lumbar puncture. 62322 and 62323 interlaminar epidural injection, lumbar or sacral, without and with imaging guidance. 64483 transforaminal epidural injection, one level, with imaging, and 64484 add-on for each additional level. 64490 and 64493 facet joint injection, one level. 64450 peripheral nerve block. 64721 carpal tunnel release. 63650 spinal cord stimulator electrode placement.</td></tr>
<tr><td>Eye</td><td>66984 cataract extraction with intraocular lens. 66982 complex cataract extraction. 66821 laser capsulotomy. 66170 trabeculectomy. 67028 intravitreal injection. 67228 retinal laser treatment. 67800 chalazion excision. 67311 strabismus surgery.</td></tr>
<tr><td>Ear</td><td>69433 tympanostomy with local anesthesia. 69436 with general anesthesia. 69210 cerumen removal. 69930 cochlear implant.</td></tr>
<tr><td>Related Medicine codes</td><td>92002 to 92014 ophthalmologic exams. 92134 OCT of the retina. 92552 and 92557 audiometry. 92567 tympanometry. 95816 EEG. 95907 to 95913 nerve conduction studies.</td></tr>
</tbody></table>
<p><b>Key rules.</b> <b>Spinal injections</b> are chosen by <b>region</b> (cervical, thoracic, lumbar, sacral), <b>technique</b> (interlaminar, transforaminal, facet), <b>level</b>, and <b>imaging guidance</b>, which may be included or reported separately depending on the code. Each added level uses the add-on. <b>Cataract surgery</b> is reported once per eye with the code for the type of extraction and lens, with the eyelid and eye modifiers (E1 upper left eyelid, E2 lower left, E3 upper right, E4 lower right, and RT or LT for the eye). The <b>operating microscope</b> add-on is included in many codes and should not be added when the book says so. Ear tube placement depends on the type of anesthesia. Many of these have 0 or 10-day global periods, and cataract surgery has a 90-day global period.</p>`,
    steps: [
      "Identify the region, the technique, the level, and the side.",
      "Check whether imaging guidance is included in the code or reported separately.",
      "For eye procedures, note the eye or eyelid and the type of work performed.",
      "Check the operating microscope add-on rules.",
      "Add modifiers for side, bilateral, or staged procedures as documented.",
    ],
    lab: [
      [
        "A lumbar transforaminal epidural injection at two levels on the right with fluoroscopic guidance.",
        "64483 for the first level and the add-on 64484 for the second, with the right-side modifier where required. Imaging guidance is included in these codes.",
      ],
      [
        "A cataract extraction with an intraocular lens in the left eye, uncomplicated.",
        "66984-LT.",
      ],
      [
        "A total thyroidectomy for a multinodular goiter.",
        "60240. Dx per the pathology-supported provider documentation.",
      ],
      [
        "A carpal tunnel release in the right wrist.",
        "64721 with modifier RT.",
      ],
      [
        "Ear tubes are placed in a child under general anesthesia.",
        "69436. With local anesthesia it would be 69433.",
      ],
    ],
    case: "A claim lists 66984 with 69990 for a standard cataract procedure.",
    model:
      "The operating microscope is included in the cataract procedure, so 69990 should not be added. Check the book's note for 66984, remove 69990, and review similar claims.",
    mistakes: [
      "Adding the operating microscope code when it is included.",
      "Forgetting the add-on for additional spinal levels.",
      "Ignoring eye side modifiers.",
      "Reporting imaging guidance separately when it is included.",
    ],
    drills: [
      "Create a table of spinal injections: region, technique, level, and guidance.",
      "Code eight fictional notes from nervous, eye, and ear sections.",
      "List the eye and eyelid modifiers and their meanings.",
    ],
    rubric: [
      "Region, level, and side are captured.",
      "Guidance and microscope rules are respected.",
      "Add-ons are used correctly.",
      "Modifiers match documentation.",
    ],
    scenario:
      "A transforaminal epidural injection is performed at a second level. What is added?",
    answers: [
      "The add-on code for each additional level",
      "The primary code again",
      "Nothing is added",
    ],
    correct: 0,
    why: "Additional levels are reported with the add-on code for each level.",
    taglish:
      "Ang 60000 series ay endocrine, nervous system, eye, at ear. Sa spinal injection, tingnan ang region, technique, level, at imaging guidance; ang bawat dagdag na level ay may add-on. Ang cataract surgery ay isang beses bawat mata at kasama na ang operating microscope. May mga modifier para sa eyelid (E1 hanggang E4) at RT o LT para sa mata. Sa ear tubes, magkaiba ang code kung local o general anesthesia.",
    tip: "Before you choose a spinal injection code, list ‘region, technique, level, guidance, side’ on paper. Five facts, one code.",
    mentor:
      "Explain the difference between interlaminar, transforaminal, and facet injections to a partner.",
    remember: [
      "Spinal injection codes depend on region, technique, level, and imaging guidance.",
      "The operating microscope is included in many codes. Check the note.",
      "Eye codes use RT, LT, and eyelid modifiers E1 to E4.",
    ],
  },
  {
    title:
      "Radiology in depth: nuclear medicine, interventional guidance, and radiation oncology",
    desc: "Nuclear studies, imaging guidance, fluoroscopy, and the components of radiation therapy, with global, professional, and technical splits.",
    time: "60 min",
    objectives: [
      "Code common nuclear medicine and PET studies.",
      "Distinguish guidance codes that are included from those reported separately.",
      "Describe the components of radiation oncology services.",
    ],
    concept: `<p>The radiology section (70010–79999) includes diagnostic radiology, diagnostic ultrasound, radiologic guidance, breast mammography, bone and joint studies, radiation oncology, and nuclear medicine. Earlier lessons covered plain imaging, CT, MRI, and ultrasound. This lesson adds the rest.</p>
<table class="ref-table"><thead><tr><th>Area</th><th>Examples (verify in the current book)</th></tr></thead><tbody>
<tr><td>Fluoroscopy and contrast studies</td><td>74230 swallowing function study. 74240 upper GI series. 74270 barium enema.</td></tr>
<tr><td>Imaging guidance</td><td>76942 ultrasound guidance for needle placement. 77012 CT guidance. 77021 MRI guidance. 77001 fluoroscopic guidance add-on.</td></tr>
<tr><td>Nuclear medicine</td><td>78300 limited bone imaging. 78306 whole body bone imaging. 78452 myocardial perfusion SPECT, multiple studies. 78815 PET with CT.</td></tr>
<tr><td>Radiation oncology</td><td>77301 IMRT planning. 77385 and 77386 IMRT delivery, simple and complex. 77427 weekly radiation treatment management. 77767 brachytherapy.</td></tr>
</tbody></table>
<p><b>Key rules.</b> <b>Guidance codes</b> are reported with the procedure they support only if the procedure code does not already include guidance and the guidance is documented with a permanent record. Many modern procedure codes include imaging guidance, so reporting it again is unbundling. <b>Radiological supervision and interpretation (S&amp;I)</b> codes are separate from the interventional procedure when the procedure code does not include them. <b>Nuclear medicine</b> codes cover the radiopharmaceutical imaging, and the radiopharmaceutical itself is reported with a HCPCS A or Q code. <b>Radiation oncology</b> is a sequence of services: consultation, treatment planning and simulation, dosimetry, <b>treatment delivery</b>, weekly <b>treatment management</b>, and sometimes brachytherapy. Each component has its own code, and delivery and management codes are reported by the treatment course. The global, professional (26), and technical (TC) splits apply to most of these services.</p>`,
    steps: [
      "Identify the modality and the clinical purpose.",
      "Check whether the procedure code includes imaging guidance or S&amp;I.",
      "Report the radiopharmaceutical separately for nuclear studies.",
      "For radiation oncology, list each component performed and its date.",
      "Choose global, 26, or TC based on who did what.",
    ],
    lab: [
      [
        "A radiologist performs a swallowing function study with fluoroscopy and a speech therapist is present.",
        "74230 for the radiologic study. The speech therapist's service is a separate code under the therapy section.",
      ],
      [
        "A CT-guided biopsy of a lung nodule where the biopsy code includes imaging guidance.",
        "Report the biopsy code only. Do not add 77012 because guidance is included.",
      ],
      [
        "A myocardial perfusion SPECT study with multiple studies at rest and stress.",
        "78452 for the imaging, plus the radiopharmaceutical HCPCS codes and the stress test code if performed and billed.",
      ],
      [
        "A patient has IMRT with a plan, simulation, delivery, and weekly management.",
        "Report the components: planning (77301), delivery (77385 or 77386 per session), and weekly management (77427), with the other planning and dosimetry codes as documented.",
      ],
    ],
    case: "A biopsy claim lists the biopsy code and an ultrasound guidance code, but the biopsy descriptor includes imaging guidance.",
    model:
      "Remove the guidance code. Because the biopsy code already includes imaging guidance, reporting it separately is unbundling. Educate the team to read the biopsy descriptor and parenthetical notes before adding a guidance code.",
    mistakes: [
      "Adding guidance to codes that include it.",
      "Forgetting the radiopharmaceutical code.",
      "Treating radiation oncology as a single service.",
    ],
    drills: [
      "List five procedure codes that include imaging guidance in your book.",
      "Make a timeline of a radiation oncology course with the code for each component.",
      "Describe global, 26, and TC for a PET/CT.",
    ],
    rubric: [
      "Guidance bundling is respected.",
      "Radiopharmaceuticals are reported.",
      "Radiation components are listed in order.",
      "Component modifiers are chosen correctly.",
    ],
    scenario:
      "A biopsy code already includes imaging guidance. What should you do with a separate guidance code?",
    answers: [
      "Do not report it",
      "Report it with modifier 59",
      "Report it twice",
    ],
    correct: 0,
    why: "Reporting guidance that is included in the procedure code is unbundling.",
    taglish:
      "Sa radiology, may nuclear medicine, imaging guidance, fluoroscopy, at radiation oncology. Ang guidance codes ay hiwalay lang kung hindi kasama sa procedure code at may permanent record. Ang nuclear medicine ay may hiwalay na HCPCS code para sa radiopharmaceutical. Ang radiation oncology ay may serye ng serbisyo: consultation, planning, delivery, at weekly management; bawat isa ay may sariling code.",
    tip: "Read the procedure's parenthetical notes for the phrase ‘includes imaging guidance.’ It saves hundreds of unbundling errors.",
    mentor:
      "Describe the steps of a radiation course in order with one sentence per step.",
    remember: [
      "Do not report imaging guidance that the procedure code includes.",
      "Radiopharmaceuticals are reported separately with HCPCS codes.",
      "Radiation oncology is a sequence of separate services.",
    ],
  },
  {
    title:
      "Pathology in depth: surgical pathology, cytology, and special studies",
    desc: "Specimen levels, gross and microscopic exams, stains, immunohistochemistry, frozen sections, and reporting rules per specimen.",
    time: "55 min",
    objectives: [
      "Choose a surgical pathology level by the type of specimen.",
      "Report special stains, immunohistochemistry, and frozen sections correctly.",
      "Apply the per-specimen rule and the professional and technical components.",
    ],
    concept: `<p>Surgical pathology codes (88300–88309) describe the examination of a tissue specimen by a pathologist. The <b>level</b> depends on the type of specimen and the extent of the exam: Level I is gross only (88300), Level II (88302), Level III (88304), Level IV (88305), Level V (88307), and Level VI (88309). Common examples: skin biopsies, gallbladders, and appendices are usually Level IV (88305). Complex resections and organs with cancer are Level V or VI. The CPT book lists specimens by level in its guidelines, so use that list.</p>
<p>Each <b>separately identified specimen</b> is reported with its own code. A specimen container labeled ‘A’ and another labeled ‘B’ are two specimens. Tissue from different sites in one container is generally one specimen.</p>
<p><b>Add-on and special studies.</b> Special stains for microorganisms (88312) and other stains (88313) are reported per slide or per specimen as the code states. Immunohistochemistry is reported per antibody (88342 for the first antibody, 88341 for each additional on the same specimen). A frozen section during surgery is 88331 for the first tissue block with 88332 for each additional. Cytology, such as liquid-based Pap tests (88142), has its own series.</p>
<p>Pathology services split into the <b>professional component (26)</b> and the <b>technical component (TC)</b>, and a laboratory that provides both bills globally. <b>Medicare and other payers have rules on when a hospital or independent laboratory bills the technical component</b> and when it is bundled into the facility payment, so check the payer. Clinical pathology consultations have their own codes. Always use the pathologist's signed report to determine what was examined and what was reported.</p>`,
    steps: [
      "List each separately identified specimen from the report.",
      "Find the specimen type in the CPT level list and assign the level.",
      "Add stains, immunohistochemistry, and frozen sections that were documented and separately ordered.",
      "Decide global, 26, or TC based on who did the work.",
      "Check payer rules for technical component billing.",
    ],
    lab: [
      [
        "A report lists specimen A, a skin punch biopsy, and specimen B, a gallbladder.",
        "Two specimens, each reported with the code for its level. A skin biopsy and a gallbladder are each commonly Level IV (88305), so two units of 88305, verified against the book's list.",
      ],
      [
        "A pathologist performs immunohistochemistry using three antibodies on one specimen.",
        "88342 for the first antibody and 88341 for each additional antibody, so 88342 once and 88341 twice.",
      ],
      [
        "A frozen section on one tissue block during surgery.",
        "88331. Add 88332 for each additional block.",
      ],
      [
        "A pathologist reads slides prepared at a hospital laboratory.",
        "Report the professional component (26) if the hospital bills the technical component. Check payer rules.",
      ],
    ],
    case: "A claim lists three units of 88305 for one container labeled with three skin biopsies from different locations in the same jar.",
    model:
      "The CPT guidelines count separately identified specimens. If the pathologist's report lists one container as one specimen, report one unit. If the report lists three separately identified specimens, report three. Use the report, not the number of biopsies, and query if the labeling is unclear.",
    mistakes: [
      "Counting biopsies instead of separately identified specimens.",
      "Using the wrong level for a specimen.",
      "Billing stains that were not documented.",
    ],
    drills: [
      "Find the level list in your CPT book and copy ten specimens with their levels.",
      "Code eight fictional pathology reports with stains.",
      "Explain the 26 and TC split for a pathologist in a hospital.",
    ],
    rubric: [
      "Specimens are counted from the report.",
      "Levels match the CPT list.",
      "Special studies are documented.",
      "Component billing follows payer rules.",
    ],
    scenario:
      "A report lists two separately identified specimens. How many units of the surgical pathology code apply?",
    answers: ["Two, one per specimen at its level", "One", "Three"],
    correct: 0,
    why: "Each separately identified specimen is reported with its own surgical pathology code.",
    taglish:
      "Ang surgical pathology codes ay 88300 hanggang 88309 ayon sa level ng specimen: gross lang, Level II, III, IV (karaniwan ang skin biopsy at gallbladder), V, at VI. Bawat hiwalay na specimen ay may sariling code. Ang special stains, immunohistochemistry (bawat antibody), at frozen section ay may hiwalay na codes. May 26 at TC kung hati ang serbisyo.",
    tip: "Keep the CPT specimen-level list tabbed. You will use it more than any other page in the pathology section.",
    mentor:
      "Explain the difference between gross-only and gross plus microscopic examination to a partner.",
    remember: [
      "Each separately identified specimen is its own unit at the correct level.",
      "Immunohistochemistry is reported per antibody.",
      "Component splits follow who did the work and payer rules.",
    ],
  },
  {
    title:
      "The Medicine section in depth: therapy, injections, allergy, sleep, and more",
    desc: "Physical medicine and chiropractic codes, therapy modifiers and time rules, infusions and injections hierarchy, allergy, ophthalmology exams, and sleep studies.",
    time: "70 min",
    objectives: [
      "Code physical therapy evaluations and timed services with the right modifiers and units.",
      "Apply the injection and infusion hierarchy in an office setting.",
      "Report chiropractic, allergy, ophthalmology exam, and sleep study services.",
    ],
    concept: `<p>The Medicine section (90281–99607) is large and has six exam questions. Besides immunizations, psychiatry, and cardiology tests covered earlier, it includes the services below.</p>
<table class="ref-table"><thead><tr><th>Area</th><th>Examples (verify in the current book)</th></tr></thead><tbody>
<tr><td>Physical medicine</td><td>97161 to 97163 PT evaluation (low, moderate, high complexity). 97164 re-evaluation. 97110 therapeutic exercise. 97112 neuromuscular re-education. 97116 gait training. 97140 manual therapy. 97530 therapeutic activities. 97035 ultrasound.</td></tr>
<tr><td>Chiropractic</td><td>98940 manipulation of 1 or 2 spinal regions. 98941 of 3 or 4 regions. 98942 of 5 regions.</td></tr>
<tr><td>Injections and infusions</td><td>96372 subcutaneous or intramuscular injection. 96374 IV push. 96365 IV infusion up to one hour. 96360 hydration. 96413 chemotherapy infusion.</td></tr>
<tr><td>Allergy</td><td>95004 percutaneous allergy tests. 95024 intracutaneous tests. 95115 and 95117 immunotherapy injections. 95165 antigen preparation.</td></tr>
<tr><td>Ophthalmology exams</td><td>92002 and 92004 new patient. 92012 and 92014 established patient. 92134 retinal OCT.</td></tr>
<tr><td>Neurology and sleep</td><td>95816 EEG. 95810 attended polysomnography. 95800 unattended sleep study. 95907 to 95913 nerve conduction studies.</td></tr>
<tr><td>Other</td><td>90935 hemodialysis with one evaluation. 90960 monthly ESRD services. 99406 tobacco counseling, 3 to 10 minutes. 97810 acupuncture, first 15 minutes.</td></tr>
</tbody></table>
<p><b>Therapy rules.</b> Therapy services use the modifiers <b>GP</b> (physical therapy plan), <b>GO</b> (occupational therapy), and <b>GN</b> (speech-language pathology), and Medicare tracks annual thresholds with the <b>KX</b> modifier when services exceed the threshold and are medically necessary. Timed codes are reported in 15-minute units. Medicare applies the <b>8-minute rule</b> to total timed minutes (8 to 22 minutes is 1 unit, 23 to 37 is 2, 38 to 52 is 3, 53 to 67 is 4), and CPT uses a midpoint rule per code. Untimed codes such as evaluations are reported once.</p>
<p><b>Injection and infusion hierarchy (physician office).</b> The <b>initial service</b> is the one that is the primary reason for the encounter, chosen by hierarchy: chemotherapy or complex drug administration first, then therapeutic or diagnostic infusion, then push, then injection, then hydration. Additional services are reported as sequential or concurrent codes, and the initial code is reported once per encounter per vascular access site. The drug is reported separately with a HCPCS J code.</p>`,
    steps: [
      "Identify the type of service: evaluation, timed therapy, manipulation, injection, infusion, test, or counseling.",
      "For timed services, total the minutes and apply the payer's unit rule.",
      "Add the therapy discipline modifier and KX if the payer requires.",
      "For infusions and injections, identify the initial service by hierarchy and the sequential or concurrent services.",
      "Report the drug and supplies separately and link to the diagnosis.",
    ],
    lab: [
      [
        "A physical therapist provides a moderate-complexity evaluation and 23 minutes of therapeutic exercise.",
        "97162 for the evaluation and 97110 with 2 units under the Medicare 8-minute rule for 23 minutes (23 to 37 minutes equals 2 units), with GP on each line.",
      ],
      [
        "A chiropractor adjusts the cervical, thoracic, and lumbar regions.",
        "98941 (three or four spinal regions). The three regions fit that code.",
      ],
      [
        "A patient receives an IV push of an antiemetic and a subcutaneous injection of a different drug in the physician's office.",
        "96374 as the initial service (IV push) and 96372 for the injection, with the drugs reported with J codes. Check the hierarchy and access-site rules in the guidelines.",
      ],
      [
        "A patient has an attended overnight sleep study with four or more parameters.",
        "95810 (polysomnography, attended). An unattended home study is 95800 or another code per the book.",
      ],
      [
        "A physician spends 5 minutes counseling a smoker about quitting.",
        "99406 (counseling for tobacco cessation, 3 to 10 minutes), with a tobacco diagnosis.",
      ],
    ],
    case: "A therapy clinic bills 97110 for 30 minutes as 3 units under Medicare rules.",
    model:
      "Under the Medicare 8-minute rule, 30 minutes falls in the 23 to 37 minute range, which is 2 units, not 3. Correct the claim and review any other timed service totals on the same date, because the rule applies to total timed minutes across all services.",
    mistakes: [
      "Reporting the wrong number of units for timed minutes.",
      "Missing therapy discipline modifiers.",
      "Choosing the wrong initial infusion or injection service.",
    ],
    drills: [
      "Practice the 8-minute rule with ten different minute totals.",
      "Make a hierarchy card for injections and infusions.",
      "Code ten fictional Medicine section notes.",
    ],
    rubric: [
      "Units follow the time rule.",
      "Modifiers match the therapy discipline.",
      "Hierarchy is applied.",
      "Drugs are reported separately.",
    ],
    scenario:
      "A Medicare therapy visit includes 30 total timed minutes of therapeutic exercise. How many units are billed under the 8-minute rule?",
    answers: ["2", "3", "1"],
    correct: 0,
    why: "23 to 37 total timed minutes equals two units under the Medicare 8-minute rule.",
    taglish:
      "Sa Medicine section, may physical therapy (97161 hanggang 97530), chiropractic (98940 hanggang 98942), injections at infusions, allergy, eye exams, at sleep studies. Sa therapy, gumamit ng GP, GO, o GN at bilangin ang timed minutes: 8–22 minutes ay isang unit, 23–37 ay dalawa. Sa injection at infusion, may hierarchy para sa initial service; ang gamot ay hiwalay na J code.",
    tip: "Add the minutes of all timed codes together before you assign units. The Medicare rule works on the total, not on each code alone.",
    mentor:
      "Calculate units for five therapy visits with mixed services and compare with a partner.",
    remember: [
      "Timed therapy units follow the payer's rule on total timed minutes.",
      "Use GP, GO, or GN to show the therapy discipline.",
      "Apply the injection and infusion hierarchy and report the drug separately.",
    ],
  },
  {
    title:
      "HCPCS Level II in depth: supplies, DME, ambulance, drugs, and modifiers",
    desc: "The letter sections, durable medical equipment rules, ambulance coding, drug codes, and the Level II modifiers that appear on Medicare claims.",
    time: "65 min",
    objectives: [
      "Navigate the HCPCS Level II book and its Table of Drugs.",
      "Code common DME, supply, and ambulance services with the right modifiers.",
      "Apply ABN-related and other Medicare modifiers correctly.",
    ],
    concept: `<p>HCPCS Level II covers items and services outside CPT. The exam gives it three questions, but real claims use it constantly. The book is organized by letter sections and has an <b>Index</b> and a <b>Table of Drugs</b>, which lists drugs by name with their J code, amount, and route.</p>
<table class="ref-table"><thead><tr><th>Section</th><th>Typical content and examples (verify in the current book)</th></tr></thead><tbody>
<tr><td>A codes</td><td>Transportation and supplies. A0425 ground mileage. A0427 ALS emergency base. A0428 BLS non-emergency. A0429 BLS emergency. A4550 surgical tray.</td></tr>
<tr><td>E codes</td><td>Durable medical equipment. E0601 CPAP. E1390 oxygen concentrator. E0143 walker.</td></tr>
<tr><td>G codes</td><td>Temporary procedures and professional services. G0105, G0121, G0438, G0439, G2012.</td></tr>
<tr><td>J codes</td><td>Drugs other than oral. J0171 epinephrine. J1100 dexamethasone. J1885 ketorolac. J0696 ceftriaxone. J7050 normal saline. J3490 unclassified drugs.</td></tr>
<tr><td>K codes</td><td>Temporary DME codes used by DME contractors. K0001 standard wheelchair.</td></tr>
<tr><td>L codes</td><td>Orthotics and prosthetics. L1832 knee orthosis.</td></tr>
<tr><td>Q codes</td><td>Temporary codes assigned by CMS.</td></tr>
<tr><td>V codes</td><td>Vision and hearing services and supplies.</td></tr>
</tbody></table>
<p><b>Ambulance.</b> A transport claim has a base code for the level of service (BLS or ALS, emergency or non-emergency), a mileage code per loaded mile, and a two-letter <b>origin and destination modifier</b> (for example, R for residence, H for hospital, N for skilled nursing facility, with the origin first: RH is residence to hospital). Medical necessity and the patient's condition must be documented.</p>
<p><b>DME rules.</b> Medicare generally requires a written order, documented medical necessity, and sometimes a face-to-face encounter. Many items are rented. Modifiers include <b>RR</b> (rental), <b>NU</b> (new purchase), <b>UE</b> (used purchase), <b>KX</b> (requirements in the policy are met), and <b>LT</b> or <b>RT</b>. Capped rental items are rented monthly for a period (13 months) after which the patient owns the item.</p>
<p><b>Medicare notice modifiers.</b> <b>GA</b>: an ABN is on file for an expected denial. <b>GY</b>: the item or service is statutorily excluded or not a benefit. <b>GZ</b>: the item or service is expected to be denied as not reasonable and necessary and no ABN was issued. <b>JW</b> and <b>JZ</b> report drug waste or none. <b>AS</b> identifies a non-physician assistant at surgery.</p>`,
    steps: [
      "Find the item or service in the Index or Table of Drugs.",
      "Verify the code, the unit descriptor, and any notes.",
      "For drugs, convert the dose to billing units.",
      "For DME and ambulance, check the order, medical necessity, and required modifiers.",
      "Add the notice modifier (GA, GY, or GZ) when the situation requires it.",
    ],
    lab: [
      [
        "A patient is transported by ambulance from home to the hospital for a medical emergency, BLS level, 8 loaded miles.",
        "A0429 (BLS emergency base), A0425 for 8 units of mileage, with the origin-destination modifier RH on the lines.",
      ],
      [
        "A patient rents a CPAP device for the first month.",
        "E0601 with RR (rental), and the KX modifier if the policy requirements are met and documented.",
      ],
      [
        "A drug is described as 0.1 mg per unit and 0.3 mg was given.",
        "3 units.",
      ],
      [
        "A Medicare patient is told a service is not covered by statute and signs no ABN.",
        "Append GY. An ABN is not required for a statutorily excluded service.",
      ],
      [
        "A Medicare patient signed an ABN for a service likely to be denied as not reasonable and necessary.",
        "Append GA to the line.",
      ],
    ],
    case: "A claim for a wheelchair is denied because there is no written order on file.",
    model:
      "Medicare DME claims generally require a written order and documented medical necessity before the item is delivered. Obtain the order and supporting records, and review the process so that orders are collected at the start. If the documentation was not obtained in time, the denial may be valid.",
    mistakes: [
      "Using a modifier for rental when the item was purchased.",
      "Forgetting origin and destination modifiers on transport.",
      "Using GA without a valid ABN.",
      "Not converting drug doses to billing units.",
    ],
    drills: [
      "Look up five drugs in the Table of Drugs and record the J code, unit, and route.",
      "Code ten fictional DME and ambulance claims.",
      "Make a one-page table of GA, GY, GZ, JW, JZ, KX, AS, RR, NU, and UE.",
    ],
    rubric: [
      "Codes come from the Index or Table of Drugs.",
      "Units are calculated from descriptors.",
      "Modifiers match the situation.",
      "Orders and documentation are checked.",
    ],
    scenario:
      "A Medicare patient has a signed ABN for a service expected to be denied as not reasonable and necessary. Which modifier applies?",
    answers: ["GA", "GY", "GZ"],
    correct: 0,
    why: "GA indicates an ABN is on file for an expected denial. GY is for statutorily excluded services and GZ is for no ABN.",
    taglish:
      "Ang HCPCS Level II ay para sa mga bagay at serbisyong wala sa CPT. Hanapin sa Index o sa Table of Drugs. Sa ambulance, may base code, mileage code, at dalawang-letrang modifier para sa pinagmulan at destinasyon. Sa DME, kailangan ng written order at dokumentong medical necessity; gamitin ang RR, NU, o UE. Sa Medicare, GA ay may ABN, GY ay statutorily excluded, at GZ ay inaasahang denial na walang ABN.",
    tip: "Keep the GA, GY, and GZ definitions on one sticky note. They are the three most mixed-up modifiers on Medicare claims.",
    mentor:
      "Explain the three notice modifiers to a partner using a simple example for each.",
    remember: [
      "Use the Index and Table of Drugs to find Level II codes and convert doses to units.",
      "Ambulance claims need a base code, a mileage code, and an origin-destination modifier.",
      "GA means ABN on file, GY means excluded by statute, and GZ means no ABN for an expected denial.",
    ],
    source:
      "CMS HCPCS Level II quarterly updates and Medicare DMEPOS and ambulance guidance. Verify current rules.",
  },
]);
