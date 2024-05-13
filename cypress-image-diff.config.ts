const config = {
    ROOT_DIR: 'visual-test',
    SCREENSHOTS_DIR: 'screenshots', // The SCREENSHOTS_DIR specifies where all the screenshots are saved. It's relative to the ROOT_DIR.
    FAILURE_THRESHOLD: 0.1, // is the failure threshold for the whole comparison
    COMPARISON_OPTIONS: { threshold: 0.2 },  // is the failure threshold for the whole comparison

    RETRY_OPTIONS: {
        log: true,
        limit: 50, // max number of iterations
        timeout: 30000, // time limit in ms
        delay: 300, // delay before next iteration, ms
        FAIL_ON_MISSING_BASELINE: true, //Boolean to determine whether to fail a test if its baseline doesn't exist, default to false.
      },

      JSON_REPORT: {    // https://cypress.visual-image-diff.dev/getting-started/custom-config-file/json_report
        FILENAME: 'cypress_visual_report',
        OVERWRITE: true,
      }, 

      //ROOT_DIR: 'visual-test', // https://cypress.visual-image-diff.dev/getting-started/custom-config-file/report_dir
      REPORT_DIR: 'visual-test-report',
  };
  
  module.exports = config;