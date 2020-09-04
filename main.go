package main

import (

	"example/models/form/caller"
	"example/models/form/validationCaller"
	gridCaller "example/models/grid/caller"
	"github.com/khankhulgun/khankhulgun"
	"github.com/khankhulgun/khankhulgun/dbToStruct"

)

func main() {


	app := khankhulgun.New("example", gridCaller.GetMODEL, caller.GetMODEL, validationCaller.GetMessages, validationCaller.GetRules, true)


	dbToStruct.GetStruct("")

	/*MIDDLEWARE*/
	//App.Echo.Use(middleware.Recover())
	//App.Echo.Use(middleware.Logger())

	app.Start()

}

