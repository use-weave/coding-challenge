package main

import (
	"encoding/json"
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
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		var payload Payload
		json.NewDecoder(r.Body).Decode(&payload)

		// if there are more values than keys, this will crash
		w.WriteHeader(http.StatusAccepted)
		m := make(Result)
		for i, key := range payload.Keys[:len(payload.Values)] {
			m[key] = payload.Values[i]
		}
		json.NewEncoder(w).Encode(m)
	})
}

// all go programs have a main function as an entrance into the application.
func main() {
	http.Handle("/", handlePost())    // this is the endpoint that we are wiring up
	http.ListenAndServe(":8080", nil) // finally -- serve on localhost:8080
}
