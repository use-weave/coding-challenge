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

// Result is a response type the tests expect in return.
type Result map[string]string

// handlePost is a handler and is where you will write most of your code
func handlePost() http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		
		var payload Payload // Use Payload from above as data structure
		err := json.NewDecoder(r.Body).Decode(&payload) // Decode request body to &payload pointer

		// Handle error if unable to parse Request Body
		if err != nil {
      fmt.Printf("Error reading body: %v", err)
      http.Error(w, "Unable to read request body!", http.StatusBadRequest)
      return
    }

    result := make(Result) // create empty map using Result type from above

    // Populate result, breaking loop when either of the arrays is consumed
		for i := 0; i < len(payload.Keys) && i < len(payload.Values); i++ {
			result[payload.Keys[i]] = payload.Values[i]
		}

		// Set response header status code
		w.WriteHeader(202)

		// encode our new map into JSON, and write it to the ResponseWriter
		json.NewEncoder(w).Encode(result)
	})
}

// all go programs have a main function as an entrance into the application.
func main() {
	http.Handle("/", handlePost())    // this is the endpoint that we are wiring up
	http.ListenAndServe(":8080", nil) // finally -- serve on localhost:8080
}
