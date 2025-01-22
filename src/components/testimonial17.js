import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './testimonial17.css'

const Testimonial17 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial17-max-width thq-section-max-width">
        <div className="testimonial17-container10">
          <h2 className="thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="testimonial17-text37">Testimonials</span>
              </Fragment>
            )}
          </h2>
          <span className="testimonial17-text11 thq-body-small">
            {props.content1 ?? (
              <Fragment>
                <span className="testimonial17-text30">
                  Working with Landfill Eliminators has been a game-changer for
                  our company. Their innovative approach to recycling ash and
                  creating man-made islands has helped us reduce our
                  environmental impact significantly.
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="thq-grid-2">
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card1"
              >
                <div className="testimonial17-container12">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="testimonial17-image1"
                  />
                  <div className="testimonial17-container13">
                    <strong className="thq-body-large">
                      {props.author1Name ?? (
                        <Fragment>
                          <span className="testimonial17-text33">John Doe</span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author1Position ?? (
                        <Fragment>
                          <span className="testimonial17-text24">
                            CEO of Eco Solutions Inc.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text14 thq-body-small">
                  {props.review1 ?? (
                    <Fragment>
                      <span className="testimonial17-text28">
                        I never thought building houses on man-made islands
                        created from recycled ash was possible until I saw the
                        work of Landfill Eliminators. Truly inspiring!
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card2"
              >
                <div className="testimonial17-container14">
                  <img
                    alt={props.author2Alt}
                    src={props.author2Src}
                    className="testimonial17-image2"
                  />
                  <div className="testimonial17-container15">
                    <strong className="thq-body-large">
                      {props.author2Name ?? (
                        <Fragment>
                          <span className="testimonial17-text36">
                            Jane Smith
                          </span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author2Position ?? (
                        <Fragment>
                          <span className="testimonial17-text35">
                            Architect at Green Designs
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text17 thq-body-small">
                  {props.review2 ?? (
                    <Fragment>
                      <span className="testimonial17-text29">
                        Landfill Eliminators is leading the way in sustainable
                        construction practices. Their dedication to eliminating
                        landfills and repurposing waste is commendable.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card3"
              >
                <div className="testimonial17-container16">
                  <img
                    alt={props.author3Alt}
                    src={props.author3Src}
                    className="testimonial17-image3"
                  />
                  <div className="testimonial17-container17">
                    <strong className="thq-body-large">
                      {props.author3Name ?? (
                        <Fragment>
                          <span className="testimonial17-text26">
                            Michael Johnson
                          </span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author3Position ?? (
                        <Fragment>
                          <span className="testimonial17-text27">
                            Environmental Activist
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text20 thq-body-small">
                  {props.review3 ?? (
                    <Fragment>
                      <span className="testimonial17-text31">
                        I have collaborated with Landfill Eliminators on several
                        projects, and each time I am impressed by their
                        commitment to creating a greener future through
                        innovative solutions.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card4"
              >
                <div className="testimonial17-container18">
                  <img
                    alt={props.author4Alt}
                    src={props.author4Src}
                    className="testimonial17-image4"
                  />
                  <div className="testimonial17-container19">
                    <strong className="thq-body-large">
                      {props.author4Name ?? (
                        <Fragment>
                          <span className="testimonial17-text32">
                            Sarah Lee
                          </span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author4Position ?? (
                        <Fragment>
                          <span className="testimonial17-text25">
                            Urban Planner
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text23 thq-body-small">
                  {props.review4 ?? (
                    <Fragment>
                      <span className="testimonial17-text34">
                        The work done by Landfill Eliminators not only benefits
                        the environment but also provides a unique and
                        sustainable housing solution. I highly recommend their
                        services.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial17.defaultProps = {
  author2Alt: 'Image of Jane Smith',
  author1Position: undefined,
  author4Position: undefined,
  author3Name: undefined,
  author3Position: undefined,
  review1: undefined,
  review2: undefined,
  author3Alt: 'Image of Michael Johnson',
  content1: undefined,
  author1Alt: 'Image of John Doe',
  review3: undefined,
  author4Name: undefined,
  author2Src:
    'https://images.unsplash.com/photo-1541585452861-0375331f10bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNzMyMzkyOHw&ixlib=rb-4.0.3&q=80&w=1080',
  author4Src:
    'https://images.unsplash.com/photo-1658149771802-524836bf3f47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNzMyMzkyOHw&ixlib=rb-4.0.3&q=80&w=1080',
  author1Name: undefined,
  author4Alt: 'Image of Sarah Lee',
  author1Src:
    'https://images.unsplash.com/photo-1508186225823-0963cf9ab0de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNzMyMzkyOHw&ixlib=rb-4.0.3&q=80&w=1080',
  author3Src:
    'https://images.unsplash.com/photo-1641288883869-c463bc6c2a58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNzMyMzkyOXw&ixlib=rb-4.0.3&q=80&w=1080',
  review4: undefined,
  author2Position: undefined,
  author2Name: undefined,
  heading1: undefined,
}

Testimonial17.propTypes = {
  author2Alt: PropTypes.string,
  author1Position: PropTypes.element,
  author4Position: PropTypes.element,
  author3Name: PropTypes.element,
  author3Position: PropTypes.element,
  review1: PropTypes.element,
  review2: PropTypes.element,
  author3Alt: PropTypes.string,
  content1: PropTypes.element,
  author1Alt: PropTypes.string,
  review3: PropTypes.element,
  author4Name: PropTypes.element,
  author2Src: PropTypes.string,
  author4Src: PropTypes.string,
  author1Name: PropTypes.element,
  author4Alt: PropTypes.string,
  author1Src: PropTypes.string,
  author3Src: PropTypes.string,
  review4: PropTypes.element,
  author2Position: PropTypes.element,
  author2Name: PropTypes.element,
  heading1: PropTypes.element,
}

export default Testimonial17
