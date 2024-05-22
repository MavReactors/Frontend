import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import '../styles/LogInPageStyles.css';

// Definir el esquema del formulario usando Zod
const formSchema = z.object({
    email: z.string().email(),
    password: z.string(),
});

// Inferir el tipo a partir del esquema
type FormSchemaType = z.infer<typeof formSchema>;

export function LogInPage() {
    const form = useForm<FormSchemaType>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "alejo@site.org",
            password: "alejo123",
        },
    });

    const [showPassword, setShowPassword] = useState(false);

    function onSubmit(values: FormSchemaType) {
        console.log(values);
    }

    function toggleShowPassword() {
        setShowPassword(!showPassword);
    }

    return (
        <div className="login-container">
            <div className="wrapper">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <h1>Iniciar sesión</h1>
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Usuario</FormLabel>
                                    <FormControl>
                                        <Input placeholder="shadcn" {...field} className="input-box" />
                                    </FormControl>
                                    <FormDescription className="form-description">
                                        Nombre de usuario público.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Contraseña</FormLabel>
                                    <FormControl>
                                        <div className="input-wrapper">
                                            <Input
                                                type={showPassword ? "text" : "password"}
                                                placeholder="shadcnpw"
                                                {...field}
                                                className="input-box"
                                            />
                                            <button type="button" onClick={toggleShowPassword} className="show-password-button">
                                                {showPassword ? "Hide" : "Show"}
                                            </button>
                                        </div>
                                    </FormControl>
                                    <FormDescription className="form-description">
                                        No compartas tu contraseña con otras personas.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit" className="btn">Siguiente</Button>
                        <div className="register-link">
                            <p>¿No tienes una cuenta? <Link to={'/signup'}>Registrate</Link> acá </p>
                        </div>
                    </form>
                </Form>
            </div>
        </div>
    );
}
