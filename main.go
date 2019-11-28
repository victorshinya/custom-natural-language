package main

import (
	"fmt"
	"log"
	"net/http"
	"os"

	"github.com/gorilla/mux"
	_ "github.com/joho/godotenv/autoload"
	"github.com/rs/cors"
	"github.com/victorshinya/natural-language-understanding-demo/handler"
)

func main() {
	router := mux.NewRouter()
	router.HandleFunc("/api/analyze", handler.AnalyzeText).Methods(http.MethodPost)
	router.PathPrefix("/").Handler(http.StripPrefix("/", http.FileServer(http.Dir("static"))))

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}
	fmt.Printf(`Server is up and running at port %s`, port)
	handler := cors.Default().Handler(router)
	log.Fatal(http.ListenAndServe(":"+port, handler))
}
