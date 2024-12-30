import React from "react";

import InNavOrganisms from "../organisms/InNavOrganisms";
import Status from "../organisms/StatusOrganisms";

const RequestPage = () => {
    return (
        <div>
            <h1>Request</h1>
            <Status></Status>
            <InNavOrganisms></InNavOrganisms>
        </div>
    )
}

export default RequestPage;