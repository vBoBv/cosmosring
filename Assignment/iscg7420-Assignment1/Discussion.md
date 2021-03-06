## Architecture:

- When would you prefer to develop an Assignment 1 style web application
  (Server-side rendering, serving HTML)?
  - One of the main reasons to develop a Server-side rendering app is to have a better search engine optimization. This is because SSR loads up all the HTML from the server and SEO can easily crawl and indexes the webpage. This also helps with the ranking of the website.
- When would you prefer an Assignment 2 one (REST API & Single Page
  Application)?
  - In terms of search engine optimization, having a separate client-side needs to be carefully implemented. However, Single Page Application and REST API allows the website to be scalable. It also separate the business layer from the design/user interface layer. Changes that are made to the FrontEnd will not break the BackEnd and vice versa. Even though, the initial loading of the webpage might be as fast as the SSR, once the page is fully loaded, it is guranteed that any request made, will not waste too much resource on sending back request to the BackEnd everytime.

## Version Control:

- What is git and what is it used for?
  - Git is a version-control system to keep track of changes to the source code. It is mainly used for programmers to keep track of any set of files and to cooperate with others in a non-linear workflows.
- List 3 git commands you’ve learned in this course.
  - git add [filename]
  - git checkout -b [branchname]
  - git push origin [branchname]
- What is GitHub and what is it used for?
  - GitHub is a SaaS which uses git as a version control system plus its own features to keep track of source code and social networking place for developers to collaborate.
- What is Kanban and what is it used for?
  - Kanban is considered to be one of the most popular frameworks which is used to implement Agile methodology. It is being used to make incremental changes to the current process as sweeping changes are discouraged.
- What is Markdown and what is it used for?
  - Markdown is a lightweight markup language with plain-text-formatting syntax. This can be used for documentation especially with software development. Markdown nowadays is also being used with discussionf forums. It provides special features to decorate the written document.

## Platform vs Infrastructure:

- What are some of the pros and cons of using Platform-as-a-Service (PaaS)
  providers such as Heroku?

  - Pros:

    1. Avoid costs on setup and maintenance
    2. Users only have to pay for the features that they need
    3. Develop and Deploy application anytime

  - Cons:
    1. Not able to easily switch to the other PaaS providers because developers need to rebuild everything from scratch.
    2. Security are mostly control by the Paas providers
    3. Pricings are depend on the Paas Provider

- What are some of the pros and cons of using Infrastructure-as-a-Service
  providers such as Amazon?

  - Pros:

    1. No overhead cost on buying hardware equipments
    2. Hardware and software can be scaled at anytime
    3. Redundancy with hardware in case if something fails, there will be an immediate backup

  - Cons:
    1. Users need to be concerned about their security as not all IaaS providers take care of the security for them
    2. Software upgrade and maintenance are mostly done by the users
    3. Full dependency on the providers for the data

## Web Frameworks:

- What is Django? What are some of its useful features?
  - Django is python web framework. It provides the ability for the developers to rapidly create a full stack web applicaiton. Most of the web application are already setup without users needing to create it from scratch or re-invent the wheel. Security and Authentication are very secured without the user needing to setup any additional stuff. Only a high level understanding of the framework is needed in order to develop a Django application.
- What is a model?
  - Model in Django can be considered as Entity or Table.
- What is a view?
  - View in Django is a python function or class which takes in a web request and return back a web response.
- Name two other popular non-Python web frameworks.
  - ASP.NET / .NET CORE
  - Laravel
  - Ruby on Rails
- What is WSGI? What is ASGI?
  - WSGI is a Python standard and it stands for Web Server Gateway. It is a specification that describes how a web server communicates with web applications, and how web applications can be chained together to process one request.
  - ASGI stands for Asynchronous Server Gateway Interface. ASGI provides for both asynchronous and synchronous apps, with a WSGI backwards-compatibility implementation and multiple servers and application frameworks.
- What is celery and what are task queues used for?
  - Celery is a task queue implementation for Python web applications. Task queues are used to asynchronously execute work outside the HTTP request-response cycle. Example: Task queue can be implemented for sending email to the user in the background, as this process can take a while to finish execute.

## Databases:

- What is PostgreSQL? Using StackShare, list 3 well-known companies that use
  PostgreSQL.
  - PostgresSQL is one of the relational databases. Companies that used PostgreSQL:
    1. Netflix
    2. Uber
    3. Instagram
- List two other well-known databases.
  1. MySQL
  2. SQLite
- What are some of the pros and cons of using an Object Relational Mapper
  (ORM)?
  - Pros:
    1. Eliminates the need to write repetitive SQL code
    2. Speed up Development Process as SQL code is not required
    3. Overcomes vendor specific SQL differences
  - Cons:
    1. Need to understand and learn ORM
    2. Less control over complex SQL commands
    3. High level understanding of SQL queries
- What is the purpose of database migrations?
  - Database migrations can be seen as a sort of Git to keep track of the history of migrations that has been made from an empty database to a fully functional database.
- What is redis and what are two things it can be used for?
  - Redis is an in-memory data structure store which used in-memory key–value database, cache and message broker. It supports various data structure such as strings, lists, maps, sets, sorted sets, HyperLogLogs, bitmaps, streams, and spatial.
- Why do we use caches?
  - Cache is used in order to increase the performance and efficiency on retrieving the data. Cache stores temporary data while database stores permanant data.

## HTTP & REST:

- Which four HTTP methods does REST use for performing CRUD operations?
  - GET
  - POST
  - PUT / PATCH
  - DELETE
- What is Django REST Framework used for?
  - DRF is used to create a RESTful Web Api. It also comes with a prebuild Authentication packages.
- What is serialization and why do we use it?
  - Serialization is a mechanism to convert Django models into other format. We used Serializers in Django to convert querysets and model instances into native Python datatypes. As a result, we can easily render the converted datatypes into JSON.
- Which type of object serialization notation is most commonly used on the web?
  - In the past, it used to be XML. Nowadays, JSON (JavaScript Object Notation) is the most commonly used.
- What is Postman and what is it used for?
  - Postman is a tool for the developers to test their API end points, create simple or complex HTTP/s requests, read the request body, save and document their API.
- What are websockets and what are they used for?
  - WebSocket is a computer communications protocol, providing full-duplex communication channels over a single TCP connection. Websockets are mostly popular for making a real-time application. This is because it does not require the HTTP request/response overhead for each message sent and received compare to REST.

## React:

- What is the virtual DOM?
  - The virtual DOM (VDOM) is a programming concept where an ideal, or “virtual”, representation of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM. This process is called reconciliation. This also increases the efficiency of rendering React components.
- What is JSX?
  - JSX is a syntax extension to JavaScript. JSX enables the user to be able to render HTML and Javascript at the same time.
- What are props used for?
  - Props are properties that are used to pass data from one component to the other component. 
- When and why would you use setState()?
  - setState is used to change the state inside a React component including all of the children components that are using this state. We need to use setState() because we should not directly change or mutate the state directly.
- When would you use hooks?
  - Hooks can be used when the user needs to implement LifeCycle methods or using State inside a Function-based component.
- What is react-router used for?
  - React Router allows the user to create a single-page web application with navigation without the page refreshing as the user navigates.
- What is react-native used for?
  - React Native is a cross-platform framework which is used to create mobile applications. All the syntaxs that are being used inside React-Native are very closed for React. 

## Redux:

- What is redux used for?
  - Redux can be considered as a single state of truth where it stores and deal with states that belong to different components.
- What are actions?
  - Actions in redux must have a type attribute to identify the type of action to be performed. Actions can carry payload which are the data that we want to pass to and from the store.
- What are reducers?
  - Reducers are functions that take the current state and an action as arguments, and return a new state result.
- What is the store?
  - Store contains all of the state inside React application.
- What is redux-thunk used for?
  - Redux-thunk can be seen as a middleware where the user wants to call action creators that return a function instead of an object. Example: Making an asynchrounous request with action creators can be done by using redux thunk.

## Javascript:

