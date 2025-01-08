mainName=newProject/

dirs=( css pages about contact images icons js )

for dir in ${dirs[@]}; do
  echo "creating " ${dir}
    mkdir $dir
done

files=( index.html style.css about.html about.css about contact.html contact.css companyLogo.png email.png phone.png chat.png index.js )

for fileName in ${files[@]}; do
  echo "creating " ${fileName}
    touch $fileName
done

echo "I created this via a script" > README.md

mv style.css css/
mv about.* about/
mv contact.* contact/
mv companyLogo.png images/
mv *.png icons/
mv index.js js/
mv icons/ images/
mv about/ pages/
pwd
tree -d $mainName
tree $mainName

git add -A
git status
git commit -m "first commit $(date)"
git status
git push
git log
