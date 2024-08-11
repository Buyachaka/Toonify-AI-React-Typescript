const OPEN_AI_SYSTEM_PROMPT = `You are an expert image analyst. You can extract accurate information from an image.
Your Job is to accept an image which can be a photo of a human and respond with as much details as you can.
Give additional details about facial expression, shape of specs if person has wore specs, pose of the person, hair style, type and color of outfit, person race and skin color, hand expression, type of beard person has if one has, details about facial anatomy, color of skin, camera angle, how much of a person is visible`

const OPENAI_USER_PROMPT =
  'Here is an image. Analyze carefully and give me the details'

const prefix = 'Create a 3D rendered image of a stylized cartoon character based on following prompt, make it beautiful and detailed:'


export const generatePrompt = async (base64Image: string, apiKey: string): Promise<string> => {
  const promptResponse: Response = await fetch(
    'https://api.openai.com/v1/chat/completions',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o',
        max_tokens: 4096,
        temperature: 0,
        messages: [
          {
            role: 'system',
            content: OPEN_AI_SYSTEM_PROMPT,
          },
          {
            role: 'user',
            content: [
              {
                type: 'image_url',
                image_url: {
                  url: base64Image,
                },
              },
              {
                type: 'text',
                text: OPENAI_USER_PROMPT,
              },
            ],
          },
        ],
      }),
    },
  )
  const promptResponseJSON = await promptResponse.json()
  if (!promptResponse.ok) {
    // @ts-ignore
    throw new Error(promptResponseJSON?.error?.message, {
      cause: promptResponseJSON?.error,
    })
  }
  return promptResponseJSON?.choices[0]?.message?.content
}

export const generateImage = async (prompt: string, apiKey: string): Promise<string> => {
  const imageGenerationResponse = await fetch(
    'https://api.openai.com/v1/images/generations',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'dall-e-3',
        prompt: prefix + prompt,
        n: 1,
        size: '1024x1024',
      }),
    },
  )
  const imageGenerationResponseJSON = await imageGenerationResponse.json()
  if (!imageGenerationResponse.ok) {
    // @ts-ignore
    throw new Error(imageGenerationResponseJSON?.error?.message, {
      cause: imageGenerationResponseJSON?.error,
    })
  }
  return imageGenerationResponseJSON.data[0].url
}
