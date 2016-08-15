import React from "react";
import { IndexLink, Link, withRouter } from "react-router";

export default class Introduction extends React.Component{
    constructor() {
        super();
        this.state = {
            data: []
        }
    };
    componentDidMount() {
      $.ajax({
        url: './json/jsonHome/MAD.json',
        // dataType: 'json',
        cache: false,
        success: function(res){
          console.log(res);
          this.setState({data : res});
        }.bind(this),
        error: function(res){
          console.log(res);
        }.bind(this)
      });
    }
    rawMarkup(markdown) {
      var md = new Remarkable();
      var rawMarkup = md.render(markdown);
      return { __html: rawMarkup };
    }
    render(){
      console.log("data:" + this.state.data);
        var Comments = this.state.data.map((comment)=>{
    return (
      <div className="item">
        <div key={comment.id}>
          <img src={comment.url} className='profile_img'>
          </img>
          <h3 dangerouslySetInnerHTML={this.rawMarkup(comment.Name)} className='text-center'>
          </h3>
          <p dangerouslySetInnerHTML={this.rawMarkup(comment.Content)} className='text-center'>
          </p>
        </div>
      </div>
        )
      })
      return(
        <div className="white-bg">
          <div className="container">
            <div className="row">
              <div className="col-sm-3">
                <p className="polygon_shape">
                  Mobile apps development (MAD)
                </p>
              </div>
              <div className='col-sm-9'>
                {Comments}
              </div>
            </div>
          </div>
        </div>
    )
  }
};
