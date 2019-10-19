//   ASYNCHRONOUSLY ES5 http request OOP with prototype

// make a constructor
function easyHTTP() {
  // the only property that we're going to have is http
  this.http = new XMLHttpRequest();
}

// 4 different prototpye methods
// Make an HTTP GET Request.. takes in url..takes CB or no work
easyHTTP.prototype.get = function (url, callback) {
  // type of req, url, true
  this.http.open('GET', url, true);

  // fix the this.http inside the if loop with self
  let self = this; // self is now this inside the function below
  // onload
  this.http.onload = function () {
    // check if status is 200...this.http is not defined in here
    if (self.http.status === 200) {// undefined cause in a func
      // instead of returning it we put it inside CB()... null for the error we want error to be the first parameter
      callback(null, self.http.responseText);
    } else {
      callback('Error: ' + self.http.status);
    }
  }

  this.http.send()
}




// Make an HTTP POST Request... takes url, data and callback()
easyHTTP.prototype.post = function (url, data, callback) {
  this.http.open('POST', url, true);
  // Set content stype.. content type and value app/json
  this.http.setRequestHeader('Content-type', 'application/json')

  // onload
  let self = this;
  this.http.onload = function () {
    callback(null, self.http.responseText);
  }

  // have to send data when sending with json stringify
  this.http.send(JSON.stringify(data));
}








// Make an HTTP PUT Request... takes url, data and callback()
easyHTTP.prototype.put = function (url, data, callback) {
  this.http.open('PUT', url, true);
  // Set content stype.. content type and value app/json
  this.http.setRequestHeader('Content-type', 'application/json')

  // onload
  let self = this;
  this.http.onload = function () {
    callback(null, self.http.responseText);
  }

  // have to send data when sending with json stringify
  this.http.send(JSON.stringify(data));
}









// Make an HTTP DELETE Request

easyHTTP.prototype.delete = function (url, callback) {
  this.http.open('DELETE', url, true);

  // onload
  let self = this;
  this.http.onload = function () {
    if (self.http.status === 200) {
      callback(null, 'Post Deleted');
    } else {
      callback('Error', self.http.status);
    }
  }

  // have to send data when sending with json stringify
  this.http.send(JSON.stringify(data));
}




























































































































