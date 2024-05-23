import React from 'react'
import { z } from "zod"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import user from "@/images/user.png"; // Asegúrate de tener una imagen de usuario en esta ruta.
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"
import { CalendarIcon } from "lucide-react"
import { LogIn, CircleUserRound } from 'lucide-react';
import { zodResolver } from "@hookform/resolvers/zod"

import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/use-toast"
import { Calendar } from "@/components/ui/calendar"
import { Textarea } from "@/components/ui/textarea"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetFooter, SheetTitle, SheetClose } from "@/components/ui/sheet";

const FormSchema = z.object({
    dob: z.date({
        required_error: "A date of birth is required.",
    }),
    description: z.string({
        required_error: "A description is required.",
    }),
})


export const SchedulePage: React.FC = () => {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
    })

    function onSubmit(data: z.infer<typeof FormSchema>) {
        toast({
            title: "You submitted the following values:",
            description: (
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                    <code className="text-white">{JSON.stringify(data, null, 2)}</code>
                </pre>
            ),
        })
    }

    return (
        <div>
            <header className="header">
                <Link to="/wardrobe">
                    <Button className="button">
                        <LogIn size={40} className="rotate-icon" />
                    </Button>
                </Link>
                <h1>WardrobeWhiz</h1>
                <nav>
                    <Link to="/"><i className="fas fa-arrow-left"></i></Link>
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button>
                                <CircleUserRound size={45} />
                            </Button>
                        </SheetTrigger>
                        <SheetContent>
                            <SheetHeader>
                                <SheetTitle className="grid gap-4 py-4 justify-center items-center">Configuracion</SheetTitle>
                            </SheetHeader>
                            <SheetFooter className="grid gap-4 py-4 justify-center items-center">
                                <div className="grid gap-4 py-4 justify-center items-center">
                                    <img className="imgRoles justify-self-center" width="40%" src={user} alt="Foto de la prenda" />
                                    <div className="grid gap-4 py-4 justify-center items-center">
                                        <p>(aqui va el nombre de usuario)</p>
                                        <p>(aqui va el correo)</p>
                                        <Button>Editar</Button>
                                        <Button>Cerrar la sesión</Button>
                                    </div>
                                    <SheetClose>
                                        <div>
                                            <h1 className="grid gap-4 py-4 justify-center items-center">
                                                prendas propuestas
                                            </h1>
                                        </div>
                                    </SheetClose>
                                </div>
                            </SheetFooter>
                        </SheetContent>
                    </Sheet>
                </nav>
            </header>

            <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
                <div className="mx-auto grid w-full max-w-6xl gap-2">
                    <h1 className="text-3xl font-semibold">Calendario</h1>
                </div>
                <div className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
                    <div className="grid gap-6">
                        <Card x-chunk="dashboard-04-chunk-1">
                            <CardHeader>
                                <CardTitle>Agenda tu día especial</CardTitle>
                                <CardDescription>
                                    Llena los campos para agendar tu día especial.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Form {...form}>
                                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                                        <FormField
                                            control={form.control}
                                            name="dob"
                                            render={({ field }) => (
                                                <FormItem className="flex flex-col">
                                                    <FormLabel>Fecha especial</FormLabel>
                                                    <Popover>
                                                        <PopoverTrigger asChild>
                                                            <FormControl>
                                                                <Button
                                                                    variant={"outline"}
                                                                    className={cn(
                                                                        "w-[240px] pl-3 text-left font-normal",
                                                                        !field.value && "text-muted-foreground"
                                                                    )}
                                                                >
                                                                    {field.value ? (
                                                                        format(field.value, "PPP")
                                                                    ) : (
                                                                        <span>Selecciona una fecha</span>
                                                                    )}
                                                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                                </Button>
                                                            </FormControl>
                                                        </PopoverTrigger>
                                                        <PopoverContent className="w-auto p-0" align="start">
                                                            <Calendar
                                                                mode="single"
                                                                selected={field.value}
                                                                onSelect={field.onChange}
                                                                disabled={(date) =>
                                                                    date > new Date() || date < new Date("1900-01-01")
                                                                }
                                                                initialFocus
                                                            />
                                                        </PopoverContent>
                                                    </Popover>
                                                    <FormDescription>
                                                        Es la fecha en la que se llevará a cabo tu día especial.
                                                    </FormDescription>
                                                    <FormMessage />
                                                </FormItem>
                                            )}

                                        />
                                        <FormField
                                            control={form.control}
                                            name="description"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Descripción</FormLabel>
                                                    <FormControl>
                                                        <Textarea placeholder="Tu descripción" {...field} />
                                                    </FormControl>
                                                    <FormDescription>
                                                        Excribe todo lo que pueda definir tu día.
                                                    </FormDescription>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <Button type="submit">Submit</Button>
                                    </form>
                                </Form>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </main>
        </div>
    )
}
