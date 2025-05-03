package usermanagement

import (
	"skripsi-be/internal/models/dto"
	"skripsi-be/internal/models/entities"

	"github.com/jinzhu/copier"

	"gorm.io/gorm"
)

type AdminUserManagementRepositoryInterface interface {
	GetUserByID(userID IdAdminUserManagementRequest) (entities.User, error)
}

type AdminUserManagementRepositoryStruct struct {
	db *gorm.DB
}

func NewAdminUserManagementRepository(db *gorm.DB) *AdminUserManagementRepositoryStruct {
	return &AdminUserManagementRepositoryStruct{db}
}
func (r *AdminUserManagementRepositoryStruct) GetAllAdminUserManagementRepository() (*[]dto.UserDTO, error) {
	// Simulate a database call
	users := []entities.User{}
	r.db.Find(&users)

	// Mapping to dto.User

	userDTOs := &[]dto.UserDTO{}
	copier.Copy(&userDTOs, &users)

	return userDTOs, nil
}

func (r *AdminUserManagementRepositoryStruct) GetByIdAdminUserManagementRepository(request IdAdminUserManagementRequest) (*entities.User, error) {
	// Simulate a database call
	user := entities.User{}
	r.db.First(&user, "id = ?", request.Id)

	if user.ID == "" {
		return nil, gorm.ErrRecordNotFound
	}

	return &user, nil
}
