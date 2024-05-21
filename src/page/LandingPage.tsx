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
import {Card, CardContent} from "@/components/ui/card"
import {Button} from "@/components/ui/button.tsx";
import {Separator} from "@/components/ui/separator.tsx";

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
    const carouselImages = [
        '/woman-blue-coat.jpg',
        '/woman-streetwear-cool.jpg',
        '/woman-leather-jacket.jpg'
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

export function LandingPage() {
    return (
        <>
            <WhizNavBar></WhizNavBar>
            <WhizHeader></WhizHeader>
            <Separator className={'m-10'}/>
            <WhizCarousel></WhizCarousel>
            <Separator className={'m-10'}/>
        </>
    )
}