package transaction

import (
	"log"
	"skripsi-be/internal/models/entities"
)

type AdminTransactionServiceInterface interface {
	GetAllAdminTransactionService(request SearchAdminTransactionRequest) ([]entities.Transaction, error)
}

type AdminTransactionServiceStruct struct {
	repository AdminTransactionRepositoryInterface
}

func NewAdminTransactionService(repository AdminTransactionRepositoryInterface) AdminTransactionServiceStruct {
	return AdminTransactionServiceStruct{repository}
}

func (s AdminTransactionServiceStruct) GetAllAdminTransactionService(request SearchAdminTransactionRequest) ([]entities.Transaction, error) {
	transactions, err := s.repository.FindAdminTransactionRepository(request)
	if err != nil {
		return transactions, err
	}

	return transactions, nil
}

func (s AdminTransactionServiceStruct) GetByIdAdminTransactionService(request IdAdminTransactionRequest) (entities.Transaction, error) {
	transaction, err := s.repository.FindByIdAdminTransactionRepository(request)
	if err != nil {
		return transaction, err
	}

	return transaction, nil
}

func (s AdminTransactionServiceStruct) CreateAdminTransactionService(request CreateAdminTransactionRequest) (entities.Transaction, error) {
	transaction, err := s.repository.CreateAdminTransactionRepository(request)
	log.Println(request.Date)

	if err != nil {
		return transaction, err
	}

	return transaction, nil
}

func (s AdminTransactionServiceStruct) UpdateAdminTransactionService(request UpdateAdminTransactionRequest) (entities.Transaction, error) {
	transaction, err := s.repository.UpdateAdminTransactionRepository(request)
	if err != nil {
		return transaction, err
	}

	return transaction, nil
}

func (s AdminTransactionServiceStruct) DeleteAdminTransactionService(request IdAdminTransactionRequest) (entities.Transaction, error) {
	transaction, err := s.repository.DeleteAdminTransactionRepository(request)
	if err != nil {
		return transaction, err
	}

	return transaction, nil
}
