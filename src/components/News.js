import React, { Component } from "react";
import NewsItem from "./NewsItem";
import uuid from "react-uuid";
import Loading from "./Loading";




export class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      lim: 1,
    };
  }

  async componentDidMount() {
    this.setState({loading:true});
    let api_url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=11a7d98704394439a16e4b1c90a5b18b&page=1&pageSize=20`;
    let data = await fetch(api_url);
    let pd = await data.json();
    let temp = pd.articles;
    let lim = Math.ceil(pd.totalResults / this.props.pageSize);
    this.setState({ articles: temp, lim: lim ,loading:false});
  }

  handleNextClick = async () => {
    this.setState({loading:true});
    let api_url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=11a7d98704394439a16e4b1c90a5b18b&page=${
      this.state.page + 1
    }&pageSize=20`;
    let data = await fetch(api_url);
    let pd = await data.json();
    let temp = pd.articles;
    this.setState({ articles: temp, page: this.state.page + 1,loading:false });
  };

  handlePrevClick = async () => {
    this.setState({loading:true});
    let api_url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=11a7d98704394439a16e4b1c90a5b18b&${
      this.state.page - 1
    }&pageSize=20`;
    console.log("New Url");
    console.log(api_url);
    let data = await fetch(api_url);
    let pd = await data.json();
    let temp = pd.articles;
    this.setState({ articles: temp, page: this.state.page - 1,loading:false });
  };

  render() {
    return (
      <div className="container">
           {this.state.loading && <Loading/>}
        <div className="row mx-3 mt-3">
          {!this.state.loading && this.state.articles.map((element) => {
            // if(element.urlToImage){
            return (
              <div className="col-md-4 mt-3" key={uuid()}>
                <NewsItem
                  title={element.title ? element.title: ""}
                  description={
                    !element.description ? "" : element.description.slice(0, 88)
                  }
                  iurl={element.urlToImage}
                  nurl={element.url}
                  date={element.publishedAt?element.publishedAt:"2022"}
                  source={element.source.name}
                />
              </div>
            );
                // }
          })}
        </div>

        {/* /**button  content */}
        <div className="container mt-3 d-flex justify-content-between">
          <button
            type="button"
            disabled={this.state.page === 1}
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            {" "}
            &larr; Previous
          </button>
          <button
            type="button"
            disabled={this.state.page + 1 > this.state.lim}
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
