import React, { useState } from 'react';
import './styles.css';

export default function Backend() {
  // State to track the currently active tab
  const [activeTab, setActiveTab] = useState('JavaScript');

  // Function to handle tab switching
  const openTab = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <> 
      <section id="back-end">
        <h2>Back End</h2>
        <div className="tabs">
          <button
            className={`tablink ${activeTab === 'JavaScript' ? 'activeTab' : ''}`}
            onClick={() => openTab('JavaScript')}
          >
            JavaScript
          </button>
          <button
            className={`tablink ${activeTab === 'Java' ? 'activeTab' : ''}`}
            onClick={() => openTab('Java')}
          >
            Java
          </button>
          <button
            className={`tablink ${activeTab === 'Python' ? 'activeTab' : ''}`}
            onClick={() => openTab('Python')}
          >
            Python
          </button>
          <button
            className={`tablink ${activeTab === 'Ruby' ? 'activeTab' : ''}`}
            onClick={() => openTab('Ruby')}
          >
            Ruby
          </button>
          <button
            className={`tablink ${activeTab === 'PHP' ? 'activeTab' : ''}`}
            onClick={() => openTab('PHP')}
          >
            PHP
          </button>
        </div>

        <div id="JavaScript" className="tabcontent" style={{ display: activeTab === 'JavaScript' ? 'block' : 'none' }}>
          <div className="main">
            <div className="container">
              <ul>
                <li>
                  <h3 className="heading">Basics Of FrontEnd</h3>
                  <p>HTML, CSS, and JavaScript</p>
                  <a href="#">Read More</a>
                  <span className="date">JS</span>
                  <span className="circle"></span>
                </li>
                <li>
                  <h3 className="heading">Node.js</h3>
                  <p>Node.js is an open-source and cross-platform JavaScript runtime environment.</p>
                  <a href="#">Read More</a>
                  <span className="date">JS</span>
                  <span className="circle"></span>
                </li>
                <li>
                  <h3 className="heading">Express.js</h3>
                  <p>Express.js is a Node.js framework for building web and mobile apps.</p>
                  <a href="#">Read More</a>
                  <span className="date">JS</span>
                  <span className="circle"></span>
                </li>
                <li>
                  <h3 className="heading">MongoDB</h3>
                  <p>MongoDB is a database that stores data in a flexible, JSON-like format.</p>
                  <a href="#">Read More</a>
                  <span className="date">JS</span>
                  <span className="circle"></span>
                </li>
                <li>
                  <h3 className="heading">REST APIs</h3>
                  <p>REST APIs are a simple way to connect and integrate different applications and services.</p>
                  <a href="#">Read More</a>
                  <span className="date">JS</span>
                  <span className="circle"></span>
                </li>
                <li>
                  <h3 className="heading">React vs Angular</h3>
                  <p><b>React:</b> A JavaScript library for building user interfaces.</p>
                  <p><b>Angular:</b> A framework for creating dynamic websites and web apps.</p>
                  <a href="#">Read More</a>
                  <span className="date">JS</span>
                  <span className="circle"></span>
                </li>

                <li>
                  <h3 className="heading">Git & GitHub</h3>
                  <p><b>Git:</b> A system for tracking file changes.</p>
                  <p><b>GitHub:</b> A platform for hosting and collaborating on Git projects.</p>
                  <a href="#">Read More</a>
                  <span className="date">JS</span>
                  <span className="circle"></span>
                </li>

              </ul>
            </div>
          </div>
        </div>

        <div id="Java" className="tabcontent" style={{ display: activeTab === 'Java' ? 'block' : 'none' }}>
          <div className="main">
            <div className="container">
              <ul>
                <li>
                  <h3 className="heading">Java</h3>
                  <p>Java is a flexible, reliable programming language that works anywhere.</p>
                  <a href="#">Read More</a>
                  <span className="date">Java</span>
                  <span className="circle"></span>
                </li>
                <li>
                  <h3 className="heading">Basics of Frontend</h3>
                  <p>HTML, CSS, and JavaScript</p>
                  <a href="#">Read More</a>
                  <span className="date">Java</span>
                  <span className="circle"></span>
                </li>
                <li>
                  <h3 className="heading">Spring Boot</h3>
                  <p>Spring Boot is an open-source, microservice-based Java web framework offered by Spring.</p>
                  <a href="#">Read More</a>
                  <span className="date">Advanced</span>
                  <span className="circle"></span>
                </li>
                <li>
                  <h3 className="heading">PostgreSQL</h3>
                  <p>PostgreSQL is a robust database system for managing and storing data in web applications.</p>
                  <a href="#">Read More</a>
                  <span className="date">Advanced</span>
                  <span className="circle"></span>
                </li>
                <li>
                  <h3 className="heading">RESTful APIs</h3>
                  <p>REST APIs are a simple way to connect and integrate different applications and services.</p>
                  <a href="#">Read More</a>
                  <span className="date">Advanced</span>
                  <span className="circle"></span>
                </li>
                <li>
                  <h3 className="heading">Angular (or) React</h3>
                  <p><b>React:</b> A JavaScript library for building user interfaces.</p>
                  
                  <a href="#">Read More</a>
                  <span className="date">Advanced</span>
                  <span className="circle"></span>
                </li>
                <li>
                  <h3 className="heading">Git & GitHub</h3>
                  <p><b>Git:</b> Git is a version control system that tracks changes in computer files.</p>
                 
                  <a href="#">Read More</a>
                  <span className="date">Advanced</span>
                  <span className="circle"></span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div id="Python" className="tabcontent" style={{ display: activeTab === 'Python' ? 'block' : 'none' }}>
          <div className="main">
            <div className="container">
              <ul>
                <li>
                  <h3 className="heading">Python</h3>
                  <p>
                  Python is a simple, powerful language for coding various tasks, from building websites to analyzing data.</p>
                  <a href="#">Read More</a>
                  <span className="date">Python</span>
                  <span className="circle"></span>
                </li>
                <li>
                  <h3 className="heading">Basics of Frontend</h3>
                  <p>HTML, CSS, and JavaScript</p>
                  <a href="#">Read More</a>
                  <span className="date">Python</span>
                  <span className="circle"></span>
                </li>
                <li>
                  <h3 className="heading">Django (or) Flask</h3>
                  <p><b>Django:</b>Django is a Python framework for building websites.</p>
                  
                  <a href="#">Read More</a>
                  <span className="date">Python</span>
                  <span className="circle"></span>
                </li>
                <li>
                  <h3 className="heading">SQLite</h3>
                  <p>SQLite is a small, easy-to-use database stored in one file.</p>
                  <a href="#">Read More</a>
                  <span className="date">Python</span>
                  <span className="circle"></span>
                </li>
                <li>
                  <h3 className="heading">RESTful APIs</h3>
                  <p>REST APIs are a simple way to connect and integrate different applications and services.</p>
                  <a href="#">Read More</a>
                  <span className="date">Python</span>
                  <span className="circle"></span>
                </li>
                <li>
                  <h3 className="heading">React (or) Angular</h3>
                  <p><b>React:</b> A JavaScript library for building user interfaces.</p>
                  
                  <a href="#">Read More</a>
                  <span className="date">Python</span>
                  <span className="circle"></span>
                </li>
                <li>
                  <h3 className="heading">Git & GitHub</h3>
                  <p><b>Git:</b> Git is a version control system that tracks changes in computer files.</p>
                  <p><b>GitHub:</b> GitHub is a platform for hosting and collaborating on Git repositories.</p>
                  <a href="#">Read More</a>
                  <span className="date">Python</span>
                  <span className="circle"></span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div id="Ruby" className="tabcontent" style={{ display: activeTab === 'Ruby' ? 'block' : 'none' }}>
          <div className="main">
            <div className="container">
              <ul>
                <li>
                  <h3 className="heading">Ruby</h3>
                  <p>Ruby is an open-source language known for simplicity and elegant syntax.</p>
                  <a href="#">Read More</a>
                  <span className="date">Ruby</span>
                  <span className="circle"></span>
                </li>
                <li>
                  <h3 className="heading">Ruby on Rails</h3>
                  <p>Ruby on Rails is an MVC-based web framework.</p>
                  <a href="#">Read More</a>
                  <span className="date">Ruby</span>
                  <span className="circle"></span>
                </li>
                <li>
                  <h3 className="heading">PostgreSQL</h3>
                  <p>PostgreSQL is a robust database system for managing and storing data in web applications.</p>
                  <a href="#">Read More</a>
                  <span className="date">Ruby</span>
                  <span className="circle"></span>
                </li>
                <li>
                  <h3 className="heading">RESTful APIs</h3>
                  <p>REST APIs are a simple way to connect and integrate different applications and services.</p>
                  <a href="#">Read More</a>
                  <span className="date">Ruby</span>
                  <span className="circle"></span>
                </li>
                <li>
                  <h3 className="heading">React (or) Angular</h3>
                  <p><b>React:</b> A JavaScript library for building user interfaces.</p>
                  <p><b>Angular:</b> A framework for creating dynamic websites and web apps.</p>
                  <a href="#">Read More</a>
                  <span className="date">Ruby</span>
                  <span className="circle"></span>
                </li>
                <li>
                  <h3 className="heading">Git & GitHub</h3>
                  <p><b>Git:</b> Git is a version control system that tracks changes in computer files.</p>
                  <p><b>GitHub:</b> GitHub is a platform for hosting and collaborating on Git repositories.</p>
                  <a href="#">Read More</a>
                  <span className="date">Ruby</span>
                  <span className="circle"></span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div id="PHP" className="tabcontent" style={{ display: activeTab === 'PHP' ? 'block' : 'none' }}>
          <div className="main">
            <div className="container">
              <ul>
                <li>
                  <h3 className="heading">PHP</h3>
                  <p>PHP is a server-side scripting language for web development.</p>
                  <a href="#">Read More</a>
                  <span className="date">PHP</span>
                  <span className="circle"></span>
                </li>
                <li>
                  <h3 className="heading">Basics of Frontend</h3>
                  <p>HTML, CSS, and JavaScript</p>
                  <a href="#">Read More</a>
                  <span className="date">PHP</span>
                  <span className="circle"></span>
                </li>
                <li>
                  <h3 className="heading">Laravel</h3>
                  <p>Laravel is a PHP framework for building web apps.</p>
                  <a href="#">Read More</a>
                  <span className="date">PHP</span>
                  <span className="circle"></span>
                </li>
                <li>
                  <h3 className="heading">MySQL</h3>
                  <p>MySQL is a popular open-source database system that stores and manages data for websites and applications.</p>
                  <a href="#">Read More</a>
                  <span className="date">PHP</span>
                  <span className="circle"></span>
                </li>
                <li>
                  <h3 className="heading">RESTful APIs</h3>
                  <p>REST APIs are a simple way to connect and integrate different applications and services.</p>
                  <a href="#">Read More</a>
                  <span className="date">PHP</span>
                  <span className="circle"></span>
                </li>
                <li>
                  <h3 className="heading">React (or) Angular</h3>
                  <p><b>React:</b> A JavaScript library for building user interfaces.</p>
                  <p><b>Angular:</b> A framework for creating dynamic websites and web apps.</p>
                  <a href="#">Read More</a>
                  <span className="date">PHP</span>
                  <span className="circle"></span>
                </li>
                <li>
                  <h3 className="heading">Git & GitHub</h3>
                  <p><b>Git:</b> Git is a version control system that tracks changes in computer files.</p>
                  <p><b>GitHub:</b> GitHub is a platform for hosting and collaborating on Git repositories.</p>
                  <a href="#">Read More</a>
                  <span className="date">PHP</span>
                  <span className="circle"></span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}