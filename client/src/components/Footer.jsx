import React from "react";
import "../css/footer.css";
// @ts-ignore
import logo from "../img/logo.png";

export default function Footer() {
	return (
		<div>
			<footer id="footer" className="footer-area">
				<div className="container">
					<div className="row">
						<div className="col-md-4">
							<div className="logo padding">
								<img src={logo} alt="" />
								<p>
									No need of waiting. Now doctor uncle is just one click away.
									Get instant consultations at low cost on our website.
								</p>
							</div>
						</div>
						<div className="col-md-4 space">
							<div className="footer-info padding">
								<h3>CONTACT US</h3>
								<p>
									<i className="fa fa-map-marker" aria-hidden="true"></i> 630,
									IIIT Sri City, Gnan Marg, Chittoor, A.P., 517646, India
								</p>
								<p>
									<i className="fa fa-paper-plane" aria-hidden="true"></i>{" "}
									info@vaidya.com
								</p>
								<p>
									<i className="fa fa-phone" aria-hidden="true"></i> (+91)
									6969696969
								</p>
							</div>
						</div>
						<div className="col-md-4 space">
							<div className="subcriber-info">
								<h3>SUBSCRIBE</h3>
								<p>
									Get healthy news, tip and solutions to your problems from our
									experts.
								</p>
								<div className="subcriber-box">
									<form id="mc-form" className="mc-form">
										<div className="newsletter-form">
											<input
												type="email"
												autoComplete="off"
												id="mc-email"
												placeholder="Email address"
												className="form-control"
												name="EMAIL"
											/>
											<button className="mc-submit" type="submit">
												<i className="fa fa-paper-plane"></i>
											</button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</footer>

			<div className="copyright_part">
				<div className="container">
					<div className="row align-items-center">
						<p className="footer-text m-0 col-lg-8 col-md-12">
							Copyright &copy;2022. All rights reserved &emsp;|&emsp; Made with
							❤️ by <span className="name">Team 41</span>
						</p>
						<div className="col-lg-4 col-md-12 text-center text-lg-right footer-social">
							<a href="https://www.facebook.com/IIIT.SriCity/">
								<i className="fa fa-facebook"></i>
							</a>
							<a href="https://www.youtube.com/channel/UCtPC7bSr_pnTyoVgakGhL6A">
								<i className="fa fa-youtube"></i>
							</a>
							<a href="https://www.instagram.com/nitigya_joshi/">
								<i className="fa fa-instagram"></i>
							</a>
							<a href="https://twitter.com/BittuJo46968296">
								<i className="fa fa-twitter"></i>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
