---
title: How I've set up a password manager, and why you should too
redirect_from: /posts/password-manager/
category:
    - Personal
excerpt: One password to rule them all, one password to find them, one password to bring them all and in the darkness bind them.
syndicate_to:
    - mastodon
---

## The need for password managers

Humans are extremely predictable. For example, when asked for a random number, a [study](https://doi.org/10.1037/0096-1523.2.2.291) showed that most people will choose seven. If you take a look at [Wikipedia's compilation of most commonly used passwords](https://en.wikipedia.org/wiki/List_of_the_most_common_passwords), the top contenders are pitifully predictable. Passwords like "123456", "iloveyou", "qwerty", and yes, even "password" are still common in the year 2025. We are understandably tired, and no one wants to remember a million passwords for a million applications.

More and more sites and applications are aware of this issue. We've seen a huge rise in sites using [OAuth](https://oauth.net/2/), where sites can delegate authorization to an authority like Google or GitHub, allowing third parties to verify identity without seeing the password. These are great, but they leave the responsibility for your credentials tied to a specific authority. While there is a push for federating the OAuth authority to one's own domain with [IndieAuth](https://indieweb.org/IndieAuth), this practice is not yet widespread, though I am interested in looking more into it.

Another solution is using a password manager, where you access a database containing all your passwords using one strong master password. Many people should be used to the password managers that come built in to smartphones. These are convenient, but not very portable to multiple devices, especially outside of the corporate ecosystem containing the manager (cough, cough Apple passwords).

Web-based password managers like NordPass and LastPass offer a temptingly convenient solution, but these password managers also place trust in a corporate entity's security practices, potentially for a fee. While handy, [multiple security incidents at LastPass](https://www.forbes.com/sites/daveywinder/2023/03/03/why-you-should-stop-using-lastpass-after-new-hack-method-update/?sh=79b0f4bd28fc) encouraged me to find a better solution.

## My solution with KeePassXC

I use [KeePassXC](https://keepassxc.org/) to manage my passwords. You create a database, choose a strong master password to memorize, and you can store all of your passwords in an encrypted database. I chose KeePassXC so I can access my database from a similar client on macOS, Windows, and Linux. And, it's available as free software (as in price and as in freedom)! There are many tutorials available online that are much more thorough, so I won't cover details here, but I will provide an overview of what I've found works for me.

KeePassXC can generate extremely strong and long passwords (even including extended ASCII symbols that no sane person would type into a password box). You won't need to remember the password, just the master password for the database!

KeePassXC can also integrate into your browser. There is an extension for Firefox and Chrome (and Edge) that will integrate the passwords automatically into password fields on web pages. I've hooked it up to the fingerprint reader on my laptop so I can open the database with my fingerprint. You can use a key file or hardware key if you are feeling the need to be particularly secure.

In order to have my database available across multiple devices, I store the encrypted database on Google Drive, though I'm in the process of looking for a different place to store my files on the cloud. I can even set it up on my iPhone using Keepassium, though notably this app is not free software, and free users are limited to a single database. A tip if you use this method: make sure to check the "Use alternative saving method" and "Directly write to database file" on your KeePassXC settings if you are syncing through Google Drive. Otherwise, I found Keepassium doesn't update to the newest version of the database and points to the recently deleted version.

One warning is that you **must** remember your master password. If you forget the master password, the database is completely irretrievable. If there were another way to get the database unlocked, it wouldn't be very secure! 

I hope you consider using a password manager!
