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
		decoder := json.NewDecoder(r.Body)
		res := make(map[string]string)
		var pay Payload

		err := decoder.Decode(&pay)
		if err != nil {
			panic(err)
		}

		key_arr := pay.Keys
		val_arr := pay.Values
		for i, v := range val_arr {
			for x, y := range key_arr {

				if x == i {
					res[y] = v
				}
			}

		}

		resJson, err := json.Marshal(res)
		if err != nil {
			panic(err)
		}

		w.WriteHeader(http.StatusAccepted)
		w.Write(resJson)
		// Right now we are simply taking the writer defined as an argument to this function
		// and using that to write the text "Hello world!". Using the README, follow the instructions
		// on how to update this function to make the test pass.
		//
		// Feel free to use the test for some ideas.
		//fmt.Fprintf(w, "Hello world!")
	})
}

// all go programs have a main function as an entrance into the application.
func main() {
	http.Handle("/", handlePost())    // this is the endpoint that we are wiring up
	http.ListenAndServe(":8080", nil) // finally -- serve on localhost:8080
}
