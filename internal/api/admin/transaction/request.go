package transaction

type CreateAdminTransactionRequest struct {
	AccountID   string `json:"account_id" validate:"required"`
	TypeCash    string `json:"type_cash" validate:"required"`
	TypeInOut   string `json:"type_in_out" validate:"required"`
	Date        string `json:"date" validate:"required"`
	Description string `json:"description" validate:"required"`
	Amount      int64  `json:"amount" validate:"required"`
	Type        string `json:"type" validate:"required"`
}

type IdAdminTransactionRequest struct {
	Id string `json:"id" validate:"required"`
}

type UpdateAdminTransactionRequest struct {
	IdAdminTransactionRequest
	CreateAdminTransactionRequest
}

type SearchAdminTransactionRequest struct {
	TypeCash string `json:"type_cash"`
	Type     string `json:"type"`
}
