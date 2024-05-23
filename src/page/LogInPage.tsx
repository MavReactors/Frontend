import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import '../styles/LogInPageStyles.css';
import {logIn} from "@/services/authService.ts";

import {useNavigate} from "react-router-dom";

// Definir el esquema del formulario usando Zod
const formSchema = z.object({
    email: z.string().email(),
    password: z.string(),
});

// Inferir el tipo a partir del esquema
type FormSchemaType = z.infer<typeof formSchema>;

export function LogInPage() {
    const navigate = useNavigate()
    const form = useForm<FormSchemaType>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "alejomonry@hotmail.com",
            password: "1003704633a",
        },
    });

    const [showPassword, setShowPassword] = useState(false);

    function onSubmit(values: FormSchemaType) {
        logIn(values.email, values.password).then(result => {
            console.log(result)
            navigate('/wardrobe')
        })
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
                                        <Input placeholder="Nombre de usuario" {...field} className="input-box" />
                                    </FormControl>
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
                                                placeholder="ʕ•́ᴥ•̀ʔっ"
                                                {...field}
                                                className="input-box"
                                            />
                                            <button type="button" onClick={toggleShowPassword} className="show-password-button">
                                                {showPassword ? "Ocultar" : "Mostrar"}
                                            </button>
                                        </div>
                                    </FormControl>
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
