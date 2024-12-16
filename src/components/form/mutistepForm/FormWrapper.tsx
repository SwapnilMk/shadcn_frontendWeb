import { ReactNode } from "react"

type FormWrapperProps = {
    title: string
    children: ReactNode
}

export function FormWrapper({ children }: FormWrapperProps) {
    return (
        <>
            <div
                className="space-y-8 max-w-xl">
                <div className="grid gap-4">
                    {children}
                </div>
            </div>
        </>
    )
}