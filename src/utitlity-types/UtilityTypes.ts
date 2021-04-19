/**
 * Here record reperesents index types.
 * We can have keys as strings and values as any type.
 */
type ServerResponse = Record<string, any>;

const serverData: ServerResponse = {
  name: "Brad",
};

/**
 * Omit type will allow you to omit a particular property
 */
type UserDataRow = {
  id: number;
  name: string;
  email: string;
  addressId: string;
};

type UserDataRowWithoutAddressId = Omit<UserDataRow, "addressId">;

/**
 * We can use union type with omit like below
 */
type UserDataRowWithoutIds = Omit<UserDataRow, "id" | "addressId">;

/**
 * Pick<Type, Fields>: Pick is the opposite of Omit.
 * with pick you can pick specific fields from the type.
 */
type UserRowWithEmailOnly = Pick<UserDataRow, "email">;

//this is same as
type UserDataRowWithEmailOnly = {
  email: string;
};

//Pick multiple fields using union
type UserRowWithEmailAndNameOnly = Pick<UserDataRow, "name" | "email">;

/**
 * Partial type takes all the fields from existing type and converts them into optional fields for
 *
 */

type UserRowInserter = Partial<UserDataRow>;

//this will be similar to taking below type
type UserDataRowCustom = {
  id: number;
  name: string;
  email: string;
  addressId: string;
};

//And making all of its fields optional
type UserDataRowInsert = {
  id?: number | undefined;
  name?: string | undefined;
  email?: string | undefined;
  addressId?: string | undefined;
};
