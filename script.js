document.addEventListener('DOMContentLoaded', () => {
    const numTeamsSelect = document.getElementById('numTeams');
    const twoPlayersPerTeamToggle = document.getElementById('twoPlayersPerTeam');
    const startGameBtn = document.getElementById('startGameBtn');

    startGameBtn.addEventListener('click', () => {
        const numTeams = numTeamsSelect.value;
        const twoPlayers = twoPlayersPerTeamToggle.checked;

        // Store settings in localStorage to pass to the next page
        localStorage.setItem('gameSettings', JSON.stringify({
            teams: parseInt(numTeams),
            twoPlayersPerTeam: twoPlayers
        }));

        // Navigate to the scoreboard page
        window.location.href = 'scoreboard.html';
    });
});
