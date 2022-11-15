import React from "react"

export const Grid = () => {
    return (
        <div className="flex mx-auto mt-10 justify-center">
            <div className="grid grid-cols-3 gap-4">
            <div className=" bg-red-500 w-[250px] h-[250px] rounded-lg">Text</div>
            <div className=" bg-red-500 w-[250px] h-[250px] rounded-lg">Text</div>
            <div className=" bg-red-500 w-[250px] h-[250px] rounded-lg">Text</div>
            <div className=" bg-red-500 w-[250px] h-[250px] rounded-lg">Text</div>
        </div>
        </div>
        
    )
}