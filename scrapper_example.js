function scrap() {
    var startTime= (new Date()).getTime();
    var s = SpreadsheetApp.getActiveSpreadsheet();
    var counter = s.getSheetByName('counter').getRange('A1').getValue()
    var t = s.getSheetByName('notation_finder');
    var stopTime = (new Date()).getTime();
    while (stopTime - startTime < 180000) {
        var last_id1 = t.getRange(counter - 3,1,1,1).getValue() + 3
        var last_id2 = t.getRange(counter - 2,1,1,1).getValue() + 3
        var last_id3 = t.getRange(counter - 1,1,1,1).getValue() + 3
        t.getRange(counter,1,1,1).setValue(last_id1)
        t.getRange(counter+1,1,1,1).setValue(last_id2)
        t.getRange(counter+2,1,1,1).setValue(last_id3)
        var formula1 = 'IF(IMPORTHTML("https://www.GERMANBROKER.de/stockhistory.html?ID="&A'
            + counter
            + ';"table"; 1)="Zu Ihrer Eingabe wurden keine Daten gefunden.";
            "NO ID";
            QUERY(IMPORTHTML("https://www.GERMANBROKER.de/stockhistory.html?ID="&A'
            + counter
            + '; "table"; 1);"SELECT Col1 LIMIT 0"))'
        var counter2 = counter + 1
        var formula2 = 'IF(IMPORTHTML("https://www.GERMANBROKER.de/stockhistory.html?ID="&A'
            + counter2
            + ';"table"; 1)="Zu Ihrer Eingabe wurden keine Daten gefunden.";
            "NO ID";
            QUERY(IMPORTHTML("https://www.GERMANBROKER.de/stockhistory.html?ID="&A'
            + counter2
            + '; "table"; 1);"SELECT Col1 LIMIT 0"))'
        var counter3 = counter + 2
        var formula3 = 'IF(IMPORTHTML("https://www.GERMANBROKER.de/stockhistory.html?ID="&A'
            + counter3
            + ';"table"; 1)="Zu Ihrer Eingabe wurden keine Daten gefunden.";
            "NO ID";
            QUERY(IMPORTHTML("https://www.GERMANBROKER.de/stockhistory.html?ID="&A'
            + counter3
            + '; "table"; 1);"SELECT Col1 LIMIT 0"))'
        t.getRange(counter,2,1,1).setFormula(formula1)
        t.getRange(counter + 1,2,1,1).setFormula(formula2)
        t.getRange(counter + 2,2,1,1).setFormula(formula3)
        counter = counter + 3
        s.getSheetByName('counter').getRange('A1').setValue(counter)
        if (counter > 6) {
            t.getRange(counter-6,2,1,1).setValue(t.getRange(counter-6,2,1,1).getValue())
            t.getRange(counter-5,2,1,1).setValue(t.getRange(counter-5,2,1,1).getValue())
            t.getRange(counter-4,2,1,1).setValue(t.getRange(counter-4,2,1,1).getValue())
        }
        var stopTime = (new Date()).getTime()
    }
}
