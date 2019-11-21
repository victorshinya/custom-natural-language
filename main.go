package main

import (
	"fmt"
	"log"
	"net/http"
	"os"

	"github.com/gorilla/mux"
	_ "github.com/joho/godotenv/autoload"
	"github.com/victorshinya/natural-language-understanding-demo/handler"
)

func main() {
	router := mux.NewRouter()
	s := router.PathPrefix("/api").Subrouter()
	s.HandleFunc("/analyze", handler.AnalyzeText).Methods(http.MethodPost)

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}
	fmt.Printf(`Server is up and running at port %s`, port)
	log.Fatal(http.ListenAndServe(":"+port, s))
}
