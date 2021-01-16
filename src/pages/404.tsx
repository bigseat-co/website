import * as React from "react"
import { Link, navigate } from "gatsby"

import IntroductionImage from "../images/introduction.svg"
import AccessibilityImage from "../images/accessibility.svg"
import AnalyticsImage from "../images/analytics.svg"
import IntegrationsImage from "../images/integrations.svg"
import TheCompanyImage from "../images/the-company.svg"
import TheProjectImage from "../images/the-project.svg"

import DownImage from "../images/down.svg"
import CheckImage from "../images/check.svg"
import CheckHighlightImage from "../images/check-highlight.svg"

const signIn = () => {
  navigate('/sign-in')
}

const plansAdvantages = {
  smallOffice: [
    { text: 'Unlimited rooms'},
    { text: 'Unlimited analytics' },
    { text: 'Unlimited integrations' },
    { text: 'Up to 10 seats available' }
  ],
  growingOffice: [
    { text: 'Unlimited rooms'},
    { text: 'Unlimited analytics' },
    { text: 'Unlimited integrations' },
    { text: 'Up to 50 seats available', highlight: true }
  ],
  bigOffice: [
    { text: 'Unlimited rooms'},
    { text: 'Unlimited analytics' },
    { text: 'Unlimited integrations' },
    { text: 'Unlimited seats', highlight: true }
  ]
}

const advantagesList = (plan: Array<{ highlight?: boolean, text: string}>) => {
  return plan.map((advantage, index) => (
    <div className="row center-xs start-md" key={index}>
      <div className="col-md-12">
        <div className={(advantage.highlight ? 'pricing-block__check--highlight' : '')}>
          <span className="pricing-block__check "><img src={(advantage.highlight ? CheckHighlightImage : CheckImage)} /></span> {advantage.text}
        </div>
      </div>
    </div>
  ))
}

// markup
const NotFoundPage = () => {
  return (
    <main>
      <div className="wrapper">
        {/* Header */}
        <div className="container-fluid">
          <div className="row header">
            <div className="col-lg-6 col-md-4 col-xs-2">
              <h1 className="header__logo">
                BigSeat.
              </h1>
            </div>
            <div className="col-lg-6 col-md-8 col-xs-10">
              <div className="row end-xs menu">
                <div className="col-sm-3 +more-than-xs">
                  <Link className="header__link" to="/#features">Features</Link>
                </div>
                <div className="col-sm-3 +more-than-xs">
                  <Link className="header__link" to="/#pricing">Pricing</Link>
                </div>
                <div className="col-sm-3 +more-than-xs">
                  <Link className="header__link" to="/#about">About</Link>
                </div>
                <div className="col-xs-8 col-sm-3">
                  <span className="menu__button" onClick={signIn}>
                    Sign in
                  </span>
                </div>
              </div>
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
                    Please go back to the home page.
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12">
                  <div className="introduction__image">
                    <img src={IntroductionImage} />
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
