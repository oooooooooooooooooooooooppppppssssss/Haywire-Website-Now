import React from 'react';
import Link from 'next/link';
import Layout from '../components/MyLayout';
import Edition from '../edition';
class index extends React.Component {
	constructor() {
		super();
		this.state = {
			wiggling: ''
		};
	}
	startTheWiggle() {
		this.setState({
			wiggling: 'wiggle'
		});
		setTimeout(() => {
			this.setState({
				wiggling: ''
			});
		}, 5000); // Bit of a nasty hack
	}
	render() {
		return (
			<Layout title="haywire">
				<div className="section a">
				<video controls autoplay loop id="backgroundvideo">
					<source src="static/backgroundvideo.mp4" type="video/mp4"/>
				</video>
					<div className="container " >
						<div className="row">
							<div class="bg-image img1"></div>
							<div class="bg-image img2"></div>
							<div class="bg-image img3"></div>
							<div class="bg-image img4"></div>
							<div className="twelve column heroImage">
								<img src="/static/logo.png" id="logo" className={this.state.wiggling}/>
							</div>
						</div>
						<div className="row">
							<div className="twelve column ">
								<h5 className="introText">
									<p>Haywire is a bi-annual student literary-art magazine of the John-F.-Kennedy School in Berlin.
										We feature original student work of many kinds: short stories, vignettes, poems, critical essays, photographs, paintings, comics, or music.</p>
										<p>Current Deadline: TBA Fall 2020
         </p>
									<p className="noBottom">Please submit your art to our magazine.
                                        Send submissions to <a href="mailto:haywire@jfks.me">haywire@jfks.me</a>
									</p>

								</h5>
											<p className="center">
									<a
										className="button button-orange largeButton "
										onClick={() => this.startTheWiggle()}
										href={Edition.url}
										download={'Haywire Issue ' + Edition.issueNumber}
									>Download {Edition.issue}
									</a>
									<br/>
									<Link href="/archive">
										<a className="button " >Archives</a>
									</Link>
                                                                        <a className="button button-orange" style={{marginLeft:15}} href="https://soundcloud.com/user-751182913/sets/issue-11">Issue Eleven Sounds</a>
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="section b">
					<div className="container">
						<div className="row">
							<h1 class="contribute">Contribute</h1>
							<p>
                Haywire magazine welcomes original stories, poems, essays and critical texts written by students of our school. We also feature students&apos; art and photography. You are welcome to submit your writing or art that you have created as a school assignment, or your own previously unpublished work.
       </p>
							<p>
                Texts need to be in an editable text format, such as Word or OpenOffice (no pdfs). Artwork and photographs can be submitted as jpegs, tiffs or pdfs, in high resolution (300 dpi).
       </p>
							<p>
                Deadline for submissions for Issue {Edition.issueNumber + 1} is <em>{Edition.nextEditionDueDate}</em>. Please include your class section, e.g. 10c, 11a, 8e with your submission.
       </p>
							<p>
			  <a href="mailto:haywire@jfks.me" className="button button-orange">Email Us Your Creations!</a>
							</p>
						</div>
					</div>
				</div>
				{/*
        <div className="section i">
          <img src="http://blydro.com/haywire-static/static/cartoon.jpg" className="sectionImage" />
        </div>
*/}
				<div className="section c">
					<div className="container">
						<div className="row">
							<div className="one-half column">
							</div>
						</div>
					</div>
				</div>
			</Layout>
		);
	}
}
export default index;
