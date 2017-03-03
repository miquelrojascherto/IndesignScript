// Create a new document.
var myDocument = app.documents.add();
// Set the measurement units and the ruler origin.
myDocument.viewPreferences.horizontalMeasurementUnits = MeasurementUnits.points;
myDocument.viewPreferences.verticalMeasurementUnits = MeasurementUnits.points;
myDocument.viewPreferences.rulerOrigin = RulerOrigin.pageOrigin;

//Get a reference to the first master spread. 
var myMasterSpread = myDocument.masterSpreads.item(0); 
//Get a reference to the margin preferences of the first page in the master spread. 
var myMarginPreferences = myMasterSpread.pages.item(0).marginPreferences; 
//Now set up the page margins and columns. 
myMarginPreferences.left = 84; 
myMarginPreferences.top = 70; 
myMarginPreferences.right = 70; 
myMarginPreferences.bottom = 78; 
myMarginPreferences.columnCount = 3; 
myMarginPreferences.columnGutter = 14;

//Page margins and columns for the right-hand page. 
var myMarginPreferences = myMasterSpread.pages.item(1).marginPreferences; 
myMarginPreferences.left = 84; 
myMarginPreferences.top = 70; 
myMarginPreferences.right = 70; 
myMarginPreferences.bottom = 78; 
myMarginPreferences.columnCount = 3; 
myMarginPreferences.columnGutter = 14;
var myGridPreferences = myDocument.gridPreferences; 
myGridPreferences.baselineDivision = 14; 
myGridPreferences.baselineStart = 70; 
myGridPreferences.baselineGridShown = true;

var myLeftPage = myMasterSpread.pages.item(0); 
var myRightPage = myMasterSpread.pages.item(1); 
var myLeftFooter = myLeftPage.textFrames.add(); 
myLeftFooter.geometricBounds = [728, 70, 742, 528]; 
myLeftFooter.textFramePreferences.firstBaselineOffset = FirstBaseline.leadingOffset; 
myLeftFooter.contents = SpecialCharacters.autoPageNumber; 
myLeftFooter.parentStory.characters.item(0).pointSize = 11; 
myLeftFooter.parentStory.characters.item(0).leading = 14; 
var myRightFooter = myRightPage.textFrames.add(); 
myRightFooter.geometricBounds = [728, 84, 742, 542]; 
myRightFooter.textFramePreferences.firstBaselineOffset = FirstBaseline.leadingOffset; 
myRightFooter.contents = SpecialCharacters.autoPageNumber; 
myRightFooter.parentStory.characters.item(0).pointSize = 11; 
myRightFooter.parentStory.characters.item(0).leading = 14; 
myRightFooter.parentStory.characters.item(0).justification = Justification.rightAlign;