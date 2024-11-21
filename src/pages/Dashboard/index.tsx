"use client";
import { ContentLayout } from "@/components/dashboard/content-layout";
import Dashboard from "@/components/dashboard/dashboard";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

// India GeoJSON data (simplified for this example)
const INDIA_TOPO_JSON = 'https://raw.githubusercontent.com/udit-001/india-maps-data/refs/heads/main/topojson/india.json';

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

    const handleStateClick = (geo: { properties: { ST_NM: string } }) => {
        setSelectedState(geo.properties.ST_NM);
    };

    return (
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
                            {selectedState ? `Selected State: ${selectedState}` : 'India States Map'}
                        </CardTitle>
                        <Tabs defaultValue="account" className="w-[400px]">
                            <TabsList className="grid w-full grid-cols-2">
                                <TabsTrigger value="account">District</TabsTrigger>
                                <TabsTrigger value="password">National</TabsTrigger>
                            </TabsList>
                        </Tabs>
                    </CardHeader>
                    <CardContent className="h-[400px]">
                        <ComposableMap
                            projection="geoMercator"
                            projectionConfig={{
                                scale: 1000,
                                center: [78.9629, 22.5937] // Center of India
                            }}
                            className="w-full h-full"
                        >
                            <Geographies geography={INDIA_TOPO_JSON}>
                                {({ geographies }) =>
                                    geographies.map((geo: { rsmKey: string; properties: { ST_NM: string } }) => (
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
                </Card>

                {/* Graph Card */}
                <Card className="w-full h-[500px]">
                    <CardHeader>
                        <CardTitle>
                            {selectedState ? `${selectedState} Performance` : 'Performance Graph'}
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="h-[400px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart
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
                            </LineChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>
            </div>
        </ContentLayout>
    );
}