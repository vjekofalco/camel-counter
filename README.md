*********** Installations guides ****************

1. If You don't have already installed install node.js from official website.
2. Clone the project from: https://github.com/vjekofalco/camel-counter.git .
3. Navigate to the root directory and run: npm install.
4. After all dependencies are installed run 2 commands. One for starting server and another to build a frontend assets.
      - npm start (This will boost Express app on the port 3000)
      - npm run:build (This will create production assets like min js and min css).

Optionally if you want to check this project on the dev environment run: npm run build
This will run frontend app on port 4000. All request from the backend app (localhost:3000) will be proxied to this port.

Reason for this approach is to separate frontend and backend development and to add some sugar to the frontend development workfolow like auto update or so.
 
