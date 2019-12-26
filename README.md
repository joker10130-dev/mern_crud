# mern_crud
MERN stack CRUD(Create, Read, Update, Delete) Web Application practice

# Prerequisite
1. MongoDB  
  1.1 Install follow this link https://docs.mongodb.com/manual/administration/install-community/  
  1.2 You have to add the mongo executable to PATH, so the commands are accessible from outside the MongoDB bin folder.
    Search for your MongoDb installation bin folder and copy the path (e.g.: C:\Program Files\MongoDB\bin) 
    Right click My Computer > Properties > Advanced system settings > Environment Variables > System variables > 
    Look for "Path" > Edit > New > Paste in the path to your Mongodb bin folder > Restart your terminal  
    Do the same on Look for "Path" in User variables for User tab  
  1.3 Open Command Prompt, run command "mkdir -p /data/db"

2. NodeJS <br />
  2.1 Install follow this link https://nodejs.org/en/

3. Git <br />
  3.1 Install follow this link https://git-scm.com/downloads

# How to Download This Project
1. Open Command Prompt(CMD), cd to the download direction
2. Run command "git clone https://github.com/joker10130-dev/mern_crud.git"

# How to Open This Project
1. Run Database and Back-End server
  1.1 Open CMD, run command "cd backend" to go to backend folder
  1.2 Run command "npm install"
  1.3 Run command "mongod"
  1.4 Run command "use todos"
  1.5 Run command "nodemon server"
2. Run Web Application Front-End server
  2.1 Open New CMD, don't close the backend CMD, run command "cd mern-todo-app" to go to the mern-todo-app folder
  2.2 Run command "npm install"
  2.3 Run command "npm start"
  2.4 Go to Website with this Address "localhost:3000"
