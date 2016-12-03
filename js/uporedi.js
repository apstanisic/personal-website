// Proverava regularne izraze, prosledjuje se niz dom objekata i objekat sa rerex-ima
// Prosiriti da prima sve. Ovo je prva verzija, ne znam dal radi sa jQuery
//uporedjuje po name atributu, regex izraz mora da se zove isto kao name
var uporedi = (function(){
    let regex = function(vrednosti, uslovi){
        try{
            for(vrednost of vrednosti){
                let naziv = vrednost.getAttribute("name");
                let uslov = uslovi[naziv];
                let valja = uslov.test(vrednost.value);
                if(!valja) return false;
            }
        }
        catch(e){
            console.log("Jedan ili vise parametra ne valjaju");
            return false;
        }
        return true;
    }
    return {
        regex : regex
    };
})();
