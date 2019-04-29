# Thoughts
An app that allows to create, edit and delete your thoughts wherever you are.

# Current Features
* Login and Signup
* Add thoughts
* View thoughts
* Edit and remove thoughts

# Screenshots
Signup - http://prntscr.com/ni7vso
Login - http://prntscr.com/ni7vp9
Thoughts List - http://prntscr.com/ni7ve3
Add Thought - http://prntscr.com/ni7uln
Edit/Remove Thought - http://prntscr.com/ni7vj1

# How to Run in Dev

1. Run and create MySQL structure

```
CREATE TABLE `thoughts` (
  `id` int(11) NOT NULL,
  `title` varchar(55) NOT NULL,
  `content` text NOT NULL,
  `date` varchar(55) NOT NULL,
  `lastUpdated` varchar(55) NOT NULL,
  `userId` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(55) NOT NULL,
  `hash` varchar(255) NOT NULL,
  `signedUpDate` varchar(55) NOT NULL,
  `lastAuth` varchar(55) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
```

2. Add server folder in a directory running PHP
3. Change API URL in the store modules
4. Run client:

```
npm run serve
```

# Languages Used
* English
* JavaScript
    * Vue
* PHP
* HTML5
* CSS3

# Coming Soon
* Improved error handling
* Launched demo