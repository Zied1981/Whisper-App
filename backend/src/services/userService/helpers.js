export function userToView(user) {
  return {
    userId: user.userId,
    nickname: user.nickname,
    email: user.email,
  };
}
