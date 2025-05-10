package customer

import (
	"skripsi-be/internal/models/entities"

	"gorm.io/gorm"
)

type AdminCustomerRepositoryInterface interface {
	CreateAdminCustomerRepository(customer entities.Customer) (entities.Customer, error)
}
type AdminCustomerRepositoryStruct struct {
	db *gorm.DB
}

func NewAdminCustomerRepository(db *gorm.DB) AdminCustomerRepositoryStruct {
	return AdminCustomerRepositoryStruct{db}
}

func (r AdminCustomerRepositoryStruct) FindAdminCustomerRepository() {

}
func (r AdminCustomerRepositoryStruct) FindByIdAdminCustomerRepository() {

}
func (r AdminCustomerRepositoryStruct) CreateAdminCustomerRepository(customer entities.Customer) (entities.Customer, error) {
	tx := r.db.Create(&customer)
	if tx.Error != nil {
		return customer, tx.Error
	}

	return customer, nil

}
func (r AdminCustomerRepositoryStruct) UpdateAdminCustomerRepository() {

}
func (r AdminCustomerRepositoryStruct) DeleteAdminCustomerRepository() {

}
