import * as React from "react"
import { graphql } from "gatsby"

import { learnHow, signUp, goDown, selectSmallOffice, selectGrowingOffice, selectBigOffice} from '../helpers/navigate'

import IntroductionImage from "../images/introduction.svg"
import AccessibilityImage from "../images/accessibility.svg"
import AnalyticsImage from "../images/analytics.svg"
import IntegrationsImage from "../images/integrations.svg"
import TheCompanyImage from "../images/the-company.svg"
import TheProjectImage from "../images/the-project.svg"

import DownImage from "../images/down.svg"
import CheckImage from "../images/check.svg"
import CheckHighlightImage from "../images/check-highlight.svg"

import Layout from "../components/layout"

export const query = graphql`
  query MenuQuery {
    datoCmsMenu(locale: { eq: "en" }) {
      features
      pricing
      about
      signIn
    }
  }
`

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

const IndexPage = ({ data }) => {
  return (
    <main>
      <Layout datoCmsMenu={data.datoCmsMenu}>
        <div className="container-fluid">
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
                <div className="col-xs-12 col-md-6">
                  <div className="introduction__underline">
                    Track occupancy, optimize space and integrate easily with your company stack.
                  </div>
                </div>
              </div>
              <div className="row center-xs">
                <div className="introduction__buttons">
                  <button className="button" onClick={signUp}>
                    Sign up free now
                  </button>
                  <button className="button button--white-alt" onClick={learnHow}>
                    Learn how we do it
                  </button>
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
        {/* Features */}
        <div className="container-fluid">
          <div className="row center-xs features" id="features">
            <div className="col-lg-8 col-md-10 col-xs-12">
              <div className="row">
                <div className="col-xs-12">
                  <h2 className="features__punchline">
                    It's that simple
                  </h2>
                </div>
              </div>
              <div className="row features-block middle-xs center-xs">
                <div className="col-xs-12 col-sm-5">
                  <h3 className="features-block__title">Accessibility</h3>
                  <p className="features-block__text">Nothing to install, fast sign-up and super simple interface. You can setup your office space in a few clicks and let people book it by sending them your company link.</p>
                </div>
                <div className="col-xs-12 first-xs col-sm-5 last-sm col-md-5 col-md-offset-1">
                  <div className="features-block__image">
                    <img src={AccessibilityImage} />
                  </div>
                </div>
              </div>
              <div className="row features-block middle-xs center-xs">
              <div className="col-xs-12 col-sm-5 col-sm-offset-1">
                  <div className="features-block__image">
                    <img src={AnalyticsImage} />
                  </div>
                </div>
                <div className="col-xs-12 col-sm-5 col-md-offset-1">
                  <h3 className="features-block__title">Analytics</h3>
                  <p className="features-block__text">We digest data for you so you don't have to worry about space optimization. You'll know who's where at any moment and save real rental money by reading our analysis.</p>
                </div>
              </div>
              <div className="row features-block middle-xs center-xs">
                <div className="col-xs-12 col-sm-5">
                  <h3 className="features-block__title">Integrations</h3>
                  <p className="features-block__text">Each company has its stack and we want you to feel you have to adapt. That's why we integrate easily with several solutions such as Slack, Notion or Zapier so you can easily adopt our system.</p>
                </div>
                <div className="col-xs-12 first-xs col-sm-5 last-sm col-md-5 col-md-offset-1">
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
                    A plan for each size
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
                      <div className="col-xs-10 col-md-12">
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
                  <div className="pricing-block" data-sal="zoom-in" data-sal-delay="100" data-sal-easing="ease-out-back">
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
                      <div className="col-xs-10 col-md-12">
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
                  <div className="pricing-block" data-sal="zoom-in" data-sal-delay="300" data-sal-easing="ease-out-back">
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
                      <div className="col-xs-10 col-md-12">
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
                    About us
                  </h2>
                </div>
              </div>
              <div className="row features-block middle-xs center-xs">
                <div className="col-xs-12 col-sm-5">
                  <h3 className="features-block__title">The project</h3>
                  <p className="features-block__text">The world is changing and people relation with offices as well. Working partially from home, or going to the office once in a while. Softwares should evolve and be able to manage this properly. Our goal is to be your office space management solution through our simplicity and flexibility.</p>
                </div>
                <div className="ccol-xs-12 first-xs col-sm-5 last-sm col-md-5 col-md-offset-1">
                  <div className="features-block__image">
                    <img src={TheProjectImage} />
                  </div>
                </div>
              </div>
              <div className="row features-block middle-xs center-xs">
              <div className="col-xs-12 col-sm-5">
                  <div className="features-block__image">
                    <img src={TheCompanyImage} />
                  </div>
                </div>
                <div className="col-xs-12 col-sm-5 col-md-offset-1">
                  <h3 className="features-block__title">The company</h3>
                  <p className="features-block__text">Born in January 2021, it was founded by Laurent Schaffner and Jérémie Ges which are both engineers. It's still in closed beta and waiting for your feedbacks.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  </main>
  )
}

export default IndexPage
