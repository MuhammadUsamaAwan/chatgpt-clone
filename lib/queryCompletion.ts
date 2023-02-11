import openai from './openai';

const queryCompletion = async (prompt: string, model: string) => {
  try {
    const res = await openai.createCompletion({
      model,
      prompt,
      temperature: 0.9,
      top_p: 1,
      max_tokens: 1000,
      frequency_penalty: 0,
      presence_penalty: 0,
    });
    return res.data.choices[0].text;
  } catch (error: any) {
    return `ChatGPT was unable to find an answer for that: (Error: ${error?.message})`;
  }
};

export default queryCompletion;
