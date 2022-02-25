import React from "react";
import { Form, FormControl, Container, Button } from "react-bootstrap";
import Header from "../../components/header/Header";
import "./Login.css";

export default function () {
    return (
        <>
            <Header />
            <Container>
                <section className="swrap__login">
                    <div className="container py-5 h-100">
                        <div className="row d-flex align-items-center justify-content-center h-100">
                            <div className="col-md-8 col-lg-7 col-xl-6">
                                <img src={`${process.env.PUBLIC_URL}/assets/images/login1.png`} className="img-fluid" alt="Phone image"/>
                            </div>
                            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                                <form>
                                    <div className="form-outline mb-4">
                                    <label
                                            className="form-label"
                                            htmlFor="form1Example13"
                                        >
                                            UserName
                                        </label>
                                        <input
                                            type="text"
                                            id="form1Example13"
                                            className="form-control form-control-lg"
                                            placeholder="Enter UserName"
                                        />
                                      
                                    </div>

                                    <div className="form-outline mb-4">
                                    <label
                                            className="form-label"
                                            htmlFor="form1Example23"
                                        >
                                            Password
                                        </label>
                                        <input
                                            type="password"
                                            id="form1Example23"
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
