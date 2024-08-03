export const personalInfo = {
  name: 'Zifan WANG',
  profilePicture: '/profile.jpg', //optional
  role: 'PhD Student',
  university: 'NUS Business School',
  universityWebsite: 'https://bschool.nus.edu.sg/',
  socialMedia: [
    { name: 'Email', url: 'mailto:zifan.wang@u.nus.edu' },
    { name: 'Twitter', url: 'https://twitter.com/anxndsgn' },
    {
      name: 'GitHub',
      url: 'https://github.com/anxndsgn/academic-homepage-template',
    },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/wang-zifan' },
    { name: 'ORCID', url: 'https://orcid' },
    { name: 'Google Scholar', url: 'https://scholar.google.com' },
  ],
};

export const websiteInfo = {
  title: personalInfo.name,
  description: 'HCI researcher',
  // teaserImage: "/teaser.jpg",
};

export const navigations = [
  { name: 'Working Papers', route: '/projects' },
  { name: 'Publications', route: '/publications' },
  // { name: "News", route: "/news" },
  // { name: 'About', route: '/about' },
  { name: 'CV', route: '/cv.pdf' },
];

export const homepageSection = {
  AboutSection: true,
  NewsSection: true,
  // SelectedPublicationsSection: true,
  // ProjectSection: true,
};

export const fontStyle = 'sans'; // "sans" | "serif" | "mono"
