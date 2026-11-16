type LearningStage = { title: string; takeaway: string };

type Certificate = {
  recipient: string;
  program: string;
  status: string;
  badge: string;
  date: string;
  reflection: string;
  stages: readonly [LearningStage, LearningStage, LearningStage, LearningStage];
};

export const certificate = {
  recipient: 'Pranav',
  program: "Professor Predict's AI Literacy Lab",
  status: 'Completed all 4 learning stages',
  badge: 'Knows Why the Robot Sometimes Makes Stuff Up',
  date: 'November 16, 2026',
  reflection: "A confident AI response isn't necessarily a correct one. AI is most useful when we understand its limitations and verify important information.",
  stages: [
    {
      title: 'How language models respond',
      takeaway: 'I learned how next-token prediction draws on patterns in training data and how post-training shapes the responses a model gives.',
    },
    {
      title: 'Recognizing hallucinations',
      takeaway: 'The fictional Velmora question showed me how a model can generate a plausible answer without a reliable source.',
    },
    {
      title: 'Training data, privacy, and tools',
      takeaway: 'I learned to distinguish training data from private information and to recognize when an external tool is needed.',
    },
    {
      title: 'Choosing when to verify',
      takeaway: 'I identified drafting cover letters and explaining familiar algorithms as useful tasks. Legal advice, current information, and exact calculations call for additional verification.',
    },
  ],
} satisfies Certificate;
