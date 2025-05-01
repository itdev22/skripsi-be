package dto

import "skripsi-be/internal/models/entities"

type UserDTO struct {
	ID       string `json:"id"`
	Name     string `json:"name" `
	Email    string `json:"email" `
	Password string `json:"password" `
	Role     string `json:"role" `
}

func ModelToUser(user entities.User) *UserDTO {
	return &UserDTO{
		ID:       user.ID,
		Name:     user.Name,
		Email:    user.Email,
		Password: user.Password,
		Role:     string(user.Role),
	}
}
