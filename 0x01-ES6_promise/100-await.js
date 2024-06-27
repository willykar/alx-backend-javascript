import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const [uploadPhoto, createUser] = await Promise.all([uploadPhoto(), createUser()]);
    return { photo: uploadPhoto, user: createUser };
  } catch (err) {
    return { photo: null, user: null };
  }
}
