import React from "react";
import { HomePageContent } from "./components/HomePageContent/HomePageContent";
import PageContainer from "./components/PageContainer/PageContainer";

const Home = () => {
  return (
    <PageContainer showHeader={false} customStyles={{ background: 'none' }}>
      <HomePageContent />
    </PageContainer>
  )
}

export default Home;