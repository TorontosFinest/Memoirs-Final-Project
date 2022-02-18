# Memoirs-Final-Project

## Git Workflow USED

## NEVER code on Master or Main!

Create Feature Branches git checkout -b feature/my-feature

Main branch is your production branch, never directly work on it! Workflow

### Starting a new branch

```
1)  git checkout main (or) master (Start new branches from the main branch)
2)  git pull (Make sure you have the most recent version)
```

### Working on the branch

```
3)  git checkout feature/my-feature (Make your feature)
4)  git add & git commit (Commit often with meaningful messages !)
5)  git push (So it's not only local)
```

## Merging main (or) master in the branch

```
6)  git checkout main (or) master (To update it)
7)  git pull
8)  git checkout feature/my-feature (Back to your feature)
9)  git merge main (or) master
10) Fix conflicts if any
11) git commit (commit the merge)
12) git push (So it's not only local)
```

## Merging the branch back in main (or) master

```
13) git checkout main (or) master (To merge your branch)
14) git merge feature/my-feature

15) Should not be any conflict since you cleaned them in the branch first
16) git commit (commit the merge)
17) git push (So it's not only local)
```
# Screenshots-of-the-project

## Login-page
<img width="1440" alt="Login" src="https://user-images.githubusercontent.com/91354073/154751527-b694e94d-ac7b-44d5-ac67-9a0256bde018.png">

## Register-page
<img width="1440" alt="Register" src="https://user-images.githubusercontent.com/91354073/154751618-7b14ce51-6f58-489e-b0da-c76180e4580e.png">

## Dashboard-GlassMorphism-page
<img width="1440" alt="Dashboard-Glassmorphism" src="https://user-images.githubusercontent.com/91354073/154751803-6b8a8983-1565-4b2b-a9c8-e2aa937dfd20.png">

## Generate-Memoir-Glassmorphism-page
<img width="1440" alt="Generate-Logout-Head" src="https://user-images.githubusercontent.com/91354073/154751900-032cbdbf-5bee-4b4d-a598-c46f2633c709.png">

## Resoinsive-Design
![Generate-Memmoir-Respnsive-Upto-2560px](https://user-images.githubusercontent.com/91354073/154751961-0e05fa22-342d-48a6-af7a-d785cc90753b.png)

