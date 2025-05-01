package helpers

import (
	"fmt"
	"log"
	"os"
	"time"

	"github.com/golang-jwt/jwt/v5"
	"github.com/joho/godotenv"
)

// Function to create JWT tokens with claims
func CreateToken(username string, role string) (string, error) {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}
	// Add a new global variable for the secret key
	secretKey := []byte(os.Getenv("JWT_SECRET_KEY"))

	// Create a new JWT token with claims
	claims := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
		"sub": username,                         // Subject (user identifier)
		"iss": "lillyapps",                      // Issuer
		"aud": role,                             // Audience (user role)
		"exp": time.Now().Add(time.Hour).Unix(), // Expiration time
		"iat": time.Now().Unix(),                // Issued at
	})

	tokenString, err := claims.SignedString(secretKey)
	if err != nil {
		return "", err
	}
	// Print information about the created token
	fmt.Printf("Token claims added: %+v\n", claims, secretKey, username)
	return tokenString, nil
}

// Function to verify JWT tokens
func VerifyToken(tokenString string) (*jwt.Token, error) {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}
	// Add a new global variable for the secret key
	secretKey := []byte(os.Getenv("JWT_SECRET_KEY"))

	// Parse the token with the secret key
	token, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
		return secretKey, nil
	})

	// Check for verification errors
	if err != nil {
		return nil, err
	}

	// Check if the token is valid
	if !token.Valid {
		return nil, fmt.Errorf("invalid token")
	}

	// Return the verified token
	return token, nil
}

func VerifyTokenFromDB() {

}
