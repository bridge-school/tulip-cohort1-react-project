## Setup

Fork this repository and clone your forked copy onto your machine.

Go to the LCBO API website and sign up for a key [here](https://lcboapi.com/manager/sign-up)

Create a `.env` file in the root folder of this app and add the following entry:

```sh
REACT_APP_LCBO_API_KEY=<Your API key here>
```

This allows us to keep our API keys outside of source control as the `.env` file is not tracked by git.

Install dependencies

```sh
$ yarn install
```

## Running the App

This app was created with `create-react-app`. To run the app for development:

```sh
$ yarn start
```

## Assignment

Create an app where there is an input box that takes a search query and uses the LCBO API to search for the stores that have products that match that search query. Display the stores that are returned from the API on a map.

#### Requirements

1. Single page app using this react codebase
2. Input box with a button, when you click the button request the stores with products that match that search query
3. Display stores lat/lng on the map
4. Loading state for when API requests are being made
5. Error state to indicate that something has gone wrong
6. Empty state if there are no stores found

#### Technical Details

* [LCBO API Docs](https://lcboapi.com/docs/v1): Find the end point that works best for our use case
* [Google Maps + React](https://github.com/tomchentw/react-google-maps): This is a good library to use to display markers on a map.
* This assignment is not focused around styling and presentation so do as much or as little of this as you'd like. Some good options for styling with React in case you are looking into this are [tachyons](https://github.com/tachyons-css/tachyons) and [styled-components](https://github.com/styled-components/styled-components)

#### Querying the LCBO api

There is a helper function already built in under `api/lcbo.js` for querying the LCBO api. You can use it as follows:

```javascript
import { fetchLcboEndpoint } from "./api/lcbo.js";

fetchLcboEndpoint("products", {
  q: "red wine"
});
```

The first argument is the LCBO endpoint you'd like to call and the second argument is an optional object that takes any query parameters. There is an example of this being used in `App.js`.
