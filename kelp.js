
let appsOnPhone = 0;
// limit of apps on phone is 25 //
let storageSpace = 0;
// 100 is the limit for storage space //

if (appsOnPhone >= 20 && storageSpace >= 70)
{
    alert("Woah woah! You need to delete some files/apps on your phone, or else you will have no more storage left!")
}
else if (appsOnPhone >= 15 && storageSpace >= 60)
{
    alert("You have a lot of apps on your phone! Careful with your storage!");
}

else if (appsOnPhone >= 10 && storageSpace >= 40)
{
    alert("You are almost half way full.");
}

else if (appsOnPhone >= 5 && storageSpace >= 20)
{
    alert("Have you recently deleted some items on your phone? You have excellent phone health!");
}

else if (appsOnPhone === 0 && storageSpace === 0)
{
    alert("Wow, you have a new phone, don't you? Time to fill it up.");
}

else

{
    alert("Hmm, you haven't told me how many apps or how much your storage space is.")
}