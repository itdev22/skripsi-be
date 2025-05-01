package main

import (
	"encoding/json"
	"log"
	"skripsi-be/internal/config/database"
	"skripsi-be/internal/routes"

	"github.com/gofiber/fiber/v2"
)

func main() {
	database.GetDB()
	app := fiber.New(fiber.Config{
		JSONEncoder: json.Marshal,
		JSONDecoder: json.Unmarshal,
	})

	// Initialize routes
	routes.RouteFiber(app)

	log.Fatal(app.Listen(":3001"))
}
