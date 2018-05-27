# 7am
git hub classes

open the folder in the local system.
open git bash(right click on mouse)
in the git bash command->
git init // to initialise the git in the local

git remote add remote "https://github.com/navarathanb/7am.git"

 git pull origin master  // to pull the data from the remote master branch to the local
 
in the local create file index.html and edit.
in git bash
> git status > to check what you created or modified.

in the local:
changed content in index.html
>git status // to see what file edited or modified.
>git add index.html // to adding into master branch.
>git commit -m "index.html page updated"
>git push --set-upstream origin master

to create branch:
we are upto marster branch
git pull // data from the remote master  into local

git checkout -b ind-002  // to create branch in the local.
git push --set-upstream origin ind-002 // it will create branch in the remote server.

do some edits in the index.html

git add index.html
git commit -m "file updated"
git push // to update in the remote server.

in the remote open ind-002 branch..
create new pull request






