---
date: 2022-03-09
title: '23 SEO hacks for your wordpress site in 2022'
tags: ['Webdevelopment', 'SEO', 'Wordpress']
published: true
cover_image: './images/sentry.webp'
canonical_url: false
description: 'If you maintain a corporate wordpress site with a large database, you are going to need some help debugging it – in fact debugging your site can feel like a full time job without the right tools.'
---
23 Hacks for your Wordpress website in 2022

If you setup your own wordpress website, or did not buy an SEO package you need to read this guide. 

With the help of a few plugins, you can optimise your wordpress site for SEO in half a day (depending on size.) 

SEO can be majorly divided into 3 areas. 
•	on-page SEO
•	off-page SEO
•	technical SEO

In this blog post, I’ll show you how to perform out on-page and technical SEO on your WordPress website with zero coding skills. 

Using plugins
There are a multitude of plugins you can use for SEO, but I’ll go with the ones that are tried and tested for my clients web projects:
•	Yoast SEO (Free & paid)
•	RankMath (Free)
•	All in One SEO Pack (Free & paid)
For this guide, I’m going to use the SEO by YOAST plugin, as it’s the one I have had the most experience with, and it’s the most user friendly interface for small business owners to use. Let’s press on, shall we?

1. First, add an XML sitemap
A sitemap is imperative so search bots can crawl and index your site. You are seriously disadvantaging yourself by not having a sitemap installed. 

An XML sitemap displays the page structure of a website and helps search engines to easily find the content they are looking for. 

Once you install the Yoast SEO plugin, it will automatically add an XML sitemap to your WordPress website.

See the below steps to view your website’s XML sitemap on Yoast SEO plugin.

1.	Click on Yoast SEO options on the left in your WordPress dashboard
2.	Select General
3.	Select Features
4.	Find XML sitemaps option
5.	Turn it on
6.	Click on the question mark to view the sitemap (See the image below)
 
2. Add a robots.txt file
A robots.txt (case sensitive) file tells search engines how to crawl pages on your website.
Here is the basic format.
User-agent: [user-agent name]
Disallow: [URL string not to be crawled]
User-agent indicates the name of the bot. This would be Googlebot in the case of Google.
Apart from allow or disallow, crawl delays can also be mentioned in a robots.txt file. The robots.txt file should be placed in a website’s top-level directory. The TLD is your root folder, where your website files live
E.g. www.example.com/robots.txt
If your website has a page that you do not want search engines to crawl, you can block it on the robots.txt file. This is common in case of thank you pages or dedicated landing pages where you often offer a free giveaway download.

For sites not using Word press, you will need to generate a robots.txt file manually in a text editor such as VS Code.

If you are using Word press, Adding robots.txt file is taken care by Yoast SEO plugin on a WordPress site. Here is where you can find them.
 
 
 
1.	Go to Yoast SEO options on the left in your WordPress dashboard.
2.	Go to tools.
3.	Select file editor. File editor will show you a page where you can edit your robots.txt file. 
 
 
You can read more about robots.txt file here.

3. Optimize your title tags
Title tag is what you see on the top of every browser window. It normally should contain the title of the web page, and most importantly the main keyword you want to rank for. 

For example, if you want your page to rank for the keyword ‘Freelance Word press developer, it is essential that you have it in your title tag. I am using multiple location/cites in my country as well.

This is something the SEO plugin also takes care of for you, which is why it’s so popular. 

It will tell you the presence of your keyword in the title tag, its optimal length (50 characters) and will also show you a preview of how it looks in the search results.


3. Optimize the meta description
Meta description is the content below the title of the page in the search results. Just like the title tag, it is important to have the main keyword in your meta description. 
The optimal length for a meta description is now 155 – 160 characters The Yoast SEO plugin in WordPress will help you set up a meta description and optimise it with keywords. You can read the guide here https://yoast.com/meta-descriptions/. 

4.	Optimize URLs

Make your URLs less than 75 characters and place your keyword within the URL. 
Don’t use URL’s longer than 75 characters. 
For example, if your target keywords are pest control in Melbourne you would have your URL as:
www.example.com/pest-control-in-melbourne-cost

Another way to get URL ideas is to use long tail keywords and use those as URL titles. 

In WordPress, you can directly edit the slug for every page or post. Go to your permalink settings and make sure you have selected ‘post’ as the type. This is easiest to read. 



5.	Use h1 tag for the main heading

