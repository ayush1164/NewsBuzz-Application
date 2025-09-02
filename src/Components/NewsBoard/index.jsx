import { useState, useEffect } from "react";
import NewsItem from "../NewsItem";


const NewsBoard = (props) => {

    const [articles, setArticle] = useState([]);

    const {category} = props;


    useEffect(() => {

        let apiKey = 'f48e2fdbbb234ec9bb00c693eabd339f';

        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`;

        fetch(url).then(response => response.json()).then(data => setArticle(data.articles)).catch( error => console.log(error))

    }, [category]);

    return (

        <>
                <h1 className="text-center"> Latest <span className="text-info" style={{fontSize : "larger", fontWeight : "600"}}> News </span> </h1>
                
                <br />

                {
                    articles.map( (news, index) => {
                        return <NewsItem    key={index}
                                            title = {news.title}
                                            description = {news.description}
                                            src = {news.urlToImage}
                                            url = {news.url}
                                />
                    })
                }
        </>

    )

}

export default NewsBoard;