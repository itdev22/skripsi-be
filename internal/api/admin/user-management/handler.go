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

func (h *AdminUserManagementHandlerStruct) GetUserManagement(c *fiber.Ctx) error {
	// Implement the logic to get user management details
	return helpers.ResponseUtils(c, fiber.StatusOK, true, "", nil)

}

func (h *AdminUserManagementHandlerStruct) GetByIDAdminUserManagement(c *fiber.Ctx) error {
	id := c.Params("id")
	request := IdAdminUserManagementRequest{}
	request.Id = id

	h.service.GetUserByID(request)

	return helpers.ResponseUtils(c, fiber.StatusOK, true, "", nil)
}
