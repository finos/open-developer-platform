---
id: odp-service-catalog
title: ODP Service Catalog
---

# Background and requirements

The Open Developer Platform (ODP) is - as it stands today - a loose collection of services and tools that enable collaborative open source software development across FINOS members (and the financial services industry at large).

The ODP Working Group allows build automation vendors to contribute services to ODP, assuming that:
1. The ODP Working Group identifies a need/requirement for FINOS members
2. One or more FINOS members confirm their interest to use the service via ODP and have access to it
3. A vendor representative joins the ODP Working Group, to help deploying and integrating the service with the existing ODP platform

Using a containerised architecture for the ODP hosted services could be a good technical track to investigate, given that:
1. Red Hat - one of FDX Program sponsors - provides Open Shift as runtime environment for ODP and has a lot of experience advocating containerised architectures
2. Drastically lowers the effort of service consumption and deployment, making FINOS operations easier and simplifying collaboration with vendors
3. Allows reusability of vendors services beyond ODP, adding value to consumers (who can use the same developer workflow also for proprietary or inner source code) and vendors (for their marketing activities)
4. Allows to track consumption, by [simply pulling data from Docker Hub](https://www.brianchristner.io/how-to-track-docker-hub-metrics/); this is an extremely valuable metric, which would be otherwise impossible to track effectively (across all platforms/eco-systems)

The ODP Service Catalog is basically the Docker Image repository that hosts all services used by ODP; OpenShift will provide a dashboard to all ODP users (this relates to [FINOS Developer Identity epic](https://github.com/finos-fdx/odp-wiki/wiki/%5Bepic%5D-finos-developer-identity)) which will allow them to spin up services against the FINOS hosted repositories.

This epic may be strictly related with the activity of the [Containerised Architectures Working Group](https://finosfoundation.atlassian.net/wiki/spaces/FDX/pages/154534026/Containerized+Architectures+Working+Group).
