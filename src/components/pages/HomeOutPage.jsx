import React from "react";

import NavOrganisms from "../organisms/NavOrganisms";
import HeroOrganisms from "../organisms/HeroOrganisms";
import FooterOrganisms from "../organisms/FooterOrganisms";

const HomeOutPage = () => {
    return (
        <div className="flex flex-col justify-center items-center mt-28 w-full">

            {/* Navigasi */}
            <NavOrganisms></NavOrganisms>

            {/* Hero */}
            <HeroOrganisms></HeroOrganisms>
            
            {/* Footer */}
            <FooterOrganisms></FooterOrganisms>
        </div>
    )
}

export default HomeOutPage;