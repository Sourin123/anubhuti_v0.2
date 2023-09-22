import React from "react";
import Header from "./components/common/header";
import Footer from "./components/common/footer";
// import aboutview from './components/views/aboutContent'

function About() {
  return (
    <>
      <Header />
      <div class="divider py-1 bg-success"></div>
      <div className="text-primary h1 text-center">About Us</div>
      <div class="divider py-1 bg-success"></div>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 g-4">
          
          <div className=" col text-muted m-auto">
            In 2019 Anuvuti Prakashan inaugurated its journey as a publishing
            house. From then it is cherishing itself continuously. We work not
            only with the well known writers, but also with the new pens. We
            always want to focus on the well written manuscripts as well. Even
            we have a printing sector where different publishers, editors can
            print books, magazines and academic books also.
          </div>

          <div className=" col">
            <img src="images/about.svg" alt="" />
          </div>
          
        </div>
      </div>
      <div class="divider py-1 bg-success"></div>

      <div className="text-center h1 text-primary-emphasis">Our Developers</div>

      <div class="divider py-1 bg-success"></div>

      <div className="row row-cols-1 row-cols-md-2 g-4 my-5">
        <div className="col">
          <div
            className="card  m-auto"
            style={{
              width: "20rem",
            }}
          >
            <img
              src="https://cdn.discordapp.com/attachments/1135201141060272280/1150979812270280805/profile-pic.png"
              alt=""
              className=" card-img-top  rounded-5 "
            />
            <div className="card-body">
              <h5 className="card-title">Mainak Majumder </h5>
              <p className="card-text"> Project Manger / Developer  </p>
              <div className=" btn-group-lg ">
                <div className=" btn mx-2">
                  <a href="mailto:mainak1112@gmail.com">
                    <i class="bi bi-envelope-at"></i>
                  </a>
                </div>
                <a href="https://www.linkedin.com/in/mainak-majumder-433b60214/">
                  <div className="btn mx-2 " style={{ color: "blue" }}>
                    <i class="bi bi-linkedin"></i>
                  </div>
                </a>

                <a href="https://github.com/mainak1023">
                  <div className=" btn mx-2">
                    <i class="bi bi-github"></i>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className=" container my-5 g-4">
            I'm a 22 years old Freelance Writer, amateur geek coder and a
            Computer Science Graduate. I have a sound knowledge in HTML , JavaScript and
            CSS. A book written by me, contains of poetry and free proses
            published on the previous year. <br />
            Currently I'm working at a Publishing House as a copywriter and
            proof-reader since 2020. <br />
            <br />I am currently searching for undergraduate research and
            internship opportunities in order to fulfill my long awaited dreams.
            Can I help you? If yes, let's connect & Talk!
          </div>
        </div>
      </div>
      <div class="divider py-1 bg-success"></div>

      <div className="row row-cols-1 row-cols-md-2 g-4 my-5">
        <div className="col">
          <div className=" container my-5 g-4">
            <p>
              Hello, I'm Sourin Saha, a skilled Full Stack developer. I
              graduated from Mankar College and have expertise in website
              design, development, and hosting. <br />
              <br />
              My passion lies in creating exceptional digital experiences. I'm
              proficient in both front-end and back-end technologies, ensuring I
              can handle every aspect of a project. I'm committed to delivering
              high-quality work within budget and on time.
              <br />
              <br />
              I take a collaborative approach, working closely with clients to
              understand their unique needs and turn their vision into reality.
              My portfolio showcases a range of projects that highlight my
              skills and expertise.
              <br />
              <br />
              If you're looking for a dedicated Full Stack developer who can
              bring your web development goals to life, let's connect. I'm
              excited to discuss how I can contribute to your next project.
              Contact me today, and let's create something amazing!
            </p>
          </div>
        </div>
        <div className="col">
          <div
            className="card  m-auto"
            style={{
              width: "20rem",
            }}
          >
            <img
              src="images/profile-pic.png"
              alt=""
              className=" card-img-top  rounded-5 "
            />
            <div className="card-body">
              <h5 className="card-title">Sourin Saha</h5>
              <p className="card-text">Full Stack Developer </p>
              <div className=" btn-group-lg ">
                <a href="mailto:sourinsaha2001@gmail.com">
                <div className=" btn mx-2">
                  <i class="bi bi-envelope-at"></i>
                </div>
                </a>
                
                <a href="https://www.linkedin.com/in/sourin-saha-3586281b7/">
                  <div className="btn mx-2 " style={{ color: "blue" }}>
                    <i class="bi bi-linkedin"></i>
                  </div>
                </a>

                <a href="https://github.com/Sourin123">
                  <div className=" btn mx-2">
                    <i class="bi bi-github"></i>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="divider py-1 bg-success"></div>

      <Footer />
    </>
  );
}

export default About;
