# Universal ARIVE Merge Tags Inserter

**Version:** 1.1.0 (as per PRD)
**License:** MIT

A Chrome browser extension to streamline the process of inserting ARIVE-compatible Handlebars merge tags into text areas and input fields across various websites.

## Overview

The Universal ARIVE Merge Tags Inserter (UAMTI) is designed for users of the ARIVE Loan Origination System (LOS) and anyone who prepares HTML content, email templates, URLs, or other digital assets externally for use within ARIVE.

By simply typing `{{`, the extension presents a filterable list of predefined ARIVE merge tags. Users can quickly find and insert the correct Handlebars tag string, enhancing efficiency and reducing errors from manual typing. The extension also offers a right-click context menu option to trigger the tag list.

**Key Features:**

*   **`{{` Trigger:** Type `{{` in supported text fields to activate the tag suggestion popup.
*   **Dynamic Filtering:** As you type after `{{` (e.g., `{{borrower`), the list filters in real-time.
*   **Mouse & Keyboard Navigation:** Select tags with a click or by using arrow keys and Enter/Tab.
*   **Context Menu:** Right-click in an editable field to access "Insert ARIVE Info Tag" and bring up the tag list.
*   **Customizable Tag Library:** Merge tags are stored in a local `tags.js` file, allowing for easy manual updates by administrators.
*   **Exclusion:** The extension is specifically designed *not* to operate on URLs ending in `myarive.com` to prevent interference with the ARIVE platform itself.
*   **Lightweight & Secure:** Built with vanilla HTML, CSS, and JavaScript, with no external libraries, prioritizing security and performance.

## Goals

*   Enhance user efficiency when preparing content for ARIVE.
*   Minimize errors in tag syntax and naming.
*   Maintain a high level of security and application isolation.
*   Provide a simple system for tag library updates.
*   Offer an intuitive and unobtrusive user experience.

## Target Audience

*   Users of the ARIVE LOS system (Mortgage Loan Officers, Processors, Underwriters, Marketing personnel).
*   Individuals creating HTML email templates, website content, or other digital assets for ARIVE.
*   Users who prefer external editors before importing content into ARIVE.

## Installation

### From Chrome Web Store (Once Published)

*   (Link to be added here once the extension is published on the Chrome Web Store)

### Manual Installation (For Development/Testing)

1.  **Download or Clone:**
    *   Download the repository as a ZIP file and extract it.
    *   Or, clone the repository: `git clone https://github.com/[YourGitHubUsername]/[YourRepositoryName].git`
2.  **Open Chrome Extensions:**
    *   Open Google Chrome.
    *   Navigate to `chrome://extensions`.
3.  **Enable Developer Mode:**
    *   In the top right corner of the Extensions page, toggle on "Developer mode".
4.  **Load Unpacked Extension:**
    *   Click the "Load unpacked" button that appears.
    *   Navigate to the directory where you extracted or cloned the extension files (e.g., `universal-arive-merge-tags-inserter/`).
    *   Select the folder.
5.  **Ready to Use:** The "Universal ARIVE Merge Tags Inserter" icon should appear in your Chrome toolbar, and the extension will be active.

## Usage

1.  **`{{` Trigger:**
    *   In any supported text field (e.g., `<textarea>`, `<input type="text">`, `contenteditable` divs) on a website (that is not `myarive.com`), type `{{`.
    *   A popup will appear below your cursor with a list of available ARIVE merge tags.
    *   Continue typing after `{{` (e.g., `{{loan`) to filter the list. The filter matches against both the tag string (e.g., `{{loan.id}}`) and its descriptive label (e.g., "Loan ID").
    *   **Select a tag:**
        *   **Mouse:** Click on the desired tag in the list.
        *   **Keyboard:** Use `ArrowUp` / `ArrowDown` to highlight a tag, then press `Enter` or `Tab` to select it.
    *   The typed trigger (e.g., `{{loan`) will be replaced by the full selected tag string (e.g., `{{loan.id}}`).

2.  **Right-Click Context Menu:**
    *   Right-click inside any editable field.
    *   Select "Insert ARIVE Info Tag" from the context menu.
    *   The tag suggestion popup will appear near your mouse cursor, showing all available tags.
    *   You can then type in the main input field (if the context menu was triggered by `{{` input) or simply use the mouse/keyboard to select from the full list if triggered by pure right-click. The selection process is the same as above.

3.  **Dismissing the Popup:**
    *   The popup will automatically close when:
        *   A tag is selected.
        *   You press the `Escape` key.
        *   You click outside the popup and the triggering input field.
        *   The input field loses focus.
        *   You type a string that exactly matches a known tag.

## Customizing the Tag Library

The list of available merge tags is stored in the `tags.js` file within the extension's directory.

To update the tags:

1.  If installed manually, navigate to the extension's source folder.
2.  Open `tags.js` in a text editor.
3.  The tags are stored in an array called `ARIVE_TAGS`. Each tag is an object with two properties:
    ```javascript
    {
      tagString: "{{actual.handlebars.tag}}", // The string to be inserted
      label: "Human-Readable Description"     // The descriptive name shown in the list
    }
    ```
4.  Add, remove, or modify objects in this array as needed.
5.  Save the `tags.js` file.
6.  Go to `chrome://extensions`, find the "Universal ARIVE Merge Tags Inserter", and click its reload button (a circular arrow icon). The extension will update with the new tag library.

*(For distributing updates to end-users via the Chrome Web Store, a new version of the extension would need to be packaged and published.)*

## Technical Details

*   **Manifest Version:** 3
*   **Core Logic:** `content.js` (handles in-page interactions, popup UI, filtering, insertion)
*   **Background Script:** `background.js` (manages context menu creation)
*   **Styling:** `styles.css` (styles for the popup)
*   **Tag Data:** `tags.js` (stores the `ARIVE_TAGS` array)
*   **Permissions:**
    *   `contextMenus`: To create the right-click menu item.
    *   `scripting`: Used by context menu to interact with content script. (Though `activeTab` is also present, `scripting` is key for certain interactions if needed).
    *   `activeTab`: To interact with the current page.

## Contributing

(Optional: Add guidelines if you plan to accept contributions)
1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

## Known Issues & Limitations

*   Interaction with highly customized `contentEditable` rich text editors can sometimes lead to unexpected cursor placement or formatting loss due to the wide variance in how these editors are implemented on different websites. The extension uses standard browser APIs (`document.execCommand` and `Selection/Range API`) to mitigate this, but perfect compatibility with every conceivable editor is challenging.
*   The extension does not currently operate within Shadow DOM elements.
*   Popup positioning is viewport-aware but might have minor misalignments on complex layouts or with unusual input field styling.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
