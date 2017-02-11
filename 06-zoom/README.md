# Airports Map Visualisation

In this directory you'll find all the code needed to run the
visualisation. As mentioned in the screencast, your browser will
prevent you from making your javascript code fetch the airports
list. Read on to find out why and how to avoid it.

## Browsers and the same-origin policy

### The problem

Browsers try to protect the users from malicious sites in various
ways. One way is by following
the [same-origin policy](https://en.wikipedia.org/wiki/Same-origin_policy).
Browsers who implement the policy blocks web sites from reading data
from other sites.

In our case, if your `main.js` d3 code is on your local disk, your
browser won't let that code fetch the airport CSV file located
somewhere on the internet. Both `main.js` and `airports.csv` have to
be served from the same origin.

You might think that it's ok to just download `airports.csv` and fetch
everything as files. However that won't work in all browsers. The
reason is that specification that defines what "same origin" means
doesn't cover local files (`file://` URLs), so browsers implements
that case differently. Chrome doesn't allow a JS file at a `file://`
location to fetch data at another `file://` location. However Firefox
allows it.

### The solution

The obvious solution is to use Firefox for local development. With
Chrome, you can disable the security policy, at your own risk.

But in order to make our code work in all browsers, we need to avoid
`file://` and put everything on a web server. So we can either copy
our files on some server we have access to, or run a local server
which is simpler for development.

There are various utilities that run a local server that will just
serve our files. One is
called [http-server](https://www.npmjs.com/package/http-server) and is
easy to install and run if you have node on your system.  Another
is
[SimpleHttpServer](http://www.pythonforbeginners.com/modules-in-python/how-to-use-simplehttpserver/),
which you already have if Python is installed on your computer.
