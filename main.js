var users = [];

// get data from db, and put into list
// example:  db.get('userlist',users);

const userObject = function (userId, score, lastActivity = new Date()){
    this.id = userId,
    this.score = score,
    this.lastActivity = lastActivity.toISOString().slice(0, 10),
    this.increment = function(){
    this.score++;    
    }
    users.push(this);
}

const incrementUserScores = function (userList){
    userList.forEach(function (user){
        user.increment();
    });
}

var user1 = new userObject(101,23);

var user2 = new userObject(102,83);

var user3 = new userObject(103,43);

function runWhenUserActivity(user){
    let currentDate = new Date().toISOString().slice(0, 10)
    if (user.lastActivity >= currentDate){
        return;
    } else {
        user.increment();
        user.lastActivity = currentDate;
    }

}

// uncomment for it to run every 24 hours
//setInterval(8.64e+7, incrementUserScores(users));


//example 
runWhenUserActivity(user1);
console.log(user1);



