#hubert-clone

***WHAT IT DOES***
This bot does almost nothing truly *useful*, but it does some cool things:

The command "gimme pizza" gives you a gif of a cat with spinning pizzas for eyes. It was originally just triggered on "pizza," but if there's one thing I've learned from Hubot at work, one-word triggers get annoying quick and everyone hates you for using them.


If you mention hubot and follow with bandcamp #####, it will return the most recent release for the band you enter on bandcamp. This is, at this time, contingent on you knowing the band's actual url (more details in challenges).


If you mention/dm hubot and follow with "do I need to bring lunch today?" it will respond one of three ways:
	* If it is the first Monday of the month, it will tell you that you don't need to bring lunch, as it's free lunch monday at my company
	* If it is a Monday, but not the first Monday of the month, it will tell you that you might get free lunch, as there are generally leftovers from the Monday executive meeting
	* If it is any other weekday, it will tell you you should bring lunch
	* If it's the weekend, you're told to get off slack


If you mention.dm hubot and follow with "send pizza," it will pick a random user and at-mention them with another dumb pizza gif (this time it's Adventure Time themed!).

***CHALLENGES/TECHNICAL HURDLES/THINGS I JUST COULDN'T DO***

1. Understanding how DateTime works in Javascript was a bit weird, but with some research I was able to make things happen on the lunch functionality. Any time I tried to utilize greater/less than or equal to comparators on weekdays, I ran into errors, which I've yet to figure out. In the meantime, I used equvalient less/greater than statments.

2. Bandcamp depricated its API, so there's next to no way to get a direct bandcamp link from a query sent out via hubot that I could figure out. Thus, I went the route of creating a url from user input (hence why you need to kind of know the actual url for the band, not just the band's name). For instance, a band called Oldes has the url https://oldeschicago.bandcamp.com/releases, whereas https://oldes.bandcamp.com/releases gets you nothing.

3. With regards to the above, it quickly became apparent that bands with multiple words in their name might cause an issue. I originally tried using concatenation; however, this only works with multiple strings, not a multi-word string in the same variable. I ended up finding the replace() function with the regex /\s/g,''. This allowed for spaces to be stripped from the string.