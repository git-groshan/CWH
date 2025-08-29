#!/bin/bash
# Fix kubelet "Too many open files / directory watch" issues

set -e

echo ">>> Updating inotify limits..."
sudo tee -a /etc/sysctl.conf >/dev/null <<EOF
fs.inotify.max_user_instances=1024
fs.inotify.max_user_watches=1048576
EOF

sudo sysctl -p

echo ">>> Updating kubelet systemd unit with higher file limits..."
sudo mkdir -p /etc/systemd/system/kubelet.service.d

# Override file descriptor limits for kubelet
cat <<EOF | sudo tee /etc/systemd/system/kubelet.service.d/override.conf >/dev/null
[Service]
LimitNOFILE=1000000
EOF

echo ">>> Reloading systemd and restarting kubelet..."
sudo systemctl daemon-reexec
sudo systemctl daemon-reload
sudo systemctl restart kubelet

echo ">>> Verifying new limits..."
pid=\$(pidof kubelet)
cat /proc/\$pid/limits | grep "open files"

echo ">>> Verifying inotify settings..."
cat /proc/sys/fs/inotify/max_user_instances
cat /proc/sys/fs/inotify/max_user_watches

echo ">>> Done. kubelet should now start cleanly."
