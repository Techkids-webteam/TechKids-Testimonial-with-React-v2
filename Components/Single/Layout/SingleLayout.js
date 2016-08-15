import React from "react";
import ReactDOM from "react-dom";
import Header from "../../HOME/Header/Header";
import FullBanner from "../FullBanner/FullBanner";
import MoreInfoBanner from "../FullBanner/MoreInfoBanner";
import ContentBlock from "../ContentBlock/ContentBlock";
import Footer from "../../HOME/Footer/Footer";
import CouseInfo from "../Contents/Course-Info";
import MemberInfo from "../Contents/Member-Info";

export default class HOMELayout extends React.Component{
  render() {
    return (
      <div id="single">
        <Header/>
        <FullBanner/>
        <MemberInfo/>
        <CouseInfo/>
        <MoreInfoBanner/>
        <Footer/>
      </div>
    );
  }
}
