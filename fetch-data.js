// Define the async function to fetch user data
async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users'; // API URL
    const dataContainer = document.getElementById('api-data'); // Select the data container element

    try {
        // Fetch data from the API
        const response = await fetch(apiUrl);

        // Convert the response to JSON
        const users = await response.json();

        // Clear the loading message
        dataContainer.innerHTML = '';

        // Create a <ul> element to hold the list of users
        const userList = document.createElement('ul');

        // Loop through each user and create <li> elements
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name; // Set the text content to the user's name
            userList.appendChild(listItem); // Append the <li> to the <ul>
        });

        // Append the user list to the data container
        dataContainer.appendChild(userList);

    } catch (error) {
        // Handle any errors that occur during the fetch
        dataContainer.innerHTML = 'Failed to load user data.';
        console.error('Error fetching user data:', error);
    }
}

// Run fetchUserData when the DOM has fully loaded
document.addEventListener('DOMContentLoaded', fetchUserData);
