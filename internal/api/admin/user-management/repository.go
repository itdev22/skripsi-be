package usermanagement

import (
	"skripsi-be/internal/models/entities"

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
func (r *AdminUserManagementRepositoryStruct) GetUserByID(request IdAdminUserManagementRequest) (*entities.User, error) {
	// Simulate a database call
	user := entities.User{}
	r.db.First(&user, "id = ?", request.Id)

	if user.ID == "" {
		return nil, gorm.ErrRecordNotFound
	}

	return &user, nil
}
