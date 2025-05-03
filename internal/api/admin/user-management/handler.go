package usermanagement

import (
	"skripsi-be/internal/helpers"

	"github.com/gofiber/fiber/v2"
)

type AdminUserManagementHandlerStruct struct {
	service *AdminUserManagementServiceStruct
}

func NewAdminUserManagementHandler(service *AdminUserManagementServiceStruct) *AdminUserManagementHandlerStruct {
	return &AdminUserManagementHandlerStruct{service}
}

func (h *AdminUserManagementHandlerStruct) GetAllAdminUserManagementHandler(c *fiber.Ctx) error {
	// Implement the logic to get user management details
	User, err := h.service.GetAllAdminUserManagementService()
	if err != nil {
		return helpers.ResponseUtils(c, fiber.StatusBadRequest, false, "User Not Found", nil)
	}

	return helpers.ResponseUtils(c, fiber.StatusOK, true, "Success Get All User", User)
}

func (h *AdminUserManagementHandlerStruct) GetByIDAdminUserManagementHandler(c *fiber.Ctx) error {
	id := c.Params("id")
	request := IdAdminUserManagementRequest{}
	request.Id = id

	h.service.GetByIdAdminUserManagementService(request)

	return helpers.ResponseUtils(c, fiber.StatusOK, true, "", nil)
}
