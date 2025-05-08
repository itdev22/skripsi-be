package transaction

type AdminTransactionServiceInterface interface {
}

type AdminTransactionServiceStruct struct {
	repository AdminTransactionRepositoryStruct
}

func NewAdminTransactionService(repository AdminTransactionRepositoryStruct) AdminTransactionServiceStruct {
	return AdminTransactionServiceStruct{repository}

}
