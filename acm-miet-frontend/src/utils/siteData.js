const siteData = {
  // Basic Site Info - Navbar/Footer import logo from src/assets
  siteName: "ACM MIET Student Chapter",

  // Navigation
  navLinks: [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Resources", href: "/resources" },
    { name: "Events", href: "/events" },
    { name: "Event Gallery", href: "/gallery" },
    { name: "Achievements", href: "/achievements" },
    { name: "Join Us", href: "/join" }
  ],

  // Hero Section
  heroCarousel: [
    {
      image: "/assets/images/hero1.jpg",
      alt: "ACM MIET conference",
      title: "ACM Conference",
      description: "Join us in our journey of technological advancement",
    },
    {
      image: "/assets/images/hero2.jpg",
      alt: "Membership Development Award",
      title: "Membership Development Award",
      description: "Developing technical and professional skills",
    },
    {
      image: "/assets/images/hero3.jpg",
      alt: "Tech events at MIET",
      title: "Tech Events at MIET",
      description: "Creating a community of tech enthusiasts",
    },
  ],

  // Why Section
  whySection: {
    image: "/assets/images/hero1.jpg",
    title: "Why ACM MIET Student Chapter?",
    text: "ACM MIET Student Chapter is committed to fostering innovation, collaboration, and technical excellence among students. With numerous events and opportunities, we provide a platform for skill enhancement and networking.",
    features: [
      "Access to ACM Digital Library",
      "Professional Development Workshops",
      "Networking Opportunities",
      "Technical Resources",
      "Leadership Experience",
    ],
  },

  // Team Section
  team: [
    {
      name: "John Doe",
      position: "Chairperson",
      linkedin: "https://www.linkedin.com/in/johndoe",
      image: "/assets/images/team/chair.jpg",
      email: "chair@acmmiet.org",
    },
    {
      name: "Jane Smith",
      position: "Vice Chairperson",
      linkedin: "https://www.linkedin.com/in/janesmith",
      image: "/assets/images/team/vice-chair.jpg",
      email: "vicechair@acmmiet.org",
    },
    {
      name: "Mike Johnson",
      position: "Secretary",
      linkedin: "https://www.linkedin.com/in/mikejohnson",
      image: "/assets/images/team/secretary.jpg",
      email: "secretary@acmmiet.org",
    },
  ],

  // Events
  events: [
    {
      title: "Technical Workshop 2024",
      date: "2024-03-15",
      image: "/assets/images/events/workshop.jpg",
      description: "Hands-on workshop on emerging technologies",
      location: "MIET Campus",
      status: "past",
    },
    {
      title: "ACM Conference 2024",
      date: "2024-04-20",
      image: "/assets/images/events/conference.jpg",
      description: "Annual technical paper presentation conference",
      location: "Virtual Event",
      status: "upcoming",
    },
  ],

  // Gallery
  gallery: [
    { image: "/assets/images/gallery1", title: "Tech Webinar - Semiconductor industry in India", date: "2023-12-10" },
    { image: "/assets/images/gallery2", title: "Membership Drive", date: "2023-10-01" },
    { image: "/assets/images/gallery3", title: "Yesist12 2024", date: "2023-11-15" },
    { image: "/assets/images/gallery4", title: "Yesist12 2024 Winners", date: "2023-09-05" },
    { image: "/assets/images/gallery5", title: "Membership Development Award", date: "2023-12-10" },
    { image: "/assets/images/gallery6", title: "Chapter Day Celebration", date: "2023-10-01" },
    { image: "/assets/images/gallery7", title: "Award Ceremony", date: "2023-11-15" },
    { image: "/assets/images/gallery8", title: "Student Meetup", date: "2023-09-05" },
  ],

  // Achievements
  achievements: [
    {
      title: "Best Student Chapter Award",
      description: "Recognized as the best Student Chapter in the region",
      date: "2023",
      image: "/assets/images/achievements/award1.jpg",
    },
    {
      title: "Outstanding Technical Activities",
      description: "Conducted over 20 successful technical workshops",
      date: "2023",
      image: "/assets/images/achievements/award2.jpg",
    },
    {
      title: "Community Service Recognition",
      description: "Successfully organized technology awareness programs",
      date: "2023",
      image: "/assets/images/achievements/award3.jpg",
    },
  ],

  // Chapters
  chapters: [
    {
      name: "Women in Engineering",
      logo: "/assets/images/WIE-poster.png",
      description: "Empowering women in engineering by providing opportunities, mentorship, and a supportive community to foster growth and innovation.",
      id: "wie-miet",
      focusAreas: [
        "Technical Skill Development",
        "Mentorship Programs",
        "Networking Opportunities",
        "Leadership Development",
        "STEM Outreach Initiatives",
        "Career Advancement Resources"
      ]
    },
  ],

  // Social Media Links
  socialMedia: {
    linkedin: "https://in.linkedin.com/company/acmsc-miet",
    instagram: "https://www.instagram.com/acmmiet/",
    facebook: "https://www.facebook.com/ieeemiet",
    twitter: "https://twitter.com/ieee_sb_miet",
  },

  // Contact Information
  contact: {
    email: "acm.sb@mietjammu.in",
    phone: "+91-XXXXXXXXXX",
    address: "MIET Jammu Campus, Kot Bhalwal Jammu J&K",
  },

  // Branch Councilors
  branchCounselor: [
    { name: "Prof. Ankur Gupta", position: "Branch Counselor", linkedin: "https://www.linkedin.com/in/ankur-gupta-4092242/", image: "/assets/images/Dr-Ankur-Gupta.jpg" },
    { name: "Dr. Ashok Kumar", position: "Branch Counselor", linkedin: "https://www.linkedin.com/in/dr-ashok-kumar-3128b522/", image: "/assets/images/prof-ashok-kumar.jpg" },
  ],

  // Faculty Coordinators
  facultyCoordinators: [
    { name: "Ms. Shiveta Bhat", position: "Faculty Coordinator", linkedin: "https://www.linkedin.com/in/shiveta-bhat-31560420a/", image: "/assets/images/Shiveta_Bhat.jpeg" }
  ],

  // Core Team 2024-25 (key ieeeSbTeam kept for API compatibility)
  ieeeSbTeam: [
    { name: "Esha Suri", position: "Chair", department: "ECE 8th Semester", linkedin: "https://www.linkedin.com/in/eshasuri", image: "/assets/images/team/chair.jpg" },
    { name: "Praguni Sanotra", position: "Vice-Chair", department: "CSE 6th Semester", linkedin: "https://www.linkedin.com/in/pragunisanotra", image: "/assets/images/team/vice-chair.jpg" },
    { name: "Karishma Wanchoo", position: "Secretary", department: "CSE 6th Semester", linkedin: "https://www.linkedin.com/in/karishmawanchoo", image: "/assets/images/team/secretary.jpg" },
    { name: "Arsh Sharma", position: "Joint-Secretary", department: "CSE 4th Semester", linkedin: "https://www.linkedin.com/in/arshsharma", image: "/assets/images/team/joint-secretary.jpg" },
    { name: "Sacchit Sharma", position: "Treasurer", department: "CSE 4th Semester", linkedin: "https://www.linkedin.com/in/sacchitsharma", image: "/assets/images/team/treasurer.jpg" },
    { name: "Madhur Mahajan", position: "Public Representative", department: "CSE 4th Semester", linkedin: "https://www.linkedin.com/in/madhurmahajan", image: "/assets/images/team/public-rep.jpg" },
    { name: "Vansh Bargotra", position: "Webmaster", department: "CSE 6th Semester", linkedin: "https://www.linkedin.com/in/vanshbargotra", image: "/assets/images/team/webmaster.jpg" },
    { name: "Sidhima", position: "Editor", department: "CSE 4th Semester", linkedin: "https://www.linkedin.com/in/sidhima", image: "/assets/images/team/editor.jpg" },
    { name: "Brianjyot Singh", position: "Graphics Head", department: "CSE 4th Semester", linkedin: "https://www.linkedin.com/in/brianjyotsingh", image: "/assets/images/team/graphics-head.jpg" }
  ],
  wieTeam: [
    { name: "Prachi Sharma", position: "Chair", department: "CSE 6th Semester", linkedin: "https://www.linkedin.com/in/prachisharma", image: "/assets/images/team/wie-chair.jpg" },
    { name: "Vritti Sharma", position: "Vice-Chair", department: "ECE 6th Semester", linkedin: "https://www.linkedin.com/in/vrittisharma", image: "/assets/images/team/wie-vice-chair.jpg" },
    { name: "Kavisha Talwar", position: "Secretary", department: "CSE 4th Semester", linkedin: "https://www.linkedin.com/in/kavishatalwar", image: "/assets/images/team/wie-secretary.jpg" },
    { name: "Sukriti Uppal", position: "Joint-Secretary", department: "ECE 4th Semester", linkedin: "https://www.linkedin.com/in/sukritiuppal", image: "/assets/images/team/wie-joint-secretary.jpg" },
    { name: "Riddhi Gupta", position: "Treasurer", department: "BCA 4th Semester", linkedin: "https://www.linkedin.com/in/riddhigupta", image: "/assets/images/team/wie-treasurer.jpg" },
    { name: "Manya Malhotra", position: "Public Representative", department: "CSE 4th Semester", linkedin: "https://www.linkedin.com/in/manyamalhotra", image: "/assets/images/team/wie-public-rep.jpg" },
    { name: "Tammana", position: "Editor", department: "BCA 4th Semester", linkedin: "https://www.linkedin.com/in/tammana", image: "/assets/images/team/wie-editor.jpg" }
  ]
};

export default siteData;
