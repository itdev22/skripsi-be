package dashboard

import (
	"time"

	"gorm.io/gorm"

	"skripsi-be/internal/models/entities"
)

type AdminDashboardRepositoryInterface interface {
	CardCustomer() (map[string]interface{}, error)
}

type AdminDashboardRepositoryStruct struct {
	db *gorm.DB
}

func NewAdminDashboradRepository(db *gorm.DB) AdminDashboardRepositoryStruct {
	return AdminDashboardRepositoryStruct{db}
}

type DailyCount struct {
	Date  time.Time
	Count int
}

func (r AdminDashboardRepositoryStruct) CardCustomer() (map[string]interface{}, error) {
	var total int64
	if err := r.db.Model(&entities.Customer{}).Count(&total).Error; err != nil {
		return nil, err
	}

	var results []DailyCount
	err := r.db.
		Model(&entities.Customer{}).
		Select("DATE(createdAt) as date, COUNT(*) as count").
		Where("createdAt >= ?", time.Now().AddDate(0, 0, -6).Truncate(24*time.Hour)).
		Group("DATE(createdAt)").
		Order("date").
		Scan(&results).Error
	if err != nil {
		return nil, err
	}

	// Map the results by date
	dateMap := make(map[string]int)
	for _, r := range results {
		dateMap[r.Date.Format("2006-01-02")] = r.Count
	}

	// Build 7-day graph data
	graphData := make([]map[string]interface{}, 0)
	for i := 6; i >= 0; i-- {
		date := time.Now().AddDate(0, 0, -i).Format("2006-01-02")
		graphData = append(graphData, map[string]interface{}{
			"date":  date,
			"count": dateMap[date],
		})
	}

	// Final result
	data := map[string]interface{}{
		"total_customer": total,
		"graph_customer": graphData,
	}

	return data, nil
}
