/* main.js */

/* Connect to Parse */
var PARSE_APP = "[dCDCTbgK2BeB1vcC4Pvl4EnFuUt4h2mqwXFHZmar]";
var PARSE_JS = "[sbtyOYYkgDNz9zNkNdwegSgfsyfCBCUlo4AqjLcq]";


Intent intent;

/* How to retrieve a session seamlessly. 
(http://www.thekeyconsultant.com/2013/02/parse-api-logout-and-current-users.html) */ 

if(ParseUser.getCurrentUser() == null){
  intent = new Intent(this, LoginActivity.class);
  /* Here is where we have to figure out the Facebook/UUID login */
  
  /* If we are doing the picture intent, that too. */
  
}else{
  intent = new Intent(this, MainActivity.class);
}
  
startActivity(intent);
this.finish();


/*This could be connected to a LOGOUT button

private void logout(){
  ParseUser.logOut();
  Intent intent = new Intent(this, LoginActivity.class);
  startActivity(intent);
  this.finish();
}

*/