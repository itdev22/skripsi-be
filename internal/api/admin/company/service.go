package company

import "skripsi-be/internal/models/entities"

type AdminCompanyServiceInterface interface {
}

type AdminCompanyServiceStruct struct {
	repository *AdminCompanyRepositoryStruct
}

func NewAdminCompanyService(repository *AdminCompanyRepositoryStruct) *AdminCompanyServiceStruct {
	return &AdminCompanyServiceStruct{repository}
}

func (s *AdminCompanyServiceStruct) GetAllAdminCompanyService() (*[]entities.Company, error) {
	companies, err := s.repository.GetAllAdminCompanyRepository()
	if err != nil {
		return nil, err
	}
	return companies, nil
}

func (s *AdminCompanyServiceStruct) CreateAdminCompanyService(request CreateAdminCompanyRequest) {
	s.repository.CreateAdminCompanyRepository(request)
}
