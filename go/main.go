package main

import (
	"fmt"
	"net/http"
	"io/ioutil"
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
    body, err := ioutil.ReadAll(r.Body)
    if err != nil {
      panic(err)
    }
    
		var p Payload
		err = json.Unmarshal(body, &p)
    if err != nil {
        panic(err)
    }
    var out = make(Result)
    // looping over range of values ensures we don't include missing values
    for i, val := range p.Values {
      out[p.Keys[i]] = val
    }
    j, err := json.Marshal(&out)
    if err != nil {
        panic(err)
    }
    w.WriteHeader(http.StatusAccepted)
		fmt.Fprintf(w, string(j))
	})
}

// all go programs have a main function as an entrance into the application.
func main() {
	http.Handle("/", handlePost())    // this is the endpoint that we are wiring up
	http.ListenAndServe(":8080", nil) // finally -- serve on localhost:8080
}
