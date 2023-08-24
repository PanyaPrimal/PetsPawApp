import React from "react";
import { LoadingSvg, PawSvg } from "./../public/assets/svg/index";
const Home = () => {
    return (
        <section className="w-full flex-center flex-col">
            <h1 className="text-center orange_grad">
                discover crap
            </h1>
            <div>
                <PawSvg size={20}/>
                <PawSvg size={30}/>
                <LoadingSvg size={25}/>
                <LoadingSvg size={20} color="purple"/>
            </div>
        </section>
    )
}

export default Home;