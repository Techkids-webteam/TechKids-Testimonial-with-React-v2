import React from "react";

export default class FullBanner extends React.Component{
  render(){
    return (
      <div className="background img-responsive">
        <div className="col-lg-12 visible-lg img_content_big">
            <h1>CÙNG GẶP GỠ NHỮNG TECHKIDS NHÉ!</h1>
            <p>Những dòng yêu thương từ gần 300 người, kể làm sao hết...</p>
        </div>
        <div className="col-md-12 col-sm-12 hidden-lg hidden-xs img_content_medium">
            <h1>CÙNG GẶP GỠ NHỮNG TECHKIDS NHÉ!</h1>
            <p>Những dòng yêu thương từ gần 300 người, kể làm sao hết...</p>
        </div>
        <div className="col-xs-12 hidden-lg hidden-md hidden-sm img_content_small">
            <h1>CÙNG GẶP GỠ NHỮNG TECHKIDS NHÉ!</h1>
            <p>Những dòng yêu thương từ gần 300 người, kể làm sao hết...</p>
        </div>
    </div>
    );
  }
};
