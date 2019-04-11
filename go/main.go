package main

import (
	"fmt"
	"net/http"
	"encoding/json"
	"io/ioutil"
	"strings"
	"io"
)


type Payload struct {
	Keys   []string `json:"keys"`
	Values []string `json:"values"`
}


type Result map[string]string


func handlePost() http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
// useful for small request bodies, http.Unmarshal() would be wise for large request bodies.
		body, err := ioutil.ReadAll(r.Body)
	
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}

// decoding the JSON request body into strings
		decoded := json.NewDecoder(strings.NewReader(string(body)))

		
// I admit that a lot of this was pieced together from stack overflow questions and answers, and I'm not sure what io.EOF does. Although I was able to get a console printout of the info contained in the request body. Yay!
		for {
			var m Payload
			if err := decoded.Decode(&m); err == io.EOF {
				break
			}	else if err != nil {
				panic(err)
			}
			fmt.Println(m.Keys, m.Values)
			for index, value := range m.Keys {
				fmt.Println(index, value)
			}
			for index, value := range m.Values {
				fmt.Println(index, value)
			}
		}		
// the following stuff is how I learned I would be sending a response back, but I can't figure out how to get the information from the loops above into a response object.
	w.WriteHeader(http.StatusAccepted)
	// json.NewEncoder(w).Encode(Response)
	
	})
}

func main() {
	http.Handle("/", handlePost())
	http.ListenAndServe(":8080", nil)
}
