import React from "react";
import Header from "../components/header.jsx";
import Content from "../components/content.jsx";
import Footer from "../components/footer.jsx";

function HomePage() {
  return (
    <>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
          integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w=="
          crossorigin="anonymous"
        />
      </head>
      <Header/>
      <Content/>
      <Footer/>
    </>
  );
}

export default HomePage;
