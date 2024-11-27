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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useSidebar } from "@/hooks/use-sidebar";
import { useStore } from "@/hooks/use-store";
import DashboardLayout from "@/layout/DashboardLayout";
import { useState } from "react";
import { Link } from 'react-router-dom';
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import IndiaTopoJSON from '@/assets/maps/india.json';
import MaharashtraTopoJSON from '@/assets/maps/maharashtra.json';
import WelcomeDialog from "@/components/dialogs/WelcomeDialog";


// Define types for the geography data
interface GeographyDataProperties {
  ST_NM: string;
  [key: string]: any;  // for any other properties that might exist
}

interface GeographyData {
  rsmKey: string;
  properties: GeographyDataProperties;
  geometry: any;  // You can define a more specific type if needed
}


export default function DashboardPage() {

  const [selectedState, setSelectedState] = useState<string | null>(null);

  const handleStateClick = (geo: GeographyData) => {
    setSelectedState(geo.properties.ST_NM);
  };

  const sidebar = useStore(useSidebar, (x) => x);
  if (!sidebar) return null;
  // const { settings, setSettings } = sidebar;
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
          {/* Map Card */}
          <Card className="w-full h-[500px]">
            <CardHeader>
              <CardTitle>
                {/* {selectedState ? `Selected State: ${selectedState}` : 'India States Map'} */}
              </CardTitle>
              <Tabs defaultValue="state">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="national">National</TabsTrigger>
                  <TabsTrigger value="state">State</TabsTrigger>
                </TabsList>
                <TabsContent value="national">
                  <CardContent className="">
                    <ComposableMap
                      projection="geoMercator"
                      projectionConfig={{
                        scale: 1000,
                        center: [76.9629, 10.5937]
                      }}
                      className="w-full h-full"
                    >
                      <Geographies geography={MaharashtraTopoJSON}>
                        {({ geographies }) =>
                          geographies.map((geo: GeographyData) => (
                            <Geography
                              key={geo.rsmKey}
                              geography={geo}
                              onClick={() => handleStateClick(geo)}
                              className="cursor-pointer"
                              style={{
                                default: {
                                  fill: selectedState === geo.properties.ST_NM
                                    ? "#F53"
                                    : "#D6D6DA",
                                  outline: "none"
                                },
                                hover: {
                                  fill: "#F53",
                                  outline: "none"
                                },
                                pressed: {
                                  fill: "#E42",
                                  outline: "none"
                                }
                              }}
                            />
                          ))
                        }
                      </Geographies>
                    </ComposableMap>
                  </CardContent>
                </TabsContent>
                <TabsContent value="state">
                  <CardContent className="h-[400px]">
                    <ComposableMap
                      projection="geoMercator"
                      projectionConfig={{
                        scale: 1000,
                        center: [78.9629, 22.5937]
                      }}
                      className="w-full h-full"
                    >
                      <Geographies geography={IndiaTopoJSON}>
                        {({ geographies }) =>
                          geographies.map((geo: GeographyData) => (
                            <Geography
                              key={geo.rsmKey}
                              geography={geo}
                              onClick={() => handleStateClick(geo)}
                              className="cursor-pointer"
                              style={{
                                default: {
                                  fill: selectedState === geo.properties.ST_NM
                                    ? "#F53"
                                    : "#D6D6DA",
                                  outline: "none"
                                },
                                hover: {
                                  fill: "#F53",
                                  outline: "none"
                                },
                                pressed: {
                                  fill: "#E42",
                                  outline: "none"
                                }
                              }}
                            />
                          ))
                        }
                      </Geographies>
                    </ComposableMap>
                  </CardContent>
                </TabsContent>
              </Tabs>
            </CardHeader>
          </Card>
          <Card className="w-full h-[500px]">
            
          </Card>
          <WelcomeDialog />
        </div>
      </ContentLayout>
    </DashboardLayout>
  );
}
