# intellection.kz

🚧 WIP

## Git - [Feature Branch Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows#feature-branch-workflow)

Suppose you are given a new task. The first thing you do is get in sync with master branch
```
git checkout master # just in case if you are not on master branch
git pull --rebase origin master # pull latest vestion without headache
```

Next you create a new branch you are going to be working in
```
git checkout -b new-feature # convention is to use dash not underscore
```

Suppose you have finished some functionality in a couple of hours
```
git status
git add <some-file> # Or git add .
git commit -m "<type>(<scope>): <subject>"
```
We use [Angular's format of commit message](https://gist.github.com/stephenparish/9941e89d80e2bc58a153#format-of-the-commit-message). You have to write your commit messages in this way, otherwise husky will not let you commit
You should generally commit several times a day.

When you think you have finished a feature or you want to discuss something about your code or to just backup your work
```
git push -u origin <branch-name>
```
`-u` flag adds it as a remote tracking branch. After setting up the tracking branch, you can call `git push` without any parameters to push your commits. So the next time you want to commit something you can just use `git push`.

After your first push to the branch you should also file a pull request on github, asking to merge your features into master. When you do this, team members will be notified about new pull request and we will be able to discuss and see progress on the feature there.

## Atom setup
Please follow [this guide](https://medium.com/@yjose/list-atom-setup-for-your-next-react-project-ed35e0694e10) to setup Atom, if that is your editor of choice.
Additionally please also install `prettier-atom` package and check two fields `Eslint Integration` and `Format Files on Save`. I would also recommend enabling preinstalled package `autosave`, but that's of course a personal preference.

## LICENSE

Copyright (c) 2017 IntellectionStudio, LLC. All rights reserved.
