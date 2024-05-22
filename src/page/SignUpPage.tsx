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
import { useNavigate } from "react-router-dom";
import '../styles/SignUpPageStyles.css'; 

const formSchema = z.object({
    username: z.string(),
    email: z.string().email(),
    password: z.string(),
});

type FormSchemaType = z.infer<typeof formSchema>;

export function SignUpPage() {
    const form = useForm<FormSchemaType>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: 'miguel1475',
            email: "fzm5ey837@mozmail.com",
            password: "miguel1475",
        },
    });

    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    function onSubmit(values: FormSchemaType) {
        console.table(values);
        navigate('/wardrobe');
    }

    function toggleShowPassword() {
        setShowPassword(!showPassword);
    }

    return (
        <div className="signup-container">
            <div className="wrapper">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <h1>Unete a Wardrobe</h1>
                        <FormField
                            control={form.control}
                            name="username"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Usuario</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Ingresa tu nombre de usuario" {...field} className="input-box" />
                                    </FormControl>
                                    <FormDescription className="form-description-SignUp">
                                        Con este nombre te veran los demás usuarios.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Ingresa tu correo" {...field} className="input-box" />
                                    </FormControl>
                                    <FormDescription className="form-description-SignUp">
                                        Agrega un correo que tengas activo.
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
                                                placeholder="Ingresa tu contraseña"
                                                {...field}
                                                className="input-box"
                                            />
                                            <button type="button" onClick={toggleShowPassword} className="show-password-button">
                                                {showPassword ? "Ocultar" : "Mostrar"}
                                            </button>
                                        </div>
                                    </FormControl>
                                    <FormDescription className="form-description-SignUp">
                                        Agrega una contraseña segura.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit" className="btn-Sign">Registrarse</Button>
                    </form>
                </Form>
            </div>
        </div>
    );
}
