import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calculator, TrendingUp, FileText, PieChart } from "lucide-react";

export default function Bookkeeping() {
  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div className="text-center">
          <div className="mx-auto w-16 h-16 bg-gradient-to-r from-dashboard-500 to-dashboard-600 rounded-full flex items-center justify-center mb-4">
            <Calculator className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900">
            Bookkeeping & Finance
          </h1>
          <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
            Professional financial management tools and services to keep your
            business finances organized and compliant.
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
              Advanced bookkeeping features are being developed to streamline
              your financial operations.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 rounded-lg bg-gray-50">
                <TrendingUp className="h-8 w-8 text-dashboard-500 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-900">
                  Financial Reports
                </h3>
                <p className="text-sm text-gray-600">
                  P&L, balance sheets & more
                </p>
              </div>
              <div className="text-center p-4 rounded-lg bg-gray-50">
                <FileText className="h-8 w-8 text-dashboard-500 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-900">
                  Invoice Management
                </h3>
                <p className="text-sm text-gray-600">Create & track invoices</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-gray-50">
                <PieChart className="h-8 w-8 text-dashboard-500 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-900">
                  Expense Tracking
                </h3>
                <p className="text-sm text-gray-600">
                  Categorize & monitor spending
                </p>
              </div>
              <div className="text-center p-4 rounded-lg bg-gray-50">
                <Calculator className="h-8 w-8 text-dashboard-500 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-900">Tax Preparation</h3>
                <p className="text-sm text-gray-600">
                  Automated tax calculations
                </p>
              </div>
            </div>

            <Button className="w-full">Get Notified When Available</Button>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
