//Open files
var
    myXMLDoc = File( "/c/Users/mique/Development/Github/XLSconverter/files/example5/BUSINESS-CARD-xsl.xml" ),
    myINDTDoc = File( "/c//Users/mique/Creative Cloud Files/PROJECT/INDESIGN/BUSINESS_CARD/EXAMPLE/TC9980401-LAYOUT-PI2.indt" );


var newDoc = app.open( myINDTDoc );
newDoc = app.activeDocument;

//import xml
newDoc.importXML( myXMLDoc );

//Export PDF from InDesign
app.activeDocument.exportFile( ExportFormat.pdfType, File( "/c/Users/mique/Creative Cloud Files/PROJECT/INDESIGN/BUSINESS_CARD/EXAMPLE/myTestdocument.pdf" ), false );

//Save Function
saveFiles();

function saveFiles() {
    var newFileName = "/c/Users/mique/Creative Cloud Files/PROJECT/INDESIGN/BUSINESS_CARD/EXAMPLE/myTestdocument.indd";
    newDoc.save( new File( newFileName ) );
    newDoc.close();
}
