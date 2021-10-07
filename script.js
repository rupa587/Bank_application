//common functions 
//name on nav bar
function getName() {
    var firstname = localStorage.getItem("memfirstname");
    document.getElementById("user").innerHTML = " Hello "+firstname;
}

//page 1 functions done

function pageOneSubmitPressed() {
    window.location.href = "2nd.html";
}

//page 2 functions

function pageTwoSubmitPressed() {
    var fn = document.getElementById("fname").value;
    var ln = document.getElementById("lname").value;
    var dob = document.getElementById("bdate").value;
    var g = document.getElementById("male").checked;
    var ph = document.getElementById("cno").value;
    var em = document.getElementById("email").value;
    var gen;//gender

    if (g == true) {
        gen = "male";
    }
    else {
        gen = "female";
    }
    var tendigitpattern = new RegExp(/^\d{10}$/);
    var emailvalidation = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    if (tendigitpattern.test(ph)) {
        if (emailvalidation.test(em)) {
            // console.log(fn);
            // console.log(ln);
            // console.log(dob);
            // console.log(g);
            // console.log(ph);
            // console.log(em);
            localStorage.setItem("memfirstname", fn);
            localStorage.setItem("memlastname", ln);
            localStorage.setItem("memdob", dob);
            localStorage.setItem("memgender", gen);
            localStorage.setItem("memphone", ph);
            localStorage.setItem("mememail", em);
            window.location.href = "3rd.html";
        }
        else {
            alert("enter valid email");
        }
    }
    else {
        alert("enter valid phone number");
    }
}


//page 3 functions
function pageThreeSubmitPressed() {
    var getMaritalStatus = document.getElementById('marital-dropdown').selectedOptions[0].value;
    var address = document.getElementById("address").value;
    var state = document.getElementById("state-dropdown").selectedOptions[0].value;
    var pincode = document.getElementById("pcode").value;
    var country = document.getElementById("country-dropdown").selectedOptions[0].value;

    // console.log(getMaritalStatus);
    // console.log(address);
    // console.log(state);
    // console.log(pincode);
    // console.log(country);

    var sixdigitpattern = new RegExp(/^\d{6}$/);
    if (sixdigitpattern.test(pincode)) {
        localStorage.setItem("memmaritalstatus", getMaritalStatus);
        localStorage.setItem("memaddress", address);
        localStorage.setItem("memstate", state);
        localStorage.setItem("mempincode", pincode);
        localStorage.setItem("memcountry", country);
        window.location.href = "4th.html";
    }
    else {
        alert("enter valid pin code");
    }

}



// page 4 variables and functions

function pageFourSubmitPressed() {
    var dependentstatus = document.getElementById("checkbox-dependent").checked;
    var noofdependents;
    if (dependentstatus == true) {
        noofdependents = document.getElementById("noofdependents").value;
    }
    else {
        noofdependents = 0;
    }
    console.log(dependentstatus);
    console.log(noofdependents);
    if (dependentstatus) {
        localStorage.setItem("memdependentstatus", dependentstatus);
        localStorage.setItem("memnoofdependents", noofdependents);
    }
    else {
        localStorage.setItem("memdependentstatus", dependentstatus);
        localStorage.setItem("memnoofdependents", noofdependents);
    }
    window.location.href = "5th.html";

}

var render = function (template, node) {
    node.innerHTML = template;
};

var template = `<label><b>No of Dependents</b></label><br>
                    <tr>
                        <td>
                            <button type="button" onclick="dependentDece()">-</button>
                        </td>
                        <td>
                            <input type="number" style="width:86%" placeholder="Enter no of Dependents"
                                name="Dependents" id="noofdependents">
                        </td>
                        <td>
                            <button type="button" onclick="dependentIncr()">+</button>
                        </td>
                        <br>
                    <div id="agerender"></div>
                    <div id="agerendertwo"></div>
                    <div id="agerenderthree"></div>
                    <div id="agerenderfour"></div>
                    <div id="agerenderfive"></div>
                    </tr>`;


function showDependent() {
    var checkboxischecked = document.getElementById("checkbox-dependent").checked;
    //console.log(checkboxischecked);
    if (checkboxischecked) {
        //document.getElementById("dependentpageconditional").style.visibility = "visible";
        render(template, document.querySelector('#dependentpageconditional'));
    }
    else {
        render('<br><br>', document.querySelector('#dependentpageconditional'));
    }
}


function dependentIncr() {
    var dependentincrement = +document.getElementById("noofdependents").value;

    if (dependentincrement == null) {
        dependentincrement = 0;
    }
    //console.log(dependentincrement);
    if (dependentincrement <= 4) {
        document.getElementById("noofdependents").value = dependentincrement + 1;
        //console.log(dependentincrement);
        renderAge(dependentincrement + 1);
    }
}

function dependentDece() {
    var dependentdecrement = +document.getElementById("noofdependents").value;

    if (dependentdecrement == null) {
        dependentdecrement = 0;
        document.getElementById("noofdependents").value = 0;
        return;
    }
    else {
        if (dependentdecrement == 0) {
            render('', document.querySelector('#agerender'));
            render('', document.querySelector('#agerendertwo'));
            render('', document.querySelector('#agerenderthree'));
            render('', document.querySelector('#agerenderfour'));
            render('', document.querySelector('#agerenderfive'));
            return;
        }
        else {
            document.getElementById("noofdependents").value = dependentdecrement - 1;
            if (dependentdecrement - 1 == 0) {
                render('', document.querySelector('#agerender'));
                render('', document.querySelector('#agerendertwo'));
                render('', document.querySelector('#agerenderthree'));
                render('', document.querySelector('#agerenderfour'));
                render('', document.querySelector('#agerenderfive'));
            }
            else renderAge(dependentdecrement - 1);
        }
    }
}

function renderAge(x) {
    var template = `<label><b>Age of Dependents</b></label>
                    <input type="number" placeholder="Age" name="dage" id="dage"><br></br>`;
    if (x == 1) {
        render(template, document.querySelector('#agerender'));
        render('', document.querySelector('#agerendertwo'));
        render('', document.querySelector('#agerenderthree'));
        render('', document.querySelector('#agerenderfour'));
        render('', document.querySelector('#agerenderfive'));
    }
    if (x == 2) {
        render(template, document.querySelector('#agerender'));
        render(template, document.querySelector('#agerendertwo'));
        render('', document.querySelector('#agerenderthree'));
        render('', document.querySelector('#agerenderfour'));
        render('', document.querySelector('#agerenderfive'));
    }
    if (x == 3) {
        render(template, document.querySelector('#agerender'));
        render(template, document.querySelector('#agerendertwo'));
        render(template, document.querySelector('#agerenderthree'));
        render('', document.querySelector('#agerenderfour'));
        render('', document.querySelector('#agerenderfive'));
    }
    if (x == 4) {
        render(template, document.querySelector('#agerender'));
        render(template, document.querySelector('#agerendertwo'));
        render(template, document.querySelector('#agerenderthree'));
        render(template, document.querySelector('#agerenderfour'));
        render('', document.querySelector('#agerenderfive'));
    }
    if (x == 5) {
        render(template, document.querySelector('#agerender'));
        render(template, document.querySelector('#agerendertwo'));
        render(template, document.querySelector('#agerenderthree'));
        render(template, document.querySelector('#agerenderfour'));
        render(template, document.querySelector('#agerenderfive'));
    }
}

//page 5 functions and variables

