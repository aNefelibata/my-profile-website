J Johnson enter Demonstration of deploying website to github pages.

Step one I couldnt get my repo to pull down or fetch it. I was able to find a solution by using "git switch <remoteBranch>" 
I then created a .github/workflows directory at the root level
I added workflows and deply.yml file to workflows
I then went to my github acount and under "Settings" > "Pages under "Source" and selected "GitHub Actions".
Then I did git add, commit and push
