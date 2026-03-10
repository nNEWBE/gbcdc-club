export interface Notice {
  title: string;
  slug: string;
  date: string;
  category: string;
  priority?: "high" | "normal";
  description: string;
  content: string;
  author: string;
}

export const notices: Notice[] = [
  {
    title: "Annual General Meeting 2026",
    slug: "annual-general-meeting-2026",
    date: "March 25, 2026",
    category: "General",
    priority: "high",
    author: "Executive Committee",
    description:
      "All members are invited to attend the Annual General Meeting. Agenda includes election of the new executive body, annual report presentation, budget review, and future planning. Attendance is mandatory for all active members.",
    content: `
      <p>Dear Members,</p>
      <br />
      <p>We are pleased to announce that the Annual General Meeting (AGM) of the Gono Bishwabidyalay Career Development Club for the year 2026 will be held on <strong>March 25, 2026</strong>. This is the most important assembly of the year, bringing together our entire community to reflect on our achievements, discuss our future, and elect the new leadership.</p>
      <br />
      <h3 class="text-xl font-bold text-black mb-3">Agenda</h3>
      <ul class="list-disc pl-5 mt-2 space-y-2 mb-6 text-neutral-600">
        <li>Presentation of the Annual Report for 2025-2026.</li>
        <li>Financial Review and Budget Planning for the upcoming term.</li>
        <li>Election and Handover to the New Executive Body.</li>
        <li>Open floor for member suggestions and Q&A.</li>
      </ul>
      <p>Your presence is crucial to the democratic process of our club and to ensure your voice is heard regarding the club's future direction. Please arrive at the Main Auditorium at least 15 minutes prior to the start time.</p>
      <br />
      <p>If you have any specific motions you wish to raise, please submit them to the General Secretary by March 20, 2026.</p>
      <br />
      <p>Best regards,</p>
      <p><strong>The Executive Committee</strong></p>
    `,
  },
  {
    title: "Membership Renewal Deadline Extended",
    slug: "membership-renewal-deadline-extended",
    date: "March 20, 2026",
    category: "Membership",
    priority: "high",
    author: "Administration",
    description:
      "The deadline for membership renewal has been extended to April 15, 2026. Members who fail to renew will lose access to club events, workshops, and exclusive resources. Renew through the club office or online portal.",
    content: `
      <p>Attention all existing members,</p>
      <br />
      <p>Due to the ongoing mid-term examination schedule, the executive committee has decided to extend the deadline for membership renewal. You now have until <strong>April 15, 2026</strong>, to complete your renewal process.</p>
      <br />
      <h3 class="text-xl font-bold text-black mb-3">Why Renew?</h3>
      <p>Maintaining active membership grants you continuous access to:</p>
      <ul class="list-disc pl-5 mt-2 space-y-2 mb-6 text-neutral-600">
        <li>Exclusive skill development workshops and bootcamps.</li>
        <li>Priority registration for career fairs and networking events.</li>
        <li>Access to the premium resource library and job portals.</li>
        <li>Eligibility to run for leadership positions within the club.</li>
      </ul>
      <h3 class="text-xl font-bold text-black mb-3">How to Renew</h3>
      <p>You can complete your renewal via our online portal or by visiting the club office during regular operating hours (9:00 AM – 4:00 PM). Ensure you bring your university ID and a recent passport-sized photograph if updating your profile.</p>
      <br />
      <p>Do not wait until the last minute. We look forward to having you with us for another exciting and productive year!</p>
    `,
  },
  {
    title: "New Workshop Series: Professional Communication",
    slug: "new-workshop-series-professional-communication",
    date: "March 12, 2026",
    category: "Workshop",
    author: "Training & Development",
    description:
      "A 4-week workshop series on professional communication skills starting April 1st. Covers business writing, presentation skills, email etiquette, and negotiation techniques.",
    content: `
      <p>Effective communication is the cornerstone of professional success. We are thrilled to launch a comprehensive 4-week workshop series focused exclusively on elevating your communication prowess.</p>
      <br />
      <h3 class="text-xl font-bold text-black mb-3">What You Will Learn:</h3>
      <ul class="list-disc pl-5 mt-2 space-y-2 mb-6 text-neutral-600">
        <li><strong>Week 1:</strong> Business Writing & Email Etiquette - Crafting clear, concise, and impactful emails.</li>
        <li><strong>Week 2:</strong> Presentation Skills - Overcoming stage fright, structuring your talk, and engaging the audience.</li>
        <li><strong>Week 3:</strong> Verbal Communication - Articulation, tone, and active listening in professional settings.</li>
        <li><strong>Week 4:</strong> Negotiation Basics & Conflict Resolution - Navigating difficult conversations constructively.</li>
      </ul>
      <p><strong>Schedule:</strong> Every Wednesday starting April 1, 2026, from 3:00 PM to 5:00 PM in Seminar Room A.</p>
      <br />
      <p>Registration is limited to 50 participants to ensure personalized attention. Please register through the club portal by March 28.</p>
    `
  },
  {
    title: "Summer Internship Opportunities",
    slug: "summer-internship-opportunities-2026",
    date: "March 10, 2026",
    category: "Opportunity",
    author: "Corporate Relations",
    description:
      "GBCDC has partnered with 12 leading organizations for exclusive summer internship placements. Applications are now open for all department members.",
    content: `
      <p>Kickstart your career this summer! GBCDC's Corporate Relations team has successfully secured exclusive internship quotas for our members across 12 esteemed organizations in tech, finance, marketing, and HR sectors.</p>
      <br />
      <h3 class="text-xl font-bold text-black mb-3">Participating Companies:</h3>
      <p>Our partners include top-tier national corporations and rapidly growing startups. A full list along with specific role descriptions is available on the Career Portal.</p>
      <br />
      <h3 class="text-xl font-bold text-black mb-3">Application Process:</h3>
      <ul class="list-disc pl-5 mt-2 space-y-2 mb-6 text-neutral-600">
        <li>Update your resume using the standard GBCDC template.</li>
        <li>Select up to three preferred internship roles.</li>
        <li>Submit your application package consisting of your resume and a tailored cover letter through our internal portal.</li>
      </ul>
      <p><strong>Deadline:</strong> All applications must be submitted by April 10, 2026. Shortlisted candidates will be invited for preliminary mock interviews conducted by our alumni network before the final corporate rounds.</p>
    `
  },
  {
    title: "Photography Contest Results Announced",
    slug: "photography-contest-results-announced",
    date: "March 8, 2026",
    category: "Event",
    author: "Events Committee",
    description:
      "Congratulations to the winners of our 'Campus Life' photography contest. The winning entries will be featured in the annual club magazine.",
    content: `
      <p>We are delighted to announce the winners of the "Campus Life Through Your Lens" photography contest! The response was overwhelming, with over 150 stunning entries capturing the spirit, vibrancy, and quiet moments of our university campus.</p>
      <br />
      <h3 class="text-xl font-bold text-black mb-3">Winners:</h3>
      <ul class="list-disc pl-5 mt-2 space-y-2 mb-6 text-neutral-600">
        <li><strong>1st Place:</strong> "Golden Hour at the Library" by Sarah A. (3rd Year, C.S.)</li>
        <li><strong>2nd Place:</strong> "The Rush Between Classes" by Fahim R. (2nd Year, BBA)</li>
        <li><strong>3rd Place:</strong> "Quiet Study" by Nila K. (4th Year, Pharmacy)</li>
      </ul>
      <p>Special mentions go to 10 other outstanding photographers whose work will also be showcased at our upcoming exhibition in the main corridor next week.</p>
      <br />
      <p>The top three photographs will proudly grace the cover and inside spread of the GBCDC Annual Magazine 2026. Prizes will be distributed during the upcoming general meeting. Congratulations once again to all participants for showcasing incredible talent!</p>
    `
  },
  {
    title: "New Library Resources Available",
    slug: "new-library-resources-available",
    date: "March 5, 2026",
    category: "Resource",
    author: "Resource Management",
    description:
      "The GBCDC resource library has been updated with over 50 new career development books, interview guides, and industry certification study materials.",
    content: `
      <p>Continuous learning is key to career advancement. We have completely revamped the GBCDC physical and digital resource library just in time for the new semester.</p>
      <br />
      <h3 class="text-xl font-bold text-black mb-3">New Additions Include:</h3>
      <ul class="list-disc pl-5 mt-2 space-y-2 mb-6 text-neutral-600">
        <li><strong>Interview Preparation:</strong> The latest editions of "Cracking the Coding Interview", "Case in Point" for consulting, and general behavioral interview guides.</li>
        <li><strong>Skill Development:</strong> Books on leadership, emotional intelligence, and time management.</li>
        <li><strong>Certification Materials:</strong> Official study guides for AWS, Cisco, PMP, and IELTS.</li>
        <li><strong>Digital Subscriptions:</strong> We have secured access to specialized online journal databases and premium coding platforms accessible via club computers.</li>
      </ul>
      <p>Members can borrow up to two physical books for a period of 14 days. Please visit the librarian during office hours to issue books or acquire login credentials for the digital platforms.</p>
    `
  },
  {
    title: "Volunteer Registration Open for Career Fair",
    slug: "volunteer-registration-open-for-career-fair",
    date: "March 2, 2026",
    category: "Volunteer",
    author: "Events Committee",
    description:
      "We need 40 volunteers for the upcoming Career Fair 2026. Volunteers receive a certificate of appreciation and priority networking sessions with employers.",
    content: `
      <p>The annual GBCDC Career Fair is our flagship event, bringing over 30 top employers directly to our campus. Making this event a massive success requires a dedicated team of volunteers.</p>
      <br />
      <h3 class="text-xl font-bold text-black mb-3">Why Volunteer?</h3>
      <p>Volunteering is an exceptional way to build soft skills while directly interacting with corporate delegates. As a volunteer, you will receive:</p>
      <ul class="list-disc pl-5 mt-2 space-y-2 mb-6 text-neutral-600">
        <li>An official Certificate of Appreciation from the university administration.</li>
        <li>An exclusive early access hour to network with recruiters before the fair opens to the general student body.</li>
        <li>GBCDC volunteer merchandise and free lunch on the event day.</li>
      </ul>
      <h3 class="text-xl font-bold text-black mb-3">Roles Available:</h3>
      <p>We are recruiting for Delegate Management, Registration Desk, Tech Support, and Logistics Coordination.</p>
      <br />
      <p>If you are energetic, responsible, and looking to make an impact, sign up today via the volunteering form on our website. Orientation and training for selected volunteers will be held next weekend.</p>
    `
  },
  {
    title: "Club Room Schedule Update",
    slug: "club-room-schedule-update",
    date: "February 28, 2026",
    category: "General",
    author: "Administration",
    description:
      "The GBCDC club room will now operate from 9:00 AM to 6:00 PM on weekdays and 10:00 AM to 2:00 PM on Saturdays. Closed on Sundays and public holidays.",
    content: `
      <p>To better accommodate the varied schedules of our members across different departments, the executive committee, in coordination with university authorities, has updated the operating hours of our primary club room (Room 304, Academic Building 2).</p>
      <br />
      <h3 class="text-xl font-bold text-black mb-3">New Schedule (Effective March 1, 2026):</h3>
      <ul class="list-disc pl-5 mt-2 space-y-2 mb-6 text-neutral-600">
        <li><strong>Weekdays (Monday - Friday):</strong> 9:00 AM – 6:00 PM</li>
        <li><strong>Saturdays:</strong> 10:00 AM – 2:00 PM</li>
        <li><strong>Sundays & Public Holidays:</strong> Closed</li>
      </ul>
      <p>During these hours, members are free to use the space for group study, project meetings, accessing the club PCs, or just unwinding between classes. Please note that quiet hours are enforced between 1:00 PM and 3:00 PM.</p>
      <br />
      <p>For booking the inner conference room for private team meetings, please reserve a slot using the online calendar at least 24 hours in advance.</p>
    `
  }
];

export const pinnedNotices = notices.filter(n => n.priority === "high");
export const recentNotices = notices.filter(n => n.priority !== "high");
