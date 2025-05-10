package asset

import (
	"skripsi-be/internal/config/database"

	"github.com/gofiber/fiber/v2"
)

func AdminAssetRoute(app fiber.Router) {
	db := database.GetDB()
	repository := NewAdminAssetRepository(db)
	service := NewAdminAssetService(repository)
	handler := NewAdminAssetHandler(service)

	app.Get("/", handler.GetAllAdminAssetHandler)
	app.Get("/:id", handler.GetByIdAdminAssetHandler)
	app.Post("/", handler.CreateAdminAssetHandler)
	app.Put("/:id", handler.UpdateAdminAssetHandler)
	app.Delete("/:id", handler.DeleteAdminAssetHandler)

}
