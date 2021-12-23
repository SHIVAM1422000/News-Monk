import React, { Component } from "react";

export class NewsItem extends Component {


  render() {
    return (
      <div className="container">
          {/* new item content  */}
        <div className="card" style={{width:"18 rem",}}>
          <img src={this.props.iurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{this.props.title}...</h5>
            <p className="card-text">{this.props.description}...</p>
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
