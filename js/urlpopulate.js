function populateFromURL () {
  var params_string = sessionStorage.getItem("urlParams")
  var params_string_list = params_string.split("&");
  var params = {};
  for(var i = 0;i < params_string_list.length;i++ ){
      var temp = params_string_list[i].split("=");
      params[temp[0]] = temp[1];
  }
  
  // Set the parameters if they are in the session data and mark as read-only
  if(params.ID) {
    document.getElementById('ID').value = params.ID;
    document.getElementById('ID').readOnly = true;
  }
  if(params.age) {
    document.getElementById('age').value = params.age;
    document.getElementById('age').readOnly = true;
  }
  if(params.sessionNumber) {
    document.getElementById('sessionNumber').value = params.sessionNumber;
    document.getElementById('sessionNumber').readOnly = true;
  }
  if(params.studyID) {
    document.getElementById('studyID').value = params.studyID;
    document.getElementById('studyID').readOnly = true;
  }
  if(params.groupID) {
    document.getElementById('groupID').value = params.groupID;
    document.getElementById('groupID').readOnly = true;
  }
}

function extractFromURL() {
  var url = window.location.href
  var urlParams = url.split("?")[1];
  sessionStorage.setItem("urlParams", urlParams);
}