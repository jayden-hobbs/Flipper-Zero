const fetch = require('node-fetch');

module.exports = async (req, res) => {
  try {
    // Replace with your repo details
    const response = await fetch(
      'https://api.github.com/repos/jayden-hobbs/Flipper-Zero/commits?per_page=1'
    );

    const commitCount = await response.headers.get('X-Total-Count');
    
    // If commit count is not available, fallback to "N/A"
    const count = commitCount ? commitCount : 'N/A';

    // Send the badge JSON response
    res.json({
      schemaVersion: 1,
      label: 'Total Commits',
      message: count.toString(),
      color: 'brightgreen',
      logo: 'git',
      logoColor: 'white',
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching commit data');
  }
};
