


const indianCricketTeam = [
    { name: "Virat Kohli", role: "Batsman" },
    { name: "Rohit Sharma", role: "Batsman" },
    { name: "Shubman Gill", role: "Batsman" },
    { name: "KL Rahul", role: "Batsman/Wicketkeeper" },
    { name: "Jasprit Bumrah", role: "Bowler" },
    { name: "Hardik Pandya", role: "All-rounder" },
    { name: "Ravindra Jadeja", role: "All-rounder" },
    { name: "Rishabh Pant", role: "Wicketkeeper/Batsman" },
    { name: "Mohammad Shami", role: "Bowler" },
    { name: "Bhuvneshwar Kumar", role: "Bowler" },
    { name: "Suryakumar Yadav", role: "Batsman" }
];

/* Array.at() :- The at() method of Array instances takes an integer value and returns the item at that index,
   allowing for positive and negative integers. Negative integers count back from the last item in the array.*/

console.log(`All-rounder Player in 5th Position :-`, indianCricketTeam.at(5)); //which All-rounder player in 5th position 

console.log(`Optional Wicketkeeper Name:-`, indianCricketTeam.at(-8)); //Name of the Optional Wicketkeeper
// OR 
console.log(`Optional Wicketkeeper Name:-`, indianCricketTeam.at(7));


/* Array.filter() :-  JavaScript is used to create a new array with all elements 
that pass a test implemented by the provided callback function. 
It does not modify the original array. i.e  shallow copy */

const filterlist = indianCricketTeam.filter((newteam) => newteam.role === "Bowler"); //filter the players who are Bowler from the list of Indian cricket team players
console.log(filterlist);

/* Array.Find() :- The find() method of Array instances returns the first element in the provided array that satisfies the provided testing function. 
If no values satisfy the testing function, undefined is returned. */

const findplayer = indianCricketTeam.find((player) => player.role === "Batsman"); //Find the 1st Batsman in team
console.log(findplayer);

/* Array.pop() :- The pop() method of Array instances removes the last element from an array and returns that element. 
This method changes the length of the array. */

console.log(indianCricketTeam.pop()); //In the team, 15th Player are not avaiable
console.log(indianCricketTeam);


/* Array.Push() :- The push() method of Array instances adds the specified elements to the end of an array 
and returns the new length of the array. */

console.log(indianCricketTeam);
console.log(indianCricketTeam.push({ name: "Yashasvi Jaiswal", role: "Left hand Batsman" })); //New Player in the team
console.log(indianCricketTeam);

/* Array.splice() :- The splice() method of Array instances changes the contents of an array by removing 
or replacing existing elements and/or adding new elements */

console.log(indianCricketTeam);
indianCricketTeam.splice(3, 1, { name: 'Rahul Dravid', role: 'Batsman' }) //Replace the player bcz player is injury
console.log(indianCricketTeam);

/* Array.unshift() :- The unshift() method of Array instances adds the specified elements to the 
beginning of an array and returns the new length of the array. */

console.log(indianCricketTeam);
indianCricketTeam.unshift({ name: 'MS Dhoni', role: 'All-rounder' }); //New Player in the team
console.log(indianCricketTeam);

/* Array.findLast() :- The findLast() method of Array instances iterates the array in reverse order and returns the value of the first element that satisfies the provided testing function. 
If no elements satisfy the testing function, undefined is returned. */

const lastbowler = indianCricketTeam.findLast((bowler) => bowler.role === "Bowler") //Last Bowler in the team
console.log(lastbowler);


/* Array.entries() :- The entries() method of Array instances returns a new array iterator object that contains 
the key/value pairs for each index in the array. */

const iter = indianCricketTeam.entries(); //Batting order of team
console.log(iter.next().value);
console.log(iter.next().value);
console.log(iter.next().value);
console.log(iter.next().value);
console.log(iter.next().value);

/* Array.toReversed() :- The toReversed() method of Array instances is the copying counterpart of the reverse() method. 
It returns a new array with the elements in reversed order. */

console.log(indianCricketTeam.toReversed()); // Rank of Player is reverse 