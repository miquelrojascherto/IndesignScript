//Global Variables
var  
myINDTDoc = File( "/c//Users/mique/Creative Cloud Files/PROJECT/INDESIGN/BUSINESS_CARD/EXAMPLE/TC9980401-LAYOUT-PI2.indt" ),
myXMLFolder = Folder( "/c/Users/mique/Development/Github/XLSconverter/files/example5/"),
myXMLDocs = myXMLFolder.getFiles("*-xsl_*.xml");

//To automate the banner sheet to import skinny xml 

//Iterate through the xml files
for ( var i = 0; i < myXMLDocs.length; i++ ) {
    //open template
    var newDoc = app.open( myINDTDoc);
        newDoc = app.activeDocument;

    //import xml
    newDoc.importXML( myXMLDocs[i] );

    //Export PDF from InDesign
    var newPDFName = "/c/Users/mique/Creative Cloud Files/PROJECT/INDESIGN/BUSINESS_CARD/EXAMPLE/myTestdocument-"+i+".pdf";
    //myXMLDocs[i].name().replace( /xml/, /indd/ )
    app.activeDocument.exportFile( ExportFormat.pdfType, File( newPDFName ), false );
    //Save Function

    saveInDesignFile();

    function saveInDesignFile() {
        var newFileName = "/Users/mique/Creative Cloud Files/PROJECT/INDESIGN/BUSINESS_CARD/EXAMPLE/myTestdocument-"+i+".indd";
        //myXMLDocs[i].name().replace( /xml/, /indd/ )
        newDoc.save( new File( newFileName ) );
        newDoc.close();
    }

}