document.addEventListener("DOMContentLoaded", function () {
    const profileContainer = document.getElementById("profileContainer");
    const leaderboardContainer = document.getElementById("leaderboardContainer");

    // Fetch user information from the server (replace with actual API call)
    const user = {
        name: "John Doe",
        email: "john@example.com",
        phone: "123-456-7890"
    };


    // start test 
    function startTest() {
        window.location.href = '/test';
    }
    
    // Display user profile
    profileContainer.innerHTML = `
        <h2>Welcome, ${user.name}!</h2>
        <p>Email: ${user.email}</p>
        <p>Phone: ${user.phone}</p>
    `;

    // Fetch leaderboard data from the server (replace with actual API call)
    const leaderboardData = [
        { name: "Player1", score: 150 },
        { name: "Player2", score: 120 },
        { name: "Player3", score: 100 },
        // Add more players as needed
    ];

    // Display leaderboard
    leaderboardContainer.innerHTML = `
        <h2>Leaderboard</h2>
        <ul>
            ${leaderboardData.map(player => `<li>${player.name} - ${player.score}</li>`).join('')}
        </ul>
    `;
});
