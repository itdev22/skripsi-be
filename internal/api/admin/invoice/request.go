package invoice

type CreateAdminInvoiceRequest struct {
	Amount     int64  `json:"amount" validate:"required"`
	CustomerId string `json:"customer_id" validate:"required"`
}

type IdAdminInvoiceRequest struct {
	Id string `json:"id" validate:"required"`
}

type UpdateAdminInvoiceRequest struct {
	IdAdminInvoiceRequest
	CreateAdminInvoiceRequest
}
