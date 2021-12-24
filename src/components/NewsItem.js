import React, { Component } from "react";

export class NewsItem extends Component {


  render() {
    return (
      <div className="container">
          {/* new item content  */} 
          <span class="badge bg-danger text-warning">{this.props.source}</span>
        <div className="card" style={{width:"18 rem",}}>
       
          <img src={this.props.iurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{this.props.title}</h5>
            <p className="card-text">{this.props.description}...</p>
            <p class="card-text"><small class="text-muted"><strong>Published On: </strong>{new Date(this.props.date).toGMTString()}</small></p>
            <a rel="noreferrer" href={this.props.nurl} target="_blank" className="btn btn-dark text-light">
              Go somewhere
            </a>
          </div>
        </div>

      </div>
    );
  }
}

export default NewsItem;
