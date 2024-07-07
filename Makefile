dev:
	npx concurrently "cd ui && npm run dev" "go run main.go serve"
