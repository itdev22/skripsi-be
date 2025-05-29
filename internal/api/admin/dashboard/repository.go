package dashboard

import "gorm.io/gorm"

type AdminDashboardRepositoryInterface interface {
	AdminDashboardRepository()
}

type AdminDashboardRepositoryStruct struct {
	db *gorm.DB
}

func NewAdminDashboradRepository(db *gorm.DB) AdminDashboardRepositoryStruct {
	return AdminDashboardRepositoryStruct{db}
}

func (r AdminDashboardRepositoryStruct) AdminDashboardRepository() {

}
