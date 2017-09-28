module.exports = {
  calculatePoints : function(params) { // Some other logic according to requierements should go here.
    var points = Math.floor(Number(params.age) + Number(params.height) / 10, 1);
    if(params.bodyShape === 'sporty'){
      points += 10;
    }
    return points;
  }
}
