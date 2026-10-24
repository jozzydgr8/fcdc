import { Footer } from "../../shared/Footer"
import { Navbar } from "../../shared/Navbar"
import { About } from "./homeComponent/About"
import { CTA } from "./homeComponent/CTA"
import { Hero } from "./homeComponent/Hero"
import { Products } from "./homeComponent/Products"
import { Service } from "./homeComponent/Service"
import { WhatWeDo } from "./homeComponent/WhatWeDo"

export const HomePage = () => {
    return(
        <>
        <Navbar/>
        <Hero/>
        <Products/>
        <Service/>
        <WhatWeDo/>
        <About/>
        <CTA/>
        <Footer/>
        </>
    )
}