import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {Link} from "react-router-dom";

function WhizNavBar() {
    return (
        <>
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <Link to={'/signup'} >
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Sign Up
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link to={'/login'} >
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Log In
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </>
    )
}

export function LandingPage () {
    return (
        <>
            <WhizNavBar></WhizNavBar>
        </>
    )
}