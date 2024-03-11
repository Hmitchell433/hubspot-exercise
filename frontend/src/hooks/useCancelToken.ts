import { useState, useEffect, DependencyList } from "react";

import { CancelToken } from "api/axios";
import { EffectType, TokenType } from "types";
import { CANCEL_REQUEST } from "constant";

const useCancelToken = (effect: EffectType, deps: DependencyList) => {
  const [token, setToken] = useState<TokenType>(null);

  useEffect(() => {
    if (token) token.cancel(CANCEL_REQUEST);
    const source = CancelToken.source();
    setToken(source);
    effect(source, setToken);
    // eslint-disable-next-line
  }, deps);
};

export default useCancelToken;
