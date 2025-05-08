package customer

import (
	"skripsi-be/internal/api/common/validation"
	"skripsi-be/internal/helpers"

	"github.com/gofiber/fiber/v2"
)

type AdminCustomerHandlerStruct struct {
	service *AdminCustomerServiceStruct
}

func NewAdminCustomerHandler(service *AdminCustomerServiceStruct) *AdminCustomerHandlerStruct {
	return &AdminCustomerHandlerStruct{service}
}

func (h *AdminCustomerHandlerStruct) GetAllAdminCustomerHandler(c *fiber.Ctx) error {
	customers, err := h.service.GetAllAdminCustomerService()
	if err != nil {
		return helpers.ResponseUtils(c, fiber.StatusInternalServerError, false, "Get All Admin Customer Error", err)
	}

	return helpers.ResponseUtils(c, fiber.StatusOK, true, "Get All Admin Customer", customers)
}

func (h *AdminCustomerHandlerStruct) GetByIdAdminCustomerHandler(c *fiber.Ctx) error {
	customerId := c.Params("id")
	if customerId == "" {
		return helpers.ResponseUtils(c, fiber.StatusBadRequest, false, "Customer ID is required", nil)
	}
	request := &IdAdminCustomerRequest{}
	request.Id = customerId
	customers, err := h.service.GetByIdAdminCustomerService(*request)
	if err != nil {
		return helpers.ResponseUtils(c, fiber.StatusInternalServerError, false, "Get Admin Customer Error", err)
	}

	return helpers.ResponseUtils(c, fiber.StatusOK, true, "Get Admin Customer", customers)
}

func (h *AdminCustomerHandlerStruct) CreateAdminCustomerHandler(c *fiber.Ctx) error {
	request := &CreateAdminCustomerRequest{}
	err := c.BodyParser(request)
	if err != nil {
		return helpers.ResponseUtils(c, fiber.StatusBadRequest, false, "Error Parsing Data", err)
	}

	errValidation := validation.ValidationRequest(request)
	if errValidation != nil {
		return helpers.ResponseUtils(c, fiber.StatusBadRequest, false, "Validation Error", err)
	}

	h.service.CreateAdminCustomerService(*request)
	return helpers.ResponseUtils(c, fiber.StatusOK, true, "Create Admin Customer", nil)

}

func (h *AdminCustomerHandlerStruct) UpdateAdminCustomerHandler(c *fiber.Ctx) error {
	request := &UpdateAdminCustomerRequest{}

	id := c.Params("id")
	err := c.BodyParser(request)
	request.Id = id
	if err != nil {
		return helpers.ResponseUtils(c, fiber.StatusBadRequest, false, "Error Parsing Data", err)
	}

	errValidation := validation.ValidationRequest(request)
	if errValidation != nil {
		return helpers.ResponseUtils(c, fiber.StatusBadRequest, false, "Validation Error", err)
	}

	h.service.UpdateAdminCustomerService(*request)

	return helpers.ResponseUtils(c, fiber.StatusOK, true, "Success Update Data Customer", "")
}

func (h *AdminCustomerHandlerStruct) DeleteAdminCustomerHandler(c *fiber.Ctx) error {
	request := &IdAdminCustomerRequest{}

	customerId := c.Params("id")
	if customerId == "" {
		return helpers.ResponseUtils(c, fiber.StatusBadRequest, false, "Customer ID is required", nil)
	}

	request.Id = customerId

	h.service.DeleteAdminCustomerService(*request)

	return helpers.ResponseUtils(c, fiber.StatusOK, true, "Success Update Data Customer", "")
}
