import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

async function handleProfileSignup(firstName, lastName, fileName) {
  try {
    const [user, photo] = await Promise.all([
      signUpUser(firstName, lastName),
      uploadPhoto(fileName)
    ]);

    return [
      { status: 'fulfilled', value: user },
      { status: 'fulfilled', value: photo }
    ];
  } catch (error) {
    return [
      { status: 'rejected', value: error }
    ];
  }
}

export default handleProfileSignup;
