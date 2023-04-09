 function distanceFromHqInBlocks(someValue) {
    let distanceBlocks
    if (someValue > 42) {
        distanceBlocks = someValue - 42;
    }
    
    else if (someValue < 42) {
        distanceBlocks = 42 - someValue;
    }
    return distanceBlocks;
  }

function distanceFromHqInFeet(someValue) {
 
  let distanceTravelledInFeet =  distanceFromHqInBlocks(someValue) * 264;
  return distanceTravelledInFeet;
  }

function distanceTravelledInFeet(start, destination) {
    let distanceFeet
    if (start > destination) {
        distanceFeet = (start - destination) * 264;
    }
    else if (start < destination) {
        distanceFeet = (destination - start) * 264;
    }
    return distanceFeet;
}

function calculatesFarePrice(start, destination) {
    let farePrice
    let fareDistance = distanceTravelledInFeet(start,destination);

    if (fareDistance > 0 && fareDistance < 400) {
        farePrice = 0;
        return farePrice;
    }
    else if (fareDistance > 400 && fareDistance < 2000) {
        farePrice = (fareDistance - 400) * 0.02;
        return farePrice;
    }
    else if (fareDistance > 2000 && fareDistance < 2500){
        farePrice = 25;
        return farePrice;
    }
    else if (fareDistance > 2500) {
        return 'cannot travel that far';
    }
  }