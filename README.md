# deno-rest-api
minikube start --driver=virtualbox
docker build -t ..
docker push ..
minikube  addons enable ingress
kubectl apply -f (file deployement /service)
kubectl create secret tls tls-secret --cert=./ssl/server.crt  --key=./ssl/server.key for https
kubectl apply -f ingress.yaml
