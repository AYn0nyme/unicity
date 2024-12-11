kill -9 $(pgrep -fl "npm run test" | awk '{print $1}')
