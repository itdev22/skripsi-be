package company

import (
	"skripsi-be/internal/api/common/validation"
	"skripsi-be/internal/helpers"

	"github.com/gofiber/fiber/v2"
)

type AdminCompanyHandlerStruct struct {
	service *AdminCompanyServiceStruct
}

func NewAdminCompanyHandler(service *AdminCompanyServiceStruct) *AdminCompanyHandlerStruct {
	return &AdminCompanyHandlerStruct{service}
}

func (h *AdminCompanyHandlerStruct) GetAllAdminCompanyHandler(c *fiber.Ctx) error {
	companies, err := h.service.GetAllAdminCompanyService()
	if err != nil {
		return helpers.ResponseUtils(c, fiber.StatusInternalServerError, false, "Get All Admin Company Error", err)
	}

	return helpers.ResponseUtils(c, fiber.StatusOK, true, "Get All Admin Company", companies)
}

func (h *AdminCompanyHandlerStruct) CreateAdminCompanyHandler(c *fiber.Ctx) error {
	request := &CreateAdminCompanyRequest{}
	c.BodyParser(request)
	err := validation.ValidationRequest(request)
	if err != nil {
		return helpers.ResponseUtils(c, fiber.StatusBadRequest, false, "Validation Error", err)
	}

	h.service.CreateAdminCompanyService(*request)
	return helpers.ResponseUtils(c, fiber.StatusOK, true, "Create Admin Company", nil)

}
