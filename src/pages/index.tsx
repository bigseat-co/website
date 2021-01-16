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

const signUp = () => {
  navigate('/sign-up')
}

const learnHow = () => {
  navigate('#features')
}

const goDown = () => {
  navigate('#features')
}

const selectSmallOffice = () => {
  navigate('/sign-up')
}

const selectGrowingOffice = () => {
  navigate('/sign-up')
}

const selectBigOffice = () => {
  navigate('/sign-up')
}

const bottomSignUp = () => {
  navigate('/sign-up')
}


const plansAdvantages = {
  smallOffice: [
    { text: 'Unlimited spaces'},
    { text: 'Unlimited analytics' },
    { text: 'Unlimited integrations' },
    { text: 'Up to 10 seats available' }
  ],
  growingOffice: [
    { text: 'Unlimited spaces'},
    { text: 'Unlimited analytics' },
    { text: 'Unlimited integrations' },
    { text: 'Up to 50 seats available', highlight: true }
  ],
  bigOffice: [
    { text: 'Unlimited spaces'},
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
const IndexPage = () => {
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
                  <Link className="header__link" to="#features">Features</Link>
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
          <div className="row introduction">
            <div className="col-xs-12">
              <div className="row">
                <div className="col-xs-12">
                  <h2 className="introduction__punchline">
                    Office space made simple.
                  </h2>
                </div>
              </div>
              <div className="row center-xs">
                <div className="col-xs-10 col-md-6">
                  <div className="introduction__underline">
                    Track occupancy, optimize space and integrate easily with your company stack.
                  </div>
                </div>
              </div>
              <div className="row center-xs">
                <div className="col-lg-8 col-md-10 col-xs-12">
                  <div className="row middle-xs center-xs">
                    <div className="col-md-4 col-xs-12">
                      <span className="button" onClick={signUp}>
                        Sign up free now
                      </span>
                    </div>
                    <div className="col-md-4 col-xs-12">
                      <div className="link" onClick={learnHow}>
                        Learn how we do it
                      </div>
                    </div>
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
              <div className="row">
                <div className="col-xs-12">
                  <div className="introduction__down">
                    <img src={DownImage} onClick={goDown} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Features */}
        <div className="container-fluid">
          <div className="row center-xs features" id="features">
            <div className="col-lg-8 col-md-10 col-xs-12">
              <div className="row">
                <div className="col-xs-12">
                  <h2 className="features__punchline">
                    It's that simple.
                  </h2>
                </div>
              </div>
              <div className="row features-block middle-xs start-xs">
                <div className="col-xs-5">
                  <h3 className="features-block__title">Accessibility.</h3>
                  <p className="features-block__text">Nothing to install, fast sign-up and super simple interface. You can setup your office space in a few clicks and let people book it by sending them your company link.</p>
                </div>
                <div className="col-xs-6 col-md-5 col-xs-offset-1 col-md-offset-2">
                  <div className="features-block__image">
                    <img src={AccessibilityImage} />
                  </div>
                </div>
              </div>
              <div className="row features-block middle-xs start-xs">
              <div className="col-xs-6">
                  <div className="features-block__image">
                    <img src={AnalyticsImage} />
                  </div>
                </div>
                <div className="col-xs-5 col-md-5 col-xs-offset-1">
                  <h3 className="features-block__title">Analytics.</h3>
                  <p className="features-block__text">We digest data for you so you don't have to worry about space optimization. You'll know who's where at any moment and save real rental money by reading our analysis.</p>
                </div>
              </div>
              <div className="row features-block middle-xs start-xs">
                <div className="col-xs-5">
                  <h3 className="features-block__title">Integrations.</h3>
                  <p className="features-block__text">Each company has its stack and we want you to feel you have to adapt. That's why we integrate easily with several solutions such as Slack, Notion or Zapier so you can easily adopt our system.</p>
                </div>
                <div className="col-xs-6 col-md-5 col-xs-offset-1 col-md-offset-2">
                  <div className="features-block__image">
                    <img src={IntegrationsImage} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Pricing */}
        <div className="container-fluid">
          <div className="row center-xs pricing" id="pricing">
            <div className="col-xs-12 col-md-10 col-lg-8">
              <div className="row">
                <div className="col-xs-12">
                  <h2 className="pricing__punchline">
                    A plan for each size.
                  </h2>
                </div>
              </div>
              <div className="row">
                {/* Small office */}
                <div className="col-xs-12 col-sm-4">
                  <div className="pricing-block">
                    <div className="row center-xs">
                      <div className="col-xs-12">
                        <div className="pricing-block__title">
                          Small office
                        </div>
                      </div>
                    </div>
                    <div className="row center-xs">
                      <div className="col-xs-12">
                        <div className="pricing-block__price">
                          Free
                        </div>
                      </div>
                    </div>
                    <div className="row center-xs">
                      <div className="col-xs-12">
                        <div className="pricing-block__price-frequency">
                          forever
                        </div>
                      </div>
                    </div>
                    <div className="row center-xs start-md">
                      <div className="col-xs-5 col-sm-10 col-md-12">
                        <div className="pricing-block__description">
                          This is our most basic plan. It provides unlimited spaces, analytics and integrations and a few available seats for small structures.
                        </div>
                      </div>
                    </div>
                    {advantagesList(plansAdvantages.smallOffice)}
                    <div className="row start-xs">
                      <div className="col-xs-12 center-xs">
                        <div className="pricing-block__button">
                          <div className="button button--white" onClick={selectSmallOffice}>
                            Sign up free now
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Growing office */}
                <div className="col-xs-12 col-sm-4">
                  <div className="pricing-block">
                    <div className="row center-xs">
                      <div className="col-xs-12">
                        <div className="pricing-block__title">
                          Growing office
                        </div>
                      </div>
                    </div>
                    <div className="row center-xs">
                      <div className="col-xs-12">
                        <div className="pricing-block__price">
                          $19<span className="pricing-block__price--cents">.90</span>
                        </div>
                      </div>
                    </div>
                    <div className="row center-xs">
                      <div className="col-xs-12">
                        <div className="pricing-block__price-frequency">
                          per month
                        </div>
                      </div>
                    </div>
                    <div className="row center-xs start-md">
                      <div className="col-xs-5 col-sm-10 col-md-12">
                        <div className="pricing-block__description">
                          If you’re a growing company and have too many employees for our free version, this one will fit you perfectly. You can try it out before taking a decision.
                        </div>
                      </div>
                    </div>
                    {advantagesList(plansAdvantages.growingOffice)}
                    <div className="row">
                      <div className="col-xs-12 center-xs">
                        <div className="pricing-block__button">
                          <div className="button" onClick={selectGrowingOffice}>
                            Try for free
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Big office */}
                <div className="col-xs-12 col-sm-4">
                  <div className="pricing-block">
                    <div className="row center-xs">
                      <div className="col-xs-12">
                        <div className="pricing-block__title">
                          Big office
                        </div>
                      </div>
                    </div>
                    <div className="row center-xs">
                      <div className="col-xs-12">
                        <div className="pricing-block__price">
                          $49<span className="pricing-block__price--cents">.90</span>
                        </div>
                      </div>
                    </div>
                    <div className="row center-xs">
                      <div className="col-xs-12">
                        <div className="pricing-block__price-frequency">
                          per month
                        </div>
                      </div>
                    </div>
                    <div className="row center-xs start-md">
                      <div className="col-xs-5 col-sm-10 col-md-12">
                        <div className="pricing-block__description">
                        You’re a bigger, more established company which needs an unlimited amount of seats? No worry, here’s the perfect fit for you.
                        </div>
                      </div>
                    </div>
                    {advantagesList(plansAdvantages.bigOffice)}
                    <div className="row">
                      <div className="col-xs-12 center-xs">
                        <div className="pricing-block__button">
                          <div className="button" onClick={selectBigOffice}>
                            Try for free
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
        {/* About us */}
        <div className="container-fluid">
          <div className="row center-xs features" id="about">
            <div className="col-lg-8 col-md-10 col-xs-12">
              <div className="row">
                <div className="col-xs-12">
                  <h2 className="features__punchline">
                    About us.
                  </h2>
                </div>
              </div>
              <div className="row features-block middle-xs start-xs">
                <div className="col-xs-5">
                  <h3 className="features-block__title">The project</h3>
                  <p className="features-block__text">The world is changing and people relation with offices as well. Working partially from home, or going to the office once in a while. Softwares should evolve and be able to manage this properly. Our goal is to be your office space management solution through our simplicity and flexibility.</p>
                </div>
                <div className="col-xs-6 col-md-5 col-xs-offset-1 col-md-offset-2">
                  <div className="features-block__image">
                    <img src={TheProjectImage} />
                  </div>
                </div>
              </div>
              <div className="row features-block middle-xs start-xs">
              <div className="col-xs-5">
                  <div className="features-block__image">
                    <img src={TheCompanyImage} />
                  </div>
                </div>
                <div className="col-xs-6 col-md-5 col-xs-offset-1">
                  <h3 className="features-block__title">The company.</h3>
                  <p className="features-block__text">Born in January 2021, it was founded by Laurent Schaffner and Jérémie Ges which are both engineers. It's still in closed beta and waiting for your feedbacks.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Get started now */}
        <div className="banner">
          <div className="container-fluid">
            <div className="row center-xs">
              <div className="col-xs-8">
                <div className="row">
                  <div className="col-xs-12">
                    <div className="banner__punchline">
                      Get started now.
                    </div>
                  </div>
                </div>
                <div className="row center-xs">
                  <div className="col-xs-6">
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
    </main>
  )
}

export default IndexPage
