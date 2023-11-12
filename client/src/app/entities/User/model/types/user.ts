export interface User {
    name: string;
    id: number;
    email: string;
    password: string;
    nativeLanguage: string;
    learningLanguage: string;
    currentLevel: string;
    learningGoals: string[];
    progress: number;
    completedLessons: string[];
    favoriteWords: string[];
    notes: string[];
}

export interface UserSchema {
    authData?: User
}