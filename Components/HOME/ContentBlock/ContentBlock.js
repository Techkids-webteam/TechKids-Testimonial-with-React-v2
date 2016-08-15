import React from "react";


export default class ContentBlock extends React.Component{
  render(){
    return (
      <section>
        {this.props.children}
      </section>
    );
  }
};