If you use a software like SEM rush you will get a list of seo errors, and one of the common ones is “there are 37 pages without a h1 title tag” (as an example.)  

Always make sure the main heading is a h1 tag. You only want one h1 tag on each page as well, let’s not confuse the bots when they crawl your page. 

A h1 tag will look like this:
<h1> Here goes the heading </h1>
In the Gutenberg, you can readily choose your heading tags. Make sure your heading element is a h1 element. 

7. Add alt tags for images
Alt tags are a must for all images and videos. 
Go to your Word press media library and add the description in the alt tags. These images will come up if someone is searching for the same title as your alt tag, which is why it’s a good seo practice. 

To really boost your SEO add your target keywords into your alt tags. For example if your target keyword is “pest-control-melbourne” you add this in your alt tag with a description of the image. 

Alt tags are so if the image does not display on your site, there is a description showing what the image is. When a search engine bot crawls your website, it picks up on the alt tag content and relates those keywords to search terms of the same value. 

8. Run your site through core web vitals
The most important speed metric is passing Core Web Vitals. Core web vitals is part of google page speed insights, and to “pass” you need a score above 90. Now as a professional web developer, I can tell you above 90 takes work to achieve, but it is next to impossible on mobile. 

That’s because devices are often using roaming internet instead of wifi connection, and the page load times are much slower.

For example, this site passes desktop but not mobile. Most developers I know go off the desktop page load time, and consider over 90 a pass. Run your site through page speed insights and see if you pass core web vitals. 

•	https://developers.google.com/speed/pagespeed/insights/

If you get a bad score don’t panic. You can click on the waterfall to see exactly what assets/delivery methods are slowing you down and work on those items to improve your speed. 




9. Convert images to webp
If you use images on your site, make sure to convert them to webp. You can do this manually through many online converters like Convertio, or you can use a plugin such as imagify if you are on Wordpress. 

If you are running your proxy through Cloudflare, and you have the pro plan go the optimize settings:

And select lossless compression:


10. Caching is a must for a php website
Word press is a PHP framework, and because of the many database requests that happen during the HTTPS process, caching is a must. 

whenever a user visits your website, the browser has to download all the files of your website from the server, after making a database connection. If your browser has to do this every time, it’s going to produce slower load times. Cache means storage, so your browser is storing the website information so it can load it faster next time. 

IF you are using cloudflare, just turn on caching. You will see how many requests are hitting cache, and how much your site is improved with caching on. 

If you have a WHM hosting environment, I would use a plugin such as:

•	Litespeed cache
•	Wp Rocket (handles CSS/JS optimization as well as caching)

Litspeed cache is an excellent and free option for a Wordpress plugin.

11. Minification of CSS/JS
The delivery of CSS and JS assets and how long that process takes greatly affects your website loading speed. 

Minifying HTML, CSS and JavaScript on your website will reduce the loading time and is a well known method of faster content delivery. 

These are my best options:

Without a plugin 
Cloudflare pro. Cloudflare handles caching, proxy servers, CSS/JS deferred assets, lazyloading of images, lossless compression, and minification all with the click of a button. 

With a plugin
With a plugin, you can select “minify” in the options tab, and the files will be minified for you. File minification reduces loading time. 
My top two plugins for handling this are:

•	Wp Rocket (paid) 
•	Autoptimize

12. Check your website is responsive
Responsiveness on devices is a must since 60% of your traffic are mobile users. This is also a core metric for google search bots, as it ties into web standard accessibility. If you are using a pre built theme like Elementor, most of the block elements should be responsive out of the box and you can toggle the mobile icon to see how it looks on mobile devices. 

However, even with these options you may not be able to completely fix everything on the page, and if that’s the case get in touch and we can fix it for you. 

13. Link to internal pages
You should always link to internal pages of your site. It means that visitors are likely to stay for longer, and this time spent on page metric is important to google bots because it gives your page credibility. 
From a business point of view, a longer time spent on site means a higher chance you will convert that person to a customer.

14. Add outbound links

Outbound links are links that point from your website to another.
They are often used within content to add more context and to link a reader to another source that will add additional and important information to the topic at hand (source) https://www.semrush.com/blog/outbound-links/
While linking out, try and use high domain authority sites to link to. If you aren’t really sure about the authority of a site, ‘rel=nofollow’ tags should be used in your outbound link. 
When you use ‘nofollow’ tags, it doesn’t pass link equity to the site you are linking out to. If you haven’t used a nofollow tag on a link, it will stay as dofollow. That means it is going to pass on link equity and impact the rankings of the target page or site. 

