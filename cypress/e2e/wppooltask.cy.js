

describe('wppool', () => {
  it('scenario', () => {
    cy.visit('http://localhost/mysite/wp-admin/').wait(2000);

    //Logs in to the website using credentials from cypress.env.json
    const { username, password } = Cypress.env('loginTestStage').admin;             
        cy.get('#user_login').type(username);
        cy.get('#user_pass').type(password);
        cy.get('#wp-submit').click();

        
        //ignores the activated dark mode assertion being a default error
        Cypress.on('uncaught:exception', (err, runnable) => {                       
          return false
      })

        cy.title().should('eq', 'Dashboard ‹ winlocal — WordPress');

        //navigates to WP Dark Mode Plugin
        cy.get('#menu-plugins > .wp-has-submenu > .wp-menu-name').click();          
       
        cy.get("a[href='plugins.php?plugin_status=active']").click().wait(1000);
        
        //Checks whether the “WP Dark Mode” Plugin is Active or not.
        cy.get("#bulk-action-form").should('contain', 'WP Dark Mode').wait(1000);                


        cy.get('#toplevel_page_wp-dark-mode-settings > .wp-has-submenu > .wp-menu-name').click().wait(1000);
        cy.get("a[id='wp_dark_mode_general-tab'] span").click().wait(1000);

             
         //Enables Backend Darkmode  
        cy.get("label[for='wppool-wp_dark_mode_general[enable_backend]'] div[class='wp-dark-mode-ignore']").click().wait(1000);     
        cy.xpath("//div[@id='wp_dark_mode_general']//form[@method='post']//div//input[@id='save_settings']").click({force: true}).wait(1000);

        //Validates Darkmode is working
        cy.xpath("//div[normalize-space()='Dashboard']").click().wait(1000);
        cy.get("html").should('contain.class','wp-toolbar wp-dark-mode-active').wait(1000);            

        //navigates to WP dark plugin
        cy.xpath("//div[normalize-space()='WP Dark Mode']").click().wait(1000);                       

        cy.get("a[id='wp_dark_mode_switch-tab'] span").click().wait(1000);

        //chooses new switch icon style
        cy.get("label[for='wppool-wp_dark_mode_switch[switch_style][2]'] img[class='image-choose-img']").click().wait(1000);   

        cy.xpath("//div[@id='wp_dark_mode_switch']//form[@method='post']//div//input[@id='save_settings']").click({force: true}).wait(1000);

        
        cy.xpath("//span[normalize-space()='Custom']").click().wait(1000);

         //changes the scale to 220 by invoking attribute
        cy.get(".wppool-slider.ui-slider.ui-corner-all.ui-slider-horizontal.ui-widget.ui-widget-content[data-min='20']")
        .invoke("attr", "style", "left: 71.4286%;").trigger('change').wait(1000);                                       
        

        cy.xpath("//div[@id='wp_dark_mode_switch']//form[@method='post']//div//input[@id='save_settings']").click({force: true}).wait(1000);

        
        //selects left bottom option 
        cy.get("body > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(3) > div:nth-child(4) > div:nth-child(4) > form:nth-child(1) > table:nth-child(6) > tbody:nth-child(1) > tr:nth-child(5) > td:nth-child(2) > select:nth-child(1)")
        .select('left_bottom', {force: true}).wait(1000);

        cy.xpath("//div[@id='wp_dark_mode_switch']//form[@method='post']//div//input[@id='save_settings']").click({force: true}).wait(1000);

        cy.get("a[id='wp_dark_mode_accessibility-tab'] span").click().wait(1000);

        //Disables Keyboard Shortcut
        cy.get("label[for='wppool-wp_dark_mode_accessibility[keyboard_shortcut]'] div[class='wp-dark-mode-ignore']").click().wait(1000);
        cy.xpath("//div[@id='wp_dark_mode_accessibility']//form[@method='post']//div//input[@id='save_settings']").click({force: true}).wait(1000);

        cy.get("a[id='wp_dark_mode_animation-tab'] span").click().wait(1000);

        //Enables “Darkmode Toggle Animation”
        cy.get("label[for='wppool-wp_dark_mode_animation[toggle_animation]'] div[class='wp-dark-mode-ignore']").click().wait(1000);

        //changes the “Animation Effect” from the default selection as it selects the 3rd option
        cy.get("body > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(3) > div:nth-child(4) > div:nth-child(13) > form:nth-child(1) > table:nth-child(6) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(2) > select:nth-child(1)")
        .select(2,{force: true}).wait(1000);

        
        cy.xpath("//div[@id='wp_dark_mode_animation']//form[@method='post']//div//input[@id='save_settings']").click({force: true}).wait(1000);



        //visits the website
        cy.xpath("//a[normalize-space()='winlocal']").trigger('mouseover').should('be.visible').wait(1000);
        cy.xpath("//a[normalize-space()='Visit Site']").click({ force: true }).wait(1000);

        //validates darkmode from fronend and users end
        cy.get("html").should('contain.class','wp-dark-mode-active').wait(1000);  


  })
})