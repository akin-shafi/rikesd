"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import {
  ArrowLeft,
  Share2,
  ExternalLink,
  MapPin,
  Calendar,
  Award,
  Users,
  BookOpen,
  TrendingUp,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { usePartners } from "@/hooks/usePartners";
import AchievementCard from "@/components/achievement-card";
import type { Partner } from "@/hooks/usePartners";

const partnerTypes = [
  { id: "all", name: "All Partners", icon: Users },
  { id: "university", name: "Universities", icon: BookOpen },
  { id: "research_institute", name: "Research Institutes", icon: Award },
  { id: "government", name: "Government", icon: TrendingUp },
  { id: "private", name: "Private Sector", icon: Users },
  { id: "ngo", name: "NGOs", icon: Users },
] as const;

export default function PartnersPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const {
    partners,
    loading,
    error,
    getPartnerById,
    getPartnersByType,
    getActiveProjects,
    getCompletedProjects,
    getTotalStats,
  } = usePartners();

  const [selectedType, setSelectedType] = useState<
    | "all"
    | "university"
    | "research_institute"
    | "government"
    | "private"
    | "ngo"
  >("all");
  const [selectedPartnerId, setSelectedPartnerId] = useState<string | null>(
    null
  );
  const [isMobile, setIsMobile] = useState(false);
  const [expandedAccordion, setExpandedAccordion] = useState<string | null>(
    null
  );

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Handle URL parameters
  useEffect(() => {
    const partnerId = searchParams.get("partner");
    const type = searchParams.get("type") as typeof selectedType;

    if (
      type &&
      [
        "all",
        "university",
        "research_institute",
        "government",
        "private",
        "ngo",
      ].includes(type)
    ) {
      setSelectedType(type);
    }

    if (partnerId && partners.length > 0) {
      const partner = getPartnerById(partnerId);
      if (partner) {
        setSelectedPartnerId(partnerId);
        if (isMobile) {
          setExpandedAccordion(partnerId);
        }
      }
    } else if (partners.length > 0 && !isMobile) {
      // Auto-select first partner on desktop if none selected
      const filteredPartners =
        selectedType === "all" ? partners : getPartnersByType(selectedType);
      if (filteredPartners.length > 0) {
        setSelectedPartnerId(filteredPartners[0].id);
        updateURL(selectedType, filteredPartners[0].id);
      }
    }
  }, [
    searchParams,
    partners,
    selectedType,
    isMobile,
    getPartnerById,
    getPartnersByType,
  ]);

  const updateURL = (type: string, partnerId?: string) => {
    const params = new URLSearchParams();
    if (type !== "all") params.set("type", type);
    if (partnerId) params.set("partner", partnerId);

    const newURL = params.toString()
      ? `/partners?${params.toString()}`
      : "/partners";
    router.replace(newURL, { scroll: false });
  };

  const handleTypeChange = (type: typeof selectedType) => {
    setSelectedType(type);
    const filteredPartners =
      type === "all" ? partners : getPartnersByType(type);

    if (!isMobile && filteredPartners.length > 0) {
      setSelectedPartnerId(filteredPartners[0].id);
      updateURL(type, filteredPartners[0].id);
    } else {
      setSelectedPartnerId(null);
      updateURL(type);
    }
  };

  const handlePartnerSelect = (partnerId: string) => {
    if (isMobile) {
      setExpandedAccordion(expandedAccordion === partnerId ? null : partnerId);
    } else {
      setSelectedPartnerId(partnerId);
      updateURL(selectedType, partnerId);
    }
  };

  const handleShare = async (partner: Partner) => {
    const shareUrl = `${window.location.origin}/partners?partner=${partner.id}&type=${selectedType}`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: `${partner.name} - RIKESD Partner`,
          text: `Learn about our partnership with ${partner.name}`,
          url: shareUrl,
        });
      } catch (err) {
        // Fallback to clipboard
        copyToClipboard(shareUrl);
      }
    } else {
      copyToClipboard(shareUrl);
    }
  };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      // You could add a toast notification here
      alert("Link copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading partners...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  const filteredPartners =
    selectedType === "all" ? partners : getPartnersByType(selectedType);
  const selectedPartner = selectedPartnerId
    ? getPartnerById(selectedPartnerId)
    : null;
  const activeProjects = getActiveProjects();
  const completedProjects = getCompletedProjects();
  const totalStats = getTotalStats();

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-content border-b border-gray-200 ">
        <div className="container px-6 mx-auto max-w-7xl py-8">
          <div className="flex items-center gap-4 mb-6">
            <Link
              href="/"
              className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
            </Link>
          </div>

          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-green-500">Strategic Partners</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Collaborating with leading Nigerian universities and institutions
              to drive research innovation and create impactful solutions across
              various sectors and disciplines.
            </p>
          </div>

          {/* Partnership Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 max-w-4xl mx-auto">
            <AchievementCard value={partners.length} label="Active Partners" />
            <AchievementCard
              value={activeProjects.length}
              label="Ongoing Projects"
            />
            <AchievementCard
              value={completedProjects.length}
              label="Completed Projects"
            />
            <AchievementCard
              value={totalStats.totalPublications}
              label="Joint Publications"
            />
          </div>

          {/* Partner Type Tabs */}
          <div className="flex overflow-x-auto scrollbar-hide border-b border-gray-200">
            {partnerTypes.map((type) => {
              const IconComponent = type.icon;
              const count =
                type.id === "all"
                  ? partners.length
                  : getPartnersByType(type.id as any).length;
              return (
                <button
                  key={type.id}
                  onClick={() => handleTypeChange(type.id as any)}
                  className={`flex items-center gap-2 px-6 py-3 font-medium border-b-2 transition-colors whitespace-nowrap ${
                    selectedType === type.id
                      ? "border-green-500 text-green-600 bg-green-50"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  <span>{type.name}</span>
                  <span className="px-2 py-1 text-xs bg-gray-200 text-gray-600 rounded-full">
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container px-6 mx-auto max-w-7xl py-8">
        {filteredPartners.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              No partners found in this category.
            </p>
          </div>
        ) : (
          <>
            {/* Desktop Layout */}
            <div className="hidden lg:flex gap-8">
              {/* Left Sidebar - Partner List */}
              <div className="w-1/3 bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="p-4 border-b border-gray-200">
                  <h3 className="font-semibold text-gray-900">
                    {partnerTypes.find((t) => t.id === selectedType)?.name} (
                    {filteredPartners.length})
                  </h3>
                </div>
                <div className="max-h-[600px] overflow-y-auto">
                  {filteredPartners.map((partner) => (
                    <button
                      key={partner.id}
                      onClick={() => handlePartnerSelect(partner.id)}
                      className={`w-full p-4 text-left border-b border-gray-100 hover:bg-gray-50 transition-colors ${
                        selectedPartnerId === partner.id
                          ? "bg-green-50 border-l-4 border-l-green-500"
                          : ""
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 flex-shrink-0">
                          {partner.logo &&
                          partner.logo !==
                            "/placeholder.svg?height=120&width=120" ? (
                            <img
                              src={partner.logo || "/placeholder.svg"}
                              alt={`${partner.name} logo`}
                              className="w-10 h-10 object-contain rounded"
                            />
                          ) : (
                            <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded flex items-center justify-center">
                              <span className="text-sm font-bold text-white">
                                {partner.name
                                  .split(" ")
                                  .map((word) => word.charAt(0))
                                  .join("")
                                  .toUpperCase()
                                  .slice(0, 2)}
                              </span>
                            </div>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-gray-900 truncate">
                            {partner.name}
                          </h4>
                          <p className="text-sm text-gray-600 truncate">
                            {partner.location.city}, {partner.location.state}
                          </p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Right Content - Partner Details */}
              <div className="flex-1">
                {selectedPartner ? (
                  <PartnerDetailView
                    partner={selectedPartner}
                    onShare={handleShare}
                  />
                ) : (
                  <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
                    <p className="text-gray-600">
                      Select a partner to view details
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Layout - Accordion */}
            <div className="lg:hidden space-y-4">
              {filteredPartners.map((partner) => (
                <div
                  key={partner.id}
                  className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
                >
                  <button
                    onClick={() => handlePartnerSelect(partner.id)}
                    className="w-full p-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 flex-shrink-0">
                        {partner.logo &&
                        partner.logo !==
                          "/placeholder.svg?height=120&width=120" ? (
                          <img
                            src={partner.logo || "/placeholder.svg"}
                            alt={`${partner.name} logo`}
                            className="w-12 h-12 object-contain rounded"
                          />
                        ) : (
                          <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded flex items-center justify-center">
                            <span className="text-lg font-bold text-white">
                              {partner.name
                                .split(" ")
                                .map((word) => word.charAt(0))
                                .join("")
                                .toUpperCase()
                                .slice(0, 2)}
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-gray-900">
                          {partner.name}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {partner.location.city}, {partner.location.state}
                        </p>
                      </div>
                    </div>
                    {expandedAccordion === partner.id ? (
                      <ChevronUp className="w-5 h-5 text-gray-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    )}
                  </button>

                  {expandedAccordion === partner.id && (
                    <div className="border-t border-gray-200 p-4 animate-in slide-in-from-top-2 duration-300">
                      <PartnerDetailView
                        partner={partner}
                        onShare={handleShare}
                        compact
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-green-500 to-green-600 py-16">
        <div className="container px-6 mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Become a Partner
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Join our network of leading institutions and organizations.
            Together, we can create innovative solutions that transform
            communities and drive sustainable development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#partnership-inquiry"
              className="px-8 py-3 bg-white text-green-600 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Partnership Inquiry
            </Link>
            <Link
              href="#contact"
              className="px-8 py-3 border-2 border-white text-white rounded-lg font-medium hover:bg-white hover:text-green-600 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

interface PartnerDetailViewProps {
  partner: Partner;
  onShare: (partner: Partner) => void;
  compact?: boolean;
}

function PartnerDetailView({
  partner,
  onShare,
  compact = false,
}: PartnerDetailViewProps) {
  const getTypeColor = (type: Partner["type"]) => {
    switch (type) {
      case "university":
        return "bg-blue-100 text-blue-800";
      case "research_institute":
        return "bg-purple-100 text-purple-800";
      case "government":
        return "bg-green-100 text-green-800";
      case "private":
        return "bg-orange-100 text-orange-800";
      case "ngo":
        return "bg-pink-100 text-pink-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getTypeLabel = (type: Partner["type"]) => {
    switch (type) {
      case "university":
        return "University";
      case "research_institute":
        return "Research Institute";
      case "government":
        return "Government";
      case "private":
        return "Private Sector";
      case "ngo":
        return "NGO";
      default:
        return "Partner";
    }
  };

  const activeProjects = partner.projects.filter((p) => p.status === "active");
  const completedProjects = partner.projects.filter(
    (p) => p.status === "completed"
  );

  return (
    <div
      className={`bg-white rounded-lg shadow-sm border border-gray-200 ${
        compact ? "" : "h-fit"
      }`}
    >
      {/* Header */}
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 flex-shrink-0">
              {partner.logo &&
              partner.logo !== "/placeholder.svg?height=120&width=120" ? (
                <img
                  src={partner.logo || "/placeholder.svg"}
                  alt={`${partner.name} logo`}
                  className="w-16 h-16 object-contain rounded-lg"
                />
              ) : (
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">
                    {partner.name
                      .split(" ")
                      .map((word) => word.charAt(0))
                      .join("")
                      .toUpperCase()
                      .slice(0, 2)}
                  </span>
                </div>
              )}
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {partner.name}
              </h2>
              <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  {partner.location.city}, {partner.location.state},{" "}
                  {partner.location.country}
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  Since {partner.partnershipSince}
                </div>
              </div>
              <span
                className={`inline-block px-3 py-1 text-sm font-medium rounded-full ${getTypeColor(
                  partner.type
                )}`}
              >
                {getTypeLabel(partner.type)}
              </span>
            </div>
          </div>
          <button
            onClick={() => onShare(partner)}
            className="p-2 text-gray-400 hover:text-green-600 transition-colors"
            title="Share partner"
          >
            <Share2 className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-6">
        <div>
          <h3 className="font-semibold text-gray-900 mb-2">About</h3>
          <p className="text-gray-600">{partner.description}</p>
        </div>

        {/* Stats */}
        {partner.stats && (
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Statistics</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600">
                  {partner.stats.students?.toLocaleString()}
                </div>
                <div className="text-sm text-gray-600">Students</div>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">
                  {partner.stats.faculty}
                </div>
                <div className="text-sm text-gray-600">Faculty</div>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-purple-600">
                  {partner.stats.publications}
                </div>
                <div className="text-sm text-gray-600">Publications</div>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-orange-600">
                  {partner.stats.patents}
                </div>
                <div className="text-sm text-gray-600">Patents</div>
              </div>
            </div>
          </div>
        )}

        {/* Projects */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-gray-900">Projects</h3>
            <div className="flex gap-2">
              {activeProjects.length > 0 && (
                <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                  {activeProjects.length} Active
                </span>
              )}
              {completedProjects.length > 0 && (
                <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">
                  {completedProjects.length} Completed
                </span>
              )}
            </div>
          </div>

          <div className="space-y-4">
            {partner.projects.map((project) => (
              <div key={project.id} className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-gray-900">{project.name}</h4>
                  <span
                    className={`px-2 py-1 text-xs font-medium rounded-full ${
                      project.status === "active"
                        ? "bg-green-100 text-green-800"
                        : project.status === "completed"
                        ? "bg-gray-100 text-gray-800"
                        : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  {project.description}
                </p>

                {project.budget && (
                  <div className="text-sm text-gray-600 mb-2">
                    <strong>Budget:</strong> {project.budget}
                  </div>
                )}

                <div className="mb-3">
                  <h5 className="text-sm font-medium text-gray-900 mb-1">
                    Key Outcomes:
                  </h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {project.outcomes
                      .slice(0, compact ? 2 : undefined)
                      .map((outcome, index) => (
                        <li key={index} className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          {outcome}
                        </li>
                      ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies
                    .slice(0, compact ? 3 : undefined)
                    .map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-xs font-medium bg-purple-100 text-purple-800 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Research Areas */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-3">Research Areas</h3>
          <div className="flex flex-wrap gap-2">
            {partner.researchAreas.map((area, index) => (
              <span
                key={index}
                className="px-3 py-1 text-sm font-medium bg-blue-100 text-blue-800 rounded-full"
              >
                {area}
              </span>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-3">Key Achievements</h3>
          <ul className="space-y-2">
            {partner.achievements
              .slice(0, compact ? 3 : undefined)
              .map((achievement, index) => (
                <li
                  key={index}
                  className="flex items-start text-sm text-gray-600"
                >
                  <Award className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  {achievement}
                </li>
              ))}
          </ul>
        </div>

        {/* Contact Information */}
        {partner.contactPerson && (
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">
              Contact Information
            </h3>
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="font-medium text-gray-900">
                {partner.contactPerson.name}
              </div>
              <div className="text-sm text-gray-600">
                {partner.contactPerson.title}
              </div>
              <div className="text-sm text-gray-600">
                {partner.contactPerson.email}
              </div>
              {partner.contactPerson.phone && (
                <div className="text-sm text-gray-600">
                  {partner.contactPerson.phone}
                </div>
              )}
            </div>
          </div>
        )}

        {/* External Links */}
        {partner.website && (
          <div className="flex gap-3">
            <Link
              href={partner.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-green-600 border border-green-600 rounded-md hover:bg-green-50 transition-colors"
            >
              Visit Website
              <ExternalLink className="w-4 h-4 ml-2" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
