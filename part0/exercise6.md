```mermaid
    sequenceDiagram
        participant browser
        participant server
    
        browser->>server: POST /exampleapp/new_note_spa HTTP/1.1
        activate server
        server-->>browser: HTTP/1.1 201 Created
        deactivate server

     Note right of browser: Browser sends only one request to the server
