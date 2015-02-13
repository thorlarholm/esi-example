# esi-example
Example use of ESI middleware

Instructions
------------

````
npm install
node server.js
```

This installs the required node modules and starts a listening server.

To see the included snippet on its own, open [http://localhost:3000/snippet](http://localhost:3000/snippet)

This snippet is included via the following ESI statement
```xml
<esi:include src="http://localhost:3000/snippet"></esi:include>
```

To see that ESI is working, open [http://localhost:3000/](http://localhost:3000/)

