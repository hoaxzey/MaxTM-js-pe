
     
        
        $("#error").hide();
        $("#sucses").hide();
        $("#betalingswijze").hide();
        
        function validateForm() {
            
        


        
        
        var gebruiker = document.getElementById("gebruikersnaam").value;
        var voornaam = document.getElementById("voornaam").value;
        var naam = document.getElementById("naam").value;
        var wachtwoord = document.getElementById("wachtwoord").value;
        var herhaalWachtwoord = document.getElementById("herhaalWachtwoord").value;
        var mail = document.getElementById("email").value;
        var adres = document.getElementById("adres").value;
        var land = document.getElementById("land").value;
        var provincie = document.getElementById("provincie").value;
        var postcode = document.getElementById("postcode").value;
        var betalingswijze = document.getElementsByName("betaling");
        
        
        {/* //Geen dubbele errors */}
        document.getElementById("errortext").innerHTML="";


        {/* // array voor opgeslagen errors */}
        var errors =[];

        //gebruikt de functie dat controleert op lege velden
        checkEmptyField(voornaam,"Het veld voornaam is verplicht!");
        checkEmptyField(naam,"Het veld naam is verplicht");
        checkEmptyField(gebruiker,"Het veld gebruikersnaam is verplicht!");
        checkEmptyField(mail,"Het veld email is verplicht!");
        checkEmptyField(wachtwoord,"Het veld wachtwoord is verplicht!");
        checkEmptyField(herhaalWachtwoord,"Het veld voor de herhaling van het wachtwoord is verplicht!");
        checkEmptyField(adres,"Het veld adres is verplicht!");
        checkEmptyField(land,"Het veld land is verplicht!");
        checkEmptyField(provincie,"Het veld provincie is verplicht!");
        checkEmptyField(postcode,"Het veld postcode is verplicht!");


        {/* //functie email valideren */}
        validateEmail(mail);

        {/* //gebruikersnaam valideren (of het starten met . of -) */}
        validateUsername(gebruiker);

        {/* //wachtwoorden valideren en of ze gelijk zijn. */}
        validatePassword(wachtwoord,herhaalWachtwoord);

        {/* //gebruikte functie voor het tonen van de betalingswijze */}
        validatePayment(betalingswijze);

        {/* //waarde tussen 1000 en 9999 */}
        checkPC(postcode);

        {/* //checkbox aangeduid? */}
        validateAgreement();
        
        {/* //alerts tonen */}
        toonAlerts();
        
        {/* //controle op lege velden  https://www.w3schools.com/howto/howto_js_validation_empty_input.asp */}
        function checkEmptyField(veld,melding){
            if(veld == "" || veld == null ){
                errors.push(melding);
            }
        }
        
        // gekozen betalingsmethode aantonen  https://www.geeksforgeeks.org/how-to-get-value-of-selected-radio-button-using-javascript/
        function validatePayment(veld){
            for(i = 0; i < veld.length ; i++){
                if(veld[i].checked){
                    document.getElementById("betaling").innerHTML ="Je betalingswijze is " + veld[i].value + ".";
                }
            }
        }

        

        // wachtwoorden valideren en controleren of ze hetzelfde zijn
        function validatePassword(wachtwoord1, herwachtwoord){
            if(wachtwoord1.length < 8 && herwachtwoord < 8){
                errors.push("Het wachtwoord moet minstens 8 karakters bevatten.");
            }
            else{
                if (wachtwoord1 != herwachtwoord){
                    errors.push("Wachtwoord moet gelijk zijn!");
                }
            }
        }
        {/* // valideren email  https://www.w3resource.com/javascript/form/email-validation.php */}
             function validateEmail(veld){
                 if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(veld)){
                return true;
                     }else
                 {
                errors.push("E-mailadres is niet correct!");
                 }
        }
        // controle eerste karakter 
        function validateUsername(veld){
            if((/^[^.-][a-zA-Z0-9.-_,]+$/.test(veld))){
                errors.push("De gebruikersnaam mag nooit starten met een \".\" of \"-\"");
            }
        }

        //alerts zichtbaar/onzichtbaar
        function toonAlerts(){
            if(errors.lenght>0){
                $("#error").show();
                $("#sucses").hide();
                $("#betalingswijze").hide();

                //errors lijn per lijn
                for (i=0;i<errors.length; i++){
                    document.getElementById("errortext").innerHTML += errors[i] + "<br/>";
                }
            }
            else{
                $("#error").hide();
                $("#sucses").show();
                $("#betalingswijze").show();
            }
        }

        //Controleren of de waarde van de postcode tussen 1000 en 9999 ligt.
        function checkPC(veld){
            if(veld < 1000 || veld > 9999){
                errors.push("de waarde van de postcode moet tussen de 1000 en 9999 liggen!");
            }
        }

        //Controleren of alle voorwaarden behaald zijn
        function validateAgreement(veld){
            if(document.getElementById(veld).checked){
                errors.push("Gelieve de algemene voorwaarden te accepteren.");
            }
        }
        
        
    }
    