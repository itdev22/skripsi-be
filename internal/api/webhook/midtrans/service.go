package midtrans

import (
	"skripsi-be/internal/models/entities"
)

type WebhookMidtransServiceInterface interface {
	GetAllWebhookMidtransService() ([]entities.Areas, error)
	ReceivedWebhookMidtransService(request *MidtransNotification) error
}
type WebhookMidtransServiceStruct struct {
	repository WebhookMidtransRepositoryInterface
}

func NewWebhookMidtransService(repository WebhookMidtransRepositoryInterface) *WebhookMidtransServiceStruct {
	return &WebhookMidtransServiceStruct{repository}
}

func (s WebhookMidtransServiceStruct) GetAllWebhookMidtransService() ([]entities.Areas, error) {
	areas, err := s.repository.FindWebhookMidtransRepository()

	if err != nil {
		return areas, err
	}

	return areas, err
}

func (s WebhookMidtransServiceStruct) ReceivedWebhookMidtransService(request *MidtransNotification) error {
	_, err := s.repository.UpdatePaidWebhookMidtransRepository(request.OrderID)
	if err != nil {
		return err
	}

	return nil
}
