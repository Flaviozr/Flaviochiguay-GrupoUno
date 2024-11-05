// eslint-disable-next-line no-unused-vars
import React from "react";
import {PacmanLoader} from 'react-spinners'

// eslint-disable-next-line no-unused-vars,react-refresh/only-export-components
function Loading(){
    return(
        <div className="container mx-auto flex justify-center items-center h-[50vh]">
            <p>Cargando...</p>
            <PacmanLoader color="#2D3A4B" size="70" />
        </div>
    )
}