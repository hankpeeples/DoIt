package db

import (
	"github.com/kpango/glg"
)

type Database struct {
	Log *glg.Glg
}

func NewDB() *Database {
	return &Database{}
}

func (db *Database) Setup(logger *glg.Glg) {
	db.Log = logger
	db.Log.Info("DB logger initialized...")
}
