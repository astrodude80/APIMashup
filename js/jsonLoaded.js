function jsonLoaded(obj) {
    "use strict";

    // if there's an error, print a message and return
    if (obj.code != 200) {
        var status = obj.status;
        document.querySelector("section").innerHTML = "<h3><b>Error!</b></h3>" + "<p><i>" + status + "</i><p>";
        return; // Bail out
    }
    // if there are no results, print a message and return
    if (obj.data.count == 0) {
        var status = "No results found";
        document.querySelector("section").innerHTML = "<p><i>" + status + "</i></p>";
        return; // Bail out
    }
    
    //if there are results, put them on the screen
    var content = document.querySelector("section");
    content.innerHTML = "";

    var searchType = document.querySelector("#searchType").value;
    switch (searchType) {
        case "character":
            //Find the images of all characters returned and display them
            var results = obj.data.results;
            for (var i = 0; i < results.length; i++){
                if(results[i].thumbnail.path){
                    var path = results[i].thumbnail.path;
                    var extension = results[i].thumbnail.extension;
                    //create the element
                    var image = document.createElement('img');
                    image.src = path+ "." + extension;
                    image.alt = document.querySelector("#characterName").value;
                    image.onclick = expandResult;
                    image.dataset.name = results[i].name;
                    MarvelReturnedEntries[results[i].name] = results[i];
                    content.appendChild(image);
                    // Auto click the first result to make it pop up
                    if (i == 0) {$("img[data-name = '"+results[0].name+"']").click();}
                }
            }
            
            break;
        case "comic":
            //Find the images of all comics returned and display them
            var results = obj.data.results;
            for (var i = 0; i < results.length; i++){
                if(results[i].thumbnail.path){
                    var path = results[i].thumbnail.path;
                    var extension = results[i].thumbnail.extension;
                    var title = results[i].title;
                    //create the element
                    var image = document.createElement('img');
                    image.src = path+ "." + extension;
                    image.alt = title;
                    image.onclick = expandResult;
                    image.dataset.title = results[i].title;
                    MarvelReturnedEntries[results[i].title] = results[i];
                    content.appendChild(image);
                    // Auto click the first result to make it pop up
                    if (i == 0) {$("img[data-title = '"+results[0].title+"']").click();}
                }
            }
            
            break;
        case "creators":
            //Find the images of all creators returned and display them
            var results = obj.data.results;
            for (var i = 0; i < results.length; i++){
                if(results[i].thumbnail.path){
                    var path = results[i].thumbnail.path;
                    var extension = results[i].thumbnail.extension;
                    //create the element
                    var image = document.createElement('img');
                    image.src = path+ "." + extension;
                    image.alt = document.querySelector("#creatorFirstName").value + " " + document.querySelector("#creatorLastName").value;
                    image.onclick = expandResult;
                    image.dataset.fullName = results[i].fullName;
                    MarvelReturnedEntries[results[i].fullName] = results[i];
                    content.appendChild(image);
                    // Auto click the first result to make it pop up
                    if (i == 0) {$("img[data-full-name = '"+results[0].fullName+"']").click();}
                }
            }
            
            break;
        case "events":
            //Find the images of all events returned and display them
            var results = obj.data.results;
            for (var i = 0; i < results.length; i++){
                if(results[i].thumbnail.path){
                    var path = results[i].thumbnail.path;
                    var extension = results[i].thumbnail.extension;
                    //create the element
                    var image = document.createElement('img');
                    image.src = path+ "." + extension;
                    image.alt = document.querySelector("#eventName").value;
                    image.onclick = expandResult;
                    image.dataset.title = results[i].title;
                    MarvelReturnedEntries[results[i].title] = results[i];
                    content.appendChild(image);
                    // Auto click the first result to make it pop up
                    if (i == 0) {$("img[data-title = '"+results[0].title+"']").click();}
                }
            }
            
            break;
        case "series":
            //Find the images of all series returned and display them
            var results = obj.data.results;
            for (var i = 0; i < results.length; i++){
                if(results[i].thumbnail.path){
                    var path = results[i].thumbnail.path;
                    var extension = results[i].thumbnail.extension;
                    //create the element
                    var image = document.createElement('img');
                    image.src = path+ "." + extension;
                    image.alt = document.querySelector("#seriesName").value;
                    image.onclick = expandResult;
                    image.dataset.title = results[i].title;
                    MarvelReturnedEntries[results[i].title] = results[i];
                    content.appendChild(image);
                    // Auto click the first result to make it pop up
                    if (i == 0) {$("img[data-title = '"+results[0].title+"']").click();}
                }
            }
            
            break;
        default:
            console.log("FAILED SEARCH SELECT ERROR");
            break;
    }
    
    content.style.visibility = "visible";
}
function jsonError(jqXHR, textStatus, errorThrown) {
    console.log(jqXHR);
    console.log(textStatus);
    console.log(errorThrown);
    
    document.querySelector("section").innerHTML = "<p><i>Error</i>: " + errorThrown + ": "+ JSON.parse(jqXHR.responseText).status + "</p>";
}