---
title: 'Silvester Zwemschool'
picture: '/images/projects/logoPinkLarge.png'
description: 'Remake of the Silvester Zwemschool Wordpress Website in React / Next.JS with a headless CMS.'
shortText: "Increase pagespeed & user experience dramatically by rebuilding all informational parts of the existing wordpress website as a Single Page Application."
link: 'silvester'
type: 'Front-end'
tech: ['Next.js', 'TypeScript', 'Netlify-CMS']
images: ["/silvester-home.png","/silvester-review.png","/silvester-locaties.png","/silvester-faq.png","/silvester-search.png"]
links: {
    demoLink: "https://silvesterzwemschool.netlify.app",
}
themeColor: '#e6007d'
themeTextColor: '#eeeeee'
themeBgColor: '#404040'
---

## The Goal ##
Increase pagespeed & user experience dramatically by rebuilding all informational parts of the existing wordpress website into a Single Page Application.

### Sub Goals: ### 
- Make the SPA fully SEO friendly using SSG and other methods.
- Provide a CMS without building a full-stack app.

## Personal note ##
Before I learned how to code, my friend asked me to design a site for his business that was a true SEO booster and that would answer as many questions as possible from his large client base. 
The wordpress site we created did the trick, however performance was slow. Most pages where very long, which worked great as 'landing pages' but would hinder performance.

It was an interesting 'test' to see how much performance would improve, coming from wordpress. Rebuilding the entire app as a Next.js application, I could not be more satisfied at the result. 

Without removing any content, performance went from **20%** to **95%+** on lighthouse. So yes, you can make very long pages, and still have incredible performance. By only using a few resusable components, element count on the longest page went down from 6000 elements to < 800. 

![image](/images/projectImages/silvester/silvester-scores-before20.png)
![image](/images/projectImages/silvester/silvester-scores-after.png)

This project was my first professional experience as a developer. And oh, did i love writing code, making everything custom compared to getting headaches from wordpress plugins.
This projects truly proved to me how valuable learning to code was, even for 'small scale' projects like this one.

### Technical takeaways ###
- Recursive reading of all content for both search and static site generation.
- Custom search functionality with different layouts for the results based on the type of the result.
- Creating animated menus, page transitions and loading states with framer-motion
- Keeping performance scores maximized by dynamic rendering of components.
- Loading forms only on demand from a slow server without hurting performance
- Loading 40+ youtube videos on a single page without hurting performance
- Setting up a custom Image loader api with imgix.net
- Working with Yaml files
- Turning the app into an installable Progressive Web App


_snippets from the ReadMe file:_

## Features
- All informational pages rendered lightning fast (lighthouse performance score > 90%). 
- Mobile first design
- Headless CMS
- Static Site Generation for SEO using Automated Static Optimization.
- Live Search
- Video library for employees with teaching material
- Google Reviews from google API

## Technologies Used
- Next.JS - React extension for optimizing SEO. Conditionaly render Static pages to Search engine Crawlers.
- Netlify CMS - Headless CMS for content management
- TypeScript
- Netlify - Hosting.
- Framer motion: animation and page transitions
- GitHub. Serves as a "server" hosting the markdown files that provide the content. The user commits to the repo when updating data in the Netlify CMS.
- Markdown for storing the content.


## Project Status
Project is: _in completion_




