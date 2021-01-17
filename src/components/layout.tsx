import React from "react"
import { Helmet } from "react-helmet"

import { Link } from "gatsby"
import { goHome, signIn, bottomSignUp } from '../helpers/navigate'

/* <Helmet>
<html lang="en" />
<title>BigSeat - Office space made simple.</title>
<description>Track occupancy, optimize space and integrate easily with your company stack.</description>
</Helmet> */

export default function Layout({ children, datoCmsMenu }) {
  return (<main>
    <div className="wrapper">
      {/* Header */}
      <div className="container-fluid">
        <div className="row middle-xs header">
          <div className="col-lg-6 col-md-4 col-xs-2">
            <h1 className="header__logo" onClick={goHome}>
              BigSeat.
            </h1>
          </div>
          <div className="col-lg-6 col-md-8 col-xs-10">
            <div className="row end-xs middle-xs menu">
              <div className="col-sm-3 +more-than-xs">
                <Link className="header__link" to="#features">
                  {datoCmsMenu.features}
                </Link>
              </div>
              <div className="col-sm-3 +more-than-xs">
                <Link className="header__link" to="#pricing">Pricing</Link>
              </div>
              <div className="col-sm-3 +more-than-xs">
                <Link className="header__link" to="#about">About</Link>
              </div>
              <div className="col-xs-8 col-sm-3">
                <span className="menu__button" onClick={signIn}>
                  Sign in
                </span>
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
                    Get started now.
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
