import React from "react";
import ReactDOM from "react-dom";
import Header from "../Header/Header";
import FullBanner from "../FullBanner/FullBanner";
import Banner from "../FullBanner/Banner";
import MoreInfoBanner from "../FullBanner/MoreInfoBanner";
import ContentBlock from "../ContentBlock/ContentBlock";
import Footer from "../Footer/Footer";
import MAD from "../Contents/MAD";
import Web from "../Contents/Web";
import C4E from "../Contents/C4E";

export default class HOMELayout extends React.Component{
  render() {
    return (
      <div id="home">
        <Header/>
        <FullBanner/>
        <ContentBlock><MAD/></ContentBlock>
        <ContentBlock><Web/></ContentBlock>
        <ContentBlock><C4E/></ContentBlock>
        <Banner/>
        <MoreInfoBanner/>
        <Footer/>
      </div>
    );
  }
}
