# Where Art Thou?

This single page, Nashville-specific app was designed to give both residents and tourists a tool to find public art throughout the city - either as a means to explore new parts of the city, learn about local history, support local artists, or find backdrops for social media posts. The app is meant to be at least as beneficial to the artists who created each work, as details about each work's artist or artists is displayed with the work. This increases artist visibility as well as giving art and history buffs an opportunity to explore Nashville. 

Where Art Thou? operates on a user-generated JSON database as well as the ["Art in Public Places" API](https://dev.socrata.com/foundry/data.nashville.gov/xakp-ess3).

Users are able to make accounts using session storage, then browse all the art from the API and save particular works to a "To Visit" or "Have Visited" list. 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Testing Locally

1. Clone this repo: `git@github.com:allisonkatecollins/where-art-thou.git`
1. To install all libraries and their dependencies, run `npm install`
1. In the `/api` directory, run `json-server -p 5002 database.json`
1. Run `npm start` in root directory to start react server


