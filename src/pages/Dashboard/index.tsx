"use client";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import { Card, CardContent } from "@/components/ui/card";
import { useSidebar } from "@/hooks/use-sidebar";
import { useStore } from "@/hooks/use-store";
import DashboardLayout from "@/layout/DashboardLayout";
import { Link } from 'react-router-dom';
import WelcomeDialog from "@/components/dialogs/WelcomeDialog";
import MapChart from "@/components/maps/mapChart";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

const DashboardPage: React.FC = () => {
  const sidebar = useStore(useSidebar, (x) => x);

  if (!sidebar) return null;

  return (
    <DashboardLayout>
      <ContentLayout title="Dashboard">
        <DashboardHeader />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Dashboard</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="grid grid-cols-2 my-3 gap-4 w-full">
          <Card className="w-full h-[500px] p-4">
            <Tabs defaultValue="state">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="state">State</TabsTrigger>
                <TabsTrigger value="national">National</TabsTrigger>
              </TabsList>
              <CardContent className="h-[calc(500px-4rem)]">
                <TabsContent value="state">
                  <MapChart SelectedTab='state' state='maharashtra' dist='raigarh' />
                </TabsContent>
                <TabsContent value="national">
                  <MapChart SelectedTab='national' state={null} />
                </TabsContent>
              </CardContent>
            </Tabs>
          </Card>
          <Card className="w-full h-[500px]">
          </Card>
          <WelcomeDialog />
        </div>
      </ContentLayout>
    </DashboardLayout>
  );
};

export default DashboardPage;