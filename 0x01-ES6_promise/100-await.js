import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const [uploadPhoto, createUser] = await Promise.all([uploadPhoto(), createUser()]);
    return { uploadPhoto: photo, createUser: user };
  } catch (err) {
    return { photo: null, user: null };
  }
}
