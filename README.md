# node-twitter-client
A NodeJS based client to extract tweets from twitter API using *twit* package and *express* web application framework.
* The client can be used to search for a particular term with added filter of tweets with a particular number of retweets.
  1. Search term can be specified in the key **twitter_api_search_term** of *config.json*. Example: "#custserv"
  2. Value to filter tweets based on number of retweets can be specified in the key **min_retweet_count_value** of *config.json*.
## Prerequisites
> Make sure these software dependencies are setup on your system:

| Name          | Version           |
| ------------- |:-----------------:|
| NodeJS        | v4.4.2 or greater |
| npm           | v3.8.6 or greater |


## Setup
> Make sure Github local credentials are setup in your system. You can refer to [Setup Git](https://help.github.com/articles/set-up-git/) tutorial for help.

#### 1. Cloning the repo
```
git clone git@github.com:rkgudboy/node-twitter-client.git
```

#### 2. Navigating to project directory
Enter into the directory of cloned project
```
cd node-twitter-client
```

#### 3. Installing packages and dependencies
These are the dependencies for running this project, which have been defined in *package.json*:

| package       | Description                       | Version      |
| ------------- |:---------------------------------:|:------------:|
| express       | NodeJS Web Application Framework  | v4.14.0      |  
| twit          | Twitter API Client for NodeJS     | v2.0.0-beta7 |
| pug           | Template Engine for NodeJS        | v2.2.5       |

After navigating to *node-twitter-client* directory, above mentioned node dependencies, can be installed by running the command:
```
npm install
```

#### 4. Creating config file
Create *config.json* file from *config_template.json* file. This file specifies the parameters such as Twitter API keys and port on which our app will run. Token and Secret of twitter App for communication with twitter API needs to be entered here in keys **twitter_api_consumer_key**, **twitter_api_consumer_secret**, **twitter_api_access_token**, **twitter_api_access_token_secret**. These can be generated at [https://apps.twitter.com/](https://apps.twitter.com/) 
###### For evaluation purpose default values have been provided within *config_template.json* in the *node-twitter-client* directory.
```
cp config_template.json config.json
```

#### 5. Project Build process
Run npm scripts to start the build process. Depending on your type of environment, choose any one:
###### In case of permission related errors, please try running with elevated privileges.
  1. Development environment
      > Starts build process using a watcher. Build process will start again, as soon as any browser related file is changed. Useful while doing development.
      ```
        npm run build:watch
      ```
  2. Production environment
      > Runs build process once to prepare files for displaying in browser. Use this when running the app on production and for browsing purpose.

      ```
        npm run build
      ```

#### 6. Starting the Server
Start the server after build has completed. Depending on type of environment you are executing the step, choose any one:
  1. Development environment
      > Starts server using a watcher, so that server is restarted by watcher as soon as any JS file is changed without having to manually enter the command. Useful during development stage.
        ```
          node run server:watch
        ```
  2. Production environment
      > Starts the server in production mode for viewing over port defined in config.json.

        ```
          NODE_ENV=production npm run server
        ```
 ## How to Use
 #### Result can be seen by opening following link in your web browser : [http://localhost:{port}](http://localhost:<port>)
example - [http://localhost:7777](http://localhost:7777)
 
## Screenshots

#### 1. Desktop View
![alt text](https://github.com/rkgudboy/node-twitter-client/blob/master/public/images/desktop-screenshot.png?raw=true "Desktop View")
#### 2. Mobile View
![alt text](https://github.com/rkgudboy/node-twitter-client/blob/master/public/images/mobile-screenshot.png?raw=true "Desktop View")



