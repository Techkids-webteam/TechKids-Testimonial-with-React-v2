import React from "react";

export default class CourseInfo extends React.Component{
  constructor() {
        super();
        this.state = {
            data: []
        }
    };
  componentDidMount() {
        $.ajax({
            url: './json/jsonSingle/Course-Info.json',
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
      <div key={comment.id}>
        <div className='course-info'>
          <div className="course-info">
          <div className="col-md-8 col-xs-12">
            <h2 dangerouslySetInnerHTML={this.rawMarkup(comment.Course-name)}>
            </h2>
            <p dangerouslySetInnerHTML={this.rawMarkup(comment.Content)}>
            </p>
            <button type="button" name="button" class="btn register-btn">TÌM HIỂU NGAY</button>
          </div>
          <div className="col-md-4 col-xs-6">
            <img src={comment.Picture} className='course_picture'/>
          </div>
        </div>
        </div>
      </div>
      )
    })
      return(
        <div className="course">
          <h1 className="text-center title">CÁC KHÓA HỌC</h1>
          <div className="content-container">
            <div>{Comments}</div>
          </div>
        </div>

      )
  }
};
