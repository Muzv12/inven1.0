import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, BookOpen, Video, Award } from "lucide-react";

export default function Academy() {
  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div className="text-center">
          <div className="mx-auto w-16 h-16 bg-gradient-to-r from-dashboard-500 to-dashboard-600 rounded-full flex items-center justify-center mb-4">
            <GraduationCap className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Business Academy</h1>
          <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
            Comprehensive business education platform with courses, workshops,
            and expert guidance for entrepreneurs.
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
              Our comprehensive learning platform is being developed to provide
              world-class business education.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 rounded-lg bg-gray-50">
                <BookOpen className="h-8 w-8 text-dashboard-500 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-900">Online Courses</h3>
                <p className="text-sm text-gray-600">
                  Self-paced learning modules
                </p>
              </div>
              <div className="text-center p-4 rounded-lg bg-gray-50">
                <Video className="h-8 w-8 text-dashboard-500 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-900">Live Workshops</h3>
                <p className="text-sm text-gray-600">
                  Interactive expert sessions
                </p>
              </div>
              <div className="text-center p-4 rounded-lg bg-gray-50">
                <Award className="h-8 w-8 text-dashboard-500 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-900">Certifications</h3>
                <p className="text-sm text-gray-600">
                  Industry-recognized credentials
                </p>
              </div>
              <div className="text-center p-4 rounded-lg bg-gray-50">
                <GraduationCap className="h-8 w-8 text-dashboard-500 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-900">Mentorship</h3>
                <p className="text-sm text-gray-600">
                  One-on-one expert guidance
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
