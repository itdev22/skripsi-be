package invoice

import (
	"skripsi-be/internal/models/entities"

	"github.com/jinzhu/copier"
	"gorm.io/gorm"
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
	tx := r.db.Find(&invoices)

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
	copier.Copy(&invoice, &request)
	tx := r.db.Create(&invoice)
	if tx.Error != nil {
		return entities.Invoice{}, tx.Error
	}

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
