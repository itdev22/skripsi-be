package upload_file

import (
	"skripsi-be/internal/models/entities"

	"github.com/jinzhu/copier"
	"gorm.io/gorm"
)

type CommonUploadFileRepositoryInterface interface {
	FindCommonUploadFileRepository() ([]entities.Areas, error)
	CreateCommonUploadFileRepository(request CreateWebhookMootaRequest) (entities.Areas, error)
	FindByIdCommonUploadFileRepository(request IdWebhookMootaRequest) (entities.Areas, error)
	UpdateCommonUploadFileRepository(request UpdateWebhookMootaRequest) (entities.Areas, error)
	DeleteCommonUploadFileRepository(request IdWebhookMootaRequest) (entities.Areas, error)
}

type CommonUploadFileRepositoryStruct struct {
	db *gorm.DB
}

func NewCommonUploadFileRepository(db *gorm.DB) *CommonUploadFileRepositoryStruct {
	return &CommonUploadFileRepositoryStruct{db}
}

func (r CommonUploadFileRepositoryStruct) FindCommonUploadFileRepository() ([]entities.Areas, error) {
	areas := []entities.Areas{}
	tx := r.db.Find(&areas)

	if tx.Error != nil {
		return areas, tx.Error
	}

	return areas, nil
}

func (r CommonUploadFileRepositoryStruct) FindByIdCommonUploadFileRepository(request IdWebhookMootaRequest) (entities.Areas, error) {
	area := entities.Areas{}
	tx := r.db.First(&area, "id = ?", request.Id)

	if tx.Error != nil {
		return area, tx.Error
	}

	return area, nil
}

func (r CommonUploadFileRepositoryStruct) CreateCommonUploadFileRepository(request CreateWebhookMootaRequest) (entities.Areas, error) {
	area := entities.Areas{}
	copier.Copy(&area, &request)
	tx := r.db.Create(&area)
	if tx.Error != nil {
		return entities.Areas{}, tx.Error
	}

	return area, nil
}

func (r CommonUploadFileRepositoryStruct) UpdateCommonUploadFileRepository(request UpdateWebhookMootaRequest) (entities.Areas, error) {
	area := entities.Areas{}
	tx := r.db.First(&area, "id = ?", request.Id)

	if tx.Error != nil {
		return area, tx.Error
	}
	copier.Copy(&area, &request)

	r.db.Save(&area)
	return area, nil
}

func (r CommonUploadFileRepositoryStruct) DeleteCommonUploadFileRepository(request IdWebhookMootaRequest) (entities.Areas, error) {

	area := entities.Areas{}

	tx := r.db.First(&area, "id = ?", request.Id)
	if tx.Error != nil {
		return area, tx.Error
	}

	tx = r.db.Delete(&area)
	if tx.Error != nil {
		return area, tx.Error
	}
	return area, nil
}
