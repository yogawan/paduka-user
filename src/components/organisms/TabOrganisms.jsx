import React from "react";

import { Link } from "react-router-dom";

const TabOrganisms = () => {
    return (
        <nav className="fixed bottom-0">
            <ul className="flex p-5 border border-[#17171725] rounded-full mb-10">
                <li className="">
                    <Link className="p-3 rounded-full text-[#17171795]" to={"/"}>Home</Link>
                </li>
                <li className="">
                    <Link className="p-3 rounded-full text-[#17171795]" to={"/login"}>Login</Link>
                </li>
                <li className="">
                    <Link className="p-3 rounded-full text-[#17171795]" to={"/register"}>Register</Link>
                </li>
            </ul>
        </nav>
    )
}

export default TabOrganisms;