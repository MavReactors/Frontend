import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {Link} from "react-router-dom";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card"
import {Button} from "@/components/ui/button.tsx";
import {Separator} from "@/components/ui/separator.tsx";

import womanBlueCoat from '../assets/woman-blue-coat.jpg'
import womanLeatherJacket from '../assets/woman-leather-jacket.jpg'
import womanStreetwearCool from '../assets/woman-streetwear-cool.jpg'

function WhizNavBar() {
    return (
        <>
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()} href={'/signup'}>
                            Sign Up
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()} href={'/login'}>
                            Log In
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </>
    )
}

function WhizHeader() {
    return (
        <div className={'p-6 '}>

            <div className={'flex justify-center items-center'}>
                <div className={'flex flex-col justify-center items-center'}>
                    <h1 className={'text-6xl font-bold text-gray-900 mb-10'}>Lista para subir el nivel de tu
                        closet?</h1>
                    <p className={'text-2xl mb-7'}>Wardrobe Whiz será to asistente perfecto para administrar to
                        closet</p>
                    <Link to={'/signup'}>
                        <Button>Sign Up</Button>
                    </Link>
                </div>
                {/*<div className={'ml-10'}>*/}
                {/*    <img className={'w-[30vw]'} src={'/woman-streetwear-cool.jpg'} alt={'Man with orange coat'}/>*/}
                {/*</div>*/}
            </div>
        </div>
    )
}

function WhizCarousel() {
    // const carouselImages = [
    //     '/woman-blue-coat.jpg?base64',
    //     '/woman-streetwear-cool.jpg?base64',
    //     '/woman-leather-jacket.jpg?base64'
    // ]

    const carouselImages = [
        womanBlueCoat,
        womanLeatherJacket,
        womanStreetwearCool
    ]

    return (
        <>
            <div className={'flex flex-col justify-between items-center'}>
                <h1 className={'text-3xl font-bold text-gray-900 mb-10'}>Todos tus Outfits</h1>
                <Carousel
                    opts={{
                        align: "center",
                    }}
                    className="w-full max-w-[80vw] mx-auto"
                >
                    <CarouselContent>
                        {carouselImages.map((img, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                <div className="p-0">
                                    <Card>
                                        <CardContent className="flex aspect-square items-center justify-center p-6">
                                            <img src={img} alt={'Outfit picture'} className={'rounded'}/>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious/>
                    <CarouselNext/>
                </Carousel>
            </div>
        </>
    )
}

function WhizWhy() {
    return (
        <div className={'grid grid-cols-2 gap-8 pl-10 pr-10'}>
            <div className={'flex flex-col justify-center'}>
                <h1 className={'text-3xl font-bold text-gray-900 mb-10'}>¿Por qué?</h1>
                <p>Crear una app de closet virtual responde a la necesidad de simplificar la gestión de prendas de
                    vestir en el mundo moderno. Con la creciente cantidad de ropa que poseemos, una plataforma digital
                    proporciona una solución eficiente para organizar, catalogar y planificar conjuntos, optimizando así
                    el tiempo y espacio físico, y permitiendo una experiencia de vestimenta más personalizada y
                    sostenible.</p>
            </div>
            <div className="flex justify-center items-center">
                <img src={'/wardrobe1.jpg'} alt={'Hello'} className={'max-w-xl rounded'}/>
            </div>
        </div>
    )
}

function WhizFeatures() {
    const features = [
        {
            title: 'Closet',
            description: 'En tu closet virtual puedes guardar toda tu ropa. Y accede a ella cuándo quieras!'
        },
        {
            title: 'Outfits',
            description: 'Arma tus outfits como quieras y organiza tus eventos especiales desde tu celular!!'
        },
        {
            title: 'Tendencias',
            description: 'Encuentra ideas de outfits votadas por la comunidad y publica tus propios outfits!'
        }
    ]
    return (
        <div className={'flex flex-col items-center'}>
            <h1 className={'text-3xl font-bold text-gray-900 mb-10'}>Features</h1>
            <div className={'grid grid-cols-3 gap-8 pl-10 pr-10'}>
                {features.map((feature, index) => (
                    <Card key={index} className={'w-[250px] p-3 min-h-10'}>
                        <CardHeader>
                            <CardTitle>{`${feature.title}`}</CardTitle>
                            <CardDescription>Feature</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>{feature.description}</p>
                        </CardContent>
                        <CardFooter>
                            Descubrelo!
                        </CardFooter>
                    </Card>
                ))

                }
            </div>
        </div>
    )
}

export function LandingPage() {
    return (
        <div className={'pl-5 pr-5'}>
            <WhizNavBar></WhizNavBar>
            <WhizHeader></WhizHeader>
            <Separator className={'m-10'}/>
            <WhizCarousel></WhizCarousel>
            <Separator className={'m-10'}/>
            <WhizWhy/>
            <Separator className={'m-10'}/>
            <WhizFeatures/>

        </div>
    )
}