import React, { Component } from 'react';
import NewsItem from './NewsItem';
  



export class News extends Component {
   
    articles=[
        {
        source: {
        id: "bbc-news",
        name: "BBC News"
        },
        author: "https://www.facebook.com/bbcnews",
        title: "Indian PM Modi's Twitter hacked with bitcoin tweet",
        description: "The Indian prime minister's account had a message stating that bitcoin would be distributed to citizens.",
        url: "https://www.bbc.co.uk/news/world-asia-india-59627124",
        urlToImage: "https://ichef.bbci.co.uk/news/1024/branded_news/5998/production/_122063922_mediaitem122063921.jpg"
        
    },
    
    {
        source: {
        id: "bbc-news",
        name: "BBC News"
        },
        author: "https://www.facebook.com/bbcnews",
        title: "Indian PM Modi's Twitter hacked with bitcoin tweet",
        description: "The Indian prime minister's account had a message stating that bitcoin would be distributed to citizens.",
        url: "https://www.bbc.co.uk/news/world-asia-india-59627124",
        urlToImage: "https://ichef.bbci.co.uk/news/1024/branded_news/5998/production/_122063922_mediaitem122063921.jpg"
        
    },
    
    {
        source: {
        id: "bbc-news",
        name: "BBC News"
        },
        author: "https://www.facebook.com/bbcnews",
        title: "Indian PM Modi's Twitter hacked with bitcoin tweet",
        description: "The Indian prime minister's account had a message stating that bitcoin would be distributed to citizens.",
        url: "https://www.bbc.co.uk/news/world-asia-india-59627124",
        urlToImage: "https://ichef.bbci.co.uk/news/1024/branded_news/5998/production/_122063922_mediaitem122063921.jpg"
        
    },
    
    {
        source: {
        id: "bbc-news",
        name: "BBC News"
        },
        author: "https://www.facebook.com/bbcnews",
        title: "Indian PM Modi's Twitter hacked with bitcoin tweet",
        description: "The Indian prime minister's account had a message stating that bitcoin would be distributed to citizens.",
        url: "https://www.bbc.co.uk/news/world-asia-india-59627124",
        urlToImage: "https://ichef.bbci.co.uk/news/1024/branded_news/5998/production/_122063922_mediaitem122063921.jpg"
        
    },
    
    ]


    constructor(props){
        super(props);
        this.state={
            article:this.articles,
            loading:false
        }
    }


    render() {
        return (
            <div>
                <h1>News Component</h1>
                <div className="row mx-3 mt-3">
                    {this.state.article.map(element)=>{}}
                    <div className="col-md-4">
                    <NewsItem title={this.state.article[0].title} description={this.state.article[0].description} iurl={this.state.article[0].urlToImage}/>
                    </div>
                </div>
               
            </div>
        )
    }
}

export default News
