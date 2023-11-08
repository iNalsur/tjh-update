# TJH Puunkaato ja metsänhoitopalvelut Company Website (UPDATE)

<h2>Introduction</h2>

This is update for my first project that I did for my entrepreneur friend. The idea behind the update was to make the site more interactive using JavaScript and to use the new skills I have learned.

To view the site, click on the logo or click on this link.

<h2>Tools</h2>

While working, I used the MacOs system, wrote code in the Visual Studio Code program. The programming languages HTML, CSS and JavaScript were used in this project. For processing photos and pictures I used Photshop program. In this project, I used the Bash console, in it I used Git to make commits, Node.js to check the work of JavaScript codes, and also to publish the site on GitHub. And used Google Chrome Dev Tools, to test the site's performance.

<h2>Process</h2>

At the very beginning, before I started working to add interactivity, I made adjustments to the style, removing the table of contents, removing icons, as well as the social media section. Also small adjustments like changing colors and positions.

After that, I started working with buttons and links, since in the previous version there were problems, when user hovered over a button or link, the content around it also moved, which did not look very professional. There was also a problem, when user clicked on a button or link, the styles changed and remained in this form until you reloaded the page. All problems were resolved during the update.

After that I started writing scripts for interactivity

JS Script | Element-swap

<a href="https://github.com/iNalsur/element-swap">About</a> | <a href="https://inalsur.github.io/element-swap/">Script</a>

A script that changes one element to another element within 10 seconds, the switching occurs smoothly within 2 seconds. This code used the idea of having one element on top of a second element, which could be achieved by using display: grid and adding grid-row: 1 and grid-column: 1 to both elements.

I used this script for bookTimeSection in the mobile version, every 10 seconds the companyShortDescription class changes to the companyLargeDescription class

JS Script | Slideshow

<a href="https://github.com/iNalsur/slideshow/">About</a> | <a href="https://inalsur.github.io/slideshow/">Script</a>

A script that makes slides from elements. This code uses 4 Divs, 4 Headers, 4 Text Lines, and 4 Dot Triggers. Using triggers you can switch between 4 slides. Also added to the code a timer that swaps through the slides every 10 seconds. Has also been added a script that changes slides using swipe to left or right with finger on the mobile version. When manually switching a slide by pressing the trigger or swiping with your finger, the timer resets for 10 seconds. After the last slide, the script returns the slide to the first and swapping continues.

This script I used for a jobSection, desktop version is left/right and mobile version top/bottom

JS Script | Scrolling-page

<a href="https://github.com/iNalsur/scrolling-page/">About</a> | <a href="https://inalsur.github.io/scrolling-page/">Script</a>

A script that has a button that, when pressed, starts scrolling the page until a certain element appears in visibility, the scrolling stops when the element is fully visible.

I used this script for buttons that go to contactSection

JS Script | Emerging-element

<a href="https://github.com/iNalsur/emerging-element/">About</a> | <a href="https://inalsur.github.io/emerging-element/">Script</a>

A script that, while scrolling the page when it notices a certain ID, uses Opacity for 2 seconds to make the element smoothly visible, and also when scrolling the page, when a certain ID disappears from the view, using Opacity for 2 seconds makes the element smoothly invisible.

I used this script for contactSection and bookTimeSection

<h2>Outcome</h2>

The site owner and I were very satisfied. After the update, the site is more lively and more practical.

To compare, here is <a href="https://inalsur.github.io/tjh.github.io/">website</a> before update, and here is <a href="https://tjhmetsuri.fi/">website</a> after update.
