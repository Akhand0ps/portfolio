export const portfolioData = {
  // Personal information
  personal: {
    name: 'Akhand Pratap Singh',
    role: 'Software Development Engineer (Backend-Leaning)',
    tagline: 'Building reliable systems with a focus on data integrity, API design, and operational clarity',
    github: 'Akhand0ps',
    email: 'akhandps041@gmail.com',
    linkedin: 'akhand-pratap-singh-286770275/',
    x: 'https://x.com/akhand_06x',
  },

  // Engineering summary
  summary: [
  'I focus on building backend systems that prioritize data consistency, explicit API contracts, and correct state transitions. Through a production-style e-commerce backend, I have designed data models for products, variants, carts, and orders that reflect real-world constraints such as stock limits and order immutability.',
  'While working on inventory and order flows, I encountered and fixed consistency issues such as race conditions during order placement, which shaped how I think about failure modes, edge cases, and predictable behavior in backend services.',
  'I value explicit error handling, strong input validation, structured logging, and tests that cover both happy paths and edge cases, prioritizing clarity and correctness over clever abstractions.',
],

  // Technical skills organized by domain
 skills: {
  backend: ['Node.js', 'Express.js', 'TypeScript', 'REST APIs'],
  databases: ['MongoDB', 'PostgreSQL', 'SQL fundamentals', 'Schema design'],
  apis: [
    'JWT authentication',
    'Role-based access control',
    'Input validation',
    'WebSocket'
  ],
  devops: ['Docker (basics)', 'Git', 'Linux fundamentals', 'AWS basics'],
  frontend: ['React', 'Tailwind CSS'],
},



  // Projects with backend focus
 projects: [
  {
    title: 'Shoe E-commerce Backend',
    problem: 'Building a reliable backend for handling carts, orders, inventory, and authentication with correct state transitions',
    backend: [
      'Designed schemas for products, variants (SKU-based), carts, and orders with real-world constraints like stock limits and order immutability',
      'Implemented order placement flow with inventory updates and fixed race conditions during concurrent order requests',
      'Built REST APIs with role-based access control, input validation using Zod, and consistent error handling',
    ],
    techStack: ['Node.js', 'Express.js', 'TypeScript', 'MongoDB'],
    github: 'https://github.com/Akhand0ps/shoesite-server',
  },
  {
    title: 'SIH Test Management Platform',
    problem: 'Need for a backend system to manage test data, submissions, and evaluations for a competition-style workflow',
    backend: [
      'Designed REST APIs to handle test creation, submissions, and result evaluation',
      'Implemented authentication and authorization to restrict access to protected routes',
      'Focused on predictable request-response behavior and validation to avoid inconsistent application state',
    ],
    techStack: ['Node.js', 'Express.js', 'MongoDB'],
    github: 'https://github.com/Akhand0ps/SIH_tests',
  },
  {
    title: 'Pet Donation Platform Backend',
    problem: 'Supporting a donation-driven application with user actions, listings, and backend data integrity',
    backend: [
      'Built backend APIs to support donation flows and pet listings with proper request validation',
      'Designed MongoDB schemas reflecting relationships between users, pets, and donation records',
      'Handled edge cases and error scenarios to ensure stable backend behavior',
    ],
    techStack: ['Node.js', 'Express.js', 'MongoDB'],
    github: 'https://github.com/Akhand0ps/pet-donation-app',
  },
  {
    title: 'auto-cors-lite (NPM Package)',
    problem: 'Simplifying CORS configuration in Express applications with minimal setup',
    backend: [
      'Built a lightweight Express middleware to automatically configure CORS headers',
      'Designed the package API to be minimal, predictable, and easy to integrate',
      'Published and maintained the package with proper versioning and documentation',
    ],
    techStack: ['Node.js', 'JavaScript'],
    github: 'https://github.com/Akhand0ps/auto-cors-lite',
  },
  {
    title: 'WebSocket Experiments',
    problem: 'Understanding real-time communication patterns beyond traditional request-response APIs',
    backend: [
      'Implemented basic WebSocket server-client communication for real-time message exchange',
      'Explored connection lifecycle management and message handling',
      'Used the project as a learning ground for real-time backend concepts',
    ],
    techStack: ['Node.js', 'WebSocket'],
    github: 'https://github.com/Akhand0ps/WebSocket-xp',
  },
],


  // Experience and learning
  experience: [
  {
    type: 'Project',
    title: 'Backend Projects (Production-style)',
    organization: 'Self-directed',
    period: '2024 - Present',
    description: 'Built and maintained multiple backend projects including an e-commerce system, test management platform, and REST APIs with focus on data consistency, schema design, authentication, and handling edge cases such as race conditions.',
  },
  {
    type: 'Open Source',
    title: 'NPM Package Author',
    organization: 'auto-cors-lite',
    period: '2024',
    description: 'Designed and published a lightweight Express middleware to simplify CORS configuration, focusing on clean API design, documentation, and ease of integration.',
  },
  {
    type: 'Learning',
    title: 'Backend & Systems Foundations',
    organization: 'Self-directed',
    period: '2023 - Present',
    description: 'Studying backend engineering fundamentals including API design, database modeling, authentication flows, and real-time communication using WebSockets, with learning driven by hands-on projects.',
  },
],


  // Engineering principles (optional section)
  principles: [
  'Prefer explicit error handling and clear failure signals over silent failures',
  'Design APIs around clear contracts and caller expectations, not internal convenience',
  'Test boundary conditions, invalid inputs, and failure modes in addition to happy paths',
  'Optimize for readability and correctness first, and performance only when measured and justified',
],

};
