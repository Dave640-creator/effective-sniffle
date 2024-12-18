

let users = [{ name: 'dave', password: 'iloveyou' }];

function showLogin() {
    document.getElementById('signupForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('homepage').style.display = 'none';
}

function showSignup() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('signupForm').style.display = 'block';
    document.getElementById('homepage').style.display = 'none';
}


document.getElementById('login').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const name = document.getElementById('loginName').value;
    const password = document.getElementById('loginPassword').value;
    
 
    const user = users.find(user => user.name === name && user.password === password);
    
    if (user) {
        showHomepage(user.name);
    } else {
        alert('Invalid credentials');
    }
});


document.getElementById('signup').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const name = document.getElementById('signupName').value;
    const password = document.getElementById('signupPassword').value;
    
    const userExists = users.some(user => user.name === name);
    
    if (userExists) {
        alert('Name already exists');
    } else {
        users.push({ name, password });
        alert('Signup successful! Please login.');
        showLogin();
    }
});

function showHomepage(userName) {
    document.getElementById('userName').innerText = `Hello, ${userName}!`;
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('signupForm').style.display = 'none';
    document.getElementById('homepage').style.display = 'block';
}

function logout() {
    document.getElementById('homepage').style.display = 'none';
    showLogin();
}

