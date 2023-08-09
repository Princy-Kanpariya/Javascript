    function validateForm() {
        var firstName = document.forms["registrationForm"]["first_name"].value;
        var lastName = document.forms["registrationForm"]["last_name"].value;
        var phoneNumber = document.forms["registrationForm"]["phone_number"].value;
        var email = document.forms["registrationForm"]["email"].value;
        var date = document.forms["registrationForm"]["date"].value;
        var gender = document.forms["registrationForm"]["gender"].value;
        var password = document.forms["registrationForm"]["password"].value;

        // Validate first name
        if (!/^[A-Za-z]+$/.test(firstName)) {
            alert("First name must contain only alphabets");
            return false;
        }

        // Validate last name
        if (!/^[A-Za-z]+$/.test(lastName)) {
            alert("Last name must contain only alphabets");
            return false;
        }

        // Validate phone number
        if ("^(?:\d{10})$".test(phoneNumber)) {
                alert("Phone number must be a 10-digit number");
                return false;
            }

        // Validate email
        if (email === "") {
            alert("Email must be filled out");
            return false;
        }

        // Validate date
        if (date === "") {
            alert("Date must be filled out");
            return false;
        }

        // Validate gender
        if (gender === "") {
            alert("Gender must be selected");
            return false;
        }

        // Validate password
        if (password === "") {
            alert("Password must be filled out");
            return false;
        }

        return true;
    }

      // Retrieve form data and display in the table
      document.forms["registrationForm"].addEventListener("submit", function (e) {
        e.preventDefault();
        var formData = new FormData(this);
        var userData = {};

        for (var pair of formData.entries()) {
            var key = pair[0];
            var value = pair[1];

            // Use ternary operator to assign male/female values
            if (key === 'gender') {
                userData[key] = value === 'male' ? 'Male' : 'Female';
            } else if (key === 'first_name') {
                userData['name'] = value + ' ' + document.getElementById('last_name').value;
            } else {
                userData[key] = value;
            }
        }

        var table = document.getElementById("userData");
        var row = table.insertRow(-1);
        var keys = ['name', 'phone_number', 'email', 'date', 'gender', 'password'];

        keys.forEach(function (key) {
            var cell = row.insertCell();
            cell.innerHTML = userData[key] || '-';
        });

        // Reset the form
        this.reset();
    });