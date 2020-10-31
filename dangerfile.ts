import { danger, schedule, warn } from 'danger';

schedule(async () => {
  const lockfileAdded = (await danger.git.diffForFile('yarn.lock')).added;
  if (lockfileAdded.length > 0) {
    if (lockfileAdded.includes('+firebase@')) {
      warn(
        '[New firebase](https://firebase.google.com/support/release-notes/js) has been installed! Please sync up the version in `firebase-messaging-sw.js`'
      );
    }
  }
});
