package customer

import (
	"skripsi-be/internal/models/entities"

	"github.com/jinzhu/copier"
)

type AdminCustomerServiceInterface interface {
	CreateAdminCustomerService(request CreateAdminCustomerRequest) (entities.Customer, error)
}

type AdminCustomerServiceStruct struct {
	repository AdminCustomerRepositoryInterface
}

func NewAdminCustomerService(repository AdminCustomerRepositoryInterface) AdminCustomerServiceStruct {
	return AdminCustomerServiceStruct{repository}
}

func (s AdminCustomerServiceStruct) GetAllAdminCustomerService() {

}

func (s AdminCustomerServiceStruct) GetByIdAdminCustomerService() {

}

func (s AdminCustomerServiceStruct) CreateAdminCustomerService(request CreateAdminCustomerRequest) (entities.Customer, error) {
	customer := entities.Customer{}

	err := copier.Copy(&customer, &request)
	if err != nil {
		return customer, err
	}

	customer, err = s.repository.CreateAdminCustomerRepository(customer)
	if err != nil {
		return customer, err
	}

	return customer, err

}

func (s AdminCustomerServiceStruct) UpdateAdminCustomerService() {

}

func (s AdminCustomerServiceStruct) DeleteAdminCustomerService() {

}
