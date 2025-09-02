
const NewsItem = (props) => {

    const {title, description, src, url} = props;

    let src2 = "https://plus.unsplash.com/premium_photo-1707080369554-359143c6aa0b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bmV3c3xlbnwwfHwwfHx8MA%3D%3D";

    return (

        <div className="card bg-dark text-light mb-5 d-inline-block mr-3 ml-3 " style={{maxWidth : "345px"}}>
            <img src={src ? src : src2} style={{height : "200px", width : "100%"}} className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">{title ? title.slice(0,55) : "Breaking News"}</h5>
                <p className="card-text">{description ? description.slice(0,90) :  "Updates: What is going on today, Check out here."}</p>
                <a href={url} className="btn btn-primary">Read More</a>
            </div>
        </div>

    )

}


export default NewsItem;