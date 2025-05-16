package authapi

import (
	"skripsi-be/internal/api/common/validation"
	"skripsi-be/internal/helpers"
	"strings"

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
		return helpers.ResponseUtils(c, fiber.StatusUnauthorized, false, err.Error(), "")

	}
	// Validate the request
	errorMessages := validation.ValidationRequest(request)
	if errorMessages != nil {
		return helpers.ResponseUtils(c, fiber.StatusUnauthorized, false, strings.Join(errorMessages, ", "), "")
	}

	// Call the service
	user, err := s.service.LoginAuthService(*request)
	if err != nil {
		return helpers.ResponseUtils(c, fiber.StatusUnauthorized, false, err.Error(), "")
	}
	if user == nil {
		return helpers.ResponseUtils(c, fiber.StatusUnauthorized, false, "User Not Found", "")
	}
	// Return the user data
	return helpers.ResponseUtils(c, fiber.StatusOK, true, "Login successful", user)
}

func (s AuthHandlerStruct) LoginCustomerAuthHandler(c *fiber.Ctx) error {
	// Handler logic here
	request := new(LoginRequest)
	if err := c.BodyParser(request); err != nil {
		return helpers.ResponseUtils(c, fiber.StatusUnauthorized, false, err.Error(), "")

	}
	// Validate the request
	errorMessages := validation.ValidationRequest(request)
	if errorMessages != nil {
		return helpers.ResponseUtils(c, fiber.StatusUnauthorized, false, strings.Join(errorMessages, ", "), "")
	}

	// Call the service
	user, err := s.service.LoginCustomerAuthService(*request)
	if err != nil {
		return helpers.ResponseUtils(c, fiber.StatusUnauthorized, false, err.Error(), "")
	}
	if user == nil {
		return helpers.ResponseUtils(c, fiber.StatusUnauthorized, false, "User Not Found", "")
	}
	// Return the user data
	return helpers.ResponseUtils(c, fiber.StatusOK, true, "Login successful", user)
}

type Verify struct {
	UserId string `json:"user_id"`
	Role   string `json:"role"`
}

func (h *AuthHandlerStruct) VerifyAuthHandler(c *fiber.Ctx) error {
	UserId := c.Locals("user_id").(string)
	Role := c.Locals("role").(string)

	// if UserId == "" || Role == "" {
	// 	return helpers.ResponseUtils(c, fiber.StatusUnauthorized, false, "Unauthorized", nil)
	// }
	verify := Verify{
		UserId: UserId,
		Role:   Role,
	}
	return helpers.ResponseUtils(c, fiber.StatusOK, true, "", verify)
}
