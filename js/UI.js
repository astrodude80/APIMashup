function buildUI() {
    "use strict";
    
    //identify the div to append content to
    var contentDiv = document.querySelector("nav");
    var resultsDiv = document.querySelector("section");
    var expandedResultsDiv = document.querySelector("article");

    //Selector for search type
    var searchTypeSelector = document.createElement('select');
    searchTypeSelector.id = "searchType";
    contentDiv.appendChild(searchTypeSelector);

    //Options for search type selector
    var characterOption = document.createElement('option');
    characterOption.value = 'character';
    characterOption.innerHTML = 'Character';
    searchTypeSelector.appendChild(characterOption);
    var comicOption = document.createElement('option');
    comicOption.value = 'comic';
    comicOption.innerHTML = 'Comic';
    searchTypeSelector.appendChild(comicOption);
    var creatorsOption = document.createElement('option');
    creatorsOption.value = 'creators';
    creatorsOption.innerHTML = 'Creators';
    searchTypeSelector.appendChild(creatorsOption);
    var eventsOption = document.createElement('option');
    eventsOption.value = 'events';
    eventsOption.innerHTML = 'Events';
    searchTypeSelector.appendChild(eventsOption);
    var seriesOption = document.createElement('option');
    seriesOption.value = 'series';
    seriesOption.innerHTML = 'Series';
    searchTypeSelector.appendChild(seriesOption);
    
    //Create an area for the search options, and set a default state
    var searchOptionsDiv = document.createElement('div');
    searchOptionsDiv.id = "searchOptions";
    contentDiv.appendChild(searchOptionsDiv);
    
    var nameFieldTitle = document.createElement('h2');
    nameFieldTitle.innerHTML = "Character Name: ";
    searchOptionsDiv.appendChild(nameFieldTitle);

    var nameField = document.createElement('input');
    nameField.type = 'text';
    nameField.id = 'characterName';
    nameFieldTitle.appendChild(nameField);
   
    //change the search options based on the search option selector 
    document.querySelector("#searchType").onchange = function (e) {
        //clear the search options and the results
        searchOptionsDiv.innerHTML = "";
        resultsDiv.innerHTML = "";
        expandedResultsDiv.innerHTML = "";
        expandedResultsDiv.style.visibility = "hidden";
        
        //repopulate the search options based on the value of the search option selector
        switch (e.target.value) {
            case "character":
                var nameFieldTitle = document.createElement('h2');
                nameFieldTitle.innerHTML = "Character Name: ";
                searchOptionsDiv.appendChild(nameFieldTitle);
                
                var nameField = document.createElement('input');
                nameField.type = 'text';
                nameField.id = 'characterName';
                nameFieldTitle.appendChild(nameField);
                
                break;
            case "comic":
                //Title
                var dateRangeTitle = document.createElement('h2');
                dateRangeTitle.innerHTML = "Search All Comics From:";
                searchOptionsDiv.appendChild(dateRangeTitle);
                
                //Start Date
                var startDateTitle = document.createElement('h2');
                startDateTitle.innerHTML = "Start Date: ";
                var startDateField = document.createElement('input');
                startDateField.type = 'text';
                startDateField.id = 'startDate';
                startDateField.value = "YYYY-MM-DD";
                startDateTitle.appendChild(startDateField);
                searchOptionsDiv.appendChild(startDateTitle);

                
                //End Date
                var endDateTitle = document.createElement('h2');
                endDateTitle.innerHTML = "End Date: ";
                var endDateField = document.createElement('input');
                endDateField.type = 'text';
                endDateField.id = 'endDate';
                endDateField.value = "YYYY-MM-DD";
                endDateTitle.appendChild(endDateField);
                searchOptionsDiv.appendChild(endDateTitle);
                            
                break;
            case "creators":
                var firstNameFieldTitle = document.createElement('h2');
                firstNameFieldTitle.innerHTML = "Creator First Name: ";
                searchOptionsDiv.appendChild(firstNameFieldTitle);
                
                var firstNameField = document.createElement('input');
                firstNameField.type = 'text';
                firstNameField.id = 'creatorFirstName';
                firstNameFieldTitle.appendChild(firstNameField);
                
                var lastNameFieldTitle = document.createElement('h2');
                lastNameFieldTitle.innerHTML = "Creator Last Name: ";
                searchOptionsDiv.appendChild(lastNameFieldTitle);
                
                var lastNameField = document.createElement('input');
                lastNameField.type = 'text';
                lastNameField.id = 'creatorLastName';
                lastNameFieldTitle.appendChild(lastNameField);
                
                break;
            case "events":
                var nameFieldTitle = document.createElement('h2');
                nameFieldTitle.innerHTML = "Event Name: ";
                searchOptionsDiv.appendChild(nameFieldTitle);
                
                var nameField = document.createElement('input');
                nameField.type = 'text';
                nameField.id = 'eventName';
                nameFieldTitle.appendChild(nameField);
                
                break;
            case "series":
                var nameFieldTitle = document.createElement('h2');
                nameFieldTitle.innerHTML = "Series Name: ";
                searchOptionsDiv.appendChild(nameFieldTitle);
                
                var nameField = document.createElement('input');
                nameField.type = 'text';
                nameField.id = 'seriesName';
                nameFieldTitle.appendChild(nameField);
                
                break;
            default:
                break;
        }
    };
}