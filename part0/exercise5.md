```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: GET /exampleapp/spa HTTP/1.1
    activate server
    server-->>browser: HTTP/1.1 200 OK
    deactivate server

    browser->>server: GET /exampleapp/main.css HTTP/1.1
    activate server
    server-->>browser: HTTP/1.1 200 OK
    deactivate server

    browser->>server: GET /exampleapp/spa.js HTTP/1.1
    activate server
    server-->>browser: HTTP/1.1 200 OK
    deactivate server

    browser->>server: GET /exampleapp/data.json HTTP/1.1
    activate server
    server-->>browser: HTTP/1.1 200 OK
    deactivate server
