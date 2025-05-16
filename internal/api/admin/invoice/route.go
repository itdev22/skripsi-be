package invoice

import (
	"skripsi-be/internal/config/database"

	"github.com/gofiber/fiber/v2"
)

func AdminInvoiceRoute(app fiber.Router) {
	db := database.GetDB()
	repository := NewAdminInvoiceRepository(db)
	service := NewAdminInvoiceService(repository)
	handler := NewAdminInvoiceHandler(service)

	app.Get("/", handler.GetAllAdminInvoiceHandler)
	app.Get("/:id", handler.GetByIdAdminInvoiceHandler)
	app.Post("/", handler.CreateAdminInvoiceHandler)
	app.Put("/:id", handler.UpdateAdminInvoiceHandler)
	app.Delete("/:id", handler.DeleteAdminInvoiceHandler)
}
