import { useRouter } from "next/router";
import qs from "qs";

const QueryHook = () => {
  const router: any = useRouter();
  const query = qs.parse(router.query, { ignoreQueryPrefix: true });

  const QueryParams = query;

  const stringify = (obj: any) => qs.stringify(obj);

  const AddQueryParams = (params: any = {}) => {
    router.push(`?${stringify({ ...params })}`);
  };

  const MergeQueryParams = (params: any = {}) => {
    router.push(`?${stringify({ ...query, ...params })}`);
  };

  return { QueryParams, AddQueryParams, MergeQueryParams, router, stringify };
};

export default QueryHook;
