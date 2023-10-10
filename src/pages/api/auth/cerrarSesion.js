export const GET = async ({ redirect, cookies }) => {
  cookies.delete("session", {
    path: "/",
  });
  return redirect("/login");
};
