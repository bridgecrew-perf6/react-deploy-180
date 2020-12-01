import Button from "@material-ui/core/Button";
import React, { Component, Fragment } from "react";
import { Youtube } from "../../../Component/Youtube/Youtube";

class AppYoutube extends Component {
  render() {
    return (
      <Fragment>
        <p className="heading-p">Halaman YoutubeComponent</p>
        <hr />
        <div className="container">
          <Youtube
            time="19.12"
            title="Javascript Dasar"
            desc="59rb x di tonton."
          />
          <Youtube
            time="11.20"
            title="Javascript Lanjutan"
            desc="59rb x di tonton."
          />
          <Youtube
            time="08.15"
            title="Javascript DOM"
            desc="59rb x di tonton."
          />
          <Youtube
            time="20.50"
            title="Javascript Lanjutan Object"
            desc="59rb x di tonton."
          />
          <Youtube
            time="20.50"
            title="Javascript Lanjutan Object"
            desc="59rb x di tonton."
          />
          <Youtube
            time="17.22"
            title="Javascript Arrow Function"
            desc="59rb x di tonton."
          />
          <Youtube
            time="50.30"
            title="Javascript Prototype"
            desc="59rb x di tonton."
          />
          <Youtube />
          <Youtube />
          <Youtube />
        </div>
      </Fragment>
    );
  }
}

export default AppYoutube;
