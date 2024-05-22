import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import {Link} from "react-router-dom";
import {Button} from "@/components/ui/button.tsx";
import React from "react";
import  user from '../images/user.png'

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardImage,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import  {
    Sheet,
    SheetTrigger,
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetFooter,
    SheetTitle,
  } from "@/components/ui/sheet"


// TODO: Change this to make the clotheItems array come from a get request to backend
import clotheItems from '@/data/clotheItem.json'
export default function WardrobePage() {
    const clotheTypes = [
        'CAP',
        'EARRINGS',
        'NECKLACE',
        'SHIRT',
        'BRACELET',
        'BELT',
        'PANTS',
        'SHOES'
    ]

    const [activeClotheType, setActiveClotheType] =
        React.useState<string | undefined>(undefined);

    const handleClick = (type: string) => {
        console.log(type)
        setActiveClotheType(type)
    }

    return (
        <>
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Navigate</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <NavigationMenuLink className='p-6'>
                                <Link to={'/signup'}>Back</Link>
                            </NavigationMenuLink>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>

            <div className="flex flex-col gap-4">
                <Sheet>
                    <SheetTrigger asChild>
                        <Button className="w-20 h-10 self-end mr-6">Menu</Button>
                    </SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                        <SheetTitle className="grid gap-4 py-4 justify-center items-center">Configuracion</SheetTitle>
                        </SheetHeader>
                        <SheetFooter className="grid gap-4 py-4 justify-center items-center">
                            <div className="grid gap-4 py-4 justify-center items-center">
                                <img className="imgRoles justify-self-center" width="40%" src={user} alt="Foto de la prenda" />
                                <text className="grid gap-4 py-4 justify-center items-center">
                                    (aqui va el nombre de usuario)
                                </text>
                                <text className="grid gap-4 py-4 justify-center items-center">
                                    (aqui va el correo) 
                                </text>
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
                        </SheetFooter>
                    </SheetContent>
                </Sheet>
                <div className="grid grid-cols-[1fr_auto] gap-4 h-[80vh] p-6">
                    <div className="showcase grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                        {clotheItems
                            .filter(item => item.tipo === activeClotheType)
                            .map((item, index) => (
                            <Card key={index} className={'w-[250px] p-3'}>
                                <CardImage src={item.foto} className=''></CardImage>
                                <CardHeader>
                                    <CardTitle>{`${item.tipo}`}</CardTitle>
                                    <CardDescription>{`Último Uso: ${item.ultimoUso}`}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p>{`Último Lavado: ${item.ultimoLavado}`}</p>
                                </CardContent>
                                <CardFooter>
                                    <p>{`Se Plancha: ${item.sePlancha ? 'Sí' : 'No'}`}</p>
                                </CardFooter>
                            </Card>
                        ))
                        }
                    </div>
                    <div className="picker flex flex-col gap-2">
                        {clotheTypes.map((type, index) => (
                            <Button key={index} onClick={() => handleClick(type)}>
                                {type}
                            </Button>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}