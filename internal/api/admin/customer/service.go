package customer

import (
	"skripsi-be/internal/models/entities"

	"github.com/jinzhu/copier"
)

type AdminCustomerServiceInterface interface {
	GetAllAdminCustomerService() ([]entities.Customer, error)
	GetByIdAdminCustomerService(request IdAdminCustomerRequest) (entities.Customer, error)
	CreateAdminCustomerService(request CreateAdminCustomerRequest) (entities.Customer, error)
	UpdateAdminCustomerService(request UpdateAdminCustomerRequest) (entities.Customer, error)
	DeleteAdminCustomerService(request IdAdminCustomerRequest) (entities.Customer, error)
}

type AdminCustomerServiceStruct struct {
	repository AdminCustomerRepositoryInterface
}

func NewAdminCustomerService(repository AdminCustomerRepositoryInterface) AdminCustomerServiceStruct {
	return AdminCustomerServiceStruct{repository}
}

func (s AdminCustomerServiceStruct) GetAllAdminCustomerService() ([]entities.Customer, error) {
	customer, err := s.repository.FindAdminCustomerRepository()
	if err != nil {
		return customer, err
	}

	return customer, err
}

func (s AdminCustomerServiceStruct) GetByIdAdminCustomerService(request IdAdminCustomerRequest) (entities.Customer, error) {
	customer, err := s.repository.FindByIdAdminCustomerRepository(request)
	if err != nil {
		return customer, err
	}

	return customer, err
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

func (s AdminCustomerServiceStruct) UpdateAdminCustomerService(request UpdateAdminCustomerRequest) (entities.Customer, error) {
	customer, err := s.repository.UpdateAdminCustomerRepository(request)
	if err != nil {
		return customer, err
	}

	return customer, err
}

func (s AdminCustomerServiceStruct) DeleteAdminCustomerService(request IdAdminCustomerRequest) (entities.Customer, error) {
	customer, err := s.repository.DeleteAdminCustomerRepository(request)
	if err != nil {
		return customer, err
	}

	return customer, err
}
