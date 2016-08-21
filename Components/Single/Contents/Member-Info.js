import React from "react";

export default class MemberInfo extends React.Component{
    constructor() {
        super();
        this.state = {
            data: []
        }
    };
    componentDidMount() {
      $.ajax({
        url: './json/jsonSingle/Member-Info.json',
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
    return(
        <div key ={comment.id}>
          <img src={comment.Picture} className="profie-pic"/>
          <h2 dangerouslySetInnerHTML={this.rawMarkup(comment.Course_name)}></h2>
          <p dangerouslySetInnerHTML={this.rawMarkup(comment.Content)}></p>
        </div>
      )
    })
    return(
      <div className="content-container">
        {Comments}
      </div>
    )
  }
}
