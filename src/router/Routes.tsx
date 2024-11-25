import { About } from '@/components/About';
import Register from '@/components/form/Register';
import CommitmentToProgress from '@/pages/About/CommitmentToProgress';
import CommunityContribution from '@/pages/contribution/CommunityContribution';
import GetToKnow from '@/pages/About/GetToKnow';
import Goals from '@/pages/About/Goals';
import LogoMediaRequest from '@/pages/About/LogoMediaRequest';
import Volunteer from '@/pages/About/Volunteer';
import ForgetPin from '@/pages/auth/ForgetPin';
import ForgotPassword from "@/pages/auth/ForgotPassword";
import Login from '@/pages/auth/Login';
import ResetPassword from '@/pages/auth/ResetPassword';
import ResetPin from '@/pages/auth/ResetPin';
import EthicsVendorsSuppliers from '@/pages/BusinessCommunity/EthicsVendorsSuppliers';
import VendorSupplier from '@/pages/BusinessCommunity/VendorSupplier';
import Contact from '@/pages/Contact/Contact';
import DashboardPage from '@/pages/Dashboard';
import GoalsPage from '@/pages/Dashboard/Goals';
import Home from '@/pages/Home/Home';
import CollaborativeNetwork from '@/pages/join/CollaborativeNetwork';
import TransparentDecisionMaking from '@/pages/join/DecisionMaking';
import DirectParticipation from '@/pages/join/DirectParticipation';
import EarnRepresentation from '@/pages/join/EarnRepresentation';
import ActiveMembershipTerm from '@/pages/Membership/ActiveMembershipTerm';
import Join from '@/pages/Membership/JoinNow';
import MembershipPrivilege from '@/pages/Membership/MembershipPrivilege';
import MembershipRenewal from '@/pages/Membership/MembershipRenewal';
import Mission from '@/pages/Mission/Mission';
import PageNotFound from '@/pages/NotFound/PageNotFound';
import PrivacyPolicy from '@/pages/PrivacyPolicy/PrivacyPolicy';
import CustomerService from '@/pages/support/CustomerService';
import TermsAndConditions from '@/pages/TermsAndCondtions/TermsAndCondtions';
import Vision from '@/pages/Vision/Vision';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HowItWorks from '@/pages/contribution/HowItWorks';

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* Main Routes */}
                <Route path="/" element={<Home />} />

                {/* Auth Routes */}
                <Route path="auth">
                    <Route path="signup" element={<Register />} />
                    <Route path="login" element={<Login />} />
                    <Route path="forgot-password" element={<ForgotPassword />} />
                    <Route path="forgot-pin" element={<ForgetPin />} />
                    <Route path="reset-password" element={<ResetPassword />} />
                    <Route path="reset-pin" element={<ResetPin />} />
                </Route>

                {/* About Routes */}
                <Route path="about">
                    <Route index element={<About />} />
                    <Route path="bpp-goals" element={<Goals />} />
                    <Route path="get-to-know-bpp" element={<GetToKnow />} />
                    <Route path="commitment-progress" element={<CommitmentToProgress />} />
                    <Route path="volunteer" element={<Volunteer />} />
                    <Route path="logo-media-request" element={<LogoMediaRequest />} />
                </Route>

                {/* Membership Routes */}
                <Route path="membership">
                    <Route path="join-now" element={<Join />} />
                    <Route path="renewals" element={<MembershipRenewal />} />
                    <Route path="membership-privilege" element={<MembershipPrivilege />} />
                    <Route path="membership-term" element={<ActiveMembershipTerm />} />
                </Route>

                {/* Business Community Routes */}
                <Route path="business-community">
                    <Route path="vendor-suppliers" element={<VendorSupplier />} />
                    <Route path="ethics" element={<EthicsVendorsSuppliers />} />
                </Route>

                {/* Join Now Routes */}
                <Route path="join">
                    <Route path="direct-participation" element={<DirectParticipation />} />
                    <Route path="collaborative-networks" element={<CollaborativeNetwork />} />
                    <Route path="transparent-decision-making" element={<TransparentDecisionMaking />} />
                    <Route path="earn-representation" element={<EarnRepresentation />} />
                </Route>


                {/* community Contribution Routes */}
                <Route path="community-contribution">
                    <Route path="introduction" element={<CommunityContribution />} />
                    <Route path="how-it-works" element={<HowItWorks />} />
                </Route>

                {/* Other Routes */}
                <Route path="vision" element={<Vision />} />
                <Route path="mission" element={<Mission />} />
                <Route path="contact" element={<Contact />} />
                <Route path="customer-support" element={<CustomerService />} />
                <Route path="privacy-policy" element={<PrivacyPolicy />} />
                <Route path="terms-and-conditions" element={<TermsAndConditions />} />



                {/* <Route path="/admin" element={<AdminPanelLayout />}> */}
                {/* <Route path="dashboard" element={<DashboardPage />} />
                    <Route path="categories" element={<CategoriesPage />} />
                    <Route path="posts" element={<PostsPage />} />
                    <Route path="posts/new" element={<NewPostPage />} />
                    <Route path="tags" element={<TagsPage />} />
                    <Route path="users" element={<UsersPage />} />
                    <Route path="account" element={<AccountPage />} /> */}
                {/* </Route> */}



                <Route path="dashboard">
                    <Route path="home" element={<DashboardPage />} />
                    <Route path="goal" element={<GoalsPage />} />
                </Route>

                {/* 404 Route */}
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;









{/* Protected Routes (requires authentication) */ }
//  <Route
//  path="/membership"
//  element={
//    <ProtectedRoute isAuthenticated={isAuthenticated}>
//      <Route>
//        <Route path="join-now" element={<Join />} />
//        <Route path="renewals" element={<MembershipRenewal />} />
//      </Route>
//    </ProtectedRoute>
//  }
// />

{/* Private Routes (requires authentication + specific roles) */ }
{/* <Route
 path="/admin"
 element={
   <PrivateRoute
     isAuthenticated={isAuthenticated}
     userRole={userRole}
     allowedRoles={['admin']}
   >
     <Route>
       <Route path="dashboard" element={<AdminDashboard />} />
       <Route path="users" element={<UserManagement />} />
     </Route>
   </PrivateRoute>
 }
/> */}

{/* Error Routes */ }
{/* <Route path="/unauthorized" element={<UnauthorizedPage />} /> */ }