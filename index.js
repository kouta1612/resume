import { mdToPdf } from "md-to-pdf";

mdToPdf({ path: 'README.md' }, { dest: 'README.pdf' })
  .then(() => console.log('mtp done'))
  .catch(console.error);
