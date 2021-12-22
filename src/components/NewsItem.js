import React, { Component } from "react";

export class NewsItem extends Component {

// constructor(props){
//     super(props);
//     this.state={
//         title:"This is title",
//         des:"This is des"
//     }
// }




  render() {
    return (
      <div>

        <div className="card" style={{width:"18 rem",}}>
          <img src="https://i.pinimg.com/564x/1a/3e/a7/1a3ea756b8ec93542184c8bb4631205e.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{this.props.title}</h5>
            <p className="card-text">{this.props.des}</p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
     
      </div>
    );
  }
}

export default NewsItem;
