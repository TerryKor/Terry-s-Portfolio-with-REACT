import React from "react";
import "./Content.css";

function Content() {
  return (

      <div className="contactPage">
        <div className="wrap">
          <h1 className="ContactH1">
            Send <span>me</span> a message!
          </h1>
          <div className="formWrap">
            <form>
              <p>Hello Terry,</p>
              <label for="email"> Your message</label>
              <textarea name="message" id="message" value={""}></textarea>
              <p>Best,</p>
              <label for="name">Name:</label>
              <input type="text" name="name" value={""} id="name"></input>
              <label for="email">Email:</label>
              <input type="text" name="email" value={""} id="email"></input>
              <input
                type="submit"
                name="email"
                value={"Send"}
                id="email"
              ></input>
            </form>
          </div>
        </div>
      </div>

  );
}

export default Content;