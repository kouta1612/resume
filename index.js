import { mdToPdf } from "md-to-pdf";

mdToPdf({ path: 'README.md' }, { dest: '職務経歴書.pdf' })
  .catch(console.error);
