import React from "react"
import { Helmet } from "react-helmet"

import { Link } from "gatsby"
import { goHome, signIn, bottomSignUp } from '../helpers/navigate'

export default function Layout({ children, datoCmsMenu }) {
  return (<main>
    <Helmet>
      <html lang="en" />
      <title>BigSeat - Office space made simple.</title>
      <description>Track occupancy, optimize space and integrate easily with your company stack.</description>
    </Helmet>
    <div className="wrapper">
      {/* Header */}
      <div className="header">
        <div className="container-fluid">
          <div className="row middle-xs">
            <div className="col-lg col-md-4 col-xs-2">
              <h1 className="header__logo" onClick={goHome}>
                BigSeat.
              </h1>
            </div>
            <div className="col-lg col-md-8 col-xs-10">
              <div className="header__items">
                <div className="header__item">
                  <Link className="header__link" to="#features">
                    {datoCmsMenu.features}
                  </Link>
                </div>
                <div className="header__item">
                  <Link className="header__link" to="#pricing">
                    {datoCmsMenu.pricing}
                  </Link>
                </div>
                <div className="header__item">
                  <Link className="header__link" to="#about">
                    {datoCmsMenu.about}
                  </Link>
                </div>
                <div className="header__item header__item--sign-in">
                  <button className="button button--white-alt" onClick={signIn}>
                    {datoCmsMenu.signIn} ->
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Page content */}
      {children}
      {/* Footer */}
      <div className="banner">
        <div className="container-fluid">
          <div className="row center-xs">
            <div className="col-xs-12 col-sm-8">
              <div className="row">
                <div className="col-xs-12">
                  <div className="banner__punchline">
                    Get started now
                  </div>
                </div>
              </div>
              <div className="row center-xs">
                <div className="col-xs-12 col-sm-6">
                  <div className="banner__underline">
                    It takes you less than <span className="banner__underline--time">5 minutes</span> to sign-up and start using ou product.
                  </div>
                </div>
              </div>
              <div className="row center-xs">
                <div className="col-lg-4 col-md-6">
                  <div className="button button--white" onClick={bottomSignUp}>
                    Sign up free now
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>)
}
