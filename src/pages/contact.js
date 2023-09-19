import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import "bootstrap-icons/font/bootstrap-icons.css";
import { Container, Row, Col } from 'react-bootstrap'; // Import Bootstrap components

//linkedin icon
{/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
</svg> */}

//email icon

export default function Contact() {
	return (
		
		<div style={{backgroundImage:'url("beach_background.jpg")', height:'80vh', backgroundSize:'cover', boxSizing:'border-box', paddingLeft:'0', paddingRight:'0'}}>
			<div style = {{backgroundColor : 'transparent'}}>
            
			<section style={{backgroundColor: 'transparent'}}>
				<div style={{display: 'flex',width:'100%', justifyContent:'center', backgroundColor:'white', justifyItems:'center', alignItems:'center', boxSizing:'border-box', paddingLeft:'0', paddingRight:'0'}}>
					<div class="firstHalf">
						<h1 class="text-big">
							Contact Me! 
						</h1>
					</div>
				</div>
			</section>
			
			
			<div class="card border-dark mb-3" style={{width: "18rem", margin: "auto", marginTop:'20px', borderRadius:'0'}}>
			<div class="card-header">
				My Info:
			</div>
			<ul class="list-group list-group-flush">
				<li class="list-group-item">
				<a href="https://www.linkedin.com/in/alissia-rugina/" target = "_blank" style={{"text-decoration": "none"}}><i class="bi bi-linkedin"></i>  alissia-rugina</a></li>

				<li class="list-group-item">
					<a href="mailto:alissiarugina@gmail.com" target='_blank' style={{"text-decoration": "none"}}>
					<i class="bi bi-envelope"></i> alissiarugina@gmail.com</a></li>

				<li class="list-group-item"> <i class="bi bi-telephone"></i> 437-669-0888</li>
				<li class="list-group-item"> 
					<a href="https://github.com/alissiarugina" target='_blank' style={{"text-decoration": "none"}}> <i class="bi bi-github"></i> alissiarugina</a>
				</li>
			</ul>
			</div>
			</div>

				</div>
	)
}