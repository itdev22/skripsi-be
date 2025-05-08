package area

type CreateAdminAreaRequest struct {
	Name string `json:"name" validate:"required"`
}

type IdAdminAreaRequest struct {
	Id string `json:"id" validate:"required"`
}

type UpdateAdminAreaRequest struct {
	IdAdminAreaRequest
	CreateAdminAreaRequest
}
