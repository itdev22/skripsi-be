package entities

import (
	"time"

	"github.com/google/uuid"
	"gorm.io/gorm"
)

// Enums
type UserRole string

const (
	RoleAdmin      UserRole = "ADMIN"
	RoleTechnician UserRole = "TECHNICIAN"
	RoleFinance    UserRole = "FINANCE"
)

type TransactionsType string

const (
	TransactionDebit  TransactionsType = "DEBIT"
	TransactionCredit TransactionsType = "CREDIT"
)

// Accounts model
type Accounts struct {
	ID        string      `json:"id" gorm:"primaryKey"`
	Name      string      `json:"name"`
	CreatedAt time.Time   `json:"createdAt" gorm:"default:current_timestamp"`
	UpdatedAt time.Time   `json:"updatedAt"`
	Transfers []Transfers `json:"transfers" gorm:"foreignKey:FromAccountID;foreignKey:ToAccountID"`
}

// ArchiveInstallation model
type ArchiveInstallation struct {
	ID         string    `json:"id" gorm:"primaryKey"`
	Price      float64   `json:"price"`
	CreatedAt  time.Time `json:"createdAt" gorm:"default:current_timestamp"`
	UpdatedAt  time.Time `json:"updatedAt"`
	CustomerID *string   `json:"customer_id" gorm:"index:archive_installation_ibfk_1"`
	Names      string    `json:"names"`
	Customer   *Customer `json:"customer" gorm:"foreignKey:CustomerID;constraint:OnUpdate:RESTRICT"`
}

// Assets model
type Assets struct {
	ID           string        `json:"id" gorm:"primaryKey"`
	Name         string        `json:"name"`
	Quantity     int           `json:"quantity"`
	Price        float64       `json:"price"`
	CreatedAt    time.Time     `json:"createdAt" gorm:"default:current_timestamp"`
	UpdatedAt    time.Time     `json:"updatedAt"`
	ReportAssets *ReportAssets `json:"report_assets" gorm:"foreignKey:ID"`
}

// Company model
type Company struct {
	ID        string     `json:"id" gorm:"primaryKey"`
	Name      string     `json:"name"`
	URL       string     `json:"url"`
	Email     string     `json:"email"`
	Phone     string     `json:"phone"`
	LogoURL   string     `json:"logo_url"`
	CreatedAt time.Time  `json:"createdAt" gorm:"default:current_timestamp"`
	UpdatedAt time.Time  `json:"updatedAt"`
	Customers []Customer `json:"customer" gorm:"foreignKey:CompanyID"`
}

// Customer model
type Customer struct {
	ID                   string                `json:"id" gorm:"primaryKey"`
	Email                string                `json:"email"`
	Phone                string                `json:"phone"`
	Address              string                `json:"address"`
	InstallationDate     time.Time             `json:"installation_date"`
	CreatedAt            time.Time             `json:"createdAt" gorm:"default:current_timestamp"`
	UpdatedAt            time.Time             `json:"updatedAt"`
	City                 string                `json:"city"`
	CodePostal           string                `json:"code_postal"`
	CompanyID            string                `json:"company_id" gorm:"index:company_id"`
	Country              string                `json:"country"`
	Fullname             string                `json:"fullname"`
	GroupID              string                `json:"group_id" gorm:"index:customer_ibfk_2"`
	Location             string                `json:"location"`
	Password             string                `json:"password"`
	StateRegion          string                `json:"state_region"`
	Surname              string                `json:"surname"`
	Tag                  string                `json:"tag"`
	ArchiveInstallations []ArchiveInstallation `json:"archive_installation" gorm:"foreignKey:CustomerID"`
	Company              Company               `json:"company" gorm:"foreignKey:CompanyID;constraint:OnUpdate:RESTRICT"`
	Groups               Groups                `json:"groups" gorm:"foreignKey:GroupID;constraint:OnUpdate:RESTRICT"`
}

// Device model
type Device struct {
	ID        string    `json:"id" gorm:"primaryKey"`
	Name      string    `json:"name"`
	CreatedAt time.Time `json:"createdAt" gorm:"default:current_timestamp"`
	UpdatedAt time.Time `json:"updatedAt"`
}

