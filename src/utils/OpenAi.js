import OpenAI from 'openai';
import { OPEN_AI_GPT_KEY } from './Constants';

// const openai = new OpenAI({
//   apiKey: OPEN_AI_GPT_KEY, // This is the default and can be omitted
// }); 
const openai = new OpenAI({
    apiKey: [OPEN_AI_GPT_KEY],
    dangerouslyAllowBrowser: true, // This is the default and can be omitted
  });

export default openai;