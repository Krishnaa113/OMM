// Original page content for OMM Overseas. Visa rules change often – review figures before going live.
const u = (id, w = 1200) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=70`

export const banners = {
  study: u('photo-1523240795612-9a054b0db644', 1920),
  test: u('photo-1522202176988-66273c2fd55f', 1920),
  work: u('photo-1521791136064-7986c2920216', 1920),
  family: u('photo-1529156069898-49953e39b3ac', 1920),
  office: u('photo-1556761175-5973dc0f32e7', 1920),
  travel: u('photo-1436491865332-7a61a109cc05', 1920),
}

/* ---------------- Study visa country pages ---------------- */
export const countries = {
  'study-in-canada': {
    name: 'Canada', flag: 'ca', img: u('photo-1503614472-8c93d56e92ce'),
    intro: 'Canada is one of the most welcoming countries for international students. It offers globally ranked universities and practical college programs, a safe multicultural society, and clear pathways from study to work and permanent residence.',
    why: ['World-class universities and career-focused colleges', 'Work part-time during studies and full-time in scheduled breaks', 'Post-Graduation Work Permit (PGWP) of up to 3 years', 'Pathway to permanent residence through Express Entry and PNPs', 'Safe, friendly and multicultural cities', 'Affordable compared to the USA and UK'],
    universities: ['University of Toronto', 'University of British Columbia', 'McGill University', 'University of Waterloo', 'University of Alberta', 'York University', 'Humber College', 'Seneca Polytechnic'],
    intakes: [['September', 'Main intake – widest choice of programs'], ['January', 'Second intake – many programs available'], ['May', 'Limited programs, mostly colleges']],
    facts: [['Tuition (approx.)', 'CAD 15,000 – 40,000 / year'], ['Part-time work', 'Up to 24 hrs/week in session'], ['Post-study work', 'PGWP up to 3 years'], ['English test', 'IELTS / PTE / TOEFL / CELPIP']],
    docs: ['Valid passport', 'Letter of Acceptance (LOA) from a DLI', 'Provincial Attestation Letter (PAL), where required', 'Proof of funds (GIC + tuition payment)', 'IELTS / PTE score report', 'Academic transcripts & certificates', 'Statement of Purpose (SOP)', 'Medical exam & biometrics'],
  },
  'study-in-australia': {
    name: 'Australia', flag: 'au', img: u('photo-1506973035872-a4ec16b8e8d9'),
    intro: 'Australia combines top-ranked universities with a great lifestyle, warm climate and strong job market. Its degrees are recognised worldwide and it offers generous post-study work rights.',
    why: ['7 universities in the global top 100', 'Work up to 48 hours per fortnight during study', 'Temporary Graduate visa (subclass 485) after graduation', 'High minimum wages and strong demand for skilled workers', 'Regional study options with extra benefits', 'Excellent student support services'],
    universities: ['University of Melbourne', 'University of Sydney', 'Australian National University', 'Monash University', 'UNSW Sydney', 'University of Queensland', 'Deakin University', 'RMIT University'],
    intakes: [['February', 'Main intake'], ['July', 'Second major intake'], ['November', 'Selected universities & VET courses']],
    facts: [['Tuition (approx.)', 'AUD 22,000 – 45,000 / year'], ['Part-time work', '48 hrs per fortnight'], ['Post-study work', 'Subclass 485 – 2 to 4 years'], ['English test', 'IELTS / PTE / TOEFL']],
    docs: ['Valid passport', 'Confirmation of Enrolment (CoE)', 'Genuine Student (GS) statement', 'Proof of financial capacity', 'IELTS / PTE score report', 'Overseas Student Health Cover (OSHC)', 'Academic documents', 'Health & character checks'],
  },
  'study-in-uk': {
    name: 'United Kingdom', flag: 'gb', img: u('photo-1513635269975-59663e0ac1ad'),
    intro: 'The UK is home to some of the oldest and most respected universities in the world. Shorter courses, such as 3-year bachelor’s and 1-year master’s degrees, save you time and money.',
    why: ['1-year master’s degrees – faster and more affordable', 'Globally respected universities', 'Graduate Route visa to work after your degree', 'Work up to 20 hours per week during term', 'Scholarships available for Indian students', 'Rich culture and easy travel across Europe'],
    universities: ['University of Oxford', 'University of Cambridge', 'Imperial College London', 'University College London', 'University of Manchester', 'University of Edinburgh', 'University of Birmingham', 'Coventry University'],
    intakes: [['September', 'Main intake'], ['January', 'Second intake – many programs'], ['May', 'Limited programs']],
    facts: [['Tuition (approx.)', 'GBP 12,000 – 38,000 / year'], ['Part-time work', '20 hrs/week in term'], ['Post-study work', 'Graduate Route visa'], ['English test', 'IELTS UKVI / PTE / TOEFL']],
    docs: ['Valid passport', 'CAS from a licensed university', 'Proof of funds (held for 28 days)', 'English test score (UKVI-approved)', 'Academic transcripts', 'TB test certificate', 'Immigration Health Surcharge payment', 'Statement of Purpose'],
  },
  'study-in-usa': {
    name: 'United States', flag: 'us', img: u('photo-1485738422979-f5c462d49f74'),
    intro: 'The USA has the largest number of top universities in the world and offers unmatched flexibility, research opportunities and career prospects, especially in STEM fields.',
    why: ['Largest choice of top-ranked universities', 'Flexible curriculum – choose your major later', 'OPT work authorisation of 12 months', 'Extra 24-month STEM OPT extension', 'Scholarships, assistantships and research funding', 'Strong links with global companies'],
    universities: ['Massachusetts Institute of Technology', 'Stanford University', 'Harvard University', 'UC Berkeley', 'Columbia University', 'New York University', 'Arizona State University', 'University of Texas at Dallas'],
    intakes: [['Fall (August/September)', 'Main intake – most programs & funding'], ['Spring (January)', 'Second intake'], ['Summer (May)', 'Limited programs']],
    facts: [['Tuition (approx.)', 'USD 20,000 – 55,000 / year'], ['Part-time work', '20 hrs/week on campus'], ['Post-study work', 'OPT 12 months + 24 STEM'], ['English test', 'IELTS / TOEFL / PTE / Duolingo']],
    docs: ['Valid passport', 'Form I-20 from the university', 'SEVIS fee receipt', 'DS-160 confirmation', 'Bank statements & sponsor documents', 'Academic transcripts', 'Test scores (IELTS/TOEFL, GRE/GMAT/SAT if required)', 'Visa interview preparation'],
  },
  'study-in-new-zealand': {
    name: 'New Zealand', flag: 'nz', img: u('photo-1507699622108-4be3abd695ad'),
    intro: 'New Zealand offers high-quality education in one of the safest and most beautiful countries on earth. All eight universities rank in the global top 3%.',
    why: ['All 8 universities ranked in the world’s top 3%', 'Safe, peaceful and student-friendly', 'Work part-time during study', 'Post-study work visa of up to 3 years', 'Practical, research-based learning', 'Pathways to residence for skilled graduates'],
    universities: ['University of Auckland', 'University of Otago', 'Victoria University of Wellington', 'University of Canterbury', 'Massey University', 'Auckland University of Technology', 'Lincoln University', 'University of Waikato'],
    intakes: [['February', 'Main intake'], ['July', 'Second intake'], ['Other months', 'Selected polytechnic courses']],
    facts: [['Tuition (approx.)', 'NZD 22,000 – 40,000 / year'], ['Part-time work', 'Allowed during study'], ['Post-study work', 'Up to 3 years'], ['English test', 'IELTS / PTE / TOEFL']],
    docs: ['Valid passport', 'Offer of Place', 'Proof of tuition payment', 'Proof of living funds', 'English test score', 'Academic documents', 'Medical & police certificates', 'Statement of Purpose'],
  },
  'study-in-europe': {
    name: 'Europe', flag: 'eu', img: u('photo-1467269204594-9661b134dd2b'),
    intro: 'Europe offers excellent education at low or even zero tuition in many countries. Germany, France, Ireland, the Netherlands and Italy are popular choices. A study visa also lets you travel across the Schengen area.',
    why: ['Low or no tuition fees at many public universities', 'Thousands of English-taught programs', 'Travel across Schengen countries', 'Post-study job-search visas (e.g. Germany 18 months)', 'Strong economies with skill shortages', 'Rich history, culture and lifestyle'],
    universities: ['Technical University of Munich (Germany)', 'RWTH Aachen (Germany)', 'Trinity College Dublin (Ireland)', 'University College Dublin (Ireland)', 'Sorbonne University (France)', 'University of Amsterdam (Netherlands)', 'Politecnico di Milano (Italy)', 'University of Warsaw (Poland)'],
    intakes: [['Winter (September/October)', 'Main intake in most countries'], ['Summer (February/March)', 'Second intake – selected programs']],
    facts: [['Tuition (approx.)', 'EUR 0 – 20,000 / year'], ['Part-time work', 'Varies by country'], ['Post-study work', 'Germany 18 mo, Ireland 1–2 yrs'], ['English test', 'IELTS / TOEFL / PTE']],
    docs: ['Valid passport', 'University admission letter', 'Blocked account / proof of funds', 'English (or local language) test score', 'Academic transcripts & APS (Germany)', 'Health insurance', 'Motivation letter & CV', 'Visa application form & photos'],
  },
}

/* ---------------- Generic info pages ---------------- */
export const pages = {
  ielts: {
    title: 'IELTS Coaching', sub: 'IELTS', banner: 'test', img: u('photo-1434030216411-0b793f4b4173'),
    intro: 'IELTS (International English Language Testing System) is the world’s most popular English test for study, work and migration. Our IELTS coaching helps you build real skills and the exam strategy you need to reach your target band.',
    sections: [
      { h: 'IELTS Test Format', list: ['Listening – 30 minutes, 4 sections, 40 questions', 'Reading – 60 minutes, 3 passages, 40 questions', 'Writing – 60 minutes, 2 tasks', 'Speaking – 11 to 14 minutes, face-to-face interview'] },
      { h: 'IELTS Academic vs General Training', text: 'IELTS Academic is for students applying to universities and colleges. IELTS General Training is for work visas, migration and some vocational courses. Listening and Speaking are the same in both. Reading and Writing differ.' },
      { h: 'What You Get In Our Classes', list: ['Small batches with personal attention', 'Experienced, certified trainers', 'Regular full-length mock tests', 'One-to-one speaking practice', 'Detailed writing feedback & correction', 'Flexible morning, evening & weekend batches', 'Study material & online practice access', 'Help with test booking'] },
    ],
  },
  'band-score': {
    title: 'IELTS Overall Band Score', sub: 'IELTS', banner: 'test', img: u('photo-1456513080510-7bf3a84b82f8'),
    intro: 'IELTS results are reported on a 9-band scale. You get a score for each of the four skills plus an overall band score. Knowing how the score is calculated helps you plan your preparation.',
    sections: [
      { h: 'How The Overall Band Is Calculated', text: 'Your overall band is the average of your Listening, Reading, Writing and Speaking scores, rounded to the nearest half or whole band. An average ending in .25 rounds up to the next half band, and one ending in .75 rounds up to the next whole band.' },
      { h: 'Example', list: ['L 6.5 + R 6.5 + W 5.0 + S 7.0 = 25 ÷ 4 = 6.25 → Overall 6.5', 'L 4.0 + R 3.5 + W 4.0 + S 4.0 = 15.5 ÷ 4 = 3.875 → Overall 4.0', 'L 6.5 + R 6.5 + W 5.0 + S 6.5 = 24.5 ÷ 4 = 6.125 → Overall 6.0'] },
      { h: 'Typical Requirements', list: ['Diploma courses: 5.5 – 6.0 overall', 'Bachelor’s degrees: 6.0 – 6.5 overall', 'Master’s degrees: 6.5 – 7.0 overall', 'Skilled migration: often 7.0+ in each band for maximum points'] },
    ],
    table: { head: ['Band', 'Skill Level', 'Description'], rows: [
      ['9', 'Expert', 'Full command of English – accurate, fluent and appropriate'],
      ['8', 'Very good', 'Fully operational with only occasional errors'],
      ['7', 'Good', 'Operational command with some inaccuracies'],
      ['6', 'Competent', 'Effective command despite some errors'],
      ['5', 'Modest', 'Partial command; copes with overall meaning'],
      ['4', 'Limited', 'Basic competence in familiar situations'],
      ['3', 'Extremely limited', 'Understands only general meaning'],
      ['2', 'Intermittent', 'Great difficulty with English'],
      ['1', 'Non-user', 'No ability beyond a few words'],
    ] },
  },
  'study-abroad': {
    title: 'Study Abroad', sub: 'IELTS', banner: 'study', img: u('photo-1541339907198-e08756dedf3f'),
    intro: 'Studying abroad gives you a world-class education, international exposure and better career opportunities. OMM Overseas supports you from choosing a course to landing in your new country.',
    sections: [
      { h: 'Our Study Abroad Services', list: ['Free profile evaluation & career counselling', 'Country, course & university selection', 'Application & admission support', 'SOP, LOR & resume guidance', 'Scholarship & education loan assistance', 'Visa documentation & interview preparation', 'Pre-departure briefing', 'Accommodation & travel guidance'] },
      { h: 'Popular Destinations', text: 'Canada, Australia, the UK, the USA, New Zealand and Europe are the most popular choices for Indian students. Each country has its own strengths in cost, work rights and settlement options, and our counsellors help you pick the right one.' },
      { h: 'Why Start Early?', text: 'Applications for top universities and scholarships open 8–12 months before the intake. Starting early gives you time to prepare for IELTS or PTE, gather documents and apply for funding.' },
    ],
  },
  pte: {
    title: 'PTE Coaching', sub: 'PTE', banner: 'test', img: u('photo-1516321318423-f06f85e504b3'),
    intro: 'PTE Academic is a computer-based English test accepted for study and migration in Australia, New Zealand, the UK, Canada and many other countries. AI scoring and fast results make it a popular choice.',
    sections: [
      { h: 'PTE Test Format', list: ['Part 1: Speaking & Writing – personal intro, read aloud, repeat sentence, describe image, essay and more', 'Part 2: Reading – fill in the blanks, multiple choice, re-order paragraphs', 'Part 3: Listening – summarise spoken text, highlight correct summary, write from dictation', 'Total test time: about 2 hours'] },
      { h: 'Our PTE Coaching Includes', list: ['Templates & strategies for every question type', 'AI-scored mock tests', 'Pronunciation and fluency training', 'Daily practice sessions', 'Personal feedback from expert trainers', 'Flexible batch timings'] },
    ],
  },
  'pte-benefits': {
    title: 'Benefits Of PTE', sub: 'PTE', banner: 'test', img: u('photo-1488190211105-8b0e65b80b4e'),
    intro: 'Many students choose PTE over other English tests because of its speed, fairness and convenience. Here is why PTE could be the right test for you.',
    sections: [
      { h: 'Key Benefits', list: ['Results usually within 48 hours', 'Fully computer-based and AI-scored, so marking is unbiased', 'Test dates available almost every day', 'Single 2-hour test – no separate speaking day', 'Accepted by thousands of universities worldwide', 'Accepted for Australian and New Zealand visas', 'Unlimited score sending at no extra cost', 'Many students find it easier to score high with the right strategy'] },
      { h: 'PTE Score Scale', text: 'PTE is scored from 10 to 90. A score of around 58–65 is roughly equal to IELTS 6.5–7.0, but always check the exact requirement of your university or visa.' },
    ],
  },
  'spoken-english': {
    title: 'Spoken English', sub: 'Other Services', banner: 'office', img: u('photo-1524178232363-1fb2b075b655'),
    intro: 'Speak English confidently in interviews, at work, while travelling and in daily life. Our spoken English course is practical, interactive and designed for all levels.',
    sections: [
      { h: 'Course Highlights', list: ['Grammar & vocabulary for daily use', 'Pronunciation & accent improvement', 'Group discussions & public speaking', 'Interview & presentation skills', 'Role plays and real-life conversations', 'Personality development & confidence building'] },
      { h: 'Who Can Join?', text: 'Students, working professionals, homemakers and anyone planning to move abroad. We place you in a beginner, intermediate or advanced batch after a short assessment.' },
    ],
  },
  'spouse-visa': {
    title: 'Spouse Visa', sub: 'Other Services', banner: 'family', img: u('photo-1511895426328-dc8714191300'),
    intro: 'Stay together with your partner while they study or work abroad. We help you check eligibility and prepare a strong spouse or dependent visa application.',
    sections: [
      { h: 'Countries We Handle', list: ['Canada – Spousal Open Work Permit & visitor visa', 'Australia – Subclass 500 dependent & partner visas', 'UK – Dependant visa (eligible courses & skilled workers)', 'New Zealand – Partner work & visitor visas', 'USA – F-2 / H-4 dependent visas'] },
      { h: 'Important', text: 'Spouse visa rules change often. In several countries, eligibility now depends on the main applicant’s course level or occupation. Our team checks the latest rules before you apply.' },
      { h: 'Documents Usually Needed', list: ['Marriage certificate & wedding photos', 'Proof of genuine relationship', 'Main applicant’s visa / enrolment / job letter', 'Financial documents', 'Passports & identity documents', 'Medical & police clearance certificates'] },
    ],
  },
  'mbbs-abroad': {
    title: 'MBBS Abroad', sub: 'Other Services', banner: 'study', img: u('photo-1576091160550-2173dba999ef'),
    intro: 'Become a doctor with an affordable, globally recognised MBBS degree from abroad. We guide you to universities that meet the National Medical Commission (NMC) guidelines.',
    sections: [
      { h: 'Popular Countries', list: ['Russia', 'Georgia', 'Kazakhstan', 'Uzbekistan', 'Kyrgyzstan', 'Philippines'] },
      { h: 'Why MBBS Abroad?', list: ['Lower fees than private medical colleges in India', 'No donation or capitation fee', 'English-medium programs', 'Modern hospitals and clinical exposure', 'Degrees recognised by WHO and NMC (as applicable)'] },
      { h: 'Eligibility', list: ['Qualified NEET score', '50% marks in Physics, Chemistry & Biology in Class 12 (40% for reserved categories)', 'Minimum age 17 years', 'Program must meet current NMC rules on duration, internship and language'] },
    ],
  },
  'work-visa': {
    title: 'Work Visa', sub: 'Work Visa', banner: 'work', img: u('photo-1551836022-d5d88e9218df'),
    intro: 'Build your career abroad with a work visa. We help skilled professionals and workers find the right visa pathway and prepare a complete application.',
    sections: [
      { h: 'Work Visa Destinations', list: ['Canada – LMIA work permits & Express Entry', 'Australia – Skilled & employer-sponsored visas', 'UK – Skilled Worker & Health and Care visas', 'Germany – EU Blue Card & Opportunity Card', 'New Zealand – Accredited Employer Work Visa', 'Europe – seasonal & skilled work permits'] },
      { h: 'Our Work Visa Services', list: ['Profile & eligibility assessment', 'Skills assessment & credential evaluation', 'CV preparation for international employers', 'Documentation & application filing', 'Interview preparation', 'Post-landing guidance'] },
      { h: 'Beware Of Fraud', text: 'We never guarantee jobs or ask for payment to “buy” a job offer. Always confirm that your employer and offer are genuine. Our team helps you check this.' },
    ],
  },
}

export const gallery = [
  'photo-1523240795612-9a054b0db644', 'photo-1522202176988-66273c2fd55f', 'photo-1556761175-5973dc0f32e7',
  'photo-1529156069898-49953e39b3ac', 'photo-1527631746610-bca00a040d60', 'photo-1600880292203-757bb62b4baf',
  'photo-1517048676732-d65bc937f952', 'photo-1522071820081-009f0129c71c', 'photo-1488646953014-85cb44e25828',
  'photo-1542744173-8e7e53415bb0', 'photo-1530521954074-e64f6810b32d', 'photo-1600880292089-90a7e086ee0c',
].map((id) => ({ thumb: u(id, 600), full: u(id, 1600) }))

// Put your YouTube video IDs here (the part after "watch?v=")
export const videos = [
  { name: 'Priya – Canada Study Visa', youtube: '', img: u('photo-1494790108377-be9c29b29330', 700) },
  { name: 'Rahul – Germany Work Visa', youtube: '', img: u('photo-1507003211169-0a1dd7228f2d', 700) },
  { name: 'Aman – Australia PR', youtube: '', img: u('photo-1500648767791-00dcc994a43e', 700) },
  { name: 'Simran – UK Student Visa', youtube: '', img: u('photo-1580489944761-15a19d654956', 700) },
  { name: 'Neha – IELTS 8.0 Band', youtube: '', img: u('photo-1573496359142-b8d87734a5a2', 700) },
  { name: 'Vikram – New Zealand Visa', youtube: '', img: u('photo-1519085360753-af0119f7cbe7', 700) },
]
