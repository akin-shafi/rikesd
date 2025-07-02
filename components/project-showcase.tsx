"use client";

import { useState } from "react";
import { Calendar, Users } from "lucide-react";
import ProjectModal from "./project-modal";

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  category: string;
  status: string;
  progress: number;
  team: string[];
  technologies: string[];
  startDate: string;
  endDate?: string;
  budget?: string;
  impact?: string;
  achievements?: string[];
  links?: {
    demo?: string;
    github?: string;
    documentation?: string;
  };
}

const projects: Project[] = [
  {
    id: "arofarmer",
    title: "AroFarmer",
    description:
      "Digital platform connecting farmers with agricultural resources and market opportunities.",
    longDescription:
      "AroFarmer is a comprehensive digital platform designed to revolutionize agricultural practices by connecting farmers with essential resources, market opportunities, and expert knowledge. The platform provides real-time market prices, weather forecasts, crop management tools, and direct access to buyers and suppliers.",
    image: "/placeholder.svg?height=300&width=400",
    category: "AgTech",
    status: "Active",
    progress: 75,
    team: ["Dr. Sarah Johnson", "Michael Chen", "Aisha Patel", "James Wilson"],
    technologies: ["React", "Node.js", "MongoDB", "React Native", "AWS"],
    startDate: "2024-01-15",
    budget: "$150,000",
    impact: "500+ farmers onboarded, 25% increase in crop yields",
    achievements: [
      "Successfully onboarded 500+ farmers across 3 regions",
      "Achieved 25% average increase in crop yields",
      "Reduced post-harvest losses by 30%",
      "Created direct market linkages for 200+ farmers",
    ],
    links: {
      demo: "https://arofarmer-demo.com",
      github: "https://github.com/rikesd/arofarmer",
      documentation: "https://docs.arofarmer.com",
    },
  },
  {
    id: "healthtrack",
    title: "HealthTrack",
    description:
      "AI-powered health monitoring system for rural communities with limited healthcare access.",
    longDescription:
      "HealthTrack leverages artificial intelligence and mobile technology to provide comprehensive health monitoring solutions for underserved rural communities. The system includes symptom tracking, medication reminders, telemedicine capabilities, and emergency response features.",
    image: "/placeholder.svg?height=300&width=400",
    category: "HealthTech",
    status: "Active",
    progress: 60,
    team: [
      "Dr. Emily Rodriguez",
      "David Kim",
      "Fatima Al-Zahra",
      "Robert Taylor",
    ],
    technologies: [
      "Python",
      "TensorFlow",
      "Flutter",
      "Firebase",
      "Google Cloud",
    ],
    startDate: "2024-03-01",
    budget: "$200,000",
    impact: "1000+ patients monitored, 40% reduction in emergency visits",
    achievements: [
      "Deployed in 5 rural health centers",
      "Monitored 1000+ patients remotely",
      "Reduced emergency hospital visits by 40%",
      "Trained 50+ community health workers",
    ],
    links: {
      demo: "https://healthtrack-demo.com",
      documentation: "https://docs.healthtrack.com",
    },
  },
  {
    id: "educonnect",
    title: "EduConnect",
    description:
      "Online learning platform bridging educational gaps in remote areas through interactive content.",
    longDescription:
      "EduConnect is an innovative online learning platform specifically designed to address educational challenges in remote and underserved areas. The platform offers interactive content, virtual classrooms, offline capabilities, and personalized learning paths to ensure quality education reaches every student.",
    image: "/placeholder.svg?height=300&width=400",
    category: "EdTech",
    status: "Completed",
    progress: 100,
    team: [
      "Prof. Maria Santos",
      "Alex Thompson",
      "Priya Sharma",
      "Omar Hassan",
    ],
    technologies: ["Vue.js", "Django", "PostgreSQL", "WebRTC", "Docker"],
    startDate: "2023-06-01",
    endDate: "2024-02-28",
    budget: "$120,000",
    impact: "2000+ students enrolled, 85% completion rate",
    achievements: [
      "Successfully enrolled 2000+ students",
      "Achieved 85% course completion rate",
      "Deployed in 15 remote schools",
      "Trained 100+ teachers on digital pedagogy",
      "Won 'Best EdTech Innovation' award 2024",
    ],
    links: {
      demo: "https://educonnect-demo.com",
      github: "https://github.com/rikesd/educonnect",
    },
  },
];

export default function ProjectShowcase() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 bg-white/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-green-500">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our innovative projects that are making a real difference
            in communities across Africa and beyond.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 left-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      project.status === "Active"
                        ? "bg-green-500 text-white"
                        : project.status === "Completed"
                        ? "bg-blue-500 text-white"
                        : "bg-yellow-500 text-white"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                    {project.category}
                  </span>
                  <span className="text-sm font-medium text-green-600">
                    {project.progress}%
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    <span>{project.team.length} members</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{new Date(project.startDate).getFullYear()}</span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-green-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          project={selectedProject}
        />
      )}
    </section>
  );
}
