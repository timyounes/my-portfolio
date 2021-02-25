import React from 'react';
import logo from './logo.png';
import './App.css';

function App() {
    return (
<React.Fragment>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
        <a class="navbar-brand js-scroll-trigger" href="#page-top">
        <span class="d-block d-lg-none">Adhan Timothy Younes</span>
        <span class="d-none d-lg-block"> 
            <img class="img-fluid img-profile rounded-circle mx-auto mb-2" src="img/profile.jpg" alt=""/>
        </span>
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link js-scroll-trigger" href="#about">About</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link js-scroll-trigger" href="#experience">Experience</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link js-scroll-trigger" href="#education">Education</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link js-scroll-trigger" href="#skills">Skills</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link js-scroll-trigger" href="#interests">Interests</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link js-scroll-trigger" href="#awards">Awards</a>
                </li>
            </ul>
        </div>
    </nav>

    <div class="container-fluid p-0">

        <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
            <div class="w-100">
                <h1 class="mb-0">Adhan Timothy
                    <span class="text-primary"> Younes</span>
                </h1>
                <div class="subheading mb-5">
                    <div>235 - Sitio 1, Bahay Pare, Candaba, Pampanga - 0935-1455-736</div>
                    <a href="mailto:adhantimothyyounes@gmail.com"> adhantimothyyounes@gmail.com</a>
                </div>
                <p class="lead mb-5">I am experienced in leveraging agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
                <div class="social-icons">
                    <a href="#">
                        <i class="fab fa-linkedin-in"></i>
                    </a>
                    <a href="#">
                        <i class="fab fa-github"></i>
                    </a>
                    <a href="#">
                        <i class="fab fa-twitter"></i>
                    </a>
                    <a href="#">
                        <i class="fab fa-facebook-f"></i>
                    </a>
                </div>
            </div>
        </section>

        <hr class="m-0"/>

        <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="experience">
            <div class="w-100">
                <h2 class="mb-5">Experience</h2>

                <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div class="resume-content">
                        <h3 class="mb-0">Web Developer</h3>
                        <div class="subheading mb-3">Genie Technologies Inc</div>
                        <ul>
                            <li>Develop, design and maintain custom plug-ins for Retail Pro Prism Web POS.</li>
                            <li>Integrating REST API's in Retail Pro Prism Web POS like Magento E-Commerce, CRM Capillary, Martjack OMS and YOYO Wallet.</li>
                            <li>Develop, design and maintain Real-time Web Application like Prism Central Monitoring Tool used for reporting, data monitoring and synchronization.</li>
                            <li>Understand customer problems and provide appropriate technical solutions.</li>
                            <li>Integrate data from various back-end services and databases.</li>
                            <li>Analyze business information to identify process improvements for increasing business efficiency and effectiveness. </li>
                            <li>Participate in cross-functional meetings to resolve recurring customer issues.</li>
                            <li>Provide customer support and assistance in issue troubleshooting and resolution.</li>
                            <li>Ensure data integrity and security.</li>
                        </ul>
                    </div>
                    <div class="resume-date text-md-right">
                        <span class="text-primary">September 2017 - Present</span>
                    </div>
                </div>

                <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div class="resume-content">
                        <h3 class="mb-0">Junior Programmer - Application Developer</h3>
                        <div class="subheading mb-3">Xytron International Inc</div>
                        <ul>
                            <li>Provide support and maintenance to existing Enterprise Resource Planning (ERP) Management System both front-end and back-end coding.</li>
                            <li>Generate and distribute management reports in accurate and timely manner.</li>
                            <li>Develops MIS documentation to allow for smooth operations and easy system maintenance.</li>
                            <li>Perform data analysis for generating reports on periodic basis.</li>
                            <li>Develop MIS system for customer management and internal communication.</li>
                            <li>Provide strong reporting and analytical information support to management team.</li>
                            <li>Set up MYSQL database replication for backup and failover purposes and optimizing database tables for speed enhancement.</li>
                            <li>Develop and maintain client projects like Email Blasting with Phpmailer email library, Globe Billing Repository System with Web API.</li>
                            <li>Develop and maintain Xytron Collection Services Management System.</li>
                        </ul>
                    </div>
                    <div class="resume-date text-md-right">
                        <span class="text-primary">May 2015 - September 2017</span>
                    </div>
                </div>

            </div>

        </section>

        <hr class="m-0"/>

        <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="education">
            <div class="w-100">
                <h2 class="mb-5">Education</h2>

                <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div class="resume-content">
                        <h3 class="mb-0">Cavite State University - Imus Campus</h3>
                        <div class="subheading mb-3">Bachelor of Science In Information Technology</div>
                    </div>
                    <div class="resume-date text-md-right">
                        <span class="text-primary">June 2012 - May 2015</span>
                    </div>
                </div>

                <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div class="resume-content">
                        <h3 class="mb-0">STI College Bacoor</h3>
                        <div class="subheading mb-3">Bachelor of Science In Information Technology</div>
                    </div>
                    <div class="resume-date text-md-right">
                        <span class="text-primary">June 2011 - May 2012</span>
                    </div>
                </div>

                <div class="resume-item d-flex flex-column flex-md-row justify-content-between">
                    <div class="resume-content">
                        <h3 class="mb-0">Datacom Institute of Computer Technology - Imus Campus</h3>
                        <div class="subheading mb-3">Computer Programming - Vocational</div>
                    </div>
                    <div class="resume-date text-md-right">
                        <span class="text-primary">June 2009 - May 2011</span>
                    </div>
                </div>

            </div>
        </section>

        <hr class="m-0"/>

        <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="skills">
            <div class="w-100">
                <h2 class="mb-5">Skills</h2>

                <div class="subheading mb-3">Programming Languages &amp; Tools</div>
                <ul class="list-inline dev-icons">
                    <li class="list-inline-item">
                        <i class="fab fa-html5"></i>
                    </li>
                    <li class="list-inline-item">
                        <i class="fab fa-css3-alt"></i>
                    </li>
                    <li class="list-inline-item">
                        <i class="fab fa-js-square"></i>
                    </li>
                    <li class="list-inline-item">
                        <i class="fab fa-angular"></i>
                    </li>
                    <li class="list-inline-item">
                        <i class="fab fa-react"></i>
                    </li>
                    <li class="list-inline-item">
                        <i class="fab fa-node-js"></i>
                    </li>
                    <li class="list-inline-item">
                        <i class="fab fa-sass"></i>
                    </li>
                    <li class="list-inline-item">
                        <i class="fab fa-less"></i>
                    </li>
                    <li class="list-inline-item">
                        <i class="fab fa-wordpress"></i>
                    </li>
                    <li class="list-inline-item">
                        <i class="fab fa-gulp"></i>
                    </li>
                    <li class="list-inline-item">
                        <i class="fab fa-grunt"></i>
                    </li>
                    <li class="list-inline-item">
                        <i class="fab fa-npm"></i>
                    </li>
                </ul>

                <div class="subheading mb-3">Workflow</div>
                <ul class="fa-ul mb-0">
                    <li>
                        <i class="fa-li fa fa-check"></i>Mobile-First, Responsive Design
                    </li>
                    <li>
                        <i class="fa-li fa fa-check"></i>Cross Browser Testing &amp; Debugging
                    </li>
                    <li>
                        <i class="fa-li fa fa-check"></i>Cross Functional Teams
                    </li>
                    <li>
                        <i class="fa-li fa fa-check"></i>Agile Development &amp; Scrum
                    </li>
                </ul>
            </div>
        </section>

        <hr class = "m-0"/>

        <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="interests">
            <div class="w-100">
                <h2 class="mb-5">Interests</h2>
                <p>Apart from being a web developer, I enjoy most of my time being outdoors. In the winter, I am an avid skier and novice ice climber. During the warmer months here in Colorado, I enjoy mountain biking, free climbing, and kayaking.</p>
                <p class="mb-0">When forced indoors, I follow a number of sci-fi and fantasy genre movies and television shows, I am an aspiring chef, and I spend a large amount of my free time exploring the latest technology advancements in the front-end web development world.</p>
            </div>
        </section>

        <hr class="m-0"/>

        <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="awards">
            <div class="w-100">
                <h2 class="mb-5">Awards &amp; Certifications</h2>
                <ul class="fa-ul mb-0">
                    <li>
                        <i class="fa-li fa fa-trophy text-warning"></i>Google Analytics Certified Developer
                    </li>
                    <li>
                        <i class="fa-li fa fa-trophy text-warning"></i>Mobile Web Specialist - Google Certification
                    </li>
                    <li>
                        <i class="fa-li fa fa-trophy text-warning"></i>1<sup>st</sup>Place - University of Colorado Boulder - Emerging Tech Competition 2009
                    </li>
                    <li>
                      <i class="fa-li fa fa-trophy text-warning"></i>1<sup>st</sup>Place - University of Colorado Boulder - Adobe Creative Jam 2008 (UI Design Category)
                    </li>
                    <li>
                      <i class="fa-li fa fa-trophy text-warning"></i>2<sup>nd</sup>Place - University of Colorado Boulder - Emerging Tech Competition 2008
                    </li>
                    <li>
                      <i class="fa-li fa fa-trophy text-warning"></i>1<sup>st</sup>Place - James Buchanan High School - Hackathon 2006
                    </li>
                    <li>
                      <i class="fa-li fa fa-trophy text-warning"></i>3<sup>rd</sup>Place - James Buchanan High School - Hackathon 2005
                    </li>
                </ul>
            </div>
        </section>

    </div>
</React.Fragment>
    );
}

export default App;