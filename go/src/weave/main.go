package main

import (
	"encoding/json"
	"fmt"
	"net/http"
)

// Payload is a definition of what will be posted to the API endpoint.
type Payload struct {
	Keys   []string `json:"keys"`
	Values []string `json:"values"`
}

// Result is a response type that we expect in return.
type Result map[string]string

// handlePost is the handler that will where most of your code will be written
func handlePost() http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, req *http.Request) {

		// Right now we are simply taking the writer defined as an argument to this function
		// and using that to write the text "Hello world!". Using the README, follow the instructions
		// on how to update this function to make the test pass.
		//
		// Feel free to use the test for some ideas.
		decoder := json.NewDecoder(req.Body)
		var t Payload
		err := decoder.Decode(&t)
		if err != nil {
			panic("ahhh!")
		}
		defer req.Body.Close()
		fmt.Println("keys are: ", t.Keys)
		fmt.Println("values are: ", t.Values)

		fmt.Fprintf(w, "Hello world!!!!")
	})
}

// all go programs have a main function as an entrance into the application.
func main() {
	http.Handle("/", handlePost())    // this is the endpoint that we are wiring up
	http.ListenAndServe(":8080", nil) // finally -- serve on localhost:8080
}
