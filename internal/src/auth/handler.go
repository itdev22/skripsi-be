package auth

import "github.com/gofiber/fiber/v2"

func authHandler(c *fiber.Ctx) error {
	// Handler logic here
	return c.SendString("Auth Handler")
}
