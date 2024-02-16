
document.getElementById('signupForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('signupEmail').value;
    var password = document.getElementById('signupPassword').value;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{7,}$/;
    var isEmailValid = emailRegex.test(email);
    var isPasswordValid = passwordRegex.test(password);

    document.getElementById('signupEmail').classList.toggle('is-invalid', !isEmailValid);
    document.getElementById('signupPassword').classList.toggle('is-invalid', !isPasswordValid);

    if (isEmailValid && isPasswordValid) {
        const formData = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        };

        try {
            const response = await fetch('http://localhost:3001/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.status === 201) {
                alert('User registered successfully');
            } else if (response.status === 400) {
                alert('User already exists');
            } else {
                throw new Error('Registration failed');
            }
        } catch (error) {
            console.error(error);
            alert('An error occurred while registering');
        }
    }
});


document.getElementById('signupEmail').addEventListener('input', function() {
    var email = document.getElementById('signupEmail').value;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    document.getElementById('signupEmail').classList.toggle('is-invalid', !emailRegex.test(email));
});

document.getElementById('signupPassword').addEventListener('input', function() {
    var password = document.getElementById('signupPassword').value;
    var passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{7,}$/;
    document.getElementById('signupPassword').classList.toggle('is-invalid', !passwordRegex.test(password));
});

document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault();
  
    const email = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    try {
      const response = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });
  
      if (response.ok) {
        const { token } = await response.json();
        localStorage.setItem('token', token);
        alert('Login successful');
      } else {
        throw new Error('Failed to login');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('An error occurred during login');
    }
  });
  
