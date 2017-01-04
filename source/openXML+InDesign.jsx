//Open files
var myXMLDoc = "BUSINESS-CARD-xsl_a",
    myINDTDoc = "TC9980401-LAYOUT-PI2";

var
    myDate = new Date,
    mySuffix = "_" + myDate.getYear() + myDate.getMonth() + myDate.getDate() + myDate.getHours() + myDate.getMinutes() + myDate.getSeconds(),
    pathXMLDoc = File( "/c/Users/mique/Development/Github/XLSconverter/files/example5/"+myXMLDoc+".xml" ),
    pathINDTDoc = File( "/c//Users/mique/Creative Cloud Files/PROJECT/INDESIGN/BUSINESS_CARD/EXAMPLE/"+myINDTDoc+".indt" ),
    newINDDDoc = "/c/Users/mique/Creative Cloud Files/PROJECT/INDESIGN/JOBS/"+myINDTDoc+mySuffix+".indd";

var newDoc = app.open( pathINDTDoc  );
newDoc = app.activeDocument;

//import xml
newDoc.importXML( pathXMLDoc );

//Save Function
saveFiles();

function saveFiles() {
    newDoc.save( new File( newINDDDoc ) );
    // newDoc.close();
}