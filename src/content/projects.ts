type CaseStudySection = { title: string; text: string };

export type Project = {
  slug: 'wibo' | 'six-hops' | 'gravity-rules' | 'aidconnect' | 'kaggle';
  name: string;
  category: string;
  summary: string;
  contribution: string;
  technologies: string[];
  primaryLink?: { label: string; url: string };
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
    category: 'Conversational AI',
    summary: 'A voice AI interviewer for product designers to practice timed whiteboard challenges.',
    contribution: 'I built the full-stack practice flow, including real-time voice, an interactive whiteboard, and a post-interview debrief.',
    technologies: ['React', 'TypeScript', 'Node.js', 'WebSockets', 'PostgreSQL'],
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
    category: 'Multiplayer web game',
    summary: 'Connect two actors through shared films. Solve the daily challenge or race another player live.',
    contribution: 'I built the game, daily puzzles, multiplayer rooms, and the post-match view that shows both players the winner’s path.',
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
    category: 'Multiplayer arcade game',
    summary: 'A 90-second arena game where stealing the crown changes everyone’s gravity.',
    contribution: 'I built this minigame as an intermission for Six Hops. Players can compete against bots or create a room for friends.',
    technologies: ['Browser game', 'Solo bots', 'Multiplayer rooms'],
    primaryLink: { label: 'Play Gravity Rules', url: 'https://www.sixhopstotarget.com/gravity-rules' },
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
    category: 'Backend engineering internship',
    summary: 'Authentication and onboarding for an app that helps healthcare aides organize their work.',
    contribution: 'I worked on sign-up, login, Google OAuth, password recovery, and email notifications during my backend internship.',
    technologies: ['TypeScript', 'Node.js', 'Express', 'TypeORM', 'MySQL', 'EJS'],
    primaryLink: { label: 'View backend repo', url: `${githubUrl}/user_auth_hca` },
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
    category: 'Kaggle notebooks',
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
