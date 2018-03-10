export function getAuthority() {
  return localStorage.getItem('antd-admin-authority') || 'admin';
}

export function setAuthority(authority) {
  return localStorage.setItem('antd-admin-authority', authority);
}
