import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

export default handleProfileSignup(firstName, lastName, fileName){
	const [user, photo] = await Promise.all([
		signUpUser(firstName, lastName),
		uploadPhoto(fileName)]);
	return [{ status: 'fulfilled', value: userResult },
		{ status: 'fulfilled', value: photoResult }];
	catch (error) {
		return [
			{status: 'rejected', value: error }]
	}
}
