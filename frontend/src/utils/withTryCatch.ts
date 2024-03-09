import { toast } from "components/Toast";
import { CANCEL_REQUEST } from "constant";
import { withTryCatchType } from "types";

export const withTryCatch = async ({
  tryFunction,
  catchFunction,
  finallyFunction,
}: withTryCatchType) => {
  try {
    await tryFunction();
  } catch (e: any) {
    if (e.message !== CANCEL_REQUEST) toast.error(e.message);
    catchFunction?.(e);
  } finally {
    finallyFunction?.();
  }
};
