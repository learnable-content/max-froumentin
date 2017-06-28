# Airports Map Visualisation

In this directory you'll find all the code needed to run the
visualisation.

If you just open the `index.html` file in your browser, some browsers
(e.g. Chrome) will prevent the code from fetching the airports CSV
file.

Quick fix: use a browser that doesn't block your code. For instance Firefox.

Read on to find out what's going on and how to make your code work in any browser.


## Browsers and the same-origin policy

### The problem

Browsers try to protect the users from malicious sites in various
ways. One way is by implementing
the
[same-origin policy](https://en.wikipedia.org/wiki/Same-origin_policy).
Browsers who implement that policy prevent code from some web sites from
reading data from other sites.

For instance, if your `main.js` d3 code file is on your computer, your
browser won't let that code fetch a CSV file that's located somewhere
on the internet. Both `main.js` and `airports.csv` have to be served
from the same origin.

You might think that it's ok to then just download `airports.csv` and
let everything happen locally, as files. However that won't work in
all browsers. The reason is that the specification that defines what
"same origin" means doesn't cover local files (i.e. `file://` URLs), so
browsers implement that case differently: Chrome doesn't allow a JS
file at a `file://` location to fetch data at another `file://`
location. However Firefox allows it.

### The solution

The obvious solution is to use Firefox for local development. With
Chrome, you can disable the security policy, at your own risk.

But in order to make our code work in all browsers, we need to avoid
`file://` and put everything on a single web server so the 'origin'
is the same. So we can either copy our files on some server, or run a
local server which is simpler for development.

There are various utilities that run a local server that will just
serve our files. One is
called [http-server](https://www.npmjs.com/package/http-server) and is
easy to install and run if you have node on your system.  Another
is
[SimpleHttpServer](http://www.pythonforbeginners.com/modules-in-python/how-to-use-simplehttpserver/),
which you already have if Python is installed on your computer.
