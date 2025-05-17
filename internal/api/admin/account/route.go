package account

import (
	"skripsi-be/internal/config/database"

	"github.com/gofiber/fiber/v2"
)

func AdminAccountRoute(app fiber.Router) {
	db := database.GetDB()
	repository := NewAdminAccountRepository(db)
	service := NewAdminAccountService(repository)
	handler := NewAdminAccountHandler(service)

	app.Get("/", handler.GetAllAdminAccountHandler)
	app.Get("/:id", handler.GetByIdAdminAccountHandler)
	app.Post("/", handler.CreateAdminAccountHandler)
	app.Put("/:id", handler.UpdateAdminAccountHandler)
	app.Delete("/:id", handler.DeleteAdminAccountHandler)
}
