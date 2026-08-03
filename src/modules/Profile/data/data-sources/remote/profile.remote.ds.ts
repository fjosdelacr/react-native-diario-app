export interface ProfileRemoteDataSource {
  savePhoto: (photoUri: string) => Promise<void>;
}

export class ProfileRemoteDataSourceImpl implements ProfileRemoteDataSource {
  async savePhoto(photoUri: string): Promise<void> {
    try {
    } catch (error) {
      throw error;
    }
  }
}
