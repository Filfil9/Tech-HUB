import React from "react";
import Header from './Header';
import Footer from './Footer';
import "../App.css";

const WhatILearned = () => {
    return (
        <>
        <Header />
            <section className="hero">
                <h2>What I Learned</h2>
                <p>This page summarizes all the topics I learned during the TECH HUB Bootcamp</p>
            </section>

            <section className="learned">
                <div className="session">
                <h2>🧱 Session 1: HTML Basics</h2>
                <ul>
                    <li>Basic structure of HTML documents</li>
                    <li>Common tags: <code>head</code>, <code>body</code>, <code>h1-h6</code>, <code>p</code>, <code>a</code>, <code>img</code>, <code>ul</code>, <code>li</code></li>
                    <li>Creating links and inserting images</li>
                    <li>Semantic HTML (e.g., <code>header</code>, <code>footer</code>, <code>section</code>, <code>article</code>)</li>
                    <li>
                    Resources:
                    <ul>
                        <li><a href="https://youtu.be/6QAELgirvjs?si=dhripvKaYIALjSKn" target="_blank" rel="noopener noreferrer">Elzero Web School - HTML</a></li>
                    </ul>
                    </li>
                </ul>
                </div>

                <div className="session">
                <h2>🎨 Session 2: CSS Styling</h2>
                <ul>
                    <li>CSS selectors: element, class, id</li>
                    <li>Styling text, colors, backgrounds, borders</li>
                    <li>Using <code>margin</code>, <code>padding</code>, <code>width</code>, <code>height</code></li>
                    <li>External CSS file and best practices</li>
                    <li>
                    Resources:
                    <ul>
                        <li><a href="https://youtu.be/X1ulCwyhCVM?si=YSRLqCh89YXkq9Na" target="_blank" rel="noopener noreferrer">Elzero Web School- CSS</a></li>
                    </ul>
                    </li>
                </ul>
                </div>

                <div className="session">
                <h2>⚙️ Session 3: JavaScript Basics</h2>
                <ul>
                    <li>Variables: <code>let</code>, <code>const</code>, <code>var</code></li>
                    <li>Data types: string, number, boolean, array, object</li>
                    <li>Functions: declaration, parameters, return values</li>
                    <li>Conditional statements: <code>if</code>, <code>else</code>, <code>switch</code></li>
                    <li>Loops: <code>for</code>, <code>while</code>, <code>forEach</code></li>
                    <li>
                    Resources:
                    <ul>
                        <li><a href="https://youtube.com/playlist?list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv&si=wwH21OjPNAFlqmFO" target="_blank" rel="noopener noreferrer">Course youtub - JS</a></li>
                        <li><a href="https://roadmap.sh/javascript" target="_blank" rel="noopener noreferrer">Elzero Web School- JS</a></li>
                    </ul>
                    </li>
                </ul>
                </div>

                <div className="session">
                <h2>🔁 Session 4: Array Methods & Objects</h2>
                <ul>
                    <li>Array methods: <code>map()</code>, <code>filter()</code>, <code>reduce()</code>, <code>includes()</code></li>
                    <li>Creating and traversing JavaScript objects</li>
                    <li>Using loops with arrays and objects</li>
                    <li>Basic problem solving with JS</li>
                    <li>
                    Resources:
                    <ul>
                        <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array" target="_blank" rel="noopener noreferrer">MDN - Arrays</a></li>
                    </ul>
                    </li>
                </ul>
                </div>

                <div className="session">
                <h2>⚛️ Session 5: React Basics</h2>
                <ul>
                    <li>What is React and why it's used</li>
                    <li>Creating functional components</li>
                    <li>Using <code>useState</code> and <code>useEffect</code> hooks</li>
                    <li>Passing data via props</li>
                    <li>Component structure and nesting</li>
                    <li>How to use async/await to handle asynchronous API calls.</li>
                    <li>How to use <code>.then()</code> to handle promises in Axios.</li>
                    <li>How <code>JSON.parse()</code>  works and how data comes from the backend.</li>
                    <li>
                    Resources:
                    <ul>
                        <li><a href="https://youtube.com/playlist?list=PLpPqplz6dKxW5ZfERUPoYTtNUNvrEebAR&si=UF8OcBMhJ3UkxAZG" target="_blank">ReactJS Course for Biggner</a></li>
                    </ul>
                    </li>
                </ul>
                </div>
                <div className="session">
                <h2>⚛️ Session 6: React Router & Multi-Page Structure</h2>
                <ul>
                    <li>Using react-router-dom for navigation</li>
                    <li>Creating multiple pages: Home, About, Services, Contact</li>
                    <li>Building a reusable layout: Header and Footer</li>
                    <li>Routing with <code>Routes</code> and <code>Route </code> components</li>
                    <li>Component structure and nesting</li>
                    <li>Displaying dynamic data with reusable components (e.g., Posts)</li>
                    <li>Handling component layout using MUI(<code>Box</code> and <code>Grid </code>and<code>Typography</code>)</li>
                </ul>
                    <li>
                    Resources:
                    <ul>
                        <li><a href="https://youtube.com/https://github.com/Asabeneh/30-Days-Of-React?list=PLpPqplz6dKxW5ZfERUPoYTtNUNvrEebAR&si=UF8OcBMhJ3UkxAZG" target="_blank">GitHUB ReactJS </a></li>
                    </ul>
                    </li>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default WhatILearned;
