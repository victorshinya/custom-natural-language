FROM golang:alpine
WORKDIR /app
ADD . .
RUN go build -o main
ENTRYPOINT [ "./main" ]
EXPOSE 8080
