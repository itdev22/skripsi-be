package customer

import (
	"skripsi-be/internal/helpers"

	"github.com/gofiber/fiber/v2"
)

type AdminCustomerHandlerInterface interface {
}

type AdminCustomerHandlerStruct struct {
	service AdminCustomerServiceInterface
}

func NewAdminCustomerHandler(service AdminCustomerServiceInterface) AdminCustomerHandlerStruct {
	return AdminCustomerHandlerStruct{service}
}

func (h AdminCustomerHandlerStruct) GetAllAdminCustomerHandler(c *fiber.Ctx) error {

	return helpers.ResponseUtils(c, fiber.StatusOK, true, "", "")
}
func (h AdminCustomerHandlerStruct) GetByIdAdminCustomerHandler(c *fiber.Ctx) error {

	return helpers.ResponseUtils(c, fiber.StatusOK, true, "", "")
}
func (h AdminCustomerHandlerStruct) CreateAdminCustomerHandler(c *fiber.Ctx) error {

	return helpers.ResponseUtils(c, fiber.StatusOK, true, "", "")
}
func (h AdminCustomerHandlerStruct) UpdateAdminCustomerHandler(c *fiber.Ctx) error {

	return helpers.ResponseUtils(c, fiber.StatusOK, true, "", "")
}
func (h AdminCustomerHandlerStruct) DeleteAdminCustomerHandler(c *fiber.Ctx) error {

	return helpers.ResponseUtils(c, fiber.StatusOK, true, "", "")
}
