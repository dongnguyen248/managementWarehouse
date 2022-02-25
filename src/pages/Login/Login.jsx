import React from "react";
import { Container } from "react-bootstrap";
import Header from "../../components/header/Header";
import "./Login.css";

export default function Login() {
    return (
        <>
            <Header />
            <Container>
                <section className="swrap__login">
                    <div className="container py-5 h-100">
                        <div className="row d-flex align-items-center justify-content-center h-100">
                            <div className="col-md-8 col-lg-7 col-xl-6">
                                <img src={`${process.env.PUBLIC_URL}/assets/images/login1.png`} className="img-fluid" alt="login"/>
                            </div>
                            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                                <form>
                                    <div className="form-outline mb-4">
                                    <label
                                            className="form-label"
                                            htmlFor="formusername"
                                        >
                                            UserName
                                        </label>
                                        <input
                                            type="text"
                                            id="formusername"
                                            className="form-control form-control-lg"
                                            placeholder="Enter UserName"
                                        />
                                      
                                    </div>
                                    <div className="form-outline mb-4">
                                    <label
                                            className="form-label"
                                            htmlFor="formpassword"
                                        >
                                            Password
                                        </label>
                                        <input
                                            type="password"
                                            id="formpassword"
                                            className="form-control form-control-lg"
                                            placeholder="Enter Password"
                                        />

                                    </div>
                                    <button
                                        type="submit"
                                        className="btn btn-primary btn-lg btn-block"
                                    >
                                        Sign in
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </Container>
        </>
    );
}
