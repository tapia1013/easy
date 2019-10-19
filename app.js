// instantiate easyHttp
const http = new easyHTTP;

// GET ALL POSTS. We just pass in a callback for it to work
// http.get('https://jsonplaceholder.typicode.com/posts', function (err, responsePosts) { //name them watever. need to put err 1st
//   // test for err
//   if (err) {
//     console.log(err);

//   } else {
//     console.log(responsePosts);

//   }

// });

// Get Single Quotes Post
// http.get('https://jsonplaceholder.typicode.com/posts/1', function (err, responsePost) { //name them watever. need to put err 1st
//   // test for err
//   if (err) {
//     console.log(err);

//   } else {
//     console.log(responsePost);

//   }

// });


//                   CREATE DATA
const data = {
  title: 'Custom Post',
  body: 'This is a custom post'
};


// Create POST... (url, data, callback)
// http.post('https://jsonplaceholder.typicode.com/posts', data, function (err, responsePost) {
//   if (err) {
//     console.log(err);

//   } else {
//     console.log(responsePost);

//   }
// });



// UPDATE POST WITH PUT (url, data, callback())
// http.put('https://jsonplaceholder.typicode.com/posts/1', data, function (err, post) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(post);

//   }
// });


// DELETE POST
http.delete('https://jsonplaceholder.typicode.com/posts/1', function (err, response) {
  if (err) {
    console.log(err);

  } else {
    console.log(response);

  }
})