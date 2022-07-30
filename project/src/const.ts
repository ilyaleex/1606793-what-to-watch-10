export enum AppRoute {
  Main = '/',
  Genre = '/genre/:genre',
  SignIn = '/login',
  MyList = '/mylist',
  Films = '/films',
  FilmId = ':id/*',
  AddReview = '/films/:id/review',
  Player = '/player/:id',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
}

export const FILMS_COUNT_PER_STEP = 8;
