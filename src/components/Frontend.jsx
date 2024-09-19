import React, { useState } from 'react';
import './styles.css';
export default function Frontend() {
  // State to track the currently active tab
  const [activeTab, setActiveTab] = useState('Primary');


  // Function to handle tab switching
  const openTab = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <>
      <section id="front-end">
        <h2>Front End</h2>
        <div className="tabs">
      {["Primary", "Intermediate", "Advanced"].map((tab) => (
        <button
          key={tab}
          className={`tablink ${activeTab === tab ? "activeTab" : ""}`}
          onClick={() => openTab(tab)}
        >
          {tab}
        </button>
      ))}
    </div>

        <div id="Primary" className="tabcontent" style={{ display: activeTab === 'Primary' ? 'block' : 'none' }}>
          <div className="main">
            <div className="container">
                  <ul>
                    <li>
                      <h3 className="heading">HTML</h3>
                      <p>HTML is a markup language for structuring web content.</p>
                      <a href="#" className="btn btn-primary">Read More</a>
                      <span className="date d-block mt-2">Primary</span>
                      <span className="circle"></span>
                    </li>
                    <li id="con_2" className="mb-4">
                      <h3 className="heading">CSS</h3>
                      <p>CSS styles web pages for layout and design.</p>
                      <a href="#" className="btn btn-primary">Read More</a>
                      <span className="date d-block mt-2">Primary</span>
                      <span className="circle"></span>
                    </li>
                    <li className="mb-4">
                      <h3 className="heading">JS</h3>
                      <p>JavaScript (JS) is a cross-platform, object-oriented programming language used by developers to make web pages interactive.</p>
                      <a href="#" className="btn btn-primary">Read More</a>
                      <span className="date d-block mt-2">Primary</span>
                      <span className="circle"></span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>


        <div id="Intermediate" className="tabcontent" style={{ display: activeTab === 'Intermediate' ? 'block' : 'none' }}>
          <div className="main">
            <div className="container">
                  <ul>
                    <li>
                      <h3 className="heading">HTML</h3>
                      <p>HTML is a markup language for structuring web content.</p>
                      <a href="#" className="btn btn-primary">Read More</a>
                      <span className="date d-block mt-2">Intermediate</span>
                      <span className="circle"></span>
                    </li>
                    <li id="con_2" className="mb-4">
                      <h3 className="heading">CSS</h3>
                      <p>CSS styles web pages for layout and design.</p>
                      <a href="#" className="btn btn-primary">Read More</a>
                      <span className="date d-block mt-2">Intermediate</span>
                      <span className="circle"></span>
                    </li>
                    <li className="mb-4">
                      <h3 className="heading">JS</h3>
                      <p>JavaScript (JS) is a cross-platform, object-oriented programming language used by developers to make web pages interactive.</p>
                      <a href="#" className="btn btn-primary">Read More</a>
                      <span className="date d-block mt-2">Intermediate</span>
                      <span className="circle"></span>
                    </li>
                    <li className="mb-4">
                    <h3 className="heading">React vs Vue.js</h3>
                    <p><b>React:</b> A popular JavaScript library for dynamic UIs.</p>
                    <p><b>Vue.js:</b> A progressive framework with reactive data binding.</p>
                    <a href="#" className="btn btn-primary">Read More</a>
                    <span className="date d-block mt-2">Intermediate</span>
                    <span className="circle"></span>
                  </li>

                    <li className="mb-4">
                      <h3 className="heading">Bootstrap (or) Material UI</h3>
                      <p><b>BOOTSTRAP:</b> CSS framework</p>
                      <p><b>MATERIAL UI:</b> React component library</p>
                      <a href="#" className="btn btn-primary">Read More</a>
                      <span className="date d-block mt-2">Intermediate</span>
                      <span className="circle"></span>
                    </li>
                    <li className="mb-4">
                    <h3 className="heading">Version Control: Git & GitHub</h3>
                    <p><b>Git:</b> A distributed system for tracking code changes.</p>
                    <p><b>GitHub:</b> A platform for hosting Git repositories with tools for collaboration.</p>
                    <a href="#" className="btn btn-primary">Read More</a>
                    <span className="date d-block mt-2">Intermediate</span>
                    <span className="circle"></span>
                    </li>

                  </ul>
                </div>
              </div>
            </div>


        <div id="Advanced" className="tabcontent" style={{ display: activeTab === 'Advanced' ? 'block' : 'none' }}>
          <div className="main">
            <div className="container">
                  <ul>
                  <li>
                      <h3 className="heading">HTML</h3>
                      <p>HTML is a markup language for structuring web content.</p>
                      <a href="#" className="btn btn-primary">Read More</a>
                      <span className="date d-block mt-2">Intermediate</span>
                      <span className="circle"></span>
                    </li>
                    <li id="con_2" className="mb-4">
                      <h3 className="heading">CSS</h3>
                      <p>CSS styles web pages for layout and design.</p>
                      <a href="#" className="btn btn-primary">Read More</a>
                      <span className="date d-block mt-2">Intermediate</span>
                      <span className="circle"></span>
                    </li>
                    <li className="mb-4">
                      <h3 className="heading">JS</h3>
                      <p>JavaScript (JS) is a cross-platform, object-oriented programming language used by developers to make web pages interactive.</p>
                      <a href="#" className="btn btn-primary">Read More</a>
                      <span className="date d-block mt-2">Intermediate</span>
                      <span className="circle"></span>
                    </li>
                    <li className="mb-4">
                      <h3 className="heading">Tailwind CSS</h3>
                      <p>Tailwind offers a utility-first approach to CSS, speeding up UI design and development.</p>
                      <a href="#" className="btn btn-primary">Read More</a>
                      <span className="date d-block mt-2">Advanced</span>
                      <span className="circle"></span>
                    </li>

                    <li className="mb-4">
                      <h3 className="heading">Angular vs Svelte</h3>
                      <p><b>Angular:</b> A framework for dynamic web apps with two-way data binding.</p>
                      <p><b>Svelte:</b> A compiler for fast, lightweight apps with small file sizes.</p>
                      <a href="#" className="btn btn-primary">Read More</a>
                      <span className="date d-block mt-2">Advanced</span>
                      <span className="circle"></span>
                    </li>

                    <li className="mb-4">
                    <h3 className="heading">Version Control: Git & GitHub</h3>
                    <p><b>Git:</b> A distributed system for tracking code changes.</p>
                    <p><b>GitHub:</b> A platform for hosting Git repositories with tools for collaboration.</p>
                    <a href="#" className="btn btn-primary">Read More</a>
                    <span className="date d-block mt-2">Intermediate</span>
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