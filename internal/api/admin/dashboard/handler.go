package dashboard

import (
	"skripsi-be/internal/helpers"

	"github.com/gofiber/fiber/v2"
)

type AdminDashboardHandlerInterface interface {
}

type AdminDashboardHandlerStruct struct {
}

func NewAdminDashboardHandler() AdminDashboardHandlerStruct {
	return AdminDashboardHandlerStruct{}
}

func (h AdminDashboardHandlerStruct) GetTotalIncome(c *fiber.Ctx) error {
	type GetTotalIncome struct {
		TotalIncome int64 `json:"total_income"`
	}

	data := GetTotalIncome{
		TotalIncome: 1000,
	}
	return helpers.ResponseUtils(c, fiber.StatusOK, true, "Success Get Data", data)
}

func (h AdminDashboardHandlerStruct) GetTotalExpenses(c *fiber.Ctx) error {
	type GetTotalExpenses struct {
		TotalExpenses int64 `json:"total_expenses"`
	}

	data := GetTotalExpenses{
		TotalExpenses: 1000,
	}
	return helpers.ResponseUtils(c, fiber.StatusOK, true, "Success Get Data", data)
}

func (h AdminDashboardHandlerStruct) GetNetWorth(c *fiber.Ctx) error {
	type GetNetWorth struct {
		TotalNetWorth int64 `json:"total_net_worth"`
	}

	data := GetNetWorth{
		TotalNetWorth: 1000,
	}
	return helpers.ResponseUtils(c, fiber.StatusOK, true, "Success Get Data", data)
}

func (h AdminDashboardHandlerStruct) GetSales(c *fiber.Ctx) error {
	type GetSales struct {
		TotalSale int64 `json:"total_sales"`
	}

	data := GetSales{
		TotalSale: 400,
	}
	return helpers.ResponseUtils(c, fiber.StatusOK, true, "Success Get Data", data)
}
