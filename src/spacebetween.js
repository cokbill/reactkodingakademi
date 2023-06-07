import React, {Component} from "react";
import './index.css';

function SpaceBetween() {
    return (
        <>
        <div className="w-[980px] mx-auto flex flex-row justify-between items-center pt-20">
            <div className="img rounded-md">
                <img src={process.env.PUBLIC_URL + './logo.jpg'} alt="logo" className="rounded-md" />
            </div>
            <div className="button">
                <button className="border px-10 py-3 bg-slate-200 rounded-lg font-bold">Login </button>
            </div>
            </div>
        </>
    )
}

export default SpaceBetween;