export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  LOGIN = 'login',
  ADMIN = 'admin',
  QUEUES = 'queues',
  REPORTS = 'reports',
  FORBIDDEN = 'forbidden',
  NOT_FOUND = 'not_found',
  DEPARTMENT = 'department',
  ADD_DOCTOR = 'add_doctor',
  ADDROOMPAGE = 'add_room_page',
  SETTINGSPAGE = 'setting_page',
}

// AddRoomPage
export const getRouteMain = () => '/';
export const getRouteNotFound = () => '/*';
export const getRouteAbout = () => '/about';
export const getRouteLogin = () => '/login';
export const getRouteAdmin = () => '/admin';
export const getRouteQueuesPage = () => '/queues';
export const getRouteForbidden = () => '/forbidden';
export const getRouteReportsPage = () => '/reports';
export const getRouteAddDoctor = () => '/add_doctor';
export const getRouteDepartment = () => '/department';
export const getRouteAddRoomPage = () => '/add_room_age';
export const getRouteSettingsPage = () => '/settings';

export const AppRouteByPathPattern: Record<string, AppRoutes> = {
  [getRouteMain()]: AppRoutes.MAIN,
  [getRouteAbout()]: AppRoutes.ABOUT,
  [getRouteLogin()]: AppRoutes.LOGIN,
  [getRouteAdmin()]: AppRoutes.ADMIN,
  [getRouteQueuesPage()]: AppRoutes.REPORTS,
  [getRouteNotFound()]: AppRoutes.NOT_FOUND,
  [getRouteReportsPage()]: AppRoutes.REPORTS,
  [getRouteForbidden()]: AppRoutes.FORBIDDEN,
  [getRouteAddDoctor()]: AppRoutes.ADDROOMPAGE,
  [getRouteDepartment()]: AppRoutes.DEPARTMENT,
  [getRouteAddRoomPage()]: AppRoutes.ADDROOMPAGE,
  [getRouteSettingsPage()]: AppRoutes.SETTINGSPAGE,
};
