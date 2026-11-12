const friends = ["Bishal", "Shakor", "Nayon", "Srijon", "Sonjoy"]

const checkFriends = (friends) => {
    let biggestName = friends[0]
    for(let i=1; i<friends.length; i++){
        if(friends[i].length > biggestName.length)
            biggestName = friends[i]

    }
    return biggestName
}

const bigFriend = checkFriends(friends)
console.log(bigFriend)
console.log("Thank you")