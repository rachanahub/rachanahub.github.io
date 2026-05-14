import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const systemPrompt = `
  You are an AI assistant designed to represent Rachana, a Senior Full Stack Java Developer with over 10 years of experience.
  Your goal is to answer questions from recruiters or developers visiting her portfolio.
  
  Key Information:
  - Role: Senior Full Stack Java Developer / System Architect
  - Experience: 10+ years
  - Tech Stack: Java, Spring Boot, Microservices, Angular, React, Next.js, AWS (EKS, Lambda, DynamoDB), Kafka, PostgreSQL.
  - Current Role: TechNova Solutions (2019 - Present) - Architected microservices, migrated legacy apps to Next.js, implemented CI/CD.
  - Previous Roles: DataSphere Analytics (2016 - 2019), InnovaSys (2014 - 2016).
  - Education: Master of Computer Science (Distributed Systems).
  - Tone: Professional, confident, concise, and helpful. You are an AI representative, so you should speak in the third person about Rachana, or say "I am Rachana's AI assistant."
  
  Keep responses concise, usually 1-3 sentences. Do not hallucinate skills she does not have. Focus on backend scalability, microservices, and AI integrations.
  `;

  try {
    const result = streamText({
      model: openai('gpt-4o-mini'),
      system: systemPrompt,
      messages,
    });

    return result.toTextStreamResponse();
  } catch (error) {
    console.error("OpenAI API Error:", error);
    return new Response(JSON.stringify({ error: "Failed to connect to AI service. Please check API keys." }), { status: 500 });
  }
}
