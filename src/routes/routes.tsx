import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import {Error404} from "../components/pages/Error404";
import {Page} from "../components/pages/Page";
import {dataState} from "../data/dataState";
import React from "react";
import { ProtectedRoute } from "../components/pages/ProtectedRoute";
import { Protected } from "../components/pages/Protected";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <Error404/>,
        children: [
            {
                path: '/page/:id',
                element: (
                    <Page pages={dataState.pages}/>
                )
            },
            {
                path: '/page/protected',
                element: (
                    <ProtectedRoute>
                            <Protected/>
                    </ProtectedRoute>
                )
            },
            {
                path: '/page/error',
                element: (
                    <Error404/>
                )

            }
        ]
    }
])