function pageFiveSubmitPressed() {
    var coborrower = document.getElementById("checkbox-dependent-pagefive").checked;
    var name, age, coaincome;
    if (coborrower && document.getElementById("cbname").value && document.getElementById("cbage").value && document.getElementById("cbincome").value) {
        name = document.getElementById("cbname").value;
        age = document.getElementById("cbage").value;
        coaincome = document.getElementById("cbincome").value;
    }
    else {
        name = "NA";
        age = "NA";
        coaincome = "NA";
    }
    // console.log(coborrower);
    // console.log(name);
    // console.log(age);
    // console.log(coaincome);
    localStorage.setItem("memcoborrowerstatus", coborrower);
    localStorage.setItem("memconame", name);
    localStorage.setItem("memcoage", age);
    localStorage.setItem("memcoincome", coaincome);
    window.location.href = "6th.html";

}


var templatepagefive = `<label><b>Name of the co-borrower</b></label>
                <input type="text" placeholder="Name" name="cbname" id="cbname" required><br>
                <label><b>Age of the co-borrower</b></label>
                <input type="number" placeholder="Age" name="cbage" id="cbage" required><br>

                <label><b>Annual income</b></label>
                <input type="number" placeholder="Annual income" name="cbincome" id="cbincome" required><br>
`
function showDependentPagefive() {
    var checkboxischecked = document.getElementById("checkbox-dependent-pagefive").checked;
    //console.log(checkboxischecked);
    if (checkboxischecked) {
        //document.getElementById("dependentpageconditional").style.visibility = "visible";
        render(templatepagefive, document.querySelector('#pagefiveconditional'));
    }
    else {
        render('<br><br>', document.querySelector('#pagefiveconditional'));
    }
}

//page 6 functions 


function showDependentPageSix() {
    var firstname = localStorage.getItem("memfirstname");
    var lastname = localStorage.getItem("memlastname");
    var dob = localStorage.getItem("memdob");
    var gender = localStorage.getItem("memgender");
    var phone = localStorage.getItem("memphone");
    var email = localStorage.getItem("mememail");
    var maritialstatus = localStorage.getItem("memmaritalstatus");
    var address = localStorage.getItem("memaddress");
    var state = localStorage.getItem("memstate");
    var pincode = localStorage.getItem("mempincode");
    var country = localStorage.getItem("memcountry");
    var dependentstatus = localStorage.getItem("memdependentstatus");
    var noofdependents = localStorage.getItem("memnoofdependents");
    var coborrowerstatus = localStorage.getItem("memcoborrowerstatus");
    var comembername = localStorage.getItem("memconame");
    var comemberage = localStorage.getItem("memcoage");
    var comemberincome = localStorage.getItem("memcoincome");

    // 
    
}
function getInfo()
{
    var firstname = localStorage.getItem("memfirstname");
    var lastname = localStorage.getItem("memlastname");
    var email = localStorage.getItem("mememail");
    var maritialstatus = localStorage.getItem("memmaritalstatus");
    var dob = localStorage.getItem("memdob");
    var state = localStorage.getItem("memstate");
    var phone = localStorage.getItem("memphone");
    var noofdependents = localStorage.getItem("memnoofdependents");
    var comembername = localStorage.getItem("memconame");
    var comemberage = localStorage.getItem("memcoage");
    var comemberincome = localStorage.getItem("memcoincome");
    document.getElementById("user").innerHTML = " Hello "+firstname;
    document.getElementById("f_name").innerHTML ="Name :" +firstname+ " " +lastname;
    document.getElementById("eid").innerHTML = "Email :"+email;
    document.getElementById("cno").innerHTML = "Phone :"+phone;
    document.getElementById("dob").innerHTML = "DOB :"+dob;
    document.getElementById("ms").innerHTML = "Marital Status :"+maritialstatus;
    document.getElementById("city").innerHTML = "State : "+state;
    document.getElementById("nos").innerHTML = "No Of Dependents :"+noofdependents;
    document.getElementById("l_name").innerHTML = "Name :"+comembername;
    document.getElementById("age").innerHTML = "Age:"+comemberage ;
    document.getElementById("income").innerHTML =  "Income"+comemberincome;

    
    
    
}
//page 7 functions
function pageSevenSubmitPressed(){
    window.location.href = "8th.html";
}


