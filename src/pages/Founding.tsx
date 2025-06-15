import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Rocket, FileText, Users, DollarSign } from "lucide-react";

export default function Founding() {
  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div className="text-center">
          <div className="mx-auto w-16 h-16 bg-gradient-to-r from-dashboard-500 to-dashboard-600 rounded-full flex items-center justify-center mb-4">
            <Rocket className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900">
            Business Founding
          </h1>
          <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
            Your complete guide to starting and launching a successful business.
            From initial concept to legal formation.
          </p>
        </div>

        {/* Coming Soon Card */}
        <Card className="dashboard-card max-w-2xl mx-auto">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-semibold text-gray-900">
              Coming Soon
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-6">
            <p className="text-gray-600">
              We're building comprehensive founding resources to help you launch
              your business successfully.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 rounded-lg bg-gray-50">
                <FileText className="h-8 w-8 text-dashboard-500 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-900">Documentation</h3>
                <p className="text-sm text-gray-600">
                  Business plans & legal docs
                </p>
              </div>
              <div className="text-center p-4 rounded-lg bg-gray-50">
                <Users className="h-8 w-8 text-dashboard-500 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-900">Team Building</h3>
                <p className="text-sm text-gray-600">
                  Find co-founders & employees
                </p>
              </div>
              <div className="text-center p-4 rounded-lg bg-gray-50">
                <DollarSign className="h-8 w-8 text-dashboard-500 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-900">Funding</h3>
                <p className="text-sm text-gray-600">
                  Investment & grant opportunities
                </p>
              </div>
              <div className="text-center p-4 rounded-lg bg-gray-50">
                <Rocket className="h-8 w-8 text-dashboard-500 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-900">Launch</h3>
                <p className="text-sm text-gray-600">Go-to-market strategies</p>
              </div>
            </div>

            <Button className="w-full">Get Notified When Available</Button>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
