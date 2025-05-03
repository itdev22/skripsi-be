package dto

import "skripsi-be/internal/models/entities"

type UserDTO struct {
	ID    string `json:"id"`
	Name  string `json:"name" `
	Email string `json:"email" `
	Role  string `json:"role" `
}

func ModelToUser(user entities.User) *UserDTO {
	return &UserDTO{
		ID:    user.ID,
		Name:  user.Name,
		Email: user.Email,
		Role:  string(user.Role),
	}
}
