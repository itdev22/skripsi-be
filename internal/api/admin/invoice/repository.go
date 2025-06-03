package invoice

import (
	"github.com/jinzhu/copier"
	"gorm.io/gorm"

	"skripsi-be/internal/models/entities"
)

type AdminInvoiceRepositoryInterface interface {
	FindAdminInvoiceRepository() ([]entities.Invoice, error)
	CreateAdminInvoiceRepository(request CreateAdminInvoiceRequest) (entities.Invoice, error)
	FindByIdAdminInvoiceRepository(request IdAdminInvoiceRequest) (entities.Invoice, error)
	UpdateAdminInvoiceRepository(request UpdateAdminInvoiceRequest) (entities.Invoice, error)
	DeleteAdminInvoiceRepository(request IdAdminInvoiceRequest) (entities.Invoice, error)
}

type AdminInvoiceRepositoryStruct struct {
	db *gorm.DB
}

func NewAdminInvoiceRepository(db *gorm.DB) *AdminInvoiceRepositoryStruct {
	return &AdminInvoiceRepositoryStruct{db}
}

func (r AdminInvoiceRepositoryStruct) FindAdminInvoiceRepository() ([]entities.Invoice, error) {
	invoices := []entities.Invoice{}
	tx := r.db.Preload("Customer.Product").Preload("InvoiceItems.Invoice").Order("createdAt DESC").Find(&invoices)

	if tx.Error != nil {
		return invoices, tx.Error
	}

	return invoices, nil
}

func (r AdminInvoiceRepositoryStruct) FindByIdAdminInvoiceRepository(request IdAdminInvoiceRequest) (entities.Invoice, error) {
	invoice := entities.Invoice{}
	tx := r.db.First(&invoice, "id = ?", request.Id)

	if tx.Error != nil {
		return invoice, tx.Error
	}

	return invoice, nil
}

func (r AdminInvoiceRepositoryStruct) CreateAdminInvoiceRepository(request CreateAdminInvoiceRequest) (entities.Invoice, error) {
	invoice := entities.Invoice{}
	// invoiceItems := []entities.InvoiceItems{}
	copier.Copy(&invoice, &request)
	// copier.Copy(&invoiceItems, &request.InvoiceItems)
	tx := r.db.Begin()
	txInvoice := tx.Create(&invoice)
	if txInvoice.Error != nil {
		tx.Rollback()
		return entities.Invoice{}, tx.Error
	}

	// for _, invoiceItem := range invoiceItems {
	// 	invoiceItem.InvoiceID = invoice.ID
	// 	invoiceItem.Total = invoiceItem.Price * invoiceItem.Total
	// 	txInvoiceItem := tx.Create(&invoiceItem)
	// 	if txInvoiceItem.Error != nil {
	// 		tx.Rollback()
	// 		return entities.Invoice{}, tx.Error
	// 	}
	// 	invoice.Amount += invoiceItem.Total
	// }

	txInvoice = tx.Save(&invoice)

	tx.Commit()

	return invoice, nil
}

func (r AdminInvoiceRepositoryStruct) UpdateAdminInvoiceRepository(request UpdateAdminInvoiceRequest) (entities.Invoice, error) {
	invoice := entities.Invoice{}
	tx := r.db.First(&invoice, "id = ?", request.Id)

	if tx.Error != nil {
		return invoice, tx.Error
	}
	copier.Copy(&invoice, &request)

	r.db.Save(&invoice)
	return invoice, nil
}

func (r AdminInvoiceRepositoryStruct) DeleteAdminInvoiceRepository(request IdAdminInvoiceRequest) (entities.Invoice, error) {

	invoice := entities.Invoice{}

	tx := r.db.First(&invoice, "id = ?", request.Id)
	if tx.Error != nil {
		return invoice, tx.Error
	}

	tx = r.db.Delete(&invoice)
	if tx.Error != nil {
		return invoice, tx.Error
	}
	return invoice, nil
}
