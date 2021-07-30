//MUSC Assignment Teams array
let teams = [
    'Application Delivery Services',
    'Badge Access Support',
    'Business Application Dev',
    'Cardiology Imaging - Adult',
    'Cardiology Imaging - Pediatric',
    'Carolinas Hospital Chester IT',
    'Carolinas Hospital Florence IT',
    'Carolinas Hospital Lancaster IT',
    'Carolinas Hospital Marion IT',
    'CI - Device Integration',
    'CI - Medical Systems Integration',
    'Collaboration Tools',
    'Collaboration Tools - N',
    'Data Center Services',
    'Data Operations',
    'Digital Adoption',
    'ECSA - Epic Technical Services',
    'eHealth',
    'Emergency Applications',
    'Emergency Systems',
    'Endpoint Engineering Services',
    'Enterprise Health Records',
    'Enterprise Interfaces',
    'Enterprise Mobility Services',
    'Enterprise Telecom Services',
    'Epic - Cadence',
    'Epic - Access and Security',
    'Epic - ASAP',
    'Epic - Beaker (Lab IS)',
    'Epic - Cupid',
    'Epic - Grand Central',
    'Epic - OpTesia',
    'Epic - Outpatient and Clinical Apps',
    'Epic - Radiant',
    'Epic - Research',
    'Field Engineering Services',
    'Field Engineering Services - N',
    'Financial, HR and Payroll Apps',
    'Health Info Management',
    'Hospital Billing Applications',
    'Hosting Services - Storage',
    'Hosting Services - Unix Servers',
    'Hosting Services - Windows Servers',
    'HR Admin (ServiceNow)',
    'Inpatient Application Documentation',
    'Inpatient Applications Orders',
    'ISSM Operations Processes',
    'Kershaw IT',
    'MUHA Kronos, Optilink and Smartsquare',
    'NetID Management',
    'Network Engineering Services',
    'Perioperative Applications',
    'Pharmacy Support',
    'Professional Billing Applications',
    'Radiology',
    'Research and Academic Applications',
    'Security Operations',
    'Security Technologies',
    'ServiceNow',
    'Systems Education',
    'Telehealth Technology Services'
];
//MUSC team manager objArray
const manager = [{
    team: 'Application Delivery Services',
    manager: 'Damien Noble',
    number: '(843) 991-6289'
}, {
    team: 'Badge Access Support',
    manager: 'Duane Deweese',
    number: '(843) 452-7438'
}, {
    team: 'Business Application Dev',
    manager: 'Greg Fisher',
    number: '(843) 224-8966'
}, {
    team: 'Business Application Integration',
    manager: 'Greg Fisher',
    number: '(843) 224-8966'
}, {
    team: 'Cardiology Imaging - Adult',
    manager: 'Regan Allenspach',
    number: '(843) 754-9915'
}, {
    team: 'Cardiology Imaging - Pediatric',
    manager: 'Regan Allenspach',
    number: '(843)-754-9915'
}, {
    team: 'Carolinas Hospital Chester IT',
    manager: 'Shaw Laird',
    number: '(803) 487-3307'
}, {
    team: 'Carolinas Hospital Florence IT',
    manager: 'Andy Little',
    number: '(910) 827-9587'
}, {
    team: 'Carolinas Hospital Lancaster IT',
    manager: 'Chrys Steele',
    number: '(803) 287-1437'
}, {
    team: 'CI - Device Integration',
    manager: 'David Turner',
    number: '(843) 513-2805'
}, {
    team: 'CI - Medical Systems Integration',
    manager: 'David Turner',
    number: '(843) 513-2805'
}, {
    team: 'Collaboration Tools',
    manager: 'Hope Friar',
    number: '(843) 973-2748'
}, {
    team: 'Collaboration Tools - N',
    manager: 'Hope Friar',
    number: '(843) 973-2748'
}, {
    team: 'Data Center Services',
    manager: 'Rochelle Chisolm',
    number: '(843) 708-7147'
}, {
    team: 'Data Operations',
    manager: 'Stan Flowers',
    number: '(843) 452-4464'
}, {
    team: 'Digital Adoption',
    manager: 'Melissa Harvey',
    number: '(843) 323-0985'
}, {
    team: 'ECSA - Epic Technical Services',
    manager: 'Gene Forney',
    number: '(843) 452-7427'
}, {
    team: 'eHealth',
    manager: 'Carrie Weston',
    number: '843-714-1307'
}, {
    team: 'Emergency Applications',
    manager: 'Jennifer Wakser',
    number: '(843) 214-9703'
}, {
    team: 'Endpoint Engineering Services',
    manager: 'Damien Noble',
    number: '(843) 991-6289'
}, {
    team: 'Enterprise Health Records',
    manager: 'Gene Forney',
    number: '(843) 452-7427'
}, {
    team: 'Enterprise Interfaces',
    manager: 'Robert Owens',
    number: '(843) 209-2701'
}, {
    team: 'Enterprise Mobility Services',
    manager: 'Stewary Hulett',
    number: '(843) 323-6001'
}, {
    team: 'Enterprise Telecom Services',
    manager: 'Steve Caporossi',
    number: '(843) 224-7411'
}, {
    team: 'Epic - Beaker(Lab IS)',
    manager: 'Elizabeth Titchener',
    number: '(843) 693-9063'
}, {
    team: 'Epic - Cadence',
    manager: 'Carrie Weston',
    number: '843-714-1307'
}, {
    team: 'Epic - Access and Security',
    manager: 'Gerald Auger',
    number: ''
}, {
    team: 'Epic - ASAP',
    manager: 'Jennifer Wakser',
    number: '(843) 214-9703'
}, {
    team: 'Epic - Cupid',
    manager: 'Regan Allenspach',
    number: '(843) 754-9915'
}, {
    team: 'Epic - Grand Central',
    manager: 'Carrie Weston',
    number: '843-714-1307'
}, {
    team: 'Epic - OpTesia',
    manager: 'Regan Allenspach',
    number: '(843) 754-9915'
}, {
    team: 'Epic - Outpatient and Clinical Apps',
    manager: 'Jodie Powell',
    number: '(843) 276-3419'
}, {
    team: 'Epic - Radiant',
    manager: 'James Richardson',
    number: '(843) 608-9016'
}, {
    team: 'Epic - Research',
    manager: 'Buck Rogers',
    number: '(234) 759-9053'
}, {
    team: 'Field Engineering Services',
    manager: 'Jamie Bessent',
    number: '(843) 532-7231'
}, {
    team: 'Field Engineering Services - N',
    manager: 'Jamie Bessent',
    number: '(843) 532-7231'
}, {
    team: 'Financial, HR and Payroll Apps',
    manager: 'Nicholas Musti',
    number: '(843) 261-3362'
}, {
    team: 'Health Info Management',
    manager: 'Dina Furey',
    number: '(843) 810-0502'
}, {
    team: 'Hospital Billing Applications',
    manager: 'Dina Furey',
    number: '(843) 810-0502'
}, {
    team: 'Hosting Services - Storage',
    manager: 'Jeff Felesky',
    number: '(843) 452-7455'
}, {
    team: 'Hosting Services - Unix Servers',
    manager: 'Christopher Dufala',
    number: '(843) 442-2130'
}, {
    team: 'Hosting Services - Windows Servers',
    manager: 'Todd Lundgren',
    number: '(843) 614-2713'
}, {
    team: 'HR Admin (ServiceNow)',
    manager: 'Terence Riley',
    number: '(843) 792-5531'
}, {
    team: 'Inpatient Application Documentation',
    manager: 'Jennifer Wakser',
    number: '(843) 214-9703'
}, {
    team: 'Inpatient Applications Orders',
    manager: 'Jennifer Wakser',
    number: '(843) 214-9703'
}, {
    team: 'Kershaw IT',
    manager: 'Charles Arrants',
    number: ''
}, {
    team: 'MUHA Kronos, Optilink and Smartsquare',
    manager: 'Cory Sneeden',
    number: '(501) 827-0776'
}, {
    team: 'NetID Management',
    manager: 'Stewart Hulett',
    number: '(843) 323-6001'
}, {
    team: 'Network Engineering Services',
    manager: 'David Sisco',
    number: '(843) 442-2977'
}, {
    team: 'Perioperative Applications',
    manager: 'Regan Allenspach',
    number: '(843) 754-9915'
}, {
    team: 'Pharmacy Support',
    manager: 'Holly Griffin',
    number: '(843) 834-7292'
}, {
    team: 'Professional Billing Applications',
    manager: 'Dina Furey',
    number: '(843) 810-0502'
}, {
    team: 'Radiology',
    manager: 'Regan Allenspach',
    number: '(843) 754-9915'
}, {
    team: 'Research and Academic Applications',
    manager: 'James Goad',
    number: '843-792-7320'
}, {
    team: 'Security Operations',
    manager: 'Christopher Bennet',
    number: '(843) 518-7072'
}, {
    team: 'Security Technologies',
    manager: 'Stewart Hulett',
    number: '(843) 323-6001'
}, {
    team: 'ServiceNow',
    manager: 'James Goad',
    number: '843-792-7320'
}, {
    team: 'Systems Education',
    manager: 'Jared Blevins',
    number: '843-270-2642'
}, {
    team: 'Telehealth Technology Services',
    manager: 'Wendy Sosebee ',
    number: '(843) 343-4962'
}];
//AUTOCOMPLETE
function autocomplete(inp, arr) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener('input', function(e) {
        var a,
            b,
            i,
            val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) {
            return false;
        }
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement('DIV');
        a.setAttribute('id', this.id + 'autocomplete-list');
        a.setAttribute('class', 'autocomplete-items');
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
            /*check if the item starts with the same letters as the text field value:*/
            if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                /*create a DIV element for each matching element:*/
                b = document.createElement('DIV');
                /*make the matching letters bold:*/
                b.innerHTML = '<strong>' + arr[i].substr(0, val.length) + '</strong>';
                b.innerHTML += arr[i].substr(val.length);
                /*insert a input field that will hold the current array item's value:*/
                b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                /*execute a function when someone clicks on the item value (DIV element):*/
                b.addEventListener('click', function(e) {
                    /*insert the value for the autocomplete text field:*/
                    inp.value = this.getElementsByTagName('input')[0].value;
                    assignGrp = inp.value;
                    //call manager info
                    getManagerInfo(manager, assignGrp);
                    /*close the list of autocompleted values,
                    (or any other open lists of autocompleted values:*/
                    closeAllLists();
                });

                a.appendChild(b);

            }

        }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener('keydown', function(e) {
        var x = document.getElementById(this.id + 'autocomplete-list');
        if (x) x = x.getElementsByTagName('div');
        if (e.keyCode == 40) {
            /*If the arrow DOWN key is pressed,
            increase the currentFocus variable:*/
            currentFocus++;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode == 38) {
            //up
            /*If the arrow UP key is pressed,
            decrease the currentFocus variable:*/
            currentFocus--;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode == 13) {
            /*If the ENTER key is pressed, prevent the form from being submitted,*/
            e.preventDefault();
            if (currentFocus > -1) {
                /*and simulate a click on the "active" item:*/
                if (x) x[currentFocus].click();
            }
        }
    });

    function addActive(x) {
        /*a function to classify an item as "active":*/
        if (!x) return false;
        /*start by removing the "active" class on all items:*/
        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = x.length - 1;
        /*add class "autocomplete-active":*/
        x[currentFocus].classList.add('autocomplete-active');
    }

    function removeActive(x) {
        /*a function to remove the "active" class from all autocomplete items:*/
        for (var i = 0; i < x.length; i++) {
            x[i].classList.remove('autocomplete-active');
        }
    }


    function closeAllLists(elmnt) {
        /*close all autocomplete lists in the document,
        except the one passed as an argument:*/
        var x = document.getElementsByClassName('autocomplete-items');
        for (var i = 0; i < x.length; i++) {
            if (elmnt != x[i] && elmnt != inp) {
                x[i].parentNode.removeChild(x[i]);

            }
        }
    }
    /*execute a function when someone clicks in the document:*/
    document.addEventListener('click', function(e) {
        closeAllLists(e.target);
    });

};
// autocomplete(document.getElementById('team'), teams);