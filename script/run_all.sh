echo "Checking Package"

yarn lint &&
    yarn format &&
    yarn test &&
    yarn build
