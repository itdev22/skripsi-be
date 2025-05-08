package customer

import "skripsi-be/internal/models/entities"

type AdminCustomerServiceInterface interface {
}

type AdminCustomerServiceStruct struct {
	repository *AdminCustomerRepositoryStruct
}

func NewAdminCustomerService(repository *AdminCustomerRepositoryStruct) *AdminCustomerServiceStruct {
	return &AdminCustomerServiceStruct{repository}
}

func (s *AdminCustomerServiceStruct) GetAllAdminCustomerService() (*[]entities.Customer, error) {
	companies, err := s.repository.GetAllAdminCustomerRepository()
	if err != nil {
		return nil, err
	}
	return companies, nil
}

func (s *AdminCustomerServiceStruct) GetByIdAdminCustomerService(request IdAdminCustomerRequest) (*entities.Customer, error) {
	companies, err := s.repository.GetByIDAdminCustomerRepository(request)
	if err != nil {
		return nil, err
	}
	return companies, nil
}

func (s *AdminCustomerServiceStruct) CreateAdminCustomerService(request CreateAdminCustomerRequest) {
	s.repository.CreateAdminCustomerRepository(request)
}

func (s *AdminCustomerServiceStruct) UpdateAdminCustomerService(request UpdateAdminCustomerRequest) {
	s.repository.UpdateAdminCustomerRepository(request)
}

func (s *AdminCustomerServiceStruct) DeleteAdminCustomerService(request IdAdminCustomerRequest) {
	s.repository.DeleteCustomerByID(request)
}
