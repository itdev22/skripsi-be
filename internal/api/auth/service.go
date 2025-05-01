package authapi

import "skripsi-be/internal/models/entities"

type AuthServiceInterface interface {
	LoginAuthService() (*entities.User, error)
}

type AuthServiceStruct struct {
	repository *AuthRepositoryStruct
}

func NewAuthService(repository *AuthRepositoryStruct) *AuthServiceStruct {
	return &AuthServiceStruct{repository}
}

func (r *AuthServiceStruct) LoginAuthService(LoginRequest LoginRequest) (*entities.User, error) {
	// Service logic here
	user, err := r.repository.LoginAuthRepository(LoginRequest)

	if err != nil {
		// Handle error
		return nil, err
	}

	return user, nil

}
