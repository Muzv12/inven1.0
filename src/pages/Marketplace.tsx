import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Search, TrendingUp, Shield } from "lucide-react";

export default function Marketplace() {
  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div className="text-center">
          <div className="mx-auto w-16 h-16 bg-gradient-to-r from-dashboard-500 to-dashboard-600 rounded-full flex items-center justify-center mb-4">
            <ShoppingCart className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Marketplace</h1>
          <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
            Discover professional services to grow your business
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
              Our comprehensive marketplace is being developed to help you find
              and purchase business services.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 rounded-lg bg-gray-50">
                <Search className="h-8 w-8 text-dashboard-500 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-900">
                  Service Discovery
                </h3>
                <p className="text-sm text-gray-600">Find the right services</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-gray-50">
                <Shield className="h-8 w-8 text-dashboard-500 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-900">
                  Verified Providers
                </h3>
                <p className="text-sm text-gray-600">
                  Trust and quality assured
                </p>
              </div>
              <div className="text-center p-4 rounded-lg bg-gray-50">
                <TrendingUp className="h-8 w-8 text-dashboard-500 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-900">Market Insights</h3>
                <p className="text-sm text-gray-600">Data-driven decisions</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-gray-50">
                <ShoppingCart className="h-8 w-8 text-dashboard-500 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-900">Easy Ordering</h3>
                <p className="text-sm text-gray-600">Streamlined purchasing</p>
              </div>
            </div>

            <Button className="w-full">Get Notified When Available</Button>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
