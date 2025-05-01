package company

type CreateAdminCompanyRequest struct {
	Name    string `json:"name" validate:"required"`
	URL     string `json:"url" validate:"required"`
	Email   string `json:"email" validate:"required,email"`
	Phone   string `json:"phone" validate:"required"`
	LogoUrl string `json:"logo_url" validate:"required"`
}
