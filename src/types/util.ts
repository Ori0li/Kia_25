type User = {
  id: number;
  name: string;
  email: string;
  password: string;
};

// 1.Pick 뽑기
type A = Pick<User, "id" | "name">;

// 2.Omit 삭제
type B = Omit<User, "password">;

// 3.Partial (모두 옵셔널)
type C = Partial<User>;

// 이름과 이메일이 옵셔널한 타입 만들기
type C1 = Partial<Pick<User, "name" | "email">>;

// 4.Required(모두 필수)
type D = Required<Partial<User>>;

// 5.Record
type Member = "User" | "Admin" | "SuperAdmin";
type E = Record<Member, number | string>;
type E1 = Partial<Record<keyof User, boolean>>;

// 6.Exclude,Extract
type F = Exclude<number | string | boolean, boolean>;
type G = Extract<number | string | boolean, boolean>;
