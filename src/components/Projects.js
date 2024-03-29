import React from 'react'

export default function Projects() {
  return (
    <section id="projects">
    <div id="projectsContainer">
        <h1 id="projectsTitle">Projects</h1>
        <div class="projectBoxContainer">
                <div class="infoContainer">
                    <div class="infoContainerThreeWay">
                        <div class="projectTitleContainer">
                            <h3>Leave A Message! <a href='https://github.com/amauryplayero/Social' target="_blank" class="githubDemo"><i class="devicon-github-original-wordmark"></i></a></h3>
                            
                        </div>

                        <div class="projectTextContainer">
                            <p>A personal blog where anyone can leave a message in the form of text or an image. Leave yours now! Made with Test Driver Development, Typescript, React, NodeJS, AWS:S3, and PostgreSQL, and a mobile-first intent.
                            </p>
                        </div>

                        <div class="projectButtonContainer">
                            {/* <a class="demoButtons" href="https://www.youtube.com/watch?v=BKfhRIqHaEU" target="_blank">VIDEO DEMO</a> */}
                            <a class="demoButtons" href="https://leave-a-message-sooty.vercel.app/" target="_blank">LIVE DEMO</a>
                            {/* <a class="demoButtons">VIDEO DEMO</a> */}
                            
                        </div>
                           
                    </div>
                </div>

                <div class="screenShotContainer">
                    <div class="screenShotContainerForBorder">
                        <img id="leaveAMessageElement"  src="https://i.imgur.com/7y3Rs8a.png"></img>
                    </div>
                </div>

            </div>
        {/* //////// */}
            <div class="projectBoxContainer">
                <div class="infoContainer">
                    <div class="infoContainerThreeWay">
                        <div class="projectTitleContainer">
                            <h3>FRESco. store  <a href='https://github.com/amauryplayero/FRESco-store' target="_blank" class="githubDemo"><i class="devicon-github-original-wordmark"></i></a></h3>
                            
                        </div>

                        <div class="projectTextContainer">
                            <p>In this e-store you’re able to store products in your cart, register, log in. To check out a product with Stripe payments. Made with React, Node.js, express.js, Redux, and postgreSQL.
                                
                            </p>
                        </div>

                        <div class="projectButtonContainer">
                            <a class="demoButtons" href="https://www.youtube.com/watch?v=BKfhRIqHaEU" target="_blank">VIDEO DEMO</a>
                            <a class="demoButtons" href="https://frescostore.herokuapp.com/" target="_blank">LIVE DEMO</a>
                            {/* <a class="demoButtons">VIDEO DEMO</a> */}
                            
                        </div>
                           
                    </div>
                </div>

                <div class="screenShotContainer">
                    <div class="screenShotContainerForBorder">
                        <img class="screenShotSize" src="https://i.imgur.com/P3PFViA.jpg"></img>
                    </div>
                </div>

            </div>
            
{/* ------------------------END OF FIRST PROJECT------------------------ */}
        <div class="projectBoxContainer">
                <div class="infoContainer">
                    <div class="infoContainerThreeWay">
                        <div class="projectTitleContainer">
                            <h3>Grade Filler<a href='https://github.com/amauryplayero/Violet-list' target="_blank" class="githubDemo"><i class="devicon-github-original-wordmark"></i></a></h3>
                        </div>

                        <div class="projectTextContainer">
                            <p>
                            Significantly reduced 70% of the workload of a low-income
                            , low-personnel school administration by creating a React App
                             that automates tasks that were usually done manually.
                             This grade filler gathers grades from 
                                different excel sheets, and returns a single 
                                file with compiled and averaged grades.

                            </p>
                        </div>

                        <div class="projectButtonContainer">
                            <a class="demoButtons" href="https://main--dulcet-parfait-9875e0.netlify.app/" target="_blank">LIVE DEMO</a>
                            <a class="demoButtons" href="https://www.linkedin.com/feed/update/urn:li:activity:6935655752015511552/" target="_blank">VIDEO DEMO</a>
                        </div>
                           
                    </div>
                </div>

                <div class="screenShotContainer">
                    <div class="screenShotContainerForBorder">
                        <img class="screenShotSize" src="https://i.imgur.com/HkZYnvO.png"></img>
                    </div>
                </div>

            </div>
{/* /////////////////////////////////////// */}


{/* /////////////////////////////////////// */}
            <div class="projectBoxContainer">
                <div class="infoContainer">
                    <div class="infoContainerThreeWay">
                        <div class="projectTitleContainer">
                            <h3>Violet List <a href='https://github.com/amauryplayero/Violet-list' target="_blank" class="githubDemo"><i class="devicon-github-original-wordmark"></i></a></h3>
                        </div>

                        <div class="projectTextContainer">
                            <p>This project converts a lesson plan coming in the 
                                form of an excel file into a neatly arranged To-do
                                list using javascript, a posgreSQL database,
                                and html & CSS.
                            </p>
                        </div>

                        <div class="projectButtonContainer">
                            <a class="demoButtons" href="https://adld-deploy-demo.herokuapp.com/" target="_blank">LIVE DEMO</a>
                            <a class="demoButtons" href="https://youtu.be/vGo_wWAp6do" target="_blank">VIDEO DEMO</a>
                        </div>
                           
                    </div>
                </div>

                <div class="screenShotContainer">
                    <div class="screenShotContainerForBorder">
                        <img class="screenShotSize" src="https://i.imgur.com/8Gjn1GQ.png"></img>
                    </div>
                </div>

            </div>
            

    </div>
    </section>
  )
}
