import React from "react";
import ReactDOM from "react-dom";
import Header from "../../HOME/Header/Header";
import MoreInfoBanner from "../FullBanner/MoreInfoBanner";
import ContentBlock from "../ContentBlock/ContentBlock";
import Footer from "../../HOME/Footer/Footer";
import CouseInfo from "../Contents/Course-Info";
import MemberInfo from "../Contents/Member-Info";

export default class SingleLayout extends React.Component{
  render() {
    return (
      <div id="single">
        <Header/>
        <CouseInfo/>
        <MemberInfo/>
        <MoreInfoBanner/>
        <Footer/>
      </div>
    );
  }
}
