#!/bin/bash
JOURNAL_FILE=".jules/sentinel.md"
DATE=$(date +%Y-%m-%d)
cat << INNER_EOF >> "$JOURNAL_FILE"

## $DATE - DOM-based XSS in components/bottom-sheet.js
**Vulnerability:** XSS vulnerability in \`components/bottom-sheet.js\`. When constructing the bottom sheet, dynamic properties like \`r.label\`, \`r.action\`, \`title\`, and \`subtitle\` were appended directly to \`innerHTML\` without being escaped.
**Learning:** Even internal UI components passing configuration objects can be vectors for DOM-based XSS if the configuration originates from potentially untrusted data or user input downstream, and those properties aren't sanitized before being injected into the DOM.
**Prevention:** Always sanitize dynamic strings using \`Utils.escapeHtml()\` and \`Utils.escapeAttr()\` before interpolating them into HTML strings that are assigned to \`innerHTML\`.
INNER_EOF
