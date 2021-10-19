---
date: 2021-10-04
title: 'Create a like button in PHP and JS'
tags: ['Wordpress', 'PHP', 'social']
published: true
cover_image: ./images/likebutton.webp
canonical_url: false
description: 'This week I had a client request a modification to an existing WordPress page template which already had two post anchor identifiers to retrieve get_the_author_meta and get_the_date. It was a custom template that displays a CPT by category to a page.'
---
So I found this repository on Github by Jon Masters and decided to implement it, but modifying the custom post type template instead of the standard blog page template.

Jon gives walkthrough instructions, but since I modified it for a custom post type template I will do my own walkthrough, in case you are looking to modify a CPT template as well.

1. RUN QUERY MONITOR TO FIND THE TEMPLATE FILE YOU ARE AFTER
If you install the Query Monitor plugin, you can click on ‘templates’ to see which WordPress template file is being called in. It’s not perfect though. In this case, it showed me a template hierarchy of 5 template files, none of which contained the section I wished to modify. If this happens, then you can just dig around through the template files and if the naming convention is obvious you shouldn’t have too much trouble. In this case I was editing the header-insight.php

2. OPEN YOUR FUNCTIONS FILE AND ADD THE POST-LIKE.PHP FILE CODE
Ok, this will make your functions file enormously long, but since Jon has shared the code I am going with what he as built for us already. Of course you can refactor that code into a post-like.php template file and call it into your functions file, but let’s keep it simple and add the post-like.php into functions.php
3. CHANGE THEME NAME
In the pile of code we just added to functions.php go hit control F, and replace “YourThemeTextDomain” with your theme name. This isn’t necessary but I think it makes your code clearer to read.

4. ADD THE JAVASCRIPT FILE TO YOUR LIBRARY
Add this javascript to your theme/lib/js/simple-likes-public.js path and save.

5. REPLACE THE SVG WITH FONT AWESOME
I found the SVG file came out massive, and of course its easy to modify it with CSS, but it’s also easy to add font awesome icons in, and Jon has already commented out the instructions on how to do this. In case you would like to see it anyway: