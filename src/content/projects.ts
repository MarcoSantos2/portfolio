type CaseStudySection = { title: string; text: string };

export type Project = {
  slug: 'wibo' | 'six-hops' | 'gravity-rules' | 'aidconnect' | 'kaggle';
  name: string;
  summary: string;
  contribution: string;
  technologies: string[];
  primaryLink?: { label: string; url: string };
  showcaseLink?: { label: string; url: string };
  impact?: string;
  testimonial?: { quote: string; author: string };
  caseStudy: CaseStudySection[];
};

export const githubUrl = 'https://github.com/MarcoSantos2';
export const linkedInUrl = 'https://www.linkedin.com/in/marco-s-1a7036267/';

export const notebooks = [
  {
    name: 'Histopathologic Cancer Detection',
    area: 'Computer vision',
    summary: 'Compared a custom CNN with transfer learning using ResNet18 to classify pathology image patches.',
    result: '0.9794 validation ROC AUC for ResNet18 in the notebook’s experiment.',
    url: `${githubUrl}/kaggle-competition-CNN-Cancer-Detection/blob/main/kaggle.ipynb`,
  },
  {
    name: 'BBC News Classification',
    area: 'Natural language processing',
    summary: 'Used TF-IDF, logistic regression, and an SVM to classify articles into five news categories.',
    result: 'Compared individual classifiers with a soft-voting ensemble.',
    url: `${githubUrl}/kaggle-competition-BBC-news-classification/blob/main/kaggle.ipynb`,
  },
];

export const projects: Project[] = [
  {
    slug: 'wibo',
    name: 'WiBo',
    summary: 'A voice AI interviewer for product designers to practice timed whiteboard challenges.',
    contribution: 'I founded WiBo and took it from idea to launch as its full-stack developer, building real-time voice, an interactive whiteboard, and a post-interview debrief.',
    impact: 'People have used WiBo to prepare for interviews and gone on to land jobs.',
    testimonial: {
      quote: 'WiBo is one of the most effective UX whiteboarding tools out there. It does a great job of simulating a real whiteboard interview, all the way down to the random prompt generation, timed session, and collaborative feedback with the AI interviewer. I would recommend it to anyone who needs to brush up on their whiteboarding skills, or is brand new to this interview format.',
      author: 'Lauren H.',
    },
    technologies: ['React', 'TypeScript', 'Node.js', 'OpenAI Realtime', 'WebSockets', 'PostgreSQL'],
    primaryLink: { label: 'Visit WiBo', url: 'https://wibo.chat/' },
    caseStudy: [
      {
        title: 'Bring the interview into one place',
        text: 'Candidates can sketch, think aloud, and respond to follow-up questions against a clock. I built the session around an Excalidraw canvas with the interviewer, timer, and conversation in the same workspace.',
      },
      {
        title: 'Handle pauses and interruptions',
        text: 'A candidate might go quiet while sketching and then finish the same thought. I built the browser audio flow and a WebSocket relay to OpenAI Realtime, with short-lived session tickets and controls for when to respond or stop playback.',
      },
      {
        title: 'Give candidates something to revisit',
        text: 'I built session history and debriefs so candidates can see what went well and where their answers needed more detail. I also built document ingestion and retrieval to supply relevant context to the interviewer.',
      },
    ],
  },
  {
    slug: 'six-hops',
    name: 'Six Hops to Target',
    summary: 'A daily movie puzzle and multiplayer race to connect two actors.',
    contribution: 'I took Six Hops from idea to launch, building daily puzzles, live multiplayer rooms, and a post-match view that shows both players the winning path.',
    impact: 'More than 15,000 players have tried the game.',
    testimonial: {
      quote: 'I am loving it and I’ve been trying to find something like this for a bit, so I have enjoyed adding it to my daily routine.',
      author: 'Amie R.',
    },
    technologies: ['React', 'TypeScript', 'Express', 'PostgreSQL', 'Firebase'],
    primaryLink: { label: 'Play Six Hops', url: 'https://www.sixhopstotarget.com/' },
    caseStudy: [
      {
        title: 'Make every move understandable',
        text: 'Players alternate between actors and films. I built the game around that rule and rendered the finished route as a single chain so players can see how each connection works.',
      },
      {
        title: 'Make the race work for both players',
        text: 'I built live rooms, random matchmaking, a shared timer, and reconnect handling. After a match, both players see the winning route through the actors and movies.',
      },
      {
        title: 'Keep common lookups fast',
        text: 'I added a time-based cache and request rate limiting around the movie data API. In my measurements, cache hits brought common actor, movie, and cast lookups from about 250 ms to under 5 ms.',
      },
    ],
  },
  {
    slug: 'gravity-rules',
    name: 'Gravity Rules',
    summary: 'A 90-second arena game where stealing the crown changes everyone’s gravity.',
    contribution: 'I built Gravity Rules for the Create a Multiplayer Game challenge from Handshake and OpenAI, then made it playable as an intermission for Six Hops. Players can compete against bots or start a room with friends.',
    technologies: ['React', 'TypeScript', 'Canvas 2D', 'Web Workers'],
    primaryLink: { label: 'Play Gravity Rules', url: 'https://www.sixhopstotarget.com/gravity-rules' },
    showcaseLink: { label: 'Handshake and OpenAI challenge entry', url: 'https://app.joinhandshake.com/ai-showcase/projects/3570830' },
    caseStudy: [
      {
        title: 'Make the crown change the game',
        text: 'Players steer through the arena, dodge spikes, and collect stars. Holding the crown doubles the value of stars and lets its holder change the direction of gravity for everyone.',
      },
      {
        title: 'Let players start a round their way',
        text: 'A solo player can jump in against three bots. Friends can create or join a room and compete to collect the most stars before time runs out.',
      },
    ],
  },
  {
    slug: 'aidconnect',
    name: 'AidConnect',
    summary: 'Authentication and onboarding for an app that helps healthcare aides organize their work.',
    contribution: 'I worked on sign-up, login, Google OAuth, password recovery, and email notifications during my backend internship.',
    technologies: ['TypeScript', 'Node.js', 'Express', 'TypeORM', 'MySQL', 'EJS'],
    primaryLink: { label: 'View backend repo', url: `${githubUrl}/user_auth_hca` },
    testimonial: {
      quote: 'In short: if you’re looking for someone who is self-motivated, intelligent, engaged, and eager to grow, Marco is exactly that. I wholeheartedly recommend him for any role where development acumen, learning agility, and initiative are valued. He will be a standout contributor to any team lucky enough to have him.',
      author: 'Felipe S., AidConnect lead developer and founder',
    },
    caseStudy: [
      {
        title: 'Support two ways to sign in',
        text: 'The Express API supports email and password alongside Google sign-in. Route handlers pass the authenticated identity to the user service, which connects it to an account and issues a session token.',
      },
      {
        title: 'Recover an account by email',
        text: 'The password recovery flow emails a time-limited reset link, verifies the request, and clears the reset state after the password changes. I also built templated emails for account events.',
      },
      {
        title: 'Check access at the API boundary',
        text: 'Authentication middleware verifies the session token before protected requests reach controllers. Role and permission checks control access to administrative and company features.',
      },
    ],
  },
  {
    slug: 'kaggle',
    name: 'Machine Learning Projects',
    summary: 'Two classification projects using pathology image patches and BBC news articles.',
    contribution: 'I built and evaluated model pipelines for computer vision and natural language processing and documented the experiments in notebooks.',
    technologies: ['Python', 'PyTorch', 'scikit-learn', 'TF-IDF'],
    caseStudy: [
      {
        title: 'Histopathologic Cancer Detection',
        text: 'I compared a custom convolutional network against a fine-tuned ResNet18 and used validation ROC AUC and F1 to evaluate the models on the notebook’s held-out split.',
      },
      {
        title: 'BBC News Classification',
        text: 'I turned article text into TF-IDF features, explored topic features, and compared logistic regression and an SVM with a soft-voting ensemble for the five-category classification task.',
      },
    ],
  },
];
