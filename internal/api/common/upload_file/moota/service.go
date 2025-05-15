package upload_file

import (
	"skripsi-be/internal/models/entities"

	"github.com/jinzhu/copier"
)

type CommonUploadFileServiceInterface interface {
	GetAllCommonUploadFileService() ([]entities.Areas, error)
	CreateCommonUploadFileService(request []CreateWebhookMootaRequest) ([]CreateWebhookMootaRequest, error)
	GetByIdCommonUploadFileService(request IdWebhookMootaRequest) (entities.Areas, error)
	UpdateCommonUploadFileService(request UpdateWebhookMootaRequest) (entities.Areas, error)
	DeleteCommonUploadFileService(request IdWebhookMootaRequest) (entities.Areas, error)
}
type CommonUploadFileServiceStruct struct {
	repository CommonUploadFileRepositoryInterface
}

func NewCommonUploadFileService(repository CommonUploadFileRepositoryInterface) *CommonUploadFileServiceStruct {
	return &CommonUploadFileServiceStruct{repository}
}

func (s CommonUploadFileServiceStruct) GetAllCommonUploadFileService() ([]entities.Areas, error) {
	areas, err := s.repository.FindCommonUploadFileRepository()

	if err != nil {
		return areas, err
	}

	return areas, err
}

func (s CommonUploadFileServiceStruct) GetByIdCommonUploadFileService(request IdWebhookMootaRequest) (entities.Areas, error) {
	area := entities.Areas{}
	err := copier.Copy(&area, &request)
	if err != nil {
		return area, err
	}

	area, err = s.repository.FindByIdCommonUploadFileRepository(request)
	if err != nil {
		return area, err
	}

	return area, nil
}

func (s CommonUploadFileServiceStruct) CreateCommonUploadFileService(request []CreateWebhookMootaRequest) ([]CreateWebhookMootaRequest, error) {

	return request, nil
}

func (s CommonUploadFileServiceStruct) UpdateCommonUploadFileService(request UpdateWebhookMootaRequest) (entities.Areas, error) {
	area, err := s.repository.UpdateCommonUploadFileRepository(request)

	if err != nil {
		return area, err
	}

	return area, nil
}

func (s CommonUploadFileServiceStruct) DeleteCommonUploadFileService(request IdWebhookMootaRequest) (entities.Areas, error) {
	area, err := s.repository.DeleteCommonUploadFileRepository(request)

	if err != nil {
		return area, err
	}

	return area, nil
}
