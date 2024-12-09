import { ReactNode } from "react"

type FormWrapperProps = {
    title: string
    children: ReactNode
}

export function FormWrapper({ title, children }: FormWrapperProps) {
    return (
        <>
            {/* <h2 style={{ textAlign: "center", margin: 0, marginBottom: "2rem" }}>
                {title}
            </h2> */}
            <div
                className="space-y-8">
                <div className="grid gap-4">
                    {children}
                </div>
            </div>
        </>
    )
}