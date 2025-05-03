package routes

import (
	"skripsi-be/internal/api/admin/company"
	usermanagement "skripsi-be/internal/api/admin/user-management"
	authapi "skripsi-be/internal/api/auth"

	"github.com/gofiber/fiber/v2"
)

func RouteFiber(app *fiber.App) {
	api := app.Group("/api")

	auth := api.Group("/auth")
	authapi.AuthRoute(auth)

	admin := api.Group("/admin")
	company.AdminCompanyRoute(admin.Group("/company"))
	usermanagement.AdminCompanyRoute(admin.Group("/company"))
}
