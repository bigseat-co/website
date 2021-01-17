import * as React from "react"
import { Helmet } from "react-helmet"
import { navigate } from "gatsby"

import NotFoundImage from "../images/not-found.svg"

const goHome = () => {
  navigate('/')
}

// markup
const NotFoundPage = () => {
  return (
    <main>
      <Helmet>
        <html lang="en" />
        <title>BigSeat - Page not found</title>
        <description>Track occupancy, optimize space and integrate easily with your company stack.</description>
      </Helmet>
      <div className="wrapper">
        {/* Header */}
        <div className="container-fluid">
          <div className="row middle-xs header">
            <div className="col-lg-6 col-md-4 col-xs-2">
              <h1 className="header__logo" onClick={goHome}>
                BigSeat.
              </h1>
            </div>
          </div>
          <div className="row introduction">
            <div className="col-xs-12">
              <div className="row">
                <div className="col-xs-12">
                  <h2 className="introduction__punchline">
                    Page not found.
                  </h2>
                </div>
              </div>
              <div className="row center-xs">
                <div className="col-xs-10 col-md-6">
                  <div className="introduction__underline">
                    Please go back <a href="/">to the home page.</a>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12">
                  <div className="introduction__image">
                    <img src={NotFoundImage} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default NotFoundPage
