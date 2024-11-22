"use client";
import IndiaTopoJSON from '@/assets/maps/india.json';
import MaharashtraTopoJSON from '@/assets/maps/maharashtra.json';
import { ContentLayout } from "@/components/dashboard/content-layout";
import Dashboard from "@/components/dashboard/dashboard";
import { Sidebar } from "@/components/dashboard/sidebar";
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
import { useState } from 'react';
import { Link } from "react-router-dom";
import {
    ComposableMap,
    Geographies,
    Geography
} from 'react-simple-maps';
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

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

// Sample data for line chart 
const sampleData = [
    { name: 'Jan', value: 400 },
    { name: 'Feb', value: 300 },
    { name: 'Mar', value: 200 },
    { name: 'Apr', value: 278 },
    { name: 'May', value: 189 },
    { name: 'Jun', value: 239 }
];

export default function DashboardPage() {
    const [selectedState, setSelectedState] = useState<string | null>(null);

    const handleStateClick = (geo: GeographyData) => {
        setSelectedState(geo.properties.ST_NM);
    };

    return (
        <>
            <Sidebar />
            <ContentLayout title="Dashboard">
                <div className="mb-4">
                    <Dashboard />
                </div>
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
                <div className="grid grid-cols-1 my-3 md:grid-cols-2 gap-4 w-full">
                    {/* Map Card */}
                    <Card className="w-full h-[500px]">
                        <CardHeader>
                            <CardTitle>
                                {/* {selectedState ? `Selected State: ${selectedState}` : 'India States Map'} */}
                            </CardTitle>
                            <Tabs defaultValue="state" className>
                                <TabsList className="grid w-full grid-cols-2">
                                    <TabsTrigger value="state">State</TabsTrigger>
                                    <TabsTrigger value="national">National</TabsTrigger>
                                </TabsList>
                                <TabsContent value="state">
                                    <CardContent className="">
                                        <ComposableMap
                                            projection="geoMercator"
                                            projectionConfig={{
                                                scale: 4500,
                                                center: [76.9629, 18.5937]
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
                                <TabsContent value="national">
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

                    {/* Graph Card */}
                    <Card className="w-full h-[500px]">
                        <CardHeader>
                            <CardTitle>
                                {/* {selectedState ? `${selectedState} Performance` : 'Performance Graph'} */}
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="h-[400px]">
                            {/* <ResponsiveContainer width="100%" height="100%"> */}
                                {/* <LineChart
                                    data={sampleData}
                                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                                >
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Line
                                        type="monotone"
                                        dataKey="value"
                                        stroke="#8884d8"
                                        activeDot={{ r: 8 }}
                                    />
                                </LineChart> */}
                            {/* </ResponsiveContainer> */}
                        </CardContent>
                    </Card>
                </div>
            </ContentLayout>
        </>
    );
}