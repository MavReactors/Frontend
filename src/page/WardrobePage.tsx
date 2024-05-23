import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"


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

  import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"

  import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
  } from "@/components/ui/select"


// TODO: Change this to make the clotheItems array come from a get request to backend
import clotheItems from '@/data/clotheItem.json'
import {Label} from "@radix-ui/react-label";
import {Link} from "react-router-dom";
import {Button} from "@/components/ui/button.tsx";
import {useState} from "react";
import  user from '../images/user.png'
import React from "react"
import DatePicker from "react-datepicker"; 
import "react-datepicker/dist/react-datepicker.css";

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

    console.table(clotheItems[0])

    const [activeClotheType, setActiveClotheType] =
        React.useState<string | undefined>(undefined);

    const handleClick = (type: string) => {
        console.log(type)
        setActiveClotheType(type)
    }

    const [selectedDate, setSelectedDate] = useState(null);

    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageChange = (event: any) => {
        const imageFile = event.target.files[0];
        setSelectedImage(imageFile);
    };

    // Función para enviar la imagen al servidor
    const handleImageUpload = () => {
        // Aquí puedes implementar la lógica para enviar la imagen al servidor
        console.log("Imagen seleccionada:", selectedImage);
    };

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
                <div className="flex justify-center items-center">
                <Link to={'/oufits'}><Button className="w-26 h-10 self-end mr-6">Oufits</Button></Link>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button className="w-26 h-10 self-end mr-6">Nueva prenda</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[px]">
                        <DialogHeader>
                        <DialogTitle>Agregar una nueva prenda</DialogTitle>
                        <DialogDescription>
                            En este espacio podras configurar el tipo, fecha de compra y foto para tu nueva prenda.
                        </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="name" className="text-right">
                                Tipo
                                </Label>
                                <Select>
                                <SelectTrigger className="col-span-3">
                                    <span>tipo de prenda</span>
                                </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="Gorras">Gorras</SelectItem>
                                        <SelectItem value="Camisas">Camisas</SelectItem>
                                        <SelectItem value="Pantalones">Pantalones</SelectItem>
                                        <SelectItem value="Zapatos">Zapatos</SelectItem>
                                        <SelectItem value="Accesorios">Accesorios</SelectItem>
                                    </SelectContent>
                            </Select>
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="username" className="text-right">
                                Fecha de compra 
                                </Label>
                                <DatePicker
                                    id="birthdate"
                                    selected={selectedDate}
                                    onChange={(date: any) => setSelectedDate(date)}
                                    className="col-span-3"
                                    placeholderText="Select a date"
                                    dateFormat="dd/MM/yyyy"
                                /> 
                            </div>
                            <div>
                                <input type="file" accept="image/*" onChange={handleImageChange}/>
                            </div>
                        </div>
                        <DialogFooter>
                        <Button onClick={handleImageUpload} type="submit">Guardar</Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
  
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
                                <Link to={'/editPorfile'}>
                                    <Button>Editar</Button>
                                </Link>
                                <Link to={'/'}>
                                    <Button>Cerrar la sesión</Button>
                                </Link>
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
                </div>
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