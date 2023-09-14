// Code your solution in this file!
// write a function called distanceFromHqInBlocks that takes a location and RETURNS number of blocks from Scuber on 42nd street
function distanceFromHqInBlocks(pickUp) {
    
    return Math.abs(pickUp - 42);
}



function distanceFromHqInFeet(pickUp) {
    return distanceFromHqInBlocks(pickUp) * 264;

}

function distanceTravelledInFeet(start, end) {
    return Math.abs(start - end) * 264;
} 

function calculatesFarePrice(start, end) {
    
    const distance = distanceTravelledInFeet(start, end);

    if (distance <= 400) return 0;
    if (distance > 400 && distance <= 2000) return (distance - 400) * 0.02;
    if (distance > 2000 && distance < 2500) return 25;
    if (distance >= 2500) return "cannot travel that far";
  }

//use the answer to caluclate the distanceFromHqinFeet(mulitply it by 264)
// 