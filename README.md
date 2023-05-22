# WordpressAutomationTesting
Here is my work on **Automating a Wordpress Website and a plugin "WP Dark Mode - by WPPOOL"**. I used Cypress and javascript to write the test suite.
A video of the testing process is available at cypress/videos folder.

**Testing Environment:**
1. I used XAMPP to create a localhost database and developed a demo testing website on my device.
2. I followed to instructions given on the wordpress.org website on how to create a localhost website.
3. I created a mySQL database and named it "mysite".
4. I installed the "WP Dark Mode" Plugin before running the test.
5. I installed a third party cypress plugin, "xpath" to use xpath locators.
https://github.com/cypress-io/cypress/tree/develop/npm/xpath 
5. I also pushed my localhost website files onto a repository. Here is the link:
https://github.com/MuntanuzZaman/WordpressWebsiteDemo

**Testing Process:**
1. I used cypress to tesst the website and the plugin.
2. The credentials for the website were stored in a separate .env file named, cypress.env.json and stored in the root folder.
3. All the main codes are available in cypress/e2e/Wppooltask.cy.js. 
4. At first the login function will be called to visit the website and acquire the credentials required from cypress.env.json to successfully login to the website.
5. Then it will go to the plugins menu and check if the WP Dark Mode plugin is installed or not. Then it will check to see if it is active.
6. Then it will navigate to General Settings and enable the Backend Darkmode.
7. Then it will navigate to the WP Dark Mode and go to the Swtich Settings tab.
8. It will change the floating switch stle.
9. It will rescale the switch size and scale it to 220.
10. It will change the location of the floating switches to Left Bottom.
11. Then it will navigate to the Accessibility Settings and disable the Keyboard Shortcuts.
12. Then it will navigate to the Animation Settingws and enagle the Dark Mode Toggle animation.
13. It will select the toggle animation from the dropdown menu.
14. After that it will validate if the Dark Mode is working by going to the website from the Visit Site tab.
15. After visiting the website an assertion will verify if the class name of the website matches the class name set by Dark Mode plugin.