//page 8 functions
function homeLoan(){
    var loantype="home";
    localStorage.setItem("memloantype", loantype);
    window.location.href = "9th.html";
}

function autoLoan(){
    var loantype="auto";
    localStorage.setItem("memloantype", loantype);
    window.location.href = "10th.html";
}

//page 9 functions
function pageNineSubmitPressed(){
    var stateofhomeloantaking=document.getElementById("state-dropdown").selectedOptions[0].value;
    var cityofhomeloantaking=document.getElementById("city").value;
    var purchaseprice=document.getElementById("pp").value;
    var downpayment=document.getElementById("ppp").value;
    var desiredloanamt=document.getElementById("dla").value;

    console.log(stateofhomeloantaking);
    console.log(cityofhomeloantaking);
    console.log(purchaseprice);
    console.log(downpayment);
    console.log(desiredloanamt);

    localStorage.setItem("memstateofhomeloan", stateofhomeloantaking);
    localStorage.setItem("memcityofhomeloan", cityofhomeloantaking);
    localStorage.setItem("mempurchaseprice", purchaseprice);
    localStorage.setItem("memdownpayment", downpayment);
    localStorage.setItem("memdesiredamount", desiredloanamt);

    window.location.href = "11th.html"

}
//page 10 functions
function pageTenSubmitPressed(){
    var brandofcarloantaking=document.getElementById("car-dropdown").selectedOptions[0].value;
    var modelofcarloantaking=document.getElementById("model").value;
    var purchaseprice=document.getElementById("pp").value;
    var downpayment=document.getElementById("ppp").value;
    var desiredloanamt=document.getElementById("dla").value;

    console.log(brandofcarloantaking);
    console.log(modelofcarloantaking);
    console.log(purchaseprice);
    console.log(downpayment);
    console.log(desiredloanamt);

    localStorage.setItem("membrandofcarloan", brandofcarloantaking);
    localStorage.setItem("memmodelofcarloan", modelofcarloantaking);
    localStorage.setItem("mempurchaseprice", purchaseprice);
    localStorage.setItem("memdownpayment", downpayment);
    localStorage.setItem("memdesiredamount", desiredloanamt);

    window.location.href = "11th.html"
}
//page 11 functions

function getCreditScore() {
    var getAge = document.getElementById('age-dropdown').selectedOptions[0].value;
    //console.log(getAge);

    var annualIncome = +document.getElementById('annincome').value;
    //console.log(annualIncome);
    var creditscoreurl = "https://31j0q0noye.execute-api.us-east-1.amazonaws.com/hackathon/creditscore?age=" + getAge + "&annualIncome=" + annualIncome;
    console.log(creditscoreurl);
    fetch(creditscoreurl)
        .then(response => response.json())
        .then(data => {
            if (data["eligiblityStatus"] == 1) {
                localStorage.setItem("memcreditscore", data["creditScore"]);
                console.log("done");
                window.location.href = "12th.html";
            }
            else {
                console.log("notdone");
                localStorage.setItem("memcreditscore", data["creditScore"]);
                window.location.href = "13th.html";
            }
        });
}
//page 12 functions
function retrieveCreditScore(){
    var creditscore = localStorage.getItem("memcreditscore");
    document.getElementById("score").innerHTML = creditscore;
    var firstname = localStorage.getItem("memfirstname");
    document.getElementById("user").innerHTML = " Hello "+firstname;
}

function pageTwelveSubmitPressed(){
    //retrieve credit score
    window.location.href = "14th.html";
}
//page 13 functions
function pageThirteenSubmitPressed(){
    //quit application
}
//page 14 functions

