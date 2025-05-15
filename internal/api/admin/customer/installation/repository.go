package customerinstallation

import (
	"skripsi-be/internal/models/entities"

	"github.com/jinzhu/copier"
	"gorm.io/gorm"
)

type AdminCustomerInstallationRepositoryInterface interface {
	CreateAdminCustomerInstallationRepository(customer entities.CustomerInstallation) (entities.CustomerInstallation, error)
	UpdateAdminCustomerInstallationRepository(request UpdateAdminCustomerInstallationRequest) (entities.CustomerInstallation, error)
	DeleteAdminCustomerInstallationRepository(request IdAdminCustomerInstallationRequest) (entities.CustomerInstallation, error)
	FindByIdAdminCustomerInstallationRepository(request IdAdminCustomerInstallationRequest) (entities.CustomerInstallation, error)
	FindAdminCustomerInstallationRepository() ([]entities.Customer, error)
}
type AdminCustomerInstallationRepositoryStruct struct {
	db *gorm.DB
}

func NewAdminCustomerInstallationRepository(db *gorm.DB) AdminCustomerInstallationRepositoryStruct {
	return AdminCustomerInstallationRepositoryStruct{db}
}

func (r AdminCustomerInstallationRepositoryStruct) FindAdminCustomerInstallationRepository() ([]entities.Customer, error) {
	customer := []entities.Customer{}
	tx := r.db.Preload("Area").Preload("Company").Preload("Product").Find(&customer)

	if tx.Error != nil {
		return customer, tx.Error
	}

	return customer, nil
}
func (r AdminCustomerInstallationRepositoryStruct) FindByIdAdminCustomerInstallationRepository(request IdAdminCustomerInstallationRequest) (entities.CustomerInstallation, error) {
	customer := entities.CustomerInstallation{}
	tx := r.db.Preload("Area").Preload("Company").Preload("Product").Find(&customer, "id = ?", request.Id)
	if tx.Error != nil {
		return customer, tx.Error
	}

	return customer, tx.Error
}
func (r AdminCustomerInstallationRepositoryStruct) CreateAdminCustomerInstallationRepository(customer entities.CustomerInstallation) (entities.CustomerInstallation, error) {
	tx := r.db.Create(&customer)
	if tx.Error != nil {
		return customer, tx.Error
	}

	return customer, nil

}
func (r AdminCustomerInstallationRepositoryStruct) UpdateAdminCustomerInstallationRepository(request UpdateAdminCustomerInstallationRequest) (entities.CustomerInstallation, error) {
	customer := entities.CustomerInstallation{}
	tx := r.db.Preload("Area").Preload("Company").Preload("Product").Find(&customer, "id = ?", request.Id)
	if tx.Error != nil {
		return customer, tx.Error
	}

	copier.Copy(&customer, &request)

	tx = r.db.Save(&customer)
	if tx.Error != nil {
		return customer, tx.Error
	}

	return customer, tx.Error
}

func (r AdminCustomerInstallationRepositoryStruct) DeleteAdminCustomerInstallationRepository(request IdAdminCustomerInstallationRequest) (entities.CustomerInstallation, error) {
	customer := entities.CustomerInstallation{}
	tx := r.db.Preload("Area").Preload("Company").Preload("Product").Find(&customer, "id = ?", request.Id)
	if tx.Error != nil {
		return customer, tx.Error
	}

	copier.Copy(&customer, &request)

	tx = r.db.Delete(&customer)
	if tx.Error != nil {
		return customer, tx.Error
	}

	return customer, tx.Error
}
