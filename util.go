package libkb

import (
	"bytes"
	"crypto/hmac"
	"os"
	"path"
	"strings"
	"time"
)

func ErrToOk(err error) string {
	if err == nil {
		return "ok"
	} else {
		return "ERROR"
	}
}

// exists returns whether the given file or directory exists or not
func FileExists(path string) (bool, error) {
	_, err := os.Stat(path)
	if err == nil {
		return true, nil
	}
	if os.IsNotExist(err) {
		return false, nil
	}
	return false, err
}

func MakeParentDirs(filename string) error {

	dir, _ := path.Split(filename)
	exists, err := FileExists(dir)
	if err != nil {
		G.Log.Error("Can't see if parent dir %s exists", dir)
		return err
	}

	if !exists {
		err = os.MkdirAll(dir, PERM_DIR)
		if err != nil {
			G.Log.Error("Can't make parent dir %s", dir)
			return err
		} else {
			G.Log.Info("Created parent directory %s", dir)
		}
	}
	return nil
}

func FastByteArrayEq(a, b []byte) bool {
	return bytes.Equal(a, b)
}

func SecureByteArrayEq(a, b []byte) bool {
	return hmac.Equal(a, b)
}

func FormatTime(tm time.Time) string {
	layout := "2006-01-02 15:04:05 MST"
	return tm.Format(layout)
}

func cicmp(s1, s2 string) bool {
	return strings.ToLower(s1) == strings.ToLower(s2)
}

func depad(s string) string {
	b := []byte(s)
	i := len(b) - 1
	for ; i >= 0; i-- {
		if b[i] != '=' {
			i++
			break
		}
	}
	ret := string(b[0:i])
	return ret
}

func PickFirstError(errors ...error) error {
	for _, e := range errors {
		if e != nil {
			return e
		}
	}
	return nil
}