function checkDetails() {
    var getPan = document.getElementById('pannumber').value;
    console.log(getPan);

    var getAadhaar = document.getElementById('aadharno').value;
    console.log(getAadhaar);

    var twelvedigitpattern = new RegExp(/^\d{12}$/);//12 digit regex
    var pancheckurl = "https://31j0q0noye.execute-api.us-east-1.amazonaws.com/hackathon/panverify?pancard=" + getPan;
    console.log(pancheckurl);
    fetch(pancheckurl)
        .then(response => response.json())
        .then(data => {
            if (data["validPan"] == "True") {
                if (twelvedigitpattern.test(getAadhaar)) {
                    console.log("done");
                    window.location.href = "15th.html";
                }
                else {
                    alert("Incorrect aadhaar entered");
                }
            }
            else {
                console.log("notdone");
                alert("Incorrect PAN entered");
            }
        });
}

//page 15 functions
function pageFifteenSubmitPressed(){
    //TODO:retrieve values and push via json format to php
    var firstname = localStorage.getItem("memfirstname");
    var lastname = localStorage.getItem("memlastname");
    var dob = localStorage.getItem("memdob");
    var gender = localStorage.getItem("memgender");
    var phone = localStorage.getItem("memphone");
    var email = localStorage.getItem("mememail");
    var maritialstatus = localStorage.getItem("memmaritalstatus");
    var address = localStorage.getItem("memaddress");
    var state = localStorage.getItem("memstate");
    var pincode = localStorage.getItem("mempincode");
    var country = localStorage.getItem("memcountry");
    var dependentstatus = localStorage.getItem("memdependentstatus");
    var noofdependents = localStorage.getItem("memnoofdependents");
    var coborrowerstatus = localStorage.getItem("memcoborrowerstatus");
    var comembername = localStorage.getItem("memconame");
    var comemberage = localStorage.getItem("memcoage");
    var comemberincome = localStorage.getItem("memcoincome");
    var loantype=localStorage.getItem("memloantype");
    var stateofhomeloan=localStorage.getItem("memstateofhomeloan");
    var cityofhomeloan=localStorage.getItem("memcityofhomeloan");
    var brandcarloan=localStorage.getItem("memstateofhomeloan");
    var modelcarloan=localStorage.getItem("memcityofhomeloan");
    var purchaseprice=localStorage.getItem("mempurchaseprice");
    var downpayment=localStorage.getItem("memdownpayment");
    var desiredamount=localStorage.getItem("memdesiredamount");

    // console.log(desiredamount);
    // console.log(purchaseprice);
    // console.log(stateofhomeloan);
    // console.log(loantype);
    //db via get write
    
    //http://localhost/hackathon/process.php?memfirstname=hari&memlastname=haran&memdob=05-04-2001&memgender=male
   
    var phpurl = "http://localhost/hackathon/process.php?memfirstname=" + firstname + "&memlastname=" + lastname+"&memdob="+dob+"&memgender="+gender+"&memphone="+phone+"&mememail="+email+"&memmaritalstatus="+maritialstatus+"&memaddress="+address+"&memstate="+state+"&mempincode="+pincode+"&memcountry="+country+"&memdependentstatus="+dependentstatus+"&memnoofdependents="+noofdependents+"&memcoborrowerstatus="+coborrowerstatus+"&memconame="+comembername+"&memcoage="+comemberage+"&memcoincome="+comemberincome+"&memloantype="+loantype+"&memstateofhomeloan="+stateofhomeloan+"&memcityofhomeloan="+cityofhomeloan+"&brandcarloan="+brandcarloan+"&modelcarloan="+modelcarloan+"&mempurchaseprice="+purchaseprice+"&memdownpayment="+downpayment+"&memdesiredamount="+desiredamount;
    console.log(phpurl.replace(/ /g, '%20'));
    fetch(phpurl).then(response=>console.log(response));


    //done

    window.location.href = "16th.html";
}

//page 16 functions