// Groups model
type Groups struct {
	ID        string     `json:"id" gorm:"primaryKey"`
	Name      string     `json:"name"`
	CreatedAt time.Time  `json:"createdAt" gorm:"default:current_timestamp"`
	UpdatedAt time.Time  `json:"updatedAt"`
	Customers []Customer `json:"customer" gorm:"foreignKey:GroupID"`
}

// Log model
type Log struct {
	ID        string    `json:"id" gorm:"primaryKey"`
	UserID    string    `json:"user_id" gorm:"index:user_id"`
	Action    string    `json:"action"`
	CreatedAt time.Time `json:"createdAt" gorm:"default:current_timestamp"`
	UpdatedAt time.Time `json:"updatedAt"`
	User      User      `json:"user" gorm:"foreignKey:UserID;constraint:OnUpdate:RESTRICT"`
}

// Products model
type Products struct {
	ID          string    `json:"id" gorm:"primaryKey"`
	Name        string    `json:"name"`
	Price       int64     `json:"price"` // BigInt mapped to int64
	Description string    `json:"description"`
	CreatedAt   time.Time `json:"createdAt" gorm:"default:current_timestamp"`
	UpdatedAt   time.Time `json:"updatedAt"`
}

// ReportAssets model
type ReportAssets struct {
	ID          string    `json:"id" gorm:"primaryKey;index:report_assets_ibfk_1"`
	Description string    `json:"description"`
	Quantity    int64     `json:"quantity"` // BigInt mapped to int64
	CreatedAt   time.Time `json:"createdAt" gorm:"default:current_timestamp"`
	UpdatedAt   time.Time `json:"updatedAt"`
	Assets      Assets    `json:"assets" gorm:"foreignKey:ID;constraint:OnUpdate:RESTRICT"`
}

// ReportCash model
type ReportCash struct {
	ID          string    `json:"id" gorm:"primaryKey"`
	CreatedAt   time.Time `json:"createdAt" gorm:"default:current_timestamp"`
	UpdatedAt   time.Time `json:"updatedAt"`
	Credit      int64     `json:"credit"` // BigInt mapped to int64
	Debit       int64     `json:"debit"`  // BigInt mapped to int64
	Description string    `json:"description"`
}

// Transactions model
type Transactions struct {
	ID          string           `json:"id" gorm:"primaryKey"`
	AccountID   string           `json:"account_id" gorm:"index:transactions_account_id_fkey"`
	Date        time.Time        `json:"date"`
	Description string           `json:"description"`
	Amount      int64            `json:"amount"` // BigInt mapped to int64
	CreatedAt   time.Time        `json:"createdAt" gorm:"default:current_timestamp"`
	UpdatedAt   time.Time        `json:"updatedAt"`
	Type        TransactionsType `json:"type"`
}

// Transfers model
type Transfers struct {
	ID            string    `json:"id" gorm:"primaryKey"`
	FromAccountID string    `json:"from_account_id" gorm:"index:transfers_from_account_id_fkey"`
	ToAccountID   string    `json:"to_account_id" gorm:"index:transfers_to_account_id_fkey"`
	Date          time.Time `json:"date"`
	Description   string    `json:"description"`
	Amount        int64     `json:"amount"` // BigInt mapped to int64
	Tags          string    `json:"tags"`
	CreatedAt     time.Time `json:"createdAt" gorm:"default:current_timestamp"`
	UpdatedAt     time.Time `json:"updatedAt"`
	FromAccount   Accounts  `json:"accounts_transfers_from_account_idToaccounts" gorm:"foreignKey:FromAccountID;constraint:OnUpdate:RESTRICT"`
	ToAccount     Accounts  `json:"accounts_transfers_to_account_idToaccounts" gorm:"foreignKey:ToAccountID;constraint:OnUpdate:RESTRICT"`
}

// User model
type User struct {
	ID        string    `json:"id" gorm:"primaryKey"`
	Email     string    `json:"email" gorm:"unique"`
	Name      *string   `json:"name" gorm:"default:null"`
	Password  string    `json:"password"`
	Role      UserRole  `json:"role"`
	CreatedAt time.Time `json:"createdAt" gorm:"default:current_timestamp"`
	UpdatedAt time.Time `json:"updatedAt"`
	Log       []Log     `json:"log" gorm:"foreignKey:UserID"`
}

func (u *User) TableName() string {
	return "users"
}
func (u *User) BeforeCreate(tx *gorm.DB) error {
	if u.ID == "" {
		u.ID = uuid.New().String()
	}
	return nil
}
