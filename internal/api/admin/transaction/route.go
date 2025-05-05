package transaction

import "github.com/gofiber/fiber/v2"

func AdminTrasactionRoute(app fiber.Router) {

	app.Get("")
	app.Get("/:id")
	app.Post("")
	app.Put("/:id")
	app.Delete("/:id")

}
