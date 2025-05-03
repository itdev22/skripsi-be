package area

import "gorm.io/gorm"

type AdminAreaRepositoryInterface interface {
}

type AdminAreaRepositoryStruct struct {
	db *gorm.DB
}

func NewAdminAreaRepository(db *gorm.DB) *AdminAreaRepositoryStruct {
	return &AdminAreaRepositoryStruct{db}
}
