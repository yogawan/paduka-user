import React from "react";

import { Link } from "react-router-dom";

const NavOrganisms = () => {
    return (
        <nav className="fixed top-0 w-full">
            <ul className="flex p-8 border w-full justify-center items-center border-b-[#17171725] bg-white">
                <li>
                    <Link className="py-5 px-5 text-black" to={"/"}>Home</Link>
                </li>
                <li>
                    <Link className="py-5 px-5 text-black" to={"/"}>Team</Link>
                </li>
                <li>
                    <Link className="py-5 px-5 text-white rounded-full bg-[#171717]" to={"/login"}>Ajukan Perpindahan</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavOrganisms;