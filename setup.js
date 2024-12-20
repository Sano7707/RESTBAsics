const mongoose = require('mongoose');
const ProgrammingLanguage = require('./models/programmingLanguage');
const Framework = require('./models/framework');


mongoose.connect('mongodb://localhost:27017/RESTbasics')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Failed to connect to MongoDB', err));

async function populateDB() {
    await ProgrammingLanguage.deleteMany();
    await Framework.deleteMany();

    await ProgrammingLanguage.insertMany([
        {
            "name": "JavaScript",
            "information": "A versatile, high-level programming language.",
            "releaseYear": 1995,
            "paradigm": ["Object-oriented", "Functional", "Imperative"],
            "docs": ["https://developer.mozilla.org/en-US/docs/Web/JavaScript"]
        },
        {
            "name": "Python",
            "information": "Popular for web development, AI, and scripting.",
            "releaseYear": 1991,
            "paradigm": ["Object-oriented", "Procedural", "Functional"],
            "docs": ["https://docs.python.org/3/"]
        },
        {
            "name": "Java",
            "information": "Used for building large-scale enterprise applications.",
            "releaseYear": 1995,
            "paradigm": ["Object-oriented", "Concurrent"],
            "docs": ["https://docs.oracle.com/en/java/"]
        },
        {
            "name": "C#",
            "information": "Developed by Microsoft, primarily for Windows applications.",
            "releaseYear": 2000,
            "paradigm": ["Object-oriented", "Functional", "Declarative"],
            "docs": ["https://learn.microsoft.com/en-us/dotnet/csharp/"]
        },
        {
            "name": "C++",
            "information": "An extension of C, known for system/software development.",
            "releaseYear": 1985,
            "paradigm": ["Object-oriented", "Procedural", "Generic"],
            "docs": ["https://en.cppreference.com/w/"]
        },
        {
            "name": "Ruby",
            "information": "Known for its elegant syntax and web development.",
            "releaseYear": 1995,
            "paradigm": ["Object-oriented", "Imperative", "Functional"],
            "docs": ["https://www.ruby-lang.org/en/documentation/"]
        },
        {
            "name": "Go",
            "information": "Created by Google, known for its simplicity and performance.",
            "releaseYear": 2009,
            "paradigm": ["Concurrent", "Procedural", "Functional"],
            "docs": ["https://go.dev/doc/"]
        },
        {
            "name": "Swift",
            "information": "Apple's programming language for iOS and macOS development.",
            "releaseYear": 2014,
            "paradigm": ["Object-oriented", "Protocol-oriented", "Functional"],
            "docs": ["https://docs.swift.org/swift-book/"]
        },
        {
            "name": "Rust",
            "information": "Focuses on safety and performance, suitable for system programming.",
            "releaseYear": 2010,
            "paradigm": ["Concurrent", "Functional", "Imperative"],
            "docs": ["https://doc.rust-lang.org/"]
        },
        {
            "name": "Kotlin",
            "information": "A modern language that runs on the Java Virtual Machine (JVM).",
            "releaseYear": 2011,
            "paradigm": ["Object-oriented", "Functional"],
            "docs": ["https://kotlinlang.org/docs/home.html"]
        }
    ]);
    console.log("programming_languages collection created");

    // Insert data into the frameworks collection with the language field included
    await Framework.insertMany([
        {
            "name": "Express",
            "documentationLink": "https://expressjs.com/",
            "language": "JavaScript",
            "tutorial": {
                "title": "Creating a Web Server with Express",
                "tutorialLink": "https://expressjs.com/en/starter/hello-world.html",
                "comments": [
                    { "user": "John", "comment": "Super helpful and easy to follow!", "date": "2020-01-01T00:00:00.000Z" },
                    { "user": "Jane", "comment": "Clear instructions, worked perfectly.", "date": "2021-06-15T00:00:00.000Z" }
                ]
            }
        },
        {
            "name": "React",
            "documentationLink": "https://react.dev/",
            "language": "JavaScript",
            "tutorial": {
                "title": "React Tutorial",
                "tutorialLink": "https://www.w3schools.com/REACT/DEFAULT.ASP",
                "comments": [
                    { "user": "John", "comment": "Clear explanation, it is starting to make more sense now.", "date": "2021-01-01T00:00:00.000Z" }
                ]
            }
        },
        {
            "name": "Flask",
            "documentationLink": "https://flask.palletsprojects.com/en/latest/",
            "language": "Python",
            "tutorial": {
                "title": "Building a Web App with Flask",
                "tutorialLink": "https://flask.palletsprojects.com/en/latest/tutorial/",
                "comments": [
                    { "user": "Alice", "comment": "Simple and effective!", "date": "2022-03-10T00:00:00.000Z" }
                ]
            }
        },
        {
            "name": "Spring Boot",
            "documentationLink": "https://spring.io/projects/spring-boot",
            "language": "Java",
            "tutorial": {
                "title": "Building a REST API with Spring Boot",
                "tutorialLink": "https://spring.io/guides/gs/rest-service/",
                "comments": [
                    { "user": "Charles", "comment": "Good intro to Spring Boot.", "date": "2023-08-22T00:00:00.000Z" }
                ]
            }
        },
        {
            "name": "ASP.NET Core",
            "documentationLink": "https://docs.microsoft.com/en-us/aspnet/core/",
            "language": "C#",
            "tutorial": {
                "title": "Building a Web API with ASP.NET Core",
                "tutorialLink": "https://docs.microsoft.com/en-us/aspnet/core/tutorials/first-web-api",
                "comments": [
                    { "user": "Eve", "comment": "Very useful for beginners!", "date": "2024-05-11T00:00:00.000Z" }
                ]
            }
        },
        {
            "name": "Poco",
            "documentationLink": "https://pocoproject.org/docs/",
            "language": "C++",
            "tutorial": {
                "title": "Building a Web Server with Poco",
                "tutorialLink": "https://pocoproject.org/docs/tutorials.html",
                "comments": [
                    { "user": "Frank", "comment": "A bit tough but manageable.", "date": "2021-07-20T00:00:00.000Z" }
                ]
            }
        },
        {
            "name": "Ruby on Rails",
            "documentationLink": "https://guides.rubyonrails.org/",
            "language": "Ruby",
            "tutorial": {
                "title": "Getting Started with Ruby on Rails",
                "tutorialLink": "https://guides.rubyonrails.org/getting_started.html",
                "comments": [
                    { "user": "Grace", "comment": "The definitive guide to Rails!", "date": "2023-12-01T00:00:00.000Z" }
                ]
            }
        },
        {
            "name": "Gin",
            "documentationLink": "https://github.com/gin-gonic/gin",
            "language": "Go",
            "tutorial": {
                "title": "Building a Web Server with Gin",
                "tutorialLink": "https://gin-gonic.com/docs/",
                "comments": [
                    { "user": "Hank", "comment": "Gin is so fast and easy!", "date": "2020-09-05T00:00:00.000Z" }
                ]
            }
        },
        {
            "name": "Vapor",
            "documentationLink": "https://vapor.codes/docs",
            "language": "Swift",
            "tutorial": {
                "title": "Building a Web App with Vapor",
                "tutorialLink": "https://docs.vapor.codes/4.0/hello-world/",
                "comments": [
                    { "user": "Ivy", "comment": "Perfect for iOS devs learning backend.", "date": "2022-11-11T00:00:00.000Z" }
                ]
            }
        },
        {
            "name": "Rocket",
            "documentationLink": "https://rocket.rs/",
            "language": "Rust",
            "tutorial": {
                "title": "Creating a Web Server with Rocket",
                "tutorialLink": "https://rocket.rs/v0.5-rc/guide/quickstart/",
                "comments": [
                    { "user": "Jack", "comment": "Rocket is still in development but great!", "date": "2021-02-14T00:00:00.000Z" }
                ]
            }
        },
        {
            "name": "Ktor",
            "documentationLink": "https://ktor.io/docs/",
            "language": "Kotlin",
            "tutorial": {
                "title": "Building a REST API with Ktor",
                "tutorialLink": "https://ktor.io/docs/creating-http-apis.html",
                "comments": [
                    { "user": "Kate", "comment": "Awesome and modern!", "date": "2023-05-30T00:00:00.000Z" }
                ]
            }
        }
    ]);
    console.log("frameworks collection created");
}

populateDB().then(() => {
    process.exit();
});