/*
 * Formular verarbeiten
 */
function submitForm() {
    vorname = document.KontaktFormular.vorname.value;
    nachname = document.KontaktFormular.nachname.value;
    email = document.KontaktFormular.email.value;
    telefon = document.KontaktFormular.telefon.value;
    betreff = document.KontaktFormular.betreff.value;
    nachricht = document.KontaktFormular.nachricht.value;
    
    /*
     * Formulardaten überprüfen
     */
    
    // Hierin Fehlermeldungen speichern
    var errorMsgs = new Array;
    
    // Initiales Rahmen-Setup (CSS) der Eingabefelder
    var InitialBorder = 'none';

    if (vorname == "") {
        // Rahmen des Eingabefelds färben
        document.KontaktFormular.vorname.style.border="1px red solid";
        // Fehlermeldung speichern
        errorMsgs.push('Bitte geben Sie Ihren Vornamen ein');
    } else {
        // Den Rahmen wieder zurücksetzen
        document.KontaktFormular.vorname.style.border=InitialBorder;
    }
    
    if (nachname == "") {
        // Rahmen des Eingabefelds färben
        document.KontaktFormular.nachname.style.border="1px red solid";
        // Fehlermeldung speichern
        errorMsgs.push('Bitte geben Sie Ihren Nachnamen ein');
    } else {
        // Den Rahmen wieder zurücksetzen
        document.KontaktFormular.nachname.style.border=InitialBorder;
    }
    
    if (email == "") {
        // Rahmen des Eingabefelds färben
        document.KontaktFormular.email.style.border="1px red solid";
        // Fehlermeldung speichern
        errorMsgs.push('Bitte geben Sie Ihre Email Adresse ein');
    } else {
        // Den Rahmen wieder zurücksetzen
        document.KontaktFormular.email.style.border=InitialBorder;
    }
    
    if (betreff == "") {
        // Rahmen des Eingabefelds färben
        document.KontaktFormular.betreff.style.border="1px red solid";
        // Fehlermeldung speichern
        errorMsgs.push('Bitte geben Sie einen Betreff ein');
    } else {
        // Den Rahmen wieder zurücksetzen
        document.KontaktFormular.betreff.style.border=InitialBorder;
    }
    
    if (nachricht == "") {
        // Rahmen des Eingabefelds färben
        document.KontaktFormular.nachricht.style.border="1px red solid";
        // Fehlermeldung speichern
        errorMsgs.push('Bitte geben Sie Ihre Nachricht an uns ein');
    } else {
        // Den Rahmen wieder zurücksetzen
        document.KontaktFormular.nachricht.style.border=InitialBorder;
    }

    /*
     * Fehlermeldungen anzeigen, wenn vorhanden
     */
    if (errorMsgs.length > 0) {
        //Fehlermeldungen in HTML Liste konvertieren
        errorMsgsHTML = '<h3>Folgende Probleme traten auf:</h3><ul>';
        $('#kontakt_form #result').addClass('error');
        for (i=0;i<errorMsgs.length;i++) {
            errorMsgsHTML += '<li>'+errorMsgs[i]+'</li>';
        }
        errorMsgsHTML += '</ul>';
        
        // Fehlermeldungen einblenden
        $('#kontakt_form #result').html(errorMsgsHTML).fadeIn(200);
        
    /*
     * Formular-Daten an PHP übergeben
     */
    } else {
        /*
         * Formular-Daten an PHP Skript senden
         */
        $.post('custom_php/kontakt.php', {
            vorname: vorname, 
            nachname: nachname, 
            email: email, 
            telefon: telefon, 
            betreff: betreff, 
            nachricht: nachricht
        }, function(data) {
            data = $.parseJSON(data);
            
            if (data.result == 'error') {
                errorMsgsHTML = '<h3>Folgende Probleme traten auf:</h3><ul>';
                for (i=0;i<data.errors.length;i++) {
                    errorMsgsHTML += '<li>'+data.errors[i]+'</li>';
                }
                errorMsgsHTML += '</ul>'
                
                // Meldung über den Misserfolg einblenden
                $('#kontakt_form #result').removeClass('success').addClass('error');
                $('#kontakt_form #result').html(errorMsgsHTML).fadeIn(200);
            } else {
                // Meldung über den Erfolg einblenden
                $('#kontakt_form #result').removeClass('error').addClass('success');
                $('#kontakt_form #result').html("<h3>Kontaktformular wurde erfolgreich versandt!</h3>Wir melden uns so schnell als m&ouml;glich bei Ihnen.").fadeIn(200);
            }
        });
    }
}