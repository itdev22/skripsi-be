package authapi

import (
	"skripsi-be/internal/models/entities"

	"gorm.io/gorm"
)

type AuthRepositoryInterface interface {
	GetUserByID(id string) (*entities.User, error)
}

type AuthRepositoryStruct struct {
	DB *gorm.DB
}

func NewAuthRepository(db *gorm.DB) *AuthRepositoryStruct {
	return &AuthRepositoryStruct{db}
}

func (db *AuthRepositoryStruct) GetEmailAuthRepository(LoginRequest LoginRequest) (*entities.User, error) {
	// Implement the logic to get a user by ID from the database

	user := &entities.User{}
	if err := db.DB.First(user, "email = ?", LoginRequest.Email).Error; err != nil {
		return nil, err
	}

	// Check if the user exists
	if user.ID == "" {
		return nil, gorm.ErrRecordNotFound
	}
	return user, nil
}
