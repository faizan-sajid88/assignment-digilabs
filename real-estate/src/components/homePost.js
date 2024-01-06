import Post from "./post";

export default function HomePost(){

    return(
        <div className="home-post">
           <div className="home-post-heading">
            <div>
                <h1>Based on your location</h1>
                <p>Some of our picked properties near your location.</p>
            </div>
            <div><button>Browse more properties</button></div>
           </div>
           <div className="all-posts">
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
           
           </div>
        </div>
    )
}