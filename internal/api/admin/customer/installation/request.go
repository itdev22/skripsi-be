package customerinstallation

type CreateAdminCustomerInstallationRequest struct {
	Images []string `json:"images" validate:"required,min=1,dive,required"`
}

type IdAdminCustomerInstallationRequest struct {
	Id string `json:"id"`
}

type UpdateAdminCustomerInstallationRequest struct {
	IdAdminCustomerInstallationRequest
	CreateAdminCustomerInstallationRequest
}
