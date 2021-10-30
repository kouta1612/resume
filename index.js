import { mdToPdf } from "md-to-pdf";

mdToPdf({ path: 'README.md' }, { dest: '職務経歴書.pdf' })
  .then(() => console.log('mtp done'))
  .catch(console.error);
