import { ContentLayout } from '@/components/admin-panel/content-layout';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import DashboardLayout from '@/layout/DashboardLayout';
import { CreditCardIcon, DollarSignIcon, ShoppingCartIcon, WalletIcon } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const WalletPage = () => {
    const navigate = useNavigate()

    return (
        <main className="flex-1 p-6">
            <DashboardLayout>
                <ContentLayout title="Dashboard">
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link to="/">Dashboard</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Profile</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                    <div className="grid gap-6 mt-3">
                        <Card>
                            <CardHeader>
                                <CardTitle>Balance</CardTitle>
                            </CardHeader>
                            <CardContent className="flex items-center justify-between">
                                <div className="text-4xl font-bold">Rs 5,234.56</div>
                                <div className='flex gap-3'>
                                    <Button onClick={() => navigate('/dashboard/withdraw')} variant="outline" size="sm">
                                        Withdraw
                                    </Button>
                                    <Button onClick={() => navigate('/dashboard/add-fund')} variant="outline" size="sm">
                                        Add Fund
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Recent Transactions</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
                                                    <ShoppingCartIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                                                </div>
                                                <div>
                                                    <div className="font-medium">Contribution</div>
                                                    <div className="text-sm text-gray-500 dark:text-gray-400">May 12, 2023</div>
                                                </div>
                                            </div>
                                            <div className="text-gray-900 dark:text-gray-50">- Rs 5.00</div>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
                                                    <WalletIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                                                </div>
                                                <div>
                                                    <div className="font-medium">Deposit</div>
                                                    <div className="text-sm text-gray-500 dark:text-gray-400">May 10, 2023</div>
                                                </div>
                                            </div>
                                            <div className="text-green-500">+ Rs 5.00</div>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
                                                    <DollarSignIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                                                </div>
                                                <div>
                                                    <div className="font-medium">Payment</div>
                                                    <div className="text-sm text-gray-500 dark:text-gray-400">May 1, 2023</div>
                                                </div>
                                            </div>
                                            <div className="text-gray-900 dark:text-gray-50">- Rs 1.00</div>
                                        </div>
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Link to="/dashboard/transaction" className="text-sm font-medium text-blue-600 hover:underline">
                                        View all transactions
                                    </Link>
                                </CardFooter>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle>Payment Methods</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
                                                    <CreditCardIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                                                </div>
                                                <div>
                                                    <div className="font-medium">Visa Debit Card</div>
                                                    <div className="text-sm text-gray-500 dark:text-gray-400">Ending in 1234</div>
                                                </div>
                                            </div>
                                            <Button variant="outline" size="sm">
                                                Edit
                                            </Button>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
                                                    <WalletIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                                                </div>
                                                <div>
                                                    <div className="font-medium">Apple Pay</div>
                                                    <div className="text-sm text-gray-500 dark:text-gray-400">Connected</div>
                                                </div>
                                            </div>
                                            <Button variant="outline" size="sm">
                                                Edit
                                            </Button>
                                        </div>
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Link to="#" className="text-sm font-medium text-blue-600 hover:underline">
                                        Add new payment method
                                    </Link>
                                </CardFooter>
                            </Card>
                        </div>
                    </div>
                </ContentLayout>
            </DashboardLayout>
        </main>
    )
}
export default WalletPage;