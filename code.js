//btn click
const btn = document.getElementById('btn');
btn.addEventListener('click', getFormData);

//autocomplete for assignment team
autocomplete(document.getElementById('team'), teams);

//GATHER FORM DATA FOR USER
function getFormData () {
	// User Info Obj
	const user = {
		netID       : document.getElementById('netID').value,
		contact     : document.getElementById('contact').value,
		location    : document.getElementById('location').value,
		description : document.getElementById('issue').value,
		team        : document.getElementById('team').value
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
		cat : document.getElementById('cat').value,
		sub : document.getElementById('sub').value
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
		'Full Description: ' +
		'\n' +
		user.description;

	//print date
	const today = new Date();

	//save BLOB to txt file
	const blob = new Blob([ userData ], { type: 'text/plain;charset=utf-8' });
	saveAs(blob, today);

	location.reload();
}
