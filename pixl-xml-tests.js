// Write your tests here!
// Here is an example.

Tinytest.add('isDefined', function (test) {
    var isDefined = false;
    try {
        XML;
        isDefined = true;
    }
    catch (e) {
    }
    test.isTrue(isDefined, "XML is not defined");
});

Tinytest.add('canValidateBadXml', function (test) {
  var xml = '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n'
  + '<QuestionFormAnswers xmlns="http://mechanicalturk.amazonaws.com/AWSMechanicalTurkDataSchemas/2005-10-01/QuestionFormAnswers.xsd">\n'
  + '  <Answer>\n'
  + '    <QuestionIdentifier>Q2</QuestionIdentifier>\n'
  + '    <FreeText>Change your thoughts and you change the world.</FreeText>\n'
    // + '  </Answer>\n'
    + '</QuestionFormAnswers>\n';
    var doc = null;
    try {
        doc = XML.parse(xml);
    }
    catch (err) {
        // console.log("XML Parser Error: " + err);
        test.isTrue(true, "XML error is dealt with");
        return;
    }
    test.isFalse(true, "XML error was not dealt with");
});

Tinytest.add('canParseXml', function (test) {
  var xml = '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n'
  + '<QuestionFormAnswers xmlns="http://mechanicalturk.amazonaws.com/AWSMechanicalTurkDataSchemas/2005-10-01/QuestionFormAnswers.xsd">\n'
  + '  <Answer>\n'
  + '    <QuestionIdentifier>Q2</QuestionIdentifier>\n'
  + '    <FreeText>Change your thoughts and you change the world.</FreeText>\n'
  + '  </Answer>\n'
  + '</QuestionFormAnswers>\n';
  var xmlDoc = XML.parse(xml);
  test.isTrue(xmlDoc, "XML is parsed");
});

Tinytest.add('canParseXmlandGetValue', function (test) {
  var xml = '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n'
  + '<QuestionFormAnswers xmlns="http://mechanicalturk.amazonaws.com/AWSMechanicalTurkDataSchemas/2005-10-01/QuestionFormAnswers.xsd">\n'
  + '  <Answer>\n'
  + '    <QuestionIdentifier>Q2</QuestionIdentifier>\n'
  + '    <FreeText>Change your thoughts and you change the world.</FreeText>\n'
  + '  </Answer>\n'
  + '</QuestionFormAnswers>\n';
  var xmlDoc = XML.parse(xml);
  var q = xmlDoc.Answer.QuestionIdentifier;
  var result = q ==="Q2";
  test.isTrue(q, "XML is parsed");
});


