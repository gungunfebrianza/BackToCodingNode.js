import OpenAI from "openai";
const openai = new OpenAI();

const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
        { role: "system", content: "You are a helpful assistant." },
        {
            role: "user",
            content: "how to measure molecular weights of carbon on woody biomass for carbon accounting purpose?",
        },
    ],
});

console.log(completion.choices[0].message);