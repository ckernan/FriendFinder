# Friend Finder

Friend Finder is a SpongeBob SquarePants themed, compatibility-based full-stack application using Node.js and Express. After filling out a short 10 question survey, your answers will be compared to those from other users. The app will then display the name and picture of the user with the best overall match, a.k.a your new best friend! 

## How It Works

Once the user clicks the "Go To Survey" button on the homepage, they will be redirected to a 10 question survey page. The user should then choose an answer on a scale of 1 to 5 for each question based on how much he or she agrees or disagrees with the question. The user's answers will be converted into a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 2]). The app then determines the user's most compatible friend by comparing the difference between the current user's scores and those from other users, question by question. Those differences are added up to calculate the total difference.
  * Example:
    * User 1: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
    * User 2: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]
    * Total Difference: 2 + 1 + 2 = 5
    
The most compatible friend will be the user with the lowest total difference. Once calculated, the name and picture of that friend will be diplayed in a modal pop-up.

## Preview 

![Friend Finder gif](/app/public/images/FriendFinder.gif)


## Built With

* HTML
* CSS
* [Bootstrap](https://getbootstrap.com/)
* [Javascript](https://www.javascript.com/)
* [Jquery](https://jquery.com/)
* [Node.js](https://nodejs.org/en/)
* [Express.js](https://expressjs.com/)