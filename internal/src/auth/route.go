package auth

import "github.com/gofiber/fiber/v2"

func AuthRoute(app *fiber.App) {
	app.Get("/auth", authHandler)
}
