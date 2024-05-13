import { defineConfig } from 'cypress-image-diff-html-report'

// import { generate } from 'cypress-image-diff-html-report'

// ;(async () => {
//   await generate({
//     configFile: 'custom.config.js',
//     // ...
//   })
// })()

// import { generate } from 'cypress-image-diff-html-report'

// ;(async () => {
//   await generate({
//     configFile: 'cypress-image-diff.config.ts',
//     // ...
//   })
// })()

export default defineConfig({
    reportJsonDir: 'visual-test/visual-test-report',
    outputDir: 'visual-test/visual-test-report',
    reportJsonFilePath: 'visual-test/visual-test-report/cypress_visual_report.json'
})