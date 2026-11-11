const u = (id, w = 900) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=70`

export const img = {
  homeHero: u('photo-1523240795612-9a054b0db644', 1200),
  about1: u('photo-1527631746610-bca00a040d60', 800),
  about2: u('photo-1556761175-5973dc0f32e7', 500),
  why1: u('photo-1488646953014-85cb44e25828', 800),
  why2: u('photo-1600880292203-757bb62b4baf', 600),
  why3: u('photo-1507679799987-c73779587ccf', 600),
  contact: u('photo-1573497019940-1c28c88b4f3e', 1400),
}

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
  { label: 'Work Visa', to: '/work-visa' },
  { label: 'Testimonials', children: [
    { label: 'Gallery', to: '/gallery' },
    { label: 'Videos', to: '/video-testimonials' },
  ] },
  { label: 'Contact Us', to: '/contact' },
]

// "State" dropdown in the home page consultation form
export const states = [
  'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh',
  'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha',
  'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal',
  'Andaman and Nicobar Islands', 'Chandigarh', 'Dadra and Nagar Haveli and Daman and Diu', 'Delhi', 'Jammu and Kashmir',
  'Ladakh', 'Lakshadweep', 'Puducherry', 'Outside India',
]

// "How soon" dropdown in the home page consultation form
export const timelines = ['Within 7 days', 'Within 15 days', 'Within 30 days', 'Within 3 months', 'Within 6 months', 'Just exploring']

export const contact = {
  phone: '+91 98765 43210',
  email: 'info@ommoverseas.com',
  address: ['123 Business Avenue,', 'New Delhi 110001, India'],
  hours: ['9.30am – 6.30pm', 'Monday to Saturday'],
  whatsapp: '', // leave empty to use the phone number
  mapLocation: 'Connaught Place New Delhi',
  social: { fb: '#', tw: '#', ig: '#', in: '#' },
}

// Headings, paragraphs and button labels shown around the site. Use a new line for a line break.
export const text = {
  home: {
    heroTag: 'Study | Work | Settle Abroad', heroTitle: 'Your Journey Abroad', heroHighlight: 'Starts Here',
    heroText: 'Expert guidance for student, work, tourist and PR visas. Honest advice, complete documentation and a 98% success rate.',
    heroButton: 'Free Consultation', heroButton2: 'Explore Countries',
    trustTitle: '8500+ happy clients', trustText: '★★★★★ rated by students & families',
    destSub: 'Study Destinations', destTitle: 'Where Do You Want To Study?', destText: 'Pick a country to see universities, intakes, costs and visa requirements.',
    servicesSub: 'What We Do', servicesTitle: 'Visa Services Built Around You', servicesButton: 'Talk To An Expert', whatsappButton: 'WhatsApp', enquiryButton: 'Inquiry', servicesMore: 'Learn more',
    whySub: 'Why OMM Overseas', whyTitle: 'A Consultancy That Actually Cares',
    whyText: 'OMM Overseas is a registered visa and immigration consultancy. We give honest advice, prepare every file carefully and stay with you until you land.',
    whyBadgeValue: '12+', whyBadgeLabel: 'Years of\nexperience', whyButton: 'More About Us',
    processSub: 'How It Works', processTitle: 'Your Visa In 4 Simple Steps',
    reviewsSub: 'Success Stories', reviewsTitle: 'What Our Clients Say',
    contactSub: 'Get In Touch', contactTitle: 'Book Your Free Consultation', contactText: 'Tell us your plans and an expert will call you back within one working day.',
    timelineLabel: 'In how many days do you want to start?', formButton: 'Request Call Back', formThanks: 'Thanks! We will call you soon ✓',
  },
  about: {
    sub: 'About Company', title: 'Welcome To Experience Visa Consulting Firm',
    text: 'OMM Overseas is a registered visa and immigration consultancy helping students, professionals and families study, work and settle abroad with honest advice and complete support.',
    rings: [{ value: 95, label: 'Visa Success\nRatio' }, { value: 98, label: 'Happy Client\nSatisfaction' }],
    ticks: ['Immigration & Visa Consulting', 'Direct Online Interview', '99% Visa Approval Rate'],
    button: 'Explore More',
  },
  why: {
    sub: 'Why Choose Us', title: 'Some Reasons People Like Our Consultancy',
    text: 'We combine years of experience with a personal approach, so every client gets the right visa strategy and a smooth journey abroad.',
    trusted: '8500+ Trusted Customers',
  },
  team: { sub: 'Professional People', title: 'Meet Our Expert Visa\nConsultants' },
  testimonials: { sub: 'Our Testimonials', title: 'Let’s Explore Why People Say\nAbout Our Services' },
  process: { sub: 'Working Process', title: '4 Step Follow You Can Get\nYour Visa Easily' },
  cta: { title: 'Let’s Discuss & Start Visa Consultations', text: 'Book a free consultation with our experts today and take the first step abroad.', button: 'Lets Get Started' },
  contactForm: { sub: 'Contact Us', title: 'Get A Call Back', button: 'Send Us Messages', sent: 'Message Sent ✓', cardCall: 'Call Us', cardEmail: 'Email Us', cardVisit: 'Visit Us' },
  sidebar: { title: 'Our Services', helpTitle: 'Need Help? Talk To Our Expert', helpButton: 'Book Free Consultation', enquiryButton: 'Inquiry' },
  countryPage: { whyTitle: 'Why Study In', universitiesTitle: 'Top Universities & Colleges', intakesTitle: 'Intakes', docsTitle: 'Documents Required', note: 'Fees and visa rules change often. Our counsellors will confirm the latest requirements for your profile.' },
  pageTitles: { about: 'About Us', gallery: 'Gallery', videos: 'Video Testimonials', contact: 'Contact Us', testimonialsCrumb: 'Testimonials', studyCrumb: 'Study Visa', notFound: 'Page Not Found' },
  gallery: { sub: 'Our Gallery', title: 'Moments Of Happy Students\n& Successful Visas' },
  videos: { sub: 'Video Testimonials', title: 'Hear From Our\nSuccessful Clients' },
  notFound: { title: '404 – This page does not exist', button: 'Back To Home' },
  footer: {
    about: 'Your trusted partner to study, work and settle abroad. Honest advice and complete visa support from start to finish.',
    servicesTitle: 'Services',
    services: [{ label: 'Study In Canada', to: '/study-in-canada' }, { label: 'Study In UK', to: '/study-in-uk' }, { label: 'Study In Australia', to: '/study-in-australia' }, { label: 'Work Visa', to: '/work-visa' }, { label: 'Spouse Visa', to: '/spouse-visa' }],
    exploreTitle: 'Explore',
    explore: [{ label: 'About Us', to: '/about' }, { label: 'IELTS Coaching', to: '/ielts' }, { label: 'PTE Coaching', to: '/pte' }, { label: 'Gallery', to: '/gallery' }, { label: 'Contact Us', to: '/contact' }],
    copyright: 'OMM Overseas All Rights Reserved.',
  },
}
