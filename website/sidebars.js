module.exports = {
  mainSidebar: {
    'Getting Started': ["what-is-odp", "project-collaboration"],
    'Development Infrastructure': [
      {
        type: 'category',
        label: 'Continuous Integration',
        items: [
          "development-infrastructure/continuous-integration/intro",
          "development-infrastructure/continuous-integration/clojure",
          "development-infrastructure/continuous-integration/csharp",
          "development-infrastructure/continuous-integration/java",
          "development-infrastructure/continuous-integration/javascript",
          "development-infrastructure/continuous-integration/python"
        ]
      },
      {
        type: 'category',
        label: 'Code Validations',
        items: [
        "development-infrastructure/code-validation/intro",
        "development-infrastructure/code-validation/bithound",
        "development-infrastructure/code-validation/codeclimate",
        "development-infrastructure/code-validation/coverityscan",
        "development-infrastructure/code-validation/nodesecurity",
        "development-infrastructure/code-validation/sonarcloud",
        "development-infrastructure/code-validation/whitesource"
        ]
      },
      'development-infrastructure/project-documentation',
      'development-infrastructure/continuous-delivery'
    ],
    'About ODP': ["contributing","team","roadmap"],
  },
}