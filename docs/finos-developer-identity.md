---
id: finos-developer-identity
title: FINOS Developer Identity
---

# Background and requirements

In order to build an infrastructure whose main purpose is to enable a highly regulated industry like financial services, it is key to implement a reliable identity management, that allows:

- **FINOS Team** to store and maintain CLAs signed by firms and individuals, which is used to enforce IP compliance across all hosted code (CLA bot)
- **FINOS Members** to have direct control over their employee accessibility (grant and revoke)
- **FINOS Contributors** to self sign up, providing their corporate identity (ie email and GitHub ID)

Right now the FINOS team tracks all this data internally, by reacting to the contributions coming from [GitHub](http://github.com/finos) (for code hosting), [Atlassian Confluence Cloud](http://finosfoundation.atlassian.net/wiki) (for Wiki) and [Google Groups](https://groups.google.com/a/finos.org) (for mailing-lists); as a result, requirements #2 and #3 are not currently satisfied.

The identity data is stored in a private database, along with the signed [CCLAs](https://www.finos.org/hubfs/FINOS/governance/FINOS%20CCLA%202018-04-24.pdf?t=1524433584989) and [ICLAs](https://www.finos.org/hubfs/FINOS/governance/FINOS%20ICLA%202018-04-24.pdf?t=1524433584989) submitted so far from firms (and individual contributors) and is only accessible by the FINOS Team.

# Tasks
- [ODP-1](finosfoundation.atlassian.net/browse/ODP-1)
- [ODP-4](finosfoundation.atlassian.net/browse/ODP-4)

## FINOS identity bot
Email and Symphony chat are (based on the metrics we collected for the last 20 months) the most accessible and common communication platform across FINOS members, and given that bots have been already implemented to solve similar accessibility issues (see [bot-github-chatops](https://github.com/finos-osr/bot-github-chatops)), we could adopt a similar approach to manage developer identities.

The FINOS ID bot would run continuously (on FINOS containerised infrastructure) and is configured with a list of point of contacts (extracted from FINOS internal metadata) that are email addresses (or Symphony users) allowed to submit commands; any other message sent by any other user will be ignored. All FINOS staff will be able to use this bot.

The bot will restrict point of contacts operations only on identities affiliated with their firm; for example, the point of contact for MyFirm will be restricted to only manage identities @myfirm.com .

## Sign Up Form ([ODP-1]((finosfoundation.atlassian.net/browse/ODP-1)))

Build a sign up form on [finos.org/odp](http://www.finos.org/odp), open to everyone, with a Submit button and the following fields:
- Full name (mandatory)
- Organisation (mandatory)
- Corporate email address (mandatory)
- GitHub Project URL (mandatory)
- GitHub ID (mandatory)
- Personal email address (optional)
- Trial access to hosted platforms, ie Symphony API (multi-select checkbox)

Upon form submit:
* If the corporate email address (and GitHub ID) is already registered…
    1. Answer to the form submitter via email accordingly
* If the Organisation or the corporate email address domain matches with any firm that signed a CCLA with FINOS…
    1. Forward the email to the company point of contact for CCLA validation
    2. Notify via email the form submitter that a request to the firm point of contact have been submitted
* Else…
    1. Answer via email to the form submitter, by pointing to [FINOS requirements for contribution](https://finosfoundation.atlassian.net/wiki/spaces/FINOS/pages/75530375/Legal+Requirements#LegalRequirements-RequirementsforContributions) (embed text in the email and add link for more info)

*Initially, this form could be manually processed by the Infra team, using some predefined email templates to answer.*
