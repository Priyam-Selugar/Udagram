udagram
Udagram is a simple cloud application developed alongside the Udacity Cloud Engineering Nanodegree. It allows users to register and log into a web client, post photos to the feed, and process photos using an image filtering microservice.

The project is split into three parts:

The Simple Frontend A basic Ionic client web application which consumes the RestAPI Backend.
The RestAPI Backend, a Node-Express server which can be deployed to a cloud service.
The Image Filtering Microservice, the final project for the course. It is a Node-Express application which runs a simple script to process images.
Getting Setup
Installing Node and NPM
This project depends on Nodejs and Node Package Manager (NPM). Before continuing, you must download and install Node (NPM is included) from https://nodejs.com/en/download.

Installing Ionic Cli
The Ionic Command Line Interface is required to serve and build the frontend. Instructions for installing the CLI can be found in the Ionic Framework Docs.

Installing project dependencies
This project uses NPM to manage software dependencies. NPM Relies on the package.json file located in the root of each project folder. After cloning, run the following command from each project's root folder in order to install it's dependencies:

npm i
Installing useful tools
1. Postbird
Postbird is a useful client GUI (graphical user interface) to interact with our provisioned Postgres database. We can establish a remote connection and complete actions like viewing data and changing schema (tables, columns, ect).

2. Postman
Postman is a useful tool to issue and save requests. Postman can create GET, PUT, POST, etc. requests complete with bodies. It can also be used to test endpoints automatically. We've included some collections (project-root-dir/*.postman_collection.json) which contains example requsts.
