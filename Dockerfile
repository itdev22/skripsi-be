FROM golang:1.22 as build
WORKDIR /app
COPY . .
RUN CGO_ENABLED=0 GOOS=linux go build -o myapp .

FROM alpine:latest as production
WORKDIR /app
COPY --from=build /app/myapp .
CMD ["./myapp"]
EXPOSE 3001