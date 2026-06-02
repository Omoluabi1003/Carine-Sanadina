* Always run npm install before running Playwright installation commands.
* Never execute npx playwright install before dependencies exist.
* Verify package.json exists before installing dependencies.
* Verify node_modules exists before executing testing tools.
* If Playwright is missing, install @playwright/test before browser installation.
* Preserve existing functionality during all modifications.
* Do not modify binary files unless explicitly requested.
* Do not delete assets, images, audio, video, fonts, PDFs, or other media.
* Avoid duplicate dependency installations.
* Preserve package versions unless explicitly requested to upgrade them.
* Validate the project remains buildable after modifications.
* Automatically correct dependency-order issues instead of repeating warnings.
* Use the safest production-compatible workflow available.
