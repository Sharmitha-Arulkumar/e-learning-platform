export const dummyCourses = [
  // --- DEVELOPMENT TRACKS ---
  {
    id: "fullstack-web-dev",
    title: "Become a Full Stack Web Developer (MERN Track)",
    instructor: "Alex Rivera",
    category: "Development",
    rating: 4.9,
    students: 24500,
    duration: "42 hours",
    image:
      "https://images.unsplash.com/photo-1776521796613-564c9f7d02e7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    description:
      "Master frontend engineering with React, backend architecture via Node.js, Express APIs, and scalable MongoDB databases.",
    syllabus: [
      { id: "fs1", title: "Advanced JavaScript (ES6+) and Client Run-times" },
      { id: "fs2", title: "Building Single Page Architectures with React JS" },
      { id: "fs3", title: "RESTful API Engineering using Node & Express" },
      {
        id: "fs4",
        title: "Database Optimization and Schema Design with MongoDB",
      },
    ],
  },
  {
    id: "angular-enterprise",
    title: "Angular Enterprise Design Frameworks",
    instructor: "Daniele Rossi",
    category: "Development",
    rating: 4.7,
    students: 9300,
    duration: "28 hours",
    image:
      "https://images.unsplash.com/photo-1511376777868-611b54f68947?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    description:
      "Build enterprise-ready web applications with strict TypeScript typing, reactive RxJS modules, and clean custom directives.",
    syllabus: [
      {
        id: "ang1",
        title: "Modular Architecture & Dependency Injection Patterns",
      },
      { id: "ang2", title: "Reactive State Pipelines using RxJS Streams" },
      { id: "ang3", title: "Unit and E2E Testing with Jasmine & Playwright" },
    ],
  },
  {
    id: "java-backend-systems",
    title: "Java Backend Systems and Spring Boot Engineering",
    instructor: "Marcus Vance",
    category: "Development",
    rating: 4.8,
    students: 18100,
    duration: "35 hours",
    image:
      "https://images.unsplash.com/photo-1484417894907-623942c8ee29?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    description:
      "Architect scalable, multithreaded backend services using modern Java, Spring Boot frameworks, and secure JPA/Hibernate database abstractions.",
    syllabus: [
      { id: "jv1", title: "Object-Oriented Programming and Thread Safeties" },
      { id: "jv2", title: "Spring Boot Dependency Wireframes & Middleware" },
      { id: "jv3", title: "Microservices Mesh & JWT Token Security Profiles" },
    ],
  },
  {
    id: "game-dev-unreal",
    title: "Next-Generation Game Developer Pathway (Unreal Engine C++)",
    instructor: "Clara Thorne",
    category: "Development",
    rating: 4.9,
    students: 11400,
    duration: "50 hours",
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    description:
      "Learn logic script scripting, collision matrices, visual blueprint components, and custom physics compiling inside Unreal Engine.",
    syllabus: [
      { id: "gm1", title: "C++ Foundations for Object Vector Control" },
      { id: "gm2", title: "Physically Based Rendering (PBR) & Level Topology" },
      { id: "gm3", title: "Multiplayer Replication & Client Network Syncing" },
    ],
  },

  // --- DATA SCIENCE TRACKS ---
  {
    id: "data-scientist-mastery",
    title: "Professional Data Scientist Accelerated Pathway",
    instructor: "Dr. Evelyn Zhang",
    category: "Data Science",
    rating: 4.9,
    students: 31200,
    duration: "48 hours",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    description:
      "Analyze real-world data patterns using core statistical methods, NumPy pipelines, exploratory Pandas modules, and clean graphical plotting.",
    syllabus: [
      {
        id: "ds1",
        title: "Statistical Regression Models & Probability Theory",
      },
      { id: "ds2", title: "Advanced Data Wrangling with Python and Pandas" },
      {
        id: "ds3",
        title: "Predictive Analytics, Feature Scaling, and Deployments",
      },
    ],
  },
  {
    id: "machine-learning-pipelines",
    title: "Machine Learning Engineering and Deep Learning Models",
    instructor: "Liam Alvarez",
    category: "Data Science",
    rating: 4.8,
    students: 22600,
    duration: "38 hours",
    image:
      "https://plus.unsplash.com/premium_photo-1682124651258-410b25fa9dc0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    description:
      "Deploy supervised, unsupervised, and deep artificial neural network clusters across hardware platforms using Scikit-Learn and PyTorch.",
    syllabus: [
      {
        id: "ml1",
        title: "Supervised Models: Decision Trees and Vector Machines",
      },
      {
        id: "ml2",
        title: "Neural Networks Architecture & Backward Propagation",
      },
      {
        id: "ml3",
        title: "Natural Language Processing and Conversational ChatGPT APIs",
      },
    ],
  },
  {
    id: "sql-powerbi-analytics",
    title: "Business Analytics & Intelligence Masterclass (SQL & Power BI)",
    instructor: "Nadia Petrov",
    category: "Data Science",
    rating: 4.6,
    students: 15400,
    duration: "22 hours",
    image:
      "https://images.unsplash.com/photo-1768055104929-cf2317674a80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    description:
      "Write complex SQL relational join queries, create efficient data structures, and build interactive analytical business reporting tools inside Microsoft Power BI.",
    syllabus: [
      {
        id: "ba1",
        title: "Relational Database Schema Queries and Optimization",
      },
      {
        id: "ba2",
        title: "Data Transformation with Microsoft Power Query Core",
      },
      {
        id: "ba3",
        title: "Designing High-Impact Executive Presentation KPI Layouts",
      },
    ],
  },

  // --- CLOUD & IT CERTIFICATIONS ---
  {
    id: "aws-cloud-practitioner",
    title: "AWS Certified Cloud Practitioner Bootcamp",
    instructor: "James Sterling",
    category: "IT Certifications",
    rating: 4.7,
    students: 45000,
    duration: "16 hours",
    image:
      "https://plus.unsplash.com/premium_photo-1733306493254-52b143296396?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    description:
      "Build core technical cloud literacy. Prepare fully for the official Amazon AWS exam blueprint structure.",
    syllabus: [
      {
        id: "aws1",
        title: "Introduction to Global Infrastructure Nodes & IAM Security",
      },
      {
        id: "aws2",
        title: "Elastic Compute Cloud (EC2) & Simple Storage Service (S3)",
      },
      {
        id: "aws3",
        title: "AWS Framework Billing Systems & Shared Responsibility Layers",
      },
    ],
  },
  {
    id: "azure-fundamentals",
    title: "AZ-900: Microsoft Azure Fundamentals Track",
    instructor: "Sarah Jenkins",
    category: "IT Certifications",
    rating: 4.8,
    students: 28900,
    duration: "14 hours",
    image:
      "https://plus.unsplash.com/premium_vector-1721296175362-c52a73ff127b?w=352&dpr=2&h=367&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
    description:
      "Learn foundational core architectural layers, security identity protocols, and cloud resource management configurations with Microsoft Azure.",
    syllabus: [
      { id: "az1", title: "Azure Resource Manager Matrices and Compute Nodes" },
      {
        id: "az2",
        title: "Network Security Groups & Virtual Private Mesh Networks",
      },
      {
        id: "az3",
        title: "Azure Governance, Privacy Controls, and Core Cost Trackers",
      },
    ],
  },
  {
    id: "kubernetes-devops",
    title: "Certified Kubernetes Administrator (CKA) Sandbox Guide",
    instructor: "Devon Cole",
    category: "IT Certifications",
    rating: 4.9,
    students: 19800,
    duration: "30 hours",
    image:
      "https://media.istockphoto.com/id/1303169188/photo/devops-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=85UduCqssTGzMREN1WK6eHP8blWQUs1uEn0X5MKeJt8=",
    description:
      "Configure runtime environments, write declarative YAML manifests, maintain service clusters, and troubleshoot production microservices at scale.",
    syllabus: [
      {
        id: "k81",
        title: "Core Pod Networking Architecture & Controller Configuration",
      },
      {
        id: "k82",
        title: "Persistent Enterprise Ingress Routing & Volume Mounting",
      },
      {
        id: "k83",
        title: "Cluster Monitoring, Component Upgrades, and Health Audits",
      },
    ],
  },

  // --- LEADERSHIP & MANAGEMENT ---
  {
    id: "project-manager-pmp",
    title: "Advanced Project Management Certification (PMP Frameworks)",
    instructor: "Robert Vance",
    category: "Leadership & Management",
    rating: 4.8,
    students: 17300,
    duration: "32 hours",
    image:
      "https://plus.unsplash.com/premium_photo-1725400817468-ddb0135d865d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    description:
      "Master Agile Scrum frameworks, lifecycle budgeting, structural stakeholder risk matrices, and official PMI project execution workflows.",
    syllabus: [
      {
        id: "pm1",
        title: "Project Initialization Frameworks and Scope Boundary Planning",
      },
      {
        id: "pm2",
        title: "Agile Release Planning, Sprint Mechanics, and Standup Routines",
      },
      {
        id: "pm3",
        title:
          "Resource Lifecycle Optimizations, Quality Control, and Closeouts",
      },
    ],
  },
  {
    id: "emotional-intelligence-exec",
    title: "Executive Leadership: Emotional Intelligence & Presentation Skills",
    instructor: "Diana Sterling",
    category: "Leadership & Management",
    rating: 4.9,
    students: 14200,
    duration: "18 hours",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    description:
      "Develop impactful public speaking skills, improve active listening workflows, manage conflict gracefully, and build executive presence for PowerPoint presentations.",
    syllabus: [
      {
        id: "ei1",
        title: "Self-Awareness Models and Structural Conflict De-escalation",
      },
      {
        id: "ei2",
        title: "Designing High-Stakes Public Keynotes & Executive Arguments",
      },
      {
        id: "ei3",
        title: "Persuasive Delivery Systems & Non-Verbal Communication Tracks",
      },
    ],
  },
];

export const categories = [
  "All",
  "Development",
  "Data Science",
  "IT Certifications",
  "Leadership & Management",
];
