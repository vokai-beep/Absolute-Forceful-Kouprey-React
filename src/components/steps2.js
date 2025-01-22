import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './steps2.css'

const Steps2 = (props) => {
  return (
    <div className="steps2-container1 thq-section-padding">
      <div className="steps2-max-width thq-section-max-width">
        <div className="steps2-container2 thq-grid-2">
          <div className="steps2-section-header">
            <h2 className="thq-heading-2">
              Discover the Power of Our Innovation
            </h2>
            <p className="thq-body-large">
              Our company is at the forefront of innovative waste management,
              transforming trash into sustainable solutions. We burn waste while
              meticulously purifying the smoke, ensuring minimal environmental
              impact. The ashes generated from this process serve as a key
              component in constructing man-made islands, creating essential
              housing and infrastructure. By repurposing waste in this way, we
              not only reduce landfill dependency but also contribute to a
              circular economy, fostering a cleaner environment and providing
              much-needed solutions for urban development. Our approach
              exemplifies how waste can be turned into valuable resources,
              paving the way for a sustainable future.
            </p>
            <div className="steps2-actions">
              <button className="thq-button-animated thq-button-filled steps2-button">
                <span className="thq-body-small">Main action</span>
              </button>
            </div>
          </div>
          <div className="steps2-container3">
            <div className="steps2-container4 thq-card">
              <h2 className="thq-heading-2">
                {props.step1Title ?? (
                  <Fragment>
                    <span className="steps2-text31">Initial Assessment</span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.step1Description ?? (
                  <Fragment>
                    <span className="steps2-text29">
                      Our team conducts a thorough assessment of the landfill
                      site to see if it is fit for upgrading its facilities
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps2-text15 thq-heading-3">01</label>
            </div>
            <div className="steps2-container5 thq-card">
              <h2 className="thq-heading-2">
                {props.step2Title ?? (
                  <Fragment>
                    <span className="steps2-text28">Ash Recycling Process</span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.step2Description ?? (
                  <Fragment>
                    <span className="steps2-text30">
                      We collect your trashes, as we begin the process of
                      burning them and purification of the smoke that it
                      produces. Then we collect the ashes left behind.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps2-text18 thq-heading-3">02</label>
            </div>
            <div className="steps2-container6 thq-card">
              <h2 className="thq-heading-2">
                {props.step3Title ?? (
                  <Fragment>
                    <span className="steps2-text27">Island Construction</span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.step3Description ?? (
                  <Fragment>
                    <span className="steps2-text25">
                      Using the ashes as one of the main component for man-made
                      island.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps2-text21 thq-heading-3">03</label>
            </div>
            <div className="steps2-container7 thq-card">
              <h2 className="thq-heading-2">
                {props.step4Title ?? (
                  <Fragment>
                    <span className="steps2-text26">
                      Infrastructure Building
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.step4Description ?? (
                  <Fragment>
                    <span className="steps2-text32">
                      Finally, we build eco-friendly houses on the man-made
                      island, providing sustainable living solutions for
                      communities. As well as infrastructures, for business or
                      utility, benefitting the growth of economy.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps2-text24 thq-heading-3">04</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Steps2.defaultProps = {
  step3Description: undefined,
  step4Title: undefined,
  step3Title: undefined,
  step2Title: undefined,
  step1Description: undefined,
  step2Description: undefined,
  step1Title: undefined,
  step4Description: undefined,
}

Steps2.propTypes = {
  step3Description: PropTypes.element,
  step4Title: PropTypes.element,
  step3Title: PropTypes.element,
  step2Title: PropTypes.element,
  step1Description: PropTypes.element,
  step2Description: PropTypes.element,
  step1Title: PropTypes.element,
  step4Description: PropTypes.element,
}

export default Steps2