- What is NodeJS and how is it different from in-browser Javascript?
  - Node. js is an open source, cross-platform runtime environment for developing server-side and networking applications. NodeJS can be run outside the browser using JavaScript runtime environment.
- What is npm and what is it used for?
  - npm stands for Node JavaScript platform. It is used to publish, discover, install, develop, manages module dependencies for the application.
- What is ES6? List the names of 3 features that ES6 provides.
  - ES6 stands for ECMAScript 6 which is a new version of JavaScript, published in 2015. The features of ES6 are: let keyword, arrow functions and template strings.
- What is ReactJS and what is it used for?
  - React JS is a one of the JavaScript libraries developed by Facebook. It is used to develop a single page frontend application.
- List two popular alternative Javascript libraries to ReactJS.
  - Angular JS
  - Vue JS
- What is the DOM? What is a virtual DOM?
  - DOM stands for Document Objecct Model. It is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure where in each node is an object representing a part of the document.
   - The virtual DOM (VDOM) is a programming concept where an ideal, or “virtual”, representation of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM. This process is called reconciliation. This also increases the efficiency of rendering React components.
- What is the difference between sessionStorage and localStorage?
  - Session Storage is cleared when the browser is closed.
  - Local Storage stores data with no expiration date.
- What is a library like Material-UI used for?
  - It is a React UI components that come with prebuild material designs made by Google.

## Docker:

- Why do we run apt-get update && apt-get install -y in one command when using
  Docker?
  - As these 2 operations are used to update and install all the new packages, it is better to use just one command since any changes to Dockerfile can make the build operation to restart the build process without using cache. 
- What are Docker containers and what are the pros and cons of using them?
  - A Docker container is used to package applications in containers, allowing them to be portable to any system running a Linux or Windows operating system (OS).
  - Pros: Users are able to run and work with Doocker Image regardless of their server or OS. There is no breaking changes even if there are frequent update to Docker itself.
  - Cons: There is a huge learning curve even if users are familar with VM infrastructure. Documentations can sometimes be outdated as Docker is improving incrementally.
- What is the difference between ADD and COPY with Docker?
  - COPY takes in a src and destination
  - ADD allows a URL instead of a local file / directory. User can also extract a tar file from the source directly into the destination.
- What is a .dockerignore file used for?
  - The .dockerignore file allows you to exclude files from the context like a . gitignore file allow you to exclude files from your git repository.
- What is Kubernetes and why didn’t we use it for this assignment?
  - Kubernetes is an open-source container-orchestration system for automating computer application deployment, scaling, and management. We didn't use Kubernetes for this assignment because we only need to run a single container. Kubernetes is used to coordinate clusters of nodes at scale in production in an efficient manner.

## Deployment:

- What is Amazon S3 used for?
  - Amazon S3 or Amazon Simple Storage Service is a service offered by Amazon Web Services that provides object storage through a web service interface.
- What is Amazon ECS?
  - Amazon Elastic Container Service (Amazon ECS) is a fully managed container orchestration service.
- What is the difference between ECS Fargate and EC2?
  - The traditional EC2 launch type utilizes your own EC2 instances. Fargate removes the responsibility of provisioning, configuring and managing the EC2 instances by allowing AWS to manage the EC2 instances.
- Name 3 other cloud providers.
  - Microsoft Azure
  - Google Cloud
  - IBM Cloud
- What is Sentry and what is it used for?
  - Sentry is a PaaS. It allows the developers to diagnose, fix and optimize the performance of any crashes or errors in real time.
- What is Cloudflare and what is it used for?
  - Cloudflare is a PaaS. It is a free CDN type product that protects against threats such as SQL injection and identity theft.
- What is SendGrid and what is it used for?
  - SendGrid is a PaaS. SendGrid is a cloud-based SMTP provider that allows the user to send email without having to maintain email servers
- What is the difference between a DNS A record and a CNAME record?
  -  The A record maps a name to one or more IP addresses when the IP are known and stable. The CNAME record maps a name to another name. It should only be used when there are no other records on that name.
