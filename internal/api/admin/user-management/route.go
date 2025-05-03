package usermanagement

import (
	"skripsi-be/internal/config/database"
	"skripsi-be/internal/helpers"

	"github.com/gofiber/fiber/v2"
)

func AdminUserManagementRoute(app fiber.Router) {

	db := database.GetDB()
	repository := NewAdminUserManagementRepository(db)
	service := NewAdminUserManagementService(repository)
	handler := NewAdminUserManagementHandler(service)

	app.Use(helpers.VerifyToken)
	app.Get("/", handler.GetUserManagement)
	app.Get("/:id", handler.GetUserManagement)
	app.Post("/", handler.GetUserManagement)
}
