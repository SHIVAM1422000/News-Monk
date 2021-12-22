import React, { Component } from 'react';
import NewsItem from './NewsItem';

export class News extends Component {
      
    constructor(props){
        super(props);
        this.state={
            
        }
    }


    render() {
        return (
            <div>
                <h1>News Component</h1>
                <div className="row">
                    <div className="col-md-4">
                    <NewsItem title="This is title bar" des="This is description bar"/>
                    </div>
                    <div className="col-md-4">
                    <NewsItem title="This is title bar" des="This is description bar"/>
                    </div>
                    <div className="col-md-4">
                    <NewsItem title="This is title bar" des="This is description bar"/>
                    </div>
                </div>
               
            </div>
        )
    }
}

export default News
