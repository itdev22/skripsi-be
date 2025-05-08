package customer

import (
	"skripsi-be/internal/models/entities"
	"time"
)

type CreateAdminCustomerRequest struct {
	Email                string                         `json:"email"`
	Phone                string                         `json:"phone"`
	Address              string                         `json:"address"`
	InstallationDate     time.Time                      `json:"installation_date"`
	City                 string                         `json:"city"`
	CodePostal           string                         `json:"code_postal"`
	CompanyID            string                         `json:"company_id"`
	Country              string                         `json:"country"`
	Fullname             string                         `json:"fullname"`
	GroupID              string                         `json:"group_id"`
	Location             string                         `json:"location"`
	Password             string                         `json:"password"`
	StateRegion          string                         `json:"state_region"`
	Surname              string                         `json:"surname"`
	Tag                  string                         `json:"tag"`
	ArchiveInstallations []entities.ArchiveInstallation `json:"archive_installation"`
	Company              entities.Company               `json:"company"`
}
type IdAdminCustomerRequest struct {
	Id string `json:"id" validate:"required"`
}

type UpdateAdminCustomerRequest struct {
	IdAdminCustomerRequest
	CreateAdminCustomerRequest
}
