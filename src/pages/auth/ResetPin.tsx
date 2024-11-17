'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

// Schema for pin validation (4 digit numeric pin)
const formSchema = z
    .object({
        pin: z
            .string()
            .length(4, { message: 'PIN must be 4 digits' })
            .regex(/^\d{4}$/, { message: 'PIN must be numeric' }),
        confirmPin: z.string(),
    })
    .refine((data) => data.pin === data.confirmPin, {
        path: ['confirmPin'],
        message: 'PINs do not match',
    })

export default function ResetPin() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            pin: '',
            confirmPin: '',
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            // Assuming an async reset pin function
            console.log(values)
            toast.success('PIN reset successful. You can now log in with your new PIN.')
        } catch (error) {
            console.error('Error resetting PIN', error)
            toast.error('Failed to reset the PIN. Please try again.')
        }
    }

    return (
        <section className="py-28">
            <div className="container"></div>
            <div className="flex min-h-[50vh] h-full w-full items-center justify-center px-4">
                <Card className="mx-auto max-w-sm">
                    <CardHeader>
                        <CardTitle className="text-2xl">Reset PIN</CardTitle>
                        <CardDescription>
                            Enter your new PIN to reset your PIN.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                                <div className="grid gap-4">
                                    {/* New PIN Field */}
                                    <FormField
                                        control={form.control}
                                        name="pin"
                                        render={({ field }) => (
                                            <FormItem className="grid gap-2">
                                                <FormLabel htmlFor="pin">New PIN</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        id="pin"
                                                        placeholder="####"
                                                        autoComplete="off"
                                                        maxLength={4}
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    {/* Confirm PIN Field */}
                                    <FormField
                                        control={form.control}
                                        name="confirmPin"
                                        render={({ field }) => (
                                            <FormItem className="grid gap-2">
                                                <FormLabel htmlFor="confirmPin">
                                                    Confirm PIN
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        id="confirmPin"
                                                        placeholder="####"
                                                        autoComplete="off"
                                                        maxLength={4}
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <Button type="submit" className="w-full">
                                        Reset PIN
                                    </Button>
                                </div>
                            </form>
                        </Form>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}
