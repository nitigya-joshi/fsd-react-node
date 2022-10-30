import React from "react";
import Headi from "../components/Header"
import Foote from "../components/Footer";
import { Link } from "react-router-dom";
import "../css/home.css";
// @ts-ignore
import banner5 from "../img/banner_5.png";
// @ts-ignore
import videoCall from "../img/video-call.png";
// @ts-ignore
import about from "../img/about.png";
// @ts-ignore
import appointment from "../img/appointment.png";
// @ts-ignore
import doctor5 from "../img/doctor_5.png";
// @ts-ignore
import forum from "../img/disc_forum.png";
// @ts-ignore
import chatbot from "../img/chatbot.png";

export default function Home() {
	function clickFunc(s) {
		// location.href = s;
		<Link to={s} />;
	}

	return (
		<>
			<Headi />
			<section className="banner_part">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-5 col-xl-5">
							<div className="banner_text">
								<div
									className="banner_text_iner"
									data-aos="fade-right"
									data-aos-duration="1300"
								>
									<h5>Improving the Quality of Your Life at Home.</h5>
									<h1 style={{ fontWeight: "700" }}>
										Outstanding care, Always.
									</h1>

									<p>
										Instead of waiting in lines and wasting time, seeing a
										doctor online for any kind of periodical consultations seems
										to be a great option. And all that at a reasonable price
										with our team of best doctors!
									</p>
									<a href="/doctors" className="btn_2">
										Make an appointment
									</a>
								</div>
							</div>
						</div>

						<div className="col-lg-7">
							<div className="banner_img">
								<img
									src={banner5}
									alt="consulting doctor"
									id="doc"
									data-aos="fade-left"
									data-aos-duration="1300"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>

			<div
				className="heading justify-content-center d-flex mt-5"
				data-aos="flip-right"
				data-aos-duration="1300"
			>
				<h2>About Us</h2>
			</div>

			<section className="bg-light page2">
				<div className="page-section about_us">
					<div className="container">
						<div className="row align-items-center">
							<div
								className="col-lg-6 col-md-6 me-auto"
								data-aos="fade-up-right"
								data-aos-duration="1300"
							>
								<div className="img-place custom-img-1">
									<img src={about} alt="" />
								</div>
							</div>

							<div
								className="col-lg-5 col-md-6 py-3 ms-auto text"
								data-aos="fade-up-left"
								data-aos-duration="1300"
							>
								<h1>Welcome to our Health Center</h1>
								<hr />
								<p className="text-grey mb-4 mt-4">
									Looking for a trusted & secured online dr consultation in
									India?
									<br />
									Consult a doctor online on Vaidya for any health concern. Our
									pool of over 1000 trusted doctors across 25+ specialties will
									ensure all your health queries are answered. You can get
									online dr advice from a Psychiatrist, Dermatologist,
									Gynecologist, Sexologist, Pediatrician, Cardiologist,
									Neurologist, Gastroenterologist, Urologist, Endocrinologist,
									Dentist, Psychologist, and many more.
								</p>
								<a href="about.html" className="btn_2">
									Learn More
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>

			<div
				className="heading justify-content-center d-flex"
				data-aos="flip-right"
				data-aos-duration="1300"
			>
				<h2 className="mt-5">Our services</h2>
			</div>

			<section className="feature_part">
				<div className="container">
					<div className="row justify-content-between align-items-center">
						<div className="col-lg-3 col-sm-12">
							<div className="single_feature">
								<div
									className="single_feature_part"
									data-aos="fade-right"
									data-aos-duration="1300"
									onClick={() => clickFunc("/video-call")}
								>
									<span className="single_feature_icon">
										<img src={videoCall} alt="" />
									</span>
									<h4>Live doc</h4>
									<p>
										Connect securely anytime, anywhere with 24*7 doctors
										available just for you. Completely private and confidential.
									</p>
								</div>
							</div>
							<div className="single_feature">
								<div
									className="single_feature_part"
									data-aos="fade-right"
									data-aos-duration="1300"
									onClick={() => clickFunc("/bookappointment")}
								>
									<span className="single_feature_icon">
										<img src={appointment} alt="" />
									</span>
									<h4>Appointments</h4>
									<p>
										Book appointments with our certified partner doctors,
										clinics, hospitals and receive personalized care.
									</p>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-sm-12">
							<div
								className="single_feature_img"
								data-aos="zoom-in"
								data-aos-duration="1300"
								onClick={() => clickFunc("/forum")}
							>
								<img src={doctor5} alt="services" />
							</div>
						</div>
						<div className="col-lg-3 col-sm-12">
							<div className="single_feature">
								<div
									className="single_feature_part"
									data-aos="fade-left"
									data-aos-duration="1300"
								>
									<span className="single_feature_icon">
										<img src={forum} alt="" />
									</span>
									<h4>Discussion forum</h4>
									<p>
										Community healthcare discussion and advice. Our forum covers
										health issues, treatment, medication and symptoms.
									</p>
								</div>
							</div>
							<div className="single_feature">
								<div
									className="single_feature_part"
									data-aos="fade-left"
									data-aos-duration="1300"
								>
									<span className="single_feature_icon">
										<img src={chatbot} alt="chatbot" />
									</span>
									<h4>Chat bot</h4>
									<p>
										Our chatbot will try its best to clear your queries
										instantly. It will get you up with commonly asked questions.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<div
				className="heading justify-content-center d-flex"
				data-aos="flip-right"
				data-aos-duration="1300"
			>
				<h2>Pricing</h2>
			</div>

			<div id="price" className="section pr">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div className="tab-content">
								<div className="tab-pane active">
									<div className="row text-center">
										<div
											className="col-md-12 col-lg-4"
											data-aos="zoom-in-right"
											data-aos-duration="1300"
										>
											<div className="pricing-table">
												<div className="pricing-table-header">
													<h2>Basic</h2>
													<h3>₹300 / one-time</h3>
												</div>
												<div className="pricing-table-features">
													<p>
														<i className="fa fa-clock"></i>{" "}
														<strong>30 mins</strong>
														Appointment
													</p>
													<p>
														<i className="fa fa-rocket"></i> <strong>1</strong>{" "}
														appointment
													</p>
												</div>
												<div className="pricing-table-sign-up">
													<a
														href="#contact"
														data-scroll=""
														className="btn btn_2"
													>
														Buy Now
													</a>
												</div>
											</div>
										</div>

										<div
											className="col-md-12 col-lg-4"
											data-aos="zoom-in"
											data-aos-duration="2500"
										>
											<div className="pricing-table pricing-table-highlighted">
												<div className="pricing-table-header grd1">
													<h2
														style={{
															fontWeight: "700",
															letterSpacing: "0.1em",
														}}
													>
														VIP
													</h2>
													<h3>₹4999 / month</h3>
												</div>
												<div className="pricing-table-space"></div>
												<div className="pricing-table-text">
													<p>
														Premium service for our <strong>VIP</strong>{" "}
														patients.
													</p>
												</div>
												<div className="pricing-table-features">
													<p>
														<i className="fa fa-clock"></i>{" "}
														<strong>30 mins</strong>
														Appointment
													</p>
													<p>
														<i className="fa fa-rocket"></i> <strong>20</strong>{" "}
														appointments/month
													</p>
													<p>
														<i className="fa fa-life-ring"></i>{" "}
														<strong>24/7 Unlimited</strong> Support
													</p>
												</div>
												<div className="pricing-table-sign-up">
													<a
														href="#contact"
														data-scroll=""
														className="btn btn_2 grd1"
													>
														Buy Now
													</a>
												</div>
											</div>
										</div>
										<div
											className="col-md-12 col-lg-4"
											data-aos="zoom-in-left"
											data-aos-duration="1300"
										>
											<div className="pricing-table">
												<div className="pricing-table-header">
													<h2>Regular</h2>
													<h3>₹1999 / month</h3>
												</div>
												<div className="pricing-table-features">
													<p>
														<i className="fa fa-envelope-o"></i>{" "}
														<strong>1 hr</strong> Appointment
													</p>
													<p>
														<i className="fa fa-rocket"></i> <strong>10</strong>{" "}
														appointments/month
													</p>
													<p>
														<i className="fa fa-life-ring"></i>{" "}
														<strong>24/7 Unlimited</strong> Support
													</p>
												</div>
												<div className="pricing-table-sign-up">
													<a
														href="#contact"
														data-scroll=""
														className="btn btn_2"
													>
														Buy Now
													</a>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Foote />
		</>
	);
}
