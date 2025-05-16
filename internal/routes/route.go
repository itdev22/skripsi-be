package routes

import (
	"skripsi-be/internal/api/admin/area"
	"skripsi-be/internal/api/admin/asset"
	"skripsi-be/internal/api/admin/company"
	"skripsi-be/internal/api/admin/customer"
	customerinstallation "skripsi-be/internal/api/admin/customer/installation"
	"skripsi-be/internal/api/admin/product"
	"skripsi-be/internal/api/admin/report"
	"skripsi-be/internal/api/admin/role"
	"skripsi-be/internal/api/admin/transaction"
	usermanagement "skripsi-be/internal/api/admin/user-management"
	authapi "skripsi-be/internal/api/auth"
	upload_file "skripsi-be/internal/api/common/upload_file"
	"skripsi-be/internal/api/webhook/moota"

	"github.com/gofiber/fiber/v2"
)

func RouteFiber(app *fiber.App) {
	app.Static("/", "./public")

	api := app.Group("/api")

	upload_file.CommonUploadFileRoute(api.Group("/file-upload"))

	auth := api.Group("/auth")
	authapi.AuthRoute(auth)

	admin := api.Group("/admin")
	company.AdminCompanyRoute(admin.Group("/company"))
	usermanagement.AdminUserManagementRoute(admin.Group("/user-management"))
	role.AdminRoleRoute(admin.Group("/role"))
	product.AdminProductRoute(admin.Group("/product"))
	report.AdminReportRoute(admin.Group("/report"))
	area.AdminAreaRoute(admin.Group("/area"))
	customer.AdminCustomerRoute(admin.Group("/customer"))
	customerinstallation.AdminCustomerInstallationRoute(admin.Group("/customer-installation"))
	asset.AdminAssetRoute(admin.Group("/asset"))
	transaction.AdminTrasactionRoute(admin.Group("/transaction"))

	webhook := api.Group("/webhook")
	moota.WebhookMootaRoute(webhook.Group("/moota"))

}
