package authapi

import (
	"skripsi-be/internal/helpers"
	"skripsi-be/internal/models/dto"
	"skripsi-be/internal/models/entities"

	"golang.org/x/crypto/bcrypt"
	"gorm.io/gorm"
)

type AuthServiceInterface interface {
	LoginAuthService() (*entities.User, error)
}

type AuthServiceStruct struct {
	repository *AuthRepositoryStruct
}

func NewAuthService(repository *AuthRepositoryStruct) *AuthServiceStruct {
	return &AuthServiceStruct{repository}
}

func (r *AuthServiceStruct) LoginAuthService(LoginRequest LoginRequest) (*dto.LoginAuthDTO, error) {
	// Service logic here
	user, err := r.repository.GetEmailAuthRepository(LoginRequest)

	if err != nil {
		// Handle error
		return nil, err
	}

	// Check if the user exists
	if user.ID == "" {
		return nil, gorm.ErrRecordNotFound
	}
	// Check if the password is correct
	if err := bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(LoginRequest.Password)); err != nil {
		return nil, err
	}

	userDTO := dto.ModelToUser(*user)
	// Return the user data

	token, err := helpers.CreateToken(userDTO.ID, userDTO.Role.Name)
	if err != nil {
		return nil, err
	}
	loginAuthDTO := dto.ModelToLoginAuth(token, *user)

	r.repository.UpdateTokenUserByID(user.ID, token)

	return loginAuthDTO, nil
}

func (r *AuthServiceStruct) VerifyAuthService(LoginRequest LoginRequest) (*dto.LoginAuthDTO, error) {
	// Service logic here
	user, err := r.repository.GetEmailAuthRepository(LoginRequest)

	if err != nil {
		// Handle error
		return nil, err
	}

	// Check if the user exists
	if user.ID == "" {
		return nil, gorm.ErrRecordNotFound
	}
	// Check if the password is correct
	if err := bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(LoginRequest.Password)); err != nil {
		return nil, err
	}

	userDTO := dto.ModelToUser(*user)
	// Return the user data

	token, err := helpers.CreateToken(userDTO.ID, userDTO.Role.Name)
	if err != nil {
		return nil, err
	}
	loginAuthDTO := dto.ModelToLoginAuth(token, *user)

	r.repository.UpdateTokenUserByID(user.ID, token)

	return loginAuthDTO, nil
}
