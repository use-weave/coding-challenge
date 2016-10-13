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
		var p Payload
		err := json.NewDecoder(r.Body).Decode(&p) // parse JSON in request body
		if err != nil {
			panic(err)
		}
		defer r.Body.Close()

		res := make(Result)
		for i := 0; i < len(p.Values); i++ { // combine keys and values from payload into map
			res[p.Keys[i]] = p.Values[i]
		}
		jsonString, err := json.Marshal(res) // encode Result map into JSON
		if err != nil {
			panic(err)
		}
		w.WriteHeader(http.StatusAccepted)
		w.Write(jsonString) // write JSON byte string response to the connection
	})
}

// all go programs have a main function as an entrance into the application.
func main() {
	http.Handle("/", handlePost())    // this is the endpoint that we are wiring up
	http.ListenAndServe(":8080", nil) // finally -- serve on localhost:8080
}
