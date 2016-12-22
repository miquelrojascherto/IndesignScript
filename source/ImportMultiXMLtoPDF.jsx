//Global Variables
var  
    myXMLDocs = Folder.desktop.getFiles( "*.xml" ),
    myINDTDocs = Folder.desktop.getFiles( "*.indt" );

//To automate the banner sheet to import skinny xml 

//Iterate through the xml files
for ( var i = 0; i < myXMLDocs.length; i++ ) {
    //open template
    var newDoc = app.open( myINDTDocs[0] ),
        newDoc = app.activeDocument;

    //import xml

    newDoc.importXML( myXMLDocs[i] );

    //Export PDF from InDesign
    var myPDFExportPreset = app.pdfExportPresets.item("Smallest File Size");
        app.activeDocument.exportFile(ExportFormat.pdfType, File( "/c/Users/mique/Desktop/myTestDocument.pdf" ),false );

    //Save Function

    saveFiles();

    function saveFiles() {
        var newFileName = "/Users/mique/Creative Cloud Files/PROJECT/INDESIGN/BUSINESS_CARD/EXAMPLE/myTestdocument.indd";
        //myXMLDocs[i].name().replace( /xml/, /indd/ )
        newDoc.save( new File( newFileName ) );
        newDoc.close();
    }

}