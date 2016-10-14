var MarvelApi = {
    characters: function(query,fn){
        let xhr = new XMLHttpRequest();
        console.log(query);
        xhr.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var chars = JSON.parse(this.responseText);
                return fn(chars)
                //chars["data"]["results"]
            }
        };
        xhr.open("GET", "http://gateway.marvel.com:80/v1/public/characters?ts=1&nameStartsWith=" + query + "&limit=100&apikey=c853e32a3cdaa00bfb344c5bd47c1230&hash=ad8228ded3fe3fd80db2d703b88f1397");
        xhr.send();
    },
    comics: function(query, fn) {
        let xhr = new XMLHttpRequest();
        console.log(query);
        xhr.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var chars = JSON.parse(this.responseText);
                return fn(chars)
            }
        };
        xhr.open("GET", "http://gateway.marvel.com:80/v1/public/comics?ts=1&titleStartsWith=" + query + "&limit=100&apikey=c853e32a3cdaa00bfb344c5bd47c1230&hash=ad8228ded3fe3fd80db2d703b88f1397");
        xhr.send();
    },
    comicsByCharacter: function(charId, fn) {
        let xhr = new XMLHttpRequest();
        console.log(charId);
        xhr.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var chars = JSON.parse(this.responseText);
                return fn(chars)
            }
        };
        xhr.open("GET", "http://gateway.marvel.com:80/v1/public/characters/" + charId +"/comics?ts=1&limit=100&apikey=c853e32a3cdaa00bfb344c5bd47c1230&hash=ad8228ded3fe3fd80db2d703b88f1397");
        xhr.send();
    },
    seriesByYear: function(year, fn) {
        let xhr = new XMLHttpRequest();
        console.log(year);
        xhr.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var chars = JSON.parse(this.responseText);
                return fn(chars)
            }
        };
        xhr.open("GET", "http://gateway.marvel.com/v1/public/series?startYear="+ year + "&ts=1&apikey=c853e32a3cdaa00bfb344c5bd47c1230&hash=ad8228ded3fe3fd80db2d703b88f1397");
        xhr.send();
    },
}
export default MarvelApi;
