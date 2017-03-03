var myDoc = app.documents.add ();
var myTextFrame = myDoc.pages.item(0).textFrames.add();
myTextFrame.geometricBounds = ["6p", "6p", "24p", "24p"];
myTextFrame.contents = "Hello World!";