#!/bin/bash
git stash save -u
git checkout -B gh-pages
git add -f styleguide
git commit -am "Rebuild styleguide"
git filter-branch -f --prune-empty --subdirectory-filter styleguide
git push -f origin gh-pages
git checkout -
git stash pop --quiet
