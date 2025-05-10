package customer

import (
	"skripsi-be/internal/api/common/validation"
	"skripsi-be/internal/helpers"
	"strings"

	"github.com/gofiber/fiber/v2"
)

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
	request := CreateAdminCustomerRequest{}
	err := c.BodyParser(&request)
	if err != nil {
		return helpers.ResponseUtils(c, fiber.StatusBadRequest, false, err.Error(), "")
	}

	errValidation := validation.ValidationRequest(request)
	if errValidation != nil {
		return helpers.ResponseUtils(c, fiber.StatusBadRequest, false, strings.Join(errValidation, ", "), err)
	}

	customer, err := h.service.CreateAdminCustomerService(request)
	if err != nil {
		return helpers.ResponseUtils(c, fiber.StatusBadRequest, false, err.Error(), "")

	}

	return helpers.ResponseUtils(c, fiber.StatusOK, true, "", customer)
}
func (h AdminCustomerHandlerStruct) UpdateAdminCustomerHandler(c *fiber.Ctx) error {

	return helpers.ResponseUtils(c, fiber.StatusOK, true, "", "")
}
func (h AdminCustomerHandlerStruct) DeleteAdminCustomerHandler(c *fiber.Ctx) error {

	return helpers.ResponseUtils(c, fiber.StatusOK, true, "", "")
}
