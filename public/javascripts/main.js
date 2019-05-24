
function makeApiCall() {
      var params = {
        spreadsheetId: '1lFJT0h7L2p9Zj_qxozAqReDKMfJdmdqNHzqFXxkfDZM',
        range: 'Hotels',
      };

      var request = gapi.client.sheets.spreadsheets.values.get(params);
      request.then(function(response) {
        // TODO: Change code below to process the `response` object:
        //console.log(response.result);
        populateSheet(response.result.values);
      }, function(reason) {
        console.error('error: ' + reason.result.error.message);
      });
    }

function initClient() {

  var API_KEY = 'AIzaSyAR4sDVdDdv6Fe2eWQgrFuTG_wqCl3yaj8';  // TODO: Update placeholder with desired API key.
  var CLIENT_ID = '143768695585-vish85tmsul5bgsa9ef0c06t0c7l5mlm.apps.googleusercontent.com';  // TODO: Update placeholder with desired client ID.
  // TODO: Authorize using one of the following scopes:
  //   'https://www.googleapis.com/auth/drive'
  //   'https://www.googleapis.com/auth/drive.file'
  //   'https://www.googleapis.com/auth/drive.readonly'
  //   'https://www.googleapis.com/auth/spreadsheets'
  //   'https://www.googleapis.com/auth/spreadsheets.readonly'
  var SCOPE = 'https://www.googleapis.com/auth/drive.readonly';

  gapi.client.init({
    'apiKey': API_KEY,
    'clientId': CLIENT_ID,
    'scope': SCOPE,
    'discoveryDocs': ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
  }).then(function() {
    gapi.auth2.getAuthInstance().isSignedIn.listen(updateSignInStatus);
    updateSignInStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
  });
}

function handleClientLoad() {
  gapi.load('client:auth2', initClient);
}

function updateSignInStatus(isSignedIn) {
  if (isSignedIn) {
    makeApiCall();
  }
}

function handleSignInClick(event) {
  gapi.auth2.getAuthInstance().signIn();
}

function handleSignOutClick(event) {
  gapi.auth2.getAuthInstance().signOut();
}

function populateSheet(array){
  //console.log(array);
  let tbody = document.querySelector('#tbody');

  for(let row=2, i=0; row<10; row++, i++){

    let tr = document.createElement('tr');
    tr.setAttribute('id', i);
    let chbx = document.createElement('INPUT');
    chbx.setAttribute('type', 'checkbox');
    chbx.setAttribute('id', i);
    chbx.setAttribute('class', 'rows');

    for(let col=0; col<9; col++){
      //console.log(array[row][col]);
      let td = document.createElement('td');
      td.innerHTML = array[row][col];
      tr.append(td);

    }
    tr.append(chbx);
    tbody.append(tr);
  }
}
