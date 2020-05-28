$(function(){
    $.get('./imenik.txt',function(data){
        let niz = data.split('\n');
        let ljudi = [];
        let niz2 = [];
        let nizauto = [];
        let nizid = [];
        let nizimena = [];
        let nizprezime = [];
        let nizadresa = [];
        let niztelefon = [];
        let nizmail = [];
        let nizmesto = [];
        for(let i=0;i<niz.length;i++){
            let obj = new Object();
            niz2 = niz[i].split('|');
            nizauto=nizauto.concat(niz2);
            nizid=nizid.concat(niz2[0]);
            nizimena = nizimena.concat(niz2[1]);
            nizprezime = nizprezime.concat(niz2[2]);
            nizadresa = nizadresa.concat(niz2[3]);
            niztelefon = niztelefon.concat(niz2[5]);
            nizmail = nizmail.concat(niz2[6]);
            nizmesto = nizmesto.concat(niz2[4]);
            obj.id = niz2[0];
            obj.ime = niz2[1];
            obj.prezime = niz2[2];
            obj.adresa = niz2[3];
            obj.mesto = niz2[4];
            obj.telefon = niz2[5];
            obj.mail = niz2[6];
            ljudi.push(obj);
        }
        let nizunikati = [...new Set(nizmesto)];
        $('#inputID').autocomplete({
            source: nizid
        });
        $('#inputIme').autocomplete({
            source: nizimena
        });
        $('#inputPrezime').autocomplete({
            source: nizprezime
        });
        $('#inputAdresa').autocomplete({
            source: nizadresa
        });
        $('#inputTelefon').autocomplete({
            source: niztelefon
        });
        $('#inputMail').autocomplete({
            source: nizmail
        });
        for(let i=0;i<nizunikati.length;i++){
            $('select').append('<option>'+nizunikati[i]+'</option>');
        }
        $('button').on('click', function(){
            $('#imenikDiv').empty();
            $('#imenikDiv').html("&emsp;ID &emsp;|&emsp; Ime &emsp;|&emsp; Prezime &emsp;|&emsp; Adresa &emsp;|&emsp; Mesto &emsp;|&emsp; Telefon &emsp;|&emsp; Mail &emsp;")
            let tacno = ljudi.filter(function(pomoc){
                return pomoc.ime==$('#inputIme').val() || pomoc.id==$('#inputID').val() || pomoc.prezime==$('#inputPrezime').val() || pomoc.adresa==$('#inputAdresa').val() || pomoc.telefon==$('#inputTelefon').val() || pomoc.mail==$('#inputMail').val() || pomoc.mesto==$('select').val();
            })
            for(let i = 0 ; i<tacno.length;i++){
                $('#imenikDiv').append("<br>" + tacno[i].id + " | " + tacno[i].ime + " | " + tacno[i].prezime + " | " + tacno[i].adresa + " | " + tacno[i].mesto + " | " + tacno[i].telefon + " | " + tacno[i].mail)
            }
        })
    })
})