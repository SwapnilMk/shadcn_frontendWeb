import { Link } from 'react-router-dom'

const Join = () => {
    return (
        <div className="relative w-full h-[400px]">
            <img src="/placeholder.svg" alt="Hero" className="absolute inset-0 object-cover w-full h-full" />
            <div className="absolute container inset-0 flex flex-col justify-center gap-4 p-4 md:gap-10">
                <div className="grid gap-4">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-5xl/none text-gray-900 dark:text-gray-50">
                        Decentralized Democracy, Centralized Progress
                    </h1>
                    <p className="max-w-[700px] text-gray-500 dark:text-gray-400">
                        Join Bharatiya Popular Party Today!
                    </p>
                </div>
                <Link
                    to="/auth/signup"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white text-sm font-medium shadow-sm w-24 transition-colors hover:bg-gray-100 hover:text-gray-900  dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                >
                    Join Now
                </Link>
            </div>
        </div>
    )
}

export default Join