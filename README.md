# quiz-portal
### Prerequisites 
Ruby on rails latest
yarn 
node
react

The backend Folder contains a backend with a microservices architechture

![microservices-architechture_hands_on](https://user-images.githubusercontent.com/38003564/146883755-26127068-811d-483e-8b73-64798924eda5.png)

Before starting the frontend go to each microservice in cmd and run -

bundle install

rails db:migrate

rails s -p <PORTnumber>

replace <PORTnumber> with the port specified in the image for each microservice.

You now will have a functioning backend

To deploy frontend
run 

yarn

go to packages in frontend and app-login package 

run 
yarn start

make sure to run on port 8080. if fe is not running on 8080 then remove all instances of the 8080 by reaching in repo and replace it with your port no
