import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Search,
  ChevronDown,
  Edit,
  Download,
  MoreHorizontal,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";

export default function Buying() {
  const [selectedFilters, setSelectedFilters] = useState({
    availableForSale: true,
    onMarketListings: true,
    offMarketListings: false,
  });

  const filterCategories = [
    { name: "Company Name", hasRemove: true },
    { name: "Size", hasRemove: false },
    { name: "Ownership", hasRemove: true },
    { name: "Keywords", hasRemove: true },
    { name: "Headquarters", hasRemove: true },
    { name: "Growth", hasRemove: true },
    { name: "People", hasRemove: false },
    { name: "Founded M&A", hasRemove: true },
    { name: "Operating Location", hasRemove: false },
    { name: "Search within saved lists", hasRemove: false },
  ];

  const tableData = [
    {
      id: 1,
      user: { name: "Marincusanu", avatar: "M", color: "bg-gray-600" },
      status: "Active",
      statusColor: "bg-green-500",
      companyName: "Administrator",
      permissions: "Administrator",
      email: "info@yourdomai.com",
      keywords: "Marketing",
    },
    {
      id: 2,
      user: { name: "Vanessa Yates", avatar: "VY", color: "bg-orange-500" },
      status: "Active",
      statusColor: "bg-green-500",
      companyName: "Human resources",
      permissions: "Human resources",
      email: "tyam@gmail.com",
      keywords: "Marketing",
    },
    {
      id: 3,
      user: { name: "Christian Chang", avatar: "CC", color: "bg-blue-500" },
      status: "Pending",
      statusColor: "bg-orange-500",
      companyName: "Product Designer",
      permissions: "Product Designer",
      email: "c.chang@gmail.com",
      keywords: "Marketing",
    },
    {
      id: 4,
      user: { name: "Kate Smit", avatar: "KS", color: "bg-gray-600" },
      status: "Active",
      statusColor: "bg-green-500",
      companyName: "UI Designer",
      permissions: "UI Designer",
      email: "i.smith@gmail.com",
      keywords: "Marketing",
    },
    {
      id: 5,
      user: { name: "Lucille Bunkton", avatar: "LB", color: "bg-gray-600" },
      status: "Pending",
      statusColor: "bg-orange-500",
      companyName: "UX Designer",
      permissions: "UX Designer",
      email: "l.bunkton@gmail.com",
      keywords: "Marketing",
    },
    {
      id: 6,
      user: { name: "Maria Lara", avatar: "ML", color: "bg-blue-500" },
      status: "Active",
      statusColor: "bg-green-500",
      companyName: "Accounting",
      permissions: "Accounting",
      email: "m.lara@gmail.com",
      keywords: "Marketing",
    },
    {
      id: 7,
      user: { name: "Simona Stangar", avatar: "SS", color: "bg-blue-500" },
      status: "Active",
      statusColor: "bg-green-500",
      companyName: "Devops",
      permissions: "Devops",
      email: "s.stangar@gmail.com",
      keywords: "Marketing",
    },
    {
      id: 8,
      user: { name: "Jessica Galley", avatar: "JG", color: "bg-orange-500" },
      status: "Inactive",
      statusColor: "bg-red-500",
      companyName: "Backend",
      permissions: "Backend",
      email: "j.galley@gmail.com",
      keywords: "Marketing",
    },
    {
      id: 9,
      user: { name: "Arnoldi Warren", avatar: "AW", color: "bg-orange-500" },
      status: "Active",
      statusColor: "bg-green-500",
      companyName: "Sales manager",
      permissions: "Sales manager",
      email: "a.warren@gmail.com",
      keywords: "Marketing",
    },
    {
      id: 10,
      user: { name: "Arnoldi Warren", avatar: "AW", color: "bg-orange-500" },
      status: "Active",
      statusColor: "bg-green-500",
      companyName: "Sales manager",
      permissions: "Sales manager",
      email: "a.warren@gmail.com",
      keywords: "Marketing",
    },
  ];

  return (
    <Layout>
      <div className="space-y-4">
        {/* Selection Buttons */}
        <div className="flex flex-wrap gap-2">
          <Button
            variant="outline"
            size="sm"
            className="bg-blue-600 text-white border-blue-600 hover:bg-blue-700"
          >
            Brick-and-Mortar Business
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="text-gray-600 hover:text-gray-900 hover:bg-gray-50"
          >
            Digital Businesses
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="text-gray-600 hover:text-gray-900 hover:bg-gray-50"
          >
            Franchises
          </Button>
        </div>

        {/* Filter Chips */}
        <div className="flex flex-wrap gap-2 mb-4">
          <Badge
            variant="secondary"
            className="bg-gray-900 text-white hover:bg-gray-800"
          >
            Available for sale
          </Badge>
          <Badge
            variant="secondary"
            className="bg-blue-600 text-white hover:bg-blue-700"
          >
            On Market listings
          </Badge>
          <Badge variant="outline" className="text-gray-600">
            Off-Market listings
          </Badge>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Filters</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {filterCategories.map((category, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0"
                  >
                    <span className="text-sm text-gray-700">
                      {category.name}
                    </span>
                    {category.hasRemove && (
                      <button className="text-gray-400 hover:text-gray-600">
                        <X className="h-4 w-4" />
                      </button>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Table Content */}
          <div className="lg:col-span-3">
            <Card className="bg-white">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-gray-600">
                      Export <ChevronDown className="inline h-4 w-4 ml-1" />
                    </span>
                    <span className="text-sm text-gray-600">
                      Create alert{" "}
                      <ChevronDown className="inline h-4 w-4 ml-1" />
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                    <Button variant="outline" size="sm">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {/* Table */}
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">
                          User <ChevronDown className="inline h-4 w-4 ml-1" />
                        </th>
                        <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">
                          Status <ChevronDown className="inline h-4 w-4 ml-1" />
                        </th>
                        <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">
                          Company Name{" "}
                          <ChevronDown className="inline h-4 w-4 ml-1" />
                        </th>
                        <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">
                          Permissions{" "}
                          <ChevronDown className="inline h-4 w-4 ml-1" />
                        </th>
                        <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">
                          Permissions{" "}
                          <ChevronDown className="inline h-4 w-4 ml-1" />
                        </th>
                        <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">
                          Email <ChevronDown className="inline h-4 w-4 ml-1" />
                        </th>
                        <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">
                          Keywords{" "}
                          <ChevronDown className="inline h-4 w-4 ml-1" />
                        </th>
                        <th className="py-3 px-4"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {tableData.map((row) => (
                        <tr
                          key={row.id}
                          className="border-b border-gray-100 hover:bg-gray-50"
                        >
                          <td className="py-3 px-4">
                            <div className="flex items-center space-x-3">
                              <div
                                className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-medium ${row.user.color}`}
                              >
                                {row.user.avatar}
                              </div>
                              <span className="text-sm font-medium text-gray-900">
                                {row.user.name}
                              </span>
                            </div>
                          </td>
                          <td className="py-3 px-4">
                            <div className="flex items-center space-x-2">
                              <div
                                className={`w-2 h-2 rounded-full ${row.statusColor}`}
                              ></div>
                              <span className="text-sm text-gray-700">
                                {row.status}
                              </span>
                            </div>
                          </td>
                          <td className="py-3 px-4">
                            <span className="text-sm text-gray-900">
                              {row.companyName}
                            </span>
                          </td>
                          <td className="py-3 px-4">
                            <span className="text-sm text-gray-700">
                              {row.permissions}
                            </span>
                          </td>
                          <td className="py-3 px-4">
                            <span className="text-sm text-gray-700">
                              {row.permissions}
                            </span>
                          </td>
                          <td className="py-3 px-4">
                            <span className="text-sm text-blue-600 hover:text-blue-800 cursor-pointer">
                              {row.email}
                            </span>
                          </td>
                          <td className="py-3 px-4">
                            <span className="text-sm text-gray-700">
                              {row.keywords}
                            </span>
                          </td>
                          <td className="py-3 px-4">
                            <Button variant="ghost" size="sm">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Pagination */}
                <div className="flex items-center justify-between mt-6">
                  <Button variant="outline" size="sm">
                    <ChevronLeft className="h-4 w-4 mr-1" />
                    Previous
                  </Button>
                  <div className="flex items-center space-x-1">
                    <Button variant="outline" size="sm" className="w-8 h-8 p-0">
                      1
                    </Button>
                    <Button variant="outline" size="sm" className="w-8 h-8 p-0">
                      2
                    </Button>
                    <Button
                      variant="default"
                      size="sm"
                      className="w-8 h-8 p-0 bg-blue-600"
                    >
                      3
                    </Button>
                    <Button variant="outline" size="sm" className="w-8 h-8 p-0">
                      4
                    </Button>
                    <span className="px-2 text-sm text-gray-500">...</span>
                    <Button variant="outline" size="sm" className="w-8 h-8 p-0">
                      13
                    </Button>
                    <Button variant="outline" size="sm" className="w-8 h-8 p-0">
                      14
                    </Button>
                  </div>
                  <Button variant="outline" size="sm">
                    Next
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>

                {/* Bottom Actions */}
                <div className="flex justify-end mt-4">
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    Talk to Alisha
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}
