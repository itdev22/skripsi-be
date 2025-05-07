package customer

import "gorm.io/gorm"

type AdminCustomerRepositoryInterface interface {
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
func (r AdminCustomerRepositoryStruct) CreateAdminCustomerRepository() {

}
func (r AdminCustomerRepositoryStruct) UpdateAdminCustomerRepository() {

}
func (r AdminCustomerRepositoryStruct) DeleteAdminCustomerRepository() {

}
