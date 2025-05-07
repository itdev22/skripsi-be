package customer

import (
	"skripsi-be/internal/config/database"

	"github.com/gofiber/fiber/v2"
)

func AdminCustomerRoute(app fiber.Router) {
	db := database.GetDB()
	repository := NewAdminCustomerRepository(db)
	service := NewAdminCustomerService(repository)
	handler := NewAdminCustomerHandler(service)

	app.Get("", handler.GetAllAdminCustomerHandler)

}
