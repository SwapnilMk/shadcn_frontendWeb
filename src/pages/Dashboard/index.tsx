"use client";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import WelcomeDialog from "@/components/dialogs/WelcomeDialog";
import MapChart from "@/components/maps/mapChart";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useSidebar } from "@/hooks/use-sidebar";
import { useStore } from "@/hooks/use-store";
import DashboardLayout from "@/layout/DashboardLayout";
import { ResponsiveLine } from "@nivo/line";
import { ActivityIcon, CheckCircleIcon, CreditCardIcon, PlusIcon, User2Icon, UsersIcon, WalletIcon } from 'lucide-react';
import { ClassAttributes, HTMLAttributes } from "react";
import { Link } from 'react-router-dom';
import { JSX } from "react/jsx-runtime";

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
            <CardContent className="h-[calc(500px-4rem)]">
              <MapChart SelectedTab='national' state={null} />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Maharashtra</CardTitle>
            </CardHeader>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 lg:grid-cols-2 p-5">
              {/* Total Members */}
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Total Members</CardTitle>
                  <UsersIcon className="h-6 w-6 text-muted-foreground" /> {/* Icon for Total Members */}
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">5329</div>
                  <p className="text-xs text-muted-foreground">+20.1% from last month</p>
                </CardContent>
              </Card>

              {/* Active Members */}
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Active Members</CardTitle>
                  <ActivityIcon className="h-6 w-6 text-muted-foreground" /> {/* Icon for Active Members */}
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+2350</div>
                  <p className="text-xs text-muted-foreground">+180.1% from last month</p>
                </CardContent>
              </Card>

              {/* New Members This Month */}
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">New Members This Month</CardTitle>
                  <PlusIcon className="h-6 w-6 text-muted-foreground" /> {/* Icon for New Members */}
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+12,234</div>
                  <p className="text-xs text-muted-foreground">+19% from last month</p>
                </CardContent>
              </Card>

              {/* Active Now */}
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Active Now</CardTitle>
                  <User2Icon className="h-6 w-6 text-muted-foreground" /> {/* Icon for Active Now */}
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+573</div>
                  <p className="text-xs text-muted-foreground">+201 since last hour</p>
                </CardContent>
              </Card>
            </div>
          </Card>
          <div>
            <Card>
              <CardHeader className="pb-4">
                <CardTitle className="text-lg font-semibold">Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Transaction Activity */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <CreditCardIcon className="h-5 w-5 text-muted-foreground" /> {/* Icon */}
                      <div>
                        <p className="font-medium">Transaction Successful</p>
                        <p className="text-xs text-muted-foreground">₹2,500 spent on services</p>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground">2 hours ago</p>
                  </div>

                  {/* Wallet Fund Addition */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <WalletIcon className="h-5 w-5 text-muted-foreground" /> {/* Icon */}
                      <div>
                        <p className="font-medium">Wallet Fund Added</p>
                        <p className="text-xs text-muted-foreground">₹5,000 added to wallet</p>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground">4 hours ago</p>
                  </div>

                  {/* Voting Activity */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <CheckCircleIcon className="h-5 w-5 text-muted-foreground" /> {/* Icon */}
                      <div>
                        <p className="font-medium">Voted Successfully</p>
                        <p className="text-xs text-muted-foreground">Participated in policy voting</p>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground">1 day ago</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <Card>
            <CardHeader className="pb-4">
              <CardTitle className="text-lg font-medium">Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <LineChart className="w-full aspect-[4/3]" />
            </CardContent>
          </Card>
        </div>
        <WelcomeDialog />
      </ContentLayout>
    </DashboardLayout>
  );
};

export default DashboardPage;




function LineChart(props: JSX.IntrinsicAttributes & ClassAttributes<HTMLDivElement> & HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props}>
      <ResponsiveLine
        data={[
          {
            id: "Desktop",
            data: [
              { x: "Jan", y: 43 },
              { x: "Feb", y: 137 },
              { x: "Mar", y: 61 },
              { x: "Apr", y: 145 },
              { x: "May", y: 26 },
              { x: "Jun", y: 154 },
            ],
          },
          {
            id: "Mobile",
            data: [
              { x: "Jan", y: 60 },
              { x: "Feb", y: 48 },
              { x: "Mar", y: 177 },
              { x: "Apr", y: 78 },
              { x: "May", y: 96 },
              { x: "Jun", y: 204 },
            ],
          },
        ]}
        margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
        xScale={{
          type: "point",
        }}
        yScale={{
          type: "linear",
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 5,
          tickPadding: 16,
        }}
        colors={["#2563eb", "#e11d48"]}
        pointSize={6}
        useMesh={true}
        gridYValues={6}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        role="application"
      />
    </div>
  )
}