echo "Running Tests"
jest --config jestconfig.json \
    --maxWorkers=50%
