import React from "react";

import { Link } from "react-router-dom";

const InNavOrganisms = () => {
    return (
        <nav className="fixed top-0 w-full bg-white border border-b-[#17171715]">
            <ul className="flex justify-center mt-7 mb-7">
                <li>
                    <Link className="text-[#17171775] ml-3 mr-3" to={"/home"}>Ajukan Perpindahan</Link>
                </li>
                <li>
                    <Link className="text-[#17171775] ml-3 mr-3" to={"/request"}>Semua Pengajuan</Link>
                </li>
                <li>
                    <Link className="text-[#17171775] ml-3 mr-3" to={"/profile"}>Profile</Link>
                </li>
            </ul>
        </nav>
    )
}

export default InNavOrganisms;