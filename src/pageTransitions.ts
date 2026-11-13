type TransitionNavigation = Pick<NavigationActivation, 'from' | 'entry'>;

function shareWiBoVideo(transition: ViewTransition | null, navigation: TransitionNavigation | null) {
  const from = navigation?.from?.url;
  const to = navigation?.entry.url;
  if (!transition || !from || !to) return;

  const paths = [from, to].map((url) => new URL(url).pathname.replace(/\/+$/, ''));
  if (!paths.includes('') || !paths.includes('/work/wibo')) return;

  const video = document.querySelector<HTMLVideoElement>('[data-wibo-video]');
  const bounds = video?.getBoundingClientRect();
  if (!video || !bounds || bounds.top >= window.innerHeight || bounds.bottom <= 0) return;

  video.style.viewTransitionName = 'wibo-video';
  void transition.finished.then(() => {
    video.style.viewTransitionName = '';
  });
}

window.addEventListener('pageswap', (event) => {
  shareWiBoVideo(event.viewTransition, event.activation);
});

window.addEventListener('pagereveal', (event) => {
  const navigation = (window as Window & { navigation?: { activation: NavigationActivation | null } }).navigation;
  shareWiBoVideo(event.viewTransition, navigation?.activation ?? null);
});
