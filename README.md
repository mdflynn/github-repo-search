# GitHub Repo Search
---
## Overview
A simple and responsive app to search GitHub repos by topics, project titles, or keywords

Check it out on [Heroku](https://github-repo-search-tool.herokuapp.com/)! <small>*Might take a minute to load<small>

<details>
  <summary>Set up locally</summary>

#### Clone down the repo
`git clone git@github.com:mdflynn/github-repo-search.git`
#### Install the dependencies:
Run `npm install` in your terminal
#### Verify that your setup is good
* To verify that it is setup correctly, run `npm start` in your terminal.
* Go to `http://localhost:3000/` and the site should display and have functionality.
* Enter `control + c` in your terminal to stop the server at any time.
#### See passing test suite
Run `npm test` in your terminal to see all tests pass
</details>

## Technologies and Tools
> * React
> * JavaScript
> * JSX
> * HTML
> * CSS
> * Bootstrap
> * Jest
> * React Testing Library
> * git
> * GitHub
> * GitHub API
> * Heroku

## Wins
* Successfully created a fully responsive app using Bootstrap

* Getting to explore the GitHub API and all of the data that comes with it
## Challenges
* Correcting a react warning for `useEffect` was causing an unintended rerender, not allowing me to clear the warning. Further investigation is required.

* In hindsight, I would have liked to implemented state management like Redux or React Context. Once I wanted to develop the API queries further, I found that I was running into code that could have been cleaner with state management implemented.  
## Site Design
#### Initial Page
<img width="1400" alt="initial page" src="https://i.imgur.com/pgQRe8t.png">

#### Search Results
<img width="1400" alt="initial page" src="https://i.imgur.com/7ASj17j.png">

#### Single Repo
<img width="1400" alt="initial page" src="https://i.imgur.com/7WRVDAb.png">

#### Filtering and Sort
<img width="1400" alt="initial page" src="https://media.giphy.com/media/o3HtiNFN3qv5gL97nL/giphy.gif">

#### Responsive Design
<img width="1400" alt="initial page" src="https://media.giphy.com/media/ebY98n53JxNqtLKxyU/giphy.gif">