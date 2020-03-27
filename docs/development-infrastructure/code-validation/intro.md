---
id: intro
title: Code Validation
---

In order to assess Security, Quality and Legal compliance of software hosted by the Foundation, project leads and committers can configure integrations with third-party systems that are provided by the Foundation; the result of these processes can be published in the project's documentation to improve the final consumer experience and when requesting activation.

Below is the list of code validation systems currently available, across supported languages and validation features.

## Security vulnerabilities responsible disclosure
Read the [FINOS security vulnerabilities responsible disclosure](https://finosfoundation.atlassian.net/wiki/spaces/FINOS/pages/1230176257/Security+vulnerabilities+responsible+disclosure) document to know how security incidents are managed across FINOS projects. Use [WhiteSource](whitesource) to configure your FINOS project for automated scanning.

## Matrix of validation features and supported languages

| Features | C# | Clojure | Java | Javascript | Python |
|--- | :---: | :---: | :---: | :---: | :---: |
| **Legal compliance** | 
| Check libraries for problematic/undefined licenses | [WhiteSource](whitesource) | [WhiteSource](whitesource) | [WhiteSource](whitesource) | [WhiteSource](whitesource) | [WhiteSource](whitesource) |
| Generates legal reports | [WhiteSource](whitesource) | [WhiteSource](whitesource) | [WhiteSource](whitesource) | [WhiteSource](whitesource) | [WhiteSource](whitesource) |
| **Security** |
| Scans code for security vulnerabilities | [CoverityScan](coverityscan), [SonarCloud](sonarcloud) | | [CodeClimate](codeclimate), [CoverityScan](coverityscan), [SonarCloud](sonarcloud) | [CodeClimate](codeclimate), [NodeSecurity](nodesecurity),[SonarCloud](sonarcloud) | |
| Check libraries for security vulnerabilities | [WhiteSource](whitesource) | [WhiteSource](whitesource) | [WhiteSource](whitesource) | [WhiteSource](whitesource), [BitHound](bithound) | [WhiteSource](whitesource) |
| **Quality** | | | | | |
| Measures test coverage | [SonarCloud](sonarcloud) | | [CodeClimate](codeclimate),[SonarCloud](sonarcloud) | [CodeClimate](codeclimate), [SonarCloud](sonarcloud) | |
| Check libraries for bugs | [WhiteSource](whitesource) | [WhiteSource](whitesource) | [WhiteSource](whitesource) | [WhiteSource](whitesource), [BitHound](bithound) | [WhiteSource](whitesource) |
| Check libraries for outdated versions | [WhiteSource](whitesource) | [WhiteSource](whitesource) | [WhiteSource](whitesource) | [WhiteSource](whitesource), [BitHound](bithound) | [WhiteSource](whitesource) |
| Check unused libraries | | | | [BitHound](bithound) | |
| Check libraries for release activity | [WhiteSource](whitesource) | [WhiteSource](whitesource) | [WhiteSource](whitesource) | [WhiteSource](whitesource) | [WhiteSource](whitesource) |
| Scans code for hacks and todos | | | | [BitHound](bithound) | |
| Scans code for bad practices | [CoverityScan](coverityscan) | | [CodeClimate](codeclimate), [CoverityScan](coverityscan) | [CodeClimate](codeclimate) | |
| Scans code for bugs | [CoverityScan](coverityscan) | | [CoverityScan](coverityscan) | | |
