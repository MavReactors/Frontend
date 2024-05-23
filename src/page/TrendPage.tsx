import React from "react";
import { Heart, LogIn, CircleUserRound } from 'lucide-react';
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetFooter, SheetTitle, SheetClose } from "@/components/ui/sheet";
import user from "@/images/user.png";
import "../styles/TrendsPageStyles.css";

import coatMan from '../assets/coat-man.jpg';
import orangeGirl from '../assets/orange-girl.jpg';
import winterGuy from '../assets/winter-guy.jpg';

// Tipos de props
interface TrendsProps {
    trends: { likes: number }[];
}

const TrendTop: React.FC<TrendsProps> = ({ }) => {
    const carouselImages = [
        coatMan,
        orangeGirl,
        winterGuy,
        coatMan
    ];

    return (
        <div className="flex flex-wrap">
            {carouselImages.map((img, index) => (
                <div key={index} className="w-1/4 p-2">
                    <div className="flex flex-col h-full">
                        <Card className="flex flex-col flex-grow justify-between">
                            <CardContent className="flex aspect-square items-center justify-center p-6">
                                <img src={img} alt={'Outfit picture'} className="rounded" />
                            </CardContent>
                            <CardFooter className="flex justify-start">
                                <Badge variant="outline">Outline</Badge>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            ))}
        </div>
    );
};

const TrendCarousel: React.FC = () => {
    const carouselImages = [
        coatMan,
        orangeGirl,
        winterGuy,
        coatMan,
        orangeGirl,
        winterGuy
    ];

    return (
        <Carousel
            opts={{ align: "center" }}
            className="w-full max-w-[80vw] mx-auto"
        >
            <CarouselPrevious />
            <CarouselContent>
                {carouselImages.map((img, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                        <div className="flex flex-col h-full">
                            <Card className="flex flex-col flex-grow justify-between">
                                <CardContent className="flex aspect-square items-center justify-center p-6">
                                    <img src={img} alt={'Outfit picture'} className="rounded" />
                                </CardContent>
                                <CardFooter className="flex justify-between">
                                    <Button>
                                        <Heart className="mr-2 h-4 w-4" /> Like
                                    </Button>
                                    <Badge variant="outline">Outline</Badge>
                                </CardFooter>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselNext />
        </Carousel>
    );
};

export const TrendsPage: React.FC = () => {
    const trends = Array(4).fill({ likes: 1560 });

    return (
        <div className="trends-container">
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

            <section className="trends-section">
                <h1>Tendencias</h1>
                <TrendTop trends={trends} />
            </section>

            <section className="outfits-section">
                <h1>Elige las nuevas tendencias</h1>
                <TrendCarousel />
            </section>
        </div>
    );
};
