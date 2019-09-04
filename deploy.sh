set -e

#build
npm run lint
echo Building. this may take a minute...
npm run build

# navigate into the build output direcory
echo Deploying..
git add -A
git commit -m 'deploy'

# deploy
git subtree push https://github.com:SuddenlyPineapple/put-net-website.git origin gh-pages
cd -