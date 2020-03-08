/*
KYLE JAMES
100704048
2020-03-08
*/

class Contact
{
    constructor(contactName = "", emailAddress = "", contactNumber = "", contactMessage = "")
    {
        this.contactName = contactName;
        this.emailAddress = emailAddress;
        this.contactNumber = contactNumber;
        this.contactMessage = contactMessage;
    }
}

"use strict";
//IIFE - Immediately Invoked Function Expression
// mean? -> anonymous self-executing function

let app;
(function(app){

    // Declare Function Variables here...
    console.log("%cDeclaring Variables", "color: red;")
    let contactObject = new Contact();

    /**
     * Variable initialization in this function
     *
     */
    function Start()
    {
       PageSwitcher();

        Main();
    }

    function PageSwitcher()
    {
        let name = window.location.pathname;

        

        let pageName = name.substring(1, name.length - 5);

        // fixed bug in page switching
        if(name == "/")
        {
            pageName = "index";
        }
       

       switch(pageName)
        {
            case "index":
               DisplayHomePageContent();
                break;
            case "products":
                DisplayProductsContent();
                break;
            case "services":
                DisplayServicesContent();
                break;
            case "about":
                DisplayAboutContent();
                break;
            case "contact":
                DisplayContactContent();
                break;
            case "projects":
                DisplayProjectsContent();
                break;
            case "login":
                DisplayLoginContent();
                break;
            case "register":
                DisplayRegisterContent();
                break;
            case "tasklist":
                DisplayTaskList();
                break;
            default:
                console.error("Landed in a page that is not defined");
                break;
        }

    }

    function DisplayHomePageContent()
    {
        document.getElementById("home").className = "nav-item active";

        document.title = "WEBD6201 - Home";

        let taskListButton = $("#taskListButton").click(function(){
            location.href = "./tasklist.html";
        });
    }

    function DisplayTaskList()
    {
        document.title = "WEBD6201 - Task List";

        // Task 1 a
        $("#newTaskButton").on("click", function(){
            //this is so nothing happens if the text input is blank; a 'saftey' feature
            if(document.getElementById("taskTextInput").value != "")
            {
                //var declarations
                //parent
                var parent = document.getElementById("taskList");
                //new list node
                var newItem = document.createElement("li");
                //attributes for new list node
                newItem.setAttribute("class", "list-group-item");   
                newItem.setAttribute("id", "task");
                //new span node for task text
                var newItemSpanTaskText = document.createElement("span");
                //attributes and content for new span node
                newItemSpanTaskText.setAttribute("id", "taskText");
                newItemSpanTaskText.innerText = document.getElementById("taskTextInput").value;
                //new span node for the edit and delete buttons
                var newItemSpanFloatRight = document.createElement("span");
                //attributes for new span node
                newItemSpanFloatRight.setAttribute("class", "float-right");
                //new button node for the edit button
                var newItemButtonEdit = document.createElement("button");
                //attributes for new edit button
                newItemButtonEdit.setAttribute("class", "btn btn-outline-primary btn-sm editButton");
                //new i node for edit button icon
                var newItemEditIcon = document.createElement("i");
                //attributes for new edit button icon
                newItemEditIcon.setAttribute("class", "fas fa-edit");
                //new button node for new delete button
                var newItemButtonDelete = document.createElement("button");
                //attributes for new delete button
                newItemDeleteIcon.setAttribute("class", "fas fa-trash-alt");
                //new i node for new delete button icon
                var newItemDeleteIcon = document.createElement("i");
                //attributes for new delete button icon
                newItemButtonDelete.setAttribute("class", "btn btn-outline-danger btn-sm deleteButton");
                //new input node for new input
                var newTextInput = document.createElement("input");
                //attributes for new input
                newTextInput.setAttribute("class", "form-control edit-task editTextInput");
                newTextInput.setAttribute("type", "text");
                //append new span node for task text into new list node
                newItem.appendChild(newItemSpanTaskText);
                //append new edit icon into edit button
                newItemButtonEdit.appendChild(newItemEditIcon);
                //append new edit button into span right float
                newItemSpanFloatRight.appendChild(newItemButtonEdit);
                //append new delete icon into delete button
                newItemButtonDelete.appendChild(newItemDeleteIcon);
                //append new delete button into span right float
                newItemSpanFloatRight.appendChild(newItemButtonDelete);
                //append new span right float into new list node
                newItem.appendChild(newItemSpanFloatRight);
                //append new text input node into new list node
                newItem.appendChild(newTextInput);
                //append new list node into the parent
                parent.appendChild(newItem);
            }
        });

        // Task 1 b
        $("ul").on("click", ".editButton", function(){  
            //node for the correlating text input for button press
            var taskEditing = $(this).closest('#task').children(".editTextInput");
            //node for the correlating task text for the button press
            var taskNewText = $(this).closest('#task').children("#taskText");
            //shows the text input for the correlating button press
            taskEditing.show();
            //executes on every button press
            $(document).on('keypress', function(e) {
                //checks if a button press happens to be 'return'
                if(e.which == 13) {
                    //stores value of the text input correlating to the pressed button
                    var input = taskEditing.val();
                    //sets the tet of the tastText node to the input
                    taskNewText.text(input);
                    //hides the correlating text input of the pressed button
                    taskEditing.hide();
                }
            });
        });

        // Task 1 c
        $("ul").on("click", ".deleteButton", function(){
            //node for the correlating list node of the button press
            var taskDeleting = $(this).closest('#task');
            //shows a confirm window and if user presses 'ok', returns true
            if(window.confirm("Are you sure?"))
            {
                //removes the correlating list node for the button press
                taskDeleting.remove();
            }
        });
    }

    function DisplayProductsContent()
    {
        document.title = "WEBD6201 - Products";
    }

    function DisplayServicesContent()
    {
        document.title = "WEBD6201 - Services";
    }

    function DisplayAboutContent()
    {
        document.title = "WEBD6201 - About Us";
    }

    function DisplayContactContent()
    {
        document.title = "WEBD6201 - Contact Us";
        function clearForm()
        {
            //document.getElementById("contactForm").reset();
            $("#contactForm")[0].reset();
            $("#errorMessage").hide();
        }

        function validateInput(selector, condition, errorMessage)
        {
            if(condition)
            {
                $("#errorMessage").show();
                $("#errorMessage").text(errorMessage);
                $(selector).select();
                $(selector).css("border", "2px solid red");
            }
            else
            {
                $("#errorMessage").hide();
                $(selector).css("border", "1px solid #ced4da");
            }
        }

        $("#errorMessage").hide();
        $("#contactName").select();

        // Contact Name Events
        $("#contactName").blur((e)=>
        {
            validateInput("#contactName",( $("#contactName").val().length < 2),"Contact Name is Too Short");
        });

        $("#contactName").focus((e)=>
        {
            $("#contactName").select();
        });

        // Email Events
        $("#emailAddress").blur((e)=>
        {
            validateInput("#emailAddress",($("#emailAddress").val().length < 8) || (!$("#emailAddress").val().includes("@")),"Invalid Email Address");
        });

        $("#emailAddress").focus((e)=>
        {
            $("#emailAddress").select();
        });

        // Contact Number Events
        $("#contactNumber").blur((e)=>
        {
            let phonePattern = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/
            let phoneNumber = $("#contactNumber").val();

            validateInput("#contactNumber",( !phonePattern.test(phoneNumber)),"Invalid Contact Number");
        });

        $("#contactNumber").focus((e)=>
        {
            $("#contactNumber").select();
        });

        // Contact Message Events
        $("#contactMessage").blur((e)=>
        {
            validateInput("#contactMessage",( $("#contactMessage").val().length < 2 ),"Contact Message Too Short");
        });

        $("#contactMessage").focus((e)=>
        {
            $("#contactMessage").select();
        });


        $("#contactForm").submit  ((e)=>
        {
            if(document.getElementById("contactForm").checkValidity() == false)
            {
                e.preventDefault();
                e.stopPropagation();
                console.log("form not valid");
            }

            
            let contactName = $("#contactName").val();
            let emailAddress = $("#emailAddress").val();
            let contactNumber = $("#contactNumber").val();
            let contactMessage = $("#contactMessage").val();

            console.log(`Contact Name: ${contactName}`);
            console.log(`Email Address: ${emailAddress}`);
            console.log(`Contact Number: ${contactNumber}`);
            console.log(`Contact Message: ${contactMessage}`);

            contactObject.contactName = contactName;
            contactObject.emailAddress = emailAddress;
            contactObject.contactNumber = contactNumber;
            contactObject.contactMessage = contactMessage;

            console.log(contactObject);

            clearForm();
        });

        $("#resetButton").click((e)=>
        {
            e.preventDefault();
            if(confirm("Are You Sure?"))
            {
                clearForm();
            }

            
        });
    }

    function DisplayProjectsContent()
    {
        document.title = "WEBD6201 - Projects";
    }

    function DisplayLoginContent()
    {
        document.title = "WEBD6201 - Login";

        $("#loginForm").submit  ((e)=>
        {
           
            e.preventDefault();
            e.stopPropagation();
            $("#loginForm")[0].reset();
            $("#login").hide();
            $("#logout").show();

        });

    }

    function DisplayRegisterContent()
    {
        document.title = "WEBD6201 - Register";
    }

    /**
     * Main Program entry point is here
     *
     */
    function Main()
    {
       
    }
    
    window.addEventListener("load", Start);
})(app || (app = {}));

