package upload_file

import (
	"skripsi-be/internal/api/common/validation"
	"skripsi-be/internal/helpers"
	"strings"

	"github.com/gofiber/fiber/v2"
)

type CommonUploadFileHandlerStruct struct {
	service CommonUploadFileServiceInterface
}

func NewCommonUploadFileHandler(service CommonUploadFileServiceInterface) *CommonUploadFileHandlerStruct {
	return &CommonUploadFileHandlerStruct{service}
}

func (h CommonUploadFileHandlerStruct) GetAllCommonUploadFileHandler(c *fiber.Ctx) error {
	areas, err := h.service.GetAllCommonUploadFileService()
	if err != nil {
		return helpers.ResponseUtils(c, fiber.StatusBadRequest, false, err.Error(), nil)
	}
	return helpers.ResponseUtils(c, fiber.StatusOK, true, "", areas)
}

func (h CommonUploadFileHandlerStruct) GetByIdCommonUploadFileHandler(c *fiber.Ctx) error {
	request := IdWebhookMootaRequest{}
	request.Id = c.Params("id")
	areas, err := h.service.GetByIdCommonUploadFileService(request)
	if err != nil {
		return helpers.ResponseUtils(c, fiber.StatusBadRequest, false, err.Error(), nil)
	}
	return helpers.ResponseUtils(c, fiber.StatusOK, true, "", areas)
}

func (h CommonUploadFileHandlerStruct) CreateCommonUploadFileHandler(c *fiber.Ctx) error {
	request := []CreateWebhookMootaRequest{}
	err := c.BodyParser(&request)

	if err != nil {
		return helpers.ResponseUtils(c, fiber.StatusBadRequest, false, err.Error(), nil)
	}

	for _, vrequest := range request {
		errValidation := validation.ValidationRequest(&vrequest)
		if errValidation != nil {
			return helpers.ResponseUtils(c, fiber.StatusBadRequest, false, strings.Join(errValidation, ", "), nil)
		}
	}

	area, err := h.service.CreateCommonUploadFileService(request)

	if err != nil {
		return helpers.ResponseUtils(c, fiber.StatusBadRequest, false, err.Error(), nil)
	}

	return helpers.ResponseUtils(c, fiber.StatusOK, true, "Success Create Area", area)
}

func (h CommonUploadFileHandlerStruct) UpdateCommonUploadFileHandler(c *fiber.Ctx) error {

	request := &UpdateWebhookMootaRequest{}

	id := c.Params("id")
	err := c.BodyParser(request)
	request.Id = id
	if err != nil {
		return helpers.ResponseUtils(c, fiber.StatusBadRequest, false, err.Error(), nil)
	}

	errValidation := validation.ValidationRequest(request)
	if errValidation != nil {
		return helpers.ResponseUtils(c, fiber.StatusBadRequest, false, strings.Join(errValidation, ", "), nil)
	}

	area, err := h.service.UpdateCommonUploadFileService(*request)
	if err != nil {
		return helpers.ResponseUtils(c, fiber.StatusBadRequest, false, err.Error(), nil)
	}

	return helpers.ResponseUtils(c, fiber.StatusOK, true, "Success Update Area", area)
}

func (h CommonUploadFileHandlerStruct) DeleteCommonUploadFileHandler(c *fiber.Ctx) error {
	request := &IdWebhookMootaRequest{}
	request.Id = c.Params("id")
	errValidation := validation.ValidationRequest(request)
	if errValidation != nil {
		return helpers.ResponseUtils(c, fiber.StatusBadRequest, false, strings.Join(errValidation, ", "), nil)
	}

	area, err := h.service.DeleteCommonUploadFileService(*request)
	if err != nil {
		return helpers.ResponseUtils(c, fiber.StatusBadRequest, false, err.Error(), nil)
	}

	return helpers.ResponseUtils(c, fiber.StatusOK, true, "Success Delete Area", area)

}
