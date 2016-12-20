//Global Variables
var myTemplate = File( "/Applications/Adobe InDesign CS6/Template/BannerSheet.indd" ),
    myFolder = Folder( "/Applications/Adobe InDesign CS6/XML" ),
    myXMLDocs = myFolder.getFiles( "*.xml" );

//To automate the banner sheet to import skinny xml 

//Iterate through the xml files
for ( var i = 0; i < myXMLDocs.length; i++ ) {
    //open template
    var newDoc = app.open( myTemplate ),
        myXMLDocs = app.activeDocument;

    //import xml

    newDoc.importXML( myXMLDocs[i] );

    //Export PDF from InDesign

    myPDFExportPreset = app.pdfExportPresets.item( "Smallest File Size" ),
        app.activeDocument.exportFile( ExportFormat.pdfType, File( "/Applications/Adobe InDesign CS6/XML/Outputs/myTestDocument.pdf" ),
            false, myPDFExportPreset );

    //Save Function

    saveFiles();

    function saveFiles() {
        var newFileName = myFolder.absoluteURI + "/Applications/Adobe InDesign CS6/XML/Outputs" + myXMLDocs[i].name().replace( /xml/, /indd/ );
        newDoc.save( new File( newFileName ) );
        myDoc.close();
    }

}