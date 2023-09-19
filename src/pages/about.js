import React from 'react';
import '../App.css';
import { Container, Row, Col } from 'react-bootstrap';
// https://getbootstrap.com/docs/5.3/components/card/

function About() {
	return (
		<div style={{width:'100%', backgroundImage:'url("beach_background.jpg")', height:'100vh', backgroundSize:'cover'}}>
			<section style={{width:'100%', backgroundColor:'transparent', justifyContent:'center', alignItems:'center',  boxSizing:'border-box', paddingLeft:'0', paddingRight:'0'}} >
				<div style={{display: 'flex', justifyContent:'center', width:'100%', backgroundColor:'white', justifyItems:'center', alignItems:'center',  boxSizing:'border-box', paddingLeft:'0', paddingRight:'0'}}>
					<div class="firstHalf" style={{justifyContent:'center'}}>
						<h1 class="text-big">
							About Me! 
						</h1>
					</div>
				</div>
				</section>

				<div >
				<Container style={{display: 'flex', justifyContent:'center', marginTop:'20px'}}>
				<Row>
					<Col>
					<div class="card border-dark mb-3" style={{width: "18rem", borderRadius:'0'}}>
					<img style={{borderRadius:'0'}}  src="tudelftpic.jpg" class="card-img-top" alt="..."/>
					<div class="card-body">
						<h5 class="card-title">My Education</h5>
						<p class="card-text">
						</p>
					</div>
					<ul class="list-group list-group-flush">
						<li class="list-group-item"><strong>Thornlea Secondary School</strong>: <br></br>Completed highschool following the French Immerison Program.</li>
						<li class="list-group-item"> <strong>Delft University of Technology</strong>: <br></br> I went abroad to The Netherlands for 3 years and graduated with a Bachelors' in Computer Science & Engineering.</li>
						<li class="list-group-item"><strong>Vrije Universiteit Amsterdam</strong>: <br></br>
						Through the Bachelors program I completed a Minor Program in Applied Econometrics at Vrije.</li>
					</ul>
					</div>
					</Col>
					<Col>
					<div class="card border-dark mb-3" style={{width: "18rem",  borderRadius:'0'}}>
					<img style={{borderRadius:'0'}}  src="snowboardpic.jpg" class="card-img-top" alt="..."/>
					<div class="card-body">
						<h5 class="card-title">My Interests</h5>
						<p class="card-text"> </p>
					</div>
					<ul class="list-group list-group-flush">
						<li class="list-group-item">Tech & Business</li>
						<li class="list-group-item">Sports: <br></br>Snowboarding <br></br>Running 
						(<a href="https://www.strava.com/athletes/alissia_r" target = "_blank" style={{"text-decoration": "none"}} > check out my Strava! </a>)</li>
						<li class="list-group-item">Travelling</li>
					</ul>
					</div>
					</Col>
					<Col>
					<div class="card border-dark mb-3" style={{width: "18rem",  borderRadius:'0'}}>
					<img  style={{borderRadius:'0'}} src="https://images.unsplash.com/photo-1605853892843-002250989e7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dG9yb250byUyMHNreWxpbmV8ZW58MHx8MHx8fDA%3D&w=1000&q=80" class="card-img-top" alt="..."/>
					<div class="card-body">
						<h5 class="card-title">My Goals</h5>
						<p class="card-text">
						Now, after graduating in June 2023, I have returned to Toronto to find a job in the tech/business idustry! 
						I am interested in any entry level roles ranging from software development to business analyst, or anything in between!</p>
					</div>
					<ul class="list-group list-group-flush">
						
					</ul>
					</div>
					</Col>
				</Row>
				</Container> 
				</div>


		</div>
	)
}

export default About

//class="d-flex justify-content-center"