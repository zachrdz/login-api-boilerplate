# login-api-boilerplate
API containing basic login and signup routes using MongoDB, Express, &amp; Node.

Based off of [Advanced React and Redux tutorial on Udemy](https://www.udemy.com/react-redux-tutorial/), specifically Server Setup - Authentication content.

# Get Started - Dev Env
1. Go into project folder

2. If not already existing, create a new file named 'config.js' in config directory based off of the example file and 
update the details appropriately (Never commit this file).

3. Install mongodb locally if needed
   * [How-To: Mac](https://treehouse.github.io/installation-guides/mac/mongo-mac.html)
   * [How-To: Windows](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/)

4. If you don't want to use or install a local database, 
you may opt to use your remote database you provided in config.js.

5. Run the following commands
   * Install dependencies
   ```
       npm install
   ```   
   * If you want to use your locally installed mongo database.
   ```
       npm run local
   ```
   * If you want to use a remote dev mongo database.
   ```
       npm run dev
   ```

# API 
[localhost:3001](localhost:3001)

# Routes
### GET: /
Public route
### GET: /api
Protected route, authorization token required in header.
### POST: /api/signup
Public route, new email and password json required in body of request. 
### POST: /api/signin
Protected route, valid email and password json required in body of request.   
