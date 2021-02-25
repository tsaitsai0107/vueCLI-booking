//deploy.sh

set -e
npm run build
cd dist
git init 
git add -A
git commit -m 'deploy'

git push -f https://github.com/tsaitsai0107/vuex-booking.git master:gh-pages

cd -