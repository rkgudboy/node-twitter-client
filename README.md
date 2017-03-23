# node-twitter-client
Client to extract tweets written in NodeJS

## Prerequisites
> Make sure these are setup on your system:

| Feature       | Version           |
| ------------- |:-----------------:|
| NodeJS        | v4.4.2 or greater |
| npm           | v3.8.6 or greater |


## Setup
> Make sure Github local credentials are setup in your system and SSH keys added in your profile with appropriate priviledges before proceeding. You can refer to [Setup Git](https://help.github.com/articles/set-up-git/) tutorial for help.

#### 1. Clone the repo
```
git clone git@github.com:rkgudboy/node-twitter-client.git
```

#### 2. Go to directory
Enter into the directory of cloned project
```
cd node-twitter-client
```

#### 3. Install packages
In the directory, install node dependencies from the *package.json*
```
npm install
```

#### 4. Create config file
Create *config.json* file from *config_template.json* file. This file specifies the parameters such as Twitter API keys and port on which our app will run. You can provide your unique values or setup with the default values provided within the template for example purpose in *config_template.json*
```
cp config_template.json config.json
```

#### 5. Build process
Run npm scripts to start the build process. Depending on your type of environment, choose any one:
 > In case of permission related errors, please try running with elevated privileges.
  1. Developement environment
      > Starts build process using a watcher. Build process will start again, as soon as any browser related file is changed. Useful while doing development.

      ```
        npm run build:watch
      ```
  2. Production environment
      > Runs build process once to prepare files for displaying in browser. Use this when running the app on production and for browsing purpose.

      ```
        npm run build
      ```

#### 6. Server startup
Start the server after build has completed. Depending on type of environment you are executing the step, choose any one:
  1. Development environment
      > Starts server using a watcher, so that server can be restarted without intervention when any JS file is changed. Useful while doing development.
        ```
          node run server:watch
        ```
  2. Production environment
      > Starts the server in production mode for viewing.

        ```
          NODE_ENV=production npm run server
        ```



