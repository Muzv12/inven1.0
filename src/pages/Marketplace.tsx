import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  Filter,
  Star,
  Users,
  DollarSign,
  Clock,
  ArrowUpRight,
  Briefcase,
  Building,
  Globe,
} from "lucide-react";

export default function Marketplace() {
  const categories = [
    { name: "All Services", count: 1247, active: true },
    { name: "Legal Services", count: 324, active: false },
    { name: "Accounting", count: 189, active: false },
    { name: "Marketing", count: 267, active: false },
    { name: "Technology", count: 156, active: false },
    { name: "Consulting", count: 311, active: false },
  ];

  const services = [
    {
      id: 1,
      title: "Complete Business Formation Package",
      provider: "LegalPro Solutions",
      rating: 4.9,
      reviews: 324,
      price: "$299",
      category: "Legal Services",
      description:
        "Full business registration, EIN, operating agreement, and compliance setup",
      deliveryTime: "3-5 days",
      featured: true,
      tags: ["LLC", "Corporation", "Partnership"],
    },
    {
      id: 2,
      title: "Monthly Bookkeeping & Tax Preparation",
      provider: "AccountWise",
      rating: 4.8,
      reviews: 189,
      price: "$149",
      category: "Accounting",
      description:
        "Professional bookkeeping, financial statements, and tax preparation services",
      deliveryTime: "Ongoing",
      featured: false,
      tags: ["QuickBooks", "Tax Prep", "Financial Reports"],
    },
    {
      id: 3,
      title: "Digital Marketing Strategy & Implementation",
      provider: "GrowthExperts",
      rating: 4.7,
      reviews: 156,
      price: "$599",
      category: "Marketing",
      description:
        "Comprehensive digital marketing strategy with SEO, PPC, and social media",
      deliveryTime: "2 weeks",
      featured: true,
      tags: ["SEO", "PPC", "Social Media"],
    },
    {
      id: 4,
      title: "Custom Web Application Development",
      provider: "TechBuilders",
      rating: 4.9,
      reviews: 89,
      price: "$2,499",
      category: "Technology",
      description:
        "Custom web application built with modern frameworks and best practices",
      deliveryTime: "4-6 weeks",
      featured: false,
      tags: ["React", "Node.js", "Database"],
    },
    {
      id: 5,
      title: "Business Strategy Consultation",
      provider: "Strategic Minds",
      rating: 4.8,
      reviews: 234,
      price: "$199",
      category: "Consulting",
      description:
        "In-depth business analysis and strategic planning for growth",
      deliveryTime: "1 week",
      featured: false,
      tags: ["Strategy", "Analysis", "Growth"],
    },
    {
      id: 6,
      title: "Intellectual Property Protection",
      provider: "IP Guardians",
      rating: 4.9,
      reviews: 145,
      price: "$399",
      category: "Legal Services",
      description: "Trademark, copyright, and patent protection services",
      deliveryTime: "2-3 weeks",
      featured: true,
      tags: ["Trademark", "Copyright", "Patent"],
    },
  ];

  const stats = [
    { label: "Active Services", value: "1,247", icon: Briefcase },
    { label: "Trusted Providers", value: "342", icon: Users },
    { label: "Avg. Rating", value: "4.8", icon: Star },
    { label: "Countries", value: "15", icon: Globe },
  ];

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Marketplace</h1>
          <p className="mt-2 text-gray-600">
            Discover professional services to grow your business
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.label} className="dashboard-card">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <Icon className="h-8 w-8 text-dashboard-500" />
                    <div>
                      <p className="text-2xl font-bold text-gray-900">
                        {stat.value}
                      </p>
                      <p className="text-sm text-gray-600">{stat.label}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Search and Filters */}
        <Card className="dashboard-card">
          <CardContent className="p-6">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input placeholder="Search for services..." className="pl-10" />
              </div>
              <Button variant="outline" className="lg:w-auto">
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Categories Sidebar */}
          <div className="lg:col-span-1">
            <Card className="dashboard-card">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">
                  Categories
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-1">
                  {categories.map((category) => (
                    <button
                      key={category.name}
                      className={`w-full px-6 py-3 text-left hover:bg-gray-50 flex items-center justify-between ${
                        category.active
                          ? "bg-dashboard-50 border-r-2 border-dashboard-500"
                          : ""
                      }`}
                    >
                      <span
                        className={`text-sm font-medium ${
                          category.active
                            ? "text-dashboard-700"
                            : "text-gray-700"
                        }`}
                      >
                        {category.name}
                      </span>
                      <span className="text-xs text-gray-500">
                        ({category.count})
                      </span>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Services Grid */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service) => (
                <Card
                  key={service.id}
                  className={`dashboard-card hover:shadow-dashboard-lg transition-all duration-200 ${
                    service.featured ? "ring-2 ring-dashboard-200" : ""
                  }`}
                >
                  {service.featured && (
                    <div className="bg-gradient-to-r from-dashboard-500 to-dashboard-600 text-white text-xs font-semibold px-3 py-1 rounded-t-lg">
                      Featured Service
                    </div>
                  )}
                  <CardHeader className={service.featured ? "pt-4" : ""}>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-lg font-semibold text-gray-900 line-clamp-2">
                          {service.title}
                        </CardTitle>
                        <p className="text-sm text-gray-600 mt-1">
                          {service.provider}
                        </p>
                      </div>
                      <Button variant="ghost" size="sm">
                        <ArrowUpRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                      {service.description}
                    </p>

                    <div className="flex items-center space-x-4 mb-4">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium">
                          {service.rating}
                        </span>
                        <span className="text-sm text-gray-500">
                          ({service.reviews})
                        </span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4 text-gray-400" />
                        <span className="text-sm text-gray-600">
                          {service.deliveryTime}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1">
                        <DollarSign className="h-4 w-4 text-green-600" />
                        <span className="text-xl font-bold text-gray-900">
                          {service.price}
                        </span>
                      </div>
                      <Button size="sm">View Details</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="mt-8 text-center">
              <Button variant="outline" size="lg">
                Load More Services
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
