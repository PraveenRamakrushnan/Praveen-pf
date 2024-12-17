import {
    mobile,
    backend,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    jira,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    mysql,
    post,
    cog,
    salon,
    ebill,
    lms,
    threejs,
  } from "../assets";


  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Certifications",
    },
    {
      id: "skills",
      title: "Skills",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
    {
      id: "download-cv",
      title: "Download CV",
      href: "./Praveen Ramakrushnan CV.pdf", 
      download: true,
    },
  ];
  
  const services = [
    
    {
      title: "Frontend Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Jira",
      icon: jira,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "MysSql",
      icon: mysql,
    },
  ];
  
  const experiences = [
    {
      title: "Postman API Fundamentals Student Expert",
      company_name: "Postman",
      icon: post,
      iconBg: "#383E56",
      date: "Dec 2024",
      link: "https://api.badgr.io/public/assertions/z2kPUfWJQsO8qQ1CLaU33w?identity__email=pp860669%40gmail.com", 
      points: [
        "Understanding the importance of APIs in modern software development.", 
        "Making GET, POST, PATCH, and DELETE requests.",
        "Working with query parameters, bodies, headers, and response codes.",
        "Implementing basic scripting and API key authorization.",
        "Learning how to integrate APIs into applications seamlessly.",
      ],
    },
    {
      title: "Data Analysis with Python",
      company_name: "Cognitive Class",
      icon: cog,
      iconBg: "#E6DEDD",
      date: "Dec 2024",
      link:"https://courses.cognitiveclass.ai/certificates/2c38eb7178eb4c8faaf424e3e12ace20",
      points: [
        "Import data sets",
        "Clean and prepare data for analysis.",
        "Manipulate pandas DataFrames.",
        "Summarize data.",
        "Build machine learning models using scikit-learn.",
        "Build data pipelines.",
      ],
    },
    {
      title: "Serverless Computing using Cloud Functions - Developer I",
      company_name: "Cognitive Class",
      icon: cog,
      iconBg: "#383E56",
      date: "Dec 2024",
      link:"https://courses.cognitiveclass.ai/certificates/b5390aa808b743afa8db6f63b2f59951",
      points: [
        "Comprehend how serverless computing works and ways it can be used in cloud applications.",
        "Distinguish use cases and patterns compatible with Serverless.",
        "Create and manage serverless functions using the IBM Cloud Functions platform.",
        "Use packages to organize your functions and create reusable building blocks.",
        "Automate your functions using alarm events.",
        "Expose functions as to the web accessible endpoints and as APIs that return different content types.",
        "Navigate the web user interface to perform similar tasks that mirror CLI commands.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Salon Management System",
      description:
        "Web-based platform designed for efficient salon management, enabling users to schedule appointments, manage staff, and track inventory. The system provides a seamless experience for both salon owners and clients, offering features such as online booking, service customization, and automated reminders to enhance operational efficiency and customer satisfaction.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "SpringBoot",
          color: "green-text-gradient",
        },
        {
          name: "MySql",
          color: "blue-text-gradient",
        },
      ],
      image: salon,
      source_code_link: "https://github.com/MuhammedJamzeeth/Salon-Management-System.git",
    },
    {
      name: "Electricity-Billing-System",
      description:
        "A comprehensive web-based Electricity Billing System designed to streamline the management of electricity usage and billing processes. This platform enables utility providers to efficiently manage customer accounts, track electricity consumption, and generate accurate bills. With features like automated calculations, payment tracking, and detailed usage reports, it provides a reliable and user-friendly solution for both providers and consumers.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "SpringBoot",
          color: "green-text-gradient",
        },
        {
          name: "Flyway",
          color: "red-text-gradient",
        },
      ],
      image: ebill,
      source_code_link: "https://github.com/MuhammedJamzeeth/Electricity-Billing-System.git",
    },
    {
      name: "Learning Management System",
      description:
        "A robust Student Management Application designed to streamline academic administration by managing student and lecturer data while automating GPA calculations.",
      tags: [
        {
          name: "java",
          color: "blue-text-gradient",
        },
        {
          name: "OOPconcepts",
          color: "blue-text-gradient",
        },
        {
          name: "javaSwing",
          color: "green-text-gradient",
        },
        {
          name: "MySql",
          color: "blue-text-gradient",
        },
      ],
      image: lms,
      source_code_link: "https://github.com/MuhammedJamzeeth/JavaMiniFinal-V3.git",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };