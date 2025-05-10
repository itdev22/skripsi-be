package role

import (
	"skripsi-be/internal/config/database"

	"github.com/gofiber/fiber/v2"
)

func AdminRoleRoute(app fiber.Router) {
	db := database.GetDB()
	repository := NewAdminRoleRepository(db)
	service := NewAdminRoleService(repository)
	handler := NewAdminRoleHandler(service)

	app.Get("/", handler.GetAllAdminRoleHandler)
	app.Get("/:id", handler.GetByIdAdminRoleHandler)
	app.Post("/", handler.CreateAdminRoleHandler)
	app.Put("/:id", handler.UpdateAdminRoleHandler)
	app.Delete("/:id", handler.DeleteAdminRoleHandler)
}
