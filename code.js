const btn = document.getElementById('btn');
btn.addEventListener('click', getFormData);
//GATHER FORM DATA FOR USER

function getFormData() {
    // User Info Obj
    const user = {
        netID: document.getElementById('netID').value,
        contact: document.getElementById('contact').value,
        location: document.getElementById('location').value,
        description: document.getElementById('issue').value,
        team: document.getElementById('team').value
    };

    // Get priority level
    const rbs = document.querySelectorAll('input[name=radioBtn]');
    let selectedValue;
    for (const rb of rbs) {
        if (rb.checked) {
            selectedValue = rb.value;
            break;
        }
    }
    // alert(selectedValue); /*test priority*/

    /*Get category*/
    const category = {
        cat: document.getElementById('cat').value,
        sub: document.getElementById('sub').value
    };
    // alert(category.sub);

    var blob = new Blob([user.netID], { type: 'text/plain;charset=utf-8' });
    saveAs(blob, 'hello world.txt');
}