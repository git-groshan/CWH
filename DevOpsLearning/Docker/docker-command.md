#command 

## create docker network 


##start mongodb 
docker run -p 27017:27017 -d \
-e MONGO_INITDB_ROOT_USERNAME=admin \
-e MONGO_INITDB_ROOT_PASSWORD=passowrd \
--name mongodb \
--net  mongo-network \
 mongo 

 ## start mongo-express 
 docker run -d \
-p 8081:8081 \
-e ME_CONFIG_MONGODB_ADMINUSERNAME=admin \
-e ME_CONFIG_MONGODB_ADMINPASSOWRD=password \
-e ME_CONFIG_MONGODB_SERVER=mongodb \   # container name 
--net mongo-network \
--name mongo-express \
mongo-express   # image name