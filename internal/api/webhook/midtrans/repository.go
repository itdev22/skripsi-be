package midtrans

import (
	"skripsi-be/internal/models/entities"

	"gorm.io/gorm"
)

type WebhookMidtransRepositoryInterface interface {
	FindWebhookMidtransRepository() ([]entities.Areas, error)
	UpdatePaidWebhookMidtransRepository(id string) (entities.Invoice, error)
}

type WebhookMidtransRepositoryStruct struct {
	db *gorm.DB
}

func NewWebhookMidtransRepository(db *gorm.DB) *WebhookMidtransRepositoryStruct {
	return &WebhookMidtransRepositoryStruct{db}
}

func (r WebhookMidtransRepositoryStruct) FindWebhookMidtransRepository() ([]entities.Areas, error) {
	areas := []entities.Areas{}
	tx := r.db.Find(&areas)

	if tx.Error != nil {
		return areas, tx.Error
	}

	return areas, nil
}

func (r WebhookMidtransRepositoryStruct) UpdatePaidWebhookMidtransRepository(id string) (entities.Invoice, error) {
	invoice := entities.Invoice{}
	tx := r.db.First(&invoice, "id = ?", id)
	if tx.Error != nil {
		return invoice, tx.Error
	}
	invoice.Status = entities.InvoiceStatusPaid
	tx = r.db.Save(&invoice)
	if tx.Error != nil {
		return invoice, tx.Error
	}

	return invoice, nil
}
