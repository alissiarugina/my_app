import React from 'react';
//import '../App.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


export default function Home() {

	const responsive = {
		superLargeDesktop: {
		  // the naming can be any, depends on you.
		  breakpoint: { max: 4000, min: 3000 },
		  items: 3
		},
		desktop: {
		  breakpoint: { max: 3000, min: 1024 },
		  items: 3
		},
		tablet: {
		  breakpoint: { max: 1024, min: 464 },
		  items: 2
		},
		mobile: {
		  breakpoint: { max: 464, min: 0 },
		  items: 1
		}
	  };

	return (
		<div style={{backgroundImage:'url("beach_background.jpg")', height:'100vh', alignContent:'center', backgroundSize:'cover'}}>

			<div style={{justifyContent:'center', display:'flex'}}>
				<div style={{width:'100vw',backgroundColor:'white', height:'fit-content', justifyContent:'center', alignItems:'center', borderRadius:'8px'}}>
					<Carousel responsive={responsive} style={{length:'100px', justifyContent:'center', display:'flex'}}>
					<div>
						<img src="tudelftpic.jpg" class="card-img-top" alt="..." style={{width:'80%', height:'auto'}}/>
					</div>
					<div>Item 2</div>
					<div>Item 3</div>
					<div>Item 4</div>
					</Carousel>;
			</div>
			</div>
			
			<section class="section" style={{backgroundColor:'transparent'}}>
			<div margin='10px'></div>
				<br></br>
				<div class="box-main" style={{marginTop:'10px', backgroundColor:'white', height:'fit-content', justifyItems:'center', alignItems:'center', borderRadius:'8px'}}>
					<div class="firstHalf" justifyItems='center'>
						<div style={{height:'fit-content', justifyItems:'center', alignItems:'center', textAlign:'center'}}>
						<h1 class="text-big" textAlign='center'>
							Hello! 
						</h1>
						</div>
						<p class="text-small">
						I'm currently searching for a job in Toronto, Canada.
						<br></br>
						Feel free to contact me with any questions
						or possible opportunities!
						<br></br>
						Thanks,
						<br></br>
						Alissia Rugina
						</p>

						</div>
					</div>

					
			</section>

			
			

		</div>
	)
}


