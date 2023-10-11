console.log('Before');

async function displayUserAndRepos() {
    const user = await getUser(1);
    const repos = await getRepositories(user.gitHubUsername);
    console.log('User:', user, 'Repositories:', repos);
}

displayUserAndRepos();

function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Reading a user from a database...');
            resolve({ id: id, gitHubUsername: 'mosh' });
        }, 2000);
    });
}

function getRepositories(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Calling GitHub API...');
            resolve(['repo1', 'repo2', 'repo3']);
        }, 2000);
    });
}
