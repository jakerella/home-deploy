
var github = require('githubhook')({
    path: '/hooks',
    port: 8787,
    secret: process.env.GITHUB_HOOK_SECRET
});

github.listen();


github.on('push:home:refs/heads/master', function (data) {
    
    console.log('push hook on master', data);
    
});
