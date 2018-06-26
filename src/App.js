import React, { Component } from "react";

import { fetchLcboEndpoint } from "./api/lcbo.js";

class App extends Component {
  componentDidMount() {
    // example of making an API request to the LCBO API
    fetchLcboEndpoint("products", {
      q: "radler"
    }).then(data => {
      console.log(data);
    });
  }
  render() {
    return (
      <div>
        <p>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
