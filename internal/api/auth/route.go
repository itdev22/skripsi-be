package authapi

import (
	"skripsi-be/internal/config/database"
	"skripsi-be/internal/helpers"

	"github.com/gofiber/fiber/v2"
)

func AuthRoute(app fiber.Router) {
	dbmysql := database.GetDB()
	repository := NewAuthRepository(dbmysql)
	service := NewAuthService(repository)
	handler := NewAuthHandler(service)

	app.Post("/login", handler.LoginAuthHandler)
	app.Get("/", helpers.VerifyToken, handler.LoginAuthHandler)
}
