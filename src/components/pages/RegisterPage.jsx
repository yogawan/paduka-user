import React from "react";

import RegisterOrganisms from "../organisms/RegisterOrganisms";
import TabOrganisms from "../organisms/TabOrganisms";
import LogoOrganisms from "../organisms/LogoOrganisms";

const RegisterPage = () => {
    return (
        <div className="flex flex-col justify-center items-center h-[100vh] p-2">
            <LogoOrganisms></LogoOrganisms>
            <RegisterOrganisms></RegisterOrganisms>
            <TabOrganisms></TabOrganisms>
        </div>
    )
}

export default RegisterPage;