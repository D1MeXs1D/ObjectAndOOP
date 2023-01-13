const myPerson = {
    name: "Dmitri",
    age: "19",
    hobby: "ski",
   }


    function searchValueInObject(object, stringValue) {
           return(stringValue  in object);
    }


    document.write("<p>" + searchValueInObject(myPerson,"age") + "</p>")


