import React from "react";


function YourPosts() {
    return (
        <section className="your-posts">
            <div className="flex-container">
                <div className="column"> 
                    <div className="right-column">
                        <div className="blog-feed">
                            <h2>Blog Feed</h2>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="left-column">
                        <div className="past-posts">
                            <h1>Your Posts</h1>
                            <p>I went to Miami</p>
                            <p>It was super sick</p>
                        </div>
                        <div className="liked-posts">
                            <h1>Liked posts</h1>
                            <p>You liked Tom's post</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
  }

    
  export default YourPosts;