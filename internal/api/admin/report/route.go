package report

import (
	"skripsi-be/internal/config/database"

	"github.com/gofiber/fiber/v2"
)

func AdminReportRoute(app fiber.Router) {
	db := database.GetDB()
	repository := NewAdminReportRepository(db)
	service := NewAdminReportService(repository)
	handler := NewAdminReportHandler(service)

	app.Get("/internet", handler.GetAllAdminReportHandler)
}
