export const routes = [
  {
    path: '',
    loadChildren: () => import('@finastra/features/home').then((m) => m.HomeModule)
  },
];
