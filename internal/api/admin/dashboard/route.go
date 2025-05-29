package dashboard

import (
	"skripsi-be/internal/helpers"

	"github.com/gofiber/fiber/v2"
)

func AdminDashboardRoute(app fiber.Router) {
	handler := NewAdminDashboardHandler()

	app.Use(helpers.VerifyToken)
	app.Get("total-income", handler.GetTotalIncome)
	app.Get("total-expenses", handler.GetTotalExpenses)
	app.Get("total-net-worth", handler.GetNetWorth)
	app.Get("total-sales", handler.GetSales)

	// analityc := app.Group("analytic-graph")
	// analityc.Get("customer")
	// analityc.Get("packet-popular")
	// analityc.Get("area-popular")
	// analityc.Get("report-cash")

}
