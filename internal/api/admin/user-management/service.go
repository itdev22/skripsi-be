package usermanagement

import (
	"skripsi-be/internal/models/dto"
)

type AdminUserManagementServiceInterface interface{}

type AdminUserManagementServiceStruct struct {
	repository *AdminUserManagementRepositoryStruct
}

func NewAdminUserManagementService(repository *AdminUserManagementRepositoryStruct) *AdminUserManagementServiceStruct {
	return &AdminUserManagementServiceStruct{repository}
}

func (s *AdminUserManagementServiceStruct) GetAllAdminUserManagementService() (*[]dto.UserDTO, error) {
	// Simulate a database call
	// In a real implementation, this would interact with the repository to fetch user data
	Users, err := s.repository.GetAllAdminUserManagementRepository()
	if err != nil {
		return nil, err
	}

	return Users, nil
}

func (s *AdminUserManagementServiceStruct) GetByIdAdminUserManagementService(request IdAdminUserManagementRequest) (string, error) {
	// Simulate a database call
	// In a real implementation, this would interact with the repository to fetch user data
	s.repository.GetByIdAdminUserManagementRepository(request)
	return "User Name", nil
}
