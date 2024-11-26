import React, { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { FilterIcon, ListOrderedIcon } from 'lucide-react'

import { ContentLayout } from '@/components/admin-panel/content-layout'
import { Badge } from '@/components/ui/badge'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import DashboardLayout from '@/layout/DashboardLayout'

interface Transaction {
    id: number;
    date: string;
    description: string;
    amount: number;
    status: 'Pending' | 'Completed';
}

const Transactions: React.FC = () => {
    const initialTransactions: Transaction[] = [
        {
            id: 1,
            date: "2023-06-01",
            description: "Voting",
            amount: -1200,
            status: "Completed",
        },
        {
            id: 2,
            date: "2023-06-05",
            description: "Upgrade Membership",
            amount: -150.25,
            status: "Completed",
        },
        {
            id: 3,
            date: "2023-06-10",
            description: "Voting Received",
            amount: 3500,
            status: "Completed",
        },
        {
            id: 5,
            date: "2023-06-20",
            description: "Online Purchase",
            amount: -75.5,
            status: "Completed",
        },
        {
            id: 6,
            date: "2023-06-25",
            description: "Subscription Renewal",
            amount: -9.99,
            status: "Completed",
        },
    ];

    const [transactions] = useState<Transaction[]>(initialTransactions);

    // Use string literal union type instead of const assertion
    type SortByType = 'date' | 'description' | 'amount' | 'status';
    type SortOrderType = 'asc' | 'desc';

    const [sortBy, setSortBy] = useState<SortByType>('date');
    const [sortOrder, setSortOrder] = useState<SortOrderType>('asc');
    const [filterStatus, setFilterStatus] = useState<'all' | Transaction['status']>('all');

    const filteredTransactions = useMemo(() => {
        let filtered = [...transactions];
        
        // Filter by status
        if (filterStatus !== 'all') {
            filtered = filtered.filter((tx) => tx.status === filterStatus);
        }

        // Sort transactions
        filtered.sort((a, b) => {
            // Numeric comparison for amount
            if (sortBy === 'amount') {
                return sortOrder === 'asc' 
                    ? (a.amount - b.amount) 
                    : (b.amount - a.amount);
            }

            // String comparison for other fields
            if (sortBy === 'date' || sortBy === 'description' || sortBy === 'status') {
                const valueA = a[sortBy] ?? '';
                const valueB = b[sortBy] ?? '';

                return sortOrder === 'asc'
                    ? valueA.localeCompare(valueB)
                    : valueB.localeCompare(valueA);
            }

            return 0;
        });

        return filtered;
    }, [transactions, sortBy, sortOrder, filterStatus]);

    const totalAmount = useMemo(() => {
        return filteredTransactions.reduce((total, tx) => total + tx.amount, 0);
    }, [filteredTransactions]);

    const numTransactions = filteredTransactions.length;
    const numPending = filteredTransactions.filter((tx) => tx.status === 'Pending').length;

    return (
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
                            <BreadcrumbPage>Transaction</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                <div className="container mx-auto px-4 py-8">
                    <div className="mb-6 flex items-center justify-between">
                        <h1 className="text-2xl font-bold">Transaction History</h1>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" size="sm">
                                    <FilterIcon className="mr-2 h-4 w-4" />
                                    Filter by status
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuItem onSelect={() => setFilterStatus('all')}>All</DropdownMenuItem>
                                <DropdownMenuItem onSelect={() => setFilterStatus('Pending')}>Pending</DropdownMenuItem>
                                <DropdownMenuItem onSelect={() => setFilterStatus('Completed')}>Completed</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                    <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-3">
                        <Card>
                            <CardHeader>
                                <CardTitle>Total Amount</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="text-4xl font-bold">₹ {totalAmount.toFixed(2)}</div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Total Transactions</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="text-4xl font-bold">{numTransactions}</div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Pending Transactions</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="text-4xl font-bold">{numPending}</div>
                            </CardContent>
                        </Card>
                    </div>
                    <Card>
                        <CardHeader>
                            <div className="flex items-center justify-between">
                                <CardTitle>Transactions</CardTitle>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="outline" size="sm">
                                            <ListOrderedIcon className="mr-2 h-4 w-4" />
                                            Sort by {sortBy} ({sortOrder})
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                        <DropdownMenuRadioGroup 
                                            value={sortBy} 
                                            onValueChange={(value) => setSortBy(value as SortByType)}
                                        >
                                            <DropdownMenuRadioItem value="date">Date</DropdownMenuRadioItem>
                                            <DropdownMenuRadioItem value="description">Description</DropdownMenuRadioItem>
                                            <DropdownMenuRadioItem value="amount">Amount</DropdownMenuRadioItem>
                                            <DropdownMenuRadioItem value="status">Status</DropdownMenuRadioItem>
                                        </DropdownMenuRadioGroup>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuRadioGroup 
                                            value={sortOrder} 
                                            onValueChange={(value) => setSortOrder(value as SortOrderType)}
                                        >
                                            <DropdownMenuRadioItem value="asc">Ascending</DropdownMenuRadioItem>
                                            <DropdownMenuRadioItem value="desc">Descending</DropdownMenuRadioItem>
                                        </DropdownMenuRadioGroup>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Date</TableHead>
                                        <TableHead>Description</TableHead>
                                        <TableHead className="text-right">Amount</TableHead>
                                        <TableHead>Status</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {filteredTransactions.map((tx) => (
                                        <TableRow key={tx.id}>
                                            <TableCell>{tx.date}</TableCell>
                                            <TableCell>{tx.description}</TableCell>
                                            <TableCell 
                                                className={`text-right ${
                                                    tx.amount < 0 ? "text-red-500" : "text-green-500"
                                                }`}
                                            >
                                                ₹ {Math.abs(tx.amount).toFixed(2)}
                                            </TableCell>
                                            <TableCell>
                                                <Badge 
                                                    variant={tx.status === "Pending" ? "outline" : "secondary"}
                                                >
                                                    {tx.status}
                                                </Badge>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </div>
            </ContentLayout>
        </DashboardLayout>
    )
}

export default Transactions