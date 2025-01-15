import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    figma,
    DRDO,
    tripguide,
    threejs,
    c,
    bootstrap,
    kobodrop,
    designagency
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "UI Creator",
      icon: creator,
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
      name: "Redux Toolkit",
      icon: redux,
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
      name: "C++",
      icon: c,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "Bootstrapr",
      icon: bootstrap,
    },
  ];
  
  const experiences = [
    {
      title: "Project Intern",
      company_name: "Defence Research and Development Organisation (DRDO)",
      icon: DRDO,
      iconBg: "#383E56",
      date: "May 2024 - July 2024",
      points: [
        "Developed Motorized Hatch System for Drone (UAV): Engineered a motorized hatch system for a drone (UAV) designed to house and deploy a quad-copter efficiently.",
        "Advanced Safety Algorithm: Designed and integrated an algorithm with fail-safe and safety features to enhance the reliability of the hatch opening mechanism.",
        "Optimized Opening Mechanism: Achieved a quick opening time span of 5-10 seconds, adaptable to various deployment scenarios.",
        "Precision Hatch Design: Engineered a lightweight, compact hatch system, optimizing efficiency and maintaining aerodynamic performance.",
      ],
    }
 
 
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
      name: "Kobodrop",
      description:
        "Kobodrop is a fully responsive financial app landing page built with React and Tailwind CSS, offering a modern UI to showcase app features, drive engagement, and ensure a seamless user experience on all devices.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "vite",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: kobodrop,
      source_code_link: "https://github.com/Vivek-Singh-Yadav/kobodrop-app",
      website_link: "https://money-kobodrop.netlify.app/",
    },
    {
      name: "Design Agency",
      description:
        "A responsive design agency landing page built with modern front-end technologies, showcasing services, portfolio, and expertise with a sleek, user-friendly layout optimized for all devices.",
      tags: [
        {
          name: "bootstrap",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: designagency,
      source_code_link: "https://github.com/Vivek-Singh-Yadav/Design_Agency",
      website_link: "https://design-agency-page.netlify.app/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
      website_link: "https://design-agency-page.netlify.app/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };