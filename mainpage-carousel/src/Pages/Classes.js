import React from "react";
import NavigationBarFinal from "../Components/NavigationBarFinal";
import Footer from "../Components/Footer";

const Classes = () => {
	return (
        <>
			<NavigationBarFinal />
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-12 col-md-10 col-lg-8">
						<h1 className="text-center">Classes</h1>
						<h3 className="text-center mb-5 ">
							We offer a selection of packages and options
						</h3>

						<div className="card mb-4">
							<div className="card-body">
								<h4 className="card-title text-center">Single Class</h4>
								<p className="card-text text-center">A La Carte</p>
								<h5 className="card-text text-center">$10</h5>
								{/* Add a photo here? */}
							</div>
						</div>

						<div className="card mb-4">
							<div className="card-body">
								<h4 className="card-title text-center">5 Class Package</h4>
								<p className="card-text text-center">Expires after 30 days</p>
								<h5 className="card-text text-center">$40</h5>
							</div>
						</div>

						<div className="card mb-4">
							<div className="card-body">
								<h4 className="card-title text-center">10 Class Package</h4>
								<p className="card-text text-center">Expires after 30 days</p>
								<h5 className="card-text text-center">$60</h5>
							</div>
						</div>

						<div className="card mb-4">
							<div className="card-body">
								<h3 className="card-title text-center">Challenges</h3>
								<p className="card-text text-center">Coming Soon</p>
								{/* Add a photo */}
							</div>
						</div>

						<div className="card mb-4">
							<div className="card-body">
								<h4 className="card-title text-center">2 week Challenge</h4>
								<p className="card-text text-center">Coming Soon</p>
								<h5 className="card-text text-center">$50</h5>
							</div>
						</div>

						<div className="card mb-4">
							<div className="card-body">
								<h4 className="card-title text-center">4 week Challenge</h4>
								<p className="card-text text-center">Coming Soon</p>
								<h5 className="card-text text-center">$80</h5>
							</div>
						</div>

						<div className="card mb-4">
							<div className="card-body">
								<h4 className="card-title text-center">6 week Challenge</h4>
								<p className="card-text text-center">Coming Soon</p>
								<h5 className="card-text text-center">$100</h5>
							</div>
						</div>
						<div className="row justify-content-center">
							<div className="col-md-4 text-center">
							<form
									action="https://www.paypal.com/cgi-bin/webscr"
									method="post"
									target="_top"
								>
									<input type="hidden" name="cmd" value="_s-xclick"></input>
									<input
										type="hidden"
										name="hosted_button_id"
										value="VBTC9Y4BMEMYN"
									></input>
									<table>
										<tr>
											<td>
												<input
													type="hidden"
													name="on0"
													value="Select Class Here"
												></input>
												Select Class Here
											</td>
										</tr>
										<tr>
											<td>
												<select name="os0">
													<option value="Single Class">
														Single Class $10.00 USD
													</option>
													<option value="5 Class Package">
														5 Class Package $40.00 USD
													</option>
													<option value="10 Class Package">
														10 Class Package $60.00 USD
													</option>
													<option value="30 Day Access Pass">
														30 Day Access Pass $75.00 USD
													</option>
													<option value="2 week Challenge">
														2 week Challenge $50.00 USD
													</option>
													<option value="4 week Challenge">
														4 week Challenge $80.00 USD
													</option>
													<option value="6 week Challenge">
														6 week Challenge $100.00 USD
													</option>
												</select>
											</td>
										</tr>
									</table>
									<input type="hidden" name="currency_code" value="USD"></input>
									<input
										type="image"
										src="https://www.paypalobjects.com/en_US/i/btn/btn_paynowCC_LG.gif"
										border="0"
										name="submit"
										alt="PayPal - The safer, easier way to pay online!"
									></input>
									<img
										alt=""
										border="0"
										src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
										width="1"
										height="1"
									></img>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
            <Footer />
		</>
	);
};

export default Classes;
