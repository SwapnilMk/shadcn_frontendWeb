import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
    Calendar,
    CircleFadingArrowUp,
    LogOut,
    UserRoundPen,
    Users,
    Vote,
    Wallet,
} from "lucide-react";
import { FaDonate } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const DashboardHeader = () => {
    const navigate = useNavigate()
    return (
        <Card className="w-full mb-6 border-0">
            <CardContent className="p-5">
                {/* Header Section */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
                    <div className="space-y-2">
                        <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                            Dashboard
                        </h1>
                        <div className="text-lg text-gray-600">
                            Welcome back, <span className="font-medium">Swapnil</span>!
                        </div>
                    </div>

                    <div>
                        <div className="text-center ml-28 text-2xl font-bold text-gray-600">
                            Community Contribution
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <Card className="bg-white/80 backdrop-blur-sm border border-gray-100 rounded-lg shadow-sm hover:shadow transition-all duration-200">
                            <CardContent className="flex items-center gap-3 p-3">
                                <Wallet className="h-5 w-5 text-gray-700" />
                                <span className="text-sm font-medium text-gray-700">
                                    Balance
                                </span>
                                <Badge
                                    variant="secondary"
                                    className="bg-green-50 text-green-700 font-medium"
                                >
                                    ₹-229
                                </Badge>
                            </CardContent>
                        </Card>
                        <Button
                            variant="outline"
                            size="icon"
                            className="h-12 w-12 rounded-lg border-gray-200 hover:bg-gray-100 hover:border-gray-300 transition-all duration-200"
                        >
                            <LogOut className="h-5 w-5 text-gray-700" />
                        </Button>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    {/* Left Section */}
                    <div className="space-y-1">
                        <div className="flex items-center gap-3">
                            <span className="text-xl font-semibold text-gray-800">
                                Swapnil Kishor Mahadik
                            </span>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8 rounded-full hover:bg-gray-100"
                            >
                                <UserRoundPen className="h-4 w-4 text-gray-600" />
                            </Button>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-lg font-medium text-gray-600">Primary Member</span>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8 rounded-full hover:bg-gray-100"
                            >
                                <CircleFadingArrowUp className="h-4 w-4 text-gray-600" />
                            </Button>
                        </div>
                    </div>

                    {/* Center Section */}
                    <div className="flex gap-3">
                        <Button
                            variant="default"
                            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
                            onClick={() => navigate('/dashboard/donate')}
                        >
                            <FaDonate /> Donate
                        </Button>
                        <Button
                            variant="default"
                            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
                            onClick={() => navigate('/dashboard/votes')}
                        >
                            <Vote /> Votes
                        </Button>
                    </div>

                    {/* Right Section */}
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <div className="flex items-center gap-3 text-gray-600 hover:text-gray-800 transition-colors duration-200">
                                <Users className="h-4 w-4" />
                                <span className="text-sm font-medium">Membership No: 001</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-600 hover:text-gray-800 transition-colors duration-200">
                                <Calendar className="h-4 w-4" />
                                <span className="text-sm font-medium">Valid until: Mar 26, 2028</span>
                            </div>
                        </div>
                        <Badge
                            variant="outline"
                            className="text-sm px-4 py-1 border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                        >
                            0 Referrals
                        </Badge>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default DashboardHeader;