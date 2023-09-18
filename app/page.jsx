import React from "react";
import { HomePageContent } from "./components/HomePageContent/HomePageContent";

const Home = () => {
  return (
    <div className={' bg-primary-soft dark:bg-black-soft ml-auto mb-[30px] rounded-[20px] flex-col w-full'}>
      <HomePageContent></HomePageContent>
    </div>
  )
}

export default Home;