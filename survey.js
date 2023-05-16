const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable: ", (Name) => {
  

  rl.question("What's an activity you like doing? ", (hobbiesILike) => {


    rl.question("What do you listen to while doing that? ", (FavoriteMusic) => {
      

      rl.question("Which meal is your favourite (e.g., dinner, brunch, etc.)? ", (FavoriteMeal) => {
        

        rl.question("What's your favourite thing to eat for that meal? ", (Favoritefood) => {
          

          rl.question("Which sport is your absolute favourite? ", (FavoriteSport) => {
            

            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (YourSuperPower) => {
              
              console.log(`Hello, my name is ${Name}. I like to do ${hobbiesILike} while listening to ${FavoriteMusic}. My favorite meal is ${FavoriteMeal}, and I love eating ${Favoritefood} for that meal. My absolute favorite sport is ${FavoriteSport}. My superpower is ${YourSuperPower}!`);

              rl.close();
            });
          });
        });
      });
    });
  });
});
