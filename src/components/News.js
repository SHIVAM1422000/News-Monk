import React, { Component } from "react";
import NewsItem from "./NewsItem";
import uuid from 'react-uuid'
export class News extends Component {
    // articles=[];
//   articles = [
//     {
//       source: {
//         id: "bbc-news",
//         name: "BBC News",
//       },
//       author: "https://www.facebook.com/bbcnews",
//       title: "Indian PM Modi's Twitter hacked with bitcoin tweet",
//       description:
//         "The Indian prime minister's account had a message stating that bitcoin would be distributed to citizens.",
//       url: "https://www.bbc.co.uk/news/world-asia-india-59627124",
//       urlToImage:
//         "https://ichef.bbci.co.uk/news/1024/branded_news/5998/production/_122063922_mediaitem122063921.jpg",
//     },

//     {
//       source: {
//         id: "bbc-news",
//         name: "BBC News",
//       },
//       author: "https://www.facebook.com/bbcnews",
//       title: "Indian PM Modi's Twitter hacked with bitcoin tweet",
//       description:
//         "The Indian prime minister's account had a message stating that bitcoin would be distributed to citizens.",
//       url: "https://www.bbc.co.uk/news/world-asia-india-59627124",
//       urlToImage:
//         "https://ichef.bbci.co.uk/news/1024/branded_news/5998/production/_122063922_mediaitem122063921.jpg",
//     },

//     {
//       source: {
//         id: "bbc-news",
//         name: "BBC News",
//       },
//       author: "https://www.facebook.com/bbcnews",
//       title: "Indian PM Modi's Twitter hacked with bitcoin tweet",
//       description:
//         "The Indian prime minister's account had a message stating that bitcoin would be distributed to citizens.",
//       url: "https://www.bbc.co.uk/news/world-asia-india-59627124",
//       urlToImage:
//         "https://ichef.bbci.co.uk/news/1024/branded_news/5998/production/_122063922_mediaitem122063921.jpg",
//     },

//     {
//       source: {
//         id: "bbc-news",
//         name: "BBC News",
//       },
//       author: "https://www.facebook.com/bbcnews",
//       title: "Indian PM Modi's Twitter hacked with bitcoin tweet",
//       description:
//         "The Indian prime minister's account had a message stating that bitcoin would be distributed to citizens.",
//       url: "https://www.bbc.co.uk/news/world-asia-india-59627124",
//       urlToImage:
//         "https://ichef.bbci.co.uk/news/1024/branded_news/5998/production/_122063922_mediaitem122063921.jpg",
//     },
//   ];

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
    };
  }

  async componentDidMount(){
   
    let api_url="https://newsapi.org/v2/top-headlines?country=in&apiKey=11a7d98704394439a16e4b1c90a5b18b";
    let data=await fetch(api_url);
    let pd=await data.json();
    let temp=pd.articles;
    this.setState({articles:temp});
    }


  render() {
    return (
      <div>
        <h1>News Component</h1>
        <div className="row mx-3 mt-3">
          {this.state.articles.map((element) => {
            return(<div className="col-md-4 mt-3" key={uuid()}>  
                   
              <NewsItem title={element.title?element.title.slice(0,44):""} description={!element.description?"":element.description.slice(0,88)} iurl={element.urlToImage} nurl={element.url}/>
            </div>);

            

          })};

          
        </div>
      </div>
    );
  }
}

export default News;
