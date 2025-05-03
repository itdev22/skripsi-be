package authapi

import (
	"skripsi-be/internal/api/common/validation"
	"skripsi-be/internal/helpers"

	"github.com/gofiber/fiber/v2"
)

type AuthHandlerStruct struct {
	service *AuthServiceStruct
}

func NewAuthHandler(service *AuthServiceStruct) *AuthHandlerStruct {
	return &AuthHandlerStruct{service}
}

func (s AuthHandlerStruct) LoginAuthHandler(c *fiber.Ctx) error {
	// Handler logic here
	request := new(LoginRequest)
	if err := c.BodyParser(request); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "Invalid request",
		})
	}
	// Validate the request
	errorMessages := validation.ValidationRequest(request)
	if errorMessages != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error":   "Validation error",
			"message": errorMessages,
		})
	}

	// Call the service
	user, err := s.service.LoginAuthService(*request)
	if err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": err.Error(),
		})
	}
	if user == nil {
		return c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{
			"error": "Invalid credentials",
		})
	}
	// Return the user data
	return helpers.ResponseUtils(c, fiber.StatusOK, true, "Login successful", user)
}

func (h *AuthHandlerStruct) VerifyAuthHandler(c *fiber.Ctx) error {

	return helpers.ResponseUtils(c, fiber.StatusOK, true, "", "")
}
