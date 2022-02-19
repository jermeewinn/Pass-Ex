import { Editor } from '@tinymce/tinymce-react';
import 'bulma/css/bulma.min.css';
import React from "react";
var city = "Oxford";
var country = "United Kingdom";
var timeZoneURL = `https://timezone.abstractapi.com/v1/current_time/?api_key=3dcfef3df620458bb458313d22d4666a&location=${city}, ${country}`;
var curencyAPI= "http://api.exchangeratesapi.io/v1/latest?access_key=1438debad47ca5a53fe7985f3fb8087d";


function submitCityCountry(e) {
    e.preventDefault();
    console.log('You clicked submit.');
  };
  

class Home extends  React.Component() {
    handleEditorChange = (e) => {
        console.log('Content was updated:', e.target.getContent());
      }
    render() {

    return (
        <section className="home">
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
                        <div className="new-post">
                            <h2>New Post</h2>
                            <form method="post" class="new-post-form">
                                <div>
                                <Editor
                                    apiKey='dmpg80qwq1eyjegxuk4d0u6fj4l0he5nbo5y2y5hve8ywi5n' 
                                    cloudChannel='dev'
                                    initialValue="<p>This is the initial content of the editor</p>"
                                    init={{
                                    plugins: 'link image code',
                                    toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code'
                                    }}
                                    onChange={this.handleEditorChange}
                                //         <script src="https://cdn.tiny.cloud/1/dmpg80qwq1eyjegxuk4d0u6fj4l0he5nbo5y2y5hve8ywi5n/tinymce/5/tinymce.min.js" referrerpolicy="origin"></script>
                                />
                                </div>
                                <button type="submit" class="btn">Create</button>
                            </form>

                        </div>
                        <div className="currency-converter">
                            <h2>Currency Converter</h2>
                        </div>
                        <div className="timezone-converter">
                            <h2>Time Zone Converter</h2>
                            <form>
                                <label>
                                    City:
                                    <input type="text" name="city" />
                                </label>
                                <label>
                                    Country:
                                    <input type="text" name="country" />
                                </label>
                                <input type="submit" value="Submit" />
                            </form>
                        </div>
                        <div className="images">
                    </div>
                        {/* <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/beach-quotes-1559667853.jpg" alt="place-holder" />
                    </div> */}
                    </div>
                    
                </div>
            </div>
        </section>
    );
  }
}
  export default Home;