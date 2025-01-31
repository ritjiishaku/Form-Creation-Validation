async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');
  
    try {
      const response = await fetch(apiUrl);
      const users = await response.json();
  
      dataContainer.innerHTML = ''; // Clear any previous content
  
      users.forEach(user => {
        const userDiv = document.createElement('div');
        userDiv.textContent = user.name;
        dataContainer.appendChild(userDiv);
      });
  
    } catch (error) {
      console.error('Error fetching data:', error);
      dataContainer.innerHTML = 'Error fetching user data.';
    }
  }
  
  // Call the function to fetch and display user data
  fetchUserData();

  async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');
  
    try {
      const response = await fetch(apiUrl);
      const users = await response.json();
  
      // 5. Clear the Loading Message
      dataContainer.innerHTML = ""; 
  
      // 6. Create and Append User List
      const userList = document.createElement('ul');
      users.forEach(user => {
        const listItem = document.createElement('li');
        listItem.textContent = user.name;
        userList.appendChild(listItem);
      });
      dataContainer.appendChild(userList);
  
    } catch (error) {
      // 7. Error Handling
      dataContainer.innerHTML = "Failed to load user data.";
    }
  }
  
  // 8. Invoke fetchUserData on DOMContentLoaded
  document.addEventListener('DOMContentLoaded', fetchUserData);