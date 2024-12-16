import { ContentLayout } from "@/components/admin-panel/content-layout"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import DashboardLayout from "@/layout/DashboardLayout"
import { ArrowLeftIcon, CreditCardIcon } from "lucide-react"
import { Link, useNavigate } from "react-router-dom"

const AddFund = () => {
    const navigate = useNavigate()
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
                            <BreadcrumbLink asChild>
                                <Link to="/dashboard/wallet">Wallet</Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>Add Fund</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
            <div className="flex items-center gap-4">
                <Button variant="outline" size="icon">
                    <ArrowLeftIcon className="h-4 w-4" />
                    <span className="sr-only">Back</span>
                </Button>
                <h1 className="font-semibold text-lg md:text-xl">Add funds to account</h1>
            </div>
            <Card className="border dashed border-gray-200 rounded-lg border-dashed dark:border-gray-800">
                <CardContent className="flex flex-col items-center gap-2 p-6">
                    <CreditCardIcon className="h-12 w-12" />
                    <CardTitle className="text-center">Pay with Credit or Debit Card</CardTitle>
                    <CardDescription className="text-center">
                        Secure payment with your Visa, Mastercard, or American Express card.
                    </CardDescription>
                </CardContent>
                <CardFooter className="flex justify-end p-4">
                    <Button onClick={()=> navigate('/dashboard/payment-gateway')}>Pay Rs 5.00</Button>
                </CardFooter>
            </Card>
            <Card>
                <CardContent>
                    <div className="p-6 grid gap-4">
                        {/* <div>
                            <CardTitle>Choose amount</CardTitle>
                            <CardDescription>Select the amount you want to add to your account.</CardDescription>
                            <div className="grid gap-2 md:gap-4">
                                <Label>
                                    <div />
                                    <span className="ml-2">Rs 25.00</span>
                                </Label>
                                <Label>
                                    <div />
                                    <span className="ml-2">Rs 50.00</span>
                                </Label>
                                <Label>
                                    <div />
                                    <span className="ml-2">Rs 100.00</span>
                                </Label>
                                <Label>
                                    <div />
                                    <span className="ml-2">Rs 250.00</span>
                                </Label>
                            </div>
                        </div> */}
                        <div>
                            <CardTitle className="text-2xl font-bold mb-2">Payment method</CardTitle>
                            <CardDescription>Add a new payment method or select an existing one.</CardDescription>
                            <div className="mt-4 grid grid-cols-2 gap-4">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Credit or Debit Card</CardTitle>
                                        <CardDescription>Visa, Mastercard</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="grid gap-4">
                                            <div>
                                                <Label htmlFor="name">Name on card</Label>
                                                <Input id="name" placeholder="Enter your name" />
                                            </div>
                                            <div>
                                                <Label htmlFor="number">Card number</Label>
                                                <Input id="number" placeholder="Enter your card number" />
                                            </div>
                                            <div className="grid gap-4">
                                                <div>
                                                    <Label htmlFor="expiry">Expiry date</Label>
                                                    <Input id="expiry" placeholder="MM/YY" />
                                                </div>
                                                <div>
                                                    <Label htmlFor="cvc">CVC</Label>
                                                    <Input id="cvc" placeholder="Enter your CVC" />
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Google Pay</CardTitle>
                                        <CardDescription>Scan here</CardDescription>
                                    </CardHeader>
                                    <CardContent className="flex justify-center">
                                        <img
                                            src="/placeholder.svg"
                                            width="200"
                                            height="100"
                                            alt="PayPal"
                                            className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                                        />
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </CardContent>
                {/* <CardFooter className="flex gap-4">
                    <Button>Pay Rs 25.00</Button>
                    <Button>Pay Rs 50.00</Button>
                    <Button>Pay Rs 100.00</Button>
                    <Button>Pay Rs 250.00</Button>
                </CardFooter> */}
            </Card>
        </main>
        </ContentLayout>
        </DashboardLayout>
    )
}

export default AddFund