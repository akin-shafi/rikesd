import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  features: string[];
  image: string;
  link?: string;
  category: string;
}

function ProjectCard({
  title,
  description,
  features,
  image,
  link,
  category,
}: ProjectCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all">
      <div className="relative h-48 bg-gray-100">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 text-xs font-medium bg-green-500 text-white rounded-full">
            {category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="mb-6">
          <h4 className="text-sm font-medium text-gray-900 mb-2">
            Key Features:
          </h4>
          <ul className="space-y-1">
            {features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start text-sm text-gray-600"
              >
                <svg
                  className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        </div>
        {link && (
          <Link
            href={link}
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-green-600 border border-green-600 rounded-md hover:bg-green-50 transition-colors"
          >
            Learn More
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        )}
      </div>
    </div>
  );
}

export default function ProjectShowcase() {
  const projects = [
    {
      title: "Skillnovate",
      category: "Education",
      description:
        "An upskilling and reskilling platform designed for professionals seeking career growth through both online and physical training sessions.",
      features: [
        "Online and physical training sessions",
        "Administrative and technical courses",
        "Career advancement programs",
        "Professional certification",
      ],
      image: "/placeholder.svg?height=200&width=400",
      link: "#skillnovate",
    },
    {
      title: "KEIA",
      category: "Incubation",
      description:
        "Knowledge Enterprise for Incubation and Acceleration supports startups with promising products through structured programs.",
      features: [
        "Structured incubation programs",
        "Product refinement guidance",
        "Investor connections",
        "Marketplace access",
      ],
      image: "/placeholder.svg?height=200&width=400",
      link: "https://startup-accelerator-five.vercel.app",
    },
    {
      title: "Rike Marketplace",
      category: "Knowledge",
      description:
        "A Knowledge-as-a-Service platform for buying and selling research outputs, partnered with AroFarmer Initiative.",
      features: [
        "Research output marketplace",
        "Knowledge-as-a-Service platform",
        "Partnership integrations",
        "Research commercialization",
      ],
      image: "/placeholder.svg?height=200&width=400",
      link: "#rike-marketplace",
    },
    {
      title: "AroFarmer",
      category: "Agriculture",
      description:
        "A tech-driven urban agriculture platform transforming underutilized urban spaces into productive micro-farms.",
      features: [
        "Urban space transformation",
        "Landowner-grower matching",
        "Income generation for space owners",
        "Community-driven farming",
      ],
      image: "/placeholder.svg?height=200&width=400",
      link: "https://arofarmer.vercel.app",
    },
    {
      title: "Pach Africa",
      category: "Environment",
      description:
        "Pan-African Circular Hotspot promoting carbon emission reduction and access to carbon credits through green initiatives.",
      features: [
        "Waste for Meal Program",
        "Campus Free Waste Initiative",
        "Carbon credit access",
        "University collaborations",
      ],
      image: "/placeholder.svg?height=200&width=400",
      link: "#patch-africa",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container px-4 mx-auto max-w-6xl">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold">
            Our <span className="green-gradient-text">Project Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600">
            Discover the diverse range of initiatives under RIKESD, each
            operating in different ecosystems to create meaningful impact across
            various sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        <div className="text-center">
          <Link
            href="#all-projects"
            className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-green-500 rounded-md hover:bg-green-600 transition-colors"
          >
            Explore All Projects
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
