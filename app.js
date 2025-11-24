// function expo(num, power, cb){
//   if (power ===0){
//     return cb(null, 1);
//   }

//   expo(num, power -1, function(err, result){
//   if(err)return cb(err, null);
//   cb(null, num * result);
// });
// }
// expo(5,3, function(err, result){
//   if(err) return console.log(err);
//   console.log(result);
// });


fetch("https://jsonplaceholder.typicode.com/posts")
.then(responce => responce.json())
.then(posts => {
  const container = document.getElementById("posts");

  posts.forEach(post => {
    const div = document.createElement("div");
    div.classList.add("post");
 
    div.innerHTML = `
    <h3>${post.title}</h3>
     <p>${post.body}</p>
     <hr/>
    `
     container.appendChild(div);
  });
  })
  .catch(error => console.error("Error:", error));



    