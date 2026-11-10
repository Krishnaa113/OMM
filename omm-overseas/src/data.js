const u = (id, w = 900) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=70`

export const img = {
  hero: [u('photo-1521791136064-7986c2920216', 1920), u('photo-1436491865332-7a61a109cc05', 1920), u('photo-1523240795612-9a054b0db644', 1920)],
  about1: u('photo-1527631746610-bca00a040d60', 800),
  about2: u('photo-1556761175-5973dc0f32e7', 500),
  why1: u('photo-1488646953014-85cb44e25828', 800),
  why2: u('photo-1600880292203-757bb62b4baf', 600),
  why3: u('photo-1507679799987-c73779587ccf', 600),
  contact: u('photo-1573497019940-1c28c88b4f3e', 1400),
}

export const heroSlides = [
  { tag: 'Your Most Trusted Partners', title: 'Immigration & Visa Consulting Here...' },
  { tag: 'Study | Work | Settle Abroad', title: 'Fly Abroad With Expert Visa Guidance' },
  { tag: 'Study Abroad Experts', title: 'Admission In Top Global Universities' },
]

export const services = [
  { title: 'Business Visa', text: 'Investor, entrepreneur and business visit visas to grow your company globally.', img: u('photo-1454165804606-c3d57bc86b40', 600) },
  { title: 'Student Visa', text: 'University shortlisting, admission, SOP support and complete student visa filing.', img: u('photo-1523240795612-9a054b0db644', 600) },
  { title: 'Work Visa', text: 'Skilled worker, employer-sponsored and job-seeker visas for top destinations.', img: u('photo-1551836022-d5d88e9218df', 600) },
  { title: 'Tourist Visa', text: 'Hassle-free visitor and tourist visa applications with itinerary support.', img: u('photo-1436491865332-7a61a109cc05', 600) },
]

export const whyItems = [
  { icon: 'interview', title: 'Direct Online Interviews', text: 'Talk to our certified counsellors from anywhere through video consultations.' },
  { icon: 'passport', title: 'Quick & Easy Process', text: 'Clear checklists and fast document review so nothing slows you down.' },
  { icon: 'visa', title: '99% Visa Approvals', text: 'Carefully prepared files that give your application the best chance.' },
]

export const counters = [
  { icon: 'globe', value: 25, suffix: '+', label: ['Countries', 'Covered'] },
  { icon: 'visa', value: 8500, suffix: '+', label: ['Visas', 'Approved'] },
  { icon: 'money', value: 98, suffix: '%', label: ['Success', 'Rate'] },
  { icon: 'officer', value: 12, suffix: '+', label: ['Years Of', 'Experience'] },
]

export const team = [
  { name: 'Arjun Mehta', role: 'Senior Visa Consultant', img: u('photo-1560250097-0b93528c311a', 600) },
  { name: 'Neha Kapoor', role: 'Student Visa Expert', img: u('photo-1573496359142-b8d87734a5a2', 600) },
  { name: 'Vikram Singh', role: 'Immigration Advisor', img: u('photo-1519085360753-af0119f7cbe7', 600) },
  { name: 'Sara Khan', role: 'PR & Work Visa Expert', img: u('photo-1580489944761-15a19d654956', 600) },
]

export const testimonials = [
  { name: 'Priya Sharma', role: 'Student, Canada', img: u('photo-1494790108377-be9c29b29330', 200), text: 'OMM Overseas made my study permit process so simple. From choosing a university to getting my visa approved, they guided me at every single step.' },
  { name: 'Rahul Verma', role: 'Engineer, Germany', img: u('photo-1507003211169-0a1dd7228f2d', 200), text: 'I got my work visa within weeks. A very professional team with transparent fees and quick answers to all my questions. Highly recommended.' },
  { name: 'Aman Gill', role: 'PR Holder, Australia', img: u('photo-1500648767791-00dcc994a43e', 200), text: 'We received our PR on the first attempt. Their documentation support is outstanding and they kept us updated throughout the process.' },
  { name: 'Simran Kaur', role: 'Student, UK', img: u('photo-1580489944761-15a19d654956', 200), text: 'Friendly counsellors who really understand the process. My UK student visa came through without any stress at all.' },
]

export const steps = [
  { icon: 'passport', title: 'Choose A Service', text: 'Tell us your goal and pick the visa service that fits you.' },
  { icon: 'money', title: 'Documents And Payments', text: 'We prepare and verify your documents with clear, fair fees.' },
  { icon: 'interview', title: 'Request A Meeting', text: 'Meet our expert for application review and interview prep.' },
  { icon: 'visa', title: 'Receive Your Visa Now', text: 'Your visa is approved and you are ready to fly abroad.' },
]

export const posts = [
  { img: u('photo-1522071820081-009f0129c71c', 700), day: '05', month: 'Nov', tag: 'Student Visa', comments: 0, title: 'Canada Study Permit: Complete Checklist For 2027 Intake' },
  { img: u('photo-1556157382-97eda2d62296', 700), day: '28', month: 'Oct', tag: 'Work Visa', comments: 2, title: 'Germany Opportunity Card: Who Can Apply & How' },
  { img: u('photo-1517048676732-d65bc937f952', 700), day: '19', month: 'Oct', tag: 'PR', comments: 1, title: 'Australia Skilled Migration: Occupations In Demand' },
]

export const instagram = [
  'photo-1600880292089-90a7e086ee0c', 'photo-1542744173-8e7e53415bb0', 'photo-1517245386807-bb43f82c33c4',
  'photo-1573497019940-1c28c88b4f3e', 'photo-1529156069898-49953e39b3ac', 'photo-1530521954074-e64f6810b32d',
].map((id) => u(id, 200))

export const nav = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Study Visa', children: [
    { label: 'Canada', to: '/study-in-canada' },
    { label: 'Australia', to: '/study-in-australia' },
    { label: 'UK', to: '/study-in-uk' },
    { label: 'USA', to: '/study-in-usa' },
    { label: 'New Zealand', to: '/study-in-new-zealand' },
    { label: 'Europe', to: '/study-in-europe' },
  ] },
  { label: 'IELTS', children: [
    { label: 'IELTS', to: '/ielts' },
    { label: 'Overall Band Score', to: '/band-score' },
    { label: 'Study Abroad', to: '/study-abroad' },
  ] },
  { label: 'PTE', children: [
    { label: 'PTE', to: '/pte' },
    { label: 'Benefits of PTE', to: '/pte-benefits' },
  ] },
  { label: 'Other Services', children: [
    { label: 'Spoken English', to: '/spoken-english' },
    { label: 'Spouse Visa', to: '/spouse-visa' },
    { label: 'MBBS Abroad', to: '/mbbs-abroad' },
  ] },
  { label: 'Work Visa', to: '/work-visa' },
  { label: 'Testimonials', children: [
    { label: 'Gallery', to: '/gallery' },
    { label: 'Videos', to: '/video-testimonials' },
  ] },
  { label: 'Contact Us', to: '/contact' },
]

export const contact = {
  phone: '+91 98765 43210',
  email: 'info@ommoverseas.com',
  address: ['123 Business Avenue,', 'New Delhi 110001, India'],
  hours: ['9.30am – 6.30pm', 'Monday to Saturday'],
}
