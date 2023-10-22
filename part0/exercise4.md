```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: POST /exampleapp/new_note
    activate server
    server-->>browser: 302 Found
    deactivate server

    Note right of browser: Browser sends the user input to the server, which responds with status code and asks the browser to execute a new HTTP GET request

    browser->>server: GET /exampleapp/notes HTTP/1.1
    activate server
    server-->>browser: HTTP/1.1 200 OK
    deactivate server

    Note right of browser: Browser makes a new HTTP GET request which leads to 3 more GET requests for css, js and data files.

    browser->>server: GET /exampleapp/main.css HTTP/1.1
    activate server
    server-->>browser: HTTP/1.1 200 OK
    deactivate server

    browser->>server: GET /exampleapp/main.js HTTP/1.1
    activate server
    server-->>browser: HTTP/1.1 200 OK
    deactivate server

    browser->>server: GET /exampleapp/data.json HTTP/1.1
    activate server
    server-->>browser: HTTP/1.1 200 OK
    deactivate server
