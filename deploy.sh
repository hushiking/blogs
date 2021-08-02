#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# deploy to github
# 如果是发布到自定义域名
echo 'blogs.huhuhu.top' > CNAME
if [ -z "$GITHUB_TOKEN" ]; then
  msg='deploy'
  githubUrl=git@github.com:hushiking/blogs.git
else
  msg='来自github action的自动部署'
  githubUrl=https://xugaoyi:${GITHUB_TOKEN}@github.com/hushiking/blogs.git
  git config --global user.name "Heath"
  git config --global user.email "hushijinde@126.com"
fi

git init
git add -A
git commit -m "${msg}"

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f $githubUrl master:gh-pages # 推送到github
# git push -f git@github.com:hushiking/blogs.git master:gh-pages

cd -
rm -rf docs/.vuepress/dist