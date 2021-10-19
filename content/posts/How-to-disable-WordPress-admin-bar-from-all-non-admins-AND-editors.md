---
date: 2021-09-03
title: 'How to disable WordPress admin bar from all non admins AND editors'
tags: ['Wordpress', 'PHP']
published: true
canonical_url: false
cover_image: ./images/toolbar.png
description: 'I was working on a client project where they wanted the WordPress admin bar hidden from all non admins- and editors.'
---
How to disable WordPress admin bar from all non admins AND editors
posted on SEPTEMBER 3, 2021


I was working on a client project where they wanted the WordPress admin bar hidden from all non admins- and editors.

And I found this guide which explains nicely how to edit your functions.php file to hide the admin bar except all non admins: but what if you want to also include another group, say contributors on in this use case – editors?

I’m going to share my gist on how I edited my functions.php file to also hide editors as well as administrators, which works well for this client. As a developer, I always try to build functionality into the site instead of installing plugins, but for good measure I have included two non technical ways to do this, for those out there not comfortable editing their websites functions file. If that is you- pick option 1 or 2, as direct edits to the functions file can cause your site to crash if you make any mistakes and you will have to SFTP into the site to fix the changes you made.

Hide the WordPress admin bar manually
The first and easiest way you can hide the admin bar is to go into users, select a user profile and select the box that says hide the toolbar. For reference, you can 
[Check out the Gist on Github](https://gist.github.com/genesis16/4c13c5115d3d9eed6ddaa182f0bd4273.js")

Let’s walk through this. First, we declare a function to disable admin bars. Next we have an IF statement saying if users are administrators, then show the admin bar. Knowing how the PHP language works, I decided to try and use the || operator to add editors as well. Adding in the logical operator of ||, means that the below statement says “IF current user can administrator or editor, then show the wordpress admin bar with a boolean of true. Else, show admin bar with a boolean of false.

Of course, if you anted to select contributor or another role, you can just add in the same title and they will also be exempt from the hidden admin bar.

Jane James is a WordPress web developer based in Melbourne, Australia but also services clients from Sydney, Brisbane, Newcastle, Perth, Adelaide, Darwin and Hobart.