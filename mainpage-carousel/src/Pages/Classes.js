import React from "react";
import NavigationBarFinal from "../Components/NavigationBarFinal"

const Classes = () => {
    return (
        <> 
        <NavigationBarFinal />
        <div className="row justify-content-center">

            <div>
            <h1 style="text-align:center">Classes</h1>
            </div>

            <div>
            <h2 style="text-align:center">We offer a selection of packages and options</h2>
            </div>

            <h4 style="text-align:center">Single Class</h4>
            <p>A la carte</p>
            <h5>$10</h5>

            //Add a photo here?

            <h4>5 Class Package</h4>
            <p>Expires after 30 days</p>
            <h5>$40</h5>

            <h4>10 Class Package</h4>
            <p>Expires after 30 days</p>
            <h5>$60</h5>

            <h3>Challenges</h3>
            <p>Filler as I don't know what the challenges are :/</p>

            //Add a photo

            <h4>2 week Challenge</h4>
            <p>Something about this</p>
            <h5>$50</h5>

            <h4>4 week Challenge</h4>
            <p>Filler text</p>
            <h5>$80</h5>

            <h4>6 week Challenge</h4>
            <p>Filler text</p>
            <h5>$100</h5>

            // Add a photo

        <form action="https://www.google.com/url?q=https://www.paypal.com/cgi-bin/webscr&source=gmail-imap&ust=1681833886000000&usg=AOvVaw3n2_o7EzTJCm7gTiok-G9g" method="post" target="_top">
            <input type="hidden" name="cmd" value="_s-xclick"></input>
            <input type="hidden" name="hosted_button_id" value="VBTC9Y4BMEMYN"></input>
            <table>
            <tr><td><input type="hidden" name="on0" value="Select Class Here"></input>Select Class Here</td></tr><tr><td><select name="os0">
                <option value="Single Class">Single Class $10.00 USD</option>
                <option value="5 Class Package">5 Class Package $40.00 USD</option>
                <option value="10 Class Package">10 Class Package $60.00 USD</option>
                <option value="30 Day Access Pass">30 Day Access Pass $75.00 USD</option>
                <option value="2 week Challenge">2 week Challenge $50.00 USD</option>
                <option value="4 week Challenge">4 week Challenge $80.00 USD</option>
                <option value="6 week Challenge">6 week Challenge $100.00 USD</option>
            </select> </td></tr>
            </table>
            <input type="hidden" name="currency_code" value="USD"></input>
            <input type="image" src="https://www.google.com/url?q=https://www.paypalobjects.com/en_US/i/btn/btn_paynowCC_LG.gif&source=gmail-imap&ust=1681833886000000&usg=AOvVaw2ug5fumrmrVY-8iUcY7ouZ" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"></input>
            <img alt="" border="0" src="https://www.google.com/url?q=https://www.paypalobjects.com/en_US/i/scr/pixel.gif&source=gmail-imap&ust=1681833886000000&usg=AOvVaw2xBx7S2FHaElS0t3IuIb6-" width="1" height="1"></img>
        </form>

        </div>
        
    </>
    );
};

export default Classes;