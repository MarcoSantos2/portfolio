type CaseStudySection = { title: string; text: string };

export type Project = {
  slug: 'wibo' | 'six-hops';
  name: string;
  domain: string;
  url: string;
  category: string;
  summary: string;
  contribution: string;
  technologies: string[];
  caseStudy: CaseStudySection[];
};

export const projects: Project[] = [
  {
    slug: 'wibo',
    name: 'WiBo',
    domain: 'wibo.chat',
    url: 'https://wibo.chat/',
    category: 'Conversational AI',
    summary: 'A voice AI interviewer for product designers to practice timed whiteboard challenges.',
    contribution: 'I built the full-stack practice flow, including the real-time voice session, interactive whiteboard, and post-interview debrief.',
    technologies: ['React', 'TypeScript', 'Node.js', 'WebSockets', 'PostgreSQL'],
    caseStudy: [
      {
        title: 'Bring the whole interview into one place',
        text: 'Candidates need to sketch, think aloud, and answer follow-up questions while working against a clock. WiBo puts the canvas, interviewer, timer, and feedback into the same practice session.',
      },
      {
        title: 'Handle the difference between a pause and a turn',
        text: 'A candidate might go quiet while sketching and then finish the same thought. I worked on the browser audio flow and the server’s real-time voice bridge so we could tune when to respond and how to stop playback when the candidate interrupts.',
      },
      {
        title: 'Make the session useful after it ends',
        text: 'I built the session and debrief flow so candidates can revisit an interview and see where their answer was strong or where it needed more detail.',
      },
    ],
  },
  {
    slug: 'six-hops',
    name: 'Six Hops to Target',
    domain: 'sixhopstotarget.com',
    url: 'https://www.sixhopstotarget.com/',
    category: 'Multiplayer web game',
    summary: 'Connect two actors through shared films. Solve the daily challenge or race another player live.',
    contribution: 'I built the game, including daily puzzles, multiplayer rooms, and the post-match view that shows the winner’s path.',
    technologies: ['React', 'TypeScript', 'PostgreSQL', 'Firebase', 'Vercel'],
    caseStudy: [
      {
        title: 'Make every move understandable',
        text: 'Players alternate between actors and films. I built the game around that rule and made the finished path readable as a single chain, so you can see why each connection works.',
      },
      {
        title: 'Make the race work for both players',
        text: 'I added live rooms, random matchmaking, a shared timer, and reconnect handling. At the end of a match, both players can see the winning route through the actor and movie connections.',
      },
      {
        title: 'Give people a reason to come back',
        text: 'The daily challenge gives everyone the same actor pairing. I expanded the prompt rotation and verified that each curated pair has a valid connection within the game’s six-hop limit.',
      },
    ],
  },
];

export const githubUrl = 'https://github.com/MarcoSantos2';
