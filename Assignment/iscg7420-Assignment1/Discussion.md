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
  - The virtual DOM (VDOM) is a programming concept where an ideal, or “virtual”, representation of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM. This process is called reconciliation. This is
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
- What are actions?
- What are reducers?
- What is the store?
- What is redux-thunk used for?

## Javascript:

- What is NodeJS and how is it different from in-browser Javascript?
- What is npm and what is it used for?
- What is ES6? List the names of 3 features that ES6 provides.
- What is ReactJS and what is it used for?
- List two popular alternative Javascript libraries to ReactJS.
- What is the DOM? What is a virtual DOM?
- What is the difference between sessionStorage and localStorage?
- What is a library like Material-UI used for?

## Docker:

- Why do we run apt-get update && apt-get install -y in one command when using
  Docker?
- What are Docker containers and what are the pros and cons of using them?
- What is the difference between ADD and COPY with Docker?
- What is a .dockerignore file used for?
- What is Kubernetes and why didn’t we use it for this assignment?

## Deployment:

- What is Amazon S3 used for?
- What is Amazon ECS?
- What is the difference between ECS Fargate and EC2?
- Name 3 other cloud providers.
- What is Sentry and what is it used for?
- What is Cloudflare and what is it used for?
- What is SendGrid and what is it used for?
- What is the difference between a DNS A record and a CNAME record?
