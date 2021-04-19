type StatusResponse = {
  status: number;
  isValid: boolean;
};

type User = {
  name: string;
};

type GetUserResponse = {
  user: User;
};

type ApiGetUserResponse = StatusResponse & GetUserResponse;

const response: ApiGetUserResponse = {
  status: 200,
  isValid: true,
  user: {
    name: "Sammy",
  },
};

type UserRoleRow = {
  role: string;
};

type UserRow = {
  name: string;
};

type UserWithRoleRow = UserRow & UserRoleRow;

const userWithRoleRow: UserWithRoleRow = {
  role: "Admin",
  name: "Jack",
};
