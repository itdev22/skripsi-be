package dashboard

type AdminDashboardServiceInterface interface {
	CardCustomer() (map[string]interface{}, error)
}

type AdminDashboardServiceStruct struct {
	repository AdminDashboardRepositoryInterface
}

func NewAdminDashboardService(repository AdminDashboardRepositoryInterface) AdminDashboardServiceStruct {
	return AdminDashboardServiceStruct{repository}
}

func (s AdminDashboardServiceStruct) CardCustomer() (map[string]interface{}, error) {
	data, err := s.repository.CardCustomer()
	if err != nil {
		return data, err
	}

	return data, err
}
