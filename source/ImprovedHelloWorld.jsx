﻿//Improved Hello World! 
//Enter the name of a font on your system, if necessary. 
try {
    myFont = app.fonts.item( "Arial" );
}
catch ( myError ) { };
var myDocument = app.documents.item( 0 );
with ( myDocument ) {
    var myPage = pages.item( 0 );
    var myBounds = myGetBounds( myDocument ,myPage);
    with ( myDocument.pages.item( 0 ) ) {
        //Get a reference to the text frame. 
        var myTextFrame = textFrames.item( 0 );
        //Change the size of the text frame. 
        myTextFrame.geometricBounds = myBounds;
        var myParagraph = myTextFrame.paragraphs.item( 0 );
        myParagraph.appliedFont = myFont;
        myParagraph.justification = Justification.centerAlign;
        myParagraph.pointSize = 48;
    }
}
//myGetBounds is a function that returns the bounds 
//of the "live area" of a page. 
function myGetBounds( myDocument, myPage ) {
    var myPageWidth = myDocument.documentPreferences.pageWidth;
    var myPageHeight = myDocument.documentPreferences.pageHeight
    if ( myPage.side == PageSideOptions.leftHand ) {
        var myX2 = myPage.marginPreferences.left;
        var myX1 = myPage.marginPreferences.right;
    } else {
        var myX1 = myPage.marginPreferences.left;
        var myX2 = myPage.marginPreferences.right;
    }
    var myY1 = myPage.marginPreferences.top;
    var myX2 = myPageWidth - myX2;
    var myY2 = myPageHeight - myPage.marginPreferences.bottom;
    return [myY1, myX1, myY2, myX2];
}