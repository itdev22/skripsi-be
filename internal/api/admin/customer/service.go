package customer

type AdminCustomerServiceInterface interface {
}

type AdminCustomerServiceStruct struct {
	repository AdminCustomerRepositoryInterface
}

func NewAdminCustomerService(repository AdminCustomerRepositoryInterface) AdminCustomerServiceStruct {
	return AdminCustomerServiceStruct{repository}
}

func (s AdminCustomerServiceStruct) GetAllAdminCustomerService() {

}

func (s AdminCustomerServiceStruct) GetByIdAdminCustomerService() {

}

func (s AdminCustomerServiceStruct) CreateAdminCustomerService() {

}

func (s AdminCustomerServiceStruct) UpdateAdminCustomerService() {

}

func (s AdminCustomerServiceStruct) DeleteAdminCustomerService() {

}
