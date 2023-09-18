import React from 'react';
//import '../App.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


export default function Home() {

	const responsive = {
		superLargeDesktop: {
		  // the naming can be any, depends on you.
		  breakpoint: { max: 4000, min: 3000 },
		  items: 4
		},
		desktop: {
		  breakpoint: { max: 3000, min: 1024 },
		  items: 4
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
		<div style={{backgroundImage:'url("beach_background.jpg")', height:'fit-content',width:'100%', alignContent:'center', backgroundSize:'cover'}}>

			<section style={{width:'100%', backgroundColor:'transparent', justifyContent:'center', alignItems:'center', boxSizing:'border-box', paddingLeft:'0', paddingRight:'0'}} >
				<div style={{display: 'flex', marginRight:'100px', justifyContent:'left', marginTop:'10px', backgroundColor:'white', width:'100%', height:'fit-content', justifyItems:'center', alignItems:'center', boxSizing:'border-box', paddingLeft:'80px', paddingRight:'0'}}>
					<div class="firstHalf" style={{justifyContent:'center'}}>
						<h1 class="text-big">
							Welcome :)  
						</h1>
						<p class='text-small'>Hope you enjoy my site! <br></br>
						Feel free to 
						<a href='/contact' style={{"text-decoration": "none"}}> contact me </a>
						 for any questions or opportunities.
						<br></br>
						<br></br>
						Thanks,
						<br></br>
						Alissia Rugina
						</p>
					</div>
				</div>
				</section>
				

			<div style={{justifyContent:'center', display:'flex'}}>
				<div style={{paddingLeft:'50px', width:'100vw',backgroundColor:'white', height:'fit-content', justifyContent:'center', alignItems:'center', borderRadius:'8px'}}>
					<Carousel responsive={responsive} autoPlay={true} infinite={true} style={{length:'100px', justifyContent:'center', display:'flex'}}>
					<div>
						<img src="pic_tulibrary.jpg" class="card-img-top" alt="..." style={{width:'80%', height:'auto'}}/>
					</div>
					<div>
						<img src="pic_skihill.jpg" class="card-img-top" alt="..." style={{width:'80%', height:'auto'}}/>
					</div>
					<div>
						<img src="pic_ski.jpg" class="card-img-top" alt="..." style={{width:'80%', height:'auto'}}/>
					</div>
					<div>
						<img src="pic_paris.jpg" class="card-img-top" alt="..." style={{width:'80%', height:'auto'}}/>
					</div>
					<div>
						<img src="pic_delft.jpg" class="card-img-top" alt="..." style={{width:'80%', height:'auto'}}/>
					</div>
					<div>
					<img src="pic_amscanal.jpg" class="card-img-top" alt="..." style={{width:'80%', height:'auto'}}/>
					</div>
					<div>
						<img src="pic_paros.jpg" class="card-img-top" alt="..." style={{width:'80%', height:'auto'}}/>
					</div>
					<div>
					<img src="pic_comostreets.jpg" class="card-img-top" alt="..." style={{width:'80%', height:'auto'}}/>
					</div>
					<div>
					<img src="pic_barca.jpg" class="card-img-top" alt="..." style={{width:'80%', height:'auto'}}/>
					</div>
					</Carousel>
					<br></br>
			</div>
			</div>
			
			<div style={{paddingLeft:'50px', width:'100vw',backgroundColor:'white', height:'fit-content', justifyContent:'center', alignItems:'center', borderRadius:'8px'}}>
					<Carousel responsive={responsive} autoPlay={true} infinite={true} style={{length:'100px', justifyContent:'center', display:'flex'}}>
					<div>
						<img src="pic_como.jpg" class="card-img-top" alt="..." style={{width:'80%', height:'auto'}}/>
					</div>
					<div>
						<img src="pic_ams.jpg" class="card-img-top" alt="..." style={{width:'80%', height:'auto'}}/>
					</div>
					<div>
					<img src="pic_alpsboot.jpg" class="card-img-top" alt="..." style={{width:'80%', height:'auto'}}/>
					</div>
					<div>
						<img src="pic_sardinia.jpg" class="card-img-top" alt="..." style={{width:'80%', height:'auto'}}/>
					</div>
					<div>
					<img src="pic_ios.jpg" class="card-img-top" alt="..." style={{width:'80%', height:'auto'}}/>
					</div>
					<div>
						<img src="pic_hamiltonsunset.jpg" class="card-img-top" alt="..." style={{width:'80%', height:'auto'}}/>
					</div>
					<div>
						<img src="pic_greece.jpg" class="card-img-top" alt="..." style={{width:'80%', height:'auto'}}/>
					</div>
					<div>
						<img src="pic_thailandtrail.jpg" class="card-img-top" alt="..." style={{width:'80%', height:'auto'}}/>
					</div>
					<div>
					<img src="pic_chamonixlift.jpg" class="card-img-top" alt="..." style={{width:'80%', height:'auto'}}/>
					</div>
					</Carousel>
					<br></br>
			</div>

		</div>
	)
}


/*
<div style={{width:'100vw',backgroundColor:'white', height:'fit-content', justifyContent:'center', alignItems:'center', borderRadius:'8px'}}>
					<Carousel responsive={responsive} style={{length:'100px', justifyContent:'center', display:'flex'}}>
					<div>
						<img src="tudelftpic.jpg" class="card-img-top" alt="..." style={{width:'80%', height:'auto'}}/>
					</div>
					<div>
						<img src="pic_alps.jpg" class="card-img-top" alt="..." style={{width:'80%', height:'auto'}}/>
					</div>
					<div>
						<img src="pic_elephant.jpg" class="card-img-top" alt="..." style={{width:'80%', height:'auto'}}/>
					</div>
					<div>
						<img src="" class="card-img-top" alt="..." style={{width:'80%', height:'auto'}}/>
					</div>
					</Carousel>;
			</div>
*/