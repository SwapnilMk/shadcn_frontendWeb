import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CreditCard, User, Calendar } from 'lucide-react';

const Dashboard = () => {
    return (
        <Card className="w-full mx-auto  duration-300 bg-white dark:bg-gray-800">
            <CardHeader className="pb-0">
                <CardTitle className="text-2xl font-bold text-gray-900 dark:text-gray-100 flex items-center gap-3">
                    Dashboard
                </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
                <div className="space-y-6 bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-3 sm:space-y-0">
                        <div className="flex items-center space-x-3">
                            <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
                                <User className="w-6 h-6 text-blue-600 dark:text-blue-300" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                                    Swapnil Mahadik
                                </h3>
                                <p className="text-gray-500 dark:text-gray-400 text-sm">
                                    Primary Member
                                </p>
                            </div>
                        </div>
                        <div className="text-right space-y-1">
                            <div className="flex items-center justify-end space-x-2">
                                <Calendar className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                                <p className="text-gray-500 dark:text-gray-400 text-lg">
                                    Valid Upto - 2028-03-26
                                </p>
                            </div>
                            <div className='flex gap-3'>
                                <CreditCard className="w-6 h-6 text-blue-500" />
                                <p className="text-green-600 dark:text-green-400 font-bold text-lg">
                                    ₹--
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default Dashboard;