//btn click
const btn = document.getElementById('btn');
btn.addEventListener('click', getFormData);
//assignment group input
let assignGrp = document.getElementById('team').value;
//autocomplete for assignment team
autocomplete(document.getElementById('team'), teams);
//auto-populate Group Manager input
function getManagerInfo(array, group) {
    for (let i = 0; i < array.length; i++) {
        if (group === array[i].team) {
            document.getElementById('managerId').value = array[i].manager + ' ' + array[i].number;
        }
    }
};
//GATHER FORM DATA FOR USER
function getFormData() {
    // User Info Obj
    const user = {
        netID: document.getElementById('netID').value,
        contact: document.getElementById('contact').value,
        location: document.getElementById('location').value,
        description: document.getElementById('issue').value,
        team: document.getElementById('team').value,
        manager: document.getElementById('managerId').value
    };
    // Get priority level selection RadioButtons
    const rbs = document.querySelectorAll('input[name=radioBtn]');
    let selectedValue;
    for (const rb of rbs) {
        if (rb.checked) {
            selectedValue = rb.value;
            break;
        }
    }
    /*Get category*/
    const category = {
        cat: document.getElementById('cat').value,
        sub: document.getElementById('sub').value
    };
    //Formatting for txt file.
    const userData =
        'NetID: ' +
        user.netID +
        '\n' +
        '\n' +
        'Contact: ' +
        user.contact +
        '\n' +
        '\n' +
        'Location: ' +
        user.location +
        '\n' +
        '\n' +
        'Priority: ' +
        selectedValue +
        '\n' +
        '\n' +
        'Category: ' +
        category.cat +
        '\n' +
        '\n' +
        'Sub-Category: ' +
        category.sub +
        '\n' +
        '\n' +
        'Assignment Team: ' +
        user.team +
        '\n' +
        '\n' +
        'Group Manager Contact: ' +
        user.manager +
        '\n' +
        '\n' +
        'Full Description: ' +
        '\n' +
        user.description;
    //print date
    const today = new Date();
    //save BLOB to txt file
    const blob = new Blob([userData], { type: 'text/plain;charset=utf-8' });
    saveAs(blob, today);
    //refresh page for new form
    location.reload();
};