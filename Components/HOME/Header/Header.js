import React from "react";
import { IndexLink, Link, withRouter } from "react-router";
export default class Header extends React.Component{
  render(){
    return (
      <section className = "navbar navbar-fixed-top">
            <nav id="main_nav" className ="navbar navbar-inverse hidden-xs">
                <div className="container-fluid navbar_1">
                    <ul className = "nav navbar-nav navbar-right">
                        <li><a href="#">TRANG CHỦ</a></li>
                        <li><a href ="#">LIÊN HỆ</a></li>
                    </ul>
                </div>
            </nav>
            <nav className = "navbar navbar-default ">
                <div className="container-fluid navbar_2">
                    <div className="navbar-header col-sm-3">
                        <a className="img-responsive navbar-brand" href="#"><img src="img/TechkidsLogo.png"/></a>
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>

                    </div>
                    <div className="collapse navbar-collapse navbar-right col-sm-8" id="myNavbar">
                        <ul className = "nav navbar-nav">
                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">Về Chúng Tôi<span className="visible-xs-inline-block caret"></span></a>
                                    <ul className="dropdown-menu">
                                        <li><a href="#">Giới thiệu  chung</a></li>
                                        <li><a href="#">Sứ mệnh, tầm nhìn, giá trị cốt lõi</a></li>
                                    </ul>
                            </li>
                            <li className="dropdown">
                                <a href="#" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" className="dropdown-toggle">Các Khóa Học<span className="visible-xs-inline-block caret"></span></a>
                                    <ul className="dropdown-menu">
                                        <li><a href="#">Lập Trình iOS</a></li>
                                        <li><a href="#">Lập Trình Android</a></li>
                                        <li><a href="#">Lập trình Full-stack Web</a></li>
                                        <li><a href="#">Code For Everyone</a></li>
                                        <li><a href="#">Code For Kids </a></li>
                                    </ul>
                            </li>
                            <li><a href="#">Các Sự Kiện</a></li>
                            <li><a href="#">Summer Code Camp 2016</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </section>
    );
  }
};
