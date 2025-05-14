package transaction

import (
	"skripsi-be/internal/models/entities"

	"github.com/jinzhu/copier"
	"gorm.io/gorm"
)

type AdminTransactionRepositoryInterface interface {
	FindAdminTransactionRepository(request SearchAdminTransactionRequest) ([]entities.Transaction, error)
	FindByIdAdminTransactionRepository(request IdAdminTransactionRequest) (entities.Transaction, error)
	CreateAdminTransactionRepository(request CreateAdminTransactionRequest) (entities.Transaction, error)
	UpdateAdminTransactionRepository(request UpdateAdminTransactionRequest) (entities.Transaction, error)
	DeleteAdminTransactionRepository(request IdAdminTransactionRequest) (entities.Transaction, error)
}
type AdminTransactionRepositoryStruct struct {
	db *gorm.DB
}

func NewAdminTransactionRepository(db *gorm.DB) AdminTransactionRepositoryStruct {
	return AdminTransactionRepositoryStruct{db}
}

func (r AdminTransactionRepositoryStruct) FindAdminTransactionRepository(request SearchAdminTransactionRequest) ([]entities.Transaction, error) {
	transactions := []entities.Transaction{}
	tx := r.db.Find(&transactions)
	if request.TypeCash != "" {
		tx.Where("type_cash = ?", request.TypeCash)
	}
	if tx.Error != nil {
		return transactions, tx.Error
	}

	return transactions, nil
}
func (r AdminTransactionRepositoryStruct) FindByIdAdminTransactionRepository(request IdAdminTransactionRequest) (entities.Transaction, error) {
	transactions := entities.Transaction{}
	tx := r.db.First(&transactions, "id = ?", request.Id)
	if tx.Error != nil {
		return transactions, tx.Error
	}

	return transactions, nil
}
func (r AdminTransactionRepositoryStruct) CreateAdminTransactionRepository(request CreateAdminTransactionRequest) (entities.Transaction, error) {
	transactions := entities.Transaction{}
	copier.Copy(&transactions, &request)
	tx := r.db.Create(&transactions)
	if tx.Error != nil {
		return transactions, tx.Error
	}

	return transactions, nil

}
func (r AdminTransactionRepositoryStruct) UpdateAdminTransactionRepository(request UpdateAdminTransactionRequest) (entities.Transaction, error) {
	transactions := entities.Transaction{}
	tx := r.db.First(&transactions, "id = ?", request.Id)
	if tx.Error != nil {
		return transactions, tx.Error
	}

	copier.Copy(&transactions, &request)

	tx = r.db.Save(&transactions)
	if tx.Error != nil {
		return transactions, tx.Error
	}

	return transactions, nil

}
func (r AdminTransactionRepositoryStruct) DeleteAdminTransactionRepository(request IdAdminTransactionRequest) (entities.Transaction, error) {
	transactions := entities.Transaction{}
	tx := r.db.First(&transactions, "id = ?", request.Id)
	if tx.Error != nil {
		return transactions, tx.Error
	}

	tx = r.db.Delete(&transactions)

	return transactions, nil
}
