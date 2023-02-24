package utils

import (
	"encoding/json"
	"fmt"
	"os"

	"github.com/kpango/glg"
)

type Utils struct {
	Log        *glg.Glg
	appDataDir string
}

// NewUtils returns a new Utils struct
func NewUtils() *Utils {
	return &Utils{}
}

// Startup initializes the Utils struct
func (u *Utils) Startup() {
	// get user home directory
	homeDir, err := os.UserHomeDir()
	if err != nil {
		fmt.Printf("Unable to find user home directory! %v", err)
	}

	u.appDataDir = homeDir + "/.doIt/"

	// create the directory if not exists
	err = u.createStorageDir()
	if err != nil {
		fmt.Printf("Unable to create storage directory! %v", err)
	}

	// Initialize logger to print to terminal and log file
	logFile := glg.FileWriter(u.appDataDir+"doIt.log", 0666)
	u.Log = glg.Get().SetMode(glg.BOTH).SetLineTraceMode(glg.TraceLineShort).
		InitWriter().
		AddWriter(logFile).
		SetWriter(logFile).
		AddLevelWriter(glg.LOG, logFile).
		AddLevelWriter(glg.INFO, logFile).
		AddLevelWriter(glg.WARN, logFile).
		AddLevelWriter(glg.ERR, logFile).
		SetLevelWriter(glg.LOG, logFile).
		SetLevelWriter(glg.INFO, logFile).
		SetLevelWriter(glg.WARN, logFile).
		SetLevelWriter(glg.ERR, logFile)

	u.Log.Info("Logger initialized...")
}

// GetLogger returns the logger instance ---- Returns nil at the moment ??
func (u *Utils) GetLogger() *glg.Glg {
	fmt.Println(u.Log)
	return u.Log
}

// ConsoleLog prints given message to log file, meant to be run from frontend.
// TODO: include log level options
func (u *Utils) ConsoleLog(msg string) {
	err := u.Log.Info(msg)
	if err != nil {
		_ = u.Log.Error("ConsoleLog failed...", err)
	}
}

// createStorageDir creates a directory for app data on the fs
func (u *Utils) createStorageDir() error {
	// Check to see if local storage dir exists already
	_, err := os.ReadDir(u.appDataDir)
	// It doesn't, make it
	if err != nil {
		// Create the directory
		err = os.Mkdir(u.appDataDir, 0777)
		if err != nil {
			return err
		}

		err := createJSONFile(u.appDataDir + "doItData.json")
		if err != nil {
			return err
		}
	}

	return nil
}

// createJSONFile creates file for app data storage, this is where tasks and user settings
// will be kept and read from
func createJSONFile(path string) error {
	data := map[string]interface{}{}

	initialContent, err := json.Marshal(data)
	if err != nil {
		return err
	}

	err = os.WriteFile(path, initialContent, 0777)
	if err != nil {
		return err
	}

	return nil
}
