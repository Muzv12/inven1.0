import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Shield, Globe, Users } from "lucide-react";

export default function Formations() {
  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div className="text-center">
          <div className="mx-auto w-16 h-16 bg-gradient-to-r from-dashboard-500 to-dashboard-600 rounded-full flex items-center justify-center mb-4">
            <FileText className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900">
            Business Formations
          </h1>
          <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
            Complete business entity formation services including LLCs,
            corporations, partnerships, and more.
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
              Professional business formation services are being prepared to
              help you establish your legal entity.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 rounded-lg bg-gray-50">
                <Shield className="h-8 w-8 text-dashboard-500 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-900">LLC Formation</h3>
                <p className="text-sm text-gray-600">
                  Limited liability protection
                </p>
              </div>
              <div className="text-center p-4 rounded-lg bg-gray-50">
                <Globe className="h-8 w-8 text-dashboard-500 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-900">
                  Corporation Setup
                </h3>
                <p className="text-sm text-gray-600">C-Corp & S-Corp options</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-gray-50">
                <Users className="h-8 w-8 text-dashboard-500 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-900">Partnerships</h3>
                <p className="text-sm text-gray-600">
                  General & limited partnerships
                </p>
              </div>
              <div className="text-center p-4 rounded-lg bg-gray-50">
                <FileText className="h-8 w-8 text-dashboard-500 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-900">Documentation</h3>
                <p className="text-sm text-gray-600">
                  Operating agreements & bylaws
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
