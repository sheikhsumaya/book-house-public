import React from "react";
import { Accordion } from "react-bootstrap";

const Blog = () => {
  return (
    <div className="m-5 p-5">
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            Difference between javascript and nodejs
          </Accordion.Header>
          <Accordion.Body>
            Below is the list of points describing the difference between
            JavaScript and Node JS <br />
             JavaScript is a simple programming language
            that runs in any browser JavaScript Engine. Whereas Node JS is an
            interpreter or running environment for a JavaScript programming
            language that holds many excesses, it requires libraries that can
            easily be accessed from JavaScript programming for better use. <br />
            JavaScript is normally used for any client-side activity for one web
            application. An activity can be addressing business validation or
            dynamic page display in some schedule time interval or basic Ajax
            call kind of task. Those are used for a maximum time for any web
            application. Whereas Node JS mainly used for accessing or running
            any operating system for non-blocking operation. An operation like
            creating or executing a shell script, or getting some specific
            hardware-related information on one call or installed certificate
            details in the system or a lot of define task is non-blocking on an
            operating system.
            <br /> JavaScript running in any engine like Spider
            monkey (FireFox), JavaScript Core (Safari), V8 (Google Chrome). So
            JavaScript programming is very easy to write, and put any running
            environment means proper browser. Whereas Node JS only support the
            V8 engine, which googles chrome specific. But whether it supports
            the V8 engine, written JavaScript code can able to run in any
            environment. So there has no browser-specific constraint on it.
            <br />
            JavaScript is normally following Java Programming language standard.
            There may have some different way of writing code, but at the same
            time, we can say it following the Java Programming language
            standard. Whereas node JS is written in C++ and provides a V8 engine
            base browser javascript running engine, it helps us run a written
            javascript program in any browser environment.
            <br />
             For accessing any
            operating system, specific non-blocking task JavaScript has some
            specific object, but all of them are operating system specific. An
            example is ActiveX Control which is only running in Windows. But
            Node JS is given utility to run some operating system specific
            non-blocking tasks from any JavaScript programming. It doesn’t have
            any operating system specific constant. Node JS is very much
            familiar to create a specific binding with the file system and
            allows the developer to read or sometimes write on disk.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            {" "}
            When should you use nodejs and when should you use mongodb
          </Accordion.Header>
          <Accordion.Body>
            Well, NodeJS and MongoDB are two different process. Here I tried to
            explain as simpler as possible:
            <br />
            NodeJS is a JavaScript runtime environment. It's actually helps
            JavaScript to run outside of server. It's used in server side
            development.
            <br />
            MongoDB is NoSQL database which is document oriented. It represents
            data as of JSON documents. It's used for store data. <br />
            The summary is MongoDB is a database where we can store data and
            NodeJS helps us to to connect our client site to database by it's
            server site.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            {" "}
            Differences between SQL and NoSQL databases.
          </Accordion.Header>
          <Accordion.Body>
            Differences between SQL vs NoSQL are:
            <br />
            SQL databases are relational, NoSQL databases are non-relational.
            <br /> SQL databases use structured query language and have a
            predefined schema. NoSQL databases have dynamic schemas for
            unstructured data.
            <br />
            SQL databases are vertically scalable, while NoSQL databases are
            horizontally scalable.
            <br /> SQL databases are table-based, while NoSQL databases are
            document, key-value, graph, or wide-column stores. <br /> SQL
            databases are better for multi-row transactions, while NoSQL is
            better for unstructured data like documents or JSON.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            {" "}
            What is the purpose of jwt and how does it work?
          </Accordion.Header>
          <Accordion.Body>
            JWT, or JSON Web Token, is an open standard used to share security
            information between two parties — a client and a server. Each JWT
            contains encoded JSON objects, including a set of claims. JWTs are
            signed using a cryptographic algorithm to ensure that the claims
            cannot be altered after the token is issued.
            <br />
            JWT can be used as an access token to prevent unwanted access to a
            protected resource. They're often used as Bearer tokens, which the
            API will decode and validate before sending a response.
            <br />
            It works this way: the server generates a token that certifies the
            user identity, and sends it to the client. The client will send the
            token back to the server for every subsequent request, so the server
            knows the request comes from a particular identity.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Blog;
