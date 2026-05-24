// src/data/ideas.js

const ideas = [
  {
    id: 1,
    name: "Devilfruit API",
    status: "Planning",
    description:
      "A backend API inspired by One Piece that generates unique Devil Fruits with abilities, rarity, weaknesses, and lore.",
    goals: [
      "Learn REST API development",
      "Practice PostgreSQL",
      "Implement JWT authentication",
      "Build procedural generation systems",
      "Create scalable backend architecture",
    ],
    tech: [
      "Node.js",
      "Express",
      "PostgreSQL",
      "JWT",
      "Docker",
      "Redis",
    ],
    futureFeatures: [
      "AI-generated lore",
      "Image generation",
      "Fruit awakening system",
      "User collections",
      "Battle simulator",
    ],
  },

  {
    id: 2,
    name: "Woolborn",
    status: "In Development",
    description:
      "A dark fantasy RPG experience where players create characters and progress through story-driven adventures with visual AI-generated scenes.",
    goals: [
      "Build advanced backend systems",
      "Create persistent world states",
      "Develop RPG mechanics",
      "Design scalable story architecture",
      "Prepare for future mobile app",
    ],
    tech: [
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "Redis",
      "Socket.IO",
      "Docker",
    ],
    futureFeatures: [
      "AI-generated story scenes",
      "Visual image generation",
      "Inventory system",
      "Combat engine",
      "Character progression",
      "Multiplayer campaigns",
    ],
  },

  {
    id: 3,
    name: "Woolborn Microservices",
    status: "Future Project",
    description:
      "A scalable microservice architecture for the Woolborn universe with distributed services and AI integrations.",
    goals: [
      "Learn microservices",
      "Understand distributed systems",
      "Implement queues and events",
      "Improve scalability",
      "Practice DevOps workflows",
    ],
    tech: [
      "Docker",
      "RabbitMQ",
      "Redis",
      "PostgreSQL",
      "Node.js",
      "NGINX",
    ],
    services: [
      "Auth Service",
      "Character Service",
      "Story Service",
      "Combat Service",
      "Inventory Service",
      "AI Image Service",
    ],
    futureFeatures: [
      "Event-driven architecture",
      "Cloud deployment",
      "Real-time updates",
      "Analytics",
      "Scalable AI generation",
    ],
  },
];

export default ideas;