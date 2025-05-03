package area

type AdminAreaServiceInterface interface{}
type AdminAreaServiceStruct struct {
	repository *AdminAreaRepositoryStruct
}

func NewAdminAreaService(repository *AdminAreaRepositoryStruct) *AdminAreaServiceStruct {
	return &AdminAreaServiceStruct{repository}
}
