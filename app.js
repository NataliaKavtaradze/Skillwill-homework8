function expo(num, power, cb){
  if (power ===0){
    return cb(null, 1);
  }

  expo(num, power -1, function(err, result){
  if(err)return cb(err, null);
  cb(null, num * result);
});
}
expo(5,3, function(err, result){
  if(err) return console.log(err);
  console.log(result);
});


   