import express from 'express';
import router from './router.js';

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(router);

export default app;
// 1. Check for Duplicates in Name. [DONE]
// 2. Name must be present. [DONE]
// 3. If active is true then Purpose must be present. [DONE]
// 4. Display Error Message to user. [DONE]
// 5. Keep User Input after Error Message. [DONE]
// 6. Display Duplicate Name Error to User somehow