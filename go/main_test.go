package main

import (
	"bytes"
	"encoding/json"
	"net/http"
	"net/http/httptest"
	"testing"
)

// testVal is a helper function to make sure we have the key and value pairs that we have defined for the coding challenge.
func testVal(t *testing.T, res Result, key, value string) {
	// check to see if the key exists
	if val, ok := res[key]; ok {

		// if the key and value don't match up to what we are expecting,
		// throw an error and allow the test to fail
		if val != val {
			t.Errorf("key \"%s\" should equal \"%s\", but instead got %s.", key, value, val)
		}

	} else { // if the key didn't exist at all
		t.Errorf("Expected key \"%s\" in the result.", key) // fail.
	}
}

func TestPost(t *testing.T) {

	// create the payload to send to the handler
	payload := &Payload{
		Keys:   []string{"one", "two", "three", "four"},
		Values: []string{"test1", "test2", "test3"},
	}

	// this turns our struct into a json byte slice
	// (if you cast the "b" variable into a string -- it will be readbale json)
	b, _ := json.Marshal(&payload)

	// create the POST request with the body set to our payload -- we have to turn it
	// into a reader first, which is what the bytes.NewReader is.
	req, _ := http.NewRequest("POST", "", bytes.NewReader(b))
	w := httptest.NewRecorder() // we then create an emulated response writer

	handler := handlePost()   // create the handler for our one route
	handler.ServeHTTP(w, req) // pass in the request and emulated writer

	// Now we read the response from the body of the response -- hint hint
	var res Result
	err := json.NewDecoder(w.Body).Decode(&res)
	if err != nil { // if we are dealing with malformed or non-existant json: throw an error
		t.Errorf("Couldn't decode the JSON response!")
	}

	// use our helper function to make sure these values exist
	testVal(t, res, "one", "test1")
	testVal(t, res, "two", "test2")
	testVal(t, res, "three", "test3")

	if _, ok := res["four"]; ok { // since four doesn't have a value, this should have been skipped per the instructions
		t.Errorf("Item four should be omitted from the response!")
	}

	// since this was accepted by our API, we want the response to be a "202 accepted" response
	if w.Code != http.StatusAccepted {
		t.Errorf("Home page didn't return %v", http.StatusAccepted)
	}
}
