import fetch from "node-fetch";
import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

let handler = async (m, { text, args }) => {
  if (!args[0]) throw `Use example .simi halo`;
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `${args}`,
    temperature: 0,
    max_tokens: 600,
    top_p: 1,
    frequency_penalty: 0.5,
    presence_penalty: 0,
  });
  let res = response.data.choices[0].text;
  console.log(res);
  m.reply(res);
};
handler.command = ["simi"];
handler.tags = ["fun"];
handler.help = ["simi"];

export default handler;
