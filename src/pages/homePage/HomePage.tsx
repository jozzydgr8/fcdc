import { Navbar } from "../../shared/Navbar"
import { Hero } from "./homeComponent/Hero"
import { Products } from "./homeComponent/Products"
import { Service } from "./homeComponent/Service"

export const HomePage = () => {
    return(
        <>
        <Navbar/>
        <Hero/>
        <Products/>
        <Service/>
        </>
    )
}