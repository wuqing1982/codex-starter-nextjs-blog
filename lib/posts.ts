import type { Post } from '@/types/post';

const posts: Post[] = [
  {
    slug: 'build-a-remarkable-writing-workflow',
    title: 'Build a Remarkable Writing Workflow',
    description:
      'Lessons I learned creating a sustainable writing process that makes blogging fun again.',
    publishedAt: '2023-08-02',
    readingTime: '6 min read',
    tags: ['workflow', 'writing', 'habits'],
    content: `### Embrace a systems mindset\n\nRelying on willpower alone to publish consistently is a losing strategy. Instead, break writing into predictable systems: idea capture, outlining, drafting, editing, and publishing. Automate or template whatever you can so the flow feels effortless.\n\n### Protect your curiosity\n\nInteresting writing starts with genuine curiosity. Schedule weekly time to pursue questions, interview peers, or explore rabbit holes. I treat curiosity sessions like meetings with my future self.\n\n### Draft fast, edit slow\n\nMy drafts look messy because speed is the point—I capture ideas while they are still warm. Editing is where the polish happens. Separating the two phases keeps me from self-censoring before I even finish a paragraph.\n\n### Publish in seasons\n\nI plan my posts in six-week seasons, each with a clear theme. Seasons prevent decision fatigue and make it easier for readers to know what to expect.`,
  },
  {
    slug: 'designing-with-constraints',
    title: 'Designing with Constraints',
    description:
      'How intentional constraints unlock creativity in product teams and solo side projects alike.',
    publishedAt: '2023-06-18',
    readingTime: '8 min read',
    tags: ['design', 'creativity', 'process'],
    content: `### Constraints narrow the playing field\n\nWithout boundaries it is impossible to prioritize. Constraints force tradeoffs and expose the real problem you are solving.\n\n### Partner with your constraints\n\nList every limitation—budget, time, tech stack—and reframe each one as a design collaborator. Ask, \"If the constraint were giving feedback, what would it want?\"\n\n### Ritualize retrospectives\n\nConstraints change over time. Build a habit of weekly retros to decide whether you still have the right limitations or if you need new ones to push the work forward.`,
  },
  {
    slug: 'shipping-side-projects-with-confidence',
    title: 'Shipping Side Projects with Confidence',
    description:
      'A playbook for makers who want to stop abandoning side projects and finally hit publish.',
    publishedAt: '2023-04-09',
    readingTime: '5 min read',
    tags: ['shipping', 'side projects', 'mindset'],
    content: `### Celebrate tiny launches\n\nThe longer a project stays private, the heavier it becomes. Ship features the moment they provide value, no matter how small.\n\n### Friction logs are your best friend\n\nEvery time you feel stuck, narrate the friction in a log. Reviewing the log clarifies whether you need help, a new tool, or a smaller scope.\n\n### Build a hype squad\n\nShare work-in-progress updates with friends who energize you. Their encouragement is rocket fuel on days when motivation dips.`,
  },
];

export function getAllPosts(): Post[] {
  return posts;
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}
