package usermanagement

import (
	"skripsi-be/internal/models/dto"
)

type AdminUserManagementServiceInterface interface {
	GetAllAdminUserManagementService() (*[]dto.UserDTO, error)
	GetByIdAdminUserManagementService(request IdAdminUserManagementRequest) (dto.UserDTO, error)
	CreateAdminUserManagementService(request CreateAdminUserManagementRequest) (dto.UserDTO, error)
}

type AdminUserManagementServiceStruct struct {
	repository AdminUserManagementRepositoryInterface
}

func NewAdminUserManagementService(repository *AdminUserManagementRepositoryStruct) *AdminUserManagementServiceStruct {
	return &AdminUserManagementServiceStruct{repository}
}

func (s *AdminUserManagementServiceStruct) GetAllAdminUserManagementService() (*[]dto.UserDTO, error) {
	// Simulate a database call
	// In a real implementation, this would interact with the repository to fetch user data
	Users, err := s.repository.FindAdminUserManagementRepository()
	if err != nil {
		return nil, err
	}

	return Users, nil
}

func (s *AdminUserManagementServiceStruct) GetByIdAdminUserManagementService(request IdAdminUserManagementRequest) (dto.UserDTO, error) {
	// Simulate a database call
	// In a real implementation, this would interact with the repository to fetch user data
	user, err := s.repository.FindByIdAdminUserManagementRepository(request)
	if err != nil {
		return user, err
	}
	return user, err
}

func (s *AdminUserManagementServiceStruct) CreateAdminUserManagementService(request CreateAdminUserManagementRequest) (dto.UserDTO, error) {
	// Simulate a database call
	// In a real implementation, this would interact with the repository to fetch user data
	user, err := s.repository.CreateAdminUserManagementRepository(request)
	if err != nil {
		return user, err
	}
	return user, err
}
