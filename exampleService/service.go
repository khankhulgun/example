package exampleService

import (
	"github.com/labstack/echo/v4"
	"example/exampleService/routes"
)

func Set(e *echo.Echo) {
	routes.Web(e)
	routes.Api(e)
}
