import { Editor } from "@tinymce/tinymce-react";
import "bulma/css/bulma.min.css";
import React, { useRef, useState , useEffect } from "react";
var city = "Oxford";
var country = "United Kingdom";
var timeZoneURL = `https://timezone.abstractapi.com/v1/current_time/?api_key=3dcfef3df620458bb458313d22d4666a&location=${city}, ${country}`;
var curencyAPI =
  "http://api.exchangeratesapi.io/v1/latest?access_key=1438debad47ca5a53fe7985f3fb8087d";
const timeZoneAPIKey = "15e8f4b378ef45c2a734b8402fcee81a";

function Home() {
    //this is code copied in order to use tinymce
  const handleEditorChange = (e) => {
    console.log("Content was updated:", e.target.getContent());
  };

  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  //here is where we get the input onsubmit
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      city: city,
      country: country,
    };

    console.log(payload);
};
// utilizing timezone api here
    const [timeZone, setTimeZone] = useState(null);
  useEffect(() => {
    getData();

    // we will use async/await to fetch this data
    async function getData() {
      const response = await fetch(`https://timezone.abstractapi.com/v1/current_time/?api_key=${timeZoneAPIKey}&location=${city}, ${country}`);
      const data = await response.json();
      console.log(data);
      setTimeZone(data);
    }
    });

  return (
    <section className="home">
      <div className="flex-container">
        <div className="column">
          <div className="right-column">
            <div className="blog-feed">
              <h2>Blog Feed</h2>
              <p>no posts yet</p>
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
                    onInit={(evt, editor) => (editorRef.current = editor)}
                    initialValue="<p>What did you do on your vacation?</p>"
                    init={{
                      height: 200,
                      menubar: false,
                      plugins: [
                        "advlist autolink lists link image charmap print preview anchor",
                        "searchreplace visualblocks code fullscreen",
                        "insertdatetime media table paste code help wordcount",
                      ],
                      toolbar:
                        "undo redo | formatselect | " +
                        "bold italic backcolor | alignleft aligncenter " +
                        "alignright alignjustify | bullist numlist outdent indent | " +
                        "removeformat | help",
                      content_style:
                        "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                    }}
                  />

                  <button onClick={log}>Create Post</button>
                </div>
              </form>
            </div>
            <div className="currency-converter">
              <h2>Currency Converter</h2>
            </div>
            <div className="timezone-converter">
              <h2>Time Zone Converter</h2>
              <form onSubmit={handleSubmit}>
                <label>
                  City:
                  <input
                    type="text"
                    name="city"
                    value={city}
                    onChange={(e) => {
                      setCity(e.target.value);
                    }}
                  />
                </label>
                <label>
                  Country:
                  <input
                    type="text"
                    name="country"
                    value={country}
                    onChange={(e) => {
                      setCountry(e.target.value);
                    }}
                  />
                </label>
                <input type="submit" value="Submit" />
              </form>
              <div className="timezone-display">

              </div>
            </div>
            <div className="images"></div>
            {/* <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/beach-quotes-1559667853.jpg" alt="place-holder" />
                    </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
