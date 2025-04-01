require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

const githubData = {
    "login": "imankurbhowmik",
    "id": 115440080,
    "node_id": "U_kgDOBuF50A",
    "avatar_url": "https://avatars.githubusercontent.com/u/115440080?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/imankurbhowmik",
    "html_url": "https://github.com/imankurbhowmik",
    "followers_url": "https://api.github.com/users/imankurbhowmik/followers",
    "following_url": "https://api.github.com/users/imankurbhowmik/following{/other_user}",
    "gists_url": "https://api.github.com/users/imankurbhowmik/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/imankurbhowmik/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/imankurbhowmik/subscriptions",
    "organizations_url": "https://api.github.com/users/imankurbhowmik/orgs",
    "repos_url": "https://api.github.com/users/imankurbhowmik/repos",
    "events_url": "https://api.github.com/users/imankurbhowmik/events{/privacy}",
    "received_events_url": "https://api.github.com/users/imankurbhowmik/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "Ankur Bhowmik",
    "company": null,
    "blog": "",
    "location": "India",
    "email": null,
    "hireable": null,
    "bio": "I code | NIT- A '26\r\n",
    "twitter_username": "iamankurbhowmik",
    "public_repos": 14,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2022-10-10T02:54:26Z",
    "updated_at": "2025-01-08T14:24:42Z"
  }
  
  app.get('/github', (req, res) => {
      res.send(githubData)
  })

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('Hello Twitter!')
})

app.get('/login', (req, res) => {
    res.send('<h1>please relogin</h1>')
})


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
