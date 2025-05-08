package customer

import (
	"skripsi-be/internal/models/entities"

	"gorm.io/gorm"
)

type AdminCustomerRepositoryInterface interface {
	GetAllAdminCustomerRepository() (*[]entities.Customer, error)
	GetByIDAdminCustomerRepository(id IdAdminCustomerRequest) (*entities.Customer, error)
	UpdateAdminCustomerRepository(request UpdateAdminCustomerRequest) (*entities.Customer, error)
	CreateAdminCustomerRepository(request CreateAdminCustomerRequest) (*entities.Customer, error)
	DeleteCustomerByID(id int) error
}

type AdminCustomerRepositoryStruct struct {
	db *gorm.DB
}

func NewAdminCustomerRepository(db *gorm.DB) *AdminCustomerRepositoryStruct {
	return &AdminCustomerRepositoryStruct{db}
}

func (r *AdminCustomerRepositoryStruct) GetAllAdminCustomerRepository() (*[]entities.Customer, error) {
	customers := &[]entities.Customer{}
	r.db.Find(&customers)

	return customers, nil
}

func (r *AdminCustomerRepositoryStruct) GetByIDAdminCustomerRepository(id IdAdminCustomerRequest) (*entities.Customer, error) {
	customer := &entities.Customer{}
	r.db.First(&customer, id)
	if customer.ID == "" {
		return nil, gorm.ErrRecordNotFound
	}

	return customer, nil
}

func (r *AdminCustomerRepositoryStruct) CreateAdminCustomerRepository(request CreateAdminCustomerRequest) (*entities.Customer, error) {
	customer := &entities.Customer{}

	customer.Email = request.Email
	customer.Phone = request.Phone
	customer.Address = request.Address
	customer.InstallationDate = request.InstallationDate
	customer.City = request.City
	customer.CodePostal = request.CodePostal
	customer.CompanyID = request.CompanyID
	customer.Country = request.Country
	customer.Fullname = request.Fullname
	customer.GroupID = request.GroupID
	customer.Location = request.Location
	customer.Password = request.Password
	customer.StateRegion = request.StateRegion
	customer.Surname = request.Surname
	customer.Tag = request.Tag
	customer.ArchiveInstallations = request.ArchiveInstallations
	customer.Company = request.Company

	tx := r.db.Create(customer)

	if tx.Error != nil {
		return nil, tx.Error
	}

	return nil, nil
}

func (r *AdminCustomerRepositoryStruct) UpdateAdminCustomerRepository(request UpdateAdminCustomerRequest) (*entities.Customer, error) {
	customer := &entities.Customer{}

	r.db.First(&customer, "id = ?", request.Id)

	customer.Email = request.Email
	customer.Phone = request.Phone
	customer.Address = request.Address
	customer.InstallationDate = request.InstallationDate
	customer.City = request.City
	customer.CodePostal = request.CodePostal
	customer.CompanyID = request.CompanyID
	customer.Country = request.Country
	customer.Fullname = request.Fullname
	customer.GroupID = request.GroupID
	customer.Location = request.Location
	customer.Password = request.Password
	customer.StateRegion = request.StateRegion
	customer.Surname = request.Surname
	customer.Tag = request.Tag
	customer.ArchiveInstallations = request.ArchiveInstallations
	customer.Company = request.Company

	tx := r.db.Save(customer)

	if tx.Error != nil {
		return nil, tx.Error
	}

	return nil, nil
}

func (r *AdminCustomerRepositoryStruct) DeleteCustomerByID(request IdAdminCustomerRequest) (*entities.Customer, error) {
	customer := &entities.Customer{}

	r.db.First(&customer, "id = ?", request.Id)

	tx := r.db.Delete(customer)

	if tx.Error != nil {
		return nil, tx.Error
	}

	return nil, nil
}
