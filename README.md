1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

উত্তর:

এই চারটি method DOM থেকে element খুঁজে বের করার জন্য ব্যবহার করা হয়, কিন্তু তাদের কাজ করার ধরন আলাদা।

getElementById()
একটি নির্দিষ্ট ID দিয়ে একটি element খুঁজে বের করে।
কারণ HTML এ ID সাধারণত ইউনিক হয়। তাই এটি সবসময় একটি element দেয়।

getElementsByClassName()
একটি class নাম দিয়ে সব matching element দেয়।
এটি HTMLCollection return করে, যা array-এর মতো কিন্তু পুরো array না।

querySelector()
CSS selector ব্যবহার করে প্রথম matching element দেয়।
এখানে id, class, tag, attribute সব selector ব্যবহার করা যায়।

querySelectorAll()
CSS selector দিয়ে সব matching element দেয়।
এটি NodeList return করে, যা সহজে loop করা যায়।

সহজভাবে বলতে গেলে, প্রথমটা শুধু ID এর জন্য, দ্বিতীয়টা class এর জন্য, আর শেষ দুইটা flexible CSS selector দিয়ে কাজ করে।

2. How do you create and insert a new element into the DOM?

উত্তর:

DOM এ নতুন element যোগ করতে তিনটা ধাপ লাগে।

Element তৈরি করা
document.createElement() দিয়ে নতুন element বানানো হয়।

Content বা attribute দেওয়া
textContent, innerHTML, className, id ইত্যাদি দিয়ে element সাজানো হয়।

DOM এ বসানো
appendChild(), append(), prepend() ইত্যাদি method দিয়ে element page এ বসানো হয়।

এইভাবে JavaScript দিয়ে page এ নতুন button, card, list item ইত্যাদি add করা যায়।

3. What is Event Bubbling? And how does it work?

উত্তর:

Event Bubbling হলো event এর একটি behavior যেখানে event প্রথমে target element এ ঘটে, তারপর ধাপে ধাপে তার parent element গুলোতে ছড়িয়ে যায়।

মানে, কোনো child element এ click করলে parent, grandparent, body, document পর্যন্ত event পৌঁছে যেতে পারে।

এই process কে bubbling বলা হয় কারণ event নিচ থেকে উপরের দিকে bubble এর মতো ওঠে।

JavaScript এ অনেক সময় এই behavior দরকার হয়, আবার কিছু ক্ষেত্রে stopPropagation() দিয়ে বন্ধ করা হয়।

4. What is Event Delegation in JavaScript? Why is it useful?

উত্তর:

Event Delegation হলো parent element এ একটি event listener বসিয়ে তার ভিতরের child element গুলোর event handle করা।

এটি কাজ করে Event Bubbling এর মাধ্যমে। Child element এ event হলে সেটা parent এ পৌঁছে যায়, তখন parent থেকে check করে বোঝা হয় কোন child এ event হয়েছে।

এটা useful কারণ:

অনেক element থাকলেও আলাদা আলাদা event listener লাগাতে হয় না

performance ভালো হয়

নতুন dynamic element যোগ হলেও event কাজ করে

code cleaner থাকে

বড় list, table, todo app, job tracker ইত্যাদিতে এটি খুব কাজে লাগে।

5. What is the difference between preventDefault() and stopPropagation() methods?

উত্তর:

দুইটা method event control করার জন্য ব্যবহার হয়, কিন্তু কাজ আলাদা।

preventDefault()
Browser এর default কাজ বন্ধ করে।
যেমন form submit করলে page reload হওয়া বা link click করলে অন্য page এ যাওয়া বন্ধ করা।

stopPropagation()
Event bubbling বন্ধ করে।
মানে event parent element এ আর যাবে না।

সহজভাবে যদি বলি, preventDefault browser এর কাজ থামায়, stopPropagation event উপরে যাওয়া থামায়।
