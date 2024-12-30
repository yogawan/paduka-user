import React from "react";

import LoginOrganisms from "../organisms/LoginOrganisms";
import TabOrganisms from "../organisms/TabOrganisms";
import LogoOrganisms from "../organisms/LogoOrganisms";

const LoginPage = () => {
    return (
        <div className="flex flex-col justify-center items-center h-[100vh] p-2">
            <LogoOrganisms></LogoOrganisms>
            <LoginOrganisms></LoginOrganisms>
            <TabOrganisms></TabOrganisms>
        </div>
    )
}

export default LoginPage;