import { useState, useEffect } from "react";
import NewsItem from "../NewsItem";


const NewsBoard = (props) => {

    // const [articles, setArticle] = useState([]);
    // const [isDataShow, setIsdataShow] = useState( false );

    const [allvalues, setValues] = useState({
        articles : [],
        isDataShow : false
    })

    const {category} = props;


    useEffect(() => {

        // fetch(url).then(response => response.json()).then(data => setArticle(data.articles)).catch( error => console.log(error))

        const onFetchNews = async() => {

                let apiKey = 'f48e2fdbbb234ec9bb00c693eabd339f';

                let api = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`;

                

                try {

                    const response = await fetch(api);

                    const data = await response.json();

                    if( response.ok === true ){

                        setValues({...allvalues, articles : data.articles, isDataShow : true});

                    }
                    
                } 
                
                catch (error) {
                    console.log(error);
                }

        }

        onFetchNews();

    }, [category]);

    return (

        <>
                <h1 className="text-center"> Latest <span className="text-info" style={{fontSize : "larger", fontWeight : "600"}}> News </span> </h1>
                
                <br />

                {
                    allvalues.isDataShow ?      allvalues.articles.map( ( each, index ) => {

                                                        return  <NewsItem   key = {index} 
                                                                            title = {each.title}
                                                                            description = {each.description}
                                                                            src = {each.urlToImage}
                                                                            url = {each.url}
                                                                    />
                                                } )

                                            :

                                            null
                }
        </>

    )

}

export default NewsBoard;