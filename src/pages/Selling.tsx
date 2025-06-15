import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Store, DollarSign, Users, BarChart3 } from "lucide-react";

export default function Selling() {
  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div className="text-center">
          <div className="mx-auto w-16 h-16 bg-gradient-to-r from-dashboard-500 to-dashboard-600 rounded-full flex items-center justify-center mb-4">
            <Store className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Selling Hub</h1>
          <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
            List and sell your business assets, services, and opportunities to
            qualified buyers.
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
              Our powerful selling platform is being built to help you reach the
              right buyers and maximize your returns.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 rounded-lg bg-gray-50">
                <Store className="h-8 w-8 text-dashboard-500 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-900">Easy Listings</h3>
                <p className="text-sm text-gray-600">
                  Create professional listings
                </p>
              </div>
              <div className="text-center p-4 rounded-lg bg-gray-50">
                <Users className="h-8 w-8 text-dashboard-500 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-900">
                  Qualified Buyers
                </h3>
                <p className="text-sm text-gray-600">Reach serious buyers</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-gray-50">
                <BarChart3 className="h-8 w-8 text-dashboard-500 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-900">Analytics</h3>
                <p className="text-sm text-gray-600">Track performance</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-gray-50">
                <DollarSign className="h-8 w-8 text-dashboard-500 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-900">Pricing Tools</h3>
                <p className="text-sm text-gray-600">Optimize your pricing</p>
              </div>
            </div>

            <Button className="w-full">Get Notified When Available</Button>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
