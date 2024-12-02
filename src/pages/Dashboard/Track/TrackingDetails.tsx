import { ContentLayout } from '@/components/admin-panel/content-layout'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import DashboardLayout from '@/layout/DashboardLayout'
import { VoteIcon } from 'lucide-react'
import { Link } from 'react-router-dom'

const TrackingDetails = () => {
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
                <Link to="/dashboard/track">Track</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        
        <div className="grid gap-6 md:gap-8 lg:gap-10">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Ticket Details</CardTitle>
              <Button variant="outline" size="sm" className="shrink-0">
                <VoteIcon className="h-4 w-4 mr-2" />
                Track Your Voting
              </Button>
            </CardHeader>
            <CardContent>
              <div className="grid gap-1">
                <div className="text-muted-foreground text-sm md:text-base">Ticket #OE31b70H</div>
                <div className="text-2xl md:text-3xl font-bold">Processing</div>
                <div className="text-muted-foreground text-sm md:text-base">Estimated: June 23, 2023</div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Timeline</CardTitle>
              <p className="text-muted-foreground text-sm md:text-base">Track the progress of your order.</p>
            </CardHeader>
            <CardContent>
              <div className="after:absolute after:inset-y-0 after:w-px after:bg-muted-foreground/20 relative pl-6 after:left-0 grid gap-6 md:gap-8 lg:gap-10">
                <div className="grid gap-2 md:gap-3 lg:gap-4 relative">
                  <div className="aspect-square w-3 bg-primary rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-1" />
                  <div className="font-medium text-sm md:text-base">June 20, 2023 - Submitted</div>
                  <div className="text-muted-foreground text-sm md:text-base">
                    Your Vote was successful.
                  </div>
                </div>
                <div className="grid gap-2 md:gap-3 lg:gap-4 relative">
                  <div className="aspect-square w-3 bg-primary rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-1" />
                  <div className="font-medium text-sm md:text-base">June 21, 2023 - Vote Processed</div>
                  <div className="text-muted-foreground text-sm md:text-base">
                    Your Vote is being processed.
                  </div>
                </div>
                <div className="grid gap-2 md:gap-3 lg:gap-4 relative">
                  <div className="aspect-square w-3 bg-primary rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-1" />
                  <div className="font-medium text-sm md:text-base">June 22, 2023 - Fund Transfer</div>
                  <div className="text-muted-foreground text-sm md:text-base">
                    Fund is Transferred
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Vote Summary</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-2 md:gap-3 lg:gap-4">
              <div className="flex items-center justify-between">
                <div className="text-muted-foreground">Total Votes</div>
                <div>3</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-muted-foreground">Regions Covered</div>
                <div>2</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-muted-foreground">Status</div>
                <div>Completed</div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Voter Information</CardTitle>
            </CardHeader>
            <CardContent>
              <address className="grid gap-2 md:gap-3 lg:gap-4 not-italic text-muted-foreground">
                <div className="flex justify-between">
                  <span className="font-medium">Full Name:</span>
                  <span>Liam Johnson</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Voter ID:</span>
                  <span>V12345</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Membership No:</span>
                  <span>M87654</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">District:</span>
                  <span>Central</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">State:</span>
                  <span>California</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">City:</span>
                  <span>San Francisco</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Address:</span>
                  <span>123 Civic Center St, Apt 4B</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Phone:</span>
                  <span>(415) 555-7890</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Email:</span>
                  <span>liam.johnson@email.com</span>
                </div>
              </address>
            </CardContent>
          </Card>
        </div>
      </ContentLayout>
    </DashboardLayout>
  )
}

export default TrackingDetails