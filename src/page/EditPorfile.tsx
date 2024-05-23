import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Link } from "react-router-dom";
import {updateUserPassword} from "@/services/userService.ts";

// Esquema de validación para el formulario
const usernameSchema = z.object({
    username: z.string().min(1, "El nombre de usuario es obligatorio"),
    confirmUsername: z.string().min(1, "Debe confirmar el nombre de usuario"),
}).refine((data) => data.username === data.confirmUsername, {
    message: "Los nombres de usuario no coinciden",
    path: ["confirmUsername"], // Campo al que se aplica el mensaje de error
});

const passwordSchema = z.object({
    password: z.string().min(1, "La contraseña es obligatoria"),
    confirmPassword: z.string().min(1, "Debe confirmar la contraseña"),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Las contraseñas no coinciden",
    path: ["confirmPassword"], // Campo al que se aplica el mensaje de error
});

export default function EditPor() {
    const [showCard, setShowCard] = useState(false);
    const [showCard1, setShowCard1] = useState(false);
    const [newUsername, setNewUsername] = useState("");
    const [newPassword, setNewPassword] = useState("");

    const {
        register,
        handleSubmit,
    } = useForm({
        resolver: zodResolver(usernameSchema),
    });

    const {
        register: registerPassword,
        handleSubmit: handleSubmitPassword,
    } = useForm({
        resolver: zodResolver(passwordSchema),
    });

    const onSubmitUsername = (data: any) => {
        console.log("Nombre de usuario cambiado:", data);
        setNewUsername(data.username); // Guardar el nuevo nombre de usuario
        setShowCard(false);
    };

    const onSubmitPassword = (data: any) => {
        console.log("Contraseña cambiada:", data);
        setNewPassword(data.password); // Guardar la nueva contraseña
        setShowCard1(false);
        updateUserPassword(data)
    };

    return (

        <><NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Navigate</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <NavigationMenuLink className='p-6'>
                            <Link to={'/wardrobe'}>Back</Link>
                        </NavigationMenuLink>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>

        <div className="flex flex-col items-center justify-center h-screen">
            <p className="mb-4">¿Qué deseas cambiar?</p>
            <div className="flex space-x-4">
                <Button onClick={() => setShowCard(true)}>Nombre de usuario</Button>
                <Button onClick={() => setShowCard1(true)}>Contraseña</Button>
            </div>

            {showCard && (
                <Card className="w-[350px] mt-4">
                    <CardHeader>
                        <CardTitle>Cambiar nombre de usuario</CardTitle>
                        <CardDescription>Por favor, ingrese el nuevo nombre de usuario.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit(onSubmitUsername)}>
                            <div className="grid w-full items-center gap-4">
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="username">Nuevo nombre de usuario</Label>
                                    <Input id="username" placeholder="Nombre de usuario" {...register("username")} />
    
                                </div>
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="confirmUsername">Confirme el nuevo nombre de usuario</Label>
                                    <Input id="confirmUsername" placeholder="Nombre de usuario" {...register("confirmUsername")} />
                
                                </div>
                            </div>
                            <CardFooter className="flex justify-between">
                                <Button variant="outline" onClick={() => setShowCard(false)}>Cancelar</Button>
                                <Button type="submit">Guardar</Button>
                            </CardFooter>
                        </form>
                    </CardContent>
                </Card>
            )}
            {showCard1 && (
                <Card className="w-[350px] mt-4">
                    <CardHeader>
                        <CardTitle>Cambiar contraseña</CardTitle>
                        <CardDescription>Por favor, ingrese la nueva contraseña</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmitPassword(onSubmitPassword)}>
                            <div className="grid w-full items-center gap-4">
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="password">Nueva contraseña</Label>
                                    <Input id="password" type="password" placeholder="Nueva contraseña" {...registerPassword("password")} />
            
                                </div>
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="confirmPassword">Confirme la nueva contraseña</Label>
                                    <Input id="confirmPassword" type="password" placeholder="Confirmar contraseña" {...registerPassword("confirmPassword")} />
                
                                </div>
                            </div>
                            <CardFooter className="flex justify-between">
                                <Button variant="outline" onClick={() => setShowCard1(false)}>Cancelar</Button>
                                <Button type="submit">Guardar</Button>
                            </CardFooter>
                        </form>
                    </CardContent>
                </Card>
            )}

            {/* Mostrar las variables */}
            <div className="mt-4">
                <p>Nuevo nombre de usuario: {newUsername}</p>
                <p>Nueva contraseña: {newPassword}</p>
            </div> 
        </div>
        </>
    );
}
