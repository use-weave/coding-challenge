# Weave Go Challenge
## Set up
Setting up your `gopath` is the first step if you haven't done this already. [Set up instructions located here](https://golang.org/doc/install)

Make sure your `gopath` is set up by running this command:
```
# macOS and linux
echo $GOPATH
```
If you see a blank response, [review this part of the documentation again](https://golang.org/doc/install#tarball_non_standard). You may even just need to restart your terminal to see the changes.

Our go project has no dependencies, so you should be able to move right along!

## The Challenge
Inside of this directory, you will see two relevant files [main.go](./main.go) and [main_test.go](./main_test.go). Open the `main.go` file and you will see a basic HTTP web server.

This webserver will even compile and run (try it by typing in `go build && ./go` and visiting [http://localhost:8080](http://localhost:8080)!), but if you run the test file `go test` it will fail.

The goal is to make this test pass. In order to do so, we need to think of your handler as a `POST` handler. You will read the `POST` data from the request and parse the JSON. Our JSON payload has two string arrays. One labeled `keys` and one labeled `values`. The goal is to make a map out of this by combining the keys and values together.

When you are done combining those values, we need to encode our new map into JSON and send it to the `ResponseWriter`. We also want to give back a HTTP Status Code of `202` (Accepted).

Continue running the test (`go test`) until it passes. The test will send a payload over to you, making the writing and debugging process pretty simple.

One thing you'll notice as you build this out: the keys and values don't match up. Simply ignore or remove the key that does not have a matching value. The unit test will fail if you don't.

## Notes
- Here at Weave, we are very API focused and so HTTP and JSON are important things to know. If you have worked with Go before, it is very possible that you were using a library for server management. That's ok, do make note of that to us. Our goal here is to see how well you understand what goes on behind the scenes. Also, go has an amazing standard library and this gives us the ability to see how well you know it or could figure it out.
