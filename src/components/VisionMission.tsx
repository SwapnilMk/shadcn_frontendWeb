
import {
    ChevronRightIcon,
    GraduationCapIcon,
    ShieldCheckIcon,
    UsersRound
} from "lucide-react";
import { Link } from 'react-router-dom';

const VisionMission = () => {
    return (
        <>
            <section className="w-full dark:bg-gray-800">
                <div className="container py-5">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="lg:w-full">
                            <div className="inline-block rounded-lg bg-gray-900 px-3 mb-3 py-2 text-xs text-gray-50 shadow dark:bg-gray-50 dark:text-gray-900">
                                Vision
                            </div>
                            <h2 className="scroll-m-20 font-bold border-b pb-2 text-3xl tracking-tight transition-colors first:mt-0 sm:text-4xl xl:text-5xl">
                                Vision of <br /><span className='text-red-500'>Bharatiya</span> <span className='text-blue-500'>Popular</span> <span>Party</span>
                            </h2>
                            <p className="mt-3 text-muted-foreground">
                                At the heart of BPP's vision lies the commitment to  <span className="font-bold">build a developed, democratic nation</span>, where every citizen—regardless of background or status—has the opportunity to thrive and contribute to a prosperous society. We aspire to create a nation where equity, justice, and progress are not just ideals but everyday realities for all.
                            </p>
                            <p className="mt-5">
                                <Link
                                    className="inline-flex items-center gap-x-1 group font-medium hover:underline underline-offset-4 "
                                    to="/vision"
                                >
                                    learn more about our Vision
                                    <ChevronRightIcon className="flex-shrink-0 w-4 h-4 transition ease-in-out group-hover:translate-x-1" />
                                </Link>
                            </p>
                        </div>
                        <div className="space-y-6 lg:space-y-8">
                            <div className="flex">
                                <span className="flex-shrink-0 inline-flex justify-center items-center w-[46px] h-[46px] rounded-full border bg-primary text-primary-foreground">
                                    <UsersRound className="flex-shrink-0 w-5 h-5" />
                                </span>
                                <div className="ms-5 sm:ms-8">
                                    <h3 className="text-base sm:text-lg font-semibold">
                                        Empowering the Underprivileged
                                    </h3>
                                    <p className="mt-1 text-sm text-muted-foreground">
                                        We are dedicated to improving the lives of the socially and economically disadvantaged sections of society. We believe that true development can only be achieved when everyone has access to the opportunities they deserve.
                                    </p>
                                </div>
                            </div>
                            <div className="flex">
                                <span className="flex-shrink-0 inline-flex justify-center items-center w-[46px] h-[46px] rounded-full border  bg-primary text-primary-foreground">
                                    <GraduationCapIcon className="flex-shrink-0 w-5 h-5" />
                                </span>
                                <div className="ms-5 sm:ms-8">
                                    <h3 className="text-base sm:text-lg font-semibold">
                                        Education, Health, and Security for All
                                    </h3>
                                    <p className="mt-1 text-sm text-muted-foreground">
                                        We recognize that the foundation of a prosperous society rests on the health, safety, and education of its people.
                                    </p>
                                </div>
                            </div>
                            <div className="flex">
                                <span className="flex-shrink-0 inline-flex justify-center items-center w-[46px] h-[46px] rounded-full border bg-primary text-primary-foreground">
                                    <ShieldCheckIcon className="flex-shrink-0 w-5 h-5" />
                                </span>
                                <div className="ms-5 sm:ms-8">
                                    <h3 className="text-base sm:text-lg font-semibold">
                                        Minimizing the Influence of Money and Muscle Power in Politics
                                    </h3>
                                    <p className="mt-1 text-sm text-muted-foreground">
                                        A strong democracy is built on transparency, integrity, and the active participation of its citizens.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <section className="w-full py-4 bg-gray-100 dark:bg-gray-800">
                <div className="container flex flex-col items-center justify-center px-4 space-y-3 text-center md:space-y-4 md:px-6 lg:space-y-6 xl:gap-4 xl:grid xl:grid-cols-2 xl:items-center">
                    <div className="space-y-4 xl:order-1 xl:text-left">
                        <div className="inline-block rounded-lg bg-gray-900 px-3 mb-3 py-2 text-xs text-gray-50 shadow dark:bg-gray-50 dark:text-gray-900">
                            Mission
                        </div>
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-3xl/none">
                            We empower teams to achieve greatness
                        </h1>
                        <p className="max-w-[600px]  text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-md/relaxed dark:text-gray-400">
                            Our platform provides the tools and infrastructure for teams to collaborate and innovate, delivering the
                            best digital experiences to their customers.
                        </p>
                        <p className="my-4">
                            <Link
                                className="inline-flex items-center gap-x-1 group font-medium hover:underline underline-offset-4 "
                                to="/vision"
                            >
                                learn more
                                <ChevronRightIcon className="flex-shrink-0 w-4 h-4 transition ease-in-out group-hover:translate-x-1" />
                            </Link>
                        </p>
                    </div>
                    <div className="grid gap-4 sm:gap-6 xl:gap-2">
                        <img
                            src={bppflag}
                            width="auto"
                            height="auto"
                            alt="Mission"
                            className="mx-auto aspect-video object-contain object-center sm:w-full"
                        />
                    </div>
                </div>
            </section> */}
        </>
    );
};

export default VisionMission;





