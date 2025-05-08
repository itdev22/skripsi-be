package transaction

import "gorm.io/gorm"

type AdminTransactionRepositoryInterface interface {
}
type AdminTransactionRepositoryStruct struct {
	db *gorm.DB
}

func NewAdminTransactionRepositoryStruct(db *gorm.DB) AdminTransactionRepositoryStruct {
	return AdminTransactionRepositoryStruct{db}
}

func (r AdminTransactionRepositoryStruct) GetallAdminTransactionRepository() {

}
func (r AdminTransactionRepositoryStruct) GetByIdAdminTransactionRepository() {

}
func (r AdminTransactionRepositoryStruct) CreateAdminTransactionRepository() {

}
func (r AdminTransactionRepositoryStruct) UpdateAdminTransactionRepository() {

}
func (r AdminTransactionRepositoryStruct) DeleteAdminTransactionRepository() {

}
