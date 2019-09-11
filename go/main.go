package main

import (
	"fmt"
	"net/http"
	"encoding/json"
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
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {

		// This is the solution I was able to come up with. In an attempt
		// to increase speed, I had looked into Unmarshal instead, but
		// had trouble going from the custom type Payload into the
		// required []byte type for the first argument to Unmarshal.

		decoder := json.NewDecoder(r.Body)
		var pay Payload
		err := decoder.Decode(&pay)
		if err != nil {
		   panic(err)
		}
		m := make(map[string]string)
		for i := 0; i < len(pay.Values); i++ {
		    m[string(pay.Keys[i])] = pay.Values[i]
		}
		fmt.Println(m)
		mapfin, _ := json.Marshal(m)
		w.WriteHeader(http.StatusAccepted)
		fmt.Fprintf(w, string(mapfin))
	})
}

// all go programs have a main function as an entrance into the application.
func main() {
	http.Handle("/", handlePost())    // this is the endpoint that we are wiring up
	http.ListenAndServe(":8080", nil) // finally -- serve on localhost:8080
}
