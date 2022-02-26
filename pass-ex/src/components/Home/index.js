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
  const apiKey = "d0a06a26fc67ad3dcc286204f13f1864";
  //here is where we get the input onsubmit
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [weather, setWeather] = useState(null);
  const [Day, setDay] = useState(null);
  const [time, setTime] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    getData(city);
  };
    // we will use async/await to fetch this data
    async function getData() {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${apiKey}`);
      const data = await response.json();
      console.log(data);
      var today = new Date();
      var date = (today.getMonth()+1)+'/'+today.getDate()+'/'+today.getFullYear()
      var dateTime = new Date(data.dt * 1000);;
      // Hours part from the timestamp
      var hours = dateTime.getHours();
      // Minutes part from the timestamp
      var minutes = dateTime.getMinutes();
      var newTime = hours + ':' + minutes;
      setTime(newTime);
      setDay(date);
      setWeather(`${data.main.temp} °C`);
      setCountry(data.sys.country);

    };
  // async function getMoreData(coordinates){
  //   const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}`);
  //     const data = await response.json();
  //     console.log(data);
  // }
  return (
    <section className="home">
      <div className="flex-container">
        <div className="column">
          <div className="right-column">
            <div className="blog-feed">
              <h2>Blog Feed</h2>
              <section className="candy-stripe">
                <ul>
                  <li className="stripe1"></li>
                  <li className="stripe1"></li>
                  <li className="stripe1"></li>
                  <li className="stripe1"></li>
                  <li className="stripe1"></li>
                  <li className="stripe1"></li>
                  <li className="stripe1"></li>
                  <li className="stripe1"></li>
                  <li className="stripe1"></li>
                  <li className="stripe1"></li>
                </ul>
                </section>
              <p>no posts yet</p>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="left-column">
            <div className="new-post">
              <h2>New Post</h2>
              <section className="candy-stripe">
                <ul>
                  <li className="stripe1"></li>
                  <li className="stripe1"></li>
                  <li className="stripe1"></li>
                  <li className="stripe1"></li>
                  <li className="stripe1"></li>
                  <li className="stripe1"></li>
                  <li className="stripe1"></li>
                  <li className="stripe1"></li>
                  <li className="stripe1"></li>
                  <li className="stripe1"></li>
                </ul>
                </section>
              <form method="post" className="new-post-form">
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

                  <button className="button is-info is-focused" onClick={log}>Create Post</button>
                </div>
              </form>
            </div>
            <div className="currency-converter">
              <h2></h2>
            </div>
            <div className="timezone-converter">
              <h2>City Stats</h2>
              <form onSubmit={handleSubmit}>
                <label id="display" className="label">
                  City:
                  <input
                    className="input is-info"
                    type="text"
                    name="city"
                    value={city}
                    onChange={(e) => {
                      setCity(e.target.value);
                    }}
                  />
                </label>
                <input className="button is-info is-focused" type="submit" value="Submit" />
              </form>
              <div className="label">
                <p>{city}  {country}</p>
                <p>{weather}</p>
                <p>{time}  {Day}</p>
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
