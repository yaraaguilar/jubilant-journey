
// Program 1: If //

let toyBabiesOfSis = 12;

if (! toyBabiesOfSis >= 20)
{
	alert("Do you want more toy babies for your birthday?");
	// Of course you do... creepy little babies... //
}

else 
{
	alert("Wow! Those are a lot of babies to take care of *wink wink*");
}


// Program 2: If and Else If //

let appsOnPhone = 25;
// limit of apps on phone is 25 //
let storageSpace = 90;
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
    alert("Hmm, you haven't told me how many apps you have or what your storage space is.")
}

// Program 2: Switch //

let academiaAesthetics = ["Dark academia", "Light academia", "Classical academia", "Romantic academia", "Royalty core academia", "Pastel academia"];

let yourAesthetic = academiaAesthetics[5];

switch(yourAesthetic)
{
    case academiaAesthetics[0]:
        alert("So you're the thoughtful type, huh? Halloween all year round? Let's get some Harry Potter books and read in a dark room lighted with candles!");
    break;
    
    case academiaAesthetics[1]:
        alert("Cheery and happy classicals, right? You're dark academia's counterpart! Let's get some wool sweaters and study!");
    break;

    case academiaAesthetics[2]:
        alert("Hmm... not a show-off, eh? Like to keep it classy? Well, then, I can handle that! Throw me any Charles Dickens question, and I'll give you the answer!");
    break;

    case academiaAesthetics[3]:
        alert("Are you imagining yourself in a castle, dancing with your prince charming? Your dream will come true one day...");
    break;

    case academiaAesthetics[4]:
        alert("Now, you might not want to compare yourself with Ms./Mr. Romantic academia, but I think you two have a lot in common! One day, you'll have the castle of your dreams, and live a better life than the ones in Disney...");
    break;

    case academiaAesthetics[5]:
        alert("Awww, I love pastel colors too! Why don't we go study and rewrite our notes in a pastel theme? Are you wearing flats? Of course you are!");
    break;
}
// Program 3: Ternary //


// Program 4: Event handler //