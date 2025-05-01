package routes

import (
	authapi "skripsi-be/internal/api/auth"

	"github.com/gofiber/fiber/v2"
)

func RouteFiber(app *fiber.App) {
	api := app.Group("/api")

	auth := api.Group("/auth")
	authapi.AuthRoute(auth)
}
