# Videos Server

Videos test uploads and streaming server

## Get Started

1. Build backend services **docker** test images

1.1 Build **videos** service test image

```
cd ./videos-service
sudo docker build -t ermiry/videos-service:test -f Dockerfile.test .
```

1.2 Build **stream** service test image

```
cd stream-service
sudo docker build -t ermiry/stream-service:test -f Dockerfile.test .
```

2. Build react apps **docker** latest images

2.1 Build **upload** client latest image

```
cd videos-upload-client
sudo docker build -t ermiry/videos-upload-client:latest .
```

2.2 Build **stream** client latest image

```
cd videos-stream-client
sudo docker build -t ermiry/videos-stream-client:latest .
```

3. Build nginx **docker** test image

```
cd nginx
sudo docker build -t ermiry/videos-nginx:test -f Dockerfile.test .
```

4. Create **videos** docker network

```
sudo docker network create videos
```

5. Add both clients custom subdomains. Add both **stream.localhost.com** and **videos.localhost.com** in yout hosts configuration file.

```
sudo nano /etc/hosts
```

6. Run the dedicated db **docker-compose**. Mongo DB initial setup will be done automatically the first time

6.1 Create a **data** path to store Mongo files

```
mkdir data
```

6.2 Run the db environment

```
sudo docker-compose -f docker-compose.db.yml up
```

7. Run the test environment

```
sudo docker-compose up
```
