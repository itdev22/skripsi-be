package routes

import (
	"skripsi-be/internal/api/admin/area"
	"skripsi-be/internal/api/admin/asset"
	"skripsi-be/internal/api/admin/company"
	"skripsi-be/internal/api/admin/customer"
	"skripsi-be/internal/api/admin/product"
	"skripsi-be/internal/api/admin/role"
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
	usermanagement.AdminUserManagementRoute(admin.Group("/user-management"))
	role.AdminRoleRoute(admin.Group("/role"))
	product.AdminProductRoute(admin.Group("/product"))
	area.AdminAreaRoute(admin.Group("/area"))
	customer.AdminCustomerRoute(admin.Group("/customer"))
	asset.AdminAssetRoute(admin.Group("/asset"))
}
