import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div className='app'>
                <h2>About Our Application</h2>
                <h4>Our project is a one-stop app service that caters to multiple user needs , starting from goals and investment checker services to keeping up with the stock market. It helps the users monitor and reassess the investment performance. Regular monitoring of investment portfolios is necessary for ensuring alignment of investments with long term financial goals. With our financial advisor one can keep track of different investment entities like stocks, bonds, provident funds, real estates and mutual funds. The financial advisor application will be made using Spring Boot microservices. Powered by cutting edge technology, our financial advisor is a blend of all the features one could ask for and makes life easy.
                </h4>

                <h4>With the use of Java Spring Boot, React and mySQL we have made a Financial Advisor/Planner with the following functionalities:
                </h4>

                <p>Account-Account creation, verification, deletion/deactivation and editing the account details of the user.
                </p>

                <p>Savings- Calculation of the income and expenses of the user.</p>

                <p>Expenses- It will take input from the user for various expenses (rent, utility, travel, loans, etc).</p>

                <p>Investments-Shows how users can invest in different investment assets.
                </p>

                <p>Logs- Perform calculations on major statistics parameters and will show users  the results in various graphical representations.
                </p>

                <p>Goals-Helping users achieve their life goals.</p>


            </div>
        );
    }
}

export default About;