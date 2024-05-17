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

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardImage,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"


import clotheItem from '@/data/clotheItem.json'

export default function WardrobePage() {
    const clotheTypes = [
        'SHIRT',
        'PANTS',
        'DRESS',
        'SKIRT',
        'JACKET',
        'COAT',
        'SNEAKERS',
        'BOOTS',
        'SANDALS',
        'HEELS']

    console.table(clotheItem[0])

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

            <div className="grid grid-cols-[1fr_auto] gap-4 h-[80vh] p-6">
                <div className="showcase grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                    {clotheItem
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
        </>
    )
}