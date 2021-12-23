import React, { Component } from "react";

export class NewsItem extends Component {

// constructor(props){
//     super(props);
//     this.state={
//         title:"This is title",
//         des:"This is des"
//     }
// }

/* <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */


  render() {
    return (
      <div>

        <div className="card" style={{width:"18 rem",}}>
          <img src={this.props.iurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{this.props.title}...</h5>
            <p className="card-text">{this.props.description}...</p>
            <a href={this.props.nurl} className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
     
      </div>
    );
  }
}

export default NewsItem;
