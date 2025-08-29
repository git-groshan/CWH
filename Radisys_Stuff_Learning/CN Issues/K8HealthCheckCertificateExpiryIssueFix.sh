#!/bin/bash
# Kubernetes health check script
# Save this as k8s-health-check.sh and run: sudo bash k8s-health-check.sh

echo "=============================="
echo " Kubernetes Health Check Script"
echo "=============================="

# 1. Check if kubectl is installed
if ! command -v kubectl &>/dev/null; then
    echo "[ERROR] kubectl not found! Please install it (e.g. snap install kubectl --classic)"
    exit 1
else
    echo "[OK] kubectl found: $(kubectl version --client --short 2>/dev/null)"
fi

# 2. Check kubelet service status
echo
echo ">>> Checking kubelet service..."
systemctl is-active --quiet kubelet && echo "[OK] kubelet is running" || echo "[ERROR] kubelet is NOT running"
systemctl is-enabled --quiet kubelet && echo "[OK] kubelet enabled at boot" || echo "[WARN] kubelet not enabled at boot"

# 3. Check open file limits for kubelet
echo
echo ">>> Checking kubelet open file limits..."
pid=$(pidof kubelet)
if [ -n "$pid" ]; then
    grep "Max open files" /proc/$pid/limits
else
    echo "[ERROR] kubelet process not found!"
fi

# 4. Check Kubernetes certificate expiration
echo
echo ">>> Checking Kubernetes certificates..."
if command -v kubeadm &>/dev/null; then
    sudo kubeadm certs check-expiration | grep -E "admin.conf|apiserver|controller-manager|scheduler|ca|front-proxy"
else
    echo "[WARN] kubeadm not found, skipping cert check"
fi

# 5. Check API server connectivity
echo
echo ">>> Checking API server connectivity..."
kubectl get --raw='/healthz' &>/dev/null
if [ $? -eq 0 ]; then
    echo "[OK] API server is reachable"
else
    echo "[ERROR] API server is NOT reachable (certificate or network issue?)"
fi

# 6. Check all pods status
echo
echo ">>> Checking pod status across all namespaces..."
kubectl get pods -A --no-headers | awk '{print $4}' | grep -v Running &>/dev/null
if [ $? -eq 0 ]; then
    echo "[WARN] Some pods are not in Running state!"
    kubectl get pods -A
else
    echo "[OK] All pods are Running"
fi

echo
echo "=============================="
echo " Health check completed"
echo "=============================="
