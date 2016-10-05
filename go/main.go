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

		// Right now we are simply taking the writer defined as an argument to this function
		// and using that to write the text "Hello world!". Using the README, follow the instructions
		// on how to update this function to make the test pass.
		//
		// Feel free to use the test for some ideas.

		//take r and "decode it " grab information and put it into a map ( refer to test code)
		// then send it back over in json just like code in test protram 


	decoder := json.NewDecoder(r.Body) //create new decoder
    var t Payload //struct  to store the data 
    err := decoder.Decode(&t) //put decode data into struct
    if err != nil { //protect against bad json 
        fmt.Fprintf(w, "shit")
    }
    fmt.Println("Hey", t)

    // populate result with data containted in t, map must read one: test1   two:test2 etc
    //cant figure out how to put data from body into map 
    //resend data using responsewriter 

    //json.marshall(result?) encode map into json so it can be sent with responsewriter
    //json.NewEncoder(w).Encode(t)



	
    

		fmt.Fprintf(w, "Hello world!")
	})
}

// all go programs have a main function as an entrance into the application.
func main() {
	http.Handle("/", handlePost())    // this is the endpoint that we are wiring up
	http.ListenAndServe(":8080", nil) // finally -- serve on localhost:8080
}
