package usermanagement

import (
	"errors"
	"skripsi-be/internal/models/dto"
	"skripsi-be/internal/models/entities"

	"github.com/jinzhu/copier"
	"golang.org/x/crypto/bcrypt"

	"gorm.io/gorm"
)

type AdminUserManagementRepositoryInterface interface {
	FindAdminUserManagementRepository() (*[]dto.UserDTO, error)
	FindByIdAdminUserManagementRepository(request IdAdminUserManagementRequest) (dto.UserDTO, error)
	CreateAdminUserManagementRepository(request CreateAdminUserManagementRequest) (dto.UserDTO, error)
}

type AdminUserManagementRepositoryStruct struct {
	db *gorm.DB
}

func NewAdminUserManagementRepository(db *gorm.DB) *AdminUserManagementRepositoryStruct {
	return &AdminUserManagementRepositoryStruct{db}
}
func (r *AdminUserManagementRepositoryStruct) FindAdminUserManagementRepository() (*[]dto.UserDTO, error) {
	// Simulate a database call
	users := []entities.User{}
	r.db.Preload("Role").Find(&users)

	// Mapping to dto.User
	userDTOs := &[]dto.UserDTO{}
	copier.Copy(&userDTOs, &users)

	return userDTOs, nil
}

func (r *AdminUserManagementRepositoryStruct) FindByIdAdminUserManagementRepository(request IdAdminUserManagementRequest) (dto.UserDTO, error) {
	// Simulate a database call
	user := entities.User{}
	userDto := dto.UserDTO{}
	tx := r.db.Preload("Role").First(&user, "id = ?", request.Id)

	if tx.Error != nil {
		return userDto, tx.Error

	}
	if user.ID == "" {
		return dto.UserDTO{}, gorm.ErrRecordNotFound
	}

	copier.Copy(&userDto, &user)

	return userDto, nil
}

func (r *AdminUserManagementRepositoryStruct) CreateAdminUserManagementRepository(request CreateAdminUserManagementRequest) (dto.UserDTO, error) {
	// Simulate a database call
	user := entities.User{}
	userDto := dto.UserDTO{}
	copier.Copy(&user, &request)

	password, err := bcrypt.GenerateFromPassword([]byte(request.Password), 12)
	if err != nil {
		return userDto, err
	}

	if request.Password != request.PasswordConfirm {
		return userDto, errors.New("Password not match!")

	}

	user.Password = string(password)

	tx := r.db.Create(&user)

	copier.Copy(&userDto, &user)

	if tx.Error != nil {
		return userDto, tx.Error
	}

	return userDto, nil
}

func (r *AdminUserManagementRepositoryStruct) UpdateAdminUserManagementRepository(request CreateAdminUserManagementRequest) (dto.UserDTO, error) {
	// Simulate a database call
	user := entities.User{}
	userDto := dto.UserDTO{}
	copier.Copy(&user, &request)

	// Update password only if provided
	if request.Password != "" {
		if request.Password != request.PasswordConfirm {
			return userDto, errors.New("Password not match!")
		}

		password, err := bcrypt.GenerateFromPassword([]byte(request.Password), 12)
		if err != nil {
			return userDto, err
		}
		user.Password = string(password)
	}

	tx := r.db.Create(&user)

	copier.Copy(&userDto, &user)

	if tx.Error != nil {
		return userDto, tx.Error
	}

	return userDto, nil
}
