Skip to content
 
Search…
All gists
Back to GitHub
@maayanmx 
@nichtich
nichtich/README.md
Forked from oodavid/README.md
Last active 2 days ago • Report abuse
193
60
 Code
 Revisions 16
 Stars 193
 Forks 60
<script src="https://gist.github.com/nichtich/5290675.js"></script>
How to automatically deploy from GitHub
README.md
Deploy your site with git
This gist assumes:

you have an online remote repository (github / bitbucket etc.)
you have a local git repo
and a cloud server (Rackspace cloud / Amazon EC2 etc)
your (PHP) scripts are served from /var/www/html/
your webpages are executed by Apache
the Apache user is named www-data (may be apache on other systems)
apache's home directory is /var/www/
1 - On your local machine
Here we add the deployment script and push it to the origin, the deployment script runs git commands to PULL from the origin thus updating your server

Grab a deployment script for your site
See deploy.php

Add, commit and push this to github
git add deploy.php
git commit -m 'Added the git deployment script'
git push -u origin master
2 - On your server
Here we install and setup git on the server, we also create an SSH key so the server can talk to the origin without using passwords etc

Install git...
After you've installed git, make sure it's a relatively new version - old scripts quickly become problematic as github / bitbucket / whatever will have the latests and greatest, if you don't have a recent version you'll need to figure out how to upgrade it :-)

git --version
Setup git (optionally)
git config --global user.name "Server"
git config --global user.email "server@server.com"
Create an ssh directory for the apache user
sudo mkdir /var/www/.ssh
sudo chown -R apache:apache /var/www/.ssh/
Generate a deploy key for apache user
sudo -Hu apache ssh-keygen -t rsa # choose "no passphrase"
sudo cat /var/www/.ssh/id_rsa.pub
3 - On your origin (github)
Here we add the SSH key to the origin to allow your server to talk without passwords. In the case of GitHub we also setup a post-receive hook which will automatically call the deploy URL thus triggering a PULL request from the server to the origin

GitHub instructions
Add the SSH key to your user
https://github.com/settings/ssh
Create a new key
Paste the deploy key you generated on the server
Set up service hook
https://github.com/oodavid/server.com/admin/hooks
Select the Post-Receive URL service hook
Enter the URL to your deployment script - http://server.com/deploy.php
Click Update Settings
Bitbucket instructions
Add the SSH key to your account
https://bitbucket.org/account/ssh-keys/
Create a new key
Paste the deploy key you generated on the server
Set up service hook
Go to: Repo > Admin > Services
Select "POST"
Add the URL to your deployment script - http://server.com/deploy.php
Save
4 - On the Server
Here we clone the origin repo into a chmodded /var/www/html folder

Pull from origin
sudo chown -R www-data:www-data /var/www/html
sudo -Hu www-data git clone git@github.com:you/server.git /var/www/html
Rejoice!
Now you're ready to go :-)

Some notes
Navigate the the deployment script to trigger a pull and see the output:
http://server.com/deploy.php
this is useful for debugging too ;-)
When you push to GitHub your site will automatically ping the above url (and pull your code)
When you push to Bitbucket you will need to manually ping the above url
Sources
https://gist.github.com/1809044 who in turn referenced
Build auto-deploy with php and git(hub) on an EC2 Amazon AMI instance - who in turn referenced:
ec2-webapp / INSTALL.md
How to deploy your code from GitHub automatically
deploy.php
<?php

// Forked from https://gist.github.com/1809044
// Available from https://gist.github.com/nichtich/5290675#file-deploy-php

$TITLE   = 'Git Deployment Hamster';
$VERSION = '0.11';

echo <<<EOT
<!DOCTYPE HTML>
<html lang="en-US">
<head>
	<meta charset="UTF-8">
	<title>$TITLE</title>
</head>
<body style="background-color: #000000; color: #FFFFFF; font-weight: bold; padding: 0 10px;">
<pre>
  o-o    $TITLE
 /\\"/\   v$VERSION
(`=*=') 
 ^---^`-.
EOT;

// Check whether client is allowed to trigger an update

$allowed_ips = array(
	'207.97.227.', '50.57.128.', '108.171.174.', '50.57.231.', '204.232.175.', '192.30.252.', // GitHub
	'195.37.139.','193.174.' // VZG
);
$allowed = false;

$headers = apache_request_headers();

if (@$headers["X-Forwarded-For"]) {
    $ips = explode(",",$headers["X-Forwarded-For"]);
    $ip  = $ips[0];
} else {
    $ip = $_SERVER['REMOTE_ADDR'];
}

foreach ($allowed_ips as $allow) {
    if (stripos($ip, $allow) !== false) {
        $allowed = true;
        break;
    }
}

if (!$allowed) {
	header('HTTP/1.1 403 Forbidden');
 	echo "<span style=\"color: #ff0000\">Sorry, no hamster - better convince your parents!</span>\n";
    echo "</pre>\n</body>\n</html>";
    exit;
}

flush();

// Actually run the update

$commands = array(
	'echo $PWD',
	'whoami',
	'git pull',
	'git status',
	'git submodule sync',
	'git submodule update',
	'git submodule status',
    'test -e /usr/share/update-notifier/notify-reboot-required && echo "system restart required"',
);

$output = "\n";

$log = "####### ".date('Y-m-d H:i:s'). " #######\n";

foreach($commands AS $command){
    // Run it
    $tmp = shell_exec("$command 2>&1");
    // Output
    $output .= "<span style=\"color: #6BE234;\">\$</span> <span style=\"color: #729FCF;\">{$command}\n</span>";
    $output .= htmlentities(trim($tmp)) . "\n";

    $log  .= "\$ $command\n".trim($tmp)."\n";
}

$log .= "\n";

file_put_contents ('deploy-log.txt',$log,FILE_APPEND);

echo $output; 

?>
</pre>
</body>
</html>
@scriptburn
scriptburn commented on Jun 30, 2017
well you can also use https://github.com/scriptburn/git-auto-deploy

@zaak
zaak commented on Sep 18, 2017
Please note that X-Forwarded-For header can be spoofed. https://gist.github.com/nichtich/5290675#file-deploy-php-L37

@adnanh
adnanh commented on Sep 24, 2017
Here's another approach https://medium.com/hookdoo/automatic-deployment-on-push-to-github-repository-74190c87eee4

@MortyDice
MortyDice commented on Nov 19, 2017 • 
I managed to follow nearly all the instructions, but I'm stuck when launching the deploy.php script to debug.

`echo $PWD
/var/www/html
$ whoami
www-data
$ git config -l
core.repositoryformatversion=0
core.filemode=true
core.bare=false
core.logallrefupdates=true
remote.origin.url=http://mygogsaddress:3000/mycompany/myproject
remote.origin.fetch=+refs/heads/:refs/remotes/origin/
branch.master.remote=origin
branch.master.merge=refs/heads/master
credential.helper=store
credential.user=webserver
$ git pull -v
fatal: unable to set up default path; use --file
fatal: could not read Username for 'http://mygogsaddress:3000': No such device or address
$ git status
On branch master
Your branch is up-to-date with 'origin/master'.
Changes not staged for commit:
(use "git add ..." to update what will be committed)
(use "git checkout -- ..." to discard changes in working directory)

modified:   .gitignore
modified:   deploy.php
Untracked files:
(use "git add ..." to include in what will be committed)

deploy-log.txt
no changes added to commit (use "git add" and/or "git commit -a")
$ git submodule sync

$ git submodule update

$ git submodule status

$ test -e /usr/share/update-notifier/notify-reboot-required && echo "system restart required"`

What I don't understand is that "sudo -Hu www-data git pull" works flawlessly.

@nirbd
nirbd commented on Aug 12, 2019
Hi,
Thanks for this great script. However it doesnt seem to work for elastic cluster when the number of similar servers change.
What is the best practice in this case?

@maghasemzadeh
maghasemzadeh commented on Jun 5, 2020
Hi
Thanks.
this URL is out of date:
https://github.com/oodavid/server.com/settings/hooks

@Matancy
Matancy commented on Jun 7, 2020
Hello @oodavid,
I'm using this tutorial in 2020, but i saw that the ips allowed changed at github level.

Can you update with new ip adress ?
And can you specify (for 3 - Set Up service Hook) wich content type we need to use, it's a little bit confuse.

Thank !

@maghasemzadeh --> The url is with oodavid username.
Use by replacing the var : https://github.com/USERNAME/REPO/settings/hooks
Or go to your repo settings --> Webhooks

@diegolpedro
diegolpedro commented on Jun 7, 2020
Hello @oodavid,
I'm using this tutorial in 2020, but i saw that the ips allowed changed at github level.

Can you update with new ip adress ?
And can you specify (for 3 - Set Up service Hook) wich content type we need to use, it's a little bit confuse.

Thank !

@maghasemzadeh --> The url is with oodavid username.
Use by replacing the var : https://github.com/USERNAME/REPO/settings/hooks
Or go to your repo settings --> Webhooks

Hello @Matancy, I am using this tutorial too, could you bypass this issue or you get stuck? Thanks

@Matancy
Matancy commented on Jun 7, 2020 • 
Hello @diegolpedro
With multiple try, i found that the new Github IP is 140.82.115.XX
You can juste add on the array ($allowed_ips) => "140.82.115."

I hope it will works for you !

@SoftCreatR
SoftCreatR commented on Aug 16, 2020
There's no need to check the ip address. The official way of securing your script is to use the "secret" option and validate the received HTTP_X_HUB_SIGNATURE header against.

@davecph
davecph commented on Nov 1, 2020
After four hours I have yet to reach the "rejoice" :(

When i run: "sudo -Hu www-data git clone git@github.com:davecph/klatvaerk_site_root.git /var/www/html/wwwklatvaerk" all I get is git@github.com: Permission denied (publickey).
fatal: Could not read from remote repository.

As far as I can see, github has the right keys (and yes the repo path is right). I have cleared, added and created and tried several times, but to no avail. They are made for the user www-data. I then tried to make a pull from ther server - which works fine and moves the repo, but then the hook never "catches" - though I can see that it reaches the deploy script (after I added the IP - Thanks @Matancy).
When I make changes in my local code, it shows up fine in github, but never reaches the server.

I get this response when I check the response from the webhook:

<span style="color: #6BE234;">$</span> <span style="color: #729FCF;">echo $PWD
</span>/var/www/html/wwwklatvaerk
<span style="color: #6BE234;">$</span> <span style="color: #729FCF;">whoami
</span>www-data
<span style="color: #6BE234;">$</span> <span style="color: #729FCF;">git pull
</span>error: cannot open .git/FETCH_HEAD: Permission denied
<span style="color: #6BE234;">$</span> <span style="color: #729FCF;">git status
</span>On branch master
nothing to commit, working tree clean
<span style="color: #6BE234;">$</span> <span style="color: #729FCF;">git submodule sync
</span>
<span style="color: #6BE234;">$</span> <span style="color: #729FCF;">git submodule update
</span>
<span style="color: #6BE234;">$</span> <span style="color: #729FCF;">git submodule status
</span>
<span style="color: #6BE234;">$</span> <span style="color: #729FCF;">test -e /usr/share/update-notifier/notify-reboot-required && echo "system restart required"
</span>
Please advice - getting more than a tad frustrated

All the best

Dave from Copenhagen

@ftvandoo
ftvandoo commented on Dec 2, 2020
why did you write if (!$allowed) if it $allowed was ture then it will be false and there for
Sorry, no hamster - better convince your parents!<

@javiergloria
javiergloria commented on Jan 3
After four hours I have yet to reach the "rejoice" :(

When i run: "sudo -Hu www-data git clone git@github.com:davecph/klatvaerk_site_root.git /var/www/html/wwwklatvaerk" all I get is git@github.com: Permission denied (publickey).
fatal: Could not read from remote repository.

As far as I can see, github has the right keys (and yes the repo path is right). I have cleared, added and created and tried several times, but to no avail. They are made for the user www-data. I then tried to make a pull from ther server - which works fine and moves the repo, but then the hook never "catches" - though I can see that it reaches the deploy script (after I added the IP - Thanks @Matancy).
When I make changes in my local code, it shows up fine in github, but never reaches the server.

I get this response when I check the response from the webhook:

<span style="color: #6BE234;">$</span> <span style="color: #729FCF;">echo $PWD
</span>/var/www/html/wwwklatvaerk
<span style="color: #6BE234;">$</span> <span style="color: #729FCF;">whoami
</span>www-data
<span style="color: #6BE234;">$</span> <span style="color: #729FCF;">git pull
</span>error: cannot open .git/FETCH_HEAD: Permission denied
<span style="color: #6BE234;">$</span> <span style="color: #729FCF;">git status
</span>On branch master
nothing to commit, working tree clean
<span style="color: #6BE234;">$</span> <span style="color: #729FCF;">git submodule sync
</span>
<span style="color: #6BE234;">$</span> <span style="color: #729FCF;">git submodule update
</span>
<span style="color: #6BE234;">$</span> <span style="color: #729FCF;">git submodule status
</span>
<span style="color: #6BE234;">$</span> <span style="color: #729FCF;">test -e /usr/share/update-notifier/notify-reboot-required && echo "system restart required"
</span>
Please advice - getting more than a tad frustrated

All the best

Dave from Copenhagen

have you checked the user and group is the correct one? I was having the same issue and I checked all the files had the right user and group and worked

@javiergloria
javiergloria commented on Jan 4
There's no need to check the ip address. The official way of securing your script is to use the "secret" option and validate the received HTTP_X_HUB_SIGNATURE header against.

I followed SoftCreatR advice and it is much better already changed the script and will submit it for your review

@mnofresno
mnofresno commented on May 26 • 
@nichtich your script is awesome, thanks. I've re-written it as an object-oriented project, also stateless like yours. Which I think its better because there are some projects that use a DB.

https://github.com/mnofresno/github-autodeploy

@gradosevic
gradosevic commented on May 27
You also need to check if you can log in to Git via SSH after that:

ssh -T git@github.com
You should get something like:

Hi user! You've successfully authenticated, but GitHub does not provide shell access.

Also make sure that your origin does not start with "https" but with "git@github.com" instead. Type in this command to check:

git remote -v
If it starts with "origin https://..", please run something like this:

git remote set-url origin git@github.com:<username>/<repo>.git
"git remote -v" should now show "origin git@github.com:/.git" and you should be able to run "git pull" without password

@maayanmx
 
Leave a comment
No file chosen
Attach files by dragging & dropping, selecting or pasting them.
© 2021 GitHub, Inc.
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