For a HTML website
Make sure all the links in the code and add rel=nofollow tags on to the link if you want them to be nofollow tags, and add rel=dofollow for follow tags. 

For a Wordpress website
In Wordpress when to add a link in Gutenberg,  there in an option to select the link be a no-follow link:

If you don’t toggle this button, the link will be a do follow link. 



15. Use keywords in content
In the past, people use to just cram their content full of keywords. So you would read a page and there would be just a list of keywords there so bots can crawl and rank that site for keywords. This is both tacky and unnecessary. Using practices like this can get you Panda’d by google. Don’t get Panda’d. 

https://en.wikipedia.org/wiki/Google_Panda

What you should do is appropriately inject your keywords into your content, in a way that flows naturally and doesn’t sound cheesy. Ideally you should place your keywords in the first paragraph. 

16. Write articles over 1000 words, if not 2000
I’ll be blunt about this: any SEO strategy that doesn’t include content writing is a SHAM. Yes a sham. There are plenty of SEO companies out there happy to take your money, and perform technical seo but without content that is relevant to your industry, your site will struggle to rank highly in organic listings. 

Good content draws traffic to your site, and more traffic = better SEO results. Google bots interpret higher traffic and relevant content as a credible, authority in your niche website and that is the long game to aspire to here.

17. Use keywords in your blog posts
Think about the last time you searched “ how to unblock a sink.”
After the paid ads, I bet the first result was an article with the exact title of “how to unblock a sink.” There may have been an extension to the title such as “in 2022” or “without a plumber” but you get the idea. 

The titles of your blog post matters.  You can think of blog post titles as being like email subjects: write something relevant and catchy, and most related to the search term. 


18. Use LSI keywords
LSI stands for Latent Semantic Indexing. It is a mathematical method used to determine the relationship between terms and concepts in content.
What!? 

OK let me explain it this way. Have you ever been to the bottom of googles first page and noticed a bunch of related search terms shown that you can click on? These are LSI keywords.

In the example of our how to unblock a sink search:

 These LSI keywords give us similar search terms people are looking for, and it’s a good idea to add them to your content where appropriate to boost your rankings. Do a google search for your main keyword to find the LSI keywords. 

19. Publish helpful content
Content is still king, or queen in my case. If you are consistent in publishing educational, high value content you will definitely boost your traffic. This is THE single most important thing you can do to boost traffic. It does get forgotten about, because while paid ads give you an instant boost, content marketing is like dripping a tap into a bucket- it seems futile at first but over time produces good results.  

A good place to get content ideas is to login to google search console, and go to “Queries.” This will show you the exact search terms they are using to find your website. So basing your content around these terms is  great start. 
How unique your content is, is also important. If there’s a new SEO trend and I’m the first one to post about it, I will likely get the most traffic without competition. 

The point here is, content builds authority and authority builds trust = sales. 

20. Social sharing 

Using social sharing buttons is a great way to enable readers to quickly share your content on social media. This expands your reach even further, and also increases traffic. 

On a static site
Just find the fontawesome icons you want, embed them and add the href to the social channel. 
On a Wordpress site
I use shared counts. It’s by a well respected developer in the Wordpress community and it’s easy to get up and running quickly. You can download it here https://sharedcountsplugin.com/

21. Avoid duplicate title tags

This may sound like a no brainer, but I have worked on client sites where they have multiple pages with very similar title tags. There may be one or two words that are different, but google picks up on the parts that are the same and scores you negatively for it. Its not hard to find a new page title, and there are many benefits to doing so. 

22. Update your SSL

Theres really no excuse to not have an SSL certificate in 2022, but surprisingly many businesses do not. Nothing is worse than the google warning saying that this sit is not safe to visit, because attackers may steal your information.

Would you visit that site? 

Your hosting company should provide free SSL, so log a ticket and get SSL installed today. 

 23. Promote your content on social
If you have the budget, promote your content on social media. This is a sure fire way to attract visitors to your site, and also build followers to your page. You don’t have to spend a lot, you can start with $2 a day budget in Facebook ads manager. 

So as you can see, there is a lot you can do to make sure your site increases in visibility, and ranks higher in organic search results. We are all aiming for the illustrious first page, and by conducting these practices over time, it becomes a realistic goal. 


