import React, { ReactComponentElement } from 'react';
import {Navigate} from "react-router-dom";
import {Error404} from "./Error404";

type PropsType = {
    children: ReactComponentElement<any>
}

export const ProtectedRoute: React.FC<PropsType> = ({children}) => {

    const logged = false;

    return logged
        ? children : <Navigate to={"/page/:error"}/>;
};

