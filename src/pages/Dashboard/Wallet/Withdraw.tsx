import { ContentLayout } from '@/components/admin-panel/content-layout'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import DashboardLayout from '@/layout/DashboardLayout'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const WithdrawPage = () => {

    const [withdrawals, setWithdrawals] = useState([
        {
            id: 1,
            amount: 500.0,
            accountNumber: "1234567890",
            date: "2023-06-15",
            status: "paid",
        },
        {
            id: 2,
            amount: 250.0,
            accountNumber: "0987654321",
            date: "2023-05-30",
            status: "pending",
        },
        {
            id: 3,
            amount: 750.0,
            accountNumber: "5678901234",
            date: "2023-04-20",
            status: "paid",
        },
    ])
    const [amount, setAmount] = useState("")
    const [account, setAccount] = useState("")
    const handleWithdraw = () => {
        if (amount && account) {
            const newWithdrawal = {
                id: withdrawals.length + 1,
                amount: parseFloat(amount),
                accountNumber: account,
                date: new Date().toISOString().slice(0, 10),
                status: "pending",
            }
            setWithdrawals([...withdrawals, newWithdrawal])
            setAmount("")
            setAccount("")
        }
    }

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
                            <BreadcrumbPage>Withdraw</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                <div className="mx-auto w-full space-y-6">
                    <div className='my-6'>
                        <h1 className="text-3xl font-bold tracking-tight text-foreground">Withdraw Funds</h1>
                        <p className="mt-2 text-muted-foreground">Securely withdraw your funds to your bank account.</p>
                    </div>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
                    <Card>
                        <CardContent className="space-y-4 p-6">
                            <div className="space-y-3">
                                <Label htmlFor="amount">Withdrawal Amount</Label>
                                <Input
                                    id="amount"
                                    type="number"
                                    placeholder="Enter amount to withdraw"
                                    min="0"
                                    step="0.01"
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="account">Bank Account Details</Label>
                                <Input
                                    id="account"
                                    type="text"
                                    placeholder="Enter your bank account number"
                                    value={account}
                                    onChange={(e) => setAccount(e.target.value)}
                                />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button type="button" onClick={handleWithdraw} className="w-full">
                                Withdraw Funds
                            </Button>
                        </CardFooter>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Recent Withdrawals</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid gap-4">
                                {withdrawals.map((withdrawal) => (
                                    <div
                                        key={withdrawal.id}
                                        className={`grid grid-cols-[1fr_auto] items-center gap-4 rounded-lg p-4 ${withdrawal.status === "paid" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                                            }`}
                                    >
                                        <div className="grid gap-1">
                                            <p className="text-sm font-medium">Rs {withdrawal.amount.toFixed(2)}</p>
                                            <p className="text-xs text-muted-foreground">{withdrawal.accountNumber}</p>
                                        </div>
                                        <p className="text-xs font-medium">{withdrawal.status === "paid" ? "Paid" : "Pending"}</p>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>
                </div>
            </ContentLayout>
        </DashboardLayout>
    )
}

export default WithdrawPage;