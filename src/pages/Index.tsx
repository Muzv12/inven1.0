import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  TrendingUp,
  TrendingDown,
  Users,
  DollarSign,
  ShoppingCart,
  FileText,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";

export default function Index() {
  const metrics = [
    {
      title: "Total Revenue",
      value: "$124,532",
      change: "+12.5%",
      trend: "up",
      icon: DollarSign,
      color: "text-green-600",
    },
    {
      title: "Active Clients",
      value: "2,847",
      change: "+8.2%",
      trend: "up",
      icon: Users,
      color: "text-blue-600",
    },
    {
      title: "Pending Orders",
      value: "156",
      change: "-3.1%",
      trend: "down",
      icon: ShoppingCart,
      color: "text-orange-600",
    },
    {
      title: "Documents",
      value: "3,241",
      change: "+15.8%",
      trend: "up",
      icon: FileText,
      color: "text-purple-600",
    },
  ];

  const recentActivities = [
    {
      action: "New client registration",
      time: "2 minutes ago",
      status: "success",
    },
    {
      action: "Invoice #INV-2024-001 generated",
      time: "5 minutes ago",
      status: "info",
    },
    {
      action: "Payment received from Client ABC",
      time: "10 minutes ago",
      status: "success",
    },
    {
      action: "Document review required",
      time: "15 minutes ago",
      status: "warning",
    },
    {
      action: "Formation application submitted",
      time: "1 hour ago",
      status: "info",
    },
  ];

  const upcomingTasks = [
    { task: "Review Q4 financial reports", due: "Today", priority: "high" },
    { task: "Client onboarding call", due: "Tomorrow", priority: "medium" },
    { task: "Update formation documents", due: "Dec 15", priority: "low" },
    { task: "Academy content review", due: "Dec 18", priority: "medium" },
  ];

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="mt-2 text-gray-600">
            Welcome back! Here's what's happening with your business today.
          </p>
        </div>

        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {metrics.map((metric) => {
            const Icon = metric.icon;
            return (
              <Card key={metric.title} className="dashboard-card">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600">
                    {metric.title}
                  </CardTitle>
                  <Icon className={`h-5 w-5 ${metric.color}`} />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-gray-900">
                    {metric.value}
                  </div>
                  <div className="flex items-center space-x-1 mt-1">
                    {metric.trend === "up" ? (
                      <ArrowUpRight className="h-4 w-4 text-green-500" />
                    ) : (
                      <ArrowDownRight className="h-4 w-4 text-red-500" />
                    )}
                    <span
                      className={`text-sm ${
                        metric.trend === "up"
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {metric.change}
                    </span>
                    <span className="text-sm text-gray-500">
                      from last month
                    </span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Dashboard Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Activities */}
          <Card className="dashboard-card lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-gray-900">
                Recent Activities
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div
                      className={`w-2 h-2 rounded-full ${
                        activity.status === "success"
                          ? "bg-green-500"
                          : activity.status === "warning"
                            ? "bg-yellow-500"
                            : "bg-blue-500"
                      }`}
                    />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">
                        {activity.action}
                      </p>
                      <p className="text-xs text-gray-500">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4">
                View All Activities
              </Button>
            </CardContent>
          </Card>

          {/* Upcoming Tasks */}
          <Card className="dashboard-card">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-gray-900">
                Upcoming Tasks
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {upcomingTasks.map((task, index) => (
                  <div
                    key={index}
                    className="p-3 rounded-lg border border-gray-100"
                  >
                    <p className="text-sm font-medium text-gray-900">
                      {task.task}
                    </p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-xs text-gray-500">{task.due}</span>
                      <span
                        className={`px-2 py-1 text-xs rounded-full ${
                          task.priority === "high"
                            ? "bg-red-100 text-red-700"
                            : task.priority === "medium"
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-green-100 text-green-700"
                        }`}
                      >
                        {task.priority}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4">
                View All Tasks
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="dashboard-card">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-gray-900">
              Quick Actions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button className="h-20 flex flex-col items-center justify-center space-y-2">
                <Users className="h-6 w-6" />
                <span className="text-sm">Add Client</span>
              </Button>
              <Button
                variant="outline"
                className="h-20 flex flex-col items-center justify-center space-y-2"
              >
                <FileText className="h-6 w-6" />
                <span className="text-sm">Generate Invoice</span>
              </Button>
              <Button
                variant="outline"
                className="h-20 flex flex-col items-center justify-center space-y-2"
              >
                <ShoppingCart className="h-6 w-6" />
                <span className="text-sm">New Order</span>
              </Button>
              <Button
                variant="outline"
                className="h-20 flex flex-col items-center justify-center space-y-2"
              >
                <TrendingUp className="h-6 w-6" />
                <span className="text-sm">View Reports</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Progress Overview */}
        <Card className="dashboard-card">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-gray-900">
              Monthly Progress
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">
                    Revenue Goal
                  </span>
                  <span className="text-sm text-gray-500">
                    $124,532 / $150,000
                  </span>
                </div>
                <Progress value={83} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">
                    Client Acquisition
                  </span>
                  <span className="text-sm text-gray-500">2,847 / 3,000</span>
                </div>
                <Progress value={95} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">
                    Document Processing
                  </span>
                  <span className="text-sm text-gray-500">3,241 / 4,000</span>
                </div>
                <Progress value={81} className="h-2" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
