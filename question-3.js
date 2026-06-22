// เริ่มเขียนโค้ดตรงนี้
async function getUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        const longNames = users
        .filter(users => users.name.length > 17)
        .map(users => users.name);
        console.log(longNames);

    } catch (error) {
        console.log('Something went wrong:', error.message);
    }
}

getUsers();