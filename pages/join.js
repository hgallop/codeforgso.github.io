import React from 'react'
import Page from '../components/page'

const Join = () => (
    <Page title="Join Us">
        <h1 className="title is-1">Join Us</h1>
        <div className="join content">
            <div className="join-item">
                <a
                    href="https://www.meetup.com/Code-for-Greensboro"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <div>
                        <img src="../static/meetup.svg" alt="Meetup logo" />
                    </div>
                </a>
                <p>
                    Meetup is a platform for finding and building local
                    communities. People use Meetup to meet new learn new things,
                    find support, get out of their comfort zones, and pursue
                    their passions, together.
                </p>
            </div>
            <br />
            <div className="join-item">
                <a
                    href="https://bit.ly/cfgso-slack"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <div>
                        <img src="../static/icon_slack.svg" alt="Slack logo" />
                    </div>
                </a>
                <p>
                    Slack is a collaboration hub, where the right people
                    information come together, helping everyone get work done.
                </p>
                <p>
                    If you are already a member of our Slack workspace,
                    <a
                        href="https://cfgso.slack.com"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        {' '}
                        visit now.
                    </a>
                </p>
            </div>
            <br />
            <div className="join-item">
                <h2>
                    <a href="mailto:hello@codeforgreensboro.org">Email Us</a>
                </h2>
            </div>
        </div>
    </Page>
)
//     }
// }

export default Join
