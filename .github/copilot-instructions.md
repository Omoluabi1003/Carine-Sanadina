* Verify package.json exists before installing dependencies.
* Run npm install before executing project testing tools.
* Do not add browser-testing dependencies unless the repository contains browser tests that require them.
* Preserve existing functionality during all modifications.
* Do not modify binary files unless explicitly requested.
* Do not delete assets, images, audio, video, fonts, PDFs, or other media.
* Avoid duplicate dependency installations.
* Preserve package versions unless explicitly requested to upgrade them.
* Validate the project remains buildable after modifications.
* Automatically correct dependency-order issues instead of repeating warnings.
* Use the safest production-compatible workflow available.
