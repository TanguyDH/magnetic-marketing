import React, { Component } from 'react'
import { Accordion, Icon } from "semantic-ui-react";

export default class DataAndContentsFaq extends Component {
    state = { activeIndex: null };

    handleClick = (e, titleProps) => {
        const { index } = titleProps;
        const { activeIndex } = this.state;
        const newIndex =
            activeIndex === index ? -1 : index;

        this.setState({ activeIndex: newIndex });
    };
  render() {
      const { activeIndex } = this.state;
    return (
      <div className='MagnetFaq'>
            <div className="Collapse__list">
                <Accordion>
                    <div className="Collapse__box">
                        <Accordion.Title
                            className="Collapse__question"
                            active={activeIndex === 0}
                            index={0}
                            onClick={this.handleClick}
                        >
                            <Icon name="dropdown" />
                            What is the most suitable
                            offer for my company?
                             </Accordion.Title>
                        <Accordion.Content
                            className="Collapse__text"
                            active={activeIndex === 0}
                        >
                            <p>
                                We do not force you to
                                choose one offer over
                                another. but it's true that
                                everything depends on what
                                you are looking for as a
                                performance across your
                                company. A second thing to
                                consider is the stage of
                                development of your start-up
                                or your business. We know
                                very well that capital is
                                different depending on the
                                stage in the development
                                process. That's why we
                                tailor our offer to a price
                                range large enough to fit
                                your budget and allow you to
                                market your product to a
                                number of people needed and
                                likely convert them to your
                                first customers.
                               </p>
                            <p>
                                To have a more specific
                                answer to your case, please
                                contact our team they will
                                be delighted to listen to
                                you.
                               </p>
                        </Accordion.Content>
                    </div>

                    <div className="Collapse__box">
                        <Accordion.Title
                            className="Collapse__question"
                            active={activeIndex === 1}
                            index={1}
                            onClick={this.handleClick}
                        >
                            <Icon name="dropdown" />
                            What does our rates include?
                             </Accordion.Title>
                        <Accordion.Content
                            className="Collapse__text"
                            active={activeIndex === 1}
                        >
                            <p>
                                Our prices include all the
                                development processes, and
                                from the reception of your
                                transmitted data, these are
                                then processed and analyzed
                                in order to carry out a
                                targeting adapted to your
                                needs. A tailor-made mission
                                creation process is then set
                                up and a creative team works
                                to constantly create new
                                missions and take over the
                                missions that generate the
                                most engagement rates in
                                your case. The missions are
                                transmitted to the magnets
                                and then an audit takes
                                place to guarantee you that
                                you only pay the missions
                                that were carried out at
                                100%
                               </p>
                        </Accordion.Content>
                    </div>

                    <div className="Collapse__box">
                        <Accordion.Title
                            className="Collapse__question"
                            active={activeIndex === 2}
                            index={2}
                            onClick={this.handleClick}
                        >
                            <Icon name="dropdown" />
                            How do the recommendations
                            work?
                             </Accordion.Title>
                        <Accordion.Content
                            className="Collapse__text"
                            active={activeIndex === 2}
                        >
                            <p>
                                Magnets will promote your
                                product through publications
                                that correspond to them and
                                arouse the interest of their
                                subscribers. The magnets
                                obviously receive
                                indications from us and are
                                first validated and are in
                                agreement with what you
                                transmit to us. This
                                information mixes
                                information and advertising
                                to generate even more
                                interest and allows you to
                                choose the features used to
                                market your product while
                                creating entertainment. The
                                magnets are also entitled to
                                a piece of creativity in
                                their promotional content to
                                make it more personal and
                                further blend your brand
                                with their published
                                content.
                               </p>
                        </Accordion.Content>
                    </div>

                    <div className="Collapse__box">
                        <Accordion.Title
                            className="Collapse__question"
                            active={activeIndex === 3}
                            index={3}
                            onClick={this.handleClick}
                        >
                            <Icon name="dropdown" />
                            Do you offer promotions?
                             </Accordion.Title>
                        <Accordion.Content
                            className="Collapse__text"
                            active={activeIndex === 3}
                        >
                            <p>
                                Being sensitive to the
                                technological development
                                that will build the world of
                                tomorrow and make it better.
                                Please write to us with your
                                start up, please tell us
                                about the innovations you
                                bring to your project and
                                the motivations that drove
                                you to become an
                                entrepreneur. Give as much
                                information as possible to
                                 this e-mail address{" "}
                                <a href="mailto:team@heymagnetic.com">
                                    team@heymagnetic.com
                                 </a>{" "}
                                please indicate as an
                                object: we want to change
                                the world. If your project
                                is resumed we will send you
                                a unique code allowing you
                                to benefit from a bonus
                                percentage of the level of
                                people affected on a
                                campaign as well as a free
                                surprise option.
                               </p>
                        </Accordion.Content>
                    </div>

                    <div className="Collapse__box">
                        <Accordion.Title
                            className="Collapse__question"
                            active={activeIndex === 4}
                            index={4}
                            onClick={this.handleClick}
                        >
                            <Icon name="dropdown" />
                            Satisfied or refunded ?
                             </Accordion.Title>
                        <Accordion.Content
                            className="Collapse__text"
                            active={activeIndex === 4}
                        >
                            <p>
                                If after a campaign, it has
                                not satisfied you and the
                                expected results are below
                                our common expectations, we
                                invite you to fill out this
                                explanatory form to tell us
                                what was not in your
                                opinion, and we will do
                                everything we can to repair
                                the damage that has been
                                done and find a solution
                                that suits you best.
                               </p>
                        </Accordion.Content>
                    </div>
                </Accordion>
            </div>
        
      </div>
    )
  }
